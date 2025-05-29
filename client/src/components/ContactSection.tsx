import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Send,
  CheckCircle
} from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(5, { message: "Please enter a valid phone number" }),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message sent successfully!",
        description: "We will get back to you within 24 hours.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
      console.error("Error submitting contact form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Our Headquarters",
      details: [
        "7 Ademola Adetokunbo Street",
        "Victoria Island, Lagos",
        "Nigeria 101241"
      ],
      link: "https://maps.google.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Numbers",
      details: [
        "+234 (0) 800 123 4567",
        "+234 (0) 801 234 5678",
        "Emergency: +234 (0) 809 876 5432"
      ],
      link: "tel:+2348001234567"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Addresses",
      details: [
        "info@spatialecosystem.com",
        "support@spatialecosystem.com",
        "emergency@spatialecosystem.com"
      ],
      link: "mailto:info@spatialecosystem.com"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Emergency Only"
      ],
      link: null
    }
  ];

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, url: "#", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, url: "#", label: "Twitter" },
    { icon: <Facebook className="h-5 w-5" />, url: "#", label: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, url: "#", label: "Instagram" }
  ];

  const whyChooseUs = [
    "24/7 Emergency Response",
    "NEBOSH & IOSH Certified",
    "Multi-Industry Experience",
    "International Standards"
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.85)), url('https://images.unsplash.com/photo-1513530534585-c7b1394c6d51')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="circle-overlay bg-primary/10 w-96 h-96 top-[-150px] right-[-50px]"></div>
      <div className="circle-overlay bg-secondary/10 w-72 h-72 bottom-[-100px] left-[-30px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-white/90 leading-relaxed">
              Ready to elevate your HSE standards? Contact our certified professionals for a 
              <span className="text-primary font-semibold"> free consultation</span>
            </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="w-14 h-14 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center mr-6 text-primary border border-primary/30 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2 text-lg">{info.title}</h4>
                      <div className="text-white/80 leading-relaxed">
                        {info.details.map((line, i) => (
                          <div key={i} className="mb-1">
                            {info.link && i === 0 ? (
                              <a href={info.link} className="hover:text-primary transition-colors">
                                {line}
                              </a>
                            ) : (
                              line
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Why Choose Us */}
              <div className="mt-10 pt-8 border-t border-white/20">
                <h4 className="font-bold text-white mb-6 text-lg">Why Choose Us?</h4>
                <div className="grid grid-cols-2 gap-4">
                  {whyChooseUs.map((reason, index) => (
                    <div key={index} className="flex items-center text-white/80">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span className="text-sm">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <h4 className="font-bold text-white mb-4 text-lg">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url}
                      aria-label={link.label}
                      className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all duration-300 border border-white/20"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className={`lg:col-span-3 transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-8">Send us a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your Name" 
                              {...field} 
                              className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:border-primary focus:ring-primary/20"
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your Email" 
                              type="email" 
                              {...field} 
                              className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:border-primary focus:ring-primary/20"
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Phone Number</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your Phone Number" 
                            type="tel" 
                            {...field} 
                            className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:border-primary focus:ring-primary/20"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="How can we help you?" 
                            {...field} 
                            className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:border-primary focus:ring-primary/20"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your HSE requirements..." 
                            rows={6} 
                            {...field} 
                            className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:border-primary focus:ring-primary/20 resize-none"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-3" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>

        {/* Quick Contact CTA */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold mb-4">Need Immediate HSE Support?</h4>
            <p className="mb-6 opacity-90 text-lg">
              Our emergency response team is available 24/7 for critical safety situations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+2348098765432"
                className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-neutral-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Emergency Hotline
              </a>
              <a 
                href="mailto:emergency@spatialecosystem.com"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Emergency Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;