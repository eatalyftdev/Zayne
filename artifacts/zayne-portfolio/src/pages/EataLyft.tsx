import React from 'react';
import CompanyLayout from '@/components/CompanyLayout';

export default function EataLyft() {
  return (
    <CompanyLayout
      name="EataLyft"
      role="Founder"
      tagline="The logistics platform Cameroon needed."
      description="Multi-service platform spanning rides, food delivery, parcel delivery, bus booking, e-commerce marketplace, hotel booking, and handyman services. Architected from scratch around a unified role system with 9+ user types — users, vendors, riders, drivers, bus agents, hotel managers, handyman, corporate clients, and admins — all under one authentication layer with per-role dashboards."
      facts={[
        { label: "Role", value: "Founder" },
        { label: "Status", value: "Active" },
        { label: "Stack", value: "Next.js 15, Firebase, Supabase, Tailwind CSS" },
        { label: "Year", value: "2023" }
      ]}
      features={[
        {
          title: "9-role unified architecture",
          desc: "Single auth layer, per-role dashboards, real-time sync."
        },
        {
          title: "WhatsApp-first communications",
          desc: "Meta Graph API v23.0, order notifications, driver dispatch, support flows."
        },
        {
          title: "Multi-service in one app",
          desc: "Rides, delivery, bus, hotels, e-commerce, handyman under one interface."
        },
        {
          title: "Real-time dispatch network",
          desc: "Live driver tracking, automated assignment, ETA calculation."
        }
      ]}
      builtBullets={[
        "Architected the entire Next.js 15 frontend and Firebase/Supabase backend.",
        "Built the real-time geolocation tracking for drivers.",
        "Integrated Meta Graph API for complete WhatsApp conversational flows.",
        "Designed the role-based access control handling 9 distinct user types."
      ]}
      mockupAccent="bg-green-500"
      mockupTextAccent="text-green-500"
      websiteUrl="#"
    />
  );
}
