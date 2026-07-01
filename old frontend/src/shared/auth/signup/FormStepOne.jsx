import React, { useState } from "react";
import { SelectInput, TextInput } from "../../../components";

const FormStepOne = ({ nextStep, handleInputChange, formData }) => {
  const [formErrors, setFormErrors] = useState({
    role: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordToggle, setPasswordToggle] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    }

    if (!formData.username.trim()) {
      errors.username = "Username is required";
      isValid = false;
    }

    if (!formData.role) {
      errors.role = "Please select an option";
      isValid = false;
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!formData.password.trim()) {
      errors.password = "Password is required";
      isValid = false;
    } else if (!passwordPattern.test(formData.password)) {
      errors.password = "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character";
      isValid = false;
    }

    if (formData.password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handlePasswordToggle = () => {
    setPasswordToggle(!passwordToggle);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      nextStep();
    }
  };

  const options = [
    { value: 'user', label: 'Looking for job' },
    { value: 'admin', label: 'Hire employees' },
  ];

  return (
    <form className="space-y-4">
      {/* Role selector */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="role" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          What are you looking for
        </label>
        <SelectInput
          options={options}
          value={formData.role}
          onChange={handleInputChange("role")}
        />
        {formErrors.role && <p className="text-red-500 text-xs font-medium mb-0">{formErrors.role}</p>}
      </div>

      {/* Username field */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="username" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Username
        </label>
        <TextInput
          type="text"
          placeholder="Enter your username"
          name="username"
          value={formData.username}
          onChange={handleInputChange("username")}
        />
        {formErrors.username && <p className="text-red-500 text-xs font-medium mb-0">{formErrors.username}</p>}
      </div>

      {/* Email field */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Email <sup className="text-red-500">*</sup>
        </label>
        <TextInput
          type="text"
          placeholder="e.g. abc@example.com"
          name="email"
          value={formData.email}
          onChange={handleInputChange("email")}
        />
        {formErrors.email && <p className="text-red-500 text-xs font-medium mb-0">{formErrors.email}</p>}
      </div>

      {/* Password field */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="password" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Password <sup className="text-red-500">*</sup>
        </label>
        <TextInput
          type={passwordToggle ? "text" : "password"}
          placeholder="Enter password"
          name="password"
          value={formData.password}
          onChange={handleInputChange("password")}
        />
        {formErrors.password && <p className="text-red-500 text-xs font-medium mb-0">{formErrors.password}</p>}
      </div>

      {/* Confirm Password field */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="confirmPassword" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Confirm Password <sup className="text-red-500">*</sup>
        </label>
        <TextInput
          type={passwordToggle ? "text" : "password"}
          placeholder="Confirm password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {formErrors.confirmPassword && <p className="text-red-500 text-xs font-medium mb-0">{formErrors.confirmPassword}</p>}
      </div>

      {/* Show Password Toggle */}
      <div className="flex items-center gap-2 pt-1">
        <input 
          type="checkbox" 
          checked={passwordToggle} 
          onChange={handlePasswordToggle} 
          id="flexCheckDefault" 
          className="rounded border-slate-300 text-[#2563EB] focus:ring-[#2563EB]"
        />
        <label className="text-xs font-medium text-slate-500 cursor-pointer select-none" htmlFor="flexCheckDefault">
          Show password
        </label>
      </div>

      {/* Submit Button */}
      <div className="pt-3">
        <button 
          onClick={handleFormSubmit} 
          className="w-full bg-[#2563EB] hover:bg-blue-700 text-white font-semibold py-3 rounded-lg border-0 shadow-sm transition-colors text-sm"
        >
          Continue
        </button>
      </div>
    </form>
  );
};

export default FormStepOne;
