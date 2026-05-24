import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.png";

const Hero = () => {
  const posters = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1450&auto=format&fit=crop",
      title: "Cinema Craft",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1459&auto=format&fit=crop",
      title: "Storytelling Art",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1470&auto=format&fit=crop",
      title: "Cultural Authenticity",
    },
  ];

  const handleCTA = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const yOffset = -80; 
      const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-primary overflow-hidden flex flex-col justify-center">
      {/* Intro Text Animation */}
      <div className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ 
            duration: 2.5, 
            times: [0, 0.2, 0.8, 1],
            ease: "easeInOut"
          }}
          className="flex flex-col items-center"
        >
          <img 
            src={logo} 
            alt="Leela Films Logo" 
            className="w-[45vw] max-w-[420px] h-auto object-contain"
          />
        </motion.div>
      </div>

      {/* Cinematic Background Images (Zooming/Pan) */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-0 z-10">
        {posters.map((poster, index) => {
          return (
            <motion.div
              key={poster.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              transition={{ 
                duration: 1.5, 
                delay: 2.2 + index * 0.2, 
                ease: "easeOut" 
              }}
              className="relative h-full w-full overflow-hidden border-r border-white/5 last:border-0"
            >
              <motion.img
                src={poster.image}
                alt={poster.title}
                animate={{ scale: [1, 1.08, 1] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className="w-full h-full object-cover grayscale brightness-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
            </motion.div>
          );
        })}
      </div>

      {/* Strong Dark Overlay vignette to ensure premium look and contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-black z-15 pointer-events-none" />

      {/* Main Copy Overlay */}
      <div className="container mx-auto px-6 md:px-12 relative z-20 flex flex-col items-center text-center mt-12 md:mt-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          {/* Staggered Main Headline */}
          <h2 className="text-4xl md:text-7xl font-black tracking-tight text-white leading-[1.1] mb-6">
            Shaping Culture. <br />
            <span className="text-[#ea222d]">Empowering Talent.</span> <br />
            Telling Indian Stories Globally.
          </h2>

          {/* Sub-headline */}
          <p className="text-gray-400 text-sm md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Welcome to Leela Films—a new-age entertainment and media ecosystem built on modern production systems, cultural authenticity, and the relentless pursuit of excellence.
          </p>

          {/* Interactive CTA */}
          <motion.button
            whileHover={{ scale: 1.05, shadow: "0px 0px 20px rgba(234, 34, 45, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCTA}
            className="px-8 py-4 bg-[#ea222d] text-white font-black text-xs md:text-sm tracking-[0.2em] uppercase rounded-sm border-2 border-black shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-300"
          >
            Collaborate with Us
          </motion.button>
        </motion.div>
      </div>

      {/* The Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 4.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/50">Scroll to Explore</span>
        <div className="w-[1px] h-10 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 top-0 w-full h-1/2 bg-[#ea222d]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
