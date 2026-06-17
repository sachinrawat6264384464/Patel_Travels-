"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Calendar, MapPin, User, Phone, Users, MessageSquare, Car, CalendarCheck2 } from "lucide-react";

interface BookingFormData {
  name: string;
  phone: string;
  vehicle: string;
  pickup: string;
  destination: string;
  date: string;
  passengers: number;
  message: string;
}

export default function BookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<BookingFormData>();

  const onSubmit = (data: BookingFormData) => {
    // Construct WhatsApp message
    const waText = `*New Booking Inquiry* 🚗\n` +
      `*Name:* ${data.name}\n` +
      `*Phone:* ${data.phone}\n` +
      `*Vehicle:* ${data.vehicle === "glanza" ? "Toyota Glanza (5 Seater)" : data.vehicle === "rumion" ? "Toyota Rumion (7 Seater)" : "Any Available"}\n` +
      `*Pickup:* ${data.pickup}\n` +
      `*Destination:* ${data.destination}\n` +
      `*Travel Date:* ${data.date}\n` +
      `*Passengers:* ${data.passengers}\n` +
      `*Message/Route:* ${data.message || "No notes provided"}`;

    const encodedText = encodeURIComponent(waText);
    const whatsappUrl = `https://wa.me/919109403977?text=${encodedText}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");

    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 glass-panel">
      <h3 className="font-display text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <CalendarCheck2 className="text-primary w-6 h-6" /> Book Your Ride
      </h3>

      {isSubmitted && (
        <div className="bg-orange-50 border border-orange-200 text-orange-800 rounded-xl p-4 mb-6 text-sm">
          <strong>Thank you!</strong> Your request has been compiled. We are opening WhatsApp to share your booking details with our agent.
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Full Name</label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: "Name is required" })}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm text-gray-800"
              />
            </div>
            {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
              <input
                type="tel"
                placeholder="Mobile Number"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: { value: /^[6-9]\d{9}$/, message: "Please enter a valid 10-digit number" }
                })}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm text-gray-800"
              />
            </div>
            {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone.message}</span>}
          </div>
        </div>

        {/* Vehicle Selection & Passengers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Select Vehicle</label>
            <div className="relative">
              <Car className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
              <select
                {...register("vehicle", { required: "Please select a vehicle" })}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm text-gray-800 bg-white"
              >
                <option value="">Gaadi chunein (Choose Vehicle)</option>
                <option value="glanza">Toyota Glanza — 5 Seater</option>
                <option value="rumion">Toyota Rumion — 7 Seater</option>
                <option value="any">Koi bhi (Any Available)</option>
              </select>
            </div>
            {errors.vehicle && <span className="text-red-500 text-xs mt-1">{errors.vehicle.message}</span>}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">No. of Passengers</label>
            <div className="relative">
              <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
              <input
                type="number"
                min="1"
                max="12"
                placeholder="Passengers count"
                {...register("passengers", { required: "Passenger count is required", min: 1 })}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm text-gray-800"
              />
            </div>
            {errors.passengers && <span className="text-red-500 text-xs mt-1">{errors.passengers.message}</span>}
          </div>
        </div>

        {/* Pickup & Destination */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Pickup Location</label>
            <div className="relative">
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
              <input
                type="text"
                placeholder="e.g. Dabra / Gwalior Station / Jhansi"
                {...register("pickup", { required: "Pickup location is required" })}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm text-gray-800"
              />
            </div>
            {errors.pickup && <span className="text-red-500 text-xs mt-1">{errors.pickup.message}</span>}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Destination</label>
            <div className="relative">
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
              <input
                type="text"
                placeholder="e.g. Orchha / Gwalior Airport / Delhi"
                {...register("destination", { required: "Destination is required" })}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm text-gray-800"
              />
            </div>
            {errors.destination && <span className="text-red-500 text-xs mt-1">{errors.destination.message}</span>}
          </div>
        </div>

        {/* Travel Date */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Travel Date</label>
          <div className="relative">
            <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
            <input
              type="date"
              {...register("date", { required: "Travel date is required" })}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm text-gray-800"
            />
          </div>
          {errors.date && <span className="text-red-500 text-xs mt-1">{errors.date.message}</span>}
        </div>

        {/* Notes / Special Instructions */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Additional Message / Route Details</label>
          <div className="relative">
            <MessageSquare className="absolute left-3.5 top-3 w-4.5 h-4.5 text-gray-400" />
            <textarea
              rows={3}
              placeholder="E.g., Round trip needed, flower decoration for wedding, stopping at Orchha Temple..."
              {...register("message")}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm text-gray-800"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary-light text-white py-3 rounded-xl text-base font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
        >
          Confirm & Share on WhatsApp
        </button>
      </form>
    </div>
  );
}
