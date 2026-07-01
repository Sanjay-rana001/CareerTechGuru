import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context';
const ForgotPassword = () => {
  const { forgotPassword } = useAuthContext();
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleGetOTP = async (e) => {
    e.preventDefault();
    try {
      const response = await forgotPassword(email);
      console.log("this is status",response.status)
      sessionStorage.setItem('reset-email', email);
      navigate('/verify-otp'); // Redirect to '/verify-otp'
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  return (
    <div className="container-fluid bg-slate-100">
      <div className="container-sm">
        <div className="row min-h-[100vh] justify-center items-center">
          <div className='col-lg-6 bg-light shadow py-6'>
            <h3 className='h2 text-[#0E42A8]'>Forgot your password</h3>
            <form>
                <div className="form-group mb-3">
                  <label className='h6' htmlFor="email">Enter your registered email</label>
                  <input
                    type="email"
                    className='form-control'
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <button
                    className='btn bg-prime text-light'
                    onClick={handleGetOTP}
                  >
                    Get OTP
                  </button>
                  <p className='mt-2'><Link to='/login' className='text-[#0E42A8] nav-link'>Back to login</Link></p>
                </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
