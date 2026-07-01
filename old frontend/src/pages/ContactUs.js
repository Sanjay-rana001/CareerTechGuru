import React, { useState } from 'react';
import axios from 'axios';
import './ContactUs.css';
import logo from '../assets/phone-call.png';
import web from '../assets/domain.png';
import mail from '../assets/email.png';
import address from '../assets/location.png';
import { contactUsQueries } from '../api/Api';
import { TextInput } from "../components"; // Ensure you have this import path correct
 
const ContactUs = () => {
  const companyName = "ESPS Solutions";
  const companyWebsite = "https://spsolutions.org.nz";
  const Email = "info@espssolution.org.nz";
  const [inputs, setInputs] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    description: ''
  });
 
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    // Check for empty fields
    if (!inputs.name) {
      alert('Please enter your name.');
      return;
    }
    if (!inputs.phoneNumber) {
      alert('Please enter your phone number.');
      return;
    }
    if (!inputs.email) {
      alert('Please enter your email.');
      return;
    }
    if (!inputs.description) {
      alert('Please enter a description of your query.');
      return;
    }
 
    try {
      await axios.post(contactUsQueries, inputs);
      alert('Your query has been submitted successfully.');
      setInputs({
        name: '',
        phoneNumber: '',
        email: '',
        description: ''
      });
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        // Display the error message from the server
        alert(error.response.data.error);
      } else {
        // Display a generic error message if something else went wrong
        alert('There was an error submitting the form!');
      }
    }
  };
 
  return (
    <div className="page-wrapper">
      <div className='cn'>
        <br />
        <h2 className="text-center h1 text-prime"><b>Contact Us</b></h2>
      </div>
      <div className="contact-us-page">
        <div className="form-container">
          <div className="description-form">
            <form onSubmit={handleSubmit} className='form'>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  <tr>
                    <td style={{ padding: '10px', border: 'transparent' }}>
                      <label>
                        Name:<sup className="text-danger">*</sup>
                        <TextInput
                          type="text"
                          name="name"
                          value={inputs.name}
                          onChange={handleChange}
                          placeholder="Name"
                        />
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '10px', border: 'transparent' }}>
                      <label>
                        Phone Number:<sup className="text-danger">*</sup>
                        <TextInput
                          type="text"
                          name="phoneNumber"
                          value={inputs.phoneNumber}
                          onChange={handleChange}
                          placeholder="Phone Number"
                        />
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '10px', border: 'transparent' }}>
                      <label>
                        Email:<sup className="text-danger">*</sup>
                        <TextInput
                          type="email"
                          name="email"
                          value={inputs.email}
                          onChange={handleChange}
                          placeholder="Email"
                        />
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '10px', border: 'transparent' }}>
                      <label>
                        Description:<sup className="text-danger">*</sup>
                        <textarea
                        type="textarea"
                          name="description"
                          value={inputs.description}
                          onChange={handleChange}
                          placeholder="Description/Queries"
                          className="form-control"
                        />
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: 'transparent', textAlign: 'center' }}>
                      <button className="btn bg-prime text-light">Submit</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <img src={logo} height='30px' width='25px' className='Image' alt="Phone" />
              <h3>9871729030</h3>
              <p><strong>Company Name:</strong> {companyName}</p>
            </div>
            <div className="contact-item">
              <img src={address} height='30px' width='25px' className='Image' alt="Address" />
              <p>Achievers Centre Point Mall, Sector-49, Office No. 15/19 First Floor Faridabad, Haryana, 121001 INDIA</p>
            </div>
            <div className="contact-item">
              <img src={web} height='30px' width='25px' className='Image' alt="Website" />
              <a href={companyWebsite} target="_blank" rel="noopener noreferrer">{companyWebsite}</a>
            </div>
            <div className="contact-item">
              <img src={mail} height='30px' width='25px' className='Image' alt="Email" />
              <a href={`mailto:${Email}`} target='_blank' rel="noopener noreferrer">{Email}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default ContactUs;
 