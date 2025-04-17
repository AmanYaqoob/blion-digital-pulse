
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  index: number;
}

const ProcessStep = ({ number, title, description, index }: ProcessStepProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex md:items-center"
    >
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blion-purple text-white text-xl font-bold shrink-0 z-10">
        {number}
      </div>
      
      <div className="ml-6 md:ml-10">
        <h3 className="text-xl md:text-2xl font-bold font-bricolage mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
      
      {index < 3 && (
        <div className="absolute left-8 top-16 w-[2px] h-20 bg-gradient-to-b from-blion-purple to-transparent hidden md:block"></div>
      )}
    </motion.div>
  );
};

const Process = () => {
  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We start by understanding your business, goals, and requirements through detailed consultations.",
    },
    {
      number: "02",
      title: "Strategy",
      description: "Based on our findings, we develop a comprehensive strategy tailored to your specific needs.",
    },
    {
      number: "03",
      title: "Design & Development",
      description: "Our team brings your project to life with cutting-edge design and development practices.",
    },
    {
      number: "04",
      title: "Launch & Support",
      description: "We ensure a smooth launch and provide ongoing support to keep your digital presence thriving.",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section id="process" className="section-padding bg-blion-dark">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-bricolage mb-4">Our Process</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We follow a proven methodology to ensure the success of your digital project.
          </p>
        </motion.div>

        <div className="space-y-16 mt-20">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
