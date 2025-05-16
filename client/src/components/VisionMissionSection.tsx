import React from "react";
import { Eye, Target, CheckCircle } from "lucide-react";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  values: string[];
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description, values }) => {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
      <div className="w-16 h-16 rounded-full bg-white text-primary flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="mb-4 leading-relaxed">
        {description}
      </p>
      <div className="pt-4 border-t border-white border-opacity-20 mt-6">
        {values.map((value, index) => (
          <div key={index} className="flex items-center mt-2 first:mt-0">
            <CheckCircle className="mr-3 h-5 w-5" />
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const VisionMissionSection: React.FC = () => {
  return (
    <section id="vision" className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
      <div className="circle-overlay bg-white bg-opacity-10 w-80 h-80 top-[-100px] left-[10%]"></div>
      <div className="circle-overlay bg-white bg-opacity-10 w-96 h-96 bottom-[-150px] right-[-50px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Vision & Mission</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto opacity-90">The guiding principles that drive our organization forward</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision Card */}
          <ValueCard 
            icon={<Eye className="h-6 w-6" />}
            title="Our Vision"
            description="To be the foremost organization providing effective & quality services in occupational health, safety, environmental management & related disciplines."
            values={[
              "Leading in industry standards",
              "Quality service delivery",
              "Environmental stewardship"
            ]}
          />
          
          {/* Mission Card */}
          <ValueCard 
            icon={<Target className="h-6 w-6" />}
            title="Our Mission"
            description="To utilize competence and skill pool through education, empowerment and innovative solutions in ensuring safe, healthy and quality development of our clientele at the most effective cost, while upholding best practices and international standards."
            values={[
              "Innovative solutions",
              "Cost effectiveness",
              "International standards"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
