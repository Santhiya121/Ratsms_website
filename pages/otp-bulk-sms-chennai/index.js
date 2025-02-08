import Footer from "../../app/components/footer";
import Navbar from "../../app/components/Navbar";
import SupportForm from "../../app/components/supportForm";
import "../../app/globals.css";
import { FaCheckCircle, FaClock, FaChartBar, FaHeadset, FaShieldAlt, FaShippingFast } from "react-icons/fa";
import Head from "next/head";
import WhatsAppIcon from "../../app/components/whatsappIcon";
import Phone from "../../app/components/phone";
import LocalBusinessSchema from "../../app/components/localSchema";


export default function OtpBulkSMS() {
  return (
    <>
     <LocalBusinessSchema
      name = "RAT SMS"
      description="Send secure and instant OTP SMS with our reliable bulk SMS service for seamless user verification"
      url="http://localhost:3000/otp-bulk-sms-chennai"
      city="chennai"
      address="Flat No – 17, 2nd Floor, Anandha Bhavan, Landmark, Mahatma Gandhi Rd, opp. to Hotel, Adyar, Chennai, Tamil Nadu 600041"
      latitude="13.003387° N"
      longitude=" 80.255043° E"
       pincode="600001"
      />
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Ensure secure and instant OTP delivery with RatSMS OTP bulk SMS services in Chennai. Reliable, fast, and API-integrated solutions for seamless authentication."
        />
        <meta
          name="keywords"
          content="otp sms, bulk sms, otp sms service, bulk sms service, otp sms provider, bulk sms service provider, otp sms gateway, bulk sms provider, otp sms coimbatore, bulk sms services in india, otp sms hyderabad, bulk sms gateway, otp sms bangalore, bulk sms india, best otp sms offers, bulk sms provider in india, otp sms application"
        />
        <link rel="canonical" href="https://ratsms.com/otp-bulk-sms-chennai" />
        <meta property="og:site_name" content="RATSMS" />
        <meta property="og:url" content="https://ratsms.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RAT SMS : Bulk SMS Service Provider" />
        <meta
          name="og:image"
          content="/images/logo.png"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#655C97" />
        <meta name="msapplication-navbutton-color" content="#655C97" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
        <title>Affordable OTP Bulk SMS Service in Chennai - Instant Delivery</title>
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

      <div className="bg-white ">
        <div className="p-5 sm:p-2 ">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="flex  items-center sm:pl-16">
              <div className=" sm:text-left">
                <h1 className="text-2xl sm:text-5xl font-roboto font-light text-black p-4 ">OTP Bulk SMS</h1>
                <p className="text-gray-900 text-sm tracking-widest sm:text-lg w-full font-light sm:w-[30rem] pl-4">
                  SMS connects services all over the world. We offer outstanding service to wholesale clients in India.
                </p>
              </div>
            </div>

            {/* Form Section */}
            <div className="pt-10 sm:pt-1">
              <SupportForm />
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-white p-6 sm:ml-16 sm:p-8  space-y-6 mt-20 ">
            <h3 className="text-xl sm:text-2xl font-roboto text-gray-800 text-left mb-8">Features of OTP Bulk SMS</h3>
            <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <FaCheckCircle className="text-black text-3xl" />,
                  title: "Authentication",
                  description: "Instead of using usernames and passwords, it is safe to use OTP as an opening key.",
                },
                {
                  icon: <FaClock className="text-black text-3xl" />,
                  title: "Payment confirmation",
                  description: "While paying online for credit cards and other bank purposes, issuers prefer OTPs for security reasons.",
                },
                {
                  icon: <FaChartBar className="text-black text-3xl" />,
                  title: "High security",
                  description: "Used as a protection wall, while entering/opening some highly secured customer files & data.",
                },
                {
                  icon: <FaHeadset className="text-black text-3xl" />,
                  title: "OTP triggering API",
                  description: "Integrate API easily with SMPP to trigger OTP SMS to the user's mobile number from the operator.",
                },
                {
                  icon: <FaShippingFast className="text-black text-3xl" />,
                  title: "Deliverable",
                  description: "As usual, 100% deliverable and also live report can be downloaded.",
                },
                {
                  icon: <FaShieldAlt className="text-black text-3xl" />,
                  title: "Verification",
                  description: "Can be combined with the PIN as OTP, used to verify the phone numbers of the users as primary identification.",
                },
              ].map((feature, index) => (
                <div key={index} className="bg-white pb-6 w-60 text-left  border-b-2 border-gray-500 pt-5 ">
                  <div className="flex flex-col  text-left">
                    <div className="mb-4">{feature.icon}</div>
                    <h4 className="text-base sm:text-xl font-roboto text-gray-800">{feature.title}</h4>
                    <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What is OTP Bulk SMS Section */}
          <div className="bg-white p-8 rounded-lg shadow-2xl sm:pl-20 pl-4 pt-10">
            <h3 className="text-lg sm:text-xl font-roboto text-gray-800 mb-6">What is OTP Bulk SMS?</h3>
            <p className="text-gray-700 text-sm sm:text-lg mb-4">
              OTP (One Time Password) SMS is a secure method used for authenticating users, especially during transactions.
            </p>
            <p className="text-gray-700 text-sm sm:text-lg mb-4">
              OTP SMS are used for payment confirmations, account verification, and accessing secure data.
            </p>
            <p className="text-gray-700 text-sm sm:text-lg mb-4">
              Using OTP SMS ensures high security for your services, ensuring users can authenticate themselves with ease.
            </p>
            <p className="text-gray-700 text-sm sm:text-lg">
              As a reliable OTP SMS gateway provider in Chennai, RatSMS offers instant and secure OTP delivery.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
