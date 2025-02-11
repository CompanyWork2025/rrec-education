import { useState, useEffect, useRef } from 'react';

const About = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Main Content */}
      <div
        ref={sectionRef}
        className={`container mx-auto py-12 lg:py-16 px-4 lg:px-14 transition-all duration-1000 ease-in-out ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Left Side Image */}
          <div className="w-full -ml-4 md:ml-0 lg:w-1/2 mb-8">
            <img
              src="https://media4.giphy.com/media/d7xbkUiBOArb3d4w7t/200.gif?cid=6c09b952qgseioailydp5n02i4ndi4nrf9x5pkirti4ptd0c&ep=v1_gifs_search&rid=200.gif&ct=g"
              alt="Russian University"
              className="w-full h-auto lg:h-[400px] lg:ml-0 ml-4 rounded-lg object-cover"
            />
          </div>

          {/* Right Side Content */}
          <div className="w-full lg:w-1/2 lg:ml-6 text-left">
            <h2 className="text-3xl md:text-5xl mb-4 text-blue-600 font-bold">
              RUSSIAN UNIVERSITIES
            </h2>
            <p className="text-lg text-justify mb-4">
              Russia is home to some of the world's most prestigious universities, offering high-quality education in various fields. From engineering and technology to medicine and humanities, Russian universities are recognized globally for their research contributions and academic excellence.
            </p>
            <p className="text-lg text-justify">
              Institutions such as Lomonosov Moscow State University and St. Petersburg State University are renowned for their innovative programs and diverse student populations. These universities offer world-class facilities, international collaborations, and a rich cultural experience for students from all over the world.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between mt-14 lg:mt-14 gap-8">
          {/* Left Side Image for Mobile */}
          <div className="lg:hidden w-full md:w-full">
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/1*efjn6y3ZHVrr7dZ2J_5QFQ.gif"
              alt="Students at Russian University"
              className="w-full h-auto lg:h-[350px] rounded-lg object-cover"
              loading="lazy" // Lazy load the GIF
            />
          </div>

          {/* Left Side Content */}
          <div className="w-full mt-6 md:mt-0 lg:w-1/2 text-left">
            <h2 className="text-3xl md:text-5xl text-blue-600 mb-4 font-bold">
              STUDENT LIFE IN RUSSIA
            </h2>
            <p className="text-lg text-justify mb-4">
              Studying in Russia is not just about academics—it's also about immersing yourself in a vibrant student life. With a strong tradition of cultural and academic exchange, Russian universities host students from all over the world, providing an enriching environment for both personal and professional growth.
            </p>
            <p className="text-lg text-justify">
              Russian cities, such as Moscow and St. Petersburg, offer students a unique blend of history, modernity, and culture, with plenty of opportunities for exploration and growth outside of the classroom.
            </p>
          </div>

          {/* Right Side Image for Larger Screens */}
          <div className="hidden lg:block w-full lg:w-1/2">
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/1*efjn6y3ZHVrr7dZ2J_5QFQ.gif"
              alt="Students at Russian University"
              className="w-full h-auto lg:h-[350px] rounded-lg object-cover"
              loading="lazy" // Lazy load the GIF
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
