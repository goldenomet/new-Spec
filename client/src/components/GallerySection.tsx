import React from "react";

const GallerySection: React.FC = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
      alt: "Safety training session"
    },
    {
      src: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
      alt: "HSE professionals in meeting"
    },
    {
      src: "src/assets/training.jpg",
      alt: "Environmental assessment at industrial site"
    },
    {
      src: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
      alt: "Consultants analyzing environmental data"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Training Gallery</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-neutral-700">Glimpses of our professional training sessions and workshops</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <img 
              key={index}
              src={image.src}
              alt={image.alt}
              className="rounded-lg shadow-md object-cover w-full h-64 hover:opacity-90 transition-opacity duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
