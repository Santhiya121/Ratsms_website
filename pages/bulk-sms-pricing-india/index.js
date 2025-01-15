import React from "react";
import "../../app/globals.css";
import Navbar from "../../app/components/Navbar";
import { motion } from "framer-motion";
import Footer from "../../app/components/footer";

const PricingPage = () => {
  return (
    <>
    <div className="bg-black">
    <Navbar/>
    </div>
    <div className="bg-gray-50 min-h-screen mt-28">
      {/* Hero Section */}
      <div className="bg-white text-black flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-10">
  {/* Left Side: Heading */}
  <motion.div
    initial={{ x: -50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="space-y-2 text-center md:text-left"
  >
    <h1 className="text-3xl md:text-4xl font-light px-4 md:px-16">Pricing</h1>
    <p className="text-base md:text-lg px-4 md:px-16">CHOOSE YOUR PLAN</p>
  </motion.div>

  {/* Right Side: Details */}
  <motion.div
    initial={{ x: 50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="space-y-4 text-center md:text-right px-4 md:px-16"
  >
    <p className="text-gray-700 text-base md:text-lg">Dedicated Dashboard For Your Business</p>
    <p className="text-gray-500 text-sm md:text-base">
      To boost your revenue, request a proposal or contact us for a competitive price.
    </p>
  </motion.div>
</div>


      {/* Pricing Section */}
      <div className=" text-white min-h-screen w-full">
      {/* Header Section */}
      <header className="text-center py-10 bg-gradient-to-r bg-white to-black">
        <h1 className="text-5xl font-light mb-4 text-black">Promotional SMS Pricing</h1>
        <p className="text-lg text-gray-700 font-light">
          Choose the best plan for your business needs.
        </p>
      </header>

      {/* Pricing Section */}
      <div className=" mx-auto px-6 py-12 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-8 text-black">Our Plans</h2>
        <div className="grid md:grid-cols-3 gap-8 pl-16">
          {/* Normal Pack */}
          <div className="relative bg-white w-[22rem] from-gray-900 via-black text-black rounded-3xl rounded-tr-3xl rounded-tl-none rounded-br-none shadow-2xl border border-black p-8 hover:scale-105 hover:shadow-xl transition-transform duration-300 hover:bg-white">
  <h3 className="text-3xl text-black font-extrabold mb-6 text-center transition-all duration-300">
    Normal Pack
  </h3>
  <p className="text-4xl font-bold text-center transition-all duration-300 text-black">
    ₹12,000 <span className="line-through text-gray-400 text-xl">₹15,000</span>
  </p>
  <p className="text-sm mb-6 text-center transition-all duration-300 text-black">
    18% GST additional
  </p>
  <ul className="list-none space-y-4 pl-4 text-gray-300 text-lg transition-all duration-300">
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> 1,00,000 SMS
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> 9 AM to 9 PM Delivery
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> Delivered to DND Numbers
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> 6 Digit Sender ID
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> Lifetime Validity
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> 100% Advance Payment     
    </li>
  </ul>
  <button
  className="mt-6 w-full bg-black border border-black text-white font-bold py-3  shadow-md hover:shadow-lg hover:text-black hover:bg-white transition-all duration-300"
>
  Purchase Now
</button>

</div>


      {/* second */}
      <div className="relative bg-white w-[22rem] from-gray-900 via-black text-black rounded-3xl rounded-tr-3xl rounded-tl-none rounded-br-none shadow-2xl border border-black p-8 hover:scale-105 hover:shadow-xl transition-transform duration-300 hover:bg-white">
  <h3 className="text-3xl text-black font-extrabold mb-6 text-center transition-all duration-300">
  Saver Pack
  </h3>
  <p className="text-4xl font-bold text-center transition-all duration-300 text-black">
    ₹50,000 <span className="line-through text-gray-400 text-xl">₹60,000</span>
  </p>
  <p className="text-sm mb-6 text-center transition-all duration-300 text-black">
    18% GST additional
  </p>
  <ul className="list-none space-y-4 pl-4 text-gray-300 text-lg transition-all duration-300">
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> 5,00,000 SMS
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> 9 AM to 9 PM Delivery
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> Delivered to DND Numbers
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> 6 Digit Sender ID
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> Lifetime Validity
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> 100% Advance Payment     
    </li>
  </ul>
  <button
  className="mt-6 w-full bg-black border border-black text-white font-bold py-3  shadow-md hover:shadow-lg hover:text-black hover:bg-white transition-all duration-300"
>
  Purchase Now
</button>

</div>


{/* {third} */}

<div className="relative bg-white w-[22rem] from-gray-900 via-black text-black rounded-3xl rounded-tr-3xl rounded-tl-none rounded-br-none shadow-2xl border border-black p-8 hover:scale-105 hover:shadow-xl transition-transform duration-300 hover:bg-white">
  <h3 className="text-3xl text-black font-extrabold mb-6 text-center transition-all duration-300">
  Super Saver Pack
  </h3>
  <p className="text-4xl font-bold text-center transition-all duration-300 text-black">
  ₹1,20,000 <span className="line-through text-gray-400 text-xl">₹80,000</span>
  </p>
  <p className="text-sm mb-6 text-center transition-all duration-300 text-black">
    18% GST additional
  </p>
  <ul className="list-none space-y-4 pl-4 text-gray-300 text-lg transition-all duration-300">
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> 10,00,000 SMS
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> 9 AM to 9 PM Delivery
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> Delivered to DND Numbers
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> 6 Digit Sender ID
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> Lifetime Validity
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> 100% Advance Payment     
    </li>
  </ul>
  <button
  className="mt-6 w-full bg-black border border-black text-white font-bold py-3  shadow-md hover:shadow-lg hover:text-black hover:bg-white transition-all duration-300"
>
  Purchase Now
</button>

</div>         
        </div>
      </div>

      <header className="text-center py-10 bg-gradient-to-r bg-white to-black">
        <h1 className="text-5xl font-light mb-4 text-black">Transactional SMS</h1>    
      </header>
      <div className="container mx-auto px-6 py-12 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-8 text-black">Our Plans</h2>
        <div className="grid md:grid-cols-3 gap-8 pl-16">
          {/* Normal Pack */}
          <div className="relative bg-white w-[22rem] from-gray-900 via-black text-black rounded-3xl rounded-tr-3xl rounded-tl-none rounded-br-none shadow-2xl border border-black p-8 hover:scale-105 hover:shadow-xl transition-transform duration-300 hover:bg-white">
  <h3 className="text-3xl text-black font-extrabold mb-6 text-center transition-all duration-300">
  Normal Pack
  </h3>
  <p className="text-4xl font-bold text-center transition-all duration-300 text-black">
  ₹18,000 <span className="line-through text-gray-400 text-xl">₹11,000</span>
  </p>
  <p className="text-sm mb-6 text-center transition-all duration-300 text-black">
    18% GST additional
  </p>
  <ul className="list-none space-y-4 pl-4 text-gray-300 text-lg transition-all duration-300">
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> 10,00,000 SMS
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> 9 AM to 9 PM Delivery
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> Delivered to DND Numbers
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> 6 Digit Sender ID
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> Lifetime Validity
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> 100% Advance Payment     
    </li>
  </ul>
  <button
  className="mt-6 w-full bg-black border border-black text-white font-bold py-3  shadow-md hover:shadow-lg hover:text-black hover:bg-white transition-all duration-300"
>
  Purchase Now
</button>

</div>  

          {/* Saver Pack */}
          <div className="relative bg-white w-[22rem] from-gray-900 via-black text-black rounded-3xl rounded-tr-3xl rounded-tl-none rounded-br-none shadow-2xl border border-black p-8 hover:scale-105 hover:shadow-xl transition-transform duration-300 hover:bg-white">
  <h3 className="text-3xl text-black font-extrabold mb-6 text-center transition-all duration-300">
  Saver Pack
  </h3>
  <p className="text-4xl font-bold text-center transition-all duration-300 text-black">
  ₹55,000
 <span className="line-through text-gray-400 text-xl">₹50,000</span>
  </p>
  <p className="text-sm mb-6 text-center transition-all duration-300 text-black">
    18% GST additional
  </p>
  <ul className="list-none space-y-4 pl-4 text-gray-300 text-lg transition-all duration-300">
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> 5,00,000 SMS
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> 9 AM to 9 PM Delivery
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> Delivered to DND Numbers
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> 6 Digit Sender ID
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> Lifetime Validity
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> 100% Advance Payment     
    </li>
  </ul>
  <button
  className="mt-6 w-full bg-black border border-black text-white font-bold py-3  shadow-md hover:shadow-lg hover:text-black hover:bg-white transition-all duration-300"
>
  Purchase Now
</button>

</div>  

          {/* Super Saver Pack */}
          <div className="relative bg-white w-[22rem] from-gray-900 via-black text-black rounded-3xl rounded-tr-3xl rounded-tl-none rounded-br-none shadow-2xl border border-black p-8 hover:scale-105 hover:shadow-xl transition-transform duration-300 hover:bg-white">
  <h3 className="text-3xl text-black font-extrabold mb-6 text-center transition-all duration-300">
  Super Saver Pack
  </h3>
  <p className="text-4xl font-bold text-center transition-all duration-300 text-black">
  ₹99,000 <span className="line-through text-gray-400 text-xl">₹90,000</span>
  </p>
  <p className="text-sm mb-6 text-center transition-all duration-300 text-black">
    18% GST additional
  </p>
  <ul className="list-none space-y-4 pl-4 text-gray-300 text-lg transition-all duration-300">
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> 10,00,000 SMS
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> 9 AM to 9 PM Delivery
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> Delivered to DND Numbers
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> 6 Digit Sender ID
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> Lifetime Validity
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> 100% Advance Payment     
    </li>
  </ul>
  <button
  className="mt-6 w-full bg-black border border-black text-white font-bold py-3  shadow-md hover:shadow-lg hover:text-black hover:bg-white transition-all duration-300"
>
  Purchase Now
</button>

</div>  
        </div>
      </div>


      <header className="text-center py-10 bg-gradient-to-r bg-white to-black">
        <h1 className="text-5xl font-light mb-4 text-black">OTP SMS</h1>   
      </header>
      <div className="container mx-auto px-6 py-12 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-8 text-black">Our Plans</h2>
        <div className="grid md:grid-cols-3 gap-8 pl-16">
          {/* Normal Pack */}
          <div className="relative bg-white w-[22rem] from-gray-900 via-black text-black rounded-3xl rounded-tr-3xl rounded-tl-none rounded-br-none shadow-2xl border border-black p-8 hover:scale-105 hover:shadow-xl transition-transform duration-300 hover:bg-white">
  <h3 className="text-3xl text-black font-extrabold mb-6 text-center transition-all duration-300">
  Normal Pack
  </h3>
  <p className="text-4xl font-bold text-center transition-all duration-300 text-black">
  ₹18,000 <span className="line-through text-gray-400 text-xl">₹14,000</span>
  </p>
  <p className="text-sm mb-6 text-center transition-all duration-300 text-black">
    18% GST additional
  </p>
  <ul className="list-none space-y-4 pl-4 text-gray-300 text-lg transition-all duration-300">
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> 10,00,000 SMS
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> 9 AM to 9 PM Delivery
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> Delivered to DND Numbers
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> 6 Digit Sender ID
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> Lifetime Validity
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> 100% Advance Payment     
    </li>
  </ul>
  <button
  className="mt-6 w-full bg-black border border-black text-white font-bold py-3  shadow-md hover:shadow-lg hover:text-black hover:bg-white transition-all duration-300"
>
  Purchase Now
</button>

</div>  

          {/* Saver Pack */}
          <div className="relative bg-white w-[22rem] from-gray-900 via-black text-black rounded-3xl rounded-tr-3xl rounded-tl-none rounded-br-none shadow-2xl border border-black p-8 hover:scale-105 hover:shadow-xl transition-transform duration-300 hover:bg-white">
  <h3 className="text-3xl text-black font-extrabold mb-6 text-center transition-all duration-300">
   Saver Pack
  </h3>
  <p className="text-4xl font-bold text-center transition-all duration-300 text-black">
  ₹70,000 <span className="line-through text-gray-400 text-xl">₹60,000</span>
  </p>
  <p className="text-sm mb-6 text-center transition-all duration-300 text-black">
    18% GST additional
  </p>
  <ul className="list-none space-y-4 pl-4 text-gray-300 text-lg transition-all duration-300">
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> 5,00,000 SMS
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> 9 AM to 9 PM Delivery
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> Delivered to DND Numbers
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> 6 Digit Sender ID
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> Lifetime Validity
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> 100% Advance Payment     
    </li>
  </ul>
  <button
  className="mt-6 w-full bg-black border border-black text-white font-bold py-3  shadow-md hover:shadow-lg hover:text-black hover:bg-white transition-all duration-300"
>
  Purchase Now
</button>

</div>  

          {/* Super Saver Pack */}
          <div className="relative bg-white w-[22rem] from-gray-900 via-black text-black rounded-3xl rounded-tr-3xl rounded-tl-none rounded-br-none shadow-2xl border border-black p-8 hover:scale-105 hover:shadow-xl transition-transform duration-300 hover:bg-white">
  <h3 className="text-3xl text-black font-extrabold mb-6 text-center transition-all duration-300">
  Super Saver Pack
  </h3>
  <p className="text-4xl font-bold text-center transition-all duration-300 text-black">
  ₹1,40,000 <span className="line-through text-gray-400 text-xl">₹1,10,000</span>
  </p>
  <p className="text-sm mb-6 text-center transition-all duration-300 text-black">
    18% GST additional
  </p>
  <ul className="list-none space-y-4 pl-4 text-gray-300 text-lg transition-all duration-300">
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> 10,00,000 SMS
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> 9 AM to 9 PM Delivery
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> Delivered to DND Numbers
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> 6 Digit Sender ID
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> Lifetime Validity
    </li>
    <li className="flex items-center gap-3 text-black">
      <span className="w-3 h-3 bg-black rounded-full"></span> 100% Advance Payment     
    </li>
  </ul>
  <button
  className="mt-6 w-full bg-black border border-black text-white font-bold py-3  shadow-md hover:shadow-lg hover:text-black hover:bg-white transition-all duration-300"
>
  Purchase Now
</button>

</div>  
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-white py-6 text-center">
        <p className="text-black">
          For more details, contact us at <span className="text-[#003bff] underline pl-2">info@ratsms.com</span>.
        </p>
      </footer>
    </div>

      {/* Payment Section */}
      <div className="bg-white py-16">
  <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Payment Options</h2>
  <div className="container mx-auto px-8 lg:px-20">
    <p className="text-gray-600 text-center mb-8">
      Rat SMS provides you with an array of secure payment options, both online and offline.
    </p>
    <div className="bg-white  p-8 text-black border border-gray-300 max-w-4xl mx-auto">
  <h3 className="text-2xl font-bold text-black mb-6 border-b border-gray-400 pb-2 text-center">
    Bank Details
  </h3>
  <ul className="space-y-6">
    <li className="flex justify-between">
      <span className="font-semibold text-black">Account Name:</span>
      <span className="text-gray-700 text-right">AWF TECHNOLOGIES PRIVATE LIMITED</span>
    </li>
    <li className="flex justify-between">
      <span className="font-semibold text-black">Account Number:</span>
      <span className="text-gray-700 text-right">50200060053989</span>
    </li>
    <li className="flex justify-between">
      <span className="font-semibold text-black">Bank Name:</span>
      <span className="text-gray-700 text-right">HDFC Bank</span>
    </li>
    <li className="flex justify-between">
      <span className="font-semibold text-black">Account Type:</span>
      <span className="text-gray-700 text-right">Current Account</span>
    </li>
    <li className="flex justify-between">
      <span className="font-semibold text-black">Branch:</span>
      <span className="text-gray-700 text-right">Besant Nagar</span>
    </li>
    <li className="flex justify-between">
      <span className="font-semibold text-black">IFSC Code:</span>
      <span className="text-gray-700 text-right">HDFC0000010</span>
    </li>
    <li className="flex justify-between">
      <span className="font-semibold text-black">GSTIN:</span>
      <span className="text-gray-700 text-right">33AAQCA2038K1ZM</span>
    </li>
    <li className="flex justify-between">
      <span className="font-semibold text-black">CIN:</span>
      <span className="text-gray-700 text-right">U74999TN2017PTC119419</span>
    </li>
  </ul>
</div>








    {/* Payment Methods */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-20 mb-10">
  {/* Google Pay */}
  <div className="bg-white text-black shadow-2xl p-6 rounded-xl text-center transform transition-transform duration-300 hover:scale-105">
    <img src="/images/g.pay.jpg" alt="Google Pay" className="w-16 mx-auto mb-4" />
    <p className="text-xl">+91 80562 58327</p>
  </div>

  {/* PhonePe */}
  <div className="bg-white text-black shadow-2xl p-6 rounded-xl text-center transform transition-transform duration-300 hover:scale-105">
    <img src="/images/phonepay.webp" alt="PhonePe" className="w-16 mx-auto mb-4" />
    <p className="text-xl">+91 80562 58327</p>
  </div>

  {/* Paytm */}
  <div className="bg-white text-black shadow-2xl p-6 rounded-xl text-center transform transition-transform duration-300 hover:scale-105">
    <img src="/images/paytm.webp" alt="Paytm" className="w-16 mx-auto mb-4" />
    <p className="text-xl">+91 80562 58327</p>
  </div>

  {/* Email */}
  <div className="bg-white text-black shadow-2xl p-6 rounded-xl text-center transform transition-transform duration-300 hover:scale-105">
    <img src="/images/upi.webp" alt="Email" className="w-16 mx-auto mb-4" />
    <p className="text-xl">ratsms@upi</p>
  </div>
</div>





    <p className="text-center mt-8 text-gray-500 text-sm">
      For more details, contact us via phone or email. Secure payments are accepted
      through UPI, Net Banking, Credit/Debit cards, and other methods.
    </p>
  </div>
</div>

    </div>
    <Footer/>
    </>
  );
};

export default PricingPage;
