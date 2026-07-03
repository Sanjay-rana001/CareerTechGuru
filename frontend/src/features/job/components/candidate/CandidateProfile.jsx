import React from "react";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const CandidateProfile = ({ handleModalClose, candidateData }) => {
  return (
    <div className="col-lg-8 bg-light relative py-3">
      <span
        className="absolute right-4 cursor-pointer"
        onClick={handleModalClose}
        aria-label="Close"
      >
        <MdClose />
      </span>
      <div className="col py-3">
        <h4 className="text-2xl font-semibold text-blue-500">
          Candidate Profile
        </h4>
        <div className="row mb-3">
          <div className="col-sm-4">
            <div className="col-6">
              <img
                src="https://i.pravatar.cc/300"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-sm flex justify-between">
            <div className="col">
              <h3 className="h6 font-semibold capitalize">
                {candidateData[0]?.userDetail?.firstName}{" "}
                {candidateData[0]?.userDetail?.lastName}
              </h3>
              <h3 className="h6">{candidateData[0]?.userDetail?.email}</h3>
              <h3 className="h6">{candidateData[0]?.userDetail?.mobile}</h3>
            </div>
            <div className="col">
              <button className="btn btn-primary text-light">
                Download CV
              </button>
            </div>
          </div>
        </div>
        <ul className="nav justify-evenly bg-blue-300">
          <li className="nav-item py-3">
            <Link className="text-center">Accept</Link>
          </li>
          <li className="nav-item py-3">
            <Link className="text-center">Cancel</Link>
          </li>
          <li className="nav-item py-3">
            <Link className="text-center">Hold</Link>
          </li>
          <li className="nav-item py-3">
            <Link className="text-center">Call</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CandidateProfile;
