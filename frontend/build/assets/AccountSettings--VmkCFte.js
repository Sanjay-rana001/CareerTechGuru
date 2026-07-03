import { a as __toESM, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-B5ErqjvK.js";
import { V as useAuthContext } from "./index-bM5YXtog.js";
//#region src/shared/employerPages/components/AccountSettings.jsx
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var AccountSettings = () => {
	const { updateUserDetails } = useAuthContext();
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [userData, setUserData] = (0, import_react.useState)({
		_id: "",
		firstName: "",
		lastName: "",
		email: "",
		username: "",
		mobile: "",
		country: ""
	});
	(0, import_react.useEffect)(() => {
		const data = JSON.parse(sessionStorage.getItem("data") || "{}");
		if (data) setUserData({
			_id: data._id || data.id || "",
			firstName: data.firstName || "",
			lastName: data.lastName || "",
			email: data.email || "",
			username: data.username || "",
			mobile: data.mobile || "",
			country: data.country || ""
		});
	}, []);
	const handleChange = (e) => {
		setUserData({
			...userData,
			[e.target.name]: e.target.value
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const { _id, ...updateData } = userData;
			if (!_id) throw new Error("User ID is missing.");
			await updateUserDetails(_id, updateData);
		} catch (error) {
			console.error("Failed to update settings:", error);
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-slate-50 min-h-screen py-10 font-sans",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-4xl mx-auto px-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-gradient-to-r from-slate-800 to-slate-900 px-8 py-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-2xl font-bold text-white mb-0",
							children: "Account Settings"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-slate-300 mt-1 text-sm mb-0",
							children: "Update your personal information and contact details"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-8 space-y-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 gap-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-sm font-semibold text-gray-700 mb-2",
									children: "First Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									name: "firstName",
									value: userData.firstName,
									onChange: handleChange,
									className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-800 focus:border-slate-800 transition-all text-sm outline-none"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-sm font-semibold text-gray-700 mb-2",
									children: "Last Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									name: "lastName",
									value: userData.lastName,
									onChange: handleChange,
									className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-800 focus:border-slate-800 transition-all text-sm outline-none"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "md:col-span-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-sm font-semibold text-gray-700 mb-2",
											children: "Email Address"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "email",
											name: "email",
											value: userData.email,
											disabled: true,
											className: "w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed text-sm outline-none"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-gray-400 mt-1",
											children: "Your email address cannot be changed as it is used for login."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-sm font-semibold text-gray-700 mb-2",
									children: "Username"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									name: "username",
									value: userData.username,
									onChange: handleChange,
									className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-800 focus:border-slate-800 transition-all text-sm outline-none"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-sm font-semibold text-gray-700 mb-2",
									children: "Mobile Number"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									name: "mobile",
									value: userData.mobile,
									onChange: handleChange,
									className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-800 focus:border-slate-800 transition-all text-sm outline-none"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "md:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-sm font-semibold text-gray-700 mb-2",
										children: "Country"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										name: "country",
										value: userData.country,
										onChange: handleChange,
										className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-800 focus:border-slate-800 transition-all text-sm outline-none"
									})]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bg-gray-50 px-8 py-5 border-t border-gray-100 flex justify-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: loading,
							className: "px-6 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-900 text-white font-medium shadow-sm transition-all disabled:opacity-70 disabled:cursor-not-allowed",
							children: loading ? "Saving..." : "Save Changes"
						})
					})
				]
			})
		})
	});
};
//#endregion
export { AccountSettings as default };
