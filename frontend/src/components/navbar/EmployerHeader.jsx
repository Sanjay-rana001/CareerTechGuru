import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { useAuthContext } from "../../context";
import Dropdown from "../dropdown/Dropdown";
import logoImg from "../../assets/logo.jpeg";

const EmployerHeader = () => {
  const navigate = useNavigate();
  const { logoutUser } = useAuthContext();
  const Logout = () => {
    confirmAlert({
      title: "Confirm to logout",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => logoutUser(),
        },
        {
          label: "No",
          onClick: () => ({}),
        },
      ],
    });
  };
  const options = [
    { label: "Add Application", path: "add-job" },
    { label: "View Application", path: "view-my-applications" },
    { label: "Application Recieved", path: "recieved-applications" },
  ];
  const ProfileOptions = [
    { label: "Company Profile", path: "view-profile" },
    { label: "Account Settings", path: "account-settings" },
    { label: "Notification", path: "view-my-applications" },
    { label: "Contact Support", path: "recieved-applications" },
  ];
  return (
    <>
      <nav className="navbar mx-2 navbar-expand-lg bg-body-tertiary sticky-top">
        <Link to="/" className="font-bold text-primary text-xl">
          <img src={logoImg} alt="" className="w-44" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="ms-3 offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Careertech Guru
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body items-center">
            <ul className="navbar-nav justify-content-end items-center flex-grow-1 gap-2 pe-3">
              <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link className="nav-link font-semibold"></Link>
              </li>
              <li className="nav-item">
                <Dropdown options={options} placeholder="My Applications" />
              </li>
              <li className="nav-item">
                <Dropdown options={ProfileOptions} placeholder="My Profile" />
              </li>
              <li className="nav-item" data-bs-dismiss="offcanvas">
                <button onClick={Logout} className="btn btn-primary">
                  Log out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <div className="bg-slate-100">
        <nav className="mx-8 flex justify-between items-center py-2">
          <Link to='/' className="font-bold text-xl">RESO</Link>
          <ul className="flex items-center gap-3">
            <li>
              <Link to='/add-job' className="text-[14px]">Add Job</Link>
            </li>
            <li>
                <Link to='/add-category' className="text-[14px]">Category</Link>
            </li>
            <li>
                <Link to='/view-profile' className="text-[14px]">View Profile</Link>
            </li>
            <li>
              <button onClick={Logout} className='btn-main bg-[#272343] text-light'>Log out</button>
            </li>
          </ul>
        </nav>
      </div> */}
    </>
  );
};

export default EmployerHeader;
