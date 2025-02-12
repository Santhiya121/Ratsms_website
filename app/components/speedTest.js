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
      <div className="relative sm:bottom-14 lg:bottom-0 bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[35rem] p-3 bg-transparent text-white">
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


export default SpeedTest;










