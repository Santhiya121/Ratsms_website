

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
      description="Reliable bulk SMS service provider in Guwahati, delivering fast and secure promotional, transactional, and OTP messaging solutions for businesses."
      url="https://ratsms.com/bulk-sms-service-provider-in-guwahati"
      city="Guwahati"
      address="Silpukhuri, Beltola (growing IT scene)"
      latitude="26.19438893325624"
      longitude="91.69586057015097"
      pincode="781028"
      />
      {/* Meta Tags */}
      <Head>
  <meta charSet="UTF-8" />
  <meta
    name="description"
    content="Bulk SMS Guwahati provides the best bulk SMS service to send unlimited SMS in Guwahati and other cities of India. Cost-effective and reliable services for businesses."
  />
  <meta
    name="keywords"
    content="transactional sms guwahati, promotional sms guwahati, otp sms guwahati, service implicit guwahati, bulk sms guwahati, bulk sms service provider guwahati, bulk sms gateway guwahati"
  />    
  <link rel="canonical" href="https://www.ratsms.com/bulk-sms-service-provider-in-guwahati" />
  <meta property="og:site_name" content="RATSMS" />
  <meta property="og:url" content="https://www.ratsms.com/bulk-sms-service-provider-in-guwahati" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="RAT SMS | BEST BULK SMS SERVICE PROVIDER IN GUWAHATI" />
  <meta
    property="og:image"
    content="/images/logo.png"
  />
  <meta
    property="og:description"
    content="Send unlimited SMS in Guwahati with Bulk SMS Guwahati. Reliable, cost-effective, and easy-to-use bulk SMS services for businesses and individuals."
  />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#655C97" />
  <meta name="msapplication-navbutton-color" content="#655C97" />
  <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
  <title>RAT SMS | BEST BULK SMS SERVICE PROVIDER IN GUWAHATI</title>
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
              Bulk SMS Service in Guwahati
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-white font-light">
              Bulk SMS Service Guwahati Our simple Platform helps you to send
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
      Discover More About Bulk SMS in Guwahati
      </h2>
    </div>

    {/* Content Section */}
    <div className="text-left text-gray-700 font-roboto leading-relaxed space-y-6">
      
      {/* Intro Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md transition duration-300 hover:shadow-lg">
        <p>
        Bulk SMS Guwahati – Rat SMS is a leading bulk SMS service provider in India, offering the best Bulk SMS services in Guwahati city as per your requirements at the best and most affordable rates. Over the last couple of years, the company has consolidated its presence in major regions of North India.
        </p>
      </div>

      {/* Bulk Messaging Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        We provide plenty of SMS tools and services. We have direct connectivity with Airtel, BSNL, etc., and are also an end-to-end mobile data solutions provider catering to both corporate clients and individuals.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        As a global player in Bulk SMS solutions, we have unique bulk SMS software that can send SMS directly. You can now add and remove contacts from your Bulk SMS account.
        </p>
      </div>

      {/* Business Growth Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Guwahati is the largest city in the Indian state of Assam. We offer different types of marketing tools for businesses in this city. Bulk SMS is the latest approach to promote your business, allowing you to directly send offers and alerts to your targeted audience.
        </p>
      </div>
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
  In India, many people use two handsets or mobile numbers. So, join Rat SMS and leverage the power of bulk SMS. Rat SMS provides an easy way to connect with people and inform them about your services and products. Bulk SMS marketing helps notify customers about new product launches and recent updates made to any product or service.
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
