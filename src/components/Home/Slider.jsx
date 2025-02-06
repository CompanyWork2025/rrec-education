import React, { useState, useEffect } from 'react';

const Slider = () => {
  const slides = [
    {
      title: "ROSTOV STATE UNIVERSITY",
      content: "Rostov State University is one of Russia's leading educational institutions, offering a wide range of programs in fields like engineering, humanities, medicine, and natural sciences. The university is known for its strong academic reputation and international collaborations.",
    },
    {
      title: "KAZAN FEDERAL UNIVERSITY",
      content: "Kazan Federal University, one of the oldest universities in Russia, boasts a rich history of academic excellence. It offers diverse programs, from engineering to arts, and is known for its research contributions and innovation in various fields.",
    },
    {
      title: "CRIMEA FEDERAL UNIVERSITY",
      content: "Crimea Federal University provides a wide spectrum of educational opportunities and is known for its unique location, offering international students a mix of cultural and academic experiences. It has strong programs in science, technology, and the arts.",
    },
    {
      title: "VOLGOGRAD STATE UNIVERSITY",
      content: "Volgograd State University is a prominent institution that offers a variety of programs, with a focus on engineering, technology, and international studies. The university has a rich history and a growing presence in international academia.",
    },
    {
      title: "INTERNATIONAL STUDENT EXPERIENCE",
      content: "Russian universities, including Rostov, Kazan, Crimea, and Volgograd, provide a rich cultural and academic environment for international students. With world-class research facilities and diverse student populations, these universities offer a unique global perspective.",
    },
    {
      title: "RESEARCH & INNOVATION",
      content: "Russian universities are at the forefront of research and innovation in various fields. With cutting-edge labs, strong academic programs, and international partnerships, students are exposed to a wealth of knowledge and opportunities for advancement.",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Automatic sliding logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000); // Change slides every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  return (
    <div className="flex flex-col items-center py-12 -mt-16 md:-mt-8 px-8 lg:px-4 bg-white">
      <h2 className="text-2xl md:text-6xl font-bold mb-4 md:mb-8 text-black text-center">WHY <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600'>CHOOSE</span> RUSSIAN UNIVERSITIES?</h2>
      <p className="text-center lg:text-lg text-black max-w-6xl mb-4 md:mb-8">
        Russian universities, including Rostov, Kazan, Crimea, and Volgograd, provide world-class education, cutting-edge research, and a rich cultural experience for international students.
      </p>

      <div className="relative text-center bg-gradient-to-r from-blue-400 to-purple-600 text-white rounded-3xl py-12 md:py-24 px-6 md:px-12 lg:px-10 max-w-[1270px] mx-auto overflow-hidden">
        {/* Left Arrow */}
        <div
          className="absolute top-0 left-0 h-full w-8 bg-white"
          style={{ clipPath: "polygon(0 10%, 100% 20%, 0 30%)" }}
        ></div>

        {/* Right Arrow */}
        <div
          className="absolute top-0 right-0 h-full w-8 bg-white"
          style={{ clipPath: "polygon(100% 70%, 0 80%, 100% 90%)" }}
        ></div>

        <h3 className="md:text-3xl font-bold mb-4 -mt-6">{slides[activeSlide].title}</h3>
        <p className="md:text-xl leading-relaxed px-4 md:px-8">
          {slides[activeSlide].content}
        </p>
      </div>

      {/* Slider Navigation and Dots */}
      <div className="flex items-center justify-center space-x-4 mt-6">
        {/* Left Arrow */}
        <div onClick={handlePrevSlide} className="cursor-pointer">
          <svg width="80" height="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-black">
            <path d="M60 20H10M10 20L20 10M10 20L20 30" />
          </svg>
        </div>

        {/* Slider Dots */}
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${index === activeSlide ? 'bg-gradient-to-r from-blue-400 to-purple-600' : 'bg-gray-200'}`}
              onClick={() => setActiveSlide(index)}
            ></span>
          ))}
        </div>

        {/* Right Arrow */}
        <div onClick={handleNextSlide} className="cursor-pointer">
          <svg width="80" height="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-black">
            <path d="M20 20H70M70 20L60 10M70 20L60 30" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Slider;
