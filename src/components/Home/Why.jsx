import React from 'react';
import cap from "../../assets/cap.png";

const WhyStudyInRussia = () => {
  return (
    <div className="container mx-auto py-8 lg:py-10 px-4 lg:px-24">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col lg:flex-row p-8 bg-white rounded-lg gap-8">
          {/* Left Section */}
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              <div className="flex items-center lg:w-80 lg:h-36 p-4 border border-2 shadow-lg gap-4">
                <div className="p-3 bg-blue-100 border border-2 shadow-lg rounded-full">
                  <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.588 2H7.412A2.413 2.413 0 005 4.412v15.176A2.412 2.412 0 007.412 22h9.176A2.412 2.412 0 0019 19.588V4.412A2.413 2.413 0 0016.588 2z" />
                  </svg>
                </div>
                <p className="text-lg font-medium">Internationally recognized higher education system</p>
              </div>

              <div className="flex items-center lg:ml-24 lg:w-80 lg:h-36 p-4 border border-2 shadow-lg gap-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16V8m0-2a5.978 5.978 0 014-1.673A5.978 5.978 0 0116 6v2a5.978 5.978 0 014 1.673 5.978 5.978 0 01-4 9.654v2a5.978 5.978 0 01-4-1.673 5.978 5.978 0 01-4 1.673v-2a5.978 5.978 0 01-4-1.673 5.978 5.978 0 014-9.654V6A5.978 5.978 0 0116 4.326m-8-2A7.979 7.979 0 014 12v0m0 0a7.979 7.979 0 018-4.326v8.652" />
                  </svg>
                </div>
                <p className="text-xl font-medium">Opportunity to explore a rich culture and heritage</p>
              </div>

              <div className="flex items-center lg:w-80 lg:h-36 p-4 border border-2 shadow-lg gap-4">
                <div className="p-3 bg-blue-100 border border-2 shadow-lg rounded-full">
                  <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m0 0H9m0 0l-3-3m3 3l3 3M21 12a9.003 9.003 0 00-8-8.982 9.001 9.001 0 00-8 8.98v1a9.002 9.002 0 008 8.983 9.002 9.002 0 008-8.984z" />
                  </svg>
                </div>
                <p className="text-xl font-medium">Quality healthcare and affordable living standards</p>
              </div>

              <div className="flex items-center lg:ml-24 lg:w-80 lg:h-36 p-4 border border-2 shadow-lg gap-4">
                <div className="p-3 bg-blue-100 border border-2 shadow-lg rounded-full">
                  <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12v4m-8-4v4M7 16l10-4v4M21 6a2 2 0 11-4 0 2 2 0 114 0z" />
                  </svg>
                </div>
                <p className="text-xl font-medium">Diverse career opportunities with a global network</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 lg:ml-64 flex justify-center items-center bg-blue-50 rounded-lg p-4 min-h-full">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">Why Study in Russia?</h2>
              <img
                className="lg:w-64 lg:h-64 mx-auto transform transition-transform duration-300 hover:rotate-12"
                src={cap}
                alt="Graduation Cap"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyStudyInRussia;
