import React, { useEffect, useState } from "react";
import { GetCountries, GetState, GetCity } from "react-country-state-city";

const ProfileFormTwo = ({ prevStep, handleChange, handleSubmit }) => {
  const [countriesList, setCountriesList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    // Fetch countries
    GetCountries().then((result) => {
      setCountriesList(result);
    });
  }, []);

  useEffect(() => {
    // Fetch states when selected country changes
    if (selectedCountry) {
      GetState(selectedCountry.id).then((result) => {
        setStateList(result);
      });
    }
  }, [selectedCountry]);

  useEffect(() => {
    // Fetch cities when selected state changes
    if (selectedState) {
      GetCity(selectedCountry.id, selectedState.id).then((result) => {
        setCityList(result);
      });
    }
  }, [selectedState]);

  const handleCountryChange = (e) => {
    const selectedCountry = countriesList.find(
      (country) => country.name === e.target.value,
    );
    setSelectedCountry(selectedCountry);
    handleChange("country")(e); // Capture selected country
  };

  const handleStateChange = (e) => {
    const selectedState = stateList.find(
      (state) => state.name === e.target.value,
    );
    setSelectedState(selectedState);
    handleChange("state")(e); // Capture selected state
  };

  const handleCityChange = (e) => {
    const selectedCity = cityList?.find(
      (state) => state.name === e.target.value,
    );
    setSelectedCity(selectedCity);
    handleChange("city")(e); // Capture selected state
  };

  return (
    <>
      <div className="container-fluid">
        <div className="container-sm py-3">
          <h4 className="text-primary text-2xl">Add company basic details</h4>
          <div className="row py-3">
            <div className="col-lg-11">
              <div className="row items-start justify-start mb-3">
                <div className="col-3">
                  <label className="text-[14px]" htmlFor="numberOfEmployee">
                    Number of Employees <sup className="text-danger">*</sup>
                  </label>
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="companyName"
                    onChange={handleChange("numberOfEmployee")}
                    className="form-input text-[14px] rounded-sm"
                    placeholder="Enter job title"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-3">
                  <label htmlFor="country" className="text-[14px]">
                    Country <sup className="text-danger">*</sup>
                  </label>
                </div>
                <div className="col">
                  <select className="form-input" onChange={handleCountryChange}>
                    <option value="">Choose country</option>
                    {countriesList.map((country, idx) => (
                      <option key={idx} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-3">
                  <label htmlFor="state" className="text-[14px]">
                    State <sup className="text-danger">*</sup>
                  </label>
                </div>
                <div className="col">
                  <select className="form-input" onChange={handleStateChange}>
                    <option value="">Choose state</option>
                    {stateList.map((state, idx) => (
                      <option key={idx} value={state.name}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-3">
                  <label htmlFor="city" className="text-[14px]">
                    City <sup className="text-danger">*</sup>
                  </label>
                </div>
                <div className="col">
                  <select className="form-input" onChange={handleCityChange}>
                    <option value="">Choose city</option>
                    {cityList.map((city, idx) => (
                      <option key={idx} value={city.name}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-3">
                  <label htmlFor="pincode" className="text-[14px]">
                    Pincode <sup className="text-danger">*</sup>
                  </label>
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="pincode"
                    onChange={handleChange("pincode")}
                    className="form-input text-[14px] rounded-sm"
                    placeholder="Enter pincode"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-3">
                  <label htmlFor="companyAddress" className="text-[14px]">
                    Company Address <sup className="text-danger">*</sup>
                  </label>
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="companyAddress"
                    onChange={handleChange("companyAddress")}
                    className="form-input text-[14px] rounded-sm"
                    placeholder="Enter company address"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-3">
                  <label htmlFor="startedAt" className="text-[14px]">
                    Company Start from <sup className="text-danger">*</sup>
                  </label>
                </div>
                <div className="col">
                  <input
                    type="date"
                    name="startedAt"
                    className="form-input"
                    onChange={handleChange("startedAt")}
                  />
                </div>
              </div>
              <div className="form-group flex items-center gap-3">
                <button
                  onClick={handleSubmit}
                  className="btn bg-prime w-25 text-light"
                >
                  Submit
                </button>
                <button
                  onClick={prevStep}
                  className="btn btn-secondary text-light w-25"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileFormTwo;
