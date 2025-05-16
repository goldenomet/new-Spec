import React from "react";
import { Button } from "@/components/ui/button";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-neutral-100 relative overflow-hidden">
      <div className="circle-overlay bg-primary bg-opacity-10 w-64 h-64 top-[-50px] right-[10%]"></div>
      <div className="circle-overlay bg-secondary bg-opacity-10 w-80 h-80 bottom-[-100px] left-[-50px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">About Us</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-neutral-700">Learn more about our company and our commitment to excellence</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold text-neutral-900 mb-6">Spatial Ecosystems Limited</h3>
            <p className="text-neutral-700 mb-4">
              Spatial Ecosystems Limited is a multi-national Health, Safety, Quality and Environmental management company incorporated to provide viable and sustainable solutions to individuals and organizations in the public and private sector.
            </p>
            <p className="text-neutral-700 mb-4">
              We are an indigenous firm with international affiliations with NEBOSH, IOSH and OSHA, using "best practices" and "best available techniques" in carrying out all projects in a professional and timely manner.
            </p>
            <p className="text-neutral-700 mb-6">
              Our scope of operation include but are not limited to; HSE Consulting, HSE Training, Environmental Management Systems Audit and General Project Management.
            </p>
            <p className="text-neutral-700 mb-8">
              We execute challenging projects under the most critical environmental and logistical conditions in all given locations, combining innovation and advanced technologies to secure our Clients' successes.
            </p>
            
            <div className="mt-8">
              <Button 
                onClick={() => {
                  const contactSection = document.querySelector("#contact");
                  contactSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300"
              >
                Get in Touch
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <img 
              src="src/assets/team.jpg" 
              alt="Environmental management plan" 
              className="rounded-xl shadow-lg w-full h-auto object-cover z-10 relative"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary p-5 rounded-xl text-white shadow-lg z-20">
              <div className="text-4xl font-bold">25+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div className="absolute w-full h-full top-6 left-6 border-4 border-secondary rounded-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
