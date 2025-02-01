import Footer from "../../app/components/footer";
import Navbar from "../../app/components/Navbar";
import Phone from "../../app/components/phone";
import WhatsAppIcon from "../../app/components/whatsappIcon";
import "../../app/globals.css";
import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
       <Head>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Rat SMS is a bulk SMS provider with free SMS API India. We are Direct TeleCom operator Connectivity. Try our abundant smart SMS with 100% delivery & free DLT registration.
."
        />
        <meta
          name="keyword"
          content="dlt registration, bulk sms service, sms blaster, sms gateway, bulk sms provider, otp sms, sms api, bulk sms services in india, bulk sms gateway, bulk sms india, free sms api, sms api india, sms provider, bulk sms api, bulk sms provider in india, free sms api india, bulk sms reseller"
        />
        <link rel="canonical" href="https://ratsms.com/privacy-policy" />
        <meta property="og:site_name" content="RATSMS" />
        <meta property="og:url" content="https://ratsms.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RAT SMS : Bulk SMS Service Provider" />
        <meta name="og:image" content="https://ratsms.com/images/assets/ratsms-icon.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#655C97" />
        <meta name="msapplication-navbutton-color" content="#655C97" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
        <title>RAT SMS | Privacy Policy</title>
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
          <WhatsAppIcon/>
          <Phone/>
          <div className="bg-gray-100 py-12">
  <div className=" space-y-12 px-6 sm:px-12 lg:px-20">
    {/* Header Section */}
    <div className="sm:text-center text-left">
      <h1 className="text-3xl sm:text-5xl font-roboto text-left sm:text-center text-black mb-4 tracking-widest">
        Privacy Policy
      </h1>
      <p className="text-lg text-gray-600">
        Learn how we collect, use, and protect your data while providing you with the best experience.
      </p>
    </div>

    {/* Introduction Section */}
    <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
      <div className="flex items-center mb-4">
        <i className="fas fa-user-shield text-black text-2xl mr-4"></i>
        <h2 className="text-xl sm:text-2xl font-semibold text-black">
          Welcome to RatSMS Privacy Policy
        </h2>
      </div>
      <p className="text-gray-700 text-lg leading-relaxed">
        Your privacy is of utmost importance to us. This document explains how we collect, use, and safeguard your information when you use our services. By accessing or using our website, you agree to the practices outlined in this policy.
      </p>
    </div>

    {/* Definitions Section */}
    <div className="bg-gradient-to-r from-gray-200 to-gray-100 p-8 rounded-lg shadow-lg space-y-6">
      <div className="flex items-center mb-4">
        <i className="fas fa-book text-black text-3xl mr-4"></i>
        <h2 className="text-xl sm:text-2xl font-semibold text-black">
          Definitions
        </h2>
      </div>
      <ul className=" p-4 text-lg text-gray-700">
        <li>
          <strong>Personal Data:</strong> Information that can identify an individual, such as a name, email address, or phone number.
        </li>
        <li>
          <strong>Usage Data:</strong> Information automatically collected about your interactions with our services, such as browser type, IP address, and time spent on pages.
        </li>
        <li>
          <strong>Cookies:</strong> Small data files stored on your device to enhance your browsing experience.
        </li>
      </ul>
    </div>

    {/* Data Collection Section */}
    <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
      <div className="flex items-center mb-4">
        <i className="fas fa-database text-black text-3xl mr-4"></i>
        <h3 className="text-xl sm:text-2xl font-semibold text-black">
          How We Collect Data
        </h3>
      </div>
      <p className="text-gray-700 text-xl">
        We collect data in the following ways:
      </p>
      <ul className="pb-2 text-gray-700 text-xl">
        <li>
          <strong>Directly:</strong> When you fill out forms, register for an account, or communicate with us.
        </li>
        <li>
          <strong>Automatically:</strong> Through cookies, tracking technologies, and usage data.
        </li>
      </ul>
    </div>

    {/* Data Usage Section */}
    <div className="bg-gray-200 p-8 rounded-lg shadow-lg space-y-6">
      <div className="flex items-center mb-4">
        <i className="fas fa-chart-line text-black text-3xl mr-4"></i>
        <h3 className="text-xl sm:text-2xl font-semibold text-black">
          Data Usage
        </h3>
      </div>
      <p className="text-gray-700">
        We use your data for various purposes, including:
      </p>
      <ul className="p-4 text-lg text-gray-700">
        <li>Providing and improving our services.</li>
        <li>Responding to customer inquiries.</li>
        <li>Sending notifications about updates and offers.</li>
        <li>Complying with legal obligations.</li>
      </ul>
    </div>

    {/* Security Section */}
    <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
      <div className="flex items-center mb-4">
        <i className="fas fa-lock text-black text-3xl mr-4"></i>
        <h3 className="text-xl sm:text-2xl font-semibold text-black">
          Data Security
        </h3>
      </div>
      <p className="text-gray-700">
        We implement industry-standard measures to protect your data, including:
      </p>
      <ul className="p-4 pt-2 text-lg text-gray-700">
        <li>Encryption of sensitive information.</li>
        <li>Regular security audits and updates.</li>
        <li>Access control to ensure only authorized personnel can view data.</li>
      </ul>
    </div>

    {/* Rights Section */}
    <div className="bg-gray-200 p-8 rounded-lg shadow-lg space-y-6">
      <div className="flex items-center mb-4">
        <i className="fas fa-user-circle text-black text-3xl mr-4"></i>
        <h3 className="text-xl sm:text-2xl font-semibold text-black">
          Your Rights
        </h3>
      </div>
      <p className="text-gray-700">
        You have the following rights regarding your data:
      </p>
      <ul className="list-disc pl-6 space-y-4 text-gray-700 text-lg">
        <li>
          <strong>Access:</strong> Request a copy of the data we hold about you.
        </li>
        <li>
          <strong>Correction:</strong> Request corrections to inaccurate or incomplete data.
        </li>
        <li>
          <strong>Deletion:</strong> Request deletion of your data under certain circumstances.
        </li>
      </ul>
    </div>

    {/* Contact Section */}
    <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
      <div className="flex items-center mb-4">
        <i className="fas fa-envelope text-black text-3xl mr-4"></i>
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          Contact Us
        </h3>
      </div>
      <p className="text-gray-700">
        If you have any questions or concerns about this Privacy Policy, feel free to contact us at:
      </p>
      <ul className="list-none space-y-4 text-gray-700">
        <li>
          <strong>Email:</strong> support@ratsms.com
        </li>
        <li>
          <strong>Phone:</strong> +91-1234567890
        </li>
        <li>
          <strong>Address:</strong> Astalakshmi Apartment, Old No – 11, Flat No – 17, 2nd Floor, Mahatma Gandhi Rd, Adyar, Chennai, Tamil Nadu 600041.
        </li>
      </ul>
    </div>
  </div>
</div>

      <Footer />
    </>
  );
}
