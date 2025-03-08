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
    <section id="contact" className="py-20 bg-white lgs:mt-12">
      <div className="container mx-auto px-6">
            <div className="relative flex lgs:h-[10rem] sms:h-[10rem] w-full items-center justify-center">
                            <div className="absolute flex items-center justify-center w-full h-[28rem] bg-transparent">
                               <div className="flex w-auto h-auto " data-aos='fade-right'>
                                  <h2 className="font-dmsans text-primary bg-theme01 p-4 lgs:text-5xl sms:text-5xl text-center"
                                  style={{
                                    fontWeight:'200'
                                  }}>
                                    Get In Touch with
                                  </h2>
                                  <h2 className="flex bg-primary p-1 flex-col font-dmsans text-theme01 lgs:p-2 sms:text-5xl text-7xl items-center justify-center text-center" style={{
                                    fontWeight:'900',
                                    boxShadow:'0px 1px 20px 2px rgba(0,0,0,0.4)'
                                  }}>
                                    US
                                  </h2>
                               </div>
                            </div>
             </div>
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-lg" style={{
            boxShadow:'0px 4px 10px  rgba(0, 0, 0, 0.4)'
          }}>
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