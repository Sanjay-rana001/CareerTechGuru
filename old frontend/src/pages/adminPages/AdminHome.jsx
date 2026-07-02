import React, { useEffect, useState } from 'react';
import { useAdminContext, useJobContext } from '../../context';
import { toast } from 'react-hot-toast';

const AdminHome = () => {
  const { getGlobalUsers } = useAdminContext();
  const { getAllApplications, deleteJobById } = useJobContext();
  
  const [activeTab, setActiveTab] = useState('overview');
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
        getAllApplications(null, 20)
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
        setUsers(prev => [...prev, ...res.data]);
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
        setJobs(prev => [...prev, ...res.data]);
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
    if (window.confirm("Are you sure you want to delete this job? This cannot be undone.")) {
      const res = await deleteJobById(jobId);
      if (res?.status === 200) {
        setJobs(prev => prev.filter(job => job.id !== jobId));
      }
    }
  };

  if (loading) {
    return <div className="text-center p-10"><span className="text-xl">Loading Platform Data...</span></div>;
  }

  return (
    <div className='container mx-auto p-4 md:p-8 bg-gray-50 min-h-screen'>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className='text-3xl font-bold text-gray-800'>Platform Admin CMS</h1>
          <p className="text-gray-500">Manage jobs, users, and platform settings.</p>
        </div>
        <button onClick={fetchCMSData} className='btn btn-primary'>Refresh Data</button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 border-b border-gray-200 mb-6">
        <button 
          className={`pb-2 px-4 ${activeTab === 'overview' ? 'border-b-2 border-blue-600 text-blue-600 font-bold' : 'text-gray-500'}`}
          onClick={() => setActiveTab('overview')}
        >Overview</button>
        <button 
          className={`pb-2 px-4 ${activeTab === 'jobs' ? 'border-b-2 border-blue-600 text-blue-600 font-bold' : 'text-gray-500'}`}
          onClick={() => setActiveTab('jobs')}
        >Manage Jobs</button>
        <button 
          className={`pb-2 px-4 ${activeTab === 'users' ? 'border-b-2 border-blue-600 text-blue-600 font-bold' : 'text-gray-500'}`}
          onClick={() => setActiveTab('users')}
        >Manage Users</button>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow border-t-4 border-blue-500">
            <h3 className="text-gray-500 text-sm font-semibold">Total Registered Users</h3>
            <p className="text-4xl font-bold mt-2">{users.length}{lastUserDoc && '+'}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border-t-4 border-green-500">
            <h3 className="text-gray-500 text-sm font-semibold">Total Active Jobs</h3>
            <p className="text-4xl font-bold mt-2">{jobs.length}{lastJobDoc && '+'}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border-t-4 border-purple-500">
            <h3 className="text-gray-500 text-sm font-semibold">Platform Health</h3>
            <p className="text-xl font-bold mt-2 text-green-600">Optimal</p>
          </div>
        </div>
      )}

      {activeTab === 'jobs' && (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Posted By</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {jobs.map((job) => (
                <tr key={job.id}>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{job.title || job.jobTitle}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">{job.company}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">{job.postedBy}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button onClick={() => handleDeleteJob(job.id)} className="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                </tr>
              ))}
              {jobs.length === 0 && <tr><td colSpan="4" className="text-center p-4">No jobs found.</td></tr>}
            </tbody>
          </table>
          {lastJobDoc && (
            <div className="p-4 flex justify-center border-t border-gray-200 bg-gray-50">
              <button 
                onClick={loadMoreJobs}
                disabled={loadingMoreJobs}
                className="px-6 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium rounded-lg transition-colors"
              >
                {loadingMoreJobs ? 'Loading...' : 'Load More Jobs'}
              </button>
            </div>
          )}
        </div>
      )}

      {activeTab === 'users' && (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((u) => (
                <tr key={u.id}>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{u.firstName} {u.lastName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">{u.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${u.role === 'superadmin' ? 'bg-purple-100 text-purple-800' : u.role === 'admin' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                      {u.role === 'admin' ? 'employer' : u.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <span className="text-green-600">Active</span>
                  </td>
                </tr>
              ))}
              {users.length === 0 && <tr><td colSpan="4" className="text-center p-4">No users found.</td></tr>}
            </tbody>
          </table>
          {lastUserDoc && (
            <div className="p-4 flex justify-center border-t border-gray-200 bg-gray-50">
              <button 
                onClick={loadMoreUsers}
                disabled={loadingMoreUsers}
                className="px-6 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium rounded-lg transition-colors"
              >
                {loadingMoreUsers ? 'Loading...' : 'Load More Users'}
              </button>
            </div>
          )}
        </div>
      )}

    </div>
  )
}

export default AdminHome;