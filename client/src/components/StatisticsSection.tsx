import React, { useState, useEffect, useRef } from "react";
import { Users, GitBranch, Award, Medal } from "lucide-react";

interface StatProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  count: number;
}

const StatItem: React.FC<StatProps> = ({ icon, value, label, count }) => {
  const [displayCount, setDisplayCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateCounter();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounter = () => {
    const duration = 1500;
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
    <div className="text-center" ref={elementRef}>
      <div className="w-20 h-20 rounded-full bg-primary bg-opacity-10 mx-auto flex items-center justify-center mb-4">
        {icon}
      </div>
      <div className="text-4xl font-bold text-neutral-900 mb-2">
        {displayCount}
        {value.includes("+") && "+"}
      </div>
      <div className="text-neutral-700">{label}</div>
    </div>
  );
};

const StatisticsSection: React.FC = () => {
  const stats = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      value: "500+",
      label: "Satisfied Clients",
      count: 500
    },
    {
      icon: <GitBranch className="h-6 w-6 text-primary" />,
      value: "200+",
      label: "Projects Completed",
      count: 200
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      value: "50+",
      label: "Certifications",
      count: 50
    },
    {
      icon: <Medal className="h-6 w-6 text-primary" />,
      value: "25+",
      label: "Years Experience",
      count: 25
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem 
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              count={stat.count}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
