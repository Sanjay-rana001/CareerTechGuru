import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAdminContext } from "../../../context";
import { IoLocationSharp } from "react-icons/io5";
import { FaSuitcase } from "react-icons/fa";
import { truncateText } from "../../../utils/stringBuilder/Stringify";
import { IoShareSocial } from "react-icons/io5";
import { getTimeDifference } from "../../../utils/dateFilter/DateFilter";

const JobCardTwo = ({ data }) => {
  const { getAdminsDetailsById } = useAdminContext();
  const [companyDataMap, setCompanyDataMap] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCompanyData = async () => {
      const companyData = {};
      try {
        for (const item of data) {
          if (item?.sellerId && !companyData[item.sellerId]) {
            const company = await getAdminsDetailsById(
              item?.sellerId,
              "Employer",
            );
            companyData[item?.sellerId] = company;
          }
        }
      } catch (error) {
        console.error("Failed to fetch company details:", error);
      }
      setCompanyDataMap(companyData);
    };

    if (data?.length) {
      fetchCompanyData();
    }
  }, [data]);

  return (
    <>
      {data?.map((job, idx) => (
        <div key={idx} className="w-full mb-4">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 p-6 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
            {/* Left/Content section */}
            <div className="flex gap-4 items-start flex-1">
              <div className="w-14 h-14 bg-slate-50 rounded-xl border border-slate-100 p-1 flex items-center justify-center overflow-hidden flex-shrink-0">
                {job?.profilePicture ? (
                  <img
                    src={job.profilePicture}
                    alt="Company Logo"
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <span className="text-xs text-slate-300 font-bold uppercase">
                    CTG
                  </span>
                )}
              </div>

              <div className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <Link
                    className="no-underline text-slate-800 hover:text-[#2563EB] font-bold text-lg leading-tight transition-colors"
                    to={`/view-jobs-detail/${job?.title}`}
                  >
                    {truncateText(job?.title || "", 6)}
                  </Link>
                </div>

                {job?.companyName && (
                  <p className="text-sm font-medium text-slate-500 mb-0">
                    {job.companyName}
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <span className="capitalize text-xs font-semibold text-slate-600 bg-slate-100 rounded-full px-3 py-1 flex items-center gap-1">
                    <IoLocationSharp size={13} className="text-slate-400" />
                    {job?.jobLocation}
                  </span>
                  <span className="capitalize text-xs font-semibold text-slate-600 bg-slate-100 rounded-full px-3 py-1 flex items-center gap-1">
                    <FaSuitcase size={12} className="text-slate-400" />
                    {job?.experience}
                  </span>
                </div>
              </div>
            </div>

            {/* Right/Actions section */}
            <div className="flex md:flex-col items-end justify-between md:justify-center w-full md:w-auto gap-4 pt-4 md:pt-0 border-t border-slate-100 md:border-t-0 flex-row">
              <span className="text-xs font-medium text-slate-400 order-1 md:order-none">
                {getTimeDifference(job?.createdAt)}
              </span>

              <div className="flex items-center gap-2.5 order-2 md:order-none">
                <button className="flex justify-center items-center px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 font-semibold text-sm rounded-lg border-0 transition-colors">
                  Share <IoShareSocial className="ms-1" />
                </button>
                <button
                  onClick={() => navigate(`/view-jobs-detail/${job?.title}`)}
                  className="px-5 py-2 bg-[#2563EB] hover:bg-blue-700 text-white font-semibold text-sm rounded-lg border-0 shadow-sm transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default JobCardTwo;
