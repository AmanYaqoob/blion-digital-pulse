
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
  const [scrollY, setScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
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
    <>
      {/* Blur overlay when menu is open */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = 'unset';
            }}
          />
        )}
      </AnimatePresence>

      <header className="w-full z-50 py-3 px-5">
        {/* Top bar with logo and social links */}
        <div className="w-full px-4 py-4 flex items-center justify-between">
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

          {/* Company Logo */}
          <Link 
            to="/" 
            className="absolute left-1/2 transform -translate-x-1/2 hover:opacity-90 transition-opacity"
          >
            <img 
              src="/lovable-uploads/0913ca77-b3b6-4d84-86d7-635db6a9da1a.png" 
              alt="Blizon Logo" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Menu Button */}
          <div className="relative z-50">
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full bg-blion-dark/80 backdrop-blur-sm 
                       text-white transition-all hover:bg-blion-dark shadow-lg border border-white/10"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <MoreVertical size={20} />
            </button>

            {/* Section Indicator - Only show when scrolled and section is active */}
            {activeSection && scrollY > 100 && (
              <div className="absolute right-14 top-1/2 -translate-y-1/2 bg-blion-dark/80 backdrop-blur-sm 
                            rounded-full py-1 px-4 text-xs text-white/80 border border-white/10 
                            animate-fade-in">
                {activeSection}
              </div>
            )}

            {/* Menu dropdown */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="fixed right-4 top-16 w-64 rounded-lg bg-blion-dark/95 backdrop-blur-sm 
                           shadow-lg border border-white/10 py-2 z-50"
                >
                  <nav className="flex flex-col">
                    {NAV_LINKS.map((nl) => (
                      <Link
                        key={nl.href}
                        to={nl.href}
                        className="px-4 py-3 text-[15px] text-white/80 hover:text-white hover:bg-white/5 
                                 transition-colors tracking-wide font-bricolage flex items-center"
                        onClick={() => {
                          setIsMenuOpen(false);
                          document.body.style.overflow = 'unset';
                        }}
                      >
                        {nl.label}
                      </Link>
                    ))}
                    <div className="h-px bg-white/10 my-2" />
                    <Link
                      to="/book"
                      className="mx-4 rounded-full bg-blion-purple px-4 py-2.5 text-sm font-medium 
                               text-white transition-all hover:bg-blion-purple-dark text-center"
                      onClick={() => {
                        setIsMenuOpen(false);
                        document.body.style.overflow = 'unset';
                      }}
                    >
                      Book a Call
                    </Link>
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
