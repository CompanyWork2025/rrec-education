import React, { useState, useEffect, useRef } from "react";
import gifImage from "../../assets/arrow.gif"; // Import your GIF file

const Hero = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const [bgColor, setBgColor] = useState("rgba(0, 0, 0, 0.35)");
  const resizeTimeout = useRef(null); // Prevents excessive resize handling

  useEffect(() => {
    const handleResize = () => {
      clearTimeout(resizeTimeout.current);
      resizeTimeout.current = setTimeout(() => {
        setIsLargeScreen(window.innerWidth >= 1024);
      }, 100); // Debounce resize event
    };

    const handleScroll = () => {
      requestAnimationFrame(() => {
        setBgColor(window.scrollY > 50 ? "rgba(0, 0, 0, 0.55)" : "rgba(0, 0, 0, 0.35)");
      });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden flex flex-col items-center justify-center text-center px-4"
      style={{ minHeight: isLargeScreen ? "40vh" : "30vh" }}
    >
      {/* Background Layer */}
      <div
        className="absolute inset-0 transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `url(https://i.pinimg.com/originals/e7/50/38/e75038ae16be9d330cb1f3563833647e.gif)`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundColor: bgColor,
          opacity: 1.0,
          filter: "brightness(50%)",
          transform: "scale(1.01)", // Subtle scale to avoid jerky movements
        }}
      ></div>

      {/* Stylish Text with Effects */}
      <h1
        className="text-[25px] md:text-[80px] lg:text-[70px] mt-20 lg:mt-48 max-w-4xl font-bold text-white leading-tight z-10"
        style={{
          background: "white",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)",
          fontFamily: "'Bebas Neue', sans-serif",
        }}
      >
        STUDY MBBS IN RUSSIA <br /> FOR INDIAN STUDENTS
      </h1>

      {/* GIF Below the Text */}
      <div className="flex justify-center -mt-10 lg:-mt-24 animate__animated animate__fadeInUp animate__delay-0s z-10">
        <img src={gifImage} alt="Animated GIF" className="w-40 md:w-60 lg:w-72" />
      </div>

      {/* Spacer */}
      <div className="h-[5vh] md:h-[55vh] lg:h-[100px]"></div>
    </div>
  );
};

export default Hero;
