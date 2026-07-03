import { a as __toESM, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-B5ErqjvK.js";
import { B as useAdminContext, N as FaSuitcase, ct as Link, ut as useNavigate } from "./index-bM5YXtog.js";
import { r as getTimeDifference, t as convertTimeIntoDDMMYY } from "./DateFilter-D2bJKq2G.js";
import "./Login-DKD9_7yQ.js";
import "./Signup-DE7UyEq7.js";
import { i as IoShareSocialSharp, r as IoShareSocial, t as IoLocationSharp } from "./io5-5gMjWRfs.js";
import "./EmployerProfile-8zNzD94J.js";
import { n as require_dist } from "./EmployeeProfile-vS9fvaYH.js";
import "./ForgotPassword-BokP0CTS.js";
import "./ResetPassword--f4RYxfR.js";
import "./VerifyOtp-CLGpT9xu.js";
import "./Dashboard-nvWeke1t.js";
//#region src/utils/stringBuilder/Stringify.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var truncateText = (text, maxWords) => {
	if (!text) return "";
	const words = text.split(" ");
	if (words.length <= maxWords) return text;
	return words.slice(0, maxWords).join(" ") + "...";
};
//#endregion
//#region src/shared/jobComponents/components/JobCard.jsx
var import_jsx_runtime = require_jsx_runtime();
var JobCard = ({ data }) => {
	const navigate = useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: data?.map((job, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "w-full mb-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 p-6 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-4 items-start flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-14 h-14 bg-slate-50 rounded-xl border border-slate-100 p-1 flex items-center justify-center overflow-hidden flex-shrink-0",
					children: job?.profilePicture ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: job.profilePicture,
						alt: "Company Logo",
						className: "max-h-full max-w-full object-contain"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-slate-300 font-bold uppercase",
						children: "CTG"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								className: "no-underline text-slate-800 hover:text-[#2563EB] font-bold text-lg leading-tight transition-colors",
								to: `/view-jobs-detail/${job?.title}`,
								children: truncateText(job?.title || "", 6)
							})
						}),
						job?.companyName && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-slate-500 mb-0",
							children: job.companyName
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-3 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "capitalize text-xs font-semibold text-slate-600 bg-slate-100 rounded-full px-3 py-1 flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IoLocationSharp, {
									size: 13,
									className: "text-slate-400"
								}), job?.jobLocation]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "capitalize text-xs font-semibold text-slate-600 bg-slate-100 rounded-full px-3 py-1 flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaSuitcase, {
									size: 12,
									className: "text-slate-400"
								}), job?.experience]
							})]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex md:flex-col items-end justify-between md:justify-center w-full md:w-auto gap-4 pt-4 md:pt-0 border-t border-slate-100 md:border-t-0 flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-medium text-slate-400 order-1 md:order-none",
					children: convertTimeIntoDDMMYY(job?.createdAt)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5 order-2 md:order-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "flex justify-center items-center px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 font-semibold text-sm rounded-lg border-0 transition-colors",
						children: ["Share ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IoShareSocialSharp, { className: "ms-1" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => navigate(`/view-jobs-detail/${job?.title}`),
						className: "px-5 py-2 bg-[#2563EB] hover:bg-blue-700 text-white font-semibold text-sm rounded-lg border-0 shadow-sm transition-colors",
						children: "View Details"
					})]
				})]
			})]
		})
	}, idx)) });
};
require_dist();
//#endregion
//#region src/shared/jobComponents/components/JobCardTwo.jsx
var JobCardTwo = ({ data }) => {
	const { getAdminsDetailsById } = useAdminContext();
	const [companyDataMap, setCompanyDataMap] = (0, import_react.useState)({});
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		const fetchCompanyData = async () => {
			const companyData = {};
			try {
				for (const item of data) if (item?.sellerId && !companyData[item.sellerId]) {
					const company = await getAdminsDetailsById(item?.sellerId, "Employer");
					companyData[item?.sellerId] = company;
				}
			} catch (error) {
				console.error("Failed to fetch company details:", error);
			}
			setCompanyDataMap(companyData);
		};
		if (data?.length) fetchCompanyData();
	}, [data]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: data?.map((job, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "w-full mb-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 p-6 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-4 items-start flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-14 h-14 bg-slate-50 rounded-xl border border-slate-100 p-1 flex items-center justify-center overflow-hidden flex-shrink-0",
					children: job?.profilePicture ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: job.profilePicture,
						alt: "Company Logo",
						className: "max-h-full max-w-full object-contain"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-slate-300 font-bold uppercase",
						children: "CTG"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								className: "no-underline text-slate-800 hover:text-[#2563EB] font-bold text-lg leading-tight transition-colors",
								to: `/view-jobs-detail/${job?.title}`,
								children: truncateText(job?.title || "", 6)
							})
						}),
						job?.companyName && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-slate-500 mb-0",
							children: job.companyName
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-3 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "capitalize text-xs font-semibold text-slate-600 bg-slate-100 rounded-full px-3 py-1 flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IoLocationSharp, {
									size: 13,
									className: "text-slate-400"
								}), job?.jobLocation]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "capitalize text-xs font-semibold text-slate-600 bg-slate-100 rounded-full px-3 py-1 flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaSuitcase, {
									size: 12,
									className: "text-slate-400"
								}), job?.experience]
							})]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex md:flex-col items-end justify-between md:justify-center w-full md:w-auto gap-4 pt-4 md:pt-0 border-t border-slate-100 md:border-t-0 flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-medium text-slate-400 order-1 md:order-none",
					children: getTimeDifference(job?.createdAt)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5 order-2 md:order-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "flex justify-center items-center px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 font-semibold text-sm rounded-lg border-0 transition-colors",
						children: ["Share ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IoShareSocial, { className: "ms-1" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => navigate(`/view-jobs-detail/${job?.title}`),
						className: "px-5 py-2 bg-[#2563EB] hover:bg-blue-700 text-white font-semibold text-sm rounded-lg border-0 shadow-sm transition-colors",
						children: "View Details"
					})]
				})]
			})]
		})
	}, idx)) });
};
//#endregion
export { JobCard as n, JobCardTwo as t };
