import Link from "next/link";
import Footer from "../../app/components/footer";
import Navbar from "../../app/components/Navbar";
import SupportForm from "../../app/components/supportForm";
import WhatsAppIcon from "../../app/components/whatsappIcon";
import "../../app/globals.css";
import Head from 'next/head';
import { 
  FaUserCheck, 
  FaDollarSign, 
  FaUpload, 
  FaSms, 
  FaChartLine, 
  FaRocket, 
  FaChartBar, 
  FaFileAlt, 
  FaDatabase ,
  FaTags

} from 'react-icons/fa';
import { MdCampaign } from 'react-icons/md';
import Phone from "../../app/components/phone";


export default function PromotionalBulkSMS() {
  return (
    <>
     <Head>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Boost your business with our cost-effective promotional bulk SMS services in Chennai. Contact us today for tailored marketing solutions!"
        />
        <meta
          name="keywords"
          content="bulk sms india, bulk sms provider in india, promotional sms, bulk sms, bulk sms service, promotional sms service, promotional sms coimbatore, bulk sms service provider, bulk sms provider, promotional bulk sms, promotional sms chennai, bulk sms services in india, bulk sms gateway, best promotional sms offers, promotional sms bangalore, promotional sms provider"
        />
        <link rel="canonical" href="https://ratsms.com/promotional-bulk-sms-chennai" />
        <meta property="og:site_name" content="RATSMS" />
        <meta property="og:url" content="https://ratsms.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RAT SMS : Bulk SMS Service Provider" />
        <meta name="og:image" content="images/assets/ratsms-icon.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#655C97" />
        <meta name="msapplication-navbutton-color" content="#655C97" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
        <title>RAT SMS | PROMOTIONAL BULK SMS</title>
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
      <div className=" p-5 sm:p-2">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between">
            <div className="flex  items-center sm:pl-16">
        <div className="  sm:text-left  ">
          <h1 className="text-2xl sm:text-5xl font-roboto font-light text-black p-4 ">
            Promotional Bulk SMS
          </h1>
          <p className="text-gray-900 text-sm sm:text-lg tracking-widest w-full font-light sm:w-[30rem] pl-4">
            Boost your business with affordable bulk SMS services in Chennai. Reach your audience quickly & effectively.
          </p>
          
        </div>
        </div>

        {/* Contact Form */}
        <div className="pt-10 sm:pt-1">
          <SupportForm/>
        </div>
        </div>

        <div className="bg-white sm:px-16 sm:pt-32">
      <div className=" px-4 space-y-16">

        {/* Features Section */}
        <div className="bg-white ">
          <h2 className="text-xl sm:text-2xl font-roboto text-left sm:text-left text-gray-800 mb-8">Features of Promotional SMS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: <FaSms className="text-black text-3xl" />,
                title: "Complete Language Support",
                description: "Deliver messages in every language with Unicode.",
              },
              {
                icon: <FaRocket className="text-black text-3xl" />,
                title: "24/7 Delivery",
                description: "Unmatched delivery rates & speed, even to DND numbers.",
              },
              {
                icon: <FaChartBar className="text-black text-3xl" />,
                title: "Best Delivery Rates",
                description: "Send SMS at speeds of 200-500 messages per second.",
              },
              {
                icon: <FaFileAlt className="text-black text-3xl" />,
                title: "Well-documented APIs",
                description: "Integrate SMS into your apps, websites, or software.",
              },
              {
                icon: <FaDatabase className="text-black text-3xl" />,
                title: "Detailed Reporting",
                description: "Track delivery status and detailed SMS performance.",
              },
              {
                icon: <MdCampaign className="text-black text-3xl" />,
                title: "SMS Personalization",
                description: "Add recipient details, loyalty bonuses, and discounts.",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white  p-10 rounded shadow-lg space-x-6">
                <div>{feature.icon}</div>
                <div>
                  <p className="sm:text-lg text-base font-semibold text-gray-800">{feature.title}</p>
                  <p className="text-gray-600 mt-2 sm:text-base text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Informational Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 sm:pl-16">
          <h2 className="sm:text-2xl text-xl  font-roboto text-gray-800 mb-6">What is Promotional SMS?</h2>
          <p className="text-gray-700 sm:text-lg text-base ">
            Promotional SMS is a message sent by brands to inform customers about promotions, discounts, offers, or flash sales. These campaigns are used to boost engagement and drive sales.
          </p>
          <p className="text-gray-700 sm:text-lg text-base mt-4">
            With RatSMS, you can create branded subscription forms, automate SMS sending, and personalize your campaigns for better results. Promotional SMS should be sent between 9 am and 9 pm to non-DND numbers.
          </p>
        </div>

        {/* How to Send Section */}
        <div className="bg-gray-100 rounded-xl shadow-lg p-10">
      <h2 className="text-2xl font-roboto sm:text-center text-black mb-8 text-left ">
        How to Send a Promotional SMS Campaign
      </h2>

      {/* Steps */}
      <div className="space-y-8 ">
        {[
          {
            icon: <FaUserCheck className="text-black sm:text-3xl text-4xl" />,
            title: "Register with RatSMS",
            description: "Sign up for an account with RatSMS to access all features.",
          },
          {
            icon: <FaDollarSign className="text-black sm:text-3xl text-4xl" />,
            title: "Pick Your Pricing Plan",
            description: "Choose a pricing plan that suits your SMS volume needs.",
          },
          {
            icon: <FaUpload className="text-black sm:text-3xl text-4xl" />,
            title: "Upload Contacts",
            description: "Upload your contact list in a supported format for easy messaging.",
          },
          {
            icon: <FaSms className="text-black sm:text-3xl text-4xl" />,
            title: "Create a Campaign",
            description: "Design and customize your promotional SMS campaign effortlessly.",
          },
          {
            icon: <FaChartLine className="text-black sm:text-3xl text-4xl" />,
            title: "Send SMS and Convert",
            description: "Send your SMS campaign, receive inquiries, and boost sales!",
          },
        ].map((step, index) => (
          <div
            key={index}
            className="flex items-start space-x-6 bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            {/* Icon */}
            <div className="flex items-center justify-center  sm:w-16 sm:h-16 sm:bg-gray-200 rounded-full">
              {step.icon}
            </div>

            {/* Content */}
            <div>
              <h3 className="sm:text-xl text-base font-semibold text-black">{step.title}</h3>
              <p className="text-gray-700 sm:text-base text-sm mt-2">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

        {/* Pricing Section */}
        <div className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 rounded-xl shadow-lg p-10">
      <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6">
        {/* Icon */}
        <div className="bg-gray-200 rounded-full p-6 shadow-lg">
          <FaTags className="text-6xl text-gray-800" />
        </div>

        {/* Content */}
        <div className="text-center sm:text-left">
          <h2 className="sm:text-2xl text-lg  text-gray-800 mb-4">
            Pricing for Promotional SMS
          </h2>
          <p className="text-gray-700 sm:text-lg text-base  mb-6">
            Pricing depends on your volume. For more details, check our pricing
            for promotional SMS services in Chennai.
          </p>

          {/* Call-to-Action Button */}
          <Link
            href="/bulk-sms-pricing-india"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg text-lg font-roboto shadow-lg hover:bg-gray-800 transition-colors"
          >
            Check Pricing Details
          </Link>
        </div>
      </div>
    </div>
      </div>
    </div>
      </div>
    </div>
    
    <Footer/>
    </>
  );
}
