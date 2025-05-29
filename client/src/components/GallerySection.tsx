import React, { useEffect, useRef, useState } from "react";
import { Play, Users, Award, Camera, ExternalLink } from "lucide-react";

interface GalleryItemProps {
  src: string;
  alt: string;
  title: string;
  category: string;
  isVisible: boolean;
  delay: number;
  onClick: () => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ src, alt, title, category, isVisible, delay, onClick }) => {
  return (
    <div 
      className={`relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
      style={{ transitionDelay: `${delay}ms` }}
      onClick={onClick}
    >
      <img 
        src={src}
        alt={alt}
        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <div className="mb-2">
            <span className="inline-block px-3 py-1 bg-primary rounded-full text-xs font-semibold">
              {category}
            </span>
          </div>
          <h4 className="text-lg font-bold mb-2">{title}</h4>
          <div className="flex items-center text-sm opacity-90">
            <ExternalLink className="h-4 w-4 mr-1" />
            View Details
          </div>
        </div>
      </div>

      {/* Play Button for Videos */}
      {category.toLowerCase().includes('training') && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Play className="h-8 w-8 text-white ml-1" />
          </div>
        </div>
      )}
    </div>
  );
};

const GallerySection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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

  const images = [
    {
      src: "https://images.unsplash.com/photo-1659353588972-f3be41ae0834",
      alt: "HSE Safety Training Session",
      title: "NEBOSH Training Program",
      category: "Training"
    },
    {
      src: "https://images.unsplash.com/photo-1582489851864-4b4bddaf6a1b",
      alt: "Industrial Safety Inspection",
      title: "On-Site Safety Inspection",
      category: "Consulting"
    },
    {
      src: "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e",
      alt: "Construction Site Safety Management",
      title: "Construction HSE Management",
      category: "Project Management"
    },
    {
      src: "https://images.pexels.com/photos/603764/pexels-photo-603764.jpeg",
      alt: "Environmental Assessment",
      title: "Environmental Impact Assessment",
      category: "Environmental"
    },
    {
      src: "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51",
      alt: "HSE Consultation Meeting",
      title: "Strategic HSE Planning",
      category: "Consulting"
    },
    {
      src: "https://images.unsplash.com/photo-1516216628859-9bccecab13ca",
      alt: "Emergency Response Training",
      title: "Emergency Response Drill",
      category: "Training"
    },
    {
      src: "https://images.unsplash.com/photo-1581093196277-9f597a237631",
      alt: "Environmental Audit Process",
      title: "ISO 14001 Audit",
      category: "Environmental"
    },
    {
      src: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c",
      alt: "Safety Equipment Training",
      title: "PPE Training Workshop",
      category: "Training"
    }
  ];

  const categories = ['All', 'Training', 'Consulting', 'Environmental', 'Project Management'];

  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(image => image.category === selectedCategory);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="circle-overlay bg-primary/5 w-80 h-80 top-[-100px] right-[10%]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">
              Our <span className="text-primary">Gallery</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-neutral-600 leading-relaxed">
              Glimpses of our professional training sessions, consultations, and 
              <span className="text-primary font-semibold"> HSE implementations</span> across various industries
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <GalleryItem
              key={`${selectedCategory}-${index}`}
              src={image.src}
              alt={image.alt}
              title={image.title}
              category={image.category}
              isVisible={isVisible}
              delay={400 + index * 100}
              onClick={() => handleImageClick(image.src)}
            />
          ))}
        </div>

        {/* Statistics Row */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="text-center p-6 bg-neutral-50 rounded-xl">
            <Users className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-neutral-900 mb-1">5000+</div>
            <div className="text-neutral-600">Trainees Certified</div>
          </div>
          <div className="text-center p-6 bg-neutral-50 rounded-xl">
            <Award className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-neutral-900 mb-1">200+</div>
            <div className="text-neutral-600">Training Programs</div>
          </div>
          <div className="text-center p-6 bg-neutral-50 rounded-xl">
            <Camera className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-neutral-900 mb-1">50+</div>
            <div className="text-neutral-600">Site Inspections</div>
          </div>
          <div className="text-center p-6 bg-neutral-50 rounded-xl">
            <Play className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-neutral-900 mb-1">100+</div>
            <div className="text-neutral-600">Training Videos</div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img 
              src={selectedImage}
              alt="Gallery image"
              className="w-full h-full object-contain rounded-lg"
            />
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;