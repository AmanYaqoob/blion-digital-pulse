import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 py-16 px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold font-bricolage text-gradient">Blion</h2>
            <p className="text-gray-400 mt-4 max-w-xs">
              Premium digital solutions for businesses looking to make an impact in the digital landscape.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-blion-purple transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blion-purple transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blion-purple transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold font-bricolage">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-blion-purple transition-colors">Web Development</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-blion-purple transition-colors">API Creation</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-blion-purple transition-colors">UI/UX Design</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-blion-purple transition-colors">Property Management</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold font-bricolage">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blion-purple transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blion-purple transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-blion-purple transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/book" className="text-gray-400 hover:text-blion-purple transition-colors">Book a Call</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold font-bricolage">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail size={16} />
                <span>info@blion.agency</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Blion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
