import React from "react";
import ReactQuill from "react-quill";
import { TagsInput } from "react-tag-input-component";

const ProfileFormOne = ({
  nextStep,
  handleChange,
  handleDescriptionChange,
  tags,
  setTags,
  setValues,
  values,
}) => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
          <h4 className="text-2xl font-bold text-white mb-0">Company Basic Details</h4>
          <p className="text-blue-100 mt-1 text-sm mb-0">Step 1 of 2: Let candidates know who you are</p>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700 mb-2">Company Name <span className="text-red-500">*</span></label>
              <input type="text" onChange={handleChange("companyName")} value={values?.companyName || ''} placeholder="e.g. Acme Corp" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none" />
            </div>
            
            <div>
              <label htmlFor="companyContact" className="block text-sm font-semibold text-gray-700 mb-2">Company Contact No <span className="text-red-500">*</span></label>
              <input type="text" onChange={handleChange("companyContact")} value={values?.companyContact || ''} placeholder="e.g. +1 234 567 8900" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none" />
            </div>

            <div>
              <label htmlFor="companyEmail" className="block text-sm font-semibold text-gray-700 mb-2">Company E-mail <span className="text-red-500">*</span></label>
              <input type="email" onChange={handleChange("companyEmail")} value={values?.companyEmail || ''} placeholder="e.g. contact@acmecorp.com" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none" />
            </div>

            <div>
              <label htmlFor="companyWebsite" className="block text-sm font-semibold text-gray-700 mb-2">Company Website Link <span className="text-red-500">*</span></label>
              <input type="url" onChange={handleChange("companyWebsite")} value={values?.companyWebsite || ''} placeholder="e.g. https://acmecorp.com" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none" />
            </div>

            <div>
              <label htmlFor="GST" className="block text-sm font-semibold text-gray-700 mb-2">Company GST No. <span className="text-red-500">*</span></label>
              <input type="text" onChange={handleChange("GST")} value={values?.GST || ''} placeholder="e.g. 22AAAAA0000A1Z5" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm outline-none" />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Services <span className="text-red-500">*</span></label>
              <div className="p-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all bg-white">
                <TagsInput
                  value={tags}
                  onChange={(newSelected) => {
                    setTags(newSelected);
                    setValues((prevData) => ({
                      ...prevData,
                      service: newSelected,
                    }));
                  }}
                  name="service"
                  placeHolder="Type a service and press Enter..."
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Description <span className="text-red-500">*</span></label>
              <div className="border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all">
                <ReactQuill
                  theme="snow"
                  value={values?.description || ''}
                  onChange={handleDescriptionChange}
                  className="bg-white [&_.ql-container]:min-h-[200px] [&_.ql-container]:text-sm [&_.ql-editor]:min-h-[200px] [&_.ql-toolbar]:border-t-0 [&_.ql-toolbar]:border-x-0 [&_.ql-toolbar]:border-b [&_.ql-toolbar]:border-gray-200 [&_.ql-toolbar]:bg-gray-50"
                  modules={{
                    toolbar: [
                      ["bold", "italic", "underline"],
                      [{ list: "ordered" }, { list: "bullet" }],
                    ],
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-8 py-5 border-t border-gray-100 flex justify-end">
          <button
            onClick={(e) => { e.preventDefault(); nextStep(); }}
            className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-sm shadow-blue-200 transition-all"
          >
            Continue to Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileFormOne;
