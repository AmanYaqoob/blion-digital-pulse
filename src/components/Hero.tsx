
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Database, Palette, Globe, Smartphone, Server, PanelRight } from "lucide-react";

const FloatingIcon = ({ icon, delay, x, y }: { icon: React.ReactNode, delay: number, x: number, y: number }) => {
  return (
    <motion.div
      className="absolute text-blion-purple/70 hover:text-blion-purple transition-colors"
      initial={{ opacity: 0, x, y }}
      animate={{ 
        opacity: [0.4, 0.8, 0.4],
        y: [y, y - 15, y],
        x: [x, x + 10, x]
      }}
      transition={{ 
        duration: 5, 
        repeat: Infinity, 
        delay: delay,
        repeatType: "reverse" 
      }}
    >
      {icon}
    </motion.div>
  );
};

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  // Calculate the gradient position based on mouse coordinates
  const gradientStyle = {
    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(155, 135, 245, 0.15), transparent 40%)`,
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-900"
      style={{ position: 'relative' }}
    >
      {/* Cursor-following gradient effect */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={gradientStyle}
      />

      {/* Floating icons */}
      <FloatingIcon icon={<Code size={30} />} delay={0} x={-150} y={-100} />
      <FloatingIcon icon={<Database size={24} />} delay={1} x={150} y={-120} />
      <FloatingIcon icon={<Palette size={28} />} delay={1.5} x={-180} y={50} />
      <FloatingIcon icon={<Globe size={32} />} delay={0.5} x={200} y={80} />
      <FloatingIcon icon={<Server size={26} />} delay={2} x={-100} y={150} />
      <FloatingIcon icon={<Smartphone size={24} />} delay={1.8} x={120} y={-80} />
      <FloatingIcon icon={<PanelRight size={22} />} delay={0.8} x={170} y={120} />

      <div className="max-w-7xl w-full mx-auto px-6 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-bricolage leading-tight mb-6">
                Elevate Your <span className="text-gradient">Digital Presence</span><br /> 
                With Premium Solutions
              </h1>

              <p className="text-gray-300 text-lg mb-8">
                Transforming ideas into exceptional digital experiences through innovative design and development.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-blion-purple hover:bg-blion-purple-dark text-white group"
                >
                  <Link to="/book">
                    Start a Project 
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>

                <Button asChild variant="outline" size="lg" className="border-white/10">
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blion-purple/30 to-blion-purple-light/20 filter blur-xl opacity-70 animate-pulse"></div>
              <img 
                src="/lovable-uploads/e260742c-3aaa-4ecf-8945-b859543c1861.png" 
                alt="Digital Solutions" 
                className="rounded-2xl w-full shadow-2xl object-cover z-10 relative"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
