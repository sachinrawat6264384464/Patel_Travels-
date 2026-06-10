"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-center">
      {/* Scroll to Top */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-white text-primary hover:bg-primary hover:text-white p-3 rounded-full shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1 focus:outline-none"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Call Button */}
      <a
        href="tel:+919109403977"
        className="bg-blue-600 hover:bg-blue-700 text-white p-3.5 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center focus:outline-none"
        aria-label="Call Us"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919109403977?text=Hello!%20I%20want%20to%20inquire%20about%20booking%20a%20car."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3.5 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center animate-bounce focus:outline-none"
        aria-label="Chat on WhatsApp"
        style={{ animationDuration: '3s' }}
      >
        <MessageCircle className="w-6 h-6 fill-white text-green-500" />
      </a>
    </div>
  );
}
