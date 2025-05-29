import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Target, Users, Globe } from "lucide-react";

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const achievements = [
    { icon: <Users className="h-5 w-5" />, text: "500+ Satisfied Clients" },
    { icon: <Target className="h-5 w-5" />, text: "200+ Projects Completed" },
    { icon: <Globe className="h-5 w-5" />, text: "Multi-National Operations" },
  ];

  const capabilities = [
    "NEBOSH, IOSH & OSHA Affiliated",
    "International Best Practices",
    "Advanced HSE Technologies",
    "Comprehensive Risk Assessment",
    "Environmental Management Systems",
    "Quality Assurance Programs"
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-16 md:py-24 bg-neutral-50 relative overflow-hidden"
    >
      <div className="circle-overlay bg-primary/10 w-64 h-64 top-[-50px] right-[10%]"></div>
      <div className="circle-overlay bg-secondary/10 w-80 h-80 bottom-[-100px] left-[-50px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">
              About <span className="text-primary">Spatial Ecosystem</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-neutral-600 leading-relaxed">
              Leading the way in Health, Safety, Quality and Environmental management with 
              <span className="text-primary font-semibold"> 25+ years of excellence</span>
            </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`order-2 lg:order-1 transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
                Your Trusted HSE Partner
              </h3>
              <p className="text-neutral-700 mb-6 text-lg leading-relaxed">
                Spatial Ecosystem Limited is a multi-national Health, Safety, Quality and Environmental management company 
                incorporated to provide <span className="text-primary font-semibold">viable and sustainable solutions</span> to 
                individuals and organizations in both public and private sectors.
              </p>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                We are an indigenous firm with international affiliations, utilizing "best practices" and "best available techniques" 
                to deliver projects professionally and efficiently. Our innovative approach combines advanced technologies with 
                proven methodologies to ensure client success.
              </p>
            </div>

            {/* Capabilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-neutral-700">{capability}</span>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-neutral-100">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {achievement.icon}
                  </div>
                  <span className="text-sm font-medium text-neutral-700">{achievement.text}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => {
                  const contactSection = document.querySelector("#contact");
                  contactSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg group"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => {
                  const servicesSection = document.querySelector("#services");
                  servicesSection?.scrollIntoView({ behavior: "smooth" });
                }}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                View Services
              </Button>
            </div>
          </div>
          
          <div className={`order-1 lg:order-2 relative transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/7616608/pexels-photo-7616608.jpeg" 
                alt="Professional HSE consultant representing our expertise" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover z-10 relative"
              />
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl z-20 border border-neutral-100">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-1">25+</div>
                  <div className="text-sm text-neutral-600 font-medium">Years of Excellence</div>
                </div>
              </div>

              {/* Floating Certification Badge */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-primary to-secondary p-4 rounded-xl text-white shadow-2xl z-20">
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-xs font-semibold">CERTIFIED</div>
                  <div className="text-xs opacity-90">PROFESSIONALS</div>
                </div>
              </div>
              
              {/* Background decorative border */}
              <div className="absolute w-full h-full top-8 left-8 border-4 border-primary/20 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;