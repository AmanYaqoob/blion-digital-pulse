
import React, { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
  featured?: boolean;
}

const PortfolioPage = () => {
  const projects: Project[] = [
    {
      title: "Skyline Properties Portal",
      description: "A comprehensive property management platform with tenant portals, maintenance requests, and payment processing.",
      category: "Property Management",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80",
      link: "#",
      featured: true,
    },
    {
      title: "TechFront Website",
      description: "Modern website for a tech startup featuring interactive elements and seamless user experience.",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
      link: "#",
    },
    {
      title: "EcoTrack Mobile App",
      description: "UI/UX design for an eco-friendly tracking application that helps users reduce their carbon footprint.",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
      link: "#",
      featured: true,
    },
    {
      title: "Vertex Analytics Dashboard",
      description: "Data visualization dashboard for tracking business metrics and performance indicators.",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      link: "#",
    },
    {
      title: "Bloom Marketing Campaign",
      description: "Comprehensive social media marketing strategy that increased engagement by 200%.",
      category: "Social Media",
      image: "https://images.unsplash.com/photo-1493119508027-2b584f234d6c?auto=format&fit=crop&q=80",
      link: "#",
    },
    {
      title: "MetaHomes Property Platform",
      description: "Real estate platform with virtual tours and advanced property search functionality.",
      category: "Property Management",
      image: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&q=80",
      link: "#",
      featured: true,
    },
    {
      title: "Fusion Restaurant Website",
      description: "Website with online ordering system and reservation management for a high-end restaurant.",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
      link: "#",
    },
    {
      title: "Elevate Fitness App",
      description: "Fitness application with workout tracking, nutrition planning, and progress visualization.",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80",
      link: "#",
    },
    {
      title: "GreenSpace Landscaping",
      description: "Branding and website design for a premium landscaping company.",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80",
      link: "#",
    },
  ];

  const [filter, setFilter] = useState<string>("All");
  const categories = ["All", "Web Development", "UI/UX Design", "Property Management", "Social Media"];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

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
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-bricolage mb-6">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Explore our recent projects and see how we've helped businesses transform their digital presence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2 rounded-full transition-all ${
                  filter === category
                    ? "bg-blion-purple text-white"
                    : "bg-white/5 text-gray-300 hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={ref}>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`group relative overflow-hidden rounded-xl ${
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className={`${project.featured ? "aspect-video" : "aspect-square"} overflow-hidden`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="inline-block rounded-full bg-blion-purple/20 px-3 py-1 text-xs text-blion-purple mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold font-bricolage text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm line-clamp-2">{project.description}</p>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-blion-purple mt-4 hover:text-blion-purple-light transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
                <div className="absolute right-6 top-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-blion-dark transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:rotate-12">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default PortfolioPage;
