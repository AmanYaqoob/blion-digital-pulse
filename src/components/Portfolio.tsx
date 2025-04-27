
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PortfolioItemProps {
  title: string;
  category: string;
  image: string;
  index: number;
  link: string;
}

const PortfolioItem = ({ title, category, image, index, link }: PortfolioItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Link to={link} className="block">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative overflow-hidden rounded-xl"
      >
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <span className="inline-block rounded-full bg-blion-purple/20 px-3 py-1 text-xs text-blion-purple mb-2">
            {category}
          </span>
          <h3 className="text-xl font-bold font-bricolage text-white">{title}</h3>
        </div>
        <div className="absolute right-6 bottom-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-blion-dark transition-transform duration-300 group-hover:rotate-12">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Skyline Properties Portal",
      category: "Property Management",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80",
      link: "/case-studies",
    },
    {
      title: "TechFront Website",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
      link: "/case-studies",
    },
    {
      title: "EcoTrack Mobile App",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
      link: "/case-studies",
    },
    {
      title: "Vertex Analytics Dashboard",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      link: "/case-studies",
    },
    {
      title: "Bloom Marketing Campaign",
      category: "Social Media",
      image: "https://images.unsplash.com/photo-1493119508027-2b584f234d6c?auto=format&fit=crop&q=80",
      link: "/case-studies",
    },
    {
      title: "MetaHomes Property Platform",
      category: "Property Management",
      image: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&q=80",
      link: "/case-studies",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section id="portfolio" className="section-padding">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-bricolage mb-4">Our Portfolio</h2>
            <p className="text-gray-400 max-w-2xl">
              Explore our recent projects and see how we've helped businesses transform their digital presence.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="mt-6 md:mt-0 inline-flex items-center text-blion-purple hover:text-blion-purple-light transition-colors"
          >
            View All Projects <ArrowUpRight size={18} className="ml-1" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioItem
              key={index}
              title={item.title}
              category={item.category}
              image={item.image}
              index={index}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
