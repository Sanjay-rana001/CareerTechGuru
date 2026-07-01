import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context";
import coverImg from '../../assets/logo.jpeg';
import { TextInput } from "../../components";

const Login = () => {
  const { AuthenticateUser, loading } = useAuthContext();
  const navigate = useNavigate();
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState({
    email: false,
    password: false,
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordToggle, setPasswordToggle] = useState(false);

  const validateFormInput = () => {
    const errors = {};
    if (!loginCredentials.email.trim()) {
      errors.email = true;
    }
    if (!loginCredentials.password.trim()) {
      errors.password = true;
    }
    setFormError(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePasswordToggle = () => {
    setPasswordToggle(!passwordToggle);
  };

  const handleInputChange = (e) => {
    setLoginCredentials({
      ...loginCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateFormInput()) {
      try {
        await AuthenticateUser(loginCredentials);
        navigate("/");
      } catch (error) {
        setErrorMessage(error.message);
        setTimeout(() => {
          setErrorMessage('');
        }, 3000);
      }
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-md p-8">
          {/* Logo & Header */}
          <div className="flex flex-col items-center justify-center mb-6">
            <img src={coverImg} alt="Logo" className="w-16 h-16 rounded-xl object-cover mb-4 border border-slate-100 shadow-sm" />
            <h2 className="text-center text-2xl font-bold text-slate-800">Login here</h2>
          </div>

          {errorMessage && (
            <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-lg border border-red-100 mb-4">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username/Email Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Username or Email <sup className="text-red-500">*</sup>
              </label>
              <TextInput 
                type="email" 
                name="email" 
                value={loginCredentials.email} 
                onChange={handleInputChange} 
                placeholder="Enter Username or Email" 
                className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors"
              />
              {formError.email && (
                <span className="text-xs font-medium text-red-500">Email is required</span>
              )}
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Password <sup className="text-red-500">*</sup>
              </label>
              <TextInput 
                type={passwordToggle ? "text" : "password"} 
                name="password" 
                value={loginCredentials.password} 
                onChange={handleInputChange} 
                placeholder="Enter Password" 
                className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors"
              />
              {formError.password && (
                <span className="text-xs font-medium text-red-500">Password is required</span>
              )}
              
              <div className="flex items-center gap-2 mt-1">
                <input 
                  type="checkbox" 
                  checked={passwordToggle} 
                  onChange={handlePasswordToggle} 
                  id="flexCheckDefault" 
                  className="rounded border-slate-300 text-[#2563EB] focus:ring-[#2563EB]"
                />
                <label className="text-xs font-medium text-slate-500 cursor-pointer select-none" htmlFor="flexCheckDefault">
                  show password
                </label>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-3 pt-2">
              <button 
                type="submit" 
                className="w-full bg-[#2563EB] hover:bg-blue-700 text-white font-semibold py-3 rounded-lg border-0 shadow-sm transition-colors text-sm"
                disabled={loading}
              >
                {loading ? "Please wait..." : "Login"}
              </button>
              
              <button 
                type="button"
                onClick={() => navigate('/')} 
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2.5 rounded-lg border-0 transition-colors text-xs"
              >
                Back to home
              </button>
            </div>
          </form>

          {/* Links */}
          <div className="mt-6 pt-6 border-t border-slate-100 space-y-2.5 text-xs text-center">
            <p className="mb-0 text-slate-500">
              <Link to='/forgot-password' className="text-[#2563EB] font-medium no-underline hover:underline">
                Dont't remember your password ? Forgot your password
              </Link>
            </p>
            <p className="mb-0 text-slate-500">
              Don't have an account?{" "}
              <Link to="/register" className="text-[#2563EB] font-bold no-underline hover:underline">
                Create an account
              </Link>
            </p>
            <p className="mb-0">
              <Link className="text-slate-400 no-underline hover:underline">
                Need help in siging in ?
              </Link>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-slate-400">
          <p>All rights reserved by &copy; Career Techguru&trade;</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
