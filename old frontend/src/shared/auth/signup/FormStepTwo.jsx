import React, { useEffect, useState, useRef } from 'react';
import { SelectInput, TextInput } from '../../../components';
import { GetCountries } from 'react-country-state-city';
import { useAuthContext } from '../../../context';
import axios from 'axios';
import { resumeUpload } from '../../../api/Api';

const FormStepTwo = ({ nextStep, prevStep, handleInputChange, formData, handleSubmit }) => {
  const { loading } = useAuthContext();
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
  });
  const [countriesList, setCountriesList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [file, setFile] = useState(null);
  const fileInput = useRef(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const countries = await GetCountries();
        const countryOptions = countries.map(country => ({ value: country.isoCode, label: country.name }));
        setCountriesList(countryOptions);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      }
    };
    fetchCountries();
  }, []);

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!formData.firstName.trim()) {
      errors.firstName = "First Name is required";
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "Last Name is required";
      isValid = false;
    }

    if (!formData.mobile.trim()) {
      errors.mobile = "Mobile number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      errors.mobile = "Mobile number must be 10 digits and no alphabets";
      isValid = false;
    }
    setFormErrors(errors);
    return isValid;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleSubmit();
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
 
  const handleResumeUpload = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
 
    if (!file) {
      setErrorMessage('Please select a file to upload.');
      return;
    }
 
    const formDataa = new FormData();
    formDataa.append('file', file);
    formDataa.append('email', formData.email);
 
    try {
      const response = await axios.post(resumeUpload, formDataa, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuccessMessage('File uploaded successfully.');
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        if (error.response.data && error.response.data.message) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage(`Error: ${error.response.status} - ${error.response.statusText}`);
        }
      } else if (error.request) {
        setErrorMessage('No response from the server. Please try again later.');
      } else {
        setErrorMessage('Error in setting up the request: ' + error.message);
      }
    }
  };

  return (
    <form className="space-y-5">
      {/* Country selection */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="country" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Country
        </label>
        <SelectInput
          options={countriesList}
          value={formData.country}
          onChange={handleInputChange("country")}
        />
        {formErrors.country && <p className="text-red-500 text-xs font-medium mb-0">{formErrors.country}</p>}
      </div>

      {/* First Name field */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="firstName" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          First Name <sup className="text-red-500">*</sup>
        </label>
        <TextInput
          type="text"
          placeholder="Enter First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange("firstName")}
        />
        {formErrors.firstName && <p className="text-red-500 text-xs font-medium mb-0">{formErrors.firstName}</p>}
      </div>

      {/* Last Name field */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="lastName" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Last Name <sup className="text-red-500">*</sup>
        </label>
        <TextInput
          type="text"
          placeholder="Enter Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange("lastName")}
        />
        {formErrors.lastName && <p className="text-red-500 text-xs font-medium mb-0">{formErrors.lastName}</p>}
      </div>

      {/* Mobile field */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="mobile" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Mobile Number <sup className="text-red-500">*</sup>
        </label>
        <TextInput
          type="text"
          placeholder="Enter 10-digit mobile number"
          name="mobile"
          value={formData.mobile}
          onChange={handleInputChange("mobile")}
        />
        {formErrors.mobile && <p className="text-red-500 text-xs font-medium mb-0">{formErrors.mobile}</p>}
      </div>

      {/* Resume Upload Box */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
        <span className="text-xs font-bold text-slate-700 block">Upload Resume</span>
        <input
          type="file"
          name="file"
          className="w-full bg-white border border-slate-300 rounded-lg text-xs p-2 focus:outline-none"
          ref={fileInput}
          onChange={handleFileChange} 
        />
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <span className="text-xs font-semibold text-slate-400">
            Supported formats: .doc, .docx, .pdf
          </span>
          <button 
            type="button"
            onClick={handleResumeUpload} 
            className="px-4 py-1.5 bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-bold rounded-lg border-0 transition-colors cursor-pointer"
          >
            Upload
          </button>
        </div>
        
        {errorMessage && <p className="text-xs font-medium text-red-500 mb-0">{errorMessage}</p>}
        {successMessage && <p className="text-xs font-medium text-emerald-500 mb-0">{successMessage}</p>}
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 pt-4 border-t border-slate-100">
        <button 
          type="button" 
          onClick={prevStep} 
          className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 rounded-lg border-0 transition-colors text-sm"
        >
          Back
        </button>
        <button 
          onClick={handleFormSubmit}
          className="flex-1 bg-[#2563EB] hover:bg-blue-700 text-white font-semibold py-3 rounded-lg border-0 shadow-sm transition-colors text-sm"
          disabled={loading}
        >
          {loading ? "Registering..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default FormStepTwo;
