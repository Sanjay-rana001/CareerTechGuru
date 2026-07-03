import React, { useEffect, useState } from 'react'
import { FiUserCheck, FiUsers, FiUserX } from 'react-icons/fi'
import { FaRegEye, FaSuitcase } from 'react-icons/fa'
import { HiOutlineCursorClick } from "react-icons/hi";
import { CiFilter } from "react-icons/ci";
import { useJobContext } from '../../../context';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const EmployerDash = () => {
    const admin = JSON.parse(sessionStorage.getItem('data'));
    const { getApplicationsByAdminId } = useJobContext();
    const [jobsData, setJobsData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const jobsData = await getApplicationsByAdminId(admin?.id);
            if (jobsData && jobsData.length > 0) {
                setJobsData(jobsData);
            }
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const totalJobsPosted = jobsData?.length || 0;
    const totalClicks = jobsData.reduce((acc, job) => acc + (job.clicks || 0), 0);
    const totalViews = jobsData.reduce((acc, job) => acc + (job.views || 0), 0);
    const totalApplicants = jobsData.reduce((acc, job) => acc + (job.applicants || 0), 0);
    const totalSelectedApplicants = jobsData.reduce((acc, job) => acc + (job.selected || 0), 0);
    const totalRejectedApplicants = jobsData.reduce((acc, job) => acc + (job.rejected || 0), 0);
    const applyRate = totalViews ? (totalApplicants / totalViews * 100) : 0;

    const pieData = {
        labels: ["Selected", "Rejected", 'Total Jobs', 'Total Clicks', 'Total Views', 'Total Applicants'],
        datasets: [
            {
                data: [totalSelectedApplicants, totalRejectedApplicants, totalJobsPosted, totalClicks, totalViews, totalApplicants],
                backgroundColor: ['#10B981', '#EF4444', '#3B82F6', '#F59E0B', '#64748B', '#EC4899'],
            },
        ],
    };
    
    const graphData = {
        labels: ['Total Jobs', 'Total Clicks', 'Total Views', 'Total Applicants', 'Selected', 'Rejected'],
        datasets: [
            {
                label: 'Metrics Count',
                data: [totalJobsPosted, totalClicks, totalViews, totalApplicants, totalSelectedApplicants, totalRejectedApplicants],
                backgroundColor: ['#3B82F6', '#F59E0B', '#64748B', '#EC4899', '#10B981', '#EF4444'],
            },
        ],
    };

    return (
        <div className="bg-slate-50 min-h-screen py-10 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 border border-slate-200 rounded-2xl shadow-sm">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Employer Dashboard</h1>
                        <p className="text-sm text-slate-400 mb-0">Overview of your jobs postings and candidates metrics</p>
                    </div>
                    <div className="w-full sm:w-auto">
                        <select className="w-full sm:w-48 px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB]">
                            <option value="">Recent</option>
                            <option value="">Last 10 Days</option>
                        </select>
                    </div>
                </div>

                {/* Dashboard Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Total Job Posted */}
                    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 flex justify-between items-center hover:shadow-md transition-shadow">
                        <div>
                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Total job posted</span>
                            <span className="text-2xl font-bold text-slate-800">{totalJobsPosted}</span>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#3B82F6] flex items-center justify-center">
                            <FaSuitcase size={22} />
                        </div>
                    </div>

                    {/* Total Clicks */}
                    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 flex justify-between items-center hover:shadow-md transition-shadow">
                        <div>
                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Total clicks</span>
                            <span className="text-2xl font-bold text-slate-800">{totalClicks}</span>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                            <HiOutlineCursorClick size={22} />
                        </div>
                    </div>

                    {/* Job Views */}
                    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 flex justify-between items-center hover:shadow-md transition-shadow">
                        <div>
                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Job views</span>
                            <span className="text-2xl font-bold text-slate-800">{totalViews}</span>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center">
                            <FaRegEye size={22} />
                        </div>
                    </div>

                    {/* Total Applicants */}
                    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 flex justify-between items-center hover:shadow-md transition-shadow">
                        <div>
                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Total Applicants</span>
                            <span className="text-2xl font-bold text-slate-800">{totalApplicants}</span>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center">
                            <FiUsers size={22} />
                        </div>
                    </div>

                    {/* Applicants Breakdown */}
                    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition-shadow space-y-4">
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Applicants Breakdown</span>
                        <div className="flex justify-between items-center">
                            <div>
                                <span className="text-xs font-medium text-slate-400 block">Selected</span>
                                <span className="text-lg font-bold text-emerald-600 flex items-center gap-1">
                                    <FiUserCheck size={16} /> {totalSelectedApplicants}
                                </span>
                            </div>
                            <div className="h-8 w-[1px] bg-slate-100"></div>
                            <div>
                                <span className="text-xs font-medium text-slate-400 block">Rejected</span>
                                <span className="text-lg font-bold text-red-500 flex items-center gap-1">
                                    <FiUserX size={16} /> {totalRejectedApplicants}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Apply Rate */}
                    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 flex justify-between items-center hover:shadow-md transition-shadow">
                        <div>
                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Apply rate</span>
                            <span className="text-2xl font-bold text-slate-800">{applyRate.toFixed(2)}%</span>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                            <CiFilter size={22} />
                        </div>
                    </div>
                </div>

                {/* Charts & Summary Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Bar Chart Block */}
                    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg font-bold text-slate-800 mb-6">Metrics Comparison</h3>
                            <div className="w-full flex justify-center h-80">
                                <Bar data={graphData} options={{ responsive: true, maintainAspectRatio: false }} />
                            </div>
                        </div>
                        <div className="mt-6 pt-6 border-t border-slate-100">
                            <h4 className="text-sm font-bold text-slate-800 mb-3">Data Summary</h4>
                            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 list-none p-0 text-xs">
                                <li className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6] block"></span> <b>Total Jobs Posted: {totalJobsPosted}</b></li>
                                <li className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] block"></span> <b>Total Clicks: {totalClicks}</b></li>
                                <li className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-[#64748B] block"></span> <b>Total Views: {totalViews}</b></li>
                                <li className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-[#EC4899] block"></span> <b>Total Applicants: {totalApplicants}</b></li>
                                <li className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-[#10B981] block"></span> <b>Selected: {totalSelectedApplicants}</b></li>
                                <li className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-[#EF4444] block"></span> <b>Rejected: {totalRejectedApplicants}</b></li>
                            </ul>
                        </div>
                    </div>

                    {/* Pie Chart Block */}
                    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg font-bold text-slate-800 mb-6">Applicants Distribution</h3>
                            <div className="w-full flex justify-center h-80">
                                <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: false }} />
                            </div>
                        </div>
                        <div className="mt-6 pt-6 border-t border-slate-100">
                            <h4 className="text-sm font-bold text-slate-800 mb-3">Distribution Details</h4>
                            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 list-none p-0 text-xs">
                                <li className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6] block"></span> <b>Total Jobs Posted: {totalJobsPosted}</b></li>
                                <li className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] block"></span> <b>Total Clicks: {totalClicks}</b></li>
                                <li className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-[#64748B] block"></span> <b>Total Views: {totalViews}</b></li>
                                <li className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-[#EC4899] block"></span> <b>Total Applicants: {totalApplicants}</b></li>
                                <li className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-[#10B981] block"></span> <b>Selected: {totalSelectedApplicants}</b></li>
                                <li className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-[#EF4444] block"></span> <b>Rejected: {totalRejectedApplicants}</b></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmployerDash;