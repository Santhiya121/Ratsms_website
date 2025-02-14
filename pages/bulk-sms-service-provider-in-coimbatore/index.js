

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
      description="Reliable bulk SMS service provider in Coimbatore offering promotional, transactional, and OTP messaging solutions for businesses."
      url="https://ratsms.com/bulk-sms-service-provider-in-coimbatore"
      city=" Coimbatore"
      address="Peelamedu, Tidel Park, PSG Technt"
      latitude="11.024468913503188"
      longitude="77.00382126649646"
       pincode="641004"
      />
      {/* Meta Tags */}
      <Head>
  <meta charSet="UTF-8" />
  <meta
    name="description"
    content="Rat SMS is India's leading bulk SMS service provider in Coimbatore. We offer quality services, great pricing, and 24/7 support for bulk SMS campaigns."
  />
  <meta
    name="keywords"
    content="transactional sms coimbatore, promotional sms coimbatore, otp sms coimbatore, service implicit coimbatore, bulk sms coimbatore, bulk sms service coimbatore, bulk sms gateway coimbatore"
  />    
  <link rel="canonical" href="https://www.ratsms.com/bulk-sms-service-provider-in-coimbatore" />
  <meta property="og:site_name" content="RATSMS" />
  <meta property="og:url" content="https://www.ratsms.com/bulk-sms-service-provider-in-coimbatore" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="RAT SMS | BEST BULK SMS SERVICE PROVIDER IN COIMBATORE" />
  <meta
    property="og:image"
    content="/images/logo.png"
  />
  <meta
    property="og:description"
    content="Send bulk SMS in Coimbatore with Rat SMS, the leading bulk SMS provider in India. Quality services at great prices with 24/7 customer support."
  />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#655C97" />
  <meta name="msapplication-navbutton-color" content="#655C97" />
  <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
  <title>RAT SMS | BEST BULK SMS SERVICE PROVIDER IN COIMBATORE</title>
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
              Bulk SMS Service in Coimbatore
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-white font-light">
              Bulk SMS Service Coimbatore Our simple Platform helps you to send
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
      Discover More About Bulk SMS in Coimbatore
      </p>
    </div>

    {/* Content Section */}
    <div className="text-left text-gray-700 font-roboto leading-relaxed space-y-6">
      
      {/* Intro Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md transition duration-300 hover:shadow-lg">
        <p>
        Rat SMS is one of the leading bulk SMS service providers in Coimbatore. We provide a high-quality and high-speed SMS gateway to our clients. We offer Bulk SMS marketing services such as OTP SMS, Transactional SMS, Promotional SMS, SMS API, and SMPP services.
        </p>
      </div>

      {/* Bulk Messaging Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Promotional SMS service is an effective marketing strategy for promoting your business. Bulk SMS is used by many sectors, including banks and financial institutions, educational institutions, automobile dealers, hospitals and clinics, travel agencies, logistics, and couriers. Our web-based Bulk SMS Service Application features a user-friendly dashboard specially designed for sending SMS online.

        </p>
      </div>

      {/* Benefits Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        We provide login details, including a username and password, to access the Bulk SMS software. Users can log in to the Bulk SMS gateway from anywhere on the web to send SMS. Through our application, users can easily send SMS to a large number of recipients with just a single click.
        </p>
      </div>

      {/* Business Growth Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Coimbatore is the third-largest municipal corporation in Tamil Nadu. If you are looking for a marketing partner for your business advertising in Coimbatore, feel free to get in touch with us to avail of our Bulk SMS services. We maintain a direct connection with the network providers in India to deliver the best services.
        </p>
      </div>
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>     
  Rat SMS is one of the most reliable bulk SMS service providers in Coimbatore. We offer services such as Promotional Bulk SMS, Transactional Bulk SMS, OTP SMS, and more. Many companies have used our Bulk SMS Service and are 100% satisfied. Sending SMS is simple—you can send SMS using your computer, requiring only an internet connection to send messages via the web.
               </p>
               </div>
               <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>     
        We are one of the best SMS gateways in India because our SMPP Server is directly connected with BSNL and Airtel SMS gateways. Visit our website or call our executive to learn more about Rat SMS offers. We ensure maximum successful SMS deliveries within a minimum timeframe, resulting in outstanding outcomes for our clients.             </p>
               </div>
               <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>     
        Rat SMS supports all bulk SMS resellers who cannot afford the direct tie-up cost with telecom operators. Purchasing SMS services from us gives you the benefit of lower setup costs and setup time, along with Free SMS API in India.</p>
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
