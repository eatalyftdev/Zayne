import React from 'react';
import CompanyLayout from '@/components/CompanyLayout';

export default function SongtaiLife() {
  return (
    <CompanyLayout
      name="Songtai Life"
      role="Brand & Social Media Manager"
      tagline="Brand and growth across Cameroon."
      description="Wellness network-marketing company active across Cameroon's regions. Managing full brand strategy, social media presence, and direct recruitment campaigns — translating a builder's systems thinking into consistent brand execution and measurable audience growth."
      facts={[
        { label: "Role", value: "Brand & Social Media Manager" },
        { label: "Status", value: "Active" },
        { label: "Focus", value: "Brand strategy, Social growth, Recruitment" },
        { label: "Region", value: "Cameroon" }
      ]}
      features={[
        {
          title: "Brand strategy",
          desc: "Visual identity alignment, messaging consistency, positioning."
        },
        {
          title: "Social media growth",
          desc: "Content systems, audience development, engagement."
        },
        {
          title: "Recruitment campaigns",
          desc: "Regional campaigns across Cameroon, conversion-focused copy."
        }
      ]}
      builtBullets={[
        "Developed and enforced a unified visual identity across all regional branches.",
        "Created content generation systems to scale social media output without losing quality.",
        "Ran targeted ad campaigns to grow the recruitment network.",
        "Built automated WhatsApp funnels for onboarding new leads."
      ]}
      mockupAccent="bg-amber-600"
      mockupTextAccent="text-amber-600"
      websiteUrl="#"
    />
  );
}
