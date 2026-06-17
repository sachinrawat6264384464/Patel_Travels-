export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  bgImage: string;
  benefits: string[];
}

export const services: Service[] = [
  {
    id: "wedding-transportation",
    title: "Wedding Transportation",
    description: "Make your special day seamless with our premium wedding transport. We provide luxury car rentals for the bride and groom, as well as spacious cars for guests.",
    iconName: "Heart",
    bgImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    benefits: [
      "On-time arrival for the groom, bride, and guests",
      "Decorated cars option available upon request",
      "Experienced chauffeurs in professional attire",
      "Multiple vehicles for family group transport"
    ]
  },
  {
    id: "outstation-cab-service",
    title: "Outstation Cab Service",
    description: "Travel outside the city hassle-free. We offer intercity and outstation round-trip and one-way car rentals with experienced highway drivers.",
    iconName: "Milestone",
    bgImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800",
    benefits: [
      "Experienced long-route drivers familiar with national highways",
      "Flexible stopovers for refreshment and sightseeing",
      "Transparent per-kilometer pricing with no hidden charges",
      "24/7 roadside assistance and support"
    ]
  },
  {
    id: "family-tours",
    title: "Family Tours & Vacations",
    description: "Enjoy memorable road trips with your family in our highly comfortable vehicles. We customize routes according to your preferences.",
    iconName: "Users",
    bgImage: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800",
    benefits: [
      "Child-friendly and elderly-safe driver behavior",
      "Spacious luggage carriers for long holidays",
      "Customizable itineraries with multiple destinations",
      "Clean, sanitized, and odor-free vehicles"
    ]
  },
  {
    id: "religious-tours",
    title: "Religious Pilgrimages",
    description: "Embark on peaceful spiritual journeys to sacred destinations across India. Popular tours include Orchha, Ayodhya, Ujjain, and Chardham.",
    iconName: "Compass",
    bgImage: "https://images.unsplash.com/photo-1600100397608-f010e47fa185?auto=format&fit=crop&q=80&w=800",
    benefits: [
      "Drivers familiar with religious routes and temple timings",
      "Comfortable long-distance travel for elder family members",
      "Flexible timing for morning/evening aarti and pooja",
      "Custom tour packages at pocket-friendly rates"
    ]
  },
  {
    id: "airport-transfers",
    title: "Airport Transfers",
    description: "Never miss a flight. We offer reliable, on-time airport pickup and drop services to Gwalior, Bhopal, Delhi, or any other nearest airport.",
    iconName: "PlaneTakeoff",
    bgImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800",
    benefits: [
      "Flight status tracking to ensure on-time pickups",
      "Help with luggage handling at the airport gates",
      "Clean, air-conditioned cars to relax after/before flights",
      "Fix-rate transparent pricing for airport runs"
    ]
  },
  {
    id: "railway-station-pickup-drop",
    title: "Railway Station Pickup & Drop",
    description: "Fast and reliable pickups/drops at Datia, Jhansi, or Gwalior railway stations. Enjoy hassle-free travel with pre-booked, waiting rides.",
    iconName: "Train",
    bgImage: "https://images.unsplash.com/photo-1532103054090-334e6e60ab29?auto=format&fit=crop&q=80&w=800",
    benefits: [
      "Punctual drivers waiting outside the station",
      "Safe, night-time travel assurance for families",
      "Short notice bookings accepted",
      "Comfortable hatchbacks/sedans for quick transfers"
    ]
  },
  {
    id: "corporate-travel",
    title: "Corporate & Executive Travel",
    description: "Professional, punctual, and premium car rental services for corporate meetings, business visits, client pickups, and company tours.",
    iconName: "Briefcase",
    bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    benefits: [
      "Well-maintained luxury vehicles representing corporate standards",
      "Professional, non-intrusive chauffeurs",
      "GPS tracking and secure travel environments",
      "GST billing and corporate monthly contract options"
    ]
  },
  {
    id: "party-transportation",
    title: "Party & Event Transportation",
    description: "Hire our vehicles for birthday parties, anniversaries, social events, or festival gatherings. Keep your guests safe with reliable group rides.",
    iconName: "PartyPopper",
    bgImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
    benefits: [
      "Late-night pickup and drop-off assurance",
      "Safe designated drivers for late events",
      "Flexible group transit solutions",
      "Easy coordination with multiple pickup points"
    ]
  },
  {
    id: "one-way-travel",
    title: "One-Way Intercity Trips",
    description: "Only pay for the distance you travel! Book our one-way drop services to any city in India at competitive and fair rates.",
    iconName: "TrendingUp",
    bgImage: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&q=80&w=800",
    benefits: [
      "Affordable pay-per-way pricing",
      "No return-fare charge for selected major routes",
      "Doorstep pickup and direct drop-off",
      "Clean, reliable sedan or SUV"
    ]
  },
  {
    id: "round-trip-travel",
    title: "Round Trip Journeys",
    description: "Plan weekend getaways or multi-day tours. Our driver stays with you throughout the trip, providing seamless commuting at the destination.",
    iconName: "RefreshCw",
    bgImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
    benefits: [
      "Dedicated car and chauffeur at your service for multiple days",
      "Freedom to explore local spots at your own pace",
      "Economical packages for multi-day travel",
      "Expert navigation in hills and new cities"
    ]
  },
  {
    id: "group-travel",
    title: "Group Tours",
    description: "Travelling with a larger crew? Use our 7-seater Toyota Rumion for group picnics, social gatherings, and corporate team-outings. Comfortable, spacious, and perfect for groups up to 7 passengers.",
    iconName: "Users2",
    bgImage: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&q=80&w=800",
    benefits: [
      "Travel together in a single premium vehicle",
      "Generous cargo space for all group bags",
      "Comfortable seating configuration with rear AC vents",
      "Interactive travel environment for team/family bonding"
    ]
  },
  {
    id: "tourist-travel",
    title: "Sightseeing & Tourist Travel",
    description: "Explore the historical beauty of Bundelkhand and Madhya Pradesh. Hire us for guided-like local tours of Orchha, Gwalior Fort, Datia Peeth, and Khajuraho.",
    iconName: "MapPin",
    bgImage: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800",
    benefits: [
      "Drivers with local knowledge of tourist spots and hidden gems",
      "Optimized routes to cover maximum attractions in minimal time",
      "Flexible schedule for photography and shopping",
      "English/Hindi speaking friendly drivers"
    ]
  },
  {
    id: "emergency-booking",
    title: "Emergency 24/7 Booking",
    description: "Sudden plan or medical emergency? We are available 24/7 to provide swift dispatch vehicles for urgent travel needs.",
    iconName: "PhoneCall",
    bgImage: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=800",
    benefits: [
      "Immediate vehicle dispatch upon verification",
      "Night-time driving experts to ensure quick transit",
      "Direct communication with the owner",
      "Reliable cars that start on first turn"
    ]
  },
  {
    id: "event-transportation",
    title: "Event & Festival Transport",
    description: "Hire us for VIP transport, political events, corporate seminars, or major festivals like Navratri at Pitambara Peeth.",
    iconName: "CalendarRange",
    bgImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
    benefits: [
      "VIP treatment and high-quality premium service",
      "Coordinated dispatch for large conferences",
      "Local logistical support & traffic rerouting expertise",
      "Hassle-free parking and drop-off management"
    ]
  }
];
