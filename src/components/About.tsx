
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
          {/* Image removed as per user request */}
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
