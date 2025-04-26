
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MoreVertical } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="fixed right-4 top-4 z-50">
      {/* Dot menu button */}
      <button
        className="flex h-10 w-10 items-center justify-center rounded-full bg-blion-dark/80 backdrop-blur-sm 
                 text-white transition-all hover:bg-blion-dark shadow-lg border border-white/10"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <MoreVertical size={20} />
      </button>

      {/* Menu dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-12 w-48 rounded-lg bg-blion-dark/95 backdrop-blur-sm 
                     shadow-lg border border-white/10 py-2"
          >
            <nav className="flex flex-col">
              {NAV_LINKS.map((nl) => (
                <Link
                  key={nl.href}
                  to={nl.href}
                  className="px-4 py-2 text-[15px] text-white/80 hover:text-white hover:bg-white/5 
                           transition-colors tracking-wide font-bricolage"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {nl.label}
                </Link>
              ))}
              <Link
                to="/book"
                className="mt-2 mx-4 rounded-full bg-blion-purple px-4 py-1.5 text-sm font-medium 
                         text-white transition-all hover:bg-blion-purple-dark text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Book a Call
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
