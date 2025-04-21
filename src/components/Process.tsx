
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
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-bricolage mb-4">Our Process</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          A clear and simple journey to your digital success.
        </p>
      </div>
      
      {/* Timeline-style process steps */}
      <div className="max-w-5xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blion-purple/30 hidden md:block" />
        
        {steps.map((step, i) => (
          <div key={i} className={`relative mb-16 last:mb-0 ${i % 2 === 0 ? 'md:pr-12 md:ml-auto md:mr-1/2' : 'md:pl-12 md:mr-auto md:ml-1/2'} md:w-1/2`}>
            {/* Circle on timeline */}
            <div className="hidden md:block absolute top-6 w-12 h-12 rounded-full bg-blion-dark border-4 border-blion-purple/50 z-10
              left-0 right-0 mx-auto transform -translate-x-1/2 md:translate-x-0
              md:right-0 md:left-auto md:translate-x-1/2
              md:mr-0"
              style={{ 
                [i % 2 === 0 ? 'right' : 'left']: '-6px',
                marginLeft: i % 2 === 0 ? 'auto' : '',
                marginRight: i % 2 === 0 ? '' : 'auto'
              }} 
            />
            
            <div className="glass-card p-8 rounded-xl relative z-10 flex flex-col md:flex-row items-center text-center md:text-left gap-6 
              hover:bg-blion-purple/5 transition-colors duration-300 h-full group">
              <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center rounded-full bg-blion-purple/20 group-hover:bg-blion-purple/30 transition-colors">
                {step.icon}
              </div>
              <div>
                <h3 className="font-bricolage text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
