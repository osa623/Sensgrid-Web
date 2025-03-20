import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    solution: "",
    issueReport: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (response) => {
          console.log("Email sent successfully", response);
          setSuccessMessage("Your message has been sent successfully!");
          setFormData({ name: "", email: "", contactNumber: "", solution: "", issueReport: "" });
        },
        (error) => {
          console.error("Error sending email", error);
          setErrorMessage("Failed to send message. Please try again.");
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className="flex flex-col bg-white lgs:mt-12">
      <div className="relative mx-auto px-6 sms:mt-12 p-12">
        <div className="relative flex lgs:h-[10rem] sms:h-[10rem] w-full items-center justify-center">
          <div className="absolute flex items-center justify-center w-full h-[28rem] bg-transparent">
            <div className="flex w-auto h-auto" data-aos='fade-right'>
              <h2 className="font-dmsans text-primary bg-theme01 p-4 lgs:text-5xl sms:text-5xl text-center"
                style={{ fontWeight: '200' }}>
                Contact
              </h2>
              <h2 className="flex bg-primary p-1 flex-col font-dmsans text-theme01 lgs:p-2 sms:text-5xl text-7xl items-center justify-center text-center"
                style={{
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
        className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-2xl transform transition duration-300 hover:scale-105"
      >
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 mds:grid-cols-2 sms:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
          />
        </div>
        <input
          type="tel"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          placeholder="Contact Number"
          required
          className="w-full mt-4 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
        />
        <textarea
          name="solution"
          value={formData.solution}
          onChange={handleChange}
          placeholder="Solution"
          rows={4}
          required
          className="w-full mt-4 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
        />
        <textarea
          name="issueReport"
          value={formData.issueReport}
          onChange={handleChange}
          placeholder="Issue Report"
          rows={4}
          required
          className="w-full mt-4 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 disabled:bg-gray-400"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
          {successMessage && <p className="mt-4 text-green-600 text-center">{successMessage}</p>}
          {errorMessage && <p className="mt-4 text-red-600 text-center">{errorMessage}</p>}
        </div>
      </div>
    </section>
  );
}