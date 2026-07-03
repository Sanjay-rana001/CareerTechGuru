import React, { useEffect, useState } from "react";
import { Search } from "../components";
import { JobCardTwo } from "../shared";
import { useJobContext, useSearchContext, useSectionContext } from "../context";
import { useNavigate, useSearchParams } from "react-router-dom";

const AllJobs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    searchResult,
    setSearchResult,
    lastVisibleDoc,
    setLastVisibleDoc,
    totalJobsCount,
    isSearchLoading,
  } = useSearchContext();
  const { searchJobQuery } = useJobContext();
  const { getAllSections } = useSectionContext();

  const [sections, setSections] = useState([]);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const getApplicationCategory = async () => {
    try {
      const result = await getAllSections();
      setSections(result?.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBackClick = () => {
    setSearchParams(new URLSearchParams());
    window.location.href = "/view-jobs";
  };

  const fetchNextPage = async () => {
    if (!lastVisibleDoc) return;
    setIsFetchingMore(true);
    try {
      const queryString = searchParams.toString();
      const result = await searchJobQuery(queryString, lastVisibleDoc, 20);

      // Append new jobs to existing
      if (result?.data?.length > 0) {
        setSearchResult((prev) => [...prev, ...result.data]);
        setLastVisibleDoc(result.lastDoc);
      } else {
        setLastVisibleDoc(null); // No more jobs
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsFetchingMore(false);
    }
  };

  useEffect(() => {
    getApplicationCategory();
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4">
        {/* Search Header - Always visible to prevent remounting loops */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
            Find Jobs
          </h1>
          {(!searchResult || searchResult.length === 0) && !isSearchLoading && (
            <button
              onClick={handleBackClick}
              className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium text-sm rounded-lg border-0 transition-colors"
            >
              Clear Search
            </button>
          )}
        </div>
        
        <div className="mb-6">
          <Search categories={sections} />
        </div>

        {/* Loading State */}
        {isSearchLoading ? (
          <div className="mt-12 flex justify-center items-center py-10">
            <div className="text-slate-500 font-medium text-lg">
              Searching jobs...
            </div>
          </div>
        ) : (!searchResult || searchResult.length === 0) ? (
          /* Empty State */
          <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-10 text-center shadow-sm">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              No Jobs Found
            </h3>
            <p className="text-slate-500 mb-6 text-sm">
              We couldn't find any jobs matching your search parameters. Try
              adjusting your filters.
            </p>
            <button
              onClick={handleBackClick}
              className="px-6 py-2.5 bg-[#2563EB] hover:bg-blue-700 text-white font-medium text-sm rounded-lg border-0 transition-colors shadow-sm"
            >
              Show All Jobs
            </button>
          </div>
        ) : (
          /* Results State */
          <>
            <div className="flex flex-col sm:flex-row justify-between items-center bg-white border border-slate-200 px-6 py-4 rounded-xl shadow-sm gap-4 mb-6">
              <h3 className="text-sm font-semibold text-slate-600 mb-0">
                Results &mdash; {totalJobsCount} jobs found
              </h3>
              <p className="text-xs text-slate-400">
                Showing {searchResult.length} of {totalJobsCount}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <JobCardTwo data={searchResult} />
            </div>

            {lastVisibleDoc && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={fetchNextPage}
                  disabled={isFetchingMore}
                  className={`px-8 py-3 rounded-lg font-medium text-sm transition-colors ${
                    isFetchingMore
                      ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                      : "bg-white border-2 border-[#2563EB] text-[#2563EB] hover:bg-blue-50"
                  }`}
                >
                  {isFetchingMore ? "Loading..." : "Load More Jobs"}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AllJobs;
