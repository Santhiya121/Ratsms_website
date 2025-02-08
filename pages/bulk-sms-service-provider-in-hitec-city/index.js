

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
      description="Reliable bulk SMS service provider in Hitec City, offering promotional, transactional, and OTP messaging solutions for businesses."
      url="https://ratsms.com/bulk-sms-service-provider-in-hitec-city"
      city="Hitec City"
      address="Hitec City, Madhapur, Gachibowli"
      latitude="17.447302735384383"
      longitude=" 78.3800383374694"
      pincode="500081"
      />
      {/* Meta Tags */}
      <Head>
  <meta charSet="UTF-8" />
  <meta
    name="description"
    content="Bulk SMS Hitec-City is a leading provider of affordable and reliable messaging solutions in India. We offer innovative and cost-effective bulk SMS services and SMPP Gateway solutions for all your needs."
  />
  <meta
    name="keywords"
    content="transactional sms hitec city, promotional sms hitec city, otp sms hitec city, service implicit hitec city, service explicit hitec city, bulk sms hitec city, bulk sms provider hitec city, bulk sms gateway hitec city"
  />    
  <link rel="canonical" href="https://www.ratsms.com/bulk-sms-service-provider-in-hitec-city" />
  <meta property="og:site_name" content="RATSMS" />
  <meta property="og:url" content="https://ratsms.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="RAT SMS | BEST BULK SMS SERVICE PROVIDER IN HITEC-CITY" />
  <meta
    property="og:image"
    content="/images/logo.png"
  />
  <meta
    property="og:description"
    content="Bulk SMS Hitec-City offers affordable and reliable bulk messaging solutions. Get the best-in-class SMS services and SMPP Gateway with expert support."
  />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#655C97" />
  <meta name="msapplication-navbutton-color" content="#655C97" />
  <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
  <title>RAT SMS | BEST BULK SMS SERVICE PROVIDER IN HITEC-CITY</title>
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
              Bulk SMS Service in Hitec City
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-white font-light">
              Bulk SMS Service Hitec City Our simple Platform helps you to send
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
      Discover More About Bulk SMS in Hitec City
      </h2>
    </div>

    {/* Content Section */}
    <div className="text-left text-gray-700 font-roboto leading-relaxed space-y-6">
      
      {/* Intro Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md transition duration-300 hover:shadow-lg">
        <p>
        HITEC City is located in Hyderabad, Telangana, India. It is a busy city with many IT parks, making it an ideal choice for developing your business in HITEC City. The city has plenty of educational institutions, hotels, shopping malls, restaurants, hospitals, houses, and corporate offices.
        </p>
      </div>

      {/* Bulk Messaging Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        

  If you want to double your sales, then try promotional SMS in Hyderabad to grow your business. Are you looking for a bulk SMS API? Then you are at the right place. Rat SMS is the leading bulk SMS aggregator company providing bulk SMS with a free SMS API. It is fast, robust, and can be developed in any language as per your convenience.

        </p>
      </div>

      {/* Benefits Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        HITEC City is a busy corporate business hub for many large-scale industries. One of the most effective mediums for marketing is SMS marketing, or sending bulk SMS. Sending promotional bulk SMS is a highly effective marketing technique that helps generate valuable outputs with relatively low investment costs.

        </p>
      </div>

      {/* Business Growth Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Compared to other marketing strategies, bulk SMS is low-cost and effective—you don’t need to be an expert to send messages. The only effort required is to write SMS for your audience. Rat SMS provides an easy way to connect with people and let them know about your service or product. Bulk SMS marketing helps inform customers about new product launches and keeps existing and new users updated on recent changes to any product or service.

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
