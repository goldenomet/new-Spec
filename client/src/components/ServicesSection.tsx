import React, { useEffect, useRef, useState } from "react";
import { 
  Briefcase, 
  Presentation, 
  ClipboardCheck, 
  ListTodo,
  ArrowRight,
  Shield,
  Zap,
  CheckCircle2
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  isVisible: boolean;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features, isVisible, delay }) => {
  return (
    <div className={`bg-white rounded-2xl shadow-lg p-8 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 border-t-4 border-primary group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: `${delay}ms` }}>
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-neutral-900 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-neutral-600 mb-6 leading-relaxed">{description}</p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-neutral-700">
            <CheckCircle2 className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      
      <button className="text-primary font-semibold hover:text-primary/80 transition-colors duration-300 inline-flex items-center group">
        Learn More 
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  isVisible: boolean;
  delay: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, isVisible, delay }) => {
  return (
    <div className={`relative z-10 flex flex-col items-center text-center transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: `${delay}ms` }}>
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center mb-4 text-xl font-bold shadow-lg hover:scale-110 transition-transform duration-300">
        {number}
      </div>
      <h4 className="text-lg font-semibold mb-2 text-neutral-900">{title}</h4>
      <p className="text-sm text-neutral-600 leading-relaxed">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  const services = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "HSE Consulting",
      description: "Comprehensive health, safety and environmental consulting services tailored to your organization's unique needs and industry requirements.",
      features: [
        "Risk Assessment & Management",
        "Compliance Auditing",
        "Policy Development",
        "Emergency Response Planning"
      ]
    },
    {
      icon: <Presentation className="h-6 w-6" />,
      title: "HSE Training",
      description: "Specialized training programs designed to meet international standards including NEBOSH, IOSH, and OSHA certifications.",
      features: [
        "NEBOSH Certified Courses",
        "IOSH Training Programs",
        "Custom Corporate Training",
        "Virtual Reality Safety Training"
      ]
    },
    {
      icon: <ClipboardCheck className="h-6 w-6" />,
      title: "Environmental Audit",
      description: "Thorough environmental management systems audit to ensure compliance with ISO 14001 and local regulations.",
      features: [
        "ISO 14001 Compliance",
        "Environmental Impact Assessment",
        "Sustainability Reporting",
        "Carbon Footprint Analysis"
      ]
    },
    {
      icon: <ListTodo className="h-6 w-6" />,
      title: "Project Management",
      description: "End-to-end project management services with a focus on safety, environmental compliance and quality assurance.",
      features: [
        "HSE Project Planning",
        "Quality Management Systems",
        "Stakeholder Coordination",
        "Performance Monitoring"
      ]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Assessment",
      description: "Comprehensive evaluation of your current HSE status, identifying risks and opportunities for improvement"
    },
    {
      number: "02",
      title: "Planning",
      description: "Strategic planning and customized solution development based on industry best practices"
    },
    {
      number: "03",
      title: "Implementation",
      description: "Professional execution of HSE programs using advanced technologies and proven methodologies"
    },
    {
      number: "04",
      title: "Monitoring",
      description: "Continuous monitoring and quality control to ensure compliance and effectiveness"
    },
    {
      number: "05",
      title: "Improvement",
      description: "Ongoing analysis and continuous improvement through feedback and performance optimization"
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="circle-overlay bg-primary/5 w-96 h-96 bottom-[-150px] right-[-100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-neutral-600 leading-relaxed">
              Comprehensive HSE solutions delivered by certified professionals using 
              <span className="text-primary font-semibold"> international best practices</span>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              isVisible={isVisible}
              delay={index * 200}
            />
          ))}
        </div>

        {/* Service Process Flow */}
        <div className="mt-20">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Our Process</h3>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              A proven 5-step methodology ensuring successful HSE implementation and compliance
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 relative">
            {/* Process Line (desktop) */}
            <div className="hidden md:block absolute top-8 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20 z-0"></div>

            {processSteps.map((step, index) => (
              <ProcessStep 
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                isVisible={isVisible}
                delay={600 + index * 150}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white">
            <Shield className="h-12 w-12 mx-auto mb-4" />
            <h4 className="text-2xl font-bold mb-4">Ready to Enhance Your HSE Standards?</h4>
            <p className="mb-6 opacity-90">Let our certified professionals help you achieve compliance and excellence</p>
            <button 
              onClick={() => {
                const contactSection = document.querySelector("#contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-neutral-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;