import Footer from "../../app/components/footer";
import LocalBusinessSchema from "../../app/components/localSchema";
import Navbar from "../../app/components/Navbar";
import Phone from "../../app/components/phone";
import SupportForm from "../../app/components/supportForm";
import WhatsAppIcon from "../../app/components/whatsappIcon";
import "../../app/globals.css";
import Head from "next/head";
import { FaCheckCircle, FaEnvelope, FaCreditCard, FaShoppingCart, FaMobileAlt, FaWallet, FaUserCheck, FaBell, FaSchool, FaHospital, FaTools, FaBook, FaChartLine } from "react-icons/fa";

export default function ServiceImplicit() {
  return (
    <>
      <LocalBusinessSchema
        name="RAT SMS"
        description="Reliable bulk SMS service for fast, secure, and cost-effective messaging solutions."
        url="https://ratsms.com/bulk-sms-service-implicit"
        city="chennai"
        address="Flat No – 17, 2nd Floor, Anandha Bhavan, Landmark, Mahatma Gandhi Rd, opp. to Hotel, Adyar, Chennai, Tamil Nadu 600041"
        latitude="13.003387° N"
        longitude="80.255043° E"
        pincode="600001"
      />
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="RatSMS is the No.1 Service Implicit SMS Provider in India. Service Implicit SMS are delivered to all recipients, irrespective of their consent preference."
        />
        <meta
          name="keywords"
          content="service implicit sms, service implicit coimbatore, sms implicit chennai, service implicit mumbai, bulk sms implicit, sms implicit, service implicit, service implicit kerala, sms transaction implicit coimbatore, service implicit chennai, service implicit bangalore, bulk sms, bulk sms service, bulk sms service provider, bulk sms provider, bulk sms services in india, bulk sms gateway, bulk sms india"
        />
        <link rel="canonical" href="https://ratsms.com/bulk-sms-service-implicit" />
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
        <title>Reliable Bulk SMS Service for Implicit Messaging Solutions</title>
      </Head>
      <div style={{ backgroundColor: "black", zIndex: 100, position: "relative", height: "4rem", width: "100%" }}>
        <Navbar />
      </div>
      <WhatsAppIcon />
      <Phone />
      <div className="bg-white">
        <div className="p-5 sm:p-2">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="flex items-center sm:pl-16">
              <div className="sm:text-left">
                <h1 className="text-2xl sm:text-5xl font-roboto font-light text-black p-4">
                  Bulk SMS Service Implicit
                </h1>
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
          <div className="bg-white p-6 ml-6 sm:p-8 space-y-6 mt-16 sm:ml-16">
  <p className="text-lg sm:text-2xl font-roboto text-gray-800 mb-4 sm:mb-8">
    Service Implicit Message applies to:
  </p>
  <div className="space-y-6">
    {/* Card Design for Each Feature */}
    <div className="bg-gray-50 p-6 rounded-xl shadow-2xl border border-gray-100">
      <FeatureItem
        icon={<FaCreditCard className="text-black" />}
        text="Confirmation messages of Net-banking and credit/debit card transactions."
      />
    </div>
    <div className="bg-gray-50 p-6 rounded-xl shadow-2xl border border-gray-100">
      <FeatureItem
        icon={<FaShoppingCart className="text-black" />}
        text="Product purchase confirmation, delivery status etc. from e-commerce websites."
      />
    </div>
    <div className="bg-gray-50 p-6 rounded-xl shadow-2xl border border-gray-100">
      <FeatureItem
        icon={<FaMobileAlt className="text-black" />}
        text="Customer making payments through Payment Wallet over E-Commerce website/mobile app and an OTP is sent to complete the transaction."
      />
    </div>
    <div className="bg-gray-50 p-6 rounded-xl shadow-2xl border border-gray-100">
      <FeatureItem
        icon={<FaUserCheck className="text-black" />}
        text="One Time Password required for websites & app logins, social media apps, authentication/verification links, Securities, Trading & Demat account operations, KYC, e-wallet registration, etc. Messages from TSP/ISP."
      />
    </div>
    <div className="bg-gray-50 p-6 rounded-xl shadow-2xl border border-gray-100">
      <FeatureItem
        icon={<FaBell className="text-black" />}
        text="Periodic balance information, bill generation, bill dispatch, due date reminders, recharge confirmation like DTH, cable, prepaid electricity recharge, etc."
      />
    </div>
    <div className="bg-gray-50 p-6 rounded-xl shadow-2xl border border-gray-100">
      <FeatureItem
        icon={<FaEnvelope className="text-black" />}
        text="Delivery notifications, updates and periodic upgrades of a service provider."
      />
    </div>
    <div className="bg-gray-50 p-6 rounded-xl shadow-2xl border border-gray-100">
      <FeatureItem
        icon={<FaTools className="text-black" />}
        text="Messages from retail stores related to bill, warranty."
      />
    </div>
    <div className="bg-gray-50 p-6 rounded-xl shadow-2xl border border-gray-100">
      <FeatureItem
        icon={<FaSchool className="text-black" />}
        text="Messages from schools-attendance/transport alerts."
      />
    </div>
    <div className="bg-gray-50 p-6 rounded-xl shadow-2xl border border-gray-100">
      <FeatureItem
        icon={<FaHospital className="text-black" />}
        text="Messages from hospitals/clinics/pharmacies/radiologists/pathologists about registration, appointment, discharge, reports."
      />
    </div>
    <div className="bg-gray-50 p-6 rounded-xl shadow-2xl border border-gray-100">
      <FeatureItem
        icon={<FaCheckCircle className="text-black" />}
        text="Confirmatory messages from app-based services."
      />
    </div>
    <div className="bg-gray-50 p-6 rounded-xl shadow-2xl border border-gray-100">
      <FeatureItem
        icon={<FaBook className="text-black" />}
        text="Govt./DOT/TRAI mandated messages."
      />
    </div>
    <div className="bg-gray-50 p-6 rounded-xl shadow-2xl border border-gray-100">
      <FeatureItem
        icon={<FaChartLine className="text-black" />}
        text="Service updates from car workshops, repair shops, gadgets service centers."
      />
    </div>
    <div className="bg-gray-50 p-6 rounded-xl shadow-2xl border border-gray-100">
      <FeatureItem
        icon={<FaWallet className="text-black" />}
        text="Directory services like JustDial, Sulekha, Yellow pages."
      />
    </div>
    <div className="bg-gray-50 p-6 rounded-xl shadow-2xl border border-gray-100">
      <FeatureItem
        icon={<FaCreditCard className="text-black" />}
        text="Day-end/month-end settlement alerts to securities, trading & Demat account holders."
      />
    </div>
    <div className="bg-gray-50 p-6 rounded-xl shadow-2xl border border-gray-100">
      <FeatureItem
        icon={<FaCheckCircle className="text-black" />}
        text="Also refer Transactional Bulk SMS and OTP SMS."
      />
    </div>
  </div>
</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const FeatureItem = ({ icon, text }) => (
  <div className="flex items-center space-x-4">
    <div className="text-black">{icon}</div>
    <p className="text-gray-700 text-base sm:text-lg">{text}</p>
  </div>
);