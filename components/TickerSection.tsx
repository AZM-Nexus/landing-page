"use client";

import React from "react";
import { motion } from "framer-motion";
import { TICKER_CONTENT } from "@/content/content.config";

export const TickerSection = () => {
  // Duplicate the content to ensure seamless loop
  const tickerItems = [...TICKER_CONTENT, ...TICKER_CONTENT];

  return (
    <section className="bg-primary h-[52px] w-full overflow-hidden flex items-center">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap items-center"
      >
        {tickerItems.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="text-white text-[14px] font-medium px-4">
              {item}
            </span>
            <span className="text-accent">◆</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
