"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TEAM_CONTENT, TeamMember } from "@/content/content.config";
import { User } from "lucide-react";

export const TeamSection = () => {
  return (
    <section id="team" className="bg-section-alt py-section">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.15 }}
          className="mb-12"
        >
          <span className="text-accent text-[12px] font-semibold tracking-[3px] uppercase block mb-2">
            {TEAM_CONTENT.label}
          </span>
          <h2 className="text-text-primary text-[40px] font-bold">
            {TEAM_CONTENT.title}
          </h2>
          <p className="text-text-secondary text-[16px] mt-4 max-w-2xl">
            {TEAM_CONTENT.subtext}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {TEAM_CONTENT.members.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <span className="text-text-secondary text-[14px] italic">
            {TEAM_CONTENT.footerText}
          </span>
        </div>
      </div>
    </section>
  );
};

const TeamMemberCard = ({ member, index }: { member: TeamMember; index: number }) => {
  const [imgError, setImgError] = React.useState(false);
  const [flipped, setFlipped] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.15 }}
      className="h-[360px]"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onFocus={() => setFlipped(true)}
      onBlur={() => setFlipped(false)}
      onClick={() => setFlipped((prev) => !prev)}
      tabIndex={0}
      role="button"
      aria-label={`View profile of ${member.name}`}
    >
      <div className="h-full" style={{ perspective: "1000px" }}>
        <div
          className="relative h-full w-full transition-transform duration-700 ease-in-out"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          <div className="absolute inset-0 bg-white rounded-card shadow-card p-[24px] text-center" style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", position: "absolute", zIndex: flipped ? 0 : 1 }}>
            <div className="w-[96px] h-[96px] rounded-full mx-auto mb-4 relative overflow-hidden flex items-center justify-center bg-border">
              {member.imageUrl && !imgError ? (
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover"
                  onError={() => setImgError(true)}
                />
              ) : member.imageUrl && imgError ? (
                <div className="w-full h-full bg-[#1D4A52]" />
              ) : (
                <User size={40} className="text-text-secondary" />
              )}
            </div>
            <h3 className="text-text-primary text-[16px] font-semibold mt-[16px]">
              {member.name}
            </h3>
            <p className="text-accent text-[13px] font-medium mt-[4px]">
              {member.role}
            </p>
          </div>

          <div
            className="absolute inset-0 rounded-card shadow-card p-[20px] text-center text-white"
            style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", background: "linear-gradient(135deg, #1D4A52 0%, #2EB8A6 100%)", zIndex: flipped ? 1 : 0, position: "absolute" }}
          >
            <div className="h-full flex flex-col items-center justify-start gap-3" style={{ backfaceVisibility: "hidden" }}>
              <h3 className="text-[15px] font-bold text-white">
                {member.name}
              </h3>
              <p className="text-[11px] text-white/70 uppercase tracking-widest mt-[4px] mb-[12px]">
                {member.role}
              </p>
              <p className="text-[12px] leading-snug text-white/90 max-w-[220px]">
                {member.bio}
              </p>
              {member.linkedin ? (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="mt-[12px] inline-block rounded-full border border-white/30 px-4 py-2 text-[11px] font-medium text-white transition hover:bg-white/10"
                >
                  View LinkedIn
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
