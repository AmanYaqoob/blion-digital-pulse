
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MoreVertical, Linkedin, Instagram } from "lucide-react";
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
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed w-full top-4 px-4 z-50 flex items-center justify-between">
      {/* Social Media Links */}
      <div className="flex gap-4">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-blion-dark/80 backdrop-blur-sm 
                   text-white transition-all hover:bg-blion-dark shadow-lg border border-white/10"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-blion-dark/80 backdrop-blur-sm 
                   text-white transition-all hover:bg-blion-dark shadow-lg border border-white/10"
        >
          <Instagram size={18} />
        </a>
      </div>

      {/* Company Name */}
      <Link to="/" className="text-2xl font-bricolage font-bold text-white absolute left-1/2 transform -translate-x-1/2 hover:text-blion-purple transition-colors">
        Blizon
      </Link>

      {/* Menu Button */}
      <div className="relative">
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full bg-blion-dark/80 backdrop-blur-sm 
                   text-white transition-all hover:bg-blion-dark shadow-lg border border-white/10"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <MoreVertical size={20} />
        </button>

        {/* Section Indicator */}
        {activeSection && (
          <div className="absolute right-14 top-1/2 -translate-y-1/2 bg-blion-dark/80 backdrop-blur-sm 
                        rounded-full py-1 px-4 text-xs text-white/80 border border-white/10">
            {activeSection}
          </div>
        )}

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
      </div>
    </header>
  );
};

export default Navbar;
