import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Facebook, ChevronDown, Play } from "lucide-react";

const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToNextSection = () => {
    const partnersSection = document.querySelector("#partners");
    partnersSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="h-screen relative overflow-hidden">
      {/* Enhanced Background with Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1516216628859-9bccecab13ca')`
          }}
        />
      </div>

      {/* Enhanced Circle Overlays with Glassmorphism */}
      <div className="absolute top-[-5%] right-[5%] w-[310px] h-[300px] rounded-full bg-blue-500/30 z-10 backdrop-blur-sm border border-white/20"></div>
      <div className="absolute top-[0%] left-[-10%] w-[800px] h-[800px] rounded-full bg-primary/30 z-10 backdrop-blur-sm border border-white/10"></div>
      
      {/* Main Content */}
      <div className="absolute inset-0 z-20">
        <div className="container mx-auto px-6 h-full flex items-center">
          <div className={`w-full lg:w-1/2 text-white transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-sm font-medium border border-primary/30">
                CERTIFIED HSE PROFESSIONALS
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 uppercase">
              HEALTH &<br/>
              <span className="text-primary">SAFETY</span><br/>
              CONSULTANCY
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-xl leading-relaxed opacity-90">
              Spatial Ecosystem Limited is a multi-national Health, Safety, Quality and Environmental management company providing 
              <span className="text-primary font-medium"> sustainable solutions</span> to organizations worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={() => {
                  const contactSection = document.querySelector("#contact");
                  contactSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Consultation
              </Button>
              <Button 
                onClick={() => {
                  const servicesSection = document.querySelector("#services");
                  servicesSection?.scrollIntoView({ behavior: "smooth" });
                }}
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                Our Services
              </Button>
            </div>
            
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-sm opacity-80">Connect with us:</span>
              <div className="flex space-x-3">
                <a href="#" className="bg-white/10 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center hover:bg-primary transition-all duration-300 hover:scale-110 border border-white/20">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-white/10 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center hover:bg-primary transition-all duration-300 hover:scale-110 border border-white/20">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="bg-white/10 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center hover:bg-primary transition-all duration-300 hover:scale-110 border border-white/20">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="text-sm opacity-80">
              <span className="text-primary font-medium">www.spatialecosystem.com</span>
            </div>
          </div>

          {/* Right side content - Company credentials */}
          <div className="hidden lg:block w-1/2 pl-12">
            <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-semibold mb-6 text-white">Industry Certifications</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-2xl font-bold text-primary">NEBOSH</div>
                    <div className="text-sm text-white/80">Certified</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-2xl font-bold text-primary">IOSH</div>
                    <div className="text-sm text-white/80">Affiliated</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-2xl font-bold text-primary">OSHA</div>
                    <div className="text-sm text-white/80">Standards</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-2xl font-bold text-primary">25+</div>
                    <div className="text-sm text-white/80">Years Exp.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button 
          onClick={scrollToNextSection}
          className="flex flex-col items-center text-white/80 hover:text-white transition-all duration-300 group"
        >
          <span className="text-sm mb-2 opacity-80">Scroll to explore</span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;