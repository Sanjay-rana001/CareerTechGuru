import React from 'react'

const TextInput = ({type = "text", placeholder, value, onChange, className, ...props}) => {
  return (
    <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
        className={`w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all duration-200 ${className || ''}`}
    />
  )
}

export default TextInput;