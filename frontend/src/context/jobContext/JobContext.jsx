import React, { createContext } from "react";
import { db, auth } from "../../firebase";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  deleteDoc,
  query,
  where,
  limit,
  orderBy,
  startAfter,
  getCountFromServer,
} from "firebase/firestore";
import { toast } from "react-hot-toast";

export const JobContext = createContext();

const JobContextProvider = ({ children }) => {
  const addJobData = async (data) => {
    try {
      const user = auth.currentUser;
      const jobData = {
        ...data,
        postedBy: user ? user.uid : "anonymous",
        createdAt: new Date().toISOString(),
      };
      const docRef = await addDoc(collection(db, "jobs"), jobData);
      toast.success("Job added successfully");
      return { id: docRef.id, ...jobData };
    } catch (error) {
      console.error("Error adding job:", error.message);
      throw error;
    }
  };

  const getAllApplications = async (lastVisible = null, limitCount = 20) => {
    try {
      let q = query(
        collection(db, "jobs"),
        orderBy("createdAt", "desc"),
        limit(limitCount),
      );
      if (lastVisible) {
        q = query(
          collection(db, "jobs"),
          orderBy("createdAt", "desc"),
          startAfter(lastVisible),
          limit(limitCount),
        );
      }
      const querySnapshot = await getDocs(q);
      const jobs = [];
      querySnapshot.forEach((doc) => {
        jobs.push({ _id: doc.id, id: doc.id, ...doc.data() });
      });
      const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
      return { data: jobs, lastDoc };
    } catch (error) {
      console.error("Error fetching all applications/jobs:", error);
      return { data: [], lastDoc: null };
    }
  };

  const getApplicationsByAdminId = async (adminID) => {
    try {
      const q = query(collection(db, "jobs"), where("postedBy", "==", adminID));
      const querySnapshot = await getDocs(q);
      const jobs = [];
      querySnapshot.forEach((doc) => {
        jobs.push({ _id: doc.id, id: doc.id, ...doc.data() });
      });
      return jobs;
    } catch (error) {
      console.error("Error fetching jobs by admin ID:", error);
      return [];
    }
  };

  const getApplicationsByJobId = async (id) => {
    try {
      const q = query(collection(db, "applications"), where("jobId", "==", id));
      const querySnapshot = await getDocs(q);
      const apps = [];
      querySnapshot.forEach((doc) => {
        apps.push({ id: doc.id, ...doc.data() });
      });
      return { data: apps };
    } catch (error) {
      console.error("Error fetching applications by job ID:", error);
      return { data: [] };
    }
  };

  const deleteJobById = async (id) => {
    try {
      await deleteDoc(doc(db, "jobs", id));
      toast.success("Deleted successfully");
      return { status: 200 };
    } catch (error) {
      console.error("Error deleting job:", error);
      return null;
    }
  };

  const searchJobQuery = async (
    paramsString,
    lastVisible = null,
    limitCount = 20,
  ) => {
    try {
      const params = new URLSearchParams(paramsString);
      const constraints = [];

      const category = params.get("category");
      const location = params.get("jobLocation");
      const experience = params.get("experience");

      if (category) constraints.push(where("category", "==", category));
      if (location) constraints.push(where("location", "==", location));
      if (experience) constraints.push(where("experience", "==", experience));

      // Get the total count quickly without fetching documents
      let countQuery = query(collection(db, "jobs"), ...constraints);
      const snapshotCount = await getCountFromServer(countQuery);
      const totalCount = snapshotCount.data().count;

      // Now fetch the paginated data
      let q = query(
        collection(db, "jobs"),
        ...constraints,
        orderBy("createdAt", "desc"),
        limit(limitCount),
      );

      if (lastVisible) {
        q = query(
          collection(db, "jobs"),
          ...constraints,
          orderBy("createdAt", "desc"),
          startAfter(lastVisible),
          limit(limitCount),
        );
      }

      const querySnapshot = await getDocs(q);
      const jobs = [];
      querySnapshot.forEach((doc) => {
        jobs.push({ _id: doc.id, id: doc.id, ...doc.data() });
      });

      const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];

      return { data: jobs, lastDoc, totalCount };
    } catch (error) {
      console.error("Error searching jobs:", error.message);
      return { data: [], lastDoc: null, totalCount: 0 };
    }
  };

  const getCompanyList = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "jobs"));
      const companies = new Map();
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.company && !companies.has(data.company)) {
          companies.set(data.company, {
            id: data.company,
            label: data.company,
            value: data.company,
            profilePicture: data.profilePicture || "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
          });
        }
      });
      return Array.from(companies.values());
    } catch (error) {
      console.error("Error fetching company list:", error);
      return [];
    }
  };

  const getJobSingleDetail = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "jobs"));
      const locations = new Set();
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.location) {
          locations.add(data.location);
        }
      });
      const uniqueLocations = Array.from(locations).map((loc) => ({
        label: loc,
        value: loc,
      }));
      return { data: uniqueLocations };
    } catch (error) {
      console.error("Error fetching job single detail (locations):", error);
      return { data: [] };
    }
  };

  return (
    <JobContext.Provider
      value={{
        addJobData,
        getAllApplications,
        getApplicationsByAdminId,
        deleteJobById,
        getApplicationsByJobId,
        searchJobQuery,
        getCompanyList,
        getJobSingleDetail,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export default JobContextProvider;
