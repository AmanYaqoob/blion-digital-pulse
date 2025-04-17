
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Code, Paintbrush, Globe, Video, MousePointer, Sparkles } from "lucide-react";
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

  // Mouse follower functionality
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const heroRef = useRef<HTMLElement>(null);
  
  // Movement factors for each floating icon (different speeds/directions)
  const moveFactors = [
    { x: 0.02, y: 0.01 },
    { x: -0.015, y: 0.025 },
    { x: 0.03, y: -0.02 },
    { x: -0.025, y: -0.015 },
    { x: 0.01, y: 0.03 }
  ];
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        // Calculate mouse position relative to the hero section
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Create floating icon components with different animations
  const FloatingIcon = ({ icon: Icon, delay, index }: { icon: any, delay: number, index: number }) => {
    const x = useTransform(mouseX, [0, 1000], [0, 40 * moveFactors[index % moveFactors.length].x]);
    const y = useTransform(mouseY, [0, 1000], [0, 40 * moveFactors[index % moveFactors.length].y]);
    
    return (
      <motion.div
        className="absolute text-blion-purple/40 hover:text-blion-purple transition-colors"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 0.5 }}
        style={{ x, y }}
        whileHover={{ scale: 1.2, rotate: 5 }}
      >
        <Icon size={30} />
      </motion.div>
    );
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center px-6 py-32 md:px-12 lg:px-20 bg-zinc-900/80 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-pixels-in-a-purple-corridor-42634-large.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Background gradient circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blion-purple/20 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blion-purple/10 rounded-full filter blur-[80px]" />
        <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-blion-purple/15 rounded-full filter blur-[70px]" />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingIcon icon={Code} delay={0.5} index={0} />
        <FloatingIcon icon={Paintbrush} delay={0.7} index={1} />
        <FloatingIcon icon={Globe} delay={0.9} index={2} />
        <FloatingIcon icon={Video} delay={1.1} index={3} />
        <FloatingIcon icon={Sparkles} delay={1.3} index={4} />
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
                className="px-8 py-3 rounded-full bg-blion-purple text-white font-medium hover:bg-blion-purple-dark transition-colors flex items-center gap-2 group hover:scale-105 transform duration-200"
              >
                Book a Consultation
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/portfolio"
                className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors hover:border-white/40 hover:scale-105 transform duration-200"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            variants={item} 
            className="lg:order-2 order-1 relative"
          >
            <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-blion-purple-dark/80 to-transparent mix-blend-overlay rounded-2xl z-10 group-hover:opacity-70 transition-opacity duration-300"></div>
              
              <motion.img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"
                alt="Digital workspace"
                className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
              
              <motion.div 
                className="absolute -bottom-8 -right-8 glass-card p-6 rounded-xl max-w-xs z-20 hover:shadow-purple-500/20 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-sm font-medium text-blion-purple">Our Expertise</div>
                <h3 className="text-lg font-bold mt-2 font-bricolage">Premium Digital Solutions</h3>
                <p className="text-sm text-gray-300 mt-2">Specializing in property management websites and custom digital experiences</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Mouse follower */}
      <motion.div 
        className="w-20 h-20 rounded-full border border-blion-purple/30 pointer-events-none fixed z-50 hidden md:flex items-center justify-center"
        style={{ 
          left: mouseX, 
          top: mouseY,
          x: "-50%",
          y: "-50%"
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <motion.div className="w-2 h-2 bg-blion-purple/70 rounded-full" />
      </motion.div>
    </section>
  );
};

export default Hero;
