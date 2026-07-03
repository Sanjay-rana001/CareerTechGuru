import React, { useState, useEffect } from "react";
import Select from "react-select";

const AddJobForm_2 = ({
  nextStep,
  prevStep,
  handleSubmit,
  handleChange,
  values,
}) => {
  const [isReferenceJob, setIsReferenceJob] = useState(values.isReferenceJob);
  const [isUploading, setIsUploading] = useState(false);
  const [locationOptions, setLocationOptions] = useState([]);

  useEffect(() => {
    setIsReferenceJob(values.isReferenceJob);
  }, [values.isReferenceJob]);

  useEffect(() => {
    import("../../../utils/locationUtils").then((module) => {
      setLocationOptions(module.getGlobalLocationOptions());
    });
  }, []);

  const handleRadioChange = (event) => {
    const value = event.target.value === "yes";
    setIsReferenceJob(value);
    handleChange("isReferenceJob")({ target: { value } });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setIsUploading(true);
      const { storage } = await import("../../../firebase");
      const { ref, uploadBytes, getDownloadURL } = await import("firebase/storage");
      const fileRef = ref(storage, `companyLogos/${Date.now()}_${file.name}`);
      await uploadBytes(fileRef, file);
      const downloadUrl = await getDownloadURL(fileRef);
      
      // Update the profilePicture value
      handleChange("profilePicture")({ target: { value: downloadUrl } });
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
          <h4 className="text-2xl font-bold text-white mb-0">Company Details</h4>
          <p className="text-blue-100 mt-1 text-sm mb-0">Step 2 of 2: Let candidates know who is hiring</p>
        </div>
        
        <div className="p-8 space-y-6">
          {/* Company Logo */}
          <div>
            <label htmlFor="profilePicture" className="block text-sm font-semibold text-gray-700 mb-2">Company Logo <span className="text-red-500">*</span></label>
            <div className="flex items-center gap-4">
              {values.profilePicture && (
                <img src={values.profilePicture} alt="Logo preview" className="w-16 h-16 object-contain rounded-md border border-gray-200" />
              )}
              <div className="flex-1">
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={handleImageUpload} 
                  disabled={isUploading}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" 
                />
                {isUploading && <p className="text-sm text-blue-600 mt-2">Uploading image...</p>}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Openings */}
            <div>
              <label htmlFor="openings" className="block text-sm font-semibold text-gray-700 mb-2">Total Openings <span className="text-red-500">*</span></label>
              <input type="number" onChange={handleChange("openings")} value={values.openings} placeholder="e.g. 5" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none" />
            </div>

            {/* Experience */}
            <div>
              <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">Min Experience <span className="text-red-500">*</span></label>
              <select onChange={handleChange("experience")} value={values.experience} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none bg-white">
                <option value="">Select experience</option>
                <option value="Fresher">Fresher</option>
                <option value="1 - 2 years">1 - 2 years</option>
                <option value="2 - 3 years">2 - 3 years</option>
                <option value="4 - 6 years">4 - 6 years</option>
                <option value="7 - 8 years">7 - 8 years</option>
              </select>
            </div>

            {/* Salary */}
            <div>
              <label htmlFor="salaryRange" className="block text-sm font-semibold text-gray-700 mb-2">Salary Range <span className="text-red-500">*</span></label>
              <select onChange={handleChange("salaryRange")} value={values.salaryRange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none bg-white">
                <option value="">Select salary range</option>
                <option value="5k - 10k">5k - 10k</option>
                <option value="15k - 25k">15k - 25k</option>
                <option value="4 lpa - 6 lpa">4 lpa - 6 lpa</option>
                <option value="8 lpa - 10 lpa">8 lpa - 10 lpa</option>
                <option value="Not disclosed">Not disclosed</option>
              </select>
            </div>

            {/* Job Type */}
            <div>
              <label htmlFor="jobType" className="block text-sm font-semibold text-gray-700 mb-2">Job Type <span className="text-red-500">*</span></label>
              <select onChange={handleChange("jobType")} value={values.jobType} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none bg-white">
                <option value="">Select job type</option>
                <option value="Work from home">Work from home</option>
                <option value="Work from office">Work from office</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>

            {/* Work Type */}
            <div>
              <label htmlFor="workType" className="block text-sm font-semibold text-gray-700 mb-2">Work Type <span className="text-red-500">*</span></label>
              <select onChange={handleChange("workType")} value={values.workType} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none bg-white">
                <option value="">Select work type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Internship">Internship</option>
                <option value="Contractual">Contractual</option>
              </select>
            </div>

            {/* Qualification */}
            <div>
              <label htmlFor="qualification" className="block text-sm font-semibold text-gray-700 mb-2">Qualification <span className="text-red-500">*</span></label>
              <select onChange={handleChange("qualification")} value={values.qualification} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none bg-white">
                <option value="">Select qualification</option>
                <option value="Post-graduation">Post-graduation</option>
                <option value="Graduation">Graduation</option>
                <option value="Diploma">Diploma</option>
                <option value="10th/12th Passed">10th/12th Passed</option>
                <option value="Any">Any</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Company Name */}
            <div>
              <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700 mb-2">Company Name <span className="text-red-500">*</span></label>
              <input type="text" onChange={handleChange("companyName")} value={values.companyName} placeholder="e.g. Google" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none" />
            </div>

            {/* Company Website */}
            <div>
              <label htmlFor="companyWebsite" className="block text-sm font-semibold text-gray-700 mb-2">Company Website <span className="text-red-500">*</span></label>
              <input type="text" onChange={handleChange("companyWebsite")} value={values.companyWebsite} placeholder="e.g. https://google.com" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none" />
            </div>
          </div>

          {/* Location */}
          <div className="relative z-10">
            <label htmlFor="jobLocation" className="block text-sm font-semibold text-gray-700 mb-2">Location <span className="text-red-500">*</span></label>
            <div className="text-sm">
              <Select options={locationOptions} value={locationOptions?.find(opt => opt?.value === values.jobLocation) || null} onChange={(selectedOption) => handleChange("jobLocation")({ target: { value: selectedOption?.value || "" } })} isClearable placeholder="Select location..." />
            </div>
          </div>

          {/* Is Reference Job */}
          <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 mt-6 relative z-0">
            <label className="block text-sm font-semibold text-gray-700 mb-3">Is this a reference job? (Direct users to external link) <span className="text-red-500">*</span></label>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" value="yes" checked={isReferenceJob} onChange={handleRadioChange} className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                <span className="text-sm text-gray-800">Yes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" value="no" checked={!isReferenceJob} onChange={handleRadioChange} className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                <span className="text-sm text-gray-800">No</span>
              </label>
            </div>
            
            {isReferenceJob && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <label htmlFor="jobUrl" className="block text-sm font-semibold text-gray-700 mb-2">External Job URL <span className="text-red-500">*</span></label>
                <input type="text" onChange={handleChange("jobUrl")} value={values.jobUrl} placeholder="https://careers.google.com/..." className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none" />
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-8 relative z-0">
            <button onClick={prevStep} className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors focus:ring-2 focus:ring-gray-200 outline-none">
              &larr; Back
            </button>
            <button onClick={handleSubmit} className="px-8 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/30 focus:ring-2 focus:ring-blue-500 outline-none">
              Publish Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddJobForm_2;
