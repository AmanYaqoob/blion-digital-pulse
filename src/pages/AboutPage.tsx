
import React, { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Users, Award, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, amount: 0.3 });
  const isInView2 = useInView(ref2, { once: true, amount: 0.3 });

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
      icon: <Award className="h-8 w-8 text-blion-purple" />,
      value: "15+",
      label: "Years Experience",
    },
    {
      icon: <Clock className="h-8 w-8 text-blion-purple" />,
      value: "24/7",
      label: "Support",
    },
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in every project we undertake, ensuring the highest quality results.",
    },
    {
      title: "Innovation",
      description: "We embrace innovative technologies and approaches to solve complex digital challenges.",
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients, fostering strong relationships built on transparency and trust.",
    },
    {
      title: "Adaptability",
      description: "We stay agile and responsive to changing market trends and client needs.",
    },
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
    },
    {
      name: "Sarah Chen",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    },
    {
      name: "Michael Rodriguez",
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80",
    },
    {
      name: "Emma Wilson",
      role: "Marketing Strategist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-40 pb-20"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-bricolage mb-6">
              About <span className="text-gradient">Blion</span>
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We are a premium digital agency dedicated to creating exceptional digital experiences that drive growth and success for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32" ref={ref1}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold font-bricolage mb-6">Our Story</h2>
              <p className="text-gray-300 mb-4">
                Founded in 2010, Blion was born from the vision to create digital solutions that not only look stunning but also deliver exceptional results. What started as a small team of passionate designers and developers has grown into a comprehensive digital agency serving clients worldwide.
              </p>
              <p className="text-gray-300 mb-4">
                Our journey has been defined by constant innovation, learning, and adaptation to the ever-evolving digital landscape. We've built our reputation on delivering premium digital experiences that help businesses stand out in crowded markets.
              </p>
              <p className="text-gray-300 mb-6">
                Today, we specialize in creating high-performance websites, custom applications, and comprehensive digital strategies that drive growth and engagement for our clients. Our expertise in property management solutions has made us a preferred partner for real estate companies looking to optimize their operations.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="glass-card p-4 rounded-xl text-center">
                    <div className="flex justify-center mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold font-bricolage">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
                  alt="Blion Team"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 glass-card p-6 rounded-xl z-20 max-w-xs">
                <div className="text-lg font-bold text-white font-bricolage mb-2">
                  Our Mission
                </div>
                <p className="text-gray-300 text-sm">
                  To create digital experiences that transform businesses and delight users through innovative design and technology.
                </p>
              </div>
              <div className="absolute -z-10 top-1/4 -left-8 w-64 h-64 bg-blion-purple/30 rounded-full filter blur-[60px]"></div>
            </motion.div>
          </div>
          
          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold font-bricolage mb-6">Our Core Values</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                These principles guide our work and define how we approach every project and client relationship.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-8 rounded-xl text-center"
                >
                  <div className="h-14 w-14 mx-auto flex items-center justify-center rounded-full bg-blion-purple/20 mb-6">
                    <span className="text-2xl font-bold text-blion-purple">0{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold font-bricolage mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="mb-32" ref={ref2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold font-bricolage mb-6">Meet Our Team</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Our talented team of experts is dedicated to bringing your vision to life.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex space-x-3">
                        <a href="#" className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-blion-dark">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                          </svg>
                        </a>
                        <a href="#" className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-blion-dark">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-bricolage">{member.name}</h3>
                  <p className="text-blion-purple">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 rounded-xl text-center"
          >
            <h2 className="text-2xl font-bold font-bricolage mb-4">Ready to Start Your Project?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Let's work together to create a digital solution that meets your unique needs and exceeds your expectations.
            </p>
            <Link
              to="/book"
              className="px-8 py-3 rounded-full bg-blion-purple text-white font-medium hover:bg-blion-purple-dark transition-colors inline-flex items-center"
            >
              Book a Consultation
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
