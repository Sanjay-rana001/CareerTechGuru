import { a as __toESM, i as __exportAll, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-B5ErqjvK.js";
import { a as uploadBytes, i as ref, n as getDownloadURL } from "./index.esm-CYbMinJH.js";
import { i as storage, m as setDoc, n as db, t as auth, y as doc } from "./firebase-t_zXV7oF.js";
import { B as useAdminContext, C as ModalBox, E as FaEnvelope, L as StateManagedSelect$1, b as CircularLoader, j as FaPhone, k as FaLink, ut as useNavigate } from "./index-bM5YXtog.js";
import { t as q } from "./esm-paWcRsSW.js";
import { t as require_lib } from "./lib-Cu7KInUU.js";
import { t as require_umd } from "./umd-DpLK-Gi7.js";
import { t as UpdateInput } from "./UpdateInput-nfae8MLa.js";
//#region src/shared/employerPages/components/ProfileFormOne.jsx
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_lib = /* @__PURE__ */ __toESM(require_lib());
var import_jsx_runtime = require_jsx_runtime();
var ProfileFormOne = ({ nextStep, handleChange, handleDescriptionChange, tags, setTags, setValues, values }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-2xl font-bold text-white mb-0",
						children: "Company Basic Details"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-blue-100 mt-1 text-sm mb-0",
						children: "Step 1 of 2: Let candidates know who you are"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-8 space-y-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								htmlFor: "companyName",
								className: "block text-sm font-semibold text-gray-700 mb-2",
								children: ["Company Name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-red-500",
									children: "*"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								onChange: handleChange("companyName"),
								value: values?.companyName || "",
								placeholder: "e.g. Acme Corp",
								className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								htmlFor: "companyContact",
								className: "block text-sm font-semibold text-gray-700 mb-2",
								children: ["Company Contact No ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-red-500",
									children: "*"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								onChange: handleChange("companyContact"),
								value: values?.companyContact || "",
								placeholder: "e.g. +1 234 567 8900",
								className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								htmlFor: "companyEmail",
								className: "block text-sm font-semibold text-gray-700 mb-2",
								children: ["Company E-mail ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-red-500",
									children: "*"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								onChange: handleChange("companyEmail"),
								value: values?.companyEmail || "",
								placeholder: "e.g. contact@acmecorp.com",
								className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								htmlFor: "companyWebsite",
								className: "block text-sm font-semibold text-gray-700 mb-2",
								children: ["Company Website Link ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-red-500",
									children: "*"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "url",
								onChange: handleChange("companyWebsite"),
								value: values?.companyWebsite || "",
								placeholder: "e.g. https://acmecorp.com",
								className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								htmlFor: "GST",
								className: "block text-sm font-semibold text-gray-700 mb-2",
								children: ["Company GST No. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-red-500",
									children: "*"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								onChange: handleChange("GST"),
								value: values?.GST || "",
								placeholder: "e.g. 22AAAAA0000A1Z5",
								className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block text-sm font-semibold text-gray-700 mb-2",
									children: ["Services ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-red-500",
										children: "*"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "p-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all bg-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(q, {
										value: tags,
										onChange: (newSelected) => {
											setTags(newSelected);
											setValues((prevData) => ({
												...prevData,
												service: newSelected
											}));
										},
										name: "service",
										placeHolder: "Type a service and press Enter..."
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block text-sm font-semibold text-gray-700 mb-2",
									children: ["Description ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-red-500",
										children: "*"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lib.default, {
										theme: "snow",
										value: values?.description || "",
										onChange: handleDescriptionChange,
										className: "bg-white [&_.ql-container]:min-h-[200px] [&_.ql-container]:text-sm [&_.ql-editor]:min-h-[200px] [&_.ql-toolbar]:border-t-0 [&_.ql-toolbar]:border-x-0 [&_.ql-toolbar]:border-b [&_.ql-toolbar]:border-gray-200 [&_.ql-toolbar]:bg-gray-50",
										modules: { toolbar: [[
											"bold",
											"italic",
											"underline"
										], [{ list: "ordered" }, { list: "bullet" }]] }
									})
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-gray-50 px-8 py-5 border-t border-gray-100 flex justify-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: (e) => {
							e.preventDefault();
							nextStep();
						},
						className: "px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-sm shadow-blue-200 transition-all",
						children: "Continue to Next Step"
					})
				})
			]
		})
	});
};
//#endregion
//#region src/shared/employerPages/components/ProfileFormTwo.jsx
var import_umd = require_umd();
var ProfileFormTwo = ({ prevStep, handleChange, handleSubmit, values }) => {
	const [countriesList, setCountriesList] = (0, import_react.useState)([]);
	const [stateList, setStateList] = (0, import_react.useState)([]);
	const [cityList, setCityList] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		(0, import_umd.GetCountries)().then((result) => {
			setCountriesList(result.map((c) => ({
				value: c.name,
				label: c.name,
				id: c.id
			})));
		});
	}, []);
	(0, import_react.useEffect)(() => {
		const selectedCountry = countriesList.find((c) => c.value === values?.country);
		if (selectedCountry) (0, import_umd.GetState)(selectedCountry.id).then((result) => {
			setStateList(result.map((s) => ({
				value: s.name,
				label: s.name,
				id: s.id
			})));
		});
		else setStateList([]);
	}, [values?.country, countriesList]);
	(0, import_react.useEffect)(() => {
		const selectedCountry = countriesList.find((c) => c.value === values?.country);
		const selectedState = stateList.find((s) => s.value === values?.state);
		if (selectedCountry && selectedState) (0, import_umd.GetCity)(selectedCountry.id, selectedState.id).then((result) => {
			setCityList(result.map((city) => ({
				value: city.name,
				label: city.name,
				id: city.id
			})));
		});
		else setCityList([]);
	}, [
		values?.state,
		stateList,
		countriesList,
		values?.country
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-2xl font-bold text-white mb-0",
						children: "Company Location & Size"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-blue-100 mt-1 text-sm mb-0",
						children: "Step 2 of 2: Finalize your employer profile"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-8 space-y-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								htmlFor: "numberOfEmployee",
								className: "block text-sm font-semibold text-gray-700 mb-2",
								children: ["Number of Employees ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-red-500",
									children: "*"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								onChange: handleChange("numberOfEmployee"),
								value: values?.numberOfEmployee || "",
								placeholder: "e.g. 50-100",
								className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								htmlFor: "startedAt",
								className: "block text-sm font-semibold text-gray-700 mb-2",
								children: ["Company Started From ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-red-500",
									children: "*"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "date",
								onChange: handleChange("startedAt"),
								value: values?.startedAt || "",
								className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									htmlFor: "country",
									className: "block font-semibold text-gray-700 mb-2",
									children: ["Country ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-red-500",
										children: "*"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateManagedSelect$1, {
									options: countriesList,
									value: countriesList.find((opt) => opt.value === values?.country) || null,
									onChange: (option) => handleChange("country")({ target: { value: option?.value || "" } }),
									isClearable: true,
									placeholder: "Select country..."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									htmlFor: "state",
									className: "block font-semibold text-gray-700 mb-2",
									children: ["State ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-red-500",
										children: "*"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateManagedSelect$1, {
									options: stateList,
									value: stateList.find((opt) => opt.value === values?.state) || null,
									onChange: (option) => handleChange("state")({ target: { value: option?.value || "" } }),
									isClearable: true,
									placeholder: "Select state...",
									isDisabled: !values?.country
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									htmlFor: "city",
									className: "block font-semibold text-gray-700 mb-2",
									children: ["City ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-red-500",
										children: "*"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateManagedSelect$1, {
									options: cityList,
									value: cityList.find((opt) => opt.value === values?.city) || null,
									onChange: (option) => handleChange("city")({ target: { value: option?.value || "" } }),
									isClearable: true,
									placeholder: "Select city...",
									isDisabled: !values?.state
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								htmlFor: "pincode",
								className: "block text-sm font-semibold text-gray-700 mb-2",
								children: ["Pincode ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-red-500",
									children: "*"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								onChange: handleChange("pincode"),
								value: values?.pincode || "",
								placeholder: "e.g. 110001",
								className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									htmlFor: "companyAddress",
									className: "block text-sm font-semibold text-gray-700 mb-2",
									children: ["Complete Address ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-red-500",
										children: "*"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									onChange: handleChange("companyAddress"),
									value: values?.companyAddress || "",
									placeholder: "Street, Building No, Landmark",
									className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none"
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-gray-50 px-8 py-5 border-t border-gray-100 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: (e) => {
							e.preventDefault();
							prevStep();
						},
						className: "px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium transition-all",
						children: "Back"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleSubmit,
						className: "px-8 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-sm shadow-blue-200 transition-all",
						children: "Submit Profile"
					})]
				})
			]
		})
	});
};
//#endregion
//#region src/shared/employerPages/EmployerProfileForm.jsx
var EmployerProfileForm = () => {
	const { addAdminProfleDetail } = useAdminContext();
	const userId = JSON.parse(sessionStorage.getItem("data"));
	const [tags, setTags] = (0, import_react.useState)([]);
	const [step, setStep] = (0, import_react.useState)(1);
	const navigate = useNavigate();
	const [values, setValues] = (0, import_react.useState)({
		adminId: userId?.id,
		email: userId?.email,
		companyName: "",
		companyAddress: "",
		city: "",
		state: "",
		country: "",
		pincode: "",
		startedAt: null,
		description: "",
		GST: "",
		companyPan: "",
		companyEmail: "",
		companyContact: "",
		companyWebsite: "",
		numberOfEmployee: "",
		service: []
	});
	const nextStep = () => {
		setStep(step + 1);
	};
	const prevStep = () => {
		setStep(step - 1);
	};
	const handleChange = (input) => (e) => {
		setValues({
			...values,
			[input]: e.target.value
		});
	};
	const handleQuillChange = (name, value) => {
		setValues((prevValues) => ({
			...prevValues,
			[name]: value
		}));
	};
	const handleDescriptionChange = (value) => {
		handleQuillChange("description", value);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const result = await addAdminProfleDetail(values);
			console.log("this is values", result);
			setTimeout(() => {
				navigate("/");
			}, 2e3);
		} catch (error) {}
	};
	switch (step) {
		case 1: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileFormOne, {
			nextStep,
			handleChange,
			handleDescriptionChange,
			tags,
			setTags,
			setValues,
			values
		});
		case 2: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileFormTwo, {
			handleSubmit,
			prevStep,
			handleChange,
			handleDescriptionChange,
			tags,
			setTags,
			setValues,
			values
		});
		default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileFormOne, {
			nextStep,
			handleChange,
			handleDescriptionChange,
			tags,
			setTags,
			setValues,
			values
		});
	}
};
//#endregion
//#region src/shared/employerPages/components/EmployerProfile.jsx
var EmployerProfile_exports = /* @__PURE__ */ __exportAll({ default: () => EmployerProfile });
var EmployerProfile = () => {
	const [openModal, setOpenModal] = (0, import_react.useState)(false);
	const [currentField, setCurrentField] = (0, import_react.useState)("");
	const [currentValue, setCurrentValue] = (0, import_react.useState)("");
	const { getAdminsDetailsByAdminId } = useAdminContext();
	const [data, setData] = (0, import_react.useState)([]);
	const user = JSON.parse(sessionStorage.getItem("data"));
	const [loading, setLoading] = (0, import_react.useState)(true);
	const profilePicInput = (0, import_react.useRef)(null);
	const [uploadingPic, setUploadingPic] = (0, import_react.useState)(false);
	const getAdminProfileDetails = async () => {
		try {
			const adminData = await getAdminsDetailsByAdminId(user?.id, "Employer");
			if (adminData) setData(adminData);
			setLoading(false);
		} catch (error) {
			console.error(error);
			setLoading(false);
		}
	};
	const handleProfilePicChange = async (e) => {
		const picFile = e.target.files[0];
		if (!picFile) return;
		setUploadingPic(true);
		try {
			const currentUser = auth.currentUser;
			const adminId = user?.id || currentUser?.uid;
			if (!adminId) throw new Error("Employer ID not found");
			const downloadURL = await getDownloadURL((await uploadBytes(ref(storage, `profile_pictures/${adminId}/${picFile.name}`), picFile)).ref);
			await setDoc(doc(db, "employers", adminId), { profilePicture: downloadURL }, { merge: true });
			await setDoc(doc(db, "users", adminId), { profilePictureUrl: downloadURL }, { merge: true });
			alert("Company logo updated successfully!");
			window.location.reload();
		} catch (error) {
			console.error("Error uploading logo:", error);
			alert("Failed to upload logo: " + error.message);
		} finally {
			setUploadingPic(false);
		}
	};
	const handleEditClick = (field, value) => {
		setCurrentField(field);
		setCurrentValue(value);
		setOpenModal(true);
	};
	const handleUpdate = (updatedData) => {
		console.log(`Updated ${updatedData.key}: ${updatedData.value}`);
		setOpenModal(false);
		window.location.reload();
	};
	const closeModal = () => {
		setOpenModal(false);
	};
	(0, import_react.useEffect)(() => {
		getAdminProfileDetails();
	}, []);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircularLoader, {});
	return !data || data.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmployerProfileForm, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-slate-50 min-h-screen py-10 font-sans",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-4xl mx-auto px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-white border border-slate-200 rounded-2xl shadow-sm p-8 mb-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row gap-6 justify-between items-center text-center md:text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative w-16 h-16 bg-slate-50 rounded-xl border border-slate-100 p-1 flex items-center justify-center overflow-hidden flex-shrink-0 cursor-pointer group",
							onClick: () => profilePicInput.current?.click(),
							title: "Click to upload company logo",
							children: [
								data?.profilePicture ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: data.profilePicture,
									alt: "Logo",
									className: `max-h-full max-w-full object-contain ${uploadingPic ? "opacity-50" : ""}`
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-slate-300 font-bold uppercase",
									children: uploadingPic ? "..." : "LOGO"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-all",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-white text-[10px] font-bold opacity-0 group-hover:opacity-100",
										children: uploadingPic ? "UPLOADING..." : "UPLOAD"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "file",
									ref: profilePicInput,
									onChange: handleProfilePicChange,
									className: "hidden",
									accept: "image/png, image/jpeg, image/jpg"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-bold text-slate-800 tracking-tight",
								children: data?.companyName
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm font-medium text-slate-500 mb-0 flex flex-wrap justify-center md:justify-start gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaEnvelope, { className: "text-slate-400" }), data?.companyEmail]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-slate-350",
										children: "|"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaPhone, { className: "text-slate-400" }), data?.companyContact]
									})
								]
							})]
						})]
					}), data?.companyWebsite && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: data.companyWebsite,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-lg border-0 transition-colors inline-flex items-center gap-1.5 no-underline shadow-sm",
						children: ["Visit Website ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaLink, { size: 12 })]
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white border border-slate-200 rounded-2xl shadow-sm p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-bold text-slate-800 pb-2 border-b border-slate-100 mb-6",
						children: "Basic Detail"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2",
									children: ["Company Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleEditClick("companyName", data?.companyName),
										className: "text-[#2563EB] hover:underline font-semibold text-xs border-0 bg-transparent cursor-pointer p-0",
										children: "edit"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold text-slate-700 capitalize",
									children: data?.companyName
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2",
									children: ["No of Employee", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleEditClick("numberOfEmployee", data?.numberOfEmployee),
										className: "text-[#2563EB] hover:underline font-semibold text-xs border-0 bg-transparent cursor-pointer p-0",
										children: "edit"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold text-slate-700 capitalize",
									children: data?.numberOfEmployee
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2",
									children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleEditClick("companyEmail", data?.companyEmail),
										className: "text-[#2563EB] hover:underline font-semibold text-xs border-0 bg-transparent cursor-pointer p-0",
										children: "edit"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold text-slate-700",
									children: data?.companyEmail
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2",
									children: ["Mobile", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleEditClick("companyContact", data?.companyContact),
										className: "text-[#2563EB] hover:underline font-semibold text-xs border-0 bg-transparent cursor-pointer p-0",
										children: "edit"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold text-slate-700 capitalize",
									children: data?.companyContact
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2",
									children: ["Website", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleEditClick("companyWebsite", data?.companyWebsite),
										className: "text-[#2563EB] hover:underline font-semibold text-xs border-0 bg-transparent cursor-pointer p-0",
										children: "edit"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold text-slate-700",
									children: data?.companyWebsite
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1 md:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2",
									children: ["Services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleEditClick("service", data?.service),
										className: "text-[#2563EB] hover:underline font-semibold text-xs border-0 bg-transparent cursor-pointer p-0",
										children: "edit"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap items-center gap-2 pt-1",
									children: data?.service?.map((ser, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "px-3 py-1 bg-slate-100 rounded-lg text-xs font-semibold text-slate-600 border border-slate-200",
										children: ser
									}, idx))
								})]
							})
						]
					})]
				})
			})]
		}), openModal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModalBox, {
			closeModal,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpdateInput, {
				title: currentField,
				field: currentField,
				onUpdate: handleUpdate
			})
		})]
	});
};
//#endregion
export { EmployerProfile_exports as n, EmployerProfile as t };
