// components/layout/CourseInquiryForm.tsx
"use client";

import React, { useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, Send, CheckCircle } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";

interface CourseInquiryFormProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
}

export default function CourseInquiryForm({
  isOpen,
  onClose,
  courseTitle,
}: CourseInquiryFormProps) {
  const { actualTheme } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/course-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          courseTitle,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          onClose();
          setIsSuccess(false);
          setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            message: "",
          });
        }, 3000);
      } else {
        alert("Failed to send inquiry. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="pointer-events-auto w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              <Card
                className={`transition-colors duration-300 ${
                  actualTheme === "dark"
                    ? "bg-zinc-900 border-white/10"
                    : "bg-white border-gray-200"
                }`}
              >
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h2
                        className={`text-3xl font-bold mb-2 transition-colors duration-300 ${
                          actualTheme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {isSuccess ? "Inquiry Sent!" : "Inquire About This Course"}
                      </h2>
                      {!isSuccess && (
                        <p
                          className={`text-lg transition-colors duration-300 ${
                            actualTheme === "dark"
                              ? "text-gray-400"
                              : "text-gray-600"
                          }`}
                        >
                          {courseTitle}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={onClose}
                      className={`p-2 rounded-lg transition-colors ${
                        actualTheme === "dark"
                          ? "hover:bg-white/10 text-gray-400 hover:text-white"
                          : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  {isSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-12 h-12 text-white" />
                      </div>
                      <h3
                        className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                          actualTheme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Thank You!
                      </h3>
                      <p
                        className={`text-lg transition-colors duration-300 ${
                          actualTheme === "dark"
                            ? "text-gray-300"
                            : "text-gray-600"
                        }`}
                      >
                        We've received your inquiry and will get back to you
                        shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                            actualTheme === "dark"
                              ? "text-gray-300"
                              : "text-gray-700"
                          }`}
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg transition-colors duration-300 ${
                            actualTheme === "dark"
                              ? "bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-orange-400/50"
                              : "bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-orange-500"
                          } focus:outline-none`}
                          placeholder="John Doe"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                            actualTheme === "dark"
                              ? "text-gray-300"
                              : "text-gray-700"
                          }`}
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg transition-colors duration-300 ${
                            actualTheme === "dark"
                              ? "bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-orange-400/50"
                              : "bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-orange-500"
                          } focus:outline-none`}
                          placeholder="john@company.com"
                        />
                      </div>

                      {/* Company */}
                      <div>
                        <label
                          htmlFor="company"
                          className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                            actualTheme === "dark"
                              ? "text-gray-300"
                              : "text-gray-700"
                          }`}
                        >
                          Company Name *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg transition-colors duration-300 ${
                            actualTheme === "dark"
                              ? "bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-orange-400/50"
                              : "bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-orange-500"
                          } focus:outline-none`}
                          placeholder="Acme Corporation"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="phone"
                          className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                            actualTheme === "dark"
                              ? "text-gray-300"
                              : "text-gray-700"
                          }`}
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg transition-colors duration-300 ${
                            actualTheme === "dark"
                              ? "bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-orange-400/50"
                              : "bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-orange-500"
                          } focus:outline-none`}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                            actualTheme === "dark"
                              ? "text-gray-300"
                              : "text-gray-700"
                          }`}
                        >
                          Additional Information
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg transition-colors duration-300 ${
                            actualTheme === "dark"
                              ? "bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-orange-400/50"
                              : "bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-orange-500"
                          } focus:outline-none resize-none`}
                          placeholder="Tell us about your training needs, number of participants, preferred schedule, etc."
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="flex gap-4 pt-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={onClose}
                          className={`flex-1 transition-colors duration-300 ${
                            actualTheme === "dark"
                              ? "border-white/20 text-white hover:bg-white/10"
                              : "border-gray-300 text-gray-900 hover:bg-gray-100"
                          }`}
                        >
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 bg-linear-to-r from-orange-500 to-yellow-400 text-black font-bold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            "Sending..."
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2" />
                              Send Inquiry
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
