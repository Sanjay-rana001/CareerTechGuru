import React, { useState, useRef } from 'react';
import { convertTimeIntoMMYYYY } from '../../../utils/dateFilter/DateFilter';
import { FaBook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { TbWorldWww  } from 'react-icons/tb';
import { VscLinkExternal } from 'react-icons/vsc';
import UpdateInput from '../../../components/modal/UpdateInput';
import { ModalBox } from '../../../components';
import { storage, db, auth } from '../../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';

const ProfilePage = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  const [currentField, setCurrentField] = useState('');
  const [currentValue, setCurrentValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [file, setFile] = useState(null);
  const fileInput = useRef(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
  
    if (!file) {
      setErrorMessage('Please select a file to upload.');
      return;
    }
  
    try {
      const currentUser = auth.currentUser;
      const userEmail = data?.email || (currentUser ? currentUser.email : null);
      if (!userEmail) {
        setErrorMessage('User email not found. Please log in again.');
        return;
      }

      // 1. Upload file to Firebase Storage under resumes/email/filename
      const storageRef = ref(storage, `resumes/${userEmail}/${file.name}`);
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);

      // 2. Update resumeUrl in the user's Firestore profile
      const profileRef = doc(db, "profiles", userEmail);
      await setDoc(profileRef, { resumeUrl: downloadURL }, { merge: true });

      setSuccessMessage('File uploaded successfully.');
      alert('File uploaded successfully.');
      window.location.reload();
    } catch (error) {
      console.error('Error uploading resume:', error);
      setErrorMessage('Error in setting up the request: ' + error.message);
    }
  };

  const handleEditClick = (field, value) => {
    setCurrentField(field);
    setCurrentValue(value);
    setOpenModal(true);
  };

  const handleUpdate = (updatedData) => {
    console.log(`Updated ${updatedData.key}: ${updatedData.value}`);
    setOpenModal(false);
    window.location.reload();
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 font-sans">
      <div className="max-w-4xl mx-auto px-4">
        {/* Main Profile Header Card */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 mb-6">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center text-center md:text-left">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-slate-800 tracking-tight">
                {data?.firstName} {data?.lastName}
              </h2>
              <p className="text-sm font-medium text-slate-500 mb-0 flex flex-wrap justify-center md:justify-start gap-2">
                <span>{data?.email}</span>
                <span className="text-slate-300">|</span>
                <span>{data?.mobile}</span>
                {data?.experienceInYear > 0 && (
                  <>
                    <span className="text-slate-300">|</span>
                    <span>{data?.experienceInYear} years of experience</span>
                  </>
                )}
              </p>
            </div>

            {/* Social Links Row */}
            <div className="flex gap-4">
              {data?.links?.website && (
                <a href={data.links.website} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#2563EB] transition-colors flex flex-col items-center gap-1 no-underline" title="Website">
                  <TbWorldWww size={24} />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Web</span>
                </a>
              )}
              {data?.links?.github && (
                <a href={data.links.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#2563EB] transition-colors flex flex-col items-center gap-1 no-underline" title="GitHub">
                  <FaGithub size={24} />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Git</span>
                </a>
              )}
              {data?.links?.linkedin && (
                <a href={data.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#2563EB] transition-colors flex flex-col items-center gap-1 no-underline" title="LinkedIn">
                  <FaLinkedin size={24} />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">In</span>
                </a>
              )}
              {data?.links?.twitter && (
                <a href={data.links.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#2563EB] transition-colors flex flex-col items-center gap-1 no-underline" title="Twitter">
                  <FaXTwitter size={24} />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">X</span>
                </a>
              )}
              {data?.links?.portfolio && (
                <a href={data.links.portfolio} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#2563EB] transition-colors flex flex-col items-center gap-1 no-underline" title="Portfolio">
                  <FaBook size={24} />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Port</span>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Experience Section */}
          {data?.experiences && data.experiences.length > 0 && (
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8">
              <h3 className="text-lg font-bold text-slate-800 pb-2 border-b border-slate-100 mb-6">
                Work Experience
              </h3>
              <div className="space-y-6">
                {data.experiences.map((exp, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row gap-4 justify-between items-start">
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-slate-800 mb-0">{exp?.title}</h4>
                      <p className="text-sm font-medium text-slate-500 mb-0">{exp?.company}</p>
                      {exp?.description && (
                        <p className="text-sm text-slate-600 mt-2 leading-relaxed whitespace-pre-line">{exp.description}</p>
                      )}
                    </div>
                    <div className="text-xs font-semibold text-slate-400 whitespace-nowrap bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg">
                      {convertTimeIntoMMYYYY(exp?.startDate)} &mdash; {exp?.isActive ? 'Present' : convertTimeIntoMMYYYY(exp?.endDate)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education Section */}
          {data?.education && data.education.length > 0 && (
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8">
              <h3 className="text-lg font-bold text-slate-800 pb-2 border-b border-slate-100 mb-6">
                Education Details
              </h3>
              <div className="space-y-6">
                {data.education.map((edu, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row gap-4 justify-between items-start">
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-slate-800 mb-0">{edu?.title}</h4>
                      <p className="text-sm font-medium text-slate-500 mb-0">{edu?.university}</p>
                      {edu?.marks && (
                        <p className="text-xs font-semibold text-slate-600 mt-2">Score: {edu.marks}</p>
                      )}
                    </div>
                    <div className="text-xs font-semibold text-slate-400 whitespace-nowrap bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg">
                      {convertTimeIntoMMYYYY(edu?.startDate)} &mdash; {edu?.isActive ? 'Present' : convertTimeIntoMMYYYY(edu?.endDate)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Resume Upload Block */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8">
            <h3 className="text-lg font-bold text-slate-800 pb-2 border-b border-slate-100 mb-4">
              Resume
            </h3>

            {data?.resumeUrl ? (
              <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl mb-4 text-sm text-slate-600 space-y-1.5">
                <p className="mb-0">
                  Your current resume:{" "}
                  <a 
                    className="text-[#2563EB] font-bold no-underline hover:underline inline-flex items-center gap-1" 
                    href={data.resumeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View / Download Resume <VscLinkExternal size={12} />
                  </a>
                </p>
                <p className="text-xs text-slate-400 mb-0">If you want to upload a different resume, select a new file below.</p>
              </div>
            ) : (
              <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl mb-4 text-sm text-slate-600">
                <p className="mb-0 text-xs text-slate-400">No resume uploaded yet. Please upload your resume below.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="file"
                name="file"
                className="w-full max-w-md bg-white border border-slate-300 rounded-lg text-xs p-2.5 focus:outline-none"
                ref={fileInput}
                onChange={handleFileChange}
              />
              <div className="flex items-center gap-4 flex-wrap justify-between">
                <span className="text-xs font-semibold text-slate-400">
                  Supported formats: .doc, .docx, .pdf
                </span>
                <button 
                  type="submit" 
                  className="px-6 py-2 bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-bold rounded-lg border-0 transition-colors cursor-pointer shadow-sm"
                >
                  Upload Resume
                </button>
              </div>
            </form>

            {errorMessage && (
              <div className="bg-red-50 text-red-600 text-xs font-medium p-3 rounded-lg border border-red-100 mt-4">
                {errorMessage}
              </div>
            )}
            {successMessage && (
              <div className="bg-emerald-50 text-emerald-600 text-xs font-medium p-3 rounded-lg border border-emerald-100 mt-4">
                {successMessage}
              </div>
            )}
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

export default ProfilePage;
