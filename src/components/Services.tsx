
import React from "react";
import {
  Globe,
  Palette,
  Camera,
  Share2,
  Code,
  Building,
  FileCode,
  LayoutGrid,
  Laptop,
  Layers,
  Database,
} from "lucide-react";

// Choose appropriate icons from the allowed Lucide set for new services
const customIcons = {
  "Web Development": <Globe size={36} className="text-blion-purple" />,
  "UI/UX Design": <Palette size={36} className="text-blion-purple" />,
  "Video Editing": <Camera size={36} className="text-blion-purple" />,
  "Social Media Marketing": <Share2 size={36} className="text-blion-purple" />,
  "Web Scraping": <Code size={36} className="text-blion-purple" />,
  "Property Management Websites": <Building size={36} className="text-blion-purple" />,
  "Scripting & Automation": <FileCode size={36} className="text-blion-purple" />,
  "API Creation": <Database size={36} className="text-blion-purple" />,
  "API Integration": <Layers size={36} className="text-blion-purple" />,
  "Web-Based Software": <Laptop size={36} className="text-blion-purple" />,
  "Custom Hybrid Applications": <LayoutGrid size={36} className="text-blion-purple" />,
};

const services = [
  {
    name: "Web Development",
    description:
      "Build high-performance, responsive, and modern websites tailored for your business, focusing on user experience and growth.",
  },
  {
    name: "UI/UX Design",
    description:
      "Intuitive, engaging, and visually stunning interface and experience design to encourage conversions and delight your audience.",
  },
  {
    name: "Video Editing",
    description:
      "Professional video editing for commercials, content marketing, social media and more—including motion graphics and animations.",
  },
  {
    name: "Social Media Marketing",
    description:
      "Boost your online reach with strategic social campaigns, content creation, management, and analytics across all major platforms.",
  },
  {
    name: "Web Scraping",
    description:
      "Automate information gathering and gain insights with custom scraping and data collection tools for your business.",
  },
  {
    name: "Property Management Websites",
    description:
      "Specialized solutions for property managers: Listing management, tenant portals, maintenance requests, rent processing, and analytics.",
    highlight: true,
  },
  {
    name: "Scripting & Automation",
    description:
      "Save time and reduce manual processes with custom scripts and automation solutions tailored around your workflow.",
  },
  {
    name: "API Creation",
    description:
      "Design and develop scalable, robust RESTful and GraphQL APIs for your business platforms and products.",
  },
  {
    name: "API Integration",
    description:
      "Seamlessly integrate third-party APIs to expand your app’s functionality and connect your services together.",
  },
  {
    name: "Web-Based Software",
    description:
      "Custom web applications and software built to solve your unique business challenges, accessible from anywhere.",
  },
  {
    name: "Custom Hybrid Applications",
    description:
      "Hybrid mobile/web applications with shared codebases—efficient, modern, and compatible across devices.",
  },
];

const Services = () => (
  <section id="services" className="section-padding bg-blion-dark/95">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-bricolage mb-4">
          Our Services
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We offer comprehensive digital solutions to help your business thrive online.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.name}
            className={
              "glass-card p-8 rounded-xl border transition-all group" +
              (service.highlight
                ? " border-blion-purple bg-blion-purple/10 shadow-lg scale-105"
                : " border-white/10 hover:border-blion-purple/60 hover:bg-blion-purple/5")
            }
          >
            <div className="flex items-center mb-6">
              <div className="h-14 w-14 flex items-center justify-center rounded-lg bg-blion-purple/20 text-blion-purple mr-4">
                {customIcons[service.name]}
              </div>
              <h3 className="text-xl font-bold font-bricolage">
                {service.name}
                {service.highlight && (
                  <span className="ml-2 px-2 py-1 bg-blion-purple text-white text-xs rounded-full font-medium uppercase tracking-wide">Specialized</span>
                )}
              </h3>
            </div>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;

