"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PORTFOLIO_CONTENT, PortfolioCard } from "@/content/content.config";
import * as LucideIcons from "lucide-react";

export const PortfolioSection = () => {
  return (
    <section id="services" className="bg-section-alt py-section">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.15 }}
          className="text-center mb-12"
        >
          <span className="text-accent text-[12px] font-semibold tracking-[3px] uppercase block mb-2">
            {PORTFOLIO_CONTENT.label}
          </span>
          <h2 className="text-text-primary text-[40px] font-bold">
            {PORTFOLIO_CONTENT.title}
          </h2>
          <p className="text-text-secondary text-[16px] mt-4 max-w-2xl mx-auto">
            {PORTFOLIO_CONTENT.subtext}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {PORTFOLIO_CONTENT.cards.map((card, index) => {
            return <PortfolioCardComponent key={index} card={card} index={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

const PortfolioCardComponent = ({ card, index }: { card: PortfolioCard; index: number }) => {
  const [imgError, setImgError] = React.useState(false);
  const IconComponent = (LucideIcons as unknown as Record<string, LucideIcons.LucideIcon>)[card.iconName];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.15 }}
      className="relative rounded-card overflow-hidden min-h-[280px] shadow-card group"
    >
      {/* Background Image */}
      {!imgError ? (
        <Image
          src={card.imageUrl}
          alt={card.title}
          fill
          className="object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-full h-full bg-[#1D4A52]" />
      )}
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary opacity-[72%] transition-opacity group-hover:opacity-[80%]" />

      {/* Content */}
      <div className="relative z-10 p-[28px] h-full flex flex-col">
        {IconComponent && (
          <IconComponent className="text-white mb-[12px]" size={24} />
        )}
        <h3 className="text-white text-[18px] font-semibold">
          {card.title}
        </h3>
        <p className="text-white text-opacity-80 text-[14px] font-normal leading-[1.6] mt-[8px]">
          {card.description}
        </p>
        <div className="mt-auto pt-[16px]">
          <span className="inline-block border border-accent text-accent text-[12px] px-[10px] py-[4px] rounded-[10px] transparent">
            {card.badge}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
