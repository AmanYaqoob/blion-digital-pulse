
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Users, BarChart3, Calendar, Code, Database, Globe, Cloud, Cpu, Monitor } from "lucide-react";

const CountUpNumber = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isAnimating) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        const currentCount = Math.min(Math.floor(end * progress), end);
        setCount(currentCount);
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isAnimating]);

  useEffect(() => {
    setIsAnimating(true);
  }, []);

  return <>{count}+</>;
};

const FloatingIcon = ({ icon, x, y, delay }: { icon: React.ReactNode; x: number; y: number; delay: number }) => (
  <motion.div
    className="absolute text-blion-purple/30"
    initial={{ opacity: 0, x, y }}
    animate={{
      opacity: [0.2, 0.5, 0.2],
      y: [y, y - 20, y],
      x: [x, x + 10, x],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay,
      repeatType: "reverse",
    }}
  >
    {icon}
  </motion.div>
);

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const stats = [
    {
      icon: <Users className="h-8 w-8 text-blion-purple" />,
      value: 100,
      label: "Happy Clients",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-blion-purple" />,
      value: 250,
      label: "Projects Completed",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blion-purple" />,
      value: 15,
      label: "Years Experience",
    },
    {
      icon: <Calendar className="h-8 w-8 text-blion-purple" />,
      value: 24,
      label: "Support",
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-black to-blion-dark relative overflow-hidden">
      <FloatingIcon icon={<Code size={24} />} x={-150} y={50} delay={0} />
      <FloatingIcon icon={<Database size={24} />} x={150} y={-50} delay={0.5} />
      <FloatingIcon icon={<Globe size={24} />} x={-100} y={200} delay={1} />
      <FloatingIcon icon={<Cloud size={24} />} x={200} y={150} delay={1.5} />
      <FloatingIcon icon={<Cpu size={24} />} x={-180} y={-80} delay={2} />
      <FloatingIcon icon={<Monitor size={24} />} x={180} y={220} delay={2.5} />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" ref={ref}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-bricolage mb-6">
              About <span className="text-gradient">Blion</span>
            </h2>
            <p className="text-gray-300 mb-6">
              Blion is a premium digital agency focused on creating exceptional digital experiences that drive growth and engagement. We blend creativity with technical expertise to deliver solutions that stand out in the digital landscape.
            </p>
            <p className="text-gray-300 mb-8">
              Our specialized team excels in developing property management websites, crafting custom web applications, and designing intuitive user interfaces that elevate your brand and enhance user experience.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center text-center glass-card p-6 rounded-xl">
                  <div className="mb-3">{stat.icon}</div>
                  <div className="text-3xl font-bold font-bricolage mb-1">
                    {typeof stat.value === 'number' ? (
                      <CountUpNumber end={stat.value} />
                    ) : (
                      stat.value
                    )}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
