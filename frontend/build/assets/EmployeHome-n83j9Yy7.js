import { a as __toESM, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-B5ErqjvK.js";
import { F as Search, G as useSearchContext, H as useBrandContext, K as useSectionContext, U as useEmployeeContext, W as useJobContext, ct as Link, v as MultiCarousal } from "./index-bM5YXtog.js";
import { a as filterByLocation, i as filterByLatestPost, r as filterByCategory } from "./ViewJob-TaukkpnW.js";
import { n as JobCard, t as JobCardTwo } from "./shared-1qwCVVy_.js";
//#region src/pages/Employee/JobsByLocation.jsx
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var JobsByLocation = ({ data }) => {
	const user = JSON.parse(sessionStorage.getItem("data"));
	const { getAllApplications } = useJobContext();
	const { getEmployeeProfile } = useEmployeeContext();
	const [location, setLocation] = (0, import_react.useState)([]);
	const [filterData, setFilterData] = (0, import_react.useState)([]);
	const fetchUserProfileDetail = async () => {
		try {
			const result = await getEmployeeProfile(user?.email);
			setFilterData(result?.data?.data);
			setLocation(result?.data?.data?.interests?.location);
		} catch (error) {
			console.error("Error fetching user profile:", error);
		}
	};
	(0, import_react.useEffect)(() => {
		fetchUserProfileDetail();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-fluid py-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
				className: "capitalize flex h4 items-center justify-between text-light",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Jobs according to your preffered locations" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					className: "",
					children: "see more"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-light",
				children: "Here are a few of the jobs that matches your skills and interests at Career Techguru talent pool."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiCarousal, { children: location?.map((loc, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JobCard, { data: filterByLocation(data, loc) })) })]
	});
};
//#endregion
//#region src/pages/Employee/EmployeHome.jsx
var EmployeHome = () => {
	const { siteConfig } = useBrandContext();
	const user = JSON.parse(sessionStorage.getItem("data"));
	const { searchResult } = useSearchContext();
	const { getAllSections } = useSectionContext();
	const { getEmployeeProfile } = useEmployeeContext();
	const [sectionData, setSectionData] = (0, import_react.useState)([]);
	const [profileData, setProfileData] = (0, import_react.useState)(null);
	const [filterCategory, setFilterCategory] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useRef)(null);
	const fetchUserProfileDetail = async () => {
		try {
			const result = await getEmployeeProfile(user?.email);
			setProfileData(result?.data?.data);
		} catch (error) {
			console.error("Error fetching user profile:", error);
		} finally {
			setLoading(false);
		}
	};
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
	const filterCategoryByName = async () => {
		try {
			const categoryNameList = profileData?.interests?.category;
			if (categoryNameList && categoryNameList.length > 0) {
				const categoryIds = [];
				categoryNameList.forEach((categoryName) => {
					const foundCategory = sectionData.find((category) => category.title === categoryName);
					if (foundCategory) categoryIds.push(foundCategory._id);
				});
				setFilterCategory(categoryIds);
				return categoryIds;
			}
		} catch (error) {
			console.error("Error filtering categories by name:", error);
		}
	};
	(0, import_react.useEffect)(() => {
		getAllJobCategories();
	}, []);
	(0, import_react.useEffect)(() => {
		if (sectionData.length > 0) {
			fetchUserProfileDetail();
			filterCategoryByName();
		}
	}, [sectionData]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-fluid bg-light",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "row py-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-lg baner-box rounded shadow-md flex flex-col justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "box",
							class: "dream",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "display-5 fw-bold ms-4",
								children: "FIND YOUR DREAM JOB!"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-semibold text-dark ms-4",
								children: ["Increase your chance to get call from recruiters with ", siteConfig.appName]
							})]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "row justify-center py-3 mb-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded py-4 ",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "h3 text-prime",
							children: "Find a job that you deserve"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { categories: sectionData })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "hr bg-secondary my-3" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-lg-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "h4 text-prime capitalize",
								children: "Current Openings"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JobCardTwo, { data: filterByLatestPost(searchResult) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "col py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "h4 text-prime capitalize",
									children: "Find Jobs According to Categories"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-3",
									children: sectionData?.map((category, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										className: "nav-link bg-slate-100 px-3 py-2 rounded-pill ",
										children: category?.title
									}, idx))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "my-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "h4 text-prime capitalize my-4",
									children: "Find Jobs According to your profile"
								}), filterCategory.map((items, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JobCardTwo, { data: filterByCategory(searchResult, items) }))]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "row my-4 rounded bg-dark",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JobsByLocation, { data: searchResult })
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-lg-3 rounded",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "form-group flex flex-col gap-3 bg-light my-3 py-3 px-2 rounded",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "h4 text-prime",
									children: "Enroll in our courses"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									className: "form-control",
									placeholder: "enter your email"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "btn bg-prime text-light",
									children: "Enroll now"
								})
							]
						})
					})]
				})
			]
		})
	}) });
};
//#endregion
export { EmployeHome as default };
