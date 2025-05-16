import React from "react";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  const services = [
    { name: "HSE Consulting", url: "#" },
    { name: "HSE Training", url: "#" },
    { name: "Environmental Audit", url: "#" },
    { name: "Project Management", url: "#" },
    { name: "Risk Assessment", url: "#" },
  ];

  const quickLinks = [
    { name: "About Us", url: "#about" },
    { name: "Vision & Mission", url: "#vision" },
    { name: "Certifications", url: "#" },
    { name: "Testimonials", url: "#" },
    { name: "Contact Us", url: "#contact" },
  ];

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, url: "#" },
    { icon: <Twitter className="h-5 w-5" />, url: "#" },
    { icon: <Facebook className="h-5 w-5" />, url: "#" },
    { icon: <Instagram className="h-5 w-5" />, url: "#" },
  ];

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <img src="src/assets/SPEC logo.png" alt="Spatial Ecosystem Limited" className="h-29" />
            </div>
            <p className="text-neutral-400 mb-6">
              A multi-national Health, Safety, Quality and Environmental management company providing sustainable solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  className="text-neutral-400 hover:text-primary transition-colors duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.url} 
                    className="text-neutral-400 hover:text-primary transition-colors duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="text-neutral-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-neutral-400 mb-6">
              Subscribe to our newsletter to get the latest updates about HSE practices and regulations.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="px-4 py-2 rounded-l-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-primary text-white flex-1"
              />
              <button 
                type="submit" 
                className="bg-primary hover:bg-primary-dark px-4 py-2 rounded-r-lg transition-colors duration-300"
              >
                →
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-neutral-800 text-center text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Spatial Ecosystem Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
