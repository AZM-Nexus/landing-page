"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { NAV_CONTENT, COMMON_CONTENT } from "@/content/content.config";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    if (isMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-border z-50">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="/images/azm-logo.png"
            alt={COMMON_CONTENT.wordmark}
            width={100}
            height={36}
            className="h-9 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_CONTENT.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-text-primary text-[14px] font-medium hover:text-accent transition-colors relative group"
            >
              {link.label}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.15 }}
            className="bg-primary text-white text-[14px] font-medium px-6 py-[12px] rounded-btn inline-block"
          >
            {NAV_CONTENT.ctaText}
          </motion.a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col md:hidden">
          <div className="flex justify-end p-6">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-primary"
            >
              <X size={32} />
            </button>
          </div>
          <div className="flex flex-col items-center gap-8 pt-12">
            {NAV_CONTENT.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-text-primary text-2xl font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.15 }}
              className="bg-primary text-white text-[16px] font-medium px-8 py-4 rounded-btn mt-4 inline-block"
              onClick={() => setIsMenuOpen(false)}
            >
              {NAV_CONTENT.ctaText}
            </motion.a>
          </div>
        </div>
      )}
    </nav>
  );
};
