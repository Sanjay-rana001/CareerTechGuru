import { a as __toESM, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-B5ErqjvK.js";
import { K as useSectionContext } from "./index-bM5YXtog.js";
import { r as getTimeDifference } from "./DateFilter-D2bJKq2G.js";
//#region src/features/category/components/ViewCategory.jsx
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ViewCategory = () => {
	const { getAllSections } = useSectionContext();
	const [sections, setSections] = (0, import_react.useState)([]);
	const getDectionData = async () => {
		try {
			const result = await getAllSections();
			setSections(result?.data);
		} catch (error) {
			console.error(error);
		}
	};
	(0, import_react.useEffect)(() => {
		getDectionData();
	}, [sections]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-fluid",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "row py-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Active Job Application" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "table",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("th", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						className: ""
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "selectAll",
						children: "Select All"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Title" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Jobs" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Posted on" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Action" })
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: sections?.map((category, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					className: ""
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: category.title }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "Unknown" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: getTimeDifference(category.createAt) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "btn-main bg-[#272343] text-light",
						children: "delete"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "btn-main bg-[#8dc6ff] text-white",
						children: "pause"
					})]
				})
			] }, index)) })]
		})]
	}) });
};
//#endregion
export { ViewCategory as default };
