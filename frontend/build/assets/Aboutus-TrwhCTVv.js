import { n as require_react, t as require_jsx_runtime } from "./jsx-runtime-B5ErqjvK.js";
import { H as useBrandContext } from "./index-bM5YXtog.js";
require_react();
var import_jsx_runtime = require_jsx_runtime();
var Aboutus = () => {
	const { siteConfig } = useBrandContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-fluid",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-sm mb-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "row py-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "col-lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "display-2 font-semibold text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-prime",
								children: siteConfig.appName
							}),
							" ",
							siteConfig.aboutUsHeroHeading
						]
					})
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-sm mb-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "row py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "col-lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "https://images.pexels.com/photos/7078666/pexels-photo-7078666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
						alt: "",
						className: "img-fluid rounded"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-prime h3",
						children: "About us"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: siteConfig.aboutUsDescription })]
				})]
			})
		})]
	}) });
};
//#endregion
export { Aboutus as default };
