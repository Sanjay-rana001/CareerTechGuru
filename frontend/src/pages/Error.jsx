import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate()
  return (
    <div className='row justify-center items-center min-h-[100vh]'>
        <div className="col-lg-6">
            <h3 className='display-4 text-center mb-2 capitalize text-primary'>We lost this page</h3>
            <p className='text-center mb-3'>We searched high and low but couldn't find what you are looking for. Let's find a better place for you to go
            <div className='my-3'>
                <button onClick={() => navigate('/')} className='btn btn-primary rounded-0 w-25'>Back to home</button>
            </div>
            </p>
        </div>
    </div>
  )
}

export default Error