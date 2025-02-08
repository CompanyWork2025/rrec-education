import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import arrow from "../assets/arrow.gif";

// Dynamic Data Array (Replace with API call if needed)
const techUniversities = [
    {
        id: "rostov-state-transport-university",
        name: "Rostov State Transport University",
        intro: "A leading technical university specializing in transport engineering and technology.",
        about: "Rostov State Transport University (RSTU) focuses on engineering disciplines related to transportation, logistics, and infrastructure. It is known for its research in transport systems and innovative technology.",
        about2: "The university has a strong research focus, with many faculty members and students involved in research projects related to transportation, logistics, and related fields. RSTU has partnerships with many international universities and organizations, providing opportunities for student exchange, joint research projects, and other forms of collaboration.",
        aboutImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/RSTU_2021-02.jpg/1200px-RSTU_2021-02.jpg",
        admissionSteps: [
            {
                step: "Step 1: Application Submission",
                description: "Submit your online application and required documents, including academic transcripts and passport.",
            },
            {
                step: "Step 2: Invitation Letter",
                description: "Receive the invitation letter from the university after document verification.",
            },
            {
                step: "Step 3: Visa Processing",
                description: "Apply for a student visa with the invitation letter and medical reports.",
            },
            {
                step: "Step 4: Travel & Arrival",
                description: "Book your flight and inform the university about your arrival date.",
            },
            {
                step: "Step 5: University Registration",
                description: "Complete your registration process and attend orientation.",
            },
        ],
        admissionImage: "/images/rostov-state-transport-admission.jpg",
        bottomBanner: "https://bypass.rgups.ru/site/assets/files/44370/3.4_foto_sovremennyi_rgups.jpg",
        bottomText: "Join Rostov State Transport University to be part of the future of transportation engineering!",
    },
    {
        id: "volgograd-state-technical-university",
        name: "Volgograd State Technical University",
        intro: "A key institution in technical education with a focus on engineering and applied sciences.",
        about: "Volgograd State Technical University (VSTU) offers various degree programs in engineering, technology, and applied sciences. The university emphasizes research and industrial collaboration.",
        about2: " The university is involved in applied research in fields like manufacturing technologies, industrial engineering, materials science, and energy efficiency. It also focuses on innovations in engineering and production technologies.",
        aboutImage: "https://www.rusvuz.com/wp-content/uploads/2020/06/Volgograd-State-Technical-University.jpg",
        admissionSteps: [
            {
                step: "Step 1: Application Submission",
                description: "Submit your online application with necessary documents like academic records and passport.",
            },
            {
                step: "Step 2: Invitation Letter",
                description: "Get your official invitation letter from Volgograd State Technical University after document review.",
            },
            {
                step: "Step 3: Visa Processing",
                description: "Apply for a student visa with the invitation letter and medical documents.",
            },
            {
                step: "Step 4: Travel & Arrival",
                description: "Book your flight and notify the university about your arrival.",
            },
            {
                step: "Step 5: University Registration",
                description: "Complete your registration at the university and participate in orientation.",
            },
        ],
        admissionImage: "/images/volgograd-state-technical-admission.jpg",
        bottomBanner: "https://volsu.ru/upload/medialibrary/f2f/%D0%BA%D1%80%D0%B0%D1%81%D0%B2%D0%BE%D0%BB%D0%B3%D1%83222.jpg",
        bottomText: "Study at Volgograd State Technical University and build a successful career in engineering!",
    },
    {
        id: "saint-petersburg-polytechnical-university",
        name: "Saint Petersburg Polytechnical University",
        intro: "A top Russian university specializing in engineering, technology, and innovation.",
        about: "Saint Petersburg Polytechnical University (SPbPU) is one of the leading institutions in Russia, offering cutting-edge programs in engineering, technology, and applied sciences. It focuses on both theoretical and practical learning.",
        about2: "Saint Petersburg Polytechnical University was founded in 1899 as the Polytechnical Institute. Over the years, the university has undergone several transformations, expanding its academic programs and research focus.",
        aboutImage: "https://www.rusvuz.com/wp-content/uploads/2020/06/Saint-Petersburg-State-Polytechnic-University.jpg",
        admissionSteps: [
            {
                step: "Step 1: Application Submission",
                description: "Submit your online application and required documents, including transcripts and passport.",
            },
            {
                step: "Step 2: Invitation Letter",
                description: "Receive your invitation letter from SPbPU after document processing.",
            },
            {
                step: "Step 3: Visa Processing",
                description: "Apply for a student visa with the invitation letter and medical reports.",
            },
            {
                step: "Step 4: Travel & Arrival",
                description: "Book your flight and inform the university of your arrival.",
            },
            {
                step: "Step 5: University Registration",
                description: "Complete registration, medical tests, and attend orientation before starting your classes.",
            },
        ],
        admissionImage: "/images/saint-petersburg-polytechnical-admission.jpg",
        bottomBanner: "https://english.spbstu.ru/upload/medialibrary/144/photo_3_saint_petersburg_polytechnic_university.jpg",
        bottomText: "Become a leader in technology and innovation at Saint Petersburg Polytechnical University!",
    },
    {
        id: "synergy-university-moscow",
        name: "Synergy University Moscow",
        intro: "A modern university offering a range of technical and business programs.",
        about: "Synergy University in Moscow focuses on innovative approaches to education in fields like business management, engineering, and technology. It’s known for its high-quality programs that combine theory and practice.",
        about2: "Synergy University, located in Moscow, Russia, is a private higher education institution offering a wide variety of programs, particularly in business, economics, and management. The university is known for its innovative approach to education, combining academic rigor with practical training to prepare students for the global business environment.",
        aboutImage: "https://api.univacity.com/file/v1/bucket/public___bbdcb7d6-a089-4195-a6bf-d465f0acdc83_eb1fe3897fc6f3ac9205.jpg?width=528&height=446&quality=80&format=webp",
        admissionSteps: [
            {
                step: "Step 1: Application Submission",
                description: "Complete your online application and submit your academic records and passport.",
            },
            {
                step: "Step 2: Invitation Letter",
                description: "Receive an invitation letter after document verification.",
            },
            {
                step: "Step 3: Visa Processing",
                description: "Apply for a student visa using your invitation letter and medical documents.",
            },
            {
                step: "Step 4: Travel & Arrival",
                description: "Book your flight to Moscow and inform the university of your arrival.",
            },
            {
                step: "Step 5: University Registration",
                description: "Register at the university and attend orientation before starting your program.",
            },
        ],
        admissionImage: "/images/synergy-university-moscow-admission.jpg",
        bottomBanner: "https://smapse.com/storage/2022/01/4-6.jpg",
        bottomText: "Join Synergy University Moscow for a dynamic education in business and technology!",
    },
    {
        id: "university-of-science-and-technology-misis",
        name: "University of Science and Technology MISiS",
        intro: "A leading research university in Russia focusing on science, technology, and engineering.",
        about: "University of Science and Technology MISiS (Moscow Institute of Steel and Alloys) is renowned for its research and academic programs in materials science, engineering, and applied technology.",
        about2: "The National University of Science and Technology MISiS (often referred to as MISiS) is one of the leading universities in Russia, specializing in metallurgy, materials science, and high-tech industries. Located in Moscow, it has a strong reputation in engineering, science, and technology education, as well as a focus on research and innovation in materials science and engineering.",
        aboutImage: "https://en.misis.ru/files/-/a0aef41ac187f0217ca1b29189b36abd/_u0081_20_u041C_u0418_u0421_u0418_u0421_.jpg",
        admissionSteps: [
            {
                step: "Step 1: Application Submission",
                description: "Submit your online application and documents like transcripts and passport copy.",
            },
            {
                step: "Step 2: Invitation Letter",
                description: "Receive your invitation letter after the verification of your documents.",
            },
            {
                step: "Step 3: Visa Processing",
                description: "Apply for a student visa with the invitation letter and medical records.",
            },
            {
                step: "Step 4: Travel & Arrival",
                description: "Book your flight and inform the university about your arrival.",
            },
            {
                step: "Step 5: University Registration",
                description: "Register at MISiS and attend the orientation session.",
            },
        ],
        admissionImage: "/images/misis-university-admission.jpg",
        bottomBanner: "https://static.themoscowtimes.com/image_archive/article_1360/41/i315598_misis-science-institute-russia-top.jpg",
        bottomText: "Pursue your future in materials science and engineering at MISiS University!",
    },
    {
        id: "ural-federal-university",
        name: "Ural Federal University",
        intro: "A prestigious university offering a broad spectrum of technical and engineering disciplines.",
        about: "Ural Federal University (UrFU) offers high-quality education in fields such as engineering, applied sciences, and technology. It is known for its strong research programs and collaboration with industry partners.",
        about2: "Ural Federal University (UrFU) is one of Russia's largest and most prestigious universities, located in Yekaterinburg, the administrative center of the Ural region. Known for its excellence in education, research, and innovation, UrFU is a leading institution in engineering, science, and technology, as well as a broad range of humanities and social sciences.",
        aboutImage: "https://urfu.ru/fileadmin/_processed_/3/8/csm_GUK_88c291054f.jpg",
        admissionSteps: [
            {
                step: "Step 1: Application Submission",
                description: "Submit your online application with your academic records and passport details.",
            },
            {
                step: "Step 2: Invitation Letter",
                description: "After document processing, receive your invitation letter from UrFU.",
            },
            {
                step: "Step 3: Visa Processing",
                description: "Apply for a student visa using the invitation letter and medical documents.",
            },
            {
                step: "Step 4: Travel & Arrival",
                description: "Book your flight to Ekaterinburg and notify the university of your arrival.",
            },
            {
                step: "Step 5: University Registration",
                description: "Complete your registration and attend orientation sessions before starting your classes.",
            },
        ],
        admissionImage: "/images/ural-federal-university-admission.jpg",
        bottomBanner: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Ural_State_Technical_University_%28August_2022%29_-_1.jpg/1200px-Ural_State_Technical_University_%28August_2022%29_-_1.jpg",
        bottomText: "Build your career at Ural Federal University in one of Russia’s top engineering institutions!",
    },
    {
        id: "lomonosov-moscow-state-university",
        name: "Lomonosov Moscow State University",
        intro: "Russia's highest-ranking university, offering a wide range of programs across various disciplines.",
        about: "Lomonosov Moscow State University (MSU) is one of the oldest and most prestigious universities in Russia. MSU offers a broad spectrum of programs in science, engineering, humanities, and social sciences. The university is a hub for advanced research and innovation.",
        about2: "Lomonosov Moscow State University collaborates with top universities and research institutions worldwide, offering students opportunities for international exchanges, internships, and joint research projects. It has a well-established global network and frequently ranks among the top universities in international rankings.",
        aboutImage: "https://www.tutelagestudy.com/uploads/university/IMG_20221216_162830.jpg",
        admissionSteps: [
          { step: "Step 1: Application Submission", description: "Submit your online application along with the necessary documents such as academic transcripts and a valid passport." },
          { step: "Step 2: Invitation Letter", description: "The university will send you an invitation letter after verifying your documents." },
          { step: "Step 3: Visa Processing", description: "Apply for a student visa using the invitation letter and medical certificates." },
          { step: "Step 4: Travel & Arrival", description: "Book your flight to Moscow and inform the university about your arrival date." },
          { step: "Step 5: Registration & Orientation", description: "Upon arrival, complete the registration and attend the university’s orientation program." },
        ],
        admissionImage: "/images/lomonosov-msu-admission.jpg",
        bottomBanner: "https://group.schindler.com/content/dam/website/group/images/references/moscow-state-university/moscow-state-university-msu.jpg/_jcr_content/renditions/original./moscow-state-university-msu.jpg",
        bottomText: "Study at Lomonosov Moscow State University, where tradition meets innovation!",
      },
      {
        id: "crimea-federal-university",
        name: "Crimea Federal University",
        intro: "A key university in Crimea offering interdisciplinary programs across engineering and social sciences.",
        about: "Crimea Federal University is an important educational institution in Crimea, offering comprehensive programs in a variety of fields, from engineering to the arts. It plays a significant role in Crimea's educational landscape and is known for its modern research facilities and international collaborations.",
        about2: "Crimea Federal University (CFU), also known as V.I. Vernadsky Crimean Federal University, is one of the leading universities in the Russian Federation, located in Simferopol, the capital of Crimea. The university is named after the renowned Russian scientist V.I. Vernadsky and is known for its focus on scientific research and technological development in various fields.",
        aboutImage: "https://www.ruseducation.in/wp-content/uploads/2022/01/Crimea-Federal-University.webp",
        admissionSteps: [
          { step: "Step 1: Application Submission", description: "Submit the application along with academic documents and passport." },
          { step: "Step 2: Invitation Letter", description: "The university will send you the invitation letter once your documents are approved." },
          { step: "Step 3: Visa Processing", description: "Apply for a student visa using the invitation letter and medical certificate." },
          { step: "Step 4: Travel & Arrival", description: "Book your flight and notify the university for arrival assistance." },
          { step: "Step 5: Registration & Orientation", description: "On arrival, finalize your registration and take part in the orientation session." },
        ],
        admissionImage: "/images/crimea-federal-university-admission.jpg",
        bottomBanner: "https://studymbbsinrussia.co.in/wp-content/uploads/2016/04/crimea.jpg",
        bottomText: "Join Crimea Federal University and expand your educational horizons!",
      },
      {
        id: "moscow-state-pedagogical-university-mpgu",
        name: "Moscow State Pedagogical University (MPGU)",
        intro: "A prestigious institution offering programs in education and social sciences.",
        about: "Moscow State Pedagogical University (MPGU) specializes in educational sciences and teacher training. The university also offers programs in social sciences, arts, and humanities, aiming to prepare highly skilled professionals for the education sector.",
        about2: "MPGU is a leader in the field of educational research, focusing on pedagogy, child development, psychology, and education systems. The university is involved in numerous research projects related to improving teaching methods, special education, and educational technologies. It also conducts significant research in linguistics and social sciences.",
        aboutImage: "https://upload.wikimedia.org/wikipedia/commons/8/85/Wiki_pirogovka_clinics_1.jpg",
        admissionSteps: [
          { step: "Step 1: Application Submission", description: "Submit your application and documents, including transcripts and passport." },
          { step: "Step 2: Invitation Letter", description: "You will receive an official invitation letter once your application is reviewed." },
          { step: "Step 3: Visa Processing", description: "Apply for a student visa after receiving the invitation letter and medical documents." },
          { step: "Step 4: Travel & Arrival", description: "Book your flight to Moscow and inform the university about your arrival." },
          { step: "Step 5: Registration & Orientation", description: "Complete the registration process and attend orientation before starting your classes." },
        ],
        admissionImage: "/images/mpgu-university-admission.jpg",
        bottomBanner: "https://uzfi.uz/media/uploads/2024/08/20/full_size_1588062778-4a57bc55e44cfc6df37fdfde3c7efb99.jpg",
        bottomText: "Become a teacher and change lives at Moscow State Pedagogical University!",
      },
      {
        id: "the-pushkin-state-russian-language-institute-moscow",
        name: "The Pushkin State Russian Language Institute Moscow",
        intro: "A leading university for studying the Russian language and culture.",
        about: "The Pushkin State Russian Language Institute is Russia’s leading educational institution for teaching the Russian language as a foreign language. It offers diverse programs for international students who want to immerse themselves in Russian language and culture.",
        about2: "The Pushkin Institute is also a leading research center in the field of Russian language teaching, applied linguistics, and Russian cultural studies. It works on improving methodologies for teaching Russian and develops new educational materials. It is also involved in research on the evolution of the Russian language and its role in modern society.",
        aboutImage: "https://www.pushkin.institute/wp-content/uploads/2024/09/photo_5397700489006669677_y-768x452.jpg",
        admissionSteps: [
          { step: "Step 1: Application Submission", description: "Submit your application and required documents such as passport and previous academic records." },
          { step: "Step 2: Invitation Letter", description: "After review, the university will send you an official invitation letter." },
          { step: "Step 3: Visa Processing", description: "Apply for your student visa with the invitation letter and medical documents." },
          { step: "Step 4: Travel & Arrival", description: "Book your flight and notify the university of your arrival." },
          { step: "Step 5: Registration & Orientation", description: "Upon arrival, complete your registration and attend the university’s orientation program." },
        ],
        admissionImage: "/images/pushkin-state-institute-admission.jpg",
        bottomBanner: "https://www.pushkin.institute/wp-content/uploads/2022/12/slide-show-2-768x315.jpg",
        bottomText: "Master the Russian language and culture at the Pushkin Institute!",
      },
      {
        id: "russian-state-university-for-the-humanities-moscow",
        name: "Russian State University for the Humanities (Moscow)",
        intro: "A renowned university in Moscow specializing in humanities, social sciences, and cultural studies.",
        about: "The Russian State University for the Humanities (RSUH) is one of the leading institutions for humanities and social sciences in Russia. It offers programs in history, philosophy, sociology, international relations, and more. The university is known for its strong research output and cultural programs.",
        about2: "RSUH is known for its extensive research output in the humanities, particularly in Russian and world history, philosophy, linguistics, cultural studies, and art history. The university is also involved in research on social issues, political theory, and contemporary cultural dynamics.",
        aboutImage: "https://rsuh.ru/upload/iblock/ae5/ae50484db002adab7589acabfc2e4b3c.jpg",
        admissionSteps: [
          { step: "Step 1: Application Submission", description: "Submit the online application along with your academic transcripts, a passport copy, and other necessary documents." },
          { step: "Step 2: Invitation Letter", description: "Once your application is accepted, you will receive an official invitation letter from the university." },
          { step: "Step 3: Visa Processing", description: "With the invitation letter and medical documents, apply for a student visa at your local Russian consulate." },
          { step: "Step 4: Travel & Arrival", description: "Book your flight to Moscow and inform the university of your arrival time." },
          { step: "Step 5: Registration & Orientation", description: "Complete your university registration and participate in the orientation program to get familiar with the campus." },
        ],
        admissionImage: "/images/russian-state-university-for-the-humanities-admission.jpg",
        bottomBanner: "https://rsuh.ru/upload/press/miusskaya.jpg",
        bottomText: "Explore the humanities and social sciences at the Russian State University for the Humanities!",
      },
      {
        id: "don-state-technical-university",
        name: "Don State Technical University",
        intro: "A prestigious technical university in Rostov-on-Don, focusing on engineering and applied sciences.",
        about: "Don State Technical University (DSTU) is one of the oldest and most respected technical universities in Southern Russia. It specializes in engineering, technology, and applied sciences, providing a strong foundation for students pursuing careers in these fields.",
        about2: "DSTU is renowned for its research output in fields such as mechanical engineering, electronics, and information technology. The university has collaborations with various industries and offers practical training to students to prepare them for the global workforce.",
        aboutImage: "https://www.ruseducation.in/wp-content/uploads/2022/02/don-state-banner.webp",
        admissionSteps: [
          { step: "Step 1: Application Submission", description: "Submit the online application along with your academic transcripts, a passport copy, and other necessary documents." },
          { step: "Step 2: Invitation Letter", description: "Upon acceptance of your application, you will receive an official invitation letter from DSTU." },
          { step: "Step 3: Visa Processing", description: "Apply for a student visa at the Russian consulate with the invitation letter and necessary documents." },
          { step: "Step 4: Travel & Arrival", description: "Book your flight to Rostov-on-Don and inform the university of your arrival time." },
          { step: "Step 5: Registration & Orientation", description: "Complete university registration and attend the orientation program to help you adjust to student life at DSTU." },
        ],
        admissionImage: "/images/don-state-technical-university-admission.jpg",
        bottomBanner: "https://www.shutterstock.com/image-photo/rostovondon-russia-june-21-2015-260nw-1787776259.jpg",
        bottomText: "Join Don State Technical University for a top-tier engineering education in the heart of Southern Russia!",
      },
      {
        id: "southern-federal-university",
        name: "Southern Federal University",
        intro: "A leading university in Rostov-on-Don, focusing on science, engineering, and humanities.",
        about: "Southern Federal University (SFU) is one of the largest universities in Russia, offering a broad range of programs in science, engineering, and the humanities. SFU is known for its modern research facilities and a diverse student body from all over the world.",
        about2: "SFU is home to cutting-edge research in fields such as physics, biology, and computer science. It maintains strong partnerships with international universities and industries, providing its students with global opportunities for career growth.",
        aboutImage: "https://sfedu.ru/files/imagecache/newsBig/presscenter/b6b/78b/news_pic_id75618.jpg",
        admissionSteps: [
          { step: "Step 1: Application Submission", description: "Submit the online application along with your academic transcripts, a passport copy, and other necessary documents." },
          { step: "Step 2: Invitation Letter", description: "Upon acceptance of your application, you will receive an official invitation letter from SFU." },
          { step: "Step 3: Visa Processing", description: "Apply for a student visa at the Russian consulate with the invitation letter and necessary documents." },
          { step: "Step 4: Travel & Arrival", description: "Book your flight to Rostov-on-Don and inform the university of your arrival time." },
          { step: "Step 5: Registration & Orientation", description: "Complete university registration and attend the orientation program to help you adjust to student life at SFU." },
        ],
        admissionImage: "/images/southern-federal-university-admission.jpg",
        bottomBanner: "https://hedclub.com/data/pub/64/sqwyuL7Mfeg6jbXe_OKY.jpg",
        bottomText: "Embark on an exciting academic journey at Southern Federal University in Russia's vibrant South!",
      },
      {
        id: "rostov-state-university-of-economics",
        name: "Rostov State University of Economics (Russia)",
        intro: "A renowned university specializing in economics, business, and management studies in Rostov-on-Don.",
        about: "Rostov State University of Economics (RSUE) is an institution offering in-depth programs in economics, business administration, and international relations. It is highly regarded for its research contributions and its partnerships with businesses and governmental organizations.",
        about2: "RSUE emphasizes practical skills and internships, ensuring that students are prepared to excel in competitive global markets. The university's alumni are known to occupy leadership roles in economics, finance, and commerce worldwide.",
        aboutImage: "https://www.rusvuz.com/wp-content/uploads/2020/06/Rostov-State-Economics-University.jpg",
        admissionSteps: [
          { step: "Step 1: Application Submission", description: "Submit the online application along with your academic transcripts, a passport copy, and other necessary documents." },
          { step: "Step 2: Invitation Letter", description: "Once your application is accepted, you will receive an official invitation letter from RSUE." },
          { step: "Step 3: Visa Processing", description: "Apply for a student visa at the Russian consulate with the invitation letter and necessary documents." },
          { step: "Step 4: Travel & Arrival", description: "Book your flight to Rostov-on-Don and inform the university of your arrival time." },
          { step: "Step 5: Registration & Orientation", description: "Complete university registration and participate in the orientation program to help you settle in." },
        ],
        admissionImage: "/images/rostov-state-university-of-economics-admission.jpg",
        bottomBanner: "https://hedclub.com/data/universities/629/main_image/Y6Bpf2_IPNlifnY6TH7G.jpg",
        bottomText: "Study economics and business in one of Russia's most dynamic academic environments at RSUE!",
      },
      {
        id: "ukhta-state-technical-university",
        name: "Ukhta State Technical University",
        intro: "A prominent technical university in the Russian North, known for its engineering, energy, and environmental programs.",
        about: "Ukhta State Technical University (USTU) is a leading institution in the Russian North, specializing in engineering, energy, and environmental sciences. The university plays a key role in research and training for the oil, gas, and energy industries in the region.",
        about2: "USTU is recognized for its innovative approaches to engineering education and research, with strong connections to major energy companies. The university prepares students for successful careers in energy, environmental protection, and other applied fields.",
        aboutImage: "https://en.ugtu.net/sites/default/files/styles/xlarge/public/p1180892-pano.jpg?itok=WANpxYOR",
        admissionSteps: [
          { step: "Step 1: Application Submission", description: "Submit the online application along with your academic transcripts, a passport copy, and other necessary documents." },
          { step: "Step 2: Invitation Letter", description: "Upon acceptance of your application, you will receive an official invitation letter from USTU." },
          { step: "Step 3: Visa Processing", description: "Apply for a student visa at the Russian consulate with the invitation letter and necessary documents." },
          { step: "Step 4: Travel & Arrival", description: "Book your flight to Ukhta and inform the university of your arrival time." },
          { step: "Step 5: Registration & Orientation", description: "Complete university registration and attend the orientation program to help you adjust to life in Ukhta." },
        ],
        admissionImage: "/images/ukhta-state-technical-university-admission.jpg",
        bottomBanner: "https://s3-ap-southeast-1.amazonaws.com/cdn.buddy4study.com/static/admission/college/942/banner/institute_942_banner1565331288.jpg",
        bottomText: "Study at Ukhta State Technical University and become a leader in energy and environmental sciences!",
      },
      {
        id: "udmurt-state-university",
        name: "Udmurt State University",
        intro: "A prominent institution in the Udmurt Republic, offering a broad spectrum of academic programs in the sciences, humanities, and arts.",
        about: "Udmurt State University (UDU) is located in the Udmurt Republic and is recognized for its diverse academic offerings. The university provides programs in fields such as engineering, social sciences, humanities, and natural sciences, and is known for its strong research contributions in these areas.",
        about2: "UDU has built a reputation for academic excellence, with a focus on innovation and research. The university works closely with industries and offers a variety of programs designed to meet the needs of the local and global job markets.",
        aboutImage: "https://www.red-soft.ru/temporary/blog/451_0.png",
        admissionSteps: [
          { step: "Step 1: Application Submission", description: "Submit the online application along with your academic transcripts, a passport copy, and other necessary documents." },
          { step: "Step 2: Invitation Letter", description: "Once your application is accepted, you will receive an official invitation letter from Udmurt State University." },
          { step: "Step 3: Visa Processing", description: "Apply for a student visa at the Russian consulate with the invitation letter and necessary documents." },
          { step: "Step 4: Travel & Arrival", description: "Book your flight to Izhevsk and inform the university of your arrival time." },
          { step: "Step 5: Registration & Orientation", description: "Complete university registration and attend the orientation program to help you get acquainted with the campus and university life." },
        ],
        admissionImage: "/images/udmurt-state-university-admission.jpg",
        bottomBanner: "https://i.ytimg.com/vi/RbYg7Vsr6_E/maxresdefault.jpg",
        bottomText: "Join Udmurt State University for a comprehensive academic experience in the heart of Russia's Udmurt Republic!",
      }
      
      
    // More universities can be added in a similar structure
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
                    <h1 className="text-2xl md:text-5xl px-6 font-semibold drop-shadow-lg text-center">
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
