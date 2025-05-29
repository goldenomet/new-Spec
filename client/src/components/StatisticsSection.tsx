import React, { useState, useEffect, useRef } from "react";
import { Users, GitBranch, Award, Medal, TrendingUp, Globe } from "lucide-react";

interface StatProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  count: number;
  suffix?: string;
  isVisible: boolean;
  delay: number;
}

const StatItem: React.FC<StatProps> = ({ icon, value, label, count, suffix = "", isVisible, delay }) => {
  const [displayCount, setDisplayCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      animateCounter();
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  const animateCounter = () => {
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    const increment = Math.ceil(count / steps);
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= count) {
        setDisplayCount(count);
        clearInterval(timer);
      } else {
        setDisplayCount(current);
      }
    }, stepTime);
  };

  return (
    <div 
      className={`text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-700 hover:-translate-y-2 border border-neutral-100 group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
        {icon}
      </div>
      <div className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">
        {displayCount}
        {suffix}
      </div>
      <div className="text-neutral-600 font-medium">{label}</div>
    </div>
  );
};

const StatisticsSection: React.FC = () => {
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

  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      value: "500+",
      label: "Satisfied Clients",
      count: 500,
      suffix: "+"
    },
    {
      icon: <GitBranch className="h-8 w-8" />,
      value: "250+",
      label: "Projects Completed",
      count: 250,
      suffix: "+"
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: "75+",
      label: "Industry Certifications",
      count: 75,
      suffix: "+"
    },
    {
      icon: <Medal className="h-8 w-8" />,
      value: "25+",
      label: "Years of Excellence",
      count: 25,
      suffix: "+"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: "98%",
      label: "Client Satisfaction",
      count: 98,
      suffix: "%"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      value: "15+",
      label: "Countries Served",
      count: 15,
      suffix: "+"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-neutral-50 to-neutral-100 relative overflow-hidden"
    >
      <div className="circle-overlay bg-primary/5 w-80 h-80 top-[-100px] left-[10%]"></div>
      <div className="circle-overlay bg-secondary/5 w-96 h-96 bottom-[-150px] right-[-50px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">
              Our <span className="text-primary">Impact</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-neutral-600 leading-relaxed">
              Delivering measurable results through 
              <span className="text-primary font-semibold"> proven expertise</span> and commitment to excellence
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatItem 
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              count={stat.count}
              suffix={stat.suffix}
              isVisible={isVisible}
              delay={index * 150}
            />
          ))}
        </div>

        {/* Additional Achievement Highlights */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="text-primary font-bold text-lg mb-2">Zero Incident Record</div>
            <div className="text-neutral-600">Maintained across 200+ projects</div>
          </div>
          <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="text-primary font-bold text-lg mb-2">24/7 Support</div>
            <div className="text-neutral-600">Emergency response availability</div>
          </div>
          <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="text-primary font-bold text-lg mb-2">Multi-Industry</div>
            <div className="text-neutral-600">Oil & Gas, Construction, Mining</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;