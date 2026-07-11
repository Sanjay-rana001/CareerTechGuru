import React, { useState } from "react";
import FormStepOne from "./FormStepOne";
import FormStepTwo from "./FormStepTwo";
import { useAuthContext } from "../../../context";
import { Link, useNavigate } from "react-router-dom";
import coverimg from "../../../assets/logo.jpeg";
import EmailVerify from "./EmailVerify";
import { CircularLoader } from "../../../components";
import { useBrandContext } from "../../../context";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const { siteConfig } = useBrandContext();
  const [step, setStep] = useState(1);
  const { RegisterUser, signInWithGoogle, loading } = useAuthContext();
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
              <>
                <FormStepOne
                  nextStep={nextStep}
                  handleInputChange={handleInputData}
                  formData={formData}
                  handleSubmit={handleSubmit}
                />
                
                <div className="relative flex items-center justify-center w-full my-5">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200"></div>
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="px-2 bg-white text-slate-400 font-semibold uppercase tracking-wide">Or sign up with</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={async () => {
                    try {
                      await signInWithGoogle();
                      navigate("/");
                    } catch (error) {
                      console.error("Google Sign-Up Error:", error);
                    }
                  }}
                  className="w-full bg-white hover:bg-slate-50 text-slate-700 font-semibold py-2.5 rounded-lg border border-slate-200 shadow-sm transition-colors text-sm flex items-center justify-center gap-2"
                  disabled={loading}
                >
                  <FcGoogle size={20} />
                  Google
                </button>
              </>
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
          <p>All rights reserved by &copy; {siteConfig.appName}&trade;</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
