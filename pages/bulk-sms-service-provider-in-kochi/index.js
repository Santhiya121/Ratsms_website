

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
      description="Reliable bulk SMS service provider in Kochi offering promotional, transactional, and OTP messaging solutions for businesses.."
      url="https://ratsms.com/bulk-sms-service-provider-in-kochi"
      city="Kochi"
      address=" Infopark, Kakkanad, SmartCity"
      latitude="28.52976752240173"
      longitude="76.36648829894845"
      pincode="682030"
      />
      {/* Meta Tags */}
      <Head>
  <meta charSet="UTF-8" />
  <meta
    name="description"
    content="Rat SMS is a leading Bulk SMS Service Provider in Kochi, Kerala. We offer the best bulk SMS solution for your business, with the help of our expert team, to increase business productivity."
  />
  <meta
    name="keywords"
    content="transactional sms kochi, promotional sms kochi, otp sms kochi, service implicit kochi, service explicit kochi, smart sms kochi, bulk sms kochi, bulk sms service kochi, bulk sms provider kochi, bulk sms gateway kochi"
  />    
  <link rel="canonical" href="https://www.ratsms.com/bulk-sms-service-provider-in-kochi" />
  <meta property="og:site_name" content="RATSMS" />
  <meta property="og:url" content="https://ratsms.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="RAT SMS | BEST BULK SMS SERVICE PROVIDER IN KOCHI" />
  <meta
    property="og:image"
    content="/images/logo.png"
  />
  <meta
    property="og:description"
    content="Rat SMS offers the best Bulk SMS service provider in Kochi to enhance business productivity with low-cost, reliable, and efficient solutions."
  />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#655C97" />
  <meta name="msapplication-navbutton-color" content="#655C97" />
  <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
  <title>RAT SMS | BEST BULK SMS SERVICE PROVIDER IN KOCHI</title>
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
              Bulk SMS Service in Kochi
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-white font-light">
              Bulk SMS Service Kochi Our simple Platform helps you to send
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
      Discover More About Bulk SMS in Kochi
      </h2>
    </div>

    {/* Content Section */}
    <div className="text-left text-gray-700 font-roboto leading-relaxed space-y-6">
      
      {/* Intro Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md transition duration-300 hover:shadow-lg">
        <p>
        Rat SMS provides bulk SMS services for any kind of business in Kochi. Whether you want to promote any product in Kochi or a specific city, Rat SMS is ready to help you get leads using bulk SMS.
        </p>
      </div>

      {/* Bulk Messaging Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        We have been in this field for many years, so we know effective marketing strategies and how to utilize bulk SMS systems efficiently. Our expert staff is available to monitor your campaigns and keep track of the results.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Rat SMS helps you interact with your target audience by creating catchy messages that will grab attention. People will see your SMS and contact you. We have already helped businesses grow using Promotional Bulk SMS services.
        </p>
      </div>

      {/* Business Growth Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Rat SMS can also assist any business, anytime and anywhere. Bulk SMS in Kochi offers free DLT registration. Kochi is one of the best places to start your business, as it is famous for industries like tourism, jewelry, rubber, Ayurveda, coffee, spices, and banana products.
        </p>
      </div>
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        We provide SMS services in several cities like Alappuzha, Kozhikode, Kollam, and more. We offer cost-effective services to businesses in these areas as well. Additionally, we offer our services across India.
               </p>
               </div>
               <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Purchasing SMS services from us gives you the benefit of lower setup costs and setup time, along with a free SMS API. Rat SMS is one of the leading and most reliable bulk SMS service providers in Kochi. Many companies have used our Bulk SMS services and are 100% satisfied. Sending SMS is simple—you can send SMS using your computer, and the only requirement is an internet connection.
               </p>
               </div>
               <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Our SMPP server is directly connected to BSNL and Airtel SMS gateways. Rat SMS is one of the best SMS service providers in India. We ensure fast and reliable services, providing you with the best solutions at unbeatable prices, and our pricing plans are competitive.
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
