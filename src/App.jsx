import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/Scroll";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Footer from "./components/Footer";
import Admission from "./pages/Admission";
import UniversityDetailPage from "./pages/UniversityDetailPage";
import TechUniversityDetailPage from "./pages/TechnicalUniversity";

// Lazy Load Pages to Improve Performance
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const Apply = lazy(() => import("./pages/Apply"));

function App() {

  
    useEffect(() => {
      // Disable Right Click, Text Selection, and Copy
      const disableCopy = (e) => e.preventDefault();
      const disableContextMenu = (e) => e.preventDefault();
      const disableSelect = () => document.body.style.userSelect = "none";
  
      document.addEventListener("copy", disableCopy);
      document.addEventListener("contextmenu", disableContextMenu);
      document.addEventListener("selectstart", disableSelect);
  
      // ✅ Tawk.to Chat Integration (load once)
      if (!window.tawkLoaded) {
        window.Tawk_API = window.Tawk_API || {};
  
        const Tawk_LoadStart = new Date();
        const s1 = document.createElement("script");
        s1.async = true;
        s1.src = "https://embed.tawk.to/5e85bf9635bcbb0c9aacf880/default";
        s1.charset = "UTF-8";
        s1.setAttribute("crossorigin", "*");
        s1.onload = () => console.log("✅ Tawk.to loaded");
        s1.onerror = () => console.error("❌ Tawk.to script failed to load");
        document.body.appendChild(s1);
  
        window.tawkLoaded = true;
      }
  
      return () => {
        document.removeEventListener("copy", disableCopy);
        document.removeEventListener("contextmenu", disableContextMenu);
        document.removeEventListener("selectstart", disableSelect);
        document.body.style.userSelect = ""; // Reset selection when unmounting
      };
    }, [location.pathname]);


  return ( 
    <Router>
      <ScrollToTop />
      <Navbar />
      {/* Suspense prevents content flickering */}
      <Suspense fallback={
        <div className="h-screen flex items-center justify-center">
          <img 
            src="https://i.gifer.com/ZKZg.gif" 
            alt="Loading..." 
            className="w-16 h-16" 
          />
        </div>
      }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admission-procedure-for-study-in-russia" element={<Admission />} />
          <Route path="/university/:id" element={<UniversityDetailPage />} />
          <Route path="/tech-university/:id" element={<TechUniversityDetailPage />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/Contact-us" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;