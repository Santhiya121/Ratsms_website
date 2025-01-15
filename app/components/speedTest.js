// import React, { useState } from 'react';

// const SpeedTest = () => {
//   const [number, setNumber] = useState('');

//   const handleSubmit = () => {
//     if (number) {
//       alert(`Number entered: ${number}`);
//       // You can add more functionality to send the number as required
//     } else {
//       alert('Please enter a number');
//     }
//   };

//   return (
//     <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 ">
//         <p className='text-white pl-10 font-semibold text-xl'>Test our server speed & Unlock 20% OFF!<span className='text-yellow-400 text-3xl'>*</span></p>
//         <div className="flex flex-row gap-1 items-center p-4 ">
//           <input
//             type="tel"
//             value={number}
//             onChange={(e) => setNumber(e.target.value)}
//             className="p-3 border bg-transparent border-gray-300 text-gray-700 rounded-md w-[22rem] "
//             placeholder="Enter mobile number"
//           />
//           <button
//             onClick={handleSubmit}
//             className="border border-white text-white px-6 py-3 rounded-md w-auto "
//           >
//             Send
//           </button>
//         </div>
//       </div>

//   );
// };

// export default SpeedTest;


import React, { useState } from 'react';

const SpeedTest = () => {
  const [number, setNumber] = useState('');

  const handleSubmit = () => {
    if (number) {
      alert(`Number entered: ${number}`);
      // Add more functionality as needed
    } else {
      alert('Please enter a number');
    }
  };

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-[90%] md:max-w-[35rem] bg-transparent p-4 rounded-lg shadow-lg">
      <p className="text-white font-semibold text-center text-lg md:text-xl mb-2">
        Test our server speed & Unlock 20% OFF!
        <span className="text-yellow-400 text-2xl md:text-3xl">*</span>
      </p>
      <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
        <input
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="p-3 border bg-transparent border-gray-300 text-white rounded-md w-full md:w-[22rem] text-sm md:text-base"
          placeholder="Enter mobile number"
        />
        <button
          onClick={handleSubmit}
          className="bg-transparent border border-white text-white px-4 py-2 rounded-md text-sm md:text-base font-medium w-full md:w-28"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default SpeedTest;

