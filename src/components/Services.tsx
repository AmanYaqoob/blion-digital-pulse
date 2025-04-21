
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Laptop,
  ArrowRight,
  PanelRight,
  ServerCog,
  Smartphone,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  onClick: () => void;
}

const ServiceCard = ({
  icon,
  title,
  description,
  index,
  onClick,
}: ServiceCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-8 rounded-xl hover:shadow-lg hover:shadow-blion-purple/10 transition-all duration-300 relative overflow-hidden group cursor-pointer"
      onClick={onClick}
      tabIndex={0}
      role="button"
      onKeyDown={e => (e.key === "Enter" ? onClick() : undefined)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blion-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="h-14 w-14 flex items-center justify-center rounded-lg bg-blion-purple/20 text-blion-purple mb-6 relative z-10">
        {icon}
      </div>
      <h3 className="text-xl font-bold font-bricolage mb-3 relative z-10">
        {title}
      </h3>
      <p className="text-gray-400 mb-6 relative z-10">{description}</p>
      <Button
        asChild
        variant="default"
        className="bg-blion-purple hover:bg-blion-purple-dark text-white group relative z-10 pointer-events-none"
        tabIndex={-1}
      >
        {/* This button is now visually for effect only; clicking card triggers dialog */}
        <span className="flex items-center select-none">
          Start a Project
          <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
        </span>
      </Button>
    </motion.div>
  );
};

const services = [
  {
    icon: <Laptop size={28} />,
    title: "Web-Based Software",
    description:
      "Custom web applications and software solutions to streamline operations and boost productivity for your business.",
    popup: "Unlock new levels of efficiency by digitizing business processes and building solutions around your unique workflows.",
  },
  {
    icon: <Smartphone size={28} />,
    title: "Custom Hybrid Applications",
    description:
      "Cross-platform mobile applications that work seamlessly across devices with native-like performance.",
    popup: "Our hybrid apps are designed for performance and flexibility, offering your users a consistent experience anywhere.",
  },
  {
    icon: <PanelRight size={28} />,
    title: "API Integration",
    description:
      "Seamless integration of third-party APIs to expand and enhance your application’s features.",
    popup:
      "Integrate payment gateways, external services, and cloud APIs to broaden the capabilities of your platform.",
  },
  {
    icon: <ServerCog size={28} />,
    title: "API Creation",
    description:
      "Robust, scalable APIs tailored to your business needs and data structure.",
    popup:
      "Our APIs are built for performance, security, and developer-friendly documentation.",
  },
];

const moreServices = [
  {
    icon: <ArrowRight size={28} />,
    title: "...and More",
    description:
      "We offer additional services like UI/UX design, social media marketing, and more to help your business thrive.",
    popup: "From branding to digital marketing, we’re your one-stop partner for all digital business needs.",
  },
];

const Services = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeService, setActiveService] = useState<null | typeof services[0]>(null);

  const handleCardClick = (service: typeof services[0]) => {
    setActiveService(service);
    setDialogOpen(true);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section id="services" className="section-padding relative" ref={ref}>
      <motion.div
        className="absolute top-20 left-10 text-blion-purple/40"
        animate={{
          y: [0, 15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Laptop size={40} />
      </motion.div>
      <motion.div
        className="absolute bottom-40 right-10 text-blion-purple/30"
        animate={{
          y: [0, -20, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      >
        <ServerCog size={50} />
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-20 text-blion-purple/20"
        animate={{
          y: [0, 10, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2,
        }}
      >
        <PanelRight size={35} />
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-bricolage mb-4">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the online world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...services, ...moreServices].map((service, index) => (
            <Dialog key={index} open={dialogOpen && activeService?.title === service.title} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <div>
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    index={index}
                    onClick={() => handleCardClick(service)}
                  />
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    {service.icon}
                    <span>{service.title}</span>
                  </DialogTitle>
                  <DialogDescription>{service.popup}</DialogDescription>
                </DialogHeader>
                <DialogClose asChild>
                  <Button variant="outline" className="mt-4 w-full">
                    Close
                  </Button>
                </DialogClose>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

