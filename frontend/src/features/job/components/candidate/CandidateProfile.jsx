import React from "react";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../firebase";

import { toast } from "react-hot-toast";

const CandidateProfile = ({ handleModalClose, candidateData, application }) => {
  const handleAction = async (action) => {
    try {
      if (application?.id) {
        const appRef = doc(db, "applications", application.id);
        await updateDoc(appRef, { status: action.toLowerCase() });
        toast.success(`Candidate marked as ${action}`);
      } else {
        toast.error("Application ID missing");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update status");
    }
    handleModalClose();
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-2xl w-full mx-auto relative font-sans">
      <button
        className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
        onClick={handleModalClose}
        aria-label="Close"
      >
        <MdClose size={24} />
      </button>
      <div className="p-8">
        <h4 className="text-2xl font-bold text-slate-800 mb-6">
          Candidate Profile
        </h4>
        <div className="flex flex-col sm:flex-row gap-6 mb-8">
          <div className="flex-shrink-0">
            <img
              src={candidateData?.profilePictureUrl || candidateData?.profilePicture || "https://i.pravatar.cc/150"}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-slate-50"
            />
          </div>
          <div className="flex-grow flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-800 capitalize mb-1">
                {application?.firstName || candidateData?.firstName}{" "}
                {application?.lastName || candidateData?.lastName}
              </h3>
              <p className="text-slate-500 mb-1">{application?.userEmail || candidateData?.email}</p>
              <p className="text-slate-500">{application?.userMobile || candidateData?.mobile}</p>
            </div>
            <div>
              <button 
                onClick={() => {
                  if (candidateData?.resumeUrl) {
                    window.open(candidateData.resumeUrl, "_blank", "noopener,noreferrer");
                  } else {
                    toast.error("Candidate has not uploaded a resume.");
                  }
                }}
                className={`px-5 py-2.5 font-semibold rounded-lg transition-colors border-0 ${
                  candidateData?.resumeUrl 
                    ? "bg-blue-50 text-blue-600 hover:bg-blue-100" 
                    : "bg-slate-50 text-slate-400 cursor-not-allowed"
                }`}
              >
                {candidateData?.resumeUrl ? "Download CV" : "No CV Uploaded"}
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3 pt-6 border-t border-slate-100">
          <button 
            onClick={() => handleAction("Accepted")}
            className="flex-1 min-w-[120px] py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors border-0"
          >
            Accept
          </button>
          <button 
            onClick={() => handleAction("Rejected")}
            className="flex-1 min-w-[120px] py-2.5 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors border-0"
          >
            Reject
          </button>
          <button 
            onClick={() => handleAction("On Hold")}
            className="flex-1 min-w-[120px] py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors border-0"
          >
            Hold
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;
