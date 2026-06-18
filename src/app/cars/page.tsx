"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ShieldCheck, HelpCircle, ArrowRight, User2, BaggageClaim, ShieldAlert, Sparkles } from "lucide-react";
import { vehicles } from "@/data/vehicles";

export default function CarsPage() {
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
            Our Premium Fleet
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg font-light"
          >
            Fully certified, air-conditioned, and meticulously maintained vehicles at your service for safe and comfortable travel.
          </motion.p>
        </div>
      </section>

      {/* 2. FLEET DETAIL LISTING */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {vehicles.map((vehicle, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={vehicle.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200/60 p-6 sm:p-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Image Gallery Column */}
                <div className={`lg:col-span-6 space-y-4 ${!isEven ? "lg:order-2" : ""}`}>
                  <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-md">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                      {vehicle.type}
                    </div>
                  </div>
                  
                  {/* Thumbnail Row */}
                  <div className="grid grid-cols-3 gap-3">
                    {vehicle.images.map((imgUrl, idx) => (
                      <div key={idx} className="relative h-20 sm:h-24 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                        <Image
                          src={imgUrl}
                          alt={`${vehicle.name} thumbnail ${idx + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specification and Details Column */}
                <div className={`lg:col-span-6 space-y-6 ${!isEven ? "lg:order-1" : ""}`}>
                  <div>
                    <span className="text-accent font-bold tracking-widest text-xs uppercase">{vehicle.type}</span>
                    <h2 className="text-3xl font-display font-extrabold text-gray-900 mt-1">{vehicle.name}</h2>
                    <p className="text-gray-500 mt-3 text-sm sm:text-base leading-relaxed">{vehicle.description}</p>
                  </div>

                  {/* Core specs pills */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl text-center">
                      <User2 className="w-5 h-5 text-primary mx-auto mb-1" />
                      <span className="block text-xs font-bold text-gray-900">{vehicle.passengers} Seats</span>
                    </div>
                    <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl text-center">
                      <BaggageClaim className="w-5 h-5 text-primary mx-auto mb-1" />
                      <span className="block text-xs font-bold text-gray-900">{vehicle.luggage}</span>
                    </div>
                    <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl text-center">
                      <Sparkles className="w-5 h-5 text-primary mx-auto mb-1" />
                      <span className="block text-xs font-bold text-gray-900">AC Enabled</span>
                    </div>
                    <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl text-center">
                      <ShieldCheck className="w-5 h-5 text-primary mx-auto mb-1" />
                      <span className="block text-xs font-bold text-gray-900">{vehicle.fuel}</span>
                    </div>
                  </div>

                  {/* Pricing / Booking Box */}
                  <div className="bg-slate-100/70 border border-slate-200/50 p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-wider block">Booking Status</span>
                      <div className="flex items-baseline gap-1.5 mt-1">
                        <span className="text-2xl font-black text-primary font-display">Available</span>
                      </div>
                      <span className="text-gray-400 text-[10px] block mt-1">*Contact us to get custom rates</span>
                    </div>
                    
                    <div className="flex gap-2 w-full sm:w-auto">
                      <Link
                        href={`/contact?vehicle=${vehicle.id}`}
                        className="flex-grow sm:flex-none text-center bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded-xl text-sm font-bold shadow-md transition-all duration-200"
                      >
                        Book This Car
                      </Link>
                      <a
                        href={`https://wa.me/919109403977?text=Hello%20Patel%20Travels,%20I%2527m%20interested%20in%20booking%20the%20${vehicle.name}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-xl transition-all shadow-md flex items-center justify-center"
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.417 9.86-9.86.002-2.638-1.024-5.117-2.884-6.979C16.59 1.892 14.113.865 11.48.865 6.042.865 1.623 5.286 1.621 10.725c-.001 1.67.447 3.298 1.298 4.722L1.84 21.062l5.807-1.522c.001 0 .001 0 0 0z" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Bullet Spec Highlights */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Premium Comforts
                      </h4>
                      <ul className="space-y-1.5">
                        {vehicle.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                            <Check className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Ideal For
                      </h4>
                      <ul className="space-y-1.5">
                        {vehicle.suitability.map((suit, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                            <Check className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{suit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. POLICY & PRICING TRANSPARENCY FAQ */}
      <section className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold tracking-widest text-accent uppercase mb-2">Pricing Policy</h2>
            <p className="text-3xl font-display font-extrabold text-gray-900">
              Clear & Honest Booking Terms
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200 grid sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" /> What is Included:
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Professional Commercial Chauffeur service</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Fully cleaned and sanitized vehicle with active AC</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Standard carrier luggage racks (upon request)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Basic first aid kit and route planning assistance</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-accent" /> Additional Charges (Payable actual):
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Toll gates and national highway taxes (FASTag charges)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>State border entry taxes (e.g. crossing MP to UP, Rajasthan)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Parking fees at airports, railway stations, and monuments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Driver night allowance (applicable for driving between 10 PM and 6 AM)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
