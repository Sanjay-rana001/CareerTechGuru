import React, { useState } from "react";
import { TagsInput } from 'react-tag-input-component';
import { useSectionContext } from "../../../context";

const AddCategory = () => {
  const { addSectionData } = useSectionContext();
  const userId = JSON.parse(sessionStorage.getItem("data"));
  const [tags, setTags] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [sectionData, setSectionData] = useState({
    title: '',
    basicTitle: '',
    subCategory: [],
    shortDescription: '',
    tags: [],
    profilePicture: 'abc'
  });

  const handleInputChange = (e) => {
    setSectionData({
      ...sectionData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const updatedSectionData = { ...sectionData, subCategory: subCategories, tags };
      const result = await addSectionData(updatedSectionData);
      console.log(result);
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="container-sm">
          <div className="row">
            <div className="col-lg">
              <h3 className="h3 text-prime">Add Category</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="title" className="h6">Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  placeholder="Category title"
                  value={sectionData.title}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="basicTitle" className="h6">Basic Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="basicTitle"
                  placeholder="Basic title"
                  value={sectionData.basicTitle}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="shortDescription" className="h6">Short Description</label>
                <textarea
                  className="form-control"
                  name="shortDescription"
                  placeholder="Short description"
                  value={sectionData.shortDescription}
                  onChange={handleInputChange}
                  rows={3}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="subCategory" className="h6">Subcategories</label>
                <TagsInput
                  value={subCategories}
                  onChange={(subCategories) => {
                    setSubCategories(subCategories);
                    setSectionData({ ...sectionData, subCategory: subCategories });
                  }}
                  name="subCategory"
                  placeHolder="Add subcategories"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="tags" className="h6">Tags</label>
                <TagsInput
                  value={tags}
                  onChange={(tags) => {
                    setTags(tags);
                    setSectionData({ ...sectionData, tags });
                  }}
                  name="tags"
                  placeHolder="Add tags"
                />
              </div>
              <button className="btn bg-prime text-light">Add Category</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCategory;
