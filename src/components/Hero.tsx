import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Database, Palette, Globe, Smartphone, Server, PanelRight, Cpu, Cloud, Monitor, AlignCenter } from "lucide-react";

const FloatingIcon = ({ icon, delay, x, y }: { icon: React.ReactNode, delay: number, x: number, y: number }) => {
  return (
    <motion.div
      className="absolute text-blion-purple/70 hover:text-blion-purple transition-colors hover:scale-125 cursor-pointer"
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

  const gradientStyle = {
    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(155, 135, 245, 0.15), transparent 40%)`,
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-900"
    >
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={gradientStyle}
      />

      <FloatingIcon icon={<Code size={32} />} delay={0} x={-250} y={-150} />
      <FloatingIcon icon={<Database size={28} />} delay={1} x={250} y={-180} />
      <FloatingIcon icon={<Palette size={30} />} delay={1.5} x={-280} y={80} />
      <FloatingIcon icon={<Globe size={34} />} delay={0.5} x={280} y={120} />
      <FloatingIcon icon={<Server size={28} />} delay={2} x={-160} y={200} />
      <FloatingIcon icon={<Smartphone size={26} />} delay={1.8} x={200} y={-120} />
      <FloatingIcon icon={<PanelRight size={24} />} delay={0.8} x={220} y={180} />
      <FloatingIcon icon={<Cpu size={30} />} delay={1.2} x={-300} y={-50} />
      <FloatingIcon icon={<Cloud size={32} />} delay={0.7} x={320} y={-80} />
      <FloatingIcon icon={<Monitor size={28} />} delay={1.3} x={-220} y={150} />
      <FloatingIcon icon={<AlignCenter size={26} />} delay={0.9} x={180} y={-200} />

      <div className="max-w-7xl w-full mx-auto px-6 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-bricolage leading-tight mb-8">
            Elevate Your <span className="text-gradient">Digital Presence</span><br /> 
            With Premium Solutions
          </h1>

          <p className="text-gray-300 text-xl mb-10 mx-auto max-w-2xl">
            Transforming ideas into exceptional digital experiences through innovative design and development.
          </p>

          <div className="flex flex-wrap gap-6 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-blion-purple hover:bg-blion-purple-dark text-white group transform transition-all hover:scale-105 text-lg py-7 px-10"
            >
              <Link to="/book">
                Start a Project 
                <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-blion-purple/30 text-blion-purple/80 hover:border-blion-purple hover:text-blion-purple hover:bg-blion-purple/5 transition-all text-lg py-7 px-10"
            >
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
