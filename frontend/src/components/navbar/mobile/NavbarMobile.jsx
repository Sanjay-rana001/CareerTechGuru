import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "../../dropdown/Dropdown";
import { FaExternalLinkAlt } from "react-icons/fa";

const NavbarMobile = ({ isOpen, toggle }) => {
  const navigate = useNavigate();
  const options = [
    { label: "Home", path: "/" },
    { label: "About us", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <div
      className={`bg-light lg:hidden px-2 absolute h-full overflow-hidden w-[${isOpen ? "0" : "100"}] ${isOpen ? "-translate-x-4" : ""} transition-all duration-300`}
    >
      <div className="navbar-list lg:block">
        <ul className="nav flex-col">
          <li className="nav-item">
            <Dropdown options={options} placeholder="Company" />
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark text-[14px]">
              <b>Blogs</b>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark text-[14px]">
              <b>Resource</b>
            </Link>
          </li>
        </ul>
      </div>
      <ul className="navbar-button nav flex-col gap-2">
        <li className="nav-item">
          <button
            onClick={() => navigate("/login")}
            className="btn-main text-[14px] py-2 flex items-center gap-2"
          >
            Looking for a job <FaExternalLinkAlt />
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={() => navigate("/login")}
            className="btn-main bg-[#0E42A8] text-light text-[14px] py-2 flex items-center gap-2"
          >
            Hire candidate <FaExternalLinkAlt />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavbarMobile;
