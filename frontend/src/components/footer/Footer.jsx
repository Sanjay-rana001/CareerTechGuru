import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h4 className="text-white text-lg font-semibold tracking-wide">
              Career<span className="text-[#2563EB]">TechGuru</span>
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Matching awesome talent with awesome jobs around the world. Prove
              your skills and unlock opportunities.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Job Seekers Column */}
          <div>
            <h5 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Job Seekers
            </h5>
            <ul className="space-y-2.5 list-none p-0 text-sm">
              <li>
                <Link
                  to="/view-jobs"
                  className="text-slate-400 hover:text-white transition-colors no-underline"
                >
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/view-profile"
                  className="text-slate-400 hover:text-white transition-colors no-underline"
                >
                  My Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/view-applications"
                  className="text-slate-400 hover:text-white transition-colors no-underline"
                >
                  Applied Jobs
                </Link>
              </li>
            </ul>
          </div>

          {/* Employers Column */}
          <div>
            <h5 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Employers
            </h5>
            <ul className="space-y-2.5 list-none p-0 text-sm">
              <li>
                <Link
                  to="/add-job"
                  className="text-slate-400 hover:text-white transition-colors no-underline"
                >
                  Post a Job
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="text-slate-400 hover:text-white transition-colors no-underline"
                >
                  Create Employer Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Support Column */}
          <div>
            <h5 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h5>
            <ul className="space-y-2.5 list-none p-0 text-sm">
              <li>
                <Link
                  to="/about-us"
                  className="text-slate-400 hover:text-white transition-colors no-underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="text-slate-400 hover:text-white transition-colors no-underline"
                >
                  Contact Us
                </Link>
              </li>
              <li className="flex items-center gap-2 text-slate-400 mt-2">
                <FaEnvelope size={14} className="text-slate-500" />
                <span>support@careertechguru.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 mb-0">
            &copy; {new Date().getFullYear()} CareerTechGuru. All rights
            reserved. Powered by ESPS Pvt Ltd.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <a
              href="#"
              className="hover:text-slate-400 transition-colors no-underline"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-slate-400 transition-colors no-underline"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
