import React, { useState } from 'react';
import ProfileFormOne from './components/ProfileFormOne';
import ProfileFormTwo from './components/ProfileFormTwo';
import { useAdminContext } from '../../context';
import { useNavigate } from 'react-router-dom';

const EmployerProfileForm = () => {
    const {addAdminProfleDetail} = useAdminContext();
    const userId = JSON.parse(sessionStorage.getItem('data'));
    const [tags, setTags] = useState([]);
    const [step, setStep] = useState(1);
    const navigate = useNavigate();
    const [values, setValues] = useState({
        adminId : userId?.id,
        email: userId?.email,
        companyName : '',
        companyAddress : '',
        city : '',
        state : '',
        country : '',
        pincode : '',
        startedAt : null,
        description : '',
        GST : '',
        companyPan : '',
        companyEmail : '',
        companyContact : '',
        companyWebsite : '',
        numberOfEmployee : '',
        service : [],
    });

    const nextStep = () => {
        setStep(step + 1);
    }

    const prevStep = () => {
        setStep(step - 1);
    }

    const handleChange = (input) => (e) => {
        setValues({ ...values, [input]: e.target.value });
    }

    const handleQuillChange = (name, value) => {
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    }

    const handleDescriptionChange = (value) => {
        handleQuillChange('description', value);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const result = await addAdminProfleDetail(values)
            console.log("this is values", result)
            setTimeout(() => {
                navigate("/")
            }, 2000)
        } catch (error) {
            
        }
        
    };

    switch (step) {
        case 1:
            return (
                <ProfileFormOne
                    nextStep={nextStep}
                    handleChange={handleChange}
                    handleDescriptionChange={handleDescriptionChange}
                    tags={tags}
                    setTags={setTags}
                    setValues={setValues}
                    values={values}
                />
            );
        case 2:
            return (
                <ProfileFormTwo
                    handleSubmit={handleSubmit}
                    prevStep={prevStep}
                    handleChange={handleChange}
                    handleDescriptionChange={handleDescriptionChange}
                    tags={tags}
                    setTags={setTags}
                    setValues={setValues}
                    values={values}
                />
            );
        default:
            return (
                <ProfileFormOne
                    nextStep={nextStep}
                    handleChange={handleChange}
                    handleDescriptionChange={handleDescriptionChange}
                    tags={tags}
                    setTags={setTags}
                    setValues={setValues}
                    values={values}
                />
            );
    }
}

export default EmployerProfileForm;
