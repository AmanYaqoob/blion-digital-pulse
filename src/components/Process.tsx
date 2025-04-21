
import React from "react";
import { Web, Design, Script, Video, Property } from "lucide-react";

const processes = [
  {
    icon: <Design size={32} className="text-blion-purple" />,
    title: "1. Collaborate",
    desc: "We begin by learning your goals, business, and audience for a clear vision.",
  },
  {
    icon: <Web size={32} className="text-blion-purple" />,
    title: "2. Plan & Architect",
    desc: "We strategize the solution, designing user flows and technical plans.",
  },
  {
    icon: <Script size={32} className="text-blion-purple" />,
    title: "3. Build & Test",
    desc: "Development and design come together—rapid build, feedback, and testing.",
  },
  {
    icon: <Property size={32} className="text-blion-purple" />,
    title: "4. Deliver & Support",
    desc: "We launch your solution, provide training, and stand by with ongoing support.",
  },
];

const Process = () => {
  return (
    <section id="process" className="section-padding bg-blion-dark border-t border-blion-purple/20">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold font-bricolage mb-4">Our Process</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          We make digital transformation a smooth, simple journey.
        </p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {processes.map((step, i) => (
          <div
            key={i}
            className="glass-card p-8 rounded-xl border border-white/10 hover:border-blion-purple/40 transition shadow flex items-center gap-6"
          >
            <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-blion-purple/15">
              {step.icon}
            </div>
            <div>
              <h3 className="font-bricolage text-lg font-bold mb-1">{step.title}</h3>
              <p className="text-gray-400">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
