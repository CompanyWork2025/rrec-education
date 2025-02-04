import React from "react";

const About = () => {
  return (
    <div className="bg-blue-50 lg:-mt-40 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl text-purple-600 font-semibold font-expressa lg:text-start text-center mb-6">
          Explore The Universities of Russia
        </h1>

        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 italic">
          {/* Left content */}
          <div className="flex-1">
            <p className="text-gray-700 space-x-4 text-lg mb-6 text-center lg:text-left">
              Russian universities offer world-class education and exceptional
              opportunities for students to develop professionally and personally.
              With their rich academic heritage, innovative research programs, and
              strong ties to global institutions, Russian universities stand as some
              of the most prestigious in the world.
            </p>

            <div className="text-gray-700 text-center text-left text-justify space-y-4">
              <p className="text-lg px-4 lg:px-0">
                Universities in Russia are equipped with cutting-edge laboratories,
                modern classrooms, and extensive research facilities. Students are
                exposed to state-of-the-art technologies and techniques in various
                fields, ensuring that their skills meet the highest global standards.
              </p>
              <p className="text-lg px-4 lg:px-0">
                With an emphasis on international partnerships, Russian universities
                offer exchange programs, internships, and research collaboration
                opportunities across Europe, Asia, and beyond. Students gain valuable
                real-world experience that enriches their academic journey.
              </p>
              <p className="text-lg px-4 lg:px-0">
                The cultural diversity and vibrant student life add to the appeal
                of studying in Russia. With universities located in major cities
                such as Moscow, Saint Petersburg, and Kazan, students enjoy the
                benefits of world-class infrastructure, rich history, and numerous
                extracurricular activities.
              </p>
            </div>

            <h2 className="text-xl font-semibold mt-8 px-4 lg:px-0 text-center lg:text-left">
              Studying in Russia means access to top-tier education, cultural
              enrichment, and exciting opportunities in research and development.
            </h2>

            <ul className="mt-6 space-y-2 px-4 lg:px-0 text-lg">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span> Russian
                universities are globally recognized for academic excellence.
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span> Affordable
                tuition and living costs compared to Western countries.
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span> Offer
                diverse study programs in English and Russian.
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span> Strong
                international collaborations with top universities worldwide.
              </li>
            </ul>
          </div>

          {/* Right image */}
          <div className="mt-8 lg:mt-14 lg:flex-shrink-0">
            <img
              src="https://png.pngtree.com/png-vector/20240628/ourmid/pngtree-globe-world-with-graduate-hat-and-books-3d-image-png-image_12908027.png"
              alt="Globe"
              className="w-full lg:w-[500px] lg:h-[700px] lg:-mt-24 lg:ml-4 h-auto object-contain mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
