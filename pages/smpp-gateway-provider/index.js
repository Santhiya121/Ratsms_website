import React from "react";
import "../../app/globals.css";
import "font-awesome/css/font-awesome.min.css";
import Navbar from "../../app/components/Navbar";
import Link from "next/link";
import Footer from "../../app/components/footer";
import Image from "next/image";
import Head from "next/head";
import WhatsAppIcon from "../../app/components/whatsappIcon";
import Phone from "../../app/components/phone";
export default function Smpp() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="RAT SMS offers the best SMPP SMS gateway for businesses. Enjoy fast, reliable, and cost-effective SMS delivery with easy API integration for seamless communication.
."
        />
        <meta
          name="keyword"
          content="smpp service provider, smpp api hyderabad, smpp provider, smpp gateway, smpp operator chennai, smpp gateway coimbatore, cheap smpp connectivity, smpp api, smpp sms gateway"
        />
        <link rel="canonical" href="https://ratsms.com/smpp-gateway-provider" />
        <meta property="og:site_name" content="RATSMS" />
        <meta property="og:url" content="https://ratsms.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RAT SMS : SMPP Gateway Provider" />
        <meta name="og:image" content="images/assets/ratsms-icon.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#655C97" />
        <meta name="msapplication-navbutton-color" content="#655C97" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
        <title>RAT SMS: Fast SMPP Gateway for Bulk Business SMS
        </title>
      </Head>
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
      <WhatsAppIcon />
      <Phone />
      {/* Main Section */}
      <div className="bg-white text-black  min-h-screen">
        <div className="flex flex-col md:flex-row items-center justify-between px-6 py-10">
          {/* Left Content Section */}
          <div className="md:w-1/2 space-y-4 px-4 font-light sm:px-8 md:px-16 font-roboto">
            <h1 className="text-3xl sm:text-4xl font-semibold text-black">
              SMPP Gateway Provider
            </h1>
            <div className="bg-white sm:p-10   border-gray-200 max-w-5xl  ">
              <p className="text-base sm:text-xl text-gray-700 font-light leading-relaxed">
                The SMPP Gateway gets high preference due to the high-volume SMS traffic between ESME and SMPP server. The primary use of SMPP is sending and receiving SMS in medium to high volumes. SMPP uses a standard Internet connection to connect to an SMPP provider, to do away with or complete the purchase of a GSM modem or a SIM card.
              </p>

              <p className=" text-base sm:text-xl font-light text-gray-700 space-y-2">

                Send by a meaningful name, a company name instead of a phone number.


                Send short-codes: 3, 4, or 5 digits of the phone number instead of the normal length.

              </p>

              <p className="text-base sm:text-xl font-light text-gray-700 leading-relaxed">
                When it comes to RAT SMS, we are aware of the process of making the developer stronger and well-renowned in the market. We have our decade-long experience, which we have arranged for the SMPP gateway API for developers and re-sellers.{" "}
                <Link
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  check out the SMS API
                </Link>
              </p>
            </div>

          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
            <Image
              src="/videos/smpp.gif"
              alt="SMPP Gateway Illustration"
              width={800}
              height={500}
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>

      {/* Additional Content Section */}
      <div className="bg-black text-white py-12 min-h-screen">
        <div className="space-y-12 max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-roboto border-b border-gray-700 pb-4">
            RAT SMS as an SMPP Service Provider
          </h2>

          {/* Paragraph 1 */}
          <div className="relative bg-gray-900 rounded-lg shadow-lg p-6 border-l-4 border-white">
            <p className="text-lg sm:text-xl font-light leading-relaxed">
              RAT SMS SMPP application ensures the rapid delivery of messages without fail. The Short
              Message Peer-to-Peer protocol uses a client-server application that is successfully analyzed
              all over the globe.
            </p>
            <div className="absolute top-0 left-0 w-4 h-4 bg-white rounded-full transform -translate-x-2 -translate-y-2"></div>
          </div>

          {/* Paragraph 2 */}
          <div className="relative bg-gray-900 rounded-lg shadow-lg p-6 border-l-4 border-white">
            <p className="text-lg sm:text-xl font-light leading-relaxed">
              Other messaging systems can send up to 20 messages/second, whereas through SMPP, RAT SMS can
              send up to 1000 messages/second. It supports Unicode messaging, binary, plain texts, and
              extended-length text SMS.
            </p>
            <div className="absolute top-0 left-0 w-4 h-4 bg-white rounded-full transform -translate-x-2 -translate-y-2"></div>
          </div>

          {/* Paragraph 3 */}
          <div className="relative bg-gray-900 rounded-lg shadow-lg p-6 border-l-4 border-white">
            <p className="text-lg sm:text-xl font-light leading-relaxed">
              This is authentic as issues of undelivered and failed messages do not appear when you send
              messages between the SMS server.
            </p>
            <div className="absolute top-0 left-0 w-4 h-4 bg-white rounded-full transform -translate-x-2 -translate-y-2"></div>
          </div>

          {/* Paragraph 4 */}
          <div className="relative bg-gray-900 rounded-lg shadow-lg p-6 border-l-4 border-white">
            <p className="text-lg sm:text-xl font-light leading-relaxed">
              SMPP app provides two-way messaging, live delivery reports of campaigns, and a custom sender
              setup.
            </p>
            <div className="absolute top-0 left-0 w-4 h-4 bg-white rounded-full transform -translate-x-2 -translate-y-2"></div>
          </div>

          {/* Paragraph 5 */}
          <div className="relative bg-gray-900 rounded-lg shadow-lg p-6 border-l-4 border-white">
            <p className="text-lg sm:text-xl font-light leading-relaxed">
              SMPP Gateway is supported by high-end infrastructure, providing secure and reliable gateway
              communications. Track live traffic and delivery reports via our control panels.
            </p>
            <div className="absolute top-0 left-0 w-4 h-4 bg-white rounded-full transform -translate-x-2 -translate-y-2"></div>
          </div>

          {/* List Section */}
          <div className="relative bg-gray-900 rounded-lg shadow-lg p-6 border-l-4 border-white">
            <ul className="list-disc pl-6 text-lg sm:text-xl font-light leading-relaxed space-y-2">
              <li>Multiple operator connectivity ensures redundancy and faster delivery.</li>
              <li>Load balancing capability for maximum uptime.</li>
            </ul>
            <div className="absolute top-0 left-0 w-4 h-4 bg-white rounded-full transform -translate-x-2 -translate-y-2"></div>
          </div>

          {/* Call-to-Action */}
          <div className="mt-10">
            <a
              href="#"
              className="inline-block bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-300 transition-all duration-300"
            >
              Bulk sms gateway
            </a>
          </div>
        </div>
      </div>




      {/* Features Section */}


      <div className="bg-gradient-to-r from-gray-100 to-gray-200 text-white px-6 py-16">
        {/* Title Section */}
        <h2 className="text-3xl sm:text-5xl font-light text-center text-black mb-12">
          Features of SMPP Gateway
        </h2>

        {/* Features Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-screen-xl mx-auto">
          {/* Feature Card 1 */}
          <div className="bg-white text-black p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
            <ul className="space-y-6">
              <li className="flex items-center text-lg  font-light hover:text-blue-500 transition duration-300">
                <span className="mr-4 text-2xl  text-black">
                  <i className="fa fa-bolt"></i> {/* Flash icon for delivery speed */}
                </span>
                Unmatched delivery speed: Direct connection to carriers.
              </li>
              <li className="flex items-center text-lg font-light hover:text-blue-500 transition duration-300">
                <span className="mr-4 text-2xl text-black">
                  <i className="fa fa-cogs"></i> {/* Gear icon for TPS */}
                </span>
                TPS – 1000 SMS delivered per second through our SMPP.
              </li>
              <li className="flex items-center text-lg font-light hover:text-blue-500 transition duration-300">
                <span className="mr-4 text-2xl text-black ">
                  <i className="fa fa-check-circle"></i> {/* Check-circle icon for status reports */}
                </span>
                SMPP offers status delivery reports.
              </li>
            </ul>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white text-black p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
            <ul className="space-y-6">
              <li className="flex items-center text-lg font-light hover:text-blue-500 transition duration-300">
                <span className="mr-4 text-2xl text-black">
                  <i className="fa fa-headphones"></i> {/* Headset icon for 24/7 support */}
                </span>
                24/7 support via our support system.
              </li>
              <li className="flex items-center text-lg font-light hover:text-blue-500 transition duration-300">
                <span className="mr-4 text-2xl text-black">
                  <i className="fa fa-globe"></i> {/* Globe icon for international SMS */}
                </span>
                Domestic and International SMS Piping.
              </li>
              <li className="flex items-center text-lg font-light hover:text-blue-500 transition duration-300">
                <span className="mr-4 text-2xl text-black">
                  <i className="fa fa-random"></i> {/* Random icon for OTP, Transactional paths */}
                </span>
                Transactional, Promotional, and OTP SMS paths.
              </li>
            </ul>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white text-black p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
            <ul className="space-y-6">
              <li className="flex items-center text-lg font-light hover:text-blue-500 transition duration-300">
                <span className="mr-4 text-2xl text-black">
                  <i className="fas fa-project-diagram "></i>
                  {/* Random icon for Load balancing */}
                </span>
                Load Balancing for better traffic management.
              </li>
              <li className="flex items-center text-lg font-light hover:text-blue-500 transition duration-300">
                <span className="mr-4 text-2xl text-black">
                  <i className="fa fa-random"></i> {/* Random icon for Routing */}
                </span>
                Dynamic Routing.
              </li>
              <li className="flex items-center text-lg font-light hover:text-blue-500 transition duration-300">
                <span className="mr-4 text-2xl text-black">
                  <i className="fa fa-shield"></i> {/* Shield icon for Spam filtering */}
                </span>
                Spam Filtering.
              </li>
            </ul>
          </div>

          {/* Feature Card 4 */}
          <div className="bg-white text-black p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
            <ul className="space-y-6">
              <li className="flex items-center text-lg font-light hover:text-blue-500 transition duration-300">
                <span className="mr-4 text-2xl text-black">
                  <i className="fa fa-lock"></i> {/* Lock icon for Encryption */}
                </span>
                Message Encryption/Decryption API.
              </li>
              <li className="flex items-center text-lg font-light hover:text-blue-500 transition duration-300">
                <span className="mr-4 text-2xl text-black">
                  <i className="fa fa-sort-numeric-asc"></i> {/* Sorting icon for Percentage Routing */}
                </span>
                Percentage-wise Delivery Routing.
              </li>
              <li className="flex items-center text-lg font-light hover:text-blue-500 transition duration-300">
                <span className="mr-4 text-2xl text-black">
                  <i className="fa fa-arrow-right"></i> {/* Arrow icon for Delivery Routing */}
                </span>
                Direct Delivery Routing.
              </li>
            </ul>
          </div>
        </div>
      </div>



      <Footer />
    </>
  );
}
