"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageSquare, Clock, ShieldCheck } from "lucide-react";
import BookingForm from "@/components/BookingForm";

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/images1.jpg"
            alt="Travel background"
            fill
            className="object-cover opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl sm:text-5xl font-extrabold text-white"
          >
            Contact & Reservation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg font-light"
          >
            Get in touch with our booking agent, pre-calculate trip fare rates, or reserve your vehicle directly on WhatsApp.
          </motion.p>
        </div>
      </section>

      {/* 2. CONTACT LAYOUT */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Side - Details & Map */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-accent font-bold tracking-widest text-xs uppercase">Get In Touch</span>
                <h2 className="text-3xl font-display font-extrabold text-gray-900 leading-tight">
                  Shri Balaji Travels
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Have questions about pricing, route passes, or vehicle decorations? Contact our owner/operator or visit our base location.
                </p>
              </div>

              {/* Coordinates List */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/5 p-3 rounded-xl text-primary mt-1">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-950 text-sm">Office Address</h4>
                    <p className="text-gray-500 text-sm mt-1">
                      Deedar Colony, Ward No. 11,<br />
                      Dabra, Dist. Gwalior (M.P.) 475110
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/5 p-3 rounded-xl text-primary mt-1">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-950 text-sm">Phone Call Booking</h4>
                    <a href="tel:+919109403977" className="text-primary hover:text-accent font-semibold text-sm mt-1 block">
                      +91 91094 03977 (Virendrasingh Patel)
                    </a>
                    <a href="tel:+919425726316" className="text-primary hover:text-accent font-semibold text-sm block">
                      +91 94257 26316
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/5 p-3 rounded-xl text-primary mt-1">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-950 text-sm">Email Support</h4>
                    <a href="mailto:info@shribalajitravels.com" className="text-gray-500 hover:text-primary text-sm mt-1 block">
                      info@shribalajitravels.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/5 p-3 rounded-xl text-primary mt-1">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-950 text-sm">Operating Hours</h4>
                    <p className="text-gray-500 text-sm mt-1">
                      Open 24 Hours, 7 Days a week for emergencies and advance tour bookings.
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Embed Frame */}
              <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 h-64 relative bg-slate-100">
                <iframe
                  title="Shri Balaji Travels Location — Dabra, Gwalior"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14390.123456789!2d78.3341!3d25.8855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c9e4a3b18e69%3A0x1234567890abcdef!2sDabra%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
            </div>

            {/* Right Side - Form Container */}
            <div className="lg:col-span-7">
              <Suspense fallback={<div className="p-8 text-center text-gray-500">Loading form...</div>}>
                <BookingForm />
              </Suspense>

              {/* Quick WhatsApp Reminder */}
              <div className="mt-6 bg-orange-50 border border-orange-200 p-5 rounded-2xl flex items-start gap-3.5 shadow-sm">
                <MessageSquare className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-orange-900 text-sm">Instant Fare Estimates</h4>
                  <p className="text-orange-800 text-xs mt-1 leading-relaxed">
                    Submitting the booking form compiles details into an instant message ready to send. You will be redirected to WhatsApp to confirm directly with our representative.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
