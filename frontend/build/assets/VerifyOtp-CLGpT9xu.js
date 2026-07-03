import { a as __toESM, i as __exportAll, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-B5ErqjvK.js";
import { V as useAuthContext, ut as useNavigate } from "./index-bM5YXtog.js";
import { t as require_build } from "./build-lBz7F1mB.js";
//#region src/shared/auth/VerifyOtp.jsx
var VerifyOtp_exports = /* @__PURE__ */ __exportAll({ default: () => ForgotPassword });
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_build = /* @__PURE__ */ __toESM(require_build());
var import_jsx_runtime = require_jsx_runtime();
var ForgotPassword = ({ handleBackToLogin }) => {
	const { forgotPassword, verifyOtpForPasswordReset, resetPassword } = useAuthContext();
	const [email, setEmail] = (0, import_react.useState)("");
	const [otp, setOtp] = (0, import_react.useState)("");
	const [confirmPassword, setConfirmPassword] = (0, import_react.useState)("");
	const [otpSent, setOtpSent] = (0, import_react.useState)(false);
	const [otpVerified, setOtpVerified] = (0, import_react.useState)(false);
	const navigate = useNavigate();
	const handleGetOTP = async () => {
		try {
			if ((await forgotPassword(email)).status === 200) setOtpSent(true);
		} catch (error) {
			console.error("Error sending OTP:", error);
		}
	};
	const handleVerifyOTP = async () => {
		try {
			await verifyOtpForPasswordReset(otp);
			navigate("/reset-password");
		} catch (error) {
			console.error("Error verifying OTP:", error);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-fluid",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-lg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "row justify-center items-center min-h-[100vh]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-lg-6 bg-light shadow py-6 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "h2 text-[#0E42A8]",
						children: "Verify your OTP"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bg-slate-100 p-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "form-group py-3 flex flex-col gap-3",
							id: "verify-otp",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "",
									children: "Enter OTP received on your email"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_build.default, {
									class: "otpnum",
									value: otp,
									OTPLength: 6,
									onChange: (otp) => setOtp(otp)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_build.ResendOTP, {
									otpType: "number",
									onResendClick: handleGetOTP
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "btn bg-prime text-light",
									onClick: handleVerifyOTP,
									children: "Verify OTP"
								})
							]
						})
					})]
				})
			})
		})
	});
};
//#endregion
export { VerifyOtp_exports as t };
