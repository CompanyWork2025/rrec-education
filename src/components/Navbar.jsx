import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import logo from '../assets/logo.png';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('ENG');
  const [isGalleryDropdownOpen, setIsGalleryDropdownOpen] = useState(false); // Separate state for Gallery dropdown
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setOpenDropdown(null);
  }, [location]);
  const toggleLanguage = () => {
    setLanguage(language === 'ENG' ? 'RUS' : 'ENG'); // Toggle language between ENG and RUS
  };

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "hi,fr,es,ru,zh",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      }
    };
  
    // Check if script is already present
    if (!document.querySelector("script[src*='translate.google.com']")) {
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      
      script.onload = () => {
        window.googleTranslateElementInit(); // Ensure script is loaded before initialization
      };
  
      document.body.appendChild(script);
    } else {
      setTimeout(() => {
        window.googleTranslateElementInit();
      }, 1000); // Delay execution to allow script loading
    }
  }, []);
  



  return (
    <>
      {/* Ticker Section with Breaking News */}
      <div className="bg-black text-white py-2">
        <div className="max-w-screen-xl mx-auto font-semibold px-6 flex items-center">
          {/* Moving Text on the left */}
          <div className="overflow-hidden w-[70%] animate-fadeIn">
            <p className="hidden md:block moving-text inline-block whitespace-nowrap pr-[100%] animate-ticker opacity-100">
              <span className="text-red-400 mr-2 bg-yellow-200 px-2 py-1 text-shadow-yellow font-bold rounded-md">
                Breaking News:
              </span>
              Admission is open for 2022. Book your seat today with RREC Team, Official Admission Partner of Top Russian Medical Universities; RostSMU, CrimeaFU, VolSMU, KazanFU, KazanSMU, NWSMU, NoSMA, KurskSMU, PFUR, UNN Nizhny Novgorod. Direct Admission with Less Processing fees.
            </p>
          </div>

          {/* Admission Helpline on the right */}
          <p className="text-green-500 bg-white px-2 py-1 font-semibold rounded-md -ml-52 md:ml-auto">
            Admission Helpline: +91-7669533991
          </p>


        </div>
      </div>

      <nav className="sticky top-0 z-50 bg-white shadow-lg shadow-blue/20 transition-shadow">
        <div className="max-w-screen-xl mx-auto px-6 py- md:py-1 flex items-center">

          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-6">
            <img src={logo} className="w-28 h-14 lg:w-60 lg:h-20 lg:-ml-16" alt="Logo" />
          </NavLink>

          {/* Navbar Links - Centered */}
          <div className="hidden md:flex flex-1 justify-center lg:-ml-10 space-x-8">
            <NavLink to="/" className={({ isActive }) => isActive ? 'font-bold text-[#306185]' : 'text-gray-500 hover:text-[#2d4f6b]'}>
              Home
            </NavLink>
            <NavLink to="/history" className={({ isActive }) => isActive ? 'font-bold text-[#306185]' : 'text-gray-500 hover:text-[#2d4f6b]'}>
              Admission Procedure
            </NavLink>

            <div className="flex space-x-4">
              {/* Medical Universities Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => toggleDropdown("medical")}
                  className="text-gray-500 hover:text-[#2d4f6b] font-medium flex items-center space-x-2"
                >
                  <span>Medical Universities</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>

                {openDropdown === "medical" && (
                  <div className="absolute mt-2 w-80 bg-white shadow-lg rounded-lg text-gray-800">
                    <NavLink to="/fee" className="block py-2 px-4 hover:bg-gray-200">Rostov State Medical University</NavLink>
                    <NavLink to="/blog" className="block py-2 px-4 hover:bg-gray-200">Kazan State Medical University</NavLink>
                    <NavLink to="/neet-ug-updates" className="block py-2 px-4 hover:bg-gray-200">North-western State Medical University</NavLink>
                    <NavLink to="/faqs" className="block py-2 px-4 hover:bg-gray-200">Kazan Federal University</NavLink>
                    <NavLink to="/upcoming-events" className="block py-2 px-4 hover:bg-gray-200">Petrozavodsk State University</NavLink>
                    <NavLink to="/nmc-regulations" className="block py-2 px-4 hover:bg-gray-200">Yaroslavl State Medical University</NavLink>
                    <NavLink to="/recognition" className="block py-2 px-4 hover:bg-gray-200">Izhevsk State Medical Academy</NavLink>
                    <NavLink to="/recognition" className="block py-2 px-4 hover:bg-gray-200">Peoples’ Friendship University</NavLink>
                    <NavLink to="/recognition" className="block py-2 px-4 hover:bg-gray-200">Crimea Federal University</NavLink>
                  </div>
                )}
              </div>

              {/* Technical Universities Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("technical")}
                  className="text-gray-500 hover:text-[#2d4f6b] font-medium flex items-center space-x-2"
                >
                  <span>Technical Universities</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>

                {openDropdown === "technical" && (
                  <div className="absolute mt-2 w-60 bg-white shadow-lg rounded-lg text-gray-800">
                    <NavLink to="/fee" className="block py-2 px-4 hover:bg-gray-200">Don State Technical University</NavLink>
                    <NavLink to="/blog" className="block py-2 px-4 hover:bg-gray-200">Southern Federal University</NavLink>
                    <NavLink to="/neet-ug-updates" className="block py-2 px-4 hover:bg-gray-200">Rostov State University Of Economics, Russia</NavLink>
                    <NavLink to="/faqs" className="block py-2 px-4 hover:bg-gray-200">Kazan Federal University</NavLink>
                    <NavLink to="/upcoming-events" className="block py-2 px-4 hover:bg-gray-200">Ukhta State Technical University</NavLink>
                    <NavLink to="/nmc-regulations" className="block py-2 px-4 hover:bg-gray-200">Udmurt State University</NavLink>
                  </div>
                )}
              </div>
            </div>

            <NavLink to="/apply" className={({ isActive }) => isActive ? 'font-bold text-[#306185]' : 'text-gray-500 hover:text-[#2d4f6b]'}>
              Apply Now
            </NavLink>

            <NavLink to="/contact" className={({ isActive }) => isActive ? 'font-bold text-[#306185]' : 'text-gray-500 hover:text-[#2d4f6b]'}>
              Contact Us
            </NavLink>
          </div>

          {/* Right-Aligned Enquire Button */}
          <div className="hidden lg:block ml-auto lg:-mr-24">
            <NavLink
              to="/enquire"
              className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 text-white font-medium rounded-full px-8 py-2 shadow-lg hover:from-blue-600 hover:via-blue-500 hover:to-blue-700 transition-all duration-300"
            >
              Enquire
            </NavLink>
          </div>



          {/* Mobile Menu (Toggled with state) */}
          <div className="md:hidden ml-auto flex items-center">
            <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu (Toggled with state) */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div
            className="fixed inset-0 bg-black opacity-50 z-10"
            onClick={toggleMenu}
          ></div>

          {/* Mobile Menu (Toggled with state) */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={toggleMenu}></div>
            {/* Mobile Menu Content */}
            <div className="fixed top-0 right-0 bg-white w-full max-w-xs h-full z-20 p-6 space-y-6 mx-auto">
              <div className="flex justify-start mb-4">
                <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              {/* Links */}
              <NavLink
                to="/"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? 'font-bold text-[#306185] block text-center' : 'text-gray-500 hover:text-blue-500 block text-center'
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/history"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? 'font-bold text-[#306185] block text-center' : 'text-gray-500 hover:text-blue-500 block text-center'
                }
              >
                History
              </NavLink>
              <NavLink
                to="/today"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? 'font-bold text-[#306185] block text-center' : 'text-gray-500 hover:text-blue-500 block text-center'
                }
              >
                RSMU Today
              </NavLink>
              <NavLink
                to="/dormitories"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? 'font-bold text-[#306185] block text-center' : 'text-gray-500 hover:text-blue-500 block text-center'
                }
              >
                Dormitories
              </NavLink>
              <NavLink
                to="/representatives"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? 'font-bold text-[#306185] block text-center' : 'text-gray-500 hover:text-blue-500 block text-center'
                }
              >
                Representative
              </NavLink>

              {/* Centered Gallery Dropdown */}
              <div className="relative w-full text-center">
                <button
                  onClick={() => setIsGalleryDropdownOpen(!isGalleryDropdownOpen)}
                  onMouseLeave={() => setIsResourcesDropdownOpen(false)}
                  className="text-gray-500 hover:text-[#2d4f6b] block mx-auto flex justify-center items-center"
                >
                  <span className="mr-2">Gallery</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                {isGalleryDropdownOpen && (
                  <div className="mt-2 w-full bg-white shadow-lg rounded-lg text-gray-800 mx-auto">
                    <NavLink
                      to="/photo-gallery"
                      onClick={() => {
                        setIsGalleryDropdownOpen(false); // Close the dropdown
                        toggleMenu(); // Close the mobile menu
                      }}
                      className={({ isActive }) =>
                        isActive
                          ? 'block py-2 px-4 font-bold text-[#306185] bg-gray-100'
                          : 'block py-2 px-4 hover:bg-gray-200'
                      }
                    >
                      Photo Gallery
                    </NavLink>
                    <NavLink
                      to="/video-gallery"
                      onClick={() => {
                        setIsGalleryDropdownOpen(false); // Close the dropdown
                        toggleMenu(); // Close the mobile menu
                      }}
                      className={({ isActive }) =>
                        isActive
                          ? 'block py-2 px-4 font-bold text-[#306185] bg-gray-100'
                          : 'block py-2 px-4 hover:bg-gray-200'
                      }
                    >
                      Video Gallery
                    </NavLink>
                  </div>
                )}
              </div>


              {/* Centered Resources Dropdown */}
              <div className="relative w-full text-center">
                <button
                  onClick={() => setIsResourcesDropdownOpen(!isResourcesDropdownOpen)}
                  className="text-gray-500 hover:text-[#2d4f6b] block mx-auto flex justify-center items-center"
                >
                  <span className="mr-2">Resources</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                {isResourcesDropdownOpen && (
                  <div className="mt-2 w-full bg-white shadow-lg rounded-lg text-gray-800 mx-auto">
                    <NavLink
                      to="/fee"
                      onClick={() => {
                        setIsResourcesDropdownOpen(false); // Close the dropdown
                        toggleMenu(); // Close the mobile menu
                      }}
                      className={({ isActive }) =>
                        isActive
                          ? 'block py-2 px-4 font-bold text-[#306185] bg-gray-100'
                          : 'block py-2 px-4 hover:bg-gray-200'
                      }
                    >
                      Fee Structure
                    </NavLink>
                    <NavLink
                      to="/blog"
                      onClick={() => {
                        setIsResourcesDropdownOpen(false); // Close the dropdown
                        toggleMenu(); // Close the mobile menu
                      }}
                      className={({ isActive }) =>
                        isActive
                          ? 'block py-2 px-4 font-bold text-[#306185] bg-gray-100'
                          : 'block py-2 px-4 hover:bg-gray-200'
                      }
                    >
                      Blog
                    </NavLink>
                    <NavLink
                      to="/neet-ug-updates"
                      onClick={() => {
                        setIsResourcesDropdownOpen(false); // Close the dropdown
                        toggleMenu(); // Close the mobile menu
                      }}
                      className={({ isActive }) =>
                        isActive
                          ? 'block py-2 px-4 font-bold text-[#306185] bg-gray-100'
                          : 'block py-2 px-4 hover:bg-gray-200'
                      }
                    >
                      NEET - UG Updates
                    </NavLink>
                    <NavLink
                      to="/faqs"
                      onClick={() => {
                        setIsResourcesDropdownOpen(false); // Close the dropdown
                        toggleMenu(); // Close the mobile menu
                      }}
                      className={({ isActive }) =>
                        isActive
                          ? 'block py-2 px-4 font-bold text-[#306185] bg-gray-100'
                          : 'block py-2 px-4 hover:bg-gray-200'
                      }
                    >
                      FAQ’s
                    </NavLink>
                    <NavLink
                      to="/upcoming-events"
                      onClick={() => {
                        setIsResourcesDropdownOpen(false); // Close the dropdown
                        toggleMenu(); // Close the mobile menu
                      }}
                      className={({ isActive }) =>
                        isActive
                          ? 'block py-2 px-4 font-bold text-[#306185] bg-gray-100'
                          : 'block py-2 px-4 hover:bg-gray-200'
                      }
                    >
                      Upcoming Events
                    </NavLink>
                    <NavLink
                      to="/nmc-regulations"
                      onClick={() => {
                        setIsResourcesDropdownOpen(false); // Close the dropdown
                        toggleMenu(); // Close the mobile menu
                      }}
                      className={({ isActive }) =>
                        isActive
                          ? 'block py-2 px-4 font-bold text-[#306185] bg-gray-100'
                          : 'block py-2 px-4 hover:bg-gray-200'
                      }
                    >
                      NMC Regulations
                    </NavLink>
                    <NavLink
                      to="/recognition"
                      onClick={() => {
                        setIsResourcesDropdownOpen(false); // Close the dropdown
                        toggleMenu(); // Close the mobile menu
                      }}
                      className={({ isActive }) =>
                        isActive
                          ? 'block py-2 px-4 font-bold text-[#306185] bg-gray-100'
                          : 'block py-2 px-4 hover:bg-gray-200'
                      }
                    >
                      Recognitions & Links
                    </NavLink>
                  </div>
                )}
              </div>


              <NavLink
                to="/contact"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? 'font-bold text-[#306185] block text-center' : 'text-gray-500 hover:text-blue-500 block text-center'
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
