import React, { createContext } from "react";
import { db, auth } from "../../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import toast from "react-hot-toast";

export const EmployeeContext = createContext();

const EmployeeContextProvider = ({ children }) => {
  const createUserProfile = async (data) => {
    try {
      const user = auth.currentUser;
      if (!user) {
        toast.error("No logged in user found. Please login again.");
        return;
      }

      await setDoc(doc(db, "profiles", data.email || user.email), {
        uid: user.uid,
        ...data,
        createdAt: new Date().toISOString(),
      });
      toast.success("Data added successfully");
      return { uid: user.uid, ...data };
    } catch (error) {
      console.error("Error creating profile:", error);
      toast.error(`Error: ${error.message}`);
    }
  };

  const getEmployeeProfile = async (email) => {
    try {
      const docSnap = await getDoc(doc(db, "profiles", email));
      if (docSnap.exists()) {
        return { data: docSnap.data() };
      }
      return { data: null };
    } catch (error) {
      console.error("Error getting profile:", error);
      return { data: null };
    }
  };

  const updateEmployeeDetails = async (email, data) => {
    try {
      await setDoc(doc(db, "profiles", email), data, { merge: true });
      toast.success("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <EmployeeContext.Provider
      value={{
        createUserProfile,
        getEmployeeProfile,
        updateEmployeeDetails,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContextProvider;
