import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "SERVICES", href: "/#services" },
  { label: "WORK", href: "/#work" },
  { label: "ABOUT", href: "/#about" },
  { label: "BLOG", href: "/#blog" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : ""
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-4">
          <span className="text-foreground text-xl font-serif font-bold tracking-tight">Vinay.</span>
          <span className="text-xs font-sans font-medium tracking-widest px-3 py-1 rounded-full border border-primary text-primary">
            AVAILABLE
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-sans font-medium tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="/#contact-form"
          className="hidden md:inline-flex text-xs font-sans font-medium tracking-widest px-6 py-3 rounded-full border border-border text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
        >
          LET'S TALK
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
