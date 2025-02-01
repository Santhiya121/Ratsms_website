

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
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Rat SMS offers top Bulk SMS Chennai services with instant delivery, real-time tracking, and effective customer engagement to boost your marketing efforts. Try now!"
        />
        <meta
          name="keyword"
          content="bulk sms service provider, bulk sms service, bulk sms provider, sms services provider, transactional sms chennai, promotional sms chennai, otp sms chennai, service implicit chennai, service explicit chennai, service implicit sms chennai, service explicit sms chennai, smart sms chennai, bulk sms chennai, bulk sms service chennai, bulk sms service provider chennai, bulk sms provider chennai, bulk sms gateway chennai, best bulk sms service provider india"
        />
        <link rel="canonical" href="https://www.ratsms.com/bulk-sms-service-provider" />
        <meta property="og:site_name" content="RATSMS" />
        <meta property="og:url" content="https://ratsms.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RAT SMS : Bulk SMS Service Provider" />
        <meta
          name="og:image"
          content="https://ratsms.com/images/assets/ratsms-icon.png"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#655C97" />
        <meta name="msapplication-navbutton-color" content="#655C97" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
        <title>RAT SMS | BEST BULK SMS SERVICE PROVIDER IN CHENNAI</title>
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
              Bulk SMS Service in Chennai
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-white font-light">
              Bulk SMS Service Chennai Our simple Platform helps you to send
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
        <div className="max-w-4xl mx-auto text-center h-auto p-8 rounded-md shadow-md">
          <h2 className="text-xl sm:text-3xl font-light text-black mb-6 transform transition duration-500 ease-in-out hover:scale-105">
            Discover More About Bulk SMS in Chennai
          </h2>
          <p className="text-lg sm:text-lg text-black font-roboto mb-6 leading-relaxed text-left animate-fadeIn">
            If you are doing business in Chennai or planning to start your
            business, then you must be looking for a reliable and affordable
            way to promote your business or product to gain a large volume of
            consumers. If yes, you are at the correct place. SMS provider in
            Chennai delivers a pocket-friendly way to spread awareness about
            your brand to the target audience.
            <br />
            <br />
            Bulk messaging is a proven way to send promotional SMS to a high
            volume of consumers. It allows your business to connect and interact
            with customers, suppliers, employees, and partners globally. SMS
            marketing has a high success rate and helps in sending instant updates
            about your business.
            <br />
            <br />
            With Bulk SMS service in Chennai, you can reach out everywhere and
            improve customer relationships. A Bulk SMS aggregator offers
            affordable, reliable, and advanced bulk messaging services. With a
            literacy rate of more than 92%, Chennai provides a stable platform to
            explore new business opportunities, as a majority of the population is
            highly skilled and qualified.
            <br />
            <br />
            The city has become one of the best places for setting up new
            businesses. Though the city houses many medium, small, and large
            business corporations, particularly IT firms, it continues to offer
            immense growth opportunities. We are the leading SMS service provider
            in India.
          </p>
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
