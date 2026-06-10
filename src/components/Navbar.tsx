"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, CheckSquare } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Cars", href: "/cars" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" }
  ];

  const isHome = pathname === "/";
  const showSolidNavbar = isScrolled || !isHome;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolidNavbar
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-display font-black text-2xl tracking-wide flex items-center">
              <span className="text-orange-600 mr-1">PATEL</span>
              <span className="text-accent text-xl">TRAVELS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-orange-600 border-b-2 border-accent pb-1 font-semibold"
                      : showSolidNavbar
                      ? "text-gray-700 hover:text-orange-600"
                      : "text-white hover:text-accent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+919109403977"
              className="flex items-center space-x-1 text-sm font-medium text-orange-600 hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span className={showSolidNavbar ? "text-gray-800 hover:text-orange-600" : "text-white hover:text-accent drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"}>+91 91094 03977</span>
            </a>
            <Link
              href="/contact?book=true"
              className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-1.5"
            >
              <CheckSquare className="w-4 h-4" /> Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors ${
                showSolidNavbar ? "text-orange-600" : "text-white"
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100 visible"
            : "max-h-0 opacity-0 invisible overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-xl border-t border-gray-100">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? "bg-orange-50 text-orange-600 font-semibold"
                    : "text-gray-700 hover:bg-gray-50 hover:text-orange-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-4 pb-2 border-t border-gray-100 px-3 flex flex-col gap-3">
            <a
              href="tel:+919109403977"
              className="flex items-center space-x-2 text-base font-medium text-gray-700 hover:text-orange-600"
            >
              <Phone className="w-5 h-5 text-accent" />
              <span>+91 91094 03977</span>
            </a>
            <Link
              href="/contact?book=true"
              onClick={() => setIsOpen(false)}
              className="bg-orange-600 text-white text-center py-2.5 rounded-lg text-base font-semibold shadow-md flex items-center justify-center gap-2"
            >
              <CheckSquare className="w-5 h-5" /> Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
