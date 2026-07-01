import React, { useEffect, useState } from 'react';
import { useJobContext, useSectionContext } from '../../../context';
import { confirmAlert } from 'react-confirm-alert';
import { useNavigate } from 'react-router-dom';
import { getTimeDifference } from '../../../utils/dateFilter/DateFilter';
import { CircularLoader, Pagination } from '../../../components';
import { sortDataByDate } from '../../../utils/filters/Filters';
import playImg from '../../../../src/assets/play.png';
import pauseImg from '../../../../src/assets/pause.png';
import TableCells  from '@mui/material/TableCell';
 
const ViewJob = () => {
  const admin = JSON.parse(sessionStorage.getItem('data'));
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
        title: 'Confirm to delete',
        message: 'Are you sure to do this.',
        buttons: [
          {
            label: 'Yes',
            onClick: () => deleteJobById(id)
          },
          {
            label: 'No',
            onClick: () => confirmAlert({})
          }
        ]
      });
    };
  };
 
  // Handle individual checkbox change
  const handleCheckboxChange = (jobId) => {
    if (selectedJobs.includes(jobId)) {
      setSelectedJobs(selectedJobs.filter(id => id !== jobId));
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
      const allJobIds = currentJobs.map(job => job._id);
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
        const jobsData = await getApplicationsByAdminId(admin?.id);
        if (jobsData && jobsData.length > 0) {
          const sortedData = sortDataByDate(jobsData, 'createdAt');
          setJobsData(sortedData);
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
      <div className='flex items-center justify-center h-[100vh]'>
        <div className="col-md-4 flex flex-col items-center justify-center gap-3">
          <h3 className='text-primary h2'>No applications found</h3>
          <button onClick={() => navigate("/")} className='btn btn-primary'>Go back</button>
        </div>
      </div>
    );
  }
 
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="col flex items-center justify-between py-4">
          <h3 className='display-5'>Active Jobs ({jobsData?.length})</h3>
          <Pagination
            totalItems={jobsData?.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={paginate}
          />
        </div>
        <div class='table-container'>
        <table className='table text-[14px] w-full table-auto'>
          <thead>
            <tr>
              <TableCells><th style={{width:'100px'}}>
                <input
                  type="checkbox"
                  onChange={handleSelectAllChange}
                  checked={selectedJobs.length === currentJobs.length && currentJobs.length > 0}
                />{' '}
                Select all</th></TableCells>
              <TableCells><th>Title</th></TableCells>
              <TableCells><th>Category</th></TableCells>
              <TableCells><th>Open position</th></TableCells>
              <TableCells><th>Created at</th></TableCells>
              <TableCells><th>Action</th></TableCells>
            </tr>
          </thead>
          <tbody>
            {currentJobs?.map((job, idx) => {
              const category = categories.find(cat => cat._id === job.category);
 
              return (
                <tr key={idx}>
                  <TableCells>
                    <input
                      type="checkbox"
                      checked={selectedJobs.includes(job._id)}
                      onChange={() => handleCheckboxChange(job._id)}
                    />
                  </TableCells>
                  <TableCells ><td>{job?.title}</td></TableCells>
                  <TableCells><td>{category ? category.title : 'N/A'}</td></TableCells>
                  <TableCells><td className='text-center'>{job?.openings}</td></TableCells>
                  <TableCells><td>{getTimeDifference(job?.createdAt)}</td></TableCells>
                  <TableCells className="buttons flex items-center gap-3 px-4">
                    <td class="deletebtn"><button onClick={handleLogOut(job._id)} className='capitalize image-button'></button>
                      <span class="delete">Delete</span>
                      </td>
                      <td class="pausebtn">
                        <button onClick={changeImage} className='capitalize pause-button'>
                        <img src={isPlay ? pauseImg : playImg} alt={isPlay ? "Pause" : "Play"}/>
                        </button>
                        <span className="pause">{isPlay ? 'Pause' : 'Play'}</span>
                      </td>
                    <td class="editbtn"><button className='capitalize edit-button'></button>
                    <span class="edit">Edit</span>
                    </td>
                  </TableCells>
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};
 
export default ViewJob;