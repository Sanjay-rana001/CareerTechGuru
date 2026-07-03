import React, { useState, useEffect } from "react";
import { useAuthContext } from "../../../context";

const AccountSettings = () => {
  const { updateUserDetails } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    mobile: "",
    country: "",
  });

  useEffect(() => {
    // Load from session storage
    const data = JSON.parse(sessionStorage.getItem("data") || "{}");
    if (data) {
      setUserData({
        _id: data._id || data.id || "",
        firstName: data.firstName || "",
        lastName: data.lastName || "",
        email: data.email || "",
        username: data.username || "",
        mobile: data.mobile || "",
        country: data.country || "",
      });
    }
  }, []);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { _id, ...updateData } = userData;
      if (!_id) throw new Error("User ID is missing.");
      await updateUserDetails(_id, updateData);
    } catch (error) {
      console.error("Failed to update settings:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 font-sans">
      <div className="max-w-4xl mx-auto px-4">
        <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-8 py-6">
            <h4 className="text-2xl font-bold text-white mb-0">Account Settings</h4>
            <p className="text-slate-300 mt-1 text-sm mb-0">Update your personal information and contact details</p>
          </div>
          
          <div className="p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                <input 
                  type="text" 
                  name="firstName"
                  value={userData.firstName} 
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-800 focus:border-slate-800 transition-all text-sm outline-none" 
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                <input 
                  type="text" 
                  name="lastName"
                  value={userData.lastName} 
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-800 focus:border-slate-800 transition-all text-sm outline-none" 
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={userData.email} 
                  disabled
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed text-sm outline-none" 
                />
                <p className="text-xs text-gray-400 mt-1">Your email address cannot be changed as it is used for login.</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Username</label>
                <input 
                  type="text" 
                  name="username"
                  value={userData.username} 
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-800 focus:border-slate-800 transition-all text-sm outline-none" 
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number</label>
                <input 
                  type="text" 
                  name="mobile"
                  value={userData.mobile} 
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-800 focus:border-slate-800 transition-all text-sm outline-none" 
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Country</label>
                <input 
                  type="text" 
                  name="country"
                  value={userData.country} 
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-800 focus:border-slate-800 transition-all text-sm outline-none" 
                />
              </div>

            </div>
          </div>

          <div className="bg-gray-50 px-8 py-5 border-t border-gray-100 flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-900 text-white font-medium shadow-sm transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountSettings;
