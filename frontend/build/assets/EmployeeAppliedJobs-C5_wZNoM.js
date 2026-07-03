import { a as __toESM, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-B5ErqjvK.js";
import { B as useAdminContext, b as CircularLoader, ut as useNavigate } from "./index-bM5YXtog.js";
//#region src/pages/Employee/EmployeeAppliedJobs.jsx
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var formatDate = (dateString) => {
	if (!dateString) return "N/A";
	return new Date(dateString).toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric"
	});
};
var EmployeeAppliedJobs = () => {
	const { getApplicationByUserId } = useAdminContext();
	const [applications, setApplications] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		const fetchApplications = async () => {
			try {
				const response = await getApplicationByUserId();
				if (response && response.data) {
					const sortedData = response.data.sort((a, b) => {
						return new Date(b.appliedAt || b.createdAt) - new Date(a.appliedAt || a.createdAt);
					});
					setApplications(sortedData);
				}
			} catch (error) {
				console.error("Error fetching applications:", error);
			} finally {
				setLoading(false);
			}
		};
		fetchApplications();
	}, [getApplicationByUserId]);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircularLoader, {});
	if (applications.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-slate-50 min-h-screen flex items-center justify-center font-sans",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center bg-white p-10 rounded-2xl shadow-sm border border-slate-200 max-w-md w-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-20 h-20 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						className: "w-10 h-10",
						fill: "none",
						stroke: "currentColor",
						viewBox: "0 0 24 24",
						xmlns: "http://www.w3.org/2000/svg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							strokeLinecap: "round",
							strokeLinejoin: "round",
							strokeWidth: 2,
							d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-2xl font-bold text-slate-800 mb-2",
					children: "No applications yet"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-slate-500 text-sm mb-8",
					children: "You haven't applied to any jobs yet. Start exploring and find your dream job!"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => navigate("/view-jobs"),
					className: "bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg transition-colors shadow-sm",
					children: "Browse Jobs"
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-slate-50 min-h-screen py-10 font-sans",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 border border-slate-200 rounded-2xl shadow-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold text-slate-800 tracking-tight",
					children: "My Applications"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-slate-400 mb-0 mt-1",
					children: [
						"You have applied to ",
						applications.length,
						" ",
						applications.length === 1 ? "job" : "jobs",
						" in total"
					]
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-left text-sm whitespace-nowrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-slate-50 border-b border-slate-200 text-slate-500",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-4 font-semibold text-xs uppercase tracking-wider",
									children: "Job title"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-4 font-semibold text-xs uppercase tracking-wider",
									children: "Company"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-4 font-semibold text-xs uppercase tracking-wider",
									children: "Applied date"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-4 font-semibold text-xs uppercase tracking-wider",
									children: "Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-4 font-semibold text-xs uppercase tracking-wider text-right",
									children: "Action"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "divide-y divide-slate-100",
							children: applications.map((application, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "hover:bg-slate-50/50 transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-6 py-4 font-medium text-slate-800",
										children: application.title || "N/A"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-6 py-4 text-slate-600 font-medium",
										children: application.companyName || "N/A"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-6 py-4 text-slate-500",
										children: formatDate(application?.appliedAt || application?.createdAt)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-6 py-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `px-2.5 py-1 rounded-full text-xs font-medium capitalize ${application?.status === "accepted" ? "bg-green-100 text-green-700" : application?.status === "rejected" ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"}`,
											children: application?.status || "pending"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-6 py-4 text-right",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => navigate(`/view-jobs-detail/${application.title}`),
											className: "text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors",
											children: "View Job"
										})
									})
								]
							}, index))
						})]
					})
				})
			})]
		})
	});
};
//#endregion
export { EmployeeAppliedJobs as default };
