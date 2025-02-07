import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import arrow from "../assets/arrow.gif";

// Dynamic Data Array (Replace with API call if needed)
const techUniversities = [
    {
        id: "don-state-technical-university",
        name: "Don State Technical University",
        intro: "A leading technical university in Russia, known for its engineering and technical programs.",
        about: "Don State Technical University (DSTU) is one of Russia’s prominent institutions for technical education, focusing on engineering, applied sciences, and industrial technology. It offers various degree programs aimed at preparing students for leadership roles in the technical sector.",
        about2: "Founded in 1930, DSTU has become a hub for innovation and technical advancement. The university features state-of-the-art laboratories, research centers, and collaboration with industries that provide hands-on learning opportunities.",
        aboutImage: "https://smapse.com/storage/2022/12/1-2.jpg",
        admissionSteps: [
            {
                step: "Step 1: Application Submission",
                description: "Submit your online application along with the required documents, including your academic transcripts, passport copy, and any other necessary documents.",
            },
            {
                step: "Step 2: Invitation Letter",
                description: "Once your documents are verified, you will receive an official invitation letter from Don State Technical University within 7-10 days.",
            },
            {
                step: "Step 3: Visa Processing",
                description: "Apply for a student visa using the invitation letter and medical reports. Visa processing time is approximately 2-3 weeks.",
            },
            {
                step: "Step 4: Travel & Arrival",
                description: "Book your flight to Russia and notify the university of your arrival. They will assist with airport pickup and other necessary arrangements.",
            },
            {
                step: "Step 5: University Registration",
                description: "Upon arrival, complete the registration formalities, medical tests, and hostel accommodations before attending orientation sessions.",
            },
        ],
        admissionImage: "/images/don-state-technical-admission.jpg",
        bottomBanner: "https://hedclub.com/data/universities/955/main_image/AVZR0yR4Iksi7Oqy5i8b.jpg",
        bottomText: "Join a leading technical university in Russia and shape the future of engineering!",
    },
    {
        id: "southern-federal-university",
        name: "Southern Federal University",
        intro: "A multidisciplinary university offering a wide range of technical and engineering programs.",
        about: "Southern Federal University (SFU) is located in the southern region of Russia and is known for its diverse educational programs in engineering, science, and technology. SFU has a strong emphasis on research and innovation, offering students access to cutting-edge laboratories and real-world technical applications.",
        about2: "Founded in 2006, SFU brings together various research centers and academic programs under one roof. The university is known for its interdisciplinary approach to education, which blends engineering with business, technology, and social sciences.",
        aboutImage: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Rostov-on-Don%2C_Southern_Federal_University%2C_Rostov_State_University%2C_Russia.jpg",
        admissionSteps: [
            {
                step: "Step 1: Submit Application",
                description: "Complete your online application and submit the necessary documents, including academic transcripts, passport copy, and other requested forms.",
            },
            {
                step: "Step 2: Invitation Letter",
                description: "After document verification, receive the invitation letter from Southern Federal University within 7-10 working days.",
            },
            {
                step: "Step 3: Visa Processing",
                description: "Apply for a student visa with the invitation letter and medical reports. Visa processing typically takes 2-3 weeks.",
            },
            {
                step: "Step 4: Travel & Arrival",
                description: "Book your flight to the university and inform them about your arrival. The university will assist with the airport pickup.",
            },
            {
                step: "Step 5: Registration & Orientation",
                description: "Upon arrival, complete registration, medical tests, and attend orientation sessions before the start of your classes.",
            },
        ],
        admissionImage: "/images/southern-federal-admission.jpg",
        bottomBanner: "https://sfedu.ru/files/upload/sts/2767/%D0%91%D0%B5%D0%B7%D1%8B%D0%BC%D1%8F%D0%BD%D0%BD%D1%8B%D0%B9.jpg",
        bottomText: "Explore the vast opportunities at Southern Federal University!",
    },
    {
        id: "rostov-state-economics",
        name: "Rostov State University Of Economics",
        intro: "A top university specializing in economics, business, and technical education.",
        about: "Rostov State University of Economics (RSUE) is one of Russia’s leading universities in the fields of economics, business, and management. The university has a strong focus on integrating technology and innovation into its academic programs.",
        about2: "Founded in 1931, RSUE offers a wide range of undergraduate, graduate, and doctoral programs in economics, management, and technical fields. The university is known for its industry partnerships, providing students with real-world experience and career opportunities.",
        aboutImage: "https://www.rusvuz.com/wp-content/uploads/2020/06/Rostov-State-Economics-University.jpg",
        admissionSteps: [
            {
                step: "Step 1: Application Submission",
                description: "Submit your online application along with necessary documents such as academic transcripts, passport copy, and any additional requested materials.",
            },
            {
                step: "Step 2: Invitation Letter",
                description: "After document verification, you will receive the official invitation letter from the university within 7-10 working days.",
            },
            {
                step: "Step 3: Visa Processing",
                description: "Apply for a student visa at the Russian Embassy with the invitation letter and required medical documents. Visa processing usually takes 2-3 weeks.",
            },
            {
                step: "Step 4: Travel & Arrival",
                description: "Book your flight and notify the university of your arrival date. Airport pickup services are available for international students.",
            },
            {
                step: "Step 5: Registration & Orientation",
                description: "Complete university registration, medical tests, and attend the orientation before starting your academic program.",
            },
        ],
        admissionImage: "/images/rostov-state-economics-admission.jpg",
        bottomBanner: "https://hedclub.com/data/universities/629/main_image/Y6Bpf2_IPNlifnY6TH7G.jpg",
        bottomText: "Shape your future in economics and business at Rostov State University of Economics!",
    },
    {
        id: "kazan-federal-university",
        name: "Kazan Federal University",
        intro: "A prestigious university in Russia offering diverse technical and engineering programs.",
        about: "Kazan Federal University (KFU) is one of the top-ranked universities in Russia, known for its innovative programs in engineering, technology, and applied sciences. KFU has a long history of academic excellence, offering state-of-the-art facilities and research opportunities.",
        about2: "Founded in 1804, Kazan Federal University provides world-class education in fields such as engineering, IT, and technology. It also offers interdisciplinary programs that blend technical expertise with business and social sciences.",
        aboutImage: "https://studypalacehub.com/wp-content/uploads/2023/03/cr2.webp",
        admissionSteps: [
            {
                step: "Step 1: Application Submission",
                description: "Complete your online application and submit all necessary documents, including academic transcripts, passport copy, and any other required materials.",
            },
            {
                step: "Step 2: Invitation Letter",
                description: "After document verification, you will receive the invitation letter from Kazan Federal University within 7-10 working days.",
            },
            {
                step: "Step 3: Visa Processing",
                description: "Apply for a student visa with the invitation letter and medical fitness reports. Visa processing takes approximately 2-3 weeks.",
            },
            {
                step: "Step 4: Travel & Arrival",
                description: "Book your flight to Kazan and inform the university of your arrival. The university provides airport pickup assistance.",
            },
            {
                step: "Step 5: Registration & Orientation",
                description: "Complete university registration, attend medical tests, and join the orientation session before starting your academic journey.",
            },
        ],
        admissionImage: "/images/kazan-federal-admission.jpg",
        bottomBanner: "https://upload.wikimedia.org/wikipedia/commons/8/81/Kazan_Federal_University_building_08-2016.jpg",
        bottomText: "Join a prestigious university with a global reputation for innovation and excellence!",
    },
    {
        id: "ukhta-state-technical-university",
        name: "Ukhta State Technical University",
        intro: "A specialized university focusing on technical education in engineering, energy, and environmental sciences.",
        about: "Ukhta State Technical University (USTU) is a leading institution in the field of engineering, energy, and environmental studies. It is known for its high academic standards, practical approach to teaching, and strong ties with industry partners.",
        about2: "Founded in 1961, USTU offers undergraduate and postgraduate programs in engineering, energy systems, environmental science, and related fields. The university features modern laboratories and research facilities to support hands-on learning.",
        aboutImage: "https://upload.wikimedia.org/wikipedia/commons/7/73/%D0%A3%D0%93%D0%A2%D0%A3.jpg",
        admissionSteps: [
            {
                step: "Step 1: Application Submission",
                description: "Submit your application along with necessary documents, including academic transcripts and passport details.",
            },
            {
                step: "Step 2: Invitation Letter",
                description: "After the verification of documents, you will receive the invitation letter within 7-10 working days.",
            },
            {
                step: "Step 3: Visa Processing",
                description: "Apply for a student visa using the invitation letter and necessary medical reports. Visa processing takes 2-3 weeks.",
            },
            {
                step: "Step 4: Travel & Arrival",
                description: "Book your flight to Ukhta and inform the university of your arrival. The university offers airport pickup services.",
            },
            {
                step: "Step 5: Registration & Orientation",
                description: "Complete your registration at the university, submit medical reports, and attend orientation before beginning classes.",
            },
        ],
        admissionImage: "/images/ukhta-state-technical-admission.jpg",
        bottomBanner: "https://s3-ap-southeast-1.amazonaws.com/cdn.buddy4study.com/static/admission/college/942/banner/institute_942_banner1565331288.jpg",
        bottomText: "Build your career in energy and environmental technologies at Ukhta State Technical University!",
    },
    {
        id: "udmurt-state-university",
        name: "Udmurt State University",
        intro: "A leading university offering strong technical and applied science programs.",
        about: "Udmurt State University (UDSU) is known for its high-quality education in applied sciences, engineering, and technology. The university offers both undergraduate and postgraduate programs, providing students with comprehensive technical knowledge and hands-on experience.",
        about2: "Founded in 1931, UDSU is one of the leading educational institutions in the region, specializing in technical fields such as computer science, electronics, and engineering.",
        aboutImage: "https://i.ytimg.com/vi/RbYg7Vsr6_E/maxresdefault.jpg",
        admissionSteps: [
            {
                step: "Step 1: Submit Application",
                description: "Submit your online application along with required documents including academic transcripts and passport copy.",
            },
            {
                step: "Step 2: Invitation Letter",
                description: "After your documents are processed, you will receive the official invitation letter within 7-10 working days.",
            },
            {
                step: "Step 3: Visa Processing",
                description: "Apply for your student visa with the invitation letter and medical reports. Visa processing typically takes 2-3 weeks.",
            },
            {
                step: "Step 4: Travel & Arrival",
                description: "Book your flight and notify the university of your arrival. Airport pickup will be provided.",
            },
            {
                step: "Step 5: Registration & Orientation",
                description: "Complete your university registration, submit medical reports, and attend orientation sessions before starting classes.",
            },
        ],
        admissionImage: "/images/udmurt-state-admission.jpg",
        bottomBanner: "https://www.red-soft.ru/temporary/blog/451_0.png",
        bottomText: "Prepare for a successful career in technology and applied sciences at Udmurt State University!",
    },
];



function UniversityDetailPage() {
    const { id } = useParams();
    const techUniversity = techUniversities.find((uni) => uni.id === id);
    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        // Trigger animation on component mount
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); // Add slight delay for smoother effect

        return () => clearTimeout(timer);
    }, []);

    if (!techUniversity) {
        return <h2 className="text-center text-2xl">University Not Found</h2>;
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                {/* SEO Meta Tags */}
                <meta name="description" content={`${techUniversity.intro} Learn more about the admission steps and courses at ${techUniversity.name}.`} />
                <meta name="keywords" content={`${techUniversity.name}, Admission Procedure, Study in Russia, Russian Universities, ${techUniversity.name} Admission`} />
                <meta name="author" content="Study in Russia" />

                {/* Updated Favicon and Logo */}
                <link rel="icon" type="image/png" href="/images/logo.png" />
                <link rel="shortcut icon" href="/images/logo.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/images/logo.png" />

                {/* Open Graph Meta Tags (For Social Media Sharing) */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={`${techUniversity.name} | Study in Russia`} />
                <meta property="og:description" content={`${techUniversity.intro} Find out about the admission process and all the necessary steps to study at ${techUniversity.name}.`} />
                <meta property="og:image" content={techUniversity.aboutImage} />
                <meta property="og:url" content={`http://studyinrussia.in/admission/${techUniversity.id}`} />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${techUniversity.name} | Study in Russia`} />
                <meta name="twitter:description" content={`${techUniversity.intro} Explore the admission steps and opportunities at ${techUniversity.name}.`} />
                <meta name="twitter:image" content={techUniversity.aboutImage} />

                {/* Website Title */}
                <title>{`${techUniversity.name} | Admission Procedure | Study in Russia`}</title>
            </Helmet>

            <div className="relative w-full lg:h-[300px] flex flex-col items-center justify-center bg-gray-900 text-white">
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
                    className={`flex flex-col items-center mt-24 z-10 transition-all duration-1000 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                    <h1 className="text-2xl md:text-5xl font-semibold drop-shadow-lg text-center">
                        {techUniversity.name}
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

            <div className="container mx-auto p-6">

                {/* Introduction Section */}
                <section className="mt-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold">{techUniversity.name}</h2>
                    <p className="text-lg mt-4">{techUniversity.intro}</p>
                </section>

                {/* About Section - Left Text, Right Image */}
                <section className="mt-10 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 p-4">
                        <h2 className="text-2xl font-semibold">About the University</h2>
                        <p className="text-lg mt-4 text-justify">{techUniversity.about}</p>
                        <p className="text-lg mt-4 text-justify">{techUniversity.about2}</p>
                    </div>
                    <div className="md:w-1/2 p-4 mt-6 md:mt-0">
                        <img
                            src={techUniversity.aboutImage}
                            alt="About"
                            className="w-full h-64 object-cover rounded-lg shadow-lg"
                            loading="lazy"
                        />
                    </div>

                </section>

                {/* Admission Section - Left Image, Right Steps */}
                <section className="mt-10 flex flex-col md:flex-row items-center">
                    {/* Left: Admission Image */}
                    <div className="md:w-1/2 p-4 order-2 md:order-1 mb-6 md:mb-0">
                        <img
                            src="https://amratpal.com/wp-content/uploads/2020/12/procedure.png"
                            alt="Admission"
                            className="w-full h-64 lg:h-[500px] object-fit"
                        />
                    </div>

                    {/* Right: Admission Steps */}
                    <div className="md:w-1/2 p-4 order-1 md:order-2">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Admission Process</h2>
                        <div className="space-y-6">
                            {techUniversity.admissionSteps.map((step, index) => (
                                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-100 rounded-lg shadow-md transition duration-300 hover:bg-gray-200">
                                    {/* Step Number with Icon */}
                                    <div className="flex items-center justify-center w-12 h-12 flex-shrink-0 aspect-square bg-blue-600 text-white font-bold text-xl rounded-full shadow-lg">
                                        {index + 1}
                                    </div>

                                    {/* Step Content */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-blue-700">{step.step}</h3>
                                        <p className="text-gray-700">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Bottom Banner Section */}
                <section className="mt-10 relative">
                    <img src={techUniversity.bottomBanner} alt="University Banner" className="w-full h-52 object-cover rounded-lg shadow-lg" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-lg p-6">
                        <h2 className="text-white text-xl lg:text-4xl font-bold text-center">
                            {techUniversity.bottomText}
                        </h2>

                        {/* Apply Now Button - Positioned Center Down */}
                        <Link
                            to="/apply"
                            className="mt-6 px-8 py-3 text-lg font-semibold rounded-lg shadow-lg 
                    bg-gradient-to-r from-yellow-400 to-orange-500 text-white 
                    hover:from-orange-500 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105"
                        >
                            Apply Now
                        </Link>
                    </div>
                </section>
            </div>

        </>
    );
}

export default UniversityDetailPage;
