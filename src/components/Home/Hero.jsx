import React, { useEffect, useState } from "react";
import arrow from "../../assets/arrow.gif";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on component mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Add slight delay for smoother effect

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full lg:h-[650px] flex flex-col items-center justify-center bg-gray-900 text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://gifdb.com/images/high/cinematic-night-city-shot-01tjsobv8vxh3g2j.gif"
          alt="Hero Banner"
          className="w-full h-full object-cover opacity-50"
          loading="lazy" // This delays image loading
        />
      </div>

      {/* Hero Content */}
      <div
        className={`flex flex-col items-center mt-14 z-10 transition-all duration-1000 ease-in-out ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-2xl md:text-6xl font-bold drop-shadow-lg">
          STUDY MBBS IN RUSSIA
        </h1>
        <h1 className="text-2xl md:text-6xl font-bold drop-shadow-4xl mt-2">
          FOR INDIAN STUDENTS
        </h1>

        {/* GIF Below Text */}
        <div className="-mt-6 md:-mt-16">
          <img
            src={arrow}
            alt="Animated Gif"
            className="w-32 md:w-64 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
