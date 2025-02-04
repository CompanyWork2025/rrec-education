import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What are the top universities in Russia?",
      answer: "Some of the top universities in Russia include Lomonosov Moscow State University, St. Petersburg State University, and Novosibirsk State University,Rostov State Medical University, Kazan State Medical University, Kursk State Medical University, Crimea Federal University, Southern Federa, Peoples' Friendship University of Russia (RUDN University), I.M. Sechenov Moscow Medical University, Northern State Medical University (NSMU), Saint Petersburg State Paediatric  Medical University, Immanuel Kant Baltic Federal University (Medical Faculty),  Novosibirsk State Medical University (NSMU) ",
    },
    {
      question: "How do I apply to a Russian university?",
      answer: "To apply to a Russian university, you typically need to complete an online application, provide your academic records, and prove proficiency in Russian or English, depending on the program. For more information and guidance you can contact official representative at ‪+7 951 519‑03‑76",
    },
    {
      question: "What are the living costs for students in Russia?",
      answer: "The living costs in Russia vary by location, but on average, students can expect to spend between $200 to 350$ per month depending on the city and lifestyle.",
    },
    {
      question: "Do I need to know Russian to study in Russia?",
      answer: "While it is advantageous to know Russian, many universities offer programs in English. However, being proficient in Russian will help you with day-to-day life outside the university.",
    },
    {
      question: "Can I work while studying in Russia?",
      answer: "International students can work while studying in Russia, but there are restrictions. You can work part-time (up to 20 hours per week) during the academic semester.",
    },
    {
      question: "Are scholarships available for international students in Russia?",
      answer: "Yes, many Russian universities offer scholarships to international students based on academic merit or financial need. You can find various government and university-based scholarships.",
    },
    {
      question: "What is the language of instruction in Russian universities?",
      answer: "Russian universities generally offer programs in Russian, but many also offer courses and degrees in English, especially for postgraduate and international students.",
    },
    {
      question: "What is the academic year in Russia?",
      answer: "The academic year in Russia generally begins in September and ends in June, with two semesters: Fall (September to December) and Spring (February to June).",
    },
    {
      question: "How long do university degrees take in Russia?",
      answer: "A bachelor's degree in Russia typically takes 4 & 6 years, while a master's degree generally takes 2 years. Some programs may have different durations depending on the field of study.",
    },
    {
      question: "Are there entrance exams for Russian universities?",
      answer: "Yes, most universities in Russia require students to pass an entrance exam in their chosen field, although some may offer a pathway through an assessment based on previous academic records.",
    },
    {
      question: "What are the best student cities in Russia?",
      answer: "Moscow, Kazan, Saint Petersburg, Rostov-on-Don, Yekaterinburg, Simferopol, Kursk are considered some of the best cities  for International students due to their high quality education and vibrant student life.",
    },
    {
      question: "Is healthcare free for students in Russia?",
      answer: "International students in Russia are eligible for healthcare, but it is advisable to have health insurance coverage for more comprehensive access to medical services.",
    },
    {
      question: "How do I get a student visa for Russia?",
      answer: "To obtain a student visa for Russia, you need to apply through the Russian consulate in your country, with documents such as your invitation letter from the university and proof of funds for living expenses.         For more details or guidance you can contact official representative of universities at ‪+7 951 519‑03‑76",
    },
    {
      question: "What is the quality of education in Russian universities?",
      answer: "Russia has many high quality education universities particularly in medical, technology and in engineering fields. Many universities of Russian Federation rank among top 100 in global rankings.",
    },
    {
      question: "Can I stay in Russia after my studies?",
      answer: "Yes, after completing your studies, you can apply for a work visa or stay as a job seeker. Russian law allows graduates to remain in the country and search for employment opportunities.",
    },
    {
      question: "What are the cultural differences students should be aware of in Russia?",
      answer: "Students should be mindful of Russian customs and respect local traditions, especially regarding language, punctuality, and interpersonal communication. It's common to address professors formally and maintain a respectful demeanor.",
    },
  ];
  

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl md:text-center lg:text-left lg:text-5xl font-expressa lg:-ml-20 font-bold text-center mb-12 text-gray-800 lg:px-20">
        Frequnetly Asked <span className="text-purple-500">Questions</span>
      </h2>
      
      {faqData.map((item, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleAnswer(index)}
            className="w-full text-left p-4 text-gray-700 lg:text-xl rounded-lg shadow-md hover:bg-purple-400 hover:text-white focus:outline-none transition duration-200"
          >
            {index + 1}. {item.question}
          </button>
          {activeIndex === index && (
            <div className="mt-2 p-4 bg-gray-100 rounded-lg text-gray-700 shadow-sm">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
