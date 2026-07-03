import { a as __toESM, i as __exportAll, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-B5ErqjvK.js";
import { H as useBrandContext, S as TextInput, V as useAuthContext, ct as Link, st as logo_default, ut as useNavigate } from "./index-bM5YXtog.js";
//#region src/shared/auth/Login.jsx
var Login_exports = /* @__PURE__ */ __exportAll({ default: () => Login });
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Login = () => {
	const { siteConfig } = useBrandContext();
	const { AuthenticateUser, loading } = useAuthContext();
	const navigate = useNavigate();
	const [loginCredentials, setLoginCredentials] = (0, import_react.useState)({
		email: "",
		password: ""
	});
	const [formError, setFormError] = (0, import_react.useState)({
		email: false,
		password: false
	});
	const [errorMessage, setErrorMessage] = (0, import_react.useState)("");
	const [passwordToggle, setPasswordToggle] = (0, import_react.useState)(false);
	const validateFormInput = () => {
		const errors = {};
		if (!loginCredentials.email.trim()) errors.email = true;
		if (!loginCredentials.password.trim()) errors.password = true;
		setFormError(errors);
		return Object.keys(errors).length === 0;
	};
	const handlePasswordToggle = () => {
		setPasswordToggle(!passwordToggle);
	};
	const handleInputChange = (e) => {
		setLoginCredentials({
			...loginCredentials,
			[e.target.name]: e.target.value
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (validateFormInput()) try {
			await AuthenticateUser(loginCredentials);
			navigate("/");
		} catch (error) {
			setErrorMessage(error.message);
			setTimeout(() => {
				setErrorMessage("");
			}, 3e3);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-slate-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md w-full space-y-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white border border-slate-200 rounded-2xl shadow-md p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center justify-center mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo_default,
							alt: "Logo",
							className: "w-16 h-16 rounded-xl object-cover mb-4 border border-slate-100 shadow-sm"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-center text-2xl font-bold text-slate-800",
							children: "Login here"
						})]
					}),
					errorMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bg-red-50 text-red-600 text-sm px-4 py-3 rounded-lg border border-red-100 mb-4",
						children: errorMessage
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
										children: ["Username or Email ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", {
											className: "text-red-500",
											children: "*"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
										type: "text",
										name: "email",
										value: loginCredentials.email,
										onChange: handleInputChange,
										placeholder: "Enter Username or Email",
										className: "w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors"
									}),
									formError.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-medium text-red-500",
										children: "Username or Email is required"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
										children: ["Password ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", {
											className: "text-red-500",
											children: "*"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
										type: passwordToggle ? "text" : "password",
										name: "password",
										value: loginCredentials.password,
										onChange: handleInputChange,
										placeholder: "Enter Password",
										className: "w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors"
									}),
									formError.password && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-medium text-red-500",
										children: "Password is required"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 mt-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: passwordToggle,
											onChange: handlePasswordToggle,
											id: "flexCheckDefault",
											className: "rounded border-slate-300 text-[#2563EB] focus:ring-[#2563EB]"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-medium text-slate-500 cursor-pointer select-none",
											htmlFor: "flexCheckDefault",
											children: "show password"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-3 pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "w-full bg-[#2563EB] hover:bg-blue-700 text-white font-semibold py-3 rounded-lg border-0 shadow-sm transition-colors text-sm",
									disabled: loading,
									children: loading ? "Please wait..." : "Login"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => navigate("/"),
									className: "w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2.5 rounded-lg border-0 transition-colors text-xs",
									children: "Back to home"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 pt-6 border-t border-slate-100 space-y-2.5 text-xs text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-0 text-slate-500",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/forgot-password",
									className: "text-[#2563EB] font-medium no-underline hover:underline",
									children: "Forgot Password?"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mb-0 text-slate-500",
								children: [
									"Don't have an account?",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/register",
										className: "text-[#2563EB] font-bold no-underline hover:underline",
										children: "Create an account"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact-us",
									className: "text-slate-400 no-underline hover:underline",
									children: "Need help signing in?"
								})
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-center text-xs text-slate-400",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"All rights reserved by © ",
					siteConfig.appName,
					"™"
				] })
			})]
		})
	});
};
//#endregion
export { Login_exports as t };
