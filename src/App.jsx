import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import MamaMentality from "./sections/MamaMentality";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import About from "./sections/About";
import FourPillars from "./sections/FourPillars";
import WayForward from "./sections/WayForward";
import Team from "./sections/Team";
import Contact from "./sections/Contact";
import VideoModal from "./components/VideoModal";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-primary min-h-screen text-white font-sans selection:bg-[#ea222d] selection:text-white">
      <Navbar />
      <main>
        {/* Cinematic Header Landing */}
        <Hero />
        
        {/* Bold MAMA statement */}
        <MamaMentality />
        
        {/* Portfolio reel */}
        {/* <Projects onProjectClick={setSelectedProject} /> */}
        
        {/* Core Services grid */}
        <Services />
        
        {/* Foundational Pillars (Review Slide Cards) */}
        <FourPillars />
        
        {/* Company Bio, Mission & Vision */}
        <About />
        
        {/* Future Verticals Bento Grid */}
        <WayForward />
        
        {/* Core Leaders */}
        <Team />
        
        {/* Corporate Address & Collaborative Infrastructure */}
        <Contact />
      </main>

      <VideoModal
        isOpen={!!selectedProject}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
