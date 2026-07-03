import React, { useState } from "react";
import AddJobForm_1 from "./components/AddJobForm_1";
import AddJobForm_2 from "./components/AddJobForm_2";
import { useJobContext } from "../../context";
import { useNavigate } from "react-router-dom";

const AddJobForm = () => {
  const { addJobData } = useJobContext();
  const userData = sessionStorage.getItem("data");
  const userId = userData ? JSON.parse(userData) : {};
  const [selected, setSelected] = useState([]);
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  const [values, setValues] = useState({
    adminId: userId?._id || userId?.id || "",
    email: userId?.email || "",
    title: "",
    basicTitle: "",
    category: "",
    subCategory: [],
    shortDescription: "",
    description: "",
    tags: [],
    profilePicture: "",
    openings: "",
    jobType: "",
    workType: "",
    qualification: "",
    experience: "",
    salaryRange: "",
    companyName: "",
    companyWebsite: "",
    jobLocation: "",
    jobUrl: "",
    isReferenceJob: false,
  });

  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (input) => (e) => {
    setValues({ ...values, [input]: e.target.value });
  };

  const handleQuillChange = (name, value) => {
    setValues((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const finalValues = {
        ...values,
        tags: tags,
        subCategory: selected,
        adminId: userId?._id || userId?.id || "",
        email: userId?.email || "",
      };
      console.log("this is job dat", finalValues);
      await addJobData(finalValues);
      // Redirect after successful submission
      navigate("/view-my-applications");
    } catch (error) {
      console.error("Error adding job:", error);
      alert("Failed to add job: " + error.message);
    }
  };
  const maxDescriptionLength = 500; // Define max length for description
  const maxShortDescriptionLength = 10;

  const handleDescriptionChange = (value) =>
    handleQuillChange("description", value);
  const handleShortDescriptionChange = (value) => {
    if (value.length <= maxShortDescriptionLength) {
      setValues((prevValues) => ({
        ...prevValues,
        shortDescription: value,
      }));
    }
  };
  switch (step) {
    case 1:
      return (
        <AddJobForm_1
          nextStep={nextStep}
          handleChange={handleChange}
          selected={selected}
          setSelected={setSelected}
          values={values}
          setValues={setValues}
          setTags={setTags}
          tags={tags}
          handleDescriptionChange={handleDescriptionChange}
          handleShortDescriptionChange={handleShortDescriptionChange}
        />
      );
    case 2:
      return (
        <AddJobForm_2
          nextStep={nextStep}
          prevStep={prevStep}
          values={values}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      );
    default:
      return <AddJobForm_1 />;
  }
};

export default AddJobForm;
