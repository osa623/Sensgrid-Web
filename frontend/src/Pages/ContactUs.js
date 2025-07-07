import React, { useState } from "react";
import { submitContactForm } from "../services/api"; // Import the API service

const ContactUs = ({darkMode}) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    solution: "",
    issueReport: "",
    attachment: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [fileName, setFileName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData((prev) => ({ ...prev, attachment: file }));
      setFileName(file.name);
    }
  };

  const removeFile = () => {
    setFormData((prev) => ({ ...prev, attachment: null }));
    setFileName("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('contactNumber', formData.contactNumber);
      formDataToSend.append('solution', formData.solution);
      formDataToSend.append('issueReport', formData.issueReport);
      
      // Only append file if it exists
      if (formData.attachment) {
        formDataToSend.append('attachment', formData.attachment);
      }
      
      // Use the API service instead of direct fetch
      const result = await submitContactForm(formDataToSend);
      
      if (result.success) {
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({ 
          name: "", 
          email: "", 
          contactNumber: "", 
          solution: "", 
          issueReport: "", 
          attachment: null 
        });
        setFileName("");
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setErrorMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className={`flex flex-col ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
    >
      <div className="relative mx-auto px-6 sms:mt-12 lgs:mb-12">
        <div className="relative flex lgs:h-[15rem] lgs:mt-12 h-[10rem] w-full items-center justify-center">
          <div className="absolute flex items-center justify-center w-full h-[28rem] bg-transparent overflow-hidden">
            <div className="flex w-auto h-auto" data-aos='fade-right'>
              <h2 className="font-dmsans text-primary bg-theme01 p-4 lgs:text-7xl text-5xl text-center"
                style={{ fontWeight: '200' }}>
                CONTACT
              </h2>
              <h2 className="flex bg-primary p-1 flex-col font-dmsans text-theme01 lgs:p-2 text-5xl lgs:text-7xl items-center justify-center text-center" style={{
                fontWeight: '900',
                boxShadow: '0px 1px 20px 2px rgba(0,0,0,0.4)'
              }}>
                US
              </h2>
            </div>
          </div>
        </div>
        <div className="sms:w-full mx-auto">
          <form
            onSubmit={handleSubmit}
            className={`max-w-4xl w-full p-8 rounded-xl shadow-2xl transform transition duration-300 hover:scale-100 ${
              darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
            }`}
            style={{
              background: darkMode ?
                "linear-gradient(145deg, #2d3748, #1a202c)" :
                "linear-gradient(145deg, #ffffff, #f3f4f6)",
              borderLeft: "5px solid #3B82F6"
            }}
          >
            {/* Main form grid container */}
            <div className="grid grid-cols-1 lgs:grid-cols-2 gap-6">
              {/* Left Column - Personal Information */}
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className={`w-full px-4 text-secondary py-3 rounded-lg border ${
                    darkMode ? "border-gray-500" : "border-gray-300"
                  } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition`}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className={`w-full px-4 text-secondary py-3 rounded-lg border ${
                    darkMode ? "border-gray-500" : "border-gray-300"
                  } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition`}
                />
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="Contact Number"
                  required
                  className={`w-full px-4 text-secondary py-3 rounded-lg border ${
                    darkMode ? "border-gray-500" : "border-gray-300"
                  } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition`}
                />
              </div>

              {/* Right Column - Message Information */}
              <div className="space-y-4">
                <textarea
                  name="solution"
                  value={formData.solution}
                  onChange={handleChange}
                  placeholder="Solution"
                  rows={4}
                  required
                  className={`w-full px-4 py-3 text-secondary rounded-lg border ${
                    darkMode ? "border-gray-500" : "border-gray-300"
                  } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition`}
                />
                <textarea
                  name="issueReport"
                  value={formData.issueReport}
                  onChange={handleChange}
                  placeholder="Issue Report"
                  rows={4}
                  required
                  className={`w-full px-4 py-3 text-secondary rounded-lg border ${
                    darkMode ? "border-gray-500" : "border-gray-300"
                  } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition`}
                />
              </div>
            </div>
            
            {/* Attachment Section - Full Width */}
            <div className="mt-6 col-span-full">
              <label 
                className={`block mb-2 text-sm font-medium ${
                  darkMode ? "text-blue-300" : "text-blue-600"
                }`}
              >
                Attach File (Optional)
              </label>
              <div className={`flex items-center w-full ${
                darkMode ? "bg-gray-600" : "bg-gray-100"
              } rounded-lg overflow-hidden border ${
                darkMode ? "border-gray-500" : "border-gray-300"
              }`}>
                <label 
                  className="flex-shrink-0 cursor-pointer px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 transition-all duration-300"
                >
                  Browse
                  <input
                    type="file"
                    name="attachment"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
                <span className={`ml-2 truncate flex-grow ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}>
                  {fileName || "No file chosen"}
                </span>
                {fileName && (
                  <button
                    type="button"
                    onClick={removeFile}
                    className="px-3 py-2 text-red-500 hover:text-red-700 focus:outline-none"
                    title="Remove file"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
              <p className={`mt-1 text-xs ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}>
                Supported formats: PDF, DOC, DOCX, JPG, PNG (max 5MB)
              </p>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full mt-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed ${
                darkMode ? "border-2 border-blue-300" : "border-0"
              }`}
              style={{boxShadow: "0 4px 15px rgba(59, 130, 246, 0.5)"}}
            >
              {isSubmitting ? 
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span> : 
                "Send Message"
              }
            </button>
          </form>
          {successMessage && (
            <div className="mt-4 p-3 bg-green-100 border-l-4 border-green-500 text-green-700 rounded-md animate-pulse">
              <p className="text-center">{successMessage}</p>
            </div>
          )}
          {errorMessage && (
            <div className="mt-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-md animate-pulse">
              <p className="text-center">{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;