"use client";

import { useState, useEffect } from "react";
import * as motion from "motion/react-client";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme/ThemeProvider";
import ScrollToTop from "@/components/layout/ScrollToTop";

const interests = [
  "Artificial Intelligence",
  "Data & Analytics",
  "Digital Engineering",
  "Experience",
  "Cloud Computing",
  "Cyber Security",
];

export default function ContactPage() {
  const { actualTheme } = useTheme();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    designation: "",
    interest: [] as string[],
    requirements: "",
    date: "",
    agreeToSMS: false,
  });

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interest: prev.interest.includes(interest)
        ? prev.interest.filter((i) => i !== interest)
        : [...prev.interest, interest],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We'll get back to you soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div
      className={`min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 ${
        actualTheme === "dark"
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-b from-gray-50 via-white to-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1
            className={`text-5xl md:text-6xl font-bold mb-4 ${
              actualTheme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            CONTACT <span className="text-orange-600">US</span>
          </h1>
          <p
            className={`text-lg ${
              actualTheme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Let's discuss how we can help you achieve your goals
          </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`p-8 rounded-3xl shadow-xl ${
                actualTheme === "dark"
                  ? "bg-white/5 backdrop-blur-lg border border-white/10"
                  : "bg-white border border-orange-100"
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="FIRST NAME *"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                        actualTheme === "dark"
                          ? "bg-white/5 border-white/20 text-white placeholder-gray-400"
                          : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500"
                      }`}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="LAST NAME *"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                        actualTheme === "dark"
                          ? "bg-white/5 border-white/20 text-white placeholder-gray-400"
                          : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500"
                      }`}
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="BUSINESS EMAIL *"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                        actualTheme === "dark"
                          ? "bg-white/5 border-white/20 text-white placeholder-gray-400"
                          : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500"
                      }`}
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="DIRECT PHONE NUMBER"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                        actualTheme === "dark"
                          ? "bg-white/5 border-white/20 text-white placeholder-gray-400"
                          : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500"
                      }`}
                    />
                  </div>
                </div>

                {/* Designation */}
                <div>
                  <input
                    type="text"
                    name="designation"
                    placeholder="YOUR DESIGNATION AND ROLE *"
                    required
                    value={formData.designation}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                      actualTheme === "dark"
                        ? "bg-white/5 border-white/20 text-white placeholder-gray-400"
                        : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500"
                    }`}
                  />
                </div>

                {/* Interests */}
                <div>
                  <label
                    className={`block text-sm font-semibold mb-3 ${
                      actualTheme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    How can we help you? *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {interests.map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => handleInterestToggle(interest)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          formData.interest.includes(interest)
                            ? "bg-orange-600 text-white shadow-lg"
                            : actualTheme === "dark"
                            ? "bg-white/5 text-gray-300 border border-white/20 hover:bg-white/10"
                            : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200"
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Requirements */}
                <div>
                  <label
                    className={`block text-sm font-semibold mb-2 ${
                      actualTheme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Do you have any specific requirements? Please let us know
                    and we can include them in the discussion. *
                  </label>
                  <textarea
                    name="requirements"
                    placeholder="YOUR SPECIFIC REQUIREMENT"
                    required
                    rows={4}
                    value={formData.requirements}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none ${
                      actualTheme === "dark"
                        ? "bg-white/5 border-white/20 text-white placeholder-gray-400"
                        : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500"
                    }`}
                  />
                </div>

                {/* Date */}
                <div>
                  <label
                    className={`block text-sm font-semibold mb-2 ${
                      actualTheme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Please provide a date that best suits your availability and
                    we will make our calendars work accordingly.
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                      actualTheme === "dark"
                        ? "bg-white/5 border-white/20 text-white"
                        : "bg-gray-50 border-gray-200 text-gray-900"
                    }`}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full py-6 text-lg font-semibold rounded-full"
                >
                  Submit
                </Button>
              </form>
            </motion.div>

            {/* Connect With Us Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div
                className={`p-8 rounded-3xl shadow-xl ${
                  actualTheme === "dark"
                    ? "bg-white/5 backdrop-blur-lg border border-white/10"
                    : "bg-white border border-orange-100"
                }`}
              >
                <h2
                  className={`text-2xl font-bold mb-6 ${
                    actualTheme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  CONNECT WITH US
                </h2>
                <div className="flex gap-4 flex-wrap">
                  {[
                    { name: "Facebook", icon: "📘" },
                    { name: "Twitter", icon: "🐦" },
                    { name: "LinkedIn", icon: "💼" },
                    { name: "Instagram", icon: "📸" },
                    { name: "YouTube", icon: "📹" },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href="#"
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition-transform hover:scale-110 ${
                        actualTheme === "dark"
                          ? "bg-white/10 hover:bg-orange-600"
                          : "bg-gray-100 hover:bg-orange-600"
                      }`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div
                className={`p-8 rounded-3xl shadow-xl ${
                  actualTheme === "dark"
                    ? "bg-white/5 backdrop-blur-lg border border-white/10"
                    : "bg-white border border-orange-100"
                }`}
              >
                <h3
                  className={`text-xl font-bold mb-4 ${
                    actualTheme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-orange-600 text-xl">📧</span>
                    <div>
                      <p
                        className={`font-semibold ${
                          actualTheme === "dark"
                            ? "text-gray-300"
                            : "text-gray-700"
                        }`}
                      >
                        Email
                      </p>
                      <a
                        href="mailto:info@aicloudhub.com"
                        className="text-orange-600 hover:text-orange-700"
                      >
                        info@aicloudhub.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-orange-600 text-xl">📞</span>
                    <div>
                      <p
                        className={`font-semibold ${
                          actualTheme === "dark"
                            ? "text-gray-300"
                            : "text-gray-700"
                        }`}
                      >
                        Phone
                      </p>
                      <a
                        href="tel:+1234567890"
                        className="text-orange-600 hover:text-orange-700"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-orange-600 text-xl">📍</span>
                    <div>
                      <p
                        className={`font-semibold ${
                          actualTheme === "dark"
                            ? "text-gray-300"
                            : "text-gray-700"
                        }`}
                      >
                        Location
                      </p>
                      <p
                        className={`${
                          actualTheme === "dark"
                            ? "text-gray-400"
                            : "text-gray-600"
                        }`}
                      >
                        Your City, State, Country
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div
                className={`p-8 rounded-3xl shadow-xl ${
                  actualTheme === "dark"
                    ? "bg-white/5 backdrop-blur-lg border border-white/10"
                    : "bg-white border border-orange-100"
                }`}
              >
                <h3
                  className={`text-xl font-bold mb-4 ${
                    actualTheme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Business Hours
                </h3>
                <div
                  className={`space-y-2 ${
                    actualTheme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      <ScrollToTop />
    </div>
  );
}
