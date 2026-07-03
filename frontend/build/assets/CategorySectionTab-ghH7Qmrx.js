import { a as __toESM, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-B5ErqjvK.js";
import { K as useSectionContext, w as TabMenu } from "./index-bM5YXtog.js";
import { t as q } from "./esm-paWcRsSW.js";
import ViewCategory from "./ViewCategory-B1vxEKk3.js";
//#region src/features/category/components/AddCategory.jsx
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var AddCategory = () => {
	const { addSectionData } = useSectionContext();
	JSON.parse(sessionStorage.getItem("data"));
	const [tags, setTags] = (0, import_react.useState)([]);
	const [subCategories, setSubCategories] = (0, import_react.useState)([]);
	const [sectionData, setSectionData] = (0, import_react.useState)({
		title: "",
		basicTitle: "",
		subCategory: [],
		shortDescription: "",
		tags: [],
		profilePicture: "abc"
	});
	const handleInputChange = (e) => {
		setSectionData({
			...sectionData,
			[e.target.name]: e.target.value
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const updatedSectionData = {
				...sectionData,
				subCategory: subCategories,
				tags
			};
			const result = await addSectionData(updatedSectionData);
			console.log(result);
		} catch (error) {
			console.error(error);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-fluid",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "col-lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "h3 text-prime",
						children: "Add Category"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "form-group mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "title",
								className: "h6",
								children: "Title"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								className: "form-control",
								name: "title",
								placeholder: "Category title",
								value: sectionData.title,
								onChange: handleInputChange
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "form-group mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "basicTitle",
								className: "h6",
								children: "Basic Title"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								className: "form-control",
								name: "basicTitle",
								placeholder: "Basic title",
								value: sectionData.basicTitle,
								onChange: handleInputChange
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "form-group mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "shortDescription",
								className: "h6",
								children: "Short Description"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								className: "form-control",
								name: "shortDescription",
								placeholder: "Short description",
								value: sectionData.shortDescription,
								onChange: handleInputChange,
								rows: 3
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "form-group mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "subCategory",
								className: "h6",
								children: "Subcategories"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(q, {
								value: subCategories,
								onChange: (subCategories) => {
									setSubCategories(subCategories);
									setSectionData({
										...sectionData,
										subCategory: subCategories
									});
								},
								name: "subCategory",
								placeHolder: "Add subcategories"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "form-group mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "tags",
								className: "h6",
								children: "Tags"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(q, {
								value: tags,
								onChange: (tags) => {
									setTags(tags);
									setSectionData({
										...sectionData,
										tags
									});
								},
								name: "tags",
								placeHolder: "Add tags"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn bg-prime text-light",
							children: "Add Category"
						})
					]
				})]
			})
		})
	}) });
};
//#endregion
//#region src/features/category/CategorySectionTab.jsx
var CategorySectionTab = () => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabMenu, {
		tabs: ["Add Category", "Active Category"],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddCategory, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ViewCategory, {})]
	});
};
//#endregion
export { CategorySectionTab as default };
