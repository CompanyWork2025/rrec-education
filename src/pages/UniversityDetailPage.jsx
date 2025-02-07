import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import arrow from "../assets/arrow.gif";

// Dynamic Data Array (Replace with API call if needed)
const universities = [
    {
        id: "rostov",
        name: "Rostov State Medical University",
        intro: "One of the top medical universities in Russia with international recognition.",
        about: "Rostov State Medical University (RSMU) is one of the leading medical institutions in Russia, recognized for its excellence in medical education and research. Located in Rostov-on-Don, the university has been a pioneer in training highly skilled medical professionals for both Russia and international students. With its modern infrastructure, advanced research facilities, and a globally recognized degree, RSMU continues to attract students from all over the world.",
        about2: "Founded in 1930, Rostov State Medical University is a state-run medical institution under the Ministry of Health of the Russian Federation. The university offers multidisciplinary training, state-of-the-art laboratories, and world-class teaching hospitals to ensure students receive hands-on experience.",
        aboutImage: "https://www.pathtostudy.com/assets/trueimage/rostov.jpg",
        admissionSteps: [
            {
                step: "Step 1: Application & Eligibility",
                description: "Submit the online application form along with the required documents. Ensure that you meet the eligibility criteria, including minimum PCB percentage and NEET qualification (for Indian students).",
            },
            {
                step: "Step 2: Receive Invitation Letter",
                description: "After document verification, you will receive an official invitation letter from the university within 7-10 working days.",
            },
            {
                step: "Step 3: Visa Processing",
                description: "Apply for a student visa with the invitation letter and required medical reports. The visa process takes approximately 10-15 working days.",
            },
            {
                step: "Step 4: Travel & Arrival",
                description: "Book your flight to Russia and inform the university about your arrival date. The university provides airport pickup assistance.",
            },
            {
                step: "Step 5: University Registration",
                description: "Upon arrival, complete medical tests, document verification, and hostel registration before attending the orientation session.",
            },
        ],
        admissionImage: "/images/rostov-admission.jpg",
        bottomBanner: "https://studymedico.com/public//storage/uploads/university/20201001081814-12.png",
        bottomText: "Join one of the best medical universities in Russia today!",
    },
    {
        id: "kazan",
        name: "Kazan State Medical University",
        intro: "A prestigious medical institution providing globally recognized medical education.",
        about: "Kazan State Medical University (KSMU) is one of the oldest and most reputed medical universities in Russia. Established in 1814, it is recognized by WHO, MCI, and other major medical councils worldwide. KSMU is known for its strong research programs, advanced teaching methods, and modern medical infrastructure, attracting students from across the globe.",
        about2: "The university offers undergraduate and postgraduate programs in medicine, dentistry, and pharmacy. With highly qualified faculty and international collaborations, KSMU provides a student-friendly environment that nurtures medical excellence.",
        aboutImage: "https://entermedia.io/wp-content/uploads/2023/10/2-Zdanie-Medinstituta.jpg",
        admissionSteps: [
            {
                step: "Step 1: Submit Application",
                description: "Fill out the online application form and upload required documents, including academic certificates and passport copy.",
            },
            {
                step: "Step 2: Invitation Letter",
                description: "Once the documents are verified, you will receive an official invitation letter from KSMU within 10 days.",
            },
            {
                step: "Step 3: Visa Processing",
                description: "With the invitation letter, apply for a student visa at the Russian Embassy in your country. The process takes 2-3 weeks.",
            },
            {
                step: "Step 4: Travel to Kazan",
                description: "Book your flight and notify the university for pickup assistance. Make sure to carry all necessary documents.",
            },
            {
                step: "Step 5: University Enrollment",
                description: "Complete registration at the university, submit medical reports, and attend the orientation program before beginning classes.",
            },
        ],
        admissionImage: "/images/kazan-admission.jpg",
        bottomBanner: "https://mir-cdn.behance.net/v1/rendition/project_modules/max_3840/a31f24174446019.64a2deea7d659.png",
        bottomText: "Study at one of the most prestigious medical universities in Russia!",
    },
    {
        id: "crimea",
        name: "Crimea Federal University",
        intro: "A top-tier medical university offering affordable and high-quality education.",
        about: "Crimea Federal University (CFU) is one of the most well-respected medical universities in Russia, offering top-quality education to international students. Established in 1918, CFU is recognized by WHO, MCI, and other international medical councils. The university provides excellent academic programs, well-equipped laboratories, and modern medical research facilities.",
        about2: "CFU offers a unique learning experience with an emphasis on practical training, research, and innovation. The university is an excellent choice for students looking for affordable yet high-standard medical education.",
        aboutImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Simferopol_04-14_img06_University.jpg/1200px-Simferopol_04-14_img06_University.jpg",
        admissionSteps: [
            {
                step: "Step 1: Application & Documentation",
                description: "Apply online and submit academic documents, passport copy, and NEET qualification (if applicable).",
            },
            {
                step: "Step 2: Invitation Letter",
                description: "After successful verification, receive the invitation letter within 10 working days.",
            },
            {
                step: "Step 3: Visa Processing",
                description: "Apply for a student visa with the required documents, including the invitation letter and medical fitness reports.",
            },
            {
                step: "Step 4: Travel & Accommodation",
                description: "Book your flight and inform the university about your arrival. CFU provides hostel accommodation for international students.",
            },
            {
                step: "Step 5: Registration & Orientation",
                description: "Complete university formalities, including registration, medical tests, and orientation before starting your classes.",
            },
        ],
        admissionImage: "/images/crimea-admission.jpg",
        bottomBanner: "https://avatars.mds.yandex.net/i?id=37e43d0366c3cc89b7c753908d90689c_l-8343045-images-thumbs&n=13",
        bottomText: "Your gateway to a successful medical career starts here!",
    },
    {
        id: "north-western",
        name: "North-Western State Medical University",
        intro: "A leading Russian medical university known for innovation in medical research.",
        about: "North-Western State Medical University is a premier institution offering high-quality medical education in Russia. It is recognized for its advanced research in various medical fields and its international collaborations.",
        about2: "Founded in 1907, North-Western State Medical University provides excellent opportunities for students in medicine, dentistry, and pharmacy. It has a long-standing reputation for training successful medical professionals.",
        aboutImage: "https://luckclub.ru/images/luckclub/2019/01/5-33.jpg",
        admissionSteps: [
            {
                step: "Step 1: Submit Application",
                description: "Submit your online application along with necessary documents including academic certificates, passport, and NEET scores (if applicable).",
            },
            {
                step: "Step 2: Invitation Letter",
                description: "Receive the official invitation letter from the university after document verification within 7-10 days.",
            },
            {
                step: "Step 3: Visa Processing",
                description: "Apply for a student visa by submitting the invitation letter and medical reports. Visa processing takes approximately 2-3 weeks.",
            },
            {
                step: "Step 4: Travel & Arrival",
                description: "Book your flight and notify the university of your arrival date. Airport pick-up assistance is available.",
            },
            {
                step: "Step 5: University Registration",
                description: "Upon arrival, complete the necessary registration, medical tests, and hostel arrangements before attending the orientation session.",
            },
        ],
        admissionImage: "/images/north-western-admission.jpg",
        bottomBanner: "https://avatars.mds.yandex.net/i?id=642eaabab1cf04445053719589837c67_l-5649169-images-thumbs&n=13",
        bottomText: "Become a part of a research-driven medical university!",
    },
    {
        id: "kazan-federal",
        name: "Kazan Federal University",
        intro: "One of Russia’s oldest universities with a rich history in medical education.",
        about: "Founded in 1804, Kazan Federal University is one of the oldest and most prestigious universities in Russia, with international recognition. The university is renowned for its strong research programs in medicine, dentistry, and pharmacy.",
        about2: "With modern infrastructure and a focus on medical research and training, Kazan Federal University attracts students from all over the world. The university is known for its world-class faculty and highly advanced medical labs.",
        aboutImage: "https://avatars.mds.yandex.net/i?id=e325a45bb0d74187113d99394bed8f7b_l-5285139-images-thumbs&n=13",
        admissionSteps: [
            {
                step: "Step 1: Application & Eligibility",
                description: "Submit your application and the necessary documents, including academic certificates, passport copy, and NEET scores (if required).",
            },
            {
                step: "Step 2: Invitation Letter",
                description: "After document verification, you will receive an invitation letter from Kazan Federal University within 10 days.",
            },
            {
                step: "Step 3: Visa Processing",
                description: "Apply for a student visa at the Russian Embassy with the invitation letter and medical reports. Visa processing time is approximately 2-3 weeks.",
            },
            {
                step: "Step 4: Travel & Arrival",
                description: "Book your flight to Kazan and inform the university. The university will assist with the airport pickup.",
            },
            {
                step: "Step 5: University Enrollment",
                description: "Complete the registration process at the university, submit your medical reports, and attend the orientation session.",
            },
        ],
        admissionImage: "/images/kazan-federal-admission.jpg",
        bottomBanner: "https://avatars.mds.yandex.net/i?id=38cfb4a3ddcd171e7653b7fe503ab089_l-4347893-images-thumbs&n=13",
        bottomText: "Join one of Russia’s most prestigious universities today!",
    },
    {
        id: "petrozavodsk",
        name: "Petrozavodsk State University",
        intro: "A respected medical university offering comprehensive education and training for international students.",
        about: "Petrozavodsk State University (PetrSU) is known for its advanced medical programs and strong research initiatives. The university has been offering quality education for many years, training students in both theoretical knowledge and practical skills.",
        about2: "Established in 1940, PetrSU provides an excellent academic environment with modern medical facilities. The university is known for its high graduation rates and successful alumni in the medical field.",
        aboutImage: "https://doctoreducon.com/wp-content/uploads/2023/07/petrozavodsk-state-university.jpg",
        admissionSteps: [
            {
                step: "Step 1: Application & Documentation",
                description: "Submit the online application along with necessary documents such as academic transcripts, passport copy, and NEET scores (if applicable).",
            },
            {
                step: "Step 2: Invitation Letter",
                description: "After the verification of documents, you will receive the invitation letter from Petrozavodsk State University within 7-10 days.",
            },
            {
                step: "Step 3: Visa Processing",
                description: "Apply for a student visa with the invitation letter and medical reports. Visa processing usually takes 2-3 weeks.",
            },
            {
                step: "Step 4: Travel & Accommodation",
                description: "Book your flight to Petrozavodsk and inform the university about your arrival. The university provides accommodation assistance.",
            },
            {
                step: "Step 5: Registration & Orientation",
                description: "Complete registration formalities, including medical tests and document verification, and attend the orientation before classes begin.",
            },
        ],
        admissionImage: "/images/petrozavodsk-admission.jpg",
        bottomBanner: "https://educationvibes.in/uploads/university_banner/mbbs_abroad/petrozavodsk-state-medical-university.webp",
        bottomText: "Start your medical career with a strong foundation at Petrozavodsk State University!",
    },
    {
        id: "yaroslavl",
        name: "Yaroslavl State Medical University",
        intro: "A top-rated medical university in Russia with advanced teaching methods and research programs.",
        about: "Yaroslavl State Medical University (YSMU) is recognized for its outstanding medical education and research programs. The university focuses on providing students with practical experience and advanced knowledge in medical fields.",
        about2: "Founded in 1944, YSMU has trained many skilled healthcare professionals. It offers a variety of medical programs, supported by its modern facilities and international collaborations.",
        aboutImage: "https://avatars.mds.yandex.net/i?id=ec31507e20e8f7e50c97bbc258fb50bd_l-5210027-images-thumbs&n=13",
        admissionSteps: [
            {
                step: "Step 1: Application Submission",
                description: "Complete the online application and upload all required documents such as academic certificates and passport details.",
            },
            {
                step: "Step 2: Invitation Letter",
                description: "Upon verification of documents, you will receive the invitation letter from Yaroslavl State Medical University within 10 working days.",
            },
            {
                step: "Step 3: Visa Processing",
                description: "Apply for a student visa at the Russian Embassy with the invitation letter and medical documents. The visa process will take 2-3 weeks.",
            },
            {
                step: "Step 4: Travel & Arrival",
                description: "Book your flight and notify the university. Airport pickup assistance is available.",
            },
            {
                step: "Step 5: University Registration",
                description: "Upon arrival, complete the registration and medical checks before the start of your classes.",
            },
        ],
        admissionImage: "/images/yaroslavl-admission.jpg",
        bottomBanner: "https://avatars.mds.yandex.net/i?id=3390f53dea7ba1ad4c603d91ee6f242b_l-2918686-images-thumbs&n=13",
        bottomText: "Explore a rewarding medical career at Yaroslavl State Medical University!",
    },
    {
        id: "izhevsk",
        name: "Izhevsk State Medical Academy",
        intro: "A renowned university offering specialized medical programs and extensive clinical practice.",
        about: "Izhevsk State Medical Academy (ISMA) offers high-quality medical education with an emphasis on clinical practice and research. The university has strong academic programs and modern facilities for practical training.",
        about2: "Founded in 1930, Izhevsk State Medical Academy has been producing well-trained professionals for the healthcare industry. It is known for its advanced research in various medical fields and strong international ties.",
        aboutImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/%D0%A3%D1%87%D0%B5%D0%B1%D0%BD%D0%BE-%D0%BB%D0%B0%D0%B1%D0%BE%D1%80%D0%B0%D1%82%D0%BE%D1%80%D0%BD%D1%8B%D0%B9_%D0%BA%D0%BE%D1%80%D0%BF%D1%83%D1%81.jpg/640px-%D0%A3%D1%87%D0%B5%D0%B1%D0%BD%D0%BE-%D0%BB%D0%B0%D0%B1%D0%BE%D1%80%D0%B0%D1%82%D0%BE%D1%80%D0%BD%D1%8B%D0%B9_%D0%BA%D0%BE%D1%80%D0%BF%D1%83%D1%81.jpg",
        admissionSteps: [
            {
                step: "Step 1: Application Submission",
                description: "Submit the online application form along with required documents including academic transcripts, passport, and NEET scores (if required).",
            },
            {
                step: "Step 2: Invitation Letter",
                description: "Upon verification, you will receive the official invitation letter from Izhevsk State Medical Academy.",
            },
            {
                step: "Step 3: Visa Processing",
                description: "Apply for a student visa with the invitation letter and necessary medical documents. Visa processing usually takes 2-3 weeks.",
            },
            {
                step: "Step 4: Travel & Arrival",
                description: "Book your flight to Izhevsk and inform the university for airport pickup assistance.",
            },
            {
                step: "Step 5: Registration & Orientation",
                description: "Complete university registration, submit medical reports, and attend the orientation session.",
            },
        ],
        admissionImage: "/images/izhevsk-admission.jpg",
        bottomBanner: "https://brightfutureas.com/wp-content/uploads/2024/08/Izhevsk-State-Medical-Academy-jpg-webp.webp",
        bottomText: "Embark on your medical journey at Izhevsk State Medical Academy!",
    },
    {
        id: "peoples-friendship",
        name: "Peoples' Friendship University",
        intro: "A global university offering a diverse and dynamic learning environment for medical students.",
        about: "Peoples' Friendship University (PFUR) in Moscow is a top institution that attracts students from all over the world. It offers cutting-edge medical programs supported by international partnerships.",
        about2: "Founded in 1960, PFUR has a long history of training medical professionals. It offers a wide range of medical programs, focusing on both academic excellence and practical experience.",
        aboutImage: "https://avatars.mds.yandex.net/i?id=f014cc4e34f727fe4e35f7aba052d05e_l-2769679-images-thumbs&n=13",
        admissionSteps: [
            {
                step: "Step 1: Application & Document Submission",
                description: "Complete the online application form and submit required documents including your academic transcripts, passport, and NEET score (if applicable).",
            },
            {
                step: "Step 2: Invitation Letter",
                description: "After document verification, you will receive an invitation letter from the university within 7-10 working days.",
            },
            {
                step: "Step 3: Visa Processing",
                description: "Apply for a student visa at the Russian Embassy with the invitation letter and medical documentation.",
            },
            {
                step: "Step 4: Travel & Arrival",
                description: "Book your flight and inform the university of your arrival. The university provides airport pickup assistance.",
            },
            {
                step: "Step 5: Registration & Orientation",
                description: "Complete university registration, attend medical tests, and take part in the orientation session before classes begin.",
            },
        ],
        admissionImage: "/images/peoples-friendship-admission.jpg",
        bottomBanner: "https://avatars.mds.yandex.net/i?id=88526f7031d39df3a4c9e373cccdc2c6_l-9065879-images-thumbs&n=13",
        bottomText: "Join a globally diverse medical community at Peoples' Friendship University!",
    }
];

function UniversityDetailPage() {
    const { id } = useParams();
    const university = universities.find((uni) => uni.id === id);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation on component mount
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); // Add slight delay for smoother effect

        return () => clearTimeout(timer);
    }, []);

    if (!university) {
        return <h2 className="text-center text-2xl">University Not Found</h2>;
    }

    return (
        <>
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
                        {university.name}
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
                    <h2 className="text-3xl md:text-4xl font-semibold">{university.name}</h2>
                    <p className="text-lg mt-4">{university.intro}</p>
                </section>

                {/* About Section - Left Text, Right Image */}
                <section className="mt-10 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 p-4">
                        <h2 className="text-2xl font-semibold">About the University</h2>
                        <p className="text-lg mt-4 text-justify">{university.about}</p>
                        <p className="text-lg mt-4 text-justify">{university.about2}</p>
                    </div>
                    <div className="md:w-1/2 p-4 mt-6 md:mt-0">
                        <img src={university.aboutImage} alt="About" className="w-full h-64 object-cover rounded-lg shadow-lg" />
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
                            {university.admissionSteps.map((step, index) => (
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
                    <img src={university.bottomBanner} alt="University Banner" className="w-full h-52 object-cover rounded-lg shadow-lg" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-lg p-6">
                        <h2 className="text-white text-xl lg:text-4xl font-bold text-center">
                            {university.bottomText}
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
