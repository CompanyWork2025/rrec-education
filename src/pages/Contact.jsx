import React, { useState, useEffect } from 'react';
import arrow from "../assets/arrow.gif";
import { Helmet } from 'react-helmet';
import { FaLink, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // For adding icons

const ContactUs = () => {
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
            {/* Meta Tags for SEO */}
            <Helmet>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Get in touch with Russian Educational Consultants. Find office locations, contact details, and working hours. Apply now to study in Russia." />
                <meta name="keywords" content="Contact, Study in Russia, RREC, Russian Educational Consultants, Admission, Russia Office, India Office" />
                <meta name="author" content="Your Website Name" />
                <meta property="og:title" content="Contact Us - Russian Educational Consultants" />
                <meta property="og:description" content="Reach out to us for study in Russia. Get details of our offices, contacts, and working hours. Start your application today!" />
                <meta property="og:image" content="URL_TO_YOUR_IMAGE" />
                <meta property="og:url" content="YOUR_PAGE_URL" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact Us - Russian Educational Consultants" />
                <meta name="twitter:description" content="Get in touch with RREC for assistance with your application for study in Russia. Find all contact details and office hours." />
                <meta name="twitter:image" content="URL_TO_YOUR_IMAGE" />
                <title>Contact Us - Russian Educational Consultants</title>
            </Helmet>

            {/* Banner */}
            <div className="relative w-full lg:h-[300px] flex flex-col items-center justify-center bg-gray-900 text-white">
                {/* Background Image with Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
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
                    <h1 className="text-3xl md:text-6xl font-bold drop-shadow-lg animate__animated animate__fadeIn animate__delay-1s">
                        CONTACT US
                    </h1>
                    <div className="-mt-6 md:-mt-16">
                        <img
                            src={arrow}
                            alt="Animated Gif"
                            className="w-32 md:w-56 mx-auto animate__animated animate__bounceInUp animate__delay-2s"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center py-10 bg-gray-100">
                {/* Header */}
                <h1 className="text-2xl md:text-4xl font-extrabold text-center mb-8 px-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 animate__animated animate__fadeIn animate__delay-1s">
                    Get in Touch with Us!
                </h1>

                {/* Flex container for left and right cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full max-w-screen-xl mb-6 px-4">
                    {/* India Office Card */}
                    <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                        <div className="flex items-center bg-blue-500 px-4 text-white py-2 rounded-t-lg">
                            <FaMapMarkerAlt className="mr-3" />
                            <h2 className="text-xl font-semibold">The RREC Team India</h2>
                        </div>
                        <div className="mt-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center w-80 space-x-4">
                                    <FaMapMarkerAlt className="w-8 h-8 text-blue-500" />
                                    <p><strong>Corporate Office Address : </strong><br /> PP Trade Center, Office 709-710,
                                        Pitampura - 110034, New Delhi, India</p>
                                </div>
                                <div className="col-span-2">
                                    <div className="flex items-center space-x-4">
                                        <FaPhoneAlt className="text-blue-500" />
                                        <p><strong>Contact Numbers:</strong><br />+91-7042284508 , +91 7042284509</p>
                                    </div>
                                </div>
                                <div className="col-span-2">
                                    <div className="flex items-start space-x-4">
                                        <FaEnvelope className="text-blue-500 mt-1" />
                                        <div>
                                            <p><strong>Emails (for students):</strong></p>
                                            <ul className="list-disc ml-6 space-y-1">
                                                <li>contact@rrecrussia.com </li>
                                                <li>rrec.educonsultants@gmail.com</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <iframe
                                className="w-full h-48 mt-4 rounded-lg"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.8652879979413!2d77.1475991755031!3d28.693676075631423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03d92f45f1bb%3A0xf2fcd5bfa7590c08!2sThe%20RREC%20Team-MBBS%20in%20Russia%20%7C%20Direct%20Official%20Admission%20Partners%20%7C%20Top%20Medical%2C%20Technical%2C%20Federal%20Universities%20of%20Russia.!5e0!3m2!1sen!2sin!4v1737455159513!5m2!1sen!2sin"
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                    {/* Russia Office Card */}
                    <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                        <div className="flex items-center bg-green-500 px-4 text-white py-2 rounded-t-lg">
                            <FaMapMarkerAlt className="mr-3" />
                            <h2 className="text-xl font-semibold">Russia Head Office</h2>
                        </div>
                        <div className="mt-4">
                            <div className="grid grid-cols-2 px-4 gap-4">
                                {/* Location */}
                                <div className="flex items-center w-80 space-x-4">
                                    <FaMapMarkerAlt className="w-6 h-6 text-blue-500" />
                                    <p><strong>Location:</strong><br />St. Suvorova 74 A
                                        Rostov Don Ton - 344022, Rostov, Russia</p>
                                </div>
                                {/* Contact Numbers */}
                                <div className="col-span-2">
                                    <div className="flex items-center space-x-4">
                                        <FaPhoneAlt className="text-blue-500" />
                                        <p><strong>Contact Numbers:</strong><br /> +7-9515371133</p>
                                    </div>
                                </div>

                                {/* Mails */}
                                <div className="flex items-start space-x-4">
                                    <FaEnvelope className="w-4 h-4 text-blue-500 mt-1" />
                                    <div>
                                        <p><strong>Emails (for students):</strong></p>
                                        <ul className="list-disc ml-6 space-y-1">
                                            <li>
                                                contact@rrecrussia.com </li>
                                            <li>rrec.educonsultants@mail.ru</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Map */}
                            <iframe
                                className="w-full h-56 mt-14 rounded-lg"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.4629928300514!2d39.7022314156478!3d47.23135097916083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3b9a3f9e2b5f7%3A0x3f3b3b3b3b3b3b3b!2sSt.%20Suvorova%2074A%2C%20Rostov%20Don%20Ton%20-%20344022%2C%20Rostov%2C%20Russia!5e0!3m2!1sen!2sru!4v1611220228221!5m2!1sen!2sru"
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>

                        </div>
                    </div>
                </div>


                {/* Office Location and Working Hours */}
                <div className="w-80 md:w-[700px] lg:w-full max-w-screen-xl px-6 bg-white shadow-lg rounded-lg p-6 mb-6 px-4 transition-transform transform hover:scale-105 hover:shadow-xl">
                   

                    {/* Office Working Hours */}
                    <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Office Location and Working Hours</h2>
                    <div className="space-y-2 text-lg text-gray-600">
                        <p><strong>Address:</strong> Unit 608, 6th Floor, Aggarwal Cyber Plaza-1, Netaji Subhash Place, Pitampura - 110034, New Delhi, India</p>
                        <p><strong>Monday-Friday:</strong> 9:00 AM – 6:00 PM</p>
                        <p><strong>Saturday:</strong> 10:00 AM – 4:00 PM</p>
                        <p><strong>Sunday:</strong> Closed</p>
                        <p><strong>Support, Help, and Assistance:</strong> 24 hours (via email or phone)</p>
                    </div>

                     {/* Top Map */}
                     <iframe
                        className="w-full h-56 mb-6 rounded-lg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.8652879979413!2d77.1475991755031!3d28.693676075631423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03d92f45f1bb%3A0xf2fcd5bfa7590c08!2sThe%20RREC%20Team-MBBS%20in%20Russia%20%7C%20Direct%20Official%20Admission%20Partners%20%7C%20Top%20Medical%2C%20Technical%2C%20Federal%20Universities%20of%20Russia.!5e0!3m2!1sen!2sin!4v1737455159513!5m2!1sen!2sin"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>


                {/* Call to Action with Blue Background */}
                <div className="w-80 md:w-[700px] lg:w-full max-w-screen-xl px-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg rounded-lg p-6 mb-6 px-4 transition-all transform hover:scale-105 hover:shadow-xl">
                    <h2 className="text-2xl font-semibold mb-4 text-center text-white">Study in Russia with Reliable Russian Educational Consultants</h2>
                    <p className="text-lg mb-4 text-center text-white opacity-90">Take the first step towards a successful career in Medicine or Engineering. Study in Russia with RREC.</p>
                    <div className="text-center">
                        <a
                            href="/apply"
                            className="mt-4 inline-block bg-yellow-500 text-black py-3 px-8 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-colors w-full sm:w-auto"
                        >
                            Apply Now
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactUs;
