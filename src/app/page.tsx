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
    question: "How do I calculate the total fare for my trip?",
    answer: "Our pricing is transparent. It is calculated on a per-kilometer basis (₹16/km for Innova Crysta and ₹11/km for Swift Dzire) plus toll taxes, state taxes (if crossing state borders), and parking charges. Chauffeur night allowance is applicable if the trip extends past 10 PM."
  },
  {
    question: "Do you provide cars for outstation and multi-day tours?",
    answer: "Yes, we specialize in long-distance outstation travel across Madhya Pradesh, Uttar Pradesh, Rajasthan, Delhi-NCR, and all over India. You can book our vehicles for multi-day tours, and the chauffeur will remain with you throughout the journey."
  },
  {
    question: "Is there a minimum daily kilometer limit for outstation bookings?",
    answer: "Yes, for outstation round trips, a minimum running of 250 kilometers per day is calculated. If the actual travel is less, the charges will still be based on the minimum limit."
  },
  {
    question: "Are your drivers experienced and verified?",
    answer: "Absolutely. All our chauffeurs are highly experienced local drivers with active commercial driving licenses, deep knowledge of highway routes, and clean background records. They are trained to prioritize family safety and comfort."
  },
  {
    question: "How can I book a ride, and do I need to pay an advance?",
    answer: "You can book directly by filling out our online form, calling us, or sending a message on WhatsApp. A small advance amount is required to confirm the booking, especially during wedding seasons and holidays. The remaining balance can be paid to the driver or via UPI during/after the trip."
  },
  {
    question: "Is Pitambara Peeth (Datia) pick-up and drop available?",
    answer: "Yes, we regularly cater to devotees visiting the sacred Shri Pitambara Peeth temple in Datia. We provide picking and dropping services from Jhansi Railway Station (VGLJ), Gwalior Airport, or Datia Station directly to the temple and surrounding hotels."
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
    { value: "500+", label: "Happy Journeys" },
    { value: "100%", label: "On-Time Arrival" },
    { value: "24/7", label: "Customer Support" },
    { value: "15+", label: "Years Experience" }
  ];

  // Key Features
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-accent" />,
      title: "Verified Drivers & Safe Travels",
      description: "Our chauffeurs are background-verified, licensed, and highly trained for safe family travel."
    },
    {
      icon: <Clock className="w-8 h-8 text-accent" />,
      title: "Punctuality & Reliability",
      description: "We respect your time. Whether airport pickup or wedding schedule, our cars reach early."
    },
    {
      icon: <Coins className="w-8 h-8 text-accent" />,
      title: "Affordable Per-Km Rates",
      description: "Transparent billing with zero hidden costs. Pay only for the distance you cover."
    },
    {
      icon: <Car className="w-8 h-8 text-accent" />,
      title: "Clean & Sanitized Fleet",
      description: "Deeply cleaned, odor-free, fully air-conditioned premium Toyota Innova Crysta & Dzire."
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
              <MapPin className="w-3 h-3" /> Based in Badoni, Datia (M.P.)
            </span>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent">
                Car Rentals & Travels
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              Explore India comfortably with our premium 7-seater **Toyota Innova Crysta** and high-efficiency **Maruti Swift Dzire**. Specializing in weddings, pilgrimage tours, family trips, and airport transfers.
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
                href="https://wa.me/919109403977?text=Hello%20Patel%20Travels,%20I%20want%20to%20enquire%20about%20booking%20a%20car."
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
              <span className="text-accent font-bold tracking-widest uppercase text-sm block">Why Choose Patel Travels</span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold leading-tight">
                Crafting Worry-Free Highway Experiences
              </h2>
              <p className="text-orange-100 font-light leading-relaxed">
                As a family-owned business in Datia, we take personal pride in every single booking. We do not treat you as just another booking number — we ensure your family or business guests are driven with maximum safety, care, and polite local hospitalities.
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
                Strategically located in **Datia district (Badoni)** on the border of Madhya Pradesh and Uttar Pradesh. We easily provide express passenger pickups and tourist transits all over India.
              </p>
              
              <div className="grid grid-cols-3 gap-2 mt-8 w-full max-w-md">
                {["Madhya Pradesh", "Uttar Pradesh", "Rajasthan", "Delhi-NCR", "Uttarakhand", "Maharashtra"].map((st) => (
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
                We regularly operate passenger services and tour transfers from our base at **Bhansda Khurd, Badoni (Datia)**. Popular daily and outstation routes include:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Datia & Pitambara Peeth</h4>
                    <p className="text-xs text-gray-500">Local temple drops and station pickups</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Jhansi Railway Station</h4>
                    <p className="text-xs text-gray-500">Express pickup and drops (25km run)</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Orchha Historical Site</h4>
                    <p className="text-xs text-gray-500">Tourist packages & heritage temple visits</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Gwalior Airport / Fort</h4>
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
                    <h4 className="font-bold text-sm text-gray-900">Delhi, Jaipur & Lucknow</h4>
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
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-950 via-primary to-orange-900 opacity-90" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Award className="w-12 h-12 text-accent mx-auto animate-pulse" />
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold">Ready to Experience First-Class Road Travel?</h2>
          <p className="text-orange-100 max-w-xl mx-auto font-light text-sm sm:text-base leading-relaxed">
            Reach out to us to book your clean Toyota Innova Crysta or Maruti Suzuki Swift Dzire. Get custom itineraries, instant rates, and verified professional drivers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact?book=true"
              className="w-full sm:w-auto bg-accent hover:bg-yellow-500 text-slate-950 px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-accent/15"
            >
              Book via Form
            </Link>
            <a
              href="https://wa.me/919109403977?text=Hello%20Patel%20Travels,%20I%20want%20to%20book%20a%20car%20now."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 fill-current" /> WhatsApp Reservation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
