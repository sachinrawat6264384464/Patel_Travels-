"use client";

import React, { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  tag: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ramesh Sharma",
    location: "Gwalior",
    rating: 5,
    text: "We booked the Innova Crysta for my daughter's wedding from Bhansda Travels. The car was spotless, decorated beautifully, and the driver was extremely polite. Excellent service!",
    tag: "Wedding Booking"
  },
  {
    id: 2,
    name: "Dr. Alok Mishra",
    location: "Datia",
    rating: 5,
    text: "Regularly use Bhansda Travels for my travel to Gwalior and Bhopal airports. They are always on time, very professional, and the cars are exceptionally well-maintained.",
    tag: "Airport Transfer"
  },
  {
    id: 3,
    name: "Priya Patel",
    location: "Jhansi",
    rating: 5,
    text: "Took our family of 6 on a religious tour to Orchha and Pitambara Peeth. The driver knew the best routes and restaurants along the way. Highly recommended for family trips!",
    tag: "Religious Tour"
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Delhi",
    rating: 5,
    text: "Booked a round trip from Delhi to Orchha and Datia. The journey was so comfortable, the driver was highly experienced on the highways. Reasonable rates and clean vehicle.",
    tag: "Outstation Trip"
  }
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1)),
      5000
    );

    return () => {
      resetTimeout();
    };
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-8">
      {/* Quote Icon */}
      <div className="flex justify-center mb-6">
        <div className="bg-primary/10 p-4 rounded-full text-primary">
          <Quote className="w-8 h-8 fill-primary" />
        </div>
      </div>

      {/* Testimonial Box */}
      <div className="overflow-hidden relative min-h-[280px] sm:min-h-[220px]">
        {testimonials.map((test, index) => (
          <div
            key={test.id}
            className={`absolute w-full top-0 left-0 transition-all duration-700 ease-in-out transform ${
              index === current
                ? "opacity-100 translate-x-0 pointer-events-auto"
                : "opacity-0 translate-x-12 pointer-events-none"
            }`}
          >
            <div className="text-center px-6 md:px-12">
              {/* Star Rating */}
              <div className="flex justify-center gap-1 mb-4 text-amber-500">
                {Array.from({ length: test.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-500" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-lg md:text-xl italic leading-relaxed mb-6 font-medium">
                "{test.text}"
              </p>

              {/* Reviewer Details */}
              <h4 className="text-gray-900 font-bold text-base">{test.name}</h4>
              <p className="text-gray-500 text-sm">{test.location} • <span className="text-primary font-semibold">{test.tag}</span></p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-primary hover:text-white p-2.5 rounded-full shadow border border-gray-100 text-gray-600 transition-all focus:outline-none"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-primary hover:text-white p-2.5 rounded-full shadow border border-gray-100 text-gray-600 transition-all focus:outline-none"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Pagination dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === current ? "bg-primary w-6" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
