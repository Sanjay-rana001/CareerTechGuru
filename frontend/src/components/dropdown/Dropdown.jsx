import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";

const Dropdown = ({ options, placeholder, dismiss }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionSelect = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-header flex items-center justify-between gap-2 nav-link text-dark" onClick={() => setIsOpen(!isOpen)}>
        {placeholder} <FaAngleDown />
      </div>
      {isOpen && (
        <div className="dropdown-list lg:absolute">
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-item nav-link"
              onClick={() => handleOptionSelect(option. path)}
              data-bs-dismiss={dismiss} 
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
  placeholder: PropTypes.string,
};

Dropdown.defaultProps = {
  placeholder: 'Select an option',
};

export default Dropdown;
