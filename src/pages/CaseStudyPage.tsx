
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CaseStudyPage = () => {
  const caseStudies = [
    {
      title: "Skyline Properties Portal",
      subtitle: "Property Management Platform",
      description: "A comprehensive property management solution that transformed how Skyline Properties handles their portfolio.",
      impact: [
        "50% reduction in maintenance request processing time",
        "200% increase in tenant satisfaction scores",
        "30% decrease in administrative overhead",
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      duration: "4 months",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80",
      link: "#",
    },
    {
      title: "TechFront Website Redesign",
      subtitle: "Tech Startup Website",
      description: "Complete redesign and development of TechFront's digital presence, focusing on user experience and conversion optimization.",
      impact: [
        "65% increase in conversion rate",
        "40% improvement in page load time",
        "85% increase in mobile engagement",
      ],
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
      duration: "3 months",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
      link: "#",
    },
  ];

  return (
    <div className="bg-zinc-900 min-h-screen">
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
              Our <span className="text-gradient">Case Studies</span>
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Dive deep into our most impactful projects and discover how we've helped businesses achieve their digital goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden bg-zinc-800/50 border-zinc-700">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="aspect-video md:aspect-auto relative overflow-hidden">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                    </div>
                    
                    <div className="p-8">
                      <CardHeader className="p-0 mb-6">
                        <div className="text-sm text-blion-purple mb-2">{study.subtitle}</div>
                        <CardTitle className="text-2xl mb-2">{study.title}</CardTitle>
                        <CardDescription className="text-gray-400">
                          {study.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="p-0">
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold mb-2">Project Impact</h4>
                          <ul className="space-y-2">
                            {study.impact.map((item, i) => (
                              <li key={i} className="flex items-start text-sm text-gray-300">
                                <ArrowRight size={16} className="text-blion-purple mt-1 mr-2 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {study.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs rounded-full bg-blion-purple/20 text-blion-purple"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-400">Duration: {study.duration}</span>
                          <a
                            href={study.link}
                            className="inline-flex items-center text-blion-purple hover:text-blion-purple-light transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Live <ExternalLink size={14} className="ml-1" />
                          </a>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-16"
          >
            <Link
              to="/book"
              className="inline-flex items-center px-6 py-3 bg-blion-purple hover:bg-blion-purple-dark text-white rounded-lg transition-all hover:scale-105 transform duration-200 group"
            >
              Start Your Project
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default CaseStudyPage;
