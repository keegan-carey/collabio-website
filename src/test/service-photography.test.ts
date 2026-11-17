import { describe, expect, it } from "vitest";
import { services, clientTestimonialSamples, professionalTestimonialSamples } from "@/lib/content";
import { servicePhotography } from "@/lib/service-photography";
import hero from "@/assets/collabio-office.jpg";
import careers from "@/assets/collabio-careers.jpg";
import about from "@/assets/hero-collab.jpg";

describe("Unique website photography", () => {
  it("uses each photo in exactly one website placement", () => {
    const photographs = services.flatMap(service => {
      const photos = servicePhotography[service.slug];
      expect(photos).toBeDefined();
      return photos ? [photos.card.src, photos.detail.src] : [];
    });
    const portraits = [...clientTestimonialSamples, ...professionalTestimonialSamples].map(item => item.portrait);
    const placements = [hero, careers, about, ...photographs, ...portraits];
    expect(placements).toHaveLength(22);
    expect(placements.every(Boolean)).toBe(true);
    expect(new Set(placements).size).toBe(placements.length);
  });
});