

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

export default function BulkSmsServiceProvider() {
  return (
    <>
      {/* Meta Tags */}
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Rat SMS offers top Bulk SMS Chennai services with instant delivery, real-time tracking, and effective customer engagement to boost your marketing efforts. Try now!"
        />
        <meta
          name="keyword"
          content="bulk sms service provider, bulk sms service, bulk sms provider, sms services provider, transactional sms chennai, promotional sms chennai, otp sms chennai, service implicit chennai, service explicit chennai, service implicit sms chennai, service explicit sms chennai, smart sms chennai, bulk sms chennai, bulk sms service chennai, bulk sms service provider chennai, bulk sms provider chennai, bulk sms gateway chennai, best bulk sms service provider india"
        />
        <link rel="canonical" href="https://www.ratsms.com/bulk-sms-service-provider" />
        <meta property="og:site_name" content="RATSMS" />
        <meta property="og:url" content="https://ratsms.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RAT SMS : Bulk SMS Service Provider" />
        <meta
          name="og:image"
          content="https://ratsms.com/images/assets/ratsms-icon.png"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#655C97" />
        <meta name="msapplication-navbutton-color" content="#655C97" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
        <title>RAT SMS | BEST BULK SMS SERVICE PROVIDER IN Nagpur</title>
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
              Bulk SMS Service in Nagpur
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-white font-light">
              Bulk SMS Service Nagpur Our simple Platform helps you to send
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
      Discover More About Bulk SMS in Nagpur
      </h2>
    </div>

    {/* Content Section */}
    <div className="text-left text-gray-700 font-roboto leading-relaxed space-y-6">
      
      {/* Intro Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md transition duration-300 hover:shadow-lg">
        <p>
        Bulk SMS Nagpur – Nagpur is one of the most populated cities in the Indian state of Maharashtra. According to Oxford’s Economics report, from 2019 to 2035, Nagpur is projected to be the fifth-fastest growing city in the world. The major consumption of Bulk SMS services in Maharashtra is done by Nagpur, and we are the best SMS gateway in India.    </p>
      </div>

      {/* Bulk Messaging Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
     
  If you are doing business in Nagpur or planning to start your business, then you must be looking for a reliable and affordable way to promote your business or product to gain a large volume of consumers. If yes, you are at the correct place. Bulk SMS in Nagpur provides a pocket-friendly way to spread awareness about your brand to the target audience.
  </p>
      </div>

      {/* Benefits Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
 
        Nagpur has officially become the greenest, safest, and most technologically developed city. It is also one of the fastest-growing cities in Maharashtra. If you start a small business in Nagpur, it can indeed earn huge profits.

</p>
      </div>

      {/* Business Growth Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Don’t worry about how to market your business—Rat SMS helps promote your products or business through Promotional SMS. SMS is the best way to stay connected with people around the world. According to Juniper Research, more than 97% of text messages are read by smartphone users, and more than 90% are read within the first 3-4 minutes. The Times of India recently demonstrated the same fact through research.

</p>
      </div>
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Rat SMS, a provider in Nagpur, has successfully delivered thousands of marketing campaigns for our clients. We also provide you with a free SMS API for integrating SMS services with your website to send SMS to your customers.      </p>
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
