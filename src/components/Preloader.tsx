"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if user has already loaded the site in this session
    const hasLoaded = sessionStorage.getItem("site-preloaded");
    if (!hasLoaded) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("site-preloaded", "true");
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 text-white select-none"
        >
          {/* Glowing background aura */}
          <div className="absolute w-[300px] h-[300px] bg-orange-600/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative flex flex-col items-center max-w-sm px-6 text-center space-y-6 z-10">
            {/* Logo Image with glowing golden ring */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
              className="relative w-48 h-48 rounded-full p-1 bg-gradient-to-tr from-accent via-orange-600 to-accent shadow-2xl shadow-orange-600/35 overflow-hidden"
            >
              <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900">
                <Image
                  src="/images/loading.jpg"
                  alt="Shri Balaji Travels Loading"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Title / Description */}
            <div className="space-y-2">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="font-display text-2xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent"
              >
                Shri Balaji Travels
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-xs text-gray-400 font-medium tracking-widest uppercase"
              >
                Loading Your Premium Ride...
              </motion.p>
            </div>

            {/* Modern Progress Line */}
            <div className="w-40 h-[3px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-accent to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
