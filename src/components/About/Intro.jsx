import React from "react";

const Intro = () => {
  return (
    <section className="flex flex-col -mt-80 md:-mt-96 lg:-mt-64 md:flex-row items-stretch p-6 md:p-20 gap-8 max-w-auto mx-auto">
      {/* Left Image Section */}
      <div className="hidden lg:block w-full md:w-1/2 h-full">
        <img
          src="https://png.pngtree.com/png-clipart/20230221/ourmid/pngtree-3d-girl-character-what-are-you-doing-png-image_6611851.png"
          alt="Students studying abroad"
          className="rounded-lg w-full h-full object-cover"
        />
      </div>

      {/* Right Text Section */}
      <div className="w-full mt-12 md:mt-0 md:w-full lg:w-1/2 text-gray-800 space-y-6 h-full flex flex-col justify-between">
        {/* Title Section */}
        <div className="flex items-center gap-6">
          <div className="flex-1">
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">
              WHO ARE <span className="text-blue-400">WE?</span>
            </h2>
            <p className="text-sm lg:text-[20px] text-justify mt-2 leading-relaxed">
              At <span className="font-bold text-blue-400">RREC Education</span>, we are dedicated to guiding students in their journey to study at top universities in <span className="font-bold">Russia</span>. With our expertise in university admissions, visa processing, and student support, we make studying abroad a seamless and rewarding experience.
            </p>
          </div>
          {/* Image for Title Section (Only on Medium Screens) */}
          <img
            src=""
            alt="Guidance and support"
            className="hidden md:block lg:hidden w-1/3 rounded-lg"
          />
        </div>

        {/* Mission Section */}
        <div className="flex items-center gap-6">
          <div className="flex-1">
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">
              OUR <span className="text-blue-400">MISSION</span>
            </h2>
            <p className="text-sm text-justify lg:text-[20px] mt-2 leading-relaxed">
              Our mission is to empower students with the right information, resources, and support to pursue quality education in Russia. We are committed to helping students make informed choices and providing assistance at every step—from application to arrival.
            </p>
          </div>
          {/* Image for Mission Section (Only on Medium Screens) */}
          <img
            src=""
            alt="Mission Illustration"
            className="hidden md:block lg:hidden w-1/3 rounded-lg"
          />
        </div>

        {/* Our Journey Section */}
        <div className="flex items-center gap-6">
          <div className="flex-1">
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">
              OUR <span className="text-blue-400">JOURNEY</span>
            </h2>
            <p className="text-sm text-justify lg:text-[20px] mt-2 leading-relaxed">
              RREC Education started with a vision to simplify the process of studying in Russia. Over the years, we have helped countless students achieve their dream of obtaining a world-class education in prestigious Russian universities. Our team continues to expand, ensuring every student receives personalized guidance and support.
            </p>
          </div>
          {/* Image for Journey Section (Only on Medium Screens) */}
          <img
            src=""
            alt="Journey Illustration"
            className="hidden md:block lg:hidden w-1/3 rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
