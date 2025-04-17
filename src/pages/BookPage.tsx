
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingCalendar from "@/components/BookingCalendar";
import { motion } from "framer-motion";

const BookPage = () => {
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
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-bricolage mb-6">
              Book a <span className="text-gradient">Consultation</span>
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Schedule a call with our team to discuss your project and explore how we can help bring your vision to life.
            </p>
          </motion.div>
          
          <BookingCalendar />
        </div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default BookPage;
