

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
      description="Reliable bulk SMS service provider in Kollam offering promotional, transactional, and OTP messaging solutions for businesses."
      url="https://ratsms.com/bulk-sms-service-provider-in-kollam"
      city="Kollam"
      address="No major IT hub, some small ventures"
      latitude="8.878156804350173"
      longitude="76.64397547008667"
      pincode="691001"
      />
      {/* Meta Tags */}
      <Head>
  <meta charSet="UTF-8" />
  <meta
    name="description"
    content="Rat SMS is the leading Bulk SMS marketing company in Kollam, Kerala, and all over India. We provide Bulk SMS services with the lowest rates and the widest coverage in India. Send personalized messages with high response rates."
  />
  <meta
    name="keywords"
    content="transactional sms kollam, promotional sms kollam, otp sms kollam, service implicit kollam, service explicit kollam, smart sms kollam, bulk sms kollam, bulk sms service kollam, bulk sms service provider kollam, bulk sms provider kollam, bulk sms gateway kollam"
  />
  <link rel="canonical" href="https://www.ratsms.com/bulk-sms-service-provider-in-kollam" />
  <meta property="og:site_name" content="RATSMS" />
  <meta property="og:url" content="https://ratsms.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="RAT SMS | BEST BULK SMS SERVICE PROVIDER IN KOLLAM" />
  <meta
    property="og:image"
    content="/images/logo.png"
  />
  <meta
    property="og:description"
    content="Rat SMS provides the best Bulk SMS service in Kollam, offering cost-effective, measurable, and high-response marketing solutions for businesses."
  />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#655C97" />
  <meta name="msapplication-navbutton-color" content="#655C97" />
  <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
  <title>RAT SMS | BEST BULK SMS SERVICE PROVIDER IN KOLLAM</title>
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
              Bulk SMS Service in kollam
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-white font-light">
              Bulk SMS Service kollam Our simple Platform helps you to send
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
      Discover More About Bulk SMS in kollam
      </h2>
    </div>

    {/* Content Section */}
    <div className="text-left text-gray-700 font-roboto leading-relaxed space-y-6">
      
      {/* Intro Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md transition duration-300 hover:shadow-lg">
        <p>
        If you want Bulk SMS services to get more leads in Kollam, then Rat SMS is the best place where you can get Bulk SMS marketing services at the lowest rates in Kollam and all over India.

        </p>
      </div>

      {/* Bulk Messaging Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Kollam is one of the most populated cities in the Indian state of Kerala. If you are doing business in Kollam or planning to start your business, then you must be looking for a reliable and affordable way to promote your business or product to gain a large volume of consumers.  </p>
      </div>

      {/* Benefits Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        If yes, you are at the correct place. Bulk SMS in Kollam offers a pocket-friendly way to spread awareness about your brand to the target audience. Kollam is located in Kerala and is the second-largest revenue-earning city corporation in the state. </p>
      </div>

      {/* Business Growth Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
      
  We provide SMS services in several cities like Alappuzha, Kozhikode, Kochi, and more, offering cost-effective services. Bulk SMS in Kollam also offers Promotional SMS services across India.  </p>
      </div>
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Purchasing SMS services from us gives you the benefit of lower setup costs and setup time, along with free Bulk SMS DLT registration. If you want to promote your business, then choose a Bulk SMS service in Kollam. Rat SMS provides Transactional SMS, Promotional SMS, OTP SMS, and more.
   </p>
               </div>
               <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Rat SMS supports all bulk SMS resellers who cannot afford the direct tie-up costs with telecom operators. Our SMPP server is directly connected to BSNL and Airtel SMS gateways.
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
