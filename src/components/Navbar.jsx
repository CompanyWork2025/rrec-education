import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import logo from "../assets/logo.png";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("ENG");
  const [openMedicalDropdown, setOpenMedicalDropdown] = useState(false);
  const [openTechnicalDropdown, setOpenTechnicalDropdown] = useState(false);


  const medicalDropdownRef = useRef(null); // Separate ref for Medical dropdown
  const technicalDropdownRef = useRef(null); // Separate ref for Technical dropdown

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMedicalDropdown = () => {
    setOpenMedicalDropdown(!openMedicalDropdown);
    setOpenTechnicalDropdown(false); // Close Technical dropdown if Medical is opened
  };

  const toggleTechnicalDropdown = () => {
    setOpenTechnicalDropdown(!openTechnicalDropdown);
    setOpenMedicalDropdown(false); // Close Medical dropdown if Technical is opened
  };

  const closeDropdown = () => {
    setOpenMedicalDropdown(false);
    setOpenTechnicalDropdown(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (medicalDropdownRef.current && !medicalDropdownRef.current.contains(event.target)) &&
        (technicalDropdownRef.current && !technicalDropdownRef.current.contains(event.target))
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setTimeout(() => {
      closeDropdown();
      toggleMenu(); // Close the mobile menu when a link is clicked
    }, 100); // Close dropdown after a brief delay
  };

  return (
    <>
      {/* Ticker Section with Breaking News */}
      <div className="bg-black text-white py-2">
        <div className="max-w-screen-xl mx-auto font-semibold px-6 flex items-center">
          {/* Moving Text on the left */}
          <div className="overflow-hidden w-[70%] animate-fadeIn">
            <p className="hidden lg:block moving-text inline-block whitespace-nowrap pr-[100%] animate-ticker opacity-100">
              <span className="text-red-400 mr-2 bg-yellow-200 px-2 py-1 text-shadow-yellow font-bold rounded-md">
                Breaking News:
              </span>
              Admission is open for 2025. Book your seat today with RREC Team, Official Admission Partner of Top Russian Medical Universities; RostSMU, CrimeaFU, VolSMU, KazanFU, KazanSMU, NWSMU, NoSMA, KurskSMU, PFUR, UNN Nizhny Novgorod. Direct Admission with Less Processing fees.
            </p>
          </div>

          {/* Admission Helpline on the right */}
          <p className="text-green-500 bg-white px-2 py-1 font-semibold rounded-md -ml-52 md:-ml-20 lg:ml-auto">
            Admission Helpline: +91-7669533991
          </p>
        </div>
      </div>

      <nav className="sticky top-0 z-50 bg-white shadow-lg shadow-blue/20 transition-shadow">
        <div className="max-w-screen-xl mx-auto px-6 py- md:py-1 flex items-center">

          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-6">
            <img src={logo} onClick={handleLinkClick} className="w-28 h-14 lg:w-56 lg:h-20 lg:-ml-16" alt="Logo" />
          </NavLink>

          {/* Navbar Links - Centered */}
          <div className="hidden lg:flex flex-1 justify-center lg:-ml-10 space-x-8">
            <NavLink to="/" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'font-bold text-[#306185]' : 'text-gray-500 hover:text-[#2d4f6b]'}>Home</NavLink>
            <NavLink to="/about" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'font-bold text-[#306185]' : 'text-gray-500 hover:text-[#2d4f6b]'}>About Us</NavLink>

            <div className="flex space-x-4">
              {/* Medical Universities Dropdown */}
              <div className="relative z-50">
                <button
                  onClick={toggleMedicalDropdown}
                  className="text-gray-500 hover:text-[#2d4f6b] font-medium flex items-center space-x-2"
                >
                  <span>Medical Universities</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>

                {openMedicalDropdown && (
                  <div className="absolute mt-2 w-80 bg-white shadow-lg rounded-lg text-gray-800 z-50 overflow-visible">
                    <NavLink to="/university/rostov" className="block py-1 px-4 hover:bg-gray-200" onClick={handleLinkClick}>
                      Rostov State Medical University
                    </NavLink>
                    <NavLink to="/university/ural" className="block py-1 px-4 hover:bg-gray-200" onClick={handleLinkClick}>
                      Ural State Medical University
                    </NavLink>
                    <NavLink to="/university/kemerovo" className="block py-1 px-4 hover:bg-gray-200" onClick={handleLinkClick}>
                      Kemerovo State Medical University
                    </NavLink>
                    <NavLink to="/university/north-western" className="block py-1 px-4 hover:bg-gray-200" onClick={handleLinkClick}>
                      North-Western State Medical University
                    </NavLink>
                    <NavLink to="/university/crimea-medical" className="block py-1 px-4 hover:bg-gray-200" onClick={handleLinkClick}>
                      Crimea Federal University - Medical Faculty
                    </NavLink>
                    <NavLink to="/university/kursk" className="block py-1 px-4 hover:bg-gray-200" onClick={handleLinkClick}>
                      Kursk State Medical University
                    </NavLink>
                    <NavLink to="/university/bashkir" className="block py-1 px-4 hover:bg-gray-200" onClick={handleLinkClick}>
                      Bashkir State Medical University
                    </NavLink>
                    <NavLink to="/university/kazan-medical" className="block py-1 px-4 hover:bg-gray-200" onClick={handleLinkClick}>
                      Kazan State Medical University
                    </NavLink>
                    <NavLink to="/university/maikop-medical" className="block py-1 px-4 hover:bg-gray-200" onClick={handleLinkClick}>
                      Maikop State Technological University - Medical Faculty
                    </NavLink>
                    <NavLink to="/university/volgograd" className="block py-1 px-4 hover:bg-gray-200" onClick={handleLinkClick}>
                      Volgograd State Medical University
                    </NavLink>
                    <NavLink to="/university/perm" className="block py-1 px-4 hover:bg-gray-200" onClick={handleLinkClick}>
                      Perm State Medical University
                    </NavLink>
                    <NavLink to="/university/orenburg" className="block py-1 px-4 hover:bg-gray-200" onClick={handleLinkClick}>
                      Orenburg State Medical University
                    </NavLink>
                    <NavLink to="/university/tver" className="block py-1 px-4 hover:bg-gray-200" onClick={handleLinkClick}>
                      Tver State Medical University
                    </NavLink>
                    <NavLink to="/university/spb-pediatric" className="block py-1 px-4 hover:bg-gray-200" onClick={handleLinkClick}>
                      Saint Petersburg State Pediatric Medical University
                    </NavLink>
                    <NavLink to="/university/kazan-federal" className="block py-1 px-4 hover:bg-gray-200" onClick={handleLinkClick}>
                      Kazan Federal University
                    </NavLink>
                    <NavLink to="/university/synergy-medical" className="block py-1 px-4 hover:bg-gray-200" onClick={handleLinkClick}>
                      Synergy University - Medical Faculty
                    </NavLink>
                  </div>
                )}

              </div>

              {/* Technical Universities Dropdown */}
              <div className="relative z-50">
                <button
                  onClick={toggleTechnicalDropdown}
                  className="text-gray-500 hover:text-[#2d4f6b] font-medium flex items-center space-x-2"
                >
                  <span>Technical Universities</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>

                {openTechnicalDropdown && (
                  <div className="absolute mt-2 w-96 bg-white shadow-lg rounded-lg text-gray-800 z-50 overflow-visible">
                    <NavLink to="/tech-university/rostov-state-transport-university" className="block py-1 px-4 hover:bg-gray-200" onClick={handleLinkClick}>
                      Rostov State Transport University
                    </NavLink>
                    <NavLink to="/tech-university/volgograd-state-technical-university" className="block py-1 px-4 hover:bg-gray-200" onClick={handleLinkClick}>
                      Volgograd State Technical University
                    </NavLink>
                    <NavLink to="/tech-university/saint-petersburg-polytechnical-university" className="block py-1 px-4 hover:bg-gray-200" onClick={handleLinkClick}>
                      Saint Petersburg Polytechnical University
                    </NavLink>
                    <NavLink to="/tech-university/synergy-university-moscow" className="block py-1 px-4 hover:bg-gray-200" onClick={handleLinkClick}>
                      Synergy University Moscow
                    </NavLink>
                    <NavLink to="/tech-university/university-of-science-and-technology-misis" className="block py-1 px-4 hover:bg-gray-200" onClick={handleLinkClick}>
                      University of Science and Technology MISiS
                    </NavLink>
                    <NavLink to="/tech-university/ural-federal-university" className="block py-1 px-4 hover:bg-gray-200" onClick={handleLinkClick}>
                      Ural Federal University
                    </NavLink>
                    <NavLink to="/tech-university/lomonosov-moscow-state-university" className="block py-1 px-4 hover:bg-gray-200" onClick={handleLinkClick}>
                      Lomonosov Moscow State University
                    </NavLink>
                    <NavLink to="/tech-university/crimea-federal-university" className="block py-1 px-4 hover:bg-gray-200" onClick={handleLinkClick}>
                      Crimea Federal University
                    </NavLink>
                    <NavLink to="/tech-university/moscow-state-pedagogical-university-mpgu" className="block py-1 px-4 hover:bg-gray-200" onClick={handleLinkClick}>
                      Moscow State Pedagogical University (MPGU)
                    </NavLink>
                    <NavLink to="/tech-university/the-pushkin-state-russian-language-institute-moscow" className="block py-1 px-4 hover:bg-gray-200" onClick={handleLinkClick}>
                      The Pushkin State Russian Language Institute Moscow
                    </NavLink>
                    <NavLink to="/tech-university/russian-state-university-for-the-humanities-moscow" className="block py-1 px-4 hover:bg-gray-200" onClick={handleLinkClick}>
                      Russian State University for the Humanities Moscow
                    </NavLink>
                    <NavLink to="/tech-university/don-state-technical-university" className="block py-1 px-4 hover:bg-gray-200" onClick={handleLinkClick}>
                      Don State Technical University
                    </NavLink>
                    <NavLink to="/tech-university/southern-federal-university" className="block py-1 px-4 hover:bg-gray-200" onClick={handleLinkClick}>
                      Southern Federal University
                    </NavLink>
                    <NavLink to="/tech-university/rostov-state-university-of-economics" className="block py-1 px-4 hover:bg-gray-200" onClick={handleLinkClick}>
                      Rostov State University of Economics
                    </NavLink>
                    <NavLink to="/tech-university/ukhta-state-technical-university" className="block py-1 px-4 hover:bg-gray-200" onClick={handleLinkClick}>
                      Ukhta State Technical University
                    </NavLink>
                    <NavLink to="/tech-university/udmurt-state-university" className="block py-1 px-4 hover:bg-gray-200" onClick={handleLinkClick}>
                      Udmurt State University
                    </NavLink>
                  </div>
                )}

              </div>
            </div>

            <NavLink to="/admission-procedure-for-study-in-russia/" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'font-bold text-[#306185]' : 'text-gray-500 hover:text-[#2d4f6b]'}>Admission Procedure</NavLink>

            <a
              href="https://www.rrecrussia.com/apply-now"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="text-gray-500 hover:text-[#2d4f6b]"
            >
              Apply Now
            </a>


            <NavLink to="/Contact-us" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'font-bold text-[#306185]' : 'text-gray-500 hover:text-[#2d4f6b]'}>
              Contact Us
            </NavLink>
          </div>

          {/* Right-Aligned Enquire Button */}
          <div className="hidden lg:block ml-auto lg:-mr-24">
            <a
              href="https://www.rrecrussia.com/apply-now"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 text-white font-medium rounded-full px-8 py-2 shadow-lg hover:from-blue-600 hover:via-blue-500 hover:to-blue-700 transition-all duration-300"
            >
              Enquire
            </a>
          </div>




          {/* Mobile Menu (Toggled with state) */}
          <div className="lg:hidden ml-auto flex items-center">
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
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
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
            <NavLink to="/" onClick={toggleMenu} className={({ isActive }) => isActive ? 'font-bold text-[#306185] block text-center' : 'text-gray-500 hover:text-blue-500 block text-center'}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={toggleMenu} className={({ isActive }) => isActive ? 'font-bold text-[#306185] block text-center' : 'text-gray-500 hover:text-blue-500 block text-center'}>
              About Us
            </NavLink>

            {/* Mobile Dropdowns for Medical and Technical */}
            <div className="relative w-full text-center">
              {/* Medical Universities Dropdown */}
              <button onClick={toggleMedicalDropdown} className="text-gray-500 hover:text-[#2d4f6b] block mx-auto flex justify-center items-center w-full">
                <span className="mr-2">Medical Universities</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {openMedicalDropdown && (
                <div ref={medicalDropdownRef} className="mt-2 w-full bg-white shadow-lg rounded-lg text-gray-800 mx-auto">
                  <NavLink to="/university/rostov" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'block py-0 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-0 px-4 hover:bg-gray-200 text-center'}>
                    Rostov State Medical University
                  </NavLink>
                  <NavLink to="/university/ural" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'block py-0 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-0 px-4 hover:bg-gray-200 text-center'}>
                    Ural State Medical University
                  </NavLink>
                  <NavLink to="/university/kemerovo" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'block py-0 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-0 px-4 hover:bg-gray-200 text-center'}>
                    Kemerovo State Medical University
                  </NavLink>
                  <NavLink to="/university/north-western" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'block py-0 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-0 px-4 hover:bg-gray-200 text-center'}>
                    North-Western State Medical University
                  </NavLink>
                  <NavLink to="/university/crimea-medical" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'block py-0 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-0 px-4 hover:bg-gray-200 text-center'}>
                    Crimea Federal University - Medical Faculty
                  </NavLink>
                  <NavLink to="/university/kursk" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'block py-0 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-0 px-4 hover:bg-gray-200 text-center'}>
                    Kursk State Medical University
                  </NavLink>
                  <NavLink to="/university/bashkir" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'block py-0 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-0 px-4 hover:bg-gray-200 text-center'}>
                    Bashkir State Medical University
                  </NavLink>
                  <NavLink to="/university/kazan-medical" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'block py-0 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-0 px-4 hover:bg-gray-200 text-center'}>
                    Kazan State Medical University
                  </NavLink>
                  <NavLink to="/university/maikop-medical" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'block py-0 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-0 px-4 hover:bg-gray-200 text-center'}>
                    Maikop State Technological University - Medical Faculty
                  </NavLink>
                  <NavLink to="/university/volgograd" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'block py-0 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-0 px-4 hover:bg-gray-200 text-center'}>
                    Volgograd State Medical University
                  </NavLink>
                  <NavLink to="/university/perm" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'block py-0 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-0 px-4 hover:bg-gray-200 text-center'}>
                    Perm State Medical University
                  </NavLink>
                  <NavLink to="/university/orenburg" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'block py-0 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-0 px-4 hover:bg-gray-200 text-center'}>
                    Orenburg State Medical University
                  </NavLink>
                  <NavLink to="/university/tver" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'block py-0 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-0 px-4 hover:bg-gray-200 text-center'}>
                    Tver State Medical University
                  </NavLink>
                  <NavLink to="/university/spb-pediatric" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'block py-0 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-0 px-4 hover:bg-gray-200 text-center'}>
                    Saint Petersburg State Pediatric Medical University
                  </NavLink>
                  <NavLink to="/university/kazan-federal" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'block py-0 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-0 px-4 hover:bg-gray-200 text-center'}>
                    Kazan Federal University
                  </NavLink>
                  <NavLink to="/university/synergy-medical" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'block py-0 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-0 px-4 hover:bg-gray-200 text-center'}>
                    Synergy University - Medical Faculty
                  </NavLink>
                </div>
              )}


              {/* Technical Universities Dropdown */}
              <button onClick={toggleTechnicalDropdown} className="text-gray-500 hover:text-[#2d4f6b] block mx-auto flex justify-center items-center w-full">
                <span className="mr-2 mt-6">Technical Universities</span>
                <svg className="w-4 h-4 mt-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {openTechnicalDropdown && (
                <div ref={technicalDropdownRef} className="mt-2 w-full bg-white shadow-lg rounded-lg text-gray-800 mx-auto">
                  <NavLink to="/tech-university/rostov-state-transport-university" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'block py-0 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-0 px-4 hover:bg-gray-200 text-center'}>
                    Rostov State Transport University
                  </NavLink>
                  <NavLink to="/tech-university/volgograd-state-technical-university" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'block py-0 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-0 px-4 hover:bg-gray-200 text-center'}>
                    Volgograd State Technical University
                  </NavLink>
                  <NavLink to="/tech-university/saint-petersburg-polytechnical-university" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'block py-0 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-0 px-4 hover:bg-gray-200 text-center'}>
                    Saint Petersburg Polytechnical University
                  </NavLink>
                  <NavLink to="/tech-university/synergy-university-moscow" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'block py-0 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-0 px-4 hover:bg-gray-200 text-center'}>
                    Synergy University Moscow
                  </NavLink>
                  <NavLink to="/tech-university/university-of-science-and-technology-misis" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'block py-0 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-0 px-4 hover:bg-gray-200 text-center'}>
                    University of Science and Technology MISiS
                  </NavLink>
                  <NavLink to="/tech-university/ural-federal-university" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'block py-0 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-0 px-4 hover:bg-gray-200 text-center'}>
                    Ural Federal University
                  </NavLink>
                  <NavLink to="/tech-university/lomonosov-moscow-state-university" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'block py-0 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-0 px-4 hover:bg-gray-200 text-center'}>
                    Lomonosov Moscow State University
                  </NavLink>
                  <NavLink to="/tech-university/crimea-federal-university" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'block py-0 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-0 px-4 hover:bg-gray-200 text-center'}>
                    Crimea Federal University
                  </NavLink>
                  <NavLink to="/tech-university/moscow-state-pedagogical-university-mpgu" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'block py-0 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-0 px-4 hover:bg-gray-200 text-center'}>
                    Moscow State Pedagogical University (MPGU)
                  </NavLink>
                  <NavLink to="/tech-university/the-pushkin-state-russian-language-institute-moscow" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'block py-0 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-0 px-4 hover:bg-gray-200 text-center'}>
                    The Pushkin State Russian Language Institute Moscow
                  </NavLink>
                  <NavLink to="/tech-university/russian-state-university-for-the-humanities-moscow" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'block py-0 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-0 px-4 hover:bg-gray-200 text-center'}>
                    Russian State University for the Humanities Moscow
                  </NavLink>
                  {/* Added Universities */}
                  <NavLink to="/tech-university/don-state-technical-university" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'block py-0 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-0 px-4 hover:bg-gray-200 text-center'}>
                    Don State Technical University
                  </NavLink>
                  <NavLink to="/tech-university/southern-federal-university" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'block py-0 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-0 px-4 hover:bg-gray-200 text-center'}>
                    Southern Federal University
                  </NavLink>
                  <NavLink to="/tech-university/rostov-state-university-of-economics" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'block py-0 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-0 px-4 hover:bg-gray-200 text-center'}>
                    Rostov State University of Economics, Russia
                  </NavLink>
                  <NavLink to="/tech-university/ukhta-state-technical-university" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'block py-0 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-0 px-4 hover:bg-gray-200 text-center'}>
                    Ukhta State Technical University
                  </NavLink>
                  <NavLink to="/tech-university/udmurt-state-university" onClick={handleLinkClick} className={({ isActive }) => isActive ? 'block py-0 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-0 px-4 hover:bg-gray-200 text-center'}>
                    Udmurt State University
                  </NavLink>
                </div>
              )}


            </div>

            <NavLink to="/admission-procedure-for-study-in-russia/" onClick={toggleMenu} className={({ isActive }) => isActive ? 'font-bold text-[#306185] block text-center' : 'text-gray-500 hover:text-blue-500 block text-center'}>
              Admission Procedure
            </NavLink>

            <a
              href="https://www.rrecrussia.com/apply-now"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
              className="text-gray-500 hover:text-blue-500 block text-center"
            >
              Apply Now
            </a>


            <NavLink to="/Contact-us" onClick={toggleMenu} className={({ isActive }) => isActive ? 'font-bold text-[#306185] block text-center' : 'text-gray-500 hover:text-blue-500 block text-center'}>
              Contact Us
            </NavLink>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
