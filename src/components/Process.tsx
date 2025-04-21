
import React from "react";
import { Palette, Globe, Code, Building } from "lucide-react";

// Restore previous template (simple, single row cards, better blend)
const steps = [
  {
    icon: <Palette size={34} className="text-blion-purple" />,
    title: "Collaborate",
    desc: "We begin by learning your goals, business, and audience for a clear vision.",
  },
  {
    icon: <Globe size={34} className="text-blion-purple" />,
    title: "Plan & Architect",
    desc: "We strategize the solution, designing user flows and technical plans.",
  },
  {
    icon: <Code size={34} className="text-blion-purple" />,
    title: "Build & Test",
    desc: "Development and design come together—rapid build, feedback, and testing.",
  },
  {
    icon: <Building size={34} className="text-blion-purple" />,
    title: "Deliver & Support",
    desc: "We launch your solution, provide training, and stand by with ongoing support.",
  },
];

const Process = () => (
  <section id="process" className="section-padding bg-blion-dark/95 border-t border-blion-purple/20">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-bricolage mb-4">Our Process</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We make digital transformation a smooth, simple journey.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className="glass-card p-8 rounded-xl border border-white/10 hover:border-blion-purple/40 transition shadow flex flex-col items-center text-center bg-blion-dark"
          >
            <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-blion-purple/15 mb-5">
              {step.icon}
            </div>
            <h3 className="font-bricolage text-lg font-bold mb-1">{step.title}</h3>
            <p className="text-gray-400">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;

