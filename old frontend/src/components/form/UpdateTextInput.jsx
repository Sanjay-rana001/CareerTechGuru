import React from 'react'

const UpdateTextInput = ({type = "text", placeholder, value, onchange, ...props}) => {
  return (
    <div className="form-group flex items-center">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onchange={onchange}
        {...props}
        className='custom-input w-50 outline-none px-4 py-2 bg-slate-100'
      />
      <button className='btn bg-[#0C4DB0] text-light'></button>
    </div>
  )
}

export default UpdateTextInput