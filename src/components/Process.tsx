
import React from "react";
import { Code, Lightbulb, Rocket, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: <Code size={32} className="text-blion-purple" />,
    title: "Discovery",
    desc: "We start by understanding your business, goals, and requirements through detailed consultations.",
  },
  {
    icon: <Lightbulb size={32} className="text-blion-purple" />,
    title: "Strategy",
    desc: "Based on our findings, we develop a comprehensive strategy tailored to your specific needs.",
  },
  {
    icon: <Rocket size={32} className="text-blion-purple" />,
    title: "Design & Development",
    desc: "Our team brings your project to life with cutting-edge design and development practices.",
  },
  {
    icon: <CheckCircle size={32} className="text-blion-purple" />,
    title: "Launch & Support",
    desc: "We ensure a smooth launch and provide ongoing support to keep your digital presence thriving.",
  },
];

const Process = () => {
  return (
    <section id="process" className="section-padding bg-blion-dark">
      <div className="max-w-5xl mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold font-bricolage mb-4">Our Process</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          A clear and simple journey to your digital success.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {steps.map((step, i) => (
          <div
            key={i}
            className="
              flex flex-col items-center glass-card px-6 py-10 rounded-xl group
              hover:ring-4 hover:ring-blion-purple/20 hover:bg-blion-purple/5 transition-all duration-200 cursor-pointer
              h-full
            "
          >
            <div className="mb-4 flex items-center justify-center h-16 w-16 rounded-full bg-blion-purple/20 group-hover:bg-blion-purple/30 transition-colors duration-200">
              {step.icon}
            </div>
            <h3 className="font-bricolage text-lg font-bold mb-2">{step.title}</h3>
            <p className="text-gray-400 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
