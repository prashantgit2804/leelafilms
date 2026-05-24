import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { name: "HOME", id: "hero", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop" },
  { name: "PROJECTS", id: "projects", image: "https://images.unsplash.com/photo-1492691523567-6119e2aa99df?q=80&w=2070&auto=format&fit=crop" },
  { name: "SERVICES", id: "services", image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=1726&auto=format&fit=crop" },
  { name: "ABOUT", id: "about", image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=1726&auto=format&fit=crop" },
  { name: "WAY FORWARD", id: "wayforward", image: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=2073&auto=format&fit=crop" },
  { name: "TEAM", id: "team", image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070&auto=format&fit=crop" },
  { name: "CONTACT", id: "contact", image: "https://images.unsplash.com/photo-1486848538183-510c07596379?q=80&w=1955&auto=format&fit=crop" },
];

const MenuOverlay = ({ isOpen, onClose }) => {
  const handleItemClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors text-xs tracking-widest uppercase font-bold z-10"
          >
            Close [ESC]
          </button>

          {/* Arch Menu Container */}
          <div className="relative w-full max-w-7xl h-[40vh] flex items-end justify-center">
            {menuItems.map((item, index) => {
              const totalItems = menuItems.length;
              const angleStep = 100 / (totalItems - 1); // Fit 7 items
              const angle = index * angleStep - 50; // Center the arch
              const radius = 620; // Radius of the arch

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 100, rotate: 0 }}
                  animate={{ 
                    opacity: 1, 
                    y: -Math.cos((angle * Math.PI) / 180) * 100, 
                    x: Math.sin((angle * Math.PI) / 180) * radius * 0.7,
                    rotate: angle,
                  }}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -Math.cos((angle * Math.PI) / 180) * 130,
                    zIndex: 20,
                    transition: { duration: 0.3 }
                  }}
                  transition={{ 
                    delay: index * 0.04, 
                    duration: 0.8, 
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  onClick={() => handleItemClick(item.id)}
                  className="absolute cursor-pointer origin-bottom py-10 px-4 group"
                >
                  <div className="relative flex flex-col items-center">
                    <motion.p 
                      className="text-white text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none transition-all duration-300 group-hover:text-[#ea222d]"
                    >
                      {item.name}
                    </motion.p>
                    <motion.div 
                      className="w-0 h-[3px] bg-[#ea222d] mt-2 group-hover:w-full transition-all duration-500 rounded-full"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>


          {/* Large Background Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none opacity-5">
            <h1 className="text-[20vw] font-black tracking-tighter uppercase leading-none text-white">
              LEELA
            </h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuOverlay;
