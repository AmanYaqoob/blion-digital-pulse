
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Globe, Paintbrush, Video, BarChart3, Database, Webhook, Building } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceDetailProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceDetail = ({ icon, title, description, features }: ServiceDetailProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card p-8 rounded-xl"
    >
      <div className="flex items-center mb-6">
        <div className="h-16 w-16 flex items-center justify-center rounded-lg bg-blion-purple/20 text-blion-purple mr-4">
          {icon}
        </div>
        <h3 className="text-2xl font-bold font-bricolage">{title}</h3>
      </div>
      
      <p className="text-gray-300 mb-6">{description}</p>
      
      <h4 className="text-lg font-semibold mb-4 font-bricolage">What we offer:</h4>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <ArrowRight size={16} className="text-blion-purple mt-1 mr-2 flex-shrink-0" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link
        to="/book"
        className="inline-block mt-4 px-6 py-3 bg-blion-purple hover:bg-blion-purple-dark text-white rounded-lg transition-colors"
      >
        Get Started
      </Link>
    </motion.div>
  );
};

const ServicesPage = () => {
  const services = [
    {
      icon: <Globe size={28} />,
      title: "Web Development",
      description:
        "We create responsive, high-performance websites tailored to your business needs, focusing on user experience and conversion optimization.",
      features: [
        "Custom website design and development",
        "E-commerce solutions",
        "Progressive Web Applications (PWAs)",
        "Content Management Systems (CMS)",
        "Website maintenance and support",
      ],
    },
    {
      icon: <Database size={28} />,
      title: "API Creation",
      description:
        "Our expert team designs and develops robust APIs that enable seamless integration between different software systems and services.",
      features: [
        "RESTful API development",
        "GraphQL API implementation",
        "API documentation",
        "Secure authentication and authorization",
        "Performance optimization and scaling",
      ],
    },
    {
      icon: <Webhook size={28} />,
      title: "API Integration",
      description:
        "We help businesses connect with third-party services through efficient API integrations, enhancing functionality and automating processes.",
      features: [
        "Third-party API integration",
        "Payment gateway integration",
        "Social media API integration",
        "Cloud service integrations",
        "Custom webhook implementation",
      ],
    },
    {
      icon: <Paintbrush size={28} />,
      title: "UI/UX Design",
      description:
        "Our design team creates intuitive, engaging user interfaces that enhance user experience and align with your brand identity.",
      features: [
        "User research and personas",
        "Wireframing and prototyping",
        "Interactive design mockups",
        "User testing and feedback implementation",
        "Design system creation",
      ],
    },
    {
      icon: <Video size={28} />,
      title: "Video Editing",
      description:
        "We provide professional video editing services to enhance your visual content for marketing, training, or promotional purposes.",
      features: [
        "Commercial and promotional videos",
        "Social media video content",
        "Motion graphics and animations",
        "Video post-production",
        "Video optimization for different platforms",
      ],
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Social Media Marketing",
      description:
        "Our strategic social media marketing services help you connect with your audience, build brand awareness, and drive engagement.",
      features: [
        "Social media strategy development",
        "Content creation and curation",
        "Campaign management and execution",
        "Analytics and performance reporting",
        "Community management",
      ],
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-40 pb-20 px-6 md:px-12 lg:px-20"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-bricolage mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We offer a comprehensive range of digital services to help your business thrive online. 
              From web development to marketing, we've got you covered.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <ServiceDetail
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-8 rounded-xl"
          >
            <div className="flex items-center mb-6">
              <div className="h-16 w-16 flex items-center justify-center rounded-lg bg-blion-purple/20 text-blion-purple mr-4">
                <Building size={28} />
              </div>
              <h3 className="text-2xl font-bold font-bricolage">Property Management Websites</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-300 mb-6">
                  We specialize in creating comprehensive property management solutions that streamline operations, enhance tenant experiences, and optimize property portfolios.
                </p>
                
                <h4 className="text-lg font-semibold mb-4 font-bricolage">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-blion-purple mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">Tenant portals with maintenance request management</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-blion-purple mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">Online rent payment processing</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-blion-purple mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">Property listing management with virtual tours</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-blion-purple mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">Automated leasing and document management</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-blion-purple mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">Financial reporting and analytics dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-blion-purple mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">Integrated tenant screening and application process</span>
                  </li>
                </ul>
                
                <Link
                  to="/book"
                  className="inline-block mt-4 px-6 py-3 bg-blion-purple hover:bg-blion-purple-dark text-white rounded-lg transition-colors"
                >
                  Learn More
                </Link>
              </div>
              
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80"
                  alt="Property Management Software"
                  className="rounded-xl h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-lg font-bold font-bricolage text-white">Streamline Your Property Management</div>
                  <p className="text-sm text-gray-300 mt-2">
                    Our solutions help property managers reduce workload and increase efficiency.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
