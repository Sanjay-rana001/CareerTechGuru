import { a as __toESM, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-B5ErqjvK.js";
import { a as addDoc, n as db, v as collection } from "./firebase-t_zXV7oF.js";
import { H as useBrandContext, S as TextInput } from "./index-bM5YXtog.js";
//#region src/pages/ContactUs.css
var import_react = /* @__PURE__ */ __toESM(require_react());
//#endregion
//#region src/assets/phone-call.png
var phone_call_default = "/assets/phone-call-C6fnnsXb.png";
//#endregion
//#region src/assets/domain.png
var domain_default = "/assets/domain-FdmvGC8N.png";
//#endregion
//#region src/assets/email.png
var email_default = "/assets/email-1YVGnmYf.png";
//#endregion
//#region src/assets/location.png
var location_default = "/assets/location-D-OVHcDm.png";
//#endregion
//#region src/pages/ContactUs.jsx
var import_jsx_runtime = require_jsx_runtime();
var ContactUs = () => {
	const { siteConfig } = useBrandContext();
	const companyName = siteConfig.companyName;
	const companyWebsite = siteConfig.contactWebsite;
	const Email = siteConfig.contactEmail;
	const Phone = siteConfig.contactPhone;
	const Address = siteConfig.contactAddress;
	const [inputs, setInputs] = (0, import_react.useState)({
		name: "",
		phoneNumber: "",
		email: "",
		description: ""
	});
	const handleChange = (e) => {
		setInputs({
			...inputs,
			[e.target.name]: e.target.value
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!inputs.name) {
			alert("Please enter your name.");
			return;
		}
		if (!inputs.phoneNumber) {
			alert("Please enter your phone number.");
			return;
		}
		if (!inputs.email) {
			alert("Please enter your email.");
			return;
		}
		if (!inputs.description) {
			alert("Please enter a description of your query.");
			return;
		}
		try {
			await addDoc(collection(db, "contact_queries"), {
				...inputs,
				submittedAt: (/* @__PURE__ */ new Date()).toISOString()
			});
			alert("Your query has been submitted successfully.");
			setInputs({
				name: "",
				phoneNumber: "",
				email: "",
				description: ""
			});
		} catch (error) {
			console.error("Error submitting query to Firestore:", error);
			alert("There was an error submitting the form!");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "page-wrapper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "cn",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-center h1 text-prime",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Contact Us" })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "contact-us-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "form-container",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "description-form",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "flex flex-col gap-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1.5 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-sm font-semibold text-slate-700",
									children: ["Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", {
										className: "text-red-500",
										children: "*"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									type: "text",
									name: "name",
									value: inputs.name,
									onChange: handleChange,
									placeholder: "Name"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1.5 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-sm font-semibold text-slate-700",
									children: ["Phone Number", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", {
										className: "text-red-500",
										children: "*"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									type: "text",
									name: "phoneNumber",
									value: inputs.phoneNumber,
									onChange: handleChange,
									placeholder: "Phone Number"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1.5 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-sm font-semibold text-slate-700",
									children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", {
										className: "text-red-500",
										children: "*"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									type: "email",
									name: "email",
									value: inputs.email,
									onChange: handleChange,
									placeholder: "Email"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1.5 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-sm font-semibold text-slate-700",
									children: ["Description", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", {
										className: "text-red-500",
										children: "*"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									name: "description",
									value: inputs.description,
									onChange: handleChange,
									placeholder: "Description/Queries",
									className: "w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all duration-200 resize-y min-h-[100px]"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pt-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "w-full sm:w-auto px-8 py-2.5 bg-[#2563EB] hover:bg-blue-700 text-white font-semibold rounded-lg shadow-sm transition-colors text-sm border-0 cursor-pointer",
									children: "Submit"
								})
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "contact-info",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "contact-item",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: phone_call_default,
									height: "30px",
									width: "25px",
									className: "Image",
									alt: "Phone"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-semibold",
									children: Phone
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Company Name:" }),
									" ",
									companyName
								] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "contact-item",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: location_default,
								height: "30px",
								width: "25px",
								className: "Image",
								alt: "Address"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm",
								children: Address
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "contact-item",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: domain_default,
								height: "30px",
								width: "25px",
								className: "Image",
								alt: "Website"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: companyWebsite,
								target: "_blank",
								rel: "noopener noreferrer",
								children: companyWebsite
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "contact-item",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: email_default,
								height: "30px",
								width: "25px",
								className: "Image",
								alt: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${Email}`,
								target: "_blank",
								rel: "noopener noreferrer",
								children: Email
							})]
						})
					]
				})]
			})
		})]
	});
};
//#endregion
export { ContactUs as default };
