export const SEO_DATA = {
  title: "Shri Balaji Travels | Toyota Glanza & Rumion — Car Rental Dabra, Gwalior MP",
  description: "Shri Balaji Travels — Toyota Glanza & Rumion ki booking ke liye sampark karen. Shaadi parti, outstation, airport transfer, Dabra Gwalior MP. Call: 9109403977 / 9425726316",
  url: "https://shribalajitravels.com",
  businessName: "Shri Balaji Travels",
  ownerName: "Virendrasingh Patel",
  phone: "+91 91094 03977",
  phone2: "+91 94257 26316",
  email: "info@shribalajitravels.com",
  address: {
    street: "Deedar Colony, Ward No. 11",
    city: "Dabra",
    state: "Madhya Pradesh",
    district: "Gwalior",
    zip: "475110",
    country: "India"
  },
  geo: {
    latitude: "25.8855",
    longitude: "78.3341"
  }
};

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": SEO_DATA.businessName,
    "image": "https://imgd.aeplcdn.com/664x374/n/cw/ec/169435/rumion-exterior-right-front-three-quarter-3.jpeg?q=80",
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
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": []
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
      { "@type": "AdministrativeArea", "name": "Gwalior" },
      { "@type": "AdministrativeArea", "name": "Dabra" },
      { "@type": "AdministrativeArea", "name": "Madhya Pradesh" },
      { "@type": "AdministrativeArea", "name": "India" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Car Rental Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Toyota Glanza - Premium Hatchback",
            "description": "Ideal for weddings, airport transfers, local commuting and short outstation trips in Dabra & Gwalior."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Toyota Rumion - 7-Seater MPV",
            "description": "Perfect for large families, wedding baarats, pilgrimages, and long outstation journeys."
          }
        }
      ]
    }
  };
}
