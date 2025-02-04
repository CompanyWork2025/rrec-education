import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Used for navigation to card detail

// Blog card data
const blogCards = [
  {
    id: 1,
    title: "Rostov University: A Leading Educational Hub in Russia",
    description: "Explore Rostov University, one of Russia's top institutions offering world-class education, cutting-edge research, and diverse academic programs.",
    authorImage: "https://worldwidecolleges.com/wp-content/uploads/2022/03/logo252.png",
    image: "https://dissernet.org/uploads/2022/10/31/635ff6159982d_127796_1350.jpg",
    additionalInfo: "Rostov State Medical University is one of Russia's leading institutions of higher education, renowned for its outstanding programs in medicine and healthcare. Founded in 1915, this prestigious university has a rich history of excellence in medical training, research, and clinical practice. Situated in the vibrant city of Rostov-on-Don, the university boasts state-of-the-art facilities and a global reputation for educating some of the best doctors and healthcare professionals in the country and beyond.",
    visitUrl: "https://www.rostgmu.in/"
  },
  {
    id: 2,
    title: "Kazan State Medical University: A Premier Medical Institution in Russia",
    description: "Kazan State Medical University (KSMU), established in 1814, is one of Russia's oldest and most prestigious medical institutions. Located in Kazan, Tatarstan, it operates under the Ministry of Health of Russia and offers a range of medical programs across nine faculties.",
    authorImage: "https://upload.wikimedia.org/wikipedia/ru/1/14/KSMU_logo.png",
    image: "https://mir-cdn.behance.net/v1/rendition/project_modules/max_3840/a31f24174446019.64a2deea7d659.png",
    additionalInfo: "Situated in the central area of Kazan, KSMU offers a vibrant campus life with modern facilities, including well-equipped laboratories, libraries, and comfortable hostels. The university also hosts various cultural and sports events, providing a holistic educational experience. ",
    visitUrl: "https://www.studymbbsinkazan.com/"
  },
  {
    id: 3,
    title: "Kursk State Medical University: Excellence in Higher Education in Russia",
    description: "Kursk State Medical University offers diverse academic programs with a strong focus on research and innovation, aiming to prepare students for global opportunities.",
    authorImage: "https://avatars.mds.yandex.net/i?id=f88858791dfe83477d8d4164bb0a87e1_l-4464154-images-thumbs&n=13",
    image: "https://smapse.ru/storage/2019/08/x1-37.jpg",
    additionalInfo: "KSMU provides modern facilities, including well-equipped laboratories, libraries, and comfortable hostels. The university also hosts various cultural and sports events, offering a holistic educational experience. ",
    visitUrl: "http://www.studymbbsinkursk.com/"
  },
  {
    id: 4,
    title: "Bashkir Medical State University: Russia's Top Academic Destination",
    description: "The university is renowned for its high-quality medical education and cutting-edge infrastructure that aids students in their studies and knowledge growth in the medical field. ",
    authorImage: "https://uust.ru/unit/media/uploads/subdivuploads/z_%D0%95%D0%98%D0%9A/%D0%9F%D0%B0%D1%80%D1%82%D0%BD%D0%B5%D1%80%D1%8B/bgmu.png",
    image: "https://sun6-21.userapi.com/impf/H1usIp-feHo1J4SkVQTKFcAZADWxijjQ47xK6Q/lvceRW08pjg.jpg?size=1818x606&quality=95&crop=0,0,1590,530&sign=445b61d7962fbde80789190d37a86df5&type=cover_group",
    additionalInfo: "BSMU has partnerships with reputed hospitals, clinics, research institutes, and international medical organizations, providing students with diverse clinical experiences and exposure to different medical applications and resources. ",
    visitUrl: "https://www.thedoctorsiea.in/"
  },
  {
    id: 5,
    title: "Yaroslavl State University: Leading Education in Russia and Beyond",
    description: "Yaroslavl State Medical University (YSMU), established in 1944, is a prominent medical institution located in Yaroslavl, Russia.",
    authorImage: "https://sun1-83.userapi.com/s/v1/ig2/8HYMedfwx01zUb3yXFZmad0i0x1DBcIhpw-B3OEARmryQTsR4zTuekBfJOtcVwK6sgt_J5a1knbcLkM9XzxFMw4j.jpg?size=704x705&quality=95&crop=24,9,704,705&ava=1",
    image: "https://avatars.mds.yandex.net/i?id=3390f53dea7ba1ad4c603d91ee6f242b_l-2918686-images-thumbs&n=13",
    additionalInfo: "YSMU provides modern facilities, including well-equipped laboratories, libraries, and comfortable hostels. The university also hosts various cultural and sports events, offering a holistic educational experience. ",
    visitUrl: "www.thedoctorsiea.in/"
  },
  {
    id: 6,
    title: "Crimea federal university: Medical Institute ",
    description: "The Medical Institute named after S.I. Georgievsky is a prominent division of the V.I. Vernadsky Crimean Federal University, located in Simferopol, Crimea. Established in 1918.",
    authorImage: "https://avatars.mds.yandex.net/i?id=f94d4d6785247bde9e3dd7493464e4f2_l-5233210-images-thumbs&n=13",
    image: "https://avatars.mds.yandex.net/i?id=37e43d0366c3cc89b7c753908d90689c_l-8343045-images-thumbs&n=13",
    additionalInfo: "The institute offers a vibrant campus life with various cultural, sports, and academic events. Student organizations and clubs provide opportunities for personal development and community engagement.",
    visitUrl: "https://www.rrecrussia.com/"
  },
  {
    id: 7,
    title: "Ural State Medical University: The Heart of Science in Siberia",
    description: "Ural State Medical University (USMU), established in 1930, is a prominent public medical institution located in Yekaterinburg, Russia. As a major center for medical education and research, USMU is home to approximately 6,000 students, both domestic and international.",
    authorImage: "https://prog.susu.ru/img/logoSUSU.png",
    image: "https://avatars.mds.yandex.net/i?id=5bd0c227256a18eeedd6bfa6cd3fdbd8_l-7756591-images-thumbs&n=13",
    additionalInfo: "The university provides modern facilities, including well-equipped laboratories, libraries, and comfortable accommodations. USMU also hosts various cultural and sports events, offering a holistic educational experience. ",
    visitUrl: "https://www.rrecrussia.com/"
  },
  {
    id: 8,
    title: "Kazan Federal University: Russia’s Premier Institution for International Students",
    description: "The Institute of Fundamental Medicine and Biology (IFMB) is a prominent division of Kazan Federal University (KFU), established in May 2012 through the merger of the Faculty of Biology and Soil Science with medical departments.",
    authorImage: "https://kpfu.ru/portal/docs/F1412758293/72b1797b0422d10993e2a5ed4a36198a.jpg",
    image: "https://avatars.mds.yandex.net/i?id=38cfb4a3ddcd171e7653b7fe503ab089_l-4347893-images-thumbs&n=13",
    additionalInfo: "KFU's Universiade Village, inaugurated in 2011, accommodates over 9,000 students, including international students from more than 100 countries. The complex comprises 20 buildings, sports facilities, grocery stores, and other amenities, providing a comfortable living environment for students. ",
    visitUrl: "https://www.rrecrussia.com/",
  },
  {
    id: 9,
    title: "Stavropol state medical university: Academic Excellence and Innovation",
    description: "StSMU is recognized by the Medical Council of India and is listed in the World Directory of Medical Schools published by the World Health Organization (WHO). This recognition enables graduates to pursue medical careers globally, subject to passing relevant national examinations.",
    authorImage: "https://www.jeduka.com/storage/school_image/2/stavropol-state-medical-university.png",
    image: "https://www.ruseducation.in/wp-content/uploads/2022/07/Ural-Federal-University.jpg",
    additionalInfo: "StSMU provides a supportive environment for students, with access to modern facilities, including well-equipped laboratories, libraries, and clinical training centers. The university also offers accommodation options and various extracurricular activities to enhance the overall student experience. ",
    visitUrl: "http://www.thdoctorsiea.in/"
  },
  {
    id: 10,
    title: "Pacific State Medical University (PSMU)",
    description: "Pacific State Medical University (PSMU), located in Vladivostok, Russia, was established in 1958. Originally part of the Far Eastern State University, it became an independent institution in 1958 and was later renamed PSMU in 2013. ",
    authorImage: "https://upload.wikimedia.org/wikipedia/en/b/b7/Pacific_State_Medical_University_logo.png",
    image: "https://i.ytimg.com/vi/FF5XXwZhOyw/maxresdefault.jpg",
    additionalInfo: "PSMU provides a supportive environment with modern facilities, including well-equipped laboratories, libraries, and clinical training centers. The university also offers accommodation options and various extracurricular activities to enhance the overall student experience. ",
    visitUrl: "http://www.thdoctorsiea.in/",
  },
  {
    id: 11,
    title: "Tver State Medical University (TSMU)",
    description: "TSMU maintains partnerships with several international institutions, including Saarland University in Germany and the Medical Academy of Lublin in Poland. These collaborations enhance academic exchange and research opportunities for students and faculty. ",
    authorImage: "https://kr-alliance.com/upload/iblock/82f/rnhm3lbtre3btf9ehfhpnyecq1d4590l.png",
    image: "https://i.pinimg.com/originals/75/3f/fa/753ffab9db1f845a46957278926e5f19.png",
    additionalInfo: "The university provides a supportive environment with modern facilities, including well-equipped laboratories, libraries, and clinical training centers. TSMU also offers accommodation options and various extracurricular activities to enrich the student experience. ",
    visitUrl: "http://www.thdoctorsiea.in/",
  },
  {
    id: 12,
    title: "Mari state university (Medical faculty)",
    description: "Mari State University, established in 1972, is a prominent educational institution located in Yoshkar-Ola, Russia. The university comprises six faculties and five institutes, offering a diverse range of programs across various disciplines. ",
    authorImage: "https://maristateuniversity.com/images/logo.png",
    image: "https://avatars.mds.yandex.net/i?id=ae7c812becfce5fbf93c0d429369dbd9_l-5670257-images-thumbs&ref=rim&n=13&w=1024&h=431",
    additionalInfo: "Mari State University provides a supportive environment with modern facilities, including well-equipped laboratories, libraries, and clinical training centers. The university also offers accommodation options and various extracurricular activities to enhance the overall student experience.",
    visitUrl: "http://www.thdoctorsiea.in/",
  },
  {
    id: 13,
    title: "Perm State Medical University (PSMU)",
    description: "Perm State Medical University (PSMU), established in 1916, is a prominent medical institution located in Perm, Russia. It offers a range of medical programs, including a 6-year MBBS course designed for international students.  ",
    authorImage: "https://avatars.mds.yandex.net/i?id=081a63e65952e7cf1729adc83e4e4549-4055261-images-thumbs&n=13",
    image: "https://i.ytimg.com/vi/wZF_NuTkRic/maxresdefault.jpg",
    additionalInfo: "The university's commitment to quality education and research makes it a favorable choice for medical aspirants worldwide.",
    visitUrl: "https://www.rrecrussia.com/",
  },
  {
    id: 14,
    title: "Tula State University (TSU)",
    description: "Tula State University (TSU), established in 1930, is a prominent educational institution in Russia. It comprises nine faculties, including a dedicated Medical Institute.  ",
    authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrSQlyrPNLCuvZQg4tZ2Iz3T54cDxXBH2t4w&s",
    image: "https://avatars.mds.yandex.net/i?id=dc724584c4569cd850ee70bc06880de3_l-5723051-images-thumbs&n=13",
    additionalInfo: "International Cooperation: TSU maintains partnerships with educational institutions in over 20 countries, including Armenia, Belarus, Bulgaria, Vietnam, Germany, Egypt, India, Spain, Italy, Jordan, Kazakhstan, Syria, Ukraine, and Montenegro.",
    visitUrl: "http://www.thedoctorsiea.in/",
  },
  {
    id: 15,
    title: "Pskov State University (PSU)",
    description: "Pskov State University (PSU), established in 1936, is a prominent educational institution in Russia. It comprises six multidisciplinary institutes, including the Institute of Medicine and Experimental Biology, which houses the medical faculty.   ",
    authorImage: "https://upload.wikimedia.org/wikipedia/en/6/68/Logo_of_Pskov_State_University.png",
    image: "https://static.mk.ru/upload/entities/2021/10/08/10/photoreportsImages/detailPicture/96/28/9c/cf/2950299_9153142.jpg",
    additionalInfo: "International Cooperation: PSU maintains partnerships with educational institutions in over 20 countries, including Armenia, Belarus, Bulgaria, Vietnam, Germany, Egypt, India, Spain, Italy, Jordan, Kazakhstan, Syria, Ukraine, and Montenegro. ",
    visitUrl: "https://www.thedoctorsiea.in/",
  },
  {
    id: 16,
    title: "Volgograd State Medical University (VSMU)",
    description: "Volgograd State Medical University (VSMU), established in 1935, is a prominent medical institution located in Volgograd, Russia. It is recognized as one of the top 10 medical universities in Russia, with a longstanding tradition of training medical professionals.    ",
    authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV35SdAS0GfivWa-QphguoSOhOpRZZy8h6aQ&s",
    image: "https://i.vuzopedia.ru/storage/app/uploads/public/5a1/e07/b63/5a1e07b631fc9132948187.jpg",
    additionalInfo: "VSMU maintains partnerships with educational institutions in over 20 countries, including Armenia, Belarus, Bulgaria, Vietnam, Germany, Egypt, India, Spain, Italy, Jordan, Kazakhstan, Syria, Ukraine, and Montenegro. ",
    visitUrl: "https://www.thedoctorsiea.in/",
  },
  {
    id: 17,
    title: "North western state medical university named after I.I Mechnikov, Saint Petersburg",
    description: "North Western State Medical University named after I.I. Mechnikov is a prominent medical institution located in Saint Petersburg, Russia. The university is named in honor of Ilya Ilyich Mechnikov, a famous Russian immunologist and a Nobel laureate known for his pioneering work on the immune system. The university has a rich history and provides various medical and healthcare-related education programs. Key aspects of the university: Founding: Established in 1897, the university has played a major role in the development of medical education and healthcare practices in Russia.    ",
    authorImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Logoszgmu.jpg/640px-Logoszgmu.jpg",
    image: "https://luckclub.ru/images/luckclub/2019/01/5-33.jpg",
    additionalInfo: "It is located in the culturally rich city of Saint Petersburg, one of Russia’s leading cultural and educational hubs, making it an attractive destination for medical students. ",
    visitUrl: "http://rrecrussia.com/",
  },
  {
    id: 18,
    title: "Saint Petersburg State Paediatric  Medical University ",
    description: "Saint Petersburg State Pediatric Medical University (SPbSPMU) is a leading institution in Russia focused on the education and training of specialists in the field of pediatric healthcare. It is one of the top medical universities in Russia, particularly renowned for its emphasis on pediatric education, childhood diseases, and child healthcare. The university plays a significant role in the development of pediatric medicine both in Russia and internationally.    ",
    authorImage: "https://upload.wikimedia.org/wikipedia/commons/a/a7/%D0%93%D0%BF%D0%BC%D1%83.jpg",
    image: "https://sun9-7.userapi.com/impf/c629517/v629517235/4cada/KuMt--J7FXY.jpg?size=1000x507&quality=96&sign=48a35ce791c96dd298bef4b9b23461a7&c_uniq_tag=lH7M2NJqXq57-IwtnEVQJtAwqhjpiDL6oC4l4iW5FwY&type=album",
    additionalInfo: "The university's location in Saint Petersburg gives it access to rich academic traditions and global medical networks, allowing its graduates to succeed both in Russia and abroad in various healthcare and academic positions. ",
    visitUrl: "https://www.thedoctorsiea.in/",
  },
  {
    id: 19,
    title: "Immanuel Kant Baltic Federal University (Medical Faculty)",
    description: "Immanuel Kant Baltic Federal University, located in Kaliningrad, Russia, offers medical programs that provide high-level education and training for future healthcare professionals. The university’s Medical Faculty is known for its strong emphasis on clinical practice and its integration with local and international medical institutions. It equips students with the skills necessary to address healthcare challenges across the globe.",
    authorImage: "https://facultetus.ru/images/universities/a79bc5e5fb24ac791ddd3745fc89a812.png",
    image: "https://s0.rbk.ru/v6_top_pics/media/img/0/46/346909027170460.jpg",
    additionalInfo: "Immanuel Kant Baltic Federal University offers students a unique opportunity to study in a city that blends Russian, European, and global influences. With modern medical facilities, research collaborations, and a global outlook, the Medical Faculty prepares students to work in various healthcare fields around the world.",
    visitUrl: "http://www.rrecrussia.com/"
  },
  {
    id: 20,
    title: "Kemerovo State Medical University",
    description: "Kemerovo State Medical University, located in Kemerovo, Russia, is one of the leading medical educational institutions in the country. The university offers a wide range of medical programs and degrees, focusing on clinical and research-oriented training in various medical fields. Known for its strong academic traditions, it provides students with the knowledge and skills needed for a career in medicine, while also playing a significant role in medical research and healthcare development.",
    authorImage: "https://web.archive.org/web/20211215063212im_/https://kemsmu.ru/local/templates/pr.v1/images/logo.png",
    image: "https://hedclub.com/data/universities/364/main_image/88ic2R2jm33YVyuMHLXu.jpg",
    additionalInfo: "Kemerovo State Medical University is integrated with several clinical facilities, providing students with ample practical experience. With a well-established focus on improving healthcare in the region, the university also fosters international partnerships, offering opportunities for global learning and career growth.",
    visitUrl: "http://www.rrecrussia.com/"
  },
  {
    id: 21,
    title: "Northern State Medical University (NSMU)",
    description: "Northern State Medical University (NSMU) is a higher educational institution located in Arkhangelsk, Russia. It was founded in 1932 and is one of the leading medical universities in Russia, focusing on medical education, clinical training, and research.",
    authorImage: "https://ortsci.ru/files/styles/news1/public/news/1_13.jpg?itok=EfaDO7wi",
    image: "https://avatars.mds.yandex.net/get-altay/813485/2a0000015f1a7dbe727f435329811662f72b/XXL_height",
    additionalInfo: "The university has a strong reputation for providing quality education and has established connections with medical institutions and universities worldwide. It is known for its advanced research in health sciences, particularly in areas related to public health and medical technology.",
    visitUrl: "http://www.thedoctorsiea.in/"
  },
  {
    id: 22,
    title: "Far Eastern Federal University (FEFU)",
    description: "Far Eastern Federal University (FEFU) is a prominent public university located in Vladivostok, Russia. It was founded in 1899 and has evolved into one of the major educational and research centers in the Russian Far East.",
    authorImage: "https://avatars.mds.yandex.net/i?id=2a00000179fda0901c94ea1dc791e66829ff-4712318-images-thumbs&n=13",
    image: "https://images.pond5.com/fefu-territory-far-eastern-federal-footage-087058770_prevstill.jpeg",
    additionalInfo: "FEFU is also recognized for its international student body, with students coming from various countries to study in both undergraduate and postgraduate programs. The university has numerous partnerships with academic institutions around the world, and it plays a central role in fostering academic exchanges and cooperation in the Asia-Pacific region.",
    visitUrl: "http://www.rrecrussia.com/"
  },
  {
    id: 23,
    title: "Novosibirsk State Medical University (NSMU)",
    description: "Novosibirsk State Medical University (NSMU) is one of the oldest and most prestigious medical universities in Russia, located in Novosibirsk, the capital city of Siberia. Founded in 1935, it has a long history of excellence in medical education, research, and clinical practice.",
    authorImage: "https://static.tildacdn.com/tild3438-3835-4363-b634-626431373730/Group_5.png",
    image: "https://avatars.mds.yandex.net/get-altay/906486/2a000001656938677e98fd2f88d94031c554/orig",
    additionalInfo: "Novosibirsk is Russia's third-largest city and serves as a major scientific, educational, and cultural hub in Siberia. It is well-connected by transport networks, making it accessible from both within Russia and internationally.",
    visitUrl: "http://www.rrecrussia.com/"
  },
  {
    id: 24,
    title: "Kirov State Medical University (KSMU) ",
    description: "Kirov State Medical University (KSMU) is a well-established public medical university located in Kirov, Russia. The university was founded in 1944 and has since built a strong reputation for providing high-quality medical education and contributing significantly to medical research, especially in the fields of clinical medicine, pharmaceutical sciences, and public health.",
    authorImage: "https://avatars.mds.yandex.net/i?id=c53e5075ac6481b0f5cc93309efefe07_l-5246355-images-thumbs&n=13",
    image: "http://155822.selcdn.ru/upload-8bfeca17cf9a3316f68775e6b5e44259/iblock/cdf/cdf61e793590f04951a383a928de4bc8/academia.jpg",
    additionalInfo: "Kirov State Medical University is accredited by the Russian Ministry of Health and is recognized by various international medical organizations. This enables its graduates to work in the medical field internationally after meeting additional licensing or certification requirements.",
    visitUrl: "http://www.rrecrussia.com/"
  },
  {
    id: 25,
    title: "Kabardino-Balkarian State University (Medical Faculty) ",
    description: "Kabardino-Balkarian State University (KBSU) is a major public university located in Nalchik, the capital of the Kabardino-Balkar Republic in Russia. The university offers a range of educational programs in various fields, and the Medical Faculty is one of its prominent departments, dedicated to training future doctors and healthcare professionals.",
    authorImage: "https://static.tildacdn.com/tild6631-3131-4062-a535-633332653365/12.png",
    image: "https://www.edugainoverseas.com/wp-content/uploads/2019/12/Kabardino-Balkarian-State-University-Named-After-H.M.-Berbekov.png",
    additionalInfo: "Graduates from KBSU’s Medical Faculty can pursue careers in diverse medical fields, ranging from hospital care and clinics to research and public health organizations. Many international graduates also choose to return to their home countries to practice medicine or continue their studies in specialized fields.",
    visitUrl: "http://www.rrecrussia.com/"
  },
  {
    id: 26,
    title: "Kuban State Medical University (KSMU) ",
    description: "Kuban State Medical University (KSMU) is one of Russia’s leading institutions for medical education, located in Krasnodar, the capital of the Krasnodar Krai in southern Russia. Established in 1920, KSMU has a rich history of training healthcare professionals and is known for its high educational standards, research contributions, and clinical training programs.",
    authorImage: "https://волонтеры-медики.рф/_next/image?url=https%3A%2F%2Fold.xn----ctbhcbtapdmikb4a2a0m.xn--p1ai%2Fwp-content%2Fuploads%2F2019%2F01%2FKubGMU.png&w=1920&q=75",
    image: "https://avatars.mds.yandex.net/i?id=8f68b0e55d6d907ca17c9578b2fca631_l-9107157-images-thumbs&n=13",
    additionalInfo: " Kuban State Medical University can pursue various career paths in healthcare, ranging from clinical practice in hospitals and medical clinics to academic and research positions. International graduates often return to their home countries and practice medicine or continue their studies in specialized fields.",
    visitUrl: "http://www.rrecrussia.com/"
  },
  {
    id: 27,
    title: "I.M. Sechenov Moscow Medical University ",
    description: "I.M. Sechenov Moscow Medical University, commonly known as Sechenov University, is one of the oldest and most prestigious medical schools in Russia. It was founded in 1758 as the Medical Faculty of Moscow University and became an independent medical institution in 1866. ",
    authorImage: "https://sun6-23.userapi.com/impg/KcyjdiL2eyMA3TsOXTk179W0ZLknJgu_hz2T4Q/_C6dbV789nQ.jpg?size=350x250&quality=95&sign=77d25878a2b57d6ac175e417ed792386&c_uniq_tag=ZbQXwk5Lk6pNKEJ3PQiBJ9lm8B_h2vWIKSEZqpYC3-4&type=album",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Khamovniki_District%2C_Moscow%2C_Russia_-_panoramio_%28184%29.jpg",
    additionalInfo: "The university is renowned for its high academic standards and research excellence in the fields of medicine, biology, and healthcare. It offers a wide range of medical programs, including undergraduate, postgraduate, and doctoral degrees, along with various specialized courses. It also actively engages in research in various areas such as physiology, neurology, immunology, and pharmacology. Sechenov University is a leading institution for training healthcare professionals, researchers, and medical specialists in Russia and internationally.",
    visitUrl: "http://www.thedoctorsiea.in/"
  },
  {
    id: 28,
    title: "Siberian State Medical University (SSMU)  ",
    description: "Siberian State Medical University (SSMU) is a well-respected medical institution located in Tomsk, Russia. It was founded in 1888 as the Tomsk Imperial University’s Medical Faculty and became an independent institution in 1963. It is known for its strong emphasis on medical education, research, and training healthcare professionals, and is one of the top medical universities in Siberia.",
    authorImage: "https://avatars.mds.yandex.net/i?id=705b447f9bb4ec54f4a809f9fcf90b38_l-5129388-images-thumbs&n=13",
    image: "https://avatars.mds.yandex.net/i?id=29780686aa13ade86daf8067d6c8dd5b_l-9856874-images-thumbs&n=13",
    additionalInfo: "Siberian State Medical University has gained recognition for its strong international collaborations and partnerships with institutions worldwide, attracting students and professionals from different countries. The university is also involved in advanced clinical research, contributing to the development of medical science both in Russia and globally.",
    visitUrl: "http://www.thedoctorsiea.in/"
  },
  {
    id: 29,
    title: "Dagestan State Medical University (DSMU) ",
    description: "Dagestan State Medical University (DSMU) is a prominent medical university located in Makhachkala, the capital city of the Republic of Dagestan, Russia. Founded in 1932, DSMU has established itself as a major educational institution in the North Caucasus region, with a strong reputation for producing skilled medical professionals and contributing to the advancement of healthcare in the region.",
    authorImage: "https://avatars.mds.yandex.net/i?id=8f614f61159265529948d3172e80f731_l-5235770-images-thumbs&n=13",
    image: "https://www.navchetana.education/assets/images/universities/Russia/Dagestan-State-Medical-University.jpg",
    description: "The university offers a broad array of programs in medicine, pharmacy, dentistry, and nursing. DSMU is known for its robust curriculum that combines theoretical learning with practical experience, ensuring that students are well-prepared for their careers in healthcare. The institution also offers postgraduate education and advanced training programs to ensure ongoing professional development.",
    visitUrl: "http://www.thedoctorsiea.in/"
  },
  {
    id: 30,
    title: "Peoples' Friendship University of Russia (RUDN University) ",
    description: "Peoples' Friendship University of Russia (RUDN University), located in Moscow, is one of the most prestigious and internationally recognized universities in Russia. Founded in 1960, it was originally established to provide higher education to students from Africa, Asia, and Latin America to foster international cooperation and understanding during the Cold War. ",
    authorImage: "https://www.rudn.ru/storage/media/page/8aba8519-ab38-402f-a5e0-a3194bc6b63e/oLKgZKBLujeSuK8BUuZp5WTDOqmFdBtbntWpISUN.jpg",
    image: "https://avatars.mds.yandex.net/i?id=88526f7031d39df3a4c9e373cccdc2c6_l-9065879-images-thumbs&n=13",
    description: "RUDN University places great emphasis on creating global partnerships and fosters numerous collaborations with universities and research institutions around the world. Many prominent individuals, including heads of state, diplomats, scholars, and professionals in various fields, have studied or taught at RUDN.",
    visitUrl: "http://www.thedoctorsiea.in/"
  },

];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [university, setUniversity] = useState('');
  const [message, setMessage] = useState('What are you looking for?');
  const [isWaiting, setIsWaiting] = useState(false); // To control flow of conversation
  const [isError, setIsError] = useState(false); // To control error state
  const [userInput, setUserInput] = useState('');
  const [showQueryPopup, setShowQueryPopup] = useState(false); // Toggle for "Have any query?" popup
  const [isQueryPopupOpen, setIsQueryPopupOpen] = useState(true);


  const navigate = useNavigate();
  const intervalRef = useRef(null);  // Correctly initialize useRef
  const handleChatOpen = () => {
    setIsOpen(true);
    setShowQueryPopup(false);  // Immediately hide the query popup when AI image is clicked
    setUserName('');
    setUniversity('');
    setUserInput('');
    setMessage('What is your name? 😊');
    setIsWaiting(true);
    setIsError(false);

    // Stop the popup animation by clearing the interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setShowQueryPopup((prev) => !prev);
    }, 5000);

    return () => {
      // Clear interval when component unmounts or when no longer needed
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);



  const handleCloseChat = () => {
    setIsOpen(false);
    setMessage('Goodbye! 👋');
    setIsError(false); // Reset error when closing chat
  };

  const handleNameSubmit = () => {
    if (userInput.trim()) {
      setUserName(userInput);
      setMessage(`Hi ${userInput}! Which university are you interested in? 🏢`);
      setIsWaiting(true); // Wait for the user to input university
      setUserInput(''); // Clear input field
      setIsError(false); // Reset error on name submission
    }
  };

  const handleUniversitySubmit = () => {
    if (userInput.trim()) {
      const foundUni = blogCards.find((uni) => uni.title.toLowerCase().includes(userInput.toLowerCase()));
      if (foundUni) {
        setUniversity(foundUni.title);
        setMessage(`Here are the details for ${foundUni.title}: 🏢`);
        setIsWaiting(false);

        setTimeout(() => {
          setMessage(
            `<b style="margin-bottom: 10px; display: block;">${foundUni.title}</b>
            <p style="margin-bottom: 10px;">${foundUni.description}</p>
            <img src="${foundUni.image}" alt="${foundUni.title}" style="width: 100%; height: auto; margin-bottom: 10px;"/>
            <div class="popup-content">
              <p>${foundUni.additionalInfo}</p>
              <a href="${foundUni.visitUrl}" target="_blank" class="visit-link">Visit Website</a>
            </div>`
          );
        }, 1000);
      } else {
        setIsError(true);
        setMessage('😥 Sorry, I couldn’t find that university. Please try again.');
      }
      setUserInput('');
    }
  };

  return (
    <div>
      {showQueryPopup && (
        <div className="query-popup" onClick={handleChatOpen}>
          Have Any Query?
        </div>
      )}


      <div className={`chatbot-container ${isOpen ? 'open' : ''}`} onClick={handleChatOpen}>
        <div className="chatbot-btn"><img src='https://www.shareicon.net/data/2017/01/06/868320_people_512x512.png' alt='ai' className='w-16 h-16' /></div>
      </div>

      {isOpen && (
        <div className="chatbot-popup">
          <div className="chatbot-header">
            <button className="close-btn" onClick={handleCloseChat}>X</button>
          </div>
          <div className="chatbot-body">
            <div className="message-container">
              <p dangerouslySetInnerHTML={{ __html: message }}></p>
            </div>
            {isWaiting && !isError && (
              <>
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  autoFocus
                  placeholder={userName ? "University Name" : "Your name"}
                />
                <button
                  onClick={userName ? handleUniversitySubmit : handleNameSubmit}
                  className="submit-btn"
                >
                  Send
                </button>
              </>
            )}
            {isError && (
              <button
                onClick={handleCloseChat}
                className="close-btn-error"
              >
                Close
              </button>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
 
    .query-popup {
  position: fixed;
  bottom: 80px;
  right: 20px;
  background-color: #ffcc00;
  color: black;
  padding: 10px 15px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  animation: popupAnimation 1.5s ease-in-out infinite alternate;
  z-index: 9999; /* Ensure it stays on top */
}


        @keyframes popupAnimation {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-10px);
            opacity: 0.8;
          }
        }

        .chatbot-container {
          position: fixed;
          bottom: 2px;
          right: 2px;
          padding: 10px;
          border-radius: 250%;
          cursor: pointer;
          z-index: 9999; /* Ensure it's above other elements */
        }

        .chatbot-btn {
          color: white;
          font-size: 20px;
        }

        .chatbot-popup {
          position: fixed;
          bottom: 100px;
          right: 20px;
          background-color: white;
          border-radius: 10px;
          width: 250px;
          max-height: 400px; /* Restrict height */
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          padding: 10px;
          display: flex;
          flex-direction: column;
          border: 2px solid #4CAF50; /* Add visible border */
          z-index: 10000; /* Make sure it's on top of everything */
        }

        .chatbot-header {
          display: flex;
          justify-content: flex-end;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 16px;
          cursor: pointer;
        }

        .chatbot-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden; /* Hide overflow */
        }

        .message-container {
          flex-grow: 1;
          overflow-y: auto;
          max-height: 300px; /* Set max height */
        }

        .popup-content {
          max-height: 200px; /* Set the maximum height for the scrollable content */
          overflow-y: auto; /* Allow scrolling if content exceeds height */
          margin-top: 10px;
        }

        .visit-link {
          display: inline-block;
          padding: 8px 12px;
          background-color: #4CAF50;
          color: white;
          text-decoration: none;
          border-radius: 5px;
          margin-top: 10px;
        }

        .visit-link:hover {
          background-color: #45a049;
        }

        input {
          margin-top: 10px;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .submit-btn {
          margin-top: 10px;
          background-color: #4CAF50;
          color: white;
          border: none;
          padding: 8px;
          border-radius: 5px;
          cursor: pointer;
        }

        .submit-btn:hover {
          background-color: #45a049;
        }

        .close-btn-error {
          margin-top: 10px;
          background-color: #ff4d4d;
          color: white;
          border: none;
          padding: 8px;
          border-radius: 5px;
          cursor: pointer;
        }

        .close-btn-error:hover {
          background-color: #ff0000;
        }
      `}</style>
    </div>
  );
};

export default Chatbot;
