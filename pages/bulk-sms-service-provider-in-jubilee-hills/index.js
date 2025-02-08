

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
      description="Reliable bulk SMS service provider in Jubilee Hills offering promotional, transactional, and OTP messaging solutions for businesses."
      url="https://ratsms.com/bulk-sms-service-provider-in-jubilee-hills"
      city="Jubilee Hills"
      address="Known for luxury and IT-related offices in the vicinity."
      latitude="17.42840201702611"
      longitude="78.4139660112602"
      pincode="500033"
      />
      {/* Meta Tags */}
      <Head>
  <meta charSet="UTF-8" />
  <meta
    name="description"
    content="We are one of the best Bulk SMS service providers in Jubilee-Hills, Mumbai. We provide a simple platform for sending promotional SMS and other business communications."
  />
  <meta
    name="keywords"
    content="transactional sms jubilee hills, promotional sms jubilee hills, otp sms jubilee hills, service implicit jubilee hills, service explicit jubilee hills, bulk sms jubilee hills, bulk sms service provider jubilee hills, bulk sms gateway jubilee hills"
  />    
  <link rel="canonical" href="https://www.ratsms.com/bulk-sms-service-provider-in-jubilee-hills" />
  <meta property="og:site_name" content="RATSMS" />
  <meta property="og:url" content="https://www.ratsms.com/bulk-sms-service-provider-in-jubilee-hills" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="RAT SMS | BEST BULK SMS SERVICE PROVIDER IN JUBILEE-HILLS" />
  <meta
    property="og:image"
    content="/images/logo.png"
  />
  <meta
    property="og:description"
    content="Send bulk promotional SMS to your customers in Jubilee-Hills with Rat SMS. Engage your customers and drive sales with our reliable and simple platform."
  />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#655C97" />
  <meta name="msapplication-navbutton-color" content="#655C97" />
  <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
  <title>RAT SMS | BEST BULK SMS SERVICE PROVIDER IN JUBILEE-HILLS</title>
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
              Bulk SMS Service in Jubilee Hills
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-white font-light">
              Bulk SMS Service Jubilee Hills Our simple Platform helps you to send
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
      Discover More About Bulk SMS in Jubilee Hills
      </h2>
    </div>

    {/* Content Section */}
    <div className="text-left text-gray-700 font-roboto leading-relaxed space-y-6">
      
      {/* Intro Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md transition duration-300 hover:shadow-lg">
        <p>
        Rat SMS is one of the leading bulk SMS companies in Hyderabad, providing bulk SMS services for any kind of business. Whether you want to promote a product in Jubilee Hills or a specific city, Rat SMS is ready to help you get leads using bulk SMS.

        </p>
      </div>

      {/* Bulk Messaging Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Jubilee Hills, located in Telangana, is one of the most expensive commercial and residential locations in India. If you have an idea to start a business in Jubilee Hills, that’s a great decision. To promote your business, choose a bulk SMS service in Jubilee Hills.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Rat SMS provides Transactional SMS, Promotional SMS, OTP SMS, and more. We support all bulk SMS resellers who cannot afford the direct tie-up costs with telecom operators. Purchasing SMS services from us gives you the benefit of lower setup costs and setup time, along with free SMS API.
        </p>
      </div>

      {/* Business Growth Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        If you are looking for bulk SMS services to promote your business, you are in the right place. SMS can be sent to a group of people with a single click, making it the easiest and quickest way to send many SMS. Rat SMS provides bulk SMS in various cities like Hyderabad, Bangalore, Kolkata, Chennai, Mumbai, Delhi, and more.
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
