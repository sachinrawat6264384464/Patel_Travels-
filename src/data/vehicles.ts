export interface Vehicle {
  id: string;
  name: string;
  type: string;
  passengers: number;
  luggage: string;
  transmission: string;
  fuel: string;
  ac: boolean;
  pricePerKm: string;
  image: string;
  images: string[];
  features: string[];
  description: string;
  suitability: string[];
}

export const vehicles: Vehicle[] = [
  {
    id: "innova-crysta",
    name: "Toyota Innova Crysta",
    type: "Premium MUV / SUV",
    passengers: 7,
    luggage: "4-5 Bags",
    transmission: "Manual/Automatic",
    fuel: "Diesel",
    ac: true,
    pricePerKm: "₹16/km",
    image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800"
    ],
    features: [
      "Plush Leather Captain Seats",
      "Automatic Climate Control (AC)",
      "Ample Legroom & Headroom",
      "High-speed Charging Ports",
      "Premium Audio System",
      "Dual Airbags & ABS Safety",
      "Top-tier Suspension for smooth long rides"
    ],
    description: "The Toyota Innova Crysta is the gold standard of travel comfort in India. Known for its spacious cabin, premium ride quality, and robust performance on hill stations and highways alike. Ideal for family vacations, corporate events, and wedding delegations.",
    suitability: [
      "Long-distance family tours",
      "Wedding guest transportation",
      "Outstation corporate trips",
      "Religious pilgrimage groups",
      "Chauffeur-driven luxury travel"
    ]
  },
  {
    id: "swift-dzire",
    name: "Maruti Suzuki Swift Dzire",
    type: "Comfort Sedan",
    passengers: 4,
    luggage: "2-3 Bags",
    transmission: "Manual",
    fuel: "CNG/Petrol",
    ac: true,
    pricePerKm: "₹11/km",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf0a3?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800"
    ],
    features: [
      "Comfortable Fabric Seating",
      "Powerful Air Conditioning",
      "Excellent Fuel Efficiency",
      "Bluetooth Enabled Music System",
      "Dual Airbags & ABS",
      "Generous Boot Space"
    ],
    description: "The Maruti Swift Dzire is India's favorite sedan for city commutes, short outstations, and quick airport/railway transfers. It offers a pocket-friendly yet extremely comfortable and smooth ride for small families or business travelers.",
    suitability: [
      "Airport & Railway Station pickups/drops",
      "Daily local commuting & sightseeing",
      "Short one-way and round trips",
      "Budget-friendly family travel"
    ]
  }
];
