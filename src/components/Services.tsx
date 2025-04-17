
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Globe, Paintbrush, Video, BarChart3, Database, Webhook, ArrowRight } from "lucide-react";
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
      className="glass-card p-8 rounded-xl hover:shadow-lg hover:shadow-blion-purple/10 transition-all duration-300"
    >
      <div className="h-14 w-14 flex items-center justify-center rounded-lg bg-blion-purple/20 text-blion-purple mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold font-bricolage mb-3">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <Link
        to="/book"
        className="inline-flex items-center text-blion-purple hover:text-blion-purple-light transition-colors group"
      >
        Start a Project
        <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
      </Link>
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
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section id="services" className="section-padding" ref={ref}>
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
