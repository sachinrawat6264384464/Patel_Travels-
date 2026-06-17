"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Sparkles, Heart, Compass, CheckCircle, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: <Shield className="w-6 h-6 text-accent" />,
      title: "Absolute Safety First",
      description: "We verify every trip route, perform routine vehicle safety inspections, and maintain rigorous driver selection criteria."
    },
    {
      icon: <Heart className="w-6 h-6 text-accent" />,
      title: "Warm Indian Hospitality",
      description: "Our chauffeurs are courteous and respect local cultures. They help elderly travelers and families feel at home."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-accent" />,
      title: "Cleanliness & Premium Upkeep",
      description: "Our vehicles are detailed after every single trip to ensure a fresh, hygienic environment for the next passenger."
    },
    {
      icon: <Compass className="w-6 h-6 text-accent" />,
      title: "Uncompromising Punctuality",
      description: "We plan route buffers, monitor flight schedules, and utilize GPS trackers to ensure our vehicles arrive before the scheduled time."
    }
  ];

  const milestones = [
    {
      year: "2015",
      title: "Dabra mein shuruat",
      description: "Ek gaadi se local passenger transport ki shuruaat. Deedar Colony, Dabra ke parivaron ko reliable transport dena shuru kiya."
    },
    {
      year: "2018",
      title: "Toyota Glanza Fleet mein Shamil",
      description: "Shaadi parti aur local commute ke liye Toyota Glanza add ki. Dabra aur Gwalior mein demand badhne lagi."
    },
    {
      year: "2021",
      title: "Toyota Rumion — 7-Seater MPV",
      description: "Bade parivaron aur pilgrimage groups ke liye Toyota Rumion (7-seater) fleet mein add ki. Outstation bookings mein zabardasth growth."
    },
    {
      year: "2024",
      title: "Pan-India Operations",
      description: "Gwalior, Jhansi, Datia, Shivpuri se lekar Ayodhya, Vaishno Devi, Chardham tak booking. WhatsApp se instant confirmation."
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative py-16 bg-white border-b border-slate-200 text-gray-900 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900"
          >
            About Shri Balaji Travels
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg font-light"
          >
            Toyota Glanza aur Rumion ke saath premium, reliable, aur family-safe chauffeured car rental. Dabra, Gwalior (Madhya Pradesh) se poore India mein service.
          </motion.p>
        </div>
      </section>

      {/* 2. OWNER & FOUNDER SECTION (NEW FRONT POSITION & WHITE BACKDROP) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Owner Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-accent font-bold tracking-widest uppercase text-xs block">Owner & Founder Message</span>
              <h2 className="text-3xl font-display font-extrabold text-gray-900 leading-tight">
                &ldquo;Safety, punctuality, and hospitality are not just rules for us—they are a family promise.&rdquo;
              </h2>
              <p className="text-gray-650 leading-relaxed font-light">
                Aapka swagat hai Shri Balaji Travels mein. Main hun <strong>Virendrasingh Patel</strong>, founder and owner. Deedar Colony, Dabra, Gwalior se hamne ek simple promise ke saath shuruaat ki: har passenger ko respect, reliability, aur care ke saath travel karwana. Hum jaante hain safar kabhi kabhi stressful hota hai — chahe aap airport flight pakad rahe ho, shaadi mein baarat arrange kar rahe ho, ya buzurg maata-pita ke saath dharmik yatra par ja rahe ho.
              </p>
              <p className="text-gray-650 leading-relaxed font-light">
                Isliye hum kabhi bhi temporary ya unverified drivers nahi rakhte. Hamari har gaadi professional, background-checked chauffeurs chalate hain jo aapki suraksha ko personal zimmedari maante hain. Jab aap Shri Balaji Travels mein baithe hain, aap surakshit haath mein hain — yahi hamara vaada hai.
              </p>

              <div className="pt-4 flex items-center gap-4">
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-bold text-primary text-lg font-display">Virendrasingh Patel</h4>
                  <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">Founder & Owner — Shri Balaji Travels, Dabra</p>
                </div>
              </div>
            </div>

            {/* Owner Image (Portrait replacing dashboard) */}
            <div className="lg:col-span-5 relative h-[420px] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
              <Image
                src="/images/owner.jpg"
                alt="Virendrasingh Patel - Owner of Shri Balaji Travels, Dabra"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR STORY SECTION (SHIFTED AND CONVERTED TO PREMIUM DARK CONTRAST BACKGROUND) */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 to-primary/70 opacity-95" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Image side */}
            <div className="lg:col-span-6 relative h-[450px] w-full rounded-2xl overflow-hidden shadow-xl border border-white/10">
              <Image
                src="https://imgd.aeplcdn.com/664x374/n/cw/ec/169435/rumion-exterior-right-front-three-quarter-3.jpeg?q=80"
                alt="Toyota Rumion — Shri Balaji Travels Dabra Gwalior"
                fill
                className="object-cover"
              />
            </div>

            {/* Content side */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-accent font-bold tracking-widest uppercase text-xs block">Our Heritage</span>
              <h2 className="text-3xl font-display font-extrabold text-white leading-tight">
                A Family-Owned Business Built on Trust
              </h2>
              <p className="text-gray-300 leading-relaxed font-light">
                Shri Balaji Travels ki shuruaat ek humble ambition se hui: Dabra aur Gwalior ke parivaron ko ek aisi high-quality transport dena jis par wo rely kar sakein. Safar mein suraksha sarvopari hai. Hamara lakshya tha ki jab koi beti, maa, ya buzurg hamari gaadi mein baithe — unhe waise hi surakshit mahsoos ho jaise apne ghar ki gaadi mein.
              </p>
              <p className="text-gray-300 leading-relaxed font-light">
                Aaj hum pure Madhya Pradesh aur pan-India me yatriyon ki seva karte hain. Shaadi ki baarat se lekar Pitambara Peeth Datia, Orchha, Ayodhya ke dharmik darshan tak — har yatra mein wahi dedication, saafai, aur local touch jo hamari pehli trip se hai.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                <div>
                  <h4 className="text-3xl font-black text-accent font-display">100%</h4>
                  <p className="text-[10px] text-gray-400 font-semibold uppercase mt-0.5">Commercial Pass Permits</p>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-accent font-display">24/7</h4>
                  <p className="text-[10px] text-gray-400 font-semibold uppercase mt-0.5">Emergency Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES SECTION */}
      <section className="py-20 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold tracking-widest text-accent uppercase mb-2">Our Operating Pillars</h2>
            <p className="text-3xl font-display font-extrabold text-gray-900">
              Values That Drive Us Forward
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-slate-200">
                <div className="bg-primary/5 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  {val.icon}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{val.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HISTORY TIMELINE SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold tracking-widest text-accent uppercase mb-2">Our Journey</h2>
            <p className="text-3xl font-display font-extrabold text-gray-900">
              Key Milestones in Our Growth
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="relative flex flex-col md:flex-row md:items-center">
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-white transform -translate-x-1.5 md:-translate-x-2 z-10 shadow-sm" />

                  {/* Left Box (Odd elements in desktop) */}
                  <div className={`pl-12 md:pl-0 md:w-1/2 md:pr-12 md:text-right ${idx % 2 === 1 ? "md:order-2 md:pl-12 md:text-left md:pr-0" : ""}`}>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm inline-block w-full">
                      <span className="text-accent font-black text-xl font-display">{milestone.year}</span>
                      <h4 className="font-bold text-gray-950 mt-1 mb-2">{milestone.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Spacer for even elements */}
                  <div className="hidden md:block w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-16 text-center bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl font-display font-black text-gray-900">Want to Discuss Custom Travel Plans?</h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed">
            Need customized itineraries for pilgrim tours (Ujjain, Orchha, Ayodhya) or booking estimates for wedding delegations? Drop us a query.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-md flex items-center gap-2"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
