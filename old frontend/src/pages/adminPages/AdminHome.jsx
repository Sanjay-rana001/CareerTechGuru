import React, { useEffect, useState } from 'react'
import { useAdminContext } from '../../context'

const AdminHome = () => {
  const { getCadidatesDataESPS } = useAdminContext();
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false)

  const fetchCandidateData = async () => {
    try {
      const result = await getCadidatesDataESPS();
      setData(result?.data)
      console.log("this is cad", result?.data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCandidateData();
  }, [])
  return (
    <div className='container-fluid'>
      <div className="container-sm">
        <div className="row py-4">
          <div className="col-lg ">
           <div className='flex justify-between items-center'>
            <h3 className='h3'>Total candidates Applied {data?.length}</h3>
            <button className='btn btn-success'>Generate CSV reports</button>
           </div>
          </div>
        </div>
        <div className="row">
          {data?.map((cand, idx) => (
            <div key={idx} className='col-lg'>
              <div className="card">
                <div className="card-body">
                  <h3 className='h6 text-secondary'>{cand?.first_name} {cand?.last_name}</h3>
                  <ul className='nav flex-col gap-2 mb-3'>
                    <li className='nav-item'>
                      <b>Location :</b> {cand?.current_location}
                    </li>
                    <li className='nav-item'>
                      <b>email :</b> {cand?.email}
                    </li>
                  </ul>
                  <p className="text-sm text-secondary">
                    {cand?.short_description?.slice(0, 200)} ..
                  </p>
                  {toggle ? <div className="col-lg my-4">
                    <ul className='nav flex-col gap-2 mb-3'>
                      <li className='nav-item text-sm'>
                        <span className='font-semibold'>applied_at_esps_before :</span> {cand?.applied_at_esps_before}
                      </li>
                      <li className='nav-item text-sm'>
                        <span className='font-semibold'>bound_by_current_company :</span> {cand?.bound_by_current_company}
                      </li>
                      <li className='nav-item text-sm'>
                        <span className='font-semibold'>can_attend_walk_in_interview :</span> {cand?.can_attend_walk_in_interview}
                      </li>
                      <li className='nav-item text-sm'>
                        <span className='font-semibold'>can_handle_multiple_work :</span> {cand?.can_handle_multiple_work}
                      </li>
                      <li className='nav-item text-sm'>
                        <span className='font-semibold'>communication_skills_rating :</span> {cand?.communication_skills_rating}
                      </li>
                      <li className='nav-item text-sm'>
                        <span className='font-semibold'>contact_number :</span> {cand?.contact_number}
                      </li>
                      <li className='nav-item text-sm'>
                        <span className='font-semibold'>current_company_name :</span> {cand?.current_company_name}
                      </li>
                      <li className='nav-item text-sm'>
                        <span className='font-semibold'>current_salary :</span> {cand?.current_salary}
                      </li>
                      <li className='nav-item text-sm'>
                        <span className='font-semibold'>expected_salary :</span> {cand?.expected_salary}
                      </li>
                      <li className='nav-item text-sm'>
                        <span className='font-semibold'>handle_work_pressure :</span> {cand?.handle_work_pressure}
                      </li>
                      <li className='nav-item text-sm'>
                        <span className='font-semibold'>interviewed_at_esps_before :</span> {cand?.interviewed_at_esps_before}
                      </li>
                      <li className='nav-item text-sm'>
                        <span className='font-semibold'>interviewing_other_companies :</span> {cand?.interviewing_other_companies}
                      </li>
                      <li className='nav-item text-sm'>
                        <span className='font-semibold'>notice_period :</span> {cand?.notice_period}
                      </li>
                      <li className='nav-item text-sm'>
                        <span className='font-semibold'>short_description :</span> {cand?.short_description}
                      </li>
                      <li className='nav-item text-sm'>
                        <span className='font-semibold'>technical_skills_rating :</span> {cand?.technical_skills_rating}
                      </li>
                      <li className='nav-item text-sm'>
                        <span className='font-semibold'>timestamp :</span> {cand?.timestamp}
                      </li>
                      <li className='nav-item text-sm'>
                        <span className='font-semibold'>willing_to_relocate :</span> {cand?.willing_to_relocate}
                      </li>
                    </ul>
                  </div> : null}
                  <div className="form-group py-3 flex items-center gap-2 flex-wrap">
                    { toggle ? <button className="btn btn-secondary" onClick={() => setToggle(false)}>View less details</button>
                     : <button className="btn btn-primary" onClick={() => setToggle(true)}>View full details</button>}
                    <button className="btn btn-danger">Update Status</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdminHome