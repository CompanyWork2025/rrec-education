import React from 'react';
import { Link } from 'react-router-dom';
import icon from "../../assets/rostov.png";

// Replace these with the URLs of your icons
const icon1 = icon;  // Replace with the actual URL
const icon2 = 'https://i0.wp.com/russian-resources.com/wp-content/uploads/2022/06/logo.png?fit=800%2C800&ssl=1';  // Replace with the actual URL
const icon3 = 'https://upload.wikimedia.org/wikipedia/en/1/14/KSMU_logo.png';  // Replace with the actual URL
const icon4 = 'https://greenbridgework.kaznu.kz/wp-content/uploads/2016/02/emblema_rudn.png';  // Replace with the actual URL
const icon5 = 'https://bashgmu.ru/upload/medialibrary/e27/e27505b5196458100ec1b6c1e9cbd476.png';  // Replace with the actual URL
const icon6 = 'https://upload.wikimedia.org/wikipedia/en/f/f6/Kursk_State_Medical_University_logo.png';  // Replace with the actual URL

const Hero = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-gray-100 to-white md:px-20 -mt-10 md:mt-0 px-4 md:p-10 lg:min-h-screen">
      <div className="flex space-x-6">
        {/* Left Column Icons (Visible only on md and larger screens) */}
        <div className="hidden lg:flex flex-col md:-mt-96 lg:-mt-48 space-y-20">
          <IconButton src={icon6} />
          <IconButton src={icon5} className="transform -translate-x-6 md:transform md:-translate-x-14" />
          <IconButton src={icon4} />
        </div>

        {/* Center Content */}
        <div className="flex flex-col mb-64 md:mb-80 lg:mb-0 lg:-mt-48 items-center text-center mx-5">
          <h1 className="hidden lg:block text-3xl md:text-7xl md:-mt-96 lg:-mt-2 lg:text-7xl font-bold mb-2 text-gray-800">
            Empowering Dreams, Shaping Futures: <br /> Study in Russia with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">RRREducation</span>
          </h1>
          <h1 className="lg:hidden text-[26px] md:text-5xl font-bold text-gray-800 md:mt-4 mt-16">
            Empowering Dreams, Shaping Futures: <br /> Study in Russia with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">RRREducation</span>
          </h1>

          {/* Mobile View: Icons in a Row */}
          <div className="flex lg:hidden flex-row justify-center space-x-6 md:space-x-16 -ml-6 mt-10">
            <IconButton src={icon1} />
            <IconButton src={icon2} />
            <IconButton src={icon3} />
            <IconButton src={icon4} />
            <IconButton src={icon5} />
            <IconButton src={icon6} />
          </div>

          <p className="text-[#1F1F1F] md:text-xl font-semibold lg:text-2xl mt-8 max-w-6xl">
            RRREducation provides comprehensive guidance for students aspiring to study in Russia, offering expert advice and support throughout the admissions process and beyond.
          </p>
          {/* Horizontal Line with Button */}
          <div className="flex flex-col md:flex-row items-center w-full mt-4">
            {/* Left Line */}
            <div className="hidden md:block flex-grow h-[1px] bg-gray-400" />
            {/* Button */}
            <div className="flex justify-center w-full md:w-auto">
              <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <button className="bg-white md:mt-0 mb-8 md:mb-0 font-bold text-sm md:text-2xl border border-gray-400 text-blue-400 py-2 px-6 md:py-3 md:px-8 mx-4 rounded-xl shadow-md hover:bg-gradient-to-r from-blue-400 to-purple-600  hover:text-white">
                  Get Started with RRREducation!
                </button>
              </Link>
            </div>
            {/* Right Line */}
            <div className="hidden md:block flex-grow h-[1px] bg-gray-400" />
          </div>
        </div>

        {/* Right Column Icons (Visible only on md and larger screens) */}
        <div className="hidden lg:flex flex-col md:-mt-96 lg:-mt-48 space-y-20">
          <IconButton src={icon3} />
          <IconButton src={icon2} className="transform translate-x-6 md:transform md:translate-x-14" />
          <IconButton src={icon1} />
        </div>
      </div>
    </div>
  );
};

const IconButton = ({ src, className }) => {
  return (
    <div
      className={`bg-white p-2 md:p-2 lg:p-2 rounded-lg lg:rounded-3xl flex items-center justify-center text-3xl text-purple-600 ${className}`}
      style={{
        boxShadow: '0px 0px 5px 8px rgba(68, 0, 108, 0.2)', // Custom shadow with #44006C (rgba)
      }}
    >
      <img src={src} alt="Icon" className="w-28 md:w-14 md:h-8 lg:w-12 lg:h-12" /> {/* Reduced image size */}
    </div>
  );
};

export default Hero;
