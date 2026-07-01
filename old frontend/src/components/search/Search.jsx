import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useJobContext, useSearchContext } from '../../context';

const Search = ({ categories }) => {
  const { setSearchResult } = useSearchContext();
  const { searchJobQuery, getJobSingleDetail } = useJobContext();

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [locations, setLocations] = useState([]);
  const [category, setCategory] = useState(searchParams.get('category') || '');
  const [location, setLocation] = useState(searchParams.get('jobLocation') || '');
  const [experience, setExperience] = useState(searchParams.get('experience') || '');

  const fetchJobLocations = async () => {
    try {
      const result = await getJobSingleDetail();
      setLocations(result?.data || []);
    } catch (error) {
      console.error('Error fetching job locations:', error);
    }
  };

  const fetchInitialJobs = async () => {
    try {
      const queryString = searchParams.toString();
      const result = await searchJobQuery(queryString);
      setSearchResult(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchJobLocations();
    fetchInitialJobs();
  }, [searchJobQuery, setSearchResult]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (category) params.append('category', category);
    if (location) params.append('jobLocation', location);
    if (experience) params.append('experience', experience);
    setSearchParams(params);
  }, [category, location, experience, setSearchParams]);

  const categoryOptions = categories?.map(category => ({
    value: category?._id,
    label: category?.title,
  })) || [];

  const locationOptions = locations?.map(loc => ({
    value: loc,
    label: loc
  })) || [];

  const experienceOptions = [
    { value: 'fresher', label: 'Fresher' },
    { value: '1 - 2 years', label: '1 - 2 years' },
    { value: '3 - 5 years', label: '3 - 5 years' },
    { value: '5+ years', label: '5+ years' },
  ];

  const handleSearch = async () => {
    try {
      const params = new URLSearchParams();
      if (category) params.append('category', category);
      if (location) params.append('jobLocation', location);
      if (experience) params.append('experience', experience);
      const queryString = params.toString();
      const result = await searchJobQuery(queryString);
      setSearchResult(result);
      navigate('/view-jobs?' + queryString, { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  const handleClear = () => {
    setCategory('');
    setLocation('');
    setExperience('');
    setSearchParams(new URLSearchParams());
  };

  // Custom react-select styles to match our clean Internshala-like design system
  const customSelectStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: '8px',
      borderColor: state.isFocused ? '#2563EB' : '#CBD5E1',
      boxShadow: state.isFocused ? '0 0 0 1px #2563EB' : 'none',
      '&:hover': {
        borderColor: state.isFocused ? '#2563EB' : '#94A3B8',
      },
      padding: '2px',
      fontSize: '14px',
      backgroundColor: '#FFFFFF',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected 
        ? '#2563EB' 
        : state.isFocused 
        ? '#EFF6FF' 
        : '#FFFFFF',
      color: state.isSelected ? '#FFFFFF' : '#1E293B',
      fontSize: '14px',
      cursor: 'pointer',
    }),
  };

  return (
    <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm my-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Category Selector */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="category" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Category
          </label>
          <Select
            options={categoryOptions}
            value={categoryOptions?.find(option => option?.value === category) || null}
            onChange={(selectedOption) => setCategory(selectedOption?.value || '')}
            isClearable
            styles={customSelectStyles}
            placeholder="Select category..."
          />
        </div>

        {/* Location Selector */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="location" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Location
          </label>
          <Select
            options={locationOptions}
            value={locationOptions?.find(option => option?.value === location) || null}
            onChange={(selectedOption) => setLocation(selectedOption?.value || '')}
            isClearable
            styles={customSelectStyles}
            placeholder="Select location..."
          />
        </div>

        {/* Experience Selector */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="experience" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Experience
          </label>
          <Select
            options={experienceOptions}
            value={experienceOptions?.find(option => option?.value === experience) || null}
            onChange={(selectedOption) => setExperience(selectedOption?.value || '')}
            isClearable
            styles={customSelectStyles}
            placeholder="Select experience..."
          />
        </div>
      </div>

      <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-slate-100">
        <button 
          onClick={handleClear} 
          className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-sm rounded-lg border-0 transition-colors"
        >
          Clear Filters
        </button>
        <button 
          onClick={handleSearch} 
          className="px-6 py-2.5 bg-[#2563EB] hover:bg-blue-700 text-white font-medium text-sm rounded-lg border-0 shadow-sm transition-colors"
        >
          Apply Search
        </button>
      </div>
    </div>
  );
};

export default Search;
