import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useEmployeeContext } from '../../context';

const UpdateInput = ({ title, field, onUpdate }) => {
  const { updateEmployeeDetails } = useEmployeeContext();
  const [inputValue, setInputValue] = useState(title);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userEmail = JSON.parse(sessionStorage.getItem('data'));
    
    if (!userEmail?.email) {
      console.error("User email is not available");
      return;
    }

    const data = { key: field, value: inputValue };

    try {
      await updateEmployeeDetails(userEmail.email, data);
      onUpdate(data);
    } catch (error) {
      console.error("Error updating employee details", error);
    }
  };

  return (
    <div className='col-lg-12 justify-center items-center bg-white rounded py-7'>
      <h2 className='h3 text-prime'>Update</h2>
      <form className='form-group' onSubmit={handleSubmit}>
        <label htmlFor="updateTitle" className='form-label'>Title</label>
        <input
          type="text"
          id="updateTitle"
          value={inputValue}
          onChange={handleChange}
          className='form-control'
          aria-label="Title"
        />
        <button type="submit" className='btn justify-center w-28 mt-3 text-light' style={{ backgroundColor: '#0F79AF' }}>
          Update
        </button>
      </form>
    </div>
  );
};

UpdateInput.propTypes = {
  title: PropTypes.string,
  field: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired
};

UpdateInput.defaultProps = {
  title: ''
};

export default UpdateInput;
