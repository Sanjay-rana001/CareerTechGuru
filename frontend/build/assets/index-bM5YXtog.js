const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CategorySectionTab-ghH7Qmrx.js","assets/jsx-runtime-B5ErqjvK.js","assets/esm-paWcRsSW.js","assets/ViewCategory-B1vxEKk3.js","assets/DateFilter-D2bJKq2G.js","assets/AddJobForm-BYitW1zw.js","assets/lib-Cu7KInUU.js","assets/EmployerProfile-8zNzD94J.js","assets/index.esm-CYbMinJH.js","assets/firebase-t_zXV7oF.js","assets/umd-DpLK-Gi7.js","assets/UpdateInput-nfae8MLa.js","assets/AccountSettings--VmkCFte.js","assets/ViewJob-TaukkpnW.js","assets/AppliedJobs-CbWBQr7G.js","assets/md-DytvNgol.js","assets/EmployeeProfile-vS9fvaYH.js","assets/vsc-CJobk1CA.js","assets/EmployeeAppliedJobs-C5_wZNoM.js","assets/AdminHome-K2P97Wu1.js","assets/Login-DKD9_7yQ.js","assets/Signup-DE7UyEq7.js","assets/build-lBz7F1mB.js","assets/ForgotPassword-BokP0CTS.js","assets/ResetPassword--f4RYxfR.js","assets/VerifyOtp-CLGpT9xu.js","assets/Aboutus-TrwhCTVv.js","assets/AllJobs-DRmP8Pt2.js","assets/shared-1qwCVVy_.js","assets/io5-5gMjWRfs.js","assets/Dashboard-nvWeke1t.js","assets/JobDetailPage-jzykG-Yh.js","assets/ContactUs-BuF965uG.js","assets/ContactUs-Dx3CeVzB.css","assets/Home-DkfGNrGl.js","assets/fc-DLrnMVHs.js","assets/EmployeHome-n83j9Yy7.js","assets/BrandSettings-_AzipnAo.js","assets/Error-smG-5QJn.js"])))=>i.map(i=>d[i]);
import { a as __toESM, n as require_react, r as __commonJSMin, t as require_jsx_runtime } from "./jsx-runtime-B5ErqjvK.js";
import { C as signInWithEmailAndPassword, S as sendPasswordResetEmail, _ as where, a as addDoc, b as createUserWithEmailAndPassword, c as getDoc, f as orderBy, h as startAfter, l as getDocs, m as setDoc, n as db, o as deleteDoc, p as query, s as getCountFromServer, t as auth, u as limit, v as collection, w as signOut, x as onAuthStateChanged, y as doc } from "./firebase-t_zXV7oF.js";
//#region \0vite/modulepreload-polyfill.js
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
//#endregion
//#region node_modules/scheduler/cjs/scheduler.production.min.js
/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_scheduler_production_min = /* @__PURE__ */ __commonJSMin(((exports) => {
	function f(a, b) {
		var c = a.length;
		a.push(b);
		a: for (; 0 < c;) {
			var d = c - 1 >>> 1, e = a[d];
			if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;
			else break a;
		}
	}
	function h(a) {
		return 0 === a.length ? null : a[0];
	}
	function k(a) {
		if (0 === a.length) return null;
		var b = a[0], c = a.pop();
		if (c !== b) {
			a[0] = c;
			a: for (var d = 0, e = a.length, w = e >>> 1; d < w;) {
				var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x = a[n];
				if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);
				else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;
				else break a;
			}
		}
		return b;
	}
	function g(a, b) {
		var c = a.sortIndex - b.sortIndex;
		return 0 !== c ? c : a.id - b.id;
	}
	if ("object" === typeof performance && "function" === typeof performance.now) {
		var l = performance;
		exports.unstable_now = function() {
			return l.now();
		};
	} else {
		var p = Date, q = p.now();
		exports.unstable_now = function() {
			return p.now() - q;
		};
	}
	var r = [], t = [], u = 1, v = null, y = 3, z = !1, A = !1, B = !1, D = "function" === typeof setTimeout ? setTimeout : null, E = "function" === typeof clearTimeout ? clearTimeout : null, F = "undefined" !== typeof setImmediate ? setImmediate : null;
	"undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function G(a) {
		for (var b = h(t); null !== b;) {
			if (null === b.callback) k(t);
			else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r, b);
			else break;
			b = h(t);
		}
	}
	function H(a) {
		B = !1;
		G(a);
		if (!A) if (null !== h(r)) A = !0, I(J);
		else {
			var b = h(t);
			null !== b && K(H, b.startTime - a);
		}
	}
	function J(a, b) {
		A = !1;
		B && (B = !1, E(L), L = -1);
		z = !0;
		var c = y;
		try {
			G(b);
			for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M());) {
				var d = v.callback;
				if ("function" === typeof d) {
					v.callback = null;
					y = v.priorityLevel;
					var e = d(v.expirationTime <= b);
					b = exports.unstable_now();
					"function" === typeof e ? v.callback = e : v === h(r) && k(r);
					G(b);
				} else k(r);
				v = h(r);
			}
			if (null !== v) var w = !0;
			else {
				var m = h(t);
				null !== m && K(H, m.startTime - b);
				w = !1;
			}
			return w;
		} finally {
			v = null, y = c, z = !1;
		}
	}
	var N = !1, O = null, L = -1, P = 5, Q = -1;
	function M() {
		return exports.unstable_now() - Q < P ? !1 : !0;
	}
	function R() {
		if (null !== O) {
			var a = exports.unstable_now();
			Q = a;
			var b = !0;
			try {
				b = O(!0, a);
			} finally {
				b ? S() : (N = !1, O = null);
			}
		} else N = !1;
	}
	var S;
	if ("function" === typeof F) S = function() {
		F(R);
	};
	else if ("undefined" !== typeof MessageChannel) {
		var T = new MessageChannel(), U = T.port2;
		T.port1.onmessage = R;
		S = function() {
			U.postMessage(null);
		};
	} else S = function() {
		D(R, 0);
	};
	function I(a) {
		O = a;
		N || (N = !0, S());
	}
	function K(a, b) {
		L = D(function() {
			a(exports.unstable_now());
		}, b);
	}
	exports.unstable_IdlePriority = 5;
	exports.unstable_ImmediatePriority = 1;
	exports.unstable_LowPriority = 4;
	exports.unstable_NormalPriority = 3;
	exports.unstable_Profiling = null;
	exports.unstable_UserBlockingPriority = 2;
	exports.unstable_cancelCallback = function(a) {
		a.callback = null;
	};
	exports.unstable_continueExecution = function() {
		A || z || (A = !0, I(J));
	};
	exports.unstable_forceFrameRate = function(a) {
		0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
	};
	exports.unstable_getCurrentPriorityLevel = function() {
		return y;
	};
	exports.unstable_getFirstCallbackNode = function() {
		return h(r);
	};
	exports.unstable_next = function(a) {
		switch (y) {
			case 1:
			case 2:
			case 3:
				var b = 3;
				break;
			default: b = y;
		}
		var c = y;
		y = b;
		try {
			return a();
		} finally {
			y = c;
		}
	};
	exports.unstable_pauseExecution = function() {};
	exports.unstable_requestPaint = function() {};
	exports.unstable_runWithPriority = function(a, b) {
		switch (a) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: break;
			default: a = 3;
		}
		var c = y;
		y = a;
		try {
			return b();
		} finally {
			y = c;
		}
	};
	exports.unstable_scheduleCallback = function(a, b, c) {
		var d = exports.unstable_now();
		"object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
		switch (a) {
			case 1:
				var e = -1;
				break;
			case 2:
				e = 250;
				break;
			case 5:
				e = 1073741823;
				break;
			case 4:
				e = 1e4;
				break;
			default: e = 5e3;
		}
		e = c + e;
		a = {
			id: u++,
			callback: b,
			priorityLevel: a,
			startTime: c,
			expirationTime: e,
			sortIndex: -1
		};
		c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = !0, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = !0, I(J)));
		return a;
	};
	exports.unstable_shouldYield = M;
	exports.unstable_wrapCallback = function(a) {
		var b = y;
		return function() {
			var c = y;
			y = b;
			try {
				return a.apply(this, arguments);
			} finally {
				y = c;
			}
		};
	};
}));
//#endregion
//#region node_modules/scheduler/index.js
var require_scheduler = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_scheduler_production_min();
}));
//#endregion
//#region node_modules/react-dom/cjs/react-dom.production.min.js
/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_dom_production_min = /* @__PURE__ */ __commonJSMin(((exports) => {
	var aa = require_react(), ca = require_scheduler();
	function p(a) {
		for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
		return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	var da = /* @__PURE__ */ new Set(), ea = {};
	function fa(a, b) {
		ha(a, b);
		ha(a + "Capture", b);
	}
	function ha(a, b) {
		ea[a] = b;
		for (a = 0; a < b.length; a++) da.add(b[a]);
	}
	var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
	function oa(a) {
		if (ja.call(ma, a)) return !0;
		if (ja.call(la, a)) return !1;
		if (ka.test(a)) return ma[a] = !0;
		la[a] = !0;
		return !1;
	}
	function pa(a, b, c, d) {
		if (null !== c && 0 === c.type) return !1;
		switch (typeof b) {
			case "function":
			case "symbol": return !0;
			case "boolean":
				if (d) return !1;
				if (null !== c) return !c.acceptsBooleans;
				a = a.toLowerCase().slice(0, 5);
				return "data-" !== a && "aria-" !== a;
			default: return !1;
		}
	}
	function qa(a, b, c, d) {
		if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return !0;
		if (d) return !1;
		if (null !== c) switch (c.type) {
			case 3: return !b;
			case 4: return !1 === b;
			case 5: return isNaN(b);
			case 6: return isNaN(b) || 1 > b;
		}
		return !1;
	}
	function v(a, b, c, d, e, f, g) {
		this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
		this.attributeName = d;
		this.attributeNamespace = e;
		this.mustUseProperty = c;
		this.propertyName = a;
		this.type = b;
		this.sanitizeURL = f;
		this.removeEmptyString = g;
	}
	var z = {};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
		z[a] = new v(a, 0, !1, a, null, !1, !1);
	});
	[
		["acceptCharset", "accept-charset"],
		["className", "class"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"]
	].forEach(function(a) {
		var b = a[0];
		z[b] = new v(b, 1, !1, a[1], null, !1, !1);
	});
	[
		"contentEditable",
		"draggable",
		"spellCheck",
		"value"
	].forEach(function(a) {
		z[a] = new v(a, 2, !1, a.toLowerCase(), null, !1, !1);
	});
	[
		"autoReverse",
		"externalResourcesRequired",
		"focusable",
		"preserveAlpha"
	].forEach(function(a) {
		z[a] = new v(a, 2, !1, a, null, !1, !1);
	});
	"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
		z[a] = new v(a, 3, !1, a.toLowerCase(), null, !1, !1);
	});
	[
		"checked",
		"multiple",
		"muted",
		"selected"
	].forEach(function(a) {
		z[a] = new v(a, 3, !0, a, null, !1, !1);
	});
	["capture", "download"].forEach(function(a) {
		z[a] = new v(a, 4, !1, a, null, !1, !1);
	});
	[
		"cols",
		"rows",
		"size",
		"span"
	].forEach(function(a) {
		z[a] = new v(a, 6, !1, a, null, !1, !1);
	});
	["rowSpan", "start"].forEach(function(a) {
		z[a] = new v(a, 5, !1, a.toLowerCase(), null, !1, !1);
	});
	var ra = /[\-:]([a-z])/g;
	function sa(a) {
		return a[1].toUpperCase();
	}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
		var b = a.replace(ra, sa);
		z[b] = new v(b, 1, !1, a, null, !1, !1);
	});
	"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
		var b = a.replace(ra, sa);
		z[b] = new v(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
	});
	[
		"xml:base",
		"xml:lang",
		"xml:space"
	].forEach(function(a) {
		var b = a.replace(ra, sa);
		z[b] = new v(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
	});
	["tabIndex", "crossOrigin"].forEach(function(a) {
		z[a] = new v(a, 1, !1, a.toLowerCase(), null, !1, !1);
	});
	z.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
	[
		"src",
		"href",
		"action",
		"formAction"
	].forEach(function(a) {
		z[a] = new v(a, 1, !1, a.toLowerCase(), null, !0, !0);
	});
	function ta(a, b, c, d) {
		var e = z.hasOwnProperty(b) ? z[b] : null;
		if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
	}
	var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
	var Ia = Symbol.for("react.offscreen");
	var Ja = Symbol.iterator;
	function Ka(a) {
		if (null === a || "object" !== typeof a) return null;
		a = Ja && a[Ja] || a["@@iterator"];
		return "function" === typeof a ? a : null;
	}
	var A = Object.assign, La;
	function Ma(a) {
		if (void 0 === La) try {
			throw Error();
		} catch (c) {
			var b = c.stack.trim().match(/\n( *(at )?)/);
			La = b && b[1] || "";
		}
		return "\n" + La + a;
	}
	var Na = !1;
	function Oa(a, b) {
		if (!a || Na) return "";
		Na = !0;
		var c = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			if (b) if (b = function() {
				throw Error();
			}, Object.defineProperty(b.prototype, "props", { set: function() {
				throw Error();
			} }), "object" === typeof Reflect && Reflect.construct) {
				try {
					Reflect.construct(b, []);
				} catch (l) {
					var d = l;
				}
				Reflect.construct(a, [], b);
			} else {
				try {
					b.call();
				} catch (l) {
					d = l;
				}
				a.call(b.prototype);
			}
			else {
				try {
					throw Error();
				} catch (l) {
					d = l;
				}
				a();
			}
		} catch (l) {
			if (l && d && "string" === typeof l.stack) {
				for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h];) h--;
				for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
					if (1 !== g || 1 !== h) do
						if (g--, h--, 0 > h || e[g] !== f[h]) {
							var k = "\n" + e[g].replace(" at new ", " at ");
							a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
							return k;
						}
					while (1 <= g && 0 <= h);
					break;
				}
			}
		} finally {
			Na = !1, Error.prepareStackTrace = c;
		}
		return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
	}
	function Pa(a) {
		switch (a.tag) {
			case 5: return Ma(a.type);
			case 16: return Ma("Lazy");
			case 13: return Ma("Suspense");
			case 19: return Ma("SuspenseList");
			case 0:
			case 2:
			case 15: return a = Oa(a.type, !1), a;
			case 11: return a = Oa(a.type.render, !1), a;
			case 1: return a = Oa(a.type, !0), a;
			default: return "";
		}
	}
	function Qa(a) {
		if (null == a) return null;
		if ("function" === typeof a) return a.displayName || a.name || null;
		if ("string" === typeof a) return a;
		switch (a) {
			case ya: return "Fragment";
			case wa: return "Portal";
			case Aa: return "Profiler";
			case za: return "StrictMode";
			case Ea: return "Suspense";
			case Fa: return "SuspenseList";
		}
		if ("object" === typeof a) switch (a.$$typeof) {
			case Ca: return (a.displayName || "Context") + ".Consumer";
			case Ba: return (a._context.displayName || "Context") + ".Provider";
			case Da:
				var b = a.render;
				a = a.displayName;
				a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
				return a;
			case Ga: return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
			case Ha:
				b = a._payload;
				a = a._init;
				try {
					return Qa(a(b));
				} catch (c) {}
		}
		return null;
	}
	function Ra(a) {
		var b = a.type;
		switch (a.tag) {
			case 24: return "Cache";
			case 9: return (b.displayName || "Context") + ".Consumer";
			case 10: return (b._context.displayName || "Context") + ".Provider";
			case 18: return "DehydratedFragment";
			case 11: return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
			case 7: return "Fragment";
			case 5: return b;
			case 4: return "Portal";
			case 3: return "Root";
			case 6: return "Text";
			case 16: return Qa(b);
			case 8: return b === za ? "StrictMode" : "Mode";
			case 22: return "Offscreen";
			case 12: return "Profiler";
			case 21: return "Scope";
			case 13: return "Suspense";
			case 19: return "SuspenseList";
			case 25: return "TracingMarker";
			case 1:
			case 0:
			case 17:
			case 2:
			case 14:
			case 15:
				if ("function" === typeof b) return b.displayName || b.name || null;
				if ("string" === typeof b) return b;
		}
		return null;
	}
	function Sa(a) {
		switch (typeof a) {
			case "boolean":
			case "number":
			case "string":
			case "undefined": return a;
			case "object": return a;
			default: return "";
		}
	}
	function Ta(a) {
		var b = a.type;
		return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
	}
	function Ua(a) {
		var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
		if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
			var e = c.get, f = c.set;
			Object.defineProperty(a, b, {
				configurable: !0,
				get: function() {
					return e.call(this);
				},
				set: function(a) {
					d = "" + a;
					f.call(this, a);
				}
			});
			Object.defineProperty(a, b, { enumerable: c.enumerable });
			return {
				getValue: function() {
					return d;
				},
				setValue: function(a) {
					d = "" + a;
				},
				stopTracking: function() {
					a._valueTracker = null;
					delete a[b];
				}
			};
		}
	}
	function Va(a) {
		a._valueTracker || (a._valueTracker = Ua(a));
	}
	function Wa(a) {
		if (!a) return !1;
		var b = a._valueTracker;
		if (!b) return !0;
		var c = b.getValue();
		var d = "";
		a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
		a = d;
		return a !== c ? (b.setValue(a), !0) : !1;
	}
	function Xa(a) {
		a = a || ("undefined" !== typeof document ? document : void 0);
		if ("undefined" === typeof a) return null;
		try {
			return a.activeElement || a.body;
		} catch (b) {
			return a.body;
		}
	}
	function Ya(a, b) {
		var c = b.checked;
		return A({}, b, {
			defaultChecked: void 0,
			defaultValue: void 0,
			value: void 0,
			checked: null != c ? c : a._wrapperState.initialChecked
		});
	}
	function Za(a, b) {
		var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
		c = Sa(null != b.value ? b.value : c);
		a._wrapperState = {
			initialChecked: d,
			initialValue: c,
			controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
		};
	}
	function ab(a, b) {
		b = b.checked;
		null != b && ta(a, "checked", b, !1);
	}
	function bb(a, b) {
		ab(a, b);
		var c = Sa(b.value), d = b.type;
		if (null != c) if ("number" === d) {
			if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
		} else a.value !== "" + c && (a.value = "" + c);
		else if ("submit" === d || "reset" === d) {
			a.removeAttribute("value");
			return;
		}
		b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
		null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
	}
	function db(a, b, c) {
		if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
			var d = b.type;
			if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
			b = "" + a._wrapperState.initialValue;
			c || b === a.value || (a.value = b);
			a.defaultValue = b;
		}
		c = a.name;
		"" !== c && (a.name = "");
		a.defaultChecked = !!a._wrapperState.initialChecked;
		"" !== c && (a.name = c);
	}
	function cb(a, b, c) {
		if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
	}
	var eb = Array.isArray;
	function fb(a, b, c, d) {
		a = a.options;
		if (b) {
			b = {};
			for (var e = 0; e < c.length; e++) b["$" + c[e]] = !0;
			for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
		} else {
			c = "" + Sa(c);
			b = null;
			for (e = 0; e < a.length; e++) {
				if (a[e].value === c) {
					a[e].selected = !0;
					d && (a[e].defaultSelected = !0);
					return;
				}
				null !== b || a[e].disabled || (b = a[e]);
			}
			null !== b && (b.selected = !0);
		}
	}
	function gb(a, b) {
		if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
		return A({}, b, {
			value: void 0,
			defaultValue: void 0,
			children: "" + a._wrapperState.initialValue
		});
	}
	function hb(a, b) {
		var c = b.value;
		if (null == c) {
			c = b.children;
			b = b.defaultValue;
			if (null != c) {
				if (null != b) throw Error(p(92));
				if (eb(c)) {
					if (1 < c.length) throw Error(p(93));
					c = c[0];
				}
				b = c;
			}
			b ??= "";
			c = b;
		}
		a._wrapperState = { initialValue: Sa(c) };
	}
	function ib(a, b) {
		var c = Sa(b.value), d = Sa(b.defaultValue);
		null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
		null != d && (a.defaultValue = "" + d);
	}
	function jb(a) {
		var b = a.textContent;
		b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
	}
	function kb(a) {
		switch (a) {
			case "svg": return "http://www.w3.org/2000/svg";
			case "math": return "http://www.w3.org/1998/Math/MathML";
			default: return "http://www.w3.org/1999/xhtml";
		}
	}
	function lb(a, b) {
		return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
	}
	var mb, nb = function(a) {
		return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
			MSApp.execUnsafeLocalFunction(function() {
				return a(b, c, d, e);
			});
		} : a;
	}(function(a, b) {
		if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
		else {
			mb = mb || document.createElement("div");
			mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
			for (b = mb.firstChild; a.firstChild;) a.removeChild(a.firstChild);
			for (; b.firstChild;) a.appendChild(b.firstChild);
		}
	});
	function ob(a, b) {
		if (b) {
			var c = a.firstChild;
			if (c && c === a.lastChild && 3 === c.nodeType) {
				c.nodeValue = b;
				return;
			}
		}
		a.textContent = b;
	}
	var pb = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0
	}, qb = [
		"Webkit",
		"ms",
		"Moz",
		"O"
	];
	Object.keys(pb).forEach(function(a) {
		qb.forEach(function(b) {
			b = b + a.charAt(0).toUpperCase() + a.substring(1);
			pb[b] = pb[a];
		});
	});
	function rb(a, b, c) {
		return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
	}
	function sb(a, b) {
		a = a.style;
		for (var c in b) if (b.hasOwnProperty(c)) {
			var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
			"float" === c && (c = "cssFloat");
			d ? a.setProperty(c, e) : a[c] = e;
		}
	}
	var tb = A({ menuitem: !0 }, {
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0
	});
	function ub(a, b) {
		if (b) {
			if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
			if (null != b.dangerouslySetInnerHTML) {
				if (null != b.children) throw Error(p(60));
				if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
			}
			if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
		}
	}
	function vb(a, b) {
		if (-1 === a.indexOf("-")) return "string" === typeof b.is;
		switch (a) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": return !1;
			default: return !0;
		}
	}
	var wb = null;
	function xb(a) {
		a = a.target || a.srcElement || window;
		a.correspondingUseElement && (a = a.correspondingUseElement);
		return 3 === a.nodeType ? a.parentNode : a;
	}
	var yb = null, zb = null, Ab = null;
	function Bb(a) {
		if (a = Cb(a)) {
			if ("function" !== typeof yb) throw Error(p(280));
			var b = a.stateNode;
			b && (b = Db(b), yb(a.stateNode, a.type, b));
		}
	}
	function Eb(a) {
		zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
	}
	function Fb() {
		if (zb) {
			var a = zb, b = Ab;
			Ab = zb = null;
			Bb(a);
			if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
		}
	}
	function Gb(a, b) {
		return a(b);
	}
	function Hb() {}
	var Ib = !1;
	function Jb(a, b, c) {
		if (Ib) return a(b, c);
		Ib = !0;
		try {
			return Gb(a, b, c);
		} finally {
			if (Ib = !1, null !== zb || null !== Ab) Hb(), Fb();
		}
	}
	function Kb(a, b) {
		var c = a.stateNode;
		if (null === c) return null;
		var d = Db(c);
		if (null === d) return null;
		c = d[b];
		a: switch (b) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
				a = !d;
				break a;
			default: a = !1;
		}
		if (a) return null;
		if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
		return c;
	}
	var Lb = !1;
	if (ia) try {
		var Mb = {};
		Object.defineProperty(Mb, "passive", { get: function() {
			Lb = !0;
		} });
		window.addEventListener("test", Mb, Mb);
		window.removeEventListener("test", Mb, Mb);
	} catch (a) {
		Lb = !1;
	}
	function Nb(a, b, c, d, e, f, g, h, k) {
		var l = Array.prototype.slice.call(arguments, 3);
		try {
			b.apply(c, l);
		} catch (m) {
			this.onError(m);
		}
	}
	var Ob = !1, Pb = null, Qb = !1, Rb = null, Sb = { onError: function(a) {
		Ob = !0;
		Pb = a;
	} };
	function Tb(a, b, c, d, e, f, g, h, k) {
		Ob = !1;
		Pb = null;
		Nb.apply(Sb, arguments);
	}
	function Ub(a, b, c, d, e, f, g, h, k) {
		Tb.apply(this, arguments);
		if (Ob) {
			if (Ob) {
				var l = Pb;
				Ob = !1;
				Pb = null;
			} else throw Error(p(198));
			Qb || (Qb = !0, Rb = l);
		}
	}
	function Vb(a) {
		var b = a, c = a;
		if (a.alternate) for (; b.return;) b = b.return;
		else {
			a = b;
			do
				b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
			while (a);
		}
		return 3 === b.tag ? c : null;
	}
	function Wb(a) {
		if (13 === a.tag) {
			var b = a.memoizedState;
			null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
			if (null !== b) return b.dehydrated;
		}
		return null;
	}
	function Xb(a) {
		if (Vb(a) !== a) throw Error(p(188));
	}
	function Yb(a) {
		var b = a.alternate;
		if (!b) {
			b = Vb(a);
			if (null === b) throw Error(p(188));
			return b !== a ? null : a;
		}
		for (var c = a, d = b;;) {
			var e = c.return;
			if (null === e) break;
			var f = e.alternate;
			if (null === f) {
				d = e.return;
				if (null !== d) {
					c = d;
					continue;
				}
				break;
			}
			if (e.child === f.child) {
				for (f = e.child; f;) {
					if (f === c) return Xb(e), a;
					if (f === d) return Xb(e), b;
					f = f.sibling;
				}
				throw Error(p(188));
			}
			if (c.return !== d.return) c = e, d = f;
			else {
				for (var g = !1, h = e.child; h;) {
					if (h === c) {
						g = !0;
						c = e;
						d = f;
						break;
					}
					if (h === d) {
						g = !0;
						d = e;
						c = f;
						break;
					}
					h = h.sibling;
				}
				if (!g) {
					for (h = f.child; h;) {
						if (h === c) {
							g = !0;
							c = f;
							d = e;
							break;
						}
						if (h === d) {
							g = !0;
							d = f;
							c = e;
							break;
						}
						h = h.sibling;
					}
					if (!g) throw Error(p(189));
				}
			}
			if (c.alternate !== d) throw Error(p(190));
		}
		if (3 !== c.tag) throw Error(p(188));
		return c.stateNode.current === c ? a : b;
	}
	function Zb(a) {
		a = Yb(a);
		return null !== a ? $b(a) : null;
	}
	function $b(a) {
		if (5 === a.tag || 6 === a.tag) return a;
		for (a = a.child; null !== a;) {
			var b = $b(a);
			if (null !== b) return b;
			a = a.sibling;
		}
		return null;
	}
	var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
	function mc(a) {
		if (lc && "function" === typeof lc.onCommitFiberRoot) try {
			lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
		} catch (b) {}
	}
	var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
	function nc(a) {
		a >>>= 0;
		return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
	}
	var rc = 64, sc = 4194304;
	function tc(a) {
		switch (a & -a) {
			case 1: return 1;
			case 2: return 2;
			case 4: return 4;
			case 8: return 8;
			case 16: return 16;
			case 32: return 32;
			case 64:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return a & 4194240;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
			case 67108864: return a & 130023424;
			case 134217728: return 134217728;
			case 268435456: return 268435456;
			case 536870912: return 536870912;
			case 1073741824: return 1073741824;
			default: return a;
		}
	}
	function uc(a, b) {
		var c = a.pendingLanes;
		if (0 === c) return 0;
		var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
		if (0 !== g) {
			var h = g & ~e;
			0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
		} else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
		if (0 === d) return 0;
		if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
		0 !== (d & 4) && (d |= c & 16);
		b = a.entangledLanes;
		if (0 !== b) for (a = a.entanglements, b &= d; 0 < b;) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
		return d;
	}
	function vc(a, b) {
		switch (a) {
			case 1:
			case 2:
			case 4: return b + 250;
			case 8:
			case 16:
			case 32:
			case 64:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return b + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
			case 67108864: return -1;
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824: return -1;
			default: return -1;
		}
	}
	function wc(a, b) {
		for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f;) {
			var g = 31 - oc(f), h = 1 << g, k = e[g];
			if (-1 === k) {
				if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
			} else k <= b && (a.expiredLanes |= h);
			f &= ~h;
		}
	}
	function xc(a) {
		a = a.pendingLanes & -1073741825;
		return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
	}
	function yc() {
		var a = rc;
		rc <<= 1;
		0 === (rc & 4194240) && (rc = 64);
		return a;
	}
	function zc(a) {
		for (var b = [], c = 0; 31 > c; c++) b.push(a);
		return b;
	}
	function Ac(a, b, c) {
		a.pendingLanes |= b;
		536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
		a = a.eventTimes;
		b = 31 - oc(b);
		a[b] = c;
	}
	function Bc(a, b) {
		var c = a.pendingLanes & ~b;
		a.pendingLanes = b;
		a.suspendedLanes = 0;
		a.pingedLanes = 0;
		a.expiredLanes &= b;
		a.mutableReadLanes &= b;
		a.entangledLanes &= b;
		b = a.entanglements;
		var d = a.eventTimes;
		for (a = a.expirationTimes; 0 < c;) {
			var e = 31 - oc(c), f = 1 << e;
			b[e] = 0;
			d[e] = -1;
			a[e] = -1;
			c &= ~f;
		}
	}
	function Cc(a, b) {
		var c = a.entangledLanes |= b;
		for (a = a.entanglements; c;) {
			var d = 31 - oc(c), e = 1 << d;
			e & b | a[d] & b && (a[d] |= b);
			c &= ~e;
		}
	}
	var C = 0;
	function Dc(a) {
		a &= -a;
		return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
	}
	var Ec, Fc, Gc, Hc, Ic, Jc = !1, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
	function Sc(a, b) {
		switch (a) {
			case "focusin":
			case "focusout":
				Lc = null;
				break;
			case "dragenter":
			case "dragleave":
				Mc = null;
				break;
			case "mouseover":
			case "mouseout":
				Nc = null;
				break;
			case "pointerover":
			case "pointerout":
				Oc.delete(b.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": Pc.delete(b.pointerId);
		}
	}
	function Tc(a, b, c, d, e, f) {
		if (null === a || a.nativeEvent !== f) return a = {
			blockedOn: b,
			domEventName: c,
			eventSystemFlags: d,
			nativeEvent: f,
			targetContainers: [e]
		}, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
		a.eventSystemFlags |= d;
		b = a.targetContainers;
		null !== e && -1 === b.indexOf(e) && b.push(e);
		return a;
	}
	function Uc(a, b, c, d, e) {
		switch (b) {
			case "focusin": return Lc = Tc(Lc, a, b, c, d, e), !0;
			case "dragenter": return Mc = Tc(Mc, a, b, c, d, e), !0;
			case "mouseover": return Nc = Tc(Nc, a, b, c, d, e), !0;
			case "pointerover":
				var f = e.pointerId;
				Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
				return !0;
			case "gotpointercapture": return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), !0;
		}
		return !1;
	}
	function Vc(a) {
		var b = Wc(a.target);
		if (null !== b) {
			var c = Vb(b);
			if (null !== c) {
				if (b = c.tag, 13 === b) {
					if (b = Wb(c), null !== b) {
						a.blockedOn = b;
						Ic(a.priority, function() {
							Gc(c);
						});
						return;
					}
				} else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
					a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
					return;
				}
			}
		}
		a.blockedOn = null;
	}
	function Xc(a) {
		if (null !== a.blockedOn) return !1;
		for (var b = a.targetContainers; 0 < b.length;) {
			var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
			if (null === c) {
				c = a.nativeEvent;
				var d = new c.constructor(c.type, c);
				wb = d;
				c.target.dispatchEvent(d);
				wb = null;
			} else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, !1;
			b.shift();
		}
		return !0;
	}
	function Zc(a, b, c) {
		Xc(a) && c.delete(b);
	}
	function $c() {
		Jc = !1;
		null !== Lc && Xc(Lc) && (Lc = null);
		null !== Mc && Xc(Mc) && (Mc = null);
		null !== Nc && Xc(Nc) && (Nc = null);
		Oc.forEach(Zc);
		Pc.forEach(Zc);
	}
	function ad(a, b) {
		a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = !0, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
	}
	function bd(a) {
		function b(b) {
			return ad(b, a);
		}
		if (0 < Kc.length) {
			ad(Kc[0], a);
			for (var c = 1; c < Kc.length; c++) {
				var d = Kc[c];
				d.blockedOn === a && (d.blockedOn = null);
			}
		}
		null !== Lc && ad(Lc, a);
		null !== Mc && ad(Mc, a);
		null !== Nc && ad(Nc, a);
		Oc.forEach(b);
		Pc.forEach(b);
		for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
		for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn);) Vc(c), null === c.blockedOn && Qc.shift();
	}
	var cd = ua.ReactCurrentBatchConfig, dd = !0;
	function ed(a, b, c, d) {
		var e = C, f = cd.transition;
		cd.transition = null;
		try {
			C = 1, fd(a, b, c, d);
		} finally {
			C = e, cd.transition = f;
		}
	}
	function gd(a, b, c, d) {
		var e = C, f = cd.transition;
		cd.transition = null;
		try {
			C = 4, fd(a, b, c, d);
		} finally {
			C = e, cd.transition = f;
		}
	}
	function fd(a, b, c, d) {
		if (dd) {
			var e = Yc(a, b, c, d);
			if (null === e) hd(a, b, d, id, c), Sc(a, d);
			else if (Uc(e, a, b, c, d)) d.stopPropagation();
			else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
				for (; null !== e;) {
					var f = Cb(e);
					null !== f && Ec(f);
					f = Yc(a, b, c, d);
					null === f && hd(a, b, d, id, c);
					if (f === e) break;
					e = f;
				}
				null !== e && d.stopPropagation();
			} else hd(a, b, d, null, c);
		}
	}
	var id = null;
	function Yc(a, b, c, d) {
		id = null;
		a = xb(d);
		a = Wc(a);
		if (null !== a) if (b = Vb(a), null === b) a = null;
		else if (c = b.tag, 13 === c) {
			a = Wb(b);
			if (null !== a) return a;
			a = null;
		} else if (3 === c) {
			if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
			a = null;
		} else b !== a && (a = null);
		id = a;
		return null;
	}
	function jd(a) {
		switch (a) {
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "resize":
			case "seeked":
			case "submit":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart": return 1;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "scroll":
			case "toggle":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave": return 4;
			case "message": switch (ec()) {
				case fc: return 1;
				case gc: return 4;
				case hc:
				case ic: return 16;
				case jc: return 536870912;
				default: return 16;
			}
			default: return 16;
		}
	}
	var kd = null, ld = null, md = null;
	function nd() {
		if (md) return md;
		var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
		for (a = 0; a < c && b[a] === e[a]; a++);
		var g = c - a;
		for (d = 1; d <= g && b[c - d] === e[f - d]; d++);
		return md = e.slice(a, 1 < d ? 1 - d : void 0);
	}
	function od(a) {
		var b = a.keyCode;
		"charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
		10 === a && (a = 13);
		return 32 <= a || 13 === a ? a : 0;
	}
	function pd() {
		return !0;
	}
	function qd() {
		return !1;
	}
	function rd(a) {
		function b(b, d, e, f, g) {
			this._reactName = b;
			this._targetInst = e;
			this.type = d;
			this.nativeEvent = f;
			this.target = g;
			this.currentTarget = null;
			for (var c in a) a.hasOwnProperty(c) && (b = a[c], this[c] = b ? b(f) : f[c]);
			this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : !1 === f.returnValue) ? pd : qd;
			this.isPropagationStopped = qd;
			return this;
		}
		A(b.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var a = this.nativeEvent;
				a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = pd);
			},
			stopPropagation: function() {
				var a = this.nativeEvent;
				a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = pd);
			},
			persist: function() {},
			isPersistent: pd
		});
		return b;
	}
	var sd = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(a) {
			return a.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, td = rd(sd), ud = A({}, sd, {
		view: 0,
		detail: 0
	}), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: zd,
		button: 0,
		buttons: 0,
		relatedTarget: function(a) {
			return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
		},
		movementX: function(a) {
			if ("movementX" in a) return a.movementX;
			a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
			return wd;
		},
		movementY: function(a) {
			return "movementY" in a ? a.movementY : xd;
		}
	}), Bd = rd(Ad), Dd = rd(A({}, Ad, { dataTransfer: 0 })), Fd = rd(A({}, ud, { relatedTarget: 0 })), Hd = rd(A({}, sd, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Jd = rd(A({}, sd, { clipboardData: function(a) {
		return "clipboardData" in a ? a.clipboardData : window.clipboardData;
	} })), Ld = rd(A({}, sd, { data: 0 })), Md = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	}, Nd = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	}, Od = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function Pd(a) {
		var b = this.nativeEvent;
		return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : !1;
	}
	function zd() {
		return Pd;
	}
	var Rd = rd(A({}, ud, {
		key: function(a) {
			if (a.key) {
				var b = Md[a.key] || a.key;
				if ("Unidentified" !== b) return b;
			}
			return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: zd,
		charCode: function(a) {
			return "keypress" === a.type ? od(a) : 0;
		},
		keyCode: function(a) {
			return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
		},
		which: function(a) {
			return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
		}
	})), Td = rd(A({}, Ad, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	})), Vd = rd(A({}, ud, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: zd
	})), Xd = rd(A({}, sd, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Zd = rd(A({}, Ad, {
		deltaX: function(a) {
			return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
		},
		deltaY: function(a) {
			return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), $d = [
		9,
		13,
		27,
		32
	], ae = ia && "CompositionEvent" in window, be = null;
	ia && "documentMode" in document && (be = document.documentMode);
	var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = !1;
	function ge(a, b) {
		switch (a) {
			case "keyup": return -1 !== $d.indexOf(b.keyCode);
			case "keydown": return 229 !== b.keyCode;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function he(a) {
		a = a.detail;
		return "object" === typeof a && "data" in a ? a.data : null;
	}
	var ie = !1;
	function je(a, b) {
		switch (a) {
			case "compositionend": return he(b);
			case "keypress":
				if (32 !== b.which) return null;
				fe = !0;
				return ee;
			case "textInput": return a = b.data, a === ee && fe ? null : a;
			default: return null;
		}
	}
	function ke(a, b) {
		if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = !1, a) : null;
		switch (a) {
			case "paste": return null;
			case "keypress":
				if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
					if (b.char && 1 < b.char.length) return b.char;
					if (b.which) return String.fromCharCode(b.which);
				}
				return null;
			case "compositionend": return de && "ko" !== b.locale ? null : b.data;
			default: return null;
		}
	}
	var le = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};
	function me(a) {
		var b = a && a.nodeName && a.nodeName.toLowerCase();
		return "input" === b ? !!le[a.type] : "textarea" === b ? !0 : !1;
	}
	function ne(a, b, c, d) {
		Eb(d);
		b = oe(b, "onChange");
		0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({
			event: c,
			listeners: b
		}));
	}
	var pe = null, qe = null;
	function re(a) {
		se(a, 0);
	}
	function te(a) {
		if (Wa(ue(a))) return a;
	}
	function ve(a, b) {
		if ("change" === a) return b;
	}
	var we = !1;
	if (ia) {
		var xe;
		if (ia) {
			var ye = "oninput" in document;
			if (!ye) {
				var ze = document.createElement("div");
				ze.setAttribute("oninput", "return;");
				ye = "function" === typeof ze.oninput;
			}
			xe = ye;
		} else xe = !1;
		we = xe && (!document.documentMode || 9 < document.documentMode);
	}
	function Ae() {
		pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
	}
	function Be(a) {
		if ("value" === a.propertyName && te(qe)) {
			var b = [];
			ne(b, qe, a, xb(a));
			Jb(re, b);
		}
	}
	function Ce(a, b, c) {
		"focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
	}
	function De(a) {
		if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
	}
	function Ee(a, b) {
		if ("click" === a) return te(b);
	}
	function Fe(a, b) {
		if ("input" === a || "change" === a) return te(b);
	}
	function Ge(a, b) {
		return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
	}
	var He = "function" === typeof Object.is ? Object.is : Ge;
	function Ie(a, b) {
		if (He(a, b)) return !0;
		if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
		var c = Object.keys(a), d = Object.keys(b);
		if (c.length !== d.length) return !1;
		for (d = 0; d < c.length; d++) {
			var e = c[d];
			if (!ja.call(b, e) || !He(a[e], b[e])) return !1;
		}
		return !0;
	}
	function Je(a) {
		for (; a && a.firstChild;) a = a.firstChild;
		return a;
	}
	function Ke(a, b) {
		var c = Je(a);
		a = 0;
		for (var d; c;) {
			if (3 === c.nodeType) {
				d = a + c.textContent.length;
				if (a <= b && d >= b) return {
					node: c,
					offset: b - a
				};
				a = d;
			}
			a: {
				for (; c;) {
					if (c.nextSibling) {
						c = c.nextSibling;
						break a;
					}
					c = c.parentNode;
				}
				c = void 0;
			}
			c = Je(c);
		}
	}
	function Le(a, b) {
		return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
	}
	function Me() {
		for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement;) {
			try {
				var c = "string" === typeof b.contentWindow.location.href;
			} catch (d) {
				c = !1;
			}
			if (c) a = b.contentWindow;
			else break;
			b = Xa(a.document);
		}
		return b;
	}
	function Ne(a) {
		var b = a && a.nodeName && a.nodeName.toLowerCase();
		return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
	}
	function Oe(a) {
		var b = Me(), c = a.focusedElem, d = a.selectionRange;
		if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
			if (null !== d && Ne(c)) {
				if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
				else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
					a = a.getSelection();
					var e = c.textContent.length, f = Math.min(d.start, e);
					d = void 0 === d.end ? f : Math.min(d.end, e);
					!a.extend && f > d && (e = d, d = f, f = e);
					e = Ke(c, f);
					var g = Ke(c, d);
					e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
				}
			}
			b = [];
			for (a = c; a = a.parentNode;) 1 === a.nodeType && b.push({
				element: a,
				left: a.scrollLeft,
				top: a.scrollTop
			});
			"function" === typeof c.focus && c.focus();
			for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
		}
	}
	var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = !1;
	function Ue(a, b, c) {
		var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
		Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = {
			start: d.selectionStart,
			end: d.selectionEnd
		} : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {
			anchorNode: d.anchorNode,
			anchorOffset: d.anchorOffset,
			focusNode: d.focusNode,
			focusOffset: d.focusOffset
		}), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({
			event: b,
			listeners: d
		}), b.target = Qe)));
	}
	function Ve(a, b) {
		var c = {};
		c[a.toLowerCase()] = b.toLowerCase();
		c["Webkit" + a] = "webkit" + b;
		c["Moz" + a] = "moz" + b;
		return c;
	}
	var We = {
		animationend: Ve("Animation", "AnimationEnd"),
		animationiteration: Ve("Animation", "AnimationIteration"),
		animationstart: Ve("Animation", "AnimationStart"),
		transitionend: Ve("Transition", "TransitionEnd")
	}, Xe = {}, Ye = {};
	ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
	function Ze(a) {
		if (Xe[a]) return Xe[a];
		if (!We[a]) return a;
		var b = We[a], c;
		for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
		return a;
	}
	var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	function ff(a, b) {
		df.set(a, b);
		fa(b, [a]);
	}
	for (var gf = 0; gf < ef.length; gf++) {
		var hf = ef[gf];
		ff(hf.toLowerCase(), "on" + (hf[0].toUpperCase() + hf.slice(1)));
	}
	ff($e, "onAnimationEnd");
	ff(af, "onAnimationIteration");
	ff(bf, "onAnimationStart");
	ff("dblclick", "onDoubleClick");
	ff("focusin", "onFocus");
	ff("focusout", "onBlur");
	ff(cf, "onTransitionEnd");
	ha("onMouseEnter", ["mouseout", "mouseover"]);
	ha("onMouseLeave", ["mouseout", "mouseover"]);
	ha("onPointerEnter", ["pointerout", "pointerover"]);
	ha("onPointerLeave", ["pointerout", "pointerover"]);
	fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
	fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
	fa("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]);
	fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
	fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
	fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
	function nf(a, b, c) {
		var d = a.type || "unknown-event";
		a.currentTarget = c;
		Ub(d, b, void 0, a);
		a.currentTarget = null;
	}
	function se(a, b) {
		b = 0 !== (b & 4);
		for (var c = 0; c < a.length; c++) {
			var d = a[c], e = d.event;
			d = d.listeners;
			a: {
				var f = void 0;
				if (b) for (var g = d.length - 1; 0 <= g; g--) {
					var h = d[g], k = h.instance, l = h.currentTarget;
					h = h.listener;
					if (k !== f && e.isPropagationStopped()) break a;
					nf(e, h, l);
					f = k;
				}
				else for (g = 0; g < d.length; g++) {
					h = d[g];
					k = h.instance;
					l = h.currentTarget;
					h = h.listener;
					if (k !== f && e.isPropagationStopped()) break a;
					nf(e, h, l);
					f = k;
				}
			}
		}
		if (Qb) throw a = Rb, Qb = !1, Rb = null, a;
	}
	function D(a, b) {
		var c = b[of];
		void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
		var d = a + "__bubble";
		c.has(d) || (pf(b, a, 2, !1), c.add(d));
	}
	function qf(a, b, c) {
		var d = 0;
		b && (d |= 4);
		pf(c, a, d, b);
	}
	var rf = "_reactListening" + Math.random().toString(36).slice(2);
	function sf(a) {
		if (!a[rf]) {
			a[rf] = !0;
			da.forEach(function(b) {
				"selectionchange" !== b && (mf.has(b) || qf(b, !1, a), qf(b, !0, a));
			});
			var b = 9 === a.nodeType ? a : a.ownerDocument;
			null === b || b[rf] || (b[rf] = !0, qf("selectionchange", !1, b));
		}
	}
	function pf(a, b, c, d) {
		switch (jd(b)) {
			case 1:
				var e = ed;
				break;
			case 4:
				e = gd;
				break;
			default: e = fd;
		}
		c = e.bind(null, b, c, a);
		e = void 0;
		!Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = !0);
		d ? void 0 !== e ? a.addEventListener(b, c, {
			capture: !0,
			passive: e
		}) : a.addEventListener(b, c, !0) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, !1);
	}
	function hd(a, b, c, d, e) {
		var f = d;
		if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (;;) {
			if (null === d) return;
			var g = d.tag;
			if (3 === g || 4 === g) {
				var h = d.stateNode.containerInfo;
				if (h === e || 8 === h.nodeType && h.parentNode === e) break;
				if (4 === g) for (g = d.return; null !== g;) {
					var k = g.tag;
					if (3 === k || 4 === k) {
						if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
					}
					g = g.return;
				}
				for (; null !== h;) {
					g = Wc(h);
					if (null === g) return;
					k = g.tag;
					if (5 === k || 6 === k) {
						d = f = g;
						continue a;
					}
					h = h.parentNode;
				}
			}
			d = d.return;
		}
		Jb(function() {
			var d = f, e = xb(c), g = [];
			a: {
				var h = df.get(a);
				if (void 0 !== h) {
					var k = td, n = a;
					switch (a) {
						case "keypress": if (0 === od(c)) break a;
						case "keydown":
						case "keyup":
							k = Rd;
							break;
						case "focusin":
							n = "focus";
							k = Fd;
							break;
						case "focusout":
							n = "blur";
							k = Fd;
							break;
						case "beforeblur":
						case "afterblur":
							k = Fd;
							break;
						case "click": if (2 === c.button) break a;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							k = Bd;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							k = Dd;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							k = Vd;
							break;
						case $e:
						case af:
						case bf:
							k = Hd;
							break;
						case cf:
							k = Xd;
							break;
						case "scroll":
							k = vd;
							break;
						case "wheel":
							k = Zd;
							break;
						case "copy":
						case "cut":
						case "paste":
							k = Jd;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup": k = Td;
					}
					var t = 0 !== (b & 4), J = !t && "scroll" === a, x = t ? null !== h ? h + "Capture" : null : h;
					t = [];
					for (var w = d, u; null !== w;) {
						u = w;
						var F = u.stateNode;
						5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w, x), null != F && t.push(tf(w, F, u))));
						if (J) break;
						w = w.return;
					}
					0 < t.length && (h = new k(h, n, null, c, e), g.push({
						event: h,
						listeners: t
					}));
				}
			}
			if (0 === (b & 7)) {
				a: {
					h = "mouseover" === a || "pointerover" === a;
					k = "mouseout" === a || "pointerout" === a;
					if (h && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
					if (k || h) {
						h = e.window === e ? e : (h = e.ownerDocument) ? h.defaultView || h.parentWindow : window;
						if (k) {
							if (n = c.relatedTarget || c.toElement, k = d, n = n ? Wc(n) : null, null !== n && (J = Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
						} else k = null, n = d;
						if (k !== n) {
							t = Bd;
							F = "onMouseLeave";
							x = "onMouseEnter";
							w = "mouse";
							if ("pointerout" === a || "pointerover" === a) t = Td, F = "onPointerLeave", x = "onPointerEnter", w = "pointer";
							J = null == k ? h : ue(k);
							u = null == n ? h : ue(n);
							h = new t(F, w + "leave", k, c, e);
							h.target = J;
							h.relatedTarget = u;
							F = null;
							Wc(e) === d && (t = new t(x, w + "enter", n, c, e), t.target = u, t.relatedTarget = J, F = t);
							J = F;
							if (k && n) b: {
								t = k;
								x = n;
								w = 0;
								for (u = t; u; u = vf(u)) w++;
								u = 0;
								for (F = x; F; F = vf(F)) u++;
								for (; 0 < w - u;) t = vf(t), w--;
								for (; 0 < u - w;) x = vf(x), u--;
								for (; w--;) {
									if (t === x || null !== x && t === x.alternate) break b;
									t = vf(t);
									x = vf(x);
								}
								t = null;
							}
							else t = null;
							null !== k && wf(g, h, k, t, !1);
							null !== n && null !== J && wf(g, J, n, t, !0);
						}
					}
				}
				a: {
					h = d ? ue(d) : window;
					k = h.nodeName && h.nodeName.toLowerCase();
					if ("select" === k || "input" === k && "file" === h.type) var na = ve;
					else if (me(h)) if (we) na = Fe;
					else {
						na = De;
						var xa = Ce;
					}
					else (k = h.nodeName) && "input" === k.toLowerCase() && ("checkbox" === h.type || "radio" === h.type) && (na = Ee);
					if (na && (na = na(a, d))) {
						ne(g, na, c, e);
						break a;
					}
					xa && xa(a, h, d);
					"focusout" === a && (xa = h._wrapperState) && xa.controlled && "number" === h.type && cb(h, "number", h.value);
				}
				xa = d ? ue(d) : window;
				switch (a) {
					case "focusin":
						if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d, Se = null;
						break;
					case "focusout":
						Se = Re = Qe = null;
						break;
					case "mousedown":
						Te = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						Te = !1;
						Ue(g, c, e);
						break;
					case "selectionchange": if (Pe) break;
					case "keydown":
					case "keyup": Ue(g, c, e);
				}
				var $a;
				if (ae) b: {
					switch (a) {
						case "compositionstart":
							var ba = "onCompositionStart";
							break b;
						case "compositionend":
							ba = "onCompositionEnd";
							break b;
						case "compositionupdate":
							ba = "onCompositionUpdate";
							break b;
					}
					ba = void 0;
				}
				else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
				ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e, ld = "value" in kd ? kd.value : kd.textContent, ie = !0)), xa = oe(d, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e), g.push({
					event: ba,
					listeners: xa
				}), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
				if ($a = ce ? je(a, c) : ke(a, c)) d = oe(d, "onBeforeInput"), 0 < d.length && (e = new Ld("onBeforeInput", "beforeinput", null, c, e), g.push({
					event: e,
					listeners: d
				}), e.data = $a);
			}
			se(g, b);
		});
	}
	function tf(a, b, c) {
		return {
			instance: a,
			listener: b,
			currentTarget: c
		};
	}
	function oe(a, b) {
		for (var c = b + "Capture", d = []; null !== a;) {
			var e = a, f = e.stateNode;
			5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(tf(a, f, e)), f = Kb(a, b), null != f && d.push(tf(a, f, e)));
			a = a.return;
		}
		return d;
	}
	function vf(a) {
		if (null === a) return null;
		do
			a = a.return;
		while (a && 5 !== a.tag);
		return a ? a : null;
	}
	function wf(a, b, c, d, e) {
		for (var f = b._reactName, g = []; null !== c && c !== d;) {
			var h = c, k = h.alternate, l = h.stateNode;
			if (null !== k && k === d) break;
			5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), null != k && g.push(tf(c, k, h))));
			c = c.return;
		}
		0 !== g.length && a.push({
			event: b,
			listeners: g
		});
	}
	var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
	function zf(a) {
		return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
	}
	function Af(a, b, c) {
		b = zf(b);
		if (zf(a) !== b && c) throw Error(p(425));
	}
	function Bf() {}
	var Cf = null, Df = null;
	function Ef(a, b) {
		return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
	}
	var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
		return Hf.resolve(null).then(a).catch(If);
	} : Ff;
	function If(a) {
		setTimeout(function() {
			throw a;
		});
	}
	function Kf(a, b) {
		var c = b, d = 0;
		do {
			var e = c.nextSibling;
			a.removeChild(c);
			if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
				if (0 === d) {
					a.removeChild(e);
					bd(b);
					return;
				}
				d--;
			} else "$" !== c && "$?" !== c && "$!" !== c || d++;
			c = e;
		} while (c);
		bd(b);
	}
	function Lf(a) {
		for (; null != a; a = a.nextSibling) {
			var b = a.nodeType;
			if (1 === b || 3 === b) break;
			if (8 === b) {
				b = a.data;
				if ("$" === b || "$!" === b || "$?" === b) break;
				if ("/$" === b) return null;
			}
		}
		return a;
	}
	function Mf(a) {
		a = a.previousSibling;
		for (var b = 0; a;) {
			if (8 === a.nodeType) {
				var c = a.data;
				if ("$" === c || "$!" === c || "$?" === c) {
					if (0 === b) return a;
					b--;
				} else "/$" === c && b++;
			}
			a = a.previousSibling;
		}
		return null;
	}
	var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
	function Wc(a) {
		var b = a[Of];
		if (b) return b;
		for (var c = a.parentNode; c;) {
			if (b = c[uf] || c[Of]) {
				c = b.alternate;
				if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a;) {
					if (c = a[Of]) return c;
					a = Mf(a);
				}
				return b;
			}
			a = c;
			c = a.parentNode;
		}
		return null;
	}
	function Cb(a) {
		a = a[Of] || a[uf];
		return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
	}
	function ue(a) {
		if (5 === a.tag || 6 === a.tag) return a.stateNode;
		throw Error(p(33));
	}
	function Db(a) {
		return a[Pf] || null;
	}
	var Sf = [], Tf = -1;
	function Uf(a) {
		return { current: a };
	}
	function E(a) {
		0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
	}
	function G(a, b) {
		Tf++;
		Sf[Tf] = a.current;
		a.current = b;
	}
	var Vf = {}, H = Uf(Vf), Wf = Uf(!1), Xf = Vf;
	function Yf(a, b) {
		var c = a.type.contextTypes;
		if (!c) return Vf;
		var d = a.stateNode;
		if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
		var e = {}, f;
		for (f in c) e[f] = b[f];
		d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
		return e;
	}
	function Zf(a) {
		a = a.childContextTypes;
		return null !== a && void 0 !== a;
	}
	function $f() {
		E(Wf);
		E(H);
	}
	function ag(a, b, c) {
		if (H.current !== Vf) throw Error(p(168));
		G(H, b);
		G(Wf, c);
	}
	function bg(a, b, c) {
		var d = a.stateNode;
		b = b.childContextTypes;
		if ("function" !== typeof d.getChildContext) return c;
		d = d.getChildContext();
		for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
		return A({}, c, d);
	}
	function cg(a) {
		a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
		Xf = H.current;
		G(H, a);
		G(Wf, Wf.current);
		return !0;
	}
	function dg(a, b, c) {
		var d = a.stateNode;
		if (!d) throw Error(p(169));
		c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
		G(Wf, c);
	}
	var eg = null, fg = !1, gg = !1;
	function hg(a) {
		null === eg ? eg = [a] : eg.push(a);
	}
	function ig(a) {
		fg = !0;
		hg(a);
	}
	function jg() {
		if (!gg && null !== eg) {
			gg = !0;
			var a = 0, b = C;
			try {
				var c = eg;
				for (C = 1; a < c.length; a++) {
					var d = c[a];
					do
						d = d(!0);
					while (null !== d);
				}
				eg = null;
				fg = !1;
			} catch (e) {
				throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
			} finally {
				C = b, gg = !1;
			}
		}
		return null;
	}
	var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
	function tg(a, b) {
		kg[lg++] = ng;
		kg[lg++] = mg;
		mg = a;
		ng = b;
	}
	function ug(a, b, c) {
		og[pg++] = rg;
		og[pg++] = sg;
		og[pg++] = qg;
		qg = a;
		var d = rg;
		a = sg;
		var e = 32 - oc(d) - 1;
		d &= ~(1 << e);
		c += 1;
		var f = 32 - oc(b) + e;
		if (30 < f) {
			var g = e - e % 5;
			f = (d & (1 << g) - 1).toString(32);
			d >>= g;
			e -= g;
			rg = 1 << 32 - oc(b) + e | c << e | d;
			sg = f + a;
		} else rg = 1 << f | c << e | d, sg = a;
	}
	function vg(a) {
		null !== a.return && (tg(a, 1), ug(a, 1, 0));
	}
	function wg(a) {
		for (; a === mg;) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
		for (; a === qg;) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
	}
	var xg = null, yg = null, I = !1, zg = null;
	function Ag(a, b) {
		var c = Bg(5, null, null, 0);
		c.elementType = "DELETED";
		c.stateNode = b;
		c.return = a;
		b = a.deletions;
		null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
	}
	function Cg(a, b) {
		switch (a.tag) {
			case 5:
				var c = a.type;
				b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
				return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), !0) : !1;
			case 6: return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, !0) : !1;
			case 13: return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? {
				id: rg,
				overflow: sg
			} : null, a.memoizedState = {
				dehydrated: b,
				treeContext: c,
				retryLane: 1073741824
			}, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, !0) : !1;
			default: return !1;
		}
	}
	function Dg(a) {
		return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
	}
	function Eg(a) {
		if (I) {
			var b = yg;
			if (b) {
				var c = b;
				if (!Cg(a, b)) {
					if (Dg(a)) throw Error(p(418));
					b = Lf(c.nextSibling);
					var d = xg;
					b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = !1, xg = a);
				}
			} else {
				if (Dg(a)) throw Error(p(418));
				a.flags = a.flags & -4097 | 2;
				I = !1;
				xg = a;
			}
		}
	}
	function Fg(a) {
		for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) a = a.return;
		xg = a;
	}
	function Gg(a) {
		if (a !== xg) return !1;
		if (!I) return Fg(a), I = !0, !1;
		var b;
		(b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
		if (b && (b = yg)) {
			if (Dg(a)) throw Hg(), Error(p(418));
			for (; b;) Ag(a, b), b = Lf(b.nextSibling);
		}
		Fg(a);
		if (13 === a.tag) {
			a = a.memoizedState;
			a = null !== a ? a.dehydrated : null;
			if (!a) throw Error(p(317));
			a: {
				a = a.nextSibling;
				for (b = 0; a;) {
					if (8 === a.nodeType) {
						var c = a.data;
						if ("/$" === c) {
							if (0 === b) {
								yg = Lf(a.nextSibling);
								break a;
							}
							b--;
						} else "$" !== c && "$!" !== c && "$?" !== c || b++;
					}
					a = a.nextSibling;
				}
				yg = null;
			}
		} else yg = xg ? Lf(a.stateNode.nextSibling) : null;
		return !0;
	}
	function Hg() {
		for (var a = yg; a;) a = Lf(a.nextSibling);
	}
	function Ig() {
		yg = xg = null;
		I = !1;
	}
	function Jg(a) {
		null === zg ? zg = [a] : zg.push(a);
	}
	var Kg = ua.ReactCurrentBatchConfig;
	function Lg(a, b) {
		if (a && a.defaultProps) {
			b = A({}, b);
			a = a.defaultProps;
			for (var c in a) void 0 === b[c] && (b[c] = a[c]);
			return b;
		}
		return b;
	}
	var Mg = Uf(null), Ng = null, Og = null, Pg = null;
	function Qg() {
		Pg = Og = Ng = null;
	}
	function Rg(a) {
		var b = Mg.current;
		E(Mg);
		a._currentValue = b;
	}
	function Sg(a, b, c) {
		for (; null !== a;) {
			var d = a.alternate;
			(a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
			if (a === c) break;
			a = a.return;
		}
	}
	function Tg(a, b) {
		Ng = a;
		Pg = Og = null;
		a = a.dependencies;
		null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (Ug = !0), a.firstContext = null);
	}
	function Vg(a) {
		var b = a._currentValue;
		if (Pg !== a) if (a = {
			context: a,
			memoizedValue: b,
			next: null
		}, null === Og) {
			if (null === Ng) throw Error(p(308));
			Og = a;
			Ng.dependencies = {
				lanes: 0,
				firstContext: a
			};
		} else Og = Og.next = a;
		return b;
	}
	var Wg = null;
	function Xg(a) {
		null === Wg ? Wg = [a] : Wg.push(a);
	}
	function Yg(a, b, c, d) {
		var e = b.interleaved;
		null === e ? (c.next = c, Xg(b)) : (c.next = e.next, e.next = c);
		b.interleaved = c;
		return Zg(a, d);
	}
	function Zg(a, b) {
		a.lanes |= b;
		var c = a.alternate;
		null !== c && (c.lanes |= b);
		c = a;
		for (a = a.return; null !== a;) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
		return 3 === c.tag ? c.stateNode : null;
	}
	var $g = !1;
	function ah(a) {
		a.updateQueue = {
			baseState: a.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				interleaved: null,
				lanes: 0
			},
			effects: null
		};
	}
	function bh(a, b) {
		a = a.updateQueue;
		b.updateQueue === a && (b.updateQueue = {
			baseState: a.baseState,
			firstBaseUpdate: a.firstBaseUpdate,
			lastBaseUpdate: a.lastBaseUpdate,
			shared: a.shared,
			effects: a.effects
		});
	}
	function ch(a, b) {
		return {
			eventTime: a,
			lane: b,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function dh(a, b, c) {
		var d = a.updateQueue;
		if (null === d) return null;
		d = d.shared;
		if (0 !== (K & 2)) {
			var e = d.pending;
			null === e ? b.next = b : (b.next = e.next, e.next = b);
			d.pending = b;
			return Zg(a, c);
		}
		e = d.interleaved;
		null === e ? (b.next = b, Xg(d)) : (b.next = e.next, e.next = b);
		d.interleaved = b;
		return Zg(a, c);
	}
	function eh(a, b, c) {
		b = b.updateQueue;
		if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
			var d = b.lanes;
			d &= a.pendingLanes;
			c |= d;
			b.lanes = c;
			Cc(a, c);
		}
	}
	function fh(a, b) {
		var c = a.updateQueue, d = a.alternate;
		if (null !== d && (d = d.updateQueue, c === d)) {
			var e = null, f = null;
			c = c.firstBaseUpdate;
			if (null !== c) {
				do {
					var g = {
						eventTime: c.eventTime,
						lane: c.lane,
						tag: c.tag,
						payload: c.payload,
						callback: c.callback,
						next: null
					};
					null === f ? e = f = g : f = f.next = g;
					c = c.next;
				} while (null !== c);
				null === f ? e = f = b : f = f.next = b;
			} else e = f = b;
			c = {
				baseState: d.baseState,
				firstBaseUpdate: e,
				lastBaseUpdate: f,
				shared: d.shared,
				effects: d.effects
			};
			a.updateQueue = c;
			return;
		}
		a = c.lastBaseUpdate;
		null === a ? c.firstBaseUpdate = b : a.next = b;
		c.lastBaseUpdate = b;
	}
	function gh(a, b, c, d) {
		var e = a.updateQueue;
		$g = !1;
		var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
		if (null !== h) {
			e.shared.pending = null;
			var k = h, l = k.next;
			k.next = null;
			null === g ? f = l : g.next = l;
			g = k;
			var m = a.alternate;
			null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
		}
		if (null !== f) {
			var q = e.baseState;
			g = 0;
			m = l = k = null;
			h = f;
			do {
				var r = h.lane, y = h.eventTime;
				if ((d & r) === r) {
					null !== m && (m = m.next = {
						eventTime: y,
						lane: 0,
						tag: h.tag,
						payload: h.payload,
						callback: h.callback,
						next: null
					});
					a: {
						var n = a, t = h;
						r = b;
						y = c;
						switch (t.tag) {
							case 1:
								n = t.payload;
								if ("function" === typeof n) {
									q = n.call(y, q, r);
									break a;
								}
								q = n;
								break a;
							case 3: n.flags = n.flags & -65537 | 128;
							case 0:
								n = t.payload;
								r = "function" === typeof n ? n.call(y, q, r) : n;
								if (null === r || void 0 === r) break a;
								q = A({}, q, r);
								break a;
							case 2: $g = !0;
						}
					}
					null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [h] : r.push(h));
				} else y = {
					eventTime: y,
					lane: r,
					tag: h.tag,
					payload: h.payload,
					callback: h.callback,
					next: null
				}, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
				h = h.next;
				if (null === h) if (h = e.shared.pending, null === h) break;
				else r = h, h = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
			} while (1);
			null === m && (k = q);
			e.baseState = k;
			e.firstBaseUpdate = l;
			e.lastBaseUpdate = m;
			b = e.shared.interleaved;
			if (null !== b) {
				e = b;
				do
					g |= e.lane, e = e.next;
				while (e !== b);
			} else null === f && (e.shared.lanes = 0);
			hh |= g;
			a.lanes = g;
			a.memoizedState = q;
		}
	}
	function ih(a, b, c) {
		a = b.effects;
		b.effects = null;
		if (null !== a) for (b = 0; b < a.length; b++) {
			var d = a[b], e = d.callback;
			if (null !== e) {
				d.callback = null;
				d = c;
				if ("function" !== typeof e) throw Error(p(191, e));
				e.call(d);
			}
		}
	}
	var jh = new aa.Component().refs;
	function kh(a, b, c, d) {
		b = a.memoizedState;
		c = c(d, b);
		c = null === c || void 0 === c ? b : A({}, b, c);
		a.memoizedState = c;
		0 === a.lanes && (a.updateQueue.baseState = c);
	}
	var nh = {
		isMounted: function(a) {
			return (a = a._reactInternals) ? Vb(a) === a : !1;
		},
		enqueueSetState: function(a, b, c) {
			a = a._reactInternals;
			var d = L(), e = lh(a), f = ch(d, e);
			f.payload = b;
			void 0 !== c && null !== c && (f.callback = c);
			b = dh(a, f, e);
			null !== b && (mh(b, a, e, d), eh(b, a, e));
		},
		enqueueReplaceState: function(a, b, c) {
			a = a._reactInternals;
			var d = L(), e = lh(a), f = ch(d, e);
			f.tag = 1;
			f.payload = b;
			void 0 !== c && null !== c && (f.callback = c);
			b = dh(a, f, e);
			null !== b && (mh(b, a, e, d), eh(b, a, e));
		},
		enqueueForceUpdate: function(a, b) {
			a = a._reactInternals;
			var c = L(), d = lh(a), e = ch(c, d);
			e.tag = 2;
			void 0 !== b && null !== b && (e.callback = b);
			b = dh(a, e, d);
			null !== b && (mh(b, a, d, c), eh(b, a, d));
		}
	};
	function oh(a, b, c, d, e, f, g) {
		a = a.stateNode;
		return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : !0;
	}
	function ph(a, b, c) {
		var d = !1, e = Vf;
		var f = b.contextType;
		"object" === typeof f && null !== f ? f = Vg(f) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
		b = new b(c, f);
		a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
		b.updater = nh;
		a.stateNode = b;
		b._reactInternals = a;
		d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
		return b;
	}
	function qh(a, b, c, d) {
		a = b.state;
		"function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
		"function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
		b.state !== a && nh.enqueueReplaceState(b, b.state, null);
	}
	function rh(a, b, c, d) {
		var e = a.stateNode;
		e.props = c;
		e.state = a.memoizedState;
		e.refs = jh;
		ah(a);
		var f = b.contextType;
		"object" === typeof f && null !== f ? e.context = Vg(f) : (f = Zf(b) ? Xf : H.current, e.context = Yf(a, f));
		e.state = a.memoizedState;
		f = b.getDerivedStateFromProps;
		"function" === typeof f && (kh(a, b, f, c), e.state = a.memoizedState);
		"function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && nh.enqueueReplaceState(e, e.state, null), gh(a, c, e, d), e.state = a.memoizedState);
		"function" === typeof e.componentDidMount && (a.flags |= 4194308);
	}
	function sh(a, b, c) {
		a = c.ref;
		if (null !== a && "function" !== typeof a && "object" !== typeof a) {
			if (c._owner) {
				c = c._owner;
				if (c) {
					if (1 !== c.tag) throw Error(p(309));
					var d = c.stateNode;
				}
				if (!d) throw Error(p(147, a));
				var e = d, f = "" + a;
				if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
				b = function(a) {
					var b = e.refs;
					b === jh && (b = e.refs = {});
					null === a ? delete b[f] : b[f] = a;
				};
				b._stringRef = f;
				return b;
			}
			if ("string" !== typeof a) throw Error(p(284));
			if (!c._owner) throw Error(p(290, a));
		}
		return a;
	}
	function th(a, b) {
		a = Object.prototype.toString.call(b);
		throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
	}
	function uh(a) {
		var b = a._init;
		return b(a._payload);
	}
	function vh(a) {
		function b(b, c) {
			if (a) {
				var d = b.deletions;
				null === d ? (b.deletions = [c], b.flags |= 16) : d.push(c);
			}
		}
		function c(c, d) {
			if (!a) return null;
			for (; null !== d;) b(c, d), d = d.sibling;
			return null;
		}
		function d(a, b) {
			for (a = /* @__PURE__ */ new Map(); null !== b;) null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
			return a;
		}
		function e(a, b) {
			a = wh(a, b);
			a.index = 0;
			a.sibling = null;
			return a;
		}
		function f(b, c, d) {
			b.index = d;
			if (!a) return b.flags |= 1048576, c;
			d = b.alternate;
			if (null !== d) return d = d.index, d < c ? (b.flags |= 2, c) : d;
			b.flags |= 2;
			return c;
		}
		function g(b) {
			a && null === b.alternate && (b.flags |= 2);
			return b;
		}
		function h(a, b, c, d) {
			if (null === b || 6 !== b.tag) return b = xh(c, a.mode, d), b.return = a, b;
			b = e(b, c);
			b.return = a;
			return b;
		}
		function k(a, b, c, d) {
			var f = c.type;
			if (f === ya) return m(a, b, c.props.children, d, c.key);
			if (null !== b && (b.elementType === f || "object" === typeof f && null !== f && f.$$typeof === Ha && uh(f) === b.type)) return d = e(b, c.props), d.ref = sh(a, b, c), d.return = a, d;
			d = yh(c.type, c.key, c.props, null, a.mode, d);
			d.ref = sh(a, b, c);
			d.return = a;
			return d;
		}
		function l(a, b, c, d) {
			if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = zh(c, a.mode, d), b.return = a, b;
			b = e(b, c.children || []);
			b.return = a;
			return b;
		}
		function m(a, b, c, d, f) {
			if (null === b || 7 !== b.tag) return b = Ah(c, a.mode, d, f), b.return = a, b;
			b = e(b, c);
			b.return = a;
			return b;
		}
		function q(a, b, c) {
			if ("string" === typeof b && "" !== b || "number" === typeof b) return b = xh("" + b, a.mode, c), b.return = a, b;
			if ("object" === typeof b && null !== b) {
				switch (b.$$typeof) {
					case va: return c = yh(b.type, b.key, b.props, null, a.mode, c), c.ref = sh(a, null, b), c.return = a, c;
					case wa: return b = zh(b, a.mode, c), b.return = a, b;
					case Ha:
						var d = b._init;
						return q(a, d(b._payload), c);
				}
				if (eb(b) || Ka(b)) return b = Ah(b, a.mode, c, null), b.return = a, b;
				th(a, b);
			}
			return null;
		}
		function r(a, b, c, d) {
			var e = null !== b ? b.key : null;
			if ("string" === typeof c && "" !== c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);
			if ("object" === typeof c && null !== c) {
				switch (c.$$typeof) {
					case va: return c.key === e ? k(a, b, c, d) : null;
					case wa: return c.key === e ? l(a, b, c, d) : null;
					case Ha: return e = c._init, r(a, b, e(c._payload), d);
				}
				if (eb(c) || Ka(c)) return null !== e ? null : m(a, b, c, d, null);
				th(a, c);
			}
			return null;
		}
		function y(a, b, c, d, e) {
			if ("string" === typeof d && "" !== d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);
			if ("object" === typeof d && null !== d) {
				switch (d.$$typeof) {
					case va: return a = a.get(null === d.key ? c : d.key) || null, k(b, a, d, e);
					case wa: return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
					case Ha:
						var f = d._init;
						return y(a, b, c, f(d._payload), e);
				}
				if (eb(d) || Ka(d)) return a = a.get(c) || null, m(b, a, d, e, null);
				th(b, d);
			}
			return null;
		}
		function n(e, g, h, k) {
			for (var l = null, m = null, u = g, w = g = 0, x = null; null !== u && w < h.length; w++) {
				u.index > w ? (x = u, u = null) : x = u.sibling;
				var n = r(e, u, h[w], k);
				if (null === n) {
					null === u && (u = x);
					break;
				}
				a && u && null === n.alternate && b(e, u);
				g = f(n, g, w);
				null === m ? l = n : m.sibling = n;
				m = n;
				u = x;
			}
			if (w === h.length) return c(e, u), I && tg(e, w), l;
			if (null === u) {
				for (; w < h.length; w++) u = q(e, h[w], k), null !== u && (g = f(u, g, w), null === m ? l = u : m.sibling = u, m = u);
				I && tg(e, w);
				return l;
			}
			for (u = d(e, u); w < h.length; w++) x = y(u, e, w, h[w], k), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), g = f(x, g, w), null === m ? l = x : m.sibling = x, m = x);
			a && u.forEach(function(a) {
				return b(e, a);
			});
			I && tg(e, w);
			return l;
		}
		function t(e, g, h, k) {
			var l = Ka(h);
			if ("function" !== typeof l) throw Error(p(150));
			h = l.call(h);
			if (null == h) throw Error(p(151));
			for (var u = l = null, m = g, w = g = 0, x = null, n = h.next(); null !== m && !n.done; w++, n = h.next()) {
				m.index > w ? (x = m, m = null) : x = m.sibling;
				var t = r(e, m, n.value, k);
				if (null === t) {
					null === m && (m = x);
					break;
				}
				a && m && null === t.alternate && b(e, m);
				g = f(t, g, w);
				null === u ? l = t : u.sibling = t;
				u = t;
				m = x;
			}
			if (n.done) return c(e, m), I && tg(e, w), l;
			if (null === m) {
				for (; !n.done; w++, n = h.next()) n = q(e, n.value, k), null !== n && (g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
				I && tg(e, w);
				return l;
			}
			for (m = d(e, m); !n.done; w++, n = h.next()) n = y(m, e, w, n.value, k), null !== n && (a && null !== n.alternate && m.delete(null === n.key ? w : n.key), g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
			a && m.forEach(function(a) {
				return b(e, a);
			});
			I && tg(e, w);
			return l;
		}
		function J(a, d, f, h) {
			"object" === typeof f && null !== f && f.type === ya && null === f.key && (f = f.props.children);
			if ("object" === typeof f && null !== f) {
				switch (f.$$typeof) {
					case va:
						a: {
							for (var k = f.key, l = d; null !== l;) {
								if (l.key === k) {
									k = f.type;
									if (k === ya) {
										if (7 === l.tag) {
											c(a, l.sibling);
											d = e(l, f.props.children);
											d.return = a;
											a = d;
											break a;
										}
									} else if (l.elementType === k || "object" === typeof k && null !== k && k.$$typeof === Ha && uh(k) === l.type) {
										c(a, l.sibling);
										d = e(l, f.props);
										d.ref = sh(a, l, f);
										d.return = a;
										a = d;
										break a;
									}
									c(a, l);
									break;
								} else b(a, l);
								l = l.sibling;
							}
							f.type === ya ? (d = Ah(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = yh(f.type, f.key, f.props, null, a.mode, h), h.ref = sh(a, d, f), h.return = a, a = h);
						}
						return g(a);
					case wa:
						a: {
							for (l = f.key; null !== d;) {
								if (d.key === l) if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
									c(a, d.sibling);
									d = e(d, f.children || []);
									d.return = a;
									a = d;
									break a;
								} else {
									c(a, d);
									break;
								}
								else b(a, d);
								d = d.sibling;
							}
							d = zh(f, a.mode, h);
							d.return = a;
							a = d;
						}
						return g(a);
					case Ha: return l = f._init, J(a, d, l(f._payload), h);
				}
				if (eb(f)) return n(a, d, f, h);
				if (Ka(f)) return t(a, d, f, h);
				th(a, f);
			}
			return "string" === typeof f && "" !== f || "number" === typeof f ? (f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = xh(f, a.mode, h), d.return = a, a = d), g(a)) : c(a, d);
		}
		return J;
	}
	var Bh = vh(!0), Ch = vh(!1), Dh = {}, Eh = Uf(Dh), Fh = Uf(Dh), Gh = Uf(Dh);
	function Hh(a) {
		if (a === Dh) throw Error(p(174));
		return a;
	}
	function Ih(a, b) {
		G(Gh, b);
		G(Fh, a);
		G(Eh, Dh);
		a = b.nodeType;
		switch (a) {
			case 9:
			case 11:
				b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
				break;
			default: a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
		}
		E(Eh);
		G(Eh, b);
	}
	function Jh() {
		E(Eh);
		E(Fh);
		E(Gh);
	}
	function Kh(a) {
		Hh(Gh.current);
		var b = Hh(Eh.current);
		var c = lb(b, a.type);
		b !== c && (G(Fh, a), G(Eh, c));
	}
	function Lh(a) {
		Fh.current === a && (E(Eh), E(Fh));
	}
	var M = Uf(0);
	function Mh(a) {
		for (var b = a; null !== b;) {
			if (13 === b.tag) {
				var c = b.memoizedState;
				if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
			} else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
				if (0 !== (b.flags & 128)) return b;
			} else if (null !== b.child) {
				b.child.return = b;
				b = b.child;
				continue;
			}
			if (b === a) break;
			for (; null === b.sibling;) {
				if (null === b.return || b.return === a) return null;
				b = b.return;
			}
			b.sibling.return = b.return;
			b = b.sibling;
		}
		return null;
	}
	var Nh = [];
	function Oh() {
		for (var a = 0; a < Nh.length; a++) Nh[a]._workInProgressVersionPrimary = null;
		Nh.length = 0;
	}
	var Ph = ua.ReactCurrentDispatcher, Qh = ua.ReactCurrentBatchConfig, Rh = 0, N = null, O = null, P = null, Sh = !1, Th = !1, Uh = 0, Vh = 0;
	function Q() {
		throw Error(p(321));
	}
	function Wh(a, b) {
		if (null === b) return !1;
		for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return !1;
		return !0;
	}
	function Xh(a, b, c, d, e, f) {
		Rh = f;
		N = b;
		b.memoizedState = null;
		b.updateQueue = null;
		b.lanes = 0;
		Ph.current = null === a || null === a.memoizedState ? Yh : Zh;
		a = c(d, e);
		if (Th) {
			f = 0;
			do {
				Th = !1;
				Uh = 0;
				if (25 <= f) throw Error(p(301));
				f += 1;
				P = O = null;
				b.updateQueue = null;
				Ph.current = $h;
				a = c(d, e);
			} while (Th);
		}
		Ph.current = ai;
		b = null !== O && null !== O.next;
		Rh = 0;
		P = O = N = null;
		Sh = !1;
		if (b) throw Error(p(300));
		return a;
	}
	function bi() {
		var a = 0 !== Uh;
		Uh = 0;
		return a;
	}
	function ci() {
		var a = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		null === P ? N.memoizedState = P = a : P = P.next = a;
		return P;
	}
	function di() {
		if (null === O) {
			var a = N.alternate;
			a = null !== a ? a.memoizedState : null;
		} else a = O.next;
		var b = null === P ? N.memoizedState : P.next;
		if (null !== b) P = b, O = a;
		else {
			if (null === a) throw Error(p(310));
			O = a;
			a = {
				memoizedState: O.memoizedState,
				baseState: O.baseState,
				baseQueue: O.baseQueue,
				queue: O.queue,
				next: null
			};
			null === P ? N.memoizedState = P = a : P = P.next = a;
		}
		return P;
	}
	function ei(a, b) {
		return "function" === typeof b ? b(a) : b;
	}
	function fi(a) {
		var b = di(), c = b.queue;
		if (null === c) throw Error(p(311));
		c.lastRenderedReducer = a;
		var d = O, e = d.baseQueue, f = c.pending;
		if (null !== f) {
			if (null !== e) {
				var g = e.next;
				e.next = f.next;
				f.next = g;
			}
			d.baseQueue = e = f;
			c.pending = null;
		}
		if (null !== e) {
			f = e.next;
			d = d.baseState;
			var h = g = null, k = null, l = f;
			do {
				var m = l.lane;
				if ((Rh & m) === m) null !== k && (k = k.next = {
					lane: 0,
					action: l.action,
					hasEagerState: l.hasEagerState,
					eagerState: l.eagerState,
					next: null
				}), d = l.hasEagerState ? l.eagerState : a(d, l.action);
				else {
					var q = {
						lane: m,
						action: l.action,
						hasEagerState: l.hasEagerState,
						eagerState: l.eagerState,
						next: null
					};
					null === k ? (h = k = q, g = d) : k = k.next = q;
					N.lanes |= m;
					hh |= m;
				}
				l = l.next;
			} while (null !== l && l !== f);
			null === k ? g = d : k.next = h;
			He(d, b.memoizedState) || (Ug = !0);
			b.memoizedState = d;
			b.baseState = g;
			b.baseQueue = k;
			c.lastRenderedState = d;
		}
		a = c.interleaved;
		if (null !== a) {
			e = a;
			do
				f = e.lane, N.lanes |= f, hh |= f, e = e.next;
			while (e !== a);
		} else null === e && (c.lanes = 0);
		return [b.memoizedState, c.dispatch];
	}
	function gi(a) {
		var b = di(), c = b.queue;
		if (null === c) throw Error(p(311));
		c.lastRenderedReducer = a;
		var d = c.dispatch, e = c.pending, f = b.memoizedState;
		if (null !== e) {
			c.pending = null;
			var g = e = e.next;
			do
				f = a(f, g.action), g = g.next;
			while (g !== e);
			He(f, b.memoizedState) || (Ug = !0);
			b.memoizedState = f;
			null === b.baseQueue && (b.baseState = f);
			c.lastRenderedState = f;
		}
		return [f, d];
	}
	function hi() {}
	function ii(a, b) {
		var c = N, d = di(), e = b(), f = !He(d.memoizedState, e);
		f && (d.memoizedState = e, Ug = !0);
		d = d.queue;
		ji(ki.bind(null, c, d, a), [a]);
		if (d.getSnapshot !== b || f || null !== P && P.memoizedState.tag & 1) {
			c.flags |= 2048;
			li(9, mi.bind(null, c, d, e, b), void 0, null);
			if (null === R) throw Error(p(349));
			0 !== (Rh & 30) || ni(c, b, e);
		}
		return e;
	}
	function ni(a, b, c) {
		a.flags |= 16384;
		a = {
			getSnapshot: b,
			value: c
		};
		b = N.updateQueue;
		null === b ? (b = {
			lastEffect: null,
			stores: null
		}, N.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
	}
	function mi(a, b, c, d) {
		b.value = c;
		b.getSnapshot = d;
		oi(b) && pi(a);
	}
	function ki(a, b, c) {
		return c(function() {
			oi(b) && pi(a);
		});
	}
	function oi(a) {
		var b = a.getSnapshot;
		a = a.value;
		try {
			var c = b();
			return !He(a, c);
		} catch (d) {
			return !0;
		}
	}
	function pi(a) {
		var b = Zg(a, 1);
		null !== b && mh(b, a, 1, -1);
	}
	function qi(a) {
		var b = ci();
		"function" === typeof a && (a = a());
		b.memoizedState = b.baseState = a;
		a = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: ei,
			lastRenderedState: a
		};
		b.queue = a;
		a = a.dispatch = ri.bind(null, N, a);
		return [b.memoizedState, a];
	}
	function li(a, b, c, d) {
		a = {
			tag: a,
			create: b,
			destroy: c,
			deps: d,
			next: null
		};
		b = N.updateQueue;
		null === b ? (b = {
			lastEffect: null,
			stores: null
		}, N.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
		return a;
	}
	function si() {
		return di().memoizedState;
	}
	function ti(a, b, c, d) {
		var e = ci();
		N.flags |= a;
		e.memoizedState = li(1 | b, c, void 0, void 0 === d ? null : d);
	}
	function ui(a, b, c, d) {
		var e = di();
		d = void 0 === d ? null : d;
		var f = void 0;
		if (null !== O) {
			var g = O.memoizedState;
			f = g.destroy;
			if (null !== d && Wh(d, g.deps)) {
				e.memoizedState = li(b, c, f, d);
				return;
			}
		}
		N.flags |= a;
		e.memoizedState = li(1 | b, c, f, d);
	}
	function vi(a, b) {
		return ti(8390656, 8, a, b);
	}
	function ji(a, b) {
		return ui(2048, 8, a, b);
	}
	function wi(a, b) {
		return ui(4, 2, a, b);
	}
	function xi(a, b) {
		return ui(4, 4, a, b);
	}
	function yi(a, b) {
		if ("function" === typeof b) return a = a(), b(a), function() {
			b(null);
		};
		if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
			b.current = null;
		};
	}
	function zi(a, b, c) {
		c = null !== c && void 0 !== c ? c.concat([a]) : null;
		return ui(4, 4, yi.bind(null, b, a), c);
	}
	function Ai() {}
	function Bi(a, b) {
		var c = di();
		b = void 0 === b ? null : b;
		var d = c.memoizedState;
		if (null !== d && null !== b && Wh(b, d[1])) return d[0];
		c.memoizedState = [a, b];
		return a;
	}
	function Ci(a, b) {
		var c = di();
		b = void 0 === b ? null : b;
		var d = c.memoizedState;
		if (null !== d && null !== b && Wh(b, d[1])) return d[0];
		a = a();
		c.memoizedState = [a, b];
		return a;
	}
	function Di(a, b, c) {
		if (0 === (Rh & 21)) return a.baseState && (a.baseState = !1, Ug = !0), a.memoizedState = c;
		He(c, b) || (c = yc(), N.lanes |= c, hh |= c, a.baseState = !0);
		return b;
	}
	function Ei(a, b) {
		var c = C;
		C = 0 !== c && 4 > c ? c : 4;
		a(!0);
		var d = Qh.transition;
		Qh.transition = {};
		try {
			a(!1), b();
		} finally {
			C = c, Qh.transition = d;
		}
	}
	function Fi() {
		return di().memoizedState;
	}
	function Gi(a, b, c) {
		var d = lh(a);
		c = {
			lane: d,
			action: c,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (Hi(a)) Ii(b, c);
		else if (c = Yg(a, b, c, d), null !== c) {
			var e = L();
			mh(c, a, d, e);
			Ji(c, b, d);
		}
	}
	function ri(a, b, c) {
		var d = lh(a), e = {
			lane: d,
			action: c,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (Hi(a)) Ii(b, e);
		else {
			var f = a.alternate;
			if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
				var g = b.lastRenderedState, h = f(g, c);
				e.hasEagerState = !0;
				e.eagerState = h;
				if (He(h, g)) {
					var k = b.interleaved;
					null === k ? (e.next = e, Xg(b)) : (e.next = k.next, k.next = e);
					b.interleaved = e;
					return;
				}
			} catch (l) {}
			c = Yg(a, b, e, d);
			null !== c && (e = L(), mh(c, a, d, e), Ji(c, b, d));
		}
	}
	function Hi(a) {
		var b = a.alternate;
		return a === N || null !== b && b === N;
	}
	function Ii(a, b) {
		Th = Sh = !0;
		var c = a.pending;
		null === c ? b.next = b : (b.next = c.next, c.next = b);
		a.pending = b;
	}
	function Ji(a, b, c) {
		if (0 !== (c & 4194240)) {
			var d = b.lanes;
			d &= a.pendingLanes;
			c |= d;
			b.lanes = c;
			Cc(a, c);
		}
	}
	var ai = {
		readContext: Vg,
		useCallback: Q,
		useContext: Q,
		useEffect: Q,
		useImperativeHandle: Q,
		useInsertionEffect: Q,
		useLayoutEffect: Q,
		useMemo: Q,
		useReducer: Q,
		useRef: Q,
		useState: Q,
		useDebugValue: Q,
		useDeferredValue: Q,
		useTransition: Q,
		useMutableSource: Q,
		useSyncExternalStore: Q,
		useId: Q,
		unstable_isNewReconciler: !1
	}, Yh = {
		readContext: Vg,
		useCallback: function(a, b) {
			ci().memoizedState = [a, void 0 === b ? null : b];
			return a;
		},
		useContext: Vg,
		useEffect: vi,
		useImperativeHandle: function(a, b, c) {
			c = null !== c && void 0 !== c ? c.concat([a]) : null;
			return ti(4194308, 4, yi.bind(null, b, a), c);
		},
		useLayoutEffect: function(a, b) {
			return ti(4194308, 4, a, b);
		},
		useInsertionEffect: function(a, b) {
			return ti(4, 2, a, b);
		},
		useMemo: function(a, b) {
			var c = ci();
			b = void 0 === b ? null : b;
			a = a();
			c.memoizedState = [a, b];
			return a;
		},
		useReducer: function(a, b, c) {
			var d = ci();
			b = void 0 !== c ? c(b) : b;
			d.memoizedState = d.baseState = b;
			a = {
				pending: null,
				interleaved: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: a,
				lastRenderedState: b
			};
			d.queue = a;
			a = a.dispatch = Gi.bind(null, N, a);
			return [d.memoizedState, a];
		},
		useRef: function(a) {
			var b = ci();
			a = { current: a };
			return b.memoizedState = a;
		},
		useState: qi,
		useDebugValue: Ai,
		useDeferredValue: function(a) {
			return ci().memoizedState = a;
		},
		useTransition: function() {
			var a = qi(!1), b = a[0];
			a = Ei.bind(null, a[1]);
			ci().memoizedState = a;
			return [b, a];
		},
		useMutableSource: function() {},
		useSyncExternalStore: function(a, b, c) {
			var d = N, e = ci();
			if (I) {
				if (void 0 === c) throw Error(p(407));
				c = c();
			} else {
				c = b();
				if (null === R) throw Error(p(349));
				0 !== (Rh & 30) || ni(d, b, c);
			}
			e.memoizedState = c;
			var f = {
				value: c,
				getSnapshot: b
			};
			e.queue = f;
			vi(ki.bind(null, d, f, a), [a]);
			d.flags |= 2048;
			li(9, mi.bind(null, d, f, c, b), void 0, null);
			return c;
		},
		useId: function() {
			var a = ci(), b = R.identifierPrefix;
			if (I) {
				var c = sg;
				var d = rg;
				c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
				b = ":" + b + "R" + c;
				c = Uh++;
				0 < c && (b += "H" + c.toString(32));
				b += ":";
			} else c = Vh++, b = ":" + b + "r" + c.toString(32) + ":";
			return a.memoizedState = b;
		},
		unstable_isNewReconciler: !1
	}, Zh = {
		readContext: Vg,
		useCallback: Bi,
		useContext: Vg,
		useEffect: ji,
		useImperativeHandle: zi,
		useInsertionEffect: wi,
		useLayoutEffect: xi,
		useMemo: Ci,
		useReducer: fi,
		useRef: si,
		useState: function() {
			return fi(ei);
		},
		useDebugValue: Ai,
		useDeferredValue: function(a) {
			return Di(di(), O.memoizedState, a);
		},
		useTransition: function() {
			return [fi(ei)[0], di().memoizedState];
		},
		useMutableSource: hi,
		useSyncExternalStore: ii,
		useId: Fi,
		unstable_isNewReconciler: !1
	}, $h = {
		readContext: Vg,
		useCallback: Bi,
		useContext: Vg,
		useEffect: ji,
		useImperativeHandle: zi,
		useInsertionEffect: wi,
		useLayoutEffect: xi,
		useMemo: Ci,
		useReducer: gi,
		useRef: si,
		useState: function() {
			return gi(ei);
		},
		useDebugValue: Ai,
		useDeferredValue: function(a) {
			var b = di();
			return null === O ? b.memoizedState = a : Di(b, O.memoizedState, a);
		},
		useTransition: function() {
			return [gi(ei)[0], di().memoizedState];
		},
		useMutableSource: hi,
		useSyncExternalStore: ii,
		useId: Fi,
		unstable_isNewReconciler: !1
	};
	function Ki(a, b) {
		try {
			var c = "", d = b;
			do
				c += Pa(d), d = d.return;
			while (d);
			var e = c;
		} catch (f) {
			e = "\nError generating stack: " + f.message + "\n" + f.stack;
		}
		return {
			value: a,
			source: b,
			stack: e,
			digest: null
		};
	}
	function Li(a, b, c) {
		return {
			value: a,
			source: null,
			stack: null != c ? c : null,
			digest: null != b ? b : null
		};
	}
	function Mi(a, b) {
		try {
			console.error(b.value);
		} catch (c) {
			setTimeout(function() {
				throw c;
			});
		}
	}
	var Ni = "function" === typeof WeakMap ? WeakMap : Map;
	function Oi(a, b, c) {
		c = ch(-1, c);
		c.tag = 3;
		c.payload = { element: null };
		var d = b.value;
		c.callback = function() {
			Pi || (Pi = !0, Qi = d);
			Mi(a, b);
		};
		return c;
	}
	function Ri(a, b, c) {
		c = ch(-1, c);
		c.tag = 3;
		var d = a.type.getDerivedStateFromError;
		if ("function" === typeof d) {
			var e = b.value;
			c.payload = function() {
				return d(e);
			};
			c.callback = function() {
				Mi(a, b);
			};
		}
		var f = a.stateNode;
		null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
			Mi(a, b);
			"function" !== typeof d && (null === Si ? Si = /* @__PURE__ */ new Set([this]) : Si.add(this));
			var c = b.stack;
			this.componentDidCatch(b.value, { componentStack: null !== c ? c : "" });
		});
		return c;
	}
	function Ti(a, b, c) {
		var d = a.pingCache;
		if (null === d) {
			d = a.pingCache = new Ni();
			var e = /* @__PURE__ */ new Set();
			d.set(b, e);
		} else e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
		e.has(c) || (e.add(c), a = Ui.bind(null, a, b, c), b.then(a, a));
	}
	function Vi(a) {
		do {
			var b;
			if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? !0 : !1 : !0;
			if (b) return a;
			a = a.return;
		} while (null !== a);
		return null;
	}
	function Wi(a, b, c, d, e) {
		if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = ch(-1, 1), b.tag = 2, dh(c, b, 1))), c.lanes |= 1), a;
		a.flags |= 65536;
		a.lanes = e;
		return a;
	}
	var Xi = ua.ReactCurrentOwner, Ug = !1;
	function Yi(a, b, c, d) {
		b.child = null === a ? Ch(b, null, c, d) : Bh(b, a.child, c, d);
	}
	function Zi(a, b, c, d, e) {
		c = c.render;
		var f = b.ref;
		Tg(b, e);
		d = Xh(a, b, c, d, f, e);
		c = bi();
		if (null !== a && !Ug) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
		I && c && vg(b);
		b.flags |= 1;
		Yi(a, b, d, e);
		return b.child;
	}
	function aj(a, b, c, d, e) {
		if (null === a) {
			var f = c.type;
			if ("function" === typeof f && !bj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, cj(a, b, f, d, e);
			a = yh(c.type, null, d, b, b.mode, e);
			a.ref = b.ref;
			a.return = b;
			return b.child = a;
		}
		f = a.child;
		if (0 === (a.lanes & e)) {
			var g = f.memoizedProps;
			c = c.compare;
			c = null !== c ? c : Ie;
			if (c(g, d) && a.ref === b.ref) return $i(a, b, e);
		}
		b.flags |= 1;
		a = wh(f, d);
		a.ref = b.ref;
		a.return = b;
		return b.child = a;
	}
	function cj(a, b, c, d, e) {
		if (null !== a) {
			var f = a.memoizedProps;
			if (Ie(f, d) && a.ref === b.ref) if (Ug = !1, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (Ug = !0);
			else return b.lanes = a.lanes, $i(a, b, e);
		}
		return dj(a, b, c, d, e);
	}
	function ej(a, b, c) {
		var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
		if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = {
			baseLanes: 0,
			cachePool: null,
			transitions: null
		}, G(fj, gj), gj |= c;
		else {
			if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
				baseLanes: a,
				cachePool: null,
				transitions: null
			}, b.updateQueue = null, G(fj, gj), gj |= a, null;
			b.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null
			};
			d = null !== f ? f.baseLanes : c;
			G(fj, gj);
			gj |= d;
		}
		else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(fj, gj), gj |= d;
		Yi(a, b, e, c);
		return b.child;
	}
	function hj(a, b) {
		var c = b.ref;
		if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
	}
	function dj(a, b, c, d, e) {
		var f = Zf(c) ? Xf : H.current;
		f = Yf(b, f);
		Tg(b, e);
		c = Xh(a, b, c, d, f, e);
		d = bi();
		if (null !== a && !Ug) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
		I && d && vg(b);
		b.flags |= 1;
		Yi(a, b, c, e);
		return b.child;
	}
	function ij(a, b, c, d, e) {
		if (Zf(c)) {
			var f = !0;
			cg(b);
		} else f = !1;
		Tg(b, e);
		if (null === b.stateNode) jj(a, b), ph(b, c, d), rh(b, c, d, e), d = !0;
		else if (null === a) {
			var g = b.stateNode, h = b.memoizedProps;
			g.props = h;
			var k = g.context, l = c.contextType;
			"object" === typeof l && null !== l ? l = Vg(l) : (l = Zf(c) ? Xf : H.current, l = Yf(b, l));
			var m = c.getDerivedStateFromProps, q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
			q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && qh(b, g, d, l);
			$g = !1;
			var r = b.memoizedState;
			g.state = r;
			gh(b, d, g, e);
			k = b.memoizedState;
			h !== d || r !== k || Wf.current || $g ? ("function" === typeof m && (kh(b, c, m, d), k = b.memoizedState), (h = $g || oh(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = !1);
		} else {
			g = b.stateNode;
			bh(a, b);
			h = b.memoizedProps;
			l = b.type === b.elementType ? h : Lg(b.type, h);
			g.props = l;
			q = b.pendingProps;
			r = g.context;
			k = c.contextType;
			"object" === typeof k && null !== k ? k = Vg(k) : (k = Zf(c) ? Xf : H.current, k = Yf(b, k));
			var y = c.getDerivedStateFromProps;
			(m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && qh(b, g, d, k);
			$g = !1;
			r = b.memoizedState;
			g.state = r;
			gh(b, d, g, e);
			var n = b.memoizedState;
			h !== q || r !== n || Wf.current || $g ? ("function" === typeof y && (kh(b, c, y, d), n = b.memoizedState), (l = $g || oh(b, c, l, d, r, n, k) || !1) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = !1);
		}
		return kj(a, b, c, d, f, e);
	}
	function kj(a, b, c, d, e, f) {
		hj(a, b);
		var g = 0 !== (b.flags & 128);
		if (!d && !g) return e && dg(b, c, !1), $i(a, b, f);
		d = b.stateNode;
		Xi.current = b;
		var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
		b.flags |= 1;
		null !== a && g ? (b.child = Bh(b, a.child, null, f), b.child = Bh(b, null, h, f)) : Yi(a, b, h, f);
		b.memoizedState = d.state;
		e && dg(b, c, !0);
		return b.child;
	}
	function lj(a) {
		var b = a.stateNode;
		b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, !1);
		Ih(a, b.containerInfo);
	}
	function mj(a, b, c, d, e) {
		Ig();
		Jg(e);
		b.flags |= 256;
		Yi(a, b, c, d);
		return b.child;
	}
	var nj = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0
	};
	function oj(a) {
		return {
			baseLanes: a,
			cachePool: null,
			transitions: null
		};
	}
	function pj(a, b, c) {
		var d = b.pendingProps, e = M.current, f = !1, g = 0 !== (b.flags & 128), h;
		(h = g) || (h = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
		if (h) f = !0, b.flags &= -129;
		else if (null === a || null !== a.memoizedState) e |= 1;
		G(M, e & 1);
		if (null === a) {
			Eg(b);
			a = b.memoizedState;
			if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
			g = d.children;
			a = d.fallback;
			return f ? (d = b.mode, f = b.child, g = {
				mode: "hidden",
				children: g
			}, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = qj(g, d, 0, null), a = Ah(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = oj(c), b.memoizedState = nj, a) : rj(b, g);
		}
		e = a.memoizedState;
		if (null !== e && (h = e.dehydrated, null !== h)) return sj(a, b, g, d, h, e, c);
		if (f) {
			f = d.fallback;
			g = b.mode;
			e = a.child;
			h = e.sibling;
			var k = {
				mode: "hidden",
				children: d.children
			};
			0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = wh(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
			null !== h ? f = wh(h, f) : (f = Ah(f, g, c, null), f.flags |= 2);
			f.return = b;
			d.return = b;
			d.sibling = f;
			b.child = d;
			d = f;
			f = b.child;
			g = a.child.memoizedState;
			g = null === g ? oj(c) : {
				baseLanes: g.baseLanes | c,
				cachePool: null,
				transitions: g.transitions
			};
			f.memoizedState = g;
			f.childLanes = a.childLanes & ~c;
			b.memoizedState = nj;
			return d;
		}
		f = a.child;
		a = f.sibling;
		d = wh(f, {
			mode: "visible",
			children: d.children
		});
		0 === (b.mode & 1) && (d.lanes = c);
		d.return = b;
		d.sibling = null;
		null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
		b.child = d;
		b.memoizedState = null;
		return d;
	}
	function rj(a, b) {
		b = qj({
			mode: "visible",
			children: b
		}, a.mode, 0, null);
		b.return = a;
		return a.child = b;
	}
	function tj(a, b, c, d) {
		null !== d && Jg(d);
		Bh(b, a.child, null, c);
		a = rj(b, b.pendingProps.children);
		a.flags |= 2;
		b.memoizedState = null;
		return a;
	}
	function sj(a, b, c, d, e, f, g) {
		if (c) {
			if (b.flags & 256) return b.flags &= -257, d = Li(Error(p(422))), tj(a, b, g, d);
			if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
			f = d.fallback;
			e = b.mode;
			d = qj({
				mode: "visible",
				children: d.children
			}, e, 0, null);
			f = Ah(f, e, g, null);
			f.flags |= 2;
			d.return = b;
			f.return = b;
			d.sibling = f;
			b.child = d;
			0 !== (b.mode & 1) && Bh(b, a.child, null, g);
			b.child.memoizedState = oj(g);
			b.memoizedState = nj;
			return f;
		}
		if (0 === (b.mode & 1)) return tj(a, b, g, null);
		if ("$!" === e.data) {
			d = e.nextSibling && e.nextSibling.dataset;
			if (d) var h = d.dgst;
			d = h;
			f = Error(p(419));
			d = Li(f, d, void 0);
			return tj(a, b, g, d);
		}
		h = 0 !== (g & a.childLanes);
		if (Ug || h) {
			d = R;
			if (null !== d) {
				switch (g & -g) {
					case 4:
						e = 2;
						break;
					case 16:
						e = 8;
						break;
					case 64:
					case 128:
					case 256:
					case 512:
					case 1024:
					case 2048:
					case 4096:
					case 8192:
					case 16384:
					case 32768:
					case 65536:
					case 131072:
					case 262144:
					case 524288:
					case 1048576:
					case 2097152:
					case 4194304:
					case 8388608:
					case 16777216:
					case 33554432:
					case 67108864:
						e = 32;
						break;
					case 536870912:
						e = 268435456;
						break;
					default: e = 0;
				}
				e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
				0 !== e && e !== f.retryLane && (f.retryLane = e, Zg(a, e), mh(d, a, e, -1));
			}
			uj();
			d = Li(Error(p(421)));
			return tj(a, b, g, d);
		}
		if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = vj.bind(null, a), e._reactRetry = b, null;
		a = f.treeContext;
		yg = Lf(e.nextSibling);
		xg = b;
		I = !0;
		zg = null;
		null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
		b = rj(b, d.children);
		b.flags |= 4096;
		return b;
	}
	function wj(a, b, c) {
		a.lanes |= b;
		var d = a.alternate;
		null !== d && (d.lanes |= b);
		Sg(a.return, b, c);
	}
	function xj(a, b, c, d, e) {
		var f = a.memoizedState;
		null === f ? a.memoizedState = {
			isBackwards: b,
			rendering: null,
			renderingStartTime: 0,
			last: d,
			tail: c,
			tailMode: e
		} : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
	}
	function yj(a, b, c) {
		var d = b.pendingProps, e = d.revealOrder, f = d.tail;
		Yi(a, b, d.children, c);
		d = M.current;
		if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
		else {
			if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a;) {
				if (13 === a.tag) null !== a.memoizedState && wj(a, c, b);
				else if (19 === a.tag) wj(a, c, b);
				else if (null !== a.child) {
					a.child.return = a;
					a = a.child;
					continue;
				}
				if (a === b) break a;
				for (; null === a.sibling;) {
					if (null === a.return || a.return === b) break a;
					a = a.return;
				}
				a.sibling.return = a.return;
				a = a.sibling;
			}
			d &= 1;
		}
		G(M, d);
		if (0 === (b.mode & 1)) b.memoizedState = null;
		else switch (e) {
			case "forwards":
				c = b.child;
				for (e = null; null !== c;) a = c.alternate, null !== a && null === Mh(a) && (e = c), c = c.sibling;
				c = e;
				null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
				xj(b, !1, e, c, f);
				break;
			case "backwards":
				c = null;
				e = b.child;
				for (b.child = null; null !== e;) {
					a = e.alternate;
					if (null !== a && null === Mh(a)) {
						b.child = e;
						break;
					}
					a = e.sibling;
					e.sibling = c;
					c = e;
					e = a;
				}
				xj(b, !0, c, null, f);
				break;
			case "together":
				xj(b, !1, null, null, void 0);
				break;
			default: b.memoizedState = null;
		}
		return b.child;
	}
	function jj(a, b) {
		0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
	}
	function $i(a, b, c) {
		null !== a && (b.dependencies = a.dependencies);
		hh |= b.lanes;
		if (0 === (c & b.childLanes)) return null;
		if (null !== a && b.child !== a.child) throw Error(p(153));
		if (null !== b.child) {
			a = b.child;
			c = wh(a, a.pendingProps);
			b.child = c;
			for (c.return = b; null !== a.sibling;) a = a.sibling, c = c.sibling = wh(a, a.pendingProps), c.return = b;
			c.sibling = null;
		}
		return b.child;
	}
	function zj(a, b, c) {
		switch (b.tag) {
			case 3:
				lj(b);
				Ig();
				break;
			case 5:
				Kh(b);
				break;
			case 1:
				Zf(b.type) && cg(b);
				break;
			case 4:
				Ih(b, b.stateNode.containerInfo);
				break;
			case 10:
				var d = b.type._context, e = b.memoizedProps.value;
				G(Mg, d._currentValue);
				d._currentValue = e;
				break;
			case 13:
				d = b.memoizedState;
				if (null !== d) {
					if (null !== d.dehydrated) return G(M, M.current & 1), b.flags |= 128, null;
					if (0 !== (c & b.child.childLanes)) return pj(a, b, c);
					G(M, M.current & 1);
					a = $i(a, b, c);
					return null !== a ? a.sibling : null;
				}
				G(M, M.current & 1);
				break;
			case 19:
				d = 0 !== (c & b.childLanes);
				if (0 !== (a.flags & 128)) {
					if (d) return yj(a, b, c);
					b.flags |= 128;
				}
				e = b.memoizedState;
				null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
				G(M, M.current);
				if (d) break;
				else return null;
			case 22:
			case 23: return b.lanes = 0, ej(a, b, c);
		}
		return $i(a, b, c);
	}
	var Aj = function(a, b) {
		for (var c = b.child; null !== c;) {
			if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
			else if (4 !== c.tag && null !== c.child) {
				c.child.return = c;
				c = c.child;
				continue;
			}
			if (c === b) break;
			for (; null === c.sibling;) {
				if (null === c.return || c.return === b) return;
				c = c.return;
			}
			c.sibling.return = c.return;
			c = c.sibling;
		}
	}, Cj = function(a, b, c, d) {
		var e = a.memoizedProps;
		if (e !== d) {
			a = b.stateNode;
			Hh(Eh.current);
			var f = null;
			switch (c) {
				case "input":
					e = Ya(a, e);
					d = Ya(a, d);
					f = [];
					break;
				case "select":
					e = A({}, e, { value: void 0 });
					d = A({}, d, { value: void 0 });
					f = [];
					break;
				case "textarea":
					e = gb(a, e);
					d = gb(a, d);
					f = [];
					break;
				default: "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
			}
			ub(c, d);
			var g;
			c = null;
			for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
				var h = e[l];
				for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
			} else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
			for (l in d) {
				var k = d[l];
				h = null != e ? e[l] : void 0;
				if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) if (h) {
					for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
					for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
				} else c || (f || (f = []), f.push(l, c)), c = k;
				else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
			}
			c && (f = f || []).push("style", c);
			var l = f;
			if (b.updateQueue = l) b.flags |= 4;
		}
	}, Dj = function(a, b, c, d) {
		c !== d && (b.flags |= 4);
	};
	function Ej(a, b) {
		if (!I) switch (a.tailMode) {
			case "hidden":
				b = a.tail;
				for (var c = null; null !== b;) null !== b.alternate && (c = b), b = b.sibling;
				null === c ? a.tail = null : c.sibling = null;
				break;
			case "collapsed":
				c = a.tail;
				for (var d = null; null !== c;) null !== c.alternate && (d = c), c = c.sibling;
				null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
		}
	}
	function S(a) {
		var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
		if (b) for (var e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
		else for (e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
		a.subtreeFlags |= d;
		a.childLanes = c;
		return b;
	}
	function Fj(a, b, c) {
		var d = b.pendingProps;
		wg(b);
		switch (b.tag) {
			case 2:
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return S(b), null;
			case 1: return Zf(b.type) && $f(), S(b), null;
			case 3:
				d = b.stateNode;
				Jh();
				E(Wf);
				E(H);
				Oh();
				d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
				if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Gj(zg), zg = null));
				S(b);
				return null;
			case 5:
				Lh(b);
				var e = Hh(Gh.current);
				c = b.type;
				if (null !== a && null != b.stateNode) Cj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
				else {
					if (!d) {
						if (null === b.stateNode) throw Error(p(166));
						S(b);
						return null;
					}
					a = Hh(Eh.current);
					if (Gg(b)) {
						d = b.stateNode;
						c = b.type;
						var f = b.memoizedProps;
						d[Of] = b;
						d[Pf] = f;
						a = 0 !== (b.mode & 1);
						switch (c) {
							case "dialog":
								D("cancel", d);
								D("close", d);
								break;
							case "iframe":
							case "object":
							case "embed":
								D("load", d);
								break;
							case "video":
							case "audio":
								for (e = 0; e < lf.length; e++) D(lf[e], d);
								break;
							case "source":
								D("error", d);
								break;
							case "img":
							case "image":
							case "link":
								D("error", d);
								D("load", d);
								break;
							case "details":
								D("toggle", d);
								break;
							case "input":
								Za(d, f);
								D("invalid", d);
								break;
							case "select":
								d._wrapperState = { wasMultiple: !!f.multiple };
								D("invalid", d);
								break;
							case "textarea": hb(d, f), D("invalid", d);
						}
						ub(c, f);
						e = null;
						for (var g in f) if (f.hasOwnProperty(g)) {
							var h = f[g];
							"children" === g ? "string" === typeof h ? d.textContent !== h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
						}
						switch (c) {
							case "input":
								Va(d);
								db(d, f, !0);
								break;
							case "textarea":
								Va(d);
								jb(d);
								break;
							case "select":
							case "option": break;
							default: "function" === typeof f.onClick && (d.onclick = Bf);
						}
						d = e;
						b.updateQueue = d;
						null !== d && (b.flags |= 4);
					} else {
						g = 9 === e.nodeType ? e : e.ownerDocument;
						"http://www.w3.org/1999/xhtml" === a && (a = kb(c));
						"http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
						a[Of] = b;
						a[Pf] = d;
						Aj(a, b, !1, !1);
						b.stateNode = a;
						a: {
							g = vb(c, d);
							switch (c) {
								case "dialog":
									D("cancel", a);
									D("close", a);
									e = d;
									break;
								case "iframe":
								case "object":
								case "embed":
									D("load", a);
									e = d;
									break;
								case "video":
								case "audio":
									for (e = 0; e < lf.length; e++) D(lf[e], a);
									e = d;
									break;
								case "source":
									D("error", a);
									e = d;
									break;
								case "img":
								case "image":
								case "link":
									D("error", a);
									D("load", a);
									e = d;
									break;
								case "details":
									D("toggle", a);
									e = d;
									break;
								case "input":
									Za(a, d);
									e = Ya(a, d);
									D("invalid", a);
									break;
								case "option":
									e = d;
									break;
								case "select":
									a._wrapperState = { wasMultiple: !!d.multiple };
									e = A({}, d, { value: void 0 });
									D("invalid", a);
									break;
								case "textarea":
									hb(a, d);
									e = gb(a, d);
									D("invalid", a);
									break;
								default: e = d;
							}
							ub(c, e);
							h = e;
							for (f in h) if (h.hasOwnProperty(f)) {
								var k = h[f];
								"style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && ta(a, f, k, g));
							}
							switch (c) {
								case "input":
									Va(a);
									db(a, d, !1);
									break;
								case "textarea":
									Va(a);
									jb(a);
									break;
								case "option":
									null != d.value && a.setAttribute("value", "" + Sa(d.value));
									break;
								case "select":
									a.multiple = !!d.multiple;
									f = d.value;
									null != f ? fb(a, !!d.multiple, f, !1) : null != d.defaultValue && fb(a, !!d.multiple, d.defaultValue, !0);
									break;
								default: "function" === typeof e.onClick && (a.onclick = Bf);
							}
							switch (c) {
								case "button":
								case "input":
								case "select":
								case "textarea":
									d = !!d.autoFocus;
									break a;
								case "img":
									d = !0;
									break a;
								default: d = !1;
							}
						}
						d && (b.flags |= 4);
					}
					null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
				}
				S(b);
				return null;
			case 6:
				if (a && null != b.stateNode) Dj(a, b, a.memoizedProps, d);
				else {
					if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
					c = Hh(Gh.current);
					Hh(Eh.current);
					if (Gg(b)) {
						d = b.stateNode;
						c = b.memoizedProps;
						d[Of] = b;
						if (f = d.nodeValue !== c) {
							if (a = xg, null !== a) switch (a.tag) {
								case 3:
									Af(d.nodeValue, c, 0 !== (a.mode & 1));
									break;
								case 5: !0 !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
							}
						}
						f && (b.flags |= 4);
					} else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
				}
				S(b);
				return null;
			case 13:
				E(M);
				d = b.memoizedState;
				if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
					if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f = !1;
					else if (f = Gg(b), null !== d && null !== d.dehydrated) {
						if (null === a) {
							if (!f) throw Error(p(318));
							f = b.memoizedState;
							f = null !== f ? f.dehydrated : null;
							if (!f) throw Error(p(317));
							f[Of] = b;
						} else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
						S(b);
						f = !1;
					} else null !== zg && (Gj(zg), zg = null), f = !0;
					if (!f) return b.flags & 65536 ? b : null;
				}
				if (0 !== (b.flags & 128)) return b.lanes = c, b;
				d = null !== d;
				d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (M.current & 1) ? 0 === T && (T = 3) : uj()));
				null !== b.updateQueue && (b.flags |= 4);
				S(b);
				return null;
			case 4: return Jh(), null === a && sf(b.stateNode.containerInfo), S(b), null;
			case 10: return Rg(b.type._context), S(b), null;
			case 17: return Zf(b.type) && $f(), S(b), null;
			case 19:
				E(M);
				f = b.memoizedState;
				if (null === f) return S(b), null;
				d = 0 !== (b.flags & 128);
				g = f.rendering;
				if (null === g) if (d) Ej(f, !1);
				else {
					if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a;) {
						g = Mh(a);
						if (null !== g) {
							b.flags |= 128;
							Ej(f, !1);
							d = g.updateQueue;
							null !== d && (b.updateQueue = d, b.flags |= 4);
							b.subtreeFlags = 0;
							d = c;
							for (c = b.child; null !== c;) f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : {
								lanes: a.lanes,
								firstContext: a.firstContext
							}), c = c.sibling;
							G(M, M.current & 1 | 2);
							return b.child;
						}
						a = a.sibling;
					}
					null !== f.tail && B() > Hj && (b.flags |= 128, d = !0, Ej(f, !1), b.lanes = 4194304);
				}
				else {
					if (!d) if (a = Mh(g), null !== a) {
						if (b.flags |= 128, d = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Ej(f, !0), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I) return S(b), null;
					} else 2 * B() - f.renderingStartTime > Hj && 1073741824 !== c && (b.flags |= 128, d = !0, Ej(f, !1), b.lanes = 4194304);
					f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
				}
				if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), b.sibling = null, c = M.current, G(M, d ? c & 1 | 2 : c & 1), b;
				S(b);
				return null;
			case 22:
			case 23: return Ij(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (gj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
			case 24: return null;
			case 25: return null;
		}
		throw Error(p(156, b.tag));
	}
	function Jj(a, b) {
		wg(b);
		switch (b.tag) {
			case 1: return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
			case 3: return Jh(), E(Wf), E(H), Oh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
			case 5: return Lh(b), null;
			case 13:
				E(M);
				a = b.memoizedState;
				if (null !== a && null !== a.dehydrated) {
					if (null === b.alternate) throw Error(p(340));
					Ig();
				}
				a = b.flags;
				return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
			case 19: return E(M), null;
			case 4: return Jh(), null;
			case 10: return Rg(b.type._context), null;
			case 22:
			case 23: return Ij(), null;
			case 24: return null;
			default: return null;
		}
	}
	var Kj = !1, U = !1, Lj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
	function Mj(a, b) {
		var c = a.ref;
		if (null !== c) if ("function" === typeof c) try {
			c(null);
		} catch (d) {
			W(a, b, d);
		}
		else c.current = null;
	}
	function Nj(a, b, c) {
		try {
			c();
		} catch (d) {
			W(a, b, d);
		}
	}
	var Oj = !1;
	function Pj(a, b) {
		Cf = dd;
		a = Me();
		if (Ne(a)) {
			if ("selectionStart" in a) var c = {
				start: a.selectionStart,
				end: a.selectionEnd
			};
			else a: {
				c = (c = a.ownerDocument) && c.defaultView || window;
				var d = c.getSelection && c.getSelection();
				if (d && 0 !== d.rangeCount) {
					c = d.anchorNode;
					var e = d.anchorOffset, f = d.focusNode;
					d = d.focusOffset;
					try {
						c.nodeType, f.nodeType;
					} catch (F) {
						c = null;
						break a;
					}
					var g = 0, h = -1, k = -1, l = 0, m = 0, q = a, r = null;
					b: for (;;) {
						for (var y;;) {
							q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
							q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
							3 === q.nodeType && (g += q.nodeValue.length);
							if (null === (y = q.firstChild)) break;
							r = q;
							q = y;
						}
						for (;;) {
							if (q === a) break b;
							r === c && ++l === e && (h = g);
							r === f && ++m === d && (k = g);
							if (null !== (y = q.nextSibling)) break;
							q = r;
							r = q.parentNode;
						}
						q = y;
					}
					c = -1 === h || -1 === k ? null : {
						start: h,
						end: k
					};
				} else c = null;
			}
			c = c || {
				start: 0,
				end: 0
			};
		} else c = null;
		Df = {
			focusedElem: a,
			selectionRange: c
		};
		dd = !1;
		for (V = b; null !== V;) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;
		else for (; null !== V;) {
			b = V;
			try {
				var n = b.alternate;
				if (0 !== (b.flags & 1024)) switch (b.tag) {
					case 0:
					case 11:
					case 15: break;
					case 1:
						if (null !== n) {
							var t = n.memoizedProps, J = n.memoizedState, x = b.stateNode;
							x.__reactInternalSnapshotBeforeUpdate = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Lg(b.type, t), J);
						}
						break;
					case 3:
						var u = b.stateNode.containerInfo;
						1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
						break;
					case 5:
					case 6:
					case 4:
					case 17: break;
					default: throw Error(p(163));
				}
			} catch (F) {
				W(b, b.return, F);
			}
			a = b.sibling;
			if (null !== a) {
				a.return = b.return;
				V = a;
				break;
			}
			V = b.return;
		}
		n = Oj;
		Oj = !1;
		return n;
	}
	function Qj(a, b, c) {
		var d = b.updateQueue;
		d = null !== d ? d.lastEffect : null;
		if (null !== d) {
			var e = d = d.next;
			do {
				if ((e.tag & a) === a) {
					var f = e.destroy;
					e.destroy = void 0;
					void 0 !== f && Nj(b, c, f);
				}
				e = e.next;
			} while (e !== d);
		}
	}
	function Rj(a, b) {
		b = b.updateQueue;
		b = null !== b ? b.lastEffect : null;
		if (null !== b) {
			var c = b = b.next;
			do {
				if ((c.tag & a) === a) {
					var d = c.create;
					c.destroy = d();
				}
				c = c.next;
			} while (c !== b);
		}
	}
	function Sj(a) {
		var b = a.ref;
		if (null !== b) {
			var c = a.stateNode;
			switch (a.tag) {
				case 5:
					a = c;
					break;
				default: a = c;
			}
			"function" === typeof b ? b(a) : b.current = a;
		}
	}
	function Tj(a) {
		var b = a.alternate;
		null !== b && (a.alternate = null, Tj(b));
		a.child = null;
		a.deletions = null;
		a.sibling = null;
		5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
		a.stateNode = null;
		a.return = null;
		a.dependencies = null;
		a.memoizedProps = null;
		a.memoizedState = null;
		a.pendingProps = null;
		a.stateNode = null;
		a.updateQueue = null;
	}
	function Uj(a) {
		return 5 === a.tag || 3 === a.tag || 4 === a.tag;
	}
	function Vj(a) {
		a: for (;;) {
			for (; null === a.sibling;) {
				if (null === a.return || Uj(a.return)) return null;
				a = a.return;
			}
			a.sibling.return = a.return;
			for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag;) {
				if (a.flags & 2) continue a;
				if (null === a.child || 4 === a.tag) continue a;
				else a.child.return = a, a = a.child;
			}
			if (!(a.flags & 2)) return a.stateNode;
		}
	}
	function Wj(a, b, c) {
		var d = a.tag;
		if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
		else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a;) Wj(a, b, c), a = a.sibling;
	}
	function Xj(a, b, c) {
		var d = a.tag;
		if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
		else if (4 !== d && (a = a.child, null !== a)) for (Xj(a, b, c), a = a.sibling; null !== a;) Xj(a, b, c), a = a.sibling;
	}
	var X = null, Yj = !1;
	function Zj(a, b, c) {
		for (c = c.child; null !== c;) ak(a, b, c), c = c.sibling;
	}
	function ak(a, b, c) {
		if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
			lc.onCommitFiberUnmount(kc, c);
		} catch (h) {}
		switch (c.tag) {
			case 5: U || Mj(c, b);
			case 6:
				var d = X, e = Yj;
				X = null;
				Zj(a, b, c);
				X = d;
				Yj = e;
				null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
				break;
			case 18:
				null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
				break;
			case 4:
				d = X;
				e = Yj;
				X = c.stateNode.containerInfo;
				Yj = !0;
				Zj(a, b, c);
				X = d;
				Yj = e;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
					e = d = d.next;
					do {
						var f = e, g = f.destroy;
						f = f.tag;
						void 0 !== g && (0 !== (f & 2) ? Nj(c, b, g) : 0 !== (f & 4) && Nj(c, b, g));
						e = e.next;
					} while (e !== d);
				}
				Zj(a, b, c);
				break;
			case 1:
				if (!U && (Mj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
					d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
				} catch (h) {
					W(c, b, h);
				}
				Zj(a, b, c);
				break;
			case 21:
				Zj(a, b, c);
				break;
			case 22:
				c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Zj(a, b, c), U = d) : Zj(a, b, c);
				break;
			default: Zj(a, b, c);
		}
	}
	function bk(a) {
		var b = a.updateQueue;
		if (null !== b) {
			a.updateQueue = null;
			var c = a.stateNode;
			null === c && (c = a.stateNode = new Lj());
			b.forEach(function(b) {
				var d = ck.bind(null, a, b);
				c.has(b) || (c.add(b), b.then(d, d));
			});
		}
	}
	function dk(a, b) {
		var c = b.deletions;
		if (null !== c) for (var d = 0; d < c.length; d++) {
			var e = c[d];
			try {
				var f = a, g = b, h = g;
				a: for (; null !== h;) {
					switch (h.tag) {
						case 5:
							X = h.stateNode;
							Yj = !1;
							break a;
						case 3:
							X = h.stateNode.containerInfo;
							Yj = !0;
							break a;
						case 4:
							X = h.stateNode.containerInfo;
							Yj = !0;
							break a;
					}
					h = h.return;
				}
				if (null === X) throw Error(p(160));
				ak(f, g, e);
				X = null;
				Yj = !1;
				var k = e.alternate;
				null !== k && (k.return = null);
				e.return = null;
			} catch (l) {
				W(e, b, l);
			}
		}
		if (b.subtreeFlags & 12854) for (b = b.child; null !== b;) ek(b, a), b = b.sibling;
	}
	function ek(a, b) {
		var c = a.alternate, d = a.flags;
		switch (a.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				dk(b, a);
				fk(a);
				if (d & 4) {
					try {
						Qj(3, a, a.return), Rj(3, a);
					} catch (t) {
						W(a, a.return, t);
					}
					try {
						Qj(5, a, a.return);
					} catch (t) {
						W(a, a.return, t);
					}
				}
				break;
			case 1:
				dk(b, a);
				fk(a);
				d & 512 && null !== c && Mj(c, c.return);
				break;
			case 5:
				dk(b, a);
				fk(a);
				d & 512 && null !== c && Mj(c, c.return);
				if (a.flags & 32) {
					var e = a.stateNode;
					try {
						ob(e, "");
					} catch (t) {
						W(a, a.return, t);
					}
				}
				if (d & 4 && (e = a.stateNode, null != e)) {
					var f = a.memoizedProps, g = null !== c ? c.memoizedProps : f, h = a.type, k = a.updateQueue;
					a.updateQueue = null;
					if (null !== k) try {
						"input" === h && "radio" === f.type && null != f.name && ab(e, f);
						vb(h, g);
						var l = vb(h, f);
						for (g = 0; g < k.length; g += 2) {
							var m = k[g], q = k[g + 1];
							"style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l);
						}
						switch (h) {
							case "input":
								bb(e, f);
								break;
							case "textarea":
								ib(e, f);
								break;
							case "select":
								var r = e._wrapperState.wasMultiple;
								e._wrapperState.wasMultiple = !!f.multiple;
								var y = f.value;
								null != y ? fb(e, !!f.multiple, y, !1) : r !== !!f.multiple && (null != f.defaultValue ? fb(e, !!f.multiple, f.defaultValue, !0) : fb(e, !!f.multiple, f.multiple ? [] : "", !1));
						}
						e[Pf] = f;
					} catch (t) {
						W(a, a.return, t);
					}
				}
				break;
			case 6:
				dk(b, a);
				fk(a);
				if (d & 4) {
					if (null === a.stateNode) throw Error(p(162));
					e = a.stateNode;
					f = a.memoizedProps;
					try {
						e.nodeValue = f;
					} catch (t) {
						W(a, a.return, t);
					}
				}
				break;
			case 3:
				dk(b, a);
				fk(a);
				if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
					bd(b.containerInfo);
				} catch (t) {
					W(a, a.return, t);
				}
				break;
			case 4:
				dk(b, a);
				fk(a);
				break;
			case 13:
				dk(b, a);
				fk(a);
				e = a.child;
				e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (gk = B()));
				d & 4 && bk(a);
				break;
			case 22:
				m = null !== c && null !== c.memoizedState;
				a.mode & 1 ? (U = (l = U) || m, dk(b, a), U = l) : dk(b, a);
				fk(a);
				if (d & 8192) {
					l = null !== a.memoizedState;
					if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for (V = a, m = a.child; null !== m;) {
						for (q = V = m; null !== V;) {
							r = V;
							y = r.child;
							switch (r.tag) {
								case 0:
								case 11:
								case 14:
								case 15:
									Qj(4, r, r.return);
									break;
								case 1:
									Mj(r, r.return);
									var n = r.stateNode;
									if ("function" === typeof n.componentWillUnmount) {
										d = r;
										c = r.return;
										try {
											b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
										} catch (t) {
											W(d, c, t);
										}
									}
									break;
								case 5:
									Mj(r, r.return);
									break;
								case 22: if (null !== r.memoizedState) {
									hk(q);
									continue;
								}
							}
							null !== y ? (y.return = r, V = y) : hk(q);
						}
						m = m.sibling;
					}
					a: for (m = null, q = a;;) {
						if (5 === q.tag) {
							if (null === m) {
								m = q;
								try {
									e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
								} catch (t) {
									W(a, a.return, t);
								}
							}
						} else if (6 === q.tag) {
							if (null === m) try {
								q.stateNode.nodeValue = l ? "" : q.memoizedProps;
							} catch (t) {
								W(a, a.return, t);
							}
						} else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
							q.child.return = q;
							q = q.child;
							continue;
						}
						if (q === a) break a;
						for (; null === q.sibling;) {
							if (null === q.return || q.return === a) break a;
							m === q && (m = null);
							q = q.return;
						}
						m === q && (m = null);
						q.sibling.return = q.return;
						q = q.sibling;
					}
				}
				break;
			case 19:
				dk(b, a);
				fk(a);
				d & 4 && bk(a);
				break;
			case 21: break;
			default: dk(b, a), fk(a);
		}
	}
	function fk(a) {
		var b = a.flags;
		if (b & 2) {
			try {
				a: {
					for (var c = a.return; null !== c;) {
						if (Uj(c)) {
							var d = c;
							break a;
						}
						c = c.return;
					}
					throw Error(p(160));
				}
				switch (d.tag) {
					case 5:
						var e = d.stateNode;
						d.flags & 32 && (ob(e, ""), d.flags &= -33);
						Xj(a, Vj(a), e);
						break;
					case 3:
					case 4:
						var g = d.stateNode.containerInfo;
						Wj(a, Vj(a), g);
						break;
					default: throw Error(p(161));
				}
			} catch (k) {
				W(a, a.return, k);
			}
			a.flags &= -3;
		}
		b & 4096 && (a.flags &= -4097);
	}
	function ik(a, b, c) {
		V = a;
		jk(a, b, c);
	}
	function jk(a, b, c) {
		for (var d = 0 !== (a.mode & 1); null !== V;) {
			var e = V, f = e.child;
			if (22 === e.tag && d) {
				var g = null !== e.memoizedState || Kj;
				if (!g) {
					var h = e.alternate, k = null !== h && null !== h.memoizedState || U;
					h = Kj;
					var l = U;
					Kj = g;
					if ((U = k) && !l) for (V = e; null !== V;) g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? kk(e) : null !== k ? (k.return = g, V = k) : kk(e);
					for (; null !== f;) V = f, jk(f, b, c), f = f.sibling;
					V = e;
					Kj = h;
					U = l;
				}
				lk(a, b, c);
			} else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V = f) : lk(a, b, c);
		}
	}
	function lk(a) {
		for (; null !== V;) {
			var b = V;
			if (0 !== (b.flags & 8772)) {
				var c = b.alternate;
				try {
					if (0 !== (b.flags & 8772)) switch (b.tag) {
						case 0:
						case 11:
						case 15:
							U || Rj(5, b);
							break;
						case 1:
							var d = b.stateNode;
							if (b.flags & 4 && !U) if (null === c) d.componentDidMount();
							else {
								var e = b.elementType === b.type ? c.memoizedProps : Lg(b.type, c.memoizedProps);
								d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
							}
							var f = b.updateQueue;
							null !== f && ih(b, f, d);
							break;
						case 3:
							var g = b.updateQueue;
							if (null !== g) {
								c = null;
								if (null !== b.child) switch (b.child.tag) {
									case 5:
										c = b.child.stateNode;
										break;
									case 1: c = b.child.stateNode;
								}
								ih(b, g, c);
							}
							break;
						case 5:
							var h = b.stateNode;
							if (null === c && b.flags & 4) {
								c = h;
								var k = b.memoizedProps;
								switch (b.type) {
									case "button":
									case "input":
									case "select":
									case "textarea":
										k.autoFocus && c.focus();
										break;
									case "img": k.src && (c.src = k.src);
								}
							}
							break;
						case 6: break;
						case 4: break;
						case 12: break;
						case 13:
							if (null === b.memoizedState) {
								var l = b.alternate;
								if (null !== l) {
									var m = l.memoizedState;
									if (null !== m) {
										var q = m.dehydrated;
										null !== q && bd(q);
									}
								}
							}
							break;
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25: break;
						default: throw Error(p(163));
					}
					U || b.flags & 512 && Sj(b);
				} catch (r) {
					W(b, b.return, r);
				}
			}
			if (b === a) {
				V = null;
				break;
			}
			c = b.sibling;
			if (null !== c) {
				c.return = b.return;
				V = c;
				break;
			}
			V = b.return;
		}
	}
	function hk(a) {
		for (; null !== V;) {
			var b = V;
			if (b === a) {
				V = null;
				break;
			}
			var c = b.sibling;
			if (null !== c) {
				c.return = b.return;
				V = c;
				break;
			}
			V = b.return;
		}
	}
	function kk(a) {
		for (; null !== V;) {
			var b = V;
			try {
				switch (b.tag) {
					case 0:
					case 11:
					case 15:
						var c = b.return;
						try {
							Rj(4, b);
						} catch (k) {
							W(b, c, k);
						}
						break;
					case 1:
						var d = b.stateNode;
						if ("function" === typeof d.componentDidMount) {
							var e = b.return;
							try {
								d.componentDidMount();
							} catch (k) {
								W(b, e, k);
							}
						}
						var f = b.return;
						try {
							Sj(b);
						} catch (k) {
							W(b, f, k);
						}
						break;
					case 5:
						var g = b.return;
						try {
							Sj(b);
						} catch (k) {
							W(b, g, k);
						}
				}
			} catch (k) {
				W(b, b.return, k);
			}
			if (b === a) {
				V = null;
				break;
			}
			var h = b.sibling;
			if (null !== h) {
				h.return = b.return;
				V = h;
				break;
			}
			V = b.return;
		}
	}
	var mk = Math.ceil, nk = ua.ReactCurrentDispatcher, ok = ua.ReactCurrentOwner, pk = ua.ReactCurrentBatchConfig, K = 0, R = null, Y = null, Z = 0, gj = 0, fj = Uf(0), T = 0, qk = null, hh = 0, rk = 0, sk = 0, tk = null, uk = null, gk = 0, Hj = Infinity, vk = null, Pi = !1, Qi = null, Si = null, wk = !1, xk = null, yk = 0, zk = 0, Ak = null, Bk = -1, Ck = 0;
	function L() {
		return 0 !== (K & 6) ? B() : -1 !== Bk ? Bk : Bk = B();
	}
	function lh(a) {
		if (0 === (a.mode & 1)) return 1;
		if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
		if (null !== Kg.transition) return 0 === Ck && (Ck = yc()), Ck;
		a = C;
		if (0 !== a) return a;
		a = window.event;
		a = void 0 === a ? 16 : jd(a.type);
		return a;
	}
	function mh(a, b, c, d) {
		if (50 < zk) throw zk = 0, Ak = null, Error(p(185));
		Ac(a, c, d);
		if (0 === (K & 2) || a !== R) a === R && (0 === (K & 2) && (rk |= c), 4 === T && Dk(a, Z)), Ek(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Hj = B() + 500, fg && jg());
	}
	function Ek(a, b) {
		var c = a.callbackNode;
		wc(a, b);
		var d = uc(a, a === R ? Z : 0);
		if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
		else if (b = d & -d, a.callbackPriority !== b) {
			null != c && bc(c);
			if (1 === b) 0 === a.tag ? ig(Fk.bind(null, a)) : hg(Fk.bind(null, a)), Jf(function() {
				0 === (K & 6) && jg();
			}), c = null;
			else {
				switch (Dc(d)) {
					case 1:
						c = fc;
						break;
					case 4:
						c = gc;
						break;
					case 16:
						c = hc;
						break;
					case 536870912:
						c = jc;
						break;
					default: c = hc;
				}
				c = Gk(c, Hk.bind(null, a));
			}
			a.callbackPriority = b;
			a.callbackNode = c;
		}
	}
	function Hk(a, b) {
		Bk = -1;
		Ck = 0;
		if (0 !== (K & 6)) throw Error(p(327));
		var c = a.callbackNode;
		if (Ik() && a.callbackNode !== c) return null;
		var d = uc(a, a === R ? Z : 0);
		if (0 === d) return null;
		if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Jk(a, d);
		else {
			b = d;
			var e = K;
			K |= 2;
			var f = Kk();
			if (R !== a || Z !== b) vk = null, Hj = B() + 500, Lk(a, b);
			do
				try {
					Mk();
					break;
				} catch (h) {
					Nk(a, h);
				}
			while (1);
			Qg();
			nk.current = f;
			K = e;
			null !== Y ? b = 0 : (R = null, Z = 0, b = T);
		}
		if (0 !== b) {
			2 === b && (e = xc(a), 0 !== e && (d = e, b = Ok(a, e)));
			if (1 === b) throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
			if (6 === b) Dk(a, d);
			else {
				e = a.current.alternate;
				if (0 === (d & 30) && !Pk(e) && (b = Jk(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, b = Ok(a, f))), 1 === b)) throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
				a.finishedWork = e;
				a.finishedLanes = d;
				switch (b) {
					case 0:
					case 1: throw Error(p(345));
					case 2:
						Qk(a, uk, vk);
						break;
					case 3:
						Dk(a, d);
						if ((d & 130023424) === d && (b = gk + 500 - B(), 10 < b)) {
							if (0 !== uc(a, 0)) break;
							e = a.suspendedLanes;
							if ((e & d) !== d) {
								L();
								a.pingedLanes |= a.suspendedLanes & e;
								break;
							}
							a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), b);
							break;
						}
						Qk(a, uk, vk);
						break;
					case 4:
						Dk(a, d);
						if ((d & 4194240) === d) break;
						b = a.eventTimes;
						for (e = -1; 0 < d;) {
							var g = 31 - oc(d);
							f = 1 << g;
							g = b[g];
							g > e && (e = g);
							d &= ~f;
						}
						d = e;
						d = B() - d;
						d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * mk(d / 1960)) - d;
						if (10 < d) {
							a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), d);
							break;
						}
						Qk(a, uk, vk);
						break;
					case 5:
						Qk(a, uk, vk);
						break;
					default: throw Error(p(329));
				}
			}
		}
		Ek(a, B());
		return a.callbackNode === c ? Hk.bind(null, a) : null;
	}
	function Ok(a, b) {
		var c = tk;
		a.current.memoizedState.isDehydrated && (Lk(a, b).flags |= 256);
		a = Jk(a, b);
		2 !== a && (b = uk, uk = c, null !== b && Gj(b));
		return a;
	}
	function Gj(a) {
		null === uk ? uk = a : uk.push.apply(uk, a);
	}
	function Pk(a) {
		for (var b = a;;) {
			if (b.flags & 16384) {
				var c = b.updateQueue;
				if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
					var e = c[d], f = e.getSnapshot;
					e = e.value;
					try {
						if (!He(f(), e)) return !1;
					} catch (g) {
						return !1;
					}
				}
			}
			c = b.child;
			if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
			else {
				if (b === a) break;
				for (; null === b.sibling;) {
					if (null === b.return || b.return === a) return !0;
					b = b.return;
				}
				b.sibling.return = b.return;
				b = b.sibling;
			}
		}
		return !0;
	}
	function Dk(a, b) {
		b &= ~sk;
		b &= ~rk;
		a.suspendedLanes |= b;
		a.pingedLanes &= ~b;
		for (a = a.expirationTimes; 0 < b;) {
			var c = 31 - oc(b), d = 1 << c;
			a[c] = -1;
			b &= ~d;
		}
	}
	function Fk(a) {
		if (0 !== (K & 6)) throw Error(p(327));
		Ik();
		var b = uc(a, 0);
		if (0 === (b & 1)) return Ek(a, B()), null;
		var c = Jk(a, b);
		if (0 !== a.tag && 2 === c) {
			var d = xc(a);
			0 !== d && (b = d, c = Ok(a, d));
		}
		if (1 === c) throw c = qk, Lk(a, 0), Dk(a, b), Ek(a, B()), c;
		if (6 === c) throw Error(p(345));
		a.finishedWork = a.current.alternate;
		a.finishedLanes = b;
		Qk(a, uk, vk);
		Ek(a, B());
		return null;
	}
	function Rk(a, b) {
		var c = K;
		K |= 1;
		try {
			return a(b);
		} finally {
			K = c, 0 === K && (Hj = B() + 500, fg && jg());
		}
	}
	function Sk(a) {
		null !== xk && 0 === xk.tag && 0 === (K & 6) && Ik();
		var b = K;
		K |= 1;
		var c = pk.transition, d = C;
		try {
			if (pk.transition = null, C = 1, a) return a();
		} finally {
			C = d, pk.transition = c, K = b, 0 === (K & 6) && jg();
		}
	}
	function Ij() {
		gj = fj.current;
		E(fj);
	}
	function Lk(a, b) {
		a.finishedWork = null;
		a.finishedLanes = 0;
		var c = a.timeoutHandle;
		-1 !== c && (a.timeoutHandle = -1, Gf(c));
		if (null !== Y) for (c = Y.return; null !== c;) {
			var d = c;
			wg(d);
			switch (d.tag) {
				case 1:
					d = d.type.childContextTypes;
					null !== d && void 0 !== d && $f();
					break;
				case 3:
					Jh();
					E(Wf);
					E(H);
					Oh();
					break;
				case 5:
					Lh(d);
					break;
				case 4:
					Jh();
					break;
				case 13:
					E(M);
					break;
				case 19:
					E(M);
					break;
				case 10:
					Rg(d.type._context);
					break;
				case 22:
				case 23: Ij();
			}
			c = c.return;
		}
		R = a;
		Y = a = wh(a.current, null);
		Z = gj = b;
		T = 0;
		qk = null;
		sk = rk = hh = 0;
		uk = tk = null;
		if (null !== Wg) {
			for (b = 0; b < Wg.length; b++) if (c = Wg[b], d = c.interleaved, null !== d) {
				c.interleaved = null;
				var e = d.next, f = c.pending;
				if (null !== f) {
					var g = f.next;
					f.next = e;
					d.next = g;
				}
				c.pending = d;
			}
			Wg = null;
		}
		return a;
	}
	function Nk(a, b) {
		do {
			var c = Y;
			try {
				Qg();
				Ph.current = ai;
				if (Sh) {
					for (var d = N.memoizedState; null !== d;) {
						var e = d.queue;
						null !== e && (e.pending = null);
						d = d.next;
					}
					Sh = !1;
				}
				Rh = 0;
				P = O = N = null;
				Th = !1;
				Uh = 0;
				ok.current = null;
				if (null === c || null === c.return) {
					T = 1;
					qk = b;
					Y = null;
					break;
				}
				a: {
					var f = a, g = c.return, h = c, k = b;
					b = Z;
					h.flags |= 32768;
					if (null !== k && "object" === typeof k && "function" === typeof k.then) {
						var l = k, m = h, q = m.tag;
						if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
							var r = m.alternate;
							r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
						}
						var y = Vi(g);
						if (null !== y) {
							y.flags &= -257;
							Wi(y, g, h, f, b);
							y.mode & 1 && Ti(f, l, b);
							b = y;
							k = l;
							var n = b.updateQueue;
							if (null === n) {
								var t = /* @__PURE__ */ new Set();
								t.add(k);
								b.updateQueue = t;
							} else n.add(k);
							break a;
						} else {
							if (0 === (b & 1)) {
								Ti(f, l, b);
								uj();
								break a;
							}
							k = Error(p(426));
						}
					} else if (I && h.mode & 1) {
						var J = Vi(g);
						if (null !== J) {
							0 === (J.flags & 65536) && (J.flags |= 256);
							Wi(J, g, h, f, b);
							Jg(Ki(k, h));
							break a;
						}
					}
					f = k = Ki(k, h);
					4 !== T && (T = 2);
					null === tk ? tk = [f] : tk.push(f);
					f = g;
					do {
						switch (f.tag) {
							case 3:
								f.flags |= 65536;
								b &= -b;
								f.lanes |= b;
								var x = Oi(f, k, b);
								fh(f, x);
								break a;
							case 1:
								h = k;
								var w = f.type, u = f.stateNode;
								if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Si || !Si.has(u)))) {
									f.flags |= 65536;
									b &= -b;
									f.lanes |= b;
									var F = Ri(f, h, b);
									fh(f, F);
									break a;
								}
						}
						f = f.return;
					} while (null !== f);
				}
				Tk(c);
			} catch (na) {
				b = na;
				Y === c && null !== c && (Y = c = c.return);
				continue;
			}
			break;
		} while (1);
	}
	function Kk() {
		var a = nk.current;
		nk.current = ai;
		return null === a ? ai : a;
	}
	function uj() {
		if (0 === T || 3 === T || 2 === T) T = 4;
		null === R || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R, Z);
	}
	function Jk(a, b) {
		var c = K;
		K |= 2;
		var d = Kk();
		if (R !== a || Z !== b) vk = null, Lk(a, b);
		do
			try {
				Uk();
				break;
			} catch (e) {
				Nk(a, e);
			}
		while (1);
		Qg();
		K = c;
		nk.current = d;
		if (null !== Y) throw Error(p(261));
		R = null;
		Z = 0;
		return T;
	}
	function Uk() {
		for (; null !== Y;) Vk(Y);
	}
	function Mk() {
		for (; null !== Y && !cc();) Vk(Y);
	}
	function Vk(a) {
		var b = Wk(a.alternate, a, gj);
		a.memoizedProps = a.pendingProps;
		null === b ? Tk(a) : Y = b;
		ok.current = null;
	}
	function Tk(a) {
		var b = a;
		do {
			var c = b.alternate;
			a = b.return;
			if (0 === (b.flags & 32768)) {
				if (c = Fj(c, b, gj), null !== c) {
					Y = c;
					return;
				}
			} else {
				c = Jj(c, b);
				if (null !== c) {
					c.flags &= 32767;
					Y = c;
					return;
				}
				if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
				else {
					T = 6;
					Y = null;
					return;
				}
			}
			b = b.sibling;
			if (null !== b) {
				Y = b;
				return;
			}
			Y = b = a;
		} while (null !== b);
		0 === T && (T = 5);
	}
	function Qk(a, b, c) {
		var d = C, e = pk.transition;
		try {
			pk.transition = null, C = 1, Xk(a, b, c, d);
		} finally {
			pk.transition = e, C = d;
		}
		return null;
	}
	function Xk(a, b, c, d) {
		do
			Ik();
		while (null !== xk);
		if (0 !== (K & 6)) throw Error(p(327));
		c = a.finishedWork;
		var e = a.finishedLanes;
		if (null === c) return null;
		a.finishedWork = null;
		a.finishedLanes = 0;
		if (c === a.current) throw Error(p(177));
		a.callbackNode = null;
		a.callbackPriority = 0;
		var f = c.lanes | c.childLanes;
		Bc(a, f);
		a === R && (Y = R = null, Z = 0);
		0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || wk || (wk = !0, Gk(hc, function() {
			Ik();
			return null;
		}));
		f = 0 !== (c.flags & 15990);
		if (0 !== (c.subtreeFlags & 15990) || f) {
			f = pk.transition;
			pk.transition = null;
			var g = C;
			C = 1;
			var h = K;
			K |= 4;
			ok.current = null;
			Pj(a, c);
			ek(c, a);
			Oe(Df);
			dd = !!Cf;
			Df = Cf = null;
			a.current = c;
			ik(c, a, e);
			dc();
			K = h;
			C = g;
			pk.transition = f;
		} else a.current = c;
		wk && (wk = !1, xk = a, yk = e);
		f = a.pendingLanes;
		0 === f && (Si = null);
		mc(c.stateNode, d);
		Ek(a, B());
		if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, {
			componentStack: e.stack,
			digest: e.digest
		});
		if (Pi) throw Pi = !1, a = Qi, Qi = null, a;
		0 !== (yk & 1) && 0 !== a.tag && Ik();
		f = a.pendingLanes;
		0 !== (f & 1) ? a === Ak ? zk++ : (zk = 0, Ak = a) : zk = 0;
		jg();
		return null;
	}
	function Ik() {
		if (null !== xk) {
			var a = Dc(yk), b = pk.transition, c = C;
			try {
				pk.transition = null;
				C = 16 > a ? 16 : a;
				if (null === xk) var d = !1;
				else {
					a = xk;
					xk = null;
					yk = 0;
					if (0 !== (K & 6)) throw Error(p(331));
					var e = K;
					K |= 4;
					for (V = a.current; null !== V;) {
						var f = V, g = f.child;
						if (0 !== (V.flags & 16)) {
							var h = f.deletions;
							if (null !== h) {
								for (var k = 0; k < h.length; k++) {
									var l = h[k];
									for (V = l; null !== V;) {
										var m = V;
										switch (m.tag) {
											case 0:
											case 11:
											case 15: Qj(8, m, f);
										}
										var q = m.child;
										if (null !== q) q.return = m, V = q;
										else for (; null !== V;) {
											m = V;
											var r = m.sibling, y = m.return;
											Tj(m);
											if (m === l) {
												V = null;
												break;
											}
											if (null !== r) {
												r.return = y;
												V = r;
												break;
											}
											V = y;
										}
									}
								}
								var n = f.alternate;
								if (null !== n) {
									var t = n.child;
									if (null !== t) {
										n.child = null;
										do {
											var J = t.sibling;
											t.sibling = null;
											t = J;
										} while (null !== t);
									}
								}
								V = f;
							}
						}
						if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, V = g;
						else b: for (; null !== V;) {
							f = V;
							if (0 !== (f.flags & 2048)) switch (f.tag) {
								case 0:
								case 11:
								case 15: Qj(9, f, f.return);
							}
							var x = f.sibling;
							if (null !== x) {
								x.return = f.return;
								V = x;
								break b;
							}
							V = f.return;
						}
					}
					var w = a.current;
					for (V = w; null !== V;) {
						g = V;
						var u = g.child;
						if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u;
						else b: for (g = w; null !== V;) {
							h = V;
							if (0 !== (h.flags & 2048)) try {
								switch (h.tag) {
									case 0:
									case 11:
									case 15: Rj(9, h);
								}
							} catch (na) {
								W(h, h.return, na);
							}
							if (h === g) {
								V = null;
								break b;
							}
							var F = h.sibling;
							if (null !== F) {
								F.return = h.return;
								V = F;
								break b;
							}
							V = h.return;
						}
					}
					K = e;
					jg();
					if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
						lc.onPostCommitFiberRoot(kc, a);
					} catch (na) {}
					d = !0;
				}
				return d;
			} finally {
				C = c, pk.transition = b;
			}
		}
		return !1;
	}
	function Yk(a, b, c) {
		b = Ki(c, b);
		b = Oi(a, b, 1);
		a = dh(a, b, 1);
		b = L();
		null !== a && (Ac(a, 1, b), Ek(a, b));
	}
	function W(a, b, c) {
		if (3 === a.tag) Yk(a, a, c);
		else for (; null !== b;) {
			if (3 === b.tag) {
				Yk(b, a, c);
				break;
			} else if (1 === b.tag) {
				var d = b.stateNode;
				if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Si || !Si.has(d))) {
					a = Ki(c, a);
					a = Ri(b, a, 1);
					b = dh(b, a, 1);
					a = L();
					null !== b && (Ac(b, 1, a), Ek(b, a));
					break;
				}
			}
			b = b.return;
		}
	}
	function Ui(a, b, c) {
		var d = a.pingCache;
		null !== d && d.delete(b);
		b = L();
		a.pingedLanes |= a.suspendedLanes & c;
		R === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - gk ? Lk(a, 0) : sk |= c);
		Ek(a, b);
	}
	function Zk(a, b) {
		0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
		var c = L();
		a = Zg(a, b);
		null !== a && (Ac(a, b, c), Ek(a, c));
	}
	function vj(a) {
		var b = a.memoizedState, c = 0;
		null !== b && (c = b.retryLane);
		Zk(a, c);
	}
	function ck(a, b) {
		var c = 0;
		switch (a.tag) {
			case 13:
				var d = a.stateNode;
				var e = a.memoizedState;
				null !== e && (c = e.retryLane);
				break;
			case 19:
				d = a.stateNode;
				break;
			default: throw Error(p(314));
		}
		null !== d && d.delete(b);
		Zk(a, c);
	}
	var Wk = function(a, b, c) {
		if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) Ug = !0;
		else {
			if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return Ug = !1, zj(a, b, c);
			Ug = 0 !== (a.flags & 131072) ? !0 : !1;
		}
		else Ug = !1, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
		b.lanes = 0;
		switch (b.tag) {
			case 2:
				var d = b.type;
				jj(a, b);
				a = b.pendingProps;
				var e = Yf(b, H.current);
				Tg(b, c);
				e = Xh(null, b, d, a, e, c);
				var f = bi();
				b.flags |= 1;
				"object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = !0, cg(b)) : f = !1, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, ah(b), e.updater = nh, b.stateNode = e, e._reactInternals = b, rh(b, d, a, c), b = kj(null, b, d, !0, f, c)) : (b.tag = 0, I && f && vg(b), Yi(null, b, e, c), b = b.child);
				return b;
			case 16:
				d = b.elementType;
				a: {
					jj(a, b);
					a = b.pendingProps;
					e = d._init;
					d = e(d._payload);
					b.type = d;
					e = b.tag = $k(d);
					a = Lg(d, a);
					switch (e) {
						case 0:
							b = dj(null, b, d, a, c);
							break a;
						case 1:
							b = ij(null, b, d, a, c);
							break a;
						case 11:
							b = Zi(null, b, d, a, c);
							break a;
						case 14:
							b = aj(null, b, d, Lg(d.type, a), c);
							break a;
					}
					throw Error(p(306, d, ""));
				}
				return b;
			case 0: return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), dj(a, b, d, e, c);
			case 1: return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), ij(a, b, d, e, c);
			case 3:
				a: {
					lj(b);
					if (null === a) throw Error(p(387));
					d = b.pendingProps;
					f = b.memoizedState;
					e = f.element;
					bh(a, b);
					gh(b, d, null, c);
					var g = b.memoizedState;
					d = g.element;
					if (f.isDehydrated) if (f = {
						element: d,
						isDehydrated: !1,
						cache: g.cache,
						pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
						transitions: g.transitions
					}, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
						e = Ki(Error(p(423)), b);
						b = mj(a, b, d, c, e);
						break a;
					} else if (d !== e) {
						e = Ki(Error(p(424)), b);
						b = mj(a, b, d, c, e);
						break a;
					} else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = !0, zg = null, c = Ch(b, null, d, c), b.child = c; c;) c.flags = c.flags & -3 | 4096, c = c.sibling;
					else {
						Ig();
						if (d === e) {
							b = $i(a, b, c);
							break a;
						}
						Yi(a, b, d, c);
					}
					b = b.child;
				}
				return b;
			case 5: return Kh(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), hj(a, b), Yi(a, b, g, c), b.child;
			case 6: return null === a && Eg(b), null;
			case 13: return pj(a, b, c);
			case 4: return Ih(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Bh(b, null, d, c) : Yi(a, b, d, c), b.child;
			case 11: return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), Zi(a, b, d, e, c);
			case 7: return Yi(a, b, b.pendingProps, c), b.child;
			case 8: return Yi(a, b, b.pendingProps.children, c), b.child;
			case 12: return Yi(a, b, b.pendingProps.children, c), b.child;
			case 10:
				a: {
					d = b.type._context;
					e = b.pendingProps;
					f = b.memoizedProps;
					g = e.value;
					G(Mg, d._currentValue);
					d._currentValue = g;
					if (null !== f) if (He(f.value, g)) {
						if (f.children === e.children && !Wf.current) {
							b = $i(a, b, c);
							break a;
						}
					} else for (f = b.child, null !== f && (f.return = b); null !== f;) {
						var h = f.dependencies;
						if (null !== h) {
							g = f.child;
							for (var k = h.firstContext; null !== k;) {
								if (k.context === d) {
									if (1 === f.tag) {
										k = ch(-1, c & -c);
										k.tag = 2;
										var l = f.updateQueue;
										if (null !== l) {
											l = l.shared;
											var m = l.pending;
											null === m ? k.next = k : (k.next = m.next, m.next = k);
											l.pending = k;
										}
									}
									f.lanes |= c;
									k = f.alternate;
									null !== k && (k.lanes |= c);
									Sg(f.return, c, b);
									h.lanes |= c;
									break;
								}
								k = k.next;
							}
						} else if (10 === f.tag) g = f.type === b.type ? null : f.child;
						else if (18 === f.tag) {
							g = f.return;
							if (null === g) throw Error(p(341));
							g.lanes |= c;
							h = g.alternate;
							null !== h && (h.lanes |= c);
							Sg(g, c, b);
							g = f.sibling;
						} else g = f.child;
						if (null !== g) g.return = f;
						else for (g = f; null !== g;) {
							if (g === b) {
								g = null;
								break;
							}
							f = g.sibling;
							if (null !== f) {
								f.return = g.return;
								g = f;
								break;
							}
							g = g.return;
						}
						f = g;
					}
					Yi(a, b, e.children, c);
					b = b.child;
				}
				return b;
			case 9: return e = b.type, d = b.pendingProps.children, Tg(b, c), e = Vg(e), d = d(e), b.flags |= 1, Yi(a, b, d, c), b.child;
			case 14: return d = b.type, e = Lg(d, b.pendingProps), e = Lg(d.type, e), aj(a, b, d, e, c);
			case 15: return cj(a, b, b.type, b.pendingProps, c);
			case 17: return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), jj(a, b), b.tag = 1, Zf(d) ? (a = !0, cg(b)) : a = !1, Tg(b, c), ph(b, d, e), rh(b, d, e, c), kj(null, b, d, !0, a, c);
			case 19: return yj(a, b, c);
			case 22: return ej(a, b, c);
		}
		throw Error(p(156, b.tag));
	};
	function Gk(a, b) {
		return ac(a, b);
	}
	function al(a, b, c, d) {
		this.tag = a;
		this.key = c;
		this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
		this.index = 0;
		this.ref = null;
		this.pendingProps = b;
		this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
		this.mode = d;
		this.subtreeFlags = this.flags = 0;
		this.deletions = null;
		this.childLanes = this.lanes = 0;
		this.alternate = null;
	}
	function Bg(a, b, c, d) {
		return new al(a, b, c, d);
	}
	function bj(a) {
		a = a.prototype;
		return !(!a || !a.isReactComponent);
	}
	function $k(a) {
		if ("function" === typeof a) return bj(a) ? 1 : 0;
		if (void 0 !== a && null !== a) {
			a = a.$$typeof;
			if (a === Da) return 11;
			if (a === Ga) return 14;
		}
		return 2;
	}
	function wh(a, b) {
		var c = a.alternate;
		null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
		c.flags = a.flags & 14680064;
		c.childLanes = a.childLanes;
		c.lanes = a.lanes;
		c.child = a.child;
		c.memoizedProps = a.memoizedProps;
		c.memoizedState = a.memoizedState;
		c.updateQueue = a.updateQueue;
		b = a.dependencies;
		c.dependencies = null === b ? null : {
			lanes: b.lanes,
			firstContext: b.firstContext
		};
		c.sibling = a.sibling;
		c.index = a.index;
		c.ref = a.ref;
		return c;
	}
	function yh(a, b, c, d, e, f) {
		var g = 2;
		d = a;
		if ("function" === typeof a) bj(a) && (g = 1);
		else if ("string" === typeof a) g = 5;
		else a: switch (a) {
			case ya: return Ah(c.children, e, f, b);
			case za:
				g = 8;
				e |= 8;
				break;
			case Aa: return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;
			case Ea: return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;
			case Fa: return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;
			case Ia: return qj(c, e, f, b);
			default:
				if ("object" === typeof a && null !== a) switch (a.$$typeof) {
					case Ba:
						g = 10;
						break a;
					case Ca:
						g = 9;
						break a;
					case Da:
						g = 11;
						break a;
					case Ga:
						g = 14;
						break a;
					case Ha:
						g = 16;
						d = null;
						break a;
				}
				throw Error(p(130, null == a ? a : typeof a, ""));
		}
		b = Bg(g, c, b, e);
		b.elementType = a;
		b.type = d;
		b.lanes = f;
		return b;
	}
	function Ah(a, b, c, d) {
		a = Bg(7, a, d, b);
		a.lanes = c;
		return a;
	}
	function qj(a, b, c, d) {
		a = Bg(22, a, d, b);
		a.elementType = Ia;
		a.lanes = c;
		a.stateNode = { isHidden: !1 };
		return a;
	}
	function xh(a, b, c) {
		a = Bg(6, a, null, b);
		a.lanes = c;
		return a;
	}
	function zh(a, b, c) {
		b = Bg(4, null !== a.children ? a.children : [], a.key, b);
		b.lanes = c;
		b.stateNode = {
			containerInfo: a.containerInfo,
			pendingChildren: null,
			implementation: a.implementation
		};
		return b;
	}
	function bl(a, b, c, d, e) {
		this.tag = b;
		this.containerInfo = a;
		this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
		this.timeoutHandle = -1;
		this.callbackNode = this.pendingContext = this.context = null;
		this.callbackPriority = 0;
		this.eventTimes = zc(0);
		this.expirationTimes = zc(-1);
		this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
		this.entanglements = zc(0);
		this.identifierPrefix = d;
		this.onRecoverableError = e;
		this.mutableSourceEagerHydrationData = null;
	}
	function cl(a, b, c, d, e, f, g, h, k) {
		a = new bl(a, b, c, h, k);
		1 === b ? (b = 1, !0 === f && (b |= 8)) : b = 0;
		f = Bg(3, null, null, b);
		a.current = f;
		f.stateNode = a;
		f.memoizedState = {
			element: d,
			isDehydrated: c,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null
		};
		ah(f);
		return a;
	}
	function dl(a, b, c) {
		var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
		return {
			$$typeof: wa,
			key: null == d ? null : "" + d,
			children: a,
			containerInfo: b,
			implementation: c
		};
	}
	function el(a) {
		if (!a) return Vf;
		a = a._reactInternals;
		a: {
			if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
			var b = a;
			do {
				switch (b.tag) {
					case 3:
						b = b.stateNode.context;
						break a;
					case 1: if (Zf(b.type)) {
						b = b.stateNode.__reactInternalMemoizedMergedChildContext;
						break a;
					}
				}
				b = b.return;
			} while (null !== b);
			throw Error(p(171));
		}
		if (1 === a.tag) {
			var c = a.type;
			if (Zf(c)) return bg(a, c, b);
		}
		return b;
	}
	function fl(a, b, c, d, e, f, g, h, k) {
		a = cl(c, d, !0, a, e, f, g, h, k);
		a.context = el(null);
		c = a.current;
		d = L();
		e = lh(c);
		f = ch(d, e);
		f.callback = void 0 !== b && null !== b ? b : null;
		dh(c, f, e);
		a.current.lanes = e;
		Ac(a, e, d);
		Ek(a, d);
		return a;
	}
	function gl(a, b, c, d) {
		var e = b.current, f = L(), g = lh(e);
		c = el(c);
		null === b.context ? b.context = c : b.pendingContext = c;
		b = ch(f, g);
		b.payload = { element: a };
		d = void 0 === d ? null : d;
		null !== d && (b.callback = d);
		a = dh(e, b, g);
		null !== a && (mh(a, e, g, f), eh(a, e, g));
		return g;
	}
	function hl(a) {
		a = a.current;
		if (!a.child) return null;
		switch (a.child.tag) {
			case 5: return a.child.stateNode;
			default: return a.child.stateNode;
		}
	}
	function il(a, b) {
		a = a.memoizedState;
		if (null !== a && null !== a.dehydrated) {
			var c = a.retryLane;
			a.retryLane = 0 !== c && c < b ? c : b;
		}
	}
	function jl(a, b) {
		il(a, b);
		(a = a.alternate) && il(a, b);
	}
	function kl() {
		return null;
	}
	var ll = "function" === typeof reportError ? reportError : function(a) {
		console.error(a);
	};
	function ml(a) {
		this._internalRoot = a;
	}
	nl.prototype.render = ml.prototype.render = function(a) {
		var b = this._internalRoot;
		if (null === b) throw Error(p(409));
		gl(a, b, null, null);
	};
	nl.prototype.unmount = ml.prototype.unmount = function() {
		var a = this._internalRoot;
		if (null !== a) {
			this._internalRoot = null;
			var b = a.containerInfo;
			Sk(function() {
				gl(null, a, null, null);
			});
			b[uf] = null;
		}
	};
	function nl(a) {
		this._internalRoot = a;
	}
	nl.prototype.unstable_scheduleHydration = function(a) {
		if (a) {
			var b = Hc();
			a = {
				blockedOn: null,
				target: a,
				priority: b
			};
			for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++);
			Qc.splice(c, 0, a);
			0 === c && Vc(a);
		}
	};
	function ol(a) {
		return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
	}
	function pl(a) {
		return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
	}
	function ql() {}
	function rl(a, b, c, d, e) {
		if (e) {
			if ("function" === typeof d) {
				var f = d;
				d = function() {
					var a = hl(g);
					f.call(a);
				};
			}
			var g = fl(b, d, a, 0, null, !1, !1, "", ql);
			a._reactRootContainer = g;
			a[uf] = g.current;
			sf(8 === a.nodeType ? a.parentNode : a);
			Sk();
			return g;
		}
		for (; e = a.lastChild;) a.removeChild(e);
		if ("function" === typeof d) {
			var h = d;
			d = function() {
				var a = hl(k);
				h.call(a);
			};
		}
		var k = cl(a, 0, !1, null, null, !1, !1, "", ql);
		a._reactRootContainer = k;
		a[uf] = k.current;
		sf(8 === a.nodeType ? a.parentNode : a);
		Sk(function() {
			gl(b, k, c, d);
		});
		return k;
	}
	function sl(a, b, c, d, e) {
		var f = c._reactRootContainer;
		if (f) {
			var g = f;
			if ("function" === typeof e) {
				var h = e;
				e = function() {
					var a = hl(g);
					h.call(a);
				};
			}
			gl(b, g, a, e);
		} else g = rl(c, b, a, e, d);
		return hl(g);
	}
	Ec = function(a) {
		switch (a.tag) {
			case 3:
				var b = a.stateNode;
				if (b.current.memoizedState.isDehydrated) {
					var c = tc(b.pendingLanes);
					0 !== c && (Cc(b, c | 1), Ek(b, B()), 0 === (K & 6) && (Hj = B() + 500, jg()));
				}
				break;
			case 13: Sk(function() {
				var b = Zg(a, 1);
				if (null !== b) mh(b, a, 1, L());
			}), jl(a, 1);
		}
	};
	Fc = function(a) {
		if (13 === a.tag) {
			var b = Zg(a, 134217728);
			if (null !== b) mh(b, a, 134217728, L());
			jl(a, 134217728);
		}
	};
	Gc = function(a) {
		if (13 === a.tag) {
			var b = lh(a), c = Zg(a, b);
			if (null !== c) mh(c, a, b, L());
			jl(a, b);
		}
	};
	Hc = function() {
		return C;
	};
	Ic = function(a, b) {
		var c = C;
		try {
			return C = a, b();
		} finally {
			C = c;
		}
	};
	yb = function(a, b, c) {
		switch (b) {
			case "input":
				bb(a, c);
				b = c.name;
				if ("radio" === c.type && null != b) {
					for (c = a; c.parentNode;) c = c.parentNode;
					c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + "][type=\"radio\"]");
					for (b = 0; b < c.length; b++) {
						var d = c[b];
						if (d !== a && d.form === a.form) {
							var e = Db(d);
							if (!e) throw Error(p(90));
							Wa(d);
							bb(d, e);
						}
					}
				}
				break;
			case "textarea":
				ib(a, c);
				break;
			case "select": b = c.value, null != b && fb(a, !!c.multiple, b, !1);
		}
	};
	Gb = Rk;
	Hb = Sk;
	var tl = {
		usingClientEntryPoint: !1,
		Events: [
			Cb,
			ue,
			Db,
			Eb,
			Fb,
			Rk
		]
	}, ul = {
		findFiberByHostInstance: Wc,
		bundleType: 0,
		version: "18.2.0",
		rendererPackageName: "react-dom"
	};
	var vl = {
		bundleType: ul.bundleType,
		version: ul.version,
		rendererPackageName: ul.rendererPackageName,
		rendererConfig: ul.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: ua.ReactCurrentDispatcher,
		findHostInstanceByFiber: function(a) {
			a = Zb(a);
			return null === a ? null : a.stateNode;
		},
		findFiberByHostInstance: ul.findFiberByHostInstance || kl,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
	};
	if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
		var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!wl.isDisabled && wl.supportsFiber) try {
			kc = wl.inject(vl), lc = wl;
		} catch (a) {}
	}
	exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
	exports.createPortal = function(a, b) {
		var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
		if (!ol(b)) throw Error(p(200));
		return dl(a, b, null, c);
	};
	exports.createRoot = function(a, b) {
		if (!ol(a)) throw Error(p(299));
		var c = !1, d = "", e = ll;
		null !== b && void 0 !== b && (!0 === b.unstable_strictMode && (c = !0), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
		b = cl(a, 1, !1, null, null, c, !1, d, e);
		a[uf] = b.current;
		sf(8 === a.nodeType ? a.parentNode : a);
		return new ml(b);
	};
	exports.findDOMNode = function(a) {
		if (null == a) return null;
		if (1 === a.nodeType) return a;
		var b = a._reactInternals;
		if (void 0 === b) {
			if ("function" === typeof a.render) throw Error(p(188));
			a = Object.keys(a).join(",");
			throw Error(p(268, a));
		}
		a = Zb(b);
		a = null === a ? null : a.stateNode;
		return a;
	};
	exports.flushSync = function(a) {
		return Sk(a);
	};
	exports.hydrate = function(a, b, c) {
		if (!pl(b)) throw Error(p(200));
		return sl(null, a, b, !0, c);
	};
	exports.hydrateRoot = function(a, b, c) {
		if (!ol(a)) throw Error(p(405));
		var d = null != c && c.hydratedSources || null, e = !1, f = "", g = ll;
		null !== c && void 0 !== c && (!0 === c.unstable_strictMode && (e = !0), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
		b = fl(b, null, a, 1, null != c ? c : null, e, !1, f, g);
		a[uf] = b.current;
		sf(a);
		if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(c, e);
		return new nl(b);
	};
	exports.render = function(a, b, c) {
		if (!pl(b)) throw Error(p(200));
		return sl(null, a, b, !1, c);
	};
	exports.unmountComponentAtNode = function(a) {
		if (!pl(a)) throw Error(p(40));
		return a._reactRootContainer ? (Sk(function() {
			sl(null, null, a, !1, function() {
				a._reactRootContainer = null;
				a[uf] = null;
			});
		}), !0) : !1;
	};
	exports.unstable_batchedUpdates = Rk;
	exports.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
		if (!pl(c)) throw Error(p(200));
		if (null == a || void 0 === a._reactInternals) throw Error(p(38));
		return sl(a, b, c, !1, d);
	};
	exports.version = "18.2.0-next-9e3b772b8-20220608";
}));
//#endregion
//#region node_modules/react-dom/index.js
var require_react_dom = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function checkDCE() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") return;
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
		} catch (err) {
			console.error(err);
		}
	}
	checkDCE();
	module.exports = require_react_dom_production_min();
}));
//#endregion
//#region node_modules/@remix-run/router/dist/router.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom());
/**
* @remix-run/router v1.15.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
function _extends$4() {
	_extends$4 = Object.assign ? Object.assign.bind() : function(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];
			for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
		}
		return target;
	};
	return _extends$4.apply(this, arguments);
}
/**
* Actions represent the type of change to a location value.
*/
var Action;
(function(Action) {
	/**
	* A POP indicates a change to an arbitrary index in the history stack, such
	* as a back or forward navigation. It does not describe the direction of the
	* navigation, only that the current index changed.
	*
	* Note: This is the default action for newly created history objects.
	*/
	Action["Pop"] = "POP";
	/**
	* A PUSH indicates a new entry being added to the history stack, such as when
	* a link is clicked and a new page loads. When this happens, all subsequent
	* entries in the stack are lost.
	*/
	Action["Push"] = "PUSH";
	/**
	* A REPLACE indicates the entry at the current index in the history stack
	* being replaced by a new one.
	*/
	Action["Replace"] = "REPLACE";
})(Action || (Action = {}));
var PopStateEventType = "popstate";
/**
* Browser history stores the location in regular URLs. This is the standard for
* most web apps, but it requires some configuration on the server to ensure you
* serve the same app at multiple URLs.
*
* @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
*/
function createBrowserHistory(options) {
	if (options === void 0) options = {};
	function createBrowserLocation(window, globalHistory) {
		let { pathname, search, hash } = window.location;
		return createLocation("", {
			pathname,
			search,
			hash
		}, globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
	}
	function createBrowserHref(window, to) {
		return typeof to === "string" ? to : createPath(to);
	}
	return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
function invariant$1(value, message) {
	if (value === false || value === null || typeof value === "undefined") throw new Error(message);
}
function warning(cond, message) {
	if (!cond) {
		if (typeof console !== "undefined") console.warn(message);
		try {
			throw new Error(message);
		} catch (e) {}
	}
}
function createKey() {
	return Math.random().toString(36).substr(2, 8);
}
/**
* For browser-based histories, we combine the state and key into an object
*/
function getHistoryState(location, index) {
	return {
		usr: location.state,
		key: location.key,
		idx: index
	};
}
/**
* Creates a Location object with a unique key from the given Path
*/
function createLocation(current, to, state, key) {
	if (state === void 0) state = null;
	return _extends$4({
		pathname: typeof current === "string" ? current : current.pathname,
		search: "",
		hash: ""
	}, typeof to === "string" ? parsePath(to) : to, {
		state,
		key: to && to.key || key || createKey()
	});
}
/**
* Creates a string URL path from the given pathname, search, and hash components.
*/
function createPath(_ref) {
	let { pathname = "/", search = "", hash = "" } = _ref;
	if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
	if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
	return pathname;
}
/**
* Parses a string URL path into its separate pathname, search, and hash components.
*/
function parsePath(path) {
	let parsedPath = {};
	if (path) {
		let hashIndex = path.indexOf("#");
		if (hashIndex >= 0) {
			parsedPath.hash = path.substr(hashIndex);
			path = path.substr(0, hashIndex);
		}
		let searchIndex = path.indexOf("?");
		if (searchIndex >= 0) {
			parsedPath.search = path.substr(searchIndex);
			path = path.substr(0, searchIndex);
		}
		if (path) parsedPath.pathname = path;
	}
	return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
	if (options === void 0) options = {};
	let { window = document.defaultView, v5Compat = false } = options;
	let globalHistory = window.history;
	let action = Action.Pop;
	let listener = null;
	let index = getIndex();
	if (index == null) {
		index = 0;
		globalHistory.replaceState(_extends$4({}, globalHistory.state, { idx: index }), "");
	}
	function getIndex() {
		return (globalHistory.state || { idx: null }).idx;
	}
	function handlePop() {
		action = Action.Pop;
		let nextIndex = getIndex();
		let delta = nextIndex == null ? null : nextIndex - index;
		index = nextIndex;
		if (listener) listener({
			action,
			location: history.location,
			delta
		});
	}
	function push(to, state) {
		action = Action.Push;
		let location = createLocation(history.location, to, state);
		if (validateLocation) validateLocation(location, to);
		index = getIndex() + 1;
		let historyState = getHistoryState(location, index);
		let url = history.createHref(location);
		try {
			globalHistory.pushState(historyState, "", url);
		} catch (error) {
			if (error instanceof DOMException && error.name === "DataCloneError") throw error;
			window.location.assign(url);
		}
		if (v5Compat && listener) listener({
			action,
			location: history.location,
			delta: 1
		});
	}
	function replace(to, state) {
		action = Action.Replace;
		let location = createLocation(history.location, to, state);
		if (validateLocation) validateLocation(location, to);
		index = getIndex();
		let historyState = getHistoryState(location, index);
		let url = history.createHref(location);
		globalHistory.replaceState(historyState, "", url);
		if (v5Compat && listener) listener({
			action,
			location: history.location,
			delta: 0
		});
	}
	function createURL(to) {
		let base = window.location.origin !== "null" ? window.location.origin : window.location.href;
		let href = typeof to === "string" ? to : createPath(to);
		invariant$1(base, "No window.location.(origin|href) available to create URL for href: " + href);
		return new URL(href, base);
	}
	let history = {
		get action() {
			return action;
		},
		get location() {
			return getLocation(window, globalHistory);
		},
		listen(fn) {
			if (listener) throw new Error("A history only accepts one active listener");
			window.addEventListener(PopStateEventType, handlePop);
			listener = fn;
			return () => {
				window.removeEventListener(PopStateEventType, handlePop);
				listener = null;
			};
		},
		createHref(to) {
			return createHref(window, to);
		},
		createURL,
		encodeLocation(to) {
			let url = createURL(to);
			return {
				pathname: url.pathname,
				search: url.search,
				hash: url.hash
			};
		},
		push,
		replace,
		go(n) {
			return globalHistory.go(n);
		}
	};
	return history;
}
var ResultType;
(function(ResultType) {
	ResultType["data"] = "data";
	ResultType["deferred"] = "deferred";
	ResultType["redirect"] = "redirect";
	ResultType["error"] = "error";
})(ResultType || (ResultType = {}));
/**
* Matches the given routes to a location and returns the match data.
*
* @see https://reactrouter.com/utils/match-routes
*/
function matchRoutes(routes, locationArg, basename) {
	if (basename === void 0) basename = "/";
	let pathname = stripBasename((typeof locationArg === "string" ? parsePath(locationArg) : locationArg).pathname || "/", basename);
	if (pathname == null) return null;
	let branches = flattenRoutes(routes);
	rankRouteBranches(branches);
	let matches = null;
	for (let i = 0; matches == null && i < branches.length; ++i) matches = matchRouteBranch(branches[i], safelyDecodeURI(pathname));
	return matches;
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
	if (branches === void 0) branches = [];
	if (parentsMeta === void 0) parentsMeta = [];
	if (parentPath === void 0) parentPath = "";
	let flattenRoute = (route, index, relativePath) => {
		let meta = {
			relativePath: relativePath === void 0 ? route.path || "" : relativePath,
			caseSensitive: route.caseSensitive === true,
			childrenIndex: index,
			route
		};
		if (meta.relativePath.startsWith("/")) {
			invariant$1(meta.relativePath.startsWith(parentPath), "Absolute route path \"" + meta.relativePath + "\" nested under path " + ("\"" + parentPath + "\" is not valid. An absolute child route path ") + "must start with the combined path of all its parent routes.");
			meta.relativePath = meta.relativePath.slice(parentPath.length);
		}
		let path = joinPaths([parentPath, meta.relativePath]);
		let routesMeta = parentsMeta.concat(meta);
		if (route.children && route.children.length > 0) {
			invariant$1(route.index !== true, "Index routes must not have child routes. Please remove " + ("all child routes from route path \"" + path + "\"."));
			flattenRoutes(route.children, branches, routesMeta, path);
		}
		if (route.path == null && !route.index) return;
		branches.push({
			path,
			score: computeScore(path, route.index),
			routesMeta
		});
	};
	routes.forEach((route, index) => {
		var _route$path;
		if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) flattenRoute(route, index);
		else for (let exploded of explodeOptionalSegments(route.path)) flattenRoute(route, index, exploded);
	});
	return branches;
}
/**
* Computes all combinations of optional path segments for a given path,
* excluding combinations that are ambiguous and of lower priority.
*
* For example, `/one/:two?/three/:four?/:five?` explodes to:
* - `/one/three`
* - `/one/:two/three`
* - `/one/three/:four`
* - `/one/three/:five`
* - `/one/:two/three/:four`
* - `/one/:two/three/:five`
* - `/one/three/:four/:five`
* - `/one/:two/three/:four/:five`
*/
function explodeOptionalSegments(path) {
	let segments = path.split("/");
	if (segments.length === 0) return [];
	let [first, ...rest] = segments;
	let isOptional = first.endsWith("?");
	let required = first.replace(/\?$/, "");
	if (rest.length === 0) return isOptional ? [required, ""] : [required];
	let restExploded = explodeOptionalSegments(rest.join("/"));
	let result = [];
	result.push(...restExploded.map((subpath) => subpath === "" ? required : [required, subpath].join("/")));
	if (isOptional) result.push(...restExploded);
	return result.map((exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded);
}
function rankRouteBranches(branches) {
	branches.sort((a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(a.routesMeta.map((meta) => meta.childrenIndex), b.routesMeta.map((meta) => meta.childrenIndex)));
}
var paramRe = /^:[\w-]+$/;
var dynamicSegmentValue = 3;
var indexRouteValue = 2;
var emptySegmentValue = 1;
var staticSegmentValue = 10;
var splatPenalty = -2;
var isSplat = (s) => s === "*";
function computeScore(path, index) {
	let segments = path.split("/");
	let initialScore = segments.length;
	if (segments.some(isSplat)) initialScore += splatPenalty;
	if (index) initialScore += indexRouteValue;
	return segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a, b) {
	return a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]) ? a[a.length - 1] - b[b.length - 1] : 0;
}
function matchRouteBranch(branch, pathname) {
	let { routesMeta } = branch;
	let matchedParams = {};
	let matchedPathname = "/";
	let matches = [];
	for (let i = 0; i < routesMeta.length; ++i) {
		let meta = routesMeta[i];
		let end = i === routesMeta.length - 1;
		let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
		let match = matchPath({
			path: meta.relativePath,
			caseSensitive: meta.caseSensitive,
			end
		}, remainingPathname);
		if (!match) return null;
		Object.assign(matchedParams, match.params);
		let route = meta.route;
		matches.push({
			params: matchedParams,
			pathname: joinPaths([matchedPathname, match.pathname]),
			pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
			route
		});
		if (match.pathnameBase !== "/") matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
	}
	return matches;
}
/**
* Performs pattern matching on a URL pathname and returns information about
* the match.
*
* @see https://reactrouter.com/utils/match-path
*/
function matchPath(pattern, pathname) {
	if (typeof pattern === "string") pattern = {
		path: pattern,
		caseSensitive: false,
		end: true
	};
	let [matcher, compiledParams] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
	let match = pathname.match(matcher);
	if (!match) return null;
	let matchedPathname = match[0];
	let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
	let captureGroups = match.slice(1);
	return {
		params: compiledParams.reduce((memo, _ref, index) => {
			let { paramName, isOptional } = _ref;
			if (paramName === "*") {
				let splatValue = captureGroups[index] || "";
				pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
			}
			const value = captureGroups[index];
			if (isOptional && !value) memo[paramName] = void 0;
			else memo[paramName] = safelyDecodeURIComponent(value || "", paramName);
			return memo;
		}, {}),
		pathname: matchedPathname,
		pathnameBase,
		pattern
	};
}
function compilePath(path, caseSensitive, end) {
	if (caseSensitive === void 0) caseSensitive = false;
	if (end === void 0) end = true;
	warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
	let params = [];
	let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (_, paramName, isOptional) => {
		params.push({
			paramName,
			isOptional: isOptional != null
		});
		return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
	});
	if (path.endsWith("*")) {
		params.push({ paramName: "*" });
		regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
	} else if (end) regexpSource += "\\/*$";
	else if (path !== "" && path !== "/") regexpSource += "(?:(?=\\/|$))";
	return [new RegExp(regexpSource, caseSensitive ? void 0 : "i"), params];
}
function safelyDecodeURI(value) {
	try {
		return decodeURI(value);
	} catch (error) {
		warning(false, "The URL path \"" + value + "\" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent " + ("encoding (" + error + ")."));
		return value;
	}
}
function safelyDecodeURIComponent(value, paramName) {
	try {
		return decodeURIComponent(value);
	} catch (error) {
		warning(false, "The value for the URL param \"" + paramName + "\" will not be decoded because" + (" the string \"" + value + "\" is a malformed URL segment. This is probably") + (" due to a bad percent encoding (" + error + ")."));
		return value;
	}
}
/**
* @private
*/
function stripBasename(pathname, basename) {
	if (basename === "/") return pathname;
	if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) return null;
	let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
	let nextChar = pathname.charAt(startIndex);
	if (nextChar && nextChar !== "/") return null;
	return pathname.slice(startIndex) || "/";
}
/**
* Returns a resolved path object relative to the given pathname.
*
* @see https://reactrouter.com/utils/resolve-path
*/
function resolvePath(to, fromPathname) {
	if (fromPathname === void 0) fromPathname = "/";
	let { pathname: toPathname, search = "", hash = "" } = typeof to === "string" ? parsePath(to) : to;
	return {
		pathname: toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname,
		search: normalizeSearch(search),
		hash: normalizeHash(hash)
	};
}
function resolvePathname(relativePath, fromPathname) {
	let segments = fromPathname.replace(/\/+$/, "").split("/");
	relativePath.split("/").forEach((segment) => {
		if (segment === "..") {
			if (segments.length > 1) segments.pop();
		} else if (segment !== ".") segments.push(segment);
	});
	return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
	return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + "a string in <Link to=\"...\"> and the router will parse it for you.";
}
/**
* @private
*
* When processing relative navigation we want to ignore ancestor routes that
* do not contribute to the path, such that index/pathless layout routes don't
* interfere.
*
* For example, when moving a route element into an index route and/or a
* pathless layout route, relative link behavior contained within should stay
* the same.  Both of the following examples should link back to the root:
*
*   <Route path="/">
*     <Route path="accounts" element={<Link to=".."}>
*   </Route>
*
*   <Route path="/">
*     <Route path="accounts">
*       <Route element={<AccountsLayout />}>       // <-- Does not contribute
*         <Route index element={<Link to=".."} />  // <-- Does not contribute
*       </Route
*     </Route>
*   </Route>
*/
function getPathContributingMatches(matches) {
	return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
}
function getResolveToMatches(matches, v7_relativeSplatPath) {
	let pathMatches = getPathContributingMatches(matches);
	if (v7_relativeSplatPath) return pathMatches.map((match, idx) => idx === matches.length - 1 ? match.pathname : match.pathnameBase);
	return pathMatches.map((match) => match.pathnameBase);
}
/**
* @private
*/
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
	if (isPathRelative === void 0) isPathRelative = false;
	let to;
	if (typeof toArg === "string") to = parsePath(toArg);
	else {
		to = _extends$4({}, toArg);
		invariant$1(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
		invariant$1(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
		invariant$1(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
	}
	let isEmptyPath = toArg === "" || to.pathname === "";
	let toPathname = isEmptyPath ? "/" : to.pathname;
	let from;
	if (toPathname == null) from = locationPathname;
	else {
		let routePathnameIndex = routePathnames.length - 1;
		if (!isPathRelative && toPathname.startsWith("..")) {
			let toSegments = toPathname.split("/");
			while (toSegments[0] === "..") {
				toSegments.shift();
				routePathnameIndex -= 1;
			}
			to.pathname = toSegments.join("/");
		}
		from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
	}
	let path = resolvePath(to, from);
	let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
	let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
	if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) path.pathname += "/";
	return path;
}
/**
* @private
*/
var joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
/**
* @private
*/
var normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
/**
* @private
*/
var normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
/**
* @private
*/
var normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
/**
* Check if the given error is an ErrorResponse generated from a 4xx/5xx
* Response thrown from an action/loader
*/
function isRouteErrorResponse(error) {
	return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}
var validMutationMethodsArr = [
	"post",
	"put",
	"patch",
	"delete"
];
new Set(validMutationMethodsArr);
var validRequestMethodsArr = ["get", ...validMutationMethodsArr];
new Set(validRequestMethodsArr);
//#endregion
//#region node_modules/react-router/dist/index.js
/**
* React Router v6.22.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
function _extends$3() {
	_extends$3 = Object.assign ? Object.assign.bind() : function(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];
			for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
		}
		return target;
	};
	return _extends$3.apply(this, arguments);
}
var DataRouterContext = /*#__PURE__*/ import_react.createContext(null);
var DataRouterStateContext = /*#__PURE__*/ import_react.createContext(null);
/**
* A Navigator is a "location changer"; it's how you get to different locations.
*
* Every history instance conforms to the Navigator interface, but the
* distinction is useful primarily when it comes to the low-level `<Router>` API
* where both the location and a navigator must be provided separately in order
* to avoid "tearing" that may occur in a suspense-enabled app if the action
* and/or location were to be read directly from the history instance.
*/
var NavigationContext = /*#__PURE__*/ import_react.createContext(null);
var LocationContext = /*#__PURE__*/ import_react.createContext(null);
var RouteContext = /*#__PURE__*/ import_react.createContext({
	outlet: null,
	matches: [],
	isDataRoute: false
});
var RouteErrorContext = /*#__PURE__*/ import_react.createContext(null);
/**
* Returns the full href for the given "to" value. This is useful for building
* custom links that are also accessible and preserve right-click behavior.
*
* @see https://reactrouter.com/hooks/use-href
*/
function useHref(to, _temp) {
	let { relative } = _temp === void 0 ? {} : _temp;
	!useInRouterContext() && invariant$1(false);
	let { basename, navigator } = import_react.useContext(NavigationContext);
	let { hash, pathname, search } = useResolvedPath(to, { relative });
	let joinedPathname = pathname;
	if (basename !== "/") joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
	return navigator.createHref({
		pathname: joinedPathname,
		search,
		hash
	});
}
/**
* Returns true if this component is a descendant of a `<Router>`.
*
* @see https://reactrouter.com/hooks/use-in-router-context
*/
function useInRouterContext() {
	return import_react.useContext(LocationContext) != null;
}
/**
* Returns the current location object, which represents the current URL in web
* browsers.
*
* Note: If you're using this it may mean you're doing some of your own
* "routing" in your app, and we'd like to know what your use case is. We may
* be able to provide something higher-level to better suit your needs.
*
* @see https://reactrouter.com/hooks/use-location
*/
function useLocation() {
	!useInRouterContext() && invariant$1(false);
	return import_react.useContext(LocationContext).location;
}
function useIsomorphicLayoutEffect(cb) {
	if (!import_react.useContext(NavigationContext).static) import_react.useLayoutEffect(cb);
}
/**
* Returns an imperative method for changing the location. Used by `<Link>`s, but
* may also be used by other elements to change the location.
*
* @see https://reactrouter.com/hooks/use-navigate
*/
function useNavigate() {
	let { isDataRoute } = import_react.useContext(RouteContext);
	return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
	!useInRouterContext() && invariant$1(false);
	let dataRouterContext = import_react.useContext(DataRouterContext);
	let { basename, future, navigator } = import_react.useContext(NavigationContext);
	let { matches } = import_react.useContext(RouteContext);
	let { pathname: locationPathname } = useLocation();
	let routePathnamesJson = JSON.stringify(getResolveToMatches(matches, future.v7_relativeSplatPath));
	let activeRef = import_react.useRef(false);
	useIsomorphicLayoutEffect(() => {
		activeRef.current = true;
	});
	return import_react.useCallback(function(to, options) {
		if (options === void 0) options = {};
		if (!activeRef.current) return;
		if (typeof to === "number") {
			navigator.go(to);
			return;
		}
		let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
		if (dataRouterContext == null && basename !== "/") path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
		(!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
	}, [
		basename,
		navigator,
		routePathnamesJson,
		locationPathname,
		dataRouterContext
	]);
}
var OutletContext = /*#__PURE__*/ import_react.createContext(null);
/**
* Returns the element for the child route at this level of the route
* hierarchy. Used internally by `<Outlet>` to render child routes.
*
* @see https://reactrouter.com/hooks/use-outlet
*/
function useOutlet(context) {
	let outlet = import_react.useContext(RouteContext).outlet;
	if (outlet) return /*#__PURE__*/ import_react.createElement(OutletContext.Provider, { value: context }, outlet);
	return outlet;
}
/**
* Returns an object of key/value pairs of the dynamic params from the current
* URL that were matched by the route path.
*
* @see https://reactrouter.com/hooks/use-params
*/
function useParams() {
	let { matches } = import_react.useContext(RouteContext);
	let routeMatch = matches[matches.length - 1];
	return routeMatch ? routeMatch.params : {};
}
/**
* Resolves the pathname of the given `to` value against the current location.
*
* @see https://reactrouter.com/hooks/use-resolved-path
*/
function useResolvedPath(to, _temp2) {
	let { relative } = _temp2 === void 0 ? {} : _temp2;
	let { future } = import_react.useContext(NavigationContext);
	let { matches } = import_react.useContext(RouteContext);
	let { pathname: locationPathname } = useLocation();
	let routePathnamesJson = JSON.stringify(getResolveToMatches(matches, future.v7_relativeSplatPath));
	return import_react.useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [
		to,
		routePathnamesJson,
		locationPathname,
		relative
	]);
}
/**
* Returns the element of the route that matched the current location, prepared
* with the correct context to render the remainder of the route tree. Route
* elements in the tree must render an `<Outlet>` to render their child route's
* element.
*
* @see https://reactrouter.com/hooks/use-routes
*/
function useRoutes(routes, locationArg) {
	return useRoutesImpl(routes, locationArg);
}
function useRoutesImpl(routes, locationArg, dataRouterState, future) {
	!useInRouterContext() && invariant$1(false);
	let { navigator } = import_react.useContext(NavigationContext);
	let { matches: parentMatches } = import_react.useContext(RouteContext);
	let routeMatch = parentMatches[parentMatches.length - 1];
	let parentParams = routeMatch ? routeMatch.params : {};
	routeMatch && routeMatch.pathname;
	let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
	routeMatch && routeMatch.route;
	let locationFromContext = useLocation();
	let location;
	if (locationArg) {
		var _parsedLocationArg$pa;
		let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
		!(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) && invariant$1(false);
		location = parsedLocationArg;
	} else location = locationFromContext;
	let pathname = location.pathname || "/";
	let matches = matchRoutes(routes, { pathname: parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/" });
	let renderedMatches = _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
		params: Object.assign({}, parentParams, match.params),
		pathname: joinPaths([parentPathnameBase, navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname]),
		pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase, navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase])
	})), parentMatches, dataRouterState, future);
	if (locationArg && renderedMatches) return /*#__PURE__*/ import_react.createElement(LocationContext.Provider, { value: {
		location: _extends$3({
			pathname: "/",
			search: "",
			hash: "",
			state: null,
			key: "default"
		}, location),
		navigationType: Action.Pop
	} }, renderedMatches);
	return renderedMatches;
}
function DefaultErrorComponent() {
	let error = useRouteError();
	let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
	let stack = error instanceof Error ? error.stack : null;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("h2", null, "Unexpected Application Error!"), /*#__PURE__*/ import_react.createElement("h3", { style: { fontStyle: "italic" } }, message), stack ? /*#__PURE__*/ import_react.createElement("pre", { style: {
		padding: "0.5rem",
		backgroundColor: "rgba(200,200,200, 0.5)"
	} }, stack) : null, null);
}
var defaultErrorElement = /*#__PURE__*/ import_react.createElement(DefaultErrorComponent, null);
var RenderErrorBoundary = class extends import_react.Component {
	constructor(props) {
		super(props);
		this.state = {
			location: props.location,
			revalidation: props.revalidation,
			error: props.error
		};
	}
	static getDerivedStateFromError(error) {
		return { error };
	}
	static getDerivedStateFromProps(props, state) {
		if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") return {
			error: props.error,
			location: props.location,
			revalidation: props.revalidation
		};
		return {
			error: props.error !== void 0 ? props.error : state.error,
			location: state.location,
			revalidation: props.revalidation || state.revalidation
		};
	}
	componentDidCatch(error, errorInfo) {
		console.error("React Router caught the following error during render", error, errorInfo);
	}
	render() {
		return this.state.error !== void 0 ? /*#__PURE__*/ import_react.createElement(RouteContext.Provider, { value: this.props.routeContext }, /*#__PURE__*/ import_react.createElement(RouteErrorContext.Provider, {
			value: this.state.error,
			children: this.props.component
		})) : this.props.children;
	}
};
function RenderedRoute(_ref) {
	let { routeContext, match, children } = _ref;
	let dataRouterContext = import_react.useContext(DataRouterContext);
	if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
	return /*#__PURE__*/ import_react.createElement(RouteContext.Provider, { value: routeContext }, children);
}
function _renderMatches(matches, parentMatches, dataRouterState, future) {
	var _dataRouterState2;
	if (parentMatches === void 0) parentMatches = [];
	if (dataRouterState === void 0) dataRouterState = null;
	if (future === void 0) future = null;
	if (matches == null) {
		var _dataRouterState;
		if ((_dataRouterState = dataRouterState) != null && _dataRouterState.errors) matches = dataRouterState.matches;
		else return null;
	}
	let renderedMatches = matches;
	let errors = (_dataRouterState2 = dataRouterState) == null ? void 0 : _dataRouterState2.errors;
	if (errors != null) {
		let errorIndex = renderedMatches.findIndex((m) => m.route.id && (errors == null ? void 0 : errors[m.route.id]));
		!(errorIndex >= 0) && invariant$1(false);
		renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
	}
	let renderFallback = false;
	let fallbackIndex = -1;
	if (dataRouterState && future && future.v7_partialHydration) for (let i = 0; i < renderedMatches.length; i++) {
		let match = renderedMatches[i];
		if (match.route.HydrateFallback || match.route.hydrateFallbackElement) fallbackIndex = i;
		if (match.route.id) {
			let { loaderData, errors } = dataRouterState;
			let needsToRunLoader = match.route.loader && loaderData[match.route.id] === void 0 && (!errors || errors[match.route.id] === void 0);
			if (match.route.lazy || needsToRunLoader) {
				renderFallback = true;
				if (fallbackIndex >= 0) renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
				else renderedMatches = [renderedMatches[0]];
				break;
			}
		}
	}
	return renderedMatches.reduceRight((outlet, match, index) => {
		let error;
		let shouldRenderHydrateFallback = false;
		let errorElement = null;
		let hydrateFallbackElement = null;
		if (dataRouterState) {
			error = errors && match.route.id ? errors[match.route.id] : void 0;
			errorElement = match.route.errorElement || defaultErrorElement;
			if (renderFallback) {
				if (fallbackIndex < 0 && index === 0) {
					warningOnce("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration");
					shouldRenderHydrateFallback = true;
					hydrateFallbackElement = null;
				} else if (fallbackIndex === index) {
					shouldRenderHydrateFallback = true;
					hydrateFallbackElement = match.route.hydrateFallbackElement || null;
				}
			}
		}
		let matches = parentMatches.concat(renderedMatches.slice(0, index + 1));
		let getChildren = () => {
			let children;
			if (error) children = errorElement;
			else if (shouldRenderHydrateFallback) children = hydrateFallbackElement;
			else if (match.route.Component) children = /*#__PURE__*/ import_react.createElement(match.route.Component, null);
			else if (match.route.element) children = match.route.element;
			else children = outlet;
			return /*#__PURE__*/ import_react.createElement(RenderedRoute, {
				match,
				routeContext: {
					outlet,
					matches,
					isDataRoute: dataRouterState != null
				},
				children
			});
		};
		return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /*#__PURE__*/ import_react.createElement(RenderErrorBoundary, {
			location: dataRouterState.location,
			revalidation: dataRouterState.revalidation,
			component: errorElement,
			error,
			children: getChildren(),
			routeContext: {
				outlet: null,
				matches,
				isDataRoute: true
			}
		}) : getChildren();
	}, null);
}
var DataRouterHook$1 = /*#__PURE__*/ function(DataRouterHook) {
	DataRouterHook["UseBlocker"] = "useBlocker";
	DataRouterHook["UseRevalidator"] = "useRevalidator";
	DataRouterHook["UseNavigateStable"] = "useNavigate";
	return DataRouterHook;
}(DataRouterHook$1 || {});
var DataRouterStateHook$1 = /*#__PURE__*/ function(DataRouterStateHook) {
	DataRouterStateHook["UseBlocker"] = "useBlocker";
	DataRouterStateHook["UseLoaderData"] = "useLoaderData";
	DataRouterStateHook["UseActionData"] = "useActionData";
	DataRouterStateHook["UseRouteError"] = "useRouteError";
	DataRouterStateHook["UseNavigation"] = "useNavigation";
	DataRouterStateHook["UseRouteLoaderData"] = "useRouteLoaderData";
	DataRouterStateHook["UseMatches"] = "useMatches";
	DataRouterStateHook["UseRevalidator"] = "useRevalidator";
	DataRouterStateHook["UseNavigateStable"] = "useNavigate";
	DataRouterStateHook["UseRouteId"] = "useRouteId";
	return DataRouterStateHook;
}(DataRouterStateHook$1 || {});
function useDataRouterContext(hookName) {
	let ctx = import_react.useContext(DataRouterContext);
	!ctx && invariant$1(false);
	return ctx;
}
function useDataRouterState(hookName) {
	let state = import_react.useContext(DataRouterStateContext);
	!state && invariant$1(false);
	return state;
}
function useRouteContext(hookName) {
	let route = import_react.useContext(RouteContext);
	!route && invariant$1(false);
	return route;
}
function useCurrentRouteId(hookName) {
	let route = useRouteContext(hookName);
	let thisRoute = route.matches[route.matches.length - 1];
	!thisRoute.route.id && invariant$1(false);
	return thisRoute.route.id;
}
/**
* Returns the nearest ancestor Route error, which could be a loader/action
* error or a render error.  This is intended to be called from your
* ErrorBoundary/errorElement to display a proper error message.
*/
function useRouteError() {
	var _state$errors;
	let error = import_react.useContext(RouteErrorContext);
	let state = useDataRouterState(DataRouterStateHook$1.UseRouteError);
	let routeId = useCurrentRouteId(DataRouterStateHook$1.UseRouteError);
	if (error !== void 0) return error;
	return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}
/**
* Stable version of useNavigate that is used when we are in the context of
* a RouterProvider.
*/
function useNavigateStable() {
	let { router } = useDataRouterContext(DataRouterHook$1.UseNavigateStable);
	let id = useCurrentRouteId(DataRouterStateHook$1.UseNavigateStable);
	let activeRef = import_react.useRef(false);
	useIsomorphicLayoutEffect(() => {
		activeRef.current = true;
	});
	return import_react.useCallback(function(to, options) {
		if (options === void 0) options = {};
		if (!activeRef.current) return;
		if (typeof to === "number") router.navigate(to);
		else router.navigate(to, _extends$3({ fromRouteId: id }, options));
	}, [router, id]);
}
var alreadyWarned = {};
function warningOnce(key, cond, message) {
	if (!cond && !alreadyWarned[key]) alreadyWarned[key] = true;
}
/**
* Changes the current location.
*
* Note: This API is mostly useful in React.Component subclasses that are not
* able to use hooks. In functional components, we recommend you use the
* `useNavigate` hook instead.
*
* @see https://reactrouter.com/components/navigate
*/
function Navigate(_ref4) {
	let { to, replace, state, relative } = _ref4;
	!useInRouterContext() && invariant$1(false);
	let { future, static: isStatic } = import_react.useContext(NavigationContext);
	let { matches } = import_react.useContext(RouteContext);
	let { pathname: locationPathname } = useLocation();
	let navigate = useNavigate();
	let path = resolveTo(to, getResolveToMatches(matches, future.v7_relativeSplatPath), locationPathname, relative === "path");
	let jsonPath = JSON.stringify(path);
	import_react.useEffect(() => navigate(JSON.parse(jsonPath), {
		replace,
		state,
		relative
	}), [
		navigate,
		jsonPath,
		relative,
		replace,
		state
	]);
	return null;
}
/**
* Renders the child route's element, if there is one.
*
* @see https://reactrouter.com/components/outlet
*/
function Outlet(props) {
	return useOutlet(props.context);
}
/**
* Declares an element that should be rendered at a certain URL path.
*
* @see https://reactrouter.com/components/route
*/
function Route(_props) {
	invariant$1(false);
}
/**
* Provides location context for the rest of the app.
*
* Note: You usually won't render a `<Router>` directly. Instead, you'll render a
* router that is more specific to your environment such as a `<BrowserRouter>`
* in web browsers or a `<StaticRouter>` for server rendering.
*
* @see https://reactrouter.com/router-components/router
*/
function Router(_ref5) {
	let { basename: basenameProp = "/", children = null, location: locationProp, navigationType = Action.Pop, navigator, static: staticProp = false, future } = _ref5;
	useInRouterContext() && invariant$1(false);
	let basename = basenameProp.replace(/^\/*/, "/");
	let navigationContext = import_react.useMemo(() => ({
		basename,
		navigator,
		static: staticProp,
		future: _extends$3({ v7_relativeSplatPath: false }, future)
	}), [
		basename,
		future,
		navigator,
		staticProp
	]);
	if (typeof locationProp === "string") locationProp = parsePath(locationProp);
	let { pathname = "/", search = "", hash = "", state = null, key = "default" } = locationProp;
	let locationContext = import_react.useMemo(() => {
		let trailingPathname = stripBasename(pathname, basename);
		if (trailingPathname == null) return null;
		return {
			location: {
				pathname: trailingPathname,
				search,
				hash,
				state,
				key
			},
			navigationType
		};
	}, [
		basename,
		pathname,
		search,
		hash,
		state,
		key,
		navigationType
	]);
	if (locationContext == null) return null;
	return /*#__PURE__*/ import_react.createElement(NavigationContext.Provider, { value: navigationContext }, /*#__PURE__*/ import_react.createElement(LocationContext.Provider, {
		children,
		value: locationContext
	}));
}
/**
* A container for a nested tree of `<Route>` elements that renders the branch
* that best matches the current location.
*
* @see https://reactrouter.com/components/routes
*/
function Routes(_ref6) {
	let { children, location } = _ref6;
	return useRoutes(createRoutesFromChildren(children), location);
}
var AwaitRenderStatus = /*#__PURE__*/ function(AwaitRenderStatus) {
	AwaitRenderStatus[AwaitRenderStatus["pending"] = 0] = "pending";
	AwaitRenderStatus[AwaitRenderStatus["success"] = 1] = "success";
	AwaitRenderStatus[AwaitRenderStatus["error"] = 2] = "error";
	return AwaitRenderStatus;
}(AwaitRenderStatus || {});
new Promise(() => {});
import_react.Component;
/**
* Creates a route config from a React "children" object, which is usually
* either a `<Route>` element or an array of them. Used internally by
* `<Routes>` to create a route config from its children.
*
* @see https://reactrouter.com/utils/create-routes-from-children
*/
function createRoutesFromChildren(children, parentPath) {
	if (parentPath === void 0) parentPath = [];
	let routes = [];
	import_react.Children.forEach(children, (element, index) => {
		if (!/*#__PURE__*/ import_react.isValidElement(element)) return;
		let treePath = [...parentPath, index];
		if (element.type === import_react.Fragment) {
			routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
			return;
		}
		!(element.type === Route) && invariant$1(false);
		!(!element.props.index || !element.props.children) && invariant$1(false);
		let route = {
			id: element.props.id || treePath.join("-"),
			caseSensitive: element.props.caseSensitive,
			element: element.props.element,
			Component: element.props.Component,
			index: element.props.index,
			path: element.props.path,
			loader: element.props.loader,
			action: element.props.action,
			errorElement: element.props.errorElement,
			ErrorBoundary: element.props.ErrorBoundary,
			hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
			shouldRevalidate: element.props.shouldRevalidate,
			handle: element.props.handle,
			lazy: element.props.lazy
		};
		if (element.props.children) route.children = createRoutesFromChildren(element.props.children, treePath);
		routes.push(route);
	});
	return routes;
}
//#endregion
//#region node_modules/react-router-dom/dist/index.js
/**
* React Router DOM v6.22.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
function _extends$2() {
	_extends$2 = Object.assign ? Object.assign.bind() : function(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];
			for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
		}
		return target;
	};
	return _extends$2.apply(this, arguments);
}
function _objectWithoutPropertiesLoose$2(source, excluded) {
	if (source == null) return {};
	var target = {};
	var sourceKeys = Object.keys(source);
	var key, i;
	for (i = 0; i < sourceKeys.length; i++) {
		key = sourceKeys[i];
		if (excluded.indexOf(key) >= 0) continue;
		target[key] = source[key];
	}
	return target;
}
function isModifiedEvent(event) {
	return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
	return event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event);
}
/**
* Creates a URLSearchParams object using the given initializer.
*
* This is identical to `new URLSearchParams(init)` except it also
* supports arrays as values in the object form of the initializer
* instead of just strings. This is convenient when you need multiple
* values for a given key, but don't want to use an array initializer.
*
* For example, instead of:
*
*   let searchParams = new URLSearchParams([
*     ['sort', 'name'],
*     ['sort', 'price']
*   ]);
*
* you can do:
*
*   let searchParams = createSearchParams({
*     sort: ['name', 'price']
*   });
*/
function createSearchParams(init) {
	if (init === void 0) init = "";
	return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key) => {
		let value = init[key];
		return memo.concat(Array.isArray(value) ? value.map((v) => [key, v]) : [[key, value]]);
	}, []));
}
function getSearchParamsForLocation(locationSearch, defaultSearchParams) {
	let searchParams = createSearchParams(locationSearch);
	if (defaultSearchParams) defaultSearchParams.forEach((_, key) => {
		if (!searchParams.has(key)) defaultSearchParams.getAll(key).forEach((value) => {
			searchParams.append(key, value);
		});
	});
	return searchParams;
}
var _excluded$8 = [
	"onClick",
	"relative",
	"reloadDocument",
	"replace",
	"state",
	"target",
	"to",
	"preventScrollReset",
	"unstable_viewTransition"
];
var REACT_ROUTER_VERSION = "6";
try {
	window.__reactRouterVersion = REACT_ROUTER_VERSION;
} catch (e) {}
var startTransitionImpl = import_react.startTransition;
/**
* A `<Router>` for use in web browsers. Provides the cleanest URLs.
*/
function BrowserRouter(_ref4) {
	let { basename, children, future, window } = _ref4;
	let historyRef = import_react.useRef();
	if (historyRef.current == null) historyRef.current = createBrowserHistory({
		window,
		v5Compat: true
	});
	let history = historyRef.current;
	let [state, setStateImpl] = import_react.useState({
		action: history.action,
		location: history.location
	});
	let { v7_startTransition } = future || {};
	let setState = import_react.useCallback((newState) => {
		v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
	}, [setStateImpl, v7_startTransition]);
	import_react.useLayoutEffect(() => history.listen(setState), [history, setState]);
	return /*#__PURE__*/ import_react.createElement(Router, {
		basename,
		children,
		location: state.location,
		navigationType: state.action,
		navigator: history,
		future
	});
}
var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
var ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
/**
* The public API for rendering a history-aware `<a>`.
*/
var Link = /*#__PURE__*/ import_react.forwardRef(function LinkWithRef(_ref7, ref) {
	let { onClick, relative, reloadDocument, replace, state, target, to, preventScrollReset, unstable_viewTransition } = _ref7, rest = _objectWithoutPropertiesLoose$2(_ref7, _excluded$8);
	let { basename } = import_react.useContext(NavigationContext);
	let absoluteHref;
	let isExternal = false;
	if (typeof to === "string" && ABSOLUTE_URL_REGEX.test(to)) {
		absoluteHref = to;
		if (isBrowser) try {
			let currentUrl = new URL(window.location.href);
			let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
			let path = stripBasename(targetUrl.pathname, basename);
			if (targetUrl.origin === currentUrl.origin && path != null) to = path + targetUrl.search + targetUrl.hash;
			else isExternal = true;
		} catch (e) {}
	}
	let href = useHref(to, { relative });
	let internalOnClick = useLinkClickHandler(to, {
		replace,
		state,
		target,
		preventScrollReset,
		relative,
		unstable_viewTransition
	});
	function handleClick(event) {
		if (onClick) onClick(event);
		if (!event.defaultPrevented) internalOnClick(event);
	}
	return /*#__PURE__*/ import_react.createElement("a", _extends$2({}, rest, {
		href: absoluteHref || href,
		onClick: isExternal || reloadDocument ? onClick : handleClick,
		ref,
		target
	}));
});
var DataRouterHook;
(function(DataRouterHook) {
	DataRouterHook["UseScrollRestoration"] = "useScrollRestoration";
	DataRouterHook["UseSubmit"] = "useSubmit";
	DataRouterHook["UseSubmitFetcher"] = "useSubmitFetcher";
	DataRouterHook["UseFetcher"] = "useFetcher";
	DataRouterHook["useViewTransitionState"] = "useViewTransitionState";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function(DataRouterStateHook) {
	DataRouterStateHook["UseFetcher"] = "useFetcher";
	DataRouterStateHook["UseFetchers"] = "useFetchers";
	DataRouterStateHook["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));
/**
* Handles the click behavior for router `<Link>` components. This is useful if
* you need to create custom `<Link>` components with the same click behavior we
* use in our exported `<Link>`.
*/
function useLinkClickHandler(to, _temp) {
	let { target, replace: replaceProp, state, preventScrollReset, relative, unstable_viewTransition } = _temp === void 0 ? {} : _temp;
	let navigate = useNavigate();
	let location = useLocation();
	let path = useResolvedPath(to, { relative });
	return import_react.useCallback((event) => {
		if (shouldProcessLinkClick(event, target)) {
			event.preventDefault();
			let replace = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
			navigate(to, {
				replace,
				state,
				preventScrollReset,
				relative,
				unstable_viewTransition
			});
		}
	}, [
		location,
		navigate,
		path,
		replaceProp,
		state,
		target,
		to,
		preventScrollReset,
		relative,
		unstable_viewTransition
	]);
}
/**
* A convenient wrapper for reading and writing search parameters via the
* URLSearchParams interface.
*/
function useSearchParams(defaultInit) {
	let defaultSearchParamsRef = import_react.useRef(createSearchParams(defaultInit));
	let hasSetSearchParamsRef = import_react.useRef(false);
	let location = useLocation();
	let searchParams = import_react.useMemo(() => getSearchParamsForLocation(location.search, hasSetSearchParamsRef.current ? null : defaultSearchParamsRef.current), [location.search]);
	let navigate = useNavigate();
	return [searchParams, import_react.useCallback((nextInit, navigateOptions) => {
		const newSearchParams = createSearchParams(typeof nextInit === "function" ? nextInit(searchParams) : nextInit);
		hasSetSearchParamsRef.current = true;
		navigate("?" + newSearchParams, navigateOptions);
	}, [navigate, searchParams])];
}
//#endregion
//#region node_modules/react-dom/client.js
var require_client = /* @__PURE__ */ __commonJSMin(((exports) => {
	var m = require_react_dom();
	exports.createRoot = m.createRoot;
	exports.hydrateRoot = m.hydrateRoot;
}));
//#endregion
//#region src/assets/logo.jpeg
var import_client = require_client();
var logo_default = "/assets/logo-DZZyHIC8.jpeg";
//#endregion
//#region node_modules/react-icons/lib/iconContext.mjs
var DefaultContext = {
	color: void 0,
	size: void 0,
	className: void 0,
	style: void 0,
	attr: void 0
};
var IconContext = import_react.createContext && /*#__PURE__*/ import_react.createContext(DefaultContext);
//#endregion
//#region node_modules/react-icons/lib/iconBase.mjs
var _excluded$7 = [
	"attr",
	"size",
	"title"
];
function _objectWithoutProperties$1(source, excluded) {
	if (source == null) return {};
	var target = _objectWithoutPropertiesLoose$1(source, excluded);
	var key, i;
	if (Object.getOwnPropertySymbols) {
		var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
		for (i = 0; i < sourceSymbolKeys.length; i++) {
			key = sourceSymbolKeys[i];
			if (excluded.indexOf(key) >= 0) continue;
			if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
			target[key] = source[key];
		}
	}
	return target;
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
	if (source == null) return {};
	var target = {};
	for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) {
		if (excluded.indexOf(key) >= 0) continue;
		target[key] = source[key];
	}
	return target;
}
function _extends$1() {
	_extends$1 = Object.assign ? Object.assign.bind() : function(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];
			for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
		}
		return target;
	};
	return _extends$1.apply(this, arguments);
}
function ownKeys$1(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$1(Object(t), !0).forEach(function(r) {
			_defineProperty$1(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$1(obj, key, value) {
	key = _toPropertyKey(key);
	if (key in obj) Object.defineProperty(obj, key, {
		value,
		enumerable: true,
		configurable: true,
		writable: true
	});
	else obj[key] = value;
	return obj;
}
function _toPropertyKey(t) {
	var i = _toPrimitive(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function Tree2Element(tree) {
	return tree && tree.map((node, i) => /*#__PURE__*/ import_react.createElement(node.tag, _objectSpread({ key: i }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
	return (props) => /*#__PURE__*/ import_react.createElement(IconBase, _extends$1({ attr: _objectSpread({}, data.attr) }, props), Tree2Element(data.child));
}
function IconBase(props) {
	var elem = (conf) => {
		var { attr, size, title } = props, svgProps = _objectWithoutProperties$1(props, _excluded$7);
		var computedSize = size || conf.size || "1em";
		var className;
		if (conf.className) className = conf.className;
		if (props.className) className = (className ? className + " " : "") + props.className;
		return /*#__PURE__*/ import_react.createElement("svg", _extends$1({
			stroke: "currentColor",
			fill: "currentColor",
			strokeWidth: "0"
		}, conf.attr, attr, svgProps, {
			className,
			style: _objectSpread(_objectSpread({ color: props.color || conf.color }, conf.style), props.style),
			height: computedSize,
			width: computedSize,
			xmlns: "http://www.w3.org/2000/svg"
		}), title && /*#__PURE__*/ import_react.createElement("title", null, title), props.children);
	};
	return IconContext !== void 0 ? /*#__PURE__*/ import_react.createElement(IconContext.Consumer, null, (conf) => elem(conf)) : elem(DefaultContext);
}
//#endregion
//#region node_modules/react-icons/ai/index.mjs
function AiOutlineClose(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 1024 1024",
			"fill": "currentColor",
			"fillRule": "evenodd"
		},
		"child": [{
			"tag": "path",
			"attr": { "d": "M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z" },
			"child": []
		}]
	})(props);
}
function AiOutlineMenu(props) {
	return GenIcon({
		"tag": "svg",
		"attr": { "viewBox": "0 0 1024 1024" },
		"child": [{
			"tag": "path",
			"attr": { "d": "M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" },
			"child": []
		}]
	})(props);
}
//#endregion
//#region node_modules/react-icons/fi/index.mjs
function FiActivity(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "polyline",
			"attr": { "points": "22 12 18 12 15 21 9 3 6 12 2 12" },
			"child": []
		}]
	})(props);
}
function FiBriefcase(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "rect",
			"attr": {
				"x": "2",
				"y": "7",
				"width": "20",
				"height": "14",
				"rx": "2",
				"ry": "2"
			},
			"child": []
		}, {
			"tag": "path",
			"attr": { "d": "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" },
			"child": []
		}]
	})(props);
}
function FiCheckCircle(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "path",
			"attr": { "d": "M22 11.08V12a10 10 0 1 1-5.93-9.14" },
			"child": []
		}, {
			"tag": "polyline",
			"attr": { "points": "22 4 12 14.01 9 11.01" },
			"child": []
		}]
	})(props);
}
function FiLogOut(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [
			{
				"tag": "path",
				"attr": { "d": "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" },
				"child": []
			},
			{
				"tag": "polyline",
				"attr": { "points": "16 17 21 12 16 7" },
				"child": []
			},
			{
				"tag": "line",
				"attr": {
					"x1": "21",
					"y1": "12",
					"x2": "9",
					"y2": "12"
				},
				"child": []
			}
		]
	})(props);
}
function FiMail(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "path",
			"attr": { "d": "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" },
			"child": []
		}, {
			"tag": "polyline",
			"attr": { "points": "22,6 12,13 2,6" },
			"child": []
		}]
	})(props);
}
function FiMessageSquare(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "path",
			"attr": { "d": "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" },
			"child": []
		}]
	})(props);
}
function FiRefreshCw(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [
			{
				"tag": "polyline",
				"attr": { "points": "23 4 23 10 17 10" },
				"child": []
			},
			{
				"tag": "polyline",
				"attr": { "points": "1 20 1 14 7 14" },
				"child": []
			},
			{
				"tag": "path",
				"attr": { "d": "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" },
				"child": []
			}
		]
	})(props);
}
function FiShield(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "path",
			"attr": { "d": "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
			"child": []
		}]
	})(props);
}
function FiTrash2(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [
			{
				"tag": "polyline",
				"attr": { "points": "3 6 5 6 21 6" },
				"child": []
			},
			{
				"tag": "path",
				"attr": { "d": "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" },
				"child": []
			},
			{
				"tag": "line",
				"attr": {
					"x1": "10",
					"y1": "11",
					"x2": "10",
					"y2": "17"
				},
				"child": []
			},
			{
				"tag": "line",
				"attr": {
					"x1": "14",
					"y1": "11",
					"x2": "14",
					"y2": "17"
				},
				"child": []
			}
		]
	})(props);
}
function FiUserCheck(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [
			{
				"tag": "path",
				"attr": { "d": "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" },
				"child": []
			},
			{
				"tag": "circle",
				"attr": {
					"cx": "8.5",
					"cy": "7",
					"r": "4"
				},
				"child": []
			},
			{
				"tag": "polyline",
				"attr": { "points": "17 11 19 13 23 9" },
				"child": []
			}
		]
	})(props);
}
function FiUserX(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [
			{
				"tag": "path",
				"attr": { "d": "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" },
				"child": []
			},
			{
				"tag": "circle",
				"attr": {
					"cx": "8.5",
					"cy": "7",
					"r": "4"
				},
				"child": []
			},
			{
				"tag": "line",
				"attr": {
					"x1": "18",
					"y1": "8",
					"x2": "23",
					"y2": "13"
				},
				"child": []
			},
			{
				"tag": "line",
				"attr": {
					"x1": "23",
					"y1": "8",
					"x2": "18",
					"y2": "13"
				},
				"child": []
			}
		]
	})(props);
}
function FiUser(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [{
			"tag": "path",
			"attr": { "d": "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" },
			"child": []
		}, {
			"tag": "circle",
			"attr": {
				"cx": "12",
				"cy": "7",
				"r": "4"
			},
			"child": []
		}]
	})(props);
}
function FiUsers(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [
			{
				"tag": "path",
				"attr": { "d": "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" },
				"child": []
			},
			{
				"tag": "circle",
				"attr": {
					"cx": "9",
					"cy": "7",
					"r": "4"
				},
				"child": []
			},
			{
				"tag": "path",
				"attr": { "d": "M23 21v-2a4 4 0 0 0-3-3.87" },
				"child": []
			},
			{
				"tag": "path",
				"attr": { "d": "M16 3.13a4 4 0 0 1 0 7.75" },
				"child": []
			}
		]
	})(props);
}
//#endregion
//#region node_modules/goober/dist/goober.modern.js
var e = { data: "" }, t = (t) => "object" == typeof window ? ((t ? t.querySelector("#_goober") : window._goober) || Object.assign((t || document.head).appendChild(document.createElement("style")), {
	innerHTML: " ",
	id: "_goober"
})).firstChild : t || e, l = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g, a = /\/\*[^]*?\*\/|  +/g, n$1 = /\n+/g, o = (e, t) => {
	let r = "", l = "", a = "";
	for (let n in e) {
		let c = e[n];
		"@" == n[0] ? "i" == n[1] ? r = n + " " + c + ";" : l += "f" == n[1] ? o(c, n) : n + "{" + o(c, "k" == n[1] ? "" : t) + "}" : "object" == typeof c ? l += o(c, t ? t.replace(/([^,])+/g, (e) => n.replace(/(^:.*)|([^,])+/g, (t) => /&/.test(t) ? t.replace(/&/g, e) : e ? e + " " + t : t)) : n) : null != c && (n = /^--/.test(n) ? n : n.replace(/[A-Z]/g, "-$&").toLowerCase(), a += o.p ? o.p(n, c) : n + ":" + c + ";");
	}
	return r + (t && a ? t + "{" + a + "}" : a) + l;
}, c = {}, s = (e) => {
	if ("object" == typeof e) {
		let t = "";
		for (let r in e) t += r + s(e[r]);
		return t;
	}
	return e;
}, i$1 = (e, t, r, i, p) => {
	let u = s(e), d = c[u] || (c[u] = ((e) => {
		let t = 0, r = 11;
		for (; t < e.length;) r = 101 * r + e.charCodeAt(t++) >>> 0;
		return "go" + r;
	})(u));
	if (!c[d]) {
		let t = u !== e ? e : ((e) => {
			let t, r, o = [{}];
			for (; t = l.exec(e.replace(a, ""));) t[4] ? o.shift() : t[3] ? (r = t[3].replace(n$1, " ").trim(), o.unshift(o[0][r] = o[0][r] || {})) : o[0][t[1]] = t[2].replace(n$1, " ").trim();
			return o[0];
		})(e);
		c[d] = o(p ? { ["@keyframes " + d]: t } : t, r ? "" : "." + d);
	}
	let f = r && c.g ? c.g : null;
	return r && (c.g = c[d]), ((e, t, r, l) => {
		l ? t.data = t.data.replace(l, e) : -1 === t.data.indexOf(e) && (t.data = r ? e + t.data : t.data + e);
	})(c[d], t, i, f), d;
}, p = (e, t, r) => e.reduce((e, l, a) => {
	let n = t[a];
	if (n && n.call) {
		let e = n(r), t = e && e.props && e.props.className || /^go/.test(e) && e;
		n = t ? "." + t : e && "object" == typeof e ? e.props ? "" : o(e, "") : !1 === e ? "" : e;
	}
	return e + l + (null == n ? "" : n);
}, "");
function u$1(e) {
	let r = this || {}, l = e.call ? e(r.p) : e;
	return i$1(l.unshift ? l.raw ? p(l, [].slice.call(arguments, 1), r.p) : l.reduce((e, t) => Object.assign(e, t && t.call ? t(r.p) : t), {}) : l, t(r.target), r.g, r.o, r.k);
}
var d, f, g;
u$1.bind({ g: 1 });
var h$1 = u$1.bind({ k: 1 });
function m(e, t, r, l) {
	o.p = t, d = e, f = r, g = l;
}
function j$2(e, t) {
	let r = this || {};
	return function() {
		let l = arguments;
		function a(n, o) {
			let c = Object.assign({}, n), s = c.className || a.className;
			r.p = Object.assign({ theme: f && f() }, c), r.o = / *go\d+/.test(s), c.className = u$1.apply(r, l) + (s ? " " + s : ""), t && (c.ref = o);
			let i = e;
			return e[0] && (i = c.as || e, delete c.as), g && i[0] && g(c), d(i, c);
		}
		return t ? t(a) : a;
	};
}
//#endregion
//#region node_modules/react-hot-toast/dist/index.mjs
var W = (e) => typeof e == "function", T = (e, t) => W(e) ? e(t) : e;
var U = (() => {
	let e = 0;
	return () => (++e).toString();
})(), b = (() => {
	let e;
	return () => {
		if (e === void 0 && typeof window < "u") {
			let t = matchMedia("(prefers-reduced-motion: reduce)");
			e = !t || t.matches;
		}
		return e;
	};
})();
var Q = 20;
var S = /* @__PURE__ */ new Map(), X = 1e3, $ = (e) => {
	if (S.has(e)) return;
	let t = setTimeout(() => {
		S.delete(e), u({
			type: 4,
			toastId: e
		});
	}, X);
	S.set(e, t);
}, J = (e) => {
	let t = S.get(e);
	t && clearTimeout(t);
}, v = (e, t) => {
	switch (t.type) {
		case 0: return {
			...e,
			toasts: [t.toast, ...e.toasts].slice(0, Q)
		};
		case 1: return t.toast.id && J(t.toast.id), {
			...e,
			toasts: e.toasts.map((r) => r.id === t.toast.id ? {
				...r,
				...t.toast
			} : r)
		};
		case 2:
			let { toast: o } = t;
			return e.toasts.find((r) => r.id === o.id) ? v(e, {
				type: 1,
				toast: o
			}) : v(e, {
				type: 0,
				toast: o
			});
		case 3:
			let { toastId: s } = t;
			return s ? $(s) : e.toasts.forEach((r) => {
				$(r.id);
			}), {
				...e,
				toasts: e.toasts.map((r) => r.id === s || s === void 0 ? {
					...r,
					visible: !1
				} : r)
			};
		case 4: return t.toastId === void 0 ? {
			...e,
			toasts: []
		} : {
			...e,
			toasts: e.toasts.filter((r) => r.id !== t.toastId)
		};
		case 5: return {
			...e,
			pausedAt: t.time
		};
		case 6:
			let a = t.time - (e.pausedAt || 0);
			return {
				...e,
				pausedAt: void 0,
				toasts: e.toasts.map((r) => ({
					...r,
					pauseDuration: r.pauseDuration + a
				}))
			};
	}
}, A = [], P = {
	toasts: [],
	pausedAt: void 0
}, u = (e) => {
	P = v(P, e), A.forEach((t) => {
		t(P);
	});
}, Y = {
	blank: 4e3,
	error: 4e3,
	success: 2e3,
	loading: Infinity,
	custom: 4e3
}, I = (e = {}) => {
	let [t, o] = (0, import_react.useState)(P);
	(0, import_react.useEffect)(() => (A.push(o), () => {
		let a = A.indexOf(o);
		a > -1 && A.splice(a, 1);
	}), [t]);
	let s = t.toasts.map((a) => {
		var r, c;
		return {
			...e,
			...e[a.type],
			...a,
			duration: a.duration || ((r = e[a.type]) == null ? void 0 : r.duration) || (e == null ? void 0 : e.duration) || Y[a.type],
			style: {
				...e.style,
				...(c = e[a.type]) == null ? void 0 : c.style,
				...a.style
			}
		};
	});
	return {
		...t,
		toasts: s
	};
};
var G = (e, t = "blank", o) => ({
	createdAt: Date.now(),
	visible: !0,
	type: t,
	ariaProps: {
		role: "status",
		"aria-live": "polite"
	},
	message: e,
	pauseDuration: 0,
	...o,
	id: (o == null ? void 0 : o.id) || U()
}), h = (e) => (t, o) => {
	let s = G(t, e, o);
	return u({
		type: 2,
		toast: s
	}), s.id;
}, n = (e, t) => h("blank")(e, t);
n.error = h("error");
n.success = h("success");
n.loading = h("loading");
n.custom = h("custom");
n.dismiss = (e) => {
	u({
		type: 3,
		toastId: e
	});
};
n.remove = (e) => u({
	type: 4,
	toastId: e
});
n.promise = (e, t, o) => {
	let s = n.loading(t.loading, {
		...o,
		...o == null ? void 0 : o.loading
	});
	return e.then((a) => (n.success(T(t.success, a), {
		id: s,
		...o,
		...o == null ? void 0 : o.success
	}), a)).catch((a) => {
		n.error(T(t.error, a), {
			id: s,
			...o,
			...o == null ? void 0 : o.error
		});
	}), e;
};
var Z = (e, t) => {
	u({
		type: 1,
		toast: {
			id: e,
			height: t
		}
	});
}, ee = () => {
	u({
		type: 5,
		time: Date.now()
	});
}, D = (e) => {
	let { toasts: t, pausedAt: o } = I(e);
	(0, import_react.useEffect)(() => {
		if (o) return;
		let r = Date.now(), c = t.map((i) => {
			if (i.duration === Infinity) return;
			let d = (i.duration || 0) + i.pauseDuration - (r - i.createdAt);
			if (d < 0) {
				i.visible && n.dismiss(i.id);
				return;
			}
			return setTimeout(() => n.dismiss(i.id), d);
		});
		return () => {
			c.forEach((i) => i && clearTimeout(i));
		};
	}, [t, o]);
	return {
		toasts: t,
		handlers: {
			updateHeight: Z,
			startPause: ee,
			endPause: (0, import_react.useCallback)(() => {
				o && u({
					type: 6,
					time: Date.now()
				});
			}, [o]),
			calculateOffset: (0, import_react.useCallback)((r, c) => {
				let { reverseOrder: i = !1, gutter: d = 8, defaultPosition: p } = c || {}, g = t.filter((m) => (m.position || p) === (r.position || p) && m.height), E = g.findIndex((m) => m.id === r.id), x = g.filter((m, R) => R < E && m.visible).length;
				return g.filter((m) => m.visible).slice(...i ? [x + 1] : [0, x]).reduce((m, R) => m + (R.height || 0) + d, 0);
			}, [t])
		}
	};
};
var oe = h$1`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`, re = h$1`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`, se = h$1`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`, _ = j$2("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${oe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${re} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${se} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`;
var ne = h$1`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, V = j$2("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${ne} 1s linear infinite;
`;
var pe = h$1`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, de = h$1`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`, w$1 = j$2("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${pe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${de} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`;
var ue = j$2("div")`
  position: absolute;
`, le = j$2("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, Te = h$1`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, fe = j$2("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Te} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, M = ({ toast: e }) => {
	let { icon: t, type: o, iconTheme: s } = e;
	return t !== void 0 ? typeof t == "string" ? import_react.createElement(fe, null, t) : t : o === "blank" ? null : import_react.createElement(le, null, import_react.createElement(V, { ...s }), o !== "loading" && import_react.createElement(ue, null, o === "error" ? import_react.createElement(_, { ...s }) : import_react.createElement(w$1, { ...s })));
};
var ye = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, ge = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`, he = "0%{opacity:0;} 100%{opacity:1;}", xe = "0%{opacity:1;} 100%{opacity:0;}", be = j$2("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`, Se = j$2("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, Ae = (e, t) => {
	let s = e.includes("top") ? 1 : -1, [a, r] = b() ? [he, xe] : [ye(s), ge(s)];
	return { animation: t ? `${h$1(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${h$1(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)` };
}, F = import_react.memo(({ toast: e, position: t, style: o, children: s }) => {
	let a = e.height ? Ae(e.position || t || "top-center", e.visible) : { opacity: 0 }, r = import_react.createElement(M, { toast: e }), c = import_react.createElement(Se, { ...e.ariaProps }, T(e.message, e));
	return import_react.createElement(be, {
		className: e.className,
		style: {
			...a,
			...o,
			...e.style
		}
	}, typeof s == "function" ? s({
		icon: r,
		message: c
	}) : import_react.createElement(import_react.Fragment, null, r, c));
});
m(import_react.createElement);
var Ee = ({ id: e, className: t, style: o, onHeightUpdate: s, children: a }) => {
	let r = import_react.useCallback((c) => {
		if (c) {
			let i = () => {
				let d = c.getBoundingClientRect().height;
				s(e, d);
			};
			i(), new MutationObserver(i).observe(c, {
				subtree: !0,
				childList: !0,
				characterData: !0
			});
		}
	}, [e, s]);
	return import_react.createElement("div", {
		ref: r,
		className: t,
		style: o
	}, a);
}, Re = (e, t) => {
	let o = e.includes("top"), s = o ? { top: 0 } : { bottom: 0 }, a = e.includes("center") ? { justifyContent: "center" } : e.includes("right") ? { justifyContent: "flex-end" } : {};
	return {
		left: 0,
		right: 0,
		display: "flex",
		position: "absolute",
		transition: b() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
		transform: `translateY(${t * (o ? 1 : -1)}px)`,
		...s,
		...a
	};
}, ve = u$1`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`, O = 16, Ie = ({ reverseOrder: e, position: t = "top-center", toastOptions: o, gutter: s, children: a, containerStyle: r, containerClassName: c }) => {
	let { toasts: i, handlers: d } = D(o);
	return import_react.createElement("div", {
		style: {
			position: "fixed",
			zIndex: 9999,
			top: O,
			left: O,
			right: O,
			bottom: O,
			pointerEvents: "none",
			...r
		},
		className: c,
		onMouseEnter: d.startPause,
		onMouseLeave: d.endPause
	}, i.map((p) => {
		let g = p.position || t, x = Re(g, d.calculateOffset(p, {
			reverseOrder: e,
			gutter: s,
			defaultPosition: t
		}));
		return import_react.createElement(Ee, {
			id: p.id,
			key: p.id,
			onHeightUpdate: d.updateHeight,
			className: p.visible ? ve : "",
			style: x
		}, p.type === "custom" ? T(p.message, p) : a ? a(p) : import_react.createElement(F, {
			toast: p,
			position: g
		}));
	}));
};
var _t = n;
//#endregion
//#region src/context/authContext/AuthContext.jsx
var import_jsx_runtime = require_jsx_runtime();
var AuthContext = (0, import_react.createContext)();
var AuthContextProvider = ({ children }) => {
	const [token, setToken] = (0, import_react.useState)(sessionStorage.getItem("token") || "");
	const [role, setRole] = (0, import_react.useState)(sessionStorage.getItem("role") || "");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [isCheckingAuth, setIsCheckingAuth] = (0, import_react.useState)(true);
	const setAuthData = (token, role, userData) => {
		setToken(token);
		setRole(role);
		sessionStorage.setItem("token", token);
		sessionStorage.setItem("role", role);
		sessionStorage.setItem("data", JSON.stringify(userData));
	};
	(0, import_react.useEffect)(() => {
		const unsubscribe = onAuthStateChanged(auth, async (user) => {
			if (user) try {
				const token = await user.getIdToken();
				const userDoc = await getDoc(doc(db, "users", user.uid));
				if (userDoc.exists()) {
					const userData = userDoc.data();
					setAuthData(token, userData.role, {
						_id: user.uid,
						...userData
					});
				}
			} catch (error) {
				console.error("Error fetching user data in onAuthStateChanged:", error);
			}
			setIsCheckingAuth(false);
		});
		return () => unsubscribe();
	}, []);
	const AuthenticateUser = async (credentials) => {
		setLoading(true);
		try {
			let email = credentials.email.trim();
			if (!email.includes("@")) {
				const querySnapshot = await getDocs(query(collection(db, "users"), where("username", "==", email)));
				if (querySnapshot.empty) throw new Error("No user found with this username.");
				email = querySnapshot.docs[0].data().email;
			}
			const user = (await signInWithEmailAndPassword(auth, email, credentials.password)).user;
			const token = await user.getIdToken();
			const userDoc = await getDoc(doc(db, "users", user.uid));
			if (!userDoc.exists()) throw new Error("User profile not found in Firestore.");
			const userData = userDoc.data();
			setAuthData(token, userData.role, {
				_id: user.uid,
				...userData
			});
			n.success("Login successful");
			setLoading(false);
			return {
				token,
				user: {
					_id: user.uid,
					...userData
				}
			};
		} catch (error) {
			n.error(error.message || "Invalid credentials. Please try again.");
			setLoading(false);
			throw error;
		}
	};
	const RegisterUser = async (credentials) => {
		setLoading(true);
		try {
			const user = (await createUserWithEmailAndPassword(auth, credentials.email, credentials.password)).user;
			const token = await user.getIdToken();
			const userData = {
				firstName: credentials.firstName || "",
				lastName: credentials.lastName || "",
				email: credentials.email,
				mobile: credentials.mobile || "",
				username: credentials.username || "",
				country: credentials.country || "",
				role: credentials.role || "user",
				resumeUrl: credentials.resumeUrl || "",
				profilePictureUrl: ""
			};
			await setDoc(doc(db, "users", user.uid), userData);
			if (userData.role === "user") await setDoc(doc(db, "profiles", credentials.email), {
				uid: user.uid,
				email: credentials.email,
				firstName: userData.firstName,
				lastName: userData.lastName,
				mobile: userData.mobile,
				resumeUrl: userData.resumeUrl,
				profilePictureUrl: "",
				createdAt: (/* @__PURE__ */ new Date()).toISOString()
			});
			setAuthData(token, userData.role, {
				_id: user.uid,
				...userData
			});
			n.success("Registration successful");
			setLoading(false);
			return {
				token,
				user: {
					_id: user.uid,
					...userData
				}
			};
		} catch (error) {
			n.error(error.message || "Unexpected error during registration");
			setLoading(false);
			throw error;
		}
	};
	const updateUserDetails = async (uid, updateData) => {
		setLoading(true);
		try {
			await setDoc(doc(db, "users", uid), updateData, { merge: true });
			const userData = (await getDoc(doc(db, "users", uid))).data();
			setAuthData(token, userData.role, {
				_id: uid,
				...userData
			});
			n.success("Account settings updated successfully");
			setLoading(false);
			return { success: true };
		} catch (error) {
			n.error(error.message || "Failed to update account settings");
			setLoading(false);
			throw error;
		}
	};
	const verifyUserEmail = async (otp) => {
		setLoading(true);
		try {
			const user = auth.currentUser;
			if (user) {
				const token = await user.getIdToken();
				const userDoc = await getDoc(doc(db, "users", user.uid));
				setLoading(false);
				return {
					token,
					user: {
						_id: user.uid,
						...userDoc.data()
					}
				};
			}
			setLoading(false);
			return null;
		} catch (error) {
			console.error("Error verifying email:", error);
			setLoading(false);
			return null;
		}
	};
	const forgotPassword = async (email) => {
		try {
			await sendPasswordResetEmail(auth, email);
			n.success("Password reset link sent to email.");
			return { status: 200 };
		} catch (error) {
			console.error("Error in forgot password:", error);
			n.error(error.message || "Failed to send reset link.");
			return null;
		}
	};
	const verifyOtpForPasswordReset = async (otp) => {
		return { status: 200 };
	};
	const resetPassword = async (email, newPassword) => {
		n.success("Password reset link already sent. Please use the link to reset your password.");
		return { status: 200 };
	};
	const logoutUser = async () => {
		try {
			await signOut(auth);
			sessionStorage.clear();
			setToken("");
			setRole("");
			n.success("Logged out successfully");
			window.location.href = "/";
		} catch (error) {
			console.error("Error signing out:", error);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthContext.Provider, {
		value: {
			AuthenticateUser,
			RegisterUser,
			updateUserDetails,
			verifyUserEmail,
			forgotPassword,
			verifyOtpForPasswordReset,
			resetPassword,
			token,
			role,
			logoutUser,
			loading,
			isCheckingAuth
		},
		children
	});
};
//#endregion
//#region src/context/sectionContext/SectionContext.jsx
var SectionContext = (0, import_react.createContext)();
var SectionContextProvider = ({ children }) => {
	const [sections, setSections] = (0, import_react.useState)();
	const addSectionData = async (data) => {
		try {
			const docRef = await addDoc(collection(db, "sections"), {
				...data,
				createdAt: (/* @__PURE__ */ new Date()).toISOString()
			});
			n.success("section added successfully");
			return { data: {
				id: docRef.id,
				...data
			} };
		} catch (error) {
			console.log(error);
		}
	};
	const getAllSections = async () => {
		try {
			const querySnapshot = await getDocs(collection(db, "sections"));
			const items = [];
			querySnapshot.forEach((doc) => {
				items.push({
					id: doc.id,
					_id: doc.id,
					...doc.data()
				});
			});
			return { data: items };
		} catch (error) {
			console.log(error);
			return { data: [] };
		}
	};
	const getJobSectionById = async (id) => {
		try {
			const docSnap = await getDoc(doc(db, "sections", id));
			if (docSnap.exists()) return [{
				id: docSnap.id,
				_id: docSnap.id,
				...docSnap.data()
			}];
			else return [];
		} catch (error) {
			console.log(error);
			return [];
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionContext.Provider, {
		value: {
			getAllSections,
			addSectionData,
			getJobSectionById
		},
		children
	});
};
//#endregion
//#region src/context/jobContext/JobContext.jsx
var JobContext = (0, import_react.createContext)();
var JobContextProvider = ({ children }) => {
	const addJobData = async (data) => {
		try {
			const user = auth.currentUser;
			const jobData = {
				...data,
				postedBy: user ? user.uid : "anonymous",
				createdAt: (/* @__PURE__ */ new Date()).toISOString()
			};
			const docRef = await addDoc(collection(db, "jobs"), jobData);
			n.success("Job added successfully");
			return {
				id: docRef.id,
				...jobData
			};
		} catch (error) {
			console.error("Error adding job:", error.message);
			throw error;
		}
	};
	const getAllApplications = async (lastVisible = null, limitCount = 20) => {
		try {
			let q = query(collection(db, "jobs"), orderBy("createdAt", "desc"), limit(limitCount));
			if (lastVisible) q = query(collection(db, "jobs"), orderBy("createdAt", "desc"), startAfter(lastVisible), limit(limitCount));
			const querySnapshot = await getDocs(q);
			const jobs = [];
			querySnapshot.forEach((doc) => {
				jobs.push({
					_id: doc.id,
					id: doc.id,
					...doc.data()
				});
			});
			return {
				data: jobs,
				lastDoc: querySnapshot.docs[querySnapshot.docs.length - 1]
			};
		} catch (error) {
			console.error("Error fetching all applications/jobs:", error);
			return {
				data: [],
				lastDoc: null
			};
		}
	};
	const getApplicationsByAdminId = async (adminID) => {
		try {
			const querySnapshot = await getDocs(query(collection(db, "jobs"), where("postedBy", "==", adminID)));
			const jobs = [];
			querySnapshot.forEach((doc) => {
				jobs.push({
					_id: doc.id,
					id: doc.id,
					...doc.data()
				});
			});
			return jobs;
		} catch (error) {
			console.error("Error fetching jobs by admin ID:", error);
			return [];
		}
	};
	const getApplicationsByJobId = async (id) => {
		try {
			const querySnapshot = await getDocs(query(collection(db, "applications"), where("jobId", "==", id)));
			const apps = [];
			querySnapshot.forEach((doc) => {
				apps.push({
					id: doc.id,
					...doc.data()
				});
			});
			return { data: apps };
		} catch (error) {
			console.error("Error fetching applications by job ID:", error);
			return { data: [] };
		}
	};
	const deleteJobById = async (id) => {
		try {
			await deleteDoc(doc(db, "jobs", id));
			n.success("Deleted successfully");
			return { status: 200 };
		} catch (error) {
			console.error("Error deleting job:", error);
			return null;
		}
	};
	const searchJobQuery = async (paramsString, lastVisible = null, limitCount = 20) => {
		try {
			const params = new URLSearchParams(paramsString);
			const constraints = [];
			const category = params.get("category");
			const location = params.get("jobLocation");
			const experience = params.get("experience");
			if (category) constraints.push(where("category", "==", category));
			if (location) constraints.push(where("location", "==", location));
			if (experience) constraints.push(where("experience", "==", experience));
			const totalCount = (await getCountFromServer(query(collection(db, "jobs"), ...constraints))).data().count;
			let q = query(collection(db, "jobs"), ...constraints, orderBy("createdAt", "desc"), limit(limitCount));
			if (lastVisible) q = query(collection(db, "jobs"), ...constraints, orderBy("createdAt", "desc"), startAfter(lastVisible), limit(limitCount));
			const querySnapshot = await getDocs(q);
			const jobs = [];
			querySnapshot.forEach((doc) => {
				jobs.push({
					_id: doc.id,
					id: doc.id,
					...doc.data()
				});
			});
			return {
				data: jobs,
				lastDoc: querySnapshot.docs[querySnapshot.docs.length - 1],
				totalCount
			};
		} catch (error) {
			console.error("Error searching jobs:", error.message);
			return {
				data: [],
				lastDoc: null,
				totalCount: 0
			};
		}
	};
	const getCompanyList = async () => {
		try {
			const querySnapshot = await getDocs(collection(db, "jobs"));
			const companies = /* @__PURE__ */ new Map();
			querySnapshot.forEach((doc) => {
				const data = doc.data();
				if (data.company && !companies.has(data.company)) companies.set(data.company, {
					id: data.company,
					label: data.company,
					value: data.company,
					profilePicture: data.profilePicture || "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
				});
			});
			return Array.from(companies.values());
		} catch (error) {
			console.error("Error fetching company list:", error);
			return [];
		}
	};
	const getJobSingleDetail = async () => {
		try {
			const querySnapshot = await getDocs(collection(db, "jobs"));
			const locations = /* @__PURE__ */ new Set();
			querySnapshot.forEach((doc) => {
				const data = doc.data();
				if (data.location) locations.add(data.location);
			});
			return { data: Array.from(locations).map((loc) => ({
				label: loc,
				value: loc
			})) };
		} catch (error) {
			console.error("Error fetching job single detail (locations):", error);
			return { data: [] };
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JobContext.Provider, {
		value: {
			addJobData,
			getAllApplications,
			getApplicationsByAdminId,
			deleteJobById,
			getApplicationsByJobId,
			searchJobQuery,
			getCompanyList,
			getJobSingleDetail
		},
		children
	});
};
//#endregion
//#region src/context/adminContext/AdminContext.jsx
var AdminContext = (0, import_react.createContext)();
var AdminContextProvider = ({ children }) => {
	const user = JSON.parse(sessionStorage.getItem("data"));
	const addAdminProfleDetail = async (data) => {
		try {
			const currentUser = auth.currentUser;
			if (!currentUser) return;
			await setDoc(doc(db, "profiles", currentUser.uid), {
				...data,
				updatedAt: (/* @__PURE__ */ new Date()).toISOString()
			}, { merge: true });
			_t.success("Profile updated successfully");
		} catch (error) {
			console.error("Error updating profile:", error);
			_t.error("Failed to update profile. Please try again.");
		}
	};
	const getAdminsDetailsByAdminId = async (adminId) => {
		try {
			return await getDoc(doc(db, "profiles", adminId));
		} catch (error) {
			console.error("Error fetching admin details:", error);
			throw error;
		}
	};
	const getCandidateDetails = async (userId) => {
		try {
			return { data: (await getDoc(doc(db, "users", userId))).data() };
		} catch (error) {
			console.error("Error fetching candidate details:", error);
			return { data: null };
		}
	};
	const createJobApplication = async (data) => {
		try {
			const currentUser = auth.currentUser;
			if (!currentUser) {
				_t.error("Please login to apply.");
				return;
			}
			const appRef = doc(db, "applications", `${currentUser.uid}_${data.jobId}`);
			if (!(await getDocs(query(collection(db, "applications"), where("userId", "==", currentUser.uid), where("jobId", "==", data.jobId)))).empty) {
				_t.error("You have already applied for this job. Please wait for a response.");
				return;
			}
			await setDoc(appRef, {
				userId: currentUser.uid,
				jobId: data.jobId,
				sellerId: data.sellerId || data.postedBy || "anonymous",
				appliedAt: (/* @__PURE__ */ new Date()).toISOString(),
				status: "pending",
				...data
			});
			_t.success("Applied successfully");
			return { status: 200 };
		} catch (error) {
			console.error("Error creating job application:", error);
			_t.error("Failed to apply for the job. Please try again.");
		}
	};
	const getApplicationByUserId = async () => {
		try {
			const currentUser = auth.currentUser;
			if (!currentUser) return { data: [] };
			const querySnapshot = await getDocs(query(collection(db, "applications"), where("userId", "==", currentUser.uid)));
			const apps = [];
			querySnapshot.forEach((doc) => {
				apps.push({
					id: doc.id,
					...doc.data()
				});
			});
			return { data: apps };
		} catch (error) {
			console.error("Error fetching job application by user ID:", error);
			return { data: [] };
		}
	};
	const getApplicationBySellerId = async () => {
		try {
			const currentUser = auth.currentUser;
			if (!currentUser) return { data: [] };
			const querySnapshot = await getDocs(query(collection(db, "applications"), where("sellerId", "==", currentUser.uid)));
			const apps = [];
			querySnapshot.forEach((doc) => {
				apps.push({
					id: doc.id,
					...doc.data()
				});
			});
			return { data: apps };
		} catch (error) {
			console.error("Error fetching job application by seller ID:", error);
			return { data: [] };
		}
	};
	const getGlobalUsers = async (lastVisible = null, limitCount = 20) => {
		try {
			let q = query(collection(db, "users"), orderBy("email"), limit(limitCount));
			if (lastVisible) q = query(collection(db, "users"), orderBy("email"), startAfter(lastVisible), limit(limitCount));
			const querySnapshot = await getDocs(q);
			const allUsers = [];
			querySnapshot.forEach((doc) => {
				allUsers.push({
					id: doc.id,
					...doc.data()
				});
			});
			return {
				data: allUsers,
				lastDoc: querySnapshot.docs[querySnapshot.docs.length - 1]
			};
		} catch (error) {
			console.error("Error fetching global users:", error);
			return {
				data: [],
				lastDoc: null
			};
		}
	};
	(0, import_react.useEffect)(() => {
		if (user && user._id) {
			getApplicationByUserId().catch((error) => console.error("Error in useEffect:", error));
			getApplicationBySellerId().catch((error) => console.error("Error in useEffect:", error));
		}
	}, [user]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminContext.Provider, {
		value: {
			getAdminsDetailsByAdminId,
			addAdminProfleDetail,
			createJobApplication,
			getCandidateDetails,
			getApplicationByUserId,
			getApplicationBySellerId,
			getGlobalUsers
		},
		children
	});
};
//#endregion
//#region src/context/employeeContext/EmployeeContext.jsx
var EmployeeContext = (0, import_react.createContext)();
var EmployeeContextProvider = ({ children }) => {
	const createUserProfile = async (data) => {
		try {
			const user = auth.currentUser;
			if (!user) {
				_t.error("No logged in user found. Please login again.");
				return;
			}
			await setDoc(doc(db, "profiles", data.email || user.email), {
				uid: user.uid,
				...data,
				createdAt: (/* @__PURE__ */ new Date()).toISOString()
			});
			_t.success("Data added successfully");
			return {
				uid: user.uid,
				...data
			};
		} catch (error) {
			console.error("Error creating profile:", error);
			_t.error(`Error: ${error.message}`);
		}
	};
	const getEmployeeProfile = async (email) => {
		try {
			const docSnap = await getDoc(doc(db, "profiles", email));
			if (docSnap.exists()) return { data: docSnap.data() };
			return { data: null };
		} catch (error) {
			console.error("Error getting profile:", error);
			return { data: null };
		}
	};
	const updateEmployeeDetails = async (email, data) => {
		try {
			await setDoc(doc(db, "profiles", email), data, { merge: true });
			_t.success("Profile updated successfully");
		} catch (error) {
			console.error("Error updating profile:", error);
			_t.error(`Error: ${error.message}`);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmployeeContext.Provider, {
		value: {
			createUserProfile,
			getEmployeeProfile,
			updateEmployeeDetails
		},
		children
	});
};
//#endregion
//#region src/context/searchContext/SearchContext.jsx
var SearchContext = (0, import_react.createContext)();
var SearchContextProvider = ({ children }) => {
	const [searchResult, setSearchResult] = (0, import_react.useState)([]);
	const [lastVisibleDoc, setLastVisibleDoc] = (0, import_react.useState)(null);
	const [totalJobsCount, setTotalJobsCount] = (0, import_react.useState)(0);
	const [isSearchLoading, setIsSearchLoading] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchContext.Provider, {
		value: {
			searchResult,
			setSearchResult,
			lastVisibleDoc,
			setLastVisibleDoc,
			totalJobsCount,
			setTotalJobsCount,
			isSearchLoading,
			setIsSearchLoading
		},
		children
	});
};
//#endregion
//#region src/context/brandContext/BrandContext.jsx
var BrandContext = (0, import_react.createContext)();
var defaultSettings = {
	appName: "YourJobBoard",
	companyName: "Your Company Ltd.",
	logoTextPrimary: "Your",
	logoTextSecondary: "JobBoard",
	contactEmail: "info@yourcompany.com",
	contactWebsite: "https://yourcompany.com",
	contactPhone: "+1 (555) 123-4567",
	contactAddress: "123 Business Avenue, Tech City",
	aboutUsHeroHeading: "is where the world of business meets their goal",
	aboutUsDescription: "YourCompany, at its core, is transforming how businesses operate on a day-to-day basis. Our professionals outshine conventional roles, blending cognitive capabilities for 24/7 productivity without compromise.",
	metaDescription: "Find your dream job with YourJobBoard."
};
var BrandContextProvider = ({ children }) => {
	const [siteConfig, setSiteConfig] = (0, import_react.useState)(defaultSettings);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const fetchBrandSettings = async () => {
			try {
				const docRef = doc(db, "settings", "brandConfig");
				const docSnap = await getDoc(docRef);
				if (docSnap.exists()) setSiteConfig({
					...defaultSettings,
					...docSnap.data()
				});
				else {
					await setDoc(docRef, defaultSettings);
					setSiteConfig(defaultSettings);
				}
			} catch (error) {
				console.error("Error fetching brand settings:", error);
			} finally {
				setLoading(false);
			}
		};
		fetchBrandSettings();
	}, []);
	const updateBrandConfig = async (newConfig) => {
		try {
			await setDoc(doc(db, "settings", "brandConfig"), newConfig, { merge: true });
			setSiteConfig({
				...siteConfig,
				...newConfig
			});
			n.success("Brand settings updated successfully!");
		} catch (error) {
			console.error("Error updating brand settings:", error);
			n.error("Failed to update brand settings.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandContext.Provider, {
		value: {
			siteConfig,
			updateBrandConfig,
			loading
		},
		children: !loading ? children : null
	});
};
//#endregion
//#region src/context/index.js
var useAuthContext = () => (0, import_react.useContext)(AuthContext);
var useSectionContext = () => (0, import_react.useContext)(SectionContext);
var useJobContext = () => (0, import_react.useContext)(JobContext);
var useAdminContext = () => (0, import_react.useContext)(AdminContext);
var useEmployeeContext = () => (0, import_react.useContext)(EmployeeContext);
var useSearchContext = () => (0, import_react.useContext)(SearchContext);
var useBrandContext = () => (0, import_react.useContext)(BrandContext);
//#endregion
//#region node_modules/prop-types/lib/ReactPropTypesSecret.js
/**
* Copyright (c) 2013-present, Facebook, Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_ReactPropTypesSecret = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
}));
//#endregion
//#region node_modules/prop-types/factoryWithThrowingShims.js
/**
* Copyright (c) 2013-present, Facebook, Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_factoryWithThrowingShims = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var ReactPropTypesSecret = require_ReactPropTypesSecret();
	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;
	module.exports = function() {
		function shim(props, propName, componentName, location, propFullName, secret) {
			if (secret === ReactPropTypesSecret) return;
			var err = /* @__PURE__ */ new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
			err.name = "Invariant Violation";
			throw err;
		}
		shim.isRequired = shim;
		function getShim() {
			return shim;
		}
		var ReactPropTypes = {
			array: shim,
			bigint: shim,
			bool: shim,
			func: shim,
			number: shim,
			object: shim,
			string: shim,
			symbol: shim,
			any: shim,
			arrayOf: getShim,
			element: shim,
			elementType: shim,
			instanceOf: getShim,
			node: shim,
			objectOf: getShim,
			oneOf: getShim,
			oneOfType: getShim,
			shape: getShim,
			exact: getShim,
			checkPropTypes: emptyFunctionWithReset,
			resetWarningCache: emptyFunction
		};
		ReactPropTypes.PropTypes = ReactPropTypes;
		return ReactPropTypes;
	};
}));
//#endregion
//#region node_modules/prop-types/index.js
var require_prop_types = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_factoryWithThrowingShims()();
}));
//#endregion
//#region node_modules/react-confirm-alert/lib/index.js
var require_lib = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = void 0;
	var _extends = Object.assign || function(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];
			for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
		}
		return target;
	};
	var _createClass = function() {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}
		return function(Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();
	var _class, _temp2;
	exports.confirmAlert = confirmAlert;
	var _react = require_react();
	var _react2 = _interopRequireDefault(_react);
	var _propTypes2 = _interopRequireDefault(require_prop_types());
	var _client = require_client();
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}
	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
	}
	function _possibleConstructorReturn(self, call) {
		if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}
	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: {
			value: subClass,
			enumerable: false,
			writable: true,
			configurable: true
		} });
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	var ReactConfirmAlert = (_temp2 = _class = function(_Component) {
		_inherits(ReactConfirmAlert, _Component);
		function ReactConfirmAlert() {
			var _ref;
			var _temp, _this, _ret;
			_classCallCheck(this, ReactConfirmAlert);
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReactConfirmAlert.__proto__ || Object.getPrototypeOf(ReactConfirmAlert)).call.apply(_ref, [this].concat(args))), _this), _this.handleClickButton = function(button) {
				if (button.onClick) button.onClick();
				_this.close();
			}, _this.handleClickOverlay = function(e) {
				var _this$props = _this.props, closeOnClickOutside = _this$props.closeOnClickOutside, onClickOutside = _this$props.onClickOutside;
				var isClickOutside = e.target === _this.overlay;
				if (closeOnClickOutside && isClickOutside) {
					onClickOutside();
					_this.close();
				}
				e.stopPropagation();
			}, _this.close = function() {
				var afterClose = _this.props.afterClose;
				removeBodyClass();
				removeElementReconfirm(_this.props);
				removeSVGBlurReconfirm(afterClose);
			}, _this.keyboard = function(event) {
				var _this$props2 = _this.props, closeOnEscape = _this$props2.closeOnEscape, onKeypressEscape = _this$props2.onKeypressEscape, onkeyPress = _this$props2.onkeyPress, keyCodeForClose = _this$props2.keyCodeForClose;
				var keyCode = event.keyCode;
				var isKeyCodeEscape = keyCode === 27;
				if (keyCodeForClose.includes(keyCode)) _this.close();
				if (closeOnEscape && isKeyCodeEscape) {
					onKeypressEscape(event);
					_this.close();
				}
				if (onkeyPress) onkeyPress();
			}, _this.componentDidMount = function() {
				document.addEventListener("keydown", _this.keyboard, false);
			}, _this.componentWillUnmount = function() {
				document.removeEventListener("keydown", _this.keyboard, false);
				_this.props.willUnmount();
			}, _this.renderCustomUI = function() {
				var _this$props3 = _this.props, title = _this$props3.title, message = _this$props3.message, buttons = _this$props3.buttons, customUI = _this$props3.customUI;
				return customUI({
					title,
					message,
					buttons,
					onClose: _this.close
				});
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}
		_createClass(ReactConfirmAlert, [{
			key: "render",
			value: function render() {
				var _this2 = this;
				var _props = this.props, title = _props.title, message = _props.message, buttons = _props.buttons, childrenElement = _props.childrenElement, customUI = _props.customUI, overlayClassName = _props.overlayClassName;
				return _react2.default.createElement("div", {
					className: "react-confirm-alert-overlay " + overlayClassName,
					ref: function ref(dom) {
						return _this2.overlay = dom;
					},
					onClick: this.handleClickOverlay
				}, _react2.default.createElement("div", { className: "react-confirm-alert" }, customUI ? this.renderCustomUI() : _react2.default.createElement("div", { className: "react-confirm-alert-body" }, title && _react2.default.createElement("h1", null, title), message, childrenElement(), _react2.default.createElement("div", { className: "react-confirm-alert-button-group" }, buttons.map(function(button, i) {
					return _react2.default.createElement("button", _extends({
						key: i,
						className: button.className
					}, button, { onClick: function onClick(e) {
						return _this2.handleClickButton(button);
					} }), button.label);
				})))));
			}
		}]);
		return ReactConfirmAlert;
	}(_react.Component), _class.propTypes = {
		title: _propTypes2.default.string,
		message: _propTypes2.default.string,
		buttons: _propTypes2.default.array.isRequired,
		childrenElement: _propTypes2.default.func,
		customUI: _propTypes2.default.func,
		closeOnClickOutside: _propTypes2.default.bool,
		closeOnEscape: _propTypes2.default.bool,
		keyCodeForClose: _propTypes2.default.arrayOf(_propTypes2.default.number),
		willUnmount: _propTypes2.default.func,
		afterClose: _propTypes2.default.func,
		onClickOutside: _propTypes2.default.func,
		onKeypressEscape: _propTypes2.default.func,
		onkeyPress: _propTypes2.default.func,
		overlayClassName: _propTypes2.default.string
	}, _class.defaultProps = {
		buttons: [{
			label: "Cancel",
			onClick: function onClick() {
				return null;
			},
			className: null
		}, {
			label: "Confirm",
			onClick: function onClick() {
				return null;
			},
			className: null
		}],
		childrenElement: function childrenElement() {
			return null;
		},
		closeOnClickOutside: true,
		closeOnEscape: true,
		keyCodeForClose: [],
		willUnmount: function willUnmount() {
			return null;
		},
		afterClose: function afterClose() {
			return null;
		},
		onClickOutside: function onClickOutside() {
			return null;
		},
		onKeypressEscape: function onKeypressEscape() {
			return null;
		}
	}, _temp2);
	exports.default = ReactConfirmAlert;
	var root = null;
	var targetId = "react-confirm-alert";
	function createSVGBlurReconfirm() {
		if (document.getElementById("react-confirm-alert-firm-svg")) return;
		var svgNS = "http://www.w3.org/2000/svg";
		var feGaussianBlur = document.createElementNS(svgNS, "feGaussianBlur");
		feGaussianBlur.setAttribute("stdDeviation", "0.3");
		var filter = document.createElementNS(svgNS, "filter");
		filter.setAttribute("id", "gaussian-blur");
		filter.appendChild(feGaussianBlur);
		var svgElem = document.createElementNS(svgNS, "svg");
		svgElem.setAttribute("id", "react-confirm-alert-firm-svg");
		svgElem.setAttribute("class", "react-confirm-alert-svg");
		svgElem.appendChild(filter);
		document.body.appendChild(svgElem);
	}
	function removeSVGBlurReconfirm(afterClose) {
		var svg = document.getElementById("react-confirm-alert-firm-svg");
		if (svg) svg.parentNode.removeChild(svg);
		document.body.children[0].classList.remove("react-confirm-alert-blur");
		afterClose();
	}
	function createElementReconfirm(properties) {
		var divTarget = document.getElementById(properties.targetId || targetId);
		if (properties.targetId && !divTarget) console.error("React Confirm Alert:", "Can not get element id (#" + properties.targetId + ")");
		if (divTarget) {
			root = (0, _client.createRoot)(divTarget);
			root.render(_react2.default.createElement(ReactConfirmAlert, properties));
		} else {
			document.body.children[0].classList.add("react-confirm-alert-blur");
			divTarget = document.createElement("div");
			divTarget.id = targetId;
			document.body.appendChild(divTarget);
			root = (0, _client.createRoot)(divTarget);
			root.render(_react2.default.createElement(ReactConfirmAlert, properties));
		}
	}
	function removeElementReconfirm(properties) {
		var target = document.getElementById(properties.targetId || targetId);
		if (target) root.unmount(target);
	}
	function addBodyClass() {
		document.body.classList.add("react-confirm-alert-body-element");
	}
	function removeBodyClass() {
		document.body.classList.remove("react-confirm-alert-body-element");
	}
	function confirmAlert(properties) {
		addBodyClass();
		createSVGBlurReconfirm();
		createElementReconfirm(properties);
	}
}));
//#endregion
//#region src/components/navbar/Navbar.jsx
var import_lib = require_lib();
var Navbar = () => {
	const { logoutUser } = useAuthContext();
	const userRole = sessionStorage.getItem("role");
	const { siteConfig } = useBrandContext();
	const navigate = useNavigate();
	const location = useLocation();
	const [nav, setNav] = (0, import_react.useState)(false);
	const handleNav = () => {
		setNav(!nav);
	};
	const navItems = userRole === "user" ? [
		{
			id: 1,
			text: "Open Roles",
			path: "/view-jobs"
		},
		{
			id: 2,
			text: "My Profile",
			path: "/view-profile"
		},
		{
			id: 3,
			text: "Applied Jobs",
			path: "/view-applications"
		}
	] : userRole === "admin" ? [{
		id: 1,
		text: "Post Job",
		path: "/add-job"
	}, {
		id: 2,
		text: "My Profile",
		path: "/view-profile"
	}] : userRole === "superadmin" ? [{
		id: 1,
		text: "Admin Dashboard",
		path: "/admin-dashboard"
	}] : [
		{
			id: 1,
			text: "Home",
			path: "/"
		},
		{
			id: 2,
			text: "About",
			path: "/about-us"
		},
		{
			id: 3,
			text: "Contact",
			path: "/contact-us"
		},
		{
			id: 4,
			text: "Jobs",
			path: "/view-jobs"
		}
	];
	const Logout = () => {
		(0, import_lib.confirmAlert)({
			title: "Confirm to logout",
			message: "Are you sure you want to log out?",
			buttons: [{
				label: "Yes",
				onClick: () => logoutUser()
			}, {
				label: "No",
				onClick: () => {}
			}]
		});
	};
	const isActive = (path) => {
		return location.pathname === path;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "w-full sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-3 no-underline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_default,
						alt: "Logo",
						className: "w-10 h-10 rounded-lg object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-semibold text-slate-800 text-lg tracking-wide",
						children: [siteConfig.logoTextPrimary, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#2563EB]",
							children: siteConfig.logoTextSecondary
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "hidden md:flex gap-8 items-center list-none mb-0",
					children: [navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.path,
						className: `text-sm font-semibold transition-colors duration-200 no-underline px-3 py-2 rounded-lg ${isActive(item.path) ? "text-[#2563EB] bg-blue-50" : "text-slate-600 hover:text-[#2563EB] hover:bg-slate-50"}`,
						children: item.text
					}) }, item.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "list-none border-l border-slate-200 pl-8 ml-2",
						children: userRole ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-sm font-medium text-slate-600 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiUser, { className: "text-[#2563EB]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "capitalize",
									children: userRole === "admin" ? "Employer" : userRole === "user" ? "Candidate" : "Admin"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: Logout,
								className: "flex items-center gap-2 bg-white hover:bg-red-50 text-slate-600 hover:text-red-600 font-medium text-sm px-4 py-2 rounded-lg transition-colors border border-slate-200 shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiLogOut, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Logout" })]
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => navigate("/login"),
							className: "bg-[#2563EB] hover:bg-blue-700 text-white font-semibold text-sm px-6 py-2.5 rounded-lg transition-colors border-0 shadow-sm",
							children: "Login"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					onClick: handleNav,
					className: "block md:hidden cursor-pointer text-slate-700 hover:text-slate-900 transition-colors",
					children: nav ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AiOutlineClose, { size: 24 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AiOutlineMenu, { size: 24 })
				}),
				nav && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "fixed inset-0 z-40 md:hidden bg-slate-900/20 backdrop-blur-sm",
					onClick: () => setNav(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "fixed left-0 top-0 w-[70%] max-w-[300px] h-full bg-white shadow-2xl p-6 flex flex-col gap-6 ease-in-out duration-300 list-none",
						onClick: (e) => e.stopPropagation(),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "mb-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/",
									onClick: () => setNav(false),
									className: "flex items-center gap-3 no-underline",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/assets/logo-DZZyHIC8.jpeg",
										alt: "Logo",
										className: "w-9 h-9 rounded-lg object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-semibold text-slate-800 text-base tracking-wide",
										children: [siteConfig.logoTextPrimary, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[#2563EB]",
											children: siteConfig.logoTextSecondary
										})]
									})]
								})
							}),
							navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								className: `text-base font-medium no-underline block py-2 ${isActive(item.path) ? "text-[#2563EB]" : "text-slate-600 hover:text-[#2563EB]"}`,
								to: item.path,
								onClick: () => setNav(false),
								children: item.text
							}) }, item.id)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "mt-auto pt-6 border-t border-slate-100",
								children: userRole ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => {
										Logout();
										setNav(false);
									},
									className: "w-full bg-red-50 hover:bg-red-100 text-red-600 font-medium py-3 rounded-lg transition-colors border-0",
									children: "Logout"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => {
										navigate("/login");
										setNav(false);
									},
									className: "w-full bg-[#2563EB] hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors border-0 shadow-sm",
									children: "Login"
								})
							})
						]
					})
				})
			]
		})
	}) });
};
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
	"@babel/helpers - typeof";
	return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
		return typeof o;
	} : function(o) {
		return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
	}, _typeof(o);
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function toPrimitive(t, r) {
	if ("object" != _typeof(t) || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != _typeof(i)) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function toPropertyKey(t) {
	var i = toPrimitive(t, "string");
	return "symbol" == _typeof(i) ? i : i + "";
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(e, r, t) {
	return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/objectSpread2.js
function ownKeys(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread2(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
			_defineProperty(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(r) {
	if (Array.isArray(r)) return r;
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r, l) {
	var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
	if (null != t) {
		var e, n, i, u, a = [], f = !0, o = !1;
		try {
			if (i = (t = t.call(r)).next, 0 === l) {
				if (Object(t) !== t) return;
				f = !1;
			} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
		} catch (r) {
			o = !0, n = r;
		} finally {
			try {
				if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
			} finally {
				if (o) throw n;
			}
		}
		return a;
	}
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(r, a) {
	(null == a || a > r.length) && (a = r.length);
	for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
	return n;
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray(r, a) {
	if (r) {
		if ("string" == typeof r) return _arrayLikeToArray(r, a);
		var t = {}.toString.call(r).slice(8, -1);
		return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
	}
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
	throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/slicedToArray.js
function _slicedToArray(r, e) {
	return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (e.includes(n)) continue;
		t[n] = r[n];
	}
	return t;
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
function _objectWithoutProperties(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose(e, t);
	if (Object.getOwnPropertySymbols) {
		var s = Object.getOwnPropertySymbols(e);
		for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
//#endregion
//#region node_modules/react-select/dist/useStateManager-7e1e8489.esm.js
var _excluded$6 = [
	"defaultInputValue",
	"defaultMenuIsOpen",
	"defaultValue",
	"inputValue",
	"menuIsOpen",
	"onChange",
	"onInputChange",
	"onMenuClose",
	"onMenuOpen",
	"value"
];
function useStateManager(_ref) {
	var _ref$defaultInputValu = _ref.defaultInputValue, defaultInputValue = _ref$defaultInputValu === void 0 ? "" : _ref$defaultInputValu, _ref$defaultMenuIsOpe = _ref.defaultMenuIsOpen, defaultMenuIsOpen = _ref$defaultMenuIsOpe === void 0 ? false : _ref$defaultMenuIsOpe, _ref$defaultValue = _ref.defaultValue, defaultValue = _ref$defaultValue === void 0 ? null : _ref$defaultValue, propsInputValue = _ref.inputValue, propsMenuIsOpen = _ref.menuIsOpen, propsOnChange = _ref.onChange, propsOnInputChange = _ref.onInputChange, propsOnMenuClose = _ref.onMenuClose, propsOnMenuOpen = _ref.onMenuOpen, propsValue = _ref.value, restSelectProps = _objectWithoutProperties(_ref, _excluded$6);
	var _useState2 = _slicedToArray((0, import_react.useState)(propsInputValue !== void 0 ? propsInputValue : defaultInputValue), 2), stateInputValue = _useState2[0], setStateInputValue = _useState2[1];
	var _useState4 = _slicedToArray((0, import_react.useState)(propsMenuIsOpen !== void 0 ? propsMenuIsOpen : defaultMenuIsOpen), 2), stateMenuIsOpen = _useState4[0], setStateMenuIsOpen = _useState4[1];
	var _useState6 = _slicedToArray((0, import_react.useState)(propsValue !== void 0 ? propsValue : defaultValue), 2), stateValue = _useState6[0], setStateValue = _useState6[1];
	var onChange = (0, import_react.useCallback)(function(value, actionMeta) {
		if (typeof propsOnChange === "function") propsOnChange(value, actionMeta);
		setStateValue(value);
	}, [propsOnChange]);
	var onInputChange = (0, import_react.useCallback)(function(value, actionMeta) {
		var newValue;
		if (typeof propsOnInputChange === "function") newValue = propsOnInputChange(value, actionMeta);
		setStateInputValue(newValue !== void 0 ? newValue : value);
	}, [propsOnInputChange]);
	var onMenuOpen = (0, import_react.useCallback)(function() {
		if (typeof propsOnMenuOpen === "function") propsOnMenuOpen();
		setStateMenuIsOpen(true);
	}, [propsOnMenuOpen]);
	var onMenuClose = (0, import_react.useCallback)(function() {
		if (typeof propsOnMenuClose === "function") propsOnMenuClose();
		setStateMenuIsOpen(false);
	}, [propsOnMenuClose]);
	var inputValue = propsInputValue !== void 0 ? propsInputValue : stateInputValue;
	var menuIsOpen = propsMenuIsOpen !== void 0 ? propsMenuIsOpen : stateMenuIsOpen;
	var value = propsValue !== void 0 ? propsValue : stateValue;
	return _objectSpread2(_objectSpread2({}, restSelectProps), {}, {
		inputValue,
		menuIsOpen,
		onChange,
		onInputChange,
		onMenuClose,
		onMenuOpen,
		value
	});
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
	return _extends = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends.apply(null, arguments);
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(a, n) {
	if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(e, r) {
	for (var t = 0; t < r.length; t++) {
		var o = r[t];
		o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey(o.key), o);
	}
}
function _createClass(e, r, t) {
	return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
	return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
		return t.__proto__ = e, t;
	}, _setPrototypeOf(t, e);
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/inherits.js
function _inherits(t, e) {
	if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
	t.prototype = Object.create(e && e.prototype, { constructor: {
		value: t,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e);
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(t) {
	return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
		return t.__proto__ || Object.getPrototypeOf(t);
	}, _getPrototypeOf(t);
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
	try {
		var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch (t) {}
	return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
		return !!t;
	})();
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(e) {
	if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
function _possibleConstructorReturn(t, e) {
	if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
	if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
	return _assertThisInitialized(t);
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/createSuper.js
function _createSuper(t) {
	var r = _isNativeReflectConstruct();
	return function() {
		var e, o = _getPrototypeOf(t);
		if (r) {
			var s = _getPrototypeOf(this).constructor;
			e = Reflect.construct(o, arguments, s);
		} else e = o.apply(this, arguments);
		return _possibleConstructorReturn(this, e);
	};
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(r) {
	if (Array.isArray(r)) return _arrayLikeToArray(r);
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(r) {
	if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
	throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
function _toConsumableArray(r) {
	return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
//#endregion
//#region node_modules/@emotion/sheet/dist/emotion-sheet.esm.js
function sheetForTag(tag) {
	if (tag.sheet) return tag.sheet;
	/* istanbul ignore next */
	for (var i = 0; i < document.styleSheets.length; i++) if (document.styleSheets[i].ownerNode === tag) return document.styleSheets[i];
}
function createStyleElement(options) {
	var tag = document.createElement("style");
	tag.setAttribute("data-emotion", options.key);
	if (options.nonce !== void 0) tag.setAttribute("nonce", options.nonce);
	tag.appendChild(document.createTextNode(""));
	tag.setAttribute("data-s", "");
	return tag;
}
var StyleSheet = /*#__PURE__*/ function() {
	function StyleSheet(options) {
		var _this = this;
		this._insertTag = function(tag) {
			var before;
			if (_this.tags.length === 0) if (_this.insertionPoint) before = _this.insertionPoint.nextSibling;
			else if (_this.prepend) before = _this.container.firstChild;
			else before = _this.before;
			else before = _this.tags[_this.tags.length - 1].nextSibling;
			_this.container.insertBefore(tag, before);
			_this.tags.push(tag);
		};
		this.isSpeedy = options.speedy === void 0 ? true : options.speedy;
		this.tags = [];
		this.ctr = 0;
		this.nonce = options.nonce;
		this.key = options.key;
		this.container = options.container;
		this.prepend = options.prepend;
		this.insertionPoint = options.insertionPoint;
		this.before = null;
	}
	var _proto = StyleSheet.prototype;
	_proto.hydrate = function hydrate(nodes) {
		nodes.forEach(this._insertTag);
	};
	_proto.insert = function insert(rule) {
		if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) this._insertTag(createStyleElement(this));
		var tag = this.tags[this.tags.length - 1];
		if (this.isSpeedy) {
			var sheet = sheetForTag(tag);
			try {
				sheet.insertRule(rule, sheet.cssRules.length);
			} catch (e) {}
		} else tag.appendChild(document.createTextNode(rule));
		this.ctr++;
	};
	_proto.flush = function flush() {
		this.tags.forEach(function(tag) {
			var _tag$parentNode;
			return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
		});
		this.tags = [];
		this.ctr = 0;
	};
	return StyleSheet;
}();
//#endregion
//#region node_modules/stylis/src/Enum.js
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";
//#endregion
//#region node_modules/stylis/src/Utility.js
/**
* @param {number}
* @return {number}
*/
var abs = Math.abs;
/**
* @param {number}
* @return {string}
*/
var from = String.fromCharCode;
/**
* @param {object}
* @return {object}
*/
var assign = Object.assign;
/**
* @param {string} value
* @param {number} length
* @return {number}
*/
function hash(value, length) {
	return charat(value, 0) ^ 45 ? (((length << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
/**
* @param {string} value
* @return {string}
*/
function trim(value) {
	return value.trim();
}
/**
* @param {string} value
* @param {RegExp} pattern
* @return {string?}
*/
function match(value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value;
}
/**
* @param {string} value
* @param {(string|RegExp)} pattern
* @param {string} replacement
* @return {string}
*/
function replace(value, pattern, replacement) {
	return value.replace(pattern, replacement);
}
/**
* @param {string} value
* @param {string} search
* @return {number}
*/
function indexof(value, search) {
	return value.indexOf(search);
}
/**
* @param {string} value
* @param {number} index
* @return {number}
*/
function charat(value, index) {
	return value.charCodeAt(index) | 0;
}
/**
* @param {string} value
* @param {number} begin
* @param {number} end
* @return {string}
*/
function substr(value, begin, end) {
	return value.slice(begin, end);
}
/**
* @param {string} value
* @return {number}
*/
function strlen(value) {
	return value.length;
}
/**
* @param {any[]} value
* @return {number}
*/
function sizeof(value) {
	return value.length;
}
/**
* @param {any} value
* @param {any[]} array
* @return {any}
*/
function append(value, array) {
	return array.push(value), value;
}
/**
* @param {string[]} array
* @param {function} callback
* @return {string}
*/
function combine(array, callback) {
	return array.map(callback).join("");
}
//#endregion
//#region node_modules/stylis/src/Tokenizer.js
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
/**
* @param {string} value
* @param {object | null} root
* @param {object | null} parent
* @param {string} type
* @param {string[] | string} props
* @param {object[] | string} children
* @param {number} length
*/
function node(value, root, parent, type, props, children, length) {
	return {
		value,
		root,
		parent,
		type,
		props,
		children,
		line,
		column,
		length,
		return: ""
	};
}
/**
* @param {object} root
* @param {object} props
* @return {object}
*/
function copy(root, props) {
	return assign(node("", null, null, "", null, null, 0), root, { length: -root.length }, props);
}
/**
* @return {number}
*/
function char() {
	return character;
}
/**
* @return {number}
*/
function prev() {
	character = position > 0 ? charat(characters, --position) : 0;
	if (column--, character === 10) column = 1, line--;
	return character;
}
/**
* @return {number}
*/
function next() {
	character = position < length ? charat(characters, position++) : 0;
	if (column++, character === 10) column = 1, line++;
	return character;
}
/**
* @return {number}
*/
function peek() {
	return charat(characters, position);
}
/**
* @return {number}
*/
function caret() {
	return position;
}
/**
* @param {number} begin
* @param {number} end
* @return {string}
*/
function slice(begin, end) {
	return substr(characters, begin, end);
}
/**
* @param {number} type
* @return {number}
*/
function token(type) {
	switch (type) {
		case 0:
		case 9:
		case 10:
		case 13:
		case 32: return 5;
		case 33:
		case 43:
		case 44:
		case 47:
		case 62:
		case 64:
		case 126:
		case 59:
		case 123:
		case 125: return 4;
		case 58: return 3;
		case 34:
		case 39:
		case 40:
		case 91: return 2;
		case 41:
		case 93: return 1;
	}
	return 0;
}
/**
* @param {string} value
* @return {any[]}
*/
function alloc(value) {
	return line = column = 1, length = strlen(characters = value), position = 0, [];
}
/**
* @param {any} value
* @return {any}
*/
function dealloc(value) {
	return characters = "", value;
}
/**
* @param {number} type
* @return {string}
*/
function delimit(type) {
	return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
/**
* @param {number} type
* @return {string}
*/
function whitespace(type) {
	while (character = peek()) if (character < 33) next();
	else break;
	return token(type) > 2 || token(character) > 3 ? "" : " ";
}
/**
* @param {number} index
* @param {number} count
* @return {string}
*/
function escaping(index, count) {
	while (--count && next()) if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;
	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
/**
* @param {number} type
* @return {number}
*/
function delimiter(type) {
	while (next()) switch (character) {
		case type: return position;
		case 34:
		case 39:
			if (type !== 34 && type !== 39) delimiter(character);
			break;
		case 40:
			if (type === 41) delimiter(type);
			break;
		case 92:
			next();
			break;
	}
	return position;
}
/**
* @param {number} type
* @param {number} index
* @return {number}
*/
function commenter(type, index) {
	while (next()) if (type + character === 57) break;
	else if (type + character === 84 && peek() === 47) break;
	return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
/**
* @param {number} index
* @return {string}
*/
function identifier(index) {
	while (!token(peek())) next();
	return slice(index, position);
}
//#endregion
//#region node_modules/stylis/src/Parser.js
/**
* @param {string} value
* @return {object[]}
*/
function compile(value) {
	return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
/**
* @param {string} value
* @param {object} root
* @param {object?} parent
* @param {string[]} rule
* @param {string[]} rules
* @param {string[]} rulesets
* @param {number[]} pseudo
* @param {number[]} points
* @param {string[]} declarations
* @return {object}
*/
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0;
	var offset = 0;
	var length = pseudo;
	var atrule = 0;
	var property = 0;
	var previous = 0;
	var variable = 1;
	var scanning = 1;
	var ampersand = 1;
	var character = 0;
	var type = "";
	var props = rules;
	var children = rulesets;
	var reference = rule;
	var characters = type;
	while (scanning) switch (previous = character, character = next()) {
		case 40: if (previous != 108 && charat(characters, length - 1) == 58) {
			if (indexof(characters += replace(delimit(character), "&", "&\f"), "&\f") != -1) ampersand = -1;
			break;
		}
		case 34:
		case 39:
		case 91:
			characters += delimit(character);
			break;
		case 9:
		case 10:
		case 13:
		case 32:
			characters += whitespace(previous);
			break;
		case 92:
			characters += escaping(caret() - 1, 7);
			continue;
		case 47:
			switch (peek()) {
				case 42:
				case 47:
					append(comment(commenter(next(), caret()), root, parent), declarations);
					break;
				default: characters += "/";
			}
			break;
		case 123 * variable: points[index++] = strlen(characters) * ampersand;
		case 125 * variable:
		case 59:
		case 0:
			switch (character) {
				case 0:
				case 125: scanning = 0;
				case 59 + offset:
					if (ampersand == -1) characters = replace(characters, /\f/g, "");
					if (property > 0 && strlen(characters) - length) append(property > 32 ? declaration(characters + ";", rule, parent, length - 1) : declaration(replace(characters, " ", "") + ";", rule, parent, length - 2), declarations);
					break;
				case 59: characters += ";";
				default:
					append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);
					if (character === 123) if (offset === 0) parse(characters, root, reference, reference, props, rulesets, length, points, children);
					else switch (atrule === 99 && charat(characters, 3) === 110 ? 100 : atrule) {
						case 100:
						case 108:
						case 109:
						case 115:
							parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children);
							break;
						default: parse(characters, reference, reference, reference, [""], children, 0, points, children);
					}
			}
			index = offset = property = 0, variable = ampersand = 1, type = characters = "", length = pseudo;
			break;
		case 58: length = 1 + strlen(characters), property = previous;
		default:
			if (variable < 1) {
				if (character == 123) --variable;
				else if (character == 125 && variable++ == 0 && prev() == 125) continue;
			}
			switch (characters += from(character), character * variable) {
				case 38:
					ampersand = offset > 0 ? 1 : (characters += "\f", -1);
					break;
				case 44:
					points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
					break;
				case 64:
					if (peek() === 45) characters += delimit(next());
					atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
					break;
				case 45: if (previous === 45 && strlen(characters) == 2) variable = 0;
			}
	}
	return rulesets;
}
/**
* @param {string} value
* @param {object} root
* @param {object?} parent
* @param {number} index
* @param {number} offset
* @param {string[]} rules
* @param {number[]} points
* @param {string} type
* @param {string[]} props
* @param {string[]} children
* @param {number} length
* @return {object}
*/
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length) {
	var post = offset - 1;
	var rule = offset === 0 ? rules : [""];
	var size = sizeof(rule);
	for (var i = 0, j = 0, k = 0; i < index; ++i) for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x) if (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x]))) props[k++] = z;
	return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length);
}
/**
* @param {number} value
* @param {object} root
* @param {object?} parent
* @return {object}
*/
function comment(value, root, parent) {
	return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
/**
* @param {string} value
* @param {object} root
* @param {object?} parent
* @param {number} length
* @return {object}
*/
function declaration(value, root, parent, length) {
	return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length);
}
//#endregion
//#region node_modules/stylis/src/Serializer.js
/**
* @param {object[]} children
* @param {function} callback
* @return {string}
*/
function serialize(children, callback) {
	var output = "";
	var length = sizeof(children);
	for (var i = 0; i < length; i++) output += callback(children[i], i, children, callback) || "";
	return output;
}
/**
* @param {object} element
* @param {number} index
* @param {object[]} children
* @param {function} callback
* @return {string}
*/
function stringify(element, index, children, callback) {
	switch (element.type) {
		case LAYER: if (element.children.length) break;
		case IMPORT:
		case DECLARATION: return element.return = element.return || element.value;
		case COMMENT: return "";
		case KEYFRAMES: return element.return = element.value + "{" + serialize(element.children, callback) + "}";
		case RULESET: element.value = element.props.join(",");
	}
	return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}
//#endregion
//#region node_modules/stylis/src/Middleware.js
/**
* @param {function[]} collection
* @return {function}
*/
function middleware(collection) {
	var length = sizeof(collection);
	return function(element, index, children, callback) {
		var output = "";
		for (var i = 0; i < length; i++) output += collection[i](element, index, children, callback) || "";
		return output;
	};
}
/**
* @param {function} callback
* @return {function}
*/
function rulesheet(callback) {
	return function(element) {
		if (!element.root) {
			if (element = element.return) callback(element);
		}
	};
}
//#endregion
//#region node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn) {
	var cache = Object.create(null);
	return function(arg) {
		if (cache[arg] === void 0) cache[arg] = fn(arg);
		return cache[arg];
	};
}
//#endregion
//#region node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js
var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
	var previous = 0;
	var character = 0;
	while (true) {
		previous = character;
		character = peek();
		if (previous === 38 && character === 12) points[index] = 1;
		if (token(character)) break;
		next();
	}
	return slice(begin, position);
};
var toRules = function toRules(parsed, points) {
	var index = -1;
	var character = 44;
	do
		switch (token(character)) {
			case 0:
				if (character === 38 && peek() === 12) points[index] = 1;
				parsed[index] += identifierWithPointTracking(position - 1, points, index);
				break;
			case 2:
				parsed[index] += delimit(character);
				break;
			case 4: if (character === 44) {
				parsed[++index] = peek() === 58 ? "&\f" : "";
				points[index] = parsed[index].length;
				break;
			}
			default: parsed[index] += from(character);
		}
	while (character = next());
	return parsed;
};
var getRules = function getRules(value, points) {
	return dealloc(toRules(alloc(value), points));
};
var fixedElements = /* #__PURE__ */ new WeakMap();
var compat = function compat(element) {
	if (element.type !== "rule" || !element.parent || element.length < 1) return;
	var value = element.value, parent = element.parent;
	var isImplicitRule = element.column === parent.column && element.line === parent.line;
	while (parent.type !== "rule") {
		parent = parent.parent;
		if (!parent) return;
	}
	if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) return;
	if (isImplicitRule) return;
	fixedElements.set(element, true);
	var points = [];
	var rules = getRules(value, points);
	var parentRules = parent.props;
	for (var i = 0, k = 0; i < rules.length; i++) for (var j = 0; j < parentRules.length; j++, k++) element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
};
var removeLabel = function removeLabel(element) {
	if (element.type === "decl") {
		var value = element.value;
		if (value.charCodeAt(0) === 108 && value.charCodeAt(2) === 98) {
			element["return"] = "";
			element.value = "";
		}
	}
};
function prefix(value, length) {
	switch (hash(value, length)) {
		case 5103: return WEBKIT + "print-" + value + value;
		case 5737:
		case 4201:
		case 3177:
		case 3433:
		case 1641:
		case 4457:
		case 2921:
		case 5572:
		case 6356:
		case 5844:
		case 3191:
		case 6645:
		case 3005:
		case 6391:
		case 5879:
		case 5623:
		case 6135:
		case 4599:
		case 4855:
		case 4215:
		case 6389:
		case 5109:
		case 5365:
		case 5621:
		case 3829: return WEBKIT + value + value;
		case 5349:
		case 4246:
		case 4810:
		case 6968:
		case 2756: return WEBKIT + value + MOZ + value + MS + value + value;
		case 6828:
		case 4268: return WEBKIT + value + MS + value + value;
		case 6165: return WEBKIT + value + MS + "flex-" + value + value;
		case 5187: return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
		case 5443: return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
		case 4675: return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
		case 5548: return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
		case 5292: return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
		case 6060: return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
		case 4554: return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
		case 6187: return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
		case 5495:
		case 3959: return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
		case 4968: return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
		case 4095:
		case 3583:
		case 4068:
		case 2532: return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
		case 8116:
		case 7059:
		case 5753:
		case 5535:
		case 5445:
		case 5701:
		case 4933:
		case 4677:
		case 5533:
		case 5789:
		case 5021:
		case 4765:
			if (strlen(value) - 1 - length > 6) switch (charat(value, length + 1)) {
				case 109: if (charat(value, length + 4) !== 45) break;
				case 102: return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length + 3) == 108 ? "$3" : "$2-$3")) + value;
				case 115: return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length) + value : value;
			}
			break;
		case 4949: if (charat(value, length + 1) !== 115) break;
		case 6444:
			switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
				case 107: return replace(value, ":", ":" + WEBKIT) + value;
				case 101: return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
			}
			break;
		case 5936:
			switch (charat(value, length + 11)) {
				case 114: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
				case 108: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
				case 45: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
			}
			return WEBKIT + value + MS + value + value;
	}
	return value;
}
var defaultStylisPlugins = [function prefixer(element, index, children, callback) {
	if (element.length > -1) {
		if (!element["return"]) switch (element.type) {
			case DECLARATION:
				element["return"] = prefix(element.value, element.length);
				break;
			case KEYFRAMES: return serialize([copy(element, { value: replace(element.value, "@", "@" + WEBKIT) })], callback);
			case RULESET: if (element.length) return combine(element.props, function(value) {
				switch (match(value, /(::plac\w+|:read-\w+)/)) {
					case ":read-only":
					case ":read-write": return serialize([copy(element, { props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")] })], callback);
					case "::placeholder": return serialize([
						copy(element, { props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")] }),
						copy(element, { props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")] }),
						copy(element, { props: [replace(value, /:(plac\w+)/, MS + "input-$1")] })
					], callback);
				}
				return "";
			});
		}
	}
}];
var createCache = function createCache(options) {
	var key = options.key;
	if (key === "css") {
		var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
		Array.prototype.forEach.call(ssrStyles, function(node) {
			if (node.getAttribute("data-emotion").indexOf(" ") === -1) return;
			document.head.appendChild(node);
			node.setAttribute("data-s", "");
		});
	}
	var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
	var inserted = {};
	var container;
	var nodesToHydrate = [];
	container = options.container || document.head;
	Array.prototype.forEach.call(document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function(node) {
		var attrib = node.getAttribute("data-emotion").split(" ");
		for (var i = 1; i < attrib.length; i++) inserted[attrib[i]] = true;
		nodesToHydrate.push(node);
	});
	var _insert;
	var omnipresentPlugins = [compat, removeLabel];
	var currentSheet;
	var finalizingPlugins = [stringify, rulesheet(function(rule) {
		currentSheet.insert(rule);
	})];
	var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
	var stylis = function stylis(styles) {
		return serialize(compile(styles), serializer);
	};
	_insert = function insert(selector, serialized, sheet, shouldCache) {
		currentSheet = sheet;
		stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
		if (shouldCache) cache.inserted[serialized.name] = true;
	};
	var cache = {
		key,
		sheet: new StyleSheet({
			key,
			container,
			nonce: options.nonce,
			speedy: options.speedy,
			prepend: options.prepend,
			insertionPoint: options.insertionPoint
		}),
		nonce: options.nonce,
		inserted,
		registered: {},
		insert: _insert
	};
	cache.sheet.hydrate(nodesToHydrate);
	return cache;
};
//#endregion
//#region node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js
/** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_is_production_min = /* @__PURE__ */ __commonJSMin(((exports) => {
	var b = "function" === typeof Symbol && Symbol.for, c = b ? Symbol.for("react.element") : 60103, d = b ? Symbol.for("react.portal") : 60106, e = b ? Symbol.for("react.fragment") : 60107, f = b ? Symbol.for("react.strict_mode") : 60108, g = b ? Symbol.for("react.profiler") : 60114, h = b ? Symbol.for("react.provider") : 60109, k = b ? Symbol.for("react.context") : 60110, l = b ? Symbol.for("react.async_mode") : 60111, m = b ? Symbol.for("react.concurrent_mode") : 60111, n = b ? Symbol.for("react.forward_ref") : 60112, p = b ? Symbol.for("react.suspense") : 60113, q = b ? Symbol.for("react.suspense_list") : 60120, r = b ? Symbol.for("react.memo") : 60115, t = b ? Symbol.for("react.lazy") : 60116, v = b ? Symbol.for("react.block") : 60121, w = b ? Symbol.for("react.fundamental") : 60117, x = b ? Symbol.for("react.responder") : 60118, y = b ? Symbol.for("react.scope") : 60119;
	function z(a) {
		if ("object" === typeof a && null !== a) {
			var u = a.$$typeof;
			switch (u) {
				case c: switch (a = a.type, a) {
					case l:
					case m:
					case e:
					case g:
					case f:
					case p: return a;
					default: switch (a = a && a.$$typeof, a) {
						case k:
						case n:
						case t:
						case r:
						case h: return a;
						default: return u;
					}
				}
				case d: return u;
			}
		}
	}
	function A(a) {
		return z(a) === m;
	}
	exports.AsyncMode = l;
	exports.ConcurrentMode = m;
	exports.ContextConsumer = k;
	exports.ContextProvider = h;
	exports.Element = c;
	exports.ForwardRef = n;
	exports.Fragment = e;
	exports.Lazy = t;
	exports.Memo = r;
	exports.Portal = d;
	exports.Profiler = g;
	exports.StrictMode = f;
	exports.Suspense = p;
	exports.isAsyncMode = function(a) {
		return A(a) || z(a) === l;
	};
	exports.isConcurrentMode = A;
	exports.isContextConsumer = function(a) {
		return z(a) === k;
	};
	exports.isContextProvider = function(a) {
		return z(a) === h;
	};
	exports.isElement = function(a) {
		return "object" === typeof a && null !== a && a.$$typeof === c;
	};
	exports.isForwardRef = function(a) {
		return z(a) === n;
	};
	exports.isFragment = function(a) {
		return z(a) === e;
	};
	exports.isLazy = function(a) {
		return z(a) === t;
	};
	exports.isMemo = function(a) {
		return z(a) === r;
	};
	exports.isPortal = function(a) {
		return z(a) === d;
	};
	exports.isProfiler = function(a) {
		return z(a) === g;
	};
	exports.isStrictMode = function(a) {
		return z(a) === f;
	};
	exports.isSuspense = function(a) {
		return z(a) === p;
	};
	exports.isValidElementType = function(a) {
		return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
	};
	exports.typeOf = z;
}));
//#endregion
//#region node_modules/hoist-non-react-statics/node_modules/react-is/index.js
var require_react_is = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_is_production_min();
}));
//#endregion
//#region node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var require_hoist_non_react_statics_cjs = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var reactIs = require_react_is();
	/**
	* Copyright 2015, Yahoo! Inc.
	* Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	*/
	var REACT_STATICS = {
		childContextTypes: true,
		contextType: true,
		contextTypes: true,
		defaultProps: true,
		displayName: true,
		getDefaultProps: true,
		getDerivedStateFromError: true,
		getDerivedStateFromProps: true,
		mixins: true,
		propTypes: true,
		type: true
	};
	var KNOWN_STATICS = {
		name: true,
		length: true,
		prototype: true,
		caller: true,
		callee: true,
		arguments: true,
		arity: true
	};
	var FORWARD_REF_STATICS = {
		"$$typeof": true,
		render: true,
		defaultProps: true,
		displayName: true,
		propTypes: true
	};
	var MEMO_STATICS = {
		"$$typeof": true,
		compare: true,
		defaultProps: true,
		displayName: true,
		propTypes: true,
		type: true
	};
	var TYPE_STATICS = {};
	TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
	TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
	function getStatics(component) {
		if (reactIs.isMemo(component)) return MEMO_STATICS;
		return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
	}
	var defineProperty = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = Object.prototype;
	function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
		if (typeof sourceComponent !== "string") {
			if (objectPrototype) {
				var inheritedComponent = getPrototypeOf(sourceComponent);
				if (inheritedComponent && inheritedComponent !== objectPrototype) hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
			}
			var keys = getOwnPropertyNames(sourceComponent);
			if (getOwnPropertySymbols) keys = keys.concat(getOwnPropertySymbols(sourceComponent));
			var targetStatics = getStatics(targetComponent);
			var sourceStatics = getStatics(sourceComponent);
			for (var i = 0; i < keys.length; ++i) {
				var key = keys[i];
				if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
					var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
					try {
						defineProperty(targetComponent, key, descriptor);
					} catch (e) {}
				}
			}
		}
		return targetComponent;
	}
	module.exports = hoistNonReactStatics;
}));
//#endregion
//#region node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
function getRegisteredStyles(registered, registeredStyles, classNames) {
	var rawClassName = "";
	classNames.split(" ").forEach(function(className) {
		if (registered[className] !== void 0) registeredStyles.push(registered[className] + ";");
		else rawClassName += className + " ";
	});
	return rawClassName;
}
var registerStyles = function registerStyles(cache, serialized, isStringTag) {
	var className = cache.key + "-" + serialized.name;
	if ((isStringTag === false || false) && cache.registered[className] === void 0) cache.registered[className] = serialized.styles;
};
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
	registerStyles(cache, serialized, isStringTag);
	var className = cache.key + "-" + serialized.name;
	if (cache.inserted[serialized.name] === void 0) {
		var current = serialized;
		do {
			cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
			current = current.next;
		} while (current !== void 0);
	}
};
//#endregion
//#region node_modules/@emotion/hash/dist/emotion-hash.esm.js
function murmur2(str) {
	var h = 0;
	var k, i = 0, len = str.length;
	for (; len >= 4; ++i, len -= 4) {
		k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
		k = (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
		k ^= k >>> 24;
		h = (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
	}
	switch (len) {
		case 3: h ^= (str.charCodeAt(i + 2) & 255) << 16;
		case 2: h ^= (str.charCodeAt(i + 1) & 255) << 8;
		case 1:
			h ^= str.charCodeAt(i) & 255;
			h = (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
	}
	h ^= h >>> 13;
	h = (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
	return ((h ^ h >>> 15) >>> 0).toString(36);
}
//#endregion
//#region node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var unitlessKeys = {
	animationIterationCount: 1,
	aspectRatio: 1,
	borderImageOutset: 1,
	borderImageSlice: 1,
	borderImageWidth: 1,
	boxFlex: 1,
	boxFlexGroup: 1,
	boxOrdinalGroup: 1,
	columnCount: 1,
	columns: 1,
	flex: 1,
	flexGrow: 1,
	flexPositive: 1,
	flexShrink: 1,
	flexNegative: 1,
	flexOrder: 1,
	gridRow: 1,
	gridRowEnd: 1,
	gridRowSpan: 1,
	gridRowStart: 1,
	gridColumn: 1,
	gridColumnEnd: 1,
	gridColumnSpan: 1,
	gridColumnStart: 1,
	msGridRow: 1,
	msGridRowSpan: 1,
	msGridColumn: 1,
	msGridColumnSpan: 1,
	fontWeight: 1,
	lineHeight: 1,
	opacity: 1,
	order: 1,
	orphans: 1,
	scale: 1,
	tabSize: 1,
	widows: 1,
	zIndex: 1,
	zoom: 1,
	WebkitLineClamp: 1,
	fillOpacity: 1,
	floodOpacity: 1,
	stopOpacity: 1,
	strokeDasharray: 1,
	strokeDashoffset: 1,
	strokeMiterlimit: 1,
	strokeOpacity: 1,
	strokeWidth: 1
};
//#endregion
//#region node_modules/@emotion/serialize/dist/emotion-serialize.esm.js
var isDevelopment$1 = false;
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty(property) {
	return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue(value) {
	return value != null && typeof value !== "boolean";
};
var processStyleName = /* #__PURE__ */ memoize(function(styleName) {
	return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue(key, value) {
	switch (key) {
		case "animation":
		case "animationName": if (typeof value === "string") return value.replace(animationRegex, function(match, p1, p2) {
			cursor = {
				name: p1,
				styles: p2,
				next: cursor
			};
			return p1;
		});
	}
	if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) return value + "px";
	return value;
};
var noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function handleInterpolation(mergedProps, registered, interpolation) {
	if (interpolation == null) return "";
	var componentSelector = interpolation;
	if (componentSelector.__emotion_styles !== void 0) return componentSelector;
	switch (typeof interpolation) {
		case "boolean": return "";
		case "object":
			var keyframes = interpolation;
			if (keyframes.anim === 1) {
				cursor = {
					name: keyframes.name,
					styles: keyframes.styles,
					next: cursor
				};
				return keyframes.name;
			}
			var serializedStyles = interpolation;
			if (serializedStyles.styles !== void 0) {
				var next = serializedStyles.next;
				if (next !== void 0) while (next !== void 0) {
					cursor = {
						name: next.name,
						styles: next.styles,
						next: cursor
					};
					next = next.next;
				}
				return serializedStyles.styles + ";";
			}
			return createStringFromObject(mergedProps, registered, interpolation);
		case "function":
			if (mergedProps !== void 0) {
				var previousCursor = cursor;
				var result = interpolation(mergedProps);
				cursor = previousCursor;
				return handleInterpolation(mergedProps, registered, result);
			}
			break;
	}
	var asString = interpolation;
	if (registered == null) return asString;
	var cached = registered[asString];
	return cached !== void 0 ? cached : asString;
}
function createStringFromObject(mergedProps, registered, obj) {
	var string = "";
	if (Array.isArray(obj)) for (var i = 0; i < obj.length; i++) string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
	else for (var key in obj) {
		var value = obj[key];
		if (typeof value !== "object") {
			var asString = value;
			if (registered != null && registered[asString] !== void 0) string += key + "{" + registered[asString] + "}";
			else if (isProcessableValue(asString)) string += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
		} else {
			if (key === "NO_COMPONENT_SELECTOR" && isDevelopment$1) throw new Error(noComponentSelectorMessage);
			if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
				for (var _i = 0; _i < value.length; _i++) if (isProcessableValue(value[_i])) string += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
			} else {
				var interpolated = handleInterpolation(mergedProps, registered, value);
				switch (key) {
					case "animation":
					case "animationName":
						string += processStyleName(key) + ":" + interpolated + ";";
						break;
					default: string += key + "{" + interpolated + "}";
				}
			}
		}
	}
	return string;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var cursor;
function serializeStyles(args, registered, mergedProps) {
	if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) return args[0];
	var stringMode = true;
	var styles = "";
	cursor = void 0;
	var strings = args[0];
	if (strings == null || strings.raw === void 0) {
		stringMode = false;
		styles += handleInterpolation(mergedProps, registered, strings);
	} else styles += strings[0];
	for (var i = 1; i < args.length; i++) {
		styles += handleInterpolation(mergedProps, registered, args[i]);
		if (stringMode) styles += strings[i];
	}
	labelPattern.lastIndex = 0;
	var identifierName = "";
	var match;
	while ((match = labelPattern.exec(styles)) !== null) identifierName += "-" + match[1];
	return {
		name: murmur2(styles) + identifierName,
		styles,
		next: cursor
	};
}
//#endregion
//#region node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js
var syncFallback = function syncFallback(create) {
	return create();
};
var useInsertionEffect = import_react.useInsertionEffect ? import_react.useInsertionEffect : false;
var useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect || syncFallback;
useInsertionEffect || import_react.useLayoutEffect;
var EmotionCacheContext = /* #__PURE__ */ import_react.createContext(typeof HTMLElement !== "undefined" ? /* #__PURE__ */ createCache({ key: "css" }) : null);
EmotionCacheContext.Provider;
var withEmotionCache = function withEmotionCache(func) {
	return /*#__PURE__*/ (0, import_react.forwardRef)(function(props, ref) {
		return func(props, (0, import_react.useContext)(EmotionCacheContext), ref);
	});
};
var ThemeContext = /* #__PURE__ */ import_react.createContext({});
var hasOwn$1 = {}.hasOwnProperty;
var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
var createEmotionProps = function createEmotionProps(type, props) {
	var newProps = {};
	for (var key in props) if (hasOwn$1.call(props, key)) newProps[key] = props[key];
	newProps[typePropName] = type;
	return newProps;
};
var Insertion = function Insertion(_ref) {
	var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
	registerStyles(cache, serialized, isStringTag);
	useInsertionEffectAlwaysWithSyncFallback(function() {
		return insertStyles(cache, serialized, isStringTag);
	});
	return null;
};
var Emotion$1 = /* @__PURE__ */ withEmotionCache(function(props, cache, ref) {
	var cssProp = props.css;
	if (typeof cssProp === "string" && cache.registered[cssProp] !== void 0) cssProp = cache.registered[cssProp];
	var WrappedComponent = props[typePropName];
	var registeredStyles = [cssProp];
	var className = "";
	if (typeof props.className === "string") className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
	else if (props.className != null) className = props.className + " ";
	var serialized = serializeStyles(registeredStyles, void 0, import_react.useContext(ThemeContext));
	className += cache.key + "-" + serialized.name;
	var newProps = {};
	for (var key in props) if (hasOwn$1.call(props, key) && key !== "css" && key !== typePropName && true) newProps[key] = props[key];
	newProps.className = className;
	if (ref) newProps.ref = ref;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement(Insertion, {
		cache,
		serialized,
		isStringTag: typeof WrappedComponent === "string"
	}), /*#__PURE__*/ import_react.createElement(WrappedComponent, newProps));
});
require_hoist_non_react_statics_cjs();
var jsx$1 = function jsx(type, props) {
	var args = arguments;
	if (props == null || !hasOwn$1.call(props, "css")) return import_react.createElement.apply(void 0, args);
	var argsLength = args.length;
	var createElementArgArray = new Array(argsLength);
	createElementArgArray[0] = Emotion$1;
	createElementArgArray[1] = createEmotionProps(type, props);
	for (var i = 2; i < argsLength; i++) createElementArgArray[i] = args[i];
	return import_react.createElement.apply(null, createElementArgArray);
};
function css$2() {
	for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
	return serializeStyles(args);
}
var keyframes = function keyframes() {
	var insertable = css$2.apply(void 0, arguments);
	var name = "animation-" + insertable.name;
	return {
		name,
		styles: "@keyframes " + name + "{" + insertable.styles + "}",
		anim: 1,
		toString: function toString() {
			return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
		}
	};
};
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
function _taggedTemplateLiteral(e, t) {
	return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
	x: v,
	y: v
});
function rectToClientRect(rect) {
	const { x, y, width, height } = rect;
	return {
		width,
		height,
		top: y,
		left: x,
		right: x + width,
		bottom: y + height,
		x,
		y
	};
}
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function getNodeName(node) {
	if (isNode(node)) return (node.nodeName || "").toLowerCase();
	return "#document";
}
function getWindow(node) {
	var _node$ownerDocument;
	return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
	var _ref;
	return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
	return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
	return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
	return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
	if (typeof ShadowRoot === "undefined") return false;
	return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
	const { overflow, overflowX, overflowY, display } = getComputedStyle$1(element);
	return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isWebKit() {
	if (typeof CSS === "undefined" || !CSS.supports) return false;
	return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
	return [
		"html",
		"body",
		"#document"
	].includes(getNodeName(node));
}
function getComputedStyle$1(element) {
	return getWindow(element).getComputedStyle(element);
}
function getParentNode(node) {
	if (getNodeName(node) === "html") return node;
	const result = node.assignedSlot || node.parentNode || isShadowRoot(node) && node.host || getDocumentElement(node);
	return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
	const parentNode = getParentNode(node);
	if (isLastTraversableNode(parentNode)) return node.ownerDocument ? node.ownerDocument.body : node.body;
	if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) return parentNode;
	return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
	var _node$ownerDocument2;
	if (list === void 0) list = [];
	if (traverseIframes === void 0) traverseIframes = true;
	const scrollableAncestor = getNearestOverflowAncestor(node);
	const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
	const win = getWindow(scrollableAncestor);
	if (isBody) return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
	return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
//#endregion
//#region node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
	const css = getComputedStyle$1(element);
	let width = parseFloat(css.width) || 0;
	let height = parseFloat(css.height) || 0;
	const hasOffset = isHTMLElement(element);
	const offsetWidth = hasOffset ? element.offsetWidth : width;
	const offsetHeight = hasOffset ? element.offsetHeight : height;
	const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
	if (shouldFallback) {
		width = offsetWidth;
		height = offsetHeight;
	}
	return {
		width,
		height,
		$: shouldFallback
	};
}
function unwrapElement(element) {
	return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
	const domElement = unwrapElement(element);
	if (!isHTMLElement(domElement)) return createCoords(1);
	const rect = domElement.getBoundingClientRect();
	const { width, height, $ } = getCssDimensions(domElement);
	let x = ($ ? round(rect.width) : rect.width) / width;
	let y = ($ ? round(rect.height) : rect.height) / height;
	if (!x || !Number.isFinite(x)) x = 1;
	if (!y || !Number.isFinite(y)) y = 1;
	return {
		x,
		y
	};
}
var noOffsets = /*#__PURE__*/ createCoords(0);
function getVisualOffsets(element) {
	const win = getWindow(element);
	if (!isWebKit() || !win.visualViewport) return noOffsets;
	return {
		x: win.visualViewport.offsetLeft,
		y: win.visualViewport.offsetTop
	};
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
	if (isFixed === void 0) isFixed = false;
	if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) return false;
	return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
	if (includeScale === void 0) includeScale = false;
	if (isFixedStrategy === void 0) isFixedStrategy = false;
	const clientRect = element.getBoundingClientRect();
	const domElement = unwrapElement(element);
	let scale = createCoords(1);
	if (includeScale) if (offsetParent) {
		if (isElement(offsetParent)) scale = getScale(offsetParent);
	} else scale = getScale(element);
	const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
	let x = (clientRect.left + visualOffsets.x) / scale.x;
	let y = (clientRect.top + visualOffsets.y) / scale.y;
	let width = clientRect.width / scale.x;
	let height = clientRect.height / scale.y;
	if (domElement) {
		const win = getWindow(domElement);
		const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
		let currentWin = win;
		let currentIFrame = currentWin.frameElement;
		while (currentIFrame && offsetParent && offsetWin !== currentWin) {
			const iframeScale = getScale(currentIFrame);
			const iframeRect = currentIFrame.getBoundingClientRect();
			const css = getComputedStyle$1(currentIFrame);
			const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
			const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
			x *= iframeScale.x;
			y *= iframeScale.y;
			width *= iframeScale.x;
			height *= iframeScale.y;
			x += left;
			y += top;
			currentWin = getWindow(currentIFrame);
			currentIFrame = currentWin.frameElement;
		}
	}
	return rectToClientRect({
		width,
		height,
		x,
		y
	});
}
function observeMove(element, onMove) {
	let io = null;
	let timeoutId;
	const root = getDocumentElement(element);
	function cleanup() {
		var _io;
		clearTimeout(timeoutId);
		(_io = io) == null || _io.disconnect();
		io = null;
	}
	function refresh(skip, threshold) {
		if (skip === void 0) skip = false;
		if (threshold === void 0) threshold = 1;
		cleanup();
		const { left, top, width, height } = element.getBoundingClientRect();
		if (!skip) onMove();
		if (!width || !height) return;
		const insetTop = floor(top);
		const insetRight = floor(root.clientWidth - (left + width));
		const insetBottom = floor(root.clientHeight - (top + height));
		const insetLeft = floor(left);
		const options = {
			rootMargin: -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px",
			threshold: max(0, min(1, threshold)) || 1
		};
		let isFirstUpdate = true;
		function handleObserve(entries) {
			const ratio = entries[0].intersectionRatio;
			if (ratio !== threshold) {
				if (!isFirstUpdate) return refresh();
				if (!ratio) timeoutId = setTimeout(() => {
					refresh(false, 1e-7);
				}, 1e3);
				else refresh(false, ratio);
			}
			isFirstUpdate = false;
		}
		try {
			io = new IntersectionObserver(handleObserve, {
				...options,
				root: root.ownerDocument
			});
		} catch (e) {
			io = new IntersectionObserver(handleObserve, options);
		}
		io.observe(element);
	}
	refresh(true);
	return cleanup;
}
/**
* Automatically updates the position of the floating element when necessary.
* Should only be called when the floating element is mounted on the DOM or
* visible on the screen.
* @returns cleanup function that should be invoked when the floating element is
* removed from the DOM or hidden from the screen.
* @see https://floating-ui.com/docs/autoUpdate
*/
function autoUpdate(reference, floating, update, options) {
	if (options === void 0) options = {};
	const { ancestorScroll = true, ancestorResize = true, elementResize = typeof ResizeObserver === "function", layoutShift = typeof IntersectionObserver === "function", animationFrame = false } = options;
	const referenceEl = unwrapElement(reference);
	const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
	ancestors.forEach((ancestor) => {
		ancestorScroll && ancestor.addEventListener("scroll", update, { passive: true });
		ancestorResize && ancestor.addEventListener("resize", update);
	});
	const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
	let reobserveFrame = -1;
	let resizeObserver = null;
	if (elementResize) {
		resizeObserver = new ResizeObserver((_ref) => {
			let [firstEntry] = _ref;
			if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
				resizeObserver.unobserve(floating);
				cancelAnimationFrame(reobserveFrame);
				reobserveFrame = requestAnimationFrame(() => {
					var _resizeObserver;
					(_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
				});
			}
			update();
		});
		if (referenceEl && !animationFrame) resizeObserver.observe(referenceEl);
		resizeObserver.observe(floating);
	}
	let frameId;
	let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
	if (animationFrame) frameLoop();
	function frameLoop() {
		const nextRefRect = getBoundingClientRect(reference);
		if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) update();
		prevRefRect = nextRefRect;
		frameId = requestAnimationFrame(frameLoop);
	}
	update();
	return () => {
		var _resizeObserver2;
		ancestors.forEach((ancestor) => {
			ancestorScroll && ancestor.removeEventListener("scroll", update);
			ancestorResize && ancestor.removeEventListener("resize", update);
		});
		cleanupIo?.();
		(_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
		resizeObserver = null;
		if (animationFrame) cancelAnimationFrame(frameId);
	};
}
//#endregion
//#region node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js
var index = import_react.useLayoutEffect;
//#endregion
//#region node_modules/react-select/dist/index-a301f526.esm.js
var _excluded$4 = [
	"className",
	"clearValue",
	"cx",
	"getStyles",
	"getClassNames",
	"getValue",
	"hasValue",
	"isMulti",
	"isRtl",
	"options",
	"selectOption",
	"selectProps",
	"setValue",
	"theme"
];
var noop$1 = function noop() {};
/**
String representation of component state for styling with class names.

Expects an array of strings OR a string/object pair:
- className(['comp', 'comp-arg', 'comp-arg-2'])
@returns 'react-select__comp react-select__comp-arg react-select__comp-arg-2'
- className('comp', { some: true, state: false })
@returns 'react-select__comp react-select__comp--some'
*/
function applyPrefixToName(prefix, name) {
	if (!name) return prefix;
	else if (name[0] === "-") return prefix + name;
	else return prefix + "__" + name;
}
function classNames(prefix, state) {
	for (var _len = arguments.length, classNameList = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) classNameList[_key - 2] = arguments[_key];
	var arr = [].concat(classNameList);
	if (state && prefix) {
		for (var key in state) if (state.hasOwnProperty(key) && state[key]) arr.push("".concat(applyPrefixToName(prefix, key)));
	}
	return arr.filter(function(i) {
		return i;
	}).map(function(i) {
		return String(i).trim();
	}).join(" ");
}
var cleanValue = function cleanValue(value) {
	if (isArray(value)) return value.filter(Boolean);
	if (_typeof(value) === "object" && value !== null) return [value];
	return [];
};
var cleanCommonProps = function cleanCommonProps(props) {
	props.className;
	props.clearValue;
	props.cx;
	props.getStyles;
	props.getClassNames;
	props.getValue;
	props.hasValue;
	props.isMulti;
	props.isRtl;
	props.options;
	props.selectOption;
	props.selectProps;
	props.setValue;
	props.theme;
	return _objectSpread2({}, _objectWithoutProperties(props, _excluded$4));
};
var getStyleProps = function getStyleProps(props, name, classNamesState) {
	var cx = props.cx, getStyles = props.getStyles, getClassNames = props.getClassNames, className = props.className;
	return {
		css: getStyles(name, props),
		className: cx(classNamesState !== null && classNamesState !== void 0 ? classNamesState : {}, getClassNames(name, props), className)
	};
};
function isDocumentElement(el) {
	return [
		document.documentElement,
		document.body,
		window
	].indexOf(el) > -1;
}
function normalizedHeight(el) {
	if (isDocumentElement(el)) return window.innerHeight;
	return el.clientHeight;
}
function getScrollTop(el) {
	if (isDocumentElement(el)) return window.pageYOffset;
	return el.scrollTop;
}
function scrollTo(el, top) {
	if (isDocumentElement(el)) {
		window.scrollTo(0, top);
		return;
	}
	el.scrollTop = top;
}
function getScrollParent(element) {
	var style = getComputedStyle(element);
	var excludeStaticParent = style.position === "absolute";
	var overflowRx = /(auto|scroll)/;
	if (style.position === "fixed") return document.documentElement;
	for (var parent = element; parent = parent.parentElement;) {
		style = getComputedStyle(parent);
		if (excludeStaticParent && style.position === "static") continue;
		if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) return parent;
	}
	return document.documentElement;
}
/**
@param t: time (elapsed)
@param b: initial value
@param c: amount of change
@param d: duration
*/
function easeOutCubic(t, b, c, d) {
	return c * ((t = t / d - 1) * t * t + 1) + b;
}
function animatedScrollTo(element, to) {
	var duration = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200;
	var callback = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : noop$1;
	var start = getScrollTop(element);
	var change = to - start;
	var increment = 10;
	var currentTime = 0;
	function animateScroll() {
		currentTime += increment;
		scrollTo(element, easeOutCubic(currentTime, start, change, duration));
		if (currentTime < duration) window.requestAnimationFrame(animateScroll);
		else callback(element);
	}
	animateScroll();
}
function scrollIntoView(menuEl, focusedEl) {
	var menuRect = menuEl.getBoundingClientRect();
	var focusedRect = focusedEl.getBoundingClientRect();
	var overScroll = focusedEl.offsetHeight / 3;
	if (focusedRect.bottom + overScroll > menuRect.bottom) scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
	else if (focusedRect.top - overScroll < menuRect.top) scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
}
function getBoundingClientObj(element) {
	var rect = element.getBoundingClientRect();
	return {
		bottom: rect.bottom,
		height: rect.height,
		left: rect.left,
		right: rect.right,
		top: rect.top,
		width: rect.width
	};
}
function isTouchCapable() {
	try {
		document.createEvent("TouchEvent");
		return true;
	} catch (e) {
		return false;
	}
}
function isMobileDevice() {
	try {
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	} catch (e) {
		return false;
	}
}
var passiveOptionAccessed = false;
var options = { get passive() {
	return passiveOptionAccessed = true;
} };
var w = typeof window !== "undefined" ? window : {};
if (w.addEventListener && w.removeEventListener) {
	w.addEventListener("p", noop$1, options);
	w.removeEventListener("p", noop$1, false);
}
var supportsPassiveEvents = passiveOptionAccessed;
function notNullish(item) {
	return item != null;
}
function isArray(arg) {
	return Array.isArray(arg);
}
function valueTernary(isMulti, multiValue, singleValue) {
	return isMulti ? multiValue : singleValue;
}
function singleValueAsValue(singleValue) {
	return singleValue;
}
function multiValueAsValue(multiValue) {
	return multiValue;
}
var removeProps = function removeProps(propsObj) {
	for (var _len2 = arguments.length, properties = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) properties[_key2 - 1] = arguments[_key2];
	return Object.entries(propsObj).filter(function(_ref) {
		var key = _slicedToArray(_ref, 1)[0];
		return !properties.includes(key);
	}).reduce(function(newProps, _ref3) {
		var _ref4 = _slicedToArray(_ref3, 2), key = _ref4[0];
		newProps[key] = _ref4[1];
		return newProps;
	}, {});
};
var _excluded$3 = ["children", "innerProps"], _excluded2$1 = ["children", "innerProps"];
function getMenuPlacement(_ref) {
	var preferredMaxHeight = _ref.maxHeight, menuEl = _ref.menuEl, minHeight = _ref.minHeight, preferredPlacement = _ref.placement, shouldScroll = _ref.shouldScroll, isFixedPosition = _ref.isFixedPosition, controlHeight = _ref.controlHeight;
	var scrollParent = getScrollParent(menuEl);
	var defaultState = {
		placement: "bottom",
		maxHeight: preferredMaxHeight
	};
	if (!menuEl || !menuEl.offsetParent) return defaultState;
	var scrollHeight = scrollParent.getBoundingClientRect().height;
	var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(), menuBottom = _menuEl$getBoundingCl.bottom, menuHeight = _menuEl$getBoundingCl.height, menuTop = _menuEl$getBoundingCl.top;
	var containerTop = menuEl.offsetParent.getBoundingClientRect().top;
	var viewHeight = isFixedPosition ? window.innerHeight : normalizedHeight(scrollParent);
	var scrollTop = getScrollTop(scrollParent);
	var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
	var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
	var viewSpaceAbove = containerTop - marginTop;
	var viewSpaceBelow = viewHeight - menuTop;
	var scrollSpaceAbove = viewSpaceAbove + scrollTop;
	var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
	var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
	var scrollUp = scrollTop + menuTop - marginTop;
	var scrollDuration = 160;
	switch (preferredPlacement) {
		case "auto":
		case "bottom":
			if (viewSpaceBelow >= menuHeight) return {
				placement: "bottom",
				maxHeight: preferredMaxHeight
			};
			if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
				if (shouldScroll) animatedScrollTo(scrollParent, scrollDown, scrollDuration);
				return {
					placement: "bottom",
					maxHeight: preferredMaxHeight
				};
			}
			if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
				if (shouldScroll) animatedScrollTo(scrollParent, scrollDown, scrollDuration);
				return {
					placement: "bottom",
					maxHeight: isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom
				};
			}
			if (preferredPlacement === "auto" || isFixedPosition) {
				var _constrainedHeight = preferredMaxHeight;
				var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;
				if (spaceAbove >= minHeight) _constrainedHeight = Math.min(spaceAbove - marginBottom - controlHeight, preferredMaxHeight);
				return {
					placement: "top",
					maxHeight: _constrainedHeight
				};
			}
			if (preferredPlacement === "bottom") {
				if (shouldScroll) scrollTo(scrollParent, scrollDown);
				return {
					placement: "bottom",
					maxHeight: preferredMaxHeight
				};
			}
			break;
		case "top":
			if (viewSpaceAbove >= menuHeight) return {
				placement: "top",
				maxHeight: preferredMaxHeight
			};
			if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
				if (shouldScroll) animatedScrollTo(scrollParent, scrollUp, scrollDuration);
				return {
					placement: "top",
					maxHeight: preferredMaxHeight
				};
			}
			if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
				var _constrainedHeight2 = preferredMaxHeight;
				if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
				if (shouldScroll) animatedScrollTo(scrollParent, scrollUp, scrollDuration);
				return {
					placement: "top",
					maxHeight: _constrainedHeight2
				};
			}
			return {
				placement: "bottom",
				maxHeight: preferredMaxHeight
			};
		default: throw new Error("Invalid placement provided \"".concat(preferredPlacement, "\"."));
	}
	return defaultState;
}
function alignToControl(placement) {
	return placement ? {
		bottom: "top",
		top: "bottom"
	}[placement] : "bottom";
}
var coercePlacement = function coercePlacement(p) {
	return p === "auto" ? "bottom" : p;
};
var menuCSS = function menuCSS(_ref2, unstyled) {
	var _objectSpread2$1;
	var placement = _ref2.placement, _ref2$theme = _ref2.theme, borderRadius = _ref2$theme.borderRadius, spacing = _ref2$theme.spacing, colors = _ref2$theme.colors;
	return _objectSpread2((_objectSpread2$1 = { label: "menu" }, _defineProperty(_objectSpread2$1, alignToControl(placement), "100%"), _defineProperty(_objectSpread2$1, "position", "absolute"), _defineProperty(_objectSpread2$1, "width", "100%"), _defineProperty(_objectSpread2$1, "zIndex", 1), _objectSpread2$1), unstyled ? {} : {
		backgroundColor: colors.neutral0,
		borderRadius,
		boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
		marginBottom: spacing.menuGutter,
		marginTop: spacing.menuGutter
	});
};
var PortalPlacementContext = /*#__PURE__*/ (0, import_react.createContext)(null);
var MenuPlacer = function MenuPlacer(props) {
	var children = props.children, minMenuHeight = props.minMenuHeight, maxMenuHeight = props.maxMenuHeight, menuPlacement = props.menuPlacement, menuPosition = props.menuPosition, menuShouldScrollIntoView = props.menuShouldScrollIntoView, theme = props.theme;
	var setPortalPlacement = ((0, import_react.useContext)(PortalPlacementContext) || {}).setPortalPlacement;
	var ref = (0, import_react.useRef)(null);
	var _useState2 = _slicedToArray((0, import_react.useState)(maxMenuHeight), 2), maxHeight = _useState2[0], setMaxHeight = _useState2[1];
	var _useState4 = _slicedToArray((0, import_react.useState)(null), 2), placement = _useState4[0], setPlacement = _useState4[1];
	var controlHeight = theme.spacing.controlHeight;
	index(function() {
		var menuEl = ref.current;
		if (!menuEl) return;
		var isFixedPosition = menuPosition === "fixed";
		var state = getMenuPlacement({
			maxHeight: maxMenuHeight,
			menuEl,
			minHeight: minMenuHeight,
			placement: menuPlacement,
			shouldScroll: menuShouldScrollIntoView && !isFixedPosition,
			isFixedPosition,
			controlHeight
		});
		setMaxHeight(state.maxHeight);
		setPlacement(state.placement);
		setPortalPlacement === null || setPortalPlacement === void 0 || setPortalPlacement(state.placement);
	}, [
		maxMenuHeight,
		menuPlacement,
		menuPosition,
		menuShouldScrollIntoView,
		minMenuHeight,
		setPortalPlacement,
		controlHeight
	]);
	return children({
		ref,
		placerProps: _objectSpread2(_objectSpread2({}, props), {}, {
			placement: placement || coercePlacement(menuPlacement),
			maxHeight
		})
	});
};
var Menu$1 = function Menu(props) {
	var children = props.children, innerRef = props.innerRef, innerProps = props.innerProps;
	return jsx$1("div", _extends({}, getStyleProps(props, "menu", { menu: true }), { ref: innerRef }, innerProps), children);
};
var menuListCSS = function menuListCSS(_ref4, unstyled) {
	var maxHeight = _ref4.maxHeight, baseUnit = _ref4.theme.spacing.baseUnit;
	return _objectSpread2({
		maxHeight,
		overflowY: "auto",
		position: "relative",
		WebkitOverflowScrolling: "touch"
	}, unstyled ? {} : {
		paddingBottom: baseUnit,
		paddingTop: baseUnit
	});
};
var MenuList = function MenuList(props) {
	var children = props.children, innerProps = props.innerProps, innerRef = props.innerRef, isMulti = props.isMulti;
	return jsx$1("div", _extends({}, getStyleProps(props, "menuList", {
		"menu-list": true,
		"menu-list--is-multi": isMulti
	}), { ref: innerRef }, innerProps), children);
};
var noticeCSS = function noticeCSS(_ref5, unstyled) {
	var _ref5$theme = _ref5.theme, baseUnit = _ref5$theme.spacing.baseUnit, colors = _ref5$theme.colors;
	return _objectSpread2({ textAlign: "center" }, unstyled ? {} : {
		color: colors.neutral40,
		padding: "".concat(baseUnit * 2, "px ").concat(baseUnit * 3, "px")
	});
};
var noOptionsMessageCSS = noticeCSS;
var loadingMessageCSS = noticeCSS;
var NoOptionsMessage = function NoOptionsMessage(_ref6) {
	var _ref6$children = _ref6.children, children = _ref6$children === void 0 ? "No options" : _ref6$children, innerProps = _ref6.innerProps;
	return jsx$1("div", _extends({}, getStyleProps(_objectSpread2(_objectSpread2({}, _objectWithoutProperties(_ref6, _excluded$3)), {}, {
		children,
		innerProps
	}), "noOptionsMessage", {
		"menu-notice": true,
		"menu-notice--no-options": true
	}), innerProps), children);
};
var LoadingMessage = function LoadingMessage(_ref7) {
	var _ref7$children = _ref7.children, children = _ref7$children === void 0 ? "Loading..." : _ref7$children, innerProps = _ref7.innerProps;
	return jsx$1("div", _extends({}, getStyleProps(_objectSpread2(_objectSpread2({}, _objectWithoutProperties(_ref7, _excluded2$1)), {}, {
		children,
		innerProps
	}), "loadingMessage", {
		"menu-notice": true,
		"menu-notice--loading": true
	}), innerProps), children);
};
var menuPortalCSS = function menuPortalCSS(_ref8) {
	var rect = _ref8.rect, offset = _ref8.offset, position = _ref8.position;
	return {
		left: rect.left,
		position,
		top: offset,
		width: rect.width,
		zIndex: 1
	};
};
var MenuPortal = function MenuPortal(props) {
	var appendTo = props.appendTo, children = props.children, controlElement = props.controlElement, innerProps = props.innerProps, menuPlacement = props.menuPlacement, menuPosition = props.menuPosition;
	var menuPortalRef = (0, import_react.useRef)(null);
	var cleanupRef = (0, import_react.useRef)(null);
	var _useState6 = _slicedToArray((0, import_react.useState)(coercePlacement(menuPlacement)), 2), placement = _useState6[0], setPortalPlacement = _useState6[1];
	var portalPlacementContext = (0, import_react.useMemo)(function() {
		return { setPortalPlacement };
	}, []);
	var _useState8 = _slicedToArray((0, import_react.useState)(null), 2), computedPosition = _useState8[0], setComputedPosition = _useState8[1];
	var updateComputedPosition = (0, import_react.useCallback)(function() {
		if (!controlElement) return;
		var rect = getBoundingClientObj(controlElement);
		var scrollDistance = menuPosition === "fixed" ? 0 : window.pageYOffset;
		var offset = rect[placement] + scrollDistance;
		if (offset !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.offset) || rect.left !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.left) || rect.width !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.width)) setComputedPosition({
			offset,
			rect
		});
	}, [
		controlElement,
		menuPosition,
		placement,
		computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.offset,
		computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.left,
		computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.width
	]);
	index(function() {
		updateComputedPosition();
	}, [updateComputedPosition]);
	var runAutoUpdate = (0, import_react.useCallback)(function() {
		if (typeof cleanupRef.current === "function") {
			cleanupRef.current();
			cleanupRef.current = null;
		}
		if (controlElement && menuPortalRef.current) cleanupRef.current = autoUpdate(controlElement, menuPortalRef.current, updateComputedPosition, { elementResize: "ResizeObserver" in window });
	}, [controlElement, updateComputedPosition]);
	index(function() {
		runAutoUpdate();
	}, [runAutoUpdate]);
	var setMenuPortalElement = (0, import_react.useCallback)(function(menuPortalElement) {
		menuPortalRef.current = menuPortalElement;
		runAutoUpdate();
	}, [runAutoUpdate]);
	if (!appendTo && menuPosition !== "fixed" || !computedPosition) return null;
	var menuWrapper = jsx$1("div", _extends({ ref: setMenuPortalElement }, getStyleProps(_objectSpread2(_objectSpread2({}, props), {}, {
		offset: computedPosition.offset,
		position: menuPosition,
		rect: computedPosition.rect
	}), "menuPortal", { "menu-portal": true }), innerProps), children);
	return jsx$1(PortalPlacementContext.Provider, { value: portalPlacementContext }, appendTo ? /*#__PURE__*/ (0, import_react_dom.createPortal)(menuWrapper, appendTo) : menuWrapper);
};
var containerCSS = function containerCSS(_ref) {
	var isDisabled = _ref.isDisabled;
	return {
		label: "container",
		direction: _ref.isRtl ? "rtl" : void 0,
		pointerEvents: isDisabled ? "none" : void 0,
		position: "relative"
	};
};
var SelectContainer = function SelectContainer(props) {
	var children = props.children, innerProps = props.innerProps, isDisabled = props.isDisabled, isRtl = props.isRtl;
	return jsx$1("div", _extends({}, getStyleProps(props, "container", {
		"--is-disabled": isDisabled,
		"--is-rtl": isRtl
	}), innerProps), children);
};
var valueContainerCSS = function valueContainerCSS(_ref2, unstyled) {
	var spacing = _ref2.theme.spacing, isMulti = _ref2.isMulti, hasValue = _ref2.hasValue, controlShouldRenderValue = _ref2.selectProps.controlShouldRenderValue;
	return _objectSpread2({
		alignItems: "center",
		display: isMulti && hasValue && controlShouldRenderValue ? "flex" : "grid",
		flex: 1,
		flexWrap: "wrap",
		WebkitOverflowScrolling: "touch",
		position: "relative",
		overflow: "hidden"
	}, unstyled ? {} : { padding: "".concat(spacing.baseUnit / 2, "px ").concat(spacing.baseUnit * 2, "px") });
};
var ValueContainer = function ValueContainer(props) {
	var children = props.children, innerProps = props.innerProps, isMulti = props.isMulti, hasValue = props.hasValue;
	return jsx$1("div", _extends({}, getStyleProps(props, "valueContainer", {
		"value-container": true,
		"value-container--is-multi": isMulti,
		"value-container--has-value": hasValue
	}), innerProps), children);
};
var indicatorsContainerCSS = function indicatorsContainerCSS() {
	return {
		alignItems: "center",
		alignSelf: "stretch",
		display: "flex",
		flexShrink: 0
	};
};
var IndicatorsContainer = function IndicatorsContainer(props) {
	var children = props.children, innerProps = props.innerProps;
	return jsx$1("div", _extends({}, getStyleProps(props, "indicatorsContainer", { indicators: true }), innerProps), children);
};
var _templateObject;
var _excluded$2 = ["size"], _excluded2 = [
	"innerProps",
	"isRtl",
	"size"
];
var _ref2$2 = {
	name: "8mmkcg",
	styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
};
var Svg = function Svg(_ref) {
	var size = _ref.size, props = _objectWithoutProperties(_ref, _excluded$2);
	return jsx$1("svg", _extends({
		height: size,
		width: size,
		viewBox: "0 0 20 20",
		"aria-hidden": "true",
		focusable: "false",
		css: _ref2$2
	}, props));
};
var CrossIcon = function CrossIcon(props) {
	return jsx$1(Svg, _extends({ size: 20 }, props), jsx$1("path", { d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z" }));
};
var DownChevron = function DownChevron(props) {
	return jsx$1(Svg, _extends({ size: 20 }, props), jsx$1("path", { d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" }));
};
var baseCSS = function baseCSS(_ref3, unstyled) {
	var isFocused = _ref3.isFocused, _ref3$theme = _ref3.theme, baseUnit = _ref3$theme.spacing.baseUnit, colors = _ref3$theme.colors;
	return _objectSpread2({
		label: "indicatorContainer",
		display: "flex",
		transition: "color 150ms"
	}, unstyled ? {} : {
		color: isFocused ? colors.neutral60 : colors.neutral20,
		padding: baseUnit * 2,
		":hover": { color: isFocused ? colors.neutral80 : colors.neutral40 }
	});
};
var dropdownIndicatorCSS = baseCSS;
var DropdownIndicator = function DropdownIndicator(props) {
	var children = props.children, innerProps = props.innerProps;
	return jsx$1("div", _extends({}, getStyleProps(props, "dropdownIndicator", {
		indicator: true,
		"dropdown-indicator": true
	}), innerProps), children || jsx$1(DownChevron, null));
};
var clearIndicatorCSS = baseCSS;
var ClearIndicator = function ClearIndicator(props) {
	var children = props.children, innerProps = props.innerProps;
	return jsx$1("div", _extends({}, getStyleProps(props, "clearIndicator", {
		indicator: true,
		"clear-indicator": true
	}), innerProps), children || jsx$1(CrossIcon, null));
};
var indicatorSeparatorCSS = function indicatorSeparatorCSS(_ref4, unstyled) {
	var isDisabled = _ref4.isDisabled, _ref4$theme = _ref4.theme, baseUnit = _ref4$theme.spacing.baseUnit, colors = _ref4$theme.colors;
	return _objectSpread2({
		label: "indicatorSeparator",
		alignSelf: "stretch",
		width: 1
	}, unstyled ? {} : {
		backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
		marginBottom: baseUnit * 2,
		marginTop: baseUnit * 2
	});
};
var IndicatorSeparator = function IndicatorSeparator(props) {
	var innerProps = props.innerProps;
	return jsx$1("span", _extends({}, innerProps, getStyleProps(props, "indicatorSeparator", { "indicator-separator": true })));
};
var loadingDotAnimations = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"])));
var loadingIndicatorCSS = function loadingIndicatorCSS(_ref5, unstyled) {
	var isFocused = _ref5.isFocused, size = _ref5.size, _ref5$theme = _ref5.theme, colors = _ref5$theme.colors, baseUnit = _ref5$theme.spacing.baseUnit;
	return _objectSpread2({
		label: "loadingIndicator",
		display: "flex",
		transition: "color 150ms",
		alignSelf: "center",
		fontSize: size,
		lineHeight: 1,
		marginRight: size,
		textAlign: "center",
		verticalAlign: "middle"
	}, unstyled ? {} : {
		color: isFocused ? colors.neutral60 : colors.neutral20,
		padding: baseUnit * 2
	});
};
var LoadingDot = function LoadingDot(_ref6) {
	var delay = _ref6.delay, offset = _ref6.offset;
	return jsx$1("span", { css: /*#__PURE__*/ css$2({
		animation: "".concat(loadingDotAnimations, " 1s ease-in-out ").concat(delay, "ms infinite;"),
		backgroundColor: "currentColor",
		borderRadius: "1em",
		display: "inline-block",
		marginLeft: offset ? "1em" : void 0,
		height: "1em",
		verticalAlign: "top",
		width: "1em"
	}, "", "") });
};
var LoadingIndicator = function LoadingIndicator(_ref7) {
	var innerProps = _ref7.innerProps, isRtl = _ref7.isRtl, _ref7$size = _ref7.size, size = _ref7$size === void 0 ? 4 : _ref7$size;
	return jsx$1("div", _extends({}, getStyleProps(_objectSpread2(_objectSpread2({}, _objectWithoutProperties(_ref7, _excluded2)), {}, {
		innerProps,
		isRtl,
		size
	}), "loadingIndicator", {
		indicator: true,
		"loading-indicator": true
	}), innerProps), jsx$1(LoadingDot, {
		delay: 0,
		offset: isRtl
	}), jsx$1(LoadingDot, {
		delay: 160,
		offset: true
	}), jsx$1(LoadingDot, {
		delay: 320,
		offset: !isRtl
	}));
};
var css$1 = function css(_ref, unstyled) {
	var isDisabled = _ref.isDisabled, isFocused = _ref.isFocused, _ref$theme = _ref.theme, colors = _ref$theme.colors, borderRadius = _ref$theme.borderRadius, spacing = _ref$theme.spacing;
	return _objectSpread2({
		label: "control",
		alignItems: "center",
		cursor: "default",
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-between",
		minHeight: spacing.controlHeight,
		outline: "0 !important",
		position: "relative",
		transition: "all 100ms"
	}, unstyled ? {} : {
		backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
		borderColor: isDisabled ? colors.neutral10 : isFocused ? colors.primary : colors.neutral20,
		borderRadius,
		borderStyle: "solid",
		borderWidth: 1,
		boxShadow: isFocused ? "0 0 0 1px ".concat(colors.primary) : void 0,
		"&:hover": { borderColor: isFocused ? colors.primary : colors.neutral30 }
	});
};
var Control$1 = function Control(props) {
	var children = props.children, isDisabled = props.isDisabled, isFocused = props.isFocused, innerRef = props.innerRef, innerProps = props.innerProps, menuIsOpen = props.menuIsOpen;
	return jsx$1("div", _extends({ ref: innerRef }, getStyleProps(props, "control", {
		control: true,
		"control--is-disabled": isDisabled,
		"control--is-focused": isFocused,
		"control--menu-is-open": menuIsOpen
	}), innerProps, { "aria-disabled": isDisabled || void 0 }), children);
};
var _excluded$1 = ["data"];
var groupCSS = function groupCSS(_ref, unstyled) {
	var spacing = _ref.theme.spacing;
	return unstyled ? {} : {
		paddingBottom: spacing.baseUnit * 2,
		paddingTop: spacing.baseUnit * 2
	};
};
var Group = function Group(props) {
	var children = props.children, cx = props.cx, getStyles = props.getStyles, getClassNames = props.getClassNames, Heading = props.Heading, headingProps = props.headingProps, innerProps = props.innerProps, label = props.label, theme = props.theme, selectProps = props.selectProps;
	return jsx$1("div", _extends({}, getStyleProps(props, "group", { group: true }), innerProps), jsx$1(Heading, _extends({}, headingProps, {
		selectProps,
		theme,
		getStyles,
		getClassNames,
		cx
	}), label), jsx$1("div", null, children));
};
var groupHeadingCSS = function groupHeadingCSS(_ref2, unstyled) {
	var _ref2$theme = _ref2.theme, colors = _ref2$theme.colors, spacing = _ref2$theme.spacing;
	return _objectSpread2({
		label: "group",
		cursor: "default",
		display: "block"
	}, unstyled ? {} : {
		color: colors.neutral40,
		fontSize: "75%",
		fontWeight: 500,
		marginBottom: "0.25em",
		paddingLeft: spacing.baseUnit * 3,
		paddingRight: spacing.baseUnit * 3,
		textTransform: "uppercase"
	});
};
var GroupHeading = function GroupHeading(props) {
	var _cleanCommonProps = cleanCommonProps(props);
	_cleanCommonProps.data;
	var innerProps = _objectWithoutProperties(_cleanCommonProps, _excluded$1);
	return jsx$1("div", _extends({}, getStyleProps(props, "groupHeading", { "group-heading": true }), innerProps));
};
var Group$1 = Group;
var _excluded$5 = [
	"innerRef",
	"isDisabled",
	"isHidden",
	"inputClassName"
];
var inputCSS = function inputCSS(_ref, unstyled) {
	var isDisabled = _ref.isDisabled, value = _ref.value, _ref$theme = _ref.theme, spacing = _ref$theme.spacing, colors = _ref$theme.colors;
	return _objectSpread2(_objectSpread2({
		visibility: isDisabled ? "hidden" : "visible",
		transform: value ? "translateZ(0)" : ""
	}, containerStyle), unstyled ? {} : {
		margin: spacing.baseUnit / 2,
		paddingBottom: spacing.baseUnit / 2,
		paddingTop: spacing.baseUnit / 2,
		color: colors.neutral80
	});
};
var spacingStyle = {
	gridArea: "1 / 2",
	font: "inherit",
	minWidth: "2px",
	border: 0,
	margin: 0,
	outline: 0,
	padding: 0
};
var containerStyle = {
	flex: "1 1 auto",
	display: "inline-grid",
	gridArea: "1 / 1 / 2 / 3",
	gridTemplateColumns: "0 min-content",
	"&:after": _objectSpread2({
		content: "attr(data-value) \" \"",
		visibility: "hidden",
		whiteSpace: "pre"
	}, spacingStyle)
};
var inputStyle = function inputStyle(isHidden) {
	return _objectSpread2({
		label: "input",
		color: "inherit",
		background: 0,
		opacity: isHidden ? 0 : 1,
		width: "100%"
	}, spacingStyle);
};
var Input$1 = function Input(props) {
	var cx = props.cx, value = props.value;
	var _cleanCommonProps = cleanCommonProps(props), innerRef = _cleanCommonProps.innerRef, isDisabled = _cleanCommonProps.isDisabled, isHidden = _cleanCommonProps.isHidden, inputClassName = _cleanCommonProps.inputClassName, innerProps = _objectWithoutProperties(_cleanCommonProps, _excluded$5);
	return jsx$1("div", _extends({}, getStyleProps(props, "input", { "input-container": true }), { "data-value": value || "" }), jsx$1("input", _extends({
		className: cx({ input: true }, inputClassName),
		ref: innerRef,
		style: inputStyle(isHidden),
		disabled: isDisabled
	}, innerProps)));
};
var multiValueCSS = function multiValueCSS(_ref, unstyled) {
	var _ref$theme = _ref.theme, spacing = _ref$theme.spacing, borderRadius = _ref$theme.borderRadius, colors = _ref$theme.colors;
	return _objectSpread2({
		label: "multiValue",
		display: "flex",
		minWidth: 0
	}, unstyled ? {} : {
		backgroundColor: colors.neutral10,
		borderRadius: borderRadius / 2,
		margin: spacing.baseUnit / 2
	});
};
var multiValueLabelCSS = function multiValueLabelCSS(_ref2, unstyled) {
	var _ref2$theme = _ref2.theme, borderRadius = _ref2$theme.borderRadius, colors = _ref2$theme.colors, cropWithEllipsis = _ref2.cropWithEllipsis;
	return _objectSpread2({
		overflow: "hidden",
		textOverflow: cropWithEllipsis || cropWithEllipsis === void 0 ? "ellipsis" : void 0,
		whiteSpace: "nowrap"
	}, unstyled ? {} : {
		borderRadius: borderRadius / 2,
		color: colors.neutral80,
		fontSize: "85%",
		padding: 3,
		paddingLeft: 6
	});
};
var multiValueRemoveCSS = function multiValueRemoveCSS(_ref3, unstyled) {
	var _ref3$theme = _ref3.theme, spacing = _ref3$theme.spacing, borderRadius = _ref3$theme.borderRadius, colors = _ref3$theme.colors, isFocused = _ref3.isFocused;
	return _objectSpread2({
		alignItems: "center",
		display: "flex"
	}, unstyled ? {} : {
		borderRadius: borderRadius / 2,
		backgroundColor: isFocused ? colors.dangerLight : void 0,
		paddingLeft: spacing.baseUnit,
		paddingRight: spacing.baseUnit,
		":hover": {
			backgroundColor: colors.dangerLight,
			color: colors.danger
		}
	});
};
var MultiValueGeneric = function MultiValueGeneric(_ref4) {
	var children = _ref4.children, innerProps = _ref4.innerProps;
	return jsx$1("div", innerProps, children);
};
var MultiValueContainer = MultiValueGeneric;
var MultiValueLabel = MultiValueGeneric;
function MultiValueRemove(_ref5) {
	var children = _ref5.children, innerProps = _ref5.innerProps;
	return jsx$1("div", _extends({ role: "button" }, innerProps), children || jsx$1(CrossIcon, { size: 14 }));
}
var MultiValue$1 = function MultiValue(props) {
	var children = props.children, components = props.components, data = props.data, innerProps = props.innerProps, isDisabled = props.isDisabled, removeProps = props.removeProps, selectProps = props.selectProps;
	var Container = components.Container, Label = components.Label, Remove = components.Remove;
	return jsx$1(Container, {
		data,
		innerProps: _objectSpread2(_objectSpread2({}, getStyleProps(props, "multiValue", {
			"multi-value": true,
			"multi-value--is-disabled": isDisabled
		})), innerProps),
		selectProps
	}, jsx$1(Label, {
		data,
		innerProps: _objectSpread2({}, getStyleProps(props, "multiValueLabel", { "multi-value__label": true })),
		selectProps
	}, children), jsx$1(Remove, {
		data,
		innerProps: _objectSpread2(_objectSpread2({}, getStyleProps(props, "multiValueRemove", { "multi-value__remove": true })), {}, { "aria-label": "Remove ".concat(children || "option") }, removeProps),
		selectProps
	}));
};
var optionCSS = function optionCSS(_ref, unstyled) {
	var isDisabled = _ref.isDisabled, isFocused = _ref.isFocused, isSelected = _ref.isSelected, _ref$theme = _ref.theme, spacing = _ref$theme.spacing, colors = _ref$theme.colors;
	return _objectSpread2({
		label: "option",
		cursor: "default",
		display: "block",
		fontSize: "inherit",
		width: "100%",
		userSelect: "none",
		WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
	}, unstyled ? {} : {
		backgroundColor: isSelected ? colors.primary : isFocused ? colors.primary25 : "transparent",
		color: isDisabled ? colors.neutral20 : isSelected ? colors.neutral0 : "inherit",
		padding: "".concat(spacing.baseUnit * 2, "px ").concat(spacing.baseUnit * 3, "px"),
		":active": { backgroundColor: !isDisabled ? isSelected ? colors.primary : colors.primary50 : void 0 }
	});
};
var Option$1 = function Option(props) {
	var children = props.children, isDisabled = props.isDisabled, isFocused = props.isFocused, isSelected = props.isSelected, innerRef = props.innerRef, innerProps = props.innerProps;
	return jsx$1("div", _extends({}, getStyleProps(props, "option", {
		option: true,
		"option--is-disabled": isDisabled,
		"option--is-focused": isFocused,
		"option--is-selected": isSelected
	}), {
		ref: innerRef,
		"aria-disabled": isDisabled
	}, innerProps), children);
};
var placeholderCSS = function placeholderCSS(_ref, unstyled) {
	var _ref$theme = _ref.theme, spacing = _ref$theme.spacing, colors = _ref$theme.colors;
	return _objectSpread2({
		label: "placeholder",
		gridArea: "1 / 1 / 2 / 3"
	}, unstyled ? {} : {
		color: colors.neutral50,
		marginLeft: spacing.baseUnit / 2,
		marginRight: spacing.baseUnit / 2
	});
};
var Placeholder$1 = function Placeholder(props) {
	var children = props.children, innerProps = props.innerProps;
	return jsx$1("div", _extends({}, getStyleProps(props, "placeholder", { placeholder: true }), innerProps), children);
};
var css = function css(_ref, unstyled) {
	var isDisabled = _ref.isDisabled, _ref$theme = _ref.theme, spacing = _ref$theme.spacing, colors = _ref$theme.colors;
	return _objectSpread2({
		label: "singleValue",
		gridArea: "1 / 1 / 2 / 3",
		maxWidth: "100%",
		overflow: "hidden",
		textOverflow: "ellipsis",
		whiteSpace: "nowrap"
	}, unstyled ? {} : {
		color: isDisabled ? colors.neutral40 : colors.neutral80,
		marginLeft: spacing.baseUnit / 2,
		marginRight: spacing.baseUnit / 2
	});
};
var components = {
	ClearIndicator,
	Control: Control$1,
	DropdownIndicator,
	DownChevron,
	CrossIcon,
	Group: Group$1,
	GroupHeading,
	IndicatorsContainer,
	IndicatorSeparator,
	Input: Input$1,
	LoadingIndicator,
	Menu: Menu$1,
	MenuList,
	MenuPortal,
	LoadingMessage,
	NoOptionsMessage,
	MultiValue: MultiValue$1,
	MultiValueContainer,
	MultiValueLabel,
	MultiValueRemove,
	Option: Option$1,
	Placeholder: Placeholder$1,
	SelectContainer,
	SingleValue: function SingleValue(props) {
		var children = props.children, isDisabled = props.isDisabled, innerProps = props.innerProps;
		return jsx$1("div", _extends({}, getStyleProps(props, "singleValue", {
			"single-value": true,
			"single-value--is-disabled": isDisabled
		}), innerProps), children);
	},
	ValueContainer
};
var defaultComponents = function defaultComponents(props) {
	return _objectSpread2(_objectSpread2({}, components), props.components);
};
//#endregion
//#region node_modules/memoize-one/dist/memoize-one.esm.js
var safeIsNaN = Number.isNaN || function ponyfill(value) {
	return typeof value === "number" && value !== value;
};
function isEqual(first, second) {
	if (first === second) return true;
	if (safeIsNaN(first) && safeIsNaN(second)) return true;
	return false;
}
function areInputsEqual(newInputs, lastInputs) {
	if (newInputs.length !== lastInputs.length) return false;
	for (var i = 0; i < newInputs.length; i++) if (!isEqual(newInputs[i], lastInputs[i])) return false;
	return true;
}
function memoizeOne(resultFn, isEqual) {
	if (isEqual === void 0) isEqual = areInputsEqual;
	var cache = null;
	function memoized() {
		var newArgs = [];
		for (var _i = 0; _i < arguments.length; _i++) newArgs[_i] = arguments[_i];
		if (cache && cache.lastThis === this && isEqual(newArgs, cache.lastArgs)) return cache.lastResult;
		var lastResult = resultFn.apply(this, newArgs);
		cache = {
			lastResult,
			lastArgs: newArgs,
			lastThis: this
		};
		return lastResult;
	}
	memoized.clear = function clear() {
		cache = null;
	};
	return memoized;
}
//#endregion
//#region node_modules/react-select/dist/Select-49a62830.esm.js
var _ref = {
	name: "7pg0cj-a11yText",
	styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
};
var A11yText$1 = function A11yText(props) {
	return jsx$1("span", _extends({ css: _ref }, props));
};
var defaultAriaLiveMessages = {
	guidance: function guidance(props) {
		var isSearchable = props.isSearchable, isMulti = props.isMulti, tabSelectsValue = props.tabSelectsValue, context = props.context, isInitialFocus = props.isInitialFocus;
		switch (context) {
			case "menu": return "Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(tabSelectsValue ? ", press Tab to select the option and exit the menu" : "", ".");
			case "input": return isInitialFocus ? "".concat(props["aria-label"] || "Select", " is focused ").concat(isSearchable ? ",type to refine list" : "", ", press Down to open the menu, ").concat(isMulti ? " press left to focus selected values" : "") : "";
			case "value": return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
			default: return "";
		}
	},
	onChange: function onChange(props) {
		var action = props.action, _props$label = props.label, label = _props$label === void 0 ? "" : _props$label, labels = props.labels, isDisabled = props.isDisabled;
		switch (action) {
			case "deselect-option":
			case "pop-value":
			case "remove-value": return "option ".concat(label, ", deselected.");
			case "clear": return "All selected options have been cleared.";
			case "initial-input-focus": return "option".concat(labels.length > 1 ? "s" : "", " ").concat(labels.join(","), ", selected.");
			case "select-option": return isDisabled ? "option ".concat(label, " is disabled. Select another option.") : "option ".concat(label, ", selected.");
			default: return "";
		}
	},
	onFocus: function onFocus(props) {
		var context = props.context, focused = props.focused, options = props.options, _props$label2 = props.label, label = _props$label2 === void 0 ? "" : _props$label2, selectValue = props.selectValue, isDisabled = props.isDisabled, isSelected = props.isSelected, isAppleDevice = props.isAppleDevice;
		var getArrayIndex = function getArrayIndex(arr, item) {
			return arr && arr.length ? "".concat(arr.indexOf(item) + 1, " of ").concat(arr.length) : "";
		};
		if (context === "value" && selectValue) return "value ".concat(label, " focused, ").concat(getArrayIndex(selectValue, focused), ".");
		if (context === "menu" && isAppleDevice) {
			var disabled = isDisabled ? " disabled" : "";
			var status = "".concat(isSelected ? " selected" : "").concat(disabled);
			return "".concat(label).concat(status, ", ").concat(getArrayIndex(options, focused), ".");
		}
		return "";
	},
	onFilter: function onFilter(props) {
		var inputValue = props.inputValue, resultsMessage = props.resultsMessage;
		return "".concat(resultsMessage).concat(inputValue ? " for search term " + inputValue : "", ".");
	}
};
var LiveRegion$1 = function LiveRegion(props) {
	var ariaSelection = props.ariaSelection, focusedOption = props.focusedOption, focusedValue = props.focusedValue, focusableOptions = props.focusableOptions, isFocused = props.isFocused, selectValue = props.selectValue, selectProps = props.selectProps, id = props.id, isAppleDevice = props.isAppleDevice;
	var ariaLiveMessages = selectProps.ariaLiveMessages, getOptionLabel = selectProps.getOptionLabel, inputValue = selectProps.inputValue, isMulti = selectProps.isMulti, isOptionDisabled = selectProps.isOptionDisabled, isSearchable = selectProps.isSearchable, menuIsOpen = selectProps.menuIsOpen, options = selectProps.options, screenReaderStatus = selectProps.screenReaderStatus, tabSelectsValue = selectProps.tabSelectsValue, isLoading = selectProps.isLoading;
	var ariaLabel = selectProps["aria-label"];
	var ariaLive = selectProps["aria-live"];
	var messages = (0, import_react.useMemo)(function() {
		return _objectSpread2(_objectSpread2({}, defaultAriaLiveMessages), ariaLiveMessages || {});
	}, [ariaLiveMessages]);
	var ariaSelected = (0, import_react.useMemo)(function() {
		var message = "";
		if (ariaSelection && messages.onChange) {
			var option = ariaSelection.option, selectedOptions = ariaSelection.options, removedValue = ariaSelection.removedValue, removedValues = ariaSelection.removedValues, value = ariaSelection.value;
			var selected = removedValue || option || function asOption(val) {
				return !Array.isArray(val) ? val : null;
			}(value);
			var label = selected ? getOptionLabel(selected) : "";
			var multiSelected = selectedOptions || removedValues || void 0;
			var labels = multiSelected ? multiSelected.map(getOptionLabel) : [];
			var onChangeProps = _objectSpread2({
				isDisabled: selected && isOptionDisabled(selected, selectValue),
				label,
				labels
			}, ariaSelection);
			message = messages.onChange(onChangeProps);
		}
		return message;
	}, [
		ariaSelection,
		messages,
		isOptionDisabled,
		selectValue,
		getOptionLabel
	]);
	var ariaFocused = (0, import_react.useMemo)(function() {
		var focusMsg = "";
		var focused = focusedOption || focusedValue;
		var isSelected = !!(focusedOption && selectValue && selectValue.includes(focusedOption));
		if (focused && messages.onFocus) {
			var onFocusProps = {
				focused,
				label: getOptionLabel(focused),
				isDisabled: isOptionDisabled(focused, selectValue),
				isSelected,
				options: focusableOptions,
				context: focused === focusedOption ? "menu" : "value",
				selectValue,
				isAppleDevice
			};
			focusMsg = messages.onFocus(onFocusProps);
		}
		return focusMsg;
	}, [
		focusedOption,
		focusedValue,
		getOptionLabel,
		isOptionDisabled,
		messages,
		focusableOptions,
		selectValue,
		isAppleDevice
	]);
	var ariaResults = (0, import_react.useMemo)(function() {
		var resultsMsg = "";
		if (menuIsOpen && options.length && !isLoading && messages.onFilter) {
			var resultsMessage = screenReaderStatus({ count: focusableOptions.length });
			resultsMsg = messages.onFilter({
				inputValue,
				resultsMessage
			});
		}
		return resultsMsg;
	}, [
		focusableOptions,
		inputValue,
		menuIsOpen,
		messages,
		options,
		screenReaderStatus,
		isLoading
	]);
	var isInitialFocus = (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === "initial-input-focus";
	var ariaGuidance = (0, import_react.useMemo)(function() {
		var guidanceMsg = "";
		if (messages.guidance) {
			var context = focusedValue ? "value" : menuIsOpen ? "menu" : "input";
			guidanceMsg = messages.guidance({
				"aria-label": ariaLabel,
				context,
				isDisabled: focusedOption && isOptionDisabled(focusedOption, selectValue),
				isMulti,
				isSearchable,
				tabSelectsValue,
				isInitialFocus
			});
		}
		return guidanceMsg;
	}, [
		ariaLabel,
		focusedOption,
		focusedValue,
		isMulti,
		isOptionDisabled,
		isSearchable,
		menuIsOpen,
		messages,
		selectValue,
		tabSelectsValue,
		isInitialFocus
	]);
	var ScreenReaderText = jsx$1(import_react.Fragment, null, jsx$1("span", { id: "aria-selection" }, ariaSelected), jsx$1("span", { id: "aria-focused" }, ariaFocused), jsx$1("span", { id: "aria-results" }, ariaResults), jsx$1("span", { id: "aria-guidance" }, ariaGuidance));
	return jsx$1(import_react.Fragment, null, jsx$1(A11yText$1, { id }, isInitialFocus && ScreenReaderText), jsx$1(A11yText$1, {
		"aria-live": ariaLive,
		"aria-atomic": "false",
		"aria-relevant": "additions text",
		role: "log"
	}, isFocused && !isInitialFocus && ScreenReaderText));
};
var diacritics = [
	{
		base: "A",
		letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
	},
	{
		base: "AA",
		letters: "Ꜳ"
	},
	{
		base: "AE",
		letters: "ÆǼǢ"
	},
	{
		base: "AO",
		letters: "Ꜵ"
	},
	{
		base: "AU",
		letters: "Ꜷ"
	},
	{
		base: "AV",
		letters: "ꜸꜺ"
	},
	{
		base: "AY",
		letters: "Ꜽ"
	},
	{
		base: "B",
		letters: "BⒷＢḂḄḆɃƂƁ"
	},
	{
		base: "C",
		letters: "CⒸＣĆĈĊČÇḈƇȻꜾ"
	},
	{
		base: "D",
		letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
	},
	{
		base: "DZ",
		letters: "ǱǄ"
	},
	{
		base: "Dz",
		letters: "ǲǅ"
	},
	{
		base: "E",
		letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"
	},
	{
		base: "F",
		letters: "FⒻＦḞƑꝻ"
	},
	{
		base: "G",
		letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
	},
	{
		base: "H",
		letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
	},
	{
		base: "I",
		letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
	},
	{
		base: "J",
		letters: "JⒿＪĴɈ"
	},
	{
		base: "K",
		letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
	},
	{
		base: "L",
		letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
	},
	{
		base: "LJ",
		letters: "Ǉ"
	},
	{
		base: "Lj",
		letters: "ǈ"
	},
	{
		base: "M",
		letters: "MⓂＭḾṀṂⱮƜ"
	},
	{
		base: "N",
		letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"
	},
	{
		base: "NJ",
		letters: "Ǌ"
	},
	{
		base: "Nj",
		letters: "ǋ"
	},
	{
		base: "O",
		letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
	},
	{
		base: "OI",
		letters: "Ƣ"
	},
	{
		base: "OO",
		letters: "Ꝏ"
	},
	{
		base: "OU",
		letters: "Ȣ"
	},
	{
		base: "P",
		letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
	},
	{
		base: "Q",
		letters: "QⓆＱꝖꝘɊ"
	},
	{
		base: "R",
		letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
	},
	{
		base: "S",
		letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
	},
	{
		base: "T",
		letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
	},
	{
		base: "TZ",
		letters: "Ꜩ"
	},
	{
		base: "U",
		letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
	},
	{
		base: "V",
		letters: "VⓋＶṼṾƲꝞɅ"
	},
	{
		base: "VY",
		letters: "Ꝡ"
	},
	{
		base: "W",
		letters: "WⓌＷẀẂŴẆẄẈⱲ"
	},
	{
		base: "X",
		letters: "XⓍＸẊẌ"
	},
	{
		base: "Y",
		letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
	},
	{
		base: "Z",
		letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
	},
	{
		base: "a",
		letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"
	},
	{
		base: "aa",
		letters: "ꜳ"
	},
	{
		base: "ae",
		letters: "æǽǣ"
	},
	{
		base: "ao",
		letters: "ꜵ"
	},
	{
		base: "au",
		letters: "ꜷ"
	},
	{
		base: "av",
		letters: "ꜹꜻ"
	},
	{
		base: "ay",
		letters: "ꜽ"
	},
	{
		base: "b",
		letters: "bⓑｂḃḅḇƀƃɓ"
	},
	{
		base: "c",
		letters: "cⓒｃćĉċčçḉƈȼꜿↄ"
	},
	{
		base: "d",
		letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
	},
	{
		base: "dz",
		letters: "ǳǆ"
	},
	{
		base: "e",
		letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"
	},
	{
		base: "f",
		letters: "fⓕｆḟƒꝼ"
	},
	{
		base: "g",
		letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
	},
	{
		base: "h",
		letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
	},
	{
		base: "hv",
		letters: "ƕ"
	},
	{
		base: "i",
		letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
	},
	{
		base: "j",
		letters: "jⓙｊĵǰɉ"
	},
	{
		base: "k",
		letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
	},
	{
		base: "l",
		letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
	},
	{
		base: "lj",
		letters: "ǉ"
	},
	{
		base: "m",
		letters: "mⓜｍḿṁṃɱɯ"
	},
	{
		base: "n",
		letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"
	},
	{
		base: "nj",
		letters: "ǌ"
	},
	{
		base: "o",
		letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"
	},
	{
		base: "oi",
		letters: "ƣ"
	},
	{
		base: "ou",
		letters: "ȣ"
	},
	{
		base: "oo",
		letters: "ꝏ"
	},
	{
		base: "p",
		letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
	},
	{
		base: "q",
		letters: "qⓠｑɋꝗꝙ"
	},
	{
		base: "r",
		letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
	},
	{
		base: "s",
		letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"
	},
	{
		base: "t",
		letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
	},
	{
		base: "tz",
		letters: "ꜩ"
	},
	{
		base: "u",
		letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
	},
	{
		base: "v",
		letters: "vⓥｖṽṿʋꝟʌ"
	},
	{
		base: "vy",
		letters: "ꝡ"
	},
	{
		base: "w",
		letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
	},
	{
		base: "x",
		letters: "xⓧｘẋẍ"
	},
	{
		base: "y",
		letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
	},
	{
		base: "z",
		letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
	}
];
var anyDiacritic = new RegExp("[" + diacritics.map(function(d) {
	return d.letters;
}).join("") + "]", "g");
var diacriticToBase = {};
for (var i = 0; i < diacritics.length; i++) {
	var diacritic = diacritics[i];
	for (var j = 0; j < diacritic.letters.length; j++) diacriticToBase[diacritic.letters[j]] = diacritic.base;
}
var stripDiacritics = function stripDiacritics(str) {
	return str.replace(anyDiacritic, function(match) {
		return diacriticToBase[match];
	});
};
var memoizedStripDiacriticsForInput = memoizeOne(stripDiacritics);
var trimString = function trimString(str) {
	return str.replace(/^\s+|\s+$/g, "");
};
var defaultStringify = function defaultStringify(option) {
	return "".concat(option.label, " ").concat(option.value);
};
var createFilter = function createFilter(config) {
	return function(option, rawInput) {
		if (option.data.__isNew__) return true;
		var _ignoreCase$ignoreAcc = _objectSpread2({
			ignoreCase: true,
			ignoreAccents: true,
			stringify: defaultStringify,
			trim: true,
			matchFrom: "any"
		}, config), ignoreCase = _ignoreCase$ignoreAcc.ignoreCase, ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents, stringify = _ignoreCase$ignoreAcc.stringify, trim = _ignoreCase$ignoreAcc.trim, matchFrom = _ignoreCase$ignoreAcc.matchFrom;
		var input = trim ? trimString(rawInput) : rawInput;
		var candidate = trim ? trimString(stringify(option)) : stringify(option);
		if (ignoreCase) {
			input = input.toLowerCase();
			candidate = candidate.toLowerCase();
		}
		if (ignoreAccents) {
			input = memoizedStripDiacriticsForInput(input);
			candidate = stripDiacritics(candidate);
		}
		return matchFrom === "start" ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
	};
};
var _excluded = ["innerRef"];
function DummyInput(_ref) {
	var innerRef = _ref.innerRef;
	var filteredProps = removeProps(_objectWithoutProperties(_ref, _excluded), "onExited", "in", "enter", "exit", "appear");
	return jsx$1("input", _extends({ ref: innerRef }, filteredProps, { css: /*#__PURE__*/ css$2({
		label: "dummyInput",
		background: 0,
		border: 0,
		caretColor: "transparent",
		fontSize: "inherit",
		gridArea: "1 / 1 / 2 / 3",
		outline: 0,
		padding: 0,
		width: 1,
		color: "transparent",
		left: -100,
		opacity: 0,
		position: "relative",
		transform: "scale(.01)"
	}, "", "") }));
}
var cancelScroll = function cancelScroll(event) {
	if (event.cancelable) event.preventDefault();
	event.stopPropagation();
};
function useScrollCapture(_ref) {
	var isEnabled = _ref.isEnabled, onBottomArrive = _ref.onBottomArrive, onBottomLeave = _ref.onBottomLeave, onTopArrive = _ref.onTopArrive, onTopLeave = _ref.onTopLeave;
	var isBottom = (0, import_react.useRef)(false);
	var isTop = (0, import_react.useRef)(false);
	var touchStart = (0, import_react.useRef)(0);
	var scrollTarget = (0, import_react.useRef)(null);
	var handleEventDelta = (0, import_react.useCallback)(function(event, delta) {
		if (scrollTarget.current === null) return;
		var _scrollTarget$current = scrollTarget.current, scrollTop = _scrollTarget$current.scrollTop, scrollHeight = _scrollTarget$current.scrollHeight, clientHeight = _scrollTarget$current.clientHeight;
		var target = scrollTarget.current;
		var isDeltaPositive = delta > 0;
		var availableScroll = scrollHeight - clientHeight - scrollTop;
		var shouldCancelScroll = false;
		if (availableScroll > delta && isBottom.current) {
			if (onBottomLeave) onBottomLeave(event);
			isBottom.current = false;
		}
		if (isDeltaPositive && isTop.current) {
			if (onTopLeave) onTopLeave(event);
			isTop.current = false;
		}
		if (isDeltaPositive && delta > availableScroll) {
			if (onBottomArrive && !isBottom.current) onBottomArrive(event);
			target.scrollTop = scrollHeight;
			shouldCancelScroll = true;
			isBottom.current = true;
		} else if (!isDeltaPositive && -delta > scrollTop) {
			if (onTopArrive && !isTop.current) onTopArrive(event);
			target.scrollTop = 0;
			shouldCancelScroll = true;
			isTop.current = true;
		}
		if (shouldCancelScroll) cancelScroll(event);
	}, [
		onBottomArrive,
		onBottomLeave,
		onTopArrive,
		onTopLeave
	]);
	var onWheel = (0, import_react.useCallback)(function(event) {
		handleEventDelta(event, event.deltaY);
	}, [handleEventDelta]);
	var onTouchStart = (0, import_react.useCallback)(function(event) {
		touchStart.current = event.changedTouches[0].clientY;
	}, []);
	var onTouchMove = (0, import_react.useCallback)(function(event) {
		handleEventDelta(event, touchStart.current - event.changedTouches[0].clientY);
	}, [handleEventDelta]);
	var startListening = (0, import_react.useCallback)(function(el) {
		if (!el) return;
		var notPassive = supportsPassiveEvents ? { passive: false } : false;
		el.addEventListener("wheel", onWheel, notPassive);
		el.addEventListener("touchstart", onTouchStart, notPassive);
		el.addEventListener("touchmove", onTouchMove, notPassive);
	}, [
		onTouchMove,
		onTouchStart,
		onWheel
	]);
	var stopListening = (0, import_react.useCallback)(function(el) {
		if (!el) return;
		el.removeEventListener("wheel", onWheel, false);
		el.removeEventListener("touchstart", onTouchStart, false);
		el.removeEventListener("touchmove", onTouchMove, false);
	}, [
		onTouchMove,
		onTouchStart,
		onWheel
	]);
	(0, import_react.useEffect)(function() {
		if (!isEnabled) return;
		var element = scrollTarget.current;
		startListening(element);
		return function() {
			stopListening(element);
		};
	}, [
		isEnabled,
		startListening,
		stopListening
	]);
	return function(element) {
		scrollTarget.current = element;
	};
}
var STYLE_KEYS = [
	"boxSizing",
	"height",
	"overflow",
	"paddingRight",
	"position"
];
var LOCK_STYLES = {
	boxSizing: "border-box",
	overflow: "hidden",
	position: "relative",
	height: "100%"
};
function preventTouchMove(e) {
	e.preventDefault();
}
function allowTouchMove(e) {
	e.stopPropagation();
}
function preventInertiaScroll() {
	var top = this.scrollTop;
	var totalScroll = this.scrollHeight;
	var currentScroll = top + this.offsetHeight;
	if (top === 0) this.scrollTop = 1;
	else if (currentScroll === totalScroll) this.scrollTop = top - 1;
}
function isTouchDevice() {
	return "ontouchstart" in window || navigator.maxTouchPoints;
}
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var activeScrollLocks = 0;
var listenerOptions = {
	capture: false,
	passive: false
};
function useScrollLock(_ref) {
	var isEnabled = _ref.isEnabled, _ref$accountForScroll = _ref.accountForScrollbars, accountForScrollbars = _ref$accountForScroll === void 0 ? true : _ref$accountForScroll;
	var originalStyles = (0, import_react.useRef)({});
	var scrollTarget = (0, import_react.useRef)(null);
	var addScrollLock = (0, import_react.useCallback)(function(touchScrollTarget) {
		if (!canUseDOM) return;
		var target = document.body;
		var targetStyle = target && target.style;
		if (accountForScrollbars) STYLE_KEYS.forEach(function(key) {
			var val = targetStyle && targetStyle[key];
			originalStyles.current[key] = val;
		});
		if (accountForScrollbars && activeScrollLocks < 1) {
			var currentPadding = parseInt(originalStyles.current.paddingRight, 10) || 0;
			var clientWidth = document.body ? document.body.clientWidth : 0;
			var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
			Object.keys(LOCK_STYLES).forEach(function(key) {
				var val = LOCK_STYLES[key];
				if (targetStyle) targetStyle[key] = val;
			});
			if (targetStyle) targetStyle.paddingRight = "".concat(adjustedPadding, "px");
		}
		if (target && isTouchDevice()) {
			target.addEventListener("touchmove", preventTouchMove, listenerOptions);
			if (touchScrollTarget) {
				touchScrollTarget.addEventListener("touchstart", preventInertiaScroll, listenerOptions);
				touchScrollTarget.addEventListener("touchmove", allowTouchMove, listenerOptions);
			}
		}
		activeScrollLocks += 1;
	}, [accountForScrollbars]);
	var removeScrollLock = (0, import_react.useCallback)(function(touchScrollTarget) {
		if (!canUseDOM) return;
		var target = document.body;
		var targetStyle = target && target.style;
		activeScrollLocks = Math.max(activeScrollLocks - 1, 0);
		if (accountForScrollbars && activeScrollLocks < 1) STYLE_KEYS.forEach(function(key) {
			var val = originalStyles.current[key];
			if (targetStyle) targetStyle[key] = val;
		});
		if (target && isTouchDevice()) {
			target.removeEventListener("touchmove", preventTouchMove, listenerOptions);
			if (touchScrollTarget) {
				touchScrollTarget.removeEventListener("touchstart", preventInertiaScroll, listenerOptions);
				touchScrollTarget.removeEventListener("touchmove", allowTouchMove, listenerOptions);
			}
		}
	}, [accountForScrollbars]);
	(0, import_react.useEffect)(function() {
		if (!isEnabled) return;
		var element = scrollTarget.current;
		addScrollLock(element);
		return function() {
			removeScrollLock(element);
		};
	}, [
		isEnabled,
		addScrollLock,
		removeScrollLock
	]);
	return function(element) {
		scrollTarget.current = element;
	};
}
var blurSelectInput = function blurSelectInput(event) {
	var element = event.target;
	return element.ownerDocument.activeElement && element.ownerDocument.activeElement.blur();
};
var _ref2$1 = {
	name: "1kfdb0e",
	styles: "position:fixed;left:0;bottom:0;right:0;top:0"
};
function ScrollManager(_ref) {
	var children = _ref.children, lockEnabled = _ref.lockEnabled, _ref$captureEnabled = _ref.captureEnabled, captureEnabled = _ref$captureEnabled === void 0 ? true : _ref$captureEnabled, onBottomArrive = _ref.onBottomArrive, onBottomLeave = _ref.onBottomLeave, onTopArrive = _ref.onTopArrive, onTopLeave = _ref.onTopLeave;
	var setScrollCaptureTarget = useScrollCapture({
		isEnabled: captureEnabled,
		onBottomArrive,
		onBottomLeave,
		onTopArrive,
		onTopLeave
	});
	var setScrollLockTarget = useScrollLock({ isEnabled: lockEnabled });
	return jsx$1(import_react.Fragment, null, lockEnabled && jsx$1("div", {
		onClick: blurSelectInput,
		css: _ref2$1
	}), children(function targetRef(element) {
		setScrollCaptureTarget(element);
		setScrollLockTarget(element);
	}));
}
var _ref2 = {
	name: "1a0ro4n-requiredInput",
	styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
};
var RequiredInput$1 = function RequiredInput(_ref) {
	var name = _ref.name, onFocus = _ref.onFocus;
	return jsx$1("input", {
		required: true,
		name,
		tabIndex: -1,
		"aria-hidden": "true",
		onFocus,
		css: _ref2,
		value: "",
		onChange: function onChange() {}
	});
};
function testPlatform(re) {
	var _window$navigator$use;
	return typeof window !== "undefined" && window.navigator != null ? re.test(((_window$navigator$use = window.navigator["userAgentData"]) === null || _window$navigator$use === void 0 ? void 0 : _window$navigator$use.platform) || window.navigator.platform) : false;
}
function isIPhone() {
	return testPlatform(/^iPhone/i);
}
function isMac() {
	return testPlatform(/^Mac/i);
}
function isIPad() {
	return testPlatform(/^iPad/i) || isMac() && navigator.maxTouchPoints > 1;
}
function isIOS() {
	return isIPhone() || isIPad();
}
function isAppleDevice() {
	return isMac() || isIOS();
}
var formatGroupLabel = function formatGroupLabel(group) {
	return group.label;
};
var getOptionLabel$1 = function getOptionLabel(option) {
	return option.label;
};
var getOptionValue$1 = function getOptionValue(option) {
	return option.value;
};
var isOptionDisabled = function isOptionDisabled(option) {
	return !!option.isDisabled;
};
var defaultStyles = {
	clearIndicator: clearIndicatorCSS,
	container: containerCSS,
	control: css$1,
	dropdownIndicator: dropdownIndicatorCSS,
	group: groupCSS,
	groupHeading: groupHeadingCSS,
	indicatorsContainer: indicatorsContainerCSS,
	indicatorSeparator: indicatorSeparatorCSS,
	input: inputCSS,
	loadingIndicator: loadingIndicatorCSS,
	loadingMessage: loadingMessageCSS,
	menu: menuCSS,
	menuList: menuListCSS,
	menuPortal: menuPortalCSS,
	multiValue: multiValueCSS,
	multiValueLabel: multiValueLabelCSS,
	multiValueRemove: multiValueRemoveCSS,
	noOptionsMessage: noOptionsMessageCSS,
	option: optionCSS,
	placeholder: placeholderCSS,
	singleValue: css,
	valueContainer: valueContainerCSS
};
var colors = {
	primary: "#2684FF",
	primary75: "#4C9AFF",
	primary50: "#B2D4FF",
	primary25: "#DEEBFF",
	danger: "#DE350B",
	dangerLight: "#FFBDAD",
	neutral0: "hsl(0, 0%, 100%)",
	neutral5: "hsl(0, 0%, 95%)",
	neutral10: "hsl(0, 0%, 90%)",
	neutral20: "hsl(0, 0%, 80%)",
	neutral30: "hsl(0, 0%, 70%)",
	neutral40: "hsl(0, 0%, 60%)",
	neutral50: "hsl(0, 0%, 50%)",
	neutral60: "hsl(0, 0%, 40%)",
	neutral70: "hsl(0, 0%, 30%)",
	neutral80: "hsl(0, 0%, 20%)",
	neutral90: "hsl(0, 0%, 10%)"
};
var borderRadius = 4;
var baseUnit = 4;
var defaultTheme = {
	borderRadius,
	colors,
	spacing: {
		baseUnit,
		controlHeight: 38,
		menuGutter: baseUnit * 2
	}
};
var defaultProps = {
	"aria-live": "polite",
	backspaceRemovesValue: true,
	blurInputOnSelect: isTouchCapable(),
	captureMenuScroll: !isTouchCapable(),
	classNames: {},
	closeMenuOnSelect: true,
	closeMenuOnScroll: false,
	components: {},
	controlShouldRenderValue: true,
	escapeClearsValue: false,
	filterOption: createFilter(),
	formatGroupLabel,
	getOptionLabel: getOptionLabel$1,
	getOptionValue: getOptionValue$1,
	isDisabled: false,
	isLoading: false,
	isMulti: false,
	isRtl: false,
	isSearchable: true,
	isOptionDisabled,
	loadingMessage: function loadingMessage() {
		return "Loading...";
	},
	maxMenuHeight: 300,
	minMenuHeight: 140,
	menuIsOpen: false,
	menuPlacement: "bottom",
	menuPosition: "absolute",
	menuShouldBlockScroll: false,
	menuShouldScrollIntoView: !isMobileDevice(),
	noOptionsMessage: function noOptionsMessage() {
		return "No options";
	},
	openMenuOnFocus: false,
	openMenuOnClick: true,
	options: [],
	pageSize: 5,
	placeholder: "Select...",
	screenReaderStatus: function screenReaderStatus(_ref) {
		var count = _ref.count;
		return "".concat(count, " result").concat(count !== 1 ? "s" : "", " available");
	},
	styles: {},
	tabIndex: 0,
	tabSelectsValue: true,
	unstyled: false
};
function toCategorizedOption(props, option, selectValue, index) {
	return {
		type: "option",
		data: option,
		isDisabled: _isOptionDisabled(props, option, selectValue),
		isSelected: _isOptionSelected(props, option, selectValue),
		label: getOptionLabel(props, option),
		value: getOptionValue(props, option),
		index
	};
}
function buildCategorizedOptions(props, selectValue) {
	return props.options.map(function(groupOrOption, groupOrOptionIndex) {
		if ("options" in groupOrOption) {
			var categorizedOptions = groupOrOption.options.map(function(option, optionIndex) {
				return toCategorizedOption(props, option, selectValue, optionIndex);
			}).filter(function(categorizedOption) {
				return isFocusable(props, categorizedOption);
			});
			return categorizedOptions.length > 0 ? {
				type: "group",
				data: groupOrOption,
				options: categorizedOptions,
				index: groupOrOptionIndex
			} : void 0;
		}
		var categorizedOption = toCategorizedOption(props, groupOrOption, selectValue, groupOrOptionIndex);
		return isFocusable(props, categorizedOption) ? categorizedOption : void 0;
	}).filter(notNullish);
}
function buildFocusableOptionsFromCategorizedOptions(categorizedOptions) {
	return categorizedOptions.reduce(function(optionsAccumulator, categorizedOption) {
		if (categorizedOption.type === "group") optionsAccumulator.push.apply(optionsAccumulator, _toConsumableArray(categorizedOption.options.map(function(option) {
			return option.data;
		})));
		else optionsAccumulator.push(categorizedOption.data);
		return optionsAccumulator;
	}, []);
}
function buildFocusableOptionsWithIds(categorizedOptions, optionId) {
	return categorizedOptions.reduce(function(optionsAccumulator, categorizedOption) {
		if (categorizedOption.type === "group") optionsAccumulator.push.apply(optionsAccumulator, _toConsumableArray(categorizedOption.options.map(function(option) {
			return {
				data: option.data,
				id: "".concat(optionId, "-").concat(categorizedOption.index, "-").concat(option.index)
			};
		})));
		else optionsAccumulator.push({
			data: categorizedOption.data,
			id: "".concat(optionId, "-").concat(categorizedOption.index)
		});
		return optionsAccumulator;
	}, []);
}
function buildFocusableOptions(props, selectValue) {
	return buildFocusableOptionsFromCategorizedOptions(buildCategorizedOptions(props, selectValue));
}
function isFocusable(props, categorizedOption) {
	var _props$inputValue = props.inputValue, inputValue = _props$inputValue === void 0 ? "" : _props$inputValue;
	var data = categorizedOption.data, isSelected = categorizedOption.isSelected, label = categorizedOption.label, value = categorizedOption.value;
	return (!shouldHideSelectedOptions(props) || !isSelected) && _filterOption(props, {
		label,
		value,
		data
	}, inputValue);
}
function getNextFocusedValue(state, nextSelectValue) {
	var focusedValue = state.focusedValue;
	var lastFocusedIndex = state.selectValue.indexOf(focusedValue);
	if (lastFocusedIndex > -1) {
		if (nextSelectValue.indexOf(focusedValue) > -1) return focusedValue;
		else if (lastFocusedIndex < nextSelectValue.length) return nextSelectValue[lastFocusedIndex];
	}
	return null;
}
function getNextFocusedOption(state, options) {
	var lastFocusedOption = state.focusedOption;
	return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
}
var getFocusedOptionId = function getFocusedOptionId(focusableOptionsWithIds, focusedOption) {
	var _focusableOptionsWith;
	return ((_focusableOptionsWith = focusableOptionsWithIds.find(function(option) {
		return option.data === focusedOption;
	})) === null || _focusableOptionsWith === void 0 ? void 0 : _focusableOptionsWith.id) || null;
};
var getOptionLabel = function getOptionLabel(props, data) {
	return props.getOptionLabel(data);
};
var getOptionValue = function getOptionValue(props, data) {
	return props.getOptionValue(data);
};
function _isOptionDisabled(props, option, selectValue) {
	return typeof props.isOptionDisabled === "function" ? props.isOptionDisabled(option, selectValue) : false;
}
function _isOptionSelected(props, option, selectValue) {
	if (selectValue.indexOf(option) > -1) return true;
	if (typeof props.isOptionSelected === "function") return props.isOptionSelected(option, selectValue);
	var candidate = getOptionValue(props, option);
	return selectValue.some(function(i) {
		return getOptionValue(props, i) === candidate;
	});
}
function _filterOption(props, option, inputValue) {
	return props.filterOption ? props.filterOption(option, inputValue) : true;
}
var shouldHideSelectedOptions = function shouldHideSelectedOptions(props) {
	var hideSelectedOptions = props.hideSelectedOptions, isMulti = props.isMulti;
	if (hideSelectedOptions === void 0) return isMulti;
	return hideSelectedOptions;
};
var instanceId = 1;
var Select = /*#__PURE__*/ function(_Component) {
	_inherits(Select, _Component);
	var _super = _createSuper(Select);
	function Select(_props) {
		var _this;
		_classCallCheck(this, Select);
		_this = _super.call(this, _props);
		_this.state = {
			ariaSelection: null,
			focusedOption: null,
			focusedOptionId: null,
			focusableOptionsWithIds: [],
			focusedValue: null,
			inputIsHidden: false,
			isFocused: false,
			selectValue: [],
			clearFocusValueOnUpdate: false,
			prevWasFocused: false,
			inputIsHiddenAfterUpdate: void 0,
			prevProps: void 0,
			instancePrefix: ""
		};
		_this.blockOptionHover = false;
		_this.isComposing = false;
		_this.commonProps = void 0;
		_this.initialTouchX = 0;
		_this.initialTouchY = 0;
		_this.openAfterFocus = false;
		_this.scrollToFocusedOptionOnUpdate = false;
		_this.userIsDragging = void 0;
		_this.isAppleDevice = isAppleDevice();
		_this.controlRef = null;
		_this.getControlRef = function(ref) {
			_this.controlRef = ref;
		};
		_this.focusedOptionRef = null;
		_this.getFocusedOptionRef = function(ref) {
			_this.focusedOptionRef = ref;
		};
		_this.menuListRef = null;
		_this.getMenuListRef = function(ref) {
			_this.menuListRef = ref;
		};
		_this.inputRef = null;
		_this.getInputRef = function(ref) {
			_this.inputRef = ref;
		};
		_this.focus = _this.focusInput;
		_this.blur = _this.blurInput;
		_this.onChange = function(newValue, actionMeta) {
			var _this$props = _this.props, onChange = _this$props.onChange;
			actionMeta.name = _this$props.name;
			_this.ariaOnChange(newValue, actionMeta);
			onChange(newValue, actionMeta);
		};
		_this.setValue = function(newValue, action, option) {
			var _this$props2 = _this.props, closeMenuOnSelect = _this$props2.closeMenuOnSelect, isMulti = _this$props2.isMulti, inputValue = _this$props2.inputValue;
			_this.onInputChange("", {
				action: "set-value",
				prevInputValue: inputValue
			});
			if (closeMenuOnSelect) {
				_this.setState({ inputIsHiddenAfterUpdate: !isMulti });
				_this.onMenuClose();
			}
			_this.setState({ clearFocusValueOnUpdate: true });
			_this.onChange(newValue, {
				action,
				option
			});
		};
		_this.selectOption = function(newValue) {
			var _this$props3 = _this.props, blurInputOnSelect = _this$props3.blurInputOnSelect, isMulti = _this$props3.isMulti, name = _this$props3.name;
			var selectValue = _this.state.selectValue;
			var deselected = isMulti && _this.isOptionSelected(newValue, selectValue);
			var isDisabled = _this.isOptionDisabled(newValue, selectValue);
			if (deselected) {
				var candidate = _this.getOptionValue(newValue);
				_this.setValue(multiValueAsValue(selectValue.filter(function(i) {
					return _this.getOptionValue(i) !== candidate;
				})), "deselect-option", newValue);
			} else if (!isDisabled) if (isMulti) _this.setValue(multiValueAsValue([].concat(_toConsumableArray(selectValue), [newValue])), "select-option", newValue);
			else _this.setValue(singleValueAsValue(newValue), "select-option");
			else {
				_this.ariaOnChange(singleValueAsValue(newValue), {
					action: "select-option",
					option: newValue,
					name
				});
				return;
			}
			if (blurInputOnSelect) _this.blurInput();
		};
		_this.removeValue = function(removedValue) {
			var isMulti = _this.props.isMulti;
			var selectValue = _this.state.selectValue;
			var candidate = _this.getOptionValue(removedValue);
			var newValueArray = selectValue.filter(function(i) {
				return _this.getOptionValue(i) !== candidate;
			});
			var newValue = valueTernary(isMulti, newValueArray, newValueArray[0] || null);
			_this.onChange(newValue, {
				action: "remove-value",
				removedValue
			});
			_this.focusInput();
		};
		_this.clearValue = function() {
			var selectValue = _this.state.selectValue;
			_this.onChange(valueTernary(_this.props.isMulti, [], null), {
				action: "clear",
				removedValues: selectValue
			});
		};
		_this.popValue = function() {
			var isMulti = _this.props.isMulti;
			var selectValue = _this.state.selectValue;
			var lastSelectedValue = selectValue[selectValue.length - 1];
			var newValueArray = selectValue.slice(0, selectValue.length - 1);
			var newValue = valueTernary(isMulti, newValueArray, newValueArray[0] || null);
			_this.onChange(newValue, {
				action: "pop-value",
				removedValue: lastSelectedValue
			});
		};
		_this.getFocusedOptionId = function(focusedOption) {
			return getFocusedOptionId(_this.state.focusableOptionsWithIds, focusedOption);
		};
		_this.getFocusableOptionsWithIds = function() {
			return buildFocusableOptionsWithIds(buildCategorizedOptions(_this.props, _this.state.selectValue), _this.getElementId("option"));
		};
		_this.getValue = function() {
			return _this.state.selectValue;
		};
		_this.cx = function() {
			for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
			return classNames.apply(void 0, [_this.props.classNamePrefix].concat(args));
		};
		_this.getOptionLabel = function(data) {
			return getOptionLabel(_this.props, data);
		};
		_this.getOptionValue = function(data) {
			return getOptionValue(_this.props, data);
		};
		_this.getStyles = function(key, props) {
			var unstyled = _this.props.unstyled;
			var base = defaultStyles[key](props, unstyled);
			base.boxSizing = "border-box";
			var custom = _this.props.styles[key];
			return custom ? custom(base, props) : base;
		};
		_this.getClassNames = function(key, props) {
			var _this$props$className, _this$props$className2;
			return (_this$props$className = (_this$props$className2 = _this.props.classNames)[key]) === null || _this$props$className === void 0 ? void 0 : _this$props$className.call(_this$props$className2, props);
		};
		_this.getElementId = function(element) {
			return "".concat(_this.state.instancePrefix, "-").concat(element);
		};
		_this.getComponents = function() {
			return defaultComponents(_this.props);
		};
		_this.buildCategorizedOptions = function() {
			return buildCategorizedOptions(_this.props, _this.state.selectValue);
		};
		_this.getCategorizedOptions = function() {
			return _this.props.menuIsOpen ? _this.buildCategorizedOptions() : [];
		};
		_this.buildFocusableOptions = function() {
			return buildFocusableOptionsFromCategorizedOptions(_this.buildCategorizedOptions());
		};
		_this.getFocusableOptions = function() {
			return _this.props.menuIsOpen ? _this.buildFocusableOptions() : [];
		};
		_this.ariaOnChange = function(value, actionMeta) {
			_this.setState({ ariaSelection: _objectSpread2({ value }, actionMeta) });
		};
		_this.onMenuMouseDown = function(event) {
			if (event.button !== 0) return;
			event.stopPropagation();
			event.preventDefault();
			_this.focusInput();
		};
		_this.onMenuMouseMove = function(event) {
			_this.blockOptionHover = false;
		};
		_this.onControlMouseDown = function(event) {
			if (event.defaultPrevented) return;
			var openMenuOnClick = _this.props.openMenuOnClick;
			if (!_this.state.isFocused) {
				if (openMenuOnClick) _this.openAfterFocus = true;
				_this.focusInput();
			} else if (!_this.props.menuIsOpen) {
				if (openMenuOnClick) _this.openMenu("first");
			} else if (event.target.tagName !== "INPUT" && event.target.tagName !== "TEXTAREA") _this.onMenuClose();
			if (event.target.tagName !== "INPUT" && event.target.tagName !== "TEXTAREA") event.preventDefault();
		};
		_this.onDropdownIndicatorMouseDown = function(event) {
			if (event && event.type === "mousedown" && event.button !== 0) return;
			if (_this.props.isDisabled) return;
			var _this$props4 = _this.props, isMulti = _this$props4.isMulti, menuIsOpen = _this$props4.menuIsOpen;
			_this.focusInput();
			if (menuIsOpen) {
				_this.setState({ inputIsHiddenAfterUpdate: !isMulti });
				_this.onMenuClose();
			} else _this.openMenu("first");
			event.preventDefault();
		};
		_this.onClearIndicatorMouseDown = function(event) {
			if (event && event.type === "mousedown" && event.button !== 0) return;
			_this.clearValue();
			event.preventDefault();
			_this.openAfterFocus = false;
			if (event.type === "touchend") _this.focusInput();
			else setTimeout(function() {
				return _this.focusInput();
			});
		};
		_this.onScroll = function(event) {
			if (typeof _this.props.closeMenuOnScroll === "boolean") {
				if (event.target instanceof HTMLElement && isDocumentElement(event.target)) _this.props.onMenuClose();
			} else if (typeof _this.props.closeMenuOnScroll === "function") {
				if (_this.props.closeMenuOnScroll(event)) _this.props.onMenuClose();
			}
		};
		_this.onCompositionStart = function() {
			_this.isComposing = true;
		};
		_this.onCompositionEnd = function() {
			_this.isComposing = false;
		};
		_this.onTouchStart = function(_ref2) {
			var touches = _ref2.touches;
			var touch = touches && touches.item(0);
			if (!touch) return;
			_this.initialTouchX = touch.clientX;
			_this.initialTouchY = touch.clientY;
			_this.userIsDragging = false;
		};
		_this.onTouchMove = function(_ref3) {
			var touches = _ref3.touches;
			var touch = touches && touches.item(0);
			if (!touch) return;
			var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
			var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
			var moveThreshold = 5;
			_this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
		};
		_this.onTouchEnd = function(event) {
			if (_this.userIsDragging) return;
			if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) _this.blurInput();
			_this.initialTouchX = 0;
			_this.initialTouchY = 0;
		};
		_this.onControlTouchEnd = function(event) {
			if (_this.userIsDragging) return;
			_this.onControlMouseDown(event);
		};
		_this.onClearIndicatorTouchEnd = function(event) {
			if (_this.userIsDragging) return;
			_this.onClearIndicatorMouseDown(event);
		};
		_this.onDropdownIndicatorTouchEnd = function(event) {
			if (_this.userIsDragging) return;
			_this.onDropdownIndicatorMouseDown(event);
		};
		_this.handleInputChange = function(event) {
			var prevInputValue = _this.props.inputValue;
			var inputValue = event.currentTarget.value;
			_this.setState({ inputIsHiddenAfterUpdate: false });
			_this.onInputChange(inputValue, {
				action: "input-change",
				prevInputValue
			});
			if (!_this.props.menuIsOpen) _this.onMenuOpen();
		};
		_this.onInputFocus = function(event) {
			if (_this.props.onFocus) _this.props.onFocus(event);
			_this.setState({
				inputIsHiddenAfterUpdate: false,
				isFocused: true
			});
			if (_this.openAfterFocus || _this.props.openMenuOnFocus) _this.openMenu("first");
			_this.openAfterFocus = false;
		};
		_this.onInputBlur = function(event) {
			var prevInputValue = _this.props.inputValue;
			if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
				_this.inputRef.focus();
				return;
			}
			if (_this.props.onBlur) _this.props.onBlur(event);
			_this.onInputChange("", {
				action: "input-blur",
				prevInputValue
			});
			_this.onMenuClose();
			_this.setState({
				focusedValue: null,
				isFocused: false
			});
		};
		_this.onOptionHover = function(focusedOption) {
			if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) return;
			var focusedOptionIndex = _this.getFocusableOptions().indexOf(focusedOption);
			_this.setState({
				focusedOption,
				focusedOptionId: focusedOptionIndex > -1 ? _this.getFocusedOptionId(focusedOption) : null
			});
		};
		_this.shouldHideSelectedOptions = function() {
			return shouldHideSelectedOptions(_this.props);
		};
		_this.onValueInputFocus = function(e) {
			e.preventDefault();
			e.stopPropagation();
			_this.focus();
		};
		_this.onKeyDown = function(event) {
			var _this$props5 = _this.props, isMulti = _this$props5.isMulti, backspaceRemovesValue = _this$props5.backspaceRemovesValue, escapeClearsValue = _this$props5.escapeClearsValue, inputValue = _this$props5.inputValue, isClearable = _this$props5.isClearable, isDisabled = _this$props5.isDisabled, menuIsOpen = _this$props5.menuIsOpen, onKeyDown = _this$props5.onKeyDown, tabSelectsValue = _this$props5.tabSelectsValue, openMenuOnFocus = _this$props5.openMenuOnFocus;
			var _this$state = _this.state, focusedOption = _this$state.focusedOption, focusedValue = _this$state.focusedValue, selectValue = _this$state.selectValue;
			if (isDisabled) return;
			if (typeof onKeyDown === "function") {
				onKeyDown(event);
				if (event.defaultPrevented) return;
			}
			_this.blockOptionHover = true;
			switch (event.key) {
				case "ArrowLeft":
					if (!isMulti || inputValue) return;
					_this.focusValue("previous");
					break;
				case "ArrowRight":
					if (!isMulti || inputValue) return;
					_this.focusValue("next");
					break;
				case "Delete":
				case "Backspace":
					if (inputValue) return;
					if (focusedValue) _this.removeValue(focusedValue);
					else {
						if (!backspaceRemovesValue) return;
						if (isMulti) _this.popValue();
						else if (isClearable) _this.clearValue();
					}
					break;
				case "Tab":
					if (_this.isComposing) return;
					if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption || openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) return;
					_this.selectOption(focusedOption);
					break;
				case "Enter":
					if (event.keyCode === 229) break;
					if (menuIsOpen) {
						if (!focusedOption) return;
						if (_this.isComposing) return;
						_this.selectOption(focusedOption);
						break;
					}
					return;
				case "Escape":
					if (menuIsOpen) {
						_this.setState({ inputIsHiddenAfterUpdate: false });
						_this.onInputChange("", {
							action: "menu-close",
							prevInputValue: inputValue
						});
						_this.onMenuClose();
					} else if (isClearable && escapeClearsValue) _this.clearValue();
					break;
				case " ":
					if (inputValue) return;
					if (!menuIsOpen) {
						_this.openMenu("first");
						break;
					}
					if (!focusedOption) return;
					_this.selectOption(focusedOption);
					break;
				case "ArrowUp":
					if (menuIsOpen) _this.focusOption("up");
					else _this.openMenu("last");
					break;
				case "ArrowDown":
					if (menuIsOpen) _this.focusOption("down");
					else _this.openMenu("first");
					break;
				case "PageUp":
					if (!menuIsOpen) return;
					_this.focusOption("pageup");
					break;
				case "PageDown":
					if (!menuIsOpen) return;
					_this.focusOption("pagedown");
					break;
				case "Home":
					if (!menuIsOpen) return;
					_this.focusOption("first");
					break;
				case "End":
					if (!menuIsOpen) return;
					_this.focusOption("last");
					break;
				default: return;
			}
			event.preventDefault();
		};
		_this.state.instancePrefix = "react-select-" + (_this.props.instanceId || ++instanceId);
		_this.state.selectValue = cleanValue(_props.value);
		if (_props.menuIsOpen && _this.state.selectValue.length) {
			var focusableOptionsWithIds = _this.getFocusableOptionsWithIds();
			var focusableOptions = _this.buildFocusableOptions();
			var optionIndex = focusableOptions.indexOf(_this.state.selectValue[0]);
			_this.state.focusableOptionsWithIds = focusableOptionsWithIds;
			_this.state.focusedOption = focusableOptions[optionIndex];
			_this.state.focusedOptionId = getFocusedOptionId(focusableOptionsWithIds, focusableOptions[optionIndex]);
		}
		return _this;
	}
	_createClass(Select, [
		{
			key: "componentDidMount",
			value: function componentDidMount() {
				this.startListeningComposition();
				this.startListeningToTouch();
				if (this.props.closeMenuOnScroll && document && document.addEventListener) document.addEventListener("scroll", this.onScroll, true);
				if (this.props.autoFocus) this.focusInput();
				if (this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef) scrollIntoView(this.menuListRef, this.focusedOptionRef);
			}
		},
		{
			key: "componentDidUpdate",
			value: function componentDidUpdate(prevProps) {
				var _this$props6 = this.props, isDisabled = _this$props6.isDisabled, menuIsOpen = _this$props6.menuIsOpen;
				var isFocused = this.state.isFocused;
				if (isFocused && !isDisabled && prevProps.isDisabled || isFocused && menuIsOpen && !prevProps.menuIsOpen) this.focusInput();
				if (isFocused && isDisabled && !prevProps.isDisabled) this.setState({ isFocused: false }, this.onMenuClose);
				else if (!isFocused && !isDisabled && prevProps.isDisabled && this.inputRef === document.activeElement) this.setState({ isFocused: true });
				if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
					scrollIntoView(this.menuListRef, this.focusedOptionRef);
					this.scrollToFocusedOptionOnUpdate = false;
				}
			}
		},
		{
			key: "componentWillUnmount",
			value: function componentWillUnmount() {
				this.stopListeningComposition();
				this.stopListeningToTouch();
				document.removeEventListener("scroll", this.onScroll, true);
			}
		},
		{
			key: "onMenuOpen",
			value: function onMenuOpen() {
				this.props.onMenuOpen();
			}
		},
		{
			key: "onMenuClose",
			value: function onMenuClose() {
				this.onInputChange("", {
					action: "menu-close",
					prevInputValue: this.props.inputValue
				});
				this.props.onMenuClose();
			}
		},
		{
			key: "onInputChange",
			value: function onInputChange(newValue, actionMeta) {
				this.props.onInputChange(newValue, actionMeta);
			}
		},
		{
			key: "focusInput",
			value: function focusInput() {
				if (!this.inputRef) return;
				this.inputRef.focus();
			}
		},
		{
			key: "blurInput",
			value: function blurInput() {
				if (!this.inputRef) return;
				this.inputRef.blur();
			}
		},
		{
			key: "openMenu",
			value: function openMenu(focusOption) {
				var _this2 = this;
				var _this$state2 = this.state, selectValue = _this$state2.selectValue, isFocused = _this$state2.isFocused;
				var focusableOptions = this.buildFocusableOptions();
				var openAtIndex = focusOption === "first" ? 0 : focusableOptions.length - 1;
				if (!this.props.isMulti) {
					var selectedIndex = focusableOptions.indexOf(selectValue[0]);
					if (selectedIndex > -1) openAtIndex = selectedIndex;
				}
				this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
				this.setState({
					inputIsHiddenAfterUpdate: false,
					focusedValue: null,
					focusedOption: focusableOptions[openAtIndex],
					focusedOptionId: this.getFocusedOptionId(focusableOptions[openAtIndex])
				}, function() {
					return _this2.onMenuOpen();
				});
			}
		},
		{
			key: "focusValue",
			value: function focusValue(direction) {
				var _this$state3 = this.state, selectValue = _this$state3.selectValue, focusedValue = _this$state3.focusedValue;
				if (!this.props.isMulti) return;
				this.setState({ focusedOption: null });
				var focusedIndex = selectValue.indexOf(focusedValue);
				if (!focusedValue) focusedIndex = -1;
				var lastIndex = selectValue.length - 1;
				var nextFocus = -1;
				if (!selectValue.length) return;
				switch (direction) {
					case "previous":
						if (focusedIndex === 0) nextFocus = 0;
						else if (focusedIndex === -1) nextFocus = lastIndex;
						else nextFocus = focusedIndex - 1;
						break;
					case "next":
						if (focusedIndex > -1 && focusedIndex < lastIndex) nextFocus = focusedIndex + 1;
						break;
				}
				this.setState({
					inputIsHidden: nextFocus !== -1,
					focusedValue: selectValue[nextFocus]
				});
			}
		},
		{
			key: "focusOption",
			value: function focusOption() {
				var direction = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "first";
				var pageSize = this.props.pageSize;
				var focusedOption = this.state.focusedOption;
				var options = this.getFocusableOptions();
				if (!options.length) return;
				var nextFocus = 0;
				var focusedIndex = options.indexOf(focusedOption);
				if (!focusedOption) focusedIndex = -1;
				if (direction === "up") nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
				else if (direction === "down") nextFocus = (focusedIndex + 1) % options.length;
				else if (direction === "pageup") {
					nextFocus = focusedIndex - pageSize;
					if (nextFocus < 0) nextFocus = 0;
				} else if (direction === "pagedown") {
					nextFocus = focusedIndex + pageSize;
					if (nextFocus > options.length - 1) nextFocus = options.length - 1;
				} else if (direction === "last") nextFocus = options.length - 1;
				this.scrollToFocusedOptionOnUpdate = true;
				this.setState({
					focusedOption: options[nextFocus],
					focusedValue: null,
					focusedOptionId: this.getFocusedOptionId(options[nextFocus])
				});
			}
		},
		{
			key: "getTheme",
			value: function getTheme() {
				if (!this.props.theme) return defaultTheme;
				if (typeof this.props.theme === "function") return this.props.theme(defaultTheme);
				return _objectSpread2(_objectSpread2({}, defaultTheme), this.props.theme);
			}
		},
		{
			key: "getCommonProps",
			value: function getCommonProps() {
				var clearValue = this.clearValue, cx = this.cx, getStyles = this.getStyles, getClassNames = this.getClassNames, getValue = this.getValue, selectOption = this.selectOption, setValue = this.setValue, props = this.props;
				var isMulti = props.isMulti, isRtl = props.isRtl, options = props.options;
				return {
					clearValue,
					cx,
					getStyles,
					getClassNames,
					getValue,
					hasValue: this.hasValue(),
					isMulti,
					isRtl,
					options,
					selectOption,
					selectProps: props,
					setValue,
					theme: this.getTheme()
				};
			}
		},
		{
			key: "hasValue",
			value: function hasValue() {
				return this.state.selectValue.length > 0;
			}
		},
		{
			key: "hasOptions",
			value: function hasOptions() {
				return !!this.getFocusableOptions().length;
			}
		},
		{
			key: "isClearable",
			value: function isClearable() {
				var _this$props7 = this.props, isClearable = _this$props7.isClearable, isMulti = _this$props7.isMulti;
				if (isClearable === void 0) return isMulti;
				return isClearable;
			}
		},
		{
			key: "isOptionDisabled",
			value: function isOptionDisabled(option, selectValue) {
				return _isOptionDisabled(this.props, option, selectValue);
			}
		},
		{
			key: "isOptionSelected",
			value: function isOptionSelected(option, selectValue) {
				return _isOptionSelected(this.props, option, selectValue);
			}
		},
		{
			key: "filterOption",
			value: function filterOption(option, inputValue) {
				return _filterOption(this.props, option, inputValue);
			}
		},
		{
			key: "formatOptionLabel",
			value: function formatOptionLabel(data, context) {
				if (typeof this.props.formatOptionLabel === "function") {
					var _inputValue = this.props.inputValue;
					var _selectValue = this.state.selectValue;
					return this.props.formatOptionLabel(data, {
						context,
						inputValue: _inputValue,
						selectValue: _selectValue
					});
				} else return this.getOptionLabel(data);
			}
		},
		{
			key: "formatGroupLabel",
			value: function formatGroupLabel(data) {
				return this.props.formatGroupLabel(data);
			}
		},
		{
			key: "startListeningComposition",
			value: function startListeningComposition() {
				if (document && document.addEventListener) {
					document.addEventListener("compositionstart", this.onCompositionStart, false);
					document.addEventListener("compositionend", this.onCompositionEnd, false);
				}
			}
		},
		{
			key: "stopListeningComposition",
			value: function stopListeningComposition() {
				if (document && document.removeEventListener) {
					document.removeEventListener("compositionstart", this.onCompositionStart);
					document.removeEventListener("compositionend", this.onCompositionEnd);
				}
			}
		},
		{
			key: "startListeningToTouch",
			value: function startListeningToTouch() {
				if (document && document.addEventListener) {
					document.addEventListener("touchstart", this.onTouchStart, false);
					document.addEventListener("touchmove", this.onTouchMove, false);
					document.addEventListener("touchend", this.onTouchEnd, false);
				}
			}
		},
		{
			key: "stopListeningToTouch",
			value: function stopListeningToTouch() {
				if (document && document.removeEventListener) {
					document.removeEventListener("touchstart", this.onTouchStart);
					document.removeEventListener("touchmove", this.onTouchMove);
					document.removeEventListener("touchend", this.onTouchEnd);
				}
			}
		},
		{
			key: "renderInput",
			value: function renderInput() {
				var _this$props8 = this.props, isDisabled = _this$props8.isDisabled, isSearchable = _this$props8.isSearchable, inputId = _this$props8.inputId, inputValue = _this$props8.inputValue, tabIndex = _this$props8.tabIndex, form = _this$props8.form, menuIsOpen = _this$props8.menuIsOpen, required = _this$props8.required;
				var Input = this.getComponents().Input;
				var _this$state4 = this.state, inputIsHidden = _this$state4.inputIsHidden, ariaSelection = _this$state4.ariaSelection;
				var commonProps = this.commonProps;
				var id = inputId || this.getElementId("input");
				var ariaAttributes = _objectSpread2(_objectSpread2(_objectSpread2({
					"aria-autocomplete": "list",
					"aria-expanded": menuIsOpen,
					"aria-haspopup": true,
					"aria-errormessage": this.props["aria-errormessage"],
					"aria-invalid": this.props["aria-invalid"],
					"aria-label": this.props["aria-label"],
					"aria-labelledby": this.props["aria-labelledby"],
					"aria-required": required,
					role: "combobox",
					"aria-activedescendant": this.isAppleDevice ? void 0 : this.state.focusedOptionId || ""
				}, menuIsOpen && { "aria-controls": this.getElementId("listbox") }), !isSearchable && { "aria-readonly": true }), this.hasValue() ? (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === "initial-input-focus" && { "aria-describedby": this.getElementId("live-region") } : { "aria-describedby": this.getElementId("placeholder") });
				if (!isSearchable) return /*#__PURE__*/ import_react.createElement(DummyInput, _extends({
					id,
					innerRef: this.getInputRef,
					onBlur: this.onInputBlur,
					onChange: noop$1,
					onFocus: this.onInputFocus,
					disabled: isDisabled,
					tabIndex,
					inputMode: "none",
					form,
					value: ""
				}, ariaAttributes));
				return /*#__PURE__*/ import_react.createElement(Input, _extends({}, commonProps, {
					autoCapitalize: "none",
					autoComplete: "off",
					autoCorrect: "off",
					id,
					innerRef: this.getInputRef,
					isDisabled,
					isHidden: inputIsHidden,
					onBlur: this.onInputBlur,
					onChange: this.handleInputChange,
					onFocus: this.onInputFocus,
					spellCheck: "false",
					tabIndex,
					form,
					type: "text",
					value: inputValue
				}, ariaAttributes));
			}
		},
		{
			key: "renderPlaceholderOrValue",
			value: function renderPlaceholderOrValue() {
				var _this3 = this;
				var _this$getComponents2 = this.getComponents(), MultiValue = _this$getComponents2.MultiValue, MultiValueContainer = _this$getComponents2.MultiValueContainer, MultiValueLabel = _this$getComponents2.MultiValueLabel, MultiValueRemove = _this$getComponents2.MultiValueRemove, SingleValue = _this$getComponents2.SingleValue, Placeholder = _this$getComponents2.Placeholder;
				var commonProps = this.commonProps;
				var _this$props9 = this.props, controlShouldRenderValue = _this$props9.controlShouldRenderValue, isDisabled = _this$props9.isDisabled, isMulti = _this$props9.isMulti, inputValue = _this$props9.inputValue, placeholder = _this$props9.placeholder;
				var _this$state5 = this.state, selectValue = _this$state5.selectValue, focusedValue = _this$state5.focusedValue, isFocused = _this$state5.isFocused;
				if (!this.hasValue() || !controlShouldRenderValue) return inputValue ? null : /*#__PURE__*/ import_react.createElement(Placeholder, _extends({}, commonProps, {
					key: "placeholder",
					isDisabled,
					isFocused,
					innerProps: { id: this.getElementId("placeholder") }
				}), placeholder);
				if (isMulti) return selectValue.map(function(opt, index) {
					var isOptionFocused = opt === focusedValue;
					var key = "".concat(_this3.getOptionLabel(opt), "-").concat(_this3.getOptionValue(opt));
					return /*#__PURE__*/ import_react.createElement(MultiValue, _extends({}, commonProps, {
						components: {
							Container: MultiValueContainer,
							Label: MultiValueLabel,
							Remove: MultiValueRemove
						},
						isFocused: isOptionFocused,
						isDisabled,
						key,
						index,
						removeProps: {
							onClick: function onClick() {
								return _this3.removeValue(opt);
							},
							onTouchEnd: function onTouchEnd() {
								return _this3.removeValue(opt);
							},
							onMouseDown: function onMouseDown(e) {
								e.preventDefault();
							}
						},
						data: opt
					}), _this3.formatOptionLabel(opt, "value"));
				});
				if (inputValue) return null;
				var singleValue = selectValue[0];
				return /*#__PURE__*/ import_react.createElement(SingleValue, _extends({}, commonProps, {
					data: singleValue,
					isDisabled
				}), this.formatOptionLabel(singleValue, "value"));
			}
		},
		{
			key: "renderClearIndicator",
			value: function renderClearIndicator() {
				var ClearIndicator = this.getComponents().ClearIndicator;
				var commonProps = this.commonProps;
				var _this$props10 = this.props, isDisabled = _this$props10.isDisabled, isLoading = _this$props10.isLoading;
				var isFocused = this.state.isFocused;
				if (!this.isClearable() || !ClearIndicator || isDisabled || !this.hasValue() || isLoading) return null;
				var innerProps = {
					onMouseDown: this.onClearIndicatorMouseDown,
					onTouchEnd: this.onClearIndicatorTouchEnd,
					"aria-hidden": "true"
				};
				return /*#__PURE__*/ import_react.createElement(ClearIndicator, _extends({}, commonProps, {
					innerProps,
					isFocused
				}));
			}
		},
		{
			key: "renderLoadingIndicator",
			value: function renderLoadingIndicator() {
				var LoadingIndicator = this.getComponents().LoadingIndicator;
				var commonProps = this.commonProps;
				var _this$props11 = this.props, isDisabled = _this$props11.isDisabled, isLoading = _this$props11.isLoading;
				var isFocused = this.state.isFocused;
				if (!LoadingIndicator || !isLoading) return null;
				return /*#__PURE__*/ import_react.createElement(LoadingIndicator, _extends({}, commonProps, {
					innerProps: { "aria-hidden": "true" },
					isDisabled,
					isFocused
				}));
			}
		},
		{
			key: "renderIndicatorSeparator",
			value: function renderIndicatorSeparator() {
				var _this$getComponents5 = this.getComponents(), DropdownIndicator = _this$getComponents5.DropdownIndicator, IndicatorSeparator = _this$getComponents5.IndicatorSeparator;
				if (!DropdownIndicator || !IndicatorSeparator) return null;
				var commonProps = this.commonProps;
				var isDisabled = this.props.isDisabled;
				var isFocused = this.state.isFocused;
				return /*#__PURE__*/ import_react.createElement(IndicatorSeparator, _extends({}, commonProps, {
					isDisabled,
					isFocused
				}));
			}
		},
		{
			key: "renderDropdownIndicator",
			value: function renderDropdownIndicator() {
				var DropdownIndicator = this.getComponents().DropdownIndicator;
				if (!DropdownIndicator) return null;
				var commonProps = this.commonProps;
				var isDisabled = this.props.isDisabled;
				var isFocused = this.state.isFocused;
				var innerProps = {
					onMouseDown: this.onDropdownIndicatorMouseDown,
					onTouchEnd: this.onDropdownIndicatorTouchEnd,
					"aria-hidden": "true"
				};
				return /*#__PURE__*/ import_react.createElement(DropdownIndicator, _extends({}, commonProps, {
					innerProps,
					isDisabled,
					isFocused
				}));
			}
		},
		{
			key: "renderMenu",
			value: function renderMenu() {
				var _this4 = this;
				var _this$getComponents7 = this.getComponents(), Group = _this$getComponents7.Group, GroupHeading = _this$getComponents7.GroupHeading, Menu = _this$getComponents7.Menu, MenuList = _this$getComponents7.MenuList, MenuPortal = _this$getComponents7.MenuPortal, LoadingMessage = _this$getComponents7.LoadingMessage, NoOptionsMessage = _this$getComponents7.NoOptionsMessage, Option = _this$getComponents7.Option;
				var commonProps = this.commonProps;
				var focusedOption = this.state.focusedOption;
				var _this$props12 = this.props, captureMenuScroll = _this$props12.captureMenuScroll, inputValue = _this$props12.inputValue, isLoading = _this$props12.isLoading, loadingMessage = _this$props12.loadingMessage, minMenuHeight = _this$props12.minMenuHeight, maxMenuHeight = _this$props12.maxMenuHeight, menuIsOpen = _this$props12.menuIsOpen, menuPlacement = _this$props12.menuPlacement, menuPosition = _this$props12.menuPosition, menuPortalTarget = _this$props12.menuPortalTarget, menuShouldBlockScroll = _this$props12.menuShouldBlockScroll, menuShouldScrollIntoView = _this$props12.menuShouldScrollIntoView, noOptionsMessage = _this$props12.noOptionsMessage, onMenuScrollToTop = _this$props12.onMenuScrollToTop, onMenuScrollToBottom = _this$props12.onMenuScrollToBottom;
				if (!menuIsOpen) return null;
				var render = function render(props, id) {
					var type = props.type, data = props.data, isDisabled = props.isDisabled, isSelected = props.isSelected, label = props.label, value = props.value;
					var isFocused = focusedOption === data;
					var onHover = isDisabled ? void 0 : function() {
						return _this4.onOptionHover(data);
					};
					var onSelect = isDisabled ? void 0 : function() {
						return _this4.selectOption(data);
					};
					var optionId = "".concat(_this4.getElementId("option"), "-").concat(id);
					var innerProps = {
						id: optionId,
						onClick: onSelect,
						onMouseMove: onHover,
						onMouseOver: onHover,
						tabIndex: -1,
						role: "option",
						"aria-selected": _this4.isAppleDevice ? void 0 : isSelected
					};
					return /*#__PURE__*/ import_react.createElement(Option, _extends({}, commonProps, {
						innerProps,
						data,
						isDisabled,
						isSelected,
						key: optionId,
						label,
						type,
						value,
						isFocused,
						innerRef: isFocused ? _this4.getFocusedOptionRef : void 0
					}), _this4.formatOptionLabel(props.data, "menu"));
				};
				var menuUI;
				if (this.hasOptions()) menuUI = this.getCategorizedOptions().map(function(item) {
					if (item.type === "group") {
						var _data = item.data, options = item.options, groupIndex = item.index;
						var groupId = "".concat(_this4.getElementId("group"), "-").concat(groupIndex);
						var headingId = "".concat(groupId, "-heading");
						return /*#__PURE__*/ import_react.createElement(Group, _extends({}, commonProps, {
							key: groupId,
							data: _data,
							options,
							Heading: GroupHeading,
							headingProps: {
								id: headingId,
								data: item.data
							},
							label: _this4.formatGroupLabel(item.data)
						}), item.options.map(function(option) {
							return render(option, "".concat(groupIndex, "-").concat(option.index));
						}));
					} else if (item.type === "option") return render(item, "".concat(item.index));
				});
				else if (isLoading) {
					var message = loadingMessage({ inputValue });
					if (message === null) return null;
					menuUI = /*#__PURE__*/ import_react.createElement(LoadingMessage, commonProps, message);
				} else {
					var _message = noOptionsMessage({ inputValue });
					if (_message === null) return null;
					menuUI = /*#__PURE__*/ import_react.createElement(NoOptionsMessage, commonProps, _message);
				}
				var menuPlacementProps = {
					minMenuHeight,
					maxMenuHeight,
					menuPlacement,
					menuPosition,
					menuShouldScrollIntoView
				};
				var menuElement = /*#__PURE__*/ import_react.createElement(MenuPlacer, _extends({}, commonProps, menuPlacementProps), function(_ref4) {
					var ref = _ref4.ref, _ref4$placerProps = _ref4.placerProps, placement = _ref4$placerProps.placement, maxHeight = _ref4$placerProps.maxHeight;
					return /*#__PURE__*/ import_react.createElement(Menu, _extends({}, commonProps, menuPlacementProps, {
						innerRef: ref,
						innerProps: {
							onMouseDown: _this4.onMenuMouseDown,
							onMouseMove: _this4.onMenuMouseMove
						},
						isLoading,
						placement
					}), /*#__PURE__*/ import_react.createElement(ScrollManager, {
						captureEnabled: captureMenuScroll,
						onTopArrive: onMenuScrollToTop,
						onBottomArrive: onMenuScrollToBottom,
						lockEnabled: menuShouldBlockScroll
					}, function(scrollTargetRef) {
						return /*#__PURE__*/ import_react.createElement(MenuList, _extends({}, commonProps, {
							innerRef: function innerRef(instance) {
								_this4.getMenuListRef(instance);
								scrollTargetRef(instance);
							},
							innerProps: {
								role: "listbox",
								"aria-multiselectable": commonProps.isMulti,
								id: _this4.getElementId("listbox")
							},
							isLoading,
							maxHeight,
							focusedOption
						}), menuUI);
					}));
				});
				return menuPortalTarget || menuPosition === "fixed" ? /*#__PURE__*/ import_react.createElement(MenuPortal, _extends({}, commonProps, {
					appendTo: menuPortalTarget,
					controlElement: this.controlRef,
					menuPlacement,
					menuPosition
				}), menuElement) : menuElement;
			}
		},
		{
			key: "renderFormField",
			value: function renderFormField() {
				var _this5 = this;
				var _this$props13 = this.props, delimiter = _this$props13.delimiter, isDisabled = _this$props13.isDisabled, isMulti = _this$props13.isMulti, name = _this$props13.name, required = _this$props13.required;
				var selectValue = this.state.selectValue;
				if (required && !this.hasValue() && !isDisabled) return /*#__PURE__*/ import_react.createElement(RequiredInput$1, {
					name,
					onFocus: this.onValueInputFocus
				});
				if (!name || isDisabled) return;
				if (isMulti) if (delimiter) {
					var value = selectValue.map(function(opt) {
						return _this5.getOptionValue(opt);
					}).join(delimiter);
					return /*#__PURE__*/ import_react.createElement("input", {
						name,
						type: "hidden",
						value
					});
				} else {
					var input = selectValue.length > 0 ? selectValue.map(function(opt, i) {
						return /*#__PURE__*/ import_react.createElement("input", {
							key: "i-".concat(i),
							name,
							type: "hidden",
							value: _this5.getOptionValue(opt)
						});
					}) : /*#__PURE__*/ import_react.createElement("input", {
						name,
						type: "hidden",
						value: ""
					});
					return /*#__PURE__*/ import_react.createElement("div", null, input);
				}
				else {
					var _value = selectValue[0] ? this.getOptionValue(selectValue[0]) : "";
					return /*#__PURE__*/ import_react.createElement("input", {
						name,
						type: "hidden",
						value: _value
					});
				}
			}
		},
		{
			key: "renderLiveRegion",
			value: function renderLiveRegion() {
				var commonProps = this.commonProps;
				var _this$state6 = this.state, ariaSelection = _this$state6.ariaSelection, focusedOption = _this$state6.focusedOption, focusedValue = _this$state6.focusedValue, isFocused = _this$state6.isFocused, selectValue = _this$state6.selectValue;
				var focusableOptions = this.getFocusableOptions();
				return /*#__PURE__*/ import_react.createElement(LiveRegion$1, _extends({}, commonProps, {
					id: this.getElementId("live-region"),
					ariaSelection,
					focusedOption,
					focusedValue,
					isFocused,
					selectValue,
					focusableOptions,
					isAppleDevice: this.isAppleDevice
				}));
			}
		},
		{
			key: "render",
			value: function render() {
				var _this$getComponents8 = this.getComponents(), Control = _this$getComponents8.Control, IndicatorsContainer = _this$getComponents8.IndicatorsContainer, SelectContainer = _this$getComponents8.SelectContainer, ValueContainer = _this$getComponents8.ValueContainer;
				var _this$props14 = this.props, className = _this$props14.className, id = _this$props14.id, isDisabled = _this$props14.isDisabled, menuIsOpen = _this$props14.menuIsOpen;
				var isFocused = this.state.isFocused;
				var commonProps = this.commonProps = this.getCommonProps();
				return /*#__PURE__*/ import_react.createElement(SelectContainer, _extends({}, commonProps, {
					className,
					innerProps: {
						id,
						onKeyDown: this.onKeyDown
					},
					isDisabled,
					isFocused
				}), this.renderLiveRegion(), /*#__PURE__*/ import_react.createElement(Control, _extends({}, commonProps, {
					innerRef: this.getControlRef,
					innerProps: {
						onMouseDown: this.onControlMouseDown,
						onTouchEnd: this.onControlTouchEnd
					},
					isDisabled,
					isFocused,
					menuIsOpen
				}), /*#__PURE__*/ import_react.createElement(ValueContainer, _extends({}, commonProps, { isDisabled }), this.renderPlaceholderOrValue(), this.renderInput()), /*#__PURE__*/ import_react.createElement(IndicatorsContainer, _extends({}, commonProps, { isDisabled }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
			}
		}
	], [{
		key: "getDerivedStateFromProps",
		value: function getDerivedStateFromProps(props, state) {
			var prevProps = state.prevProps, clearFocusValueOnUpdate = state.clearFocusValueOnUpdate, inputIsHiddenAfterUpdate = state.inputIsHiddenAfterUpdate, ariaSelection = state.ariaSelection, isFocused = state.isFocused, prevWasFocused = state.prevWasFocused, instancePrefix = state.instancePrefix;
			var options = props.options, value = props.value, menuIsOpen = props.menuIsOpen, inputValue = props.inputValue, isMulti = props.isMulti;
			var selectValue = cleanValue(value);
			var newMenuOptionsState = {};
			if (prevProps && (value !== prevProps.value || options !== prevProps.options || menuIsOpen !== prevProps.menuIsOpen || inputValue !== prevProps.inputValue)) {
				var focusableOptions = menuIsOpen ? buildFocusableOptions(props, selectValue) : [];
				var focusableOptionsWithIds = menuIsOpen ? buildFocusableOptionsWithIds(buildCategorizedOptions(props, selectValue), "".concat(instancePrefix, "-option")) : [];
				var focusedValue = clearFocusValueOnUpdate ? getNextFocusedValue(state, selectValue) : null;
				var focusedOption = getNextFocusedOption(state, focusableOptions);
				newMenuOptionsState = {
					selectValue,
					focusedOption,
					focusedOptionId: getFocusedOptionId(focusableOptionsWithIds, focusedOption),
					focusableOptionsWithIds,
					focusedValue,
					clearFocusValueOnUpdate: false
				};
			}
			var newInputIsHiddenState = inputIsHiddenAfterUpdate != null && props !== prevProps ? {
				inputIsHidden: inputIsHiddenAfterUpdate,
				inputIsHiddenAfterUpdate: void 0
			} : {};
			var newAriaSelection = ariaSelection;
			var hasKeptFocus = isFocused && prevWasFocused;
			if (isFocused && !hasKeptFocus) {
				newAriaSelection = {
					value: valueTernary(isMulti, selectValue, selectValue[0] || null),
					options: selectValue,
					action: "initial-input-focus"
				};
				hasKeptFocus = !prevWasFocused;
			}
			if ((ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === "initial-input-focus") newAriaSelection = null;
			return _objectSpread2(_objectSpread2(_objectSpread2({}, newMenuOptionsState), newInputIsHiddenState), {}, {
				prevProps: props,
				ariaSelection: newAriaSelection,
				prevWasFocused: hasKeptFocus
			});
		}
	}]);
	return Select;
}(import_react.Component);
Select.defaultProps = defaultProps;
//#endregion
//#region node_modules/react-select/dist/react-select.esm.js
var StateManagedSelect$1 = /* @__PURE__ */ (0, import_react.forwardRef)(function(props, ref) {
	var baseSelectProps = useStateManager(props);
	return /*#__PURE__*/ import_react.createElement(Select, _extends({ ref }, baseSelectProps));
});
//#endregion
//#region \0vite/preload-helper.js
var scriptRel = "modulepreload";
var assetsURL = function(dep) {
	return "/" + dep;
};
var seen = {};
var __vitePreload = function preload(baseModule, deps, importerUrl) {
	let promise = Promise.resolve();
	if (deps && deps.length > 0) {
		const links = document.getElementsByTagName("link");
		const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
		const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
		function allSettled(promises) {
			return Promise.all(promises.map((p) => Promise.resolve(p).then((value) => ({
				status: "fulfilled",
				value
			}), (reason) => ({
				status: "rejected",
				reason
			}))));
		}
		function importMetaResolve(specifier) {
			if (import.meta.resolve) return import.meta.resolve(specifier);
			return new URL(specifier, new URL("../../../src/node/plugins/importAnalysisBuild.ts", import.meta.url)).href;
		}
		promise = allSettled(deps.map((dep) => {
			dep = assetsURL(dep, importerUrl);
			dep = importMetaResolve(dep);
			if (dep in seen) return;
			seen[dep] = true;
			const isCss = dep.endsWith(".css");
			for (let i = links.length - 1; i >= 0; i--) {
				const link = links[i];
				if (link.href === dep && (!isCss || link.rel === "stylesheet")) return;
			}
			const link = document.createElement("link");
			link.rel = isCss ? "stylesheet" : scriptRel;
			if (!isCss) link.as = "script";
			link.crossOrigin = "";
			link.href = dep;
			if (cspNonce) link.setAttribute("nonce", cspNonce);
			document.head.appendChild(link);
			if (isCss) return new Promise((res, rej) => {
				link.addEventListener("load", res);
				link.addEventListener("error", () => rej(/* @__PURE__ */ new Error(`Unable to preload CSS for ${dep}`)));
			});
		}));
	}
	function handlePreloadError(err) {
		const e = new Event("vite:preloadError", { cancelable: true });
		e.payload = err;
		window.dispatchEvent(e);
		if (!e.defaultPrevented) throw err;
	}
	return promise.then((res) => {
		for (const item of res || []) {
			if (item.status !== "rejected") continue;
			handlePreloadError(item.reason);
		}
		return baseModule().catch(handlePreloadError);
	});
};
//#endregion
//#region src/components/search/Search.jsx
var Search = ({ categories }) => {
	const { setSearchResult, setLastVisibleDoc, setTotalJobsCount, setIsSearchLoading } = useSearchContext();
	const { searchJobQuery, getJobSingleDetail } = useJobContext();
	const [searchParams, setSearchParams] = useSearchParams();
	const navigate = useNavigate();
	const [locations, setLocations] = (0, import_react.useState)([]);
	const [category, setCategory] = (0, import_react.useState)(searchParams.get("category") || "");
	const [location, setLocation] = (0, import_react.useState)(searchParams.get("jobLocation") || "");
	const [experience, setExperience] = (0, import_react.useState)(searchParams.get("experience") || "");
	const fetchJobLocations = async () => {
		try {
			const { getGlobalLocationOptions } = await __vitePreload(async () => {
				const { getGlobalLocationOptions } = await import("./locationUtils-DwlcyqFV.js");
				return { getGlobalLocationOptions };
			}, []);
			setLocations(getGlobalLocationOptions());
		} catch (error) {
			console.error("Error loading location options:", error);
		}
	};
	const fetchInitialJobs = async () => {
		try {
			setIsSearchLoading(true);
			const queryString = searchParams.toString();
			const result = await searchJobQuery(queryString, null, 20);
			setSearchResult(result?.data || []);
			setLastVisibleDoc(result?.lastDoc || null);
			setTotalJobsCount(result?.totalCount || 0);
		} catch (error) {
			console.error(error);
		} finally {
			setIsSearchLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		fetchJobLocations();
		fetchInitialJobs();
	}, []);
	(0, import_react.useEffect)(() => {
		const params = new URLSearchParams();
		if (category) params.append("category", category);
		if (location) params.append("jobLocation", location);
		if (experience) params.append("experience", experience);
		setSearchParams(params);
	}, [
		category,
		location,
		experience,
		setSearchParams
	]);
	const categoryOptions = categories?.map((category) => ({
		value: category?._id,
		label: category?.title
	})) || [];
	const locationOptions = locations?.map((loc) => ({
		value: loc?.value || loc,
		label: loc?.label || loc
	})) || [];
	const experienceOptions = [
		{
			value: "fresher",
			label: "Fresher"
		},
		{
			value: "1 - 2 years",
			label: "1 - 2 years"
		},
		{
			value: "3 - 5 years",
			label: "3 - 5 years"
		},
		{
			value: "5+ years",
			label: "5+ years"
		}
	];
	const handleSearch = async () => {
		try {
			setIsSearchLoading(true);
			const params = new URLSearchParams();
			if (category) params.append("category", category);
			if (location) params.append("jobLocation", location);
			if (experience) params.append("experience", experience);
			const queryString = params.toString();
			const result = await searchJobQuery(queryString, null, 20);
			setSearchResult(result?.data || []);
			setLastVisibleDoc(result?.lastDoc || null);
			setTotalJobsCount(result?.totalCount || 0);
			navigate("/view-jobs?" + queryString, { replace: true });
		} catch (error) {
			console.error(error);
		} finally {
			setIsSearchLoading(false);
		}
	};
	const handleClear = () => {
		setCategory("");
		setLocation("");
		setExperience("");
		setSearchParams(new URLSearchParams());
	};
	const customSelectStyles = {
		control: (provided, state) => ({
			...provided,
			borderRadius: "8px",
			borderColor: state.isFocused ? "#2563EB" : "#CBD5E1",
			boxShadow: state.isFocused ? "0 0 0 1px #2563EB" : "none",
			"&:hover": { borderColor: state.isFocused ? "#2563EB" : "#94A3B8" },
			padding: "2px",
			fontSize: "14px",
			backgroundColor: "#FFFFFF"
		}),
		option: (provided, state) => ({
			...provided,
			backgroundColor: state.isSelected ? "#2563EB" : state.isFocused ? "#EFF6FF" : "#FFFFFF",
			color: state.isSelected ? "#FFFFFF" : "#1E293B",
			fontSize: "14px",
			cursor: "pointer"
		})
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-white border border-slate-200 p-6 rounded-2xl shadow-sm my-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 md:grid-cols-3 gap-6 items-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "category",
						className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
						children: "Category"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateManagedSelect$1, {
						options: categoryOptions,
						value: categoryOptions?.find((option) => option?.value === category) || null,
						onChange: (selectedOption) => setCategory(selectedOption?.value || ""),
						isClearable: true,
						styles: customSelectStyles,
						placeholder: "Select category..."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "location",
						className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
						children: "Location"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateManagedSelect$1, {
						options: locationOptions,
						value: locationOptions?.find((option) => option?.value === location) || null,
						onChange: (selectedOption) => setLocation(selectedOption?.value || ""),
						isClearable: true,
						styles: customSelectStyles,
						placeholder: "Select location..."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "experience",
						className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
						children: "Experience"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateManagedSelect$1, {
						options: experienceOptions,
						value: experienceOptions?.find((option) => option?.value === experience) || null,
						onChange: (selectedOption) => setExperience(selectedOption?.value || ""),
						isClearable: true,
						styles: customSelectStyles,
						placeholder: "Select experience..."
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex justify-end gap-3 mt-6 pt-4 border-t border-slate-100",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: handleClear,
				className: "px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-sm rounded-lg border-0 transition-colors",
				children: "Clear Filters"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: handleSearch,
				className: "px-6 py-2.5 bg-[#2563EB] hover:bg-blue-700 text-white font-medium text-sm rounded-lg border-0 shadow-sm transition-colors",
				children: "Apply Search"
			})]
		})]
	});
};
//#endregion
//#region node_modules/react-icons/fa/index.mjs
var import_prop_types = /* @__PURE__ */ __toESM(require_prop_types());
function FaGithub(props) {
	return GenIcon({
		"tag": "svg",
		"attr": { "viewBox": "0 0 496 512" },
		"child": [{
			"tag": "path",
			"attr": { "d": "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" },
			"child": []
		}]
	})(props);
}
function FaLinkedin(props) {
	return GenIcon({
		"tag": "svg",
		"attr": { "viewBox": "0 0 448 512" },
		"child": [{
			"tag": "path",
			"attr": { "d": "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" },
			"child": []
		}]
	})(props);
}
function FaTwitter(props) {
	return GenIcon({
		"tag": "svg",
		"attr": { "viewBox": "0 0 512 512" },
		"child": [{
			"tag": "path",
			"attr": { "d": "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" },
			"child": []
		}]
	})(props);
}
function FaAngleDown(props) {
	return GenIcon({
		"tag": "svg",
		"attr": { "viewBox": "0 0 320 512" },
		"child": [{
			"tag": "path",
			"attr": { "d": "M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" },
			"child": []
		}]
	})(props);
}
function FaAngleLeft(props) {
	return GenIcon({
		"tag": "svg",
		"attr": { "viewBox": "0 0 256 512" },
		"child": [{
			"tag": "path",
			"attr": { "d": "M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" },
			"child": []
		}]
	})(props);
}
function FaAngleRight(props) {
	return GenIcon({
		"tag": "svg",
		"attr": { "viewBox": "0 0 256 512" },
		"child": [{
			"tag": "path",
			"attr": { "d": "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" },
			"child": []
		}]
	})(props);
}
function FaBook(props) {
	return GenIcon({
		"tag": "svg",
		"attr": { "viewBox": "0 0 448 512" },
		"child": [{
			"tag": "path",
			"attr": { "d": "M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z" },
			"child": []
		}]
	})(props);
}
function FaChevronLeft(props) {
	return GenIcon({
		"tag": "svg",
		"attr": { "viewBox": "0 0 320 512" },
		"child": [{
			"tag": "path",
			"attr": { "d": "M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" },
			"child": []
		}]
	})(props);
}
function FaChevronRight(props) {
	return GenIcon({
		"tag": "svg",
		"attr": { "viewBox": "0 0 320 512" },
		"child": [{
			"tag": "path",
			"attr": { "d": "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" },
			"child": []
		}]
	})(props);
}
function FaCircleNotch(props) {
	return GenIcon({
		"tag": "svg",
		"attr": { "viewBox": "0 0 512 512" },
		"child": [{
			"tag": "path",
			"attr": { "d": "M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z" },
			"child": []
		}]
	})(props);
}
function FaEnvelope(props) {
	return GenIcon({
		"tag": "svg",
		"attr": { "viewBox": "0 0 512 512" },
		"child": [{
			"tag": "path",
			"attr": { "d": "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" },
			"child": []
		}]
	})(props);
}
function FaHandHoldingUsd(props) {
	return GenIcon({
		"tag": "svg",
		"attr": { "viewBox": "0 0 576 512" },
		"child": [{
			"tag": "path",
			"attr": { "d": "M271.06,144.3l54.27,14.3a8.59,8.59,0,0,1,6.63,8.1c0,4.6-4.09,8.4-9.12,8.4h-35.6a30,30,0,0,1-11.19-2.2c-5.24-2.2-11.28-1.7-15.3,2l-19,17.5a11.68,11.68,0,0,0-2.25,2.66,11.42,11.42,0,0,0,3.88,15.74,83.77,83.77,0,0,0,34.51,11.5V240c0,8.8,7.83,16,17.37,16h17.37c9.55,0,17.38-7.2,17.38-16V222.4c32.93-3.6,57.84-31,53.5-63-3.15-23-22.46-41.3-46.56-47.7L282.68,97.4a8.59,8.59,0,0,1-6.63-8.1c0-4.6,4.09-8.4,9.12-8.4h35.6A30,30,0,0,1,332,83.1c5.23,2.2,11.28,1.7,15.3-2l19-17.5A11.31,11.31,0,0,0,368.47,61a11.43,11.43,0,0,0-3.84-15.78,83.82,83.82,0,0,0-34.52-11.5V16c0-8.8-7.82-16-17.37-16H295.37C285.82,0,278,7.2,278,16V33.6c-32.89,3.6-57.85,31-53.51,63C227.63,119.6,247,137.9,271.06,144.3ZM565.27,328.1c-11.8-10.7-30.2-10-42.6,0L430.27,402a63.64,63.64,0,0,1-40,14H272a16,16,0,0,1,0-32h78.29c15.9,0,30.71-10.9,33.25-26.6a31.2,31.2,0,0,0,.46-5.46A32,32,0,0,0,352,320H192a117.66,117.66,0,0,0-74.1,26.29L71.4,384H16A16,16,0,0,0,0,400v96a16,16,0,0,0,16,16H372.77a64,64,0,0,0,40-14L564,377a32,32,0,0,0,1.28-48.9Z" },
			"child": []
		}]
	})(props);
}
function FaLink(props) {
	return GenIcon({
		"tag": "svg",
		"attr": { "viewBox": "0 0 512 512" },
		"child": [{
			"tag": "path",
			"attr": { "d": "M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z" },
			"child": []
		}]
	})(props);
}
function FaPhone(props) {
	return GenIcon({
		"tag": "svg",
		"attr": { "viewBox": "0 0 512 512" },
		"child": [{
			"tag": "path",
			"attr": { "d": "M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" },
			"child": []
		}]
	})(props);
}
function FaSuitcase(props) {
	return GenIcon({
		"tag": "svg",
		"attr": { "viewBox": "0 0 512 512" },
		"child": [{
			"tag": "path",
			"attr": { "d": "M128 480h256V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v400zm64-384h128v32H192V96zm320 80v256c0 26.5-21.5 48-48 48h-48V128h48c26.5 0 48 21.5 48 48zM96 480H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h48v352z" },
			"child": []
		}]
	})(props);
}
function FaUsers(props) {
	return GenIcon({
		"tag": "svg",
		"attr": { "viewBox": "0 0 640 512" },
		"child": [{
			"tag": "path",
			"attr": { "d": "M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" },
			"child": []
		}]
	})(props);
}
function FaRegEye(props) {
	return GenIcon({
		"tag": "svg",
		"attr": { "viewBox": "0 0 576 512" },
		"child": [{
			"tag": "path",
			"attr": { "d": "M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z" },
			"child": []
		}]
	})(props);
}
//#endregion
//#region src/components/dropdown/Dropdown.jsx
var Dropdown = ({ options, placeholder, dismiss }) => {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const dropdownRef = (0, import_react.useRef)(null);
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setIsOpen(false);
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);
	const handleOptionSelect = (path) => {
		navigate(path);
		setIsOpen(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dropdown",
		ref: dropdownRef,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "dropdown-header flex items-center justify-between gap-2 nav-link text-dark",
			onClick: () => setIsOpen(!isOpen),
			children: [
				placeholder,
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaAngleDown, {})
			]
		}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "dropdown-list lg:absolute",
			children: options.map((option, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "dropdown-item nav-link",
				onClick: () => handleOptionSelect(option.path),
				"data-bs-dismiss": dismiss,
				children: option.label
			}, index))
		})]
	});
};
Dropdown.propTypes = {
	options: import_prop_types.default.arrayOf(import_prop_types.default.shape({
		label: import_prop_types.default.string.isRequired,
		path: import_prop_types.default.string.isRequired
	})).isRequired,
	placeholder: import_prop_types.default.string
};
Dropdown.defaultProps = { placeholder: "Select an option" };
//#endregion
//#region src/components/tabs/TabMenu.jsx
var TabMenu = ({ tabs, children }) => {
	const [activeTab, setActiveTab] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "nav gap-3",
			children: tabs.map((tab, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: index === activeTab ? "border-b-4 border-primary py-2 px-3 capitalize" : "py-2 px-3 capitalize",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "capitalize",
					onClick: () => setActiveTab(index),
					children: tab
				})
			}, index))
		}), children[activeTab]]
	});
};
//#endregion
//#region src/components/modal/ModalBox.jsx
var ModalBox = ({ closeModal, children }) => {
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "scroll";
		};
	}, []);
	const handleModalClick = (e) => {
		e.stopPropagation();
	};
	return import_react_dom.createPortal(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "modal-wrapper container-fluid",
		onClick: closeModal,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "modal-container",
			onClick: handleModalClick,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "modal-content",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "close-button ",
					onClick: closeModal,
					children: "×"
				}), children]
			})
		})
	}) }), document.querySelector(".modalBox"));
};
//#endregion
//#region src/components/form/TextInput.jsx
var TextInput = ({ type = "text", placeholder, value, onChange, className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		placeholder,
		value,
		onChange,
		...props,
		className: `w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all duration-200 ${className || ""}`
	});
};
//#endregion
//#region src/components/form/SelectInput.jsx
var SelectInput = ({ options, value, onChange, className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
		value,
		onChange,
		...props,
		className: `w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all duration-200 cursor-pointer ${className || ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: "",
			disabled: true,
			children: "Choose option..."
		}), options.map((option, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: option.value,
			children: option.label
		}, index))]
	});
};
//#endregion
//#region src/components/loader/CircularLoader.jsx
var CircularLoader = () => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-white/[0.8] flex justify-center items-center z-50 left-0 top-0 absolute h-full w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaCircleNotch, {
			className: "animate-spin h-10 w-10 mr-3",
			size: 40,
			color: "#50b5ff"
		})
	});
};
//#endregion
//#region src/components/pagination/Pagination.jsx
function Pagination({ totalItems, itemsPerPage, onPageChange }) {
	const [currentPage, setCurrentPage] = (0, import_react.useState)(1);
	const totalPages = Math.ceil(totalItems / itemsPerPage);
	const onNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
			onPageChange(currentPage + 1);
		}
	};
	const onPrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
			onPageChange(currentPage - 1);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center  justify-end me-3 gap-2 py-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-semibold flex items-center gap-3",
				children: [
					"Page",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "btn font-semibold outline rounded-none",
						children: `${currentPage}`
					}),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "of" }),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "btn font-semibold rounded-none",
						children: `${totalPages}`
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "btn-main",
				onClick: onPrevPage,
				disabled: currentPage === 1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaChevronLeft, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "btn-main",
				onClick: onNextPage,
				disabled: currentPage === totalPages,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaChevronRight, {}), " "]
			})
		]
	});
}
//#endregion
//#region src/components/slider/MultiCarousal.jsx
var MultiCarousal = ({ children }) => {
	const scrollRef = (0, import_react.useRef)(null);
	const slideLeft = () => {
		if (scrollRef.current) scrollRef.current.scrollBy({
			left: -200,
			behavior: "smooth"
		});
	};
	const slideRight = () => {
		if (scrollRef.current) scrollRef.current.scrollBy({
			left: 200,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "z-100 py-2 hidden w-full sm:flex",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "justify-left md:justify-left container mx-auto flex px-6 lg:justify-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					onClick: slideLeft,
					className: "flex w-auto cursor-pointer self-center pr-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaAngleLeft, {
						size: 20,
						color: "white"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: scrollRef,
					className: "relative inline-block h-full w-full items-center gap-4 overflow-x-auto scroll-smooth whitespace-nowrap py-2 text-sm font-medium lg:flex lg:justify-between no-scrollbar",
					children
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					onClick: slideRight,
					className: "flex w-auto cursor-pointer self-center pl-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaAngleRight, {
						size: 20,
						color: "white"
					})
				})
			]
		})
	});
};
//#endregion
//#region src/components/footer/Footer.jsx
var Footer = () => {
	const { siteConfig } = useBrandContext();
	(/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-4 gap-10 mb-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
								className: "text-white text-lg font-semibold tracking-wide",
								children: [siteConfig.logoTextPrimary, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#2563EB]",
									children: siteConfig.logoTextSecondary
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-slate-400 leading-relaxed",
								children: "Matching awesome talent with awesome jobs around the world. Prove your skills and unlock opportunities."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-4 pt-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#",
										className: "text-slate-400 hover:text-white transition-colors",
										"aria-label": "LinkedIn",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaLinkedin, { size: 20 })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#",
										className: "text-slate-400 hover:text-white transition-colors",
										"aria-label": "GitHub",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaGithub, { size: 20 })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#",
										className: "text-slate-400 hover:text-white transition-colors",
										"aria-label": "Twitter",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaTwitter, { size: 20 })
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
						className: "text-white font-semibold text-sm uppercase tracking-wider mb-4",
						children: "Job Seekers"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2.5 list-none p-0 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/view-jobs",
								className: "text-slate-400 hover:text-white transition-colors no-underline",
								children: "Browse Jobs"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/view-profile",
								className: "text-slate-400 hover:text-white transition-colors no-underline",
								children: "My Profile"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/view-applications",
								className: "text-slate-400 hover:text-white transition-colors no-underline",
								children: "Applied Jobs"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
						className: "text-white font-semibold text-sm uppercase tracking-wider mb-4",
						children: "Employers"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2.5 list-none p-0 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/add-job",
							className: "text-slate-400 hover:text-white transition-colors no-underline",
							children: "Post a Job"
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/register",
							className: "text-slate-400 hover:text-white transition-colors no-underline",
							children: "Create Employer Account"
						}) })]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
						className: "text-white font-semibold text-sm uppercase tracking-wider mb-4",
						children: "Company"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2.5 list-none p-0 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about-us",
								className: "text-slate-400 hover:text-white transition-colors no-underline",
								children: "About Us"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact-us",
								className: "text-slate-400 hover:text-white transition-colors no-underline",
								children: "Contact Us"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2 text-slate-400 mt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaEnvelope, {
									size: 14,
									className: "text-slate-500"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: siteConfig.contactEmail })]
							})
						]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-slate-500 mb-0",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ",
						siteConfig.appName,
						". All rights reserved. Powered by ",
						siteConfig.companyName,
						"."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-6 text-xs text-slate-500",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "hover:text-slate-400 transition-colors no-underline",
						children: "Privacy Policy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "hover:text-slate-400 transition-colors no-underline",
						children: "Terms of Service"
					})]
				})]
			})]
		})
	});
};
//#endregion
//#region src/routes/SharedLayout.jsx
var SharedLayout = () => {
	const [loadingData, setLoadingData] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setLoadingData(true);
		const id = setTimeout(() => {
			setLoadingData(false);
		}, 1e3);
		return () => {
			clearTimeout(id);
		};
	}, []);
	if (loadingData) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircularLoader, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "hr bg-slate-200" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
};
//#endregion
//#region src/routes/EmployerLayout.jsx
var EmployerLayout = () => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})] });
};
//#endregion
//#region src/routes/RequiresAuth.jsx
var RequiresAuth = () => {
	const location = useLocation();
	const { token } = useAuthContext();
	return token ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/login",
		state: { from: location }
	});
};
//#endregion
//#region src/routes/privateRoutes.jsx
var CategorySectionTab = import_react.lazy(() => __vitePreload(() => import("./CategorySectionTab-ghH7Qmrx.js"), __vite__mapDeps([0,1,2,3,4])));
var AddJobForm = import_react.lazy(() => __vitePreload(() => import("./AddJobForm-BYitW1zw.js"), __vite__mapDeps([5,1,2,6])));
var ViewCategory = import_react.lazy(() => __vitePreload(() => import("./ViewCategory-B1vxEKk3.js"), __vite__mapDeps([3,1,4])));
var EmployerProfile = import_react.lazy(() => __vitePreload(() => import("./EmployerProfile-8zNzD94J.js").then((n) => n.n), __vite__mapDeps([7,1,8,9,2,6,10,11])));
var AccountSettings = import_react.lazy(() => __vitePreload(() => import("./AccountSettings--VmkCFte.js"), __vite__mapDeps([12,1])));
var ViewJob = import_react.lazy(() => __vitePreload(() => import("./ViewJob-TaukkpnW.js").then((n) => n.n), __vite__mapDeps([13,1,4])));
var AppliedJobs = import_react.lazy(() => __vitePreload(() => import("./AppliedJobs-CbWBQr7G.js").then((n) => n.n), __vite__mapDeps([14,1,9,8,15])));
var EmployeeProfile = import_react.lazy(() => __vitePreload(() => import("./EmployeeProfile-vS9fvaYH.js").then((n) => n.t), __vite__mapDeps([16,1,8,9,4,11,17])));
var EmployeeAppliedJobs = import_react.lazy(() => __vitePreload(() => import("./EmployeeAppliedJobs-C5_wZNoM.js"), __vite__mapDeps([18,1])));
import_react.lazy(() => __vitePreload(() => import("./AdminHome-K2P97Wu1.js"), __vite__mapDeps([19,1])));
var employerRoutes = [
	{
		path: "/add-category",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategorySectionTab, {})
	},
	{
		path: "/add-job",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddJobForm, {})
	},
	{
		path: "/view-applications",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ViewCategory, {})
	},
	{
		path: "/view-profile",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmployerProfile, {})
	},
	{
		path: "/account-settings",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountSettings, {})
	},
	{
		path: "/view-my-applications",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ViewJob, {})
	},
	{
		path: "/recieved-applications",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppliedJobs, {})
	}
];
var employeeRoutes = [{
	path: "/view-profile",
	element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmployeeProfile, {})
}, {
	path: "/view-applications",
	element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmployeeAppliedJobs, {})
}];
//#endregion
//#region src/routes/EmployeeLayout.jsx
var EmployeeLayout = () => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "hr bg-slate-200" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
};
//#endregion
//#region src/routes/publicRoutes.jsx
var Login = import_react.lazy(() => __vitePreload(() => import("./Login-DKD9_7yQ.js").then((n) => n.t), __vite__mapDeps([20,1])));
var Signup = import_react.lazy(() => __vitePreload(() => import("./Signup-DE7UyEq7.js").then((n) => n.t), __vite__mapDeps([21,1,8,9,10,22])));
var ForgotPassword = import_react.lazy(() => __vitePreload(() => import("./ForgotPassword-BokP0CTS.js").then((n) => n.t), __vite__mapDeps([23,1])));
var ResetPassword = import_react.lazy(() => __vitePreload(() => import("./ResetPassword--f4RYxfR.js").then((n) => n.t), __vite__mapDeps([24,1])));
var VerifyOtp = import_react.lazy(() => __vitePreload(() => import("./VerifyOtp-CLGpT9xu.js").then((n) => n.t), __vite__mapDeps([25,1,22])));
var Aboutus = import_react.lazy(() => __vitePreload(() => import("./Aboutus-TrwhCTVv.js"), __vite__mapDeps([26,1])));
var AllJobs = import_react.lazy(() => __vitePreload(() => import("./AllJobs-DRmP8Pt2.js"), __vite__mapDeps([27,1,28,4,20,21,8,9,10,22,29,7,2,6,11,16,17,23,24,25,30,14,15,13])));
var JobDetailPage = import_react.lazy(() => __vitePreload(() => import("./JobDetailPage-jzykG-Yh.js"), __vite__mapDeps([31,1,29,17])));
var ContactUs = import_react.lazy(() => __vitePreload(() => import("./ContactUs-BuF965uG.js"), __vite__mapDeps([32,1,9,8,33])));
var authRoutes = [
	{
		path: "/login",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Login, {})
	},
	{
		path: "/register",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Signup, {})
	},
	{
		path: "/forgot-password",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForgotPassword, {})
	},
	{
		path: "/reset-password",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResetPassword, {})
	},
	{
		path: "/verify-otp",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerifyOtp, {})
	}
];
var ContentRoutes = [
	{
		path: "/view-jobs",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AllJobs, {})
	},
	{
		path: "/view-jobs/:category",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AllJobs, {})
	},
	{
		path: "/search-product/:category/:location/:experience",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AllJobs, {})
	},
	{
		path: "/view-jobs-detail/:title",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JobDetailPage, {})
	},
	{
		path: "/about-us",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Aboutus, {})
	},
	{
		path: "/contact-us",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactUs, {})
	}
];
//#endregion
//#region src/routes/AdminLayout.jsx
var AdminLayout = () => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) });
};
//#endregion
//#region src/routes/index.jsx
var Home = import_react.lazy(() => __vitePreload(() => import("./Home-DkfGNrGl.js"), __vite__mapDeps([34,1,15,29,35])));
var EmployeHome = import_react.lazy(() => __vitePreload(() => import("./EmployeHome-n83j9Yy7.js"), __vite__mapDeps([36,1,13,4,28,20,21,8,9,10,22,29,7,2,6,11,16,17,23,24,25,30,14,15])));
var AdminHome = import_react.lazy(() => __vitePreload(() => import("./AdminHome-K2P97Wu1.js"), __vite__mapDeps([19,1])));
var BrandSettings = import_react.lazy(() => __vitePreload(() => import("./BrandSettings-_AzipnAo.js"), __vite__mapDeps([37,1])));
var Dashboard = import_react.lazy(() => __vitePreload(() => import("./Dashboard-nvWeke1t.js").then((n) => n.t), __vite__mapDeps([30,1,9,8,14,15,13,4,7,2,6,10,11])));
var Error$1 = import_react.lazy(() => __vitePreload(() => import("./Error-smG-5QJn.js"), __vite__mapDeps([38,1])));
var Index = () => {
	const { token, role, isCheckingAuth } = useAuthContext();
	if (isCheckingAuth) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircularLoader, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
		fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircularLoader, {}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Routes, { children: [
			role === "admin" && token ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
				element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmployerLayout, {}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Route, {
					element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequiresAuth, {}),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
							path: "/",
							element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dashboard, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
							path: "/register",
							element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
								to: "/",
								replace: true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
							path: "/login",
							element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
								to: "/",
								replace: true
							})
						}),
						employerRoutes.map((route, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
							path: route.path,
							element: route.element
						}, idx))
					]
				})
			}) : role === "user" && token ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Route, {
				element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmployeeLayout, {}),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmployeHome, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/register",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
							to: "/",
							replace: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: "/login",
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
							to: "/",
							replace: true
						})
					}),
					ContentRoutes?.map((route, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						path: route.path,
						element: route.element
					}, idx)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequiresAuth, {}),
						children: employeeRoutes?.map((route, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
							path: route.path,
							element: route.element
						}, idx))
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Route, {
				element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SharedLayout, {}),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
					path: "/",
					element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Home, {})
				}), ContentRoutes?.map((route, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
					path: route.path,
					element: route.element
				}, idx))]
			}), authRoutes?.map((route, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
				path: route.path,
				element: route.element
			}, idx))] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
				path: "*",
				element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Error$1, {})
			}),
			role === "superadmin" && token ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Route, {
				element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminLayout, {}),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
					path: "admin-dashboard",
					element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminHome, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
					path: "brand-settings",
					element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandSettings, {})
				})]
			}) : null
		] })
	});
};
//#endregion
//#region src/App.jsx
function App() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ie, { autoClose: 2e3 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Index, {})] });
}
//#endregion
//#region src/reportWebVitals.js
var reportWebVitals = (onPerfEntry) => {
	if (onPerfEntry && onPerfEntry instanceof Function) __vitePreload(async () => {
		const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import("./web-vitals-B3ydGGe8.js");
		return {
			getCLS,
			getFID,
			getFCP,
			getLCP,
			getTTFB
		};
	}, []).then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
		getCLS(onPerfEntry);
		getFID(onPerfEntry);
		getFCP(onPerfEntry);
		getLCP(onPerfEntry);
		getTTFB(onPerfEntry);
	});
};
//#endregion
//#region src/components/ErrorBoundary.jsx
var ErrorBoundary = class extends import_react.Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false,
			error: null
		};
	}
	static getDerivedStateFromError(error) {
		return {
			hasError: true,
			error
		};
	}
	componentDidCatch(error, errorInfo) {
		console.error("Uncaught error:", error, errorInfo);
	}
	render() {
		if (this.state.hasError) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				padding: "40px",
				textAlign: "center",
				fontFamily: "sans-serif"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					style: { color: "#E11D48" },
					children: "Oops, something went wrong!"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					style: {
						color: "#475569",
						marginBottom: "20px"
					},
					children: "We encountered an unexpected error while rendering this page."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						background: "#F1F5F9",
						padding: "15px",
						borderRadius: "8px",
						display: "inline-block",
						textAlign: "left",
						maxWidth: "600px",
						overflow: "auto"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: this.state.error?.toString() })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => window.location.reload(),
					style: {
						padding: "10px 20px",
						background: "#2563EB",
						color: "white",
						border: "none",
						borderRadius: "5px",
						cursor: "pointer"
					},
					children: "Reload Page"
				})
			]
		});
		return this.props.children;
	}
};
//#endregion
//#region node_modules/react-fast-compare/index.js
var require_react_fast_compare = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var hasElementType = typeof Element !== "undefined";
	var hasMap = typeof Map === "function";
	var hasSet = typeof Set === "function";
	var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
	function equal(a, b) {
		if (a === b) return true;
		if (a && b && typeof a == "object" && typeof b == "object") {
			if (a.constructor !== b.constructor) return false;
			var length, i, keys;
			if (Array.isArray(a)) {
				length = a.length;
				if (length != b.length) return false;
				for (i = length; i-- !== 0;) if (!equal(a[i], b[i])) return false;
				return true;
			}
			var it;
			if (hasMap && a instanceof Map && b instanceof Map) {
				if (a.size !== b.size) return false;
				it = a.entries();
				while (!(i = it.next()).done) if (!b.has(i.value[0])) return false;
				it = a.entries();
				while (!(i = it.next()).done) if (!equal(i.value[1], b.get(i.value[0]))) return false;
				return true;
			}
			if (hasSet && a instanceof Set && b instanceof Set) {
				if (a.size !== b.size) return false;
				it = a.entries();
				while (!(i = it.next()).done) if (!b.has(i.value[0])) return false;
				return true;
			}
			if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
				length = a.length;
				if (length != b.length) return false;
				for (i = length; i-- !== 0;) if (a[i] !== b[i]) return false;
				return true;
			}
			if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
			if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === "function" && typeof b.valueOf === "function") return a.valueOf() === b.valueOf();
			if (a.toString !== Object.prototype.toString && typeof a.toString === "function" && typeof b.toString === "function") return a.toString() === b.toString();
			keys = Object.keys(a);
			length = keys.length;
			if (length !== Object.keys(b).length) return false;
			for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
			if (hasElementType && a instanceof Element) return false;
			for (i = length; i-- !== 0;) {
				if ((keys[i] === "_owner" || keys[i] === "__v" || keys[i] === "__o") && a.$$typeof) continue;
				if (!equal(a[keys[i]], b[keys[i]])) return false;
			}
			return true;
		}
		return a !== a && b !== b;
	}
	module.exports = function isEqual(a, b) {
		try {
			return equal(a, b);
		} catch (error) {
			if ((error.message || "").match(/stack|recursion/i)) {
				console.warn("react-fast-compare cannot handle circular refs");
				return false;
			}
			throw error;
		}
	};
}));
//#endregion
//#region node_modules/invariant/browser.js
/**
* Copyright (c) 2013-present, Facebook, Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_browser = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Use invariant() to assert state which your program assumes to be true.
	*
	* Provide sprintf-style format (only %s is supported) and arguments
	* to provide information about what broke and what you were
	* expecting.
	*
	* The invariant message will be stripped in production, but the invariant
	* will remain to ensure logic does not differ in production.
	*/
	var invariant = function(condition, format, a, b, c, d, e, f) {
		if (!condition) {
			var error;
			if (format === void 0) error = /* @__PURE__ */ new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
			else {
				var args = [
					a,
					b,
					c,
					d,
					e,
					f
				];
				var argIndex = 0;
				error = new Error(format.replace(/%s/g, function() {
					return args[argIndex++];
				}));
				error.name = "Invariant Violation";
			}
			error.framesToPop = 1;
			throw error;
		}
	};
	module.exports = invariant;
}));
//#endregion
//#region node_modules/shallowequal/index.js
var require_shallowequal = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function shallowEqual(objA, objB, compare, compareContext) {
		var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
		if (ret !== void 0) return !!ret;
		if (objA === objB) return true;
		if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) return false;
		var keysA = Object.keys(objA);
		var keysB = Object.keys(objB);
		if (keysA.length !== keysB.length) return false;
		var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
		for (var idx = 0; idx < keysA.length; idx++) {
			var key = keysA[idx];
			if (!bHasOwnProperty(key)) return false;
			var valueA = objA[key];
			var valueB = objB[key];
			ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
			if (ret === false || ret === void 0 && valueA !== valueB) return false;
		}
		return true;
	};
}));
//#endregion
//#region node_modules/react-helmet-async/lib/index.esm.js
var import_react_fast_compare = /* @__PURE__ */ __toESM(require_react_fast_compare());
var import_browser = /* @__PURE__ */ __toESM(require_browser());
var import_shallowequal = /* @__PURE__ */ __toESM(require_shallowequal());
var TAG_NAMES = /* @__PURE__ */ ((TAG_NAMES2) => {
	TAG_NAMES2["BASE"] = "base";
	TAG_NAMES2["BODY"] = "body";
	TAG_NAMES2["HEAD"] = "head";
	TAG_NAMES2["HTML"] = "html";
	TAG_NAMES2["LINK"] = "link";
	TAG_NAMES2["META"] = "meta";
	TAG_NAMES2["NOSCRIPT"] = "noscript";
	TAG_NAMES2["SCRIPT"] = "script";
	TAG_NAMES2["STYLE"] = "style";
	TAG_NAMES2["TITLE"] = "title";
	TAG_NAMES2["FRAGMENT"] = "Symbol(react.fragment)";
	return TAG_NAMES2;
})(TAG_NAMES || {});
var SEO_PRIORITY_TAGS = {
	link: { rel: [
		"amphtml",
		"canonical",
		"alternate"
	] },
	script: { type: ["application/ld+json"] },
	meta: {
		charset: "",
		name: [
			"generator",
			"robots",
			"description"
		],
		property: [
			"og:type",
			"og:title",
			"og:url",
			"og:image",
			"og:image:alt",
			"og:description",
			"twitter:url",
			"twitter:title",
			"twitter:description",
			"twitter:image",
			"twitter:image:alt",
			"twitter:card",
			"twitter:site"
		]
	}
};
var VALID_TAG_NAMES = Object.values(TAG_NAMES);
var REACT_TAG_MAP = {
	accesskey: "accessKey",
	charset: "charSet",
	class: "className",
	contenteditable: "contentEditable",
	contextmenu: "contextMenu",
	"http-equiv": "httpEquiv",
	itemprop: "itemProp",
	tabindex: "tabIndex"
};
var HTML_TAG_MAP = Object.entries(REACT_TAG_MAP).reduce((carry, [key, value]) => {
	carry[value] = key;
	return carry;
}, {});
var HELMET_ATTRIBUTE = "data-rh";
var HELMET_PROPS = {
	DEFAULT_TITLE: "defaultTitle",
	DEFER: "defer",
	ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
	ON_CHANGE_CLIENT_STATE: "onChangeClientState",
	TITLE_TEMPLATE: "titleTemplate",
	PRIORITIZE_SEO_TAGS: "prioritizeSeoTags"
};
var getInnermostProperty = (propsList, property) => {
	for (let i = propsList.length - 1; i >= 0; i -= 1) {
		const props = propsList[i];
		if (Object.prototype.hasOwnProperty.call(props, property)) return props[property];
	}
	return null;
};
var getTitleFromPropsList = (propsList) => {
	let innermostTitle = getInnermostProperty(propsList, "title");
	const innermostTemplate = getInnermostProperty(propsList, HELMET_PROPS.TITLE_TEMPLATE);
	if (Array.isArray(innermostTitle)) innermostTitle = innermostTitle.join("");
	if (innermostTemplate && innermostTitle) return innermostTemplate.replace(/%s/g, () => innermostTitle);
	const innermostDefaultTitle = getInnermostProperty(propsList, HELMET_PROPS.DEFAULT_TITLE);
	return innermostTitle || innermostDefaultTitle || void 0;
};
var getOnChangeClientState = (propsList) => getInnermostProperty(propsList, HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || (() => {});
var getAttributesFromPropsList = (tagType, propsList) => propsList.filter((props) => typeof props[tagType] !== "undefined").map((props) => props[tagType]).reduce((tagAttrs, current) => ({
	...tagAttrs,
	...current
}), {});
var getBaseTagFromPropsList = (primaryAttributes, propsList) => propsList.filter((props) => typeof props["base"] !== "undefined").map((props) => props["base"]).reverse().reduce((innermostBaseTag, tag) => {
	if (!innermostBaseTag.length) {
		const keys = Object.keys(tag);
		for (let i = 0; i < keys.length; i += 1) {
			const lowerCaseAttributeKey = keys[i].toLowerCase();
			if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) return innermostBaseTag.concat(tag);
		}
	}
	return innermostBaseTag;
}, []);
var warn = (msg) => console && typeof console.warn === "function" && console.warn(msg);
var getTagsFromPropsList = (tagName, primaryAttributes, propsList) => {
	const approvedSeenTags = {};
	return propsList.filter((props) => {
		if (Array.isArray(props[tagName])) return true;
		if (typeof props[tagName] !== "undefined") warn(`Helmet: ${tagName} should be of type "Array". Instead found type "${typeof props[tagName]}"`);
		return false;
	}).map((props) => props[tagName]).reverse().reduce((approvedTags, instanceTags) => {
		const instanceSeenTags = {};
		instanceTags.filter((tag) => {
			let primaryAttributeKey;
			const keys2 = Object.keys(tag);
			for (let i = 0; i < keys2.length; i += 1) {
				const attributeKey = keys2[i];
				const lowerCaseAttributeKey = attributeKey.toLowerCase();
				if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === "rel" && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === "rel" && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) primaryAttributeKey = lowerCaseAttributeKey;
				if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === "innerHTML" || attributeKey === "cssText" || attributeKey === "itemprop")) primaryAttributeKey = attributeKey;
			}
			if (!primaryAttributeKey || !tag[primaryAttributeKey]) return false;
			const value = tag[primaryAttributeKey].toLowerCase();
			if (!approvedSeenTags[primaryAttributeKey]) approvedSeenTags[primaryAttributeKey] = {};
			if (!instanceSeenTags[primaryAttributeKey]) instanceSeenTags[primaryAttributeKey] = {};
			if (!approvedSeenTags[primaryAttributeKey][value]) {
				instanceSeenTags[primaryAttributeKey][value] = true;
				return true;
			}
			return false;
		}).reverse().forEach((tag) => approvedTags.push(tag));
		const keys = Object.keys(instanceSeenTags);
		for (let i = 0; i < keys.length; i += 1) {
			const attributeKey = keys[i];
			const tagUnion = {
				...approvedSeenTags[attributeKey],
				...instanceSeenTags[attributeKey]
			};
			approvedSeenTags[attributeKey] = tagUnion;
		}
		return approvedTags;
	}, []).reverse();
};
var getAnyTrueFromPropsList = (propsList, checkedTag) => {
	if (Array.isArray(propsList) && propsList.length) {
		for (let index = 0; index < propsList.length; index += 1) if (propsList[index][checkedTag]) return true;
	}
	return false;
};
var reducePropsToState = (propsList) => ({
	baseTag: getBaseTagFromPropsList(["href"], propsList),
	bodyAttributes: getAttributesFromPropsList("bodyAttributes", propsList),
	defer: getInnermostProperty(propsList, HELMET_PROPS.DEFER),
	encode: getInnermostProperty(propsList, HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
	htmlAttributes: getAttributesFromPropsList("htmlAttributes", propsList),
	linkTags: getTagsFromPropsList("link", ["rel", "href"], propsList),
	metaTags: getTagsFromPropsList("meta", [
		"name",
		"charset",
		"http-equiv",
		"property",
		"itemprop"
	], propsList),
	noscriptTags: getTagsFromPropsList("noscript", ["innerHTML"], propsList),
	onChangeClientState: getOnChangeClientState(propsList),
	scriptTags: getTagsFromPropsList("script", ["src", "innerHTML"], propsList),
	styleTags: getTagsFromPropsList("style", ["cssText"], propsList),
	title: getTitleFromPropsList(propsList),
	titleAttributes: getAttributesFromPropsList("titleAttributes", propsList),
	prioritizeSeoTags: getAnyTrueFromPropsList(propsList, HELMET_PROPS.PRIORITIZE_SEO_TAGS)
});
var flattenArray = (possibleArray) => Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
var checkIfPropsMatch = (props, toMatch) => {
	const keys = Object.keys(props);
	for (let i = 0; i < keys.length; i += 1) if (toMatch[keys[i]] && toMatch[keys[i]].includes(props[keys[i]])) return true;
	return false;
};
var prioritizer = (elementsList, propsToMatch) => {
	if (Array.isArray(elementsList)) return elementsList.reduce((acc, elementAttrs) => {
		if (checkIfPropsMatch(elementAttrs, propsToMatch)) acc.priority.push(elementAttrs);
		else acc.default.push(elementAttrs);
		return acc;
	}, {
		priority: [],
		default: []
	});
	return {
		default: elementsList,
		priority: []
	};
};
var without = (obj, key) => {
	return {
		...obj,
		[key]: void 0
	};
};
var SELF_CLOSING_TAGS = [
	"noscript",
	"script",
	"style"
];
var encodeSpecialCharacters = (str, encode = true) => {
	if (encode === false) return String(str);
	return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};
var generateElementAttributesAsString = (attributes) => Object.keys(attributes).reduce((str, key) => {
	const attr = typeof attributes[key] !== "undefined" ? `${key}="${attributes[key]}"` : `${key}`;
	return str ? `${str} ${attr}` : attr;
}, "");
var generateTitleAsString = (type, title, attributes, encode) => {
	const attributeString = generateElementAttributesAsString(attributes);
	const flattenedTitle = flattenArray(title);
	return attributeString ? `<${type} ${HELMET_ATTRIBUTE}="true" ${attributeString}>${encodeSpecialCharacters(flattenedTitle, encode)}</${type}>` : `<${type} ${HELMET_ATTRIBUTE}="true">${encodeSpecialCharacters(flattenedTitle, encode)}</${type}>`;
};
var generateTagsAsString = (type, tags, encode = true) => tags.reduce((str, t) => {
	const tag = t;
	const attributeHtml = Object.keys(tag).filter((attribute) => !(attribute === "innerHTML" || attribute === "cssText")).reduce((string, attribute) => {
		const attr = typeof tag[attribute] === "undefined" ? attribute : `${attribute}="${encodeSpecialCharacters(tag[attribute], encode)}"`;
		return string ? `${string} ${attr}` : attr;
	}, "");
	const tagContent = tag.innerHTML || tag.cssText || "";
	return `${str}<${type} ${HELMET_ATTRIBUTE}="true" ${attributeHtml}${SELF_CLOSING_TAGS.indexOf(type) === -1 ? `/>` : `>${tagContent}</${type}>`}`;
}, "");
var convertElementAttributesToReactProps = (attributes, initProps = {}) => Object.keys(attributes).reduce((obj, key) => {
	const mapped = REACT_TAG_MAP[key];
	obj[mapped || key] = attributes[key];
	return obj;
}, initProps);
var generateTitleAsReactComponent = (_type, title, attributes) => {
	const props = convertElementAttributesToReactProps(attributes, {
		key: title,
		[HELMET_ATTRIBUTE]: true
	});
	return [import_react.createElement("title", props, title)];
};
var generateTagsAsReactComponent = (type, tags) => tags.map((tag, i) => {
	const mappedTag = {
		key: i,
		[HELMET_ATTRIBUTE]: true
	};
	Object.keys(tag).forEach((attribute) => {
		const mappedAttribute = REACT_TAG_MAP[attribute] || attribute;
		if (mappedAttribute === "innerHTML" || mappedAttribute === "cssText") {
			const content = tag.innerHTML || tag.cssText;
			mappedTag.dangerouslySetInnerHTML = { __html: content };
		} else mappedTag[mappedAttribute] = tag[attribute];
	});
	return import_react.createElement(type, mappedTag);
});
var getMethodsForTag = (type, tags, encode = true) => {
	switch (type) {
		case "title": return {
			toComponent: () => generateTitleAsReactComponent(type, tags.title, tags.titleAttributes),
			toString: () => generateTitleAsString(type, tags.title, tags.titleAttributes, encode)
		};
		case "bodyAttributes":
		case "htmlAttributes": return {
			toComponent: () => convertElementAttributesToReactProps(tags),
			toString: () => generateElementAttributesAsString(tags)
		};
		default: return {
			toComponent: () => generateTagsAsReactComponent(type, tags),
			toString: () => generateTagsAsString(type, tags, encode)
		};
	}
};
var getPriorityMethods = ({ metaTags, linkTags, scriptTags, encode }) => {
	const meta = prioritizer(metaTags, SEO_PRIORITY_TAGS.meta);
	const link = prioritizer(linkTags, SEO_PRIORITY_TAGS.link);
	const script = prioritizer(scriptTags, SEO_PRIORITY_TAGS.script);
	return {
		priorityMethods: {
			toComponent: () => [
				...generateTagsAsReactComponent("meta", meta.priority),
				...generateTagsAsReactComponent("link", link.priority),
				...generateTagsAsReactComponent("script", script.priority)
			],
			toString: () => `${getMethodsForTag("meta", meta.priority, encode)} ${getMethodsForTag("link", link.priority, encode)} ${getMethodsForTag("script", script.priority, encode)}`
		},
		metaTags: meta.default,
		linkTags: link.default,
		scriptTags: script.default
	};
};
var mapStateOnServer = (props) => {
	const { baseTag, bodyAttributes, encode = true, htmlAttributes, noscriptTags, styleTags, title = "", titleAttributes, prioritizeSeoTags } = props;
	let { linkTags, metaTags, scriptTags } = props;
	let priorityMethods = {
		toComponent: () => [],
		toString: () => ""
	};
	if (prioritizeSeoTags) ({priorityMethods, linkTags, metaTags, scriptTags} = getPriorityMethods(props));
	return {
		priority: priorityMethods,
		base: getMethodsForTag("base", baseTag, encode),
		bodyAttributes: getMethodsForTag("bodyAttributes", bodyAttributes, encode),
		htmlAttributes: getMethodsForTag("htmlAttributes", htmlAttributes, encode),
		link: getMethodsForTag("link", linkTags, encode),
		meta: getMethodsForTag("meta", metaTags, encode),
		noscript: getMethodsForTag("noscript", noscriptTags, encode),
		script: getMethodsForTag("script", scriptTags, encode),
		style: getMethodsForTag("style", styleTags, encode),
		title: getMethodsForTag("title", {
			title,
			titleAttributes
		}, encode)
	};
};
var server_default = mapStateOnServer;
var instances = [];
var isDocument = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var HelmetData = class {
	instances = [];
	canUseDOM = isDocument;
	context;
	value = {
		setHelmet: (serverState) => {
			this.context.helmet = serverState;
		},
		helmetInstances: {
			get: () => this.canUseDOM ? instances : this.instances,
			add: (instance) => {
				(this.canUseDOM ? instances : this.instances).push(instance);
			},
			remove: (instance) => {
				const index = (this.canUseDOM ? instances : this.instances).indexOf(instance);
				(this.canUseDOM ? instances : this.instances).splice(index, 1);
			}
		}
	};
	constructor(context, canUseDOM) {
		this.context = context;
		this.canUseDOM = canUseDOM || false;
		if (!canUseDOM) context.helmet = server_default({
			baseTag: [],
			bodyAttributes: {},
			encodeSpecialCharacters: true,
			htmlAttributes: {},
			linkTags: [],
			metaTags: [],
			noscriptTags: [],
			scriptTags: [],
			styleTags: [],
			title: "",
			titleAttributes: {}
		});
	}
};
var isReact19 = parseInt("18.2.0".split(".")[0], 10) >= 19;
var Context = import_react.createContext({});
var HelmetProvider = class _HelmetProvider extends import_react.Component {
	static canUseDOM = isDocument;
	helmetData;
	constructor(props) {
		super(props);
		if (isReact19) this.helmetData = null;
		else this.helmetData = new HelmetData(this.props.context || {}, _HelmetProvider.canUseDOM);
	}
	render() {
		if (isReact19) return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, this.props.children);
		return /* @__PURE__ */ import_react.createElement(Context.Provider, { value: this.helmetData.value }, this.props.children);
	}
};
var updateTags = (type, tags) => {
	const headElement = document.head || document.querySelector("head");
	const tagNodes = headElement.querySelectorAll(`${type}[${HELMET_ATTRIBUTE}]`);
	const oldTags = [].slice.call(tagNodes);
	const newTags = [];
	let indexToDelete;
	if (tags && tags.length) tags.forEach((tag) => {
		const newElement = document.createElement(type);
		for (const attribute in tag) if (Object.prototype.hasOwnProperty.call(tag, attribute)) if (attribute === "innerHTML") newElement.innerHTML = tag.innerHTML;
		else if (attribute === "cssText") {
			const cssText = tag.cssText;
			newElement.appendChild(document.createTextNode(cssText));
		} else {
			const attr = attribute;
			const value = typeof tag[attr] === "undefined" ? "" : tag[attr];
			newElement.setAttribute(attribute, value);
		}
		newElement.setAttribute(HELMET_ATTRIBUTE, "true");
		if (oldTags.some((existingTag, index) => {
			indexToDelete = index;
			return newElement.isEqualNode(existingTag);
		})) oldTags.splice(indexToDelete, 1);
		else newTags.push(newElement);
	});
	oldTags.forEach((tag) => tag.parentNode?.removeChild(tag));
	newTags.forEach((tag) => headElement.appendChild(tag));
	return {
		oldTags,
		newTags
	};
};
var updateAttributes = (tagName, attributes) => {
	const elementTag = document.getElementsByTagName(tagName)[0];
	if (!elementTag) return;
	const helmetAttributeString = elementTag.getAttribute(HELMET_ATTRIBUTE);
	const helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
	const attributesToRemove = [...helmetAttributes];
	const attributeKeys = Object.keys(attributes);
	for (const attribute of attributeKeys) {
		const value = attributes[attribute] || "";
		if (elementTag.getAttribute(attribute) !== value) elementTag.setAttribute(attribute, value);
		if (helmetAttributes.indexOf(attribute) === -1) helmetAttributes.push(attribute);
		const indexToSave = attributesToRemove.indexOf(attribute);
		if (indexToSave !== -1) attributesToRemove.splice(indexToSave, 1);
	}
	for (let i = attributesToRemove.length - 1; i >= 0; i -= 1) elementTag.removeAttribute(attributesToRemove[i]);
	if (helmetAttributes.length === attributesToRemove.length) elementTag.removeAttribute(HELMET_ATTRIBUTE);
	else if (elementTag.getAttribute(HELMET_ATTRIBUTE) !== attributeKeys.join(",")) elementTag.setAttribute(HELMET_ATTRIBUTE, attributeKeys.join(","));
};
var updateTitle = (title, attributes) => {
	if (typeof title !== "undefined" && document.title !== title) document.title = flattenArray(title);
	updateAttributes("title", attributes);
};
var commitTagChanges = (newState, cb) => {
	const { baseTag, bodyAttributes, htmlAttributes, linkTags, metaTags, noscriptTags, onChangeClientState, scriptTags, styleTags, title, titleAttributes } = newState;
	updateAttributes("body", bodyAttributes);
	updateAttributes("html", htmlAttributes);
	updateTitle(title, titleAttributes);
	const tagUpdates = {
		baseTag: updateTags("base", baseTag),
		linkTags: updateTags("link", linkTags),
		metaTags: updateTags("meta", metaTags),
		noscriptTags: updateTags("noscript", noscriptTags),
		scriptTags: updateTags("script", scriptTags),
		styleTags: updateTags("style", styleTags)
	};
	const addedTags = {};
	const removedTags = {};
	Object.keys(tagUpdates).forEach((tagType) => {
		const { newTags, oldTags } = tagUpdates[tagType];
		if (newTags.length) addedTags[tagType] = newTags;
		if (oldTags.length) removedTags[tagType] = tagUpdates[tagType].oldTags;
	});
	if (cb) cb();
	onChangeClientState(newState, addedTags, removedTags);
};
var _helmetCallback = null;
var handleStateChangeOnClient = (newState) => {
	if (_helmetCallback) cancelAnimationFrame(_helmetCallback);
	if (newState.defer) _helmetCallback = requestAnimationFrame(() => {
		commitTagChanges(newState, () => {
			_helmetCallback = null;
		});
	});
	else {
		commitTagChanges(newState);
		_helmetCallback = null;
	}
};
var client_default = handleStateChangeOnClient;
var HelmetDispatcher = class extends import_react.Component {
	rendered = false;
	shouldComponentUpdate(nextProps) {
		return !(0, import_shallowequal.default)(nextProps, this.props);
	}
	componentDidUpdate() {
		this.emitChange();
	}
	componentWillUnmount() {
		const { helmetInstances } = this.props.context;
		helmetInstances.remove(this);
		this.emitChange();
	}
	emitChange() {
		const { helmetInstances, setHelmet } = this.props.context;
		let serverState = null;
		const state = reducePropsToState(helmetInstances.get().map((instance) => {
			const { context: _context, ...props } = instance.props;
			return props;
		}));
		if (HelmetProvider.canUseDOM) client_default(state);
		else if (server_default) serverState = server_default(state);
		setHelmet(serverState);
	}
	init() {
		if (this.rendered) return;
		this.rendered = true;
		const { helmetInstances } = this.props.context;
		helmetInstances.add(this);
		this.emitChange();
	}
	render() {
		this.init();
		return null;
	}
};
var react19Instances = [];
var toHtmlAttributes = (props) => {
	const result = {};
	for (const key of Object.keys(props)) result[HTML_TAG_MAP[key] || key] = props[key];
	return result;
};
var toReactProps = (attrs) => {
	const result = {};
	for (const key of Object.keys(attrs)) {
		const mapped = REACT_TAG_MAP[key];
		result[mapped || key] = attrs[key];
	}
	return result;
};
var applyAttributes = (tagName, attributes) => {
	if (!isDocument) return;
	const el = document.getElementsByTagName(tagName)[0];
	if (!el) return;
	const managedAttr = "data-rh-managed";
	const prev = el.getAttribute(managedAttr);
	const prevKeys = prev ? prev.split(",") : [];
	const nextKeys = Object.keys(attributes);
	for (const key of prevKeys) if (!nextKeys.includes(key)) el.removeAttribute(key);
	for (const key of nextKeys) {
		const value = attributes[key];
		if (value === void 0 || value === null || value === false) el.removeAttribute(key);
		else if (value === true) el.setAttribute(key, "");
		else el.setAttribute(key, String(value));
	}
	if (nextKeys.length > 0) el.setAttribute(managedAttr, nextKeys.join(","));
	else el.removeAttribute(managedAttr);
};
var syncAllAttributes = () => {
	const htmlAttrs = {};
	const bodyAttrs = {};
	for (const instance of react19Instances) {
		const { htmlAttributes, bodyAttributes } = instance.props;
		if (htmlAttributes) Object.assign(htmlAttrs, toHtmlAttributes(htmlAttributes));
		if (bodyAttributes) Object.assign(bodyAttrs, toHtmlAttributes(bodyAttributes));
	}
	applyAttributes("html", htmlAttrs);
	applyAttributes("body", bodyAttrs);
};
var React19Dispatcher = class extends import_react.Component {
	componentDidMount() {
		react19Instances.push(this);
		syncAllAttributes();
	}
	componentDidUpdate() {
		syncAllAttributes();
	}
	componentWillUnmount() {
		const index = react19Instances.indexOf(this);
		if (index !== -1) react19Instances.splice(index, 1);
		syncAllAttributes();
	}
	resolveTitle() {
		const { title, titleTemplate, defaultTitle } = this.props;
		if (title && titleTemplate) return titleTemplate.replace(/%s/g, () => Array.isArray(title) ? title.join("") : title);
		return title || defaultTitle || void 0;
	}
	renderTitle() {
		const title = this.resolveTitle();
		if (title === void 0) return null;
		const titleAttributes = this.props.titleAttributes || {};
		return import_react.createElement("title", toReactProps(titleAttributes), title);
	}
	renderBase() {
		const { base } = this.props;
		if (!base) return null;
		return import_react.createElement("base", toReactProps(base));
	}
	renderMeta() {
		const { meta } = this.props;
		if (!meta || !Array.isArray(meta)) return null;
		return meta.map((attrs, i) => import_react.createElement("meta", {
			key: i,
			...toReactProps(attrs)
		}));
	}
	renderLink() {
		const { link } = this.props;
		if (!link || !Array.isArray(link)) return null;
		return link.map((attrs, i) => import_react.createElement("link", {
			key: i,
			...toReactProps(attrs)
		}));
	}
	renderScript() {
		const { script } = this.props;
		if (!script || !Array.isArray(script)) return null;
		return script.map((attrs, i) => {
			const { innerHTML, ...rest } = attrs;
			const props = toReactProps(rest);
			if (innerHTML) props.dangerouslySetInnerHTML = { __html: innerHTML };
			return import_react.createElement("script", {
				key: i,
				...props
			});
		});
	}
	renderStyle() {
		const { style } = this.props;
		if (!style || !Array.isArray(style)) return null;
		return style.map((attrs, i) => {
			const { cssText, ...rest } = attrs;
			const props = toReactProps(rest);
			if (cssText) props.dangerouslySetInnerHTML = { __html: cssText };
			return import_react.createElement("style", {
				key: i,
				...props
			});
		});
	}
	renderNoscript() {
		const { noscript } = this.props;
		if (!noscript || !Array.isArray(noscript)) return null;
		return noscript.map((attrs, i) => {
			const { innerHTML, ...rest } = attrs;
			const props = toReactProps(rest);
			if (innerHTML) props.dangerouslySetInnerHTML = { __html: innerHTML };
			return import_react.createElement("noscript", {
				key: i,
				...props
			});
		});
	}
	render() {
		return import_react.createElement(import_react.Fragment, null, this.renderTitle(), this.renderBase(), this.renderMeta(), this.renderLink(), this.renderScript(), this.renderStyle(), this.renderNoscript());
	}
};
var Helmet = class extends import_react.Component {
	static defaultProps = {
		defer: true,
		encodeSpecialCharacters: true,
		prioritizeSeoTags: false
	};
	shouldComponentUpdate(nextProps) {
		return !(0, import_react_fast_compare.default)(without(this.props, "helmetData"), without(nextProps, "helmetData"));
	}
	mapNestedChildrenToProps(child, nestedChildren) {
		if (!nestedChildren) return null;
		switch (child.type) {
			case "script":
			case "noscript": return { innerHTML: nestedChildren };
			case "style": return { cssText: nestedChildren };
			default: throw new Error(`<${child.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`);
		}
	}
	flattenArrayTypeChildren(child, arrayTypeChildren, newChildProps, nestedChildren) {
		return {
			...arrayTypeChildren,
			[child.type]: [...arrayTypeChildren[child.type] || [], {
				...newChildProps,
				...this.mapNestedChildrenToProps(child, nestedChildren)
			}]
		};
	}
	mapObjectTypeChildren(child, newProps, newChildProps, nestedChildren) {
		switch (child.type) {
			case "title": return {
				...newProps,
				[child.type]: nestedChildren,
				titleAttributes: { ...newChildProps }
			};
			case "body": return {
				...newProps,
				bodyAttributes: { ...newChildProps }
			};
			case "html": return {
				...newProps,
				htmlAttributes: { ...newChildProps }
			};
			default: return {
				...newProps,
				[child.type]: { ...newChildProps }
			};
		}
	}
	mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
		let newFlattenedProps = { ...newProps };
		Object.keys(arrayTypeChildren).forEach((arrayChildName) => {
			newFlattenedProps = {
				...newFlattenedProps,
				[arrayChildName]: arrayTypeChildren[arrayChildName]
			};
		});
		return newFlattenedProps;
	}
	warnOnInvalidChildren(child, nestedChildren) {
		(0, import_browser.default)(VALID_TAG_NAMES.some((name) => child.type === name), typeof child.type === "function" ? `You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.` : `Only elements types ${VALID_TAG_NAMES.join(", ")} are allowed. Helmet does not support rendering <${child.type}> elements. Refer to our API for more information.`);
		(0, import_browser.default)(!nestedChildren || typeof nestedChildren === "string" || Array.isArray(nestedChildren) && !nestedChildren.some((nestedChild) => typeof nestedChild !== "string"), `Helmet expects a string as a child of <${child.type}>. Did you forget to wrap your children in braces? ( <${child.type}>{\`\`}</${child.type}> ) Refer to our API for more information.`);
		return true;
	}
	mapChildrenToProps(children, newProps) {
		let arrayTypeChildren = {};
		import_react.Children.forEach(children, (child) => {
			if (!child || !child.props) return;
			const { children: nestedChildren, ...childProps } = child.props;
			const newChildProps = Object.keys(childProps).reduce((obj, key) => {
				obj[HTML_TAG_MAP[key] || key] = childProps[key];
				return obj;
			}, {});
			let { type } = child;
			if (typeof type === "symbol") type = type.toString();
			else this.warnOnInvalidChildren(child, nestedChildren);
			switch (type) {
				case "Symbol(react.fragment)":
					newProps = this.mapChildrenToProps(nestedChildren, newProps);
					break;
				case "link":
				case "meta":
				case "noscript":
				case "script":
				case "style":
					arrayTypeChildren = this.flattenArrayTypeChildren(child, arrayTypeChildren, newChildProps, nestedChildren);
					break;
				default:
					newProps = this.mapObjectTypeChildren(child, newProps, newChildProps, nestedChildren);
					break;
			}
		});
		return this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
	}
	render() {
		const { children, ...props } = this.props;
		let newProps = { ...props };
		let { helmetData } = props;
		if (children) newProps = this.mapChildrenToProps(children, newProps);
		if (helmetData && !(helmetData instanceof HelmetData)) {
			helmetData = new HelmetData(helmetData.context, true);
			delete newProps.helmetData;
		}
		if (isReact19) return /* @__PURE__ */ import_react.createElement(React19Dispatcher, { ...newProps });
		return helmetData ? /* @__PURE__ */ import_react.createElement(HelmetDispatcher, {
			...newProps,
			context: helmetData.value
		}) : /* @__PURE__ */ import_react.createElement(Context.Consumer, null, (context) => /* @__PURE__ */ import_react.createElement(HelmetDispatcher, {
			...newProps,
			context
		}));
	}
};
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/subscribable.js
var Subscribable = class {
	constructor() {
		this.listeners = /* @__PURE__ */ new Set();
		this.subscribe = this.subscribe.bind(this);
	}
	subscribe(listener) {
		this.listeners.add(listener);
		this.onSubscribe();
		return () => {
			this.listeners.delete(listener);
			this.onUnsubscribe();
		};
	}
	hasListeners() {
		return this.listeners.size > 0;
	}
	onSubscribe() {}
	onUnsubscribe() {}
};
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/focusManager.js
var FocusManager = class extends Subscribable {
	#focused;
	#cleanup;
	#setup;
	constructor() {
		super();
		this.#setup = (onFocus) => {
			if (typeof window !== "undefined" && window.addEventListener) {
				const listener = () => onFocus();
				window.addEventListener("visibilitychange", listener, false);
				return () => {
					window.removeEventListener("visibilitychange", listener);
				};
			}
		};
	}
	onSubscribe() {
		if (!this.#cleanup) this.setEventListener(this.#setup);
	}
	onUnsubscribe() {
		if (!this.hasListeners()) {
			this.#cleanup?.();
			this.#cleanup = void 0;
		}
	}
	setEventListener(setup) {
		this.#setup = setup;
		this.#cleanup?.();
		this.#cleanup = setup((focused) => {
			if (typeof focused === "boolean") this.setFocused(focused);
			else this.onFocus();
		});
	}
	setFocused(focused) {
		if (this.#focused !== focused) {
			this.#focused = focused;
			this.onFocus();
		}
	}
	onFocus() {
		const isFocused = this.isFocused();
		this.listeners.forEach((listener) => {
			listener(isFocused);
		});
	}
	isFocused() {
		if (typeof this.#focused === "boolean") return this.#focused;
		return globalThis.document?.visibilityState !== "hidden";
	}
};
var focusManager = new FocusManager();
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/timeoutManager.js
var defaultTimeoutProvider = {
	setTimeout: (callback, delay) => setTimeout(callback, delay),
	clearTimeout: (timeoutId) => clearTimeout(timeoutId),
	setInterval: (callback, delay) => setInterval(callback, delay),
	clearInterval: (intervalId) => clearInterval(intervalId)
};
var TimeoutManager = class {
	#provider = defaultTimeoutProvider;
	#providerCalled = false;
	setTimeoutProvider(provider) {
		this.#provider = provider;
	}
	setTimeout(callback, delay) {
		return this.#provider.setTimeout(callback, delay);
	}
	clearTimeout(timeoutId) {
		this.#provider.clearTimeout(timeoutId);
	}
	setInterval(callback, delay) {
		return this.#provider.setInterval(callback, delay);
	}
	clearInterval(intervalId) {
		this.#provider.clearInterval(intervalId);
	}
};
var timeoutManager = new TimeoutManager();
function systemSetTimeoutZero(callback) {
	setTimeout(callback, 0);
}
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/utils.js
var isServer = typeof window === "undefined" || "Deno" in globalThis;
function noop() {}
function functionalUpdate(updater, input) {
	return typeof updater === "function" ? updater(input) : updater;
}
function isValidTimeout(value) {
	return typeof value === "number" && value >= 0 && value !== Infinity;
}
function timeUntilStale(updatedAt, staleTime) {
	return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function resolveStaleTime(staleTime, query) {
	return typeof staleTime === "function" ? staleTime(query) : staleTime;
}
function resolveQueryBoolean(option, query) {
	return typeof option === "function" ? option(query) : option;
}
function matchQuery(filters, query) {
	const { type = "all", exact, fetchStatus, predicate, queryKey, stale } = filters;
	if (queryKey) {
		if (exact) {
			if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) return false;
		} else if (!partialMatchKey(query.queryKey, queryKey)) return false;
	}
	if (type !== "all") {
		const isActive = query.isActive();
		if (type === "active" && !isActive) return false;
		if (type === "inactive" && isActive) return false;
	}
	if (typeof stale === "boolean" && query.isStale() !== stale) return false;
	if (fetchStatus && fetchStatus !== query.state.fetchStatus) return false;
	if (predicate && !predicate(query)) return false;
	return true;
}
function matchMutation(filters, mutation) {
	const { exact, status, predicate, mutationKey } = filters;
	if (mutationKey) {
		if (!mutation.options.mutationKey) return false;
		if (exact) {
			if (hashKey(mutation.options.mutationKey) !== hashKey(mutationKey)) return false;
		} else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) return false;
	}
	if (status && mutation.state.status !== status) return false;
	if (predicate && !predicate(mutation)) return false;
	return true;
}
function hashQueryKeyByOptions(queryKey, options) {
	return (options?.queryKeyHashFn || hashKey)(queryKey);
}
function hashKey(queryKey) {
	return JSON.stringify(queryKey, (_, val) => isPlainObject(val) ? Object.keys(val).sort().reduce((result, key) => {
		result[key] = val[key];
		return result;
	}, {}) : val);
}
function partialMatchKey(a, b) {
	if (a === b) return true;
	if (typeof a !== typeof b) return false;
	if (a && b && typeof a === "object" && typeof b === "object") return Object.keys(b).every((key) => partialMatchKey(a[key], b[key]));
	return false;
}
var hasOwn = Object.prototype.hasOwnProperty;
function replaceEqualDeep(a, b, depth = 0) {
	if (a === b) return a;
	if (depth > 500) return b;
	const array = isPlainArray(a) && isPlainArray(b);
	if (!array && !(isPlainObject(a) && isPlainObject(b))) return b;
	const aSize = (array ? a : Object.keys(a)).length;
	const bItems = array ? b : Object.keys(b);
	const bSize = bItems.length;
	const copy = array ? new Array(bSize) : {};
	let equalItems = 0;
	for (let i = 0; i < bSize; i++) {
		const key = array ? i : bItems[i];
		const aItem = a[key];
		const bItem = b[key];
		if (aItem === bItem) {
			copy[key] = aItem;
			if (array ? i < aSize : hasOwn.call(a, key)) equalItems++;
			continue;
		}
		if (aItem === null || bItem === null || typeof aItem !== "object" || typeof bItem !== "object") {
			copy[key] = bItem;
			continue;
		}
		const v = replaceEqualDeep(aItem, bItem, depth + 1);
		copy[key] = v;
		if (v === aItem) equalItems++;
	}
	return aSize === bSize && equalItems === aSize ? a : copy;
}
function shallowEqualObjects(a, b) {
	if (!b || Object.keys(a).length !== Object.keys(b).length) return false;
	for (const key in a) if (a[key] !== b[key]) return false;
	return true;
}
function isPlainArray(value) {
	return Array.isArray(value) && value.length === Object.keys(value).length;
}
function isPlainObject(o) {
	if (!hasObjectPrototype(o)) return false;
	const ctor = o.constructor;
	if (ctor === void 0) return true;
	const prot = ctor.prototype;
	if (!hasObjectPrototype(prot)) return false;
	if (!prot.hasOwnProperty("isPrototypeOf")) return false;
	if (Object.getPrototypeOf(o) !== Object.prototype) return false;
	return true;
}
function hasObjectPrototype(o) {
	return Object.prototype.toString.call(o) === "[object Object]";
}
function sleep(timeout) {
	return new Promise((resolve) => {
		timeoutManager.setTimeout(resolve, timeout);
	});
}
function replaceData(prevData, data, options) {
	if (typeof options.structuralSharing === "function") return options.structuralSharing(prevData, data);
	else if (options.structuralSharing !== false) return replaceEqualDeep(prevData, data);
	return data;
}
function addToEnd(items, item, max = 0) {
	const newItems = [...items, item];
	return max && newItems.length > max ? newItems.slice(1) : newItems;
}
function addToStart(items, item, max = 0) {
	const newItems = [item, ...items];
	return max && newItems.length > max ? newItems.slice(0, -1) : newItems;
}
var skipToken = /* @__PURE__ */ Symbol();
function ensureQueryFn(options, fetchOptions) {
	if (!options.queryFn && fetchOptions?.initialPromise) return () => fetchOptions.initialPromise;
	if (!options.queryFn || options.queryFn === skipToken) return () => Promise.reject(/* @__PURE__ */ new Error(`Missing queryFn: '${options.queryHash}'`));
	return options.queryFn;
}
function shouldThrowError(throwOnError, params) {
	if (typeof throwOnError === "function") return throwOnError(...params);
	return !!throwOnError;
}
function addConsumeAwareSignal(object, getSignal, onCancelled) {
	let consumed = false;
	let signal;
	Object.defineProperty(object, "signal", {
		enumerable: true,
		get: () => {
			signal ??= getSignal();
			if (consumed) return signal;
			consumed = true;
			if (signal.aborted) onCancelled();
			else signal.addEventListener("abort", onCancelled, { once: true });
			return signal;
		}
	});
	return object;
}
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/environmentManager.js
var environmentManager = /* @__PURE__ */ (() => {
	let isServerFn = () => isServer;
	return {
		/**
		* Returns whether the current runtime should be treated as a server environment.
		*/
		isServer() {
			return isServerFn();
		},
		/**
		* Overrides the server check globally.
		*/
		setIsServer(isServerValue) {
			isServerFn = isServerValue;
		}
	};
})();
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/thenable.js
function pendingThenable() {
	let resolve;
	let reject;
	const thenable = new Promise((_resolve, _reject) => {
		resolve = _resolve;
		reject = _reject;
	});
	thenable.status = "pending";
	thenable.catch(() => {});
	function finalize(data) {
		Object.assign(thenable, data);
		delete thenable.resolve;
		delete thenable.reject;
	}
	thenable.resolve = (value) => {
		finalize({
			status: "fulfilled",
			value
		});
		resolve(value);
	};
	thenable.reject = (reason) => {
		finalize({
			status: "rejected",
			reason
		});
		reject(reason);
	};
	return thenable;
}
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/notifyManager.js
var defaultScheduler = systemSetTimeoutZero;
function createNotifyManager() {
	let queue = [];
	let transactions = 0;
	let notifyFn = (callback) => {
		callback();
	};
	let batchNotifyFn = (callback) => {
		callback();
	};
	let scheduleFn = defaultScheduler;
	const schedule = (callback) => {
		if (transactions) queue.push(callback);
		else scheduleFn(() => {
			notifyFn(callback);
		});
	};
	const flush = () => {
		const originalQueue = queue;
		queue = [];
		if (originalQueue.length) scheduleFn(() => {
			batchNotifyFn(() => {
				originalQueue.forEach((callback) => {
					notifyFn(callback);
				});
			});
		});
	};
	return {
		batch: (callback) => {
			let result;
			transactions++;
			try {
				result = callback();
			} finally {
				transactions--;
				if (!transactions) flush();
			}
			return result;
		},
		/**
		* All calls to the wrapped function will be batched.
		*/
		batchCalls: (callback) => {
			return (...args) => {
				schedule(() => {
					callback(...args);
				});
			};
		},
		schedule,
		/**
		* Use this method to set a custom notify function.
		* This can be used to for example wrap notifications with `React.act` while running tests.
		*/
		setNotifyFunction: (fn) => {
			notifyFn = fn;
		},
		/**
		* Use this method to set a custom function to batch notifications together into a single tick.
		* By default React Query will use the batch function provided by ReactDOM or React Native.
		*/
		setBatchNotifyFunction: (fn) => {
			batchNotifyFn = fn;
		},
		setScheduler: (fn) => {
			scheduleFn = fn;
		}
	};
}
var notifyManager = createNotifyManager();
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/onlineManager.js
var OnlineManager = class extends Subscribable {
	#online = true;
	#cleanup;
	#setup;
	constructor() {
		super();
		this.#setup = (onOnline) => {
			if (typeof window !== "undefined" && window.addEventListener) {
				const onlineListener = () => onOnline(true);
				const offlineListener = () => onOnline(false);
				window.addEventListener("online", onlineListener, false);
				window.addEventListener("offline", offlineListener, false);
				return () => {
					window.removeEventListener("online", onlineListener);
					window.removeEventListener("offline", offlineListener);
				};
			}
		};
	}
	onSubscribe() {
		if (!this.#cleanup) this.setEventListener(this.#setup);
	}
	onUnsubscribe() {
		if (!this.hasListeners()) {
			this.#cleanup?.();
			this.#cleanup = void 0;
		}
	}
	setEventListener(setup) {
		this.#setup = setup;
		this.#cleanup?.();
		this.#cleanup = setup(this.setOnline.bind(this));
	}
	setOnline(online) {
		if (this.#online !== online) {
			this.#online = online;
			this.listeners.forEach((listener) => {
				listener(online);
			});
		}
	}
	isOnline() {
		return this.#online;
	}
};
var onlineManager = new OnlineManager();
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/retryer.js
function defaultRetryDelay(failureCount) {
	return Math.min(1e3 * 2 ** failureCount, 3e4);
}
function canFetch(networkMode) {
	return (networkMode ?? "online") === "online" ? onlineManager.isOnline() : true;
}
var CancelledError = class extends Error {
	constructor(options) {
		super("CancelledError");
		this.revert = options?.revert;
		this.silent = options?.silent;
	}
};
function createRetryer(config) {
	let isRetryCancelled = false;
	let failureCount = 0;
	let continueFn;
	const thenable = pendingThenable();
	const isResolved = () => thenable.status !== "pending";
	const cancel = (cancelOptions) => {
		if (!isResolved()) {
			const error = new CancelledError(cancelOptions);
			reject(error);
			config.onCancel?.(error);
		}
	};
	const cancelRetry = () => {
		isRetryCancelled = true;
	};
	const continueRetry = () => {
		isRetryCancelled = false;
	};
	const canContinue = () => focusManager.isFocused() && (config.networkMode === "always" || onlineManager.isOnline()) && config.canRun();
	const canStart = () => canFetch(config.networkMode) && config.canRun();
	const resolve = (value) => {
		if (!isResolved()) {
			continueFn?.();
			thenable.resolve(value);
		}
	};
	const reject = (value) => {
		if (!isResolved()) {
			continueFn?.();
			thenable.reject(value);
		}
	};
	const pause = () => {
		return new Promise((continueResolve) => {
			continueFn = (value) => {
				if (isResolved() || canContinue()) continueResolve(value);
			};
			config.onPause?.();
		}).then(() => {
			continueFn = void 0;
			if (!isResolved()) config.onContinue?.();
		});
	};
	const run = () => {
		if (isResolved()) return;
		let promiseOrValue;
		const initialPromise = failureCount === 0 ? config.initialPromise : void 0;
		try {
			promiseOrValue = initialPromise ?? config.fn();
		} catch (error) {
			promiseOrValue = Promise.reject(error);
		}
		Promise.resolve(promiseOrValue).then(resolve).catch((error) => {
			if (isResolved()) return;
			const retry = config.retry ?? (environmentManager.isServer() ? 0 : 3);
			const retryDelay = config.retryDelay ?? defaultRetryDelay;
			const delay = typeof retryDelay === "function" ? retryDelay(failureCount, error) : retryDelay;
			const shouldRetry = retry === true || typeof retry === "number" && failureCount < retry || typeof retry === "function" && retry(failureCount, error);
			if (isRetryCancelled || !shouldRetry) {
				reject(error);
				return;
			}
			failureCount++;
			config.onFail?.(failureCount, error);
			sleep(delay).then(() => {
				return canContinue() ? void 0 : pause();
			}).then(() => {
				if (isRetryCancelled) reject(error);
				else run();
			});
		});
	};
	return {
		promise: thenable,
		status: () => thenable.status,
		cancel,
		continue: () => {
			continueFn?.();
			return thenable;
		},
		cancelRetry,
		continueRetry,
		canStart,
		start: () => {
			if (canStart()) run();
			else pause().then(run);
			return thenable;
		}
	};
}
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/removable.js
var Removable = class {
	#gcTimeout;
	destroy() {
		this.clearGcTimeout();
	}
	scheduleGc() {
		this.clearGcTimeout();
		if (isValidTimeout(this.gcTime)) this.#gcTimeout = timeoutManager.setTimeout(() => {
			this.optionalRemove();
		}, this.gcTime);
	}
	updateGcTime(newGcTime) {
		this.gcTime = Math.max(this.gcTime || 0, newGcTime ?? (environmentManager.isServer() ? Infinity : 300 * 1e3));
	}
	clearGcTimeout() {
		if (this.#gcTimeout !== void 0) {
			timeoutManager.clearTimeout(this.#gcTimeout);
			this.#gcTimeout = void 0;
		}
	}
};
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js
function infiniteQueryBehavior(pages) {
	return { onFetch: (context, query) => {
		const options = context.options;
		const direction = context.fetchOptions?.meta?.fetchMore?.direction;
		const oldPages = context.state.data?.pages || [];
		const oldPageParams = context.state.data?.pageParams || [];
		let result = {
			pages: [],
			pageParams: []
		};
		let currentPage = 0;
		const fetchFn = async () => {
			let cancelled = false;
			const addSignalProperty = (object) => {
				addConsumeAwareSignal(object, () => context.signal, () => cancelled = true);
			};
			const queryFn = ensureQueryFn(context.options, context.fetchOptions);
			const fetchPage = async (data, param, previous) => {
				if (cancelled) return Promise.reject(context.signal.reason);
				if (param == null && data.pages.length) return Promise.resolve(data);
				const createQueryFnContext = () => {
					const queryFnContext2 = {
						client: context.client,
						queryKey: context.queryKey,
						pageParam: param,
						direction: previous ? "backward" : "forward",
						meta: context.options.meta
					};
					addSignalProperty(queryFnContext2);
					return queryFnContext2;
				};
				const queryFnContext = createQueryFnContext();
				const page = await queryFn(queryFnContext);
				const { maxPages } = context.options;
				const addTo = previous ? addToStart : addToEnd;
				return {
					pages: addTo(data.pages, page, maxPages),
					pageParams: addTo(data.pageParams, param, maxPages)
				};
			};
			if (direction && oldPages.length) {
				const previous = direction === "backward";
				const pageParamFn = previous ? getPreviousPageParam : getNextPageParam;
				const oldData = {
					pages: oldPages,
					pageParams: oldPageParams
				};
				result = await fetchPage(oldData, pageParamFn(options, oldData), previous);
			} else {
				const remainingPages = pages ?? oldPages.length;
				do {
					const param = currentPage === 0 ? oldPageParams[0] ?? options.initialPageParam : getNextPageParam(options, result);
					if (currentPage > 0 && param == null) break;
					result = await fetchPage(result, param);
					currentPage++;
				} while (currentPage < remainingPages);
			}
			return result;
		};
		if (context.options.persister) context.fetchFn = () => {
			return context.options.persister?.(fetchFn, {
				client: context.client,
				queryKey: context.queryKey,
				meta: context.options.meta,
				signal: context.signal
			}, query);
		};
		else context.fetchFn = fetchFn;
	} };
}
function getNextPageParam(options, { pages, pageParams }) {
	const lastIndex = pages.length - 1;
	return pages.length > 0 ? options.getNextPageParam(pages[lastIndex], pages, pageParams[lastIndex], pageParams) : void 0;
}
function getPreviousPageParam(options, { pages, pageParams }) {
	return pages.length > 0 ? options.getPreviousPageParam?.(pages[0], pages, pageParams[0], pageParams) : void 0;
}
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/query.js
var Query = class extends Removable {
	#queryType;
	#initialState;
	#revertState;
	#cache;
	#client;
	#retryer;
	#defaultOptions;
	#abortSignalConsumed;
	constructor(config) {
		super();
		this.#abortSignalConsumed = false;
		this.#defaultOptions = config.defaultOptions;
		this.setOptions(config.options);
		this.observers = [];
		this.#client = config.client;
		this.#cache = this.#client.getQueryCache();
		this.queryKey = config.queryKey;
		this.queryHash = config.queryHash;
		this.#initialState = getDefaultState$1(this.options);
		this.state = config.state ?? this.#initialState;
		this.scheduleGc();
	}
	get meta() {
		return this.options.meta;
	}
	get queryType() {
		return this.#queryType;
	}
	get promise() {
		return this.#retryer?.promise;
	}
	setOptions(options) {
		this.options = {
			...this.#defaultOptions,
			...options
		};
		if (options?._type) this.#queryType = options._type;
		this.updateGcTime(this.options.gcTime);
		if (this.state && this.state.data === void 0) {
			const defaultState = getDefaultState$1(this.options);
			if (defaultState.data !== void 0) {
				this.setState(successState(defaultState.data, defaultState.dataUpdatedAt));
				this.#initialState = defaultState;
			}
		}
	}
	optionalRemove() {
		if (!this.observers.length && this.state.fetchStatus === "idle") this.#cache.remove(this);
	}
	setData(newData, options) {
		const data = replaceData(this.state.data, newData, this.options);
		this.#dispatch({
			data,
			type: "success",
			dataUpdatedAt: options?.updatedAt,
			manual: options?.manual
		});
		return data;
	}
	setState(state) {
		this.#dispatch({
			type: "setState",
			state
		});
	}
	cancel(options) {
		const promise = this.#retryer?.promise;
		this.#retryer?.cancel(options);
		return promise ? promise.then(noop).catch(noop) : Promise.resolve();
	}
	destroy() {
		super.destroy();
		this.cancel({ silent: true });
	}
	get resetState() {
		return this.#initialState;
	}
	reset() {
		this.destroy();
		this.setState(this.resetState);
	}
	isActive() {
		return this.observers.some((observer) => resolveQueryBoolean(observer.options.enabled, this) !== false);
	}
	isDisabled() {
		if (this.getObserversCount() > 0) return !this.isActive();
		return this.options.queryFn === skipToken || !this.isFetched();
	}
	isFetched() {
		return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
	}
	isStatic() {
		if (this.getObserversCount() > 0) return this.observers.some((observer) => resolveStaleTime(observer.options.staleTime, this) === "static");
		return false;
	}
	isStale() {
		if (this.getObserversCount() > 0) return this.observers.some((observer) => observer.getCurrentResult().isStale);
		return this.state.data === void 0 || this.state.isInvalidated;
	}
	isStaleByTime(staleTime = 0) {
		if (this.state.data === void 0) return true;
		if (staleTime === "static") return false;
		if (this.state.isInvalidated) return true;
		return !timeUntilStale(this.state.dataUpdatedAt, staleTime);
	}
	onFocus() {
		this.observers.find((x) => x.shouldFetchOnWindowFocus())?.refetch({ cancelRefetch: false });
		this.#retryer?.continue();
	}
	onOnline() {
		this.observers.find((x) => x.shouldFetchOnReconnect())?.refetch({ cancelRefetch: false });
		this.#retryer?.continue();
	}
	addObserver(observer) {
		if (!this.observers.includes(observer)) {
			this.observers.push(observer);
			this.clearGcTimeout();
			this.#cache.notify({
				type: "observerAdded",
				query: this,
				observer
			});
		}
	}
	removeObserver(observer) {
		if (this.observers.includes(observer)) {
			this.observers = this.observers.filter((x) => x !== observer);
			if (!this.observers.length) {
				if (this.#retryer) if (this.#abortSignalConsumed || this.#isInitialPausedFetch()) this.#retryer.cancel({ revert: true });
				else this.#retryer.cancelRetry();
				this.scheduleGc();
			}
			this.#cache.notify({
				type: "observerRemoved",
				query: this,
				observer
			});
		}
	}
	getObserversCount() {
		return this.observers.length;
	}
	#isInitialPausedFetch() {
		return this.state.fetchStatus === "paused" && this.state.status === "pending";
	}
	invalidate() {
		if (!this.state.isInvalidated) this.#dispatch({ type: "invalidate" });
	}
	async fetch(options, fetchOptions) {
		if (this.state.fetchStatus !== "idle" && this.#retryer?.status() !== "rejected") {
			if (this.state.data !== void 0 && fetchOptions?.cancelRefetch) this.cancel({ silent: true });
			else if (this.#retryer) {
				this.#retryer.continueRetry();
				return this.#retryer.promise;
			}
		}
		if (options) this.setOptions(options);
		if (!this.options.queryFn) {
			const observer = this.observers.find((x) => x.options.queryFn);
			if (observer) this.setOptions(observer.options);
		}
		const abortController = new AbortController();
		const addSignalProperty = (object) => {
			Object.defineProperty(object, "signal", {
				enumerable: true,
				get: () => {
					this.#abortSignalConsumed = true;
					return abortController.signal;
				}
			});
		};
		const fetchFn = () => {
			const queryFn = ensureQueryFn(this.options, fetchOptions);
			const createQueryFnContext = () => {
				const queryFnContext2 = {
					client: this.#client,
					queryKey: this.queryKey,
					meta: this.meta
				};
				addSignalProperty(queryFnContext2);
				return queryFnContext2;
			};
			const queryFnContext = createQueryFnContext();
			this.#abortSignalConsumed = false;
			if (this.options.persister) return this.options.persister(queryFn, queryFnContext, this);
			return queryFn(queryFnContext);
		};
		const createFetchContext = () => {
			const context2 = {
				fetchOptions,
				options: this.options,
				queryKey: this.queryKey,
				client: this.#client,
				state: this.state,
				fetchFn
			};
			addSignalProperty(context2);
			return context2;
		};
		const context = createFetchContext();
		(this.#queryType === "infinite" ? infiniteQueryBehavior(this.options.pages) : this.options.behavior)?.onFetch(context, this);
		this.#revertState = this.state;
		if (this.state.fetchStatus === "idle" || this.state.fetchMeta !== context.fetchOptions?.meta) this.#dispatch({
			type: "fetch",
			meta: context.fetchOptions?.meta
		});
		this.#retryer = createRetryer({
			initialPromise: fetchOptions?.initialPromise,
			fn: context.fetchFn,
			onCancel: (error) => {
				if (error instanceof CancelledError && error.revert) this.setState({
					...this.#revertState,
					fetchStatus: "idle"
				});
				abortController.abort();
			},
			onFail: (failureCount, error) => {
				this.#dispatch({
					type: "failed",
					failureCount,
					error
				});
			},
			onPause: () => {
				this.#dispatch({ type: "pause" });
			},
			onContinue: () => {
				this.#dispatch({ type: "continue" });
			},
			retry: context.options.retry,
			retryDelay: context.options.retryDelay,
			networkMode: context.options.networkMode,
			canRun: () => true
		});
		try {
			const data = await this.#retryer.start();
			if (data === void 0) throw new Error(`${this.queryHash} data is undefined`);
			this.setData(data);
			this.#cache.config.onSuccess?.(data, this);
			this.#cache.config.onSettled?.(data, this.state.error, this);
			return data;
		} catch (error) {
			if (error instanceof CancelledError) {
				if (error.silent) return this.#retryer.promise;
				else if (error.revert) {
					if (this.state.data === void 0) throw error;
					return this.state.data;
				}
			}
			this.#dispatch({
				type: "error",
				error
			});
			this.#cache.config.onError?.(error, this);
			this.#cache.config.onSettled?.(this.state.data, error, this);
			throw error;
		} finally {
			this.scheduleGc();
		}
	}
	#dispatch(action) {
		const reducer = (state) => {
			switch (action.type) {
				case "failed": return {
					...state,
					fetchFailureCount: action.failureCount,
					fetchFailureReason: action.error
				};
				case "pause": return {
					...state,
					fetchStatus: "paused"
				};
				case "continue": return {
					...state,
					fetchStatus: "fetching"
				};
				case "fetch": return {
					...state,
					...fetchState(state.data, this.options),
					fetchMeta: action.meta ?? null
				};
				case "success":
					const newState = {
						...state,
						...successState(action.data, action.dataUpdatedAt),
						dataUpdateCount: state.dataUpdateCount + 1,
						...!action.manual && {
							fetchStatus: "idle",
							fetchFailureCount: 0,
							fetchFailureReason: null
						}
					};
					this.#revertState = action.manual ? newState : void 0;
					return newState;
				case "error":
					const error = action.error;
					return {
						...state,
						error,
						errorUpdateCount: state.errorUpdateCount + 1,
						errorUpdatedAt: Date.now(),
						fetchFailureCount: state.fetchFailureCount + 1,
						fetchFailureReason: error,
						fetchStatus: "idle",
						status: "error",
						isInvalidated: true
					};
				case "invalidate": return {
					...state,
					isInvalidated: true
				};
				case "setState": return {
					...state,
					...action.state
				};
			}
		};
		this.state = reducer(this.state);
		notifyManager.batch(() => {
			this.observers.forEach((observer) => {
				observer.onQueryUpdate();
			});
			this.#cache.notify({
				query: this,
				type: "updated",
				action
			});
		});
	}
};
function fetchState(data, options) {
	return {
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchStatus: canFetch(options.networkMode) ? "fetching" : "paused",
		...data === void 0 && {
			error: null,
			status: "pending"
		}
	};
}
function successState(data, dataUpdatedAt) {
	return {
		data,
		dataUpdatedAt: dataUpdatedAt ?? Date.now(),
		error: null,
		isInvalidated: false,
		status: "success"
	};
}
function getDefaultState$1(options) {
	const data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
	const hasData = data !== void 0;
	const initialDataUpdatedAt = hasData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
	return {
		data,
		dataUpdateCount: 0,
		dataUpdatedAt: hasData ? initialDataUpdatedAt ?? Date.now() : 0,
		error: null,
		errorUpdateCount: 0,
		errorUpdatedAt: 0,
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchMeta: null,
		isInvalidated: false,
		status: hasData ? "success" : "pending",
		fetchStatus: "idle"
	};
}
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/mutation.js
var Mutation = class extends Removable {
	#client;
	#observers;
	#mutationCache;
	#retryer;
	constructor(config) {
		super();
		this.#client = config.client;
		this.mutationId = config.mutationId;
		this.#mutationCache = config.mutationCache;
		this.#observers = [];
		this.state = config.state || getDefaultState();
		this.setOptions(config.options);
		this.scheduleGc();
	}
	setOptions(options) {
		this.options = options;
		this.updateGcTime(this.options.gcTime);
	}
	get meta() {
		return this.options.meta;
	}
	addObserver(observer) {
		if (!this.#observers.includes(observer)) {
			this.#observers.push(observer);
			this.clearGcTimeout();
			this.#mutationCache.notify({
				type: "observerAdded",
				mutation: this,
				observer
			});
		}
	}
	removeObserver(observer) {
		this.#observers = this.#observers.filter((x) => x !== observer);
		this.scheduleGc();
		this.#mutationCache.notify({
			type: "observerRemoved",
			mutation: this,
			observer
		});
	}
	optionalRemove() {
		if (!this.#observers.length) if (this.state.status === "pending") this.scheduleGc();
		else this.#mutationCache.remove(this);
	}
	continue() {
		return this.#retryer?.continue() ?? this.execute(this.state.variables);
	}
	async execute(variables) {
		const onContinue = () => {
			this.#dispatch({ type: "continue" });
		};
		const mutationFnContext = {
			client: this.#client,
			meta: this.options.meta,
			mutationKey: this.options.mutationKey
		};
		this.#retryer = createRetryer({
			fn: () => {
				if (!this.options.mutationFn) return Promise.reject(/* @__PURE__ */ new Error("No mutationFn found"));
				return this.options.mutationFn(variables, mutationFnContext);
			},
			onFail: (failureCount, error) => {
				this.#dispatch({
					type: "failed",
					failureCount,
					error
				});
			},
			onPause: () => {
				this.#dispatch({ type: "pause" });
			},
			onContinue,
			retry: this.options.retry ?? 0,
			retryDelay: this.options.retryDelay,
			networkMode: this.options.networkMode,
			canRun: () => this.#mutationCache.canRun(this)
		});
		const restored = this.state.status === "pending";
		const isPaused = !this.#retryer.canStart();
		try {
			if (restored) onContinue();
			else {
				this.#dispatch({
					type: "pending",
					variables,
					isPaused
				});
				if (this.#mutationCache.config.onMutate) await this.#mutationCache.config.onMutate(variables, this, mutationFnContext);
				const context = await this.options.onMutate?.(variables, mutationFnContext);
				if (context !== this.state.context) this.#dispatch({
					type: "pending",
					context,
					variables,
					isPaused
				});
			}
			const data = await this.#retryer.start();
			await this.#mutationCache.config.onSuccess?.(data, variables, this.state.context, this, mutationFnContext);
			await this.options.onSuccess?.(data, variables, this.state.context, mutationFnContext);
			await this.#mutationCache.config.onSettled?.(data, null, this.state.variables, this.state.context, this, mutationFnContext);
			await this.options.onSettled?.(data, null, variables, this.state.context, mutationFnContext);
			this.#dispatch({
				type: "success",
				data
			});
			return data;
		} catch (error) {
			try {
				await this.#mutationCache.config.onError?.(error, variables, this.state.context, this, mutationFnContext);
			} catch (e) {
				Promise.reject(e);
			}
			try {
				await this.options.onError?.(error, variables, this.state.context, mutationFnContext);
			} catch (e) {
				Promise.reject(e);
			}
			try {
				await this.#mutationCache.config.onSettled?.(void 0, error, this.state.variables, this.state.context, this, mutationFnContext);
			} catch (e) {
				Promise.reject(e);
			}
			try {
				await this.options.onSettled?.(void 0, error, variables, this.state.context, mutationFnContext);
			} catch (e) {
				Promise.reject(e);
			}
			this.#dispatch({
				type: "error",
				error
			});
			throw error;
		} finally {
			this.#mutationCache.runNext(this);
		}
	}
	#dispatch(action) {
		const reducer = (state) => {
			switch (action.type) {
				case "failed": return {
					...state,
					failureCount: action.failureCount,
					failureReason: action.error
				};
				case "pause": return {
					...state,
					isPaused: true
				};
				case "continue": return {
					...state,
					isPaused: false
				};
				case "pending": return {
					...state,
					context: action.context,
					data: void 0,
					failureCount: 0,
					failureReason: null,
					error: null,
					isPaused: action.isPaused,
					status: "pending",
					variables: action.variables,
					submittedAt: Date.now()
				};
				case "success": return {
					...state,
					data: action.data,
					failureCount: 0,
					failureReason: null,
					error: null,
					status: "success",
					isPaused: false
				};
				case "error": return {
					...state,
					data: void 0,
					error: action.error,
					failureCount: state.failureCount + 1,
					failureReason: action.error,
					isPaused: false,
					status: "error"
				};
			}
		};
		this.state = reducer(this.state);
		notifyManager.batch(() => {
			this.#observers.forEach((observer) => {
				observer.onMutationUpdate(action);
			});
			this.#mutationCache.notify({
				mutation: this,
				type: "updated",
				action
			});
		});
	}
};
function getDefaultState() {
	return {
		context: void 0,
		data: void 0,
		error: null,
		failureCount: 0,
		failureReason: null,
		isPaused: false,
		status: "idle",
		variables: void 0,
		submittedAt: 0
	};
}
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/mutationCache.js
var MutationCache = class extends Subscribable {
	constructor(config = {}) {
		super();
		this.config = config;
		this.#mutations = /* @__PURE__ */ new Set();
		this.#scopes = /* @__PURE__ */ new Map();
		this.#mutationId = 0;
	}
	#mutations;
	#scopes;
	#mutationId;
	build(client, options, state) {
		const mutation = new Mutation({
			client,
			mutationCache: this,
			mutationId: ++this.#mutationId,
			options: client.defaultMutationOptions(options),
			state
		});
		this.add(mutation);
		return mutation;
	}
	add(mutation) {
		this.#mutations.add(mutation);
		const scope = scopeFor(mutation);
		if (typeof scope === "string") {
			const scopedMutations = this.#scopes.get(scope);
			if (scopedMutations) scopedMutations.push(mutation);
			else this.#scopes.set(scope, [mutation]);
		}
		this.notify({
			type: "added",
			mutation
		});
	}
	remove(mutation) {
		if (this.#mutations.delete(mutation)) {
			const scope = scopeFor(mutation);
			if (typeof scope === "string") {
				const scopedMutations = this.#scopes.get(scope);
				if (scopedMutations) {
					if (scopedMutations.length > 1) {
						const index = scopedMutations.indexOf(mutation);
						if (index !== -1) scopedMutations.splice(index, 1);
					} else if (scopedMutations[0] === mutation) this.#scopes.delete(scope);
				}
			}
		}
		this.notify({
			type: "removed",
			mutation
		});
	}
	canRun(mutation) {
		const scope = scopeFor(mutation);
		if (typeof scope === "string") {
			const firstPendingMutation = this.#scopes.get(scope)?.find((m) => m.state.status === "pending");
			return !firstPendingMutation || firstPendingMutation === mutation;
		} else return true;
	}
	runNext(mutation) {
		const scope = scopeFor(mutation);
		if (typeof scope === "string") return (this.#scopes.get(scope)?.find((m) => m !== mutation && m.state.isPaused))?.continue() ?? Promise.resolve();
		else return Promise.resolve();
	}
	clear() {
		notifyManager.batch(() => {
			this.#mutations.forEach((mutation) => {
				this.notify({
					type: "removed",
					mutation
				});
			});
			this.#mutations.clear();
			this.#scopes.clear();
		});
	}
	getAll() {
		return Array.from(this.#mutations);
	}
	find(filters) {
		const defaultedFilters = {
			exact: true,
			...filters
		};
		return this.getAll().find((mutation) => matchMutation(defaultedFilters, mutation));
	}
	findAll(filters = {}) {
		return this.getAll().filter((mutation) => matchMutation(filters, mutation));
	}
	notify(event) {
		notifyManager.batch(() => {
			this.listeners.forEach((listener) => {
				listener(event);
			});
		});
	}
	resumePausedMutations() {
		const pausedMutations = this.getAll().filter((x) => x.state.isPaused);
		return notifyManager.batch(() => Promise.all(pausedMutations.map((mutation) => mutation.continue().catch(noop))));
	}
};
function scopeFor(mutation) {
	return mutation.options.scope?.id;
}
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/queryCache.js
var QueryCache = class extends Subscribable {
	constructor(config = {}) {
		super();
		this.config = config;
		this.#queries = /* @__PURE__ */ new Map();
	}
	#queries;
	build(client, options, state) {
		const queryKey = options.queryKey;
		const queryHash = options.queryHash ?? hashQueryKeyByOptions(queryKey, options);
		let query = this.get(queryHash);
		if (!query) {
			query = new Query({
				client,
				queryKey,
				queryHash,
				options: client.defaultQueryOptions(options),
				state,
				defaultOptions: client.getQueryDefaults(queryKey)
			});
			this.add(query);
		}
		return query;
	}
	add(query) {
		if (!this.#queries.has(query.queryHash)) {
			this.#queries.set(query.queryHash, query);
			this.notify({
				type: "added",
				query
			});
		}
	}
	remove(query) {
		const queryInMap = this.#queries.get(query.queryHash);
		if (queryInMap) {
			query.destroy();
			if (queryInMap === query) this.#queries.delete(query.queryHash);
			this.notify({
				type: "removed",
				query
			});
		}
	}
	clear() {
		notifyManager.batch(() => {
			this.getAll().forEach((query) => {
				this.remove(query);
			});
		});
	}
	get(queryHash) {
		return this.#queries.get(queryHash);
	}
	getAll() {
		return [...this.#queries.values()];
	}
	find(filters) {
		const defaultedFilters = {
			exact: true,
			...filters
		};
		return this.getAll().find((query) => matchQuery(defaultedFilters, query));
	}
	findAll(filters = {}) {
		const queries = this.getAll();
		return Object.keys(filters).length > 0 ? queries.filter((query) => matchQuery(filters, query)) : queries;
	}
	notify(event) {
		notifyManager.batch(() => {
			this.listeners.forEach((listener) => {
				listener(event);
			});
		});
	}
	onFocus() {
		notifyManager.batch(() => {
			this.getAll().forEach((query) => {
				query.onFocus();
			});
		});
	}
	onOnline() {
		notifyManager.batch(() => {
			this.getAll().forEach((query) => {
				query.onOnline();
			});
		});
	}
};
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/queryClient.js
var QueryClient = class {
	#queryCache;
	#mutationCache;
	#defaultOptions;
	#queryDefaults;
	#mutationDefaults;
	#mountCount;
	#unsubscribeFocus;
	#unsubscribeOnline;
	constructor(config = {}) {
		this.#queryCache = config.queryCache || new QueryCache();
		this.#mutationCache = config.mutationCache || new MutationCache();
		this.#defaultOptions = config.defaultOptions || {};
		this.#queryDefaults = /* @__PURE__ */ new Map();
		this.#mutationDefaults = /* @__PURE__ */ new Map();
		this.#mountCount = 0;
	}
	mount() {
		this.#mountCount++;
		if (this.#mountCount !== 1) return;
		this.#unsubscribeFocus = focusManager.subscribe(async (focused) => {
			if (focused) {
				await this.resumePausedMutations();
				this.#queryCache.onFocus();
			}
		});
		this.#unsubscribeOnline = onlineManager.subscribe(async (online) => {
			if (online) {
				await this.resumePausedMutations();
				this.#queryCache.onOnline();
			}
		});
	}
	unmount() {
		this.#mountCount--;
		if (this.#mountCount !== 0) return;
		this.#unsubscribeFocus?.();
		this.#unsubscribeFocus = void 0;
		this.#unsubscribeOnline?.();
		this.#unsubscribeOnline = void 0;
	}
	isFetching(filters) {
		return this.#queryCache.findAll({
			...filters,
			fetchStatus: "fetching"
		}).length;
	}
	isMutating(filters) {
		return this.#mutationCache.findAll({
			...filters,
			status: "pending"
		}).length;
	}
	/**
	* Imperative (non-reactive) way to retrieve data for a QueryKey.
	* Should only be used in callbacks or functions where reading the latest data is necessary, e.g. for optimistic updates.
	*
	* Hint: Do not use this function inside a component, because it won't receive updates.
	* Use `useQuery` to create a `QueryObserver` that subscribes to changes.
	*/
	getQueryData(queryKey) {
		const options = this.defaultQueryOptions({ queryKey });
		return this.#queryCache.get(options.queryHash)?.state.data;
	}
	ensureQueryData(options) {
		const defaultedOptions = this.defaultQueryOptions(options);
		const query = this.#queryCache.build(this, defaultedOptions);
		const cachedData = query.state.data;
		if (cachedData === void 0) return this.fetchQuery(options);
		if (options.revalidateIfStale && query.isStaleByTime(resolveStaleTime(defaultedOptions.staleTime, query))) this.prefetchQuery(defaultedOptions);
		return Promise.resolve(cachedData);
	}
	getQueriesData(filters) {
		return this.#queryCache.findAll(filters).map(({ queryKey, state }) => {
			return [queryKey, state.data];
		});
	}
	setQueryData(queryKey, updater, options) {
		const defaultedOptions = this.defaultQueryOptions({ queryKey });
		const prevData = this.#queryCache.get(defaultedOptions.queryHash)?.state.data;
		const data = functionalUpdate(updater, prevData);
		if (data === void 0) return;
		return this.#queryCache.build(this, defaultedOptions).setData(data, {
			...options,
			manual: true
		});
	}
	setQueriesData(filters, updater, options) {
		return notifyManager.batch(() => this.#queryCache.findAll(filters).map(({ queryKey }) => [queryKey, this.setQueryData(queryKey, updater, options)]));
	}
	getQueryState(queryKey) {
		const options = this.defaultQueryOptions({ queryKey });
		return this.#queryCache.get(options.queryHash)?.state;
	}
	removeQueries(filters) {
		const queryCache = this.#queryCache;
		notifyManager.batch(() => {
			queryCache.findAll(filters).forEach((query) => {
				queryCache.remove(query);
			});
		});
	}
	resetQueries(filters, options) {
		const queryCache = this.#queryCache;
		return notifyManager.batch(() => {
			queryCache.findAll(filters).forEach((query) => {
				query.reset();
			});
			return this.refetchQueries({
				type: "active",
				...filters
			}, options);
		});
	}
	cancelQueries(filters, cancelOptions = {}) {
		const defaultedCancelOptions = {
			revert: true,
			...cancelOptions
		};
		const promises = notifyManager.batch(() => this.#queryCache.findAll(filters).map((query) => query.cancel(defaultedCancelOptions)));
		return Promise.all(promises).then(noop).catch(noop);
	}
	invalidateQueries(filters, options = {}) {
		return notifyManager.batch(() => {
			this.#queryCache.findAll(filters).forEach((query) => {
				query.invalidate();
			});
			if (filters?.refetchType === "none") return Promise.resolve();
			return this.refetchQueries({
				...filters,
				type: filters?.refetchType ?? filters?.type ?? "active"
			}, options);
		});
	}
	refetchQueries(filters, options = {}) {
		const fetchOptions = {
			...options,
			cancelRefetch: options.cancelRefetch ?? true
		};
		const promises = notifyManager.batch(() => this.#queryCache.findAll(filters).filter((query) => !query.isDisabled() && !query.isStatic()).map((query) => {
			let promise = query.fetch(void 0, fetchOptions);
			if (!fetchOptions.throwOnError) promise = promise.catch(noop);
			return query.state.fetchStatus === "paused" ? Promise.resolve() : promise;
		}));
		return Promise.all(promises).then(noop);
	}
	fetchQuery(options) {
		const defaultedOptions = this.defaultQueryOptions(options);
		if (defaultedOptions.retry === void 0) defaultedOptions.retry = false;
		const query = this.#queryCache.build(this, defaultedOptions);
		return query.isStaleByTime(resolveStaleTime(defaultedOptions.staleTime, query)) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
	}
	prefetchQuery(options) {
		return this.fetchQuery(options).then(noop).catch(noop);
	}
	fetchInfiniteQuery(options) {
		options._type = "infinite";
		return this.fetchQuery(options);
	}
	prefetchInfiniteQuery(options) {
		return this.fetchInfiniteQuery(options).then(noop).catch(noop);
	}
	ensureInfiniteQueryData(options) {
		options._type = "infinite";
		return this.ensureQueryData(options);
	}
	resumePausedMutations() {
		if (onlineManager.isOnline()) return this.#mutationCache.resumePausedMutations();
		return Promise.resolve();
	}
	getQueryCache() {
		return this.#queryCache;
	}
	getMutationCache() {
		return this.#mutationCache;
	}
	getDefaultOptions() {
		return this.#defaultOptions;
	}
	setDefaultOptions(options) {
		this.#defaultOptions = options;
	}
	setQueryDefaults(queryKey, options) {
		this.#queryDefaults.set(hashKey(queryKey), {
			queryKey,
			defaultOptions: options
		});
	}
	getQueryDefaults(queryKey) {
		const defaults = [...this.#queryDefaults.values()];
		const result = {};
		defaults.forEach((queryDefault) => {
			if (partialMatchKey(queryKey, queryDefault.queryKey)) Object.assign(result, queryDefault.defaultOptions);
		});
		return result;
	}
	setMutationDefaults(mutationKey, options) {
		this.#mutationDefaults.set(hashKey(mutationKey), {
			mutationKey,
			defaultOptions: options
		});
	}
	getMutationDefaults(mutationKey) {
		const defaults = [...this.#mutationDefaults.values()];
		const result = {};
		defaults.forEach((queryDefault) => {
			if (partialMatchKey(mutationKey, queryDefault.mutationKey)) Object.assign(result, queryDefault.defaultOptions);
		});
		return result;
	}
	defaultQueryOptions(options) {
		if (options._defaulted) return options;
		const defaultedOptions = {
			...this.#defaultOptions.queries,
			...this.getQueryDefaults(options.queryKey),
			...options,
			_defaulted: true
		};
		if (!defaultedOptions.queryHash) defaultedOptions.queryHash = hashQueryKeyByOptions(defaultedOptions.queryKey, defaultedOptions);
		if (defaultedOptions.refetchOnReconnect === void 0) defaultedOptions.refetchOnReconnect = defaultedOptions.networkMode !== "always";
		if (defaultedOptions.throwOnError === void 0) defaultedOptions.throwOnError = !!defaultedOptions.suspense;
		if (!defaultedOptions.networkMode && defaultedOptions.persister) defaultedOptions.networkMode = "offlineFirst";
		if (defaultedOptions.queryFn === skipToken) defaultedOptions.enabled = false;
		return defaultedOptions;
	}
	defaultMutationOptions(options) {
		if (options?._defaulted) return options;
		return {
			...this.#defaultOptions.mutations,
			...options?.mutationKey && this.getMutationDefaults(options.mutationKey),
			...options,
			_defaulted: true
		};
	}
	clear() {
		this.#queryCache.clear();
		this.#mutationCache.clear();
	}
};
//#endregion
//#region node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var QueryClientContext = import_react.createContext(void 0);
var useQueryClient = (queryClient) => {
	const client = import_react.useContext(QueryClientContext);
	if (queryClient) return queryClient;
	if (!client) throw new Error("No QueryClient set, use QueryClientProvider to set one");
	return client;
};
var QueryClientProvider = ({ client, children }) => {
	import_react.useEffect(() => {
		client.mount();
		return () => {
			client.unmount();
		};
	}, [client]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientContext.Provider, {
		value: client,
		children
	});
};
//#endregion
//#region src/index.jsx
var root = (0, import_client.createRoot)(document.getElementById("root"));
var queryClient = new QueryClient();
root.render(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
	client: queryClient,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HelmetProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorBoundary, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandContextProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthContextProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchContextProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminContextProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmployeeContextProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JobContextProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionContextProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrowserRouter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(App, {}) }) }) }) }) }) }) }) }) }) })
}) }));
reportWebVitals();
//#endregion
export { FiRefreshCw as $, FaLinkedin as A, useAdminContext as B, ModalBox as C, FaGithub as D, FaEnvelope as E, Search as F, useSearchContext as G, useBrandContext as H, __vitePreload as I, FiActivity as J, useSectionContext as K, StateManagedSelect$1 as L, FaRegEye as M, FaSuitcase as N, FaHandHoldingUsd as O, FaUsers as P, FiMessageSquare as Q, require_lib as R, TextInput as S, FaBook as T, useEmployeeContext as U, useAuthContext as V, useJobContext as W, FiCheckCircle as X, FiBriefcase as Y, FiMail as Z, Helmet as _, environmentManager as a, FiUsers as at, CircularLoader as b, replaceData as c, Link as ct, shallowEqualObjects as d, useParams as dt, FiShield as et, shouldThrowError as f, require_react_dom as ft, Subscribable as g, focusManager as h, pendingThenable as i, FiUserX as it, FaPhone as j, FaLink as k, resolveQueryBoolean as l, useSearchParams as lt, timeoutManager as m, fetchState as n, FiUser as nt, isValidTimeout as o, GenIcon as ot, timeUntilStale as p, n as q, notifyManager as r, FiUserCheck as rt, noop as s, logo_default as st, useQueryClient as t, FiTrash2 as tt, resolveStaleTime as u, useNavigate as ut, MultiCarousal as v, TabMenu as w, SelectInput as x, Pagination as y, require_prop_types as z };
