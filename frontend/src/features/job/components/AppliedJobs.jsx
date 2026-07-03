import React, { useEffect, useState } from "react";
import {
  useAdminContext,
  useEmployeeContext,
  useSectionContext,
} from "../../../context";
import { Link, useNavigate } from "react-router-dom";
import ModalBox from "../../../components/modal/ModalBox";
import CandidateProfile from "./candidate/CandidateProfile";

const AppliedJobs = () => {
  const {
    getApplicationBySellerId,
    getAdminsDetailsById,
    getCandidateDetails,
  } = useAdminContext();
  const { getJobSectionById } = useSectionContext();
  const { formatDate } = useEmployeeContext();
  const [applications, setApplications] = useState([]);
  const [companyData, setCompanyData] = useState([]);
  const [candidateData, setCandidateData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [openProfile, setOpenProfile] = useState(false);
  const navigate = useNavigate();
  const [selectedCandidate, setSelectedCandidate] = useState(null);

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

  const handleProfileOpen = (candidate) => {
    setSelectedCandidate(candidate);
    setOpenProfile(true);
  };

  useEffect(() => {
    const getUserApplications = async () => {
      try {
        const response = await getApplicationBySellerId();
        if (response && response.data) {
          setApplications(response.data);

          const sellerIds = response.data.map(
            (application) => application.sellerId,
          );
          const userIds = response.data.map(
            (application) => application.userId,
          );

          const adminDetailsPromises = sellerIds.map((sellerId) =>
            getAdminsDetailsById(sellerId, "Employer"),
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
        console.error("Error fetching applications:", error);
      }
    };

    getUserApplications();
  }, [getApplicationBySellerId, getAdminsDetailsById]);

  useEffect(() => {
    if (applications?.length > 0) {
      fetchCategories();
    }
  }, [applications]);

  if (applications?.length <= 0) {
    return (
      <div className="flex items-center justify-center h-[100vh]">
        <div className="col-md-6 flex flex-col items-center justify-center gap-3">
          <h3 className="text-primary h1" style={{ marginBottom: "200px" }}>
            No applications recieved
          </h3>
          {/* <button onClick={() => navigate("/")} className='btn btn-primary'>Go back</button> */}
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="container-fluid">
        <div className="container py-3">
          <div className="row">
            <h3 className="text-2xl font-semibold text-[#070f4e]">
              My Applications ({applications?.length})
            </h3>
          </div>
          <div className="row w-100 x-flow-scroll">
            <table className="table text-[14px] w-max">
              <thead>
                <tr>
                  <th>Job title</th>
                  <th>Job category</th>
                  <th>Candidate name</th>
                  <th>Candidate email</th>
                  <th>Candidate city</th>
                  <th>Candidate pincode</th>
                  <th>Job posted</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="capitalize">
                {applications?.map((application, index) => (
                  <tr key={index}>
                    <td>{application.title}</td>
                    <td>
                      {categories[index]
                        ? categories[index][0]?.title || "Unknown"
                        : "Unknown"}
                    </td>
                    <td>
                      {application?.firstName} {application?.lastName}
                    </td>
                    <td>{application?.userEmail}</td>
                    <td>{companyData[index]?.companyName || "Fetching..."}</td>
                    <td>{companyData[index]?.city || "Fetching..."}</td>
                    <td>{formatDate(application?.createdAt)}</td>
                    <td>
                      <span className="bg-success text-light p-1 rounded text-[14px]">
                        {application?.status}
                      </span>
                    </td>
                    <td>
                      <Link
                        onClick={() => handleProfileOpen(candidateData[index])}
                        className="text-primary"
                      >
                        View profile
                      </Link>
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
            candidateData={candidateData}
          />
        </ModalBox>
      )}
    </>
  );
};

export default AppliedJobs;
