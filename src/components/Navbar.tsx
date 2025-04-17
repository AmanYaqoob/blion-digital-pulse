
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink = ({ href, children, onClick }: NavLinkProps) => (
  <Link 
    to={href}
    className="relative px-3 py-2 font-bricolage text-lg transition-colors hover:text-blion-purple group"
    onClick={onClick}
  >
    {children}
    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blion-purple transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 right-0 top-0 z-50 mx-auto flex w-[calc(100%-2rem)] items-center justify-between py-4 transition-all duration-300 ${
        isScrolled
          ? "glass-card mt-2 px-6"
          : "mt-4 bg-transparent px-4"
      }`}
    >
      <Link to="/" className="flex items-center">
        <span className="text-3xl font-bold font-bricolage text-gradient">Blion</span>
      </Link>

      {/* Desktop menu */}
      <nav className="hidden md:flex items-center space-x-6">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/services">Services</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/portfolio">Portfolio</NavLink>
        <NavLink href="#contact">Contact</NavLink>
        <Link
          to="/book"
          className="rounded-full bg-blion-purple px-6 py-2 font-medium text-white transition-all hover:bg-blion-purple-dark"
        >
          Book a Call
        </Link>
      </nav>

      {/* Mobile menu button */}
      <button
        className="flex md:hidden text-white z-50"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-blion-dark"
          >
            <nav className="flex flex-col items-center space-y-6 text-2xl">
              <NavLink href="/" onClick={closeMenu}>Home</NavLink>
              <NavLink href="/services" onClick={closeMenu}>Services</NavLink>
              <NavLink href="/about" onClick={closeMenu}>About</NavLink>
              <NavLink href="/portfolio" onClick={closeMenu}>Portfolio</NavLink>
              <NavLink href="#contact" onClick={closeMenu}>Contact</NavLink>
              <Link
                to="/book"
                className="mt-4 rounded-full bg-blion-purple px-8 py-3 font-medium text-white transition-all hover:bg-blion-purple-dark"
                onClick={closeMenu}
              >
                Book a Call
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
