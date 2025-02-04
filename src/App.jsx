import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/Scroll";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from './components/Chatbot'; // Import the Chatbot

// Lazy Load Pages to Improve Performance
const Home = lazy(() => import("./pages/Home"));
const University = lazy(() => import("./pages/University"));
const News = lazy(() => import("./pages/News"));
const Apply = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      {/* Suspense prevents content flickering */}
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/universities" element={<University />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Suspense>
      <Footer />
      <Chatbot /> {/* Ensure Chatbot does not cause layout shifts */}
    </Router>
  );
}

export default App;
