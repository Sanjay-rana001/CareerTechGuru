import React from 'react';
import PropTypes from 'prop-types';

const ConfirmBox = ({ message, onConfirm, onCancel }) => {
  return (
    <div className='confirm-box-overlay'>
      <div className='confirm-box col-lg'>
        <p className='h2 font-semibold text-[#0B51B6]'>{message}</p>
        <div className='confirm-box-actions mt-4'>
          <button className='btn bg-prime text-light' onClick={onConfirm}>Confirm</button>
          <button className='btn text-danger' onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

ConfirmBox.propTypes = {
  message: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default ConfirmBox;
