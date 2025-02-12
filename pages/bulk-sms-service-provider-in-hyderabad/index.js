

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
      description="Reliable bulk SMS service provider in Hitec City, Hyderabad, offering promotional, transactional, and OTP messaging solutions for businesses."
      url="https://ratsms.com/bulk-sms-service-provider-in-hyderabad"
      city="Hyderabad"
      address="Banjara Hills, Jubilee Hills"
      latitude="17.416588858965525"
      longitude="17.416588858965525"
      pincode="500034"
      />
      {/* Meta Tags */}
      <Head>
  <meta charSet="UTF-8" />
  <meta
    name="description"
    content="Rat SMS provides fast and reliable bulk SMS services in Hyderabad. Deliver messages instantly, track performance, and grow your business with targeted, real-time SMS solutions."
  />
  <meta
    name="keywords"
    content="transactional sms hyderabad, promotional sms hyderabad, otp sms hyderabad, service implicit hyderabad, bulk sms hyderabad, bulk sms service hyderabad, bulk sms gateway hyderabad"
  />    
  <link rel="canonical" href="https://www.ratsms.com/bulk-sms-service-provider-in-hyderabad" />
  <meta property="og:site_name" content="RATSMS" />
  <meta property="og:url" content="https://ratsms.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="RAT SMS | BEST BULK SMS SERVICE PROVIDER IN HYDERABAD" />
  <meta
    property="og:image"
    content="/images/logo.png"
  />
  <meta
    property="og:description"
    content="Fast and reliable bulk SMS services in Hyderabad by Rat SMS. Deliver messages instantly and grow your business with our targeted SMS solutions."
  />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#655C97" />
  <meta name="msapplication-navbutton-color" content="#655C97" />
  <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
  <title>RAT SMS | BEST BULK SMS SERVICE PROVIDER IN HYDERABAD</title>
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
              Bulk SMS Service in Hyderabad
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-white font-light">
              Bulk SMS Service Hyderabad Our simple Platform helps you to send
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
      Discover More About Bulk SMS in Hyderabad
      </h2>
    </div>

    {/* Content Section */}
    <div className="text-left text-gray-700 font-roboto leading-relaxed space-y-6">
      
      {/* Intro Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md transition duration-300 hover:shadow-lg">
        <p>
        We are tech enthusiasts, so we use the latest technology for our services. Rat SMS is one of the leading bulk SMS service providers in Hyderabad. We offer Transactional SMS, OTP SMS, Promotional SMS, and Free SMS API.
        </p>
      </div>

      {/* Bulk Messaging Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        
  We offer different types of SMS services at very reasonable and affordable prices, with a 100% delivery ratio. Sending Promotional Bulk SMS marketing is a highly effective technique, helping to generate valuable outputs with relatively low investment costs.

        </p>
      </div>

      {/* Benefits Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Rat SMS provides SMS services across India and is fully available in all Indian states. Hyderabad is the capital of Telangana state and is the sixth-most productive metro area in India
        </p>
      </div>

      {/* Business Growth Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Choose Rat SMS to promote your business. We have an application that allows you to send bulk messages to multiple contacts at once. Many business owners and marketing executives hesitate to use SMS due to the strict regulations related to mobile marketing.
        </p>
      </div>
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        However, service-specific bulk SMS in Hyderabad offers many advantages for business owners. Using a bulk SMS service provider in India allows businesses to stay connected with their customers. Those who use bulk SMS providers in Hyderabad can reach a larger audience at a lower cost.
               </p>
               </div>
               <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        If you are looking for bulk SMS services to promote your business, you are in the right place. SMS can be sent to a group of people with a single click, making it the easiest and quickest way to send many SMS. Rat SMS provides bulk SMS services in different cities like Kerala, Bangalore, Kolkata, Chennai, Mumbai, and Delhi, etc.

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
