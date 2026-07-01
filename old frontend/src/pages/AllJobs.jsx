import React, { useEffect, useState } from 'react'
import { Pagination, Search } from '../components'
import { JobCardTwo } from '../shared'
import { useJobContext, useSearchContext, useSectionContext } from '../context'
import { sortDataByDate } from '../utils/filters/Filters';
import { useNavigate, useSearchParams } from "react-router-dom";
 
const AllJobs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { searchResult } = useSearchContext();
  const { getAllSections } = useSectionContext();
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
 
  const getApplicationCategory = async() => {
    try {
      const result = await getAllSections();
      setSections(result?.data || [])
    } catch (error) {
      console.log(error)
    }
  }
 
  const handleBackClick = () => {
    setSearchParams(new URLSearchParams());
    window.location.href = '/view-jobs';
  };
 
  const indexOfLastJob = currentPage * itemsPerPage;
  const indexOfFirstJob = indexOfLastJob - itemsPerPage;
  const currentJobs = (searchResult || []).slice(indexOfFirstJob, indexOfLastJob);
  const sortedJobs = sortDataByDate(currentJobs, 'createdAt')
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const navigate = useNavigate();
 
  useEffect(() => {
    getApplicationCategory();
  }, []);

  if (!searchResult || searchResult.length === 0) {
    return (
      <div className='min-h-[80vh] bg-slate-50 py-10'>
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-6 flex items-center justify-between">
            <h1 className='text-2xl font-bold text-slate-800 tracking-tight'>Find Jobs</h1>
            <button onClick={handleBackClick} className='px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium text-sm rounded-lg border-0 transition-colors'>
              Clear Search
            </button>
          </div>
          <Search categories={sections} />
          
          <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-10 text-center shadow-sm">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">No Jobs Found</h3>
            <p className="text-slate-500 mb-6 text-sm">We couldn't find any jobs matching your search parameters. Try adjusting your filters.</p>
            <button onClick={handleBackClick} className='px-6 py-2.5 bg-[#2563EB] hover:bg-blue-700 text-white font-medium text-sm rounded-lg border-0 transition-colors shadow-sm'>
              Show All Jobs
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4">
        {/* Search Header */}
        <div className="mb-6">
          <h1 className='text-2xl font-bold text-slate-800 tracking-tight'>Find Jobs</h1>
          <Search categories={sections} />
        </div>

        {/* Results Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center bg-white border border-slate-200 px-6 py-4 rounded-xl shadow-sm gap-4 mb-6">
          <h3 className='text-sm font-semibold text-slate-600 mb-0'>
            Results &mdash; {searchResult?.length} jobs found
          </h3>
          <Pagination
            totalItems={searchResult.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={paginate}
          />
        </div>

        {/* Jobs List Grid */}
        <div className="grid grid-cols-1 gap-4">
          <JobCardTwo data={sortedJobs} />
        </div>

        {/* Bottom Pagination */}
        {searchResult.length > itemsPerPage && (
          <div className="flex justify-center mt-8">
            <Pagination
              totalItems={searchResult.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={paginate}
            />
          </div>
        )}
      </div>
    </div>
  )
}
 
export default AllJobs