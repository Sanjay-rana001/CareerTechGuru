import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import {
  CREATE_ADMIN_PROFILE_URL,
  GET_ADMIN_DETAILS_BY_ADMINID_URL,
  SA_CANDIDATE_DATA_URL,
  createJobApplicationAPI,
  fetchEmployeeApplicationById,
  fetchJobApplicationBySellerIdAPI,
  fetchJobApplicationByUserIdAPI
} from '../../api/Api';
import toast from 'react-hot-toast';

export const AdminContext = createContext();

const AdminContextProvider = ({ children }) => {
  const user = JSON.parse(sessionStorage.getItem('data'));
  const token = sessionStorage.getItem('token');

  // Function to add admin profile details
  const addAdminProfleDetail = async (data) => {
    try {
      const response = await axios.post(CREATE_ADMIN_PROFILE_URL, data, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      toast.success("Profile updated successfully");
      return response;
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error("Failed to update profile. Please try again.");
    }
  };

  // Function to get admin details by admin ID
  const getAdminsDetailsByAdminId = async (adminId) => {
    try {
      const response = await axios.get(`${GET_ADMIN_DETAILS_BY_ADMINID_URL}/${adminId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response;
    } catch (error) {
      console.error('Error fetching admin details:', error);
      throw error;  // Rethrow the error to handle it in the calling function
    }
  };

  // Function to create a job application
  const createJobApplication = async (data) => {
    try {
      const response = await axios.post(createJobApplicationAPI, data);
      toast.success("Applied successfully");
      return response;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        // Check for 409 status code specifically
        if (error.response.status === 409) {
          toast.error("You have already applied for this job. Please wait for a response.");
          return;  // Return early to avoid re-throwing the error
        }
        // Handle other API errors
        toast.error(error.response.data?.message || "Failed to apply for the job. Please try again.");
      } else {
        // Handle non-Axios errors
        console.error("Error creating job application:", error);
        toast.error("An unexpected error occurred. Please try again.");
        throw error;  // Re-throw the error if needed elsewhere
      }
    }
  };

  // Function to get job applications by user ID
  const getApplicationByUserId = async () => {
    try {
      if (!user || !user._id) {
        console.error('User ID is undefined.');
        return;
      }
      const response = await axios.get(`${fetchJobApplicationByUserIdAPI}/${user._id}`);
      return response;
    } catch (error) {
      console.error("Error fetching job application by user ID:", error);
      throw error;  // Re-throw the error if needed elsewhere
    }
  };

  // Function to get job applications by seller ID
  const getApplicationBySellerId = async () => {
    try {
      if (!user || !user._id) {
        console.error('User ID is undefined.');
        return;
      }
      const response = await axios.get(`${fetchJobApplicationBySellerIdAPI}/${user._id}`);
      return response;
    } catch (error) {
      console.error("Error fetching job application by seller ID:", error);
      throw error;  // Re-throw the error if needed elsewhere
    }
  };

  // Function to get candidates data for ESPS
  const getCadidatesDataESPS = async () => {
    try {
      const response = await axios.get(SA_CANDIDATE_DATA_URL);
      return response;
    } catch (error) {
      console.error('Error fetching candidates data:', error);
    }
  };

  // Fetch initial data when the component mounts
  useEffect(() => {
    if (user && user._id) {
      getApplicationByUserId().catch(error => console.error("Error in useEffect:", error));
      getApplicationBySellerId().catch(error => console.error("Error in useEffect:", error));
    }
  }, [user]);

  return (
    <AdminContext.Provider value={{
      getAdminsDetailsByAdminId,
      addAdminProfleDetail,
      createJobApplication,
      getApplicationByUserId,
      getApplicationBySellerId,
      getCadidatesDataESPS
    }}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
