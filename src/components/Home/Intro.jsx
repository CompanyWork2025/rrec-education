import { useEffect, useRef } from 'react';
import logo from "../../assets/ural.png";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css'; // Swiper styles
import 'swiper/css/autoplay'; // Autoplay styles
import 'swiper/css/pagination'; // Pagination styles (if using pagination)
import 'swiper/css/navigation'; // Navigation styles (if using navigation)

import logo1 from '../../assets/rostov.png';
import img from "../../assets/np.png";

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
      link: '/university/rostov',
    },
    {
      id: 2,
      logo: "https://upload.wikimedia.org/wikipedia/en/1/14/KSMU_logo.png",
      title: 'Kazan State Medical University',
      text: 'A prestigious medical university in Russia, Kazan State Medical University offers world-class MBBS programs with advanced research facilities and English-medium courses.',
      backText: 'Recognized by WHO & MCI, known for its strong academic curriculum and modern teaching methodologies.',
      link: '/university/kazan-medical',
    },
    {
      id: 3,
      logo: "https://www.eeua.ru/images/CFU_logo.png",
      title: 'Crimea Federal University',
      text: 'A top-ranked medical university, Crimea Federal University is an excellent choice for Indian students looking for an affordable and high-quality MBBS program in Russia.',
      backText: 'Known for its research-driven curriculum, experienced faculty, and modern hospital training facilities.',
      link: '/university/crimea-medical',
    },
    {
      id: 4,
      logo: img,
      title: 'North-Western State Medical University',
      text: 'North-Western State Medical University is one of Russia\'s prestigious institutions offering world-class medical education, with programs available in English for international students.',
      backText: 'Known for its state-of-the-art facilities and research contributions, it is a top choice for students pursuing a career in medicine.',
      link: '/university/north-western',
    },
    {
      id: 5,
      logo: "https://bashgmu.ru/upload/medialibrary/e27/e27505b5196458100ec1b6c1e9cbd476.png",
      title: "Bashkir State Medical University",
      text: "Established in 1932 in Ufa, Bashkortostan, Bashkir State Medical University is one of Russia’s oldest and most prestigious medical institutions. ",
      backText: "Accredited by the National Medical Commission (NMC) and WHO, the university provides state-of-the-art hostel facilities, robust international support services in aborad.",
      link: "/university/bashkir"
    },
    {
      id: 6,
      logo: logo,
      title: "Ural State Medical University",
      text: "Founded in 1930 and located in Yekaterinburg, Ural State Medical University is a leading public medical institution in the Sverdlovsk Oblast. ",
      backText: "With modern teaching facilities, advanced simulation centers, and a dynamic research environment, USMU is accredited by Russian higher education authorities. ",
      link: "/university/ural"
    },
    {
      id: 7,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBWC5hDNjI0hiWZBs2FuKfBjdvK0v-mKmI2Q&s",
      title: "Perm State Medical University",
      text: "Established in 1916 and granted university status in 2014, Perm State Medical University named after Academician E. A. Wagner is a prominent public institution in the Volga Federal District. ",
      backText: "Known for its comprehensive curriculum, modern laboratories, and dedicated faculty.",
      link: "/university/perm"
    },
    {
      id: 8,
      logo: "https://upload.wikimedia.org/wikipedia/en/f/f6/Kursk_State_Medical_University_logo.png",
      title: "Kursk State Medical University",
      text: "Founded in 1935 in Kursk, Russia, Kursk State Medical University offers a full medical training program in English. ",
      backText: "Accredited in 15 foreign countries and equipped with state-of-the-art research and practical training facilities.",
      link: "/university/kursk"
    }
  ];

  return (
    <>
      <section className="w-full flex flex-col items-center justify-center mt-14 md:my-16">
        <div className="flex items-center -mt-10 md:mt-0 justify-center w-full">
          <div className="border-t-2 border-blue-500 w-1/4 hidden md:block"></div>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-gray-800 mx-4 md:mx-6 text-center uppercase tracking-wide">
            Medical Universities
          </h1>
          <div className="border-t-2 border-blue-500 w-1/4 hidden md:block"></div>
        </div>
        <h2 className="text-xl md:text-3xl font-semibold text-gray-700 mt-4 text-center">
          Study MBBS in Russia
        </h2>
      </section>

      <section className="mx-auto w-11/12 my-8 md:my-28 lg:my-10">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={card.id}>
              <div
                ref={(el) => (cardRefs.current[index] = el)}
                className="card-animation bg-gradient-to-r min-h-[380px] from-blue-400 to-purple-600 p-8 md:p-8 lg:p-8 rounded-lg opacity-0 transform -translate-y-40 shadow-lg perspective"
              >
                <div className="card-inner">
                  {/* Front Side */}
                  <div className="card-front flex flex-col items-center justify-start">
                    <div className="flex items-center justify-center w-28 h-28 bg-gradient-to-r from-blue-600 to-purple-400 rounded-full mb-4">
                      <img
                        src={card.logo}
                        alt="Icon"
                        className={`object-contain rounded-full ${card.id === 3 ? "w-24 h-36" : "w-full h-full"}`}
                      />

                    </div>

                    <div className="text-center text-white">
                      <h2 className="mt-2 text-lg font-bold">{card.title}</h2>
                      <p className="text-white">{card.text}</p>
                    </div>
                  </div>
                  {/* Back Side */}
                  <div className="card-back flex flex-col items-center px-4 justify-center text-center bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg">
                    <p className="text-white text-lg font-bold">{card.backText}</p>
                    <div className="mt-4 text-center">
                      <Link
                        to={card.link}
                        className="bg-white text-orange-600 font-bold py-2 px-4 rounded hover:bg-orange-600 hover:text-white transition duration-300"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

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
          margin-top: 150px;
        }

        .animate-slide-in {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
      `}</style>
    </>
  );
};

export default Card;
