import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import arrow from "../assets/arrow.gif";

const Admission = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      // Trigger animation on component mount
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100); // Add slight delay for smoother effect
  
      return () => clearTimeout(timer);
    }, []);

  return (
    <>
    <Helmet>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  {/* SEO Meta Tags */}
  <meta name="description" content="Explore the step-by-step admission procedure for Russian universities. Find information about documents, visa requirements, and other essentials." />
  <meta name="keywords" content="Admission Procedure, Russian Universities, Study in Russia, Step-by-Step Admission, MBBS in Russia" />
  <meta name="author" content="Study in Russia" />

  {/* Updated Favicon and Logo */}
  <link rel="icon" type="image/png" href="/images/logo.png" />
  <link rel="shortcut icon" href="/images/logo.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/images/logo.png" />

  {/* Open Graph Meta Tags (For Social Media Sharing) */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Admission Procedure for Russian Universities | Study in Russia" />
  <meta property="og:description" content="Explore the step-by-step guide for the admission process to Russian universities. Learn about the necessary documents, visa application, and entry procedures." />
  <meta property="og:image" content="/images/logo.png" />
  <meta property="og:url" content="http://studyinrussia.in/admission" />

  {/* Twitter Card Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Admission Procedure for Russian Universities | Study in Russia" />
  <meta name="twitter:description" content="Get all details on how to apply to Russian universities. Step-by-step admission guide, including documents, visa, and entry requirements." />
  <meta name="twitter:image" content="/images/logo.png" />

  {/* Website Title */}
  <title>Admission Procedure for Russian Universities | Study in Russia</title>
</Helmet>

      <div className="relative w-full lg:h-[350px] flex flex-col items-center justify-center bg-gray-900 text-white">
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
          className={`flex flex-col items-center mt-24 z-10 transition-all duration-1000 ease-in-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-2xl md:text-5xl font-bold drop-shadow-lg">
            ADMISSION PROCEDURE
          </h1>
          {/* GIF Below Text */}
          <div className="-mt-6 md:-mt-16">
            <img
              src={arrow}
              alt="Animated Gif"
              className="w-32 md:w-56 mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-12 bg-gray-50">
        {/* Top Banner */}
        <div className="text-center mb-12">
          <h1 className="text-2xl lg:text-5xl font-extrabold text-blue-800 mb-2">Admission Procedure for Russian Universities</h1>
          <h3 className="text-lg lg:text-xl font-medium text-gray-600">A Step-by-Step Guide to Your Study Journey in Russia</h3>
        </div>

        {/* Step 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8 transition duration-300 transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Step 1: Submission of Documents</h2>
          <ul className="list-inside space-y-3 text-gray-700">
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z" />
              </svg>
              Application form (provided by our representative)
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z" />
              </svg>
              Copy of your passport (photo, date of birth, and expiry date)
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z" />
              </svg>
              Certificate of complete higher secondary education (with academic transcript for undergraduates) / higher education degree (with transcript for postgraduates)
            </li>
          </ul>
          <p className="mt-4 text-yellow-600 font-semibold">
            <strong>Important:</strong> Application acceptance is limited by a quota, so apply early to secure your place.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8 transition duration-300 transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Step 2: Issuance of Student Visa</h2>
          <ul className="list-inside space-y-3 text-gray-700">
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z" />
              </svg>
              Passport
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z" />
              </svg>
              Completed application form (issued by the Russian Embassy)
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z" />
              </svg>
              3 passport-sized photos (3.5×4.5mm)
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z" />
              </svg>
              Invitation letter for study (original)
            </li>
          </ul>
        </div>

        {/* Step 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8 transition duration-300 transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Step 3: Entry to Russia</h2>
          <ul className="list-inside space-y-3 text-gray-700">
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z" />
              </svg>
              Passport (valid for at least 2 years)
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z" />
              </svg>
              Student entry visa
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z" />
              </svg>
              Immigration card (provided during the flight or at the airport)
            </li>
          </ul>
        </div>

        {/* Important Note */}
        <div className="bg-yellow-100 p-6 rounded-lg border-l-4 border-yellow-500 mb-8 shadow-lg">
          <p className="text-gray-700 font-medium">
            <strong>Important:</strong> All students are personally greeted at international airports by representatives from <a href="https://www.rrec.com.ru/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">RREC (Study in Russia)</a> with a special power of attorney from the university. Be sure to follow the official rules, as entry to Russia could be refused without meeting a university representative.
          </p>
        </div>
      </div>

      <div className="relative bg-cover bg-center h-80 md:h-80" style={{ backgroundImage: "url('https://t4.ftcdn.net/jpg/04/92/06/53/360_F_492065380_eSlHdkdNBy6ArNkk5gV0Lme1qhvTosSI.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl lg:text-4xl font-extrabold leading-tight">A GATEWAY TO RUSSIA - RREC</h2>
        <p className="mt-4 text-xl">Reliable Russian Educational Consultants</p>
        
        <div className="mt-8 space-y-4">
          <p className="text-lg">Email: <a href="mailto:contact@rrec.com.ru" className="text-indigo-400 hover:underline">contact@rrec.com.ru</a></p>
          <p className="text-lg">Email: <a href="mailto:rrec.educonsultants@gmail.com" className="text-indigo-400 hover:underline">rrec.educonsultants@gmail.com</a></p>
          <p className="text-lg">Students or parents can write to us on WhatsApp: <span className="text-indigo-400">+79515174507 (24*7)</span></p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Admission;
