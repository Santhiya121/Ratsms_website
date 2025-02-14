

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
      description="Reliable bulk SMS service provider in Ahmedabad offering promotional, transactional, and OTP messaging solutions for businesses."
      url="https://ratsms.com/bulk-sms-service-provider-in-alappuzha"
      city="Alappuzha"
      address="No major IT hub, but growing IT-related ventures"
      latitude="9.499305950972143"
      longitude="76.34226865818904"
       pincode="600001"
      />
      {/* Meta Tags */}
      <Head>
  <meta charSet="UTF-8" />
  <meta
    name="description"
    content="RAT SMS provides the best Bulk SMS services in Alappuzha with affordable rates for businesses."
  />
  <meta
    name="keywords"
    content="bulk sms alappuzha, promotional sms alappuzha, transactional sms alappuzha"
  />    
  <link rel="canonical" href="https://www.ratsms.com/bulk-sms-service-provider-in-alappuzha" />
  <meta property="og:site_name" content="RATSMS" />
  <meta property="og:url" content="https://ratsms.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="RAT SMS | BEST BULK SMS SERVICE PROVIDER IN ALAPPUZHA" />
  <meta
    property="og:image"
    content="/images/logo.png"
  />
  <meta
    property="og:description"
    content="Get the best Bulk SMS services in Alappuzha at affordable rates with RAT SMS."
  />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#655C97" />
  <meta name="msapplication-navbutton-color" content="#655C97" />
  <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
  <title>RAT SMS | BEST BULK SMS SERVICE PROVIDER IN ALAPPUZHA</title>
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
              Bulk SMS Service in Alappuzha
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-white font-light">
              Bulk SMS Service Alappuzha Our simple Platform helps you to send
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
      <p className="text-xl sm:text-3xl font-bold text-gray-800 mb-8 transform transition duration-500 hover:scale-110">
      Discover More About Bulk SMS in Alappuzha
      </p>
    </div>

    {/* Content Section */}
    <div className="text-left text-gray-700 font-roboto leading-relaxed space-y-6">
      
      {/* Intro Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md transition duration-300 hover:shadow-lg">
        <p>
        Bulk SMS service in Alappuzha provides the best quality Bulk SMS service and also offers a reasonable price. We are not a reseller; RAT SMS is a direct telecom operator with Airtel, BSNL, etc. We have successfully delivered bulk SMS across India.
        </p>
      </div>

      {/* Bulk Messaging Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Rat SMS helps you send promotional SMS to your clients for business 
        promotion or for transactional purposes, such as alert SMS from a bank, train reservations,
         or order confirmations. If you search for bulk SMS in Kerala, you can get the best service at
         an affordable price.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        We provide Bulk SMS services for both corporate entities and individuals. 
        Our services include instant SMS delivery for quick communication, and we strictly 
        follow TRAI guidelines. We offer Bulk SMS services for educational sectors, travel companies, 
        banking, showrooms, etc., with free SMS API.
        </p>
      </div>

      {/* Business Growth Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Rat SMS Service offers a wide range of SMS services,
         including Transactional and Promotional SMS. These services
          allow the sending of Transactional SMS to both DND and NON-DND numbers, 
          Promotional SMS to DND and NON-DND numbers, and promise instant delivery at 
          reasonable prices. In Alappuzha, we offer affordable, reliable, and advanced bulk message
           services with a literacy rate of over 92%.
        </p>
      </div>
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Alappuzha provides a stable platform to explore new business 
        opportunities, as a majority of the population is highly skilled and qualified
        . The city has become one of the best natural places for setting up new businesses. 
        Despite being a natural hub, the city houses many medium, small, and large business corporations, 
        particularly IT firms.
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
