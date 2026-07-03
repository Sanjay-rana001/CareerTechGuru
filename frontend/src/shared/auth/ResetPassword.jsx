import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context";
import { TextInput } from "../../components";

const ResetPassword = () => {
  const { resetPassword } = useAuthContext();
  const email = sessionStorage.getItem("reset-email");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordToggle, setPasswordToggle] = useState(false);
  const navigate = useNavigate();

  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      console.log("this is email", email, newPassword);
      await resetPassword(email, newPassword);
      sessionStorage.clear("reset-email");
      navigate("/login");
    } catch (error) {
      console.error("Error resetting password:", error);
      // Handle error if needed
    }
  };

  const handlePasswordToggle = () => {
    setPasswordToggle(!passwordToggle);
  };

  return (
    <div className="container-fluid">
      <div className="container-sm">
        <div className="row justify-center items-center min-h-[100vh]">
          <div className="col-lg-6 bg-light shadow py-6">
            <h3 className="h2 text-prime">Enter new password</h3>
            <div className="bg-slate-100 p-2">
              <div className="form-group mb-3">
                <label htmlFor="newPassword" className="h6 mb-1">
                  New Password <sup className="text-danger">*</sup>
                </label>
                <TextInput
                  type={passwordToggle ? "text" : "password"}
                  className="form-control"
                  name="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="New Password"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="confirmPassword" className="h6 mb-1">
                  Confirm New Password <sup className="text-danger">*</sup>
                </label>
                <TextInput
                  type={passwordToggle ? "text" : "password"}
                  className="form-control"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm New Password"
                />
                <div className="form-group mt-2 flex items-center gap-2">
                  <input
                    className="border"
                    type="checkbox"
                    checked={passwordToggle}
                    onChange={handlePasswordToggle}
                    id="toggleConfirmPassword"
                  />
                  <label htmlFor="toggleConfirmPassword">Show password</label>
                </div>
              </div>
              <div className="form-group mb-3">
                <button
                  className="btn bg-prime text-light"
                  onClick={handleResetPassword}
                >
                  Reset Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
