"use client";

import React from "react";
import Image from "next/image";
import { FOOTER_LINKS, COMMON_CONTENT } from "@/content/content.config";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-border py-[32px]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left: Logo */}
          <a href="#" className="flex items-center">
            <Image
              src="/images/azm-logo.png"
              alt={COMMON_CONTENT.wordmark}
              width={90}
              height={32}
              className="h-8 w-auto object-contain"
            />
          </a>

          {/* Center: Copyright */}
          <div className="text-text-secondary text-[14px]">
            {COMMON_CONTENT.copyright}
          </div>

          {/* Right: Nav Links */}
          <div className="flex gap-4 md:gap-8">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-text-secondary text-[14px] hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
