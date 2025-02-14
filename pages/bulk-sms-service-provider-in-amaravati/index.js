

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
      description="Trusted bulk SMS service provider in Amaravathi, delivering seamless promotional, transactional, and OTP messaging solutions for businesses."
      url="https://ratsms.com/bulk-sms-service-provider-in-amaravati"
      city="Amaravathi"
      address="Amaravati (Seed Capital for IT, Government IT Parks) "
      latitude="16.526958331417585"
      longitude="80.63172902035663"
       pincode=" 522020"  
      />
      {/* Meta Tags */}
      <Head>
  <meta charSet="UTF-8" />
  <meta
    name="description"
    content="Rat SMS is a leading bulk SMS service provider in Amaravati. We offer our clients the best-in-class Bulk SMS services along with superior customer support. With our bulk SMS service, you can be sure that your message reaches your targeted audience. We offer the best rates, widest coverage, and fastest delivery in the industry."
  />
  <meta
    name="keywords"
    content="transactional sms amaravati, promotional sms amaravati, otp sms amaravati, service implicit amaravati, service explicit amaravati, bulk sms amaravati, bulk sms service amaravati, bulk sms provider amaravati, bulk sms gateway amaravati"
  />    
  <link rel="canonical" href="https://www.ratsms.com/bulk-sms-service-provider-in-amaravati" />
  <meta property="og:site_name" content="RATSMS" />
  <meta property="og:url" content="https://ratsms.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="RAT SMS | BEST BULK SMS SERVICE PROVIDER IN AMARAVATI" />
  <meta
    property="og:image"
    content="/images/logo.png"
  />
  <meta
    property="og:description"
    content="Rat SMS is a reliable bulk SMS service provider in Amaravati offering competitive rates and high-quality services to businesses."
  />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#655C97" />
  <meta name="msapplication-navbutton-color" content="#655C97" />
  <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
  <title>RAT SMS | BEST BULK SMS SERVICE PROVIDER IN AMARAVATI</title>
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
              Bulk SMS Service in Amaravati
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-white font-light">
              Bulk SMS Service Amaravati Our simple Platform helps you to send
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
      Discover More About Bulk SMS in Amaravati
      </p>
    </div>

    {/* Content Section */}
    <div className="text-left text-gray-700 font-roboto leading-relaxed space-y-6">
      
      {/* Intro Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md transition duration-300 hover:shadow-lg">
        <p>
        Bulk SMS Amravati – Rat SMS is a leading Bulk SMS provider in Amravati, 
        offering the best Bulk SMS service in this city as per your requirements at the very
         best and affordable rates. We have direct connectivity with Airtel, BSNL, etc., and 
         are also an end-to-end mobile data solutions provider catering to corporate clients and individuals. </p>
      </div>

      {/* Bulk Messaging Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Your business partner for Bulk SMS Amravati. We are a global player 
        in Bulk SMS solutions and have a unique bulk SMS software that can send SMS directly. 
        You can now add and remove contacts from your Bulk SMS account. Amravati is the capital of 
        the Indian state of Andhra Pradesh and an emerging market in technology, marketing, and population, 
        making it essential to capture this market. </p>
      </div>

      {/* Benefits Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        We have different types of tools for marketing in this city. 
        Bulk SMS is the latest approach to promote your business, allowing you to directly 
        send your offers and alert your targeted audience. We are one of the best Bulk SMS aggregators 
        in India. So, join Rat SMS and use the power of bulk SMS.  </p>
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
