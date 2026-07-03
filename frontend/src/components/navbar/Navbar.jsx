import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logoImg from "../../assets/logo.jpeg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FiLogOut, FiUser } from "react-icons/fi";
import { useAuthContext, useBrandContext } from "../../context";
import { confirmAlert } from "react-confirm-alert";

const Navbar = () => {
  const { logoutUser } = useAuthContext();
  const userRole = sessionStorage.getItem("role");
  const { siteConfig } = useBrandContext();
  const navigate = useNavigate();
  const location = useLocation();
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const defaultNavItems = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "About", path: "/about-us" },
    { id: 3, text: "Contact", path: "/contact-us" },
    { id: 4, text: "Jobs", path: "/view-jobs" },
  ];

  const employeeNavItems = [
    { id: 1, text: "Open Roles", path: "/view-jobs" },
    { id: 2, text: "My Profile", path: "/view-profile" },
    { id: 3, text: "Applied Jobs", path: "/view-applications" },
  ];

  const employerNavItems = [
    { id: 1, text: "Post Job", path: "/add-job" },
    { id: 2, text: "My Profile", path: "/view-profile" },
  ];

  const superAdminNavItems = [
    { id: 1, text: "Admin Dashboard", path: "/admin-dashboard" },
  ];

  const navItems =
    userRole === "user"
      ? employeeNavItems
      : userRole === "admin"
        ? employerNavItems
        : userRole === "superadmin"
          ? superAdminNavItems
          : defaultNavItems;

  const Logout = () => {
    confirmAlert({
      title: "Confirm to logout",
      message: "Are you sure you want to log out?",
      buttons: [
        {
          label: "Yes",
          onClick: () => logoutUser(),
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <div className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-3 no-underline">
            <img
              src={logoImg}
              alt="Logo"
              className="w-10 h-10 rounded-lg object-cover"
            />
            <span className="font-semibold text-slate-800 text-lg tracking-wide">
              {siteConfig.logoTextPrimary}<span className="text-[#2563EB]">{siteConfig.logoTextSecondary}</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 items-center list-none mb-0">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={`text-sm font-semibold transition-colors duration-200 no-underline px-3 py-2 rounded-lg ${
                    isActive(item.path)
                      ? "text-[#2563EB] bg-blue-50"
                      : "text-slate-600 hover:text-[#2563EB] hover:bg-slate-50"
                  }`}
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <li className="list-none border-l border-slate-200 pl-8 ml-2">
              {userRole ? (
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-600 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
                    <FiUser className="text-[#2563EB]" />
                    <span className="capitalize">{userRole === "admin" ? "Employer" : userRole === "user" ? "Candidate" : "Admin"}</span>
                  </div>
                  <button
                    onClick={Logout}
                    className="flex items-center gap-2 bg-white hover:bg-red-50 text-slate-600 hover:text-red-600 font-medium text-sm px-4 py-2 rounded-lg transition-colors border border-slate-200 shadow-sm"
                  >
                    <FiLogOut />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="bg-[#2563EB] hover:bg-blue-700 text-white font-semibold text-sm px-6 py-2.5 rounded-lg transition-colors border-0 shadow-sm"
                >
                  Login
                </button>
              )}
            </li>
          </ul>

          {/* Mobile Navigation Icon */}
          <div
            onClick={handleNav}
            className="block md:hidden cursor-pointer text-slate-700 hover:text-slate-900 transition-colors"
          >
            {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </div>

          {/* Mobile Navigation Menu */}
          {nav && (
            <div
              className="fixed inset-0 z-40 md:hidden bg-slate-900/20 backdrop-blur-sm"
              onClick={() => setNav(false)}
            >
              <ul
                className="fixed left-0 top-0 w-[70%] max-w-[300px] h-full bg-white shadow-2xl p-6 flex flex-col gap-6 ease-in-out duration-300 list-none"
                onClick={(e) => e.stopPropagation()}
              >
                <li className="mb-4">
                  <Link
                    to="/"
                    onClick={() => setNav(false)}
                    className="flex items-center gap-3 no-underline"
                  >
                    <img
                      src={logoImg}
                      alt="Logo"
                      className="w-9 h-9 rounded-lg object-cover"
                    />
                    <span className="font-semibold text-slate-800 text-base tracking-wide">
                      {siteConfig.logoTextPrimary}<span className="text-[#2563EB]">{siteConfig.logoTextSecondary}</span>
                    </span>
                  </Link>
                </li>
                {navItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      className={`text-base font-medium no-underline block py-2 ${
                        isActive(item.path)
                          ? "text-[#2563EB]"
                          : "text-slate-600 hover:text-[#2563EB]"
                      }`}
                      to={item.path}
                      onClick={() => setNav(false)}
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
                <li className="mt-auto pt-6 border-t border-slate-100">
                  {userRole ? (
                    <button
                      onClick={() => {
                        Logout();
                        setNav(false);
                      }}
                      className="w-full bg-red-50 hover:bg-red-100 text-red-600 font-medium py-3 rounded-lg transition-colors border-0"
                    >
                      Logout
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        navigate("/login");
                        setNav(false);
                      }}
                      className="w-full bg-[#2563EB] hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors border-0 shadow-sm"
                    >
                      Login
                    </button>
                  )}
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
