"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle, AlertCircle, Upload } from "lucide-react";
import { motion } from "motion/react";

// Validation Schema
const formSchema = z.object({
    fullName: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Valid phone number is required"),
    linkedin: z.string().url("Invalid URL").optional().or(z.literal("")),
    coverLetter: z.string().optional(),
    // File validation is handled manually for simplicity in this example
});

type FormData = z.infer<typeof formSchema>;

interface Props {
    jobTitle: string;
}

export function JobApplicationForm({ jobTitle }: Props) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [resumeFile, setResumeFile] = useState<File | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        if (!resumeFile) {
            setError("Please upload your resume.");
            return;
        }

        setIsSubmitting(true);
        setError(null);

        try {
            // Create FormData to send file
            const formData = new FormData();
            formData.append("fullName", data.fullName);
            formData.append("email", data.email);
            formData.append("phone", data.phone);
            formData.append("jobTitle", jobTitle);
            if (data.linkedin) formData.append("linkedin", data.linkedin);
            if (data.coverLetter) formData.append("coverLetter", data.coverLetter);
            formData.append("resume", resumeFile);

            const response = await fetch("/api/job-application", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Failed to submit application");
            }

            setIsSuccess(true);
            reset();
            setResumeFile(null);
        } catch (err) {
            console.error(err);
            setError("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
            >
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Application Received!
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Thanks for applying to be a {jobTitle}. We&apos;ve sent a confirmation email to your inbox.
                </p>
                <Button
                    onClick={() => setIsSuccess(false)}
                    variant="outline"
                    className="w-full"
                >
                    Submit Another Application
                </Button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                    id="fullName"
                    placeholder="John Doe"
                    {...register("fullName")}
                    className={errors.fullName ? "border-red-500" : ""}
                />
                {errors.fullName && (
                    <p className="text-xs text-red-500">{errors.fullName.message}</p>
                )}
            </div>

            {/* Email */}
            <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    {...register("email")}
                    className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                    <p className="text-xs text-red-500">{errors.email.message}</p>
                )}
            </div>

            {/* Phone */}
            <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    {...register("phone")}
                    className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && (
                    <p className="text-xs text-red-500">{errors.phone.message}</p>
                )}
            </div>

            {/* LinkedIn */}
            <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn URL (Optional)</Label>
                <Input
                    id="linkedin"
                    placeholder="https://linkedin.com/in/johndoe"
                    {...register("linkedin")}
                />
                {errors.linkedin && (
                    <p className="text-xs text-red-500">{errors.linkedin.message}</p>
                )}
            </div>

            {/* Resume Upload */}
            <div className="space-y-2">
                <Label htmlFor="resume">Resume (PDF, DOC, DOCX)</Label>
                <div className="relative">
                    <Input
                        id="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                                if (file.size > 5 * 1024 * 1024) {
                                    setError("File size must be less than 5MB");
                                    setResumeFile(null);
                                    return;
                                }
                                setError(null);
                                setResumeFile(file);
                            }
                        }}
                    />
                    <label
                        htmlFor="resume"
                        className={`flex items-center justify-center w-full px-4 py-3 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${resumeFile
                            ? "border-green-500 bg-green-50 dark:bg-green-900/10"
                            : "border-gray-300 dark:border-gray-700 hover:border-orange-500"
                            }`}
                    >
                        <div className="text-center">
                            {resumeFile ? (
                                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                                    <CheckCircle className="w-4 h-4" />
                                    <span className="text-sm font-medium truncate max-w-[200px]">
                                        {resumeFile.name}
                                    </span>
                                </div>
                            ) : (
                                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                                    <Upload className="w-4 h-4" />
                                    <span className="text-sm">Click to upload (Max 5MB)</span>
                                </div>
                            )}
                        </div>
                    </label>
                </div>
                {!resumeFile && error && error.includes("resume") && (
                    <p className="text-xs text-red-500">Resume is required</p>
                )}
            </div>

            {/* Cover Letter */}
            <div className="space-y-2">
                <Label htmlFor="coverLetter">Cover Letter (Optional)</Label>
                <Textarea
                    id="coverLetter"
                    placeholder="Tell us why you're a great fit..."
                    className="min-h-[100px]"
                    {...register("coverLetter")}
                />
            </div>

            {/* Error Message */}
            {error && (
                <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                    <AlertCircle className="w-4 h-4" />
                    {error}
                </div>
            )}

            {/* Submit Button */}
            <Button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                disabled={isSubmitting}
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending Application...
                    </>
                ) : (
                    "Submit Application"
                )}
            </Button>
        </form>
    );
}
