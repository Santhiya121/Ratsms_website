

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
    content="Rat SMS is the leading Bulk SMS service provider in Vadodara. We offer OTP, Promotional, and Transactional SMS services with guaranteed delivery for all your messages."
  />
  <meta
    name="keywords"
    content="transactional sms vadodara, promotional sms vadodara, otp sms vadodara, service implicit vadodara, service explicit vadodara, bulk sms vadodara, bulk sms service vadodara, bulk sms service provider vadodara, bulk sms provider vadodara, bulk sms gateway vadodara"
  />
  <link rel="canonical" href="https://www.ratsms.com/bulk-sms-service-provider-in-vadodara" />
  <meta property="og:site_name" content="RATSMS" />
  <meta property="og:url" content="https://ratsms.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="RAT SMS | BEST BULK SMS SERVICE PROVIDER IN VADODARA" />
  <meta
    property="og:image"
    content="/images/logo.png"
  />
  <meta
    property="og:description"
    content="Rat SMS is the leading Bulk SMS provider in Vadodara, offering guaranteed delivery for all your OTP, Promotional, and Transactional SMS needs."
  />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#655C97" />
  <meta name="msapplication-navbutton-color" content="#655C97" />
  <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
  <title>RAT SMS | BEST BULK SMS SERVICE PROVIDER IN VADODARA</title>
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
              Bulk SMS Service in Vadodara
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-white font-light">
              Bulk SMS Service Vadodara Our simple Platform helps you to send
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
      Discover More About Bulk SMS in Vadodara
      </h2>
    </div>

    {/* Content Section */}
    <div className="text-left text-gray-700 font-roboto leading-relaxed space-y-6">
      
      {/* Intro Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md transition duration-300 hover:shadow-lg">
        <p>
        Bulk SMS Service Provider in Vadodara – We are tech enthusiasts, so we use the latest technology for our services.

Rat SMS is one of the leading Bulk SMS service providers in Vadodara. Connect with thousands, even millions, of people within a second, and improve your business sales. You can reach people with the help of the Bulk SMS marketing platform.</p>
      </div>

      {/* Bulk Messaging Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
     
  Bulk SMS marketing is the transmission of text messages to a large number of people at once. It is one of the most popular marketing techniques. We offer Transactional SMS, OTP SMS, and Promotional SMS, along with a Free SMS API.

</p>
      </div>

      {/* Benefits Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
  
        Vadodara is the third-largest city in Gujarat, so if you have an idea to start a business in Vadodara, that’s a great idea! You can easily reach people with our Bulk SMS service in Vadodara.

We offer different types of SMS services at very reasonable and affordable prices with a 100% delivery ratio. Sending Promotional Bulk SMS marketing is a highly effective marketing technique that helps generate valuable outputs with relatively lower investment costs.
  </p>
      </div>

      {/* Business Growth Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Rat SMS provides SMS services across India and is fully available in all Indian states.

Rat SMS Service uses a vast range of SMS services in which Transactional and Promotional SMS have the facility to send Transactional SMS in DND and NON-DND, Promotional SMS in DND and NON-DND. We promise instant delivery and reasonable pricing. Bulk SMS India provides SMS services for both corporate clients and individuals. We offer instant SMS delivery for quick communication and strictly follow TRAI guidelines. We provide bulk SMS services for educational sectors, travel companies, banking, showrooms, and more, with a free API.
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
