import React, { useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db, auth } from "../../../firebase";
import {
  useAdminContext,
  useEmployeeContext,
  useSectionContext,
} from "../../../context";
import { Link, useNavigate } from "react-router-dom";
import ModalBox from "../../../components/modal/ModalBox";
import CandidateProfile from "./candidate/CandidateProfile";

const formatDate = (dateString) => {
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const AppliedJobs = () => {
  const {
    getApplicationBySellerId,
    getAdminsDetailsByAdminId,
    getCandidateDetails,
  } = useAdminContext();
  const { getJobSectionById } = useSectionContext();
  const [applications, setApplications] = useState([]);
  const [companyData, setCompanyData] = useState([]);
  const [candidateData, setCandidateData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [openProfile, setOpenProfile] = useState(false);
  const navigate = useNavigate();
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [selectedApplication, setSelectedApplication] = useState(null);

  const fetchCategories = async () => {
    try {
      const categoryIds = applications?.map((job) => job.category);
      const fetchedCategories = await Promise.all(
        categoryIds.map((categoryId) => getJobSectionById(categoryId)),
      );
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

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (!currentUser) return;

    const q = query(
      collection(db, "applications"),
      where("sellerId", "==", currentUser.uid)
    );

    const unsubscribe = onSnapshot(q, async (querySnapshot) => {
      try {
        const apps = [];
        querySnapshot.forEach((doc) => {
          apps.push({ id: doc.id, ...doc.data() });
        });
        
        setApplications(apps);

        if (apps.length > 0) {
          const sellerIds = apps.map((application) => application.sellerId);
          const userIds = apps.map((application) => application.userId);

          const adminDetailsPromises = sellerIds.map((sellerId) =>
            getAdminsDetailsByAdminId(sellerId, "Employer"),
          );

          const candidateDetailsPromises = userIds.map((userId) =>
            getCandidateDetails(userId),
          );

          const adminDetailsResponses = await Promise.all(adminDetailsPromises);
          const candidateDetailsResponses = await Promise.all(
            candidateDetailsPromises,
          );

          setCompanyData(
            adminDetailsResponses.map((response) => response.data[0]),
          );
          setCandidateData(
            candidateDetailsResponses.map((response) => response.data),
          );
        }
      } catch (error) {
        console.error("Error processing real-time applications:", error);
      }
    });

    return () => unsubscribe();
  }, [getAdminsDetailsByAdminId]);

  useEffect(() => {
    if (applications?.length > 0) {
      fetchCategories();
    }
  }, [applications]);

  if (applications?.length <= 0) {
    return (
      <div className="bg-slate-50 min-h-screen flex items-center justify-center font-sans">
        <div className="text-center bg-white p-10 rounded-2xl shadow-sm border border-slate-200 max-w-md w-full">
          <div className="w-20 h-20 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-2">No applications yet</h3>
          <p className="text-slate-500 text-sm mb-8">When candidates apply to your job postings, they will appear here.</p>
          <button onClick={() => navigate("/add-job")} className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg transition-colors">
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
              Received Applications
            </h1>
            <p className="text-sm text-slate-400 mb-0 mt-1">
              You have received {applications?.length} {applications?.length === 1 ? 'application' : 'applications'} in total
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500">
                <tr>
                  <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">Job title</th>
                  <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">Category</th>
                  <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">Candidate name</th>
                  <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">Email</th>
                  <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">Country</th>
                  <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">Mobile</th>
                  <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">Applied date</th>
                  <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {applications?.map((application, index) => (
                  <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-800">
                      {application.title}
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {categories[index]
                        ? categories[index][0]?.title || "Unknown"
                        : "Unknown"}
                    </td>
                    <td className="px-6 py-4 text-slate-800 font-medium capitalize">
                      {application?.firstName} {application?.lastName}
                    </td>
                    <td className="px-6 py-4 text-slate-500">
                      {application?.userEmail || candidateData[index]?.email || "N/A"}
                    </td>
                    <td className="px-6 py-4 text-slate-600 capitalize">
                      {candidateData[index]?.country || "N/A"}
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {candidateData[index]?.mobile || "N/A"}
                    </td>
                    <td className="px-6 py-4 text-slate-500">
                      {formatDate(application?.appliedAt || application?.createdAt)}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${application?.status === 'pending' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'} capitalize`}>
                        {application?.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => handleProfileOpen(candidateData[index], application)}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                      >
                        View profile
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {openProfile && (
        <ModalBox>
          <CandidateProfile
            handleModalClose={handleModalClose}
            candidateData={selectedCandidate}
            application={selectedApplication}
          />
        </ModalBox>
      )}
    </div>
  );
};

export default AppliedJobs;
