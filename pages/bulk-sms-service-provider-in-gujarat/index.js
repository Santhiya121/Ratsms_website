

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
      description="Reliable bulk SMS service provider in Gujarat offering promotional, transactional, and OTP messaging solutions for businesses."
      url="https://ratsms.com/bulk-sms-service-provider-in-gujarat"
      city="Gujarat"
      address="Gandhinagar, S.G. Highway (Ahmedabad), GIFT City"
      latitude="23.164392701198494"
      longitude="72.67816238027488"
      pincode="382010"
      />
      {/* Meta Tags */}
      <Head>
  <meta charSet="UTF-8" />
  <meta
    name="description"
    content="Rat SMS are the leading Bulk SMS Service providers in Gujarat offering high-quality marketing solutions and reliable real-time SMS delivery with over 20 years of experience."
  />
  <meta
    name="keywords"
    content="transactional sms gujarat, promotional sms gujarat, otp sms gujarat, service implicit gujarat, bulk sms gujarat, bulk sms service gujarat, bulk sms provider gujarat, bulk sms gateway gujarat"
  />    
  <link rel="canonical" href="https://www.ratsms.com/bulk-sms-service-provider-in-gujarat" />
  <meta property="og:site_name" content="RATSMS" />
  <meta property="og:url" content="https://www.ratsms.com/bulk-sms-service-provider-in-gujarat" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="RAT SMS | BEST BULK SMS SERVICE PROVIDER IN GUJARAT" />
  <meta
    property="og:image"
    content="/images/logo.png"
  />
  <meta
    property="og:description"
    content="Rat SMS provides Bulk SMS Service in Gujarat with the fastest and cheapest solutions for marketing, ensuring reliable and real-time SMS delivery."
  />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#655C97" />
  <meta name="msapplication-navbutton-color" content="#655C97" />
  <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
  <title>RAT SMS | BEST BULK SMS SERVICE PROVIDER IN GUJARAT</title>
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
              Bulk SMS Service in Gujarat
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-white font-light">
              Bulk SMS Service Gujarat Our simple Platform helps you to send
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
      Discover More About Bulk SMS in Gujarat
      </h2>
    </div>

    {/* Content Section */}
    <div className="text-left text-gray-700 font-roboto leading-relaxed space-y-6">
      
      {/* Intro Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md transition duration-300 hover:shadow-lg">
        <p>
        Bulk SMS Service Gujarat – We are delivering your SMS to over 200+ countries. Rat SMS provides Bulk SMS services in Gujarat, offering the best rates for transactional and promotional bulk SMS services across India.
        </p>
      </div>

      {/* Bulk Messaging Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        If you are looking for a genuine SMS marketing service in Gujarat, then Rat SMS is the best place for your bulk SMS needs at the lowest and most affordable prices. Clients can access our application from anywhere in India, making it convenient for businesses across the country.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        We also offer Bulk SMS services in various major cities, including Bulk SMS Service in Bangalore, Bulk SMS Service in Ahmedabad, Bulk SMS Service Provider in Mumbai, and Bulk SMS in Delhi. There is no need to purchase any application or software; you only need to purchase SMS credits/balance.
        </p>
      </div>

      {/* Business Growth Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Gujarat’s population was 60.4 million, making it India’s 5th largest state by area. If you have an idea to start a business in Gujarat, that’s a great decision. To promote your business, choose a Bulk SMS service in Gujarat.
        </p>
      </div>
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Rat SMS provides Transactional SMS, Promotional SMS, OTP SMS Gateway, 
        and more. We support all bulk SMS resellers who cannot afford the direct tie-up 
        cost with telecom operators. Purchasing SMS services from us gives you the benefit 
        of lower setup costs and setup time, along with free SMS API.
               </p>
               </div>
               <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Rat SMS has direct telecom connectivity with BSNL and Airtel. We provide the best Bulk SMS services across India at the cheapest price compared to other SMS aggregators. Additionally, we offer free SMS API and free DLT registration. Rat SMS strictly follows TRAI guidelines and always welcomes bulk SMS white-label resellers, offering full support and assistance.
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
