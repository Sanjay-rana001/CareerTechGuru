import React, { useEffect, useState } from "react";
import { GetCountries, GetState, GetCity } from "react-country-state-city";
import Select from "react-select";

const ProfileFormTwo = ({ prevStep, handleChange, handleSubmit, values }) => {
  const [countriesList, setCountriesList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);

  useEffect(() => {
    GetCountries().then((result) => {
      setCountriesList(result.map(c => ({ value: c.name, label: c.name, id: c.id })));
    });
  }, []);

  useEffect(() => {
    const selectedCountry = countriesList.find(c => c.value === values?.country);
    if (selectedCountry) {
      GetState(selectedCountry.id).then((result) => {
        setStateList(result.map(s => ({ value: s.name, label: s.name, id: s.id })));
      });
    } else {
      setStateList([]);
    }
  }, [values?.country, countriesList]);

  useEffect(() => {
    const selectedCountry = countriesList.find(c => c.value === values?.country);
    const selectedState = stateList.find(s => s.value === values?.state);
    if (selectedCountry && selectedState) {
      GetCity(selectedCountry.id, selectedState.id).then((result) => {
        setCityList(result.map(city => ({ value: city.name, label: city.name, id: city.id })));
      });
    } else {
      setCityList([]);
    }
  }, [values?.state, stateList, countriesList, values?.country]);

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
          <h4 className="text-2xl font-bold text-white mb-0">Company Location & Size</h4>
          <p className="text-blue-100 mt-1 text-sm mb-0">Step 2 of 2: Finalize your employer profile</p>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div>
              <label htmlFor="numberOfEmployee" className="block text-sm font-semibold text-gray-700 mb-2">Number of Employees <span className="text-red-500">*</span></label>
              <input type="text" onChange={handleChange("numberOfEmployee")} value={values?.numberOfEmployee || ''} placeholder="e.g. 50-100" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none" />
            </div>

            <div>
              <label htmlFor="startedAt" className="block text-sm font-semibold text-gray-700 mb-2">Company Started From <span className="text-red-500">*</span></label>
              <input type="date" onChange={handleChange("startedAt")} value={values?.startedAt || ''} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none" />
            </div>

            <div className="text-sm">
              <label htmlFor="country" className="block font-semibold text-gray-700 mb-2">Country <span className="text-red-500">*</span></label>
              <Select 
                options={countriesList} 
                value={countriesList.find(opt => opt.value === values?.country) || null} 
                onChange={(option) => handleChange("country")({ target: { value: option?.value || "" } })} 
                isClearable 
                placeholder="Select country..." 
              />
            </div>

            <div className="text-sm">
              <label htmlFor="state" className="block font-semibold text-gray-700 mb-2">State <span className="text-red-500">*</span></label>
              <Select 
                options={stateList} 
                value={stateList.find(opt => opt.value === values?.state) || null} 
                onChange={(option) => handleChange("state")({ target: { value: option?.value || "" } })} 
                isClearable 
                placeholder="Select state..." 
                isDisabled={!values?.country}
              />
            </div>

            <div className="text-sm">
              <label htmlFor="city" className="block font-semibold text-gray-700 mb-2">City <span className="text-red-500">*</span></label>
              <Select 
                options={cityList} 
                value={cityList.find(opt => opt.value === values?.city) || null} 
                onChange={(option) => handleChange("city")({ target: { value: option?.value || "" } })} 
                isClearable 
                placeholder="Select city..." 
                isDisabled={!values?.state}
              />
            </div>

            <div>
              <label htmlFor="pincode" className="block text-sm font-semibold text-gray-700 mb-2">Pincode <span className="text-red-500">*</span></label>
              <input type="text" onChange={handleChange("pincode")} value={values?.pincode || ''} placeholder="e.g. 110001" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none" />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="companyAddress" className="block text-sm font-semibold text-gray-700 mb-2">Complete Address <span className="text-red-500">*</span></label>
              <input type="text" onChange={handleChange("companyAddress")} value={values?.companyAddress || ''} placeholder="Street, Building No, Landmark" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none" />
            </div>

          </div>
        </div>

        <div className="bg-gray-50 px-8 py-5 border-t border-gray-100 flex items-center justify-between">
          <button
            onClick={(e) => { e.preventDefault(); prevStep(); }}
            className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium transition-all"
          >
            Back
          </button>
          <button
            onClick={handleSubmit}
            className="px-8 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-sm shadow-blue-200 transition-all"
          >
            Submit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileFormTwo;
