import { a as __toESM, i as __exportAll, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-B5ErqjvK.js";
import { V as useAuthContext, ct as Link, ut as useNavigate } from "./index-bM5YXtog.js";
//#region src/shared/auth/ForgotPassword.jsx
var ForgotPassword_exports = /* @__PURE__ */ __exportAll({ default: () => ForgotPassword });
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ForgotPassword = () => {
	const { forgotPassword } = useAuthContext();
	const [email, setEmail] = (0, import_react.useState)("");
	const navigate = useNavigate();
	const handleGetOTP = async (e) => {
		e.preventDefault();
		try {
			const response = await forgotPassword(email);
			console.log("this is status", response.status);
			sessionStorage.setItem("reset-email", email);
			navigate("/verify-otp");
		} catch (error) {
			console.error("Error sending OTP:", error);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-fluid bg-slate-100",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "row min-h-[100vh] justify-center items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-lg-6 bg-light shadow py-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "h2 text-[#0E42A8]",
						children: "Forgot your password"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "form-group mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "h6",
							htmlFor: "email",
							children: "Enter your registered email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							className: "form-control",
							placeholder: "Enter your email",
							value: email,
							onChange: (e) => setEmail(e.target.value)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "form-group mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn bg-prime text-light",
							onClick: handleGetOTP,
							children: "Get OTP"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/login",
								className: "text-[#0E42A8] nav-link",
								children: "Back to login"
							})
						})]
					})] })]
				})
			})
		})
	});
};
//#endregion
export { ForgotPassword_exports as t };
