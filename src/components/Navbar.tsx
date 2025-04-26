import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "#contact", label: "Contact" },
];

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink = ({ href, children, onClick }: NavLinkProps) => (
  <Link
    to={href}
    className="group px-2 py-1.5 font-bricolage text-[15px] tracking-wide relative overflow-x-visible
      transition-colors hover:text-blion-purple text-white/80
      after:block after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blion-purple after:transition-all after:duration-300 hover:after:w-full"
    onClick={onClick}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`
        fixed left-0 right-0 top-0 z-50 mx-auto flex w-[calc(100%-2rem)] items-center justify-between transition-all duration-300
        ${isScrolled ? "bg-blion-dark/80 shadow-lg backdrop-blur-sm mt-1 px-6" : "bg-transparent mt-4 px-4"}
        py-4
      `}
    >
      <Link to="/" className="flex items-center">
        <span className="text-3xl font-bold font-bricolage text-gradient">Blion</span>
      </Link>
      {/* Desktop menu */}
      <nav className="hidden md:flex items-center space-x-6">
        {NAV_LINKS.map((nl) => (
          <NavLink key={nl.href} href={nl.href}>{nl.label}</NavLink>
        ))}
        <Link
          to="/book"
          className="rounded-full bg-blion-purple px-5 py-1.5 text-sm font-medium text-white transition-all hover:bg-blion-purple-dark ml-2 shadow-md hover:scale-105 transform duration-200"
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
            <nav className="flex flex-col items-center space-y-8 text-2xl">
              {NAV_LINKS.map((nl) =>
                <NavLink key={nl.href} href={nl.href} onClick={closeMenu}>{nl.label}</NavLink>
              )}
              <Link
                to="/book"
                className="mt-6 rounded-full bg-blion-purple px-8 py-3 font-medium text-white shadow-md transition-all hover:bg-blion-purple-dark hover:scale-105 transform duration-200"
                onClick={closeMenu}
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
