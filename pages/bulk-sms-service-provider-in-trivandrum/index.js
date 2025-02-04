

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
    content="Rat SMS is a leading bulk SMS provider in Trivandrum. We offer Promotional SMS, Transactional SMS, OTP SMS, and more to increase brand awareness and customer engagement."
  />
  <meta
    name="keywords"
    content="transactional sms trivandrum, promotional sms trivandrum, otp sms trivandrum, service implicit trivandrum, service explicit trivandrum, bulk sms trivandrum, bulk sms service trivandrum, bulk sms service provider trivandrum"
  />
  <link rel="canonical" href="https://www.ratsms.com/bulk-sms-service-provider-in-thivandrum" />
  <meta property="og:site_name" content="RATSMS" />
  <meta property="og:url" content="https://ratsms.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="RAT SMS | BEST BULK SMS SERVICE PROVIDER IN TRIVANDRUM" />
  <meta
    property="og:image"
    content="https://ratsms.com/images/assets/ratsms-icon.png"
  />
  <meta
    property="og:description"
    content="Send Promotional SMS to customers and prospects in Trivandrum with Rat SMS, the best bulk SMS service provider. Engage your audience and grow your business."
  />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#655C97" />
  <meta name="msapplication-navbutton-color" content="#655C97" />
  <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
  <title>RAT SMS | BEST BULK SMS SERVICE PROVIDER IN TRIVANDRUM</title>
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
              Bulk SMS Service in Trivandrum
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-white font-light">
              Bulk SMS Service Trivandrum Our simple Platform helps you to send
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
      Discover More About Bulk SMS in Trivandrum
      </h2>
    </div>

    {/* Content Section */}
    <div className="text-left text-gray-700 font-roboto leading-relaxed space-y-6">
      
      {/* Intro Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md transition duration-300 hover:shadow-lg">
        <p>
        Rat SMS, a leading bulk SMS company, offers professional Bulk SMS services in Trivandrum. We provide SMS services in several cities like Alappuzha, Kozhikode, Kollam, and more, offering cost-effective services. We also provide Promotional SMS services across India.  </p>
      </div>

      {/* Bulk Messaging Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Rat SMS has built a strong reputation over the years for offering trustworthy services to our clients. We provide several services to meet our clients requirements, whether for professional or individual use. </p>
      </div>

      {/* Benefits Section */}
      <div className="p-6 bg-gray-50 rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
      
  If you are doing business in Trivandrum or planning to start your business, you must be looking for a reliable and affordable way to promote your business or product to gain a large volume of consumers. If yes, you are at the right place. Bulk SMS in Trivandrum offers a pocket-friendly way to spread awareness about your brand to the target audience.
  </p>
      </div>

      {/* Business Growth Section */}
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Trivandrum, the capital of Kerala, is the most populous city and IT hub in Kerala. It was also ranked among the top ten cities in India on the Vibrancy and Consumption Index. Trivandrum is famous for various businesses such as tourism, jewelry, rubber, Ayurveda, coffee, spices, and banana products.

If you want to make your business successful in Trivandrum, don’t worry—Rat SMS provides the best Bulk SMS services for your product, allowing you to easily promote your business. We also offer services across India.
</p>
      </div>
      <div className="p-6 bg-white rounded-md shadow-md  transition duration-300 hover:shadow-lg">
        <p>
        Purchasing SMS services from us gives you the benefit of lower setup costs and setup time, along with a free SMS API.

Rat SMS offers Bulk SMS services at low cost—check our SMS API pricing. We have direct telecom connectivity with Airtel and BSNL. We also welcome resellers in Trivandrum, providing full support to resellers to buy credits and use our portal. Rat SMS offers 24/7 customer care. As a Rat SMS provider in Trivandrum, we have successfully delivered thousands of marketing campaigns for our clients. Additionally, we provide you with an API for integrating SMS services with your website to send SMS to your customers.
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
