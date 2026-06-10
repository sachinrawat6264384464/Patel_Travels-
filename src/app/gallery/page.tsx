"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, MapPin, Eye, Check } from "lucide-react";

interface GalleryItem {
  id: number;
  category: "fleet" | "travel" | "wedding" | "religious";
  title: string;
  location: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: "fleet",
    title: "Toyota Innova Crysta Front View",
    location: "Gwalior Highway",
    image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    category: "travel",
    title: "National Highway Scenic Tour",
    location: "Bundelkhand Expressway",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    category: "wedding",
    title: "Bridal Luxury Entry Car",
    location: "Jhansi Palace Resort",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    category: "religious",
    title: "Spiritual Pilgrimage Route Tour",
    location: "Orchha Temples",
    image: "https://images.unsplash.com/photo-1600100397608-f010e47fa185?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    category: "fleet",
    title: "Swift Dzire Station Pickup Service",
    location: "Datia Railway Station",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    category: "travel",
    title: "Family Getaway Road Ride",
    location: "Gwalior Bypass Route",
    image: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 7,
    category: "wedding",
    title: "Multi-Car Entourage Setup",
    location: "Datia Marriage Hall",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 8,
    category: "religious",
    title: "Devotee Temple Drops",
    location: "Pitambara Peeth Portal",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 9,
    category: "fleet",
    title: "Innova Crysta Premium Cabin View",
    location: "Interior Details",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 10,
    category: "travel",
    title: "Outstation Long Run",
    location: "Pan-India Highway Toll",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 11,
    category: "wedding",
    title: "VIP Executive Delegation Transport",
    location: "Corporate Event Venue",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 12,
    category: "religious",
    title: "Evening Aarti Group Pickup",
    location: "Ganga Ghats Pilgrimage",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=800"
  }
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<"all" | "fleet" | "travel" | "wedding" | "religious">("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { value: "all", label: "All Photos" },
    { value: "fleet", label: "Our Fleet" },
    { value: "travel", label: "Outstation Trips" },
    { value: "wedding", label: "Weddings & Events" },
    { value: "religious", label: "Religious Pilgrimages" }
  ] as const;

  const filteredItems = filter === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1920"
            alt="Camera lenses & travel gear"
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
            Travel & Fleet Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-orange-100 max-w-2xl mx-auto text-base sm:text-lg font-light"
          >
            Browse real snapshots of our premium vehicles on duty and beautiful tourist destinations all across India.
          </motion.p>
        </div>
      </section>

      {/* 2. FILTER TABS */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                filter === cat.value
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. PHOTO GRID */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white p-3 rounded-full shadow-lg text-primary transform scale-90 group-hover:scale-100 transition-transform">
                        <Eye className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 space-y-1">
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{item.category}</span>
                    <h4 className="font-bold text-sm text-gray-900 leading-tight truncate">{item.title}</h4>
                    <div className="flex items-center gap-1 text-[11px] text-gray-500">
                      <MapPin className="w-3 h-3 text-primary flex-shrink-0" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
              <Camera className="w-12 h-12 text-slate-350 mx-auto mb-4" />
              <p className="text-gray-500 font-medium">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* 4. LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/90 flex items-center justify-center p-4 backdrop-blur-sm cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[65vh] w-full bg-slate-900">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-6 bg-white flex justify-between items-center border-t border-slate-100">
                <div>
                  <span className="text-xs font-bold text-accent uppercase tracking-widest">{selectedImage.category}</span>
                  <h3 className="text-lg font-bold text-gray-900 mt-0.5">{selectedImage.title}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{selectedImage.location}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedImage(null)}
                  className="bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-xl text-xs font-bold text-gray-800 transition-colors"
                >
                  Close View
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
