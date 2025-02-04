import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Slider = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      image: "https://satyamevedu.co.in/wp-content/uploads/2023/04/WhatsApp-Image-2022-05-10-at-12.18.11-AM-1024x683.jpeg",
      title: 'Rostov University: A Leading Educational Hub in Russia',
    },
    {
      id: 3,
      image: "https://www.ruseducation.in/wp-content/uploads/2022/01/Bashkir-State-Medical-University.webp",
      title: 'Bashkir State Medical University: A Premier Medical Institution in Russia',
    },
    {
      id: 5,
      image: "https://www.ruseducation.in/wp-content/uploads/2022/01/Crimea-Federal-University.webp",
      title: 'Crimea University: Excellence in Higher Education in Russia',
    },
    {
      id: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFnaWh38SY7rlrqq_Pa5WMMP93Q_Bnc5RfeQ&s",
      title: "Saint Petersburg State University: Russia's Top Academic Destination",
    },
    {
      id: 2,
      image: "https://images.shiksha.com/mediadata/images/1423632114phpSVpSVi_g.jpg",
      title: 'Moscow State University: Leading Education in Russia and Beyond',
    },
  ];

  return (
    <div className="bg-white py-10">
      <h2 className="text-3xl md:text-4xl md:text-center lg:text-left lg:text-5xl font-expressa lg:ml-12 font-bold text-center mb-12 text-gray-800 lg:px-20">
        Latest <span className="text-purple-500">News</span>
      </h2>

      <div className="px-8">
        {/* Mobile Swiper */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="shadow-lg md:shadow-none md:border-none border rounded-2xl lg:hidden"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="md:hidden flex flex-col bg-white border rounded-2xl shadow-xl shadow-[0_14px_45px_rgba(0,0,0,0.2)] border border-2 hover:shadow-lg transition-shadow h-[400px]">
                <div className="bg-white w-full h-1/2 flex items-center justify-center rounded-t-2xl">
                  <img src={product.image} alt={product.title} className="h-full w-full object-cover rounded-t-2xl" />
                </div>
                <div className="p-6 flex flex-col h-1/2 bg-white rounded-b-2xl">
                  <div className="flex items-center justify-between w-full mb-2">
                    <h3 className="text-xl font-semibold text-black">{product.title}</h3>
                    <div className="flex items-center gap-2">
                      <FaArrowRight
                        className="text-black ml-2"
                        onClick={() => {
                          // Scroll to the top of the page before navigating to /news
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                          // Navigate to the /news page
                          navigate('/news');
                        }}
                      />
                    </div>
                  </div>
                  <div className="mt-auto text-right">
                    <Link
                      to="/news"
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                      className="text-black font-medium "
                    >
                      View <span className='text-purple-500'>News</span>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Tablet and Desktop Swiper */}
        <div className="hidden md:block md:px-6 lg:px-24">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2} // Show 2 cards for md screens
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1024: {
                slidesPerView: 4, // Show 4 cards for lg screens
              },
            }}
            className="rounded-2xl overflow-visible"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="relative flex flex-col bg-white border rounded-2xl shadow-md hover:shadow-xl transition-shadow h-[380px] sm:h-[380px] md:h-[380px] lg:h-[420px] shadow-[0_14px_45px_rgba(0,0,0,0.2)] mb-6">
                  <div className="bg-gradient-to-r from-[#3967F0] to-[#A100FF] w-full h-2/4 flex items-center justify-center rounded-t-2xl">
                    <img src={product.image} alt={product.title} className="h-full w-full object-cover rounded-t-2xl" />
                  </div>
                  <div className="p-6 flex flex-col h-1/2 bg-white rounded-b-2xl group">
                    <div className="flex items-center justify-between w-full mb-2">
                      <h3 className="text-xl font-semibold text-black">{product.title}</h3>
                      <div className="flex items-center gap-2">
                        <FaArrowRight
                          className="text-black ml-2"
                          onClick={() => {
                            // Scroll to the top of the page before navigating to /news
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            // Navigate to the /news page
                            navigate('/news');
                          }}
                        />
                      </div>
                    </div>
                    <div className="mt-auto text-right">
                      <Link
                        to="/news"
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                        className="text-black font-medium "
                      >
                        View <span className='text-purple-500'>News</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Slider;
