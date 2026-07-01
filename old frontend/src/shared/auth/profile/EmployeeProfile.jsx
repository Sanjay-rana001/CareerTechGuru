import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Multiselect from 'multiselect-react-dropdown';
import { experienceLevel, locations } from '../../../testData/StaticData';
import { useEmployeeContext, useSectionContext } from '../../../context';

const EmployeeProfile = () => {
  const users = JSON.parse(sessionStorage.getItem('data'));
  const { addProfileDetails } = useEmployeeContext();
  const { sections } = useSectionContext();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    userId: users._id,
    location: [], // Initialize as an empty array
    category: [], // Initialize as an empty array
    isNotificationEnabled: false,
    isEmployed: false,
    isEmailEnabled: false, // Corrected property name
    experience: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form values:', values);
    addProfileDetails(values);
    setTimeout(() => {
      navigate("/");
    }, 2000)
  };

  const onCategorySelect = (selectedList) => {
    setValues((prevState) => ({
      ...prevState,
      category: selectedList.map(item => item.title), // Update the category array to strings
    }));
  };

  const onCategoryRemove = (selectedList) => {
    setValues((prevState) => ({
      ...prevState,
      category: selectedList.map(item => item.title), // Update the category array to strings
    }));
  };

  const onLocationSelect = (selectedList) => {
    setValues((prevState) => ({
      ...prevState,
      location: selectedList.map(item => item.title), // Update the location array to strings
    }));
  };

  const onLocationRemove = (selectedList) => {
    setValues((prevState) => ({
      ...prevState,
      location: selectedList.map(item => item.title), // Update the location array to strings
    }));
  };

  const categoryOptions = sections?.map((category) => ({ title: category?.title }));
  const locationOptions = locations?.map((location) => ({ title: location?.title }));

  return (
    <>
      <div className="container-fluid">
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="" className="h6">
              How many years of experience do you have?
            </label>
            <select
              className="form-input"
              name="experience"
              value={values.experience}
              onChange={handleChange}
            >
              <option value="">choose options</option>
              {experienceLevel?.map((exp, idx) => (
                <option key={idx} value={exp?.title}>
                  {exp?.title}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="" className="h6">
              Choose your preferred job locations
            </label>
            <Multiselect
              options={locationOptions}
              selectedValues={locationOptions.filter(option => values.location.includes(option.title))} // Corrected selected values
              onSelect={onLocationSelect}
              onRemove={onLocationRemove}
              displayValue="title"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="" className="h6">
              Choose your preferred job categories
            </label>
            <Multiselect
              options={categoryOptions}
              selectedValues={categoryOptions?.filter(option => values.category.includes(option.title))} // Corrected selected values
              onSelect={onCategorySelect}
              onRemove={onCategoryRemove}
              displayValue="title"
            />
          </div>
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="isEmailEnabled"
              id="flexCheckDefault"
              checked={values.isEmailEnabled}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Do you want to receive alerts on email
            </label>
          </div>
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="isEmployed"
              id="flexCheckDefault2"
              checked={values.isEmployed}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault2">
              Are you currently employed
            </label>
          </div>
          <div className="form-group mb-3">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EmployeeProfile;
