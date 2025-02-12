

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
      description="Reliable bulk SMS service provider in Bangalore offering seamless promotional, transactional, and OTP messaging solutions for businesses."
      url="https://ratsms.com/bulk-sms-service-provider-in-bangalore"
      city="Alappuzha"
      address="Whitefield, Koramangala, Electronic City, Hebbal, Bannerghatta Road, Sarjapur Road"
      latitude="12.911180753775374"
      longitude="77.68779771625255"
      pincode="560066"
      />
      {/* Meta Tags */}
      <Head>
  <meta charSet="UTF-8" />
  <meta
    name="description"
    content="Rat SMS is a leading company providing bulk SMS service in Bangalore, India. We offer best quality service at the lowest rates. Reliable, cost-efficient bulk SMS solutions for businesses and organizations."
  />
  <meta
    name="keywords"
    content="transactional sms bangalore, promotional sms bangalore, otp sms bangalore, service implicit bangalore, service explicit bangalore, bulk sms bangalore, bulk sms service provider bangalore, bulk sms gateway bangalore"
  />    
  <link rel="canonical" href="https://www.ratsms.com/bulk-sms-service-provider-in-bangalore" />
  <meta property="og:site_name" content="RATSMS" />
  <meta property="og:url" content="https://ratsms.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="RAT SMS | BEST BULK SMS SERVICE PROVIDER IN BANGALORE" />
  <meta
    property="og:image"
    content="/images/logo.png"
  />
  <meta
    property="og:description"
    content="Rat SMS provides the best Bulk SMS service in Bangalore, offering reliable and cost-efficient solutions for businesses of all sizes."
  />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#655C97" />
  <meta name="msapplication-navbutton-color" content="#655C97" />
  <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
  <title>RAT SMS | BEST BULK SMS SERVICE PROVIDER IN BANGALORE</title>
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
              Bulk SMS Service in Bangalore
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-white font-light">
              Bulk SMS Service Bangalore Our simple Platform helps you to send
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
      Discover More About Bulk SMS in Bangalore
      </h2>
    </div>

    {/* Content Section */}
    <div className="text-left text-gray-700 font-roboto leading-relaxed space-y-6">
      
      {/* Intro Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md transition duration-300 hover:shadow-lg">
        <p>
        Bengaluru, also called Bangalore depending on the people, is the capital city of Karnataka state. Bengaluru is the fourth most expensive city in India and ranks 171st in global rankings. It is one of the major urban and metropolitan cities of the country with a population of 10 million.
        </p>
      </div>

      {/* Bulk Messaging Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Bangalore city boasts plenty of educational institutions, hotels, shopping malls, restaurants, hospitals, houses, and corporate offices. Sending bulk SMS in Bangalore is now easy because we are present in this city. If you want to double your sales, try Bulk SMS Bangalore to grow your business.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Are you looking for Bulk SMS API? Then you are at the right place. Rat SMS is the leading company providing Bulk SMS with a Free SMS API. The SMS API is very fast and robust, and you can develop it in any language as per your wish. Bangalore is a busy city and a corporate business hub to many large-scale business industries. One of the most effective mediums is SMS marketing or sending bulk SMS.
        </p>
      </div>

      {/* Business Growth Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Sending promotional Bulk SMS is a highly effective marketing technique. It helps generate valuable results with relatively low investment costs. Compared to other marketing strategies, Bulk SMS is cost-effective and easy to implement—you don’t need to be an expert to send messages. The only effort required is to write the SMS for your audience.

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
