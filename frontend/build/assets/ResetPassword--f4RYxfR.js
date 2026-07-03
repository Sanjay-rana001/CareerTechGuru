import { a as __toESM, i as __exportAll, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-B5ErqjvK.js";
import { S as TextInput, V as useAuthContext, ut as useNavigate } from "./index-bM5YXtog.js";
//#region src/shared/auth/ResetPassword.jsx
var ResetPassword_exports = /* @__PURE__ */ __exportAll({ default: () => ResetPassword });
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ResetPassword = () => {
	const { resetPassword } = useAuthContext();
	const email = sessionStorage.getItem("reset-email");
	const [newPassword, setNewPassword] = (0, import_react.useState)("");
	const [confirmPassword, setConfirmPassword] = (0, import_react.useState)("");
	const [passwordToggle, setPasswordToggle] = (0, import_react.useState)(false);
	const navigate = useNavigate();
	const handleResetPassword = async () => {
		if (newPassword !== confirmPassword) {
			alert("Passwords do not match");
			return;
		}
		try {
			console.log("this is email", email, newPassword);
			await resetPassword(email, newPassword);
			sessionStorage.clear("reset-email");
			navigate("/login");
		} catch (error) {
			console.error("Error resetting password:", error);
		}
	};
	const handlePasswordToggle = () => {
		setPasswordToggle(!passwordToggle);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-fluid",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "row justify-center items-center min-h-[100vh]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-lg-6 bg-light shadow py-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "h2 text-prime",
						children: "Enter new password"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-slate-100 p-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "form-group mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									htmlFor: "newPassword",
									className: "h6 mb-1",
									children: ["New Password ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", {
										className: "text-danger",
										children: "*"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									type: passwordToggle ? "text" : "password",
									className: "form-control",
									name: "newPassword",
									value: newPassword,
									onChange: (e) => setNewPassword(e.target.value),
									placeholder: "New Password"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "form-group mb-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										htmlFor: "confirmPassword",
										className: "h6 mb-1",
										children: ["Confirm New Password ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", {
											className: "text-danger",
											children: "*"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
										type: passwordToggle ? "text" : "password",
										className: "form-control",
										name: "confirmPassword",
										value: confirmPassword,
										onChange: (e) => setConfirmPassword(e.target.value),
										placeholder: "Confirm New Password"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "form-group mt-2 flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											className: "border",
											type: "checkbox",
											checked: passwordToggle,
											onChange: handlePasswordToggle,
											id: "toggleConfirmPassword"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "toggleConfirmPassword",
											children: "Show password"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "form-group mb-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "btn bg-prime text-light",
									onClick: handleResetPassword,
									children: "Reset Password"
								})
							})
						]
					})]
				})
			})
		})
	});
};
//#endregion
export { ResetPassword_exports as t };
