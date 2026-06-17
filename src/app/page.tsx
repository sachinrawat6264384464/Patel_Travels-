"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  ShieldCheck,
  Clock,
  Coins,
  MapPin,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Users,
  Car,
  Compass,
  Phone,
  MessageCircle,
  Award,
  CheckCircle,
  HelpCircle
} from "lucide-react";
import { vehicles } from "@/data/vehicles";
import { services } from "@/data/services";
import VehicleCard from "@/components/VehicleCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import BookingTimeline from "@/components/BookingTimeline";

// FAQ list for Accordion
const faqs = [
  {
    question: "Toyota Glanza aur Rumion ka kiraya kitna hai?",
    answer: "Toyota Glanza aur Toyota Rumion ka kiraya hum competitive aur budget-friendly offer karte hain. Is mein driver ka charge shamil hota hai. Toll, state tax, parking, aur raat ke safar ke liye driver night allowance alag se hota hai. Poora transparent billing system hai — koi hidden charges nahi honge."
  },
  {
    question: "Kya aap shaadi ki baarat aur party booking karte hain?",
    answer: "Haan! Shaadi party ki booking ke liye aap call ya WhatsApp par sampark kar sakte hain. Dono gaadiya Toyota Glanza (5-seater) aur Toyota Rumion (7-seater) shaadi mein baarat, guest transfer aur local trips ke liye available hain. Advance booking zaroori hai."
  },
  {
    question: "Kya outstation aur multi-day tour ke liye gaadi milti hai?",
    answer: "Haan, hum Dabra aur Gwalior se pure Madhya Pradesh, Uttar Pradesh, Rajasthan, Delhi-NCR, aur poore India mein outstation service dete hain. Professional driver poori yatra mein aapke saath rahega. Rate aur bookings ki details ke liye direct hume contact karein."
  },
  {
    question: "Kya drivers anubhavi aur verified hain?",
    answer: "Bilkul. Shri Balaji Travels ke sabhi drivers fully experienced, licensed aur background-verified hain. Unhe highway aur local routes ki acchi jankari hai. Aapke aur aapke parivar ki safety hamari sabse badi priority hai."
  },
  {
    question: "Booking kaise karein? Advance dena padta hai?",
    answer: "Aap WhatsApp par message karke, direct phone call karke, ya hamare online form se booking enquire kar sakte hain. Shaadi season aur festival bookings ke liye advance payment required hota hai, baaki bacha hua payment aap yatra ke baad de sakte hain."
  },
  {
    question: "Kya Gwalior Airport aur Jhansi Railway Station pickup-drop milti hai?",
    answer: "Haan, hum Gwalior Airport (GWL), Jhansi Railway Station, aur Dabra se sabhi major stations aur airports ke liye express pickup-drop service dete hain jo 24/7 available hai. Gwalior se dharmik sthal jaise Pitambara Peeth Datia, Orchha, Khajuraho ke liye bhi booking milti hai."
  }
];

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Preview only first 6 services on the home page, with a link to see all
  const previewServices = services.slice(0, 6);

  // Stats Data
  const stats = [
    { value: "300+", label: "Happy Journeys" },
    { value: "100%", label: "On-Time Arrival" },
    { value: "24/7", label: "Customer Support" },
    { value: "10+", label: "Years Experience" }
  ];

  // Key Features
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-accent" />,
      title: "Verified Drivers & Safe Travels",
      description: "Shri Balaji Travels ke sabhi drivers anubhavi, licensed aur background-verified hain. Parivar ki suraksha hamari #1 priority hai."
    },
    {
      icon: <Clock className="w-8 h-8 text-accent" />,
      title: "Punctuality & Reliability",
      description: "Hum aapka samay samjhte hain. Airport pickup ho ya shaadi ki baarat — gaadi hamesha samay par pahunche."
    },
    {
      icon: <Coins className="w-8 h-8 text-accent" />,
      title: "Affordable & Best Rates",
      description: "Transparent billing, zero hidden costs. Apne budget ke hisab se behtareen service payein."
    },
    {
      icon: <Car className="w-8 h-8 text-accent" />,
      title: "Clean Toyota Glanza & Rumion",
      description: "Deeply cleaned, odor-free, fully air-conditioned Toyota Glanza (5-seater) & Toyota Rumion (7-seater) — Dabra ki shaan!"
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 bg-slate-950 text-white animate-fade-in">
        {/* Background Video with Dark Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1920"
            className="w-full h-full object-cover opacity-35"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-car-driving-on-a-wet-highway-41585-large.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-950/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Business Badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-accent bg-accent/10 border border-accent/20 uppercase">
              <MapPin className="w-3 h-3" /> Based in Dabra, Gwalior (M.P.) || Jay Mai Ki
            </span>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent">
                Shri Balaji Travels
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              Dabra, Gwalior se <strong>Toyota Glanza</strong> aur <strong>Toyota Rumion</strong> ke saath premium yatra ka anubhav. Shaadi parti, dharmik yatra, outstation aur airport transfer ke liye sampark karen.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/contact?book=true"
                className="w-full sm:w-auto bg-accent hover:bg-yellow-500 text-slate-950 px-8 py-4 rounded-xl text-base font-bold shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 transition-all duration-200"
              >
                Book Your Ride Now
              </Link>
              <a
                href="https://wa.me/919109403977?text=Hello%20Shri%20Balaji%20Travels,%20main%20gaadi%20book%20karna%20chahta%20hun."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-base font-bold shadow-lg flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 fill-current" /> Chat on WhatsApp
              </a>
              <a
                href="tel:+919109403977"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl text-base font-bold backdrop-blur-sm flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Phone className="w-5 h-5" /> Call Owner
              </a>
            </div>
          </motion.div>
        </div>


      </section>

      {/* 2. STATS SECTION */}
      <section className="relative z-20 py-8 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-10 rounded-2xl shadow-xl border border-white/40">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl sm:text-4xl font-extrabold text-primary font-display">{stat.value}</p>
                <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase mt-1 tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FLEET SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold tracking-widest text-accent uppercase mb-2">Our Premium Fleet</h2>
            <p className="text-3xl sm:text-4xl font-display font-extrabold text-gray-900 leading-tight">
              Select the Perfect Vehicle for Your Journey
            </p>
            <p className="text-gray-600 mt-4">
              We own and maintain top-condition, commercial-approved vehicles to ensure high dependability, maximum safety, and absolute comfort on the road.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {vehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/cars"
              className="inline-flex items-center gap-2 font-bold text-primary hover:text-accent group transition-colors duration-200"
            >
              View Detailed Technical Specs & Fleet Photos <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION */}
      <section className="py-20 bg-primary text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-800 via-primary to-orange-950 opacity-90" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Col: Info */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-accent font-bold tracking-widest uppercase text-sm block">Why Choose Shri Balaji Travels</span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold leading-tight">
                Crafting Worry-Free Highway Experiences
              </h2>
              <p className="text-orange-100 font-light leading-relaxed">
                Dabra, Gwalior ki shaan — Shri Balaji Travels ek family-owned business hai jahan har booking personal pride ke saath ki jaati hai. Aapka parivar ya mehmaan maximum suraksha, aaram, aur pyaar ke saath safar kare — yahi hamara vaada hai.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="bg-accent/20 p-1.5 rounded-lg text-accent mt-1">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Local Driver Expertise</h4>
                    <p className="text-orange-200 text-sm">Deep knowledge of roads across Bundelkhand, MP, and major Pan-India national highways.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-accent/20 p-1.5 rounded-lg text-accent mt-1">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Transparent & Flexible Bookings</h4>
                    <p className="text-orange-200 text-sm">No complex procedures. Easy edits to travel plans, routes, or pickup schedules.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Grid of features */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/15 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="font-bold text-lg mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICES SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold tracking-widest text-accent uppercase mb-2">Our Specialized Offerings</h2>
            <p className="text-3xl sm:text-4xl font-display font-extrabold text-gray-900 leading-tight">
              Transportation Services Crafted For Every Occasion
            </p>
            <p className="text-gray-600 mt-4">
              From premium bride-groom entries for weddings to reliable high-speed airport pick-ups, we offer customized packages tailored to your exact travel plan.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {previewServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group hover:-translate-y-1"
              >
                {/* Image background with title overlay */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.bgImage}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white leading-tight font-display">{service.title}</h3>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.benefits.slice(0, 2).map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-500">
                        <CheckCircle className="w-3.5 h-3.5 text-primary" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/services#${service.id}`}
                    className="w-full text-center bg-slate-100 hover:bg-primary hover:text-white py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200 text-primary block"
                  >
                    Learn More & Book
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg text-sm font-bold shadow-md hover:shadow-lg transition-all"
            >
              See All 14+ Specialized Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. BOOKING TIMELINE SECTION */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold tracking-widest text-accent uppercase mb-2">How It Works</h2>
            <p className="text-3xl sm:text-4xl font-display font-extrabold text-gray-900">
              Simple 3-Step Hassle-Free Booking
            </p>
            <p className="text-gray-600 mt-4">
              We have eliminated long queues and complex registration systems. Just check prices, fill details, and confirm directly with us on WhatsApp.
            </p>
          </div>

          <BookingTimeline />
        </div>
      </section>

      {/* 7. COVERAGE AREA SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Map Placeholder or Visual Area */}
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white flex flex-col justify-center items-center p-6 text-center">
              {/* Decorative graphic background */}
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#0f5132_1px,transparent_1px)] [background-size:16px_16px]" />
              <Compass className="w-16 h-16 text-primary animate-spin-slow mb-4" />
              <h3 className="font-display font-extrabold text-2xl text-gray-900 mb-2">Pan-India Operations</h3>
              <p className="text-gray-600 text-sm max-w-md">
                Strategically located in Dabra, Gwalior District (M.P.) — NH-75 aur Gwalior-Jhansi highway par. Hum pure Madhya Pradesh aur India mein express pickup aur tourist transit dete hain.
              </p>
              
              <div className="grid grid-cols-3 gap-2 mt-8 w-full max-w-md">
                {["Gwalior", "Dabra", "Datia", "Jhansi", "Shivpuri", "Delhi-NCR"].map((st) => (
                  <div key={st} className="bg-slate-50 border border-slate-100 py-2 rounded-lg text-xs font-bold text-primary">
                    {st}
                  </div>
                ))}
              </div>
            </div>

            {/* List of regular local routes */}
            <div className="space-y-6">
              <span className="text-accent font-bold tracking-widest uppercase text-sm block">Our Core Service Areas</span>
              <h2 className="text-3xl font-display font-extrabold text-gray-900 leading-tight">
                Regular Tourist & Local Travel Routes
              </h2>
              <p className="text-gray-600 font-light leading-relaxed">
                Shri Balaji Travels Dabra (Gwalior) se operate karta hai. Neeche hamare popular daily aur outstation routes hain:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Dabra & Gwalior City</h4>
                    <p className="text-xs text-gray-500">Local pickup-drop, Gwalior Fort & Airport</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Jhansi Railway Station</h4>
                    <p className="text-xs text-gray-500">Express pickup & drops (40km from Dabra)</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Pitambara Peeth Datia</h4>
                    <p className="text-xs text-gray-500">Dharmik darshan & temple visits</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Gwalior Airport (GWL)</h4>
                    <p className="text-xs text-gray-500">Fast flight connections & sightseeing</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Ayodhya & Kashi Tours</h4>
                    <p className="text-xs text-gray-500">Religious multi-day group tours</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Delhi, Agra & Jaipur</h4>
                    <p className="text-xs text-gray-500">Pan-India long route drop-offs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. GALLERY PREVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold tracking-widest text-accent uppercase mb-2">Customer Travels Gallery</h2>
            <p className="text-3xl sm:text-4xl font-display font-extrabold text-gray-900">
              Captured Moments From the Highways
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400", // wedding
              "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=400", // Crysta drive
              "https://images.unsplash.com/photo-1600100397608-f010e47fa185?auto=format&fit=crop&q=80&w=400", // religious
              "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=400"  // highway
            ].map((img, i) => (
              <div key={i} className="relative h-64 rounded-xl overflow-hidden shadow-sm group">
                <Image
                  src={img}
                  alt={`Travel moment ${i+1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent"
            >
              See Full Photo Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS SECTION */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold tracking-widest text-accent uppercase mb-2">Client Reviews</h2>
            <p className="text-3xl sm:text-4xl font-display font-extrabold text-gray-900">
              Hear From Our Happy Travelers
            </p>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* 10. FAQ ACCORDION SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold tracking-widest text-accent uppercase mb-2">Got Questions?</h2>
            <p className="text-3xl font-display font-extrabold text-gray-900">
              Frequently Asked Questions
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-gray-900 bg-white hover:bg-slate-50 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-accent flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-accent flex-shrink-0" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-2 text-gray-600 text-sm leading-relaxed border-t border-slate-100">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. FOOTER FINAL CTA */}
      <section className="bg-white text-gray-900 py-16 border-t border-slate-200 relative overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Award className="w-12 h-12 text-primary mx-auto animate-pulse" />
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900">Shaadi Party Ki Booking Ke Liye Sampark Karein!</h2>
          <p className="text-gray-600 max-w-xl mx-auto font-light text-sm sm:text-base leading-relaxed">
            Toyota Glanza (5-seater) ya Toyota Rumion (7-seater) book karein. Custom itinerary, instant rates, aur verified drivers. || Jay Mai Ki ||
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact?book=true"
              className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-primary/15"
            >
              Book via Form
            </Link>
            <a
              href="https://wa.me/919109403977?text=Hello%20Shri%20Balaji%20Travels,%20main%20gaadi%20book%20karna%20chahta%20hun."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 fill-current" /> WhatsApp: 9109403977
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
