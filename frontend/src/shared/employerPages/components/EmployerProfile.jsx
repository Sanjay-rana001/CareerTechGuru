import React, { useEffect, useState, useRef } from "react";
import { useAdminContext } from "../../../context";
import { CircularLoader } from "../../../components";
import { FaLinkedin, FaEnvelope, FaPhone, FaLink } from "react-icons/fa";
import UpdateInput from "../../../components/modal/UpdateInput";
import { ModalBox } from "../../../components";
import { Link } from "react-router-dom";
import EmployerProfileForm from "../EmployerProfileForm";
import { storage, db, auth } from "../../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const EmployerProfile = () => {
  const [openModal, setOpenModal] = useState(false);
  const [currentField, setCurrentField] = useState("");
  const [currentValue, setCurrentValue] = useState("");
  const { getAdminsDetailsByAdminId } = useAdminContext();
  const [data, setData] = useState([]);
  const user = JSON.parse(sessionStorage.getItem("data"));
  const [loading, setLoading] = useState(true);
  
  const profilePicInput = useRef(null);
  const [uploadingPic, setUploadingPic] = useState(false);

  const getAdminProfileDetails = async () => {
    try {
      const adminData = await getAdminsDetailsByAdminId(user?.id, "Employer");
      if (adminData) {
        setData(adminData);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleProfilePicChange = async (e) => {
    const picFile = e.target.files[0];
    if (!picFile) return;
    
    setUploadingPic(true);
    try {
      const currentUser = auth.currentUser;
      const adminId = user?.id || currentUser?.uid;
      if (!adminId) throw new Error("Employer ID not found");

      // Upload to Firebase Storage
      const storageRef = ref(storage, `profile_pictures/${adminId}/${picFile.name}`);
      const snapshot = await uploadBytes(storageRef, picFile);
      const downloadURL = await getDownloadURL(snapshot.ref);

      // Update in employers collection
      const employerRef = doc(db, "employers", adminId);
      await setDoc(employerRef, { profilePicture: downloadURL }, { merge: true });
      
      // Update in users collection as well
      await setDoc(doc(db, "users", adminId), { profilePictureUrl: downloadURL }, { merge: true });

      alert("Company logo updated successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error uploading logo:", error);
      alert("Failed to upload logo: " + error.message);
    } finally {
      setUploadingPic(false);
    }
  };

  const handleEditClick = (field, value) => {
    setCurrentField(field);
    setCurrentValue(value);
    setOpenModal(true);
  };

  const handleUpdate = (updatedData) => {
    console.log(`Updated ${updatedData.key}: ${updatedData.value}`);
    // Refetch or update state as necessary
    setOpenModal(false);
    window.location.reload();
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    getAdminProfileDetails();
  }, []);

  if (loading) {
    return <CircularLoader />;
  }

  return !data || data.length === 0 ? (
    <EmployerProfileForm />
  ) : (
    <div className="bg-slate-50 min-h-screen py-10 font-sans">
      <div className="max-w-4xl mx-auto px-4">
        {/* Profile Header */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 mb-6">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div 
                className="relative w-16 h-16 bg-slate-50 rounded-xl border border-slate-100 p-1 flex items-center justify-center overflow-hidden flex-shrink-0 cursor-pointer group"
                onClick={() => profilePicInput.current?.click()}
                title="Click to upload company logo"
              >
                {data?.profilePicture ? (
                  <img
                    src={data.profilePicture}
                    alt="Logo"
                    className={`max-h-full max-w-full object-contain ${uploadingPic ? 'opacity-50' : ''}`}
                  />
                ) : (
                  <span className="text-xs text-slate-300 font-bold uppercase">
                    {uploadingPic ? "..." : "LOGO"}
                  </span>
                )}
                
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-all">
                  <span className="text-white text-[10px] font-bold opacity-0 group-hover:opacity-100">
                    {uploadingPic ? "UPLOADING..." : "UPLOAD"}
                  </span>
                </div>
                <input 
                  type="file" 
                  ref={profilePicInput} 
                  onChange={handleProfilePicChange} 
                  className="hidden" 
                  accept="image/png, image/jpeg, image/jpg"
                />
              </div>
              <div className="space-y-1">
                <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
                  {data?.companyName}
                </h2>
                <p className="text-sm font-medium text-slate-500 mb-0 flex flex-wrap justify-center md:justify-start gap-2">
                  <span className="flex items-center gap-1">
                    <FaEnvelope className="text-slate-400" />
                    {data?.companyEmail}
                  </span>
                  <span className="text-slate-350">|</span>
                  <span className="flex items-center gap-1">
                    <FaPhone className="text-slate-400" />
                    {data?.companyContact}
                  </span>
                </p>
              </div>
            </div>

            {data?.companyWebsite && (
              <a
                href={data.companyWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-lg border-0 transition-colors inline-flex items-center gap-1.5 no-underline shadow-sm"
              >
                Visit Website <FaLink size={12} />
              </a>
            )}
          </div>
        </div>

        {/* Profile Details Cards */}
        <div className="space-y-6">
          {/* Basic details */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8">
            <h3 className="text-lg font-bold text-slate-800 pb-2 border-b border-slate-100 mb-6">
              Basic Detail
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                  Company Name
                  <button
                    onClick={() =>
                      handleEditClick("companyName", data?.companyName)
                    }
                    className="text-[#2563EB] hover:underline font-semibold text-xs border-0 bg-transparent cursor-pointer p-0"
                  >
                    edit
                  </button>
                </span>
                <span className="text-sm font-semibold text-slate-700 capitalize">
                  {data?.companyName}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                  No of Employee
                  <button
                    onClick={() =>
                      handleEditClick(
                        "numberOfEmployee",
                        data?.numberOfEmployee,
                      )
                    }
                    className="text-[#2563EB] hover:underline font-semibold text-xs border-0 bg-transparent cursor-pointer p-0"
                  >
                    edit
                  </button>
                </span>
                <span className="text-sm font-semibold text-slate-700 capitalize">
                  {data?.numberOfEmployee}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                  Email
                  <button
                    onClick={() =>
                      handleEditClick("companyEmail", data?.companyEmail)
                    }
                    className="text-[#2563EB] hover:underline font-semibold text-xs border-0 bg-transparent cursor-pointer p-0"
                  >
                    edit
                  </button>
                </span>
                <span className="text-sm font-semibold text-slate-700">
                  {data?.companyEmail}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                  Mobile
                  <button
                    onClick={() =>
                      handleEditClick("companyContact", data?.companyContact)
                    }
                    className="text-[#2563EB] hover:underline font-semibold text-xs border-0 bg-transparent cursor-pointer p-0"
                  >
                    edit
                  </button>
                </span>
                <span className="text-sm font-semibold text-slate-700 capitalize">
                  {data?.companyContact}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                  Website
                  <button
                    onClick={() =>
                      handleEditClick("companyWebsite", data?.companyWebsite)
                    }
                    className="text-[#2563EB] hover:underline font-semibold text-xs border-0 bg-transparent cursor-pointer p-0"
                  >
                    edit
                  </button>
                </span>
                <span className="text-sm font-semibold text-slate-700">
                  {data?.companyWebsite}
                </span>
              </div>

              <div className="flex flex-col gap-1 md:col-span-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                  Services
                  <button
                    onClick={() => handleEditClick("service", data?.service)}
                    className="text-[#2563EB] hover:underline font-semibold text-xs border-0 bg-transparent cursor-pointer p-0"
                  >
                    edit
                  </button>
                </span>
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {data?.service?.map((ser, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-semibold text-slate-600 border border-slate-200"
                    >
                      {ser}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {openModal && (
        <ModalBox closeModal={closeModal}>
          <UpdateInput
            title={currentField}
            field={currentField}
            onUpdate={handleUpdate}
          />
        </ModalBox>
      )}
    </div>
  );
};

export default EmployerProfile;
