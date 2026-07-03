import React from "react";

const SelectInput = ({ options, value, onChange, className, ...props }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      {...props}
      className={`w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all duration-200 cursor-pointer ${className || ""}`}
    >
      <option value="" disabled>
        Choose option...
      </option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
