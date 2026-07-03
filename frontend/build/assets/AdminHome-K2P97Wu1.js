import { a as __toESM, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-B5ErqjvK.js";
import { $ as FiRefreshCw, B as useAdminContext, J as FiActivity, W as useJobContext, X as FiCheckCircle, Y as FiBriefcase, Z as FiMail, at as FiUsers, et as FiShield, nt as FiUser, q as n, tt as FiTrash2, ut as useNavigate } from "./index-bM5YXtog.js";
//#region src/pages/adminPages/AdminHome.jsx
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var AdminHome = () => {
	const navigate = useNavigate();
	const { getGlobalUsers } = useAdminContext();
	const { getAllApplications, deleteJobById } = useJobContext();
	const [activeTab, setActiveTab] = (0, import_react.useState)("overview");
	const [users, setUsers] = (0, import_react.useState)([]);
	const [jobs, setJobs] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [lastUserDoc, setLastUserDoc] = (0, import_react.useState)(null);
	const [lastJobDoc, setLastJobDoc] = (0, import_react.useState)(null);
	const [loadingMoreUsers, setLoadingMoreUsers] = (0, import_react.useState)(false);
	const [loadingMoreJobs, setLoadingMoreJobs] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		fetchCMSData();
	}, []);
	const fetchCMSData = async () => {
		setLoading(true);
		try {
			const [usersRes, jobsRes] = await Promise.all([getGlobalUsers(null, 20), getAllApplications(null, 20)]);
			setUsers(usersRes?.data || []);
			setLastUserDoc(usersRes?.lastDoc || null);
			setJobs(jobsRes?.data || []);
			setLastJobDoc(jobsRes?.lastDoc || null);
		} catch (error) {
			console.error(error);
			n.error("Error fetching CMS data");
		} finally {
			setLoading(false);
		}
	};
	const loadMoreUsers = async () => {
		if (!lastUserDoc) return;
		setLoadingMoreUsers(true);
		try {
			const res = await getGlobalUsers(lastUserDoc, 20);
			if (res?.data?.length > 0) {
				setUsers((prev) => [...prev, ...res.data]);
				setLastUserDoc(res.lastDoc);
			} else setLastUserDoc(null);
		} catch (error) {
			console.error(error);
			n.error("Error fetching more users");
		} finally {
			setLoadingMoreUsers(false);
		}
	};
	const loadMoreJobs = async () => {
		if (!lastJobDoc) return;
		setLoadingMoreJobs(true);
		try {
			const res = await getAllApplications(lastJobDoc, 20);
			if (res?.data?.length > 0) {
				setJobs((prev) => [...prev, ...res.data]);
				setLastJobDoc(res.lastDoc);
			} else setLastJobDoc(null);
		} catch (error) {
			console.error(error);
			n.error("Error fetching more jobs");
		} finally {
			setLoadingMoreJobs(false);
		}
	};
	const handleDeleteJob = async (jobId) => {
		if (window.confirm("Are you sure you want to delete this job? This cannot be undone.")) {
			if ((await deleteJobById(jobId))?.status === 200) setJobs((prev) => prev.filter((job) => job.id !== jobId));
		}
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-slate-50 min-h-screen flex flex-col items-center justify-center font-sans",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-slate-500 font-medium tracking-wide",
			children: "Initializing Platform CMS..."
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-slate-50 min-h-screen py-10 font-sans",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 md:p-8 border border-slate-200 rounded-2xl shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl md:text-3xl font-bold text-slate-800 tracking-tight",
						children: "Super Admin Control"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-slate-500 mb-0 mt-1",
						children: "Global oversight of platform operations, users, and telemetry."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => navigate("/brand-settings"),
							className: "flex items-center gap-2 bg-purple-50 hover:bg-purple-100 text-purple-600 font-semibold px-5 py-2.5 rounded-lg border-0 transition-colors shadow-sm text-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Brand Settings" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: fetchCMSData,
							className: "flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-600 font-semibold px-5 py-2.5 rounded-lg border-0 transition-colors shadow-sm text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiRefreshCw, {
								size: 16,
								className: loading ? "animate-spin" : ""
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sync Data" })]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-slate-200/50 p-1.5 rounded-xl inline-flex flex-wrap gap-1 w-full sm:w-auto overflow-x-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: `px-6 py-2.5 rounded-lg text-sm font-semibold transition-all flex-shrink-0 ${activeTab === "overview" ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`,
							onClick: () => setActiveTab("overview"),
							children: "Overview"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: `px-6 py-2.5 rounded-lg text-sm font-semibold transition-all flex-shrink-0 ${activeTab === "jobs" ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`,
							onClick: () => setActiveTab("jobs"),
							children: "Manage Jobs"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: `px-6 py-2.5 rounded-lg text-sm font-semibold transition-all flex-shrink-0 ${activeTab === "users" ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`,
							onClick: () => setActiveTab("users"),
							children: "Manage Users"
						})
					]
				}),
				activeTab === "overview" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-3 gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow relative overflow-hidden group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-6 -top-6 w-24 h-24 bg-blue-50 rounded-full group-hover:scale-110 transition-transform duration-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-10 flex justify-between items-start",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-slate-500 text-xs font-bold uppercase tracking-wider mb-2",
									children: "Registered Users"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-4xl md:text-5xl font-black text-slate-800",
										children: users.length
									}), lastUserDoc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-blue-500 font-bold text-xl",
										children: "+"
									})]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiUsers, { size: 22 })
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow relative overflow-hidden group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-6 -top-6 w-24 h-24 bg-purple-50 rounded-full group-hover:scale-110 transition-transform duration-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-10 flex justify-between items-start",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-slate-500 text-xs font-bold uppercase tracking-wider mb-2",
									children: "Active Job Listings"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-4xl md:text-5xl font-black text-slate-800",
										children: jobs.length
									}), lastJobDoc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-purple-500 font-bold text-xl",
										children: "+"
									})]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiBriefcase, { size: 22 })
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow relative overflow-hidden group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-6 -top-6 w-24 h-24 bg-emerald-50 rounded-full group-hover:scale-110 transition-transform duration-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-10 flex justify-between items-start",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-slate-500 text-xs font-bold uppercase tracking-wider mb-2",
									children: "Platform Telemetry"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 mt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-3 h-3 rounded-full bg-emerald-500 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-2xl font-bold text-emerald-600",
										children: "Optimal"
									})]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiActivity, { size: 22 })
								})]
							})]
						})
					]
				}),
				activeTab === "jobs" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-left text-sm whitespace-nowrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-slate-50 border-b border-slate-200 text-slate-500",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-4 font-semibold text-xs uppercase tracking-wider",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiBriefcase, { size: 14 }), " Job Title"]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-4 font-semibold text-xs uppercase tracking-wider",
										children: "Company"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-4 font-semibold text-xs uppercase tracking-wider",
										children: "Posted By (ID)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-4 font-semibold text-xs uppercase tracking-wider text-right",
										children: "Actions"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", {
								className: "divide-y divide-slate-100",
								children: [jobs.map((job) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "hover:bg-slate-50/50 transition-colors",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-4 font-medium text-slate-800",
											children: job.title || job.jobTitle
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-4 text-slate-600 font-medium",
											children: job.company
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-4 text-slate-400 text-xs font-mono",
											children: job.postedBy
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-4 text-right",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => handleDeleteJob(job.id),
												className: "text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-colors group relative inline-flex items-center justify-center",
												"aria-label": "Delete",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiTrash2, { size: 18 })
											})
										})
									]
								}, job.id)), jobs.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									colSpan: "4",
									className: "text-center p-8 text-slate-500",
									children: "No active jobs found on the platform."
								}) })]
							})]
						})
					}), lastJobDoc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-4 border-t border-slate-100 bg-slate-50 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: loadMoreJobs,
							disabled: loadingMoreJobs,
							className: "px-6 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold rounded-lg transition-colors shadow-sm text-sm",
							children: loadingMoreJobs ? "Loading data..." : "Load More Jobs"
						})
					})]
				}),
				activeTab === "users" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-left text-sm whitespace-nowrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-slate-50 border-b border-slate-200 text-slate-500",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-4 font-semibold text-xs uppercase tracking-wider",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiUser, { size: 14 }), " User"]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-4 font-semibold text-xs uppercase tracking-wider",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiMail, { size: 14 }), " Email"]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-4 font-semibold text-xs uppercase tracking-wider",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiShield, { size: 14 }), " Role"]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-4 font-semibold text-xs uppercase tracking-wider text-right",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-end gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiCheckCircle, { size: 14 }), " Status"]
										})
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", {
								className: "divide-y divide-slate-100",
								children: [users.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "hover:bg-slate-50/50 transition-colors",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "px-6 py-4 font-medium text-slate-800 capitalize",
											children: [
												u.firstName,
												" ",
												u.lastName
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-4 text-slate-600",
											children: u.email
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `px-3 py-1 text-xs font-semibold rounded-full capitalize ${u.role === "superadmin" ? "bg-purple-100 text-purple-700" : u.role === "admin" ? "bg-blue-100 text-blue-700" : "bg-emerald-100 text-emerald-700"}`,
												children: u.role === "admin" ? "employer" : u.role
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-4 text-right",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center gap-1.5 text-emerald-600 text-xs font-bold bg-emerald-50 px-2.5 py-1 rounded-full",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-500" }), "Active"]
											})
										})
									]
								}, u.id)), users.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									colSpan: "4",
									className: "text-center p-8 text-slate-500",
									children: "No users registered on the platform."
								}) })]
							})]
						})
					}), lastUserDoc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-4 border-t border-slate-100 bg-slate-50 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: loadMoreUsers,
							disabled: loadingMoreUsers,
							className: "px-6 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold rounded-lg transition-colors shadow-sm text-sm",
							children: loadingMoreUsers ? "Loading data..." : "Load More Users"
						})
					})]
				})
			]
		})
	});
};
//#endregion
export { AdminHome as default };
