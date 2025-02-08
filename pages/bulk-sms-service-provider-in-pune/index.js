

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
      description="Reliable bulk SMS service provider in Pune offering promotional, transactional, and OTP messaging solutions for businesses."
      url="https://ratsms.com/bulk-sms-service-provider-in-pune"
      city="Pune"
      address="Magarpatta City"
      latitude="18.56461489422827"
      longitude=" 73.92058934375834"
      pincode="411028"
      />
      {/* Meta Tags */}
      <Head>
  <meta charSet="UTF-8" />
  <meta
    name="description"
    content="Rat SMS offers the best Bulk SMS Service at the lowest cost in Pune. Instant delivery, affordable rates, and reliable bulk SMS solutions for businesses."
  />
  <meta
    name="keywords"
    content="transactional sms pune, promotional sms pune, otp sms pune, service implicit pune, service explicit pune, bulk sms pune, bulk sms service provider pune, bulk sms gateway pune"
  />    
  <link rel="canonical" href="https://www.ratsms.com/bulk-sms-service-provider-in-pune" />
  <meta property="og:site_name" content="RATSMS" />
  <meta property="og:url" content="https://ratsms.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="RAT SMS | BEST BULK SMS SERVICE PROVIDER IN PUNE" />
  <meta
    property="og:image"
    content="/images/logo.png"
  />
  <meta
    property="og:description"
    content="Rat SMS provides reliable and cost-effective Bulk SMS Service in Pune for businesses to send promotional, OTP, and API messages."
  />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#655C97" />
  <meta name="msapplication-navbutton-color" content="#655C97" />
  <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
  <title>RAT SMS | BEST BULK SMS SERVICE PROVIDER IN PUNE</title>
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
              Bulk SMS Service in Pune
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-white font-light">
              Bulk SMS Service Pune Our simple Platform helps you to send
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
      Discover More About Bulk SMS in Pune
      </h2>
    </div>

    {/* Content Section */}
    <div className="text-left text-gray-700 font-roboto leading-relaxed space-y-6">
      
      {/* Intro Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md transition duration-300 hover:shadow-lg">
        <p>
        Nowadays, many business owners are unsure how to promote their businesses effectively. They still rely on old techniques to boost sales and leads or promote their products and services, but these methods no longer work in today’s fast-paced market.  </p>
      </div>

      {/* Bulk Messaging Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        With the widespread use of mobile phones, people can now easily learn about your brand using Bulk SMS.

You can connect with thousands, even millions, of people within a second and significantly improve your business sales. The Bulk SMS marketing platform allows you to reach people efficiently. Bulk SMS marketing involves the transmission of text messages to a large number of people at once.
  </p>
      </div>

      {/* Benefits Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Bulk SMS is one of the most popular marketing techniques used to promote businesses and enhance sales. In Bulk SMS marketing, we create campaigns targeting specific locations or audiences and send SMS to thousands or millions of people with just one click.
        </p>
      </div>

      {/* Business Growth Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        There’s a bright future for starting a new business in Pune. If youre looking for a profitable return on low investment in Pune, don’t worry! We can help promote your business through promotional bulk SMS.

Rat SMS provides Bulk SMS services for all kinds of businesses or individuals, with a free API and Free DLT Registration. We will help make your business successful through our Bulk SMS strategy.    </p>
      </div>
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Rat SMS provides Bulk SMS services at a low cost—check our pricing page. We have direct telecom connectivity with Airtel and BSNL. We also welcome resellers and provide full support to them to buy credits and use our portal. Rat SMS offers 24/7 customer care. As a Rat SMS provider in Pune, we have successfully delivered thousands of marketing campaigns for our clients. We also provide SMPP connectivity and API for integrating SMS services with your website to send SMS to your customers.
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
