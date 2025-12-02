// components/layout/Careers/JobApplicationForm.tsx
"use client";

import React, { useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { X, Send, CheckCircle, Upload, File } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";

interface JobApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
  jobId: string;
  applicationEmail?: string;
}

export default function JobApplicationForm({
  isOpen,
  onClose,
  jobTitle,
  jobId,
  applicationEmail,
}: JobApplicationFormProps) {
  const { actualTheme } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      const validExtensions = [".pdf", ".doc", ".docx"];
      const fileExtension = file.name
        .substring(file.name.lastIndexOf("."))
        .toLowerCase();

      if (
        !validTypes.includes(file.type) &&
        !validExtensions.includes(fileExtension)
      ) {
        alert(
          "Please upload a valid resume file (PDF, DOC, or DOCX). Max size: 5MB"
        );
        return;
      }

      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB");
        return;
      }

      setSelectedFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Please upload your resume");
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone || "");
      formDataToSend.append("message", formData.message || "");
      formDataToSend.append("jobTitle", jobTitle);
      formDataToSend.append("jobId", jobId);
      formDataToSend.append("resume", selectedFile);
      if (applicationEmail) {
        formDataToSend.append("applicationEmail", applicationEmail);
      }

      const response = await fetch("/api/job-application", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          onClose();
          setIsSuccess(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          setSelectedFile(null);
        }, 3000);
      } else {
        alert(result.error || "Failed to submit application. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
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

          {/* Slide-in Side Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className={`fixed top-0 right-0 h-full w-full sm:w-[600px] z-50 shadow-2xl overflow-y-auto ${actualTheme === "dark" ? "bg-zinc-900" : "bg-white"
              }`}
            data-lenis-prevent
          >
            {/* Header */}
            <div
              className={`sticky top-0 z-10 px-8 py-6 border-b ${actualTheme === "dark"
                ? "bg-zinc-900 border-white/10"
                : "bg-white border-gray-200"
                }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2
                    className={`text-2xl sm:text-3xl font-bold mb-2 transition-colors duration-300 ${actualTheme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                  >
                    {isSuccess ? "Application Sent!" : "Apply for Position"}
                  </h2>
                  {!isSuccess && (
                    <p
                      className={`text-base sm:text-lg transition-colors duration-300 ${actualTheme === "dark"
                        ? "text-gray-400"
                        : "text-gray-600"
                        }`}
                    >
                      {jobTitle}
                    </p>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className={`p-2 rounded-lg transition-colors ${actualTheme === "dark"
                    ? "hover:bg-white/10 text-gray-400 hover:text-white"
                    : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
                    }`}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="px-8 py-6">
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
                    className={`text-2xl font-bold mb-3 transition-colors duration-300 ${actualTheme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                  >
                    Thank You!
                  </h3>
                  <p
                    className={`text-lg transition-colors duration-300 ${actualTheme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                  >
                    We&apos;ve received your application and will review it
                    shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${actualTheme === "dark"
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
                      className={`w-full px-4 py-3 rounded-lg transition-colors duration-300 ${actualTheme === "dark"
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
                      className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${actualTheme === "dark"
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
                      className={`w-full px-4 py-3 rounded-lg transition-colors duration-300 ${actualTheme === "dark"
                        ? "bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-orange-400/50"
                        : "bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-orange-500"
                        } focus:outline-none`}
                      placeholder="john@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${actualTheme === "dark"
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
                      className={`w-full px-4 py-3 rounded-lg transition-colors duration-300 ${actualTheme === "dark"
                        ? "bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-orange-400/50"
                        : "bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-orange-500"
                        } focus:outline-none`}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <label
                      htmlFor="resume"
                      className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${actualTheme === "dark"
                        ? "text-gray-300"
                        : "text-gray-700"
                        }`}
                    >
                      Resume (PDF, DOC, or DOCX) *
                    </label>
                    <div
                      className={`rounded-lg border border-dashed p-6 transition-colors duration-300 ${actualTheme === "dark"
                        ? "border-white/20 bg-white/5 hover:bg-white/10"
                        : "border-orange-200 bg-orange-50/50 hover:bg-orange-50"
                        }`}
                    >
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        required
                        className="hidden"
                      />
                      <label
                        htmlFor="resume"
                        className="cursor-pointer flex flex-col items-center gap-3"
                      >
                        <div
                          className={`p-4 rounded-full ${actualTheme === "dark"
                            ? "bg-white/10"
                            : "bg-orange-100"
                            }`}
                        >
                          <Upload
                            className={`w-6 h-6 ${actualTheme === "dark"
                              ? "text-orange-400"
                              : "text-orange-600"
                              }`}
                          />
                        </div>
                        <span
                          className={`text-sm font-medium ${actualTheme === "dark"
                            ? "text-gray-300"
                            : "text-gray-700"
                            }`}
                        >
                          {selectedFile
                            ? selectedFile.name
                            : "Click to upload or drag and drop"}
                        </span>
                        <span
                          className={`text-xs ${actualTheme === "dark"
                            ? "text-gray-500"
                            : "text-gray-500"
                            }`}
                        >
                          PDF, DOC, or DOCX (Max 5MB)
                        </span>
                      </label>
                      {selectedFile && (
                        <div className="mt-4 flex items-center gap-2">
                          <File className="w-4 h-4 text-orange-500" />
                          <span
                            className={`text-sm ${actualTheme === "dark"
                              ? "text-gray-300"
                              : "text-gray-700"
                              }`}
                          >
                            {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Cover Letter/Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${actualTheme === "dark"
                        ? "text-gray-300"
                        : "text-gray-700"
                        }`}
                    >
                      Cover Letter / Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg transition-colors duration-300 ${actualTheme === "dark"
                        ? "bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-orange-400/50"
                        : "bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-orange-500"
                        } focus:outline-none resize-none`}
                      placeholder="Tell us why you're interested in this position..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex gap-4 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={onClose}
                      className={`flex-1 transition-colors duration-300 ${actualTheme === "dark"
                        ? "border-white/20 text-white hover:bg-white/10"
                        : "border-gray-300 text-gray-900 hover:bg-gray-100"
                        }`}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting || !selectedFile}
                      className="flex-1 bg-linear-to-r from-orange-500 to-yellow-400 text-black font-bold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Submit Application
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

