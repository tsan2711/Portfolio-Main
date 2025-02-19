import React from "react";
import { useState, useEffect } from "react";

const ScrollArrow = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= documentHeight - 10) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 items-center ${isVisible ? "flex" : "hidden"}`}>
      <button
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        className='w-12 h-12 rounded-full bg-[#A56A5C] flex justify-center items-center border-2 shadow-lg shadow-[#6D6D6D] hover:bg-opacity-80'
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
    </div>
    
  );
};

export default ScrollArrow;