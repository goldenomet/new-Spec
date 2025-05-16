import React from "react";
import { 
  Briefcase, 
  Presentation, 
  ClipboardCheck, 
  ListTodo 
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 card-hover border-t-4 border-primary">
      <div className="w-16 h-16 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mb-6 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-neutral-900">{title}</h3>
      <p className="text-neutral-700 mb-4">{description}</p>
      <a href="#" className="text-primary font-semibold hover:text-primary-dark transition-colors duration-300 inline-flex items-center">
        Learn More <span className="ml-2">→</span>
      </a>
    </div>
  );
};

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) => {
  return (
    <div className="relative z-10 flex flex-col items-center text-center">
      <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center mb-4 text-xl font-bold">
        {number}
      </div>
      <h4 className="text-lg font-semibold mb-2 text-neutral-900">{title}</h4>
      <p className="text-sm text-neutral-700">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "HSE Consulting",
      description: "Comprehensive health, safety and environmental consulting services for organizations of all sizes."
    },
    {
      icon: <Presentation className="h-6 w-6" />,
      title: "HSE Training",
      description: "Specialized training programs designed to meet international standards and local regulations."
    },
    {
      icon: <ClipboardCheck className="h-6 w-6" />,
      title: "Environmental Audit",
      description: "Thorough environmental management systems audit to ensure compliance and efficiency."
    },
    {
      icon: <ListTodo className="h-6 w-6" />,
      title: "Project Management",
      description: "End-to-end project management services with a focus on safety and environmental compliance."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Assessment",
      description: "Initial evaluation of client needs and requirements"
    },
    {
      number: "02",
      title: "Planning",
      description: "Strategic planning and solution development"
    },
    {
      number: "03",
      title: "Implementation",
      description: "Executing plans using best practices"
    },
    {
      number: "04",
      title: "Monitoring",
      description: "Continuous assessment and quality control"
    },
    {
      number: "05",
      title: "Improvement",
      description: "Feedback analysis and continuous improvement"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="circle-overlay bg-primary bg-opacity-10 w-96 h-96 bottom-[-150px] right-[-100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-neutral-700">Comprehensive HSE solutions tailored to your organization's needs</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-lg hover-lift"
              >
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
            </div>
          ))}
        </div>

        {/* Service Process Flow */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-12 text-neutral-900">Our Process</h3>

          <div className="grid md:grid-cols-5 gap-4 relative">
            {/* Process Line (desktop) */}
            <div className="hidden md:block absolute top-1/4 left-0 w-full h-1 bg-primary bg-opacity-20 z-0"></div>

            {processSteps.map((step, index) => (
              <ProcessStep 
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;