import React from "react";
import ReactQuill from "react-quill";
import { TagsInput } from "react-tag-input-component";
import MediaQuery from "react-responsive";

const ProfileFormOne = ({
  nextStep,
  handleChange,
  handleDescriptionChange,
  tags,
  setTags,
  setValues,
}) => {
  return (
    <>
      <div className="container-fluid">
        <div className="container-sm py-3">
          <h4
            className="text-primary text-2xl"
            style={{ marginTop: "20px", textAlign: "center" }}
          >
            Add company basic details
          </h4>
          <div className="row py-3">
            <form action="">
              <div className="form-group mb-3">
                <label className="form-label" htmlFor="companyName">
                  Company Name <sup className="text-danger">*</sup>
                </label>
                <input
                  type="text"
                  name="companyName"
                  onChange={handleChange("companyName")}
                  className="form-control"
                  placeholder="enter job title"
                />
              </div>
              <div className="form-group mb-3">
                <label className="form-label" htmlFor="">
                  Company Contact No <sup className="text-danger">*</sup>
                </label>
                <input
                  type="text"
                  name="companyContact"
                  onChange={handleChange("companyContact")}
                  className="form-control"
                  placeholder="enter job title"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="companyEmail" className="form-label">
                  Company E-mail <sup className="text-danger">*</sup>
                </label>
                <input
                  type="text"
                  name="companyEmail"
                  onChange={handleChange("companyEmail")}
                  className="form-control"
                  placeholder="enter job basic title"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="companyWebsite" className="form-label">
                  Company Website Link <sup className="text-danger">*</sup>
                </label>
                <input
                  type="text"
                  name="companyWebsite"
                  onChange={handleChange("companyWebsite")}
                  className="form-control"
                  placeholder="enter job basic title"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="GST" className="form-label">
                  Company GST No. <sup className="text-danger">*</sup>
                </label>
                <input
                  type="text"
                  name="GST"
                  onChange={handleChange("GST")}
                  className="form-control"
                  placeholder="enter job basic title"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="service" className="form-label">
                  Services <sup className="text-danger">*</sup>
                </label>
                <TagsInput
                  value={tags}
                  onChange={(newSelected) => {
                    setTags(newSelected);
                    setValues((prevData) => ({
                      ...prevData,
                      service: newSelected, // update subCategory array
                    }));
                  }}
                  name="service"
                  placeHolder="press enter to add services"
                />
              </div>
              <div className="form-group mb-3 h-[40vh]">
                <label htmlFor="description" className="form-label">
                  Decsription <sup className="text-danger">*</sup>
                </label>
                <ReactQuill
                  id="description"
                  name="description"
                  theme="snow"
                  modules={{
                    toolbar: [
                      ["bold", "italic", "underline"],
                      [{ list: "ordered" }, { list: "bullet" }],
                    ],
                  }}
                  style={{ height: "200px" }}
                  onChange={handleDescriptionChange}
                />
              </div>
              <MediaQuery query="(min-width: 787px)">
                <div className="form-group" style={{ marginTop: "20px" }}>
                  <button
                    onClick={nextStep}
                    className="btn bg-prime w-25 text-light"
                  >
                    Submit
                  </button>
                </div>
              </MediaQuery>
              <MediaQuery query="(max-width: 786px)">
                <div className="form-group" style={{ marginTop: "12px" }}>
                  <button
                    onClick={nextStep}
                    className="btn bg-prime w-30 text-light"
                  >
                    Submit
                  </button>
                </div>
              </MediaQuery>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileFormOne;
