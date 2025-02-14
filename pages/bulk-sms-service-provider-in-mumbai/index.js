

import React from "react";
import Head from "next/head"; // Import Head for meta tags
import SupportForm from "../../app/components/supportForm";
import Footer from "../../app/components/footer";
import Service from "../../app/components/placeService";
import PlaceContent from "../../app/components/placeContent";
import Advantages from "../../app/components/advantages";
import Navbar from "../../app/components/Navbar";
import "../../app/globals.css";
import WhatsAppIcon from "../../app/components/whatsappIcon";
import Phone from "../../app/components/phone";
import LocalBusinessSchema from "../../app/components/localSchema";
import Image from "next/image";
export default function BulkSmsServiceProvider() {
  return (
    <>
    <LocalBusinessSchema
      name = "RAT SMS"
      description="Reliable bulk SMS service provider in Mumbai, delivering secure and fast promotional, transactional, and OTP messaging solutions for businesses."
      url="https://ratsms.com/bulk-sms-service-provider-in-mumbai"
      city="Delhi"
      address="Nariman Point, Bandra-Kurla Complex (BKC)"
      latitude="19.068057161661105"
      longitude="72.86920705294254"
      pincode="400051"
      />
      {/* Meta Tags */}
      <Head>
  <meta charSet="UTF-8" />
  <meta
    name="description"
    content="Promote your business with Bulk SMS in Mumbai, India. Rat SMS provides affordable bulk SMS service in Mumbai. Generate leads and promote offers with the best SMS marketing company."
  />
  <meta
    name="keywords"
    content="sms nagpur, transactional sms mumbai, promotional sms mumbai, otp sms mumbai, service implicit mumbai, service explicit mumbai, service implicit sms mumbai, service explicit sms mumbai, smart sms mumbai, bulk sms mumbai, bulk sms service mumbai, bulk sms service provider mumbai, bulk sms provider mumbai, bulk sms gateway mumbai"
  />    
  <link rel="canonical" href="https://www.ratsms.com/bulk-sms-service-provider-in-mumbai" />
  <meta property="og:site_name" content="RATSMS" />
  <meta property="og:url" content="https://www.ratsms.com/bulk-sms-service-provider-in-mumbai" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="RAT SMS | BEST BULK SMS SERVICE PROVIDER IN MUMBAI" />
  <meta
    property="og:image"
    content="/images/logo.png"
  />
  <meta
    property="og:description"
    content="Rat SMS offers affordable bulk SMS services in Mumbai, India. We help you generate leads, promote products, and engage customers effectively through SMS marketing."
  />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#655C97" />
  <meta name="msapplication-navbutton-color" content="#655C97" />
  <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
  <title>RAT SMS | BEST BULK SMS SERVICE PROVIDER IN MUMBAI</title>
</Head>


      {/* Navbar */}
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

      {/* Hero Section */}
   <div className="relative z-10 sm:h-screen inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900  h-auto w-full">
         <Image
           src="/images/homepage.jpeg"
           alt="Background"
           layout="fill"
           objectFit="cover"
           quality={100}
           priority
           className="z-0"
         />
        <div className="flex flex-col lg:flex-row justify-between items-center min-h-screen px-4 md:px-12 relative z-10 lg:mt-0">
          <div className="w-full lg:w-1/2 text-white text-center lg:text-left mt-32 sm:mt-16 px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6">
              Bulk SMS Service in Mumbai
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-white font-light">
              Bulk SMS Service Mumbai Our simple Platform helps you to send
              Promotional Marketing, OTP & API SMS.
            </p>
          </div>

          {/* Support Form Section */}
          <div className="flex justify-center sm:justify-end items-center min-h-screen pl-5 sm:pr-8">
            <div className="text-white space-x-6 w-full sm:w-auto">
              <SupportForm />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-16 px-6 lg:px-12">
  <div className="mx-auto text-center bg-white h-auto p-8 rounded-lg shadow-2xl  transition transform hover:scale-105">
    
    {/* Heading Section */}
    <div className="w-full">
      <p className="text-xl sm:text-3xl font-bold text-gray-800 mb-8 transform transition duration-500 hover:scale-110">
      Discover More About Bulk SMS in   Madurai
      </p>
    </div>

    {/* Content Section */}
    <div className="text-left text-gray-700 font-roboto leading-relaxed space-y-6">
      
      {/* Intro Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md transition duration-300 hover:shadow-lg">
        <p>
        Mumbai is a great place for entrepreneurs to build successful small businesses. With its huge market, easy availability of capital, and workforce, Mumbai is a fertile ground for businesses to flourish. </p>
      </div>

      {/* Bulk Messaging Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
  
        Rat SMS provides Bulk SMS services for any kind of business in Mumbai. Whether you want to promote a product in a specific city in Mumbai, Rat SMS is ready to help you get leads using bulk SMS.    </p>
      </div>

      {/* Benefits Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        We have been in this field for many years, so we know effective marketing strategies along with efficient bulk SMS systems. We also offer an SMPP API for Mumbai.

Rat SMS helps you interact with your target audience by creating catchy messages. People will see your SMS and contact you. We have already helped businesses grow using Promotional Bulk SMS. Rat SMS can assist any business, anytime and anywhere.    </p>
      </div>

      {/* Business Growth Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        India is the second-fastest growing market in Asia, and Mumbai is India’s heart. It’s not just the largest population city but also the country’s financial and commercial capital. Mumbai generates around 6.16% of the total Gross Domestic Product (GDP).  </p>
      </div>
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        The opportunities here are endless and varied. If starting a small business in Mumbai, it can indeed earn huge profits. Don’t worry about how to market your business—Rat SMS helps promote your products or business through Bulk SMS services in Mumbai.      </p>
               </div>
               <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Rat SMS is one of the leading and most reliable bulk SMS services in Mumbai. We are India’s leading Bulk SMS aggregator. We help over 9,000+ businesses with their SMS-based marketing campaigns, customer service alerts, and updates. Many companies have used our Bulk SMS services and are 100% satisfied. Sending SMS is simple—you can send SMS using your computer, and the only requirement is an internet connection to send SMS via the internet. Our SMPP server is directly connected to BSNL and Airtel SMS gateways.

Visit our site or call our executive to learn more about Rat SMS offers</p>    </div>
            

    </div>

    {/* Call to Action */}
   

  </div>
</div>
     
      {/* Additional Sections */}
      <Service />
      <PlaceContent />
      <Advantages />
      <Footer />
    </>
  );
}
