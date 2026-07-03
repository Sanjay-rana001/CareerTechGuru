import React, { useState, useEffect } from "react";

const AddJobForm_2 = ({
  nextStep,
  prevStep,
  handleSubmit,
  handleChange,
  values,
}) => {
  const [isReferenceJob, setIsReferenceJob] = useState(values.isReferenceJob);

  useEffect(() => {
    setIsReferenceJob(values.isReferenceJob);
  }, [values.isReferenceJob]);

  const handleRadioChange = (event) => {
    const value = event.target.value === "yes";
    setIsReferenceJob(value);
    handleChange("isReferenceJob")({ target: { value } });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="container-sm py-3">
          <h4 className="text-primary">Add company basic detail</h4>
          <div className="row py-3">
            <div className="col-lg-11">
              <div className="row mb-3">
                <div className="col-3">
                  <label htmlFor="profilePicture" className="text-[14px]">
                    Company logo<sup className="text-danger">*</sup>
                  </label>
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="profilePicture"
                    onChange={handleChange("profilePicture")}
                    value={values.profilePicture}
                    placeholder="company logo or profile image"
                    className="form-input"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-3">
                  <label htmlFor="openings" className="text-[14px]">
                    Total openings<sup className="text-danger">*</sup>
                  </label>
                </div>
                <div className="col">
                  <input
                    type="number"
                    name="openings"
                    onChange={handleChange("openings")}
                    value={values.openings}
                    className="form-input"
                    placeholder="number of openings"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-3">
                  <label htmlFor="experience" className="text-[14px]">
                    Min experience<sup className="text-danger">*</sup>
                  </label>
                </div>
                <div className="col">
                  <select
                    className="form-input"
                    onChange={handleChange("experience")}
                    value={values.experience}
                  >
                    <option value="">choose min experience</option>
                    <option value="Fresher">Fresher</option>
                    <option value="1 - 2 years">1 - 2 years</option>
                    <option value="2 - 3 years">2 - 3 years</option>
                    <option value="4 - 6 years">4 - 6 years</option>
                    <option value="7 - 8 years">7 - 8 years</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-3">
                  <label htmlFor="salaryRange" className="text-[14px]">
                    Salary range<sup className="text-danger">*</sup>
                  </label>
                </div>
                <div className="col">
                  <select
                    className="form-input"
                    onChange={handleChange("salaryRange")}
                    value={values.salaryRange}
                  >
                    <option value="">choose salary range</option>
                    <option value="5k - 10k">5k - 10k</option>
                    <option value="15k - 25k">15k - 25k</option>
                    <option value="4 lpa - 6 lpa">4 lpa - 6 lpa</option>
                    <option value="8 lpa - 10 lpa">8 lpa - 10 lpa</option>
                    <option value="Not disclosed">Not disclosed</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-3">
                  <label htmlFor="jobType" className="text-[14px]">
                    Job type<sup className="text-danger">*</sup>
                  </label>
                </div>
                <div className="col">
                  <select
                    className="form-input"
                    onChange={handleChange("jobType")}
                    value={values.jobType}
                  >
                    <option value="">choose job type</option>
                    <option value="Work from home">Work from home</option>
                    <option value="Work from office">Work from office</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-3">
                  <label htmlFor="workType" className="text-[14px]">
                    Work type<sup className="text-danger">*</sup>
                  </label>
                </div>
                <div className="col">
                  <select
                    className="form-input"
                    onChange={handleChange("workType")}
                    value={values.workType}
                  >
                    <option value="">choose work type</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Internship">Internship</option>
                    <option value="Contractual">Contractual</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-3">
                  <label htmlFor="qualification" className="text-[14px]">
                    Minimum qualification<sup className="text-danger">*</sup>
                  </label>
                </div>
                <div className="col">
                  <select
                    className="form-input"
                    onChange={handleChange("qualification")}
                    value={values.qualification}
                  >
                    <option value="">choose min qualification</option>
                    <option value="Post-graduation">Post-graduation</option>
                    <option value="Graduation">Graduation</option>
                    <option value="Diploma">Diploma</option>
                    <option value="10th/12th Passed">10th/12th Passed</option>
                    <option value="Any">Any</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-3">
                  <label htmlFor="companyName" className="text-[14px]">
                    Company Name<sup className="text-danger">*</sup>
                  </label>
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="companyName"
                    onChange={handleChange("companyName")}
                    value={values.companyName}
                    placeholder="Company name"
                    className="form-input"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-3">
                  <label htmlFor="companyWebsite" className="text-[14px]">
                    Company Website<sup className="text-danger">*</sup>
                  </label>
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="companyWebsite"
                    onChange={handleChange("companyWebsite")}
                    value={values.companyWebsite}
                    placeholder="Company website"
                    className="form-input"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-3">
                  <label htmlFor="jobLocation" className="text-[14px]">
                    Location<sup className="text-danger">*</sup>
                  </label>
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="jobLocation"
                    onChange={handleChange("jobLocation")}
                    value={values.jobLocation}
                    placeholder="Company website"
                    className="form-input"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-3">
                  <label htmlFor="isReferenceJob" className="text-[14px]">
                    Is a reference job?<sup className="text-danger">*</sup>
                  </label>
                </div>
                <div className="col d-flex align-items-center gap-2">
                  <input
                    type="radio"
                    value="yes"
                    checked={isReferenceJob}
                    onChange={handleRadioChange}
                    name="isReferenceJob"
                    id="isReferenceJobYes"
                  />
                  <label htmlFor="isReferenceJobYes">Yes</label>
                  <input
                    type="radio"
                    value="no"
                    checked={!isReferenceJob}
                    onChange={handleRadioChange}
                    name="isReferenceJob"
                    id="isReferenceJobNo"
                  />
                  <label htmlFor="isReferenceJobNo">No</label>
                </div>
              </div>
              {isReferenceJob && (
                <>
                  <div className="row mb-3">
                    <div className="col-3">
                      <label htmlFor="jobUrl" className="text-[14px]">
                        Job URL<sup className="text-danger">*</sup>
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        name="jobUrl"
                        onChange={handleChange("jobUrl")}
                        value={values.jobUrl}
                        placeholder="Job URL"
                        className="form-input"
                      />
                    </div>
                  </div>
                </>
              )}
              <div
                className="form-group mt-4 d-flex gap-3 py-3"
                style={{ marginTop: "10px" }}
              >
                <button
                  onClick={handleSubmit}
                  className="btn bg-prime text-light"
                >
                  Submit
                </button>
              </div>
              <button onClick={prevStep} className="btn">
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddJobForm_2;
