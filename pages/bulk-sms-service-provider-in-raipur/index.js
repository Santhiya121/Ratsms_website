

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
      description="Reliable bulk SMS service provider in Raipur offering promotional, transactional, and OTP messaging solutions for businesses."
      url="https://ratsms.com/bulk-sms-service-provider-in-raipur"
      city="Raipur"
      address="No major IT hub but small-scale industries growing"
      latitude="21.268491396292102"
      longitude="81.65824895644003"
      pincode="492001"
      />
      {/* Meta Tags */}
      <Head>
  <meta charSet="UTF-8" />
  <meta
    name="description"
    content="Rat SMS is a leading bulk SMS service provider in Raipur. We offer our clients the best-in-class Bulk SMS services along with superior customer support. With our bulk SMS service, you can be sure that your message reaches your targeted audience. We offer the best rates, widest coverage, and fastest delivery in the industry."
  />
  <meta
    name="keywords"
    content="transactional sms raipur, promotional sms raipur, otp sms raipur, service implicit raipur, service explicit raipur, service implicit sms raipur, service explicit sms raipur, smart sms raipur, bulk sms raipur, bulk sms service raipur, bulk sms service provider raipur, bulk sms provider raipur, bulk sms gateway raipur"
  />
  <link rel="canonical" href="https://www.ratsms.com/bulk-sms-service-provider-in-raipur" />
  <meta property="og:site_name" content="RATSMS" />
  <meta property="og:url" content="https://ratsms.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="RAT SMS | BEST BULK SMS SERVICE PROVIDER IN RAIPUR" />
  <meta
    property="og:image"
    content="/images/logo.png"
  />
  <meta
    property="og:description"
    content="Reliable Bulk SMS Service Provider in Raipur. Send Promotional SMS, Transactional SMS, and OTP SMS with the best service and affordable pricing."
  />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#655C97" />
  <meta name="msapplication-navbutton-color" content="#655C97" />
  <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
  <title>RAT SMS | BEST BULK SMS SERVICE PROVIDER IN RAIPUR</title>
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
              Bulk SMS Service in Raipur
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-white font-light">
              Bulk SMS Service Raipur Our simple Platform helps you to send
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
      Discover More About Bulk SMS in Raipur
      </h2>
    </div>

    {/* Content Section */}
    <div className="text-left text-gray-700 font-roboto leading-relaxed space-y-6">
      
      {/* Intro Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md transition duration-300 hover:shadow-lg">
        <p>
        Rat SMS, a leading bulk SMS company, offers professional Bulk SMS services in Raipur. We provide SMS services in several cities like Delhi, Mumbai, Kerala, Gujarat, Tamil Nadu, and other states, offering cost-effective services.
        </p>
      </div>

      {/* Bulk Messaging Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Rat SMS has built a strong reputation for offering trustworthy services to clients over the years. We provide various services to meet our clients requirements, whether for professional or individual use.

If you are doing business in Raipur or planning to start your business, then you must be looking for a reliable and affordable way to promote your business or product to gain a large volume of consumers. If yes, you are at the correct place. Bulk SMS in Raipur offers a pocket-friendly way to spread awareness about your brand to the target audience.
</p>
      </div>

      {/* Benefits Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        We are a leading bulk SMS provider across India. Raipur is one of the best places to start your business, and it is known for many businesses such as tourism, jewelry, clothes, and more.

If you want to make your business successful in Raipur, don’t worry—Rat SMS provides the best Bulk SMS service for your product, making it easy to promote your business.
 </p>
      </div>

      {/* Business Growth Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
      
  Rat SMS offers Bulk SMS services for all kinds of businesses or individuals, with a free SMS API and Free DLT Registration. We will help make your business successful through our Bulk SMS strategy. </p>
      </div>
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Rat SMS is one of the leading and most reliable bulk SMS service providers in Raipur. We are India’s leading Bulk SMS aggregator. We help over 9,000+ businesses with their SMS-based marketing campaigns, customer service alerts, and updates. Many companies have used our Bulk SMS services and are 100% satisfied. Sending SMS is simple—you can send SMS using your computer, and the only requirement is an internet connection to send SMS via the internet. Our SMPP server is directly connected to BSNL and Airtel SMS gateways.
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
