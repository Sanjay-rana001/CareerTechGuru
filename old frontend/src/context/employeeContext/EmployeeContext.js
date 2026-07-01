import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { ADD_EMPLOYEE_PROFILE_URL, GET_EMPLOYEE_DETAILS, UPDATE_PROFILE_URL } from '../../api/Api';

export const EmployeeContext = createContext();

const EmployeeContextProvider = ({ children }) => {
  const createUserProfile = async (data) => {
    const token = sessionStorage.getItem('token');
    console.log("this is token", token)
    if (!token) {
      toast.error("No token found. Please login again.");
      return;
    }
  
    try {
      const response = await axios.post(ADD_EMPLOYEE_PROFILE_URL, data, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json' // Ensure the content type is set
        }
      });
      toast.success("Data added successfully");
      console.log("Response:", response);
      return response?.data;
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        console.log("Error response:", error.response.data);
        toast.error(`Error: ${error.response.data.message}`);
      } else if (error.request) {
        // Request was made but no response was received
        console.log("Error request:", error.request);
        toast.error("No response from the server. Please try again later.");
      } else {
        // Something else happened while setting up the request
        console.log("Error message:", error.message);
        toast.error(`Error: ${error.message}`);
      }
    }
  };

  const getEmployeeProfile = async(email) => {
    try {
      const response = await axios.get(`${GET_EMPLOYEE_DETAILS}/${email}`);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  const updateEmployeeDetails = async(email, data) => {
    console.log("data",data)
    try {
      const response = await axios.patch(`${UPDATE_PROFILE_URL}/${email}`, data)
      console.log("updated",response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <EmployeeContext.Provider value={{
      createUserProfile,
      getEmployeeProfile,
      updateEmployeeDetails 
    }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContextProvider;
