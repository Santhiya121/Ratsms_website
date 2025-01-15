// import React from "react";

// const Button = () => {
//   return (
//     <button
//       className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-16 p-4 border border-[#003bff] text-[#003bff] bg-white 
//                  flex items-center justify-between group 
//                  transition-all duration-300 ease-in-out hover:bg-[#003bff] hover:text-white"
//     >
//       <span className="text-base sm:text-lg md:text-xl font-roboto text-center px-6 sm:px-8 md:px-12 group-hover:text-white transition-all duration-300 ease-in-out">
//         Click Me
//       </span>
//       <span
//         className="text-[#003bff] font-bold text-xl sm:text-2xl transition-transform 
//                    duration-300 ease-in-out group-hover:text-white group-hover:translate-x-2"
//       >
//         →
//       </span>
//     </button>
//   );
// };

// export default Button;

import React from "react";

const Button = () => {
  return (
    <button
      className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-16 p-4 border border-[#003bff] text-[#003bff] bg-white 
                 flex items-center justify-between group 
                 transition-all duration-300 ease-in-out hover:bg-[#003bff] hover:text-white"
      style={{ borderRadius: "0px" }} // Inline style to enforce sharp corners
    >
      <span className="text-base sm:text-lg md:text-xl font-roboto text-center px-6 sm:px-8 md:px-12 group-hover:text-white transition-all duration-300 ease-in-out">
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


