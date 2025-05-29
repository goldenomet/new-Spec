import React from "react";
import { Shield, Award, Users, Globe } from "lucide-react";

const PartnersSection: React.FC = () => {
  const partners = [
    { 
      name: "NEBOSH", 
      status: "CERTIFIED",
      icon: <Shield className="h-8 w-8" />,
      description: "National Examination Board in Occupational Safety and Health"
    },
    { 
      name: "IOSH", 
      status: "AFFILIATED",
      icon: <Users className="h-8 w-8" />,
      description: "Institution of Occupational Safety and Health"
    },
    { 
      name: "OSHA", 
      status: "COMPLIANT",
      icon: <Award className="h-8 w-8" />,
      description: "Occupational Safety and Health Administration Standards"
    },
    { 
      name: "ISO 14001", 
      status: "CERTIFIED",
      icon: <Globe className="h-8 w-8" />,
      description: "Environmental Management Systems Standard"
    },
  ];

  return (
    <section id="partners" className="bg-white py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
            Certified & Affiliated Partners
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Our expertise is backed by internationally recognized certifications and affiliations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg">
                {partner.icon}
              </div>
              <div className="font-bold text-xl text-neutral-800 mb-1">{partner.name}</div>
              <div className="text-sm text-primary font-semibold mb-2">{partner.status}</div>
              <div className="text-xs text-neutral-500 leading-relaxed">{partner.description}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-primary/5 rounded-full border border-primary/20">
            <Shield className="h-5 w-5 text-primary mr-2" />
            <span className="text-primary font-semibold">Trusted by 500+ Organizations Worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;