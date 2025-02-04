import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

function University() {
  const [searchTerm, setSearchTerm] = useState(""); // Search term for filtering
  const [currentPage, setCurrentPage] = useState(1); // State to track the current page
  const postsPerPage = 8; // Define how many posts per page

  // Array of blog cards data
  const blogCards = [
    {
      id: 1,
      title: "Rostov University: A Leading Educational Hub in Russia",
      description: "Explore Rostov University, one of Russia's top institutions offering world-class education, cutting-edge research, and diverse academic programs. Learn about its rich history, innovative approach to learning, and vibrant student life.",
      authorImage: "https://worldwidecolleges.com/wp-content/uploads/2022/03/logo252.png",
      image: "https://satyamevedu.co.in/wp-content/uploads/2023/04/WhatsApp-Image-2022-05-10-at-12.18.11-AM-1024x683.jpeg",
      url: "https://www.rostgmu.in/",
    },
    {
      id: 2,
      title: "Kazan State Medical University: A Premier Medical Institution in Russia",
      description: "Kazan State Medical University (KSMU), established in 1814, is one of Russia's oldest and most prestigious medical institutions. Located in Kazan, Tatarstan, it operates under the Ministry of Health of Russia and offers a range of medical programs across nine faculties. ",
      authorImage: "https://upload.wikimedia.org/wikipedia/ru/1/14/KSMU_logo.png",
      image: "https://entermedia.io/wp-content/uploads/2023/10/2-Zdanie-Medinstituta.jpg",
      url: "https://www.studymbbsinkazan.com/",
    },
    {
      id: 3,
      title: "Kursk State Medical University: Excellence in Higher Education in Russia",
      description: "Kursk State Medical University (KSMU), established in 1935, is a prominent medical institution located in Kursk, Russia. In 1994, it was granted university status.",
      authorImage: "https://avatars.mds.yandex.net/i?id=f88858791dfe83477d8d4164bb0a87e1_l-4464154-images-thumbs&n=13",
      image: "https://avatars.mds.yandex.net/i?id=c02c49eb9eac0482c9aa728e043031ea_l-10128543-images-thumbs&n=13",
      url: "http://www.studymbbsinkursk.com/",
    },
    {
      id: 4,
      title: "Bashkir State State University: Russia's Top Academic Destination",
      description: "Bashkir State Medical University (BSMU), established in 1932, is a prominent medical institution located in Ufa, the capital city of the Republic of Bashkortostan, Russia.",
      authorImage: "https://uust.ru/unit/media/uploads/subdivuploads/z_%D0%95%D0%98%D0%9A/%D0%9F%D0%B0%D1%80%D1%82%D0%BD%D0%B5%D1%80%D1%8B/bgmu.png",
      image: "https://www.navchetana.education/assets/images/universities/Russia/bashkir-medical-university.jpg",
      url: "https://www.thedoctorsiea.in/",
    },
    {
      id: 5,
      title: "Yaroslavl State Medical University: Leading Education in Russia and Beyond",
      description: "Yaroslavl State Medical University (YSMU), established in 1944, is a prominent medical institution located in Yaroslavl, Russia. It serves as a significant regional center for medical education and biomedical research.",
      authorImage: "https://sun1-83.userapi.com/s/v1/ig2/8HYMedfwx01zUb3yXFZmad0i0x1DBcIhpw-B3OEARmryQTsR4zTuekBfJOtcVwK6sgt_J5a1knbcLkM9XzxFMw4j.jpg?size=704x705&quality=95&crop=24,9,704,705&ava=1",
      image: "https://avatars.mds.yandex.net/i?id=ec31507e20e8f7e50c97bbc258fb50bd_l-5210027-images-thumbs&n=13",
      url: "www.thedoctorsiea.in/",
    },
    {
      id: 6,
      title: "Crimea federal university - Medical Institute",
      description: "The Medical Institute named after S.I. Georgievsky is a prominent division of the V.I. Vernadsky Crimean Federal University, located in Simferopol, Crimea.",
      authorImage: "https://avatars.mds.yandex.net/i?id=f94d4d6785247bde9e3dd7493464e4f2_l-5233210-images-thumbs&n=13",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Simferopol_04-14_img06_University.jpg/1200px-Simferopol_04-14_img06_University.jpg",
      url: "https://www.rrecrussia.com/",
    },
    {
      id: 7,
      title: "Ural State Medical University: The Heart of Science in Siberia",
      description: "Ural State Medical University (USMU), established in 1930, is a prominent public medical institution located in Yekaterinburg, Russia.",
      authorImage: "https://prog.susu.ru/img/logoSUSU.png",
      image: "https://sun9-33.userapi.com/impg/Jlsvj_xGTvV1LoBpUh48YDQR_UH3shaDrunRJw/PvikfTDW7NA.jpg?size=1583x871&quality=95&sign=07cca795b4ee5146898bb2d1a4cd58ca&type=album",
      url: "https://www.rrecrussia.com/",
    },
    {
      id: 8,
      title: "Kazan Federal University: Russia’s Premier Institution for International Students",
      description: "Kazan Federal University stands out for its comprehensive and inclusive educational approach, attracting students worldwide. Offering top-tier programs in the arts, sciences, and engineering, this university plays a major role in higher education across Russia and abroad.",
      authorImage: "https://kpfu.ru/portal/docs/F1412758293/72b1797b0422d10993e2a5ed4a36198a.jpg",
      image: "https://avatars.mds.yandex.net/i?id=e325a45bb0d74187113d99394bed8f7b_l-5285139-images-thumbs&n=13",
      url: "https://www.rrecrussia.com/",
    },
    {
      id: 9,
      title: "Stavropol State Medical University: Academic Excellence and Innovation",
      description: "Stavropol State Medical University (StSMU), established in 1938, is a reputable medical institution located in Stavropol, Russia. The university offers comprehensive medical education and training programs, preparing students to become qualified healthcare professionals. ",
      authorImage: "https://www.jeduka.com/storage/school_image/2/stavropol-state-medical-university.png",
      image: "https://avatars.mds.yandex.net/get-altay/12595784/2a0000018efa2d30934f9d6b409e2d6b0c4d/orig",
      url: "http://www.thdoctorsiea.in/",
    },
    {
      id: 10,
      title: "Pacific State Medical University (PSMU)",
      description: "Pacific State Medical University (PSMU), located in Vladivostok, Russia, was established in 1958. Originally part of the Far Eastern State University, it became an independent institution in 1958 and was later renamed PSMU in 2013. ",
      authorImage: "https://upload.wikimedia.org/wikipedia/en/b/b7/Pacific_State_Medical_University_logo.png",
      image: "https://i.ytimg.com/vi/FF5XXwZhOyw/maxresdefault.jpg",
      url: "http://www.thdoctorsiea.in/",
    },
    {
      id: 11,
      title: "Tver State Medical University (TSMU)",
      description: "Tver State Medical University (TSMU), established in 1936, is one of Russia's oldest and most esteemed medical institutions. Located in Tver, the university has a rich history of contributing to medical education and research. ",
      authorImage: "https://kr-alliance.com/upload/iblock/82f/rnhm3lbtre3btf9ehfhpnyecq1d4590l.png",
      image: "https://sun9-70.userapi.com/impg/F-65mJRooGTah86tOmNPQkuk5hFtM2dFePW-zg/mi340lCOAKo.jpg?size=807x607&quality=95&sign=e6f46ad31a9cc07e7104c90ecf03b8fc&c_uniq_tag=gHfaj8qAo9qBjHNcdyRN64XA1juZC8AeMm_iHTxk-Yk&type=album",
      url: "http://www.thdoctorsiea.in/",
    },
    {
      id: 12,
      title: "Mari state university (Medical faculty)",
      description: "Mari State University, established in 1972, is a prominent educational institution located in Yoshkar-Ola, Russia. The university comprises six faculties and five institutes, offering a diverse range of programs across various disciplines.",
      authorImage: "https://maristateuniversity.com/images/logo.png",
      image: "https://orient.tm/storage/app/media/ru/2021/06/12062021%20%D0%9C%D0%B0%D1%80%D0%B8%D0%B9%20%D0%AD%D0%BB.jpg",
      url: "http://www.thdoctorsiea.in/",
    },
    {
      id: 13,
      title: "Perm State Medical University (PSMU)",
      description: "Perm State Medical University (PSMU), established in 1916, is a prominent medical institution located in Perm, Russia. It offers a range of medical programs, including a 6-year MBBS course designed for international students. ",
      authorImage: "https://avatars.mds.yandex.net/i?id=081a63e65952e7cf1729adc83e4e4549-4055261-images-thumbs&n=13",
      image: "https://avatars.mds.yandex.net/i?id=9600986cd3c762269cce8bacd8b487aa_l-9144733-images-thumbs&n=13",
      url: "https://www.rrecrussia.com/",
    },
    {
      id: 14,
      title: "Tula State University (TSU)",
      description: "Tula State University (TSU), established in 1930, is a prominent educational institution in Russia. It comprises nine faculties, including a dedicated Medical Institute. ",
      authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrSQlyrPNLCuvZQg4tZ2Iz3T54cDxXBH2t4w&s",
      image: "https://avatars.mds.yandex.net/i?id=ba297203ec2684b5d518ef31d203df51_l-4362911-images-thumbs&n=13",
      url: "http://www.thedoctorsiea.in/",
    },
    {
      id: 15,
      title: "Pskov State University (PSU)",
      description: "Pskov State University (PSU), established in 1936, is a prominent educational institution in Russia. It comprises six multidisciplinary institutes, including the Institute of Medicine and Experimental Biology, which houses the medical faculty.  ",
      authorImage: "https://upload.wikimedia.org/wikipedia/en/6/68/Logo_of_Pskov_State_University.png",
      image: "https://sdelanounas.ru/i/d/n/n/f_dnNrbW8ucnUvd3AtY29udGVudC91cGxvYWRzLzIwMjMvMDYvSU1HXzYtc2NhbGVkLmpwZz9fX2lkPTE1MjMwMw==.jpeg",
      url: "http://www.thedoctorsiea.in/",
    },
    {
      id: 16,
      title: "Volgograd State Medical University (VSMU)",
      description: "Volgograd State Medical University (VSMU), established in 1935, is a prominent medical institution located in Volgograd, Russia.  ",
      authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV35SdAS0GfivWa-QphguoSOhOpRZZy8h6aQ&s",
      image: "https://avatars.mds.yandex.net/i?id=94f804916c112e0fa57cb6217a5dfccf_l-9181372-images-thumbs&n=13",
      url: "http://www.thedoctorsiea.in/",
    },
    {
      id: 17,
      title: "North western state medical university named after I.I Mechnikov, Saint Petersburg ",
      description: "North Western State Medical University named after I.I. Mechnikov is a prominent medical institution located in Saint Petersburg, Russia. The university is named in honor of Ilya Ilyich Mechnikov, a famous Russian immunologist and a Nobel laureate known for his pioneering work on the immune system.   ",
      authorImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Logoszgmu.jpg/640px-Logoszgmu.jpg",
      image: "https://avatars.mds.yandex.net/i?id=642eaabab1cf04445053719589837c67_l-5649169-images-thumbs&n=13",
      url: "http://www.rrecrussia.com/",
    },
    {
      id: 18,
      title: "Saint Petersburg State Paediatric  Medical University  ",
      description: "Saint Petersburg State Pediatric Medical University (SPbSPMU) is a leading institution in Russia focused on the education and training of specialists in the field of pediatric healthcare. It is one of the top medical universities in Russia, particularly renowned for its emphasis on pediatric education, childhood diseases, and child healthcare.   ",
      authorImage: "https://upload.wikimedia.org/wikipedia/commons/a/a7/%D0%93%D0%BF%D0%BC%D1%83.jpg",
      image: "https://yourchoice.re/wp-content/uploads/2022/05/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9-%D8%B3%D8%A7%D9%86%D8%AA-%D8%A8%D8%B7%D8%B1%D8%B3%D8%A8%D8%B1%D8%BA-%D8%A7%D9%84%D8%AD%D9%83%D9%88%D9%85%D9%8A%D8%A9-%D9%84%D8%B7%D8%A8-%D8%A7%D9%84%D8%A7%D8%B7%D9%81%D8%A7-%D9%84.png",
      url: "http://www.thedoctorsiea.in/",
    },
    {
      id: 19,
      title: "Immanuel Kant Baltic Federal University (Medical Faculty)",
      description: "Immanuel Kant Baltic Federal University, located in Kaliningrad, Russia, offers high-quality medical programs that prepare students for a career in healthcare.   ",
      authorImage: "https://facultetus.ru/images/universities/a79bc5e5fb24ac791ddd3745fc89a812.png",
      image: "https://avatars.mds.yandex.net/i?id=57fe99377e55d7894f3931ef72e24d02_l-5436907-images-thumbs&n=13",
      url: "http://www.rrecrussia.com/",
    },
    {
      id: 20,
      title: "Kemerovo State Medical University",
      description: "Kemerovo State Medical University, located in Kemerovo, Russia, is one of the leading medical educational institutions in the country. The university offers a wide range of medical programs and degrees, focusing on clinical and research-oriented training in various medical fields. Known for its strong academic traditions, it provides students with the knowledge and skills needed for a career in medicine, while also playing a significant role in medical research and healthcare development.",
      authorImage: "https://web.archive.org/web/20211215063212im_/https://kemsmu.ru/local/templates/pr.v1/images/logo.png",
      image: "https://hedclub.com/data/universities/364/main_image/88ic2R2jm33YVyuMHLXu.jpg",
      url: "http://www.rrecrussia.com/"
    },
    {
      id: 21,
      title: "Northern State Medical University (NSMU)",
      description: "Northern State Medical University (NSMU) is a higher educational institution located in Arkhangelsk, Russia. It was founded in 1932 and is one of the leading medical universities in Russia, focusing on medical education, clinical training, and research.",
      authorImage: "https://ortsci.ru/files/styles/news1/public/news/1_13.jpg?itok=EfaDO7wi",
      image: "https://rosvuz.ru/uploads/partition117/unit/2/931dd5484e41022169df681800a40b57.800_415.jpg?code=MjM5OTguODAwXzQxNQ==",
      url: "http://www.thedoctorsiea.in/"
    },
    
    {
      id: 22,
      title: "Far Eastern Federal University (FEFU)",
      description: "Far Eastern Federal University (FEFU) is a prominent public university located in Vladivostok, Russia. It was founded in 1899 and has evolved into one of the major educational and research centers in the Russian Far East.",
      authorImage: "https://avatars.mds.yandex.net/i?id=2a00000179fda0901c94ea1dc791e66829ff-4712318-images-thumbs&n=13",
      image: "https://thumbs.dreamstime.com/b/far-eastern-federal-university-vladivostok-russia-july-dalnevostochny-federalny-universitet-dvfu-institution-higher-80400040.jpg",
      url: "http://www.rrecrussia.com/"
    },
    {
      id: 23,
      title: "Novosibirsk State Medical University (NSMU)",
      description: "Novosibirsk State Medical University (NSMU) is one of the oldest and most prestigious medical universities in Russia, located in Novosibirsk, the capital city of Siberia. Founded in 1935, it has a long history of excellence in medical education, research, and clinical practice.",
      authorImage: "https://static.tildacdn.com/tild3438-3835-4363-b634-626431373730/Group_5.png",
      image: "https://i3.photo.2gis.com/images/branch/1/140737516391892_f12f.jpg",
      url: "http://www.rrecrussia.com/"
    },
    {
      id: 24,
      title: "Kabardino-Balkarian State University (Medical Faculty) ",
      description: "Kabardino-Balkarian State University (KBSU) is a major public university located in Nalchik, the capital of the Kabardino-Balkar Republic in Russia. The university offers a range of educational programs in various fields, and the Medical Faculty is one of its prominent departments, dedicated to training future doctors and healthcare professionals.",
      authorImage: "https://static.tildacdn.com/tild6631-3131-4062-a535-633332653365/12.png",
      image: "https://avatars.mds.yandex.net/get-altay/1429587/2a00000166a4d67e088ca77cd90e7d6285b4/XXL_height",
      url: "http://www.rrecrussia.com/"
    },
    {
      id: 25,
      title: "Kuban State Medical University (KSMU) ",
      description: "Kuban State Medical University (KSMU) is one of Russia’s leading institutions for medical education, located in Krasnodar, the capital of the Krasnodar Krai in southern Russia. Established in 1920, KSMU has a rich history of training healthcare professionals and is known for its high educational standards, research contributions, and clinical training programs.",
      authorImage: "https://волонтеры-медики.рф/_next/image?url=https%3A%2F%2Fold.xn----ctbhcbtapdmikb4a2a0m.xn--p1ai%2Fwp-content%2Fuploads%2F2019%2F01%2FKubGMU.png&w=1920&q=75",
      image: "https://avatars.mds.yandex.net/i?id=09ebe901c50c25c4280bf7805a1bb19a_l-4143030-images-thumbs&n=13",
      url: "http://www.rrecrussia.com/"
    },
    {
      id: 26,
      title: "I.M. Sechenov Moscow Medical University ",
      description: "I.M. Sechenov Moscow Medical University, commonly known as Sechenov University, is one of the oldest and most prestigious medical schools in Russia. It was founded in 1758 as the Medical Faculty of Moscow University and became an independent medical institution in 1866. ",
      authorImage: "https://sun6-23.userapi.com/impg/KcyjdiL2eyMA3TsOXTk179W0ZLknJgu_hz2T4Q/_C6dbV789nQ.jpg?size=350x250&quality=95&sign=77d25878a2b57d6ac175e417ed792386&c_uniq_tag=ZbQXwk5Lk6pNKEJ3PQiBJ9lm8B_h2vWIKSEZqpYC3-4&type=album",
      image: "https://avatars.mds.yandex.net/i?id=5f8289baa93dd9276b7550ae882e369d_l-7593915-images-thumbs&n=13",
      url: "http://www.thedoctorsiea.in/"
    },
    {
      id: 27,
      title: "Siberian State Medical University (SSMU)  ",
      description: "Siberian State Medical University (SSMU) is a well-respected medical institution located in Tomsk, Russia. It was founded in 1888 as the Tomsk Imperial University’s Medical Faculty and became an independent institution in 1963. It is known for its strong emphasis on medical education, research, and training healthcare professionals, and is one of the top medical universities in Siberia.",
      authorImage: "https://avatars.mds.yandex.net/i?id=705b447f9bb4ec54f4a809f9fcf90b38_l-5129388-images-thumbs&n=13",
      image: "https://avatars.mds.yandex.net/i?id=5dbf194cc2e8cfaa408fbe053d9ea2c9_l-5310530-images-thumbs&n=13",
      url: "http://www.thedoctorsiea.in/"
    },
    {
      id: 28,
      title: "Dagestan State Medical University (DSMU) ",
      description: "Dagestan State Medical University (DSMU) is a prominent medical university located in Makhachkala, the capital city of the Republic of Dagestan, Russia. Founded in 1932, DSMU has established itself as a major educational institution in the North Caucasus region, with a strong reputation for producing skilled medical professionals and contributing to the advancement of healthcare in the region.",
      authorImage: "https://avatars.mds.yandex.net/i?id=8f614f61159265529948d3172e80f731_l-5235770-images-thumbs&n=13",
      image: "https://static.mk.ru/upload/entities/2021/04/26/14/articles/facebookPicture/73/f6/c8/50/4e2cdc599918af3b45f5c32b88f7dae2.jpg",
      url: "http://www.thedoctorsiea.in/"
    },
    {
      id: 29,
      title: "Peoples' Friendship University of Russia (RUDN University) ",
      description: "Peoples' Friendship University of Russia (RUDN University), located in Moscow, is one of the most prestigious and internationally recognized universities in Russia. Founded in 1960, it was originally established to provide higher education to students from Africa, Asia, and Latin America to foster international cooperation and understanding during the Cold War. ",
      authorImage: "https://www.rudn.ru/storage/media/page/8aba8519-ab38-402f-a5e0-a3194bc6b63e/oLKgZKBLujeSuK8BUuZp5WTDOqmFdBtbntWpISUN.jpg",
      image: "https://avatars.mds.yandex.net/i?id=f014cc4e34f727fe4e35f7aba052d05e_l-2769679-images-thumbs&n=13",
      url: "http://www.thedoctorsiea.in/"
    },
  ];

  // Filter blogCards based on the search term, reverse the order after filtering
  const filteredBlogCards = blogCards
    .reverse() // Reverse the order to load from the last ID
    .filter((card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // Get the current page's blog posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredBlogCards.slice(indexOfFirstPost, indexOfLastPost);

  // Handle the Next and Previous button logic
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredBlogCards.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };
  // Function to create a slug for the title
  const createSlug = (str) => {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')   // Replace non-alphanumeric characters with dashes
      .replace(/(^-|-$)/g, '');       // Remove leading/trailing dashes
  };


  return (
    <>
      <Helmet>
        <title>Study MBBS in Russia 2025 | Universities - 2025 Latest Blogs</title>
        <meta name="description" content="Browse universities and read insightful articles about higher education and global universities on Blog Website." />
        <meta name="keywords" content="universities, higher education, college list, university rankings, educational articles" />
        <meta name="author" content="Blog Website Team" />
        <link rel="canonical" href="https://blog-website-test.netlify.app/universities" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="Russia Blog Website" />
        <meta property="og:title" content="Study MBBS in Russia 2025 | Universities - 2025 Latest Blogs" />
        <meta property="og:description" content="Browse universities and explore articles on higher education, rankings, and global university trends on Blog Website." />
        <meta property="og:image" content="/logo.png?v=2" />
        <meta property="og:url" content="https://blog-website-test.netlify.app/universities" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Study MBBS in Russia 2025 | Universities - 2025 Latest Blogs" />
        <meta name="twitter:description" content="Explore insightful articles on universities, higher education, and university rankings at Blog Website." />
        <meta name="twitter:image" content="/logo.png?v=2" />
      </Helmet>

      <div className="min-h-screen lg:px-20 bg-gray-100 py-8">
        <div className="text-center mb-12">
          <h1 className="lg:text-5xl text-2xl font-bold text-purple-400 mb-6">University Blog: Explore Top Universities</h1>
          <p className="lg:text-xl text-md px-4 text-gray-700 mb-8">
            Discover the prestigious universities in Russia with a rich history, top-tier programs, cutting-edge research, and opportunities for students from all around the world. Dive into the world of academic excellence, innovation, and growth.
          </p>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search University Blogs..."
            className="px-4 py-2 w-80 lg:w-1/3 border border-2 rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Grid Layout for Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8">
          {/* Mapping through filtered blogCards array */}
          {currentPosts.map((card, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
              <img
                src={card.image}
                alt="Blog image"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex-1">
                <h2 className="text-xl font-semibold text-gray-800 text-justify mb-4">{card.title}</h2>
                <p className="text-gray-600 text-sm mb-4 text-justify">{card.description}</p>
              </div>
              {/* Footer with author image and See More link */}
              <div className="flex justify-between items-center p-4 border-t">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src={card.authorImage}
                    alt="Author"
                    className="w-full h-full object-cover"
                  />
                </div>
                <Link
                  key={card.id}
                  to={`/${createSlug(card.title)}`} // Create slugs for both title and URL
                  className="text-blue-500 hover:text-blue-700 text-sm"
                >
                  See More
                </Link>

              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-8">
          <button
            onClick={prevPage}
            className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 mx-2"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 mx-0"
            disabled={currentPage === Math.ceil(filteredBlogCards.length / postsPerPage)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default University;
