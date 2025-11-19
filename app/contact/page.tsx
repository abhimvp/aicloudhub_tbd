"use client";

import { useState, useEffect } from "react";
import * as motion from "motion/react-client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from "@/components/theme/ThemeProvider";
import ScrollToTop from "@/components/layout/ScrollToTop";

const categories = [
  "Services",
  "Courses",
  "Staffing",
  "Corporate Training",
  "IT Consulting",
  "Other",
];

export default function ContactPage() {
  const { actualTheme } = useTheme();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    designation: "",
    category: "",
    requirements: "",
    agreeToSMS: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We'll get back to you soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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

              {/* Category Dropdown */}
              <div>
                <label
                  className={`block text-sm font-semibold mb-3 ${
                    actualTheme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  How can we help you? *
                </label>
                <Select
                  name="category"
                  required
                  value={formData.category}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, category: value }))
                  }
                >
                  <SelectTrigger
                    className={`w-full h-12 px-4 rounded-full border focus:ring-2 focus:ring-orange-500 transition-all ${
                      actualTheme === "dark"
                        ? "bg-white/5 border-white/20 text-white"
                        : "bg-gray-50 border-gray-200 text-gray-900"
                    }`}
                  >
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent
                    className={`rounded-2xl ${
                      actualTheme === "dark"
                        ? "bg-gray-800 border-white/20"
                        : "bg-white border-gray-200"
                    }`}
                  >
                    {categories.map((category) => (
                      <SelectItem
                        key={category}
                        value={category}
                        className={`cursor-pointer ${
                          actualTheme === "dark"
                            ? "text-gray-300 focus:bg-white/10 focus:text-white"
                            : "text-gray-700 focus:bg-gray-100"
                        }`}
                      >
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Requirements */}
              <div>
                <label
                  className={`block text-sm font-semibold mb-2 ${
                    actualTheme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Please provide details about the specific subcategory or topic
                  you're interested in, along with any requirements. *
                </label>
                <textarea
                  name="requirements"
                  placeholder="YOUR SPECIFIC REQUIREMENT"
                  required
                  rows={6}
                  value={formData.requirements}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none ${
                    actualTheme === "dark"
                      ? "bg-white/5 border-white/20 text-white placeholder-gray-400"
                      : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500"
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

          {/* Contact Info */}
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
                      href="tel:+16789357600"
                      className="text-orange-600 hover:text-orange-700"
                    >
                      +1 (678) 935 7600
                    </a>
                  </div>
                </div>
              </div>
            </div>

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
                Office Hours
              </h3>
              <div
                className={`space-y-2 ${
                  actualTheme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <p>Mon-Fri: 9:30am – 6:30pm</p>
                <p>Sat-Sun: Closed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}
