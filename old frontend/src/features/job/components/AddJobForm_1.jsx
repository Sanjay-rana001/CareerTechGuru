import React, { useEffect, useRef, useState } from 'react';
import { TagsInput } from "react-tag-input-component";
import { useSectionContext } from '../../../context';
import ReactQuill from 'react-quill';
import MediaQuery from 'react-responsive';

const AddJobForm_1 = ({ nextStep, handleChange, handleShortDescriptionChange, handleDescriptionChange, values, selected, setSelected, setValues, setTags, tags }) => {
    const { getAllSections } = useSectionContext();
    const reactQuillRef = useRef(null);
    const [sectionData, setSectionData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const [formError, setFormError] = useState({
        title: '',
        basicTitle: '',
        category: '',
        subCategory: '',
        shortDescription: '',
        description: '',
        tags: '',
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
    }
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
            errors.subCategory = "At least one skill is required";
            isValid = false;
        }

        // if (!values.shortDescription.trim()) {
        //     errors.shortDescription = "Short description is required";
        //     isValid = false;
        // }

        if (!values.description.trim()) {
            errors.description = "Description is required";
            isValid = false;
        }

        if (tags.length === 0) {
            errors.tags = "At least one tag is required";
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
        <>
            <div className="container-fluid">
                <div className="container-sm">
                    <h4 className='text-primary h3' style={{marginTop: '20px'}}>Add job basic details</h4>
                    <div className="row py-3">
                        <div className="col-lg-11">
                            <div className="row items-start justify-start mb-3">
                                <div className="col-3">
                                    <label className="text-[14px]" htmlFor="title">Job title <sup className='text-danger'>*</sup></label>
                                </div>
                                <div className="col">
                                    <input type="text" name='title' onChange={handleChange('title')} className='form-input w-100 text-[14px] rounded-sm' placeholder='enter job title' />
                                    {formError.title && <p className="text-danger text-sm">{formError.title}</p>}
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-3">
                                    <label htmlFor="basicTitle" className='text-[14px]'>Job basic title <sup className='text-danger'>*</sup></label>
                                </div>
                                <div className="col">
                                    <input type="text" name='basicTitle' onChange={handleChange('basicTitle')} className='form-input w-100 text-[14px] rounded-sm' placeholder='enter job basic title' />
                                    {formError.basicTitle && <p className="text-danger text-sm">{formError.basicTitle}</p>}
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-3">
                                    <label htmlFor="category" className='text-[14px]'>Job category <sup className='text-danger'>*</sup></label>
                                </div>
                                <div className="col">
                                    <select className="form-input rounded" onChange={handleChange('category')}>
                                        <option defaultValue='choose an option'>choose category</option>
                                        {sectionData?.map((item, index) => (
                                            <option key={index} value={item._id}>{item.title}</option>
                                        ))}
                                    </select>
                                    {formError.category && <p className="text-danger text-sm">{formError.category}</p>}
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-3">
                                    <label htmlFor="subCategory" className='text-[14px]'>Required skills <sup className='text-danger'>*</sup></label>
                                </div>
                                <div className="col">
                                    <TagsInput
                                        value={selected}
                                        onChange={(newSelected) => {
                                            setSelected(newSelected);
                                            setValues((prevData) => ({
                                                ...prevData,
                                                subCategory: newSelected, // update subCategory array
                                            }));
                                        }}
                                        name="subCategory"
                                        placeHolder="press enter to add tags"
                                    />
                                    {formError.subCategory && <p className="text-danger text-sm">{formError.subCategory}</p>}
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-3">
                                    <label htmlFor="tags" className='text-[14px]'>Tags <sup className='text-danger'>*</sup></label>
                                </div>
                                <div className="col">
                                    <TagsInput
                                        value={tags}
                                        onChange={(newSelected) => {
                                            setTags(newSelected);
                                            setValues((prevData) => ({
                                                ...prevData,
                                                tags: newSelected, // update tags array
                                            }));
                                        }}
                                        name="tags"
                                        placeHolder="press enter to add tags"
                                    />
                                    {formError.tags && <p className="text-danger text-sm">{formError.tags}</p>}
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-3">
                                    <label htmlFor="shortDescription" className='text-[14px]'>Job short description <sup className='text-danger'>*</sup></label>
                                </div>
                                <div className="col mb-1">
                                    <textarea 
                                        className='form-input rounded' 
                                        rows={6} 
                                        name='shortDescription' 
                                        value={values.shortDescription}
                                        onChange={handleChange('shortDescription')}  
                                    />
                                    {formError.shortDescription && <p className="text-danger text-sm">{formError.shortDescription}</p>}
                                </div>
                            </div>
                            <p class='character'>Not more than 0 - 300 characters</p>
                            <br/>
                            <MediaQuery query="(min-width: 787px)">
                            <div className="row mb-3">
                                <div className="col-3">
                                    <label htmlFor="description" className='text-[14px]'>Job description <sup className='text-danger'>*</sup></label>
                                </div>
                                <div className="col mb-16 mt-8">
                                    <ReactQuill
                                        id="description"
                                        name="description"
                                        className='description rounded w-100'
                                        theme="snow"
                                        modules={{
                                            toolbar: [
                                                ['bold', 'italic', 'underline'],
                                                [{ list: 'ordered' }, { list: 'bullet' }],
                                            ],
                                        }}
                                        ref={(element) => {
                                            reactQuillRef.current = element;
                                            const reactQuillEditor = reactQuillRef.current?.getEditor();
                                            reactQuillEditor?.on('text-change', () => {
                                                if (reactQuillEditor.getLength() > 15000) {
                                                  reactQuillEditor.deleteText(15000, reactQuillEditor.getLength());
                                                }
                                              });
                                        }}
                                        style={{ height: '200px', width : '758px', borderRadius: '20px' }}
                                        onChange={handleDescriptionChange}
                                    />
                                    {formError.description && <p className="text-danger text-sm">{formError.description}</p>}
                                    </div>
                            </div>
                            
                                 <p class='character1'>Not more than 0 - 5000 characters</p>
                            </MediaQuery>
                            <MediaQuery query="(max-width: 786px)">
                            <div className="row mb-3">
                                <div className="col-3">
                                    <label htmlFor="description" className='text-[14px]'>Job description <sup className='text-danger'>*</sup></label>
                                </div>
                                <div className="col mb-16 mt-8">
                                    <ReactQuill
                                        id="description"
                                        name="description"
                                        className='description w-100'
                                        theme="snow"
                                        modules={{
                                            toolbar: [
                                                ['bold', 'italic', 'underline'],
                                                [{ list: 'ordered' }, { list: 'bullet' }],
                                            ],
                                        }}
                                        ref={(element) => {
                                            reactQuillRef.current = element;
                                            const reactQuillEditor = reactQuillRef.current?.getEditor();
                                            reactQuillEditor?.on('text-change', () => {
                                                if (reactQuillEditor.getLength() > 15000) {
                                                  reactQuillEditor.deleteText(15000, reactQuillEditor.getLength());
                                                }
                                              });
                                        }}
                                        style={{ height: '200px', width : '758px', borderRadius: '20px' }}
                                        onChange={handleDescriptionChange}
                                    />
                                    {formError.description && <p className="text-danger text-sm">{formError.description}</p>}
                                </div>
                            </div>
                            
                                <p class='character1'>Not more than 0 - 5000 characters</p>
                            
                            </MediaQuery>
                            <div className="form-group flex justify-center mt-10">
                            <button onClick={handleFormSubmit} className='btn justify-center items-center bg-prime text-light'>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddJobForm_1;