import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import OTPInput, { ResendOTP } from "otp-input-react";
import { useAuthContext } from '../../../context';
 
const EmailVerify = () => {
  const { verifyUserEmail } = useAuthContext();
  const [OTP, setOTP] = useState("");
  const navigate = useNavigate();
 
  const handleOTPChange = (otp) => {
    setOTP(otp);
  };

  const handleVerifyClick = async () => {
    try {
      const result = await verifyUserEmail(OTP);
      console.log("Verification result:", result);
      if (result.token) {
        navigate("/");
      } else {
        console.error("Verification failed:", result.message);
      }
    } catch (error) {
      console.error("Error verifying email:", error);
    }
  };
 
  return (
    <div className='bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col items-center gap-5 my-4'>
      <h2 className='font-bold text-lg text-slate-800 text-center mb-1'>Verify OTP received on email</h2>
      
      <div className="flex justify-center otp-container">
        <OTPInput 
          value={OTP} 
          OTPLength={6} 
          onChange={handleOTPChange} 
          autoFocus 
          otpType="number" 
          disabled={false}
          className="otp-input-fields"
        />
      </div>

      <button 
        className='w-full bg-[#2563EB] hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg border-0 shadow-sm transition-colors text-sm cursor-pointer' 
        onClick={handleVerifyClick}
      >
        Verify
      </button>

      <div className="text-xs font-semibold text-slate-500 pt-2">
        <ResendOTP 
          autoFocus 
          otpType="number" 
          onResendClick={() => console.log("Resend clicked")} 
          disabled={false} 
          secure 
        />
      </div>
    </div>
  )
}
 
export default EmailVerify;