

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
      description="Reliable bulk SMS service provider in Lucknow offering seamless promotional, transactional, and OTP messaging solutions for businesses."
      url="https://ratsms.com/bulk-sms-service-provider-in-lucknow"
      city="Lucknow"
      address="Gomti Nagar, IT City"
      latitude="26.86012663580428"
      longitude="80.976026226835"
      pincode="226010"
      />
      {/* Meta Tags */}
      <Head>
  <meta charSet="UTF-8" />
  <meta
    name="description"
    content="Send Bulk SMS in Lucknow with Rat SMS, the leading and most reliable company. 100% delivery guarantee and instant bulk SMS in Lucknow with lowest rates. We provide comprehensive SMS services to all our clients."
  />
  <meta
    name="keywords"
    content="transactional sms lucknow, promotional sms lucknow, otp sms lucknow, service implicit lucknow, service explicit lucknow, bulk sms lucknow, bulk sms service lucknow, bulk sms provider lucknow, bulk sms gateway lucknow"
  />    
  <link rel="canonical" href="https://www.ratsms.com/bulk-sms-service-provider-in-lucknow" />
  <meta property="og:site_name" content="RATSMS" />
  <meta property="og:url" content="https://ratsms.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="RAT SMS | BEST BULK SMS SERVICE PROVIDER IN LUCKNOW" />
  <meta
    property="og:image"
    content="/images/logo.png"
  />
  <meta
    property="og:description"
    content="Send Bulk SMS in Lucknow with Rat SMS, offering 100% delivery guarantee and the best rates for your bulk SMS needs."
  />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#655C97" />
  <meta name="msapplication-navbutton-color" content="#655C97" />
  <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
  <title>RAT SMS | BEST BULK SMS SERVICE PROVIDER IN LUCKNOW</title>
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
              Bulk SMS Service in Lucknow
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-white font-light">
              Bulk SMS Service Lucknow Our simple Platform helps you to send
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
      Discover More About Bulk SMS in Lucknow
      </h2>
    </div>

    {/* Content Section */}
    <div className="text-left text-gray-700 font-roboto leading-relaxed space-y-6">
      
      {/* Intro Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md transition duration-300 hover:shadow-lg">
        <p>
        Bulk SMS Lucknow – Rat SMS is the leading and most reliable company in Lucknow for Bulk SMS marketing campaigns. We use updated technology to provide bulk SMS marketing services, so Rat SMS can offer the desired services in Lucknow at a low cost.   </p>
      </div>

      {/* Bulk Messaging Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Over the past years, we have been able to consolidate our presence in the market through our high-quality Bulk SMS services in Lucknow. We are well known in the market among individuals and entrepreneurs. Rat SMS is the most trusted way to make your Bulk SMS marketing campaigns effective, increasing sales and generating valuable results.  </p>
      </div>

      {/* Benefits Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
    

  With the SMS you send via our application, you can reach your target audience instantly and in a highly personalized manner.
  </p>
      </div>

      {/* Business Growth Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Lucknow, located in Uttar Pradesh, is a historically important city and is rapidly developing with a lot of available manpower. Starting a small business in Lucknow can indeed earn huge profits. It is a fast-growing city with new opportunities and business avenues.  </p>
      </div>
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Don’t worry about how to market your business—Rat SMS helps you promote your products or business through Bulk SMS services in Lucknow.
        Rat SMS is one of the leading and most reliable bulk SMS service providers in Lucknow. We are India’s leading bulk SMS service provider and help over 9,000+ businesses with their SMS-based marketing campaigns, customer service alerts, and updates. Many companies have used our Bulk SMS services and are 100% satisfied. Sending SMS is simple—you can send SMS using your computer, and the only requirement is an internet connection to send SMS via the internet. Our SMPP Server is directly connected with BSNL and Airtel SMS gateways.       </p>
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
