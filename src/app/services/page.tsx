"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  Milestone,
  Users,
  Compass,
  PlaneTakeoff,
  Train,
  Briefcase,
  PartyPopper,
  TrendingUp,
  RefreshCw,
  Users2,
  MapPin,
  PhoneCall,
  CalendarRange,
  Check,
  MessageCircle,
  Phone
} from "lucide-react";
import { services } from "@/data/services";

const iconMap: Record<string, React.ReactNode> = {
  Heart: <Heart className="w-6 h-6 text-accent" />,
  Milestone: <Milestone className="w-6 h-6 text-accent" />,
  Users: <Users className="w-6 h-6 text-accent" />,
  Compass: <Compass className="w-6 h-6 text-accent" />,
  PlaneTakeoff: <PlaneTakeoff className="w-6 h-6 text-accent" />,
  Train: <Train className="w-6 h-6 text-accent" />,
  Briefcase: <Briefcase className="w-6 h-6 text-accent" />,
  PartyPopper: <PartyPopper className="w-6 h-6 text-accent" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-accent" />,
  RefreshCw: <RefreshCw className="w-6 h-6 text-accent" />,
  Users2: <Users2 className="w-6 h-6 text-accent" />,
  MapPin: <MapPin className="w-6 h-6 text-accent" />,
  PhoneCall: <PhoneCall className="w-6 h-6 text-accent" />,
  CalendarRange: <CalendarRange className="w-6 h-6 text-accent" />
};

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=1920"
            alt="Scenic mountain road"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/95 to-primary/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl sm:text-5xl font-extrabold text-white"
          >
            Our Travel Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-orange-100 max-w-2xl mx-auto text-base sm:text-lg font-light"
          >
            Explore our comprehensive range of 14+ specialized passenger transportation packages built around absolute comfort, safety, and reliability.
          </motion.p>
        </div>
      </section>

      {/* 2. SERVICES CATALOG */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200/60 grid lg:grid-cols-12 gap-8 scroll-mt-28 hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Left/Right Visual Side */}
                  <div className={`lg:col-span-5 relative h-64 lg:h-auto min-h-[280px] w-full ${!isEven ? "lg:order-2" : ""}`}>
                    <Image
                      src={service.bgImage}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-950/20" />
                  </div>

                  {/* Details Side */}
                  <div className={`lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between ${!isEven ? "lg:order-1" : ""}`}>
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/5 p-3 rounded-xl">
                          {iconMap[service.iconName] || <Compass className="w-6 h-6 text-accent" />}
                        </div>
                        <h3 className="text-2xl font-display font-extrabold text-gray-900 leading-tight">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {service.description}
                      </p>

                      <div className="border-t border-slate-100 pt-6">
                        <h4 className="font-bold text-gray-900 text-sm mb-3">Service Inclusions & Benefits:</h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {service.benefits.map((benefit, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-gray-500">
                              <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 mt-8 pt-6 border-t border-slate-100">
                      <Link
                        href={`/contact?service=${service.id}`}
                        className="w-full sm:w-auto text-center bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl text-xs font-bold transition-all shadow-md"
                      >
                        Enquire Booking
                      </Link>
                      
                      <a
                        href={`https://wa.me/919109403977?text=Hello%20Patel%20Travels,%20I%20want%20to%20enquire%20about%20your%20${encodeURIComponent(service.title)}%20service.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl text-xs font-bold shadow-md flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4 fill-current" /> WhatsApp Inquiry
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. BOOKING CTA */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-950 via-primary to-orange-900 opacity-95" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-display font-extrabold text-white">Need a Customized Travel Package?</h2>
          <p className="text-orange-100 max-w-xl mx-auto text-sm leading-relaxed">
            If you have complex itineraries or multi-destination sightseeing tours (e.g. Datia, Orchha, Khajuraho, Gwalior altogether), we will design a custom fare estimate just for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-accent hover:bg-yellow-500 text-slate-950 px-8 py-3 rounded-xl font-bold shadow-md transition-all"
            >
              Get Custom Quote
            </Link>
            <a
              href="tel:+919109403977"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-xl font-bold backdrop-blur-sm flex items-center justify-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4" /> Call Owner
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
