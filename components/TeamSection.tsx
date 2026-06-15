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

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.15 }}
      className="bg-white rounded-card p-[24px] shadow-card text-center"
    >
      {/* Image / Placeholder */}
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
      <p className="text-text-secondary text-[14px] font-normal mt-[8px]">
        {member.bio}
      </p>
    </motion.div>
  );
};
