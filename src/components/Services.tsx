
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Code2, Globe, Paintbrush, Video, BarChart3, Database, 
  Webhook, ArrowRight, Laptop, Smartphone, PanelRight, ServerCog
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-8 rounded-xl hover:shadow-lg hover:shadow-blion-purple/10 transition-all duration-300 relative overflow-hidden group"
    >
      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blion-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="h-14 w-14 flex items-center justify-center rounded-lg bg-blion-purple/20 text-blion-purple mb-6 relative z-10">
        {icon}
      </div>
      <h3 className="text-xl font-bold font-bricolage mb-3 relative z-10">{title}</h3>
      <p className="text-gray-400 mb-6 relative z-10">{description}</p>
      <Button 
        asChild 
        variant="default" 
        className="bg-blion-purple hover:bg-blion-purple-dark text-white group relative z-10"
      >
        <Link to="/book">
          Start a Project
          <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Globe size={28} />,
      title: "Web Development",
      description:
        "Custom websites built with modern technologies for optimal performance and user experience.",
    },
    {
      icon: <Database size={28} />,
      title: "API Creation",
      description:
        "Robust and scalable API solutions tailored to your business requirements and data needs.",
    },
    {
      icon: <Webhook size={28} />,
      title: "API Integration",
      description:
        "Seamless integration of third-party APIs to enhance your application's functionality.",
    },
    {
      icon: <Paintbrush size={28} />,
      title: "UI/UX Design",
      description:
        "Intuitive and visually stunning interfaces designed to engage users and elevate your brand.",
    },
    {
      icon: <Video size={28} />,
      title: "Video Editing",
      description:
        "Professional video editing services to create compelling visual content for your platform.",
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Social Media Marketing",
      description:
        "Strategic social media campaigns to increase visibility and drive engagement with your target audience.",
    },
    {
      icon: <Code2 size={28} />,
      title: "Property Management Websites",
      description:
        "Specialized solutions for property management companies, featuring listing management, tenant portals, and maintenance requests.",
    },
    {
      icon: <Laptop size={28} />,
      title: "Web-Based Software",
      description:
        "Custom web applications and software solutions that streamline operations and boost productivity for your business.",
    },
    {
      icon: <Smartphone size={28} />,
      title: "Custom Hybrid Applications",
      description:
        "Cross-platform mobile applications that work seamlessly across different devices while maintaining native-like performance.",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section id="services" className="section-padding relative" ref={ref}>
      {/* Floating service icons */}
      <motion.div 
        className="absolute top-20 left-10 text-blion-purple/40"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      >
        <Laptop size={40} />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-40 right-10 text-blion-purple/30"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, -8, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", delay: 1 }}
      >
        <ServerCog size={50} />
      </motion.div>
      
      <motion.div 
        className="absolute top-1/2 right-20 text-blion-purple/20"
        animate={{ 
          y: [0, 10, 0],
          x: [0, -10, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", delay: 2 }}
      >
        <PanelRight size={35} />
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-bricolage mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the online world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
