import { a as __toESM, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-B5ErqjvK.js";
import { U as useEmployeeContext, z as require_prop_types } from "./index-bM5YXtog.js";
//#region src/components/modal/UpdateInput.jsx
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_prop_types = /* @__PURE__ */ __toESM(require_prop_types());
var import_jsx_runtime = require_jsx_runtime();
var UpdateInput = ({ title, field, onUpdate }) => {
	const { updateEmployeeDetails } = useEmployeeContext();
	const [inputValue, setInputValue] = (0, import_react.useState)(title);
	const handleChange = (event) => {
		setInputValue(event.target.value);
	};
	const handleSubmit = async (event) => {
		event.preventDefault();
		const userEmail = JSON.parse(sessionStorage.getItem("data"));
		if (!userEmail?.email) {
			console.error("User email is not available");
			return;
		}
		const data = {
			key: field,
			value: inputValue
		};
		try {
			await updateEmployeeDetails(userEmail.email, data);
			onUpdate(data);
		} catch (error) {
			console.error("Error updating employee details", error);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "col-lg-12 justify-center items-center bg-white rounded py-7",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "h3 text-prime",
			children: "Update"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "form-group",
			onSubmit: handleSubmit,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "updateTitle",
					className: "form-label",
					children: "Title"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "text",
					id: "updateTitle",
					value: inputValue,
					onChange: handleChange,
					className: "form-control",
					"aria-label": "Title"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "btn justify-center w-28 mt-3 text-light",
					style: { backgroundColor: "#0F79AF" },
					children: "Update"
				})
			]
		})]
	});
};
UpdateInput.propTypes = {
	title: import_prop_types.default.string,
	field: import_prop_types.default.string.isRequired,
	onUpdate: import_prop_types.default.func.isRequired
};
UpdateInput.defaultProps = { title: "" };
//#endregion
export { UpdateInput as t };
