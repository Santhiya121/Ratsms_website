import React from "react";
import Head from "next/head";
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
        name="RAT SMS"
        description="Reliable bulk SMS service provider in Ahmedabad offering promotional, transactional, and OTP messaging solutions for businesses."
        url="https://ratsms.com/bulk-sms-service-provider-in-ahmedabad"
        city="Ahmedabad"
        address=" S.G. Highway, GIFT City (Gujarat International Finance Tec-City)"
        latitude="23.006030007443066"
        longitude="72.50001585765749"
        pincode="382355"
      />
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="RAT SMS provides the best Bulk SMS services in Ahmedabad with affordable rates for businesses."
        />
        <meta
          name="keywords"
          content="bulk sms service provider, bulk sms service, bulk sms provider, sms services provider, transactional sms ahmedabad, promotional sms ahmedabad, otp sms ahmedabad, bulk sms ahmedabad"
        />
        <link rel="canonical" href="https://www.ratsms.com/bulk-sms-service-provider-in-ahmedabad" />
        <meta property="og:site_name" content="RATSMS" />
        <meta property="og:url" content="https://ratsms.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RAT SMS | BEST BULK SMS SERVICE PROVIDER IN AHMEDABAD" />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:description" content="Get the best Bulk SMS services in Ahmedabad at affordable rates with RAT SMS." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>RAT SMS | BEST BULK SMS SERVICE PROVIDER IN AHMEDABAD</title>
      </Head>
      
      <div className="bg-black z-100 relative h-16 w-full">
        <Navbar />
      </div>
      <WhatsAppIcon />
      <Phone />

      <div className="relative z-10 sm:h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 h-auto w-full">
         <Image
           src="/images/homepage.jpeg"
           alt="Background"
           layout="fill"
           objectFit="cover"
           quality={100}
           priority
           className="z-0"
         />

        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center min-h-screen px-4 md:px-12">
          <div className="w-full lg:w-1/2 text-white text-center lg:text-left mt-20 sm:mt-12 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6">Bulk SMS Service in Ahmedabad</h1>
            <p className="mt-4 text-lg sm:text-xl font-light">Bulk SMS Service Ahmedabad: Send Promotional, OTP & API SMS effortlessly.</p>
          </div>

          <div className="flex justify-center sm:justify-end items-center min-h-screen pl-5 sm:pr-8">
            <div className="text-white w-full sm:w-auto">
              <SupportForm />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-12 px-4 sm:px-6 md:px-12">
        <div className="mx-auto text-center bg-white p-6 rounded-lg shadow-lg">
          <p className="text-lg sm:text-2xl font-bold text-gray-800 mb-6">Discover More About Bulk SMS in Ahmedabad</p>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <div className="p-4 bg-gray-50 rounded-md shadow">
              <p>     Ahmedabad is one of the most populated cities in the Indian 
          state of Gujarat. It is the seat of the Gujarat High Court and the administrative 
          headquarters of the Ahmedabad district. With a population of more than 5.7 million and an 
          extended population of 6.2 million, it is the fifth-largest city and seventh-largest metropolitan
           area of India.</p>
            </div>
            <div className="p-4 bg-white rounded-md shadow">
              <p>   If you want Bulk SMS Services to get more leads in Ahmedabad, 
            then Rat SMS is the best place where you can get Bulk SMS marketing services
             at the lowest rate in Ahmedabad and all over India. The major consumption of 
             Bulk SMS service in Gujarat is done by Ahmedabad. We also offer Promotional SMS ser
             vice across India. Ahmedabad holds approximately 9% of the total SMS consumption in 
             India, and 33% of the total mobile users in Mumbai are registered in the Do Not Disturb 
             (DND) registry.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-md shadow">
              <p>  If you are doing business in Ahmedabad or planning 
            to start your business, then you must be looking forward to a reliable
             and affordable way to promote your business or product to gain a large volume of
              consumers. Bulk SMS in Ahmedabad delivers a pocket-friendly way to spread awareness a
              bout your brand to the target audience. SMS marketing turns up a high success rate and
               helps send instant updates about the business.</p>
            </div>
            <div className="p-4 bg-white rounded-md shadow">
              <p>The city has become one of the best places for setting up new businesses. Though the city houses many medium, small, 
          and large business corporations, particularly IT firms, it continues to offer immense growth opportunities. We are 
          the leading SMS service provider in India</p>
            </div>
          </div>
        </div>
      </div>
      
      <Service />
      <PlaceContent />
      <Advantages />
      <Footer />
    </>
  );
}
