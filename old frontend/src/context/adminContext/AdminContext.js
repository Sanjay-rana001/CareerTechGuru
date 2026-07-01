import React, { createContext, useEffect } from 'react';
import { db, auth } from '../../firebase';
import { 
  doc, 
  setDoc, 
  getDoc, 
  collection, 
  query, 
  where, 
  getDocs 
} from 'firebase/firestore';
import toast from 'react-hot-toast';

export const AdminContext = createContext();

const AdminContextProvider = ({ children }) => {
  const user = JSON.parse(sessionStorage.getItem('data'));

  // Function to add admin profile details
  const addAdminProfleDetail = async (data) => {
    try {
      const currentUser = auth.currentUser;
      if (!currentUser) return;
      
      await setDoc(doc(db, "profiles", currentUser.uid), {
        ...data,
        updatedAt: new Date().toISOString()
      }, { merge: true });
      toast.success("Profile updated successfully");
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error("Failed to update profile. Please try again.");
    }
  };

  // Function to get admin details by admin ID
  const getAdminsDetailsByAdminId = async (adminId) => {
    try {
      const docSnap = await getDoc(doc(db, "profiles", adminId));
      return docSnap;
    } catch (error) {
      console.error('Error fetching admin details:', error);
      throw error;
    }
  };

  // Function to create a job application
  const createJobApplication = async (data) => {
    try {
      const currentUser = auth.currentUser;
      if (!currentUser) {
        toast.error("Please login to apply.");
        return;
      }
      
      const appRef = doc(db, "applications", `${currentUser.uid}_${data.jobId}`);
      const docSnap = await getDoc(appRef);
      if (docSnap.exists()) {
        toast.error("You have already applied for this job. Please wait for a response.");
        return;
      }

      await setDoc(appRef, {
        userId: currentUser.uid,
        jobId: data.jobId,
        sellerId: data.sellerId || data.postedBy || 'anonymous',
        appliedAt: new Date().toISOString(),
        status: "pending",
        ...data
      });

      toast.success("Applied successfully");
      return { status: 200 };
    } catch (error) {
      console.error("Error creating job application:", error);
      toast.error("Failed to apply for the job. Please try again.");
    }
  };

  // Function to get job applications by user ID
  const getApplicationByUserId = async () => {
    try {
      const currentUser = auth.currentUser;
      if (!currentUser) return { data: [] };

      const q = query(collection(db, "applications"), where("userId", "==", currentUser.uid));
      const querySnapshot = await getDocs(q);
      const apps = [];
      querySnapshot.forEach((doc) => {
        apps.push({ id: doc.id, ...doc.data() });
      });
      return { data: apps };
    } catch (error) {
      console.error("Error fetching job application by user ID:", error);
      return { data: [] };
    }
  };

  // Function to get job applications by seller ID
  const getApplicationBySellerId = async () => {
    try {
      const currentUser = auth.currentUser;
      if (!currentUser) return { data: [] };

      const q = query(collection(db, "applications"), where("sellerId", "==", currentUser.uid));
      const querySnapshot = await getDocs(q);
      const apps = [];
      querySnapshot.forEach((doc) => {
        apps.push({ id: doc.id, ...doc.data() });
      });
      return { data: apps };
    } catch (error) {
      console.error("Error fetching job application by seller ID:", error);
      return { data: [] };
    }
  };

  // Function to get candidates data for ESPS
  const getCadidatesDataESPS = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "profiles"));
      const candidates = [];
      querySnapshot.forEach((doc) => {
        candidates.push({ id: doc.id, ...doc.data() });
      });
      return { data: candidates };
    } catch (error) {
      console.error('Error fetching candidates data:', error);
      return { data: [] };
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
