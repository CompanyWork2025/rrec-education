import React, { useState, useEffect } from 'react';
import arrow from "../assets/arrow.gif";
import { Helmet } from 'react-helmet';
import { FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa'; // For adding icons

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
                <h1 className="text-3xl font-bold text-center mb-8 px-4">Get in Touch with Us!</h1>

                {/* Flex container for left and right cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full max-w-screen-xl mb-6 px-4">
                    {/* India Office Card */}
                    <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                        <h2 className="text-2xl font-semibold mb-4">India Office</h2>
                        <p><strong>Location:</strong> Pitampura, New Delhi</p>
                        <p><strong>Contact Numbers:</strong> +91-7042284508, +91-7042284509</p>
                        <p><strong>Emails (for students):</strong></p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li className="flex items-center">
                                <FaEnvelope className="mr-2" />
                                rrec.educonsultants@gmail.com
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="mr-2" />
                                contact@rrecrussia.com
                            </li>
                        </ul>
                        <p><strong>Web:</strong>
                            <a href="http://www.rrec.com.ru" target="_blank" rel="noopener noreferrer" className="text-blue-500">www.rrec.com.ru</a>,
                            <a href="http://www.studyinrussia.in" target="_blank" rel="noopener noreferrer" className="text-blue-500">www.studyinrussia.in</a>
                        </p>
                        <iframe
                            className="w-full h-48 mt-4 rounded-lg"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.8652879979413!2d77.1475991755031!3d28.693676075631423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03d92f45f1bb%3A0xf2fcd5bfa7590c08!2sThe%20RREC%20Team-MBBS%20in%20Russia%20%7C%20Direct%20Official%20Admission%20Partners%20%7C%20Top%20Medical%2C%20Technical%2C%20Federal%20Universities%20of%20Russia.!5e0!3m2!1sen!2sin!4v1737455159513!5m2!1sen!2sin"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>

                    {/* Russia Office Card */}
                    <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                        <h2 className="text-2xl font-semibold mb-4">Russia Office</h2>
                        <p><strong>Location:</strong> Suvorova 74-A, Rostov-on-Don, Russia</p>
                        <p><strong>Contact Numbers:</strong> +79604430042</p>
                        <p><strong>RREC having representatives in over 28 countries across the globe.</strong></p>
                        <p><strong>RREC is the authorized representative of Top Medical & Technical Universities of Russia for Asian, African, Arabian & European students.</strong></p>
                        <p>Students can apply with us for Direct Admissions for Study in Russia!</p>
                        <iframe
                            className="w-full h-48 mt-4 rounded-lg"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.4629928300514!2d39.7022314156478!3d47.23135097916083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3b9a3f9e2b5f7%3A0x3f3b3b3b3b3b3b3b!2sSuvorova%2074A%2C%20Rostov-on-Don%2C%20Russia!5e0!3m2!1sen!2sru!4v1611220228221!5m2!1sen!2sru"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>

                {/* Office Working Hours */}
                <div className="w-full max-w-screen-xl bg-white shadow-lg rounded-lg p-6 mb-6 px-4">
                    <h2 className="text-2xl font-semibold mb-4">Office Working Hours</h2>
                    <p><strong>Monday-Friday:</strong> 9:00 AM – 6:00 PM</p>
                    <p><strong>Saturday:</strong> 10:00 AM – 4:00 PM</p>
                    <p><strong>Sunday:</strong> Holiday</p>
                    <p><strong>Support, Help, and Assistance:</strong> 24 hours</p>
                </div>

                {/* Call to Action with Blue Background */}
                <div className="w-full max-w-screen-xl bg-blue-500 text-white shadow-lg rounded-lg p-6 px-4">
                    <h2 className="text-2xl font-semibold mb-4">Study in Russia with Reliable Russian Educational Consultants</h2>
                    <p className="text-lg mb-4">Study Medicine in Russia with RREC</p>
                    <a href="/apply" className="mt-4 inline-block bg-yellow-500 text-black py-2 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-colors w-full sm:w-auto text-center">Apply Now</a>
                </div>
            </div>
        </>
    );
}

export default ContactUs;
