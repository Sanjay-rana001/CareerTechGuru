import { a as __toESM, i as __exportAll, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-B5ErqjvK.js";
import { a as uploadBytes, i as ref, n as getDownloadURL } from "./index.esm-CYbMinJH.js";
import { i as storage } from "./firebase-t_zXV7oF.js";
import { H as useBrandContext, S as TextInput, V as useAuthContext, b as CircularLoader, ct as Link, st as logo_default, ut as useNavigate, x as SelectInput } from "./index-bM5YXtog.js";
import { t as require_umd } from "./umd-DpLK-Gi7.js";
import { t as require_build } from "./build-lBz7F1mB.js";
//#region src/shared/auth/signup/FormStepOne.jsx
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FormStepOne = ({ nextStep, handleInputChange, formData }) => {
	const [formErrors, setFormErrors] = (0, import_react.useState)({
		role: "",
		email: "",
		username: "",
		password: "",
		confirmPassword: ""
	});
	const [confirmPassword, setConfirmPassword] = (0, import_react.useState)("");
	const [passwordToggle, setPasswordToggle] = (0, import_react.useState)(false);
	const validateForm = () => {
		let isValid = true;
		const errors = {};
		if (!formData.email.trim()) {
			errors.email = "Email is required";
			isValid = false;
		}
		if (!formData.username.trim()) {
			errors.username = "Username is required";
			isValid = false;
		}
		if (!formData.role) {
			errors.role = "Please select an option";
			isValid = false;
		}
		const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
		if (!formData.password.trim()) {
			errors.password = "Password is required";
			isValid = false;
		} else if (!passwordPattern.test(formData.password)) {
			errors.password = "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character";
			isValid = false;
		}
		if (formData.password !== confirmPassword) {
			errors.confirmPassword = "Passwords do not match";
			isValid = false;
		}
		setFormErrors(errors);
		return isValid;
	};
	const handlePasswordToggle = () => {
		setPasswordToggle(!passwordToggle);
	};
	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (validateForm()) nextStep();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "role",
						className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
						children: "What are you looking for"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectInput, {
						options: [{
							value: "user",
							label: "Looking for job"
						}, {
							value: "admin",
							label: "Hire employees"
						}],
						value: formData.role,
						onChange: handleInputChange("role")
					}),
					formErrors.role && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-red-500 text-xs font-medium mb-0",
						children: formErrors.role
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "username",
						className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
						children: "Username"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						type: "text",
						placeholder: "Enter your username",
						name: "username",
						value: formData.username,
						onChange: handleInputChange("username")
					}),
					formErrors.username && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-red-500 text-xs font-medium mb-0",
						children: formErrors.username
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						htmlFor: "email",
						className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
						children: ["Email ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", {
							className: "text-red-500",
							children: "*"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						type: "text",
						placeholder: "e.g. abc@example.com",
						name: "email",
						value: formData.email,
						onChange: handleInputChange("email")
					}),
					formErrors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-red-500 text-xs font-medium mb-0",
						children: formErrors.email
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						htmlFor: "password",
						className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
						children: ["Password ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", {
							className: "text-red-500",
							children: "*"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						type: passwordToggle ? "text" : "password",
						placeholder: "Enter password",
						name: "password",
						value: formData.password,
						onChange: handleInputChange("password")
					}),
					formErrors.password && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-red-500 text-xs font-medium mb-0",
						children: formErrors.password
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						htmlFor: "confirmPassword",
						className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
						children: ["Confirm Password ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", {
							className: "text-red-500",
							children: "*"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						type: passwordToggle ? "text" : "password",
						placeholder: "Confirm password",
						name: "confirmPassword",
						value: confirmPassword,
						onChange: (e) => setConfirmPassword(e.target.value)
					}),
					formErrors.confirmPassword && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-red-500 text-xs font-medium mb-0",
						children: formErrors.confirmPassword
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 pt-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					checked: passwordToggle,
					onChange: handlePasswordToggle,
					id: "flexCheckDefault",
					className: "rounded border-slate-300 text-[#2563EB] focus:ring-[#2563EB]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-xs font-medium text-slate-500 cursor-pointer select-none",
					htmlFor: "flexCheckDefault",
					children: "Show password"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: handleFormSubmit,
					className: "w-full bg-[#2563EB] hover:bg-blue-700 text-white font-semibold py-3 rounded-lg border-0 shadow-sm transition-colors text-sm",
					children: "Continue"
				})
			})
		]
	});
};
//#endregion
//#region src/shared/auth/signup/FormStepTwo.jsx
var import_umd = require_umd();
var FormStepTwo = ({ nextStep, prevStep, handleInputChange, formData, handleSubmit }) => {
	const { loading } = useAuthContext();
	const [formErrors, setFormErrors] = (0, import_react.useState)({
		firstName: "",
		lastName: "",
		mobile: ""
	});
	const [countriesList, setCountriesList] = (0, import_react.useState)([]);
	const [errorMessage, setErrorMessage] = (0, import_react.useState)("");
	const [successMessage, setSuccessMessage] = (0, import_react.useState)("");
	const [file, setFile] = (0, import_react.useState)(null);
	const fileInput = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const fetchCountries = async () => {
			try {
				const countryOptions = (await (0, import_umd.GetCountries)()).map((country) => ({
					value: country.isoCode,
					label: country.name
				}));
				setCountriesList(countryOptions);
			} catch (error) {
				console.error("Failed to fetch countries:", error);
			}
		};
		fetchCountries();
	}, []);
	const validateForm = () => {
		let isValid = true;
		const errors = {};
		if (!formData.firstName.trim()) {
			errors.firstName = "First Name is required";
			isValid = false;
		}
		if (!formData.lastName.trim()) {
			errors.lastName = "Last Name is required";
			isValid = false;
		}
		if (!formData.mobile.trim()) {
			errors.mobile = "Mobile number is required";
			isValid = false;
		} else if (!/^\d{10}$/.test(formData.mobile)) {
			errors.mobile = "Mobile number must be 10 digits and no alphabets";
			isValid = false;
		}
		setFormErrors(errors);
		return isValid;
	};
	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (validateForm()) handleSubmit();
	};
	const handleFileChange = (e) => {
		setFile(e.target.files[0]);
	};
	const handleResumeUpload = async (e) => {
		e.preventDefault();
		setErrorMessage("");
		setSuccessMessage("");
		if (!file) {
			setErrorMessage("Please select a file to upload.");
			return;
		}
		try {
			if (!formData.email) {
				setErrorMessage("Please enter your email in Step 1 first.");
				return;
			}
			const downloadURL = await getDownloadURL((await uploadBytes(ref(storage, `resumes/${formData.email}/${file.name}`), file)).ref);
			handleInputChange("resumeUrl")({ target: { value: downloadURL } });
			setSuccessMessage("File uploaded successfully.");
		} catch (error) {
			console.error("Error uploading file to Firebase Storage:", error);
			setErrorMessage("Error in setting up the request: " + error.message);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "country",
						className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
						children: "Country"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectInput, {
						options: countriesList,
						value: formData.country,
						onChange: handleInputChange("country")
					}),
					formErrors.country && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-red-500 text-xs font-medium mb-0",
						children: formErrors.country
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						htmlFor: "firstName",
						className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
						children: ["First Name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", {
							className: "text-red-500",
							children: "*"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						type: "text",
						placeholder: "Enter First Name",
						name: "firstName",
						value: formData.firstName,
						onChange: handleInputChange("firstName")
					}),
					formErrors.firstName && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-red-500 text-xs font-medium mb-0",
						children: formErrors.firstName
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						htmlFor: "lastName",
						className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
						children: ["Last Name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", {
							className: "text-red-500",
							children: "*"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						type: "text",
						placeholder: "Enter Last Name",
						name: "lastName",
						value: formData.lastName,
						onChange: handleInputChange("lastName")
					}),
					formErrors.lastName && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-red-500 text-xs font-medium mb-0",
						children: formErrors.lastName
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						htmlFor: "mobile",
						className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
						children: ["Mobile Number ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", {
							className: "text-red-500",
							children: "*"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						type: "text",
						placeholder: "Enter 10-digit mobile number",
						name: "mobile",
						value: formData.mobile,
						onChange: handleInputChange("mobile")
					}),
					formErrors.mobile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-red-500 text-xs font-medium mb-0",
						children: formErrors.mobile
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-bold text-slate-700 block",
						children: "Upload Resume"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "file",
						name: "file",
						className: "w-full bg-white border border-slate-300 rounded-lg text-xs p-2 focus:outline-none",
						ref: fileInput,
						onChange: handleFileChange
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-4 flex-wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold text-slate-400",
							children: "Supported formats: .doc, .docx, .pdf"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: handleResumeUpload,
							className: "px-4 py-1.5 bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-bold rounded-lg border-0 transition-colors cursor-pointer",
							children: "Upload"
						})]
					}),
					errorMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium text-red-500 mb-0",
						children: errorMessage
					}),
					successMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium text-emerald-500 mb-0",
						children: successMessage
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-3 pt-4 border-t border-slate-100",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: prevStep,
					className: "flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 rounded-lg border-0 transition-colors text-sm",
					children: "Back"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: handleFormSubmit,
					className: "flex-1 bg-[#2563EB] hover:bg-blue-700 text-white font-semibold py-3 rounded-lg border-0 shadow-sm transition-colors text-sm",
					disabled: loading,
					children: loading ? "Registering..." : "Submit"
				})]
			})
		]
	});
};
//#endregion
//#region src/shared/auth/signup/EmailVerify.jsx
var import_build = /* @__PURE__ */ __toESM(require_build());
var EmailVerify = () => {
	const { verifyUserEmail } = useAuthContext();
	const [OTP, setOTP] = (0, import_react.useState)("");
	const navigate = useNavigate();
	const handleOTPChange = (otp) => {
		setOTP(otp);
	};
	const handleVerifyClick = async () => {
		try {
			const result = await verifyUserEmail(OTP);
			console.log("Verification result:", result);
			if (result.token) navigate("/");
			else console.error("Verification failed:", result.message);
		} catch (error) {
			console.error("Error verifying email:", error);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col items-center gap-5 my-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-bold text-lg text-slate-800 text-center mb-1",
				children: "Verify OTP received on email"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-center otp-container",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_build.default, {
					value: OTP,
					OTPLength: 6,
					onChange: handleOTPChange,
					autoFocus: true,
					otpType: "number",
					disabled: false,
					className: "otp-input-fields"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "w-full bg-[#2563EB] hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg border-0 shadow-sm transition-colors text-sm cursor-pointer",
				onClick: handleVerifyClick,
				children: "Verify"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs font-semibold text-slate-500 pt-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_build.ResendOTP, {
					autoFocus: true,
					otpType: "number",
					onResendClick: () => console.log("Resend clicked"),
					disabled: false,
					secure: true
				})
			})
		]
	});
};
//#endregion
//#region src/shared/auth/signup/Signup.jsx
var Signup_exports = /* @__PURE__ */ __exportAll({ default: () => Signup });
var Signup = () => {
	const { siteConfig } = useBrandContext();
	const [step, setStep] = (0, import_react.useState)(1);
	const { RegisterUser, loading } = useAuthContext();
	const [formData, setFormData] = (0, import_react.useState)({
		firstName: "",
		lastName: "",
		email: "",
		mobile: "",
		username: "",
		country: "",
		password: "",
		role: "",
		resumeUrl: ""
	});
	useNavigate();
	const nextStep = () => setStep((prevStep) => prevStep + 1);
	const prevStep = () => setStep((prevStep) => prevStep - 1);
	const handleInputData = (input) => (e) => {
		const { value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[input]: value
		}));
	};
	const handleSubmit = async () => {
		try {
			if (await RegisterUser(formData)) nextStep();
			else console.error("Registration failed: Unexpected response from server");
		} catch (error) {
			console.error("Error during registration:", error);
		}
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircularLoader, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-slate-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-xl w-full space-y-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white border border-slate-200 rounded-2xl shadow-md p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center justify-center mb-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo_default,
							alt: "Logo",
							className: "w-16 h-16 rounded-xl object-cover mb-4 border border-slate-100 shadow-sm"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-center text-2xl font-bold text-slate-800",
							children: "Register your account"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-slate-500 mt-2",
							children: [
								"Already have an account?",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/login",
									className: "text-[#2563EB] font-bold no-underline hover:underline",
									children: "Login here"
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4",
					children: [
						step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormStepOne, {
							nextStep,
							handleInputChange: handleInputData,
							formData,
							handleSubmit
						}),
						step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormStepTwo, {
							nextStep,
							prevStep,
							handleInputChange: handleInputData,
							handleSubmit,
							formData
						}),
						step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmailVerify, {
							nextStep,
							prevStep,
							handleInputChange: handleInputData,
							handleSubmit,
							formData
						})
					]
				})]
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
export { Signup_exports as t };
