import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    solution: "",
    issueReport: "",
    file: null,
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
          setFormData({ name: "", email: "", contactNumber: "", solution: "", issueReport: "", file: null });
        },
        (error) => {
          console.error("Error sending email", error);
          setErrorMessage("Failed to send message. Please try again.");
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className="py-20 bg-white lgs:mt-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-dmsans font-bold text-center mb-10">Get In Touch with Us</h2>
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 mds:grid-cols-2 sms:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
              />
            </div>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Contact Number"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
            />
            <textarea
              name="solution"
              value={formData.solution}
              onChange={handleChange}
              placeholder="Solution"
              rows={4}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
            />
            <textarea
              name="issueReport"
              value={formData.issueReport}
              onChange={handleChange}
              placeholder="Issue Report"
              rows={4}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
            />
            <h2 className="font-dmsans text-md text-start" style={{
              fontWeight:'200'
            }}>
              Are there any files? Attach here
            </h2>
            <input
              type="file"
              name="file"
              onChange={handleFileChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 file:bg-blue-500 file:text-white file:px-4 file:py-2 file:rounded-lg file:hover:bg-blue-600 transition-colors"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400"
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