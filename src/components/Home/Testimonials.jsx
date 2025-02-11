import { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    name: "Amit Sharma",
    location: "Rostov-on-Don, Russia",
    text: "Choosing Rostov State Medical University was the best decision of my life. The faculty is highly knowledgeable, and the admission process through StudyinRussia.in was smooth and transparent. Highly recommended!",
    rating: 5,
    image: "https://satyamevedu.co.in/wp-content/uploads/2023/04/WhatsApp-Image-2022-05-10-at-12.18.11-AM-1024x683.jpeg", // Replace with actual image path
  },
  {
    name: "Priya Nair",
    location: "Kazan, Russia",
    text: "Kazan State Medical University has exceeded my expectations! The professors are very supportive, and I got admission without any hassle thanks to StudyinRussia.in. They made everything stress-free.",
    rating: 4,
    image: "https://mbbsexpert.in/wp-content/uploads/2021/01/Kazan-Federal-University.png", // Replace with actual image path
  },
  {
    name: "Rahul Verma",
    location: "Ufa, Russia",
    text: "Bashkir State Medical University provides an excellent education with modern facilities. StudyinRussia.in guided me throughout the process, making my dream of studying in Russia a reality.",
    rating: 4,
    image: "https://studymedico.com/public//storage/uploads/university/blog185-BASHKIR%20STATE%20MEDICAL%20UNIVERSITY%20,%20MBBS%20IN%20RUSSIA_1.png", // Replace with actual image path
  },
];

const StarRating = ({ rating }) => {
  const stars = Array(5).fill(false).map((_, index) => index < rating);
  return (
    <div className="flex space-x-1">
      {stars.map((filled, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          className={`w-6 h-6 ${filled ? 'text-yellow-500' : 'text-gray-400'}`}
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            d="M12 .587l3.668 7.431 8.214 1.196-5.945 5.993 1.406 8.198L12 18.897l-7.444 3.508 1.405-8.198-5.945-5.993 8.214-1.196L12 .587z"
          />
        </svg>
      ))}
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Automatically change testimonial every 5 seconds

    return () => clearInterval(intervalId); // Clear the interval on component unmount
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`bg-gradient-to-r from-blue-400 to-purple-600 py-10 lg:py-24 px-4 transition-all duration-1000 ease-in-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      <div className="relative max-w-5xl right-4 lg:right-28 mx-auto">
        {/* Card shifted to the left */}
        <div className="bg-white p-8 rounded-3xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl relative ml-8">
          {/* Text Section */}
          <div className="flex-1">
            <p className="text-lg text-gray-800 lg:w-4/5 italic mb-6">{testimonials[currentIndex].text}</p>
            <div className="mb-4">
              <StarRating rating={testimonials[currentIndex].rating} />
            </div>
            <p className="font-bold text-gray-900 text-2xl">{testimonials[currentIndex].name}</p>
            <p className="text-gray-600 text-lg">{testimonials[currentIndex].location}</p>
          </div>
          
          {/* Image Section: Positioned half inside and half outside */}
          <div className="hidden lg:block absolute -right-64 top-1/2 transform -translate-y-1/2 z-10">
            <img
              src={testimonials[currentIndex].image}
              alt={`${testimonials[currentIndex].name}'s university`}
              className="w-96 h-96 object-cover rounded-full border-4 border-white shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
