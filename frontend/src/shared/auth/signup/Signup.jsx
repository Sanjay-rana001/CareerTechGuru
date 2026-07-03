import React, { useState } from "react";
import FormStepOne from "./FormStepOne";
import FormStepTwo from "./FormStepTwo";
import { useAuthContext } from "../../../context";
import { Link, useNavigate } from "react-router-dom";
import coverimg from "../../../assets/logo.jpeg";
import EmailVerify from "./EmailVerify";
import { CircularLoader } from "../../../components";

const Signup = () => {
  const [step, setStep] = useState(1);
  const { RegisterUser, loading } = useAuthContext();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    username: "",
    country: "",
    password: "",
    role: "",
    resumeUrl: "",
  });

  const navigate = useNavigate();

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const handleInputData = (input) => (e) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const userData = await RegisterUser(formData);
      if (userData) {
        nextStep();
      } else {
        console.error("Registration failed: Unexpected response from server");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  if (loading) {
    return <CircularLoader />;
  }

  return (
    <div className="bg-slate-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-xl w-full space-y-8">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-md p-8">
          {/* Logo & Header */}
          <div className="flex flex-col items-center justify-center mb-6">
            <img
              src={coverimg}
              alt="Logo"
              className="w-16 h-16 rounded-xl object-cover mb-4 border border-slate-100 shadow-sm"
            />
            <h2 className="text-center text-2xl font-bold text-slate-800">
              Register your account
            </h2>
            <p className="text-xs text-slate-500 mt-2">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#2563EB] font-bold no-underline hover:underline"
              >
                Login here
              </Link>
            </p>
          </div>

          {/* Form Step Render */}
          <div className="mt-4">
            {step === 1 && (
              <FormStepOne
                nextStep={nextStep}
                handleInputChange={handleInputData}
                formData={formData}
                handleSubmit={handleSubmit}
              />
            )}
            {step === 2 && (
              <FormStepTwo
                nextStep={nextStep}
                prevStep={prevStep}
                handleInputChange={handleInputData}
                handleSubmit={handleSubmit}
                formData={formData}
              />
            )}
            {step === 3 && (
              <EmailVerify
                nextStep={nextStep}
                prevStep={prevStep}
                handleInputChange={handleInputData}
                handleSubmit={handleSubmit}
                formData={formData}
              />
            )}
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

export default Signup;
