import { useEffect, useRef } from 'react';
import logo1 from '../../assets/rostov.png';

const Card = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains('animate-slide-in')) {
            entry.target.classList.add('animate-slide-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      id: 1,
      logo: logo1,
      title: 'Rostov State Medical University',
      text: 'One of the top medical universities in Russia, Rostov State Medical University is known for its high-quality medical education, modern infrastructure, and international student-friendly environment.',
      backText: 'Accredited by WHO & NMC, offering affordable tuition fees and globally recognized medical degrees.',
      link: '/rostov-state-medical-university',
    },
    {
      id: 2,
      logo: "https://upload.wikimedia.org/wikipedia/en/1/14/KSMU_logo.png",
      title: 'Kazan State Medical University',
      text: 'A prestigious medical university in Russia, Kazan State Medical University offers world-class MBBS programs with advanced research facilities and English-medium courses.',
      backText: 'Recognized by WHO & MCI, known for its strong academic curriculum and modern teaching methodologies.',
      link: '/kazan-state-medical-university',
    },
    {
      id: 3,
      logo: "https://www.eeua.ru/images/CFU_logo.png",
      title: 'Crimea Federal University',
      text: 'A top-ranked medical university, Crimea Federal University is an excellent choice for Indian students looking for an affordable and high-quality MBBS program in Russia.',
      backText: 'Known for its research-driven curriculum, experienced faculty, and modern hospital training facilities.',
      link: '/crimea-federal-university',
    },
    {
      id: 4,
      logo: "https://i0.wp.com/russian-resources.com/wp-content/uploads/2022/06/logo.png?fit=800%2C800&ssl=1",
      title: 'Orenburg State Medical University',
      text: 'Orenburg State Medical University is one of the oldest and most respected medical universities in Russia, offering internationally recognized MBBS programs with English-medium instruction.',
      backText: 'A top choice for Indian students due to affordable tuition, excellent infrastructure, and strong academic reputation.',
      link: '/orenburg-state-medical-university',
    }
  ];



  return (
    <>
      <section className="w-full flex flex-col items-center justify-center mt-14 md:my-16">
        {/* Main Heading with Lines */}
        <div className="flex items-center -mt-10 md:mt-0 justify-center w-full">
          <div className="border-t-2 border-blue-500 w-1/4 hidden md:block"></div>
          <h1 className="text-2xl md:text-5xl font-extrabold text-gray-800 mx-4 md:mx-6 text-center uppercase tracking-wide">
            Medical Universities
          </h1>
          <div className="border-t-2 border-blue-500 w-1/4 hidden md:block"></div>
        </div>

        {/* Subheading */}
        <h2 className="text-xl md:text-3xl font-semibold text-gray-700 mt-4 text-center">
          Study MBBS in Russia
        </h2>
      </section>

      <section className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12 lg:gap-8 w-11/12 my-8 md:my-28 lg:my-10">
        {cards.map((card, index) => (
          <div
            key={card.id}
            ref={(el) => (cardRefs.current[index] = el)}
            className="card-animation bg-gradient-to-r min-h-[380px] from-blue-400 to-purple-600 p-8 md:p-8 lg:p-8 rounded-lg opacity-0 transform -translate-y-40 lg:mb-0 shadow-lg perspective"
          >
            <div className="card-inner">
              {/* Front Side */}
              <div className="card-front flex flex-col items-center justify-start">
                <div className="flex items-center justify-center w-28 h-28 bg-gradient-to-r from-blue-600 to-purple-400 rounded-full mb-4">
                  <img src={card.logo} alt="Icon" className="w-full h-full object-contain rounded-full" />
                </div>

                <div className="text-center text-white">
                  <h2 className="mt-2 text-lg font-bold">{card.title}</h2>
                  <p className="text-white">{card.text}</p>
                </div>
              </div>
              {/* Back Side */}
              <div className="card-back flex flex-col items-center px-4 justify-center text-center bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg">
                <p className="text-white text-lg font-bold">{card.backText}</p>
                {/* Button for Navigation */}
                <div className="mt-4 text-center">
                  <a
                    href={card.link}
                    className="bg-white text-orange-600 font-bold py-2 px-4 rounded hover:bg-orange-600 hover:text-white transition duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
        <style jsx>{`
        .perspective {
          perspective: 1000px;
        }

        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.6s ease;
        }

        .card-animation:hover .card-inner {
          transform: rotateY(180deg);
        }

        .card-front,
        .card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: inherit;
        }

        .card-back {
          transform: rotateY(180deg);
        }

        .animate-slide-in {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
      `}</style>
      </section>
    </>
  );
};

export default Card;