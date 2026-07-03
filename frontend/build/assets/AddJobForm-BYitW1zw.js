const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/firebase-t_zXV7oF.js","assets/jsx-runtime-B5ErqjvK.js","assets/index.esm-CYbMinJH.js"])))=>i.map(i=>d[i]);
import { a as __toESM, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-B5ErqjvK.js";
import { I as __vitePreload, K as useSectionContext, L as StateManagedSelect$1, W as useJobContext, ut as useNavigate } from "./index-bM5YXtog.js";
import { t as q } from "./esm-paWcRsSW.js";
import { t as require_lib } from "./lib-Cu7KInUU.js";
//#region src/features/job/components/AddJobForm_1.jsx
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_lib = /* @__PURE__ */ __toESM(require_lib());
var import_jsx_runtime = require_jsx_runtime();
var AddJobForm_1 = ({ nextStep, handleChange, handleShortDescriptionChange, handleDescriptionChange, values, selected, setSelected, setValues, setTags, tags }) => {
	const { getAllSections } = useSectionContext();
	const reactQuillRef = (0, import_react.useRef)(null);
	const [sectionData, setSectionData] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [formError, setFormError] = (0, import_react.useState)({
		title: "",
		basicTitle: "",
		category: "",
		subCategory: "",
		shortDescription: "",
		description: "",
		tags: ""
	});
	const getAllJobCategories = async () => {
		try {
			const data = await getAllSections();
			if (data && data?.data.length > 0) {
				setSectionData(data?.data);
				setLoading(false);
			} else setLoading(false);
		} catch (error) {
			console.error(error);
		}
	};
	(0, import_react.useEffect)(() => {
		getAllJobCategories();
	}, []);
	const validateForm = () => {
		const errors = {};
		let isValid = true;
		if (!values.title.trim()) {
			errors.title = "Job title is required";
			isValid = false;
		}
		if (!values.basicTitle.trim()) {
			errors.basicTitle = "Job basic title is required";
			isValid = false;
		}
		if (!values.category.trim()) {
			errors.category = "Job category is required";
			isValid = false;
		}
		if (selected.length === 0) {
			errors.subCategory = "Please type a skill and press 'Enter' to add it";
			isValid = false;
		}
		if (!values.description.trim()) {
			errors.description = "Description is required";
			isValid = false;
		}
		if (tags.length === 0) {
			errors.tags = "Please type a tag and press 'Enter' to add it";
			isValid = false;
		}
		setFormError(errors);
		return isValid;
	};
	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (validateForm()) nextStep();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-2xl font-bold text-white mb-0",
					children: "Job Details"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-blue-100 mt-1 text-sm mb-0",
					children: "Step 1 of 2: Let candidates know what you are looking for"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-8 space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								htmlFor: "title",
								className: "block text-sm font-semibold text-gray-700 mb-2",
								children: ["Job Title ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-red-500",
									children: "*"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								onChange: handleChange("title"),
								value: values.title,
								placeholder: "e.g. Senior Frontend Developer",
								className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none"
							}),
							formError.title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-red-500 text-xs mt-1 font-medium",
								children: formError.title
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								htmlFor: "basicTitle",
								className: "block text-sm font-semibold text-gray-700 mb-2",
								children: ["Basic Title ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-red-500",
									children: "*"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								onChange: handleChange("basicTitle"),
								value: values.basicTitle,
								placeholder: "e.g. Frontend Dev",
								className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none"
							}),
							formError.basicTitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-red-500 text-xs mt-1 font-medium",
								children: formError.basicTitle
							})
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								htmlFor: "category",
								className: "block text-sm font-semibold text-gray-700 mb-2",
								children: ["Job Category ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-red-500",
									children: "*"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								onChange: handleChange("category"),
								value: values.category,
								className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none bg-white",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Select a category"
								}), sectionData?.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: item._id,
									children: item.title
								}, index))]
							}),
							formError.category && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-red-500 text-xs mt-1 font-medium",
								children: formError.category
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-20",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									htmlFor: "subCategory",
									className: "block text-sm font-semibold text-gray-700 mb-2",
									children: ["Required Skills ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-red-500",
										children: "*"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(q, {
										value: selected,
										onChange: (newSelected) => {
											setSelected(newSelected);
											setValues((prev) => ({
												...prev,
												subCategory: newSelected
											}));
										},
										name: "subCategory",
										placeHolder: "Type a skill and press enter"
									})
								}),
								formError.subCategory && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-red-500 text-xs mt-1 font-medium",
									children: formError.subCategory
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								htmlFor: "tags",
								className: "block text-sm font-semibold text-gray-700 mb-2",
								children: ["Search Tags ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-red-500",
									children: "*"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(q, {
									value: tags,
									onChange: (newSelected) => {
										setTags(newSelected);
										setValues((prev) => ({
											...prev,
											tags: newSelected
										}));
									},
									name: "tags",
									placeHolder: "Type a tag and press enter (e.g. Remote, Urgent)"
								})
							}),
							formError.tags && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-red-500 text-xs mt-1 font-medium",
								children: formError.tags
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							htmlFor: "shortDescription",
							className: "block text-sm font-semibold text-gray-700 mb-2",
							children: ["Short Summary ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-red-500",
								children: "*"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 3,
							onChange: handleChange("shortDescription"),
							value: values.shortDescription,
							placeholder: "A quick 1-2 sentence overview of the role...",
							className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none resize-none"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-between items-center mt-1",
							children: formError.shortDescription ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-red-500 text-xs font-medium",
								children: formError.shortDescription
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-gray-400 text-xs",
								children: "Maximum 300 characters"
							})
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							htmlFor: "description",
							className: "block text-sm font-semibold text-gray-700 mb-2",
							children: ["Full Job Description ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-red-500",
								children: "*"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "bg-white rounded-lg border border-gray-300 overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lib.default, {
								id: "description",
								name: "description",
								theme: "snow",
								value: values.description,
								modules: { toolbar: [[
									"bold",
									"italic",
									"underline"
								], [{ list: "ordered" }, { list: "bullet" }]] },
								ref: (element) => {
									reactQuillRef.current = element;
									const reactQuillEditor = reactQuillRef.current?.getEditor();
									reactQuillEditor?.on("text-change", () => {
										if (reactQuillEditor.getLength() > 15e3) reactQuillEditor.deleteText(15e3, reactQuillEditor.getLength());
									});
								},
								style: { height: "200px" },
								onChange: handleDescriptionChange
							})
						}),
						formError.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-red-500 text-xs mt-12 font-medium",
							children: formError.description
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-end pt-12 border-t border-gray-100",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handleFormSubmit,
							className: "px-8 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/30 focus:ring-2 focus:ring-blue-500 outline-none",
							children: "Next Step →"
						})
					})
				]
			})]
		})
	});
};
//#endregion
//#region src/features/job/components/AddJobForm_2.jsx
var AddJobForm_2 = ({ nextStep, prevStep, handleSubmit, handleChange, values }) => {
	const [isReferenceJob, setIsReferenceJob] = (0, import_react.useState)(values.isReferenceJob);
	const [isUploading, setIsUploading] = (0, import_react.useState)(false);
	const [locationOptions, setLocationOptions] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		setIsReferenceJob(values.isReferenceJob);
	}, [values.isReferenceJob]);
	(0, import_react.useEffect)(() => {
		__vitePreload(() => import("./locationUtils-DwlcyqFV.js").then((module) => {
			setLocationOptions(module.getGlobalLocationOptions());
		}), []);
	}, []);
	const handleRadioChange = (event) => {
		const value = event.target.value === "yes";
		setIsReferenceJob(value);
		handleChange("isReferenceJob")({ target: { value } });
	};
	const handleImageUpload = async (e) => {
		const file = e.target.files[0];
		if (!file) return;
		try {
			setIsUploading(true);
			const { storage } = await __vitePreload(async () => {
				const { storage } = await import("./firebase-t_zXV7oF.js").then((n) => n.r);
				return { storage };
			}, __vite__mapDeps([0,1,2]));
			const { ref, uploadBytes, getDownloadURL } = await __vitePreload(async () => {
				const { ref, uploadBytes, getDownloadURL } = await import("./index.esm-CYbMinJH.js").then((n) => n.t);
				return {
					ref,
					uploadBytes,
					getDownloadURL
				};
			}, __vite__mapDeps([2,1]));
			const fileRef = ref(storage, `companyLogos/${Date.now()}_${file.name}`);
			await uploadBytes(fileRef, file);
			const downloadUrl = await getDownloadURL(fileRef);
			handleChange("profilePicture")({ target: { value: downloadUrl } });
		} catch (error) {
			console.error("Error uploading image:", error);
			alert("Failed to upload image. Please try again.");
		} finally {
			setIsUploading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-2xl font-bold text-white mb-0",
					children: "Company Details"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-blue-100 mt-1 text-sm mb-0",
					children: "Step 2 of 2: Let candidates know who is hiring"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-8 space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						htmlFor: "profilePicture",
						className: "block text-sm font-semibold text-gray-700 mb-2",
						children: ["Company Logo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-red-500",
							children: "*"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [values.profilePicture && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: values.profilePicture,
							alt: "Logo preview",
							className: "w-16 h-16 object-contain rounded-md border border-gray-200"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "file",
								accept: "image/*",
								onChange: handleImageUpload,
								disabled: isUploading,
								className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
							}), isUploading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-blue-600 mt-2",
								children: "Uploading image..."
							})]
						})]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								htmlFor: "openings",
								className: "block text-sm font-semibold text-gray-700 mb-2",
								children: ["Total Openings ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-red-500",
									children: "*"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								onChange: handleChange("openings"),
								value: values.openings,
								placeholder: "e.g. 5",
								className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								htmlFor: "experience",
								className: "block text-sm font-semibold text-gray-700 mb-2",
								children: ["Min Experience ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-red-500",
									children: "*"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								onChange: handleChange("experience"),
								value: values.experience,
								className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none bg-white",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Select experience"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Fresher",
										children: "Fresher"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "1 - 2 years",
										children: "1 - 2 years"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "2 - 3 years",
										children: "2 - 3 years"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "4 - 6 years",
										children: "4 - 6 years"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "7 - 8 years",
										children: "7 - 8 years"
									})
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								htmlFor: "salaryRange",
								className: "block text-sm font-semibold text-gray-700 mb-2",
								children: ["Salary Range ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-red-500",
									children: "*"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								onChange: handleChange("salaryRange"),
								value: values.salaryRange,
								className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none bg-white",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Select salary range"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "5k - 10k",
										children: "5k - 10k"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "15k - 25k",
										children: "15k - 25k"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "4 lpa - 6 lpa",
										children: "4 lpa - 6 lpa"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "8 lpa - 10 lpa",
										children: "8 lpa - 10 lpa"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Not disclosed",
										children: "Not disclosed"
									})
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								htmlFor: "jobType",
								className: "block text-sm font-semibold text-gray-700 mb-2",
								children: ["Job Type ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-red-500",
									children: "*"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								onChange: handleChange("jobType"),
								value: values.jobType,
								className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none bg-white",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Select job type"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Work from home",
										children: "Work from home"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Work from office",
										children: "Work from office"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Hybrid",
										children: "Hybrid"
									})
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								htmlFor: "workType",
								className: "block text-sm font-semibold text-gray-700 mb-2",
								children: ["Work Type ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-red-500",
									children: "*"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								onChange: handleChange("workType"),
								value: values.workType,
								className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none bg-white",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Select work type"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Full-time",
										children: "Full-time"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Part-time",
										children: "Part-time"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Internship",
										children: "Internship"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Contractual",
										children: "Contractual"
									})
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								htmlFor: "qualification",
								className: "block text-sm font-semibold text-gray-700 mb-2",
								children: ["Qualification ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-red-500",
									children: "*"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								onChange: handleChange("qualification"),
								value: values.qualification,
								className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none bg-white",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Select qualification"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Post-graduation",
										children: "Post-graduation"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Graduation",
										children: "Graduation"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Diploma",
										children: "Diploma"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "10th/12th Passed",
										children: "10th/12th Passed"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Any",
										children: "Any"
									})
								]
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							htmlFor: "companyName",
							className: "block text-sm font-semibold text-gray-700 mb-2",
							children: ["Company Name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-red-500",
								children: "*"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							onChange: handleChange("companyName"),
							value: values.companyName,
							placeholder: "e.g. Google",
							className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							htmlFor: "companyWebsite",
							className: "block text-sm font-semibold text-gray-700 mb-2",
							children: ["Company Website ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-red-500",
								children: "*"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							onChange: handleChange("companyWebsite"),
							value: values.companyWebsite,
							placeholder: "e.g. https://google.com",
							className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							htmlFor: "jobLocation",
							className: "block text-sm font-semibold text-gray-700 mb-2",
							children: ["Location ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-red-500",
								children: "*"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateManagedSelect$1, {
								options: locationOptions,
								value: locationOptions?.find((opt) => opt?.value === values.jobLocation) || null,
								onChange: (selectedOption) => handleChange("jobLocation")({ target: { value: selectedOption?.value || "" } }),
								isClearable: true,
								placeholder: "Select location..."
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-gray-50 p-5 rounded-xl border border-gray-200 mt-6 relative z-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm font-semibold text-gray-700 mb-3",
								children: ["Is this a reference job? (Direct users to external link) ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-red-500",
									children: "*"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										value: "yes",
										checked: isReferenceJob,
										onChange: handleRadioChange,
										className: "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-gray-800",
										children: "Yes"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										value: "no",
										checked: !isReferenceJob,
										onChange: handleRadioChange,
										className: "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-gray-800",
										children: "No"
									})]
								})]
							}),
							isReferenceJob && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 pt-4 border-t border-gray-200",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									htmlFor: "jobUrl",
									className: "block text-sm font-semibold text-gray-700 mb-2",
									children: ["External Job URL ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-red-500",
										children: "*"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									onChange: handleChange("jobUrl"),
									value: values.jobUrl,
									placeholder: "https://careers.google.com/...",
									className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between pt-6 border-t border-gray-100 mt-8 relative z-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: prevStep,
							className: "px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors focus:ring-2 focus:ring-gray-200 outline-none",
							children: "← Back"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handleSubmit,
							className: "px-8 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/30 focus:ring-2 focus:ring-blue-500 outline-none",
							children: "Publish Job"
						})]
					})
				]
			})]
		})
	});
};
//#endregion
//#region src/features/job/AddJobForm.jsx
var AddJobForm = () => {
	const { addJobData } = useJobContext();
	const userData = sessionStorage.getItem("data");
	const userId = userData ? JSON.parse(userData) : {};
	const [selected, setSelected] = (0, import_react.useState)([]);
	const [tags, setTags] = (0, import_react.useState)([]);
	const navigate = useNavigate();
	const [values, setValues] = (0, import_react.useState)({
		adminId: userId?._id || userId?.id || "",
		email: userId?.email || "",
		title: "",
		basicTitle: "",
		category: "",
		subCategory: [],
		shortDescription: "",
		description: "",
		tags: [],
		profilePicture: "",
		openings: "",
		jobType: "",
		workType: "",
		qualification: "",
		experience: "",
		salaryRange: "",
		companyName: "",
		companyWebsite: "",
		jobLocation: "",
		jobUrl: "",
		isReferenceJob: false
	});
	const [step, setStep] = (0, import_react.useState)(1);
	const nextStep = () => setStep(step + 1);
	const prevStep = () => setStep(step - 1);
	const handleChange = (input) => (e) => {
		setValues({
			...values,
			[input]: e.target.value
		});
	};
	const handleQuillChange = (name, value) => {
		setValues((prevData) => ({
			...prevData,
			[name]: value
		}));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const finalValues = {
				...values,
				tags,
				subCategory: selected,
				adminId: userId?._id || userId?.id || "",
				email: userId?.email || ""
			};
			console.log("this is job dat", finalValues);
			await addJobData(finalValues);
			navigate("/view-my-applications");
		} catch (error) {
			console.error("Error adding job:", error);
			alert("Failed to add job: " + error.message);
		}
	};
	const maxShortDescriptionLength = 10;
	const handleDescriptionChange = (value) => handleQuillChange("description", value);
	const handleShortDescriptionChange = (value) => {
		if (value.length <= maxShortDescriptionLength) setValues((prevValues) => ({
			...prevValues,
			shortDescription: value
		}));
	};
	switch (step) {
		case 1: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddJobForm_1, {
			nextStep,
			handleChange,
			selected,
			setSelected,
			values,
			setValues,
			setTags,
			tags,
			handleDescriptionChange,
			handleShortDescriptionChange
		});
		case 2: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddJobForm_2, {
			nextStep,
			prevStep,
			values,
			handleChange,
			handleSubmit
		});
		default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddJobForm_1, {});
	}
};
//#endregion
export { AddJobForm as default };
