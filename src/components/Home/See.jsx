import React from 'react';
import { Link } from 'react-router-dom';

const See = () => {
  return (
    <div
      className="relative w-full h-[20vh] lg:h-[40vh] bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://media.istockphoto.com/id/1086352374/photo/minimal-work-space-creative-flat-lay-photo-of-workspace-desk-top-view-office-desk-with-laptop.jpg?s=612x612&w=0&k=20&c=JYBNQsgeO13lU1rq3kUWfD-W0Xii3sFyYzijvsntplY=)', // Replace with your background image URL
      }}
    >
      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Centered content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Link to="/university" className="relative inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-white hover:text-blue-400 text-white font-semibold text-lg rounded-lg group transform transition duration-300 ease-in-out hover:bg-blue-600">
          <span>See Now</span>
          <svg
            className="ml-2 w-5 h-5 transform group-hover:translate-x-2 transition-all"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default See;
