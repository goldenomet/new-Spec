import React, { useEffect, useRef, useState } from "react";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";

interface TestimonialProps {
  quote: string;
  name: string;
  position: string;
  company: string;
  rating: number;
  image: string;
  isVisible: boolean;
  delay: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, position, company, rating, image, isVisible, delay }) => {
  return (
    <div 
      className={`bg-white rounded-2xl shadow-lg p-8 relative hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-neutral-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute -top-4 left-8 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
        <Quote className="h-4 w-4 text-white" />
      </div>
      
      {/* Rating Stars */}
      <div className="flex mb-6">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
        ))}
      </div>
      
      <div className="text-neutral-700 mb-8 relative z-10 leading-relaxed text-lg">
        "{quote}"
      </div>
      
      <div className="flex items-center">
        <div 
          className="w-14 h-14 rounded-full mr-4 bg-cover bg-center border-2 border-primary/20"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div>
          <div className="font-bold text-neutral-900 text-lg">{name}</div>
          <div className="text-primary font-semibold">{position}</div>
          <div className="text-sm text-neutral-600">{company}</div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
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

  const testimonials = [
    {
      quote: "Spatial Ecosystem Limited has been instrumental in elevating our organization's health and safety standards. Their team's expertise and commitment to excellence are unmatched in the industry. The NEBOSH training they provided has significantly reduced our workplace incidents.",
      name: "John Okafor",
      position: "Operations Director",
      company: "LNG Nigeria Limited",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "The environmental audit conducted by Spatial Ecosystem was thorough and provided valuable insights that helped us improve our sustainability practices and comply with ISO 14001 regulations. Their professionalism is outstanding.",
      name: "Amina Ibrahim",
      position: "Compliance Manager",
      company: "Lotus Energy Solutions",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b830?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "We've partnered with Spatial Ecosystem for our HSE training needs for three years now. Their programs are comprehensive, engaging and have significantly reduced workplace incidents. The ROI on their training is exceptional.",
      name: "David Adeyemi",
      position: "HSE Manager",
      company: "Global Construction Ltd",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Their project management expertise in HSE implementation is remarkable. Spatial Ecosystem delivered our safety management system on time and within budget, exceeding all our expectations and compliance requirements.",
      name: "Sarah Johnson",
      position: "Project Director",
      company: "African Mining Corp",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "The virtual reality safety training program they developed for our offshore operations is revolutionary. It has transformed how we approach safety training and significantly improved our team's preparedness for emergency situations.",
      name: "Michael Chen",
      position: "Training Coordinator",
      company: "Offshore Dynamics",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Outstanding environmental consulting services. Their team helped us achieve carbon neutrality goals ahead of schedule while maintaining operational efficiency. Truly a partner in sustainable business practices.",
      name: "Dr. Fatima Al-Rashid",
      position: "Sustainability Director", 
      company: "Emirates Industrial",
      rating: 5,
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  const visibleTestimonials = testimonials.slice(currentSlide * 3, (currentSlide + 1) * 3);

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url('https://images.unsplash.com/photo-1451847251646-8a6c0dd1510c')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="circle-overlay bg-primary/10 w-72 h-72 bottom-[-100px] left-[15%]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Client <span className="text-primary">Testimonials</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-white/90 leading-relaxed">
              Hear from industry leaders who trust us with their 
              <span className="text-primary font-semibold"> HSE excellence</span>
            </p>
          </div>
        </div>
        
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <Testimonial 
                key={currentSlide * 3 + index}
                quote={testimonial.quote}
                name={testimonial.name}
                position={testimonial.position}
                company={testimonial.company}
                rating={testimonial.rating}
                image={testimonial.image}
                isVisible={isVisible}
                delay={index * 200}
              />
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-12 space-x-4">
            <button 
              onClick={prevSlide}
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white p-3 rounded-full hover:bg-primary transition-all duration-300 hover:scale-110"
              disabled={testimonials.length <= 3}
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
                <div 
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-primary' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white p-3 rounded-full hover:bg-primary transition-all duration-300 hover:scale-110"
              disabled={testimonials.length <= 3}
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="text-center text-white">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-white/80">Happy Clients</div>
          </div>
          <div className="text-center text-white">
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-white/80">Average Rating</div>
          </div>
          <div className="text-center text-white">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-white/80">Countries</div>
          </div>
          <div className="text-center text-white">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-white/80">Retention Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;