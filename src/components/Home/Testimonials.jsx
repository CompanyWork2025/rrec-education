import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Amit Sharma",
    location: "Rostov-on-Don, Russia",
    text: "Choosing Rostov State Medical University was the best decision of my life. The faculty is highly knowledgeable, and the admission process through StudyinRussia.in was smooth and transparent. Highly recommended!",
    rating: 5,
    image: "https://satyamevedu.co.in/wp-content/uploads/2023/04/WhatsApp-Image-2022-05-10-at-12.18.11-AM-1024x683.jpeg",
  },
  {
    name: "Priya Nair",
    location: "Kazan, Russia",
    text: "Kazan State Medical University has exceeded my expectations! The professors are very supportive, and I got admission without any hassle thanks to StudyinRussia.in. They made everything stress-free.",
    rating: 4,
    image: "https://mbbsexpert.in/wp-content/uploads/2021/01/Kazan-Federal-University.png",
  },
  {
    name: "Rahul Verma",
    location: "Ufa, Russia",
    text: "Bashkir State Medical University provides an excellent education with modern facilities. StudyinRussia.in guided me throughout the process, making my dream of studying in Russia a reality.",
    rating: 4,
    image: "https://studymedico.com/public//storage/uploads/university/blog185-BASHKIR%20STATE%20MEDICAL%20UNIVERSITY%20,%20MBBS%20IN%20RUSSIA_1.png",
  },
];

const StarRating = ({ rating }) => {
  const stars = Array(5)
    .fill(false)
    .map((_, index) => index < rating);
  return (
    <div className="flex space-x-1">
      {stars.map((filled, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          className={`w-6 h-6 ${filled ? "text-yellow-500" : "text-gray-400"}`}
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 .587l3.668 7.431 8.214 1.196-5.945 5.993 1.406 8.198L12 18.897l-7.444 3.508 1.405-8.198-5.945-5.993 8.214-1.196L12 .587z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-gradient-to-r from-blue-400 to-purple-600 py-10 lg:py-24 px-4 transition-all duration-1000 ease-in-out"
    >
      <div className="relative max-w-5xl mx-auto">
        <div className="bg-white lg:right-28 p-8 rounded-3xl shadow-lg relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col items-start space-y-4"
            >
              <p className="text-lg text-gray-800 lg:w-4/5 italic">
                {testimonials[currentIndex].text}
              </p>
              <StarRating rating={testimonials[currentIndex].rating} />
              <p className="font-bold text-gray-900 text-2xl">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-gray-600 text-lg">
                {testimonials[currentIndex].location}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="hidden lg:block absolute -right-64 top-1/2 transform -translate-y-1/2 z-10">
            <AnimatePresence mode="wait">
              <motion.img
                key={testimonials[currentIndex].image}
                src={testimonials[currentIndex].image}
                alt={`${testimonials[currentIndex].name}'s university`}
                className="w-96 h-96 object-cover rounded-full border-4 border-white shadow-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
