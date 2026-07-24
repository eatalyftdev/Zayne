import React from 'react';
import CompanyLayout from '@/components/CompanyLayout';

export default function AJTech() {
  return (
    <CompanyLayout
      name="AJ Tech"
      role="Founder & CEO"
      tagline="The studio that ships African-first products."
      description="The studio behind EataLyft and the engineering home base. AJ Tech builds and ships digital products designed specifically for African market realities — not adapting foreign templates after the fact, but building for the infrastructure, connectivity, and user behavior of Cameroon and West Africa from day one."
      facts={[
        { label: "Role", value: "Founder & CEO" },
        { label: "Status", value: "Active" },
        { label: "Stack", value: "Next.js 15, Drizzle ORM, PostgreSQL" },
        { label: "Year", value: "2022" }
      ]}
      features={[
        {
          title: "African-first product thinking",
          desc: "Built for local market realities, not imported templates."
        },
        {
          title: "Full-stack studio",
          desc: "Design through deployment, one team, one judgment."
        },
        {
          title: "AI-assisted tooling",
          desc: "Internal automation, AI-assisted workflows, operational efficiency."
        },
        {
          title: "Open to studio partnerships",
          desc: "Taking selected client projects and technical partnerships."
        }
      ]}
      builtBullets={[
        "Established the studio's technical stack: Next.js, Firebase, Supabase, Drizzle.",
        "Built internal AI workflows that cut boilerplate coding time by 60%.",
        "Managed client relationships and technical scoping for enterprise projects.",
        "Created a design system optimized for high performance on low-end devices."
      ]}
      mockupAccent="bg-purple-600"
      mockupTextAccent="text-purple-600"
      websiteUrl="#"
    />
  );
}
