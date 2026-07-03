import React, { createContext, useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";

export const SectionContext = createContext();

const SectionContextProvider = ({ children }) => {
  const [sections, setSections] = useState();

  const addSectionData = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "sections"), {
        ...data,
        createdAt: new Date().toISOString(),
      });
      toast.success("section added successfully");
      return { data: { id: docRef.id, ...data } };
    } catch (error) {
      console.log(error);
    }
  };

  const getAllSections = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "sections"));
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, _id: doc.id, ...doc.data() });
      });
      return { data: items };
    } catch (error) {
      console.log(error);
      return { data: [] };
    }
  };

  const getJobSectionById = async (id) => {
    try {
      const docSnap = await getDoc(doc(db, "sections", id));
      if (docSnap.exists()) {
        return [{ id: docSnap.id, _id: docSnap.id, ...docSnap.data() }];
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  return (
    <SectionContext.Provider
      value={{ getAllSections, addSectionData, getJobSectionById }}
    >
      {children}
    </SectionContext.Provider>
  );
};

export default SectionContextProvider;
