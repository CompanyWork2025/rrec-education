import { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    name: "Anastasia Ivanova",
    location: "Moscow, Russia",
    text: "StudyinRussia.in made the entire process of applying to universities in Russia so much easier. The guidance provided was precise, and I felt supported every step of the way. Highly recommend it to anyone looking to study in Russia!",
    rating: 5,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/%D0%9C%D0%93%D0%A3%2C_%D0%B2%D0%B8%D0%B4_%D1%81_%D0%B2%D0%BE%D0%B7%D0%B4%D1%83%D1%85%D0%B0.jpg/1200px-%D0%9C%D0%93%D0%A3%2C_%D0%B2%D0%B8%D0%B4_%D1%81_%D0%B2%D0%BE%D0%B7%D0%B4%D1%83%D0%B1%D0%B0.jpg", // Replace with actual image paths
  },
  {
    name: "Carlos Mendes",
    location: "Kazan, Russia",
    text: "I had no idea where to start with the university application process in Russia, but StudyinRussia.in was a lifesaver. It was seamless and efficient. I am now studying my dream program in Kazan!",
    rating: 4,
    image: "https://mbbsexpert.in/wp-content/uploads/2021/01/Kazan-Federal-University.png", // Replace with actual image paths
  },
  {
    name: "Sophia Berg",
    location: "Saint Petersburg, Russia",
    text: "Thanks to StudyinRussia.in, my admission process to Saint Petersburg State University was smooth and stress-free. The team is highly professional and responsive!",
    rating: 4,
    image: "https://welcometostudy.com/sites/default/files/higher-education/150/glavnayaspbguglobaleducation.jpg", // Replace with actual image paths
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
