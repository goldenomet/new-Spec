import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Linkedin,
  Twitter,
  Facebook,
  Instagram
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
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Message sent successfully!",
        description: "We will get back to you as soon as possible.",
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
      icon: <MapPin className="h-5 w-5" />,
      title: "Our Office",
      details: [
        "7 Ademola Adetokunbo Street",
        "Victoria Island, Lagos",
        "Nigeria"
      ]
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      details: [
        "+234 (0) 800 123 4567",
        "+234 (0) 801 234 5678"
      ]
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      details: [
        "info@spatialecosystem.com",
        "support@spatialecosystem.com"
      ]
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Working Hours",
      details: [
        "Monday - Friday: 8:00 AM - 5:00 PM",
        "Weekend: Closed"
      ]
    }
  ];

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, url: "#" },
    { icon: <Twitter className="h-5 w-5" />, url: "#" },
    { icon: <Facebook className="h-5 w-5" />, url: "#" },
    { icon: <Instagram className="h-5 w-5" />, url: "#" }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-neutral-100 relative overflow-hidden">
      <div className="circle-overlay bg-primary bg-opacity-10 w-96 h-96 top-[-150px] right-[-50px]"></div>
      <div className="circle-overlay bg-secondary bg-opacity-10 w-72 h-72 bottom-[-100px] left-[-30px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-neutral-700">Have questions or ready to start your HSE journey? Contact us today!</p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-semibold text-neutral-900 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-4 text-primary">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">{info.title}</h4>
                    <p className="text-neutral-700">
                      {info.details.map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i < info.details.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-neutral-200">
              <h4 className="font-semibold text-neutral-900 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url} 
                    className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3 bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-semibold text-neutral-900 mb-6">Send us a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your Name" 
                            {...field} 
                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-20 outline-none transition-all duration-300"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your Email" 
                            type="email" 
                            {...field} 
                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-20 outline-none transition-all duration-300"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your Phone Number" 
                          type="tel" 
                          {...field} 
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-20 outline-none transition-all duration-300"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Message Subject" 
                          {...field} 
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-20 outline-none transition-all duration-300"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your Message" 
                          rows={5} 
                          {...field} 
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-20 outline-none transition-all duration-300"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
