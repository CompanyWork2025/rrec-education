import React from "react";
import bgImage from "../../assets/banner2.png";

const SubscriptionForm = () => {
  return (
    <div
      className="relative w-96 lg:w-[1200px] lg:-mb-28 -mb-24 mx-auto rounded-2xl px-8 py-8 h-48 lg:h-64 mt-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute top-0 left-0 right-0 p-8 text-center text-white">
        <h1 className="text-md lg:text-4xl font-bold mb-4">Get our stories delivered From us to your inbox weekly.</h1>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full px-8">
        <div className="flex justify-center items-center space-x-0">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-l-lg border border-gray-300 w-40 lg:w-[500px]"
          />
          <button className="bg-purple-500 mt-2 text-white px-6 py-3 rounded-r-lg w-[150px]">
            Subscribe
          </button>
        </div>
        <p className="text-center text-white mt-6">
          Get the latest updates directly to your inbox.
        </p>
        <p className="text-md text-center bg-white mx-auto mt-4 p-1 w-80 font-semibold text-gray-900 rounded-lg animate__animated animate__fadeIn animate__delay-2s">
          Admission Helpline:
          <a href="tel:+79515190376" className="helpline-number animate-colorCycle"> +7 951 519‑03‑76</a>
        </p>
      </div>
    </div>
  );
};

export default SubscriptionForm;
