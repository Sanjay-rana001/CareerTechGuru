import React, { createContext, useEffect } from "react";
import { db, auth } from "../../firebase";
import {
  doc,
  setDoc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  limit,
  orderBy,
  startAfter,
} from "firebase/firestore";
import toast from "react-hot-toast";

export const AdminContext = createContext();

const AdminContextProvider = ({ children }) => {
  const user = JSON.parse(sessionStorage.getItem("data"));

  // Function to add admin profile details
  const addAdminProfleDetail = async (data) => {
    try {
      const currentUser = auth.currentUser;
      if (!currentUser) return;

      await setDoc(
        doc(db, "profiles", currentUser.uid),
        {
          ...data,
          updatedAt: new Date().toISOString(),
        },
        { merge: true },
      );
      toast.success("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile. Please try again.");
    }
  };

  // Function to get admin details by admin ID
  const getAdminsDetailsByAdminId = async (adminId) => {
    try {
      const docSnap = await getDoc(doc(db, "profiles", adminId));
      return docSnap;
    } catch (error) {
      console.error("Error fetching admin details:", error);
      throw error;
    }
  };

  // Function to get candidate details by user ID
  const getCandidateDetails = async (userId) => {
    try {
      const docSnap = await getDoc(doc(db, "users", userId));
      return { data: docSnap.data() };
    } catch (error) {
      console.error("Error fetching candidate details:", error);
      return { data: null };
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

      const appRef = doc(
        db,
        "applications",
        `${currentUser.uid}_${data.jobId}`,
      );
      const docSnap = await getDoc(appRef);
      if (docSnap.exists()) {
        toast.error(
          "You have already applied for this job. Please wait for a response.",
        );
        return;
      }

      await setDoc(appRef, {
        userId: currentUser.uid,
        jobId: data.jobId,
        sellerId: data.sellerId || data.postedBy || "anonymous",
        appliedAt: new Date().toISOString(),
        status: "pending",
        ...data,
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

      const q = query(
        collection(db, "applications"),
        where("userId", "==", currentUser.uid),
      );
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

      const q = query(
        collection(db, "applications"),
        where("sellerId", "==", currentUser.uid),
      );
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

  // Function to get all registered users (CMS User Management)
  const getGlobalUsers = async (lastVisible = null, limitCount = 20) => {
    try {
      // Assuming users collection doesn't have createdAt reliably, we can just paginate by document ID or a specific field.
      // Firestore requires an orderBy to use startAfter. We'll use email as a reliable alphabetical sort.
      let q = query(
        collection(db, "users"),
        orderBy("email"),
        limit(limitCount),
      );

      if (lastVisible) {
        q = query(
          collection(db, "users"),
          orderBy("email"),
          startAfter(lastVisible),
          limit(limitCount),
        );
      }

      const querySnapshot = await getDocs(q);
      const allUsers = [];
      querySnapshot.forEach((doc) => {
        allUsers.push({ id: doc.id, ...doc.data() });
      });

      const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];

      return { data: allUsers, lastDoc };
    } catch (error) {
      console.error("Error fetching global users:", error);
      return { data: [], lastDoc: null };
    }
  };

  // Fetch initial data when the component mounts
  useEffect(() => {
    if (user && user._id) {
      getApplicationByUserId().catch((error) =>
        console.error("Error in useEffect:", error),
      );
      getApplicationBySellerId().catch((error) =>
        console.error("Error in useEffect:", error),
      );
    }
  }, [user]);

  return (
    <AdminContext.Provider
      value={{
        getAdminsDetailsByAdminId,
        addAdminProfleDetail,
        createJobApplication,
        getCandidateDetails,
        getApplicationByUserId,
        getApplicationBySellerId,
        getGlobalUsers,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
