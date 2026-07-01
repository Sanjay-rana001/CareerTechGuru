import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ADD_CATEGORY_URL, fetchAllSectionsUrl, fetchSectionsByIdEndpoint } from '../../api/Api';
import { toast } from "react-hot-toast";

export const SectionContext = createContext();

const SectionContextProvider = ({ children }) => {
    const [sections, setSections] = useState();

    const addSectionData = async(data) =>  {
      try {
        const response = await axios.post(ADD_CATEGORY_URL, data);
        toast.success("section added successfully");
        return response;
      } catch (error) {
        console.log(error)
      }
    }
    
    const getAllSections = async() => {
        try {
            const response = await axios.get(fetchAllSectionsUrl);
            return response?.data
        } catch (error) {
            console.log(error);
        }
    }

    const getJobSectionById = async (id) => {
      try {
        const response = await axios.get(`${fetchSectionsByIdEndpoint}/${id}`);
        if (response) {
          return response?.data?.items;
        } else {
          console.log('Response data does not have an items property');
          return [];
        }
      } catch (error) {
        console.log(error);
        return [];
      }
    }
  return (
    <SectionContext.Provider value={{getAllSections, addSectionData, getJobSectionById }}>
      {children}
    </SectionContext.Provider>
  )
}

export default SectionContextProvider;