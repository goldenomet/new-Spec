import React from "react";

const PartnersSection: React.FC = () => {
  const partners = [
    { name: "NEBOSH", status: "CERTIFIED" },
    { name: "IOSH", status: "AFFILIATED" },
    { name: "OSHA", status: "STANDARDS" },
    { name: "ISO 14001", status: "COMPLIANT" },
  ];

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div key={index} className="text-center">
              <div className="font-semibold text-neutral-800 mb-1">{partner.name}</div>
              <div className="text-xs text-neutral-500">{partner.status}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
