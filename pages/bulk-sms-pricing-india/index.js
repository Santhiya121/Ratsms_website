import React from "react";
import "../../app/globals.css";
import Navbar from "../../app/components/Navbar";
import { motion } from "framer-motion";
import Footer from "../../app/components/footer";
import Image from 'next/image'
import Head from "next/head";
import WhatsAppIcon from "../../app/components/whatsappIcon";
import Phone from "../../app/components/phone";

const PricingPage = () => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Rat SMS is a bulk SMS provider with free SMS API India. We are Direct TeleCom operator Connectivity. Try our abundant smart SMS with 100% delivery & free DLT registration"
        />
        <meta
          name="keywords"
          content="sms bulk pricing, bulk sms service price, transactional sms price, promotional sms price, service implicit price, service explicit price, service implicit sms price, service explicit sms price, otp sms price, bulk sms price, twilio otp pricing, buy bulk sms, bulk sms cost, fast2sms pricing, ratsms price, rat sms price, bulk sms charge, airtel bulk sms price, msg91 otp pricing, sms gateway charges"
        />
        <link rel="canonical" href="https://www.ratsms.com/bulk-sms-pricing-india" />
        <meta property="og:site_name" content="RATSMS" />
        <meta property="og:url" content="https://ratsms.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RAT SMS : Bulk SMS Service Provider" />
        <meta name="og:image" content="images/assets/ratsms-icon.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#655C97" />
        <meta name="msapplication-navbutton-color" content="#655C97" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
        <title>RAT SMS | BULK SMS PRICING</title>
      </Head>
      <div
        style={{
          backgroundColor: "black",
          zIndex: 100,
          position: "relative",
          height: "4rem", // Fixed height for testing
          width: "100%",
        }}
      >
        <Navbar />
      </div>
      <WhatsAppIcon/>
      <Phone/>
      <div className="bg-gray-50 min-h-screen ">
        {/* Hero Section */}
        <div className="bg-white text-black flex flex-col md:flex-row  justify-between px-8 md:px-16 py-10">
          {/* Left Side: Heading */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-2 text-left  md:text-left"
          >
            <h1 className="text-2xl md:text-5xl font-roboto  md:px-16">Pricing</h1>
            <p className="text-base md:text-lg sm:text-lg  md:px-16">CHOOSE YOUR PLAN</p>
          </motion.div>

          {/* Right Side: Details */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className=" md:text-right  md:px-16 mt-5"
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
            <h2 className="text-2xl font-roboto text-center  text-black mb-3 ">Our Plans</h2>
            <p className="text-base text-gray-700 font-light mb-3">
              Choose the best plan for your business needs.
            </p>
            <h1 className="text-lg sm:text-xl font-semibold font-roboto mb-4 text-black">
  Promotional SMS Pricing
  <div className=" flex justify-self-center items-center mt-2 pl-32 bottom-0 left-0 w-40 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

</h1>


            
          </header>

          {/* Pricing Section */}
          <div className="  bg-white">

            <div className="grid md:grid-cols-3  p-4 pl-8 sm:pl-36">
              {/* Normal Pack */}
              <div className="relative bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl
               text-black  p-8 hover:scale-105 transition-all duration-300 w-80 mb-10
                border-gray-300">
                {/* Title Section */}
                <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4 transition-all duration-300">
                  Normal Pack
                </h3>

                {/* Price Section */}
                <p className="text-3xl font-bold text-center text-gray-800 mb-4 transition-all duration-300">
                  ₹12,000 <span className="line-through text-gray-500 text-lg">₹15,000</span>
                </p>

                {/* GST Section */}
                <p className="text-xs text-center text-gray-600 mb-6">
                  18% GST additional
                </p>

                {/* Features List */}
                <ul className="list-none space-y-4 text-sm sm:text-base text-gray-700">
                  <li className="flex items-center gap-3">
                    <i className="fa fa-check-circle text-black text-lg"></i> 1,00,000 SMS
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-clock text-black text-lg"></i> 9 AM to 8 PM Delivery
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-ban text-black text-lg"></i>  No Delivery DND Numbers
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-id-card text-black text-lg"></i>6 Character Sender ID
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-infinity text-black text-lg"></i> Lifetime Validity
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-credit-card text-black text-lg"></i> 100% Advance Payment
                  </li>
                </ul>

                {/* Purchase Button */}
                <button
                  className="mt-6 w-full bg-gray-800 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-xl hover:bg-white hover:text-gray-800 transition-all duration-300"
                >
                  Purchase Now
                </button>
              </div>


              {/* second */}
          
              <div className="relative bg-gradient-to-r  from-gray-100 to-gray-200 border-4 border-purple-400
               text-black   hover:scale-105 transition-all duration-300 w-80 mb-10 rounded-2xl
                ">
                {/* Title Section */}
                <p className="p-3 text-center rounded-t-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-roboto  ">Most Recommended</p>
                <div className="p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4 transition-all duration-300">
                  Saver Pack
                </h3>

                {/* Price Section */}
                <p className="text-3xl font-bold text-center text-gray-800 mb-4 transition-all duration-300">
                  ₹50,000 <span className="line-through text-gray-500 text-lg">₹60,000</span>
                </p>

                {/* GST Section */}
                <p className="text-xs text-center text-gray-600 mb-6">
                  18% GST additional
                </p>

                {/* Features List */}
                <ul className="list-none space-y-4 text-sm sm:text-base text-gray-700">
                  <li className="flex items-center gap-3">
                    <i className="fa fa-check-circle text-black text-lg"></i> 5,00,000 SMS
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-clock text-black text-lg"></i> 9 AM to 8 PM Delivery
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-ban text-black text-lg"></i> No Delivery DND Numbers
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-id-card text-black text-lg"></i> 6 Character Sender ID
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-infinity text-black text-lg"></i> Lifetime Validity
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-credit-card text-black text-lg"></i> 100% Advance Payment
                  </li>
                </ul>

                {/* Purchase Button */}
                <button
                  className="mt-6 w-full bg-gray-800 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-xl hover:bg-white hover:text-gray-800 transition-all duration-300"
                >
                  Purchase Now
                </button>
              </div>
              </div>


              {/* third */}
              <div className="relative bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl
               text-black  p-8 hover:scale-105 transition-all duration-300 w-80 mb-10
                border-gray-300">
                {/* Title Section */}
                <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4 transition-all duration-300">
                  Super Saver Pack
                </h3>

                {/* Price Section */}
                <p className="text-3xl font-bold text-center text-gray-800 mb-4 transition-all duration-300">
                  ₹80,000 <span className="line-through text-gray-500 text-lg">₹1,20,000</span>
                </p>

                {/* GST Section */}
                <p className="text-xs text-center text-gray-600 mb-6">
                  18% GST additional
                </p>

                {/* Features List */}
                <ul className="list-none space-y-4 text-sm sm:text-base text-gray-700">
                  <li className="flex items-center gap-3">
                    <i className="fa fa-check-circle text-black text-lg"></i> 10,00,000  SMS
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-clock text-black text-lg"></i> 9 AM to 8 PM Delivery
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-ban text-black text-lg"></i>  No Delivery DND Numbers
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-id-card text-black text-lg"></i> 6 Character Sender ID
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-infinity text-black text-lg"></i> Lifetime Validity
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-credit-card text-black text-lg"></i> 100% Advance Payment
                  </li>
                </ul>

                {/* Purchase Button */}
                <button
                  className="mt-6 w-full bg-gray-800 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-xl hover:bg-white hover:text-gray-800 transition-all duration-300"
                >
                  Purchase Now
                </button>
              </div>

            </div>
          </div>

          <header className="text-center py-10 bg-gradient-to-r bg-white to-black">
            <h1 className="text-lg sm:text-xl font-semibold font-roboto mb-4 text-black">Transactional SMS & Service Explicit SMS</h1>
            <div className=" flex justify-self-center items-center mt-2 pl-32 bottom-0 left-0 w-40 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
          </header>
          <div className="  bg-white">

            <div className="grid md:grid-cols-3 gap-2 p-4 pl-8 sm:pl-36">
              {/* Normal Pack */}
              <div className="relative bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl
   text-black  p-8 hover:scale-105 transition-all duration-300 w-80 mb-10
    border-gray-300">
                {/* Title Section */}
                <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4 transition-all duration-300">
                  Normal Pack
                </h3>

                {/* Price Section */}
                <p className="text-3xl font-bold text-center text-gray-800 mb-4 transition-all duration-300">
                  ₹11,000 <span className="line-through text-gray-500 text-lg">₹18,000</span>
                </p>

                {/* GST Section */}
                <p className="text-xs text-center text-gray-600 mb-6">
                  18% GST additional
                </p>

                {/* Features List */}
                <ul className="list-none space-y-4 text-sm sm:text-base text-gray-700">
                  <li className="flex items-center gap-3">
                    <i className="fa fa-check-circle text-black text-lg"></i> 1,00,000 SMS
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-clock text-black text-lg"></i> 24/7 Delivery
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-ban text-black text-lg"></i> Delivered to DND Numbers
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-id-card text-black text-lg"></i> 6 Character Sender ID 
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-infinity text-black text-lg"></i> Lifetime Validity
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-credit-card text-black text-lg"></i> 100% Advance Payment
                  </li>
                </ul>

                {/* Purchase Button */}
                <button
                  className="mt-6 w-full bg-gray-800 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-xl hover:bg-white hover:text-gray-800 transition-all duration-300"
                >
                  Purchase Now
                </button>
              </div>


              {/* second */}
              <div className="relative bg-gradient-to-r from-gray-100 to-gray-200 border-4 border-purple-400
               text-black   hover:scale-105 transition-all duration-300 w-80 mb-10 rounded-2xl">
                {/* Title Section */}
                <p className="p-3 text-center rounded-t-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-roboto  ">Most Recommended</p>
                <div className="p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4 transition-all duration-300">
                  Saver Pack
                </h3>

                {/* Price Section */}
                <p className="text-3xl font-bold text-center text-gray-800 mb-4 transition-all duration-300">
                  ₹50,000 <span className="line-through text-gray-500 text-lg">₹55,000</span>
                </p>

                {/* GST Section */}
                <p className="text-xs text-center text-gray-600 mb-6">
                  18% GST additional
                </p>

                {/* Features List */}
                <ul className="list-none space-y-4 text-sm sm:text-base text-gray-700">
                  <li className="flex items-center gap-3">
                    <i className="fa fa-check-circle text-black text-lg"></i> 5,00,000 SMS
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-clock text-black text-lg"></i> 24/7 Delivery
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-ban text-black text-lg"></i> Delivered to DND Numbers
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-id-card text-black text-lg"></i> 6 Character Sender ID 
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-infinity text-black text-lg"></i> Lifetime Validity
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-credit-card text-black text-lg"></i> 100% Advance Payment
                  </li>
                </ul>

                {/* Purchase Button */}
                <button
                  className="mt-6 w-full bg-gray-800 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-xl hover:bg-white hover:text-gray-800 transition-all duration-300"
                >
                  Purchase Now
                </button>
              </div>
              </div>


              {/* third */}
              <div className="relative bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl
   text-black  p-8 hover:scale-105 transition-all duration-300 w-80 mb-10
    border-gray-300">
                {/* Title Section */}
                <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4 transition-all duration-300">
                  Super Saver Pack
                </h3>

                {/* Price Section */}
                <p className="text-3xl font-bold text-center text-gray-800 mb-4 transition-all duration-300">
                  ₹90,000 <span className="line-through text-gray-500 text-lg">₹99,000</span>
                </p>

                {/* GST Section */}
                <p className="text-xs text-center text-gray-600 mb-6">
                  18% GST additional
                </p>

                {/* Features List */}
                <ul className="list-none space-y-4 text-sm sm:text-base text-gray-700">
                  <li className="flex items-center gap-3">
                    <i className="fa fa-check-circle text-black text-lg"></i> 10,00,000  SMS
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-clock text-black text-lg"></i> 24/7 Delivery
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-ban text-black text-lg"></i> Delivered to DND Numbers
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-id-card text-black text-lg"></i> 6 Character Sender ID 
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-infinity text-black text-lg"></i> Lifetime Validity
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-credit-card text-black text-lg"></i> 100% Advance Payment
                  </li>
                </ul>

                {/* Purchase Button */}
                <button
                  className="mt-6 w-full bg-gray-800 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-xl hover:bg-white hover:text-gray-800 transition-all duration-300"
                >
                  Purchase Now
                </button>
              </div>

            </div>
          </div>


          <header className="text-center py-10 bg-gradient-to-r bg-white to-black">
            <h1 className="text-lg sm:text-xl font-semibold font-roboto mb-4 text-black">OTP SMS & Service Implicit SMS</h1>
            <div className=" flex justify-self-center items-center mt-2 pl-32 bottom-0 left-0 w-40 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
          </header>
          <div className="  bg-white">

            <div className="grid md:grid-cols-3 gap-2 p-4 pl-8 sm:pl-36">
              {/* Normal Pack */}
              <div className="relative bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl
               text-black  p-8 hover:scale-105 transition-all duration-300 w-80 mb-10
                border-gray-300">
                {/* Title Section */}
                <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4 transition-all duration-300">
                  Normal Pack
                </h3>

                {/* Price Section */}
                <p className="text-3xl font-bold text-center text-gray-800 mb-4 transition-all duration-300">
                  ₹14,000 <span className="line-through text-gray-500 text-lg">₹18,000</span>
                </p>

                {/* GST Section */}
                <p className="text-xs text-center text-gray-600 mb-6">
                  18% GST additional
                </p>

                {/* Features List */}
                <ul className="list-none space-y-4 text-sm sm:text-base text-gray-700">
                  <li className="flex items-center gap-3">
                    <i className="fa fa-check-circle text-black text-lg"></i> 1,00,000 SMS
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-clock text-black text-lg"></i> 24/7 Delivery
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-ban text-black text-lg"></i> Delivered to DND Numbers
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-id-card text-black text-lg"></i> 6 Character Sender ID 
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-infinity text-black text-lg"></i> Lifetime Validity
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-credit-card text-black text-lg"></i> 100% Advance Payment
                  </li>
                </ul>

                {/* Purchase Button */}
                <button
                  className="mt-6 w-full bg-gray-800 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-xl hover:bg-white hover:text-gray-800 transition-all duration-300"
                >
                  Purchase Now
                </button>
              </div>


              {/* second */}
              <div className="relative bg-gradient-to-r from-gray-100 to-gray-200 border-4 border-purple-400
               text-black   hover:scale-105 transition-all duration-300 w-80 mb-10 rounded-2xl">
                {/* Title Section */}
                <p className="p-3 text-center rounded-t-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-roboto  ">Most Recommended</p>
                <div className="p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4 transition-all duration-300">
                  Saver Pack
                </h3>

                {/* Price Section */}
                <p className="text-3xl font-bold text-center text-gray-800 mb-4 transition-all duration-300">
                  ₹60,000 <span className="line-through text-gray-500 text-lg">₹70,000</span>
                </p>

                {/* GST Section */}
                <p className="text-xs text-center text-gray-600 mb-6">
                  18% GST additional
                </p>

                {/* Features List */}
                <ul className="list-none space-y-4 text-sm sm:text-base text-gray-700">
                  <li className="flex items-center gap-3">
                    <i className="fa fa-check-circle text-black text-lg"></i> 5,00,000 SMS
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-clock text-black text-lg"></i> 24/7 Delivery
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-ban text-black text-lg"></i> Delivered to DND Numbers
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-id-card text-black text-lg"></i> 6 Character Sender ID 
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-infinity text-black text-lg"></i> Lifetime Validity
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-credit-card text-black text-lg"></i> 100% Advance Payment
                  </li>
                </ul>

                {/* Purchase Button */}
                <button
                  className="mt-6 w-full bg-gray-800 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-xl hover:bg-white hover:text-gray-800 transition-all duration-300"
                >
                  Purchase Now
                </button>
              </div>
              </div>


              {/* third */}
              <div className="relative bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl
               text-black  p-8 hover:scale-105 transition-all duration-300 w-80 mb-10
                border-gray-300">
                {/* Title Section */}
                <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4 transition-all duration-300">
                  Super Saver Pack
                </h3>

                {/* Price Section */}
                <p className="text-3xl font-bold text-center text-gray-800 mb-4 transition-all duration-300">
                  ₹1,10,000 <span className="line-through text-gray-500 text-lg">₹1,40,000</span>
                </p>

                {/* GST Section */}
                <p className="text-xs text-center text-gray-600 mb-6">
                  18% GST additional
                </p>

                {/* Features List */}
                <ul className="list-none space-y-4 text-sm sm:text-base text-gray-700">
                  <li className="flex items-center gap-3">
                    <i className="fa fa-check-circle text-black text-lg"></i> 10,00,000  SMS
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-clock text-black text-lg"></i> 24/7 Delivery
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-ban text-black text-lg"></i> Delivered to DND Numbers
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-id-card text-black text-lg"></i> 6 Character Sender ID 
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-infinity text-black text-lg"></i> Lifetime Validity
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa fa-credit-card text-black text-lg"></i> 100% Advance Payment
                  </li>
                </ul>

                {/* Purchase Button */}
                <button
                  className="mt-6 w-full bg-gray-800 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-xl hover:bg-white hover:text-gray-800 transition-all duration-300"
                >
                  Purchase Now
                </button>
              </div>

            </div>
          </div>

          {/* Footer Section */}
          <footer className="bg-white py-6 text-center">
            <p className="text-black text-sm">
              For more details, contact us <span className="text-[#003bff] underline ">info@ratsms.com</span>
            </p>
          </footer>
        </div>

        {/* Payment Section */}
        <div className="bg-white py-16">
          <h2 className="text-2xl sm:text-4xl font-roboto text-center mb-12 text-gray-900">Payment Options</h2>
          <div className=" px-8 lg:px-20">
            <p className="text-gray-600 text-center mb-8">
              Rat SMS provides you with an array of secure payment options, both online and offline.
            </p>
            <div className="bg-white  p-8 text-black border border-gray-300 max-w-4xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-semibold text-black mb-6 border-b border-gray-400 pb-2 text-center">
                Bank Details
              </h3>
              <ul className="space-y-4">
                <li className="flex justify-between">
                  <span className="font-semibold text-black">Account Name:</span>
                  <span className="text-gray-700   ">AWF TECHNOLOGIES PRIVATE LIMITED</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold text-black">Account Number:</span>
                  <span className="text-gray-700 text-right">43126642380</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold text-black">Bank Name:</span>
                  <span className="text-gray-700 text-right">State Bank Of India (SBI)</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold text-black">Account Type:</span>
                  <span className="text-gray-700 text-right">Current Account</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold text-black">Branch:</span>
                  <span className="text-gray-700 text-right">SHASTRI NAGAR, CHENNAI</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold text-black">IFSC Code:</span>
                  <span className="text-gray-700 text-right">SBIN0007106</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold text-black">GSTIN:</span>
                  <span className="text-gray-700 text-right">33AAQCA2038K1ZM</span>
                </li>
               
              </ul>
            </div>








            {/* Payment Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-20 mb-10">
              {/* Google Pay */}
              <div className="bg-white text-black shadow-2xl p-6 rounded-xl text-center transform transition-transform duration-300 hover:scale-105">
                <Image
                  src="/images/g.pay.jpg"
                  alt="Google Pay"
                  width={64} // Replace with the actual width of the image
                  height={64} // Replace with the actual height of the image
                  className="w-16 mx-auto mb-4"
                />

                <p className="text-xl">+91 98840 06171</p>
              </div>

              {/* PhonePe */}
              <div className="bg-white text-black shadow-2xl p-6 rounded-xl text-center transform transition-transform duration-300 hover:scale-105">
                <Image src="/images/phonepay.webp" alt="PhonePe" width={64} // Replace with the actual width of the image
                  height={64} // Replace with the actual height of the image
                  className="w-16 mx-auto mb-4" />
                <p className="text-xl">+91 98840 06171</p>
              </div>

              {/* Paytm */}
              <div className="bg-white text-black shadow-2xl p-6 rounded-xl text-center transform transition-transform duration-300 hover:scale-105">
                <Image src="/images/paytm.webp" alt="Paytm" width={64} // Replace with the actual width of the image
                  height={64} // Replace with the actual height of the image
                  className="w-16 mx-auto mb-4" />
                <p className="text-xl">+91 98840 06171</p>
              </div>

              {/* Email */}
              <div className="bg-white text-black shadow-2xl p-6 rounded-xl text-center transform transition-transform duration-300 hover:scale-105">
                <Image src="/images/upi.webp" alt="Email" width={64} // Replace with the actual width of the image
                  height={64} // Replace with the actual height of the image
                  className="w-16 mx-auto mb-4" />
                <p className="text-xl">ratsms@upi</p>
              </div>
            </div>





            <p className="text-center mt-12 text-gray-800 text-sm ">
              For more details, contact us via phone or email. Secure payments are accepted
              through UPI, Net Banking, Credit/Debit cards, and other methods.T&C Apply<span className="text-red-600">*</span>
            </p>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default PricingPage;
