import React, { useState } from "react";
import "../../../src/App.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context";
import OTPInput, { ResendOTP } from "otp-input-react";
import { TextInput } from "../../components";

const ForgotPassword = ({ handleBackToLogin }) => {
  const { forgotPassword, verifyOtpForPasswordReset, resetPassword } =
    useAuthContext();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const navigate = useNavigate();
  const handleGetOTP = async () => {
    try {
      const response = await forgotPassword(email);
      if (response.status === 200) {
        setOtpSent(true);
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      // Handle error if needed
    }
  };

  const handleVerifyOTP = async () => {
    try {
      await verifyOtpForPasswordReset(otp);
      navigate("/reset-password");
    } catch (error) {
      console.error("Error verifying OTP:", error);
      // Handle error if needed
    }
  };

  return (
    <div className="container-fluid">
      <div className="container-lg">
        <div className="row justify-center items-center min-h-[100vh]">
          <div className="col-lg-6 bg-light shadow py-6 items-center">
            <h3 className="h2 text-[#0E42A8]">Verify your OTP</h3>
            <div className="bg-slate-100 p-2">
              <div
                className="form-group py-3 flex flex-col gap-3"
                id="verify-otp"
              >
                <label htmlFor="">Enter OTP received on your email</label>
                <OTPInput
                  class="otpnum"
                  value={otp}
                  OTPLength={6}
                  onChange={(otp) => setOtp(otp)}
                />
                <ResendOTP otpType="number" onResendClick={handleGetOTP} />
                <button
                  className="btn bg-prime text-light"
                  onClick={handleVerifyOTP}
                >
                  Verify OTP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
