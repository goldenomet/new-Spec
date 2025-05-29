import React, { useEffect, useRef, useState } from "react";
import { Eye, Target, CheckCircle, Lightbulb, Shield, Globe } from "lucide-react";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  values: string[];
  isVisible: boolean;
  delay: number;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description, values, isVisible, delay }) => {
  return (
    <div 
      className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-700 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 rounded-full bg-white text-primary flex items-center justify-center mb-6 shadow-lg">
        {icon}
      </div>
      <h3 className="text-2xl md:text-3xl font-bold mb-6">{title}</h3>
      <p className="mb-6 leading-relaxed text-lg opacity-90">
        {description}
      </p>
      <div className="pt-6 border-t border-white/20">
        {values.map((value, index) => (
          <div key={index} className="flex items-center mt-3 first:mt-0">
            <CheckCircle className="mr-3 h-5 w-5 text-white/90" />
            <span className="opacity-90">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const VisionMissionSection: React.FC = () => {
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

  const coreValues = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Safety First",
      description: "Uncompromising commitment to workplace safety and health"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation",
      description: "Cutting-edge solutions using advanced technologies"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Sustainability",
      description: "Environmental stewardship and sustainable practices"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="vision" 
      className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary to-secondary text-white relative overflow-hidden"
    >
      <div className="circle-overlay bg-white/5 w-80 h-80 top-[-100px] left-[10%]"></div>
      <div className="circle-overlay bg-white/5 w-96 h-96 bottom-[-150px] right-[-50px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Vision & Mission</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto opacity-90 text-lg leading-relaxed">
              The guiding principles that drive our organization toward 
              <span className="font-semibold"> HSE excellence</span> and industry leadership
            </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Vision Card */}
          <ValueCard 
            icon={<Eye className="h-8 w-8" />}
            title="Our Vision"
            description="To be the foremost organization providing effective & quality services in occupational health, safety, environmental management & related disciplines across all industries globally."
            values={[
              "Leading in international HSE standards",
              "Quality service delivery excellence",
              "Environmental stewardship leadership",
              "Innovation in safety technologies"
            ]}
            isVisible={isVisible}
            delay={200}
          />
          
          {/* Mission Card */}
          <ValueCard 
            icon={<Target className="h-8 w-8" />}
            title="Our Mission"
            description="To utilize competence and skill pool through education, empowerment and innovative solutions in ensuring safe, healthy and quality development of our clientele at the most effective cost, while upholding best practices and international standards."
            values={[
              "Innovative HSE solutions",
              "Cost-effective methodologies",
              "International compliance standards",
              "Continuous professional development"
            ]}
            isVisible={isVisible}
            delay={400}
          />
        </div>

        {/* Core Values Section */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Core Values</h3>
            <p className="opacity-90 max-w-2xl mx-auto">
              The fundamental principles that guide every aspect of our operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={index}
                className={`text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${800 + index * 150}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-white text-primary flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                <p className="opacity-90 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold mb-4">Join Us in Creating Safer Workplaces</h4>
            <p className="mb-6 opacity-90 text-lg">
              Partner with industry leaders committed to HSE excellence and environmental sustainability
            </p>
            <button 
              onClick={() => {
                const contactSection = document.querySelector("#contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-neutral-100 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
            >
              Start Your HSE Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;