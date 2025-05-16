import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import StatisticsSection from "@/components/StatisticsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  return (
    <div className="bg-neutral-200 min-h-screen">
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <AboutSection />
      <ServicesSection />
      <VisionMissionSection />
      <StatisticsSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
