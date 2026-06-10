"use client";

import React, { useState } from "react";
import { Vehicle } from "../data/vehicles";
import { User, Briefcase, Snowflake, Check, Phone, MessageCircle, X, ArrowRight } from "lucide-react";
import Link from "next/link";

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const whatsappLink = `https://wa.me/919109403977?text=Hello,%20I%20want%20to%20book%20the%20${encodeURIComponent(vehicle.name)}%20for%20a%20trip.`;

  return (
    <>
      {/* Vehicle Card */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 flex flex-col h-full group">
        <div className="relative h-64 overflow-hidden bg-gray-100">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {vehicle.ac && (
            <span className="absolute top-4 right-4 bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1 shadow">
              <Snowflake className="w-3.5 h-3.5" /> AC Cabin
            </span>
          )}
          <span className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-md">
            {vehicle.type}
          </span>
        </div>

        <div className="p-6 flex-grow flex flex-col">
          <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>
          <p className="text-gray-500 text-sm line-clamp-2 mb-4">{vehicle.description}</p>

          {/* Quick Specs */}
          <div className="grid grid-cols-2 gap-3 mb-6 bg-slate-50 p-3.5 rounded-xl border border-gray-100">
            <div className="flex items-center gap-2 text-gray-700 text-sm">
              <User className="w-4 h-4 text-primary" />
              <span>{vehicle.passengers} Passengers</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 text-sm">
              <Briefcase className="w-4 h-4 text-primary" />
              <span>{vehicle.luggage} Max</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 text-sm">
              <Snowflake className="w-4 h-4 text-primary" />
              <span>Climate Control</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 text-sm font-semibold text-primary">
              <span>Est. {vehicle.pricePerKm}</span>
            </div>
          </div>

          {/* Key Features Preview */}
          <div className="mb-6 flex-grow">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Key Highlights</h4>
            <ul className="space-y-1.5">
              {vehicle.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="truncate">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
            <button
              onClick={() => setIsOpen(true)}
              className="border border-primary text-primary hover:bg-primary/5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-1"
            >
              View Details
            </button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-light text-white py-2.5 rounded-xl text-sm font-semibold shadow transition-all duration-200 flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 fill-white text-primary" /> Book Now
            </a>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md text-gray-500 hover:text-gray-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
              {/* Left Column: Image Gallery */}
              <div>
                <div className="rounded-2xl overflow-hidden h-72 md:h-80 bg-gray-100 mb-4 shadow">
                  <img
                    src={vehicle.images[activeImage]}
                    alt={vehicle.name}
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {vehicle.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`h-20 rounded-xl overflow-hidden border-2 transition-all ${
                        activeImage === idx ? "border-accent scale-95" : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column: Vehicle Info */}
              <div className="flex flex-col">
                <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-1">{vehicle.type}</span>
                <h3 className="font-display text-3xl font-bold text-gray-900 mb-3">{vehicle.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{vehicle.description}</p>

                {/* Detailed Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2.5">Key Features:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {vehicle.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                        <Check className="w-4.5 h-4.5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Suitability */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2.5">Perfect For:</h4>
                  <div className="flex flex-wrap gap-2">
                    {vehicle.suitability.map((suit, index) => (
                      <span key={index} className="bg-primary/5 text-primary text-xs font-semibold px-2.5 py-1 rounded-md">
                        {suit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pricing & Booking CTAs */}
                <div className="mt-auto pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-gray-400 uppercase font-semibold">Pricing Rates</span>
                    <div className="text-2xl font-bold text-primary">{vehicle.pricePerKm} <span className="text-sm font-normal text-gray-500">/ km</span></div>
                  </div>
                  <div className="flex gap-2.5">
                    <a
                      href="tel:+919109403977"
                      className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-5 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-1.5"
                    >
                      <Phone className="w-4.5 h-4.5" /> Call Now
                    </a>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5"
                    >
                      <MessageCircle className="w-4.5 h-4.5 fill-white text-green-500" /> Book on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
