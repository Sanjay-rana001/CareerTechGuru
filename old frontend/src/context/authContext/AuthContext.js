import { createContext, useState } from "react";
import { forgotPasswordUrl, loginUserURL, registerUserURL, verifyUserEmailId, verifyOtpUrl, resetPasswordUrl } from "../../api/Api";
import axios from 'axios';
import { toast } from "react-hot-toast";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(sessionStorage.getItem('token') || '');
  const [role, setRole] = useState(sessionStorage.getItem('role') || '');
  const [loading, setLoading] = useState(false);
  const setAuthData = (authData) => {
    const { token, user: { role, ...userData } } = authData;
    setToken(token);
    setRole(role);
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('role', role);
    sessionStorage.setItem('data', JSON.stringify(userData));
  };
  console.log("this is ", loading)
  const AuthenticateUser = async (credentials) => {
    setLoading(true)
    try {
      const response = await axios.post(loginUserURL, credentials);
      const authResponse = response?.data;
      setAuthData(authResponse);
      toast.success(authResponse.message);
      setLoading(false)
      return authResponse;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error("Invalid credentials. Please try again.");
      } else {
        throw new Error("Unexpected error. Please try again.");
      }
    } finally {
      setLoading(false)
    }
  };

  const RegisterUser = async (credentials) => {
    setLoading(true)
    try {
      const response = await axios.post(registerUserURL, credentials);
      const authResponse = response?.data;
      setAuthData(authResponse);
      toast.success("Registration successful");
      setLoading(false)
      return authResponse;
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
        setLoading(false)
      } else {
        toast.error("Unexpected error during registration");
        setLoading(false)
      }
    }
  };

  const verifyUserEmail = async (otp) => {
    setLoading(true)
    try {
      const response = await axios.post(verifyUserEmailId, { otp });
      if (response.status === 200) {
        toast.success("Email verified successfully");
        setAuthData(response?.data);
        setLoading(false)
        return response.data;
      } else {
        toast.error("Failed to verify email");
        setLoading(false)
        return null;
      }
    } catch (error) {
      console.error("Error verifying email:", error);
      toast.error("An error occurred while verifying email");
      setLoading(false)
      return null;
    }
  };

  const forgotPassword = async (email) => {
    try {
      const response = await axios.post(forgotPasswordUrl, { email });
      if (response.status === 200) {
        toast.success("OTP sent to email");
        return response.data;
      } else {
        toast.error("Failed to send OTP");
        return null;
      }
    } catch (error) {
      console.error("Error in forgot password:", error);
      toast.error("An error occurred while sending OTP");
      return null;
    }
  };

  const verifyOtpForPasswordReset = async (otp) => {
    try {
      const response = await axios.post(verifyOtpUrl, { otp });
      if (response.status === 200) {
        toast.success("OTP verified successfully");
        return response.data;
      } else {
        toast.error("Failed to verify OTP");
        return null;
      }
    } catch (error) {
      console.error("Error in verifying OTP:", error);
      toast.error("An error occurred while verifying OTP");
      return null;
    }
  };

  const resetPassword = async (email, newPassword) => {
    try {
      const response = await axios.post(resetPasswordUrl, { email, password: newPassword });
      if (response.status === 200) {
        toast.success("Password reset successfully");
        return response.data;
      } else {
        toast.error("Failed to reset password");
        return null;
      }
    } catch (error) {
      console.error("Error in resetting password:", error);
      toast.error("An error occurred while resetting password");
      return null;
    }
  };

  const logoutUser = () => {
    sessionStorage.clear();
    setToken('');
    setRole('');
    toast.success("Logged out successfully");
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ 
      AuthenticateUser, 
      RegisterUser, 
      verifyUserEmail, 
      forgotPassword, 
      verifyOtpForPasswordReset, 
      resetPassword, 
      token, 
      role, 
      logoutUser,
      loading 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
