export const SEO_DATA = {
  title: "Patel Travels | Premium Car Rental & Travel Service in Datia, MP",
  description: "Luxury car rental, wedding transportation, outstation tours, and tour travel bookings in Bhansda Khurd, Badoni, Datia (Madhya Pradesh). Hire Toyota Innova Crysta & Swift Dzire with professional drivers.",
  url: "https://pateltravels.com", // Placeholder URL for SEO references
  businessName: "Patel Travels",
  phone: "+91 91094 03977",
  email: "info@pateltravels.com",
  address: {
    street: "Bhansda Khurd, Badoni",
    city: "Datia",
    state: "Madhya Pradesh",
    zip: "475686",
    country: "India"
  },
  geo: {
    latitude: "25.7051",
    longitude: "78.3847"
  }
};

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": SEO_DATA.businessName,
    "image": "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&q=80&w=800",
    "@id": SEO_DATA.url,
    "url": SEO_DATA.url,
    "telephone": SEO_DATA.phone,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SEO_DATA.address.street,
      "addressLocality": SEO_DATA.address.city,
      "addressRegion": SEO_DATA.address.state,
      "postalCode": SEO_DATA.address.zip,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": SEO_DATA.geo.latitude,
      "longitude": SEO_DATA.geo.longitude
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://facebook.com/pateltravels", // placeholders
      "https://instagram.com/pateltravels"
    ]
  };
}

export function getCarRentalSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "provider": {
      "@type": "LocalBusiness",
      "name": SEO_DATA.businessName,
      "telephone": SEO_DATA.phone
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Madhya Pradesh"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Uttar Pradesh"
      },
      {
        "@type": "AdministrativeArea",
        "name": "India"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Car Rental Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Toyota Innova Crysta - Premium 7-Seater MUV",
            "description": "Premium luxury travel suitable for weddings, pilgrimages, outstation tours, and family holidays."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Maruti Suzuki Swift Dzire - Comfort Sedan",
            "description": "Perfect for airport transfers, railway station pick and drop, city trips, and budget travel."
          }
        }
      ]
    }
  };
}
