import { a as __toESM, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-B5ErqjvK.js";
import { F as Search, G as useSearchContext, K as useSectionContext, W as useJobContext, lt as useSearchParams } from "./index-bM5YXtog.js";
import { t as JobCardTwo } from "./shared-1qwCVVy_.js";
//#region src/pages/AllJobs.jsx
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var AllJobs = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const { searchResult, setSearchResult, lastVisibleDoc, setLastVisibleDoc, totalJobsCount, isSearchLoading } = useSearchContext();
	const { searchJobQuery } = useJobContext();
	const { getAllSections } = useSectionContext();
	const [sections, setSections] = (0, import_react.useState)([]);
	const [isFetchingMore, setIsFetchingMore] = (0, import_react.useState)(false);
	const getApplicationCategory = async () => {
		try {
			const result = await getAllSections();
			setSections(result?.data || []);
		} catch (error) {
			console.log(error);
		}
	};
	const handleBackClick = () => {
		setSearchParams(new URLSearchParams());
		window.location.href = "/view-jobs";
	};
	const fetchNextPage = async () => {
		if (!lastVisibleDoc) return;
		setIsFetchingMore(true);
		try {
			const queryString = searchParams.toString();
			const result = await searchJobQuery(queryString, lastVisibleDoc, 20);
			if (result?.data?.length > 0) {
				setSearchResult((prev) => [...prev, ...result.data]);
				setLastVisibleDoc(result.lastDoc);
			} else setLastVisibleDoc(null);
		} catch (error) {
			console.error(error);
		} finally {
			setIsFetchingMore(false);
		}
	};
	(0, import_react.useEffect)(() => {
		getApplicationCategory();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-slate-50 min-h-screen py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-4xl mx-auto px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-bold text-slate-800 tracking-tight",
						children: "Find Jobs"
					}), (!searchResult || searchResult.length === 0) && !isSearchLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleBackClick,
						className: "px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium text-sm rounded-lg border-0 transition-colors",
						children: "Clear Search"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { categories: sections })
				}),
				isSearchLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 flex justify-center items-center py-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-slate-500 font-medium text-lg",
						children: "Searching jobs..."
					})
				}) : !searchResult || searchResult.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 bg-white border border-slate-200 rounded-2xl p-10 text-center shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-semibold text-slate-800 mb-2",
							children: "No Jobs Found"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-slate-500 mb-6 text-sm",
							children: "We couldn't find any jobs matching your search parameters. Try adjusting your filters."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handleBackClick,
							className: "px-6 py-2.5 bg-[#2563EB] hover:bg-blue-700 text-white font-medium text-sm rounded-lg border-0 transition-colors shadow-sm",
							children: "Show All Jobs"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row justify-between items-center bg-white border border-slate-200 px-6 py-4 rounded-xl shadow-sm gap-4 mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-sm font-semibold text-slate-600 mb-0",
							children: [
								"Results — ",
								totalJobsCount,
								" jobs found"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-slate-400",
							children: [
								"Showing ",
								searchResult.length,
								" of ",
								totalJobsCount
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JobCardTwo, { data: searchResult })
					}),
					lastVisibleDoc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-center mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: fetchNextPage,
							disabled: isFetchingMore,
							className: `px-8 py-3 rounded-lg font-medium text-sm transition-colors ${isFetchingMore ? "bg-slate-200 text-slate-400 cursor-not-allowed" : "bg-white border-2 border-[#2563EB] text-[#2563EB] hover:bg-blue-50"}`,
							children: isFetchingMore ? "Loading..." : "Load More Jobs"
						})
					})
				] })
			]
		})
	});
};
//#endregion
export { AllJobs as default };
