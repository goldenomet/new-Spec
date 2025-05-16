
import React from "react";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Facebook } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="h-screen relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          className="w-full h-full object-cover brightness-75"
        >
          <source src="/src/assets/Spec hero video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Blue circle overlay - top right */}
      <div className="absolute top-[-5%] right-[5%] w-[310px] h-[300px] rounded-full bg-blue-500/50 z-10 backdrop-blur-sm"></div>
      
      {/* Teal/turquoise large circle overlay - left side */}
      <div className="absolute top-[0%] left-[-10%] w-[800px] h-[800px] rounded-full bg-primary/50 z-10 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="absolute inset-0 z-20">
        <div className="container mx-auto px-6 h-full flex items-center">
          <div className="w-full lg:w-1/2 text-white animate-slide-up">
            <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-8 uppercase">
              HEALTH &<br/>SAFETY<br/>CONSULTANCY
            </h3>
            
            <p className="text-lg mb-10 max-w-xl">
              Spatial Ecosystem Limited is a multi-national Health, Safety, Quality and Environmental management company incorporated to provide viable and sustainable solutions to individuals and organizations in the public and private sector.
            </p>
            
            <div className="flex items-center space-x-3 mb-6">
              <a href="#" className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                <Facebook className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                <Twitter className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
            </div>
            
            <div className="text-sm">
              www.spatialecosystem.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
