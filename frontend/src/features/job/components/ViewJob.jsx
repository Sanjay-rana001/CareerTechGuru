import React, { useEffect, useState } from "react";
import { useJobContext, useSectionContext } from "../../../context";
import { confirmAlert } from "react-confirm-alert";
import { useNavigate } from "react-router-dom";
import { getTimeDifference } from "../../../utils/dateFilter/DateFilter";
import { CircularLoader, Pagination } from "../../../components";
import { sortDataByDate } from "../../../utils/filters/Filters";

const ViewJob = () => {
  const admin = JSON.parse(sessionStorage.getItem("data"));
  const { getApplicationsByAdminId, deleteJobById } = useJobContext();
  const { getAllSections } = useSectionContext();
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [jobsData, setJobsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJobs, setSelectedJobs] = useState([]); // Added state to manage selected jobs
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const itemsPerPage = 10; // Define items per page

  const handleLogOut = (id) => {
    return () => {
      confirmAlert({
        title: "Confirm to delete",
        message: "Are you sure to do this.",
        buttons: [
          {
            label: "Yes",
            onClick: () => deleteJobById(id),
          },
          {
            label: "No",
            onClick: () => confirmAlert({}),
          },
        ],
      });
    };
  };

  // Handle individual checkbox change
  const handleCheckboxChange = (jobId) => {
    if (selectedJobs.includes(jobId)) {
      setSelectedJobs(selectedJobs.filter((id) => id !== jobId));
    } else {
      setSelectedJobs([...selectedJobs, jobId]);
    }
  };

  const [isPlay, setIsPlay] = useState(true);

  // Toggle the image source based on the current state
  const changeImage = () => {
    setIsPlay(!isPlay);
  };

  // Handle "Select All" checkbox change
  const handleSelectAllChange = (e) => {
    if (e.target.checked) {
      const allJobIds = currentJobs.map((job) => job._id);
      setSelectedJobs(allJobIds);
    } else {
      setSelectedJobs([]);
    }
  };

  const indexOfLastJob = currentPage * itemsPerPage;
  const indexOfFirstJob = indexOfLastJob - itemsPerPage;
  const currentJobs = jobsData.slice(indexOfFirstJob, indexOfLastJob);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch categories first
        const categoriesData = await getAllSections();
        setCategories(categoriesData?.data);

        // Then fetch job data
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
  }, [admin?.id, getAllSections, getApplicationsByAdminId]);

  if (loading) {
    return <CircularLoader />;
  }

  if (error || jobsData?.length <= 0) {
    return (
      <div className="bg-slate-50 min-h-screen flex items-center justify-center font-sans">
        <div className="text-center bg-white p-10 rounded-2xl shadow-sm border border-slate-200 max-w-md w-full">
          <div className="w-20 h-20 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-2">No active jobs</h3>
          <p className="text-slate-500 text-sm mb-8">You haven't posted any jobs yet. Create your first job posting to start receiving applications.</p>
          <button onClick={() => navigate("/add-job")} className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg transition-colors shadow-sm">
            Post a new job
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
              Active Jobs
            </h1>
            <p className="text-sm text-slate-400 mb-0 mt-1">
              You have {jobsData?.length} active {jobsData?.length === 1 ? 'job' : 'jobs'} posted
            </p>
          </div>
          <Pagination
            totalItems={jobsData?.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={paginate}
          />
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500">
                <tr>
                  <th className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        onChange={handleSelectAllChange}
                        checked={selectedJobs.length === currentJobs.length && currentJobs.length > 0}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                    </div>
                  </th>
                  <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">Title</th>
                  <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">Category</th>
                  <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider text-center">Open positions</th>
                  <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">Created at</th>
                  <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {currentJobs?.map((job, idx) => {
                  const category = categories.find((cat) => cat._id === job.category);

                  return (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          checked={selectedJobs.includes(job._id)}
                          onChange={() => handleCheckboxChange(job._id)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                      </td>
                      <td className="px-6 py-4 font-medium text-slate-800">
                        {job?.title}
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                          {category ? category.title : "N/A"}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600 font-semibold">
                          {job?.openings}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-500">
                        {getTimeDifference(job?.createdAt)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-3">
                          <button
                            onClick={handleLogOut(job._id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-colors group relative"
                            aria-label="Delete"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                          </button>
                          
                          <button
                            onClick={changeImage}
                            className="text-amber-500 hover:text-amber-700 hover:bg-amber-50 p-2 rounded-lg transition-colors group relative"
                            aria-label={isPlay ? "Pause" : "Play"}
                          >
                            {isPlay ? (
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            ) : (
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            )}
                          </button>

                          <button className="text-blue-500 hover:text-blue-700 hover:bg-blue-50 p-2 rounded-lg transition-colors group relative" aria-label="Edit">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewJob;
