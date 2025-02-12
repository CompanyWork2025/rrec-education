import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";
import { Helmet } from 'react-helmet';
import arrow from "../assets/arrow.gif";
import axios from 'axios';

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send data to Formspree endpoint
      const response = await axios.post('https://formspree.io/f/xovjlwdy', formData, {
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.status === 200) {
        alert('Form submitted successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          phoneNumber: '',
          whatsappNumber: '',
          twelfthMarks: '',
          neetMarks: '',
          university: '',
          message: ''
        });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form: ', error);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  const [universityType, setUniversityType] = useState("");

  const medicalUniversities = [
    "Rostov State Medical University",
    "Ural State Medical University",
    "Kemerovo State Medical University",
    "North-Western State Medical University",
    "Crimea Federal University - Medical Faculty",
    "Kursk State Medical University",
    "Bashkir State Medical University",
    "Kazan State Medical University",
    "Maikop State Technological University - Medical Faculty",
    "Volgograd State Medical University",
    "Perm State Medical University",
    "Orenburg State Medical University",
    "Tver State Medical University",
    "Saint Petersburg State Pediatric Medical University",
    "Kazan Federal University",
    "Synergy University - Medical Faculty"
  ];

  const technicalUniversities = [
    "Rostov State Transport University",
    "Volgograd State Technical University",
    "Saint Petersburg Polytechnical University",
    "Synergy University Moscow",
    "University of Science and Technology MISiS",
    "Ural Federal University",
    "Lomonosov Moscow State University",
    "Crimea Federal University",
    "Moscow State Pedagogical University (MPGU)",
    "The Pushkin State Russian Language Institute Moscow",
    "Russian State University for the Humanities Moscow",
    "Don State Technical University",
    "Southern Federal University",
    "Rostov State University of Economics, Russia",
    "Ukhta State Technical University",
    "Udmurt State University",
  ];


  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
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
        <meta property="og:image" content="/logo.png?v=2" />
        <meta property="og:url" content="YOUR_PAGE_URL" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Apply Now - Admission to Russian Universities" />
        <meta name="twitter:description" content="Complete the application process for Russian universities with ease. Choose your university and submit your documents online." />
        <meta name="twitter:image" content="/logo.png?v=2" />
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
            src="https://file.aiquickdraw.com/imgcompressed/img/compressed_bf739d26a1972a35de86e4fb5e6b4b47.webp"
            alt="Animated GIF"
            className="hidden lg:block w-full h-full object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 bg-white p-8 sm:p-12 shadow-2xl rounded-2xl border border-gray-200 backdrop-blur-xl bg-opacity-70">
          <div className="flex justify-center mb-8">
            <img src={logo} alt="University Logo" className="h-14 md:h-20 drop-shadow-xl" />
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Name & Last Name */}
            <div className="flex flex-col sm:flex-row gap-6">
              <input type="text" id="firstName" name="firstName" placeholder="First Name"
                value={formData.firstName} onChange={handleChange}
                className="flex-1 bg-white/80 border border-gray-300 p-3 rounded-lg shadow-inner focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300"
                required />
              <input type="text" id="lastName" name="lastName" placeholder="Last Name"
                value={formData.lastName} onChange={handleChange}
                className="flex-1 bg-white/80 border border-gray-300 p-3 rounded-lg shadow-inner focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300"
                required />
            </div>

            {/* Phone & WhatsApp */}
            <div className="flex flex-col sm:flex-row gap-6">
              <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Phone Number"
                value={formData.phoneNumber} onChange={handleChange}
                className="flex-1 bg-white/80 border border-gray-300 p-3 rounded-lg shadow-inner focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300"
                required />
              <input type="tel" id="whatsappNumber" name="whatsappNumber" placeholder="WhatsApp Number"
                value={formData.whatsappNumber} onChange={handleChange}
                className="flex-1 bg-white/80 border border-gray-300 p-3 rounded-lg shadow-inner focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300"
                required />
            </div>

            {/* 12th Marks & NEET Marks */}
            <div className="flex flex-col sm:flex-row gap-6">
              <input type="number" id="twelfthMarks" name="twelfthMarks" placeholder="12th Marks (%)"
                value={formData.twelfthMarks} onChange={handleChange}
                className="flex-1 bg-white/80 border border-gray-300 p-3 rounded-lg shadow-inner focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300"
                required />
              <input type="number" id="neetMarks" name="neetMarks" placeholder="NEET Marks"
                value={formData.neetMarks} onChange={handleChange}
                className="flex-1 bg-white/80 border border-gray-300 p-3 rounded-lg shadow-inner focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300"
                required />
            </div>

            {/* University Selection */}
            <div className="mb-6">
              <div className="flex flex-wrap justify-center gap-4">
                <button type="button" onClick={() => setUniversityType("medical")}
                  className={`w-full sm:w-auto px-6 py-3 text-sm sm:text-base rounded-xl shadow-lg transition-all duration-300 transform ${universityType === "medical"
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white scale-105"
                      : "bg-gray-300 text-gray-800"
                    }`}>
                  Medical University
                </button>
                <button type="button" onClick={() => setUniversityType("technical")}
                  className={`w-full sm:w-auto px-6 py-3 text-sm sm:text-base rounded-xl shadow-lg transition-all duration-300 transform ${universityType === "technical"
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white scale-105"
                      : "bg-gray-300 text-gray-800"
                    }`}>
                  Technical University
                </button>
              </div>


              {universityType && (
                <select id="university" name="university" value={formData.university} onChange={handleChange}
                  className="w-full p-3 mt-4 border border-gray-300 rounded-lg bg-white/80 shadow-inner focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300">
                  <option value="" disabled>Select a University</option>
                  {(universityType === "medical" ? medicalUniversities : technicalUniversities).map((university, index) => (
                    <option key={index} value={university}>{university}</option>
                  ))}
                </select>
              )}
            </div>

            {/* Message */}
            <textarea id="message" name="message" placeholder="Type your message..." rows="4"
              value={formData.message} onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white/80 shadow-inner focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300"
              required></textarea>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button type="submit"
                className="w-full p-4 text-white font-semibold rounded-xl shadow-xl bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 transition-all duration-300 transform hover:scale-105 hover:from-indigo-600 hover:via-purple-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
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
