import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import "./ContactUs.css";
import logo from "../assets/phone-call.png";
import web from "../assets/domain.png";
import mail from "../assets/email.png";
import address from "../assets/location.png";
import { TextInput } from "../components"; // Ensure you have this import path correct
import { useBrandContext } from "../context";

const ContactUs = () => {
  const { siteConfig } = useBrandContext();
  const companyName = siteConfig.companyName;
  const companyWebsite = siteConfig.contactWebsite;
  const Email = siteConfig.contactEmail;
  const Phone = siteConfig.contactPhone;
  const Address = siteConfig.contactAddress;
  const [inputs, setInputs] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty fields
    if (!inputs.name) {
      alert("Please enter your name.");
      return;
    }
    if (!inputs.phoneNumber) {
      alert("Please enter your phone number.");
      return;
    }
    if (!inputs.email) {
      alert("Please enter your email.");
      return;
    }
    if (!inputs.description) {
      alert("Please enter a description of your query.");
      return;
    }

    try {
      await addDoc(collection(db, "contact_queries"), {
        ...inputs,
        submittedAt: new Date().toISOString(),
      });
      alert("Your query has been submitted successfully.");
      setInputs({
        name: "",
        phoneNumber: "",
        email: "",
        description: "",
      });
    } catch (error) {
      console.error("Error submitting query to Firestore:", error);
      alert("There was an error submitting the form!");
    }
  };

  return (
    <div className="page-wrapper">
      <div className="cn">
        <br />
        <h2 className="text-center h1 text-prime">
          <b>Contact Us</b>
        </h2>
      </div>
      <div className="contact-us-page">
        <div className="form-container">
          <div className="description-form">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5 text-left">
                <label className="text-sm font-semibold text-slate-700">
                  Name<sup className="text-red-500">*</sup>
                </label>
                <TextInput
                  type="text"
                  name="name"
                  value={inputs.name}
                  onChange={handleChange}
                  placeholder="Name"
                />
              </div>

              <div className="flex flex-col gap-1.5 text-left">
                <label className="text-sm font-semibold text-slate-700">
                  Phone Number<sup className="text-red-500">*</sup>
                </label>
                <TextInput
                  type="text"
                  name="phoneNumber"
                  value={inputs.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                />
              </div>

              <div className="flex flex-col gap-1.5 text-left">
                <label className="text-sm font-semibold text-slate-700">
                  Email<sup className="text-red-500">*</sup>
                </label>
                <TextInput
                  type="email"
                  name="email"
                  value={inputs.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
              </div>

              <div className="flex flex-col gap-1.5 text-left">
                <label className="text-sm font-semibold text-slate-700">
                  Description<sup className="text-red-500">*</sup>
                </label>
                <textarea
                  name="description"
                  value={inputs.description}
                  onChange={handleChange}
                  placeholder="Description/Queries"
                  className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all duration-200 resize-y min-h-[100px]"
                />
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full sm:w-auto px-8 py-2.5 bg-[#2563EB] hover:bg-blue-700 text-white font-semibold rounded-lg shadow-sm transition-colors text-sm border-0 cursor-pointer">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <img
                src={logo}
                height="30px"
                width="25px"
                className="Image"
                alt="Phone"
              />
              <h3 className="text-lg font-semibold">{Phone}</h3>
              <p>
                <strong>Company Name:</strong> {companyName}
              </p>
            </div>
            <div className="contact-item">
              <img
                src={address}
                height="30px"
                width="25px"
                className="Image"
                alt="Address"
              />
              <p className="text-sm">
                {Address}
              </p>
            </div>
            <div className="contact-item">
              <img
                src={web}
                height="30px"
                width="25px"
                className="Image"
                alt="Website"
              />
              <a
                href={companyWebsite}
                target="_blank"
                rel="noopener noreferrer"
              >
                {companyWebsite}
              </a>
            </div>
            <div className="contact-item">
              <img
                src={mail}
                height="30px"
                width="25px"
                className="Image"
                alt="Email"
              />
              <a
                href={`mailto:${Email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {Email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
