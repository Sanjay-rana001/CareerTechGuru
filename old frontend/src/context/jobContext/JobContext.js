import React, { createContext, useEffect, useId, useState } from 'react';
import axios from 'axios';
import { DELETE_APPLICATION_BY_ID, FETCH_JOB_COMPANY, FETCH_JOB_SINGLE_DATA, SEARCH_APPLICATION_QUERY, addJobUrl, deleteProductById, fetchAllApplications, fetchAllProductByAdminId, fetchAllProductByUserId, fetchAllProducts, fetchApplicationByJobId } from '../../api/Api';
import { toast } from "react-hot-toast";
import { buildParams } from '../../utils/query/BuildQuery';

export const JobContext = createContext();

const JobContextProvider = ({ children }) => {
  
  const addJobData = async (data) => {
    const token = sessionStorage.getItem('token')
    try {
      const response = await axios.post(addJobUrl, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      toast.success("job added successfully");
      console.log('Response:', response?.data?.data);
      return response.data; // Return response data if needed
    } catch (error) {
      // Handle error appropriately
      console.error('Error adding job:', error.message);
      // You might want to throw the error to handle it in the calling component
      throw error;
    }
  };
  const getAllApplications = async () => {
    try {
      const response = await axios.get(fetchAllApplications);
      const data = response?.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getApplicationsByAdminId = async (adminID) => {
    try {
      const token = sessionStorage.getItem('token'); // Replace with your actual token
      const response = await axios.get(`${fetchAllProductByAdminId}/${adminID}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = response?.data?.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getApplicationsByJobId = async (id) => {
    try {
      const response = await axios.get(`${fetchApplicationByJobId}/${id}`);
      const data = response?.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteJobById = async (id) => {
    try {
      const token = sessionStorage.getItem('token'); // Replace with your actual token
      const response = await axios.delete(`${DELETE_APPLICATION_BY_ID}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      toast.success("deleted successfully")
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  const searchJobQuery = async (params) => {
    try {
      console.log(`${SEARCH_APPLICATION_QUERY}?${params}`)
      const response = await axios.get(`${SEARCH_APPLICATION_QUERY}?${params}`);
      return response.data;
    } catch (error) {
      console.error("Error searching jobs:", error.message);
      throw error;
    }
  };

  const getCompanyList = async () => {
    try {
      const response = await axios.get(FETCH_JOB_COMPANY);
      return response.data;
    } catch (error) {
      console.error('Error fetching company list:', error);
      return [];
    }
  };

  const getJobSingleDetail = async () => {
    try {
      const response = await axios.get(FETCH_JOB_SINGLE_DATA);
      return response;  // Return only the data part of the response
    } catch (error) {
      console.error('Error fetching job single detail:', error);
      throw error;  // Re-throw the error to handle it further up the call stack
    }
  }
  return (
    <JobContext.Provider value={{ 
      addJobData,
      getAllApplications, 
      getApplicationsByAdminId, 
      deleteJobById, 
      getApplicationsByJobId,
      searchJobQuery,
      getCompanyList,
      getJobSingleDetail
       }}>
      {children}
    </JobContext.Provider>
  )
}

export default JobContextProvider;