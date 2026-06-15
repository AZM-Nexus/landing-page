"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT_CONTENT } from "@/content/content.config";
import * as LucideIcons from "lucide-react";
import { CheckCircle } from "lucide-react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    inquiryType: CONTACT_CONTENT.form.inquiryTypeOptions[0],
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.company.trim()) newErrors.company = "Company/Organisation is required";
    if (!formData.inquiryType.trim()) newErrors.inquiryType = "Inquiry type is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setSubmitError("");

    try {
      const response = await fetch("https://formspree.io/f/mgobkzgy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setSubmitError(data?.errors?.[0]?.message || "Something went wrong. Please try again.");
      }
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      company: "",
      inquiryType: CONTACT_CONTENT.form.inquiryTypeOptions[0],
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
    setSubmitError("");
  };

  return (
    <section id="contact" className="bg-primary py-section">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-12 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.15 }}
            className="text-white"
          >
            <h2 className="text-[40px] font-bold leading-tight">
              {CONTACT_CONTENT.title}
            </h2>
            <p className="text-white opacity-70 text-[16px] mt-[20px] max-w-md">
              {CONTACT_CONTENT.subtext}
            </p>

            <div className="mt-[32px] space-y-[16px]">
              {CONTACT_CONTENT.details.map((detail, index) => {
                const IconComponent = (LucideIcons as unknown as Record<string, LucideIcons.LucideIcon>)[detail.icon];
                return (
                  <div key={index} className="flex items-center gap-[12px] first:mt-[32px] mt-[16px]">
                    <div className="w-[24px] h-[24px] flex items-center justify-center">
                      {IconComponent && <IconComponent className="text-accent" size={24} />}
                    </div>
                    <div>
                      <p className="text-white text-[14px] font-normal">
                        <span className="text-white opacity-70 block text-[12px] uppercase font-semibold tracking-wider">{detail.label}</span>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="text-white hover:text-accent transition-colors"
                            target={detail.href.startsWith("http") ? "_blank" : undefined}
                            rel={detail.href.startsWith("http") ? "noreferrer" : undefined}
                          >
                            {detail.value}
                          </a>
                        ) : (
                          detail.value
                        )}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column (Form) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.15 }}
            className="bg-white rounded-card p-[32px] shadow-contact"
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle size={48} className="text-accent" />
                <h3 className="text-text-primary text-[20px] font-semibold mt-[16px]">
                  Inquiry Sent Successfully
                </h3>
                <p className="text-text-secondary text-[14px] mt-[8px]">
                  Thank you for reaching out. A member of the AZM Nexus team will be in touch with you shortly.
                </p>
                <button
                  onClick={handleReset}
                  className="text-accent text-[14px] mt-8 focus:outline-none"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-text-primary text-[14px] font-semibold mb-2">
                    {CONTACT_CONTENT.form.fullNameLabel}
                  </label>
                  <input
                    type="text"
                    placeholder={CONTACT_CONTENT.form.fullNamePlaceholder}
                    className={`w-full border ${errors.fullName ? "border-[#FF4444]" : "border-border"} rounded-btn p-[12px_16px] text-text-primary placeholder-text-secondary text-[14px] focus:outline-none focus:border-accent`}
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({...formData, fullName: e.target.value});
                      if (errors.fullName) setErrors({...errors, fullName: ""});
                    }}
                  />
                  {errors.fullName && <p className="text-[#FF4444] text-[13px] mt-1">{errors.fullName}</p>}
                </div>
                <div>
                  <label className="block text-text-primary text-[14px] font-semibold mb-2">
                    {CONTACT_CONTENT.form.emailLabel}
                  </label>
                  <input
                    type="email"
                    placeholder={CONTACT_CONTENT.form.emailPlaceholder}
                    className={`w-full border ${errors.email ? "border-[#FF4444]" : "border-[#E0EEEE]"} rounded-btn p-[12px_16px] text-text-primary placeholder-text-secondary text-[14px] focus:outline-none focus:border-[#2EB8A6]`}
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({...formData, email: e.target.value});
                      if (errors.email) setErrors({...errors, email: ""});
                    }}
                  />
                  {errors.email && <p className="text-[#FF4444] text-[13px] mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-text-primary text-[14px] font-semibold mb-2">
                    {CONTACT_CONTENT.form.companyLabel}
                  </label>
                  <input
                    type="text"
                    placeholder={CONTACT_CONTENT.form.companyPlaceholder}
                    className={`w-full border ${errors.company ? "border-[#FF4444]" : "border-border"} rounded-btn p-[12px_16px] text-text-primary placeholder-text-secondary text-[14px] focus:outline-none focus:border-accent`}
                    value={formData.company}
                    onChange={(e) => {
                      setFormData({...formData, company: e.target.value});
                      if (errors.company) setErrors({...errors, company: ""});
                    }}
                  />
                  {errors.company && <p className="text-[#FF4444] text-[13px] mt-1">{errors.company}</p>}
                </div>
                <div>
                  <label className="block text-text-primary text-[14px] font-semibold mb-2">
                    {CONTACT_CONTENT.form.inquiryTypeLabel}
                  </label>
                  <select
                    className={`w-full border ${errors.inquiryType ? "border-[#FF4444]" : "border-border"} rounded-btn p-[12px_16px] text-text-primary text-[14px] focus:outline-none focus:border-accent bg-white`}
                    value={formData.inquiryType}
                    onChange={(e) => {
                      setFormData({...formData, inquiryType: e.target.value});
                      if (errors.inquiryType) setErrors({...errors, inquiryType: ""});
                    }}
                  >
                    {CONTACT_CONTENT.form.inquiryTypeOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {errors.inquiryType && <p className="text-[#FF4444] text-[13px] mt-1">{errors.inquiryType}</p>}
                </div>
                <div>
                  <label className="block text-text-primary text-[14px] font-semibold mb-2">
                    {CONTACT_CONTENT.form.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={CONTACT_CONTENT.form.messagePlaceholder}
                    className={`w-full border ${errors.message ? "border-[#FF4444]" : "border-border"} rounded-btn p-[12px_16px] text-text-primary placeholder-text-secondary text-[14px] focus:outline-none focus:border-accent`}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({...formData, message: e.target.value});
                      if (errors.message) setErrors({...errors, message: ""});
                    }}
                  />
                  {errors.message && <p className="text-[#FF4444] text-[13px] mt-1">{errors.message}</p>}
                </div>
                {submitError && (
                  <p className="text-[#FF4444] text-[14px] mb-4 text-center">{submitError}</p>
                )}
                <motion.button
                  whileHover={!isLoading ? { scale: 1.02 } : {}}
                  transition={{ duration: 0.15 }}
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-accent text-white text-[16px] font-semibold py-[16px] rounded-btn ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  {isLoading ? "Sending..." : CONTACT_CONTENT.form.submitButton}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
