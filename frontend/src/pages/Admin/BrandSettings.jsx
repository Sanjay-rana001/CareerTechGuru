import React, { useState, useEffect } from "react";
import { useBrandContext } from "../../context";
import { Helmet } from "react-helmet-async";

const BrandSettings = () => {
  const { siteConfig, updateBrandConfig, loading } = useBrandContext();
  const [formData, setFormData] = useState(siteConfig || {});
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (siteConfig) {
      setFormData(siteConfig);
    }
  }, [siteConfig]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    await updateBrandConfig(formData);
    setIsSaving(false);
  };

  if (loading) return <div>Loading settings...</div>;

  return (
    <>
      <Helmet>
        <title>Brand Settings | {siteConfig?.appName}</title>
      </Helmet>
      <div className="p-4 sm:p-8 w-full max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-800">Brand Settings</h1>
          <p className="text-slate-500 mt-1">Configure your white-labeled application settings here. Changes will reflect globally.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm text-left">
          
          {/* General App Info */}
          <div>
            <h2 className="text-lg font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-100">General Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700">App Name</label>
                <input
                  type="text"
                  name="appName"
                  value={formData.appName || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700">Logo Text (Primary)</label>
                <input
                  type="text"
                  name="logoTextPrimary"
                  value={formData.logoTextPrimary || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700">Logo Text (Secondary/Colored)</label>
                <input
                  type="text"
                  name="logoTextSecondary"
                  value={formData.logoTextSecondary || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-100">Contact Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700">Contact Email</label>
                <input
                  type="email"
                  name="contactEmail"
                  value={formData.contactEmail || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700">Contact Phone</label>
                <input
                  type="text"
                  name="contactPhone"
                  value={formData.contactPhone || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700">Company Website</label>
                <input
                  type="url"
                  name="contactWebsite"
                  value={formData.contactWebsite || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700">Contact Address</label>
                <input
                  type="text"
                  name="contactAddress"
                  value={formData.contactAddress || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                  required
                />
              </div>
            </div>
          </div>

          {/* About Us Content */}
          <div>
            <h2 className="text-lg font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-100">About Us Content</h2>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700">Hero Heading</label>
                <input
                  type="text"
                  name="aboutUsHeroHeading"
                  value={formData.aboutUsHeroHeading || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700">About Us Description</label>
                <textarea
                  name="aboutUsDescription"
                  value={formData.aboutUsDescription || ""}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all resize-y"
                  required
                />
              </div>
            </div>
          </div>

          {/* SEO Info */}
          <div>
            <h2 className="text-lg font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-100">SEO Settings</h2>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700">Meta Description</label>
                <input
                  type="text"
                  name="metaDescription"
                  value={formData.metaDescription || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                  required
                />
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button
              type="submit"
              disabled={isSaving}
              className={`px-8 py-2.5 bg-[#2563EB] hover:bg-blue-700 text-white font-semibold rounded-lg shadow-sm transition-colors border-0 cursor-pointer ${isSaving ? 'opacity-70 cursor-wait' : ''}`}
            >
              {isSaving ? "Saving..." : "Save Settings"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BrandSettings;
