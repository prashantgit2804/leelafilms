import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuOverlay from "./MenuOverlay";
import logo from "../assets/images/logo.png";

const navItems = [
  { name: "HOME", id: "hero" },
  { name: "PROJECTS", id: "projects" },
  { name: "SERVICES", id: "services" },
  { name: "ABOUT", id: "about" },
  { name: "WAY FORWARD", id: "wayforward" },
  { name: "TEAM", id: "team" },
  { name: "CONTACT", id: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleItemClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky navigation header
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] pointer-events-none transition-colors duration-500">
      {/* Subtle background for the Arch - Ultra Slim */}
      <div className={`absolute inset-0 h-24 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-md opacity-100 border-b border-white/5' : 'bg-transparent opacity-0'}`} />

      <div className="container mx-auto px-6 h-24 relative flex items-start justify-between">
        {/* Logo - Pinned top-left */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-6 left-10 cursor-pointer pointer-events-auto flex items-center"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img 
            src={logo} 
            alt="Leela Films Logo" 
            className="h-10 md:h-12 w-auto object-contain hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Arch Navigation Items - Sharp Rainbow in Compact Space */}
        <div className="relative w-full max-w-4xl h-full flex items-start justify-center pt-1 mx-auto hidden lg:flex">
          {navItems.map((item, index) => {
            const totalItems = navItems.length;
            const angleStep = 100 / (totalItems - 1); // Broader angle step for a wider arc
            const angle = index * angleStep - 50; // Center the arc from -50deg to +50deg
            const radius = 240; // Perfect horizontal spacing radius

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 100 }}
                animate={{
                  opacity: 1,
                  y: -Math.cos((angle * Math.PI) / 180) * 160 + 160, // Much stronger, visually striking curve
                  x: Math.sin((angle * Math.PI) / 180) * radius * 1.6,
                  rotate: angle * 0.4, // Subtle rotation along the curve for organic flow
                }}
                whileHover={{
                  scale: 1.08,
                  y: -Math.cos((angle * Math.PI) / 180) * 160 + 140, // Interactive upward float
                  transition: { duration: 0.2 },
                }}
                transition={{
                  delay: index * 0.03,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => handleItemClick(item.id)}
                className="absolute cursor-pointer pointer-events-auto group px-3 py-2"
              >
                <div className="flex flex-col items-center">
                  <h3 className={`text-[10px] md:text-[11px] font-black tracking-[0.2em] uppercase transition-colors duration-500 leading-none ${scrolled ? 'text-white/60 group-hover:text-[#ea222d]' : 'text-white/80 group-hover:text-[#ea222d]'}`}>
                    {item.name}
                  </h3>
                  <div className={`w-0 h-[1.5px] transition-all duration-500 rounded-full mt-1 ${scrolled ? 'bg-[#ea222d] group-hover:w-full' : 'bg-[#ea222d] group-hover:w-full'}`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
