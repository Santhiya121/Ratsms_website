

import React from "react";

const Button = () => {
  return (
    <button
      className="relative w-60 h-14 p-4 border border-[#003bff] text-[#003bff] bg-white 
                 flex  justify-between group 
                 transition-all duration-300 ease-in-out hover:bg-[#003bff] hover:text-white"
      style={{ borderRadius: "0px" }} // Inline style to enforce sharp corners
    >
      <span className="text-base sm:text-lg md:text-xl text-start font-roboto  px-6 sm:px-8 md:px-12 group-hover:text-white hover:font-light transition-all duration-300 ease-in-out">
        Click Me
      </span>
      <span
        className="text-[#003bff] font-bold text-xl sm:text-2xl transition-transform 
                   duration-300 ease-in-out group-hover:text-white group-hover:translate-x-2"
      >
        →
      </span>
    </button>
  );
};

export default Button;


