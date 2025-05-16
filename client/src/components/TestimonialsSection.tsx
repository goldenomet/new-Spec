import React from "react";

interface TestimonialProps {
  quote: string;
  name: string;
  position: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, position }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 relative">
      <div className="absolute -top-4 left-8 text-6xl text-primary opacity-20">"</div>
      <div className="text-neutral-700 mb-6 relative z-10">
        {quote}
      </div>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-neutral-200 mr-4"></div>
        <div>
          <div className="font-semibold text-neutral-900">{name}</div>
          <div className="text-sm text-neutral-600">{position}</div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Spatial Ecosystem Limited has been instrumental in elevating our organization's health and safety standards. Their team's expertise and commitment to excellence are unmatched in the industry.",
      name: "John Okafor",
      position: "Operations Director, LNG Nigeria"
    },
    {
      quote: "The environmental audit conducted by Spatial Ecosystem was thorough and provided valuable insights that helped us improve our sustainability practices and comply with regulations.",
      name: "Amina Ibrahim",
      position: "Compliance Manager, Lotus Energy"
    },
    {
      quote: "We've partnered with Spatial Ecosystem for our HSE training needs for three years now. Their programs are comprehensive, engaging and have significantly reduced workplace incidents.",
      name: "David Adeyemi",
      position: "HSE Manager, Global Construction"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-100 relative overflow-hidden">
      <div className="circle-overlay bg-primary bg-opacity-10 w-72 h-72 bottom-[-100px] left-[15%]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-neutral-700">What our clients say about our services</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              position={testimonial.position}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
