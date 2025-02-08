

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

export default function BulkSmsServiceProvider() {
  return (
    <>
    <LocalBusinessSchema
      name = "RAT SMS"
      description="Reliable bulk SMS service provider in Surat offering promotional, transactional, and OTP messaging solutions for businesses."
      url="https://ratsms.com/bulk-sms-service-provider-in-surat"
      city="Surat"
      address="IT City"
      latitude="21.179113895057828"
      longitude="72.81765719566259"
      pincode="395002"
      />
      {/* Meta Tags */}
      <Head>
  <meta charSet="UTF-8" />
  <meta
    name="description"
    content="Bulk SMS Service Surat provides the best way to send Bulk SMS at an affordable price with reliable and high-quality service. We help send Promotional SMS, Transactional SMS, OTP SMS, and more."
  />
  <meta
    name="keywords"
    content="transactional sms surat, promotional sms surat, otp sms surat, service implicit surat, service explicit surat, bulk sms surat, bulk sms service surat, bulk sms provider surat, bulk sms gateway surat"
  />    
  <link rel="canonical" href="https://www.ratsms.com/bulk-sms-service-provider-in-surat" />
  <meta property="og:site_name" content="RATSMS" />
  <meta property="og:url" content="https://ratsms.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="RAT SMS | BEST BULK SMS SERVICE PROVIDER IN SURAT" />
  <meta
    property="og:image"
    content="/images/logo.png"
  />
  <meta
    property="og:description"
    content="Send Bulk SMS in Surat with Rat SMS. Affordable and reliable services for promotional marketing, OTP, transactional, and more."
  />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#655C97" />
  <meta name="msapplication-navbutton-color" content="#655C97" />
  <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
  <title>RAT SMS | BEST BULK SMS SERVICE PROVIDER IN SURAT</title>
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
      <div className="relative z-10 sm:h-screen h-auto w-full">
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source src="/videos/chennai.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
        <div className="flex flex-col lg:flex-row justify-between items-center min-h-screen px-4 md:px-12 relative z-10 lg:mt-0">
          <div className="w-full lg:w-1/2 text-white text-center lg:text-left mt-32 sm:mt-16 px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6">
              Bulk SMS Service in Surat
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-white font-light">
              Bulk SMS Service Surat Our simple Platform helps you to send
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
      <h2 className="text-xl sm:text-3xl font-bold text-gray-800 mb-8 transform transition duration-500 hover:scale-110">
      Discover More About Bulk SMS in Surat
      </h2>
    </div>

    {/* Content Section */}
    <div className="text-left text-gray-700 font-roboto leading-relaxed space-y-6">
      
      {/* Intro Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md transition duration-300 hover:shadow-lg">
        <p>
        Bulk SMS Service in Surat – Nowadays, many business owners are unsure how to promote their businesses effectively. They still use old techniques to boost sales and leads, but they don’t realize that these methods no longer work in today’s digital age. </p>
      </div>

      {/* Bulk Messaging Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        With mobile phones being widely used nowadays, people can easily learn about your brand using Bulk SMS services.

You can connect with thousands, even millions, of people within a second, improving your business sales. With the help of the Bulk SMS marketing platform, you can easily reach people.
   </p>
      </div>

      {/* Benefits Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
      
  Bulk SMS marketing is the transmission of text messages to a large number of people at once. It is one of the most popular marketing techniques. Bulk SMS marketing is used to promote businesses or enhance business sales. In Bulk SMS marketing, we create campaigns targeted at specific locations or people, sending SMS to thousands or millions of people with just one click.  </p>
      </div>

      {/* Business Growth Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Surat is located in Gujarat and is a historically important city. It is a rapidly developing city with a lot of manpower and a fast-growing market filled with new opportunities and business avenues. According to the Economic Times, Surat is projected to be the world’s fastest-growing city from 2019 to 2035.

Starting a small business in Surat can indeed earn huge profits. Don’t worry about how to market your business—Rat SMS helps promote your products or business through Bulk SMS services.
</p>
      </div>
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Rat SMS is one of the leading and most reliable bulk SMS service providers in India. We help over 9,000+ businesses with their SMS-based marketing campaigns, customer service alerts, and updates. Many companies have used our Bulk SMS services and are 100% satisfied. Sending SMS is simple—you can send SMS using your computer, and all you need is an internet connection to send SMS via the internet. Our SMPP server is directly connected to BSNL and Airtel SMS gateways.     </p>
               </div>
              
            

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
