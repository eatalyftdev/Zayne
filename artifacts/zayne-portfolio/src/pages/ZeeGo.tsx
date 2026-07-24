import React from 'react';
import CompanyLayout from '@/components/CompanyLayout';

export default function ZeeGo() {
  return (
    <CompanyLayout
      name="ZeeGo"
      role="CTO"
      tagline="Engineering backbone for Cameroon's logistics."
      description="One of Cameroon's larger logistics platforms. As CTO, responsible for technical architecture, engineering quality, infrastructure reliability, and scaling the platform's core dispatch and tracking systems."
      facts={[
        { label: "Role", value: "CTO" },
        { label: "Status", value: "Active" },
        { label: "Stack", value: "Node.js, PostgreSQL, React, Firebase" },
        { label: "Year", value: "2022" }
      ]}
      features={[
        {
          title: "Platform architecture",
          desc: "System design, API architecture, database optimization."
        },
        {
          title: "Engineering leadership",
          desc: "Code quality standards, team workflows, release process."
        },
        {
          title: "Infrastructure reliability",
          desc: "Uptime, monitoring, deployment pipelines."
        }
      ]}
      builtBullets={[
        "Led the technical roadmap and sprint planning for the engineering team.",
        "Refactored legacy codebases into modern React and Node.js microservices.",
        "Implemented CI/CD pipelines to ensure zero-downtime deployments.",
        "Optimized PostgreSQL queries to handle high-volume dispatch requests."
      ]}
      mockupAccent="bg-blue-600"
      mockupTextAccent="text-blue-600"
      websiteUrl="#"
    />
  );
}
