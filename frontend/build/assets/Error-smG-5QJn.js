import { n as require_react, t as require_jsx_runtime } from "./jsx-runtime-B5ErqjvK.js";
import { ut as useNavigate } from "./index-bM5YXtog.js";
require_react();
var import_jsx_runtime = require_jsx_runtime();
var Error = () => {
	const navigate = useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "row justify-center items-center min-h-[100vh]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "col-lg-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "display-4 text-center mb-2 capitalize text-primary",
				children: "We lost this page"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-center mb-3",
				children: ["We searched high and low but couldn't find what you are looking for. Let's find a better place for you to go", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "my-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => navigate("/"),
						className: "btn btn-primary rounded-0 w-25",
						children: "Back to home"
					})
				})]
			})]
		})
	});
};
//#endregion
export { Error as default };
