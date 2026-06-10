import React from "react";
import { PhoneCall, CalendarRange, CheckCircle2, Navigation } from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function BookingTimeline() {
  const steps: Step[] = [
    {
      number: "01",
      title: "Contact Us",
      description: "Call us directly or message us on WhatsApp to discuss your travel requirements.",
      icon: <PhoneCall className="w-6 h-6 text-white" />
    },
    {
      number: "02",
      title: "Share Travel Details",
      description: "Give us your travel dates, passenger count, pickup point, and destination.",
      icon: <CalendarRange className="w-6 h-6 text-white" />
    },
    {
      number: "03",
      title: "Confirm Booking",
      description: "We'll offer you the best price. Confirm the date, vehicle choice, and driver assignment.",
      icon: <CheckCircle2 className="w-6 h-6 text-white" />
    },
    {
      number: "04",
      title: "Enjoy Your Journey",
      description: "Our professional chauffeur arrives on time with a clean, fully-serviced vehicle.",
      icon: <Navigation className="w-6 h-6 text-white" />
    }
  ];

  return (
    <div className="relative border-l-2 border-dashed border-primary/20 ml-6 pl-8 space-y-12 py-4">
      {steps.map((step, idx) => (
        <div key={idx} className="relative group">
          {/* Step Icon Container */}
          <div className="absolute -left-14 top-1 bg-primary hover:bg-primary-light p-2.5 rounded-full border-4 border-slate-50 transition-colors shadow-md flex items-center justify-center">
            {step.icon}
          </div>

          {/* Card Content */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <span className="text-accent font-display text-sm font-bold tracking-widest uppercase block mb-1">
              Step {step.number}
            </span>
            <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
            <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
