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
    id: "toyota-glanza",
    name: "Toyota Glanza",
    type: "Premium Hatchback",
    passengers: 5,
    luggage: "2-3 Bags",
    transmission: "Manual / AMT",
    fuel: "Petrol / CNG",
    ac: true,
    pricePerKm: "Contact for Rates",
    image: "/images/glanza.png",
    images: [
      "/images/glanza.png",
      "/images/glanza.png",
      "/images/glanza.png"
    ],
    features: [
      "Comfortable Fabric & Premium Seating",
      "Powerful Automatic AC",
      "Excellent Petrol / CNG Fuel Efficiency",
      "Bluetooth & USB Music System",
      "Dual Front Airbags + ABS Safety",
      "Rear Parking Camera",
      "Auto Headlamps & Wipers"
    ],
    description: "Toyota Glanza ek premium hatchback hai jo comfort, mileage aur style ka behtareen combination hai. Dabra aur Gwalior district mein shaadi, party, local aur outstation trips ke liye bilkul perfect hai. The perfect compact premium ride for city commutes, wedding guests, and short outstation journeys.",
    suitability: [
      "Wedding & Party Guest Transportation",
      "Airport & Railway Station Transfers",
      "Local Dabra / Gwalior Commuting",
      "Short Outstation Trips",
      "Budget-friendly Family Travel"
    ]
  },
  {
    id: "toyota-rumion",
    name: "Toyota Rumion",
    type: "Premium MPV / 7-Seater",
    passengers: 7,
    luggage: "4-5 Bags",
    transmission: "Manual / Automatic",
    fuel: "Petrol / CNG",
    ac: true,
    pricePerKm: "Contact for Rates",
    image: "/images/rumion.png",
    images: [
      "/images/rumion.png",
      "/images/rumion.png",
      "/images/rumion.png"
    ],
    features: [
      "7-Seater Spacious Cabin",
      "Automatic Climate Control AC",
      "Captain Seats & Ample Legroom",
      "9-inch Touchscreen Infotainment",
      "6 Airbags & Advanced Safety",
      "360° Parking Camera",
      "Sliding Rear Door for Easy Entry",
      "Premium Suspension for Long Journeys"
    ],
    description: "Toyota Rumion ek shandar 7-seater MPV hai jo bade parivaron, shaadi ki baarat aur lambi outstation yaatraon ke liye perfect hai. Comfortable seats, bada cabin aur Toyota ki trusted quality ise Dabra-Gwalior area ka sabse pasandida 7-seater banati hai.",
    suitability: [
      "Wedding Baarat & Family Outings",
      "Religious Pilgrimage Group Tours",
      "Long-distance Outstation Travel",
      "Corporate Group Transfers",
      "Chardham / Ayodhya / Temple Tours"
    ]
  }
];
