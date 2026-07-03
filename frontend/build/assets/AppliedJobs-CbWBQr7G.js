import { a as __toESM, i as __exportAll, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-B5ErqjvK.js";
import { _ as where, d as onSnapshot, g as updateDoc, n as db, p as query, t as auth, v as collection, y as doc } from "./firebase-t_zXV7oF.js";
import { B as useAdminContext, C as ModalBox, K as useSectionContext, q as n, ut as useNavigate } from "./index-bM5YXtog.js";
import { n as MdClose } from "./md-DytvNgol.js";
//#region src/features/job/components/candidate/CandidateProfile.jsx
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CandidateProfile = ({ handleModalClose, candidateData, application }) => {
	const handleAction = async (action) => {
		try {
			if (application?.id) {
				await updateDoc(doc(db, "applications", application.id), { status: action.toLowerCase() });
				n.success(`Candidate marked as ${action}`);
			} else n.error("Application ID missing");
		} catch (error) {
			console.error(error);
			n.error("Failed to update status");
		}
		handleModalClose();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-white rounded-2xl shadow-xl overflow-hidden max-w-2xl w-full mx-auto relative font-sans",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors",
			onClick: handleModalClose,
			"aria-label": "Close",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MdClose, { size: 24 })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-2xl font-bold text-slate-800 mb-6",
					children: "Candidate Profile"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row gap-6 mb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: candidateData?.profilePictureUrl || candidateData?.profilePicture || "https://i.pravatar.cc/150",
							alt: "Profile",
							className: "w-24 h-24 rounded-full object-cover border-4 border-slate-50"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-grow flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "text-xl font-bold text-slate-800 capitalize mb-1",
								children: [
									application?.firstName || candidateData?.firstName,
									" ",
									application?.lastName || candidateData?.lastName
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-slate-500 mb-1",
								children: application?.userEmail || candidateData?.email
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-slate-500",
								children: application?.userMobile || candidateData?.mobile
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								if (candidateData?.resumeUrl) window.open(candidateData.resumeUrl, "_blank", "noopener,noreferrer");
								else n.error("Candidate has not uploaded a resume.");
							},
							className: `px-5 py-2.5 font-semibold rounded-lg transition-colors border-0 ${candidateData?.resumeUrl ? "bg-blue-50 text-blue-600 hover:bg-blue-100" : "bg-slate-50 text-slate-400 cursor-not-allowed"}`,
							children: candidateData?.resumeUrl ? "Download CV" : "No CV Uploaded"
						}) })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-3 pt-6 border-t border-slate-100",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => handleAction("Accepted"),
							className: "flex-1 min-w-[120px] py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors border-0",
							children: "Accept"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => handleAction("Rejected"),
							className: "flex-1 min-w-[120px] py-2.5 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors border-0",
							children: "Reject"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => handleAction("On Hold"),
							className: "flex-1 min-w-[120px] py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors border-0",
							children: "Hold"
						})
					]
				})
			]
		})]
	});
};
//#endregion
//#region src/features/job/components/AppliedJobs.jsx
var AppliedJobs_exports = /* @__PURE__ */ __exportAll({ default: () => AppliedJobs });
var formatDate = (dateString) => {
	if (!dateString) return "N/A";
	return new Date(dateString).toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric"
	});
};
var AppliedJobs = () => {
	const { getApplicationBySellerId, getAdminsDetailsByAdminId, getCandidateDetails } = useAdminContext();
	const { getJobSectionById } = useSectionContext();
	const [applications, setApplications] = (0, import_react.useState)([]);
	const [companyData, setCompanyData] = (0, import_react.useState)([]);
	const [candidateData, setCandidateData] = (0, import_react.useState)([]);
	const [categories, setCategories] = (0, import_react.useState)([]);
	const [openProfile, setOpenProfile] = (0, import_react.useState)(false);
	const navigate = useNavigate();
	const [selectedCandidate, setSelectedCandidate] = (0, import_react.useState)(null);
	const [selectedApplication, setSelectedApplication] = (0, import_react.useState)(null);
	const fetchCategories = async () => {
		try {
			const categoryIds = applications?.map((job) => job.category);
			const fetchedCategories = await Promise.all(categoryIds.map((categoryId) => getJobSectionById(categoryId)));
			setCategories(fetchedCategories);
		} catch (error) {
			console.log(error);
		}
	};
	const handleModalClose = () => {
		setOpenProfile(false);
	};
	const handleProfileOpen = (candidate, application) => {
		setSelectedCandidate(candidate);
		setSelectedApplication(application);
		setOpenProfile(true);
	};
	(0, import_react.useEffect)(() => {
		const currentUser = auth.currentUser;
		if (!currentUser) return;
		const unsubscribe = onSnapshot(query(collection(db, "applications"), where("sellerId", "==", currentUser.uid)), async (querySnapshot) => {
			try {
				const apps = [];
				querySnapshot.forEach((doc) => {
					apps.push({
						id: doc.id,
						...doc.data()
					});
				});
				setApplications(apps);
				if (apps.length > 0) {
					const sellerIds = apps.map((application) => application.sellerId);
					const userIds = apps.map((application) => application.userId);
					const adminDetailsPromises = sellerIds.map((sellerId) => getAdminsDetailsByAdminId(sellerId, "Employer"));
					const candidateDetailsPromises = userIds.map((userId) => getCandidateDetails(userId));
					const adminDetailsResponses = await Promise.all(adminDetailsPromises);
					const candidateDetailsResponses = await Promise.all(candidateDetailsPromises);
					setCompanyData(adminDetailsResponses.map((response) => response.data[0]));
					setCandidateData(candidateDetailsResponses.map((response) => response.data));
				}
			} catch (error) {
				console.error("Error processing real-time applications:", error);
			}
		});
		return () => unsubscribe();
	}, [getAdminsDetailsByAdminId]);
	(0, import_react.useEffect)(() => {
		if (applications?.length > 0) fetchCategories();
	}, [applications]);
	if (applications?.length <= 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
							d: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-2xl font-bold text-slate-800 mb-2",
					children: "No applications yet"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-slate-500 text-sm mb-8",
					children: "When candidates apply to your job postings, they will appear here."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => navigate("/add-job"),
					className: "bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg transition-colors",
					children: "Post a new job"
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-slate-50 min-h-screen py-10 font-sans",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 border border-slate-200 rounded-2xl shadow-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold text-slate-800 tracking-tight",
					children: "Received Applications"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-slate-400 mb-0 mt-1",
					children: [
						"You have received ",
						applications?.length,
						" ",
						applications?.length === 1 ? "application" : "applications",
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
									children: "Category"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-4 font-semibold text-xs uppercase tracking-wider",
									children: "Candidate name"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-4 font-semibold text-xs uppercase tracking-wider",
									children: "Email"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-4 font-semibold text-xs uppercase tracking-wider",
									children: "Country"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-4 font-semibold text-xs uppercase tracking-wider",
									children: "Mobile"
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
							children: applications?.map((application, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "hover:bg-slate-50/50 transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-6 py-4 font-medium text-slate-800",
										children: application.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-6 py-4 text-slate-600",
										children: categories[index] ? categories[index][0]?.title || "Unknown" : "Unknown"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "px-6 py-4 text-slate-800 font-medium capitalize",
										children: [
											application?.firstName,
											" ",
											application?.lastName
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-6 py-4 text-slate-500",
										children: application?.userEmail || candidateData[index]?.email || "N/A"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-6 py-4 text-slate-600 capitalize",
										children: candidateData[index]?.country || "N/A"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-6 py-4 text-slate-600",
										children: candidateData[index]?.mobile || "N/A"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-6 py-4 text-slate-500",
										children: formatDate(application?.appliedAt || application?.createdAt)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-6 py-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `px-2.5 py-1 rounded-full text-xs font-medium ${application?.status === "pending" ? "bg-amber-100 text-amber-700" : "bg-green-100 text-green-700"} capitalize`,
											children: application?.status
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-6 py-4 text-right",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => handleProfileOpen(candidateData[index], application),
											className: "text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors",
											children: "View profile"
										})
									})
								]
							}, index))
						})]
					})
				})
			})]
		}), openProfile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModalBox, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CandidateProfile, {
			handleModalClose,
			candidateData: selectedCandidate,
			application: selectedApplication
		}) })]
	});
};
//#endregion
export { AppliedJobs_exports as n, AppliedJobs as t };
