import React, { useState } from 'react';

const SpeedTest = () => {
  const [number, setNumber] = useState('');

  const handleSubmit = () => {
    if (number) {
      alert(`Number entered: ${number}`);
      // You can add more functionality to send the number as required
    } else {
      alert('Please enter a number');
    }
  };

  return (
    <div className="flex  ">
      <div className="relative sm:bottom-14 bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[35rem] p-3 bg-transparent text-white">
      <p className="text-white sm:pl-20 font-light text-sm sm:text-xl">
  Test our server speed &{' '}
  <span className="relative inline-block animate-fadeIn">
    {'Unlock 20% OFF!'.split('').map((char, index) => (
      <span
        key={index}
        className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-sm md:text-2xl font-extrabold animate-bounce"
        style={{
          animationDelay: `${index * 0.1}s`, // Stagger animation for each letter
        }}
      >
        {char}
      </span>
    ))}
  </span>
  <span className="text-yellow-400 text-3xl animate-pulse">*</span>
</p>

        <div className="flex flex-row gap-1 items-center justify-center">
          <input
            type="tel"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="p-3 border bg-transparent border-gray-300 text-gray-700 rounded-md w-[22rem]"
            placeholder="Enter mobile number"
          />
          <button
            onClick={handleSubmit}
            className="border border-white text-white px-6 py-3 rounded-md w-auto"
          >
            Send
          </button>
        </div>
      </div>
    </div>

  );
};

// export default SpeedTest;

// -----------------------------------------------------------------------
// import React, { useState } from 'react';
// import "../globals.css"

// const SpeedTest = () => {
//   const [number, setNumber] = useState('');

//   const handleSubmit = () => {
//     if (number) {
//       alert(`Number entered: ${number}`);
//       // Add more functionality as needed
//     } else {
//       alert('Please enter a number');
//     }
//   };

//   return (
//     <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-[90%] md:max-w-[35rem] bg-transparent p-4 rounded-lg shadow-lg">
//      {/* <p className="text-white font-semibold text-center text-lg md:text-xl mb-2">
//         Test our server speed & Unlock 20% OFF!
//         <span className="text-yellow-400 text-2xl md:text-3xl">*</span>
//       </p>    */}
//     <div className="relative">
//     <div className="relative">
//   <p className="text-white font-semibold text-center text-lg md:text-xl mb-4">
//     Test our server speed &{" "}
//     <span className="relative inline-block">
//       {/* Wrapping each character in a span */}
//       {"Unlock 20% OFF!".split("").map((char, index) => (
//         <span
//           key={index}
//           className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-xl md:text-2xl font-extrabold animate-jump"
//           style={{
//             animationDelay: `${index * 0.1}s`,
//           }}
//         >
//           {char}
//         </span>
//       ))}

//       {/* Adding sparkles */}
//       <span className="absolute inset-0 flex justify-center items-center pointer-events-none">
//         <span className="w-2 h-2 bg-yellow-400 rounded-full animate-sparkle"></span>
//       </span>
//     </span>
//     <span className="text-yellow-400 text-xl md:text-2xl animate-pulse">*</span>
//   </p>
// </div>

// </div>


//       <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
//         <input
//           type="tel"
//           value={number}
//           onChange={(e) => setNumber(e.target.value)}
//           className="p-3 border bg-transparent border-gray-300 text-white rounded-md w-full md:w-[22rem] text-sm md:text-base"
//           placeholder="Enter mobile number"
//         />
//         <button
//           onClick={handleSubmit}
//           className="bg-transparent border border-white text-white px-4 py-2 rounded-md text-sm md:text-base font-medium w-full md:w-28"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SpeedTest;

//add new design

// import React, { useState } from 'react';
// import "../globals.css";

// const SpeedTest = () => {
//   const [number, setNumber] = useState('');

//   const handleSubmit = () => {
//     if (number) {
//       alert(`Number entered: ${number}`);
//       // Add more functionality as needed
//     } else {
//       alert('Please enter a number');
//     }
//   };

//   return (
//     <div
//       className={`  left-1/2 transform -translate-x-1/2 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[35rem] p-3 bg-[rgba(0,0,0,0.8)] text-white`}
//       style={{ zIndex: 10 }}
//     >
//       <div className="">
//         <p className="text-center font-semibold text-lg sm:text-base md:text-xl mb-4">
//           Test our server speed &{' '}
//           <span className="relative inline-block">
//             {'Unlock 20% OFF!'.split('').map((char, index) => (
//               <span
//                 key={index}
//                 className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-xl md:text-2xl font-extrabold animate-jump"
//                 style={{
//                   animationDelay: `${index * 0.1}s`,
//                 }}
//               >
//                 {char}
//               </span>
//             ))}
//           </span>
//           <span className="text-yellow-400 text-xl sm:text-lg md:text-2xl animate-pulse">*</span>
//         </p>
//       </div>

//       <div className="flex sm:flex-row gap-3 items-center justify-center">
//         <input
//           type="tel"
//           value={number}
//           onChange={(e) => setNumber(e.target.value)}
//           className="p-3 border border-white text-white bg-transparent rounded-md w-full sm:w-[18rem] md:w-[22rem] text-sm sm:text-xs md:text-base"
//           placeholder="Enter mobile number"
//         />
//         <button
//           onClick={handleSubmit}
//           className="px-4 py-2 rounded-md text-sm sm:text-xs md:text-base font-medium w-20 sm:w-24 md:w-28 bg-transparent border border-white text-white transition-colors duration-300"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

export default SpeedTest;










