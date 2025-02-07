import React from "react";

const UniversityVideos = () => {
  const videos = [
    "https://www.youtube.com/embed/duEA_1X0T9M",
    "https://www.youtube.com/embed/0IIfsEuSRxY",
    "https://www.youtube.com/embed/P5U28XXiSIc",
    "https://www.youtube.com/embed/VwfwWaD4r_Y",
  ];

  return (
    <div className="max-w-7xl mx-auto -mt-8 py-12 px-4 sm:px-6 lg:px-0">
      <h2 className="text-3xl md:text-4xl md:text-center lg:text-left lg:text-5xl font-expressa lg:-ml-20 font-bold text-center mb-12 text-gray-800 lg:px-20">
        Our University <span className="text-blue-500">Videos</span>
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        {videos.map((video, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/4">
            <iframe
              className="w-full h-48 md:h-64 rounded-lg shadow-lg"
              src={video}
              title={`University Video ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversityVideos;