

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
    content="Rat SMS offers the best Bulk SMS Service at the lowest cost in Palakkad. We provide instant delivery and competitive pricing, making us a leading SMS service provider in Kerala."
  />
  <meta
    name="keywords"
    content="transactional sms palakkad, promotional sms palakkad, otp sms palakkad, service implicit palakkad, service explicit palakkad, bulk sms palakkad, bulk sms service palakkad, bulk sms provider palakkad, bulk sms gateway palakkad"
  />    
  <link rel="canonical" href="https://www.ratsms.com/bulk-sms-service-provider-in-palakkad" />
  <meta property="og:site_name" content="RATSMS" />
  <meta property="og:url" content="https://ratsms.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="RAT SMS | BEST BULK SMS SERVICE PROVIDER IN PALAKKAD" />
  <meta
    property="og:image"
    content="https://ratsms.com/images/assets/ratsms-icon.png"
  />
  <meta
    property="og:description"
    content="Rat SMS offers the best Bulk SMS services in Palakkad with competitive prices and excellent customer service."
  />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#655C97" />
  <meta name="msapplication-navbutton-color" content="#655C97" />
  <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
  <title>RAT SMS | BEST BULK SMS SERVICE PROVIDER IN PALAKKAD</title>
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
              Bulk SMS Service in Palakkad
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-white font-light">
              Bulk SMS Service Palakkad Our simple Platform helps you to send
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
      Discover More About Bulk SMS in Palakkad
      </h2>
    </div>

    {/* Content Section */}
    <div className="text-left text-gray-700 font-roboto leading-relaxed space-y-6">
      
      {/* Intro Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md transition duration-300 hover:shadow-lg">
        <p>
     
  Rat SMS, a leading bulk SMS company, offers professional Bulk SMS services in Palakkad. We provide SMS services in several cities like Alappuzha, Kozhikode, Kollam, and more, offering cost-effective services. We also provide Promotional SMS services across India.
  </p>
      </div>

      {/* Bulk Messaging Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Rat SMS has built a strong reputation over the years for offering trustworthy services to our clients. We provide several services to meet our clients’ requirements, whether for professional or individual use.  </p>
      </div>

      {/* Benefits Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        If you are doing business in Palakkad or planning to start your business, then you must be looking for a reliable and affordable way to promote your business or product to gain a large volume of consumers. If yes, you are in the right place. Bulk SMS in Kerala offers a pocket-friendly way to spread awareness about your brand to the target audience.
        </p>
      </div>

      {/* Business Growth Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
    
  Bulk SMS service in Palakkad is one of the best places to start your business. Palakkad is famous for many businesses such as tourism, jewelry, rubber, Ayurveda, coffee, spices, and banana products. If you want to make your business successful in Palakkad, don’t worry—Rat SMS provides the best Bulk SMS service for your product, allowing you to easily promote your business.   </p>
      </div>
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Rat SMS provides Bulk SMS for all kinds of businesses or individuals, with a free SMPP API and free Bulk SMS DLT registration. We will help make your business successful through our Bulk SMS strategy. 
        
  Rat SMS provides Bulk SMS services at a low cost—check our pricing page. We have direct telecom connectivity with Airtel and BSNL. We also welcome resellers, offering full support to them to buy credits and use our portal. Rat SMS has 24/7 customer care. We have successfully delivered thousands of marketing campaigns for our clients in Palakkad. Additionally, we provide you with an API for integrating SMS services with your website to send SMS to your customers.    </p>
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
