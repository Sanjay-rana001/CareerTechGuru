import React, { useEffect, useState } from "react";
import { useAdminContext, useEmployeeContext } from "../../context";
import { useNavigate } from "react-router-dom";
import { CircularLoader } from "../../components";

const EmployeeAppliedJobs = () => {
  const { getApplicationByUserId } = useAdminContext();
  const { formatDate } = useEmployeeContext();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await getApplicationByUserId();
        if (response && response.data) {
          // Sort by newest first
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

  if (loading) return <CircularLoader />;

  if (applications.length === 0) {
    return (
      <div className="bg-slate-50 min-h-screen flex items-center justify-center font-sans">
        <div className="text-center bg-white p-10 rounded-2xl shadow-sm border border-slate-200 max-w-md w-full">
          <div className="w-20 h-20 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-2">No applications yet</h3>
          <p className="text-slate-500 text-sm mb-8">You haven't applied to any jobs yet. Start exploring and find your dream job!</p>
          <button onClick={() => navigate("/view-jobs")} className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg transition-colors shadow-sm">
            Browse Jobs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 border border-slate-200 rounded-2xl shadow-sm">
          <div>
            <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
              My Applications
            </h1>
            <p className="text-sm text-slate-400 mb-0 mt-1">
              You have applied to {applications.length} {applications.length === 1 ? 'job' : 'jobs'} in total
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500">
                <tr>
                  <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">Job title</th>
                  <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">Company</th>
                  <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">Applied date</th>
                  <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {applications.map((application, index) => (
                  <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-800">
                      {application.title || "N/A"}
                    </td>
                    <td className="px-6 py-4 text-slate-600 font-medium">
                      {application.companyName || "N/A"}
                    </td>
                    <td className="px-6 py-4 text-slate-500">
                      {formatDate(application?.appliedAt || application?.createdAt)}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize ${
                        application?.status === 'accepted' ? 'bg-green-100 text-green-700' :
                        application?.status === 'rejected' ? 'bg-red-100 text-red-700' :
                        'bg-amber-100 text-amber-700'
                      }`}>
                        {application?.status || "pending"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => navigate(`/view-jobs-detail/${application.title}`)}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                      >
                        View Job
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeAppliedJobs;
