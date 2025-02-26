import React from "react";
import { Helmet } from "react-helmet";  // Import the Helmet component
import Hero from "../components/Home/Hero";
import Intro from "../components/Home/Intro";
import FAQ from "../components/Home/FAQ";
import About from "../components/Home/About";
import Slider from "../components/Home/Slider";
import Videos from "../components/Home/UniversityVideos";
import Testimonials from "../components/Home/Testimonials";

const Home = () => {
    return (
        <>
          <Helmet>
            <title>Study in Russia | Top Russian Universities for Indian Students 2025</title>
            <meta name="description" content="Explore top universities in Russia for Indian students. Get admission details, eligibility, and scholarships for studying MBBS, Engineering, and other courses in Russia." />
            <meta name="keywords" content="Study in Russia, MBBS in Russia, Russian universities, admission in Russia, Indian students, study abroad, scholarships, 2025" />
            <meta name="author" content="StudyinRussia.in" />
            <link rel="canonical" href="https://www.studyinrussia.in/" />

            {/* Open Graph Meta Tags */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Study in Russia | Top Russian Universities for Indian Students 2025" />
            <meta property="og:description" content="Find the best Russian universities for Indian students. Learn about MBBS, Engineering, and other programs, admission requirements, and scholarships." />
            <meta property="og:image" content="/logo.png?v=2" />
            <meta property="og:url" content="https://www.studyinrussia.in/" />

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Study in Russia | Top Russian Universities for Indian Students 2025" />
            <meta name="twitter:description" content="Explore top universities in Russia, including MBBS, Engineering, and more for Indian students. Admission details and scholarships available." />
            <meta name="twitter:image" content="/logo.png?v=2" />
          </Helmet>
          <Hero />
          <Intro />
          <About />
          <Slider />
          <Testimonials />
          <FAQ />
          <Videos />
        </>
    );
}

export default Home;
