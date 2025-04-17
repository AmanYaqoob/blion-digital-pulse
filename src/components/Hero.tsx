
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex items-center px-6 py-32 md:px-12 lg:px-20">
      {/* Background gradient circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blion-purple/20 rounded-full filter blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blion-purple/10 rounded-full filter blur-[60px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="lg:order-1 order-2">
            <motion.h1
              variants={item}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-bricolage leading-tight"
            >
              Elevate Your <span className="text-gradient">Digital Presence</span> With Premium Solutions
            </motion.h1>
            <motion.p
              variants={item}
              className="mt-6 text-xl text-gray-300 max-w-xl"
            >
              Transforming ideas into exceptional digital experiences through innovative design and development.
            </motion.p>
            <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/book"
                className="px-8 py-3 rounded-full bg-blion-purple text-white font-medium hover:bg-blion-purple-dark transition-colors flex items-center gap-2 group"
              >
                Book a Consultation
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/portfolio"
                className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/5 transition-colors"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            variants={item} 
            className="lg:order-2 order-1 relative"
          >
            <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blion-purple-dark/80 to-transparent mix-blend-overlay rounded-2xl" />
              <motion.img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                alt="Digital workspace"
                className="w-full h-full object-cover rounded-2xl"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
              <motion.div 
                className="absolute -bottom-8 -right-8 glass-card p-6 rounded-xl max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="text-sm font-medium text-blion-purple">Our Expertise</div>
                <h3 className="text-lg font-bold mt-2 font-bricolage">Premium Digital Solutions</h3>
                <p className="text-sm text-gray-300 mt-2">Specializing in property management websites and custom digital experiences</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
