import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageSquare, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = 2025;

  return (
    <footer className="bg-primary-dark text-white border-t-2 border-accent/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div>
            <div className="mb-4">
              <span className="font-display font-black text-2xl tracking-wide text-white">
                Shri Balaji<span className="text-accent"> Travels</span>
              </span>
              <p className="text-xs text-accent font-semibold mt-1">SHRI BALAJI TRAVELS</p>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Toyota Glanza & Rumion ke saath premium yatra ka anubhav. Dabra, Gwalior se poore India mein shaadi, dharmik yatra, aur outstation services.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <ShieldCheck className="w-5 h-5 text-accent flex-shrink-0" />
              <span>Virendrasingh Patel — Owner & Operator</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-accent mb-4 border-b border-white/10 pb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/cars" className="hover:text-accent transition-colors">Our Fleet (Glanza & Rumion)</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">Our Services</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-accent transition-colors">Gallery</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">Book a Ride / Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Coverage Areas */}
          <div>
            <h3 className="text-lg font-bold text-accent mb-4 border-b border-white/10 pb-2">Coverage Areas</h3>
            <div className="flex flex-wrap gap-2">
              {["Dabra", "Gwalior", "Datia", "Bhind", "Morena", "Jhansi", "Shivpuri", "Agra", "Madhya Pradesh", "All India"].map((area) => (
                <span
                  key={area}
                  className="bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded text-xs text-gray-200 transition-colors"
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-4 italic">
              * Chardham Yatra, Ayodhya Dham, Vaishno Devi aur sabhi major airports ke liye special routes available.
            </p>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-accent mb-4 border-b border-white/10 pb-2">Contact Us</h3>
            <ul className="space-y-3.5 text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Deedar Colony, Ward No. 11,<br />Dabra, Gwalior (M.P.) 475110</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919109403977" className="hover:text-accent transition-colors">+91 91094 03977</a>
                  <a href="tel:+919425726316" className="hover:text-accent transition-colors">+91 94257 26316</a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="https://wa.me/919109403977" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Chat on WhatsApp</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:info@shribalajitravels.com" className="hover:text-accent transition-colors">info@shribalajitravels.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© {currentYear} Shri Balaji Travels. All rights reserved.</p>
          <p>|| Jay Mai Ki || Designed with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
}
