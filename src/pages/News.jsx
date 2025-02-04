import React, { useState } from "react";
import { Helmet } from "react-helmet";

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("latest");

  const latestNews = [
    { id: 1, title: "Scientific Research Achievements at Russian University", content: "Recently, Russian researchers achieved significant breakthroughs in AI and robotics, contributing to global technological advancement.", imageUrl: "https://forpost-sz.ru/sites/default/files/styles/wide169/public/doc/2023/10/30/img_5307.jpg?h=d1cb525d&itok=xAMZ_j0M" },
    { id: 2, title: "International Students Welcome Event", content: "The university organized a grand event to welcome international students, strengthening its multicultural atmosphere.", imageUrl: "https://i.ytimg.com/vi/XxY6eSTNFKY/maxresdefault.jpg" },
    { id: 3, title: "New Campus Building Opening", content: "The grand opening of the new campus building, which houses modern classrooms and research labs, was celebrated with a ribbon-cutting ceremony.", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYSisyvtFQTbMEAOS7AkJNxA9LbwlAKU81Tg&s" },
    { id: 4, title: "University Hosts International Conference on Climate Change", content: "The university's faculty members hosted an international conference focusing on sustainable development and climate change solutions.", imageUrl: "https://www.nato.int/nato_static_fl2014/assets/pictures/images_mfu/2023/12/1a-trip-sg-cop28/231201a-003_rdax_775x440s.jpg" },
    { id: 5, title: "University Partnership with Leading Russian Tech Firm", content: "A strategic partnership has been formed with one of the top technology firms in Russia to collaborate on innovation research projects.", imageUrl: "https://www.ruseducation.in/wp-content/uploads/2022/01/russian-technological-university.webp" },
    { id: 6, title: "New International Exchange Programs Launched", content: "The university has launched new exchange programs with universities in Europe, North America, and Asia for enhanced academic collaboration.", imageUrl: "https://cdn-media.tass.ru/width/1020_b9261fa1/tass/m2/en/uploads/i/20141001/1063610.jpg" },
    { id: 7, title: "Cultural Festival at University", content: "Students showcased their cultures through music, dance, food, and traditional arts at the university’s annual cultural festival.", imageUrl: "https://russian-e-visa.com/images/festivals-and-events-in-russia.jpg" },
    { id: 8, title: "Students Win International Robotics Championship", content: "A team of students from the university has won first place in the International Robotics Championship, further establishing the university's leadership in the field.", imageUrl: "https://positivenewsromania.com/wp-content/uploads/2023/04/531aa-echipa-de-campioni-la-robotica-a-romaniei-dupa-competitia-din-rusia-din-februarie-2018.jpg" },
  ];

  const functions = [
    { id: 1, title: "International Students Orientation", content: "This function helps international students familiarize themselves with university services, academic practices, and local culture.", imageUrl: "https://www.hse.ru/data/2017/09/06/1172482311/20170825_0002.jpg" },
    { id: 2, title: "University’s Annual Graduation Ceremony", content: "Graduates from all faculties will be honored at the prestigious annual graduation ceremony.", imageUrl: "https://www.psmu.in/admin/images/gallery/convocation-ceremony-2022-held-at-perm-state-medical-university%20(14).webp" },
    { id: 3, title: "Sustainable Innovation Symposium", content: "A symposium on sustainable development and green innovations is organized to inspire researchers and students to create eco-friendly solutions.", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5Yl1ztOfcYSPkNvBIW3oanu_ChPX7nRWuQ&s" },
    { id: 4, title: "Startup Weekend at Russian University", content: "A weekend event focused on entrepreneurship where students pitch their startup ideas to local investors and mentors.", imageUrl: "https://media.innopolis.university/upload/iblock/332/_MG_9112.JPG" },
    { id: 5, title: "University Music Festival", content: "A week-long music festival, bringing together student performers and well-known artists from Russia and abroad.", imageUrl: "https://static.themoscowtimes.com/image/article_1360/75/_MG_0570.jpg" },
    { id: 6, title: "Student Career Fair", content: "A career fair where top Russian and international companies interact with university students, providing networking opportunities and internships.", imageUrl: "https://en.gubkin.ru/upload/medialibrary/b52/b528c88bc8c95775a82a29ff741c910a.jpg" },
    { id: 7, title: "Art Exhibition: Emerging Artists of Russia", content: "An art exhibition featuring the work of Russian students who are making an impact in the global art community.", imageUrl: "https://static.themoscowtimes.com/image/article_1360/cd/FedyaRo-164.jpg" },
    { id: 8, title: "University Open Day for Prospective Students", content: "An event inviting high school graduates to visit the university, tour the campus, and learn about degree programs.", imageUrl: "https://www.hse.ru/data/2023/09/19/2061322068/3DSC05897.jpg" },
  ];


  const dataToDisplay = selectedCategory === "latest" ? latestNews : functions;

  return (
    <>
      <Helmet>
        <title>Study MBBS in Russia 2025 | News & Updates - 2025 Latest Blogs</title>
        <meta name="description" content="Stay updated with the latest news, events, and updates about the university and its functions." />
        <meta name="keywords" content="university news, functions, events, updates, academic news" />
        <meta name="author" content="Blog Website Team" />
        <link rel="canonical" href="https://blog-website-test.netlify.app/news" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Study MBBS in Russia 2025 | News & Updates - 2025 Latest Blogs" />
        <meta property="og:description" content="Stay updated with the latest news, events, and updates about the university and its functions." />
        <meta property="og:image" content="/logo.png?v=2" />
        <meta property="og:url" content="https://blog-website-test.netlify.app/news" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Study MBBS in Russia 2025 | News & Updates - 2025 Latest Blogs" />
        <meta name="twitter:description" content="Stay updated with the latest news, events, and updates about the university and its functions." />
        <meta name="twitter:image" content="/logo.png?v=2" />
      </Helmet>

      <div className="min-h-screen bg-gray-100 py-10 px-4">
        {/* Top Description */}
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h1 className="text-3xl lg:text-5xl text-purple-400 font-bold mb-4">University News & Updates</h1>
          <p className="text-lg md:text-xl text-gray-800">
            Stay updated with the latest happenings, news articles, and announcements related to the university and our ongoing functions.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="max-w-6xl mx-auto text-center mb-12">
          <button
            className="px-8 py-3 mx-3 text-white bg-purple-500 hover:bg-blue-600 rounded-md shadow-md text-lg"
            onClick={() => setSelectedCategory("latest")}
          >
            Latest News
          </button>
          <button
            className="px-8 py-3 mx-3 text-white bg-purple-400 hover:bg-green-600 rounded-md shadow-md text-lg"
            onClick={() => setSelectedCategory("functions")}
          >
            Functions
          </button>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:px-8 px-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {dataToDisplay.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-xl transition duration-300 transform hover:scale-105">
              <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h2>
                <p className="text-gray-700 mb-4">{item.content}</p>
                <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Read more &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
