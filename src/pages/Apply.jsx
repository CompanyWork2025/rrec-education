import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import arrow from "../assets/arrow.gif";

const Apply = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    whatsappNumber: '',
    twelfthMarks: '',
    neetMarks: '',
    university: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
    console.log('Form submitted:', formData);
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on component mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Add slight delay for smoother effect

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Apply for admission to top Russian universities with our simple form. Submit your personal details, academic records, and select your desired university easily." />
        <meta name="keywords" content="Apply, Admission, Russian Universities, Rostov, Kazan, Crimea, Medical University, NEET, 12th Marks, Apply Now, University Application" />
        <meta name="author" content="Your Website Name" />
        <meta property="og:title" content="Apply Now - Admission to Russian Universities" />
        <meta property="og:description" content="Submit your application for Russian universities like Rostov, Kazan, and Crimea. Fill out the form with your details and apply now!" />
        <meta property="og:image" content="URL_TO_YOUR_IMAGE" />
        <meta property="og:url" content="YOUR_PAGE_URL" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Apply Now - Admission to Russian Universities" />
        <meta name="twitter:description" content="Complete the application process for Russian universities with ease. Choose your university and submit your documents online." />
        <meta name="twitter:image" content="URL_TO_YOUR_IMAGE" />
        <title>Apply Now - Admission to Russian Universities</title>
      </Helmet>
      {/* Banner */}
      <div className="relative w-full lg:h-[300px] flex flex-col items-center justify-center bg-gray-900 text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://gifdb.com/images/high/cinematic-night-city-shot-01tjsobv8vxh3g2j.gif"
            alt="Hero Banner"
            className="w-full h-full object-cover opacity-50"
            loading="lazy"
          />
        </div>
        {/* Hero Content */}
        <div
          className={`flex flex-col items-center mt-24 z-10 transition-all duration-1000 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-2xl md:text-5xl font-bold drop-shadow-lg">
            APPLY NOW
          </h1>
          <div className="-mt-6 md:-mt-16">
            <img
              src={arrow}
              alt="Animated Gif"
              className="w-32 md:w-56 mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Layout with GIF on left and form on the right */}
      <div className="flex flex-col lg:flex-row flex-grow justify-between items-center py-6 px-5 bg-gradient-to-r from-blue-600 to-teal-400">
        {/* Left Side: GIF */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/013/750/262/small_2x/businessman-in-white-shirt-holding-a-cell-phone-while-pointing-to-the-side-choosing-gesture-3d-illustration-of-businessman-using-phone-png.png"
            alt="Animated GIF"
            className="hidden lg:block w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Form */}
        <div className="w-full sm:w-2/3 lg:w-1/2 bg-white p-8 sm:p-12 shadow-2xl rounded-xl border border-gray-300">
          <h2 className="text-xl md:text-2xl text-green-500 font-semibold text-center mb-8 text-gray-800">Apply Now!</h2>
          <form onSubmit={handleSubmit}>
            {/* First Name and Last Name (Side by side) */}
            <div className="flex flex-col sm:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label htmlFor="firstName" className="block text-md font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-2 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="lastName" className="block text-md font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-2 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                  required
                />
              </div>
            </div>

            {/* Phone Number and WhatsApp Number (Side by side) */}
            <div className="flex flex-col sm:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label htmlFor="phoneNumber" className="block text-md font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full p-2 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="whatsappNumber" className="block text-md font-medium text-gray-700">WhatsApp Number</label>
                <input
                  type="tel"
                  id="whatsappNumber"
                  name="whatsappNumber"
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                  className="w-full p-2 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                  required
                />
              </div>
            </div>

            {/* 12th Marks and NEET Marks (Side by side) */}
            <div className="flex flex-col sm:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label htmlFor="twelfthMarks" className="block text-md font-medium text-gray-700">12th Marks (%)</label>
                <input
                  type="number"
                  id="twelfthMarks"
                  name="twelfthMarks"
                  value={formData.twelfthMarks}
                  onChange={handleChange}
                  className="w-full p-2 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="neetMarks" className="block text-md font-medium text-gray-700">NEET Marks</label>
                <input
                  type="number"
                  id="neetMarks"
                  name="neetMarks"
                  value={formData.neetMarks}
                  onChange={handleChange}
                  className="w-full p-2 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                  required
                />
              </div>
            </div>

            {/* University Dropdown */}
            <div className="mb-6">
              <label htmlFor="university" className="block text-md font-medium text-gray-700">Select University</label>
              <select
                id="university"
                name="university"
                value={formData.university}
                onChange={handleChange}
                className="w-full p-2 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                required
              >
                <option value="">Select a university</option>
                <option value="rostov">Rostov State Medical University</option>
                <option value="kazan">Kazan State Medical University</option>
                <option value="northwestern">North-Western State Medical University</option>
                <option value="kazan_federal">Kazan Federal University</option>
                <option value="petrozavodsk">Petrozavodsk State University</option>
                <option value="yaroslavl">Yaroslavl State Medical University</option>
                <option value="izhevsk">Izhevsk State Medical Academy</option>
                <option value="ruden">Peoples’ Friendship University</option>
                <option value="crimea_federal">Crimea Federal University</option>
                <option value="southern_federal">Southern Federal University</option>
                <option value="don_technical">Don State Technical University</option>
                <option value="rostov_economics">Rostov State University Of Economics</option>
                <option value="ukhta">Ukhta State Technical University</option>
                <option value="udmurt">Udmurt State University</option>
              </select>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-md font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full p-4 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white font-semibold rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:from-indigo-600 hover:via-purple-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Submit
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Apply;
