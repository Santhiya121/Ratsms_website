

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
      description="Reliable bulk SMS service provider in Delhi offering promotional, transactional, and OTP messaging solutions for businesses."
      url="https://ratsms.com/bulk-sms-service-provider-in-delhi"
      city="Delhi"
      address="Connaught Place, Nehru Place, Okhla Industrial Area, Gurgaon (Haryana) is close and home to many IT hubs"
      latitude="28.52976752240173"
      longitude="77.25774006696743"
      pincode="110001"
      />
      {/* Meta Tags */}
      <Head>
  <meta charSet="UTF-8" />
  <meta
    name="description"
    content="Rat SMS is a leading provider of Bulk SMS Services in Delhi, India. We provide a smart and easy-to-use bulk SMS platform to send messages in Delhi and across India."
  />
  <meta
    name="keywords"
    content="bulk sms company in delhi, bulk sms service provider in delhi ncr, bulk sms marketing delhi, transactional sms delhi, promotional sms delhi, bulk sms delhi, bulk sms gateway delhi"
  />    
  <link rel="canonical" href="https://www.ratsms.com/bulk-sms-service-provider-in-delhi" />
  <meta property="og:site_name" content="RATSMS" />
  <meta property="og:url" content="https://ratsms.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="RAT SMS | BEST BULK SMS SERVICE PROVIDER IN DELHI" />
  <meta
    property="og:image"
    content="/images/logo.png"
  />
  <meta
    property="og:description"
    content="Send bulk SMS in Delhi with Rat SMS. India's leading Bulk SMS Service provider offering easy-to-use and reliable SMS solutions for businesses."
  />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#655C97" />
  <meta name="msapplication-navbutton-color" content="#655C97" />
  <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
  <title>RAT SMS | BEST BULK SMS SERVICE PROVIDER IN DELHI</title>
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
      <div
        style={{
          backgroundImage: "url('/images/chennai.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          width: "100%",
          height: "100%",
        }}
        className="relative z-10 h-screen"
      >
        <div className="flex flex-col lg:flex-row justify-between items-center min-h-screen px-4 md:px-12 relative z-10 lg:mt-0">
          <div className="w-full lg:w-1/2 text-white text-center lg:text-left mt-32 sm:mt-16 px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6">
              Bulk SMS Service in Delhi
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-white font-light">
              Bulk SMS Service Delhi Our simple Platform helps you to send
              Promotional Marketing, OTP & API SMS.
            </p>
          </div>

          {/* Support Form Section */}
          <div className="flex justify-center sm:justify-end items-center min-h-screen relative pr-12 sm:pt-4 px-4">
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
      Discover More About Bulk SMS in Delhi
      </h2>
    </div>

    {/* Content Section */}
    <div className="text-left text-gray-700 font-roboto leading-relaxed space-y-6">
      
      {/* Intro Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md transition duration-300 hover:shadow-lg">
        <p>
        Whether you want to promote any kind of product in Delhi or a specific city, Rat SMS is ready to help you get leads using Bulk SMS. We have been in this field for many years, so we know effective marketing strategies along with efficient bulk SMS systems.
        </p>
      </div>

      {/* Bulk Messaging Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Our expert staff monitors your campaigns and keeps track of the results. Rat SMS helps you interact with your target audience by creating catchy messages that grab attention. People see your SMS and contact you. We have already helped businesses grow using Promotional Bulk SMS services.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        We ensure fast and reliable services and provide the best solutions at unbelievable prices. Our pricing plans are competitive, which is another reason why we have a large portfolio of thousands of fully satisfied clients. We provide top-notch bulk SMS Delhi services at easy prices. We are one of the best bulk SMS service providers in Delhi.
        </p>
      </div>

      {/* Business Growth Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        New Delhi, the capital of India, has a population of over 11 million. If you have an idea to start a business in Delhi, that’s a great decision. To promote your business, choose a Bulk SMS service in Delhi. Rat SMS provides Transactional SMS, Promotional SMS, OTP SMS, and more.
        </p>
      </div>
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Rat SMS supports all bulk SMS resellers who cannot afford the direct tie-up cost with telecom operators. Additionally, we are the best SMPP provider in India. Purchasing SMS services from us gives you the benefit of lower setup costs and setup time, along with free SMS API.
               </p>
               </div>
               <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Rat SMS is one of the leading and reliable bulk SMS service providers in Delhi. Many companies have used our Bulk SMS services, and they are 100% satisfied. Sending SMS is simple—you can send SMS using your computer, requiring only an internet connection to send messages.
               </p>
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
