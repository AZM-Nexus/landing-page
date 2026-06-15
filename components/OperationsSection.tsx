"use client";

import React from "react";
import { motion } from "framer-motion";
import { OPERATIONS_CONTENT } from "@/content/content.config";

export const OperationsSection = () => {
  return (
    <section id="operations" className="bg-white py-section">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.15 }}
          className="mb-12"
        >
          <span className="text-accent text-[12px] font-semibold tracking-[3px] uppercase block mb-2">
            {OPERATIONS_CONTENT.label}
          </span>
          <h2 className="text-text-primary text-[40px] font-bold">
            {OPERATIONS_CONTENT.title}
          </h2>
          <p className="text-text-secondary text-[16px] mt-4 max-w-2xl">
            {OPERATIONS_CONTENT.subtext}
          </p>
          <p className="text-text-secondary text-[14px] mt-4 max-w-xl opacity-80">
            {OPERATIONS_CONTENT.legend}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          {OPERATIONS_CONTENT.cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.15 }}
              className="bg-section-alt border-l-4 rounded-card p-[32px] min-h-[180px] shadow-operations flex flex-col transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-text-primary text-[18px] font-semibold">
                  {card.title}
                </h3>
                <span
                  className={`text-white text-[12px] font-medium px-[10px] py-[4px] rounded-[20px] ${
                    card.status === "Active" ? "bg-accent" : "bg-primary"
                  }`}
                >
                  {card.status}
                </span>
              </div>
              <p className="text-text-secondary text-[14px] font-normal leading-[1.6] mt-[12px]">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
