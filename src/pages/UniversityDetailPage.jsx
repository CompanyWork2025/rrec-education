import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
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
        id: "ural",
        name: "Ural State Medical University",
        intro: "A prestigious medical institution in the Ural region with a strong academic reputation.",
        about: "Ural State Medical University (USMU) is a government-run medical institution located in Yekaterinburg. It is recognized by the World Health Organization (WHO) and offers high-quality medical education for international students.",
        about2: "USMU provides a robust learning environment with modern laboratories, extensive clinical exposure, and experienced faculty members dedicated to fostering the next generation of healthcare professionals.",
        aboutImage: "https://yourchoice.re/wp-content/uploads/2022/05/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9-%D8%A7%D9%84%D8%A7%D9%88%D8%B1%D8%A7%D9%84-%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%A9-%D8%A7%D9%84%D8%AD%D9%83%D9%88%D9%85%D9%8A-%D8%A9.png",
        admissionSteps: [
            {
                step: "Step 1: Application & Eligibility",
                description: "Submit your application along with the required academic documents, ensuring you meet the eligibility criteria.",
            },
            {
                step: "Step 2: Receive Invitation Letter",
                description: "After approval, an invitation letter will be issued within 7-10 working days.",
            },
            {
                step: "Step 3: Visa Processing",
                description: "Apply for a student visa using the invitation letter and medical reports.",
            },
            {
                step: "Step 4: Travel & Arrival",
                description: "Book your travel and inform the university about your arrival schedule.",
            },
            {
                step: "Step 5: University Registration",
                description: "Complete the registration, medical checkups, and document verification before beginning classes.",
            },
        ],
        admissionImage: "/images/ural-admission.jpg",
        bottomBanner: "https://www.edufever.com/wp-content/uploads/2021/10/Ural-State-Medical-University-Russia.webp",
        bottomText: "Start your medical journey at Ural State Medical University!",
    },
    {
        id: "kemerovo",
        name: "Kemerovo State Medical University",
        intro: "A well-respected medical university known for its research and academic excellence.",
        about: "Kemerovo State Medical University offers specialized medical training with a strong focus on research and clinical practice. It is recognized by WHO and other international organizations.",
        about2: "The university provides students with access to advanced medical technology and hands-on training in its affiliated hospitals.",
        aboutImage: "https://flyfuture.in/admin/services/1659952140.jpg",
        admissionSteps: [
            {
                step: "Step 1: Application & Eligibility",
                description: "Submit your application with academic transcripts and necessary certifications.",
            },
            {
                step: "Step 2: Receive Invitation Letter",
                description: "Successful applicants will receive an invitation letter within 10 days.",
            },
            {
                step: "Step 3: Visa Processing",
                description: "Apply for a student visa at the nearest Russian consulate.",
            },
            {
                step: "Step 4: Travel & Arrival",
                description: "Arrange your travel and coordinate your arrival details with the university.",
            },
            {
                step: "Step 5: University Registration",
                description: "Upon arrival, complete all necessary documentation and registration formalities.",
            },
        ],
        admissionImage: "/images/kemerovo-admission.jpg",
        bottomBanner: "https://hedclub.com/data/universities/364/main_image/88ic2R2jm33YVyuMHLXu.jpg",
        bottomText: "Study at Kemerovo State Medical University for a world-class education!",
    },
    {
        id: "north-western",
        name: "North-Western State Medical University",
        intro: "A prestigious medical university known for its excellent research and training programs.",
        about: "North-Western State Medical University is one of the leading medical universities in Russia, located in Saint Petersburg. The university offers a comprehensive range of medical programs and has strong international partnerships for research and student exchange. It has a reputation for producing skilled doctors and specialists in various medical fields.",
        about2: "Founded in 1994, the university is recognized for its advanced educational methods and research in medical science. It offers modern teaching facilities, well-equipped laboratories, and extensive clinical practice opportunities.",
        aboutImage: "https://welcometostudy.com/sites/default/files/higher-education/137/north-westernstatemedicaluniversitynamedafteriimechnikov.jpg",
        admissionSteps: [
          {
            step: "Step 1: Application & Eligibility",
            description: "Submit the online application form and required documents. Ensure you meet the eligibility criteria, including minimum educational qualifications.",
          },
          {
            step: "Step 2: Receive Invitation Letter",
            description: "Upon document verification, the university will send an official invitation letter, which is required for the visa process.",
          },
          {
            step: "Step 3: Visa Processing",
            description: "Apply for a student visa with the invitation letter and necessary documents. The visa processing time typically takes 10-15 working days.",
          },
          {
            step: "Step 4: Travel & Arrival",
            description: "After receiving your visa, book your flight to Russia and inform the university of your arrival date. Airport pick-up services are available.",
          },
          {
            step: "Step 5: University Registration",
            description: "Upon arrival, complete necessary medical tests, document verification, and hostel registration before attending the university orientation.",
          },
        ],
        admissionImage: "/images/north-western-admission.jpg",
        bottomBanner: "https://studypalacehub.com/wp-content/uploads/2024/07/NWSMU-1024x672.webp",
        bottomText: "Become part of one of Russia’s premier medical universities!",
      },
      {
        id: "crimea-medical",
        name: "Crimea Federal University - Medical Faculty",
        intro: "A leading medical faculty offering high-quality education in a scenic location.",
        about: "Crimea Federal University, located in Simferopol, Crimea, is a top institution known for its high standards in medical education. The Medical Faculty is renowned for producing highly competent medical professionals who are well-prepared to meet international standards.",
        about2: "Founded in 2014, Crimea Federal University combines modern medical education techniques with clinical practice and research. The university offers a wide variety of specializations, modern facilities, and extensive international collaborations.",
        aboutImage: "https://www.ruseducation.in/wp-content/uploads/2022/01/Crimea-Federal-University.webp",
        admissionSteps: [
          {
            step: "Step 1: Application & Eligibility",
            description: "Submit your application and required documents to meet the eligibility criteria, including the minimum academic qualifications.",
          },
          {
            step: "Step 2: Receive Invitation Letter",
            description: "Upon verification of documents, an official invitation letter will be sent to you to facilitate your visa application.",
          },
          {
            step: "Step 3: Visa Processing",
            description: "Apply for your student visa with the official invitation letter and medical check-up reports. Visa processing generally takes 10-15 working days.",
          },
          {
            step: "Step 4: Travel & Arrival",
            description: "Book your flight and inform the university. Airport pick-up services will be arranged to assist you upon arrival.",
          },
          {
            step: "Step 5: University Registration",
            description: "Complete your registration, medical tests, and hostel formalities upon arrival at the university.",
          },
        ],
        admissionImage: "/images/crimea-admission.jpg",
        bottomBanner: "https://www.ruseducation.in/wp-content/uploads/2022/01/Crimea-Federal-University.webp",
        bottomText: "Join Crimea Federal University and shape your future in medicine!",
      },
      {
        id: "kursk",
        name: "Kursk State Medical University",
        intro: "A prestigious medical institution with a focus on medical research and clinical practice.",
        about: "Kursk State Medical University, located in Kursk, Russia, is one of the oldest and most respected medical universities in the country. The university is known for its excellent medical education programs and its contributions to medical research.",
        about2: "Founded in 1935, the university has developed into a world-class institution with modern teaching methods, excellent clinical practice facilities, and an international student body.",
        aboutImage: "https://images.shiksha.com/mediadata/images/1595568848phpHA9Mh4.jpeg",
        admissionSteps: [
          {
            step: "Step 1: Application & Eligibility",
            description: "Submit your application along with the necessary documents to confirm eligibility for admission.",
          },
          {
            step: "Step 2: Receive Invitation Letter",
            description: "After verifying your documents, the university will send an invitation letter for visa processing.",
          },
          {
            step: "Step 3: Visa Processing",
            description: "With the invitation letter and medical reports, apply for a student visa. Visa processing time usually takes 10-15 working days.",
          },
          {
            step: "Step 4: Travel & Arrival",
            description: "Book your flight and notify the university. Airport pick-up services are available to assist you upon arrival.",
          },
          {
            step: "Step 5: University Registration",
            description: "Complete your registration, medical check-ups, and hostel registration after your arrival.",
          },
        ],
        admissionImage: "/images/kursk-admission.jpg",
        bottomBanner: "https://gmfadmission.in/wp-content/uploads/2022/07/kursk-state-medical-university.jpeg",
        bottomText: "Study at Kursk State Medical University, where your future in medicine begins!",
      },
      {
        id: "bashkir",
        name: "Bashkir State Medical University",
        intro: "A leading medical university known for its strong academic programs and research opportunities.",
        about: "Bashkir State Medical University, located in Ufa, Russia, offers a diverse range of medical courses and has established itself as one of the top medical universities in the country. Known for its high standards in education and research, the university continues to attract international students.",
        about2: "Founded in 1932, Bashkir State Medical University offers a robust curriculum, modern facilities, and access to some of the best medical practitioners in the country. The university is committed to training skilled healthcare professionals.",
        aboutImage: "https://studymedico.com/public//storage/uploads/university/blog185-BASHKIR%20STATE%20MEDICAL%20UNIVERSITY%20,%20MBBS%20IN%20RUSSIA_1.png",
        admissionSteps: [
          {
            step: "Step 1: Application & Eligibility",
            description: "Fill out the online application and submit your documents to ensure you meet the admission criteria.",
          },
          {
            step: "Step 2: Receive Invitation Letter",
            description: "Once your documents are verified, you will receive an official invitation letter for visa purposes.",
          },
          {
            step: "Step 3: Visa Processing",
            description: "Apply for your student visa with the invitation letter and necessary documents. The visa processing time is typically 10-15 working days.",
          },
          {
            step: "Step 4: Travel & Arrival",
            description: "Book your flight and notify the university of your arrival. Airport pick-up services will be arranged for you.",
          },
          {
            step: "Step 5: University Registration",
            description: "Upon arrival, complete the necessary medical tests, document verification, and hostel registration.",
          },
        ],
        admissionImage: "/images/bashkir-admission.jpg",
        bottomBanner: "https://www.ruseducation.in/wp-content/uploads/2022/01/Bashkir-State-Medical-University.webp",
        bottomText: "Pursue a medical degree at Bashkir State Medical University and be a part of our legacy!",
      },
      {
        id: "kazan-medical",
        name: "Kazan State Medical University",
        intro: "A top medical university with excellent facilities and international student exchange programs.",
        about: "Kazan State Medical University, located in Kazan, Russia, is a prestigious institution with a strong reputation for producing qualified medical professionals. The university offers a range of medical programs and emphasizes research and international collaboration.",
        about2: "Founded in 1814, Kazan State Medical University is one of the oldest and most respected medical schools in Russia. It offers cutting-edge education with modern teaching methods, state-of-the-art medical facilities, and clinical practice opportunities.",
        aboutImage: "https://studymbbsinrussia.co.in/wp-content/uploads/2016/04/kazan-medical-university-russia.jpg",
        admissionSteps: [
          {
            step: "Step 1: Application & Eligibility",
            description: "Submit your application form and required documents, ensuring that you meet the eligibility criteria for admission.",
          },
          {
            step: "Step 2: Receive Invitation Letter",
            description: "The university will send you an invitation letter after document verification for the purpose of applying for a visa.",
          },
          {
            step: "Step 3: Visa Processing",
            description: "With the invitation letter and required documents, you can apply for a student visa. Processing typically takes 10-15 working days.",
          },
          {
            step: "Step 4: Travel & Arrival",
            description: "Book your flight and notify the university. Airport pick-up services are provided upon arrival.",
          },
          {
            step: "Step 5: University Registration",
            description: "Upon arrival, complete your registration, medical tests, and hostel check-in before the university orientation.",
          },
        ],
        admissionImage: "/images/kazan-medical-admission.jpg",
        bottomBanner: "https://navchetana.education/assets/images/universities/Russia/Kazan-State.jpg",
        bottomText: "Study medicine at Kazan State Medical University, a historic institution that prepares you for a successful medical career!",
      },
      {
        id: "maikop-medical",
        name: "Maikop State Technological University - Medical Faculty",
        intro: "A rising medical faculty known for its modern approach to medical education and training.",
        about: "Maikop State Technological University, located in Maikop, Russia, is gaining recognition for its medical faculty, which offers a blend of modern education and practical training in healthcare. The university focuses on preparing specialists who can contribute to both local and global healthcare systems.",
        about2: "Founded in 1950, Maikop State Technological University has expanded its medical faculty to include a variety of medical specializations. The university is equipped with advanced training centers and clinics to provide hands-on experience to students.",
        aboutImage: "https://www.indomededucare.com/Admin/Indomed_AdminDash/Admin/collegeuploads/Maikop-State-Technological-University.jpg",
        admissionSteps: [
          {
            step: "Step 1: Application & Eligibility",
            description: "Submit the online application and required documents, ensuring that you meet the eligibility criteria, including academic qualifications.",
          },
          {
            step: "Step 2: Receive Invitation Letter",
            description: "After verification of documents, the university will send an official invitation letter for your student visa application.",
          },
          {
            step: "Step 3: Visa Processing",
            description: "Apply for a student visa with the invitation letter and necessary medical documents. The processing time usually takes 10-15 working days.",
          },
          {
            step: "Step 4: Travel & Arrival",
            description: "Book your flight and inform the university of your arrival date. Airport pick-up services are available.",
          },
          {
            step: "Step 5: University Registration",
            description: "Complete medical tests, document verification, and hostel registration upon arrival before attending the orientation session.",
          },
        ],
        admissionImage: "/images/maikop-medical-admission.jpg",
        bottomBanner: "https://www.worldwidecolleges.com/wp-content/uploads/classified-listing/2024/02/Maykop-State-Technological-University-Russia-1.webp",
        bottomText: "Join Maikop State Technological University’s Medical Faculty and take the first step toward a successful medical career!",
      },
      {
        id: "volgograd",
        name: "Volgograd State Medical University",
        intro: "A historic medical university with a focus on clinical practice and research.",
        about: "Volgograd State Medical University, located in Volgograd, Russia, is one of the leading medical institutions known for its high educational standards and research contributions. The university offers comprehensive medical programs that prepare students for both domestic and international healthcare systems.",
        about2: "Founded in 1935, Volgograd State Medical University has established itself as a premier destination for medical education in Russia. The university is equipped with modern classrooms, research labs, and clinical facilities to support medical students in their education and career development.",
        aboutImage: "https://www.ruseducation.in/wp-content/uploads/2022/01/Volgograd-State-Medical-University-2.webp",
        admissionSteps: [
          {
            step: "Step 1: Application & Eligibility",
            description: "Submit your application and required documents. Ensure you meet the eligibility criteria, including academic qualifications and necessary prerequisites.",
          },
          {
            step: "Step 2: Receive Invitation Letter",
            description: "After the document review process, the university will send you an official invitation letter to help with your visa application.",
          },
          {
            step: "Step 3: Visa Processing",
            description: "Apply for a student visa with the invitation letter and medical documents. Visa processing typically takes 10-15 working days.",
          },
          {
            step: "Step 4: Travel & Arrival",
            description: "Once you receive your visa, book your flight to Russia and notify the university of your arrival. The university will assist with airport pick-up services.",
          },
          {
            step: "Step 5: University Registration",
            description: "Complete the necessary medical check-ups, document verification, and hostel registration before attending the orientation session.",
          },
        ],
        admissionImage: "/images/volgograd-admission.jpg",
        bottomBanner: "https://www.studyabroadedu.com/study-mbbs-in-russia/images/univ/volgograd-state-medical-university.jpg",
        bottomText: "Become part of Volgograd State Medical University and build a successful career in medicine!",
      },
      {
        id: "perm",
        name: "Perm State Medical University",
        intro: "A well-established medical university with a focus on practical experience and patient care.",
        about: "Perm State Medical University, located in Perm, Russia, offers a range of medical programs that focus on both theoretical knowledge and practical experience in clinical settings. The university is known for its research excellence and dedication to improving healthcare standards.",
        about2: "Founded in 1916, Perm State Medical University has a long history of training skilled healthcare professionals. The university offers a well-rounded education with modern teaching methods, excellent clinical training, and research opportunities.",
        aboutImage: "https://blog.rmgoe.org/wp-content/uploads/2023/04/Perm-State-Medical-University-Russia.jpg",
        admissionSteps: [
          {
            step: "Step 1: Application & Eligibility",
            description: "Complete the online application and submit all necessary documents to meet the eligibility criteria, including academic qualifications and language proficiency.",
          },
          {
            step: "Step 2: Receive Invitation Letter",
            description: "Once your documents are reviewed, the university will send you an invitation letter for visa processing.",
          },
          {
            step: "Step 3: Visa Processing",
            description: "Apply for a student visa using the invitation letter and other required documents. The visa processing time is typically 10-15 working days.",
          },
          {
            step: "Step 4: Travel & Arrival",
            description: "Once you receive your visa, book your flight and inform the university. Airport pick-up services will be arranged upon your arrival.",
          },
          {
            step: "Step 5: University Registration",
            description: "After arriving in Perm, complete your medical tests, document verification, and hostel registration before starting your studies.",
          },
        ],
        admissionImage: "/images/perm-admission.jpg",
        bottomBanner: "https://admissionroute.com/wp-content/uploads/2022/03/perm-state-university_0-1024x446.jpg",
        bottomText: "Start your medical career at Perm State Medical University, one of Russia’s leading institutions for healthcare education!",
      },
      {
        id: "orenburg",
        name: "Orenburg State Medical University",
        intro: "An established medical university offering comprehensive training in medicine and healthcare.",
        about: "Orenburg State Medical University, located in Orenburg, Russia, offers high-quality medical programs with a strong focus on clinical training and patient care. The university provides state-of-the-art facilities for medical education and research.",
        about2: "Founded in 1944, Orenburg State Medical University has developed into a prominent medical school in Russia. The university offers a range of specialized programs in medicine and health sciences, with a focus on preparing students for successful careers in healthcare.",
        aboutImage: "https://www.ruseducation.in/wp-content/uploads/2020/11/Orenburg-State-Medical-University.webp",
        admissionSteps: [
          {
            step: "Step 1: Application & Eligibility",
            description: "Submit your application and all required documents to meet the eligibility criteria for admission to Orenburg State Medical University.",
          },
          {
            step: "Step 2: Receive Invitation Letter",
            description: "After reviewing your documents, the university will issue an invitation letter to assist with your student visa application.",
          },
          {
            step: "Step 3: Visa Processing",
            description: "Apply for your student visa using the invitation letter and necessary documentation. The visa processing period is typically 10-15 working days.",
          },
          {
            step: "Step 4: Travel & Arrival",
            description: "Once your visa is approved, book your flight and inform the university of your arrival date. The university provides airport pick-up services.",
          },
          {
            step: "Step 5: University Registration",
            description: "Complete medical tests, document verification, and hostel registration upon arrival at the university.",
          },
        ],
        admissionImage: "/images/orenburg-admission.jpg",
        bottomBanner: "https://www.raieducation.com/images/blog/1584686566_banner.png",
        bottomText: "Join Orenburg State Medical University and pursue a rewarding career in medicine!",
      },
      {
        id: "tver",
        name: "Tver State Medical University",
        intro: "A prominent medical university offering a comprehensive medical education and practical training.",
        about: "Tver State Medical University, located in Tver, Russia, has long been a hub for medical education in the region. With a commitment to producing highly skilled healthcare professionals, the university provides world-class medical training through its innovative programs and clinical practice.",
        about2: "Founded in 1936, Tver State Medical University has been instrumental in training medical professionals for Russia and abroad. The university’s modern campus is equipped with state-of-the-art laboratories, research facilities, and clinical centers to ensure the best education for its students.",
        aboutImage: "https://images.shiksha.com/mediadata/images/1434083689phpyEuq2x.png",
        admissionSteps: [
          {
            step: "Step 1: Application & Eligibility",
            description: "Submit your online application along with the required documents. Ensure that you meet the university’s eligibility criteria.",
          },
          {
            step: "Step 2: Receive Invitation Letter",
            description: "Once your application is processed, you will receive an official invitation letter to support your student visa application.",
          },
          {
            step: "Step 3: Visa Processing",
            description: "Apply for a student visa with the invitation letter and other required documents. Visa processing usually takes 10-15 working days.",
          },
          {
            step: "Step 4: Travel & Arrival",
            description: "After receiving your visa, book your flight to Russia and inform the university of your arrival. Airport pick-up services are available.",
          },
          {
            step: "Step 5: University Registration",
            description: "Upon arrival, complete your medical tests, document verification, and hostel registration before starting your academic journey.",
          },
        ],
        admissionImage: "/images/tver-admission.jpg",
        bottomBanner: "https://images.shiksha.com/mediadata/images/articles/1712315231php7to1mD.jpeg",
        bottomText: "Join Tver State Medical University and take your first step toward becoming a healthcare professional!",
      },
      {
        id: "spb-pediatric",
        name: "Saint Petersburg State Pediatric Medical University",
        intro: "A leading university specializing in pediatric medical education with a strong research focus.",
        about: "Saint Petersburg State Pediatric Medical University is one of the top institutions in Russia dedicated to pediatric medicine and child healthcare. The university combines cutting-edge research with practical clinical training to ensure that students graduate as highly competent pediatric specialists.",
        about2: "Founded in 1925, Saint Petersburg State Pediatric Medical University is internationally recognized for its specialized focus on pediatric education. The university boasts state-of-the-art laboratories, clinical centers, and a strong partnership with top healthcare institutions to provide practical training to its students.",
        aboutImage: "https://www.worldwidecolleges.com/wp-content/uploads/2022/03/Saint-Petersburg-Pediatric-Medical-University.jpg",
        admissionSteps: [
          {
            step: "Step 1: Application & Eligibility",
            description: "Complete the application process and submit all required documents. Ensure you meet the eligibility criteria before applying.",
          },
          {
            step: "Step 2: Receive Invitation Letter",
            description: "After document review, the university will issue an invitation letter, which is required for visa processing.",
          },
          {
            step: "Step 3: Visa Processing",
            description: "Apply for a student visa with the invitation letter and medical documents. The visa process typically takes 10-15 working days.",
          },
          {
            step: "Step 4: Travel & Arrival",
            description: "Once your visa is approved, book your flight and inform the university. They will provide airport pick-up assistance.",
          },
          {
            step: "Step 5: University Registration",
            description: "Complete medical tests, document verification, and hostel registration upon arrival before attending the orientation session.",
          },
        ],
        admissionImage: "/images/spb-pediatric-admission.jpg",
        bottomBanner: "https://www.moksh16.com/uploads/images/alte-university-school-of-medicine-georgia/Russia/Saint-Petersburg-Pediatric-Medical-01.webp",
        bottomText: "Join the prestigious Saint Petersburg State Pediatric Medical University and become an expert in pediatric healthcare!",
      },
      {
        id: "kazan-federal",
        name: "Kazan Federal University",
        intro: "A prestigious university offering comprehensive medical programs with strong international ties.",
        about: "Kazan Federal University, located in Kazan, Russia, is one of the oldest and most esteemed institutions in the country. Known for its academic excellence and research-driven approach, the university offers a range of medical programs that attract students from around the world.",
        about2: "Founded in 1804, Kazan Federal University has a long history of providing top-quality education. The university has modern medical training facilities, world-class research centers, and extensive international cooperation, ensuring students receive the best education possible.",
        aboutImage: "https://studypalacehub.com/wp-content/uploads/2023/03/cr2.webp",
        admissionSteps: [
          {
            step: "Step 1: Application & Eligibility",
            description: "Submit your application along with the required documents. Ensure that you meet all eligibility requirements for admission.",
          },
          {
            step: "Step 2: Receive Invitation Letter",
            description: "Once the application is processed and documents are verified, the university will issue an invitation letter to facilitate your visa application.",
          },
          {
            step: "Step 3: Visa Processing",
            description: "Apply for a student visa with the invitation letter and necessary medical documents. The visa processing takes about 10-15 working days.",
          },
          {
            step: "Step 4: Travel & Arrival",
            description: "Once your visa is granted, book your flight to Kazan and inform the university. The university will arrange airport pick-up services.",
          },
          {
            step: "Step 5: University Registration",
            description: "Upon arrival, you will undergo medical tests, document verification, and hostel registration before beginning your academic journey.",
          },
        ],
        admissionImage: "/images/kazan-federal-admission.jpg",
        bottomBanner: "https://blog.rmgoe.org/wp-content/uploads/2022/06/Kazan-Federal-University-Russia_.jpg",
        bottomText: "Start your medical education at Kazan Federal University and be a part of its rich academic tradition!",
      },
      {
        id: "synergy-medical",
        name: "Synergy University - Medical Faculty",
        intro: "A modern university offering specialized medical programs with a focus on innovation and technology.",
        about: "Synergy University, with its Medical Faculty, offers cutting-edge medical programs that incorporate innovative teaching methods and the latest medical technologies. The university prepares students for a wide range of medical careers, with a focus on practical and clinical training.",
        about2: "Synergy University is a relatively new but rapidly growing educational institution. The Medical Faculty offers programs that combine theory with hands-on clinical practice, ensuring that students are prepared for the ever-evolving healthcare industry.",
        aboutImage: "https://overseasmedicalstudy.com/admin/uploads/imagebag/1a39ae95781687438693.jpg",
        admissionSteps: [
          {
            step: "Step 1: Application & Eligibility",
            description: "Complete the application form and submit the required documents. Make sure you meet the eligibility criteria for admission to the Medical Faculty.",
          },
          {
            step: "Step 2: Receive Invitation Letter",
            description: "After your documents are reviewed, you will receive an official invitation letter to support your student visa application.",
          },
          {
            step: "Step 3: Visa Processing",
            description: "Apply for a student visa with the invitation letter and medical documents. The visa processing time usually takes 10-15 working days.",
          },
          {
            step: "Step 4: Travel & Arrival",
            description: "Once your visa is approved, book your flight and inform the university of your arrival date. The university will assist with airport pick-up.",
          },
          {
            step: "Step 5: University Registration",
            description: "Complete medical check-ups, document verification, and hostel registration upon your arrival at Synergy University.",
          },
        ],
        admissionImage: "/images/synergy-medical-admission.jpg",
        bottomBanner: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiiqPlKVxR56iJGWCJUGm3egI8j3YnjJp2TbVauZ72cRu0sCflc8-g7m5064oxGy1l9H4WCBwdZsMOS4KZGB75L5V-UvxD8aOtZzWRFlnl7fqzlIUgnkAN16_Rq_HleQ58rMiwkJdUzqbJyYrPhsElD8nwSZwspIYdeeLs3aAz3tUIA2piExcJDdl2APw/s640/photo-3-9e8e465724.jpg",
        bottomText: "Join Synergy University’s Medical Faculty and be a part of an innovative and dynamic medical education system!",
      },    
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
            {/* Helmet for SEO */}
            <Helmet>
                <title>{university.name} - Admission Process</title>
                <meta name="description" content={university.intro} />
                <meta name="keywords" content={`Admission, ${university.name}, Medical University, Russia`} />
                <meta property="og:title" content={university.name} />
                <meta property="og:description" content={university.intro} />
                <meta property="og:image" content={university.aboutImage} />
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
                        <img
                            src={university.aboutImage}
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
