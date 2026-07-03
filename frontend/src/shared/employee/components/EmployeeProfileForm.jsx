import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useEmployeeContext, useSectionContext } from "../../../context";
import { Multiselect } from "multiselect-react-dropdown";
import { jobType, locations } from "../../../testData/StaticData";
import { storage } from "../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const EmployeeProfileForm = () => {
  const { createUserProfile, updateEmployeeDetails } = useEmployeeContext();
  const { getAllSections } = useSectionContext();
  const [sectionData, setSectionData] = useState([]);
  const [loading, setLoading] = useState(false);
  const userData = JSON.parse(sessionStorage.getItem("data"));
  const [values, setValues] = useState({
    firstName: userData?.firstName || "",
    lastName: userData?.lastName || "",
    email: userData?.email || "",
    mobile: userData?.mobile || "",
    gender: "",
    dateOfBirth: "",
    bio: "",
    experienceInYear: 0,
    alternateNumber: "",
    resumeUrl: "",
    address: {
      street: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      isPermanent: false,
    },
    links: {
      website: "",
      linkedin: "",
      github: "",
      twitter: "",
      portfolio: "",
    },
    experiences: [
      {
        title: "",
        company: "",
        startDate: "",
        endDate: null,
        description: "",
        isActive: false,
      },
    ],
    education: [
      {
        title: "",
        university: "",
        startDate: "",
        endDate: null,
        marks: "",
        isActive: false,
      },
    ],
    interests: {
      category: [],
      location: [],
      jobType: [],
    },
  });

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [file, setFile] = useState(null);
  const fileInput = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const [section, key] = name.split(".");
    if (key) {
      setValues((prevValues) => ({
        ...prevValues,
        [section]: {
          ...prevValues[section],
          [key]: type === "checkbox" ? checked : value,
        },
      }));
    } else {
      setValues((prevValues) => ({
        ...prevValues,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleExperienceChange = (index, e) => {
    const { name, value, type, checked } = e.target;
    const newExperiences = values.experiences.map((experience, i) => {
      if (i === index) {
        return { ...experience, [name]: type === "checkbox" ? checked : value };
      }
      return experience;
    });
    setValues((prevValues) => ({ ...prevValues, experiences: newExperiences }));
  };

  const handleEducationChange = (index, e) => {
    const { name, value, type, checked } = e.target;
    const newEducation = values.education.map((education, i) => {
      if (i === index) {
        return { ...education, [name]: type === "checkbox" ? checked : value };
      }
      return education;
    });
    setValues((prevValues) => ({ ...prevValues, education: newEducation }));
  };

  const addExperience = () => {
    setValues((prevValues) => ({
      ...prevValues,
      experiences: [
        ...prevValues.experiences,
        {
          title: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
          isActive: false,
        },
      ],
    }));
  };

  const addEducation = () => {
    setValues((prevValues) => ({
      ...prevValues,
      education: [
        ...prevValues.education,
        {
          title: "",
          university: "",
          startDate: "",
          endDate: "",
          marks: "",
          isActive: false,
        },
      ],
    }));
  };

  const getAllJobCategories = async () => {
    setLoading(true);
    try {
      const data = await getAllSections();
      if (data && data?.data.length > 0) {
        setSectionData(data?.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllJobCategories();
  }, []);

  const handleSelect = (selectedList, selectedItem, type) => {
    if (type === "category" && selectedList.length > 5) {
      return;
    }
    setValues((prevValues) => ({
      ...prevValues,
      interests: {
        ...prevValues.interests,
        [type]: selectedList.map((item) => item.title),
      },
    }));
  };

  const handleRemove = (selectedList, removedItem, type) => {
    setValues((prevValues) => ({
      ...prevValues,
      interests: {
        ...prevValues.interests,
        [type]: selectedList.map((item) => item.title),
      },
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    try {
      if (!file) {
        const result = await createUserProfile(values);
        if (result) {
          setSuccessMessage("Profile uploaded successfully.");
          navigate("/");
        }
      } else {
        const result = await createUserProfile(values);
        if (result) {
          console.log("User profile created successfully", result);

          const storageRef = ref(
            storage,
            `resumes/${values.email}/${file.name}`,
          );
          const snapshot = await uploadBytes(storageRef, file);
          const downloadURL = await getDownloadURL(snapshot.ref);

          await updateEmployeeDetails(values.email, { resumeUrl: downloadURL });
          console.log("Profile updated with resume URL", downloadURL);

          setSuccessMessage("Profile and resume uploaded successfully.");
          navigate("/");
        }
      }
    } catch (error) {
      console.error("Error uploading profile/resume:", error);
      setErrorMessage("Error in setting up the request: " + error.message);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 font-sans">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 mb-6 text-center">
          <h1 className="text-2xl font-bold text-slate-800">
            Complete your profile
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 pb-2 border-b border-slate-100 mb-4">
              Personal Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 bg-slate-100 border border-slate-300 rounded-lg text-sm text-slate-600 cursor-not-allowed"
                  value={values.firstName}
                  disabled
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 bg-slate-100 border border-slate-300 rounded-lg text-sm text-slate-600 cursor-not-allowed"
                  value={values.lastName}
                  disabled
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2.5 bg-slate-100 border border-slate-300 rounded-lg text-sm text-slate-600 cursor-not-allowed"
                  value={values.email}
                  disabled
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Mobile Number
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 bg-slate-100 border border-slate-300 rounded-lg text-sm text-slate-600 cursor-not-allowed"
                  value={values.mobile}
                  disabled
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Bio
              </label>
              <textarea
                className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors"
                rows={3}
                name="bio"
                value={values.bio}
                onChange={handleChange}
                placeholder="Tell us about yourself..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Gender
                </label>
                <select
                  className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors cursor-pointer"
                  name="gender"
                  value={values.gender}
                  onChange={handleChange}
                >
                  <option value="">Choose options</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors"
                  value={values.dateOfBirth}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Alternate Number
                </label>
                <input
                  type="number"
                  name="alternateNumber"
                  className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors"
                  value={values.alternateNumber}
                  onChange={handleChange}
                  placeholder="Alternate contact number"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Total Experience (in years)
                </label>
                <input
                  type="number"
                  name="experienceInYear"
                  className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors"
                  value={values.experienceInYear}
                  onChange={handleChange}
                  placeholder="Total experience"
                />
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 pb-2 border-b border-slate-100 mb-4">
              Address Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Street
                </label>
                <input
                  type="text"
                  name="address.street"
                  className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors"
                  value={values.address.street}
                  onChange={handleChange}
                  placeholder="Street details"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  City
                </label>
                <input
                  type="text"
                  name="address.city"
                  className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors"
                  value={values.address.city}
                  onChange={handleChange}
                  placeholder="City"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  State
                </label>
                <input
                  type="text"
                  name="address.state"
                  className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors"
                  value={values.address.state}
                  onChange={handleChange}
                  placeholder="State"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  ZIP Code
                </label>
                <input
                  type="text"
                  name="address.zip"
                  className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors"
                  value={values.address.zip}
                  onChange={handleChange}
                  placeholder="ZIP code"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Country
                </label>
                <input
                  type="text"
                  name="address.country"
                  className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors"
                  value={values.address.country}
                  onChange={handleChange}
                  placeholder="Country"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <input
                type="checkbox"
                name="address.isPermanent"
                checked={values.address.isPermanent}
                onChange={handleChange}
                id="isPermanentAddress"
                className="rounded border-slate-300 text-[#2563EB] focus:ring-[#2563EB]"
              />
              <label
                className="text-xs font-medium text-slate-500 cursor-pointer select-none"
                htmlFor="isPermanentAddress"
              >
                Is Permanent Address
              </label>
            </div>
          </div>

          {/* Education Information */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 space-y-6">
            <h3 className="text-lg font-bold text-slate-900 pb-2 border-b border-slate-100 mb-2">
              Education Information
            </h3>

            {values.education.map((edu, index) => (
              <div
                key={index}
                className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-4 relative"
              >
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Degree
                  </label>
                  <input
                    type="text"
                    name="title"
                    className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB]"
                    value={edu.title}
                    onChange={(e) => handleEducationChange(index, e)}
                    placeholder="e.g. B.Tech / B.Sc / MBA"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    University Name
                  </label>
                  <input
                    type="text"
                    name="university"
                    className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB]"
                    value={edu.university}
                    onChange={(e) => handleEducationChange(index, e)}
                    placeholder="University or Board Name"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Start Date
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB]"
                      value={edu.startDate}
                      onChange={(e) => handleEducationChange(index, e)}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      End Date
                    </label>
                    <input
                      type="date"
                      name="endDate"
                      className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB]"
                      value={edu.endDate}
                      onChange={(e) => handleEducationChange(index, e)}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Marks (GPA / Percentage)
                  </label>
                  <input
                    type="text"
                    name="marks"
                    className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB]"
                    value={edu.marks}
                    onChange={(e) => handleEducationChange(index, e)}
                    placeholder="Marks scored"
                  />
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    name="isActive"
                    checked={edu.isActive}
                    onChange={(e) => handleEducationChange(index, e)}
                    id={`edu-active-${index}`}
                    className="rounded border-slate-300 text-[#2563EB] focus:ring-[#2563EB]"
                  />
                  <label
                    className="text-xs font-medium text-slate-500 cursor-pointer select-none"
                    htmlFor={`edu-active-${index}`}
                  >
                    Currently pursuing
                  </label>
                </div>
              </div>
            ))}

            <div className="flex justify-center pt-2">
              <button
                type="button"
                onClick={addEducation}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-lg border-0 transition-colors cursor-pointer"
              >
                Add new education
              </button>
            </div>
          </div>

          {/* Experience Information */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 space-y-6">
            <h3 className="text-lg font-bold text-slate-900 pb-2 border-b border-slate-100 mb-2">
              Experience Information
            </h3>

            {values.experiences.map((exp, index) => (
              <div
                key={index}
                className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-4 relative"
              >
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Job Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB]"
                    value={exp.title}
                    onChange={(e) => handleExperienceChange(index, e)}
                    placeholder="e.g. Software Engineer / Consultant"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB]"
                    value={exp.company}
                    onChange={(e) => handleExperienceChange(index, e)}
                    placeholder="Company Name"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Start Date
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB]"
                      value={exp.startDate}
                      onChange={(e) => handleExperienceChange(index, e)}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      End Date
                    </label>
                    <input
                      type="date"
                      name="endDate"
                      className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB]"
                      value={exp.endDate}
                      onChange={(e) => handleExperienceChange(index, e)}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB]"
                    value={exp.description}
                    onChange={(e) => handleExperienceChange(index, e)}
                    placeholder="Briefly describe your responsibilities..."
                  />
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    name="isActive"
                    checked={exp.isActive}
                    onChange={(e) => handleExperienceChange(index, e)}
                    id={`exp-active-${index}`}
                    className="rounded border-slate-300 text-[#2563EB] focus:ring-[#2563EB]"
                  />
                  <label
                    className="text-xs font-medium text-slate-500 cursor-pointer select-none"
                    htmlFor={`exp-active-${index}`}
                  >
                    Currently working here
                  </label>
                </div>
              </div>
            ))}

            {/* Experience Add New Button - Fixed to call addExperience on all screens */}
            <div className="flex justify-center pt-2">
              <button
                type="button"
                onClick={addExperience}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-lg border-0 transition-colors cursor-pointer"
              >
                Add new experience
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 pb-2 border-b border-slate-100 mb-4">
              Social Links
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Website
                </label>
                <input
                  type="text"
                  name="links.website"
                  className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB]"
                  value={values.links.website}
                  onChange={handleChange}
                  placeholder="https://example.com"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  LinkedIn Profile URL
                </label>
                <input
                  type="text"
                  name="links.linkedin"
                  className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB]"
                  value={values.links.linkedin}
                  onChange={handleChange}
                  placeholder="LinkedIn link"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Github
                </label>
                <input
                  type="text"
                  name="links.github"
                  className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB]"
                  value={values.links.github}
                  onChange={handleChange}
                  placeholder="Github profile URL"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Twitter
                </label>
                <input
                  type="text"
                  name="links.twitter"
                  className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB]"
                  value={values.links.twitter}
                  onChange={handleChange}
                  placeholder="Twitter profile URL"
                />
              </div>
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Portfolio
                </label>
                <input
                  type="text"
                  name="links.portfolio"
                  className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB]"
                  value={values.links.portfolio}
                  onChange={handleChange}
                  placeholder="Portfolio website link"
                />
              </div>
            </div>
          </div>

          {/* Preferences & Resume */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 space-y-6">
            <h3 className="text-lg font-bold text-slate-900 pb-2 border-b border-slate-100 mb-2">
              Preferences &amp; Resume
            </h3>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Preferred Category
              </label>
              <Multiselect
                options={sectionData}
                selectedValues={sectionData.filter((item) =>
                  values.interests.category.includes(item.title),
                )}
                onSelect={(selectedList, selectedItem) =>
                  handleSelect(selectedList, selectedItem, "category")
                }
                onRemove={(selectedList, removedItem) =>
                  handleRemove(selectedList, removedItem, "category")
                }
                displayValue="title"
                loading={loading}
                disablePreSelectedValues
                style={{
                  chips: { background: "#2563EB", fontSize: "12px" },
                  searchBox: {
                    border: "1px solid #CBD5E1",
                    borderRadius: "8px",
                    padding: "6px 12px",
                  },
                }}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Preferred Location
              </label>
              <Multiselect
                options={locations}
                selectedValues={locations.filter((item) =>
                  values.interests.location.includes(item.title),
                )}
                onSelect={(selectedList, selectedItem) =>
                  handleSelect(selectedList, selectedItem, "location")
                }
                onRemove={(selectedList, removedItem) =>
                  handleRemove(selectedList, removedItem, "location")
                }
                displayValue="title"
                loading={loading}
                style={{
                  chips: { background: "#2563EB", fontSize: "12px" },
                  searchBox: {
                    border: "1px solid #CBD5E1",
                    borderRadius: "8px",
                    padding: "6px 12px",
                  },
                }}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Preferred Job Type
              </label>
              <Multiselect
                options={jobType}
                selectedValues={jobType.filter((item) =>
                  values.interests.jobType.includes(item.title),
                )}
                onSelect={(selectedList, selectedItem) =>
                  handleSelect(selectedList, selectedItem, "jobType")
                }
                onRemove={(selectedList, removedItem) =>
                  handleRemove(selectedList, removedItem, "jobType")
                }
                displayValue="title"
                loading={loading}
                style={{
                  chips: { background: "#2563EB", fontSize: "12px" },
                  searchBox: {
                    border: "1px solid #CBD5E1",
                    borderRadius: "8px",
                    padding: "6px 12px",
                  },
                }}
              />
            </div>

            <p className="hr bg-slate-100 my-6"></p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4">
              <span className="text-xs font-bold text-slate-700 block uppercase tracking-wider">
                Upload Resume
              </span>
              <input
                type="file"
                name="file"
                className="w-full bg-white border border-slate-300 rounded-lg text-xs p-2.5 focus:outline-none"
                ref={fileInput}
                onChange={handleFileChange}
              />
              <span className="text-xs font-semibold text-slate-400 block">
                Supported formats: .doc, .docx, .pdf
              </span>

              {errorMessage && (
                <div className="bg-red-50 text-red-600 text-xs font-medium p-3 rounded-lg border border-red-100">
                  {errorMessage}
                </div>
              )}
              {successMessage && (
                <div className="bg-emerald-50 text-emerald-600 text-xs font-medium p-3 rounded-lg border border-emerald-100">
                  {successMessage}
                </div>
              )}
            </div>
          </div>

          {/* Submit Button - corrected typo to type="submit" */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="px-8 py-3 bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-sm rounded-lg border-0 transition-colors shadow-sm cursor-pointer"
            >
              Submit Profile Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeProfileForm;
