import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/Scroll";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Footer from "./components/Footer";
import Admission from "./pages/Admission";
import Chatbot from './components/Chatbot'; // Import the Chatbot
import UniversityDetailPage from "./pages/UniversityDetailPage";
import TechUniversityDetailPage from "./pages/TechnicalUniversity";

// Lazy Load Pages to Improve Performance
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const Apply = lazy(() => import("./pages/Apply"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      {/* Suspense prevents content flickering */}
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admission-procedure" element={<Admission />} />
          <Route path="/university/:id" element={<UniversityDetailPage />} />
          <Route path="/tech-university/:id" element={<TechUniversityDetailPage />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
      <Chatbot /> {/* Ensure Chatbot does not cause layout shifts */}
    </Router>
  );
}

export default App;
