import { i as __exportAll } from "./jsx-runtime-B5ErqjvK.js";
//#region node_modules/@firebase/util/dist/postinstall.mjs
var getDefaultsFromPostinstall = () => void 0;
//#endregion
//#region node_modules/@firebase/util/dist/index.esm.js
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var stringToByteArray$1 = function(str) {
	const out = [];
	let p = 0;
	for (let i = 0; i < str.length; i++) {
		let c = str.charCodeAt(i);
		if (c < 128) out[p++] = c;
		else if (c < 2048) {
			out[p++] = c >> 6 | 192;
			out[p++] = c & 63 | 128;
		} else if ((c & 64512) === 55296 && i + 1 < str.length && (str.charCodeAt(i + 1) & 64512) === 56320) {
			c = 65536 + ((c & 1023) << 10) + (str.charCodeAt(++i) & 1023);
			out[p++] = c >> 18 | 240;
			out[p++] = c >> 12 & 63 | 128;
			out[p++] = c >> 6 & 63 | 128;
			out[p++] = c & 63 | 128;
		} else {
			out[p++] = c >> 12 | 224;
			out[p++] = c >> 6 & 63 | 128;
			out[p++] = c & 63 | 128;
		}
	}
	return out;
};
/**
* Turns an array of numbers into the string given by the concatenation of the
* characters to which the numbers correspond.
* @param bytes Array of numbers representing characters.
* @return Stringification of the array.
*/
var byteArrayToString = function(bytes) {
	const out = [];
	let pos = 0, c = 0;
	while (pos < bytes.length) {
		const c1 = bytes[pos++];
		if (c1 < 128) out[c++] = String.fromCharCode(c1);
		else if (c1 > 191 && c1 < 224) {
			const c2 = bytes[pos++];
			out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
		} else if (c1 > 239 && c1 < 365) {
			const c2 = bytes[pos++];
			const c3 = bytes[pos++];
			const c4 = bytes[pos++];
			const u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 65536;
			out[c++] = String.fromCharCode(55296 + (u >> 10));
			out[c++] = String.fromCharCode(56320 + (u & 1023));
		} else {
			const c2 = bytes[pos++];
			const c3 = bytes[pos++];
			out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
		}
	}
	return out.join("");
};
var base64 = {
	/**
	* Maps bytes to characters.
	*/
	byteToCharMap_: null,
	/**
	* Maps characters to bytes.
	*/
	charToByteMap_: null,
	/**
	* Maps bytes to websafe characters.
	* @private
	*/
	byteToCharMapWebSafe_: null,
	/**
	* Maps websafe characters to bytes.
	* @private
	*/
	charToByteMapWebSafe_: null,
	/**
	* Our default alphabet, shared between
	* ENCODED_VALS and ENCODED_VALS_WEBSAFE
	*/
	ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
	/**
	* Our default alphabet. Value 64 (=) is special; it means "nothing."
	*/
	get ENCODED_VALS() {
		return this.ENCODED_VALS_BASE + "+/=";
	},
	/**
	* Our websafe alphabet.
	*/
	get ENCODED_VALS_WEBSAFE() {
		return this.ENCODED_VALS_BASE + "-_.";
	},
	/**
	* Whether this browser supports the atob and btoa functions. This extension
	* started at Mozilla but is now implemented by many browsers. We use the
	* ASSUME_* variables to avoid pulling in the full useragent detection library
	* but still allowing the standard per-browser compilations.
	*
	*/
	HAS_NATIVE_SUPPORT: typeof atob === "function",
	/**
	* Base64-encode an array of bytes.
	*
	* @param input An array of bytes (numbers with
	*     value in [0, 255]) to encode.
	* @param webSafe Boolean indicating we should use the
	*     alternative alphabet.
	* @return The base64 encoded string.
	*/
	encodeByteArray(input, webSafe) {
		if (!Array.isArray(input)) throw Error("encodeByteArray takes an array as a parameter");
		this.init_();
		const byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
		const output = [];
		for (let i = 0; i < input.length; i += 3) {
			const byte1 = input[i];
			const haveByte2 = i + 1 < input.length;
			const byte2 = haveByte2 ? input[i + 1] : 0;
			const haveByte3 = i + 2 < input.length;
			const byte3 = haveByte3 ? input[i + 2] : 0;
			const outByte1 = byte1 >> 2;
			const outByte2 = (byte1 & 3) << 4 | byte2 >> 4;
			let outByte3 = (byte2 & 15) << 2 | byte3 >> 6;
			let outByte4 = byte3 & 63;
			if (!haveByte3) {
				outByte4 = 64;
				if (!haveByte2) outByte3 = 64;
			}
			output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
		}
		return output.join("");
	},
	/**
	* Base64-encode a string.
	*
	* @param input A string to encode.
	* @param webSafe If true, we should use the
	*     alternative alphabet.
	* @return The base64 encoded string.
	*/
	encodeString(input, webSafe) {
		if (this.HAS_NATIVE_SUPPORT && !webSafe) return btoa(input);
		return this.encodeByteArray(stringToByteArray$1(input), webSafe);
	},
	/**
	* Base64-decode a string.
	*
	* @param input to decode.
	* @param webSafe True if we should use the
	*     alternative alphabet.
	* @return string representing the decoded value.
	*/
	decodeString(input, webSafe) {
		if (this.HAS_NATIVE_SUPPORT && !webSafe) return atob(input);
		return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
	},
	/**
	* Base64-decode a string.
	*
	* In base-64 decoding, groups of four characters are converted into three
	* bytes.  If the encoder did not apply padding, the input length may not
	* be a multiple of 4.
	*
	* In this case, the last group will have fewer than 4 characters, and
	* padding will be inferred.  If the group has one or two characters, it decodes
	* to one byte.  If the group has three characters, it decodes to two bytes.
	*
	* @param input Input to decode.
	* @param webSafe True if we should use the web-safe alphabet.
	* @return bytes representing the decoded value.
	*/
	decodeStringToByteArray(input, webSafe) {
		this.init_();
		const charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
		const output = [];
		for (let i = 0; i < input.length;) {
			const byte1 = charToByteMap[input.charAt(i++)];
			const byte2 = i < input.length ? charToByteMap[input.charAt(i)] : 0;
			++i;
			const byte3 = i < input.length ? charToByteMap[input.charAt(i)] : 64;
			++i;
			const byte4 = i < input.length ? charToByteMap[input.charAt(i)] : 64;
			++i;
			if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) throw new DecodeBase64StringError();
			const outByte1 = byte1 << 2 | byte2 >> 4;
			output.push(outByte1);
			if (byte3 !== 64) {
				const outByte2 = byte2 << 4 & 240 | byte3 >> 2;
				output.push(outByte2);
				if (byte4 !== 64) {
					const outByte3 = byte3 << 6 & 192 | byte4;
					output.push(outByte3);
				}
			}
		}
		return output;
	},
	/**
	* Lazy static initialization function. Called before
	* accessing any of the static map variables.
	* @private
	*/
	init_() {
		if (!this.byteToCharMap_) {
			this.byteToCharMap_ = {};
			this.charToByteMap_ = {};
			this.byteToCharMapWebSafe_ = {};
			this.charToByteMapWebSafe_ = {};
			for (let i = 0; i < this.ENCODED_VALS.length; i++) {
				this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
				this.charToByteMap_[this.byteToCharMap_[i]] = i;
				this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
				this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
				if (i >= this.ENCODED_VALS_BASE.length) {
					this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
					this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
				}
			}
		}
	}
};
/**
* An error encountered while decoding base64 string.
*/
var DecodeBase64StringError = class extends Error {
	constructor() {
		super(...arguments);
		this.name = "DecodeBase64StringError";
	}
};
/**
* URL-safe base64 encoding
*/
var base64Encode = function(str) {
	const utf8Bytes = stringToByteArray$1(str);
	return base64.encodeByteArray(utf8Bytes, true);
};
/**
* URL-safe base64 encoding (without "." padding in the end).
* e.g. Used in JSON Web Token (JWT) parts.
*/
var base64urlEncodeWithoutPadding = function(str) {
	return base64Encode(str).replace(/\./g, "");
};
/**
* URL-safe base64 decoding
*
* NOTE: DO NOT use the global atob() function - it does NOT support the
* base64Url variant encoding.
*
* @param str To be decoded
* @return Decoded result, if possible
*/
var base64Decode = function(str) {
	try {
		return base64.decodeString(str, true);
	} catch (e) {
		console.error("base64Decode failed: ", e);
	}
	return null;
};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Polyfill for `globalThis` object.
* @returns the `globalThis` object for the given environment.
* @public
*/
function getGlobal() {
	if (typeof self !== "undefined") return self;
	if (typeof window !== "undefined") return window;
	if (typeof global !== "undefined") return global;
	throw new Error("Unable to locate global object.");
}
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var getDefaultsFromGlobal = () => getGlobal().__FIREBASE_DEFAULTS__;
/**
* Attempt to read defaults from a JSON string provided to
* process(.)env(.)__FIREBASE_DEFAULTS__ or a JSON file whose path is in
* process(.)env(.)__FIREBASE_DEFAULTS_PATH__
* The dots are in parens because certain compilers (Vite?) cannot
* handle seeing that variable in comments.
* See https://github.com/firebase/firebase-js-sdk/issues/6838
*/
var getDefaultsFromEnvVariable = () => {
	if (typeof process === "undefined" || false) return;
	const defaultsJsonString = {}.__FIREBASE_DEFAULTS__;
	if (defaultsJsonString) return JSON.parse(defaultsJsonString);
};
var getDefaultsFromCookie = () => {
	if (typeof document === "undefined") return;
	let match;
	try {
		match = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
	} catch (e) {
		return;
	}
	const decoded = match && base64Decode(match[1]);
	return decoded && JSON.parse(decoded);
};
/**
* Get the __FIREBASE_DEFAULTS__ object. It checks in order:
* (1) if such an object exists as a property of `globalThis`
* (2) if such an object was provided on a shell environment variable
* (3) if such an object exists in a cookie
* @public
*/
var getDefaults = () => {
	try {
		return getDefaultsFromPostinstall() || getDefaultsFromGlobal() || getDefaultsFromEnvVariable() || getDefaultsFromCookie();
	} catch (e) {
		/**
		* Catch-all for being unable to get __FIREBASE_DEFAULTS__ due
		* to any environment case we have not accounted for. Log to
		* info instead of swallowing so we can find these unknown cases
		* and add paths for them if needed.
		*/
		console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
		return;
	}
};
/**
* Returns emulator host stored in the __FIREBASE_DEFAULTS__ object
* for the given product.
* @returns a URL host formatted like `127.0.0.1:9999` or `[::1]:4000` if available
* @public
*/
var getDefaultEmulatorHost = (productName) => getDefaults()?.emulatorHosts?.[productName];
/**
* Returns emulator hostname and port stored in the __FIREBASE_DEFAULTS__ object
* for the given product.
* @returns a pair of hostname and port like `["::1", 4000]` if available
* @public
*/
var getDefaultEmulatorHostnameAndPort = (productName) => {
	const host = getDefaultEmulatorHost(productName);
	if (!host) return;
	const separatorIndex = host.lastIndexOf(":");
	if (separatorIndex <= 0 || separatorIndex + 1 === host.length) throw new Error(`Invalid host ${host} with no separate hostname and port!`);
	const port = parseInt(host.substring(separatorIndex + 1), 10);
	if (host[0] === "[") return [host.substring(1, separatorIndex - 1), port];
	else return [host.substring(0, separatorIndex), port];
};
/**
* Returns Firebase app config stored in the __FIREBASE_DEFAULTS__ object.
* @public
*/
var getDefaultAppConfig = () => getDefaults()?.config;
/**
* Returns an experimental setting on the __FIREBASE_DEFAULTS__ object (properties
* prefixed by "_")
* @public
*/
var getExperimentalSetting = (name) => getDefaults()?.[`_${name}`];
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Deferred = class {
	constructor() {
		this.reject = () => {};
		this.resolve = () => {};
		this.promise = new Promise((resolve, reject) => {
			this.resolve = resolve;
			this.reject = reject;
		});
	}
	/**
	* Our API internals are not promisified and cannot because our callback APIs have subtle expectations around
	* invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
	* and returns a node-style callback which will resolve or reject the Deferred's promise.
	*/
	wrapCallback(callback) {
		return (error, value) => {
			if (error) this.reject(error);
			else this.resolve(value);
			if (typeof callback === "function") {
				this.promise.catch(() => {});
				if (callback.length === 1) callback(error);
				else callback(error, value);
			}
		};
	}
};
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function createMockUserToken(token, projectId) {
	if (token.uid) throw new Error("The \"uid\" field is no longer supported by mockUserToken. Please use \"sub\" instead for Firebase Auth User ID.");
	const header = {
		alg: "none",
		type: "JWT"
	};
	const project = projectId || "demo-project";
	const iat = token.iat || 0;
	const sub = token.sub || token.user_id;
	if (!sub) throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
	const payload = {
		iss: `https://securetoken.google.com/${project}`,
		aud: project,
		iat,
		exp: iat + 3600,
		auth_time: iat,
		sub,
		user_id: sub,
		firebase: {
			sign_in_provider: "custom",
			identities: {}
		},
		...token
	};
	return [
		base64urlEncodeWithoutPadding(JSON.stringify(header)),
		base64urlEncodeWithoutPadding(JSON.stringify(payload)),
		""
	].join(".");
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Returns navigator.userAgent string or '' if it's not defined.
* @return user agent string
*/
function getUA() {
	if (typeof navigator !== "undefined" && typeof navigator["userAgent"] === "string") return navigator["userAgent"];
	else return "";
}
/**
* Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
*
* Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
* in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
* wait for a callback.
*/
function isMobileCordova() {
	return typeof window !== "undefined" && !!(window["cordova"] || window["phonegap"] || window["PhoneGap"]) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
}
/**
* Detect Node.js.
*
* @return true if Node.js environment is detected or specified.
*/
function isNode() {
	const forceEnvironment = getDefaults()?.forceEnvironment;
	if (forceEnvironment === "node") return true;
	else if (forceEnvironment === "browser") return false;
	try {
		return Object.prototype.toString.call(global.process) === "[object process]";
	} catch (e) {
		return false;
	}
}
/**
* Detect Cloudflare Worker context.
*/
function isCloudflareWorker() {
	return typeof navigator !== "undefined" && navigator.userAgent === "Cloudflare-Workers";
}
function isBrowserExtension() {
	const runtime = typeof chrome === "object" ? chrome.runtime : typeof browser === "object" ? browser.runtime : void 0;
	return typeof runtime === "object" && runtime.id !== void 0;
}
/**
* Detect React Native.
*
* @return true if ReactNative environment is detected.
*/
function isReactNative() {
	return typeof navigator === "object" && navigator["product"] === "ReactNative";
}
/** Detects Internet Explorer. */
function isIE() {
	const ua = getUA();
	return ua.indexOf("MSIE ") >= 0 || ua.indexOf("Trident/") >= 0;
}
/** Returns true if we are running in Safari. */
function isSafari() {
	return !isNode() && !!navigator.userAgent && navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome");
}
/**
* This method checks if indexedDB is supported by current browser/service worker context
* @return true if indexedDB is supported by current browser/service worker context
*/
function isIndexedDBAvailable() {
	try {
		return typeof indexedDB === "object";
	} catch (e) {
		return false;
	}
}
/**
* This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
* if errors occur during the database open operation.
*
* @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
* private browsing)
*/
function validateIndexedDBOpenable() {
	return new Promise((resolve, reject) => {
		try {
			let preExist = true;
			const DB_CHECK_NAME = "validate-browser-context-for-indexeddb-analytics-module";
			const request = self.indexedDB.open(DB_CHECK_NAME);
			request.onsuccess = () => {
				request.result.close();
				if (!preExist) self.indexedDB.deleteDatabase(DB_CHECK_NAME);
				resolve(true);
			};
			request.onupgradeneeded = () => {
				preExist = false;
			};
			request.onerror = () => {
				reject(request.error?.message || "");
			};
		} catch (error) {
			reject(error);
		}
	});
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @fileoverview Standardized Firebase Error.
*
* Usage:
*
*   // TypeScript string literals for type-safe codes
*   type Err =
*     'unknown' |
*     'object-not-found'
*     ;
*
*   // Closure enum for type-safe error codes
*   // at-enum {string}
*   var Err = {
*     UNKNOWN: 'unknown',
*     OBJECT_NOT_FOUND: 'object-not-found',
*   }
*
*   let errors: Map<Err, string> = {
*     'generic-error': "Unknown error",
*     'file-not-found': "Could not find file: {$file}",
*   };
*
*   // Type-safe function - must pass a valid error code as param.
*   let error = new ErrorFactory<Err>('service', 'Service', errors);
*
*   ...
*   throw error.create(Err.GENERIC);
*   ...
*   throw error.create(Err.FILE_NOT_FOUND, {'file': fileName});
*   ...
*   // Service: Could not file file: foo.txt (service/file-not-found).
*
*   catch (e) {
*     assert(e.message === "Could not find file: foo.txt.");
*     if ((e as FirebaseError)?.code === 'service/file-not-found') {
*       console.log("Could not read file: " + e['file']);
*     }
*   }
*/
var ERROR_NAME = "FirebaseError";
var FirebaseError = class FirebaseError extends Error {
	constructor(code, message, customData) {
		super(message);
		this.code = code;
		this.customData = customData;
		/** The custom name for all FirebaseErrors. */
		this.name = ERROR_NAME;
		Object.setPrototypeOf(this, FirebaseError.prototype);
		if (Error.captureStackTrace) Error.captureStackTrace(this, ErrorFactory.prototype.create);
	}
};
var ErrorFactory = class {
	constructor(service, serviceName, errors) {
		this.service = service;
		this.serviceName = serviceName;
		this.errors = errors;
	}
	create(code, ...data) {
		const customData = data[0] || {};
		const fullCode = `${this.service}/${code}`;
		const template = this.errors[code];
		const message = template ? replaceTemplate(template, customData) : "Error";
		return new FirebaseError(fullCode, `${this.serviceName}: ${message} (${fullCode}).`, customData);
	}
};
function replaceTemplate(template, data) {
	return template.replace(PATTERN, (_, key) => {
		const value = data[key];
		return value != null ? String(value) : `<${key}?>`;
	});
}
var PATTERN = /\{\$([^}]+)}/g;
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function isEmpty(obj) {
	for (const key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
	return true;
}
/**
* Deep equal two objects. Support Arrays and Objects.
*/
function deepEqual(a, b) {
	if (a === b) return true;
	const aKeys = Object.keys(a);
	const bKeys = Object.keys(b);
	for (const k of aKeys) {
		if (!bKeys.includes(k)) return false;
		const aProp = a[k];
		const bProp = b[k];
		if (isObject(aProp) && isObject(bProp)) {
			if (!deepEqual(aProp, bProp)) return false;
		} else if (aProp !== bProp) return false;
	}
	for (const k of bKeys) if (!aKeys.includes(k)) return false;
	return true;
}
function isObject(thing) {
	return thing !== null && typeof thing === "object";
}
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
* params object (e.g. {arg: 'val', arg2: 'val2'})
* Note: You must prepend it with ? when adding it to a URL.
*/
function querystring(querystringParams) {
	const params = [];
	for (const [key, value] of Object.entries(querystringParams)) if (Array.isArray(value)) value.forEach((arrayVal) => {
		params.push(encodeURIComponent(key) + "=" + encodeURIComponent(arrayVal));
	});
	else params.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
	return params.length ? "&" + params.join("&") : "";
}
/**
* Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
* (e.g. {arg: 'val', arg2: 'val2'})
*/
function querystringDecode(querystring) {
	const obj = {};
	querystring.replace(/^\?/, "").split("&").forEach((token) => {
		if (token) {
			const [key, value] = token.split("=");
			obj[decodeURIComponent(key)] = decodeURIComponent(value);
		}
	});
	return obj;
}
/**
* Extract the query string part of a URL, including the leading question mark (if present).
*/
function extractQuerystring(url) {
	const queryStart = url.indexOf("?");
	if (!queryStart) return "";
	const fragmentStart = url.indexOf("#", queryStart);
	return url.substring(queryStart, fragmentStart > 0 ? fragmentStart : void 0);
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Helper to make a Subscribe function (just like Promise helps make a
* Thenable).
*
* @param executor Function which can make calls to a single Observer
*     as a proxy.
* @param onNoObservers Callback when count of Observers goes to zero.
*/
function createSubscribe(executor, onNoObservers) {
	const proxy = new ObserverProxy(executor, onNoObservers);
	return proxy.subscribe.bind(proxy);
}
/**
* Implement fan-out for any number of Observers attached via a subscribe
* function.
*/
var ObserverProxy = class {
	/**
	* @param executor Function which can make calls to a single Observer
	*     as a proxy.
	* @param onNoObservers Callback when count of Observers goes to zero.
	*/
	constructor(executor, onNoObservers) {
		this.observers = [];
		this.unsubscribes = [];
		this.observerCount = 0;
		this.task = Promise.resolve();
		this.finalized = false;
		this.onNoObservers = onNoObservers;
		this.task.then(() => {
			executor(this);
		}).catch((e) => {
			this.error(e);
		});
	}
	next(value) {
		this.forEachObserver((observer) => {
			observer.next(value);
		});
	}
	error(error) {
		this.forEachObserver((observer) => {
			observer.error(error);
		});
		this.close(error);
	}
	complete() {
		this.forEachObserver((observer) => {
			observer.complete();
		});
		this.close();
	}
	/**
	* Subscribe function that can be used to add an Observer to the fan-out list.
	*
	* - We require that no event is sent to a subscriber synchronously to their
	*   call to subscribe().
	*/
	subscribe(nextOrObserver, error, complete) {
		let observer;
		if (nextOrObserver === void 0 && error === void 0 && complete === void 0) throw new Error("Missing Observer.");
		if (implementsAnyMethods(nextOrObserver, [
			"next",
			"error",
			"complete"
		])) observer = nextOrObserver;
		else observer = {
			next: nextOrObserver,
			error,
			complete
		};
		if (observer.next === void 0) observer.next = noop;
		if (observer.error === void 0) observer.error = noop;
		if (observer.complete === void 0) observer.complete = noop;
		const unsub = this.unsubscribeOne.bind(this, this.observers.length);
		if (this.finalized) this.task.then(() => {
			try {
				if (this.finalError) observer.error(this.finalError);
				else observer.complete();
			} catch (e) {}
		});
		this.observers.push(observer);
		return unsub;
	}
	unsubscribeOne(i) {
		if (this.observers === void 0 || this.observers[i] === void 0) return;
		delete this.observers[i];
		this.observerCount -= 1;
		if (this.observerCount === 0 && this.onNoObservers !== void 0) this.onNoObservers(this);
	}
	forEachObserver(fn) {
		if (this.finalized) return;
		for (let i = 0; i < this.observers.length; i++) this.sendOne(i, fn);
	}
	sendOne(i, fn) {
		this.task.then(() => {
			if (this.observers !== void 0 && this.observers[i] !== void 0) try {
				fn(this.observers[i]);
			} catch (e) {
				if (typeof console !== "undefined" && console.error) console.error(e);
			}
		});
	}
	close(err) {
		if (this.finalized) return;
		this.finalized = true;
		if (err !== void 0) this.finalError = err;
		this.task.then(() => {
			this.observers = void 0;
			this.onNoObservers = void 0;
		});
	}
};
/**
* Return true if the object passed in implements any of the named methods.
*/
function implementsAnyMethods(obj, methods) {
	if (typeof obj !== "object" || obj === null) return false;
	for (const method of methods) if (method in obj && typeof obj[method] === "function") return true;
	return false;
}
function noop() {}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function getModularInstance(service) {
	if (service && service._delegate) return service._delegate;
	else return service;
}
/**
* @license
* Copyright 2025 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Checks whether host is a cloud workstation or not.
* @public
*/
function isCloudWorkstation(url) {
	try {
		return (url.startsWith("http://") || url.startsWith("https://") ? new URL(url).hostname : url).endsWith(".cloudworkstations.dev");
	} catch {
		return false;
	}
}
/**
* Makes a fetch request to the given server.
* Mostly used for forwarding cookies in Firebase Studio.
* @public
*/
async function pingServer(endpoint) {
	return (await fetch(endpoint, { credentials: "include" })).ok;
}
/**
* @license
* Copyright 2025 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//#endregion
//#region node_modules/@firebase/component/dist/esm/index.esm.js
/**
* Component for service name T, e.g. `auth`, `auth-internal`
*/
var Component = class {
	/**
	*
	* @param name The public service name, e.g. app, auth, firestore, database
	* @param instanceFactory Service factory responsible for creating the public interface
	* @param type whether the service provided by the component is public or private
	*/
	constructor(name, instanceFactory, type) {
		this.name = name;
		this.instanceFactory = instanceFactory;
		this.type = type;
		this.multipleInstances = false;
		/**
		* Properties to be added to the service namespace
		*/
		this.serviceProps = {};
		this.instantiationMode = "LAZY";
		this.onInstanceCreated = null;
	}
	setInstantiationMode(mode) {
		this.instantiationMode = mode;
		return this;
	}
	setMultipleInstances(multipleInstances) {
		this.multipleInstances = multipleInstances;
		return this;
	}
	setServiceProps(props) {
		this.serviceProps = props;
		return this;
	}
	setInstanceCreatedCallback(callback) {
		this.onInstanceCreated = callback;
		return this;
	}
};
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var DEFAULT_ENTRY_NAME$1 = "[DEFAULT]";
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Provider for instance for service name T, e.g. 'auth', 'auth-internal'
* NameServiceMapping[T] is an alias for the type of the instance
*/
var Provider = class {
	constructor(name, container) {
		this.name = name;
		this.container = container;
		this.component = null;
		this.instances = /* @__PURE__ */ new Map();
		this.instancesDeferred = /* @__PURE__ */ new Map();
		this.instancesOptions = /* @__PURE__ */ new Map();
		this.onInitCallbacks = /* @__PURE__ */ new Map();
	}
	/**
	* @param identifier A provider can provide multiple instances of a service
	* if this.component.multipleInstances is true.
	*/
	get(identifier) {
		const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
		if (!this.instancesDeferred.has(normalizedIdentifier)) {
			const deferred = new Deferred();
			this.instancesDeferred.set(normalizedIdentifier, deferred);
			if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) try {
				const instance = this.getOrInitializeService({ instanceIdentifier: normalizedIdentifier });
				if (instance) deferred.resolve(instance);
			} catch (e) {}
		}
		return this.instancesDeferred.get(normalizedIdentifier).promise;
	}
	getImmediate(options) {
		const normalizedIdentifier = this.normalizeInstanceIdentifier(options?.identifier);
		const optional = options?.optional ?? false;
		if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) try {
			return this.getOrInitializeService({ instanceIdentifier: normalizedIdentifier });
		} catch (e) {
			if (optional) return null;
			else throw e;
		}
		else if (optional) return null;
		else throw Error(`Service ${this.name} is not available`);
	}
	getComponent() {
		return this.component;
	}
	setComponent(component) {
		if (component.name !== this.name) throw Error(`Mismatching Component ${component.name} for Provider ${this.name}.`);
		if (this.component) throw Error(`Component for ${this.name} has already been provided`);
		this.component = component;
		if (!this.shouldAutoInitialize()) return;
		if (isComponentEager(component)) try {
			this.getOrInitializeService({ instanceIdentifier: DEFAULT_ENTRY_NAME$1 });
		} catch (e) {}
		for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
			const normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
			try {
				const instance = this.getOrInitializeService({ instanceIdentifier: normalizedIdentifier });
				instanceDeferred.resolve(instance);
			} catch (e) {}
		}
	}
	clearInstance(identifier = DEFAULT_ENTRY_NAME$1) {
		this.instancesDeferred.delete(identifier);
		this.instancesOptions.delete(identifier);
		this.instances.delete(identifier);
	}
	async delete() {
		const services = Array.from(this.instances.values());
		await Promise.all([...services.filter((service) => "INTERNAL" in service).map((service) => service.INTERNAL.delete()), ...services.filter((service) => "_delete" in service).map((service) => service._delete())]);
	}
	isComponentSet() {
		return this.component != null;
	}
	isInitialized(identifier = DEFAULT_ENTRY_NAME$1) {
		return this.instances.has(identifier);
	}
	getOptions(identifier = DEFAULT_ENTRY_NAME$1) {
		return this.instancesOptions.get(identifier) || {};
	}
	initialize(opts = {}) {
		const { options = {} } = opts;
		const normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
		if (this.isInitialized(normalizedIdentifier)) throw Error(`${this.name}(${normalizedIdentifier}) has already been initialized`);
		if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
		const instance = this.getOrInitializeService({
			instanceIdentifier: normalizedIdentifier,
			options
		});
		for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) if (normalizedIdentifier === this.normalizeInstanceIdentifier(instanceIdentifier)) instanceDeferred.resolve(instance);
		return instance;
	}
	/**
	*
	* @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
	* The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
	*
	* @param identifier An optional instance identifier
	* @returns a function to unregister the callback
	*/
	onInit(callback, identifier) {
		const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
		const existingCallbacks = this.onInitCallbacks.get(normalizedIdentifier) ?? /* @__PURE__ */ new Set();
		existingCallbacks.add(callback);
		this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
		const existingInstance = this.instances.get(normalizedIdentifier);
		if (existingInstance) callback(existingInstance, normalizedIdentifier);
		return () => {
			existingCallbacks.delete(callback);
		};
	}
	/**
	* Invoke onInit callbacks synchronously
	* @param instance the service instance`
	*/
	invokeOnInitCallbacks(instance, identifier) {
		const callbacks = this.onInitCallbacks.get(identifier);
		if (!callbacks) return;
		for (const callback of callbacks) try {
			callback(instance, identifier);
		} catch {}
	}
	getOrInitializeService({ instanceIdentifier, options = {} }) {
		let instance = this.instances.get(instanceIdentifier);
		if (!instance && this.component) {
			instance = this.component.instanceFactory(this.container, {
				instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
				options
			});
			this.instances.set(instanceIdentifier, instance);
			this.instancesOptions.set(instanceIdentifier, options);
			/**
			* Invoke onInit listeners.
			* Note this.component.onInstanceCreated is different, which is used by the component creator,
			* while onInit listeners are registered by consumers of the provider.
			*/
			this.invokeOnInitCallbacks(instance, instanceIdentifier);
			/**
			* Order is important
			* onInstanceCreated() should be called after this.instances.set(instanceIdentifier, instance); which
			* makes `isInitialized()` return true.
			*/
			if (this.component.onInstanceCreated) try {
				this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
			} catch {}
		}
		return instance || null;
	}
	normalizeInstanceIdentifier(identifier = DEFAULT_ENTRY_NAME$1) {
		if (this.component) return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME$1;
		else return identifier;
	}
	shouldAutoInitialize() {
		return !!this.component && this.component.instantiationMode !== "EXPLICIT";
	}
};
function normalizeIdentifierForFactory(identifier) {
	return identifier === DEFAULT_ENTRY_NAME$1 ? void 0 : identifier;
}
function isComponentEager(component) {
	return component.instantiationMode === "EAGER";
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
*/
var ComponentContainer = class {
	constructor(name) {
		this.name = name;
		this.providers = /* @__PURE__ */ new Map();
	}
	/**
	*
	* @param component Component being added
	* @param overwrite When a component with the same name has already been registered,
	* if overwrite is true: overwrite the existing component with the new component and create a new
	* provider with the new component. It can be useful in tests where you want to use different mocks
	* for different tests.
	* if overwrite is false: throw an exception
	*/
	addComponent(component) {
		const provider = this.getProvider(component.name);
		if (provider.isComponentSet()) throw new Error(`Component ${component.name} has already been registered with ${this.name}`);
		provider.setComponent(component);
	}
	addOrOverwriteComponent(component) {
		if (this.getProvider(component.name).isComponentSet()) this.providers.delete(component.name);
		this.addComponent(component);
	}
	/**
	* getProvider provides a type safe interface where it can only be called with a field name
	* present in NameServiceMapping interface.
	*
	* Firebase SDKs providing services should extend NameServiceMapping interface to register
	* themselves.
	*/
	getProvider(name) {
		if (this.providers.has(name)) return this.providers.get(name);
		const provider = new Provider(name, this);
		this.providers.set(name, provider);
		return provider;
	}
	getProviders() {
		return Array.from(this.providers.values());
	}
};
//#endregion
//#region node_modules/@firebase/logger/dist/esm/index.esm.js
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A container for all of the Logger instances
*/
var instances = [];
/**
* The JS SDK supports 5 log levels and also allows a user the ability to
* silence the logs altogether.
*
* The order is a follows:
* DEBUG < VERBOSE < INFO < WARN < ERROR
*
* All of the log types above the current log level will be captured (i.e. if
* you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
* `VERBOSE` logs will not)
*/
var LogLevel;
(function(LogLevel) {
	LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
	LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
	LogLevel[LogLevel["INFO"] = 2] = "INFO";
	LogLevel[LogLevel["WARN"] = 3] = "WARN";
	LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
	LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
var levelStringToEnum = {
	"debug": LogLevel.DEBUG,
	"verbose": LogLevel.VERBOSE,
	"info": LogLevel.INFO,
	"warn": LogLevel.WARN,
	"error": LogLevel.ERROR,
	"silent": LogLevel.SILENT
};
/**
* The default log level
*/
var defaultLogLevel = LogLevel.INFO;
/**
* By default, `console.debug` is not displayed in the developer console (in
* chrome). To avoid forcing users to have to opt-in to these logs twice
* (i.e. once for firebase, and once in the console), we are sending `DEBUG`
* logs to the `console.log` function.
*/
var ConsoleMethod = {
	[LogLevel.DEBUG]: "log",
	[LogLevel.VERBOSE]: "log",
	[LogLevel.INFO]: "info",
	[LogLevel.WARN]: "warn",
	[LogLevel.ERROR]: "error"
};
/**
* The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
* messages on to their corresponding console counterparts (if the log method
* is supported by the current log level)
*/
var defaultLogHandler = (instance, logType, ...args) => {
	if (logType < instance.logLevel) return;
	const now = (/* @__PURE__ */ new Date()).toISOString();
	const method = ConsoleMethod[logType];
	if (method) console[method](`[${now}]  ${instance.name}:`, ...args);
	else throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
};
var Logger = class {
	/**
	* Gives you an instance of a Logger to capture messages according to
	* Firebase's logging scheme.
	*
	* @param name The name that the logs will be associated with
	*/
	constructor(name) {
		this.name = name;
		/**
		* The log level of the given Logger instance.
		*/
		this._logLevel = defaultLogLevel;
		/**
		* The main (internal) log handler for the Logger instance.
		* Can be set to a new function in internal package code but not by user.
		*/
		this._logHandler = defaultLogHandler;
		/**
		* The optional, additional, user-defined log handler for the Logger instance.
		*/
		this._userLogHandler = null;
		/**
		* Capture the current instance for later use
		*/
		instances.push(this);
	}
	get logLevel() {
		return this._logLevel;
	}
	set logLevel(val) {
		if (!(val in LogLevel)) throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
		this._logLevel = val;
	}
	setLogLevel(val) {
		this._logLevel = typeof val === "string" ? levelStringToEnum[val] : val;
	}
	get logHandler() {
		return this._logHandler;
	}
	set logHandler(val) {
		if (typeof val !== "function") throw new TypeError("Value assigned to `logHandler` must be a function");
		this._logHandler = val;
	}
	get userLogHandler() {
		return this._userLogHandler;
	}
	set userLogHandler(val) {
		this._userLogHandler = val;
	}
	/**
	* The functions below are all based on the `console` interface
	*/
	debug(...args) {
		this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
		this._logHandler(this, LogLevel.DEBUG, ...args);
	}
	log(...args) {
		this._userLogHandler && this._userLogHandler(this, LogLevel.VERBOSE, ...args);
		this._logHandler(this, LogLevel.VERBOSE, ...args);
	}
	info(...args) {
		this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
		this._logHandler(this, LogLevel.INFO, ...args);
	}
	warn(...args) {
		this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
		this._logHandler(this, LogLevel.WARN, ...args);
	}
	error(...args) {
		this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
		this._logHandler(this, LogLevel.ERROR, ...args);
	}
};
//#endregion
//#region node_modules/idb/build/wrap-idb-value.js
var instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);
var idbProxyableTypes;
var cursorAdvanceMethods;
function getIdbProxyableTypes() {
	return idbProxyableTypes || (idbProxyableTypes = [
		IDBDatabase,
		IDBObjectStore,
		IDBIndex,
		IDBCursor,
		IDBTransaction
	]);
}
function getCursorAdvanceMethods() {
	return cursorAdvanceMethods || (cursorAdvanceMethods = [
		IDBCursor.prototype.advance,
		IDBCursor.prototype.continue,
		IDBCursor.prototype.continuePrimaryKey
	]);
}
var cursorRequestMap = /* @__PURE__ */ new WeakMap();
var transactionDoneMap = /* @__PURE__ */ new WeakMap();
var transactionStoreNamesMap = /* @__PURE__ */ new WeakMap();
var transformCache = /* @__PURE__ */ new WeakMap();
var reverseTransformCache = /* @__PURE__ */ new WeakMap();
function promisifyRequest(request) {
	const promise = new Promise((resolve, reject) => {
		const unlisten = () => {
			request.removeEventListener("success", success);
			request.removeEventListener("error", error);
		};
		const success = () => {
			resolve(wrap(request.result));
			unlisten();
		};
		const error = () => {
			reject(request.error);
			unlisten();
		};
		request.addEventListener("success", success);
		request.addEventListener("error", error);
	});
	promise.then((value) => {
		if (value instanceof IDBCursor) cursorRequestMap.set(value, request);
	}).catch(() => {});
	reverseTransformCache.set(promise, request);
	return promise;
}
function cacheDonePromiseForTransaction(tx) {
	if (transactionDoneMap.has(tx)) return;
	const done = new Promise((resolve, reject) => {
		const unlisten = () => {
			tx.removeEventListener("complete", complete);
			tx.removeEventListener("error", error);
			tx.removeEventListener("abort", error);
		};
		const complete = () => {
			resolve();
			unlisten();
		};
		const error = () => {
			reject(tx.error || new DOMException("AbortError", "AbortError"));
			unlisten();
		};
		tx.addEventListener("complete", complete);
		tx.addEventListener("error", error);
		tx.addEventListener("abort", error);
	});
	transactionDoneMap.set(tx, done);
}
var idbProxyTraps = {
	get(target, prop, receiver) {
		if (target instanceof IDBTransaction) {
			if (prop === "done") return transactionDoneMap.get(target);
			if (prop === "objectStoreNames") return target.objectStoreNames || transactionStoreNamesMap.get(target);
			if (prop === "store") return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
		}
		return wrap(target[prop]);
	},
	set(target, prop, value) {
		target[prop] = value;
		return true;
	},
	has(target, prop) {
		if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) return true;
		return prop in target;
	}
};
function replaceTraps(callback) {
	idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
	if (func === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)) return function(storeNames, ...args) {
		const tx = func.call(unwrap(this), storeNames, ...args);
		transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
		return wrap(tx);
	};
	if (getCursorAdvanceMethods().includes(func)) return function(...args) {
		func.apply(unwrap(this), args);
		return wrap(cursorRequestMap.get(this));
	};
	return function(...args) {
		return wrap(func.apply(unwrap(this), args));
	};
}
function transformCachableValue(value) {
	if (typeof value === "function") return wrapFunction(value);
	if (value instanceof IDBTransaction) cacheDonePromiseForTransaction(value);
	if (instanceOfAny(value, getIdbProxyableTypes())) return new Proxy(value, idbProxyTraps);
	return value;
}
function wrap(value) {
	if (value instanceof IDBRequest) return promisifyRequest(value);
	if (transformCache.has(value)) return transformCache.get(value);
	const newValue = transformCachableValue(value);
	if (newValue !== value) {
		transformCache.set(value, newValue);
		reverseTransformCache.set(newValue, value);
	}
	return newValue;
}
var unwrap = (value) => reverseTransformCache.get(value);
//#endregion
//#region node_modules/idb/build/index.js
/**
* Open a database.
*
* @param name Name of the database.
* @param version Schema version.
* @param callbacks Additional callbacks.
*/
function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
	const request = indexedDB.open(name, version);
	const openPromise = wrap(request);
	if (upgrade) request.addEventListener("upgradeneeded", (event) => {
		upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
	});
	if (blocked) request.addEventListener("blocked", (event) => blocked(event.oldVersion, event.newVersion, event));
	openPromise.then((db) => {
		if (terminated) db.addEventListener("close", () => terminated());
		if (blocking) db.addEventListener("versionchange", (event) => blocking(event.oldVersion, event.newVersion, event));
	}).catch(() => {});
	return openPromise;
}
var readMethods = [
	"get",
	"getKey",
	"getAll",
	"getAllKeys",
	"count"
];
var writeMethods = [
	"put",
	"add",
	"delete",
	"clear"
];
var cachedMethods = /* @__PURE__ */ new Map();
function getMethod(target, prop) {
	if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) return;
	if (cachedMethods.get(prop)) return cachedMethods.get(prop);
	const targetFuncName = prop.replace(/FromIndex$/, "");
	const useIndex = prop !== targetFuncName;
	const isWrite = writeMethods.includes(targetFuncName);
	if (!(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) return;
	const method = async function(storeName, ...args) {
		const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
		let target = tx.store;
		if (useIndex) target = target.index(args.shift());
		return (await Promise.all([target[targetFuncName](...args), isWrite && tx.done]))[0];
	};
	cachedMethods.set(prop, method);
	return method;
}
replaceTraps((oldTraps) => ({
	...oldTraps,
	get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
	has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
}));
//#endregion
//#region node_modules/@firebase/app/dist/esm/index.esm.js
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var PlatformLoggerServiceImpl = class {
	constructor(container) {
		this.container = container;
	}
	getPlatformInfoString() {
		return this.container.getProviders().map((provider) => {
			if (isVersionServiceProvider(provider)) {
				const service = provider.getImmediate();
				return `${service.library}/${service.version}`;
			} else return null;
		}).filter((logString) => logString).join(" ");
	}
};
/**
*
* @param provider check if this provider provides a VersionService
*
* NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
* provides VersionService. The provider is not necessarily a 'app-version'
* provider.
*/
function isVersionServiceProvider(provider) {
	return provider.getComponent()?.type === "VERSION";
}
var name$q = "@firebase/app";
var version$1 = "0.15.0";
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var logger = new Logger("@firebase/app");
var name$p = "@firebase/app-compat";
var name$o = "@firebase/analytics-compat";
var name$n = "@firebase/analytics";
var name$m = "@firebase/app-check-compat";
var name$l = "@firebase/app-check";
var name$k = "@firebase/auth";
var name$j = "@firebase/auth-compat";
var name$i = "@firebase/database";
var name$h = "@firebase/data-connect";
var name$g = "@firebase/database-compat";
var name$f = "@firebase/functions";
var name$e = "@firebase/functions-compat";
var name$d = "@firebase/installations";
var name$c = "@firebase/installations-compat";
var name$b = "@firebase/messaging";
var name$a = "@firebase/messaging-compat";
var name$9 = "@firebase/performance";
var name$8 = "@firebase/performance-compat";
var name$7 = "@firebase/remote-config";
var name$6 = "@firebase/remote-config-compat";
var name$5 = "@firebase/storage";
var name$4 = "@firebase/storage-compat";
var name$3 = "@firebase/firestore";
var name$2 = "@firebase/ai";
var name$1 = "@firebase/firestore-compat";
var name$10 = "firebase";
var version$2 = "12.15.0";
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* The default app name
*
* @internal
*/
var DEFAULT_ENTRY_NAME = "[DEFAULT]";
var PLATFORM_LOG_STRING = {
	[name$q]: "fire-core",
	[name$p]: "fire-core-compat",
	[name$n]: "fire-analytics",
	[name$o]: "fire-analytics-compat",
	[name$l]: "fire-app-check",
	[name$m]: "fire-app-check-compat",
	[name$k]: "fire-auth",
	[name$j]: "fire-auth-compat",
	[name$i]: "fire-rtdb",
	[name$h]: "fire-data-connect",
	[name$g]: "fire-rtdb-compat",
	[name$f]: "fire-fn",
	[name$e]: "fire-fn-compat",
	[name$d]: "fire-iid",
	[name$c]: "fire-iid-compat",
	[name$b]: "fire-fcm",
	[name$a]: "fire-fcm-compat",
	[name$9]: "fire-perf",
	[name$8]: "fire-perf-compat",
	[name$7]: "fire-rc",
	[name$6]: "fire-rc-compat",
	[name$5]: "fire-gcs",
	[name$4]: "fire-gcs-compat",
	[name$3]: "fire-fst",
	[name$1]: "fire-fst-compat",
	[name$2]: "fire-vertex",
	"fire-js": "fire-js",
	[name$10]: "fire-js-all"
};
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @internal
*/
var _apps = /* @__PURE__ */ new Map();
/**
* @internal
*/
var _serverApps = /* @__PURE__ */ new Map();
/**
* Registered components.
*
* @internal
*/
var _components = /* @__PURE__ */ new Map();
/**
* @param component - the component being added to this app's container
*
* @internal
*/
function _addComponent(app, component) {
	try {
		app.container.addComponent(component);
	} catch (e) {
		logger.debug(`Component ${component.name} failed to register with FirebaseApp ${app.name}`, e);
	}
}
/**
*
* @param component - the component to register
* @returns whether or not the component is registered successfully
*
* @internal
*/
function _registerComponent(component) {
	const componentName = component.name;
	if (_components.has(componentName)) {
		logger.debug(`There were multiple attempts to register component ${componentName}.`);
		return false;
	}
	_components.set(componentName, component);
	for (const app of _apps.values()) _addComponent(app, component);
	for (const serverApp of _serverApps.values()) _addComponent(serverApp, component);
	return true;
}
/**
*
* @param app - FirebaseApp instance
* @param name - service name
*
* @returns the provider for the service with the matching name
*
* @internal
*/
function _getProvider(app, name) {
	const heartbeatController = app.container.getProvider("heartbeat").getImmediate({ optional: true });
	if (heartbeatController) heartbeatController.triggerHeartbeat();
	return app.container.getProvider(name);
}
/**
*
* @param obj - an object of type FirebaseApp.
*
* @returns true if the provided object is of type FirebaseServerAppImpl.
*
* @internal
*/
function _isFirebaseServerApp(obj) {
	if (obj === null || obj === void 0) return false;
	return obj.settings !== void 0;
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ERROR_FACTORY = new ErrorFactory("app", "Firebase", {
	["no-app"]: "No Firebase App '{$appName}' has been created - call initializeApp() first",
	["bad-app-name"]: "Illegal App name: '{$appName}'",
	["duplicate-app"]: "Firebase App named '{$appName}' already exists with different options or config",
	["app-deleted"]: "Firebase App named '{$appName}' already deleted",
	["server-app-deleted"]: "Firebase Server App has been deleted",
	["no-options"]: "Need to provide options, when not being deployed to hosting via source.",
	["invalid-app-argument"]: "firebase.{$appName}() takes either no argument or a Firebase App instance.",
	["invalid-log-argument"]: "First argument to `onLog` must be null or a function.",
	["idb-open"]: "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
	["idb-get"]: "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
	["idb-set"]: "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
	["idb-delete"]: "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
	["finalization-registry-not-supported"]: "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
	["invalid-server-app-environment"]: "FirebaseServerApp is not for use in browser environments."
});
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var FirebaseAppImpl = class {
	constructor(options, config, container) {
		this._isDeleted = false;
		this._options = { ...options };
		this._config = { ...config };
		this._name = config.name;
		this._automaticDataCollectionEnabled = config.automaticDataCollectionEnabled;
		this._container = container;
		this.container.addComponent(new Component("app", () => this, "PUBLIC"));
	}
	get automaticDataCollectionEnabled() {
		this.checkDestroyed();
		return this._automaticDataCollectionEnabled;
	}
	set automaticDataCollectionEnabled(val) {
		this.checkDestroyed();
		this._automaticDataCollectionEnabled = val;
	}
	get name() {
		this.checkDestroyed();
		return this._name;
	}
	get options() {
		this.checkDestroyed();
		return this._options;
	}
	get config() {
		this.checkDestroyed();
		return this._config;
	}
	get container() {
		return this._container;
	}
	get isDeleted() {
		return this._isDeleted;
	}
	set isDeleted(val) {
		this._isDeleted = val;
	}
	/**
	* This function will throw an Error if the App has already been deleted -
	* use before performing API actions on the App.
	*/
	checkDestroyed() {
		if (this.isDeleted) throw ERROR_FACTORY.create("app-deleted", { appName: this._name });
	}
};
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* The current SDK version.
*
* @public
*/
var SDK_VERSION = version$2;
function initializeApp(_options, rawConfig = {}) {
	let options = _options;
	if (typeof rawConfig !== "object") rawConfig = { name: rawConfig };
	const config = {
		name: DEFAULT_ENTRY_NAME,
		automaticDataCollectionEnabled: true,
		...rawConfig
	};
	const name = config.name;
	if (typeof name !== "string" || !name) throw ERROR_FACTORY.create("bad-app-name", { appName: String(name) });
	options || (options = getDefaultAppConfig());
	if (!options) throw ERROR_FACTORY.create("no-options");
	const existingApp = _apps.get(name);
	if (existingApp) if (deepEqual(options, existingApp.options) && deepEqual(config, existingApp.config)) return existingApp;
	else throw ERROR_FACTORY.create("duplicate-app", { appName: name });
	const container = new ComponentContainer(name);
	for (const component of _components.values()) container.addComponent(component);
	const newApp = new FirebaseAppImpl(options, config, container);
	_apps.set(name, newApp);
	return newApp;
}
/**
* Retrieves a {@link @firebase/app#FirebaseApp} instance.
*
* When called with no arguments, the default app is returned. When an app name
* is provided, the app corresponding to that name is returned.
*
* An exception is thrown if the app being retrieved has not yet been
* initialized.
*
* @example
* ```javascript
* // Return the default app
* const app = getApp();
* ```
*
* @example
* ```javascript
* // Return a named app
* const otherApp = getApp("otherApp");
* ```
*
* @param name - Optional name of the app to return. If no name is
*   provided, the default is `"[DEFAULT]"`.
*
* @returns The app corresponding to the provided app name.
*   If no app name is provided, the default app is returned.
*
* @public
*/
function getApp(name = DEFAULT_ENTRY_NAME) {
	const app = _apps.get(name);
	if (!app && name === "[DEFAULT]" && getDefaultAppConfig()) return initializeApp();
	if (!app) throw ERROR_FACTORY.create("no-app", { appName: name });
	return app;
}
/**
* Registers a library's name and version for platform logging purposes.
* @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
* @param version - Current version of that library.
* @param variant - Bundle variant, e.g., node, rn, etc.
*
* @public
*/
function registerVersion(libraryKeyOrName, version, variant) {
	let library = PLATFORM_LOG_STRING[libraryKeyOrName] ?? libraryKeyOrName;
	if (variant) library += `-${variant}`;
	const libraryMismatch = library.match(/\s|\//);
	const versionMismatch = version.match(/\s|\//);
	if (libraryMismatch || versionMismatch) {
		const warning = [`Unable to register library "${library}" with version "${version}":`];
		if (libraryMismatch) warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
		if (libraryMismatch && versionMismatch) warning.push("and");
		if (versionMismatch) warning.push(`version name "${version}" contains illegal characters (whitespace or "/")`);
		logger.warn(warning.join(" "));
		return;
	}
	_registerComponent(new Component(`${library}-version`, () => ({
		library,
		version
	}), "VERSION"));
}
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var DB_NAME = "firebase-heartbeat-database";
var DB_VERSION = 1;
var STORE_NAME = "firebase-heartbeat-store";
var dbPromise = null;
function getDbPromise() {
	if (!dbPromise) dbPromise = openDB(DB_NAME, DB_VERSION, { upgrade: (db, oldVersion) => {
		switch (oldVersion) {
			case 0: try {
				db.createObjectStore(STORE_NAME);
			} catch (e) {
				console.warn(e);
			}
		}
	} }).catch((e) => {
		throw ERROR_FACTORY.create("idb-open", { originalErrorMessage: e.message });
	});
	return dbPromise;
}
async function readHeartbeatsFromIndexedDB(app) {
	try {
		const tx = (await getDbPromise()).transaction(STORE_NAME);
		const result = await tx.objectStore(STORE_NAME).get(computeKey(app));
		await tx.done;
		return result;
	} catch (e) {
		if (e instanceof FirebaseError) logger.warn(e.message);
		else {
			const idbGetError = ERROR_FACTORY.create("idb-get", { originalErrorMessage: e?.message });
			logger.warn(idbGetError.message);
		}
	}
}
async function writeHeartbeatsToIndexedDB(app, heartbeatObject) {
	try {
		const tx = (await getDbPromise()).transaction(STORE_NAME, "readwrite");
		await tx.objectStore(STORE_NAME).put(heartbeatObject, computeKey(app));
		await tx.done;
	} catch (e) {
		if (e instanceof FirebaseError) logger.warn(e.message);
		else {
			const idbGetError = ERROR_FACTORY.create("idb-set", { originalErrorMessage: e?.message });
			logger.warn(idbGetError.message);
		}
	}
}
function computeKey(app) {
	return `${app.name}!${app.options.appId}`;
}
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var MAX_HEADER_BYTES = 1024;
var MAX_NUM_STORED_HEARTBEATS = 30;
var HeartbeatServiceImpl = class {
	constructor(container) {
		this.container = container;
		/**
		* In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
		* the header string.
		* Stores one record per date. This will be consolidated into the standard
		* format of one record per user agent string before being sent as a header.
		* Populated from indexedDB when the controller is instantiated and should
		* be kept in sync with indexedDB.
		* Leave public for easier testing.
		*/
		this._heartbeatsCache = null;
		const app = this.container.getProvider("app").getImmediate();
		this._storage = new HeartbeatStorageImpl(app);
		this._heartbeatsCachePromise = this._storage.read().then((result) => {
			this._heartbeatsCache = result;
			return result;
		});
	}
	/**
	* Called to report a heartbeat. The function will generate
	* a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
	* to IndexedDB.
	* Note that we only store one heartbeat per day. So if a heartbeat for today is
	* already logged, subsequent calls to this function in the same day will be ignored.
	*/
	async triggerHeartbeat() {
		try {
			const agent = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString();
			const date = getUTCDateString();
			if (this._heartbeatsCache?.heartbeats == null) {
				this._heartbeatsCache = await this._heartbeatsCachePromise;
				if (this._heartbeatsCache?.heartbeats == null) return;
			}
			if (this._heartbeatsCache.lastSentHeartbeatDate === date || this._heartbeatsCache.heartbeats.some((singleDateHeartbeat) => singleDateHeartbeat.date === date)) return;
			else {
				this._heartbeatsCache.heartbeats.push({
					date,
					agent
				});
				if (this._heartbeatsCache.heartbeats.length > MAX_NUM_STORED_HEARTBEATS) {
					const earliestHeartbeatIdx = getEarliestHeartbeatIdx(this._heartbeatsCache.heartbeats);
					this._heartbeatsCache.heartbeats.splice(earliestHeartbeatIdx, 1);
				}
			}
			return this._storage.overwrite(this._heartbeatsCache);
		} catch (e) {
			logger.warn(e);
		}
	}
	/**
	* Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
	* It also clears all heartbeats from memory as well as in IndexedDB.
	*
	* NOTE: Consuming product SDKs should not send the header if this method
	* returns an empty string.
	*/
	async getHeartbeatsHeader() {
		try {
			if (this._heartbeatsCache === null) await this._heartbeatsCachePromise;
			if (this._heartbeatsCache?.heartbeats == null || this._heartbeatsCache.heartbeats.length === 0) return "";
			const date = getUTCDateString();
			const { heartbeatsToSend, unsentEntries } = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats);
			const headerString = base64urlEncodeWithoutPadding(JSON.stringify({
				version: 2,
				heartbeats: heartbeatsToSend
			}));
			this._heartbeatsCache.lastSentHeartbeatDate = date;
			if (unsentEntries.length > 0) {
				this._heartbeatsCache.heartbeats = unsentEntries;
				await this._storage.overwrite(this._heartbeatsCache);
			} else {
				this._heartbeatsCache.heartbeats = [];
				this._storage.overwrite(this._heartbeatsCache);
			}
			return headerString;
		} catch (e) {
			logger.warn(e);
			return "";
		}
	}
};
function getUTCDateString() {
	return (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
}
function extractHeartbeatsForHeader(heartbeatsCache, maxSize = MAX_HEADER_BYTES) {
	const heartbeatsToSend = [];
	let unsentEntries = heartbeatsCache.slice();
	for (const singleDateHeartbeat of heartbeatsCache) {
		const heartbeatEntry = heartbeatsToSend.find((hb) => hb.agent === singleDateHeartbeat.agent);
		if (!heartbeatEntry) {
			heartbeatsToSend.push({
				agent: singleDateHeartbeat.agent,
				dates: [singleDateHeartbeat.date]
			});
			if (countBytes(heartbeatsToSend) > maxSize) {
				heartbeatsToSend.pop();
				break;
			}
		} else {
			heartbeatEntry.dates.push(singleDateHeartbeat.date);
			if (countBytes(heartbeatsToSend) > maxSize) {
				heartbeatEntry.dates.pop();
				break;
			}
		}
		unsentEntries = unsentEntries.slice(1);
	}
	return {
		heartbeatsToSend,
		unsentEntries
	};
}
var HeartbeatStorageImpl = class {
	constructor(app) {
		this.app = app;
		this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
	}
	async runIndexedDBEnvironmentCheck() {
		if (!isIndexedDBAvailable()) return false;
		else return validateIndexedDBOpenable().then(() => true).catch(() => false);
	}
	/**
	* Read all heartbeats.
	*/
	async read() {
		if (!await this._canUseIndexedDBPromise) return { heartbeats: [] };
		else {
			const idbHeartbeatObject = await readHeartbeatsFromIndexedDB(this.app);
			if (idbHeartbeatObject?.heartbeats) return idbHeartbeatObject;
			else return { heartbeats: [] };
		}
	}
	async overwrite(heartbeatsObject) {
		if (!await this._canUseIndexedDBPromise) return;
		else {
			const existingHeartbeatsObject = await this.read();
			return writeHeartbeatsToIndexedDB(this.app, {
				lastSentHeartbeatDate: heartbeatsObject.lastSentHeartbeatDate ?? existingHeartbeatsObject.lastSentHeartbeatDate,
				heartbeats: heartbeatsObject.heartbeats
			});
		}
	}
	async add(heartbeatsObject) {
		if (!await this._canUseIndexedDBPromise) return;
		else {
			const existingHeartbeatsObject = await this.read();
			return writeHeartbeatsToIndexedDB(this.app, {
				lastSentHeartbeatDate: heartbeatsObject.lastSentHeartbeatDate ?? existingHeartbeatsObject.lastSentHeartbeatDate,
				heartbeats: [...existingHeartbeatsObject.heartbeats, ...heartbeatsObject.heartbeats]
			});
		}
	}
};
/**
* Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
* in a platform logging header JSON object, stringified, and converted
* to base 64.
*/
function countBytes(heartbeatsCache) {
	return base64urlEncodeWithoutPadding(JSON.stringify({
		version: 2,
		heartbeats: heartbeatsCache
	})).length;
}
/**
* Returns the index of the heartbeat with the earliest date.
* If the heartbeats array is empty, -1 is returned.
*/
function getEarliestHeartbeatIdx(heartbeats) {
	if (heartbeats.length === 0) return -1;
	let earliestHeartbeatIdx = 0;
	let earliestHeartbeatDate = heartbeats[0].date;
	for (let i = 1; i < heartbeats.length; i++) if (heartbeats[i].date < earliestHeartbeatDate) {
		earliestHeartbeatDate = heartbeats[i].date;
		earliestHeartbeatIdx = i;
	}
	return earliestHeartbeatIdx;
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function registerCoreComponents(variant) {
	_registerComponent(new Component("platform-logger", (container) => new PlatformLoggerServiceImpl(container), "PRIVATE"));
	_registerComponent(new Component("heartbeat", (container) => new HeartbeatServiceImpl(container), "PRIVATE"));
	registerVersion(name$q, version$1, variant);
	registerVersion(name$q, version$1, "esm2020");
	registerVersion("fire-js", "");
}
/**
* Firebase App
*
* @remarks This package coordinates the communication between the different Firebase components
* @packageDocumentation
*/
registerCoreComponents("");
//#endregion
//#region node_modules/@firebase/storage/dist/index.esm.js
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @fileoverview Constants used in the Firebase Storage library.
*/
/**
* Domain name for firebase storage.
*/
var DEFAULT_HOST = "firebasestorage.googleapis.com";
/**
* The key in Firebase config json for the storage bucket.
*/
var CONFIG_STORAGE_BUCKET_KEY = "storageBucket";
/**
* 2 minutes
*
* The timeout for all operations except upload.
*/
var DEFAULT_MAX_OPERATION_RETRY_TIME = 120 * 1e3;
/**
* 10 minutes
*
* The timeout for upload.
*/
var DEFAULT_MAX_UPLOAD_RETRY_TIME = 600 * 1e3;
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* An error returned by the Firebase Storage SDK.
* @public
*/
var StorageError = class StorageError extends FirebaseError {
	/**
	* @param code - A `StorageErrorCode` string to be prefixed with 'storage/' and
	*  added to the end of the message.
	* @param message  - Error message.
	* @param status_ - Corresponding HTTP Status Code
	*/
	constructor(code, message, status_ = 0) {
		super(prependCode(code), `Firebase Storage: ${message} (${prependCode(code)})`);
		this.status_ = status_;
		/**
		* Stores custom error data unique to the `StorageError`.
		*/
		this.customData = { serverResponse: null };
		this._baseMessage = this.message;
		Object.setPrototypeOf(this, StorageError.prototype);
	}
	get status() {
		return this.status_;
	}
	set status(status) {
		this.status_ = status;
	}
	/**
	* Compares a `StorageErrorCode` against this error's code, filtering out the prefix.
	*/
	_codeEquals(code) {
		return prependCode(code) === this.code;
	}
	/**
	* Optional response message that was added by the server.
	*/
	get serverResponse() {
		return this.customData.serverResponse;
	}
	set serverResponse(serverResponse) {
		this.customData.serverResponse = serverResponse;
		if (this.customData.serverResponse) this.message = `${this._baseMessage}\n${this.customData.serverResponse}`;
		else this.message = this._baseMessage;
	}
};
/**
* @public
* Error codes that can be attached to `StorageError` objects.
*/
var StorageErrorCode;
(function(StorageErrorCode) {
	StorageErrorCode["UNKNOWN"] = "unknown";
	StorageErrorCode["OBJECT_NOT_FOUND"] = "object-not-found";
	StorageErrorCode["BUCKET_NOT_FOUND"] = "bucket-not-found";
	StorageErrorCode["PROJECT_NOT_FOUND"] = "project-not-found";
	StorageErrorCode["QUOTA_EXCEEDED"] = "quota-exceeded";
	StorageErrorCode["UNAUTHENTICATED"] = "unauthenticated";
	StorageErrorCode["UNAUTHORIZED"] = "unauthorized";
	StorageErrorCode["UNAUTHORIZED_APP"] = "unauthorized-app";
	StorageErrorCode["RETRY_LIMIT_EXCEEDED"] = "retry-limit-exceeded";
	StorageErrorCode["INVALID_CHECKSUM"] = "invalid-checksum";
	StorageErrorCode["CANCELED"] = "canceled";
	StorageErrorCode["INVALID_EVENT_NAME"] = "invalid-event-name";
	StorageErrorCode["INVALID_URL"] = "invalid-url";
	StorageErrorCode["INVALID_DEFAULT_BUCKET"] = "invalid-default-bucket";
	StorageErrorCode["NO_DEFAULT_BUCKET"] = "no-default-bucket";
	StorageErrorCode["CANNOT_SLICE_BLOB"] = "cannot-slice-blob";
	StorageErrorCode["SERVER_FILE_WRONG_SIZE"] = "server-file-wrong-size";
	StorageErrorCode["NO_DOWNLOAD_URL"] = "no-download-url";
	StorageErrorCode["INVALID_ARGUMENT"] = "invalid-argument";
	StorageErrorCode["INVALID_ARGUMENT_COUNT"] = "invalid-argument-count";
	StorageErrorCode["APP_DELETED"] = "app-deleted";
	StorageErrorCode["INVALID_ROOT_OPERATION"] = "invalid-root-operation";
	StorageErrorCode["INVALID_FORMAT"] = "invalid-format";
	StorageErrorCode["INTERNAL_ERROR"] = "internal-error";
	StorageErrorCode["UNSUPPORTED_ENVIRONMENT"] = "unsupported-environment";
})(StorageErrorCode || (StorageErrorCode = {}));
function prependCode(code) {
	return "storage/" + code;
}
function unknown() {
	return new StorageError(StorageErrorCode.UNKNOWN, "An unknown error occurred, please check the error payload for server response.");
}
function objectNotFound(path) {
	return new StorageError(StorageErrorCode.OBJECT_NOT_FOUND, "Object '" + path + "' does not exist.");
}
function quotaExceeded(bucket) {
	return new StorageError(StorageErrorCode.QUOTA_EXCEEDED, "Quota for bucket '" + bucket + "' exceeded, please view quota on https://firebase.google.com/pricing/.");
}
function unauthenticated() {
	return new StorageError(StorageErrorCode.UNAUTHENTICATED, "User is not authenticated, please authenticate using Firebase Authentication and try again.");
}
function unauthorizedApp() {
	return new StorageError(StorageErrorCode.UNAUTHORIZED_APP, "This app does not have permission to access Firebase Storage on this project.");
}
function unauthorized(path) {
	return new StorageError(StorageErrorCode.UNAUTHORIZED, "User does not have permission to access '" + path + "'.");
}
function retryLimitExceeded() {
	return new StorageError(StorageErrorCode.RETRY_LIMIT_EXCEEDED, "Max retry time for operation exceeded, please try again.");
}
function canceled() {
	return new StorageError(StorageErrorCode.CANCELED, "User canceled the upload/download.");
}
function invalidUrl(url) {
	return new StorageError(StorageErrorCode.INVALID_URL, "Invalid URL '" + url + "'.");
}
function invalidDefaultBucket(bucket) {
	return new StorageError(StorageErrorCode.INVALID_DEFAULT_BUCKET, "Invalid default bucket '" + bucket + "'.");
}
function noDefaultBucket() {
	return new StorageError(StorageErrorCode.NO_DEFAULT_BUCKET, "No default bucket found. Did you set the 'storageBucket' property when initializing the app?");
}
function cannotSliceBlob() {
	return new StorageError(StorageErrorCode.CANNOT_SLICE_BLOB, "Cannot slice blob for upload. Please retry the upload.");
}
function noDownloadURL() {
	return new StorageError(StorageErrorCode.NO_DOWNLOAD_URL, "The given file does not have any download URLs.");
}
function missingPolyFill(polyFill) {
	return new StorageError(StorageErrorCode.UNSUPPORTED_ENVIRONMENT, `${polyFill} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`);
}
/**
* @internal
*/
function invalidArgument(message) {
	return new StorageError(StorageErrorCode.INVALID_ARGUMENT, message);
}
function appDeleted() {
	return new StorageError(StorageErrorCode.APP_DELETED, "The Firebase app was deleted.");
}
/**
* @param name - The name of the operation that was invalid.
*
* @internal
*/
function invalidRootOperation(name) {
	return new StorageError(StorageErrorCode.INVALID_ROOT_OPERATION, "The operation '" + name + "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').");
}
/**
* @param format - The format that was not valid.
* @param message - A message describing the format violation.
*/
function invalidFormat(format, message) {
	return new StorageError(StorageErrorCode.INVALID_FORMAT, "String does not match format '" + format + "': " + message);
}
/**
* @param message - A message describing the internal error.
*/
function internalError(message) {
	throw new StorageError(StorageErrorCode.INTERNAL_ERROR, "Internal error: " + message);
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Firebase Storage location data.
*
* @internal
*/
var Location = class Location {
	constructor(bucket, path) {
		this.bucket = bucket;
		this.path_ = path;
	}
	get path() {
		return this.path_;
	}
	get isRoot() {
		return this.path.length === 0;
	}
	fullServerUrl() {
		const encode = encodeURIComponent;
		return "/b/" + encode(this.bucket) + "/o/" + encode(this.path);
	}
	bucketOnlyServerUrl() {
		return "/b/" + encodeURIComponent(this.bucket) + "/o";
	}
	static makeFromBucketSpec(bucketString, host) {
		let bucketLocation;
		try {
			bucketLocation = Location.makeFromUrl(bucketString, host);
		} catch (e) {
			return new Location(bucketString, "");
		}
		if (bucketLocation.path === "") return bucketLocation;
		else throw invalidDefaultBucket(bucketString);
	}
	static makeFromUrl(url, host) {
		let location = null;
		const bucketDomain = "([A-Za-z0-9.\\-_]+)";
		function gsModify(loc) {
			if (loc.path.charAt(loc.path.length - 1) === "/") loc.path_ = loc.path_.slice(0, -1);
		}
		const gsRegex = /* @__PURE__ */ new RegExp("^gs://([A-Za-z0-9.\\-_]+)(/(.*))?$", "i");
		const gsIndices = {
			bucket: 1,
			path: 3
		};
		function httpModify(loc) {
			loc.path_ = decodeURIComponent(loc.path);
		}
		const version = "v[A-Za-z0-9_]+";
		const firebaseStorageHost = host.replace(/[.]/g, "\\.");
		const firebaseStorageRegExp = new RegExp(`^https?://${firebaseStorageHost}/${version}/b/${bucketDomain}/o(/([^?#]*).*)?\$`, "i");
		const firebaseStorageIndices = {
			bucket: 1,
			path: 3
		};
		const cloudStorageRegExp = new RegExp(`^https?://${host === DEFAULT_HOST ? "(?:storage.googleapis.com|storage.cloud.google.com)" : host}/${bucketDomain}/([^?#]*)`, "i");
		const groups = [
			{
				regex: gsRegex,
				indices: gsIndices,
				postModify: gsModify
			},
			{
				regex: firebaseStorageRegExp,
				indices: firebaseStorageIndices,
				postModify: httpModify
			},
			{
				regex: cloudStorageRegExp,
				indices: {
					bucket: 1,
					path: 2
				},
				postModify: httpModify
			}
		];
		for (let i = 0; i < groups.length; i++) {
			const group = groups[i];
			const captures = group.regex.exec(url);
			if (captures) {
				const bucketValue = captures[group.indices.bucket];
				let pathValue = captures[group.indices.path];
				if (!pathValue) pathValue = "";
				location = new Location(bucketValue, pathValue);
				group.postModify(location);
				break;
			}
		}
		if (location == null) throw invalidUrl(url);
		return location;
	}
};
/**
* A request whose promise always fails.
*/
var FailRequest = class {
	constructor(error) {
		this.promise_ = Promise.reject(error);
	}
	/** @inheritDoc */
	getPromise() {
		return this.promise_;
	}
	/** @inheritDoc */
	cancel(_appDelete = false) {}
};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Accepts a callback for an action to perform (`doRequest`),
* and then a callback for when the backoff has completed (`backoffCompleteCb`).
* The callback sent to start requires an argument to call (`onRequestComplete`).
* When `start` calls `doRequest`, it passes a callback for when the request has
* completed, `onRequestComplete`. Based on this, the backoff continues, with
* another call to `doRequest` and the above loop continues until the timeout
* is hit, or a successful response occurs.
* @description
* @param doRequest Callback to perform request
* @param backoffCompleteCb Callback to call when backoff has been completed
*/
function start(doRequest, backoffCompleteCb, timeout) {
	let waitSeconds = 1;
	let retryTimeoutId = null;
	let globalTimeoutId = null;
	let hitTimeout = false;
	let cancelState = 0;
	function canceled() {
		return cancelState === 2;
	}
	let triggeredCallback = false;
	function triggerCallback(...args) {
		if (!triggeredCallback) {
			triggeredCallback = true;
			backoffCompleteCb.apply(null, args);
		}
	}
	function callWithDelay(millis) {
		retryTimeoutId = setTimeout(() => {
			retryTimeoutId = null;
			doRequest(responseHandler, canceled());
		}, millis);
	}
	function clearGlobalTimeout() {
		if (globalTimeoutId) clearTimeout(globalTimeoutId);
	}
	function responseHandler(success, ...args) {
		if (triggeredCallback) {
			clearGlobalTimeout();
			return;
		}
		if (success) {
			clearGlobalTimeout();
			triggerCallback.call(null, success, ...args);
			return;
		}
		if (canceled() || hitTimeout) {
			clearGlobalTimeout();
			triggerCallback.call(null, success, ...args);
			return;
		}
		if (waitSeconds < 64) waitSeconds *= 2;
		let waitMillis;
		if (cancelState === 1) {
			cancelState = 2;
			waitMillis = 0;
		} else waitMillis = (waitSeconds + Math.random()) * 1e3;
		callWithDelay(waitMillis);
	}
	let stopped = false;
	function stop(wasTimeout) {
		if (stopped) return;
		stopped = true;
		clearGlobalTimeout();
		if (triggeredCallback) return;
		if (retryTimeoutId !== null) {
			if (!wasTimeout) cancelState = 2;
			clearTimeout(retryTimeoutId);
			callWithDelay(0);
		} else if (!wasTimeout) cancelState = 1;
	}
	callWithDelay(0);
	globalTimeoutId = setTimeout(() => {
		hitTimeout = true;
		stop(true);
	}, timeout);
	return stop;
}
/**
* Stops the retry loop from repeating.
* If the function is currently "in between" retries, it is invoked immediately
* with the second parameter as "true". Otherwise, it will be invoked once more
* after the current invocation finishes iff the current invocation would have
* triggered another retry.
*/
function stop(id) {
	id(false);
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function isJustDef(p) {
	return p !== void 0;
}
function isNonArrayObject(p) {
	return typeof p === "object" && !Array.isArray(p);
}
function isString(p) {
	return typeof p === "string" || p instanceof String;
}
function isNativeBlob(p) {
	return isNativeBlobDefined() && p instanceof Blob;
}
function isNativeBlobDefined() {
	return typeof Blob !== "undefined";
}
function validateNumber(argument, minValue, maxValue, value) {
	if (value < minValue) throw invalidArgument(`Invalid value for '${argument}'. Expected ${minValue} or greater.`);
	if (value > maxValue) throw invalidArgument(`Invalid value for '${argument}'. Expected ${maxValue} or less.`);
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function makeUrl(urlPart, host, protocol) {
	let origin = host;
	if (protocol == null) origin = `https://${host}`;
	return `${protocol}://${origin}/v0${urlPart}`;
}
function makeQueryString(params) {
	const encode = encodeURIComponent;
	let queryPart = "?";
	for (const key in params) if (params.hasOwnProperty(key)) {
		const nextPart = encode(key) + "=" + encode(params[key]);
		queryPart = queryPart + nextPart + "&";
	}
	queryPart = queryPart.slice(0, -1);
	return queryPart;
}
/**
* Error codes for requests made by the XhrIo wrapper.
*/
var ErrorCode;
(function(ErrorCode) {
	ErrorCode[ErrorCode["NO_ERROR"] = 0] = "NO_ERROR";
	ErrorCode[ErrorCode["NETWORK_ERROR"] = 1] = "NETWORK_ERROR";
	ErrorCode[ErrorCode["ABORT"] = 2] = "ABORT";
})(ErrorCode || (ErrorCode = {}));
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Checks the status code to see if the action should be retried.
*
* @param status Current HTTP status code returned by server.
* @param additionalRetryCodes additional retry codes to check against
*/
function isRetryStatusCode(status, additionalRetryCodes) {
	const isFiveHundredCode = status >= 500 && status < 600;
	const isExtraRetryCode = [408, 429].indexOf(status) !== -1;
	const isAdditionalRetryCode = additionalRetryCodes.indexOf(status) !== -1;
	return isFiveHundredCode || isExtraRetryCode || isAdditionalRetryCode;
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Handles network logic for all Storage Requests, including error reporting and
* retries with backoff.
*
* @param I - the type of the backend's network response.
* @param - O the output type used by the rest of the SDK. The conversion
* happens in the specified `callback_`.
*/
var NetworkRequest = class {
	constructor(url_, method_, headers_, body_, successCodes_, additionalRetryCodes_, callback_, errorCallback_, timeout_, progressCallback_, connectionFactory_, retry = true, isUsingEmulator = false) {
		this.url_ = url_;
		this.method_ = method_;
		this.headers_ = headers_;
		this.body_ = body_;
		this.successCodes_ = successCodes_;
		this.additionalRetryCodes_ = additionalRetryCodes_;
		this.callback_ = callback_;
		this.errorCallback_ = errorCallback_;
		this.timeout_ = timeout_;
		this.progressCallback_ = progressCallback_;
		this.connectionFactory_ = connectionFactory_;
		this.retry = retry;
		this.isUsingEmulator = isUsingEmulator;
		this.pendingConnection_ = null;
		this.backoffId_ = null;
		this.canceled_ = false;
		this.appDelete_ = false;
		this.promise_ = new Promise((resolve, reject) => {
			this.resolve_ = resolve;
			this.reject_ = reject;
			this.start_();
		});
	}
	/**
	* Actually starts the retry loop.
	*/
	start_() {
		const doTheRequest = (backoffCallback, canceled) => {
			if (canceled) {
				backoffCallback(false, new RequestEndStatus(false, null, true));
				return;
			}
			const connection = this.connectionFactory_();
			this.pendingConnection_ = connection;
			const progressListener = (progressEvent) => {
				const loaded = progressEvent.loaded;
				const total = progressEvent.lengthComputable ? progressEvent.total : -1;
				if (this.progressCallback_ !== null) this.progressCallback_(loaded, total);
			};
			if (this.progressCallback_ !== null) connection.addUploadProgressListener(progressListener);
			connection.send(this.url_, this.method_, this.isUsingEmulator, this.body_, this.headers_).then(() => {
				if (this.progressCallback_ !== null) connection.removeUploadProgressListener(progressListener);
				this.pendingConnection_ = null;
				const hitServer = connection.getErrorCode() === ErrorCode.NO_ERROR;
				const status = connection.getStatus();
				if (!hitServer || isRetryStatusCode(status, this.additionalRetryCodes_) && this.retry) {
					backoffCallback(false, new RequestEndStatus(false, null, connection.getErrorCode() === ErrorCode.ABORT));
					return;
				}
				backoffCallback(true, new RequestEndStatus(this.successCodes_.indexOf(status) !== -1, connection));
			});
		};
		/**
		* @param requestWentThrough - True if the request eventually went
		*     through, false if it hit the retry limit or was canceled.
		*/
		const backoffDone = (requestWentThrough, status) => {
			const resolve = this.resolve_;
			const reject = this.reject_;
			const connection = status.connection;
			if (status.wasSuccessCode) try {
				const result = this.callback_(connection, connection.getResponse());
				if (isJustDef(result)) resolve(result);
				else resolve();
			} catch (e) {
				reject(e);
			}
			else if (connection !== null) {
				const err = unknown();
				err.serverResponse = connection.getErrorText();
				if (this.errorCallback_) reject(this.errorCallback_(connection, err));
				else reject(err);
			} else if (status.canceled) reject(this.appDelete_ ? appDeleted() : canceled());
			else reject(retryLimitExceeded());
		};
		if (this.canceled_) backoffDone(false, new RequestEndStatus(false, null, true));
		else this.backoffId_ = start(doTheRequest, backoffDone, this.timeout_);
	}
	/** @inheritDoc */
	getPromise() {
		return this.promise_;
	}
	/** @inheritDoc */
	cancel(appDelete) {
		this.canceled_ = true;
		this.appDelete_ = appDelete || false;
		if (this.backoffId_ !== null) stop(this.backoffId_);
		if (this.pendingConnection_ !== null) this.pendingConnection_.abort();
	}
};
/**
* A collection of information about the result of a network request.
* @param opt_canceled - Defaults to false.
*/
var RequestEndStatus = class {
	constructor(wasSuccessCode, connection, canceled) {
		this.wasSuccessCode = wasSuccessCode;
		this.connection = connection;
		this.canceled = !!canceled;
	}
};
function addAuthHeader_(headers, authToken) {
	if (authToken !== null && authToken.length > 0) headers["Authorization"] = "Firebase " + authToken;
}
function addVersionHeader_(headers, firebaseVersion) {
	headers["X-Firebase-Storage-Version"] = "webjs/" + (firebaseVersion ?? "AppManager");
}
function addGmpidHeader_(headers, appId) {
	if (appId) headers["X-Firebase-GMPID"] = appId;
}
function addAppCheckHeader_(headers, appCheckToken) {
	if (appCheckToken !== null) headers["X-Firebase-AppCheck"] = appCheckToken;
}
function makeRequest(requestInfo, appId, authToken, appCheckToken, requestFactory, firebaseVersion, retry = true, isUsingEmulator = false) {
	const queryPart = makeQueryString(requestInfo.urlParams);
	const url = requestInfo.url + queryPart;
	const headers = Object.assign({}, requestInfo.headers);
	addGmpidHeader_(headers, appId);
	addAuthHeader_(headers, authToken);
	addVersionHeader_(headers, firebaseVersion);
	addAppCheckHeader_(headers, appCheckToken);
	return new NetworkRequest(url, requestInfo.method, headers, requestInfo.body, requestInfo.successCodes, requestInfo.additionalRetryCodes, requestInfo.handler, requestInfo.errorHandler, requestInfo.timeout, requestInfo.progressCallback, requestFactory, retry, isUsingEmulator);
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function getBlobBuilder() {
	if (typeof BlobBuilder !== "undefined") return BlobBuilder;
	else if (typeof WebKitBlobBuilder !== "undefined") return WebKitBlobBuilder;
	else return;
}
/**
* Concatenates one or more values together and converts them to a Blob.
*
* @param args The values that will make up the resulting blob.
* @return The blob.
*/
function getBlob$1(...args) {
	const BlobBuilder = getBlobBuilder();
	if (BlobBuilder !== void 0) {
		const bb = new BlobBuilder();
		for (let i = 0; i < args.length; i++) bb.append(args[i]);
		return bb.getBlob();
	} else if (isNativeBlobDefined()) return new Blob(args);
	else throw new StorageError(StorageErrorCode.UNSUPPORTED_ENVIRONMENT, "This browser doesn't seem to support creating Blobs");
}
/**
* Slices the blob. The returned blob contains data from the start byte
* (inclusive) till the end byte (exclusive). Negative indices cannot be used.
*
* @param blob The blob to be sliced.
* @param start Index of the starting byte.
* @param end Index of the ending byte.
* @return The blob slice or null if not supported.
*/
function sliceBlob(blob, start, end) {
	if (blob.webkitSlice) return blob.webkitSlice(start, end);
	else if (blob.mozSlice) return blob.mozSlice(start, end);
	else if (blob.slice) return blob.slice(start, end);
	return null;
}
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/** Converts a Base64 encoded string to a binary string. */
function decodeBase64(encoded) {
	if (typeof atob === "undefined") throw missingPolyFill("base-64");
	return atob(encoded);
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* An enumeration of the possible string formats for upload.
* @public
*/
var StringFormat = {
	/**
	* Indicates the string should be interpreted "raw", that is, as normal text.
	* The string will be interpreted as UTF-16, then uploaded as a UTF-8 byte
	* sequence.
	* Example: The string 'Hello! \\ud83d\\ude0a' becomes the byte sequence
	* 48 65 6c 6c 6f 21 20 f0 9f 98 8a
	*/
	RAW: "raw",
	/**
	* Indicates the string should be interpreted as base64-encoded data.
	* Padding characters (trailing '='s) are optional.
	* Example: The string 'rWmO++E6t7/rlw==' becomes the byte sequence
	* ad 69 8e fb e1 3a b7 bf eb 97
	*/
	BASE64: "base64",
	/**
	* Indicates the string should be interpreted as base64url-encoded data.
	* Padding characters (trailing '='s) are optional.
	* Example: The string 'rWmO--E6t7_rlw==' becomes the byte sequence
	* ad 69 8e fb e1 3a b7 bf eb 97
	*/
	BASE64URL: "base64url",
	/**
	* Indicates the string is a data URL, such as one obtained from
	* canvas.toDataURL().
	* Example: the string 'data:application/octet-stream;base64,aaaa'
	* becomes the byte sequence
	* 69 a6 9a
	* (the content-type "application/octet-stream" is also applied, but can
	* be overridden in the metadata object).
	*/
	DATA_URL: "data_url"
};
var StringData = class {
	constructor(data, contentType) {
		this.data = data;
		this.contentType = contentType || null;
	}
};
/**
* @internal
*/
function dataFromString(format, stringData) {
	switch (format) {
		case StringFormat.RAW: return new StringData(utf8Bytes_(stringData));
		case StringFormat.BASE64:
		case StringFormat.BASE64URL: return new StringData(base64Bytes_(format, stringData));
		case StringFormat.DATA_URL: return new StringData(dataURLBytes_(stringData), dataURLContentType_(stringData));
	}
	throw unknown();
}
function utf8Bytes_(value) {
	const b = [];
	for (let i = 0; i < value.length; i++) {
		let c = value.charCodeAt(i);
		if (c <= 127) b.push(c);
		else if (c <= 2047) b.push(192 | c >> 6, 128 | c & 63);
		else if ((c & 64512) === 55296) if (!(i < value.length - 1 && (value.charCodeAt(i + 1) & 64512) === 56320)) b.push(239, 191, 189);
		else {
			const hi = c;
			const lo = value.charCodeAt(++i);
			c = 65536 | (hi & 1023) << 10 | lo & 1023;
			b.push(240 | c >> 18, 128 | c >> 12 & 63, 128 | c >> 6 & 63, 128 | c & 63);
		}
		else if ((c & 64512) === 56320) b.push(239, 191, 189);
		else b.push(224 | c >> 12, 128 | c >> 6 & 63, 128 | c & 63);
	}
	return new Uint8Array(b);
}
function percentEncodedBytes_(value) {
	let decoded;
	try {
		decoded = decodeURIComponent(value);
	} catch (e) {
		throw invalidFormat(StringFormat.DATA_URL, "Malformed data URL.");
	}
	return utf8Bytes_(decoded);
}
function base64Bytes_(format, value) {
	switch (format) {
		case StringFormat.BASE64: {
			const hasMinus = value.indexOf("-") !== -1;
			const hasUnder = value.indexOf("_") !== -1;
			if (hasMinus || hasUnder) throw invalidFormat(format, "Invalid character '" + (hasMinus ? "-" : "_") + "' found: is it base64url encoded?");
			break;
		}
		case StringFormat.BASE64URL: {
			const hasPlus = value.indexOf("+") !== -1;
			const hasSlash = value.indexOf("/") !== -1;
			if (hasPlus || hasSlash) throw invalidFormat(format, "Invalid character '" + (hasPlus ? "+" : "/") + "' found: is it base64 encoded?");
			value = value.replace(/-/g, "+").replace(/_/g, "/");
			break;
		}
	}
	let bytes;
	try {
		bytes = decodeBase64(value);
	} catch (e) {
		if (e.message.includes("polyfill")) throw e;
		throw invalidFormat(format, "Invalid character found");
	}
	const array = new Uint8Array(bytes.length);
	for (let i = 0; i < bytes.length; i++) array[i] = bytes.charCodeAt(i);
	return array;
}
var DataURLParts = class {
	constructor(dataURL) {
		this.base64 = false;
		this.contentType = null;
		const matches = dataURL.match(/^data:([^,]+)?,/);
		if (matches === null) throw invalidFormat(StringFormat.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
		const middle = matches[1] || null;
		if (middle != null) {
			this.base64 = endsWith(middle, ";base64");
			this.contentType = this.base64 ? middle.substring(0, middle.length - 7) : middle;
		}
		this.rest = dataURL.substring(dataURL.indexOf(",") + 1);
	}
};
function dataURLBytes_(dataUrl) {
	const parts = new DataURLParts(dataUrl);
	if (parts.base64) return base64Bytes_(StringFormat.BASE64, parts.rest);
	else return percentEncodedBytes_(parts.rest);
}
function dataURLContentType_(dataUrl) {
	return new DataURLParts(dataUrl).contentType;
}
function endsWith(s, end) {
	if (!(s.length >= end.length)) return false;
	return s.substring(s.length - end.length) === end;
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @param opt_elideCopy - If true, doesn't copy mutable input data
*     (e.g. Uint8Arrays). Pass true only if you know the objects will not be
*     modified after this blob's construction.
*
* @internal
*/
var FbsBlob = class FbsBlob {
	constructor(data, elideCopy) {
		let size = 0;
		let blobType = "";
		if (isNativeBlob(data)) {
			this.data_ = data;
			size = data.size;
			blobType = data.type;
		} else if (data instanceof ArrayBuffer) {
			if (elideCopy) this.data_ = new Uint8Array(data);
			else {
				this.data_ = new Uint8Array(data.byteLength);
				this.data_.set(new Uint8Array(data));
			}
			size = this.data_.length;
		} else if (data instanceof Uint8Array) {
			if (elideCopy) this.data_ = data;
			else {
				this.data_ = new Uint8Array(data.length);
				this.data_.set(data);
			}
			size = data.length;
		}
		this.size_ = size;
		this.type_ = blobType;
	}
	size() {
		return this.size_;
	}
	type() {
		return this.type_;
	}
	slice(startByte, endByte) {
		if (isNativeBlob(this.data_)) {
			const realBlob = this.data_;
			const sliced = sliceBlob(realBlob, startByte, endByte);
			if (sliced === null) return null;
			return new FbsBlob(sliced);
		} else {
			const slice = new Uint8Array(this.data_.buffer, startByte, endByte - startByte);
			return new FbsBlob(slice, true);
		}
	}
	static getBlob(...args) {
		if (isNativeBlobDefined()) {
			const blobby = args.map((val) => {
				if (val instanceof FbsBlob) return val.data_;
				else return val;
			});
			return new FbsBlob(getBlob$1.apply(null, blobby));
		} else {
			const uint8Arrays = args.map((val) => {
				if (isString(val)) return dataFromString(StringFormat.RAW, val).data;
				else return val.data_;
			});
			let finalLength = 0;
			uint8Arrays.forEach((array) => {
				finalLength += array.byteLength;
			});
			const merged = new Uint8Array(finalLength);
			let index = 0;
			uint8Arrays.forEach((array) => {
				for (let i = 0; i < array.length; i++) merged[index++] = array[i];
			});
			return new FbsBlob(merged, true);
		}
	}
	uploadData() {
		return this.data_;
	}
};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Returns the Object resulting from parsing the given JSON, or null if the
* given string does not represent a JSON object.
*/
function jsonObjectOrNull(s) {
	let obj;
	try {
		obj = JSON.parse(s);
	} catch (e) {
		return null;
	}
	if (isNonArrayObject(obj)) return obj;
	else return null;
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @fileoverview Contains helper methods for manipulating paths.
*/
/**
* @return Null if the path is already at the root.
*/
function parent(path) {
	if (path.length === 0) return null;
	const index = path.lastIndexOf("/");
	if (index === -1) return "";
	return path.slice(0, index);
}
function child(path, childPath) {
	const canonicalChildPath = childPath.split("/").filter((component) => component.length > 0).join("/");
	if (path.length === 0) return canonicalChildPath;
	else return path + "/" + canonicalChildPath;
}
/**
* Returns the last component of a path.
* '/foo/bar' -> 'bar'
* '/foo/bar/baz/' -> 'baz/'
* '/a' -> 'a'
*/
function lastComponent(path) {
	const index = path.lastIndexOf("/", path.length - 2);
	if (index === -1) return path;
	else return path.slice(index + 1);
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function noXform_(metadata, value) {
	return value;
}
var Mapping = class {
	constructor(server, local, writable, xform) {
		this.server = server;
		this.local = local || server;
		this.writable = !!writable;
		this.xform = xform || noXform_;
	}
};
var mappings_ = null;
function xformPath(fullPath) {
	if (!isString(fullPath) || fullPath.length < 2) return fullPath;
	else return lastComponent(fullPath);
}
function getMappings() {
	if (mappings_) return mappings_;
	const mappings = [];
	mappings.push(new Mapping("bucket"));
	mappings.push(new Mapping("generation"));
	mappings.push(new Mapping("metageneration"));
	mappings.push(new Mapping("name", "fullPath", true));
	function mappingsXformPath(_metadata, fullPath) {
		return xformPath(fullPath);
	}
	const nameMapping = new Mapping("name");
	nameMapping.xform = mappingsXformPath;
	mappings.push(nameMapping);
	/**
	* Coerces the second param to a number, if it is defined.
	*/
	function xformSize(_metadata, size) {
		if (size !== void 0) return Number(size);
		else return size;
	}
	const sizeMapping = new Mapping("size");
	sizeMapping.xform = xformSize;
	mappings.push(sizeMapping);
	mappings.push(new Mapping("timeCreated"));
	mappings.push(new Mapping("updated"));
	mappings.push(new Mapping("md5Hash", null, true));
	mappings.push(new Mapping("cacheControl", null, true));
	mappings.push(new Mapping("contentDisposition", null, true));
	mappings.push(new Mapping("contentEncoding", null, true));
	mappings.push(new Mapping("contentLanguage", null, true));
	mappings.push(new Mapping("contentType", null, true));
	mappings.push(new Mapping("metadata", "customMetadata", true));
	mappings_ = mappings;
	return mappings_;
}
function addRef(metadata, service) {
	function generateRef() {
		const bucket = metadata["bucket"];
		const path = metadata["fullPath"];
		const loc = new Location(bucket, path);
		return service._makeStorageReference(loc);
	}
	Object.defineProperty(metadata, "ref", { get: generateRef });
}
function fromResource(service, resource, mappings) {
	const metadata = {};
	metadata["type"] = "file";
	const len = mappings.length;
	for (let i = 0; i < len; i++) {
		const mapping = mappings[i];
		metadata[mapping.local] = mapping.xform(metadata, resource[mapping.server]);
	}
	addRef(metadata, service);
	return metadata;
}
function fromResourceString(service, resourceString, mappings) {
	const obj = jsonObjectOrNull(resourceString);
	if (obj === null) return null;
	return fromResource(service, obj, mappings);
}
function downloadUrlFromResourceString(metadata, resourceString, host, protocol) {
	const obj = jsonObjectOrNull(resourceString);
	if (obj === null) return null;
	if (!isString(obj["downloadTokens"])) return null;
	const tokens = obj["downloadTokens"];
	if (tokens.length === 0) return null;
	const encode = encodeURIComponent;
	return tokens.split(",").map((token) => {
		const bucket = metadata["bucket"];
		const path = metadata["fullPath"];
		return makeUrl("/b/" + encode(bucket) + "/o/" + encode(path), host, protocol) + makeQueryString({
			alt: "media",
			token
		});
	})[0];
}
function toResourceString(metadata, mappings) {
	const resource = {};
	const len = mappings.length;
	for (let i = 0; i < len; i++) {
		const mapping = mappings[i];
		if (mapping.writable) resource[mapping.server] = metadata[mapping.local];
	}
	return JSON.stringify(resource);
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Contains a fully specified request.
*
* @param I - the type of the backend's network response.
* @param O - the output response type used by the rest of the SDK.
*/
var RequestInfo = class {
	constructor(url, method, handler, timeout) {
		this.url = url;
		this.method = method;
		this.handler = handler;
		this.timeout = timeout;
		this.urlParams = {};
		this.headers = {};
		this.body = null;
		this.errorHandler = null;
		/**
		* Called with the current number of bytes uploaded and total size (-1 if not
		* computable) of the request body (i.e. used to report upload progress).
		*/
		this.progressCallback = null;
		this.successCodes = [200];
		this.additionalRetryCodes = [];
	}
};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Throws the UNKNOWN StorageError if cndn is false.
*/
function handlerCheck(cndn) {
	if (!cndn) throw unknown();
}
function metadataHandler(service, mappings) {
	function handler(xhr, text) {
		const metadata = fromResourceString(service, text, mappings);
		handlerCheck(metadata !== null);
		return metadata;
	}
	return handler;
}
function downloadUrlHandler(service, mappings) {
	function handler(xhr, text) {
		const metadata = fromResourceString(service, text, mappings);
		handlerCheck(metadata !== null);
		return downloadUrlFromResourceString(metadata, text, service.host, service._protocol);
	}
	return handler;
}
function sharedErrorHandler(location) {
	function errorHandler(xhr, err) {
		let newErr;
		if (xhr.getStatus() === 401) if (xhr.getErrorText().includes("Firebase App Check token is invalid")) newErr = unauthorizedApp();
		else newErr = unauthenticated();
		else if (xhr.getStatus() === 402) newErr = quotaExceeded(location.bucket);
		else if (xhr.getStatus() === 403) newErr = unauthorized(location.path);
		else newErr = err;
		newErr.status = xhr.getStatus();
		newErr.serverResponse = err.serverResponse;
		return newErr;
	}
	return errorHandler;
}
function objectErrorHandler(location) {
	const shared = sharedErrorHandler(location);
	function errorHandler(xhr, err) {
		let newErr = shared(xhr, err);
		if (xhr.getStatus() === 404) newErr = objectNotFound(location.path);
		newErr.serverResponse = err.serverResponse;
		return newErr;
	}
	return errorHandler;
}
function getDownloadUrl(service, location, mappings) {
	const url = makeUrl(location.fullServerUrl(), service.host, service._protocol);
	const method = "GET";
	const timeout = service.maxOperationRetryTime;
	const requestInfo = new RequestInfo(url, method, downloadUrlHandler(service, mappings), timeout);
	requestInfo.errorHandler = objectErrorHandler(location);
	return requestInfo;
}
function determineContentType_(metadata, blob) {
	return metadata && metadata["contentType"] || blob && blob.type() || "application/octet-stream";
}
function metadataForUpload_(location, blob, metadata) {
	const metadataClone = Object.assign({}, metadata);
	metadataClone["fullPath"] = location.path;
	metadataClone["size"] = blob.size();
	if (!metadataClone["contentType"]) metadataClone["contentType"] = determineContentType_(null, blob);
	return metadataClone;
}
/**
* Prepare RequestInfo for uploads as Content-Type: multipart.
*/
function multipartUpload(service, location, mappings, blob, metadata) {
	const urlPart = location.bucketOnlyServerUrl();
	const headers = { "X-Goog-Upload-Protocol": "multipart" };
	function genBoundary() {
		let str = "";
		for (let i = 0; i < 2; i++) str = str + Math.random().toString().slice(2);
		return str;
	}
	const boundary = genBoundary();
	headers["Content-Type"] = "multipart/related; boundary=" + boundary;
	const metadata_ = metadataForUpload_(location, blob, metadata);
	const metadataString = toResourceString(metadata_, mappings);
	const preBlobPart = "--" + boundary + "\r\nContent-Type: application/json; charset=utf-8\r\n\r\n" + metadataString + "\r\n--" + boundary + "\r\nContent-Type: " + metadata_["contentType"] + "\r\n\r\n";
	const postBlobPart = "\r\n--" + boundary + "--";
	const body = FbsBlob.getBlob(preBlobPart, blob, postBlobPart);
	if (body === null) throw cannotSliceBlob();
	const urlParams = { name: metadata_["fullPath"] };
	const url = makeUrl(urlPart, service.host, service._protocol);
	const method = "POST";
	const timeout = service.maxUploadRetryTime;
	const requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
	requestInfo.urlParams = urlParams;
	requestInfo.headers = headers;
	requestInfo.body = body.uploadData();
	requestInfo.errorHandler = sharedErrorHandler(location);
	return requestInfo;
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Network layer for browsers. We use this instead of goog.net.XhrIo because
* goog.net.XhrIo is hyuuuuge and doesn't work in React Native on Android.
*/
var XhrConnection = class {
	constructor() {
		this.sent_ = false;
		this.xhr_ = new XMLHttpRequest();
		this.initXhr();
		this.errorCode_ = ErrorCode.NO_ERROR;
		this.sendPromise_ = new Promise((resolve) => {
			this.xhr_.addEventListener("abort", () => {
				this.errorCode_ = ErrorCode.ABORT;
				resolve();
			});
			this.xhr_.addEventListener("error", () => {
				this.errorCode_ = ErrorCode.NETWORK_ERROR;
				resolve();
			});
			this.xhr_.addEventListener("load", () => {
				resolve();
			});
		});
	}
	send(url, method, isUsingEmulator, body, headers) {
		if (this.sent_) throw internalError("cannot .send() more than once");
		if (isCloudWorkstation(url) && isUsingEmulator) this.xhr_.withCredentials = true;
		this.sent_ = true;
		this.xhr_.open(method, url, true);
		if (headers !== void 0) {
			for (const key in headers) if (headers.hasOwnProperty(key)) this.xhr_.setRequestHeader(key, headers[key].toString());
		}
		if (body !== void 0) this.xhr_.send(body);
		else this.xhr_.send();
		return this.sendPromise_;
	}
	getErrorCode() {
		if (!this.sent_) throw internalError("cannot .getErrorCode() before sending");
		return this.errorCode_;
	}
	getStatus() {
		if (!this.sent_) throw internalError("cannot .getStatus() before sending");
		try {
			return this.xhr_.status;
		} catch (e) {
			return -1;
		}
	}
	getResponse() {
		if (!this.sent_) throw internalError("cannot .getResponse() before sending");
		return this.xhr_.response;
	}
	getErrorText() {
		if (!this.sent_) throw internalError("cannot .getErrorText() before sending");
		return this.xhr_.statusText;
	}
	/** Aborts the request. */
	abort() {
		this.xhr_.abort();
	}
	getResponseHeader(header) {
		return this.xhr_.getResponseHeader(header);
	}
	addUploadProgressListener(listener) {
		if (this.xhr_.upload != null) this.xhr_.upload.addEventListener("progress", listener);
	}
	removeUploadProgressListener(listener) {
		if (this.xhr_.upload != null) this.xhr_.upload.removeEventListener("progress", listener);
	}
};
var XhrTextConnection = class extends XhrConnection {
	initXhr() {
		this.xhr_.responseType = "text";
	}
};
function newTextConnection() {
	return new XhrTextConnection();
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Provides methods to interact with a bucket in the Firebase Storage service.
* @internal
* @param _location - An fbs.location, or the URL at
*     which to base this object, in one of the following forms:
*         gs://<bucket>/<object-path>
*         http[s]://firebasestorage.googleapis.com/
*                     <api-version>/b/<bucket>/o/<object-path>
*     Any query or fragment strings will be ignored in the http[s]
*     format. If no value is passed, the storage object will use a URL based on
*     the project ID of the base firebase.App instance.
*/
var Reference = class Reference {
	constructor(_service, location) {
		this._service = _service;
		if (location instanceof Location) this._location = location;
		else this._location = Location.makeFromUrl(location, _service.host);
	}
	/**
	* Returns the URL for the bucket and path this object references,
	*     in the form gs://<bucket>/<object-path>
	* @override
	*/
	toString() {
		return "gs://" + this._location.bucket + "/" + this._location.path;
	}
	_newRef(service, location) {
		return new Reference(service, location);
	}
	/**
	* A reference to the root of this object's bucket.
	*/
	get root() {
		const location = new Location(this._location.bucket, "");
		return this._newRef(this._service, location);
	}
	/**
	* The name of the bucket containing this reference's object.
	*/
	get bucket() {
		return this._location.bucket;
	}
	/**
	* The full path of this object.
	*/
	get fullPath() {
		return this._location.path;
	}
	/**
	* The short name of this object, which is the last component of the full path.
	* For example, if fullPath is 'full/path/image.png', name is 'image.png'.
	*/
	get name() {
		return lastComponent(this._location.path);
	}
	/**
	* The `StorageService` instance this `StorageReference` is associated with.
	*/
	get storage() {
		return this._service;
	}
	/**
	* A `StorageReference` pointing to the parent location of this `StorageReference`, or null if
	* this reference is the root.
	*/
	get parent() {
		const newPath = parent(this._location.path);
		if (newPath === null) return null;
		const location = new Location(this._location.bucket, newPath);
		return new Reference(this._service, location);
	}
	/**
	* Utility function to throw an error in methods that do not accept a root reference.
	*/
	_throwIfRoot(name) {
		if (this._location.path === "") throw invalidRootOperation(name);
	}
};
/**
* Uploads data to this object's location.
* The upload is not resumable.
*
* @param ref - StorageReference where data should be uploaded.
* @param data - The data to upload.
* @param metadata - Metadata for the newly uploaded data.
* @returns A Promise containing an UploadResult
*/
function uploadBytes$1(ref, data, metadata) {
	ref._throwIfRoot("uploadBytes");
	const requestInfo = multipartUpload(ref.storage, ref._location, getMappings(), new FbsBlob(data, true), metadata);
	return ref.storage.makeRequestWithTokens(requestInfo, newTextConnection).then((finalMetadata) => {
		return {
			metadata: finalMetadata,
			ref
		};
	});
}
/**
* Returns the download URL for the given Reference.
* @public
* @returns A `Promise` that resolves with the download
*     URL for this object.
*/
function getDownloadURL$1(ref) {
	ref._throwIfRoot("getDownloadURL");
	const requestInfo = getDownloadUrl(ref.storage, ref._location, getMappings());
	return ref.storage.makeRequestWithTokens(requestInfo, newTextConnection).then((url) => {
		if (url === null) throw noDownloadURL();
		return url;
	});
}
/**
* Returns reference for object obtained by appending `childPath` to `ref`.
*
* @param ref - StorageReference to get child of.
* @param childPath - Child path from provided ref.
* @returns A reference to the object obtained by
* appending childPath, removing any duplicate, beginning, or trailing
* slashes.
*
*/
function _getChild$1(ref, childPath) {
	const newPath = child(ref._location.path, childPath);
	const location = new Location(ref._location.bucket, newPath);
	return new Reference(ref.storage, location);
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function isUrl(path) {
	return /^[A-Za-z]+:\/\//.test(path);
}
/**
* Returns a firebaseStorage.Reference for the given url.
*/
function refFromURL(service, url) {
	return new Reference(service, url);
}
/**
* Returns a firebaseStorage.Reference for the given path in the default
* bucket.
*/
function refFromPath(ref, path) {
	if (ref instanceof FirebaseStorageImpl) {
		const service = ref;
		if (service._bucket == null) throw noDefaultBucket();
		const reference = new Reference(service, service._bucket);
		if (path != null) return refFromPath(reference, path);
		else return reference;
	} else if (path !== void 0) return _getChild$1(ref, path);
	else return ref;
}
function ref$1(serviceOrRef, pathOrUrl) {
	if (pathOrUrl && isUrl(pathOrUrl)) if (serviceOrRef instanceof FirebaseStorageImpl) return refFromURL(serviceOrRef, pathOrUrl);
	else throw invalidArgument("To use ref(service, url), the first argument must be a Storage instance.");
	else return refFromPath(serviceOrRef, pathOrUrl);
}
function extractBucket(host, config) {
	const bucketString = config?.[CONFIG_STORAGE_BUCKET_KEY];
	if (bucketString == null) return null;
	return Location.makeFromBucketSpec(bucketString, host);
}
function connectStorageEmulator$1(storage, host, port, options = {}) {
	storage.host = `${host}:${port}`;
	const useSsl = isCloudWorkstation(host);
	if (useSsl) pingServer(`https://${storage.host}/b`);
	storage._isUsingEmulator = true;
	storage._protocol = useSsl ? "https" : "http";
	const { mockUserToken } = options;
	if (mockUserToken) storage._overrideAuthToken = typeof mockUserToken === "string" ? mockUserToken : createMockUserToken(mockUserToken, storage.app.options.projectId);
}
/**
* A service that provides Firebase Storage Reference instances.
* @param opt_url - gs:// url to a custom Storage Bucket
*
* @internal
*/
var FirebaseStorageImpl = class {
	constructor(app, _authProvider, _appCheckProvider, _url, _firebaseVersion, _isUsingEmulator = false) {
		this.app = app;
		this._authProvider = _authProvider;
		this._appCheckProvider = _appCheckProvider;
		this._url = _url;
		this._firebaseVersion = _firebaseVersion;
		this._isUsingEmulator = _isUsingEmulator;
		this._bucket = null;
		/**
		* This string can be in the formats:
		* - host
		* - host:port
		*/
		this._host = DEFAULT_HOST;
		this._protocol = "https";
		this._appId = null;
		this._deleted = false;
		this._maxOperationRetryTime = DEFAULT_MAX_OPERATION_RETRY_TIME;
		this._maxUploadRetryTime = DEFAULT_MAX_UPLOAD_RETRY_TIME;
		this._requests = /* @__PURE__ */ new Set();
		if (_url != null) this._bucket = Location.makeFromBucketSpec(_url, this._host);
		else this._bucket = extractBucket(this._host, this.app.options);
	}
	/**
	* The host string for this service, in the form of `host` or
	* `host:port`.
	*/
	get host() {
		return this._host;
	}
	set host(host) {
		this._host = host;
		if (this._url != null) this._bucket = Location.makeFromBucketSpec(this._url, host);
		else this._bucket = extractBucket(host, this.app.options);
	}
	/**
	* The maximum time to retry uploads in milliseconds.
	*/
	get maxUploadRetryTime() {
		return this._maxUploadRetryTime;
	}
	set maxUploadRetryTime(time) {
		validateNumber("time", 0, Number.POSITIVE_INFINITY, time);
		this._maxUploadRetryTime = time;
	}
	/**
	* The maximum time to retry operations other than uploads or downloads in
	* milliseconds.
	*/
	get maxOperationRetryTime() {
		return this._maxOperationRetryTime;
	}
	set maxOperationRetryTime(time) {
		validateNumber("time", 0, Number.POSITIVE_INFINITY, time);
		this._maxOperationRetryTime = time;
	}
	async _getAuthToken() {
		if (this._overrideAuthToken) return this._overrideAuthToken;
		const auth = this._authProvider.getImmediate({ optional: true });
		if (auth) {
			const tokenData = await auth.getToken();
			if (tokenData !== null) return tokenData.accessToken;
		}
		return null;
	}
	async _getAppCheckToken() {
		if (_isFirebaseServerApp(this.app) && this.app.settings.appCheckToken) return this.app.settings.appCheckToken;
		const appCheck = this._appCheckProvider.getImmediate({ optional: true });
		if (appCheck) return (await appCheck.getToken()).token;
		return null;
	}
	/**
	* Stop running requests and prevent more from being created.
	*/
	_delete() {
		if (!this._deleted) {
			this._deleted = true;
			this._requests.forEach((request) => request.cancel());
			this._requests.clear();
		}
		return Promise.resolve();
	}
	/**
	* Returns a new firebaseStorage.Reference object referencing this StorageService
	* at the given Location.
	*/
	_makeStorageReference(loc) {
		return new Reference(this, loc);
	}
	/**
	* @param requestInfo - HTTP RequestInfo object
	* @param authToken - Firebase auth token
	*/
	_makeRequest(requestInfo, requestFactory, authToken, appCheckToken, retry = true) {
		if (!this._deleted) {
			const request = makeRequest(requestInfo, this._appId, authToken, appCheckToken, requestFactory, this._firebaseVersion, retry, this._isUsingEmulator);
			this._requests.add(request);
			request.getPromise().then(() => this._requests.delete(request), () => this._requests.delete(request));
			return request;
		} else return new FailRequest(appDeleted());
	}
	async makeRequestWithTokens(requestInfo, requestFactory) {
		const [authToken, appCheckToken] = await Promise.all([this._getAuthToken(), this._getAppCheckToken()]);
		return this._makeRequest(requestInfo, requestFactory, authToken, appCheckToken).getPromise();
	}
};
var name = "@firebase/storage";
var version = "0.14.3";
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Type constant for Firebase Storage.
*/
var STORAGE_TYPE = "storage";
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Uploads data to this object's location.
* The upload is not resumable.
* @public
* @param ref - {@link StorageReference} where data should be uploaded.
* @param data - The data to upload.
* @param metadata - Metadata for the data to upload.
* @returns A Promise containing an UploadResult
*/
function uploadBytes(ref, data, metadata) {
	ref = getModularInstance(ref);
	return uploadBytes$1(ref, data, metadata);
}
/**
* Returns the download URL for the given {@link StorageReference}.
* @public
* @param ref - {@link StorageReference} to get the download URL for.
* @returns A `Promise` that resolves with the download
*     URL for this object.
*/
function getDownloadURL(ref) {
	ref = getModularInstance(ref);
	return getDownloadURL$1(ref);
}
function ref(serviceOrRef, pathOrUrl) {
	serviceOrRef = getModularInstance(serviceOrRef);
	return ref$1(serviceOrRef, pathOrUrl);
}
/**
* Gets a {@link FirebaseStorage} instance for the given Firebase app.
* @public
* @param app - Firebase app to get {@link FirebaseStorage} instance for.
* @param bucketUrl - The gs:// url to your Firebase Storage Bucket.
* If not passed, uses the app's default Storage Bucket.
* @returns A {@link FirebaseStorage} instance.
*/
function getStorage(app = getApp(), bucketUrl) {
	app = getModularInstance(app);
	const storageInstance = _getProvider(app, STORAGE_TYPE).getImmediate({ identifier: bucketUrl });
	const emulator = getDefaultEmulatorHostnameAndPort("storage");
	if (emulator) connectStorageEmulator(storageInstance, ...emulator);
	return storageInstance;
}
/**
* Modify this {@link FirebaseStorage} instance to communicate with the Cloud Storage emulator.
*
* @param storage - The {@link FirebaseStorage} instance
* @param host - The emulator host (ex: localhost)
* @param port - The emulator port (ex: 5001)
* @param options - Emulator options. `options.mockUserToken` is the mock auth
* token to use for unit testing Security Rules.
* @public
*/
function connectStorageEmulator(storage, host, port, options = {}) {
	connectStorageEmulator$1(storage, host, port, options);
}
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Cloud Storage for Firebase
*
* @packageDocumentation
*/
function factory(container, { instanceIdentifier: url }) {
	return new FirebaseStorageImpl(container.getProvider("app").getImmediate(), container.getProvider("auth-internal"), container.getProvider("app-check-internal"), url, SDK_VERSION);
}
function registerStorage() {
	_registerComponent(new Component(STORAGE_TYPE, factory, "PUBLIC").setMultipleInstances(true));
	registerVersion(name, version, "");
	registerVersion(name, version, "esm2020");
}
registerStorage();
//#endregion
//#region node_modules/firebase/storage/dist/esm/index.esm.js
var index_esm_exports = /* @__PURE__ */ __exportAll({
	StorageError: () => StorageError,
	StorageErrorCode: () => StorageErrorCode,
	StringFormat: () => StringFormat,
	_FbsBlob: () => FbsBlob,
	_Location: () => Location,
	_dataFromString: () => dataFromString,
	_invalidArgument: () => invalidArgument,
	_invalidRootOperation: () => invalidRootOperation,
	connectStorageEmulator: () => connectStorageEmulator,
	getDownloadURL: () => getDownloadURL,
	getStorage: () => getStorage,
	ref: () => ref,
	uploadBytes: () => uploadBytes
});
//#endregion
export { isEmpty as A, getDefaultEmulatorHost as C, isBrowserExtension as D, getUA as E, pingServer as F, querystring as I, querystringDecode as L, isMobileCordova as M, isReactNative as N, isCloudWorkstation as O, isSafari as P, extractQuerystring as S, getModularInstance as T, ErrorFactory as _, uploadBytes as a, createSubscribe as b, _isFirebaseServerApp as c, initializeApp as d, registerVersion as f, Deferred as g, Component as h, ref as i, isIE as j, isCloudflareWorker as k, _registerComponent as l, Logger as m, getDownloadURL as n, SDK_VERSION as o, LogLevel as p, getStorage as r, _getProvider as s, index_esm_exports as t, getApp as u, FirebaseError as v, getExperimentalSetting as w, deepEqual as x, base64Decode as y };
