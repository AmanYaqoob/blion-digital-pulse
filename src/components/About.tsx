
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Users, BarChart3, Calendar } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const stats = [
    {
      icon: <Users className="h-8 w-8 text-blion-purple" />,
      value: "100+",
      label: "Happy Clients",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-blion-purple" />,
      value: "250+",
      label: "Projects Completed",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blion-purple" />,
      value: "15+",
      label: "Years Experience",
    },
    {
      icon: <Calendar className="h-8 w-8 text-blion-purple" />,
      value: "24/7",
      label: "Support",
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-black to-blion-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" ref={ref}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80"
                  alt="Blion Team"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 p-6 glass-card rounded-xl z-20 max-w-xs">
                <div className="text-lg font-bold text-white font-bricolage mb-2">Premium Experience</div>
                <p className="text-gray-300 text-sm">
                  Our team combines creativity with technical expertise to deliver exceptional results.
                </p>
              </div>
              <div className="absolute -z-10 top-1/4 -left-8 w-64 h-64 bg-blion-purple/30 rounded-full filter blur-[60px]"></div>
            </div>
          </motion.div>

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
                  <div className="text-3xl font-bold font-bricolage mb-1">{stat.value}</div>
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
