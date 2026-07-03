import { a as __toESM, i as __exportAll, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-B5ErqjvK.js";
import { K as useSectionContext, R as require_lib, W as useJobContext, b as CircularLoader, ut as useNavigate, y as Pagination } from "./index-bM5YXtog.js";
import { r as getTimeDifference } from "./DateFilter-D2bJKq2G.js";
//#region src/utils/filters/Filters.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_lib = require_lib();
var filterByLatestPost = (data) => {
	if (!Array.isArray(data)) throw new Error("Input data must be an array");
	data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
	return data.slice(0, 6);
};
var filterByCategory = (data, category) => {
	if (!category || !data || data.length === 0) return [];
	const filteredData = data.filter((item) => item.category === category);
	filteredData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
	return filteredData.slice(0, 4);
};
var filterByLocation = (data, location) => {
	if (!location || !data || data.length === 0) return [];
	const lowerCaseLocation = location.toLowerCase();
	return data.filter((item) => item.jobLocation.toLowerCase().includes(lowerCaseLocation));
};
var sortDataByDate = (data, dateField) => {
	if (!data || data.length === 0 || !dateField) return [];
	return data.sort((a, b) => new Date(b[dateField]) - new Date(a[dateField]));
};
//#endregion
//#region src/features/job/components/ViewJob.jsx
var ViewJob_exports = /* @__PURE__ */ __exportAll({ default: () => ViewJob });
var import_jsx_runtime = require_jsx_runtime();
var ViewJob = () => {
	const admin = JSON.parse(sessionStorage.getItem("data"));
	const { getApplicationsByAdminId, deleteJobById } = useJobContext();
	const { getAllSections } = useSectionContext();
	const [categories, setCategories] = (0, import_react.useState)([]);
	const [error, setError] = (0, import_react.useState)(null);
	const [jobsData, setJobsData] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [selectedJobs, setSelectedJobs] = (0, import_react.useState)([]);
	const navigate = useNavigate();
	const [currentPage, setCurrentPage] = (0, import_react.useState)(1);
	const itemsPerPage = 10;
	const handleLogOut = (id) => {
		return () => {
			(0, import_lib.confirmAlert)({
				title: "Confirm to delete",
				message: "Are you sure to do this.",
				buttons: [{
					label: "Yes",
					onClick: () => deleteJobById(id)
				}, {
					label: "No",
					onClick: () => (0, import_lib.confirmAlert)({})
				}]
			});
		};
	};
	const handleCheckboxChange = (jobId) => {
		if (selectedJobs.includes(jobId)) setSelectedJobs(selectedJobs.filter((id) => id !== jobId));
		else setSelectedJobs([...selectedJobs, jobId]);
	};
	const [isPlay, setIsPlay] = (0, import_react.useState)(true);
	const changeImage = () => {
		setIsPlay(!isPlay);
	};
	const handleSelectAllChange = (e) => {
		if (e.target.checked) {
			const allJobIds = currentJobs.map((job) => job._id);
			setSelectedJobs(allJobIds);
		} else setSelectedJobs([]);
	};
	const indexOfLastJob = currentPage * itemsPerPage;
	const indexOfFirstJob = indexOfLastJob - itemsPerPage;
	const currentJobs = jobsData.slice(indexOfFirstJob, indexOfLastJob);
	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	(0, import_react.useEffect)(() => {
		const fetchData = async () => {
			try {
				const categoriesData = await getAllSections();
				setCategories(categoriesData?.data);
				const adminId = admin?._id || admin?.id;
				if (adminId) {
					const jobsData = await getApplicationsByAdminId(adminId);
					if (jobsData && jobsData.length > 0) {
						const sortedData = sortDataByDate(jobsData, "createdAt");
						setJobsData(sortedData);
					}
				}
				setLoading(false);
			} catch (error) {
				setError(error.message);
				setLoading(false);
			}
		};
		fetchData();
	}, [
		admin?.id,
		getAllSections,
		getApplicationsByAdminId
	]);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircularLoader, {});
	if (error || jobsData?.length <= 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
							d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-2xl font-bold text-slate-800 mb-2",
					children: "No active jobs"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-slate-500 text-sm mb-8",
					children: "You haven't posted any jobs yet. Create your first job posting to start receiving applications."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => navigate("/add-job"),
					className: "bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg transition-colors shadow-sm",
					children: "Post a new job"
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-slate-50 min-h-screen py-10 font-sans",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 border border-slate-200 rounded-2xl shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold text-slate-800 tracking-tight",
					children: "Active Jobs"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-slate-400 mb-0 mt-1",
					children: [
						"You have ",
						jobsData?.length,
						" active ",
						jobsData?.length === 1 ? "job" : "jobs",
						" posted"
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pagination, {
					totalItems: jobsData?.length,
					itemsPerPage,
					currentPage,
					onPageChange: paginate
				})]
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
									className: "px-6 py-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center gap-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											onChange: handleSelectAllChange,
											checked: selectedJobs.length === currentJobs.length && currentJobs.length > 0,
											className: "w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
										})
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-4 font-semibold text-xs uppercase tracking-wider",
									children: "Title"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-4 font-semibold text-xs uppercase tracking-wider",
									children: "Category"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-4 font-semibold text-xs uppercase tracking-wider text-center",
									children: "Open positions"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-4 font-semibold text-xs uppercase tracking-wider",
									children: "Created at"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-4 font-semibold text-xs uppercase tracking-wider text-right",
									children: "Actions"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "divide-y divide-slate-100",
							children: currentJobs?.map((job, idx) => {
								const category = categories.find((cat) => cat._id === job.category);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "hover:bg-slate-50/50 transition-colors",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "checkbox",
												checked: selectedJobs.includes(job._id),
												onChange: () => handleCheckboxChange(job._id),
												className: "w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-4 font-medium text-slate-800",
											children: job?.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-4 text-slate-600",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600",
												children: category ? category.title : "N/A"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-4 text-center",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600 font-semibold",
												children: job?.openings
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-4 text-slate-500",
											children: getTimeDifference(job?.createdAt)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-end gap-3",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: handleLogOut(job._id),
														className: "text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-colors group relative",
														"aria-label": "Delete",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
															className: "w-5 h-5",
															fill: "none",
															stroke: "currentColor",
															viewBox: "0 0 24 24",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
																strokeLinecap: "round",
																strokeLinejoin: "round",
																strokeWidth: 2,
																d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
															})
														})
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: changeImage,
														className: "text-amber-500 hover:text-amber-700 hover:bg-amber-50 p-2 rounded-lg transition-colors group relative",
														"aria-label": isPlay ? "Pause" : "Play",
														children: isPlay ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
															className: "w-5 h-5",
															fill: "none",
															stroke: "currentColor",
															viewBox: "0 0 24 24",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
																strokeLinecap: "round",
																strokeLinejoin: "round",
																strokeWidth: 2,
																d: "M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
															})
														}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
															className: "w-5 h-5",
															fill: "none",
															stroke: "currentColor",
															viewBox: "0 0 24 24",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
																strokeLinecap: "round",
																strokeLinejoin: "round",
																strokeWidth: 2,
																d: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
																strokeLinecap: "round",
																strokeLinejoin: "round",
																strokeWidth: 2,
																d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
															})]
														})
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														className: "text-blue-500 hover:text-blue-700 hover:bg-blue-50 p-2 rounded-lg transition-colors group relative",
														"aria-label": "Edit",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
															className: "w-5 h-5",
															fill: "none",
															stroke: "currentColor",
															viewBox: "0 0 24 24",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
																strokeLinecap: "round",
																strokeLinejoin: "round",
																strokeWidth: 2,
																d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
															})
														})
													})
												]
											})
										})
									]
								}, idx);
							})
						})]
					})
				})
			})]
		})
	});
};
//#endregion
export { filterByLocation as a, filterByLatestPost as i, ViewJob_exports as n, filterByCategory as r, ViewJob as t };
