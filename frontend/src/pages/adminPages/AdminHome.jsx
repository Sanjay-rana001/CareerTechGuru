import React, { useEffect, useState } from "react";
import { useAdminContext, useJobContext } from "../../context";
import { toast } from "react-hot-toast";
import { FiUsers, FiBriefcase, FiActivity, FiRefreshCw, FiTrash2, FiUser, FiMail, FiShield, FiCheckCircle } from "react-icons/fi";

import { useNavigate } from "react-router-dom";

const AdminHome = () => {
  const navigate = useNavigate();
  const { getGlobalUsers } = useAdminContext();
  const { getAllApplications, deleteJobById } = useJobContext();

  const [activeTab, setActiveTab] = useState("overview");
  const [users, setUsers] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pagination states
  const [lastUserDoc, setLastUserDoc] = useState(null);
  const [lastJobDoc, setLastJobDoc] = useState(null);
  const [loadingMoreUsers, setLoadingMoreUsers] = useState(false);
  const [loadingMoreJobs, setLoadingMoreJobs] = useState(false);

  useEffect(() => {
    fetchCMSData();
  }, []);

  const fetchCMSData = async () => {
    setLoading(true);
    try {
      const [usersRes, jobsRes] = await Promise.all([
        getGlobalUsers(null, 20),
        getAllApplications(null, 20),
      ]);
      setUsers(usersRes?.data || []);
      setLastUserDoc(usersRes?.lastDoc || null);

      setJobs(jobsRes?.data || []);
      setLastJobDoc(jobsRes?.lastDoc || null);
    } catch (error) {
      console.error(error);
      toast.error("Error fetching CMS data");
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
      } else {
        setLastUserDoc(null);
      }
    } catch (error) {
      console.error(error);
      toast.error("Error fetching more users");
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
      } else {
        setLastJobDoc(null);
      }
    } catch (error) {
      console.error(error);
      toast.error("Error fetching more jobs");
    } finally {
      setLoadingMoreJobs(false);
    }
  };

  const handleDeleteJob = async (jobId) => {
    if (
      window.confirm(
        "Are you sure you want to delete this job? This cannot be undone.",
      )
    ) {
      const res = await deleteJobById(jobId);
      if (res?.status === 200) {
        setJobs((prev) => prev.filter((job) => job.id !== jobId));
      }
    }
  };

  if (loading) {
    return (
      <div className="bg-slate-50 min-h-screen flex flex-col items-center justify-center font-sans">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
        <span className="text-slate-500 font-medium tracking-wide">Initializing Platform CMS...</span>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 md:p-8 border border-slate-200 rounded-2xl shadow-sm">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
              Super Admin Control
            </h1>
            <p className="text-sm text-slate-500 mb-0 mt-1">
              Global oversight of platform operations, users, and telemetry.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => navigate("/brand-settings")} 
              className="flex items-center gap-2 bg-purple-50 hover:bg-purple-100 text-purple-600 font-semibold px-5 py-2.5 rounded-lg border-0 transition-colors shadow-sm text-sm"
            >
              <span>Brand Settings</span>
            </button>
            <button 
              onClick={fetchCMSData} 
              className="flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-600 font-semibold px-5 py-2.5 rounded-lg border-0 transition-colors shadow-sm text-sm"
            >
              <FiRefreshCw size={16} className={loading ? "animate-spin" : ""} />
              <span>Sync Data</span>
            </button>
          </div>
        </div>

        {/* Segmented Navigation */}
        <div className="bg-slate-200/50 p-1.5 rounded-xl inline-flex flex-wrap gap-1 w-full sm:w-auto overflow-x-auto">
          <button
            className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all flex-shrink-0 ${activeTab === "overview" ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all flex-shrink-0 ${activeTab === "jobs" ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`}
            onClick={() => setActiveTab("jobs")}
          >
            Manage Jobs
          </button>
          <button
            className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all flex-shrink-0 ${activeTab === "users" ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`}
            onClick={() => setActiveTab("users")}
          >
            Manage Users
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Total Users Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-50 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">
                    Registered Users
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <p className="text-4xl md:text-5xl font-black text-slate-800">
                      {users.length}
                    </p>
                    {lastUserDoc && <span className="text-blue-500 font-bold text-xl">+</span>}
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <FiUsers size={22} />
                </div>
              </div>
            </div>

            {/* Total Jobs Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-purple-50 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">
                    Active Job Listings
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <p className="text-4xl md:text-5xl font-black text-slate-800">
                      {jobs.length}
                    </p>
                    {lastJobDoc && <span className="text-purple-500 font-bold text-xl">+</span>}
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                  <FiBriefcase size={22} />
                </div>
              </div>
            </div>

            {/* Platform Health Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-emerald-50 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">
                    Platform Telemetry
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                    <p className="text-2xl font-bold text-emerald-600">
                      Optimal
                    </p>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <FiActivity size={22} />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "jobs" && (
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider"><div className="flex items-center gap-2"><FiBriefcase size={14}/> Job Title</div></th>
                    <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">Company</th>
                    <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">Posted By (ID)</th>
                    <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {jobs.map((job) => (
                    <tr key={job.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-800">
                        {job.title || job.jobTitle}
                      </td>
                      <td className="px-6 py-4 text-slate-600 font-medium">
                        {job.company}
                      </td>
                      <td className="px-6 py-4 text-slate-400 text-xs font-mono">
                        {job.postedBy}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => handleDeleteJob(job.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-colors group relative inline-flex items-center justify-center"
                          aria-label="Delete"
                        >
                          <FiTrash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {jobs.length === 0 && (
                    <tr>
                      <td colSpan="4" className="text-center p-8 text-slate-500">
                        No active jobs found on the platform.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            {lastJobDoc && (
              <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-center">
                <button
                  onClick={loadMoreJobs}
                  disabled={loadingMoreJobs}
                  className="px-6 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold rounded-lg transition-colors shadow-sm text-sm"
                >
                  {loadingMoreJobs ? "Loading data..." : "Load More Jobs"}
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === "users" && (
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider"><div className="flex items-center gap-2"><FiUser size={14}/> User</div></th>
                    <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider"><div className="flex items-center gap-2"><FiMail size={14}/> Email</div></th>
                    <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider"><div className="flex items-center gap-2"><FiShield size={14}/> Role</div></th>
                    <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider text-right"><div className="flex items-center justify-end gap-2"><FiCheckCircle size={14}/> Status</div></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {users.map((u) => (
                    <tr key={u.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-800 capitalize">
                        {u.firstName} {u.lastName}
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        {u.email}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 text-xs font-semibold rounded-full capitalize ${
                            u.role === "superadmin" ? "bg-purple-100 text-purple-700" : 
                            u.role === "admin" ? "bg-blue-100 text-blue-700" : 
                            "bg-emerald-100 text-emerald-700"
                          }`}
                        >
                          {u.role === "admin" ? "employer" : u.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="inline-flex items-center gap-1.5 text-emerald-600 text-xs font-bold bg-emerald-50 px-2.5 py-1 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          Active
                        </span>
                      </td>
                    </tr>
                  ))}
                  {users.length === 0 && (
                    <tr>
                      <td colSpan="4" className="text-center p-8 text-slate-500">
                        No users registered on the platform.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            {lastUserDoc && (
              <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-center">
                <button
                  onClick={loadMoreUsers}
                  disabled={loadingMoreUsers}
                  className="px-6 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold rounded-lg transition-colors shadow-sm text-sm"
                >
                  {loadingMoreUsers ? "Loading data..." : "Load More Users"}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminHome;
