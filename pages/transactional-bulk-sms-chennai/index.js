import Footer from "../../app/components/footer";
import Navbar from "../../app/components/Navbar";
import SupportForm from "../../app/components/supportForm";
import "../../app/globals.css";
import { FaCheckCircle, FaClock, FaChartBar, FaHeadset, FaShieldAlt } from "react-icons/fa";
import Head from "next/head";
import WhatsAppIcon from "../../app/components/whatsappIcon";
import Phone from "../../app/components/phone";
import LocalBusinessSchema from "../../app/components/localSchema";

export default function TransactionalBulkSMS() {
  return (
    <>
     <LocalBusinessSchema
      name = "RAT SMS"
      description="Send fast and reliable transactional SMS for OTPs, alerts, and notifications with instant delivery."
      url="https://ratsms.com/transactional-bulk-sms-chennai"
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
          content="Get fast, secure transactional bulk SMS services in Chennai with RatSMS. Send OTPs, alerts & updates instantly. Reliable API integration for seamless messaging!"
        />
        <meta
          name="keyword"
          content="transactional sms hyderabad, bulk sms, transactional sms service, bulk sms service, transactional sms, bulk sms service provider, transactional bulk sms, bulk sms provider, transactional sms provider, bulk sms services in india, best transactional sms offers, bulk sms gateway, transactional sms chennai, bulk sms india, transactional sms coimbatore, bulk sms provider in india"
        />
        <link rel="canonical" href="https://ratsms.com/transactional-bulk-sms-chennai" />
        <meta property="og:site_name" content="RATSMS" />
        <meta property="og:url" content="https://ratsms.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RAT SMS : Bulk SMS Service Provider" />
        <meta name="og:image" content="/images/logo.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#655C97" />
        <meta name="msapplication-navbutton-color" content="#655C97" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
        <title>RAT SMS | TRANSACTIONAL BULK SMS</title>
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
        <div className="  p-5 sm:p-2">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="flex  items-center  sm:pl-16">
              <div className=" sm:text-left ">
                <h1 className="text-3xl sm:text-5xl font-roboto font-light text-black p-2">Transactional Bulk SMS</h1>
                <p className="text-gray-900 text-sm sm:text-lg tracking-widest w-full font-light sm:w-[30rem] pl-4">
                  SMS connects services all over the world. We offer outstanding service to wholesale clients in India.
                </p>
                <p className="text-gray-900 text-sm sm:text-lg tracking-widest w-full font-light sm:w-[30rem] pl-4">
                High-Delivery Rate Transactional Messaging 
                </p>
                <p className="text-gray-900 text-sm sm:text-lg tracking-widest w-full font-light sm:w-[30rem] pl-4">
                Try us, You will love the RatSMS Experience
                </p>
              </div>
            </div>

            {/* Form Section */}
            <div className="pt-10 sm:pt-1">
              <SupportForm />
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-white p-6 ml-6 sm:p-8  space-y-6 mt-16  sm:ml-16">
            <h3 className="sm:text-2xl text:xl font-roboto text-gray-800 text-left mb-8">Features of Transactional SMS</h3>
            <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <FaCheckCircle className="text-black text-3xl" />,
                  title: "Best-in-class Delivery",
                  description: "Assured best deliverability and speeds.",
                },
                {
                  icon: <FaClock className="text-black text-3xl" />,
                  title: "24/7 Delivery",
                  description: "Messages delivered round the clock.",
                },
                {
                  icon: <FaChartBar className="text-black text-3xl" />,
                  title: "Detailed Reporting",
                  description: "Clear reporting on the status of every single SMS.",
                },
                {
                  icon: <FaHeadset className="text-black text-3xl" />,
                  title: "Best Support",
                  description: "24x7 customer support via phone, email",
                },
                {
                  icon: <FaShieldAlt className="text-black text-3xl" />,
                  title: "Superior Reliability",
                  description: "Best-in-class uptimes of 99.99%.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white pb-6 w-60 text-center space-y-4 border-b-2 border-gray-500 mt-10"
                >
                  <div className="flex flex-col  text-left">
                    <div className="mb-4 text-left">{feature.icon}</div>
                    <h4 className="sm:text-xl text-base font-roboto text-gray-800">{feature.title}</h4>
                    <p className="text-gray-600 sm:text-base text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What is Transactional SMS Section */}
          <div className="bg-white p-8 rounded-lg shadow-2xl sm:pl-20 mt-10">
            <h3 className="sm:text-xl text-lg font-roboto text-gray-800 mb-6">What is Transactional SMS?</h3>
            <p className="text-gray-700 mb-4 sm:text-base text-sm ">
              According to TRAI regulations, SMS sent by commercial entities are classified into Promotional Bulk SMS and Transactional Bulk SMS.
            </p>
            <p className="text-gray-700 mb-4 sm:text-base text-sm  ">
              Transactional SMS are related to transactions or actions such as order confirmations, payment receipts, delivery confirmations, appointment reminders, and more.
            </p>
            <p className="text-gray-700 mb-4 sm:text-base text-sm  ">
              Transactional SMS allows you to send the right information at the right time to your customers’ smartphones, creating a strong customer rapport and improving loyalty.
            </p>
            <p className="text-gray-700 sm:text-base text-sm  ">
              As a well-known transactional SMS gateway provider in Chennai, RatSMS ensures top-notch services with intelligent routing technology and unmatched delivery speeds.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
