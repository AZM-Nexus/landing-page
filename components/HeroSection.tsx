"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "@/content/content.config";

export const HeroSection = () => {
  const [imgError, setImgError] = React.useState(false);

  return (
    <section id="hero" className="relative min-h-[75vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {!imgError ? (
          <Image
            src={HERO_CONTENT.backgroundImage}
            alt="Nigerian corporate boardroom"
            fill
            className="object-cover object-top"
            priority
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-[#1D4A52]" />
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary opacity-[78%]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-20 py-20">
        <div className="max-w-[620px]">
          {/* Label */}
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0 }}
            className="block text-accent text-[12px] font-semibold tracking-[4px] uppercase mb-[20px]"
          >
            {HERO_CONTENT.label}
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="text-white text-[36px] md:text-[58px] font-bold leading-[1.15] mb-[20px]"
          >
            {HERO_CONTENT.headline}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            className="text-white text-opacity-80 text-[16px] font-normal leading-[1.7] max-w-[520px] mb-[36px]"
          >
            {HERO_CONTENT.subtext}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
            className="flex flex-wrap gap-[16px] mb-[48px]"
          >
            <motion.a
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.15 }}
              href="#portfolio"
              className="bg-accent text-white text-[15px] font-semibold px-[28px] py-[14px] rounded-btn inline-block"
            >
              {HERO_CONTENT.ctaPrimary}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.15 }}
              href="#contact"
              className="bg-transparent border-[1.5px] border-white text-white text-[15px] font-medium px-[28px] py-[14px] rounded-btn inline-block"
            >
              {HERO_CONTENT.ctaSecondary}
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
            className="flex items-center gap-[32px]"
          >
            {HERO_CONTENT.stats.map((stat, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col">
                  <span className="text-accent text-[28px] font-bold">
                    {stat.value}
                  </span>
                  <span className="text-white text-opacity-70 text-[12px] font-normal">
                    {stat.label}
                  </span>
                </div>
                {index < HERO_CONTENT.stats.length - 1 && (
                  <div className="h-[40px] w-[1px] bg-white bg-opacity-25" />
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
