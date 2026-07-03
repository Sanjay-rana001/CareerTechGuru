import React, { createContext, useState, useEffect, useContext } from "react";
import { db } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";

export const BrandContext = createContext();

const defaultSettings = {
  appName: "YourJobBoard",
  companyName: "Your Company Ltd.",
  logoTextPrimary: "Your",
  logoTextSecondary: "JobBoard",
  contactEmail: "info@yourcompany.com",
  contactWebsite: "https://yourcompany.com",
  contactPhone: "+1 (555) 123-4567",
  contactAddress: "123 Business Avenue, Tech City",
  aboutUsHeroHeading: "is where the world of business meets their goal",
  aboutUsDescription: "YourCompany, at its core, is transforming how businesses operate on a day-to-day basis. Our professionals outshine conventional roles, blending cognitive capabilities for 24/7 productivity without compromise.",
  metaDescription: "Find your dream job with YourJobBoard.",
};

export const BrandContextProvider = ({ children }) => {
  const [siteConfig, setSiteConfig] = useState(defaultSettings);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBrandSettings = async () => {
      try {
        const docRef = doc(db, "settings", "brandConfig");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setSiteConfig({ ...defaultSettings, ...docSnap.data() });
        } else {
          // If no config exists, set the default one in the database
          await setDoc(docRef, defaultSettings);
          setSiteConfig(defaultSettings);
        }
      } catch (error) {
        console.error("Error fetching brand settings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBrandSettings();
  }, []);

  const updateBrandConfig = async (newConfig) => {
    try {
      const docRef = doc(db, "settings", "brandConfig");
      await setDoc(docRef, newConfig, { merge: true });
      setSiteConfig({ ...siteConfig, ...newConfig });
      toast.success("Brand settings updated successfully!");
    } catch (error) {
      console.error("Error updating brand settings:", error);
      toast.error("Failed to update brand settings.");
    }
  };

  return (
    <BrandContext.Provider value={{ siteConfig, updateBrandConfig, loading }}>
      {!loading ? children : null}
    </BrandContext.Provider>
  );
};

export const useBrandContext = () => {
  const context = useContext(BrandContext);
  if (!context) {
    throw new Error("useBrandContext must be used within a BrandContextProvider");
  }
  return context;
};
