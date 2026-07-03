import React, { useEffect, useRef, useState } from "react";
import { TagsInput } from "react-tag-input-component";
import { useSectionContext } from "../../../context";
import ReactQuill from "react-quill";
import MediaQuery from "react-responsive";

const AddJobForm_1 = ({
  nextStep,
  handleChange,
  handleShortDescriptionChange,
  handleDescriptionChange,
  values,
  selected,
  setSelected,
  setValues,
  setTags,
  tags,
}) => {
  const { getAllSections } = useSectionContext();
  const reactQuillRef = useRef(null);
  const [sectionData, setSectionData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [formError, setFormError] = useState({
    title: "",
    basicTitle: "",
    category: "",
    subCategory: "",
    shortDescription: "",
    description: "",
    tags: "",
  });

  const getAllJobCategories = async () => {
    try {
      const data = await getAllSections();
      if (data && data?.data.length > 0) {
        setSectionData(data?.data);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllJobCategories();
  }, []);

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!values.title.trim()) {
      errors.title = "Job title is required";
      isValid = false;
    }
    if (!values.basicTitle.trim()) {
      errors.basicTitle = "Job basic title is required";
      isValid = false;
    }
    if (!values.category.trim()) {
      errors.category = "Job category is required";
      isValid = false;
    }
    if (selected.length === 0) {
      errors.subCategory = "Please type a skill and press 'Enter' to add it";
      isValid = false;
    }
    if (!values.description.trim()) {
      errors.description = "Description is required";
      isValid = false;
    }
    if (tags.length === 0) {
      errors.tags = "Please type a tag and press 'Enter' to add it";
      isValid = false;
    }

    setFormError(errors);
    return isValid;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      nextStep();
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
          <h4 className="text-2xl font-bold text-white mb-0">Job Details</h4>
          <p className="text-blue-100 mt-1 text-sm mb-0">Step 1 of 2: Let candidates know what you are looking for</p>
        </div>
        
        <div className="p-8 space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Job Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">Job Title <span className="text-red-500">*</span></label>
              <input type="text" onChange={handleChange("title")} value={values.title} placeholder="e.g. Senior Frontend Developer" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none" />
              {formError.title && <p className="text-red-500 text-xs mt-1 font-medium">{formError.title}</p>}
            </div>

            {/* Basic Title */}
            <div>
              <label htmlFor="basicTitle" className="block text-sm font-semibold text-gray-700 mb-2">Basic Title <span className="text-red-500">*</span></label>
              <input type="text" onChange={handleChange("basicTitle")} value={values.basicTitle} placeholder="e.g. Frontend Dev" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none" />
              {formError.basicTitle && <p className="text-red-500 text-xs mt-1 font-medium">{formError.basicTitle}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">Job Category <span className="text-red-500">*</span></label>
              <select onChange={handleChange("category")} value={values.category} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none bg-white">
                <option value="">Select a category</option>
                {sectionData?.map((item, index) => (
                  <option key={index} value={item._id}>{item.title}</option>
                ))}
              </select>
              {formError.category && <p className="text-red-500 text-xs mt-1 font-medium">{formError.category}</p>}
            </div>

            {/* Skills */}
            <div className="relative z-20">
              <label htmlFor="subCategory" className="block text-sm font-semibold text-gray-700 mb-2">Required Skills <span className="text-red-500">*</span></label>
              <div className="text-sm">
                <TagsInput
                  value={selected}
                  onChange={(newSelected) => {
                    setSelected(newSelected);
                    setValues((prev) => ({ ...prev, subCategory: newSelected }));
                  }}
                  name="subCategory"
                  placeHolder="Type a skill and press enter"
                />
              </div>
              {formError.subCategory && <p className="text-red-500 text-xs mt-1 font-medium">{formError.subCategory}</p>}
            </div>
          </div>

          {/* Tags */}
          <div className="relative z-10">
            <label htmlFor="tags" className="block text-sm font-semibold text-gray-700 mb-2">Search Tags <span className="text-red-500">*</span></label>
            <div className="text-sm">
              <TagsInput
                value={tags}
                onChange={(newSelected) => {
                  setTags(newSelected);
                  setValues((prev) => ({ ...prev, tags: newSelected }));
                }}
                name="tags"
                placeHolder="Type a tag and press enter (e.g. Remote, Urgent)"
              />
            </div>
            {formError.tags && <p className="text-red-500 text-xs mt-1 font-medium">{formError.tags}</p>}
          </div>

          {/* Short Description */}
          <div>
            <label htmlFor="shortDescription" className="block text-sm font-semibold text-gray-700 mb-2">Short Summary <span className="text-red-500">*</span></label>
            <textarea rows={3} onChange={handleChange("shortDescription")} value={values.shortDescription} placeholder="A quick 1-2 sentence overview of the role..." className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none resize-none"></textarea>
            <div className="flex justify-between items-center mt-1">
              {formError.shortDescription ? (
                <p className="text-red-500 text-xs font-medium">{formError.shortDescription}</p>
              ) : (
                <p className="text-gray-400 text-xs">Maximum 300 characters</p>
              )}
            </div>
          </div>

          {/* Full Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">Full Job Description <span className="text-red-500">*</span></label>
            <div className="bg-white rounded-lg border border-gray-300 overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all">
              <ReactQuill
                id="description"
                name="description"
                theme="snow"
                value={values.description}
                modules={{
                  toolbar: [
                    ["bold", "italic", "underline"],
                    [{ list: "ordered" }, { list: "bullet" }],
                  ],
                }}
                ref={(element) => {
                  reactQuillRef.current = element;
                  const reactQuillEditor = reactQuillRef.current?.getEditor();
                  reactQuillEditor?.on("text-change", () => {
                    if (reactQuillEditor.getLength() > 15000) {
                      reactQuillEditor.deleteText(15000, reactQuillEditor.getLength());
                    }
                  });
                }}
                style={{ height: "200px" }}
                onChange={handleDescriptionChange}
              />
            </div>
            {formError.description && <p className="text-red-500 text-xs mt-12 font-medium">{formError.description}</p>}
          </div>

          <div className="flex justify-end pt-12 border-t border-gray-100">
            <button onClick={handleFormSubmit} className="px-8 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/30 focus:ring-2 focus:ring-blue-500 outline-none">
              Next Step &rarr;
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AddJobForm_1;
