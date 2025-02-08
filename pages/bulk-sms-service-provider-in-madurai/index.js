

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
      description="Reliable bulk SMS service provider in Madurai offering promotional, transactional, and OTP messaging solutions for businesses."
      url="https://ratsms.com/bulk-sms-service-provider-in-madurai"
      city="Madurai"
      address="Nariman Point, Bandra-Kurla Complex (BKC), "
      latitude="19.068057161661105"
      longitude="72.86920705294254"
      pincode="400051"
      />
      {/* Meta Tags */}
      <Head>
  <meta charSet="UTF-8" />
  <meta
    name="description"
    content="Bulk SMS Services Company in Madurai - Rat SMS offers services like Promotional SMS, Transactional SMS, OTP SMS, and SMS API. We provide personalized Bulk SMS delivery to all clients and offer effective marketing solutions."
  />
  <meta
    name="keywords"
    content="transactional sms madurai, promotional sms madurai, otp sms madurai, service implicit madurai, service explicit madurai, bulk sms madurai, bulk sms service madurai, bulk sms provider madurai, bulk sms gateway madurai"
  />
  <link rel="canonical" href="https://www.ratsms.com/bulk-sms-service-provider-in-madurai" />
  <meta property="og:site_name" content="RATSMS" />
  <meta property="og:url" content="https://www.ratsms.com/bulk-sms-service-provider-in-madurai" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="RAT SMS | BEST BULK SMS SERVICE PROVIDER IN MADURAI" />
  <meta
    property="og:image"
    content="/images/logo.png"
  />
  <meta
    property="og:description"
    content="Rat SMS offers the best Bulk SMS services in Madurai. We provide effective communication and marketing solutions with promotional, transactional, OTP SMS, and more."
  />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#655C97" />
  <meta name="msapplication-navbutton-color" content="#655C97" />
  <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
  <title>RAT SMS | BEST BULK SMS SERVICE PROVIDER IN MADURAI</title>
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
              Bulk SMS Service in Madurai
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-white font-light">
              Bulk SMS Service Madurai Our simple Platform helps you to send
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
      Discover More About Bulk SMS in Madurai
      </h2>
    </div>

    {/* Content Section */}
    <div className="text-left text-gray-700 font-roboto leading-relaxed space-y-6">
      
      {/* Intro Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md transition duration-300 hover:shadow-lg">
        <p>
        Bulk SMS Madurai – If you are doing business in Madurai or planning to start your business, then you must be looking for a reliable and affordable way to promote your business or product to gain a large volume of consumers. </p>
      </div>

      {/* Bulk Messaging Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        If yes, you are at the correct place. Bulk SMS in Madurai offers a pocket-friendly way to spread awareness about your brand to the target audience. Bulk messaging is a proven way to send promotional SMS to a high volume of consumers.  </p>
      </div>

      {/* Benefits Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        It allows your business to connect and interact with customers, suppliers, employees, and partners globally. SMS marketing has a high success rate and helps in sending instant updates about your business.  </p>
      </div>

      {/* Business Growth Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Business opportunities are available in various sectors like the IT industry, textiles, hospitality, software services, entertainment, manufacturing, real estate, health industry, and more. If starting a small business in Madurai, it can indeed earn huge profits.</p>
        </div>
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Don’t worry about how to market your business—Rat SMS helps promote your products or business through Bulk SMS service in Madurai. SMS is the best way to stay connected with people around the world. According to Juniper Research, more than 97% of text messages are read by smartphone users, and more than 90% are read within the first 3-4 minutes. The Times of India recently demonstrated this fact through research.

Our service explicitly helps successfully deliver thousands of marketing campaigns for our clients. We also provide you with an API to integrate SMS services with your website and send SMS to your customers.     </p>
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
