import React, { useEffect, useState } from "react";
import { useJobContext } from "../context";
import { useParams, useNavigate } from "react-router-dom";
import { VscLinkExternal } from "react-icons/vsc";
import { IoShareSocialSharp } from "react-icons/io5";
import DOMPurify from "dompurify";
import ConfirmBox from "../components/modal/ConfirmBox";
import { CircularLoader } from "../components";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";

const JobDetailPage = () => {
  const { getApplicationsByJobId, getAllApplications } = useJobContext();
  const { title } = useParams();
  const navigate = useNavigate();
  const [isConfirmBoxVisible, setConfirmBoxVisible] = useState(false);

  // React Query refactor: caching the applications list and the specific job details
  const { data: allApplications, isLoading: isLoadingAll } = useQuery({
    queryKey: ["allApplications"],
    queryFn: async () => {
      const res = await getAllApplications();
      return res.data;
    },
  });

  const job = allApplications?.find((app) => app.title === title);

  const { data: jobData, isLoading: isLoadingJob } = useQuery({
    queryKey: ["jobDetails", job?._id],
    queryFn: async () => {
      const res = await getApplicationsByJobId(job._id);
      return res.data;
    },
    enabled: !!job?._id, // Only fetch if we found the job from the first query
  });

  const loading = isLoadingAll || (!!job && isLoadingJob);

  const handleConfirm = () => {
    window.open(jobData?.jobUrl, "_blank", "noopener,noreferrer");
    setConfirmBoxVisible(false);
  };

  if (loading) {
    return <CircularLoader />;
  }

  if (!jobData) {
    return (
      <div className="min-h-[70vh] flex flex-col justify-center items-center bg-slate-50">
        <div className="bg-white border border-slate-200 p-8 rounded-2xl text-center shadow-sm max-w-md">
          <h3 className="text-xl font-bold text-slate-800 mb-2">
            Job Not Found
          </h3>
          <p className="text-slate-500 mb-6 text-sm">
            We couldn't retrieve the details for this job listing. It may have
            been closed or removed.
          </p>
          <button
            onClick={() => navigate("/view-jobs")}
            className="px-6 py-2 bg-[#2563EB] hover:bg-blue-700 text-white font-medium rounded-lg border-0 transition-colors shadow-sm"
          >
            Back to Jobs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <Helmet>
        <title>{jobData?.title} | CareerTechGuru</title>
        <meta
          name="description"
          content={
            jobData?.shortDescription || "View job details on CareerTechGuru."
          }
        />
        <meta
          property="og:title"
          content={`${jobData?.title} at ${jobData?.companyName}`}
        />
        <meta
          property="og:description"
          content={
            jobData?.shortDescription || "View job details on CareerTechGuru."
          }
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={
            jobData?.profilePicture ||
            "https://career-tech-guru.vercel.app/logo.jpeg"
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      {isConfirmBoxVisible && (
        <ConfirmBox
          message={`You will be redirected to ${jobData?.companyName} careers. Are you sure you want to continue?`}
          onConfirm={handleConfirm}
          onCancel={() => setConfirmBoxVisible(false)}
        />
      )}

      <div className="max-w-4xl mx-auto px-4">
        {/* Back Link */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-1.5 text-slate-500 hover:text-slate-800 font-semibold text-sm bg-transparent border-0 cursor-pointer transition-colors"
        >
          &larr; Back to Listings
        </button>

        {/* Main Spec Card */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-6">
            <div className="flex gap-4 items-start">
              <div className="w-16 h-16 bg-slate-50 rounded-xl border border-slate-100 p-1 flex items-center justify-center overflow-hidden flex-shrink-0">
                {jobData?.profilePicture ? (
                  <img
                    src={jobData.profilePicture}
                    alt="Company Logo"
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <span className="text-xs text-slate-300 font-bold uppercase">
                    CTG
                  </span>
                )}
              </div>
              <div className="space-y-1">
                <h1 className="text-2xl font-bold text-slate-900 leading-snug">
                  {jobData?.title}
                </h1>
                <p className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-0">
                  <span>{jobData?.companyName}</span>
                  {jobData?.companyWebsite && (
                    <a
                      href={jobData.companyWebsite}
                      className="text-slate-400 hover:text-[#2563EB] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <VscLinkExternal size={14} />
                    </a>
                  )}
                </p>
              </div>
            </div>

            {/* Status Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                {jobData?.jobType}
              </span>
              <span className="bg-purple-50 text-purple-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                {jobData?.workType}
              </span>
              <span className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                {jobData?.openings} Openings
              </span>
            </div>
          </div>

          <p className="hr bg-slate-100 my-6"></p>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Experience
              </span>
              <span className="text-sm font-semibold text-slate-700 capitalize">
                {jobData?.experience}
              </span>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Location
              </span>
              <span className="text-sm font-semibold text-slate-700 capitalize">
                {jobData?.jobLocation}
              </span>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Salary Range
              </span>
              <span className="text-sm font-semibold text-slate-700">
                {jobData?.salaryRange}
              </span>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Min-Qualification
              </span>
              <span className="text-sm font-semibold text-slate-700 capitalize">
                {jobData?.qualification}
              </span>
            </div>
          </div>

          {/* Action Panel */}
          <div className="flex justify-between items-center bg-slate-50 rounded-xl p-4 border border-slate-100">
            <button className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-500 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors">
              <IoShareSocialSharp size={14} />
              <span>Share Job</span>
            </button>
            <div>
              {jobData?.isReferenceJob ? (
                <button
                  onClick={() => setConfirmBoxVisible(true)}
                  className="px-6 py-2.5 bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-sm rounded-lg border-0 transition-colors shadow-sm"
                >
                  Apply on Company Site
                </button>
              ) : (
                <button className="px-6 py-2.5 bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-sm rounded-lg border-0 transition-colors shadow-sm">
                  Apply now
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Job Description Blocks */}
        <div className="space-y-6">
          {/* Summary Block */}
          {jobData?.shortDescription && (
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                Job Highlights
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                {jobData.shortDescription}
              </p>
            </div>
          )}

          {/* Full Description Block */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
              Job Description
            </h3>
            <div
              className="text-sm text-slate-600 leading-relaxed text-justify space-y-4"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(jobData?.description),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;
