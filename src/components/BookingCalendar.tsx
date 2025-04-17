import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarCheck, Clock, Send } from "lucide-react";

const BookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  
  const { toast } = useToast();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !selectedDate || !selectedTime || !service) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Consultation Booked!",
      description: `Your consultation is scheduled for ${selectedDate?.toDateString()} at ${selectedTime}.`,
    });
    
    setSelectedDate(null);
    setSelectedTime("");
    setName("");
    setEmail("");
    setPhone("");
    setService("");
    setMessage("");
  };

  const services = [
    "Web Development",
    "API Creation",
    "API Integration",
    "UI/UX Design",
    "Video Editing",
    "Social Media Marketing",
    "Property Management Website",
    "Custom Hybrid Application",
    "Web-Based Software",
    "Other"
  ];

  return (
    <section id="contact" className="section-padding bg-blion-dark">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-bricolage mb-4">Book a Consultation</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Schedule a call with our team to discuss your project and how we can help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold font-bricolage mb-6 flex items-center">
              <CalendarCheck className="mr-2 text-blion-purple" size={24} />
              Select Date & Time
            </h3>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Pick a Date
              </label>
              <DatePicker
                selected={selectedDate}
                onChange={(date: Date) => setSelectedDate(date)}
                minDate={new Date()}
                placeholderText="Select a date"
                className="w-full rounded-lg bg-white/5 border border-white/10 p-3 text-white"
                calendarClassName="bg-blion-dark text-white border border-white/10 rounded-lg shadow-xl"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Pick a Time
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    className={`p-2 rounded-lg border flex items-center justify-center transition-all ${
                      selectedTime === time
                        ? "bg-blion-purple border-blion-purple text-white"
                        : "border-white/10 text-gray-300 hover:border-blion-purple/50"
                    }`}
                    onClick={() => setSelectedTime(time)}
                  >
                    <Clock size={14} className="mr-1" />
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold font-bricolage mb-6">Your Information</h3>
              
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg bg-white/5 border border-white/10 p-3 text-white"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg bg-white/5 border border-white/10 p-3 text-white"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-lg bg-white/5 border border-white/10 p-3 text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-400 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full rounded-lg bg-white/5 border border-white/10 p-3 text-white"
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full rounded-lg bg-white/5 border border-white/10 p-3 text-white"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blion-purple hover:bg-blion-purple-dark text-white py-3 px-6 rounded-lg flex justify-center items-center transition-colors"
                >
                  <Send size={18} className="mr-2" />
                  Book Consultation
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingCalendar;
