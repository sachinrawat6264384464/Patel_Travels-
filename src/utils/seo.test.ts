import { describe, it, expect } from 'vitest';
import { getLocalBusinessSchema, getCarRentalSchema, SEO_DATA } from './seo';

describe('SEO Schema Utilities', () => {
  describe('getLocalBusinessSchema', () => {
    it('should generate a valid LocalBusiness JSON-LD schema', () => {
      const schema = getLocalBusinessSchema();

      expect(schema).toBeDefined();
      expect(schema['@context']).toBe('https://schema.org');
      expect(schema['@type']).toBe('LocalBusiness');
      expect(schema.name).toBe(SEO_DATA.businessName);
      expect(schema.telephone).toBe(SEO_DATA.phone);
      expect(schema.url).toBe(SEO_DATA.url);
      expect(schema.address.addressLocality).toBe(SEO_DATA.address.city);
      expect(schema.address.addressRegion).toBe(SEO_DATA.address.state);
      expect(schema.geo.latitude).toBe(SEO_DATA.geo.latitude);
      expect(schema.geo.longitude).toBe(SEO_DATA.geo.longitude);
    });
  });

  describe('getCarRentalSchema', () => {
    it('should generate a valid TaxiService JSON-LD schema', () => {
      const schema = getCarRentalSchema();

      expect(schema).toBeDefined();
      expect(schema['@context']).toBe('https://schema.org');
      expect(schema['@type']).toBe('TaxiService');
      expect(schema.provider.name).toBe(SEO_DATA.businessName);
      expect(schema.provider.telephone).toBe(SEO_DATA.phone);
      expect(Array.isArray(schema.areaServed)).toBe(true);
      expect(schema.hasOfferCatalog.name).toBe('Car Rental Services');
      expect(schema.hasOfferCatalog.itemListElement.length).toBe(2);
      
      const glanzaOffer = schema.hasOfferCatalog.itemListElement.find(
        (item) => item.itemOffered.name.includes('Glanza')
      );
      expect(glanzaOffer).toBeDefined();
      expect(glanzaOffer?.itemOffered.name).toBe('Toyota Glanza - Premium Hatchback');

      const rumionOffer = schema.hasOfferCatalog.itemListElement.find(
        (item) => item.itemOffered.name.includes('Rumion')
      );
      expect(rumionOffer).toBeDefined();
      expect(rumionOffer?.itemOffered.name).toBe('Toyota Rumion - 7-Seater MPV');
    });
  });
});
