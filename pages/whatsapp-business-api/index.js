import Footer from "../../app/components/footer";
import Navbar from "../../app/components/Navbar";
import SupportForm from "../../app/components/supportForm";
import "../../app/globals.css";
import { FaGlobe, FaShieldAlt, FaRocket, FaFileAlt, FaCommentDots, FaChartLine } from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faTools, faHandsHelping } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'
import Head from "next/head";
import Phone from "../../app/components/phone";




export default function WhatsappBusinessApi() {
  return (
    <>
     <Head>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Discover the power of the WhatsApp Business API with RatSMS. Streamline your customer communications using the robust API of WhatsApp. Explore our competitive WhatsApp API pricing and enhance your business outreach today!"
        />
        <meta
          name="keyword"
          content="whatsapp api, api of whatsapp, backup for whatsapp, backup from whatsapp, whatsapp business api, whatsapp bulk message sender, whatsapp bulk sms sender, send bulk sms on whatsapp, backup chat in whatsapp, chat backup on whatsapp, whatsapp back up chats, whatsapp marketing, whatsapp message sender, send msg on whatsapp, whatsapp sender, bulk whatsapp message, whatsapp bulk message software, mass whatsapp messaging, whatsapp sender software, whatsapp bulk sms software, whatsapp mass sender, promotional whatsapp messages, whatsapp chatbot, bulk message sender, chat box whatsapp, chatbot in whatsapp, whatsapp broadcasting, whatsapp bot, bot on whatsapp, bot in whatsapp, green ticks on whatsapp, whatsapp api pricing, whatsapp bulk message sender free, whatsapp broadcast message, send bulk whatsapp messages free, whatsapp marketing software, bulk whatsapp sender software, bulk sender whatsapp, whatsapp automation, bulk whatsapp, whatsapp promotional messages, broadcast lists whatsapp, whatsapp api send message, whatsapp business api pricing, whatsapp ai chatbot, whatsapp api to send message, whatsapp business api price, whatsapp api integration, whatsapp api free, bulk whatsapp sender free, whatsapp bulk sender free, whatsapp otp, whatsapp bulk sender software free, wa sender free bulk messaging, whatsapp verified, verified whatsapp, whatsapp integration, bulk whatsapp software, whatsapp bulk message sender software, whatsapp verified tick, integration with whatsapp, whatsapp multiple device, whatsapp for multiple devices, whatsapp 2 phones, whatsapp in two phones"
        />
        <link rel="canonical" href="https://ratsms.com/whatsapp-business-api" />
        <meta property="og:site_name" content="RATSMS" />
        <meta property="og:url" content="https://ratsms.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RAT SMS : WhatsApp Business API Provider" />
        <meta
          name="og:image"
          content="https://ratsms.com/images/assets/ratsms-icon.png"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#655C97" />
        <meta name="msapplication-navbutton-color" content="#655C97" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
        <title>RAT SMS | WHATSAPP BUSINESS API PROVIDER IN INDIA</title>
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
            <Phone/>
      <div className="bg-white">
        <div className=" p-5 sm:p-2">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row justify-between">
  {/* Content Section */}
  <div className=" flex  items-center  sm:pl-16 ">
  <div className="  sm:text-left  ">
    <h1 className="text-2xl sm:text-5xl font-roboto w-full sm:w-[40rem]font-light text-black p-4 ">
      Enhance Customer Engagement with WhatsApp Business API
    </h1>

    <p className="text-gray-900 text-sm sm:text-lg tracking-widest w-full font-light sm:w-[30rem] pl-4">
      Seamless Communication for Your Business, Engage customers in real-time,
      conversationally, and with their consent across sales, marketing, and support journeys.
    </p>
  </div>
  </div>

  {/* Form Section */}
  <div className="pt-10 sm:pt-1">
    <SupportForm />
  </div>
</div>



          <div className=" mt-5 pl-4 sm:pl-20">
            <div className=" p-6">
              {/* Real Estate */}
              <div className="flex flex-col md:flex-row items-center gap-6 pt-24">
                <Image src="/images/api1.jpg" alt="Real Estate" width={384} // Replace with the actual width of the image
                  height={360} // Replace with the actual height of the image
                  className="w-96 h-90 object-cover rounded-lg shadow-md" />
                <div className="w-full md:w-1/2 space-y-4">
                  <h2 className="text-xl font-roboto  text-black">Create marketing campaigns that drive conversions</h2>
                  <p className="text-gray-600 text-base font-light font-roboto">
                    Share promotions, offers, and back-in-stock alerts while respecting customer permissions. </p>
                  <p className="text-gray-600 text-base font-light font-roboto">
                    Set up campaigns to send abandonment notifications, appointment alerts, and re-buy reminders. </p>
                  <p className="text-gray-600 text-base font-light font-roboto">
                    Trigger order and booking confirmations, subscription reminders, delivery updates, and more. </p>
                </div>
              </div>

              {/* E-commerce */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-6 pt-24">
                <Image src="/images/api2.jpg" alt="E-commerce" width={384} // Replace with the actual width of the image
                  height={360} // Replace with the actual height of the image
                  className="w-96 h-90 object-cover rounded-lg shadow-md" />
                <div className="w-full md:w-1/2 space-y-4">
                  <h2 className="text-xl font-roboto text-black">Boost your sales with your WhatsApp store</h2>
                  <p className="text-gray-600 text-base font-light font-roboto">
                    Display tailored products from your catalog using WhatsApp product messages via the commerce API.  </p>
                  <p className="text-gray-600 text-base font-light font-roboto">
                    Send engaging multi and single-product messages to feature items from your stock. </p>
                  <p className="text-gray-600 text-base font-light font-roboto">
                    Enable customers to add products to their shopping cart without concerns about outdated information like price and availability.</p>
                </div>
              </div>

              {/* Retail */}
              <div className="flex flex-col md:flex-row items-center gap-6 pt-24">
                <Image src="/images/api3.jpg" alt="Retail" width={384} // Replace with the actual width of the image
                  height={360} // Replace with the actual height of the image
                  className="w-96 h-90 object-cover rounded-lg shadow-md" />
                <div className="w-full md:w-1/2 space-y-4">
                  <h2 className="text-xl font-roboto text-black">Deliver exceptional customer support tailored to each individuals needs</h2>
                  <p className="text-gray-600 text-base font-light font-roboto">
                    Enhance customer care with intelligent WhatsApp chatbots designed to efficiently handle routine inquiries in bulk.    </p>
                  <p className="text-gray-600 text-base font-light font-roboto">
                    Minimize response times and operational expenses through pre-set responses and self-service options.  </p>
                  <p className="text-gray-600 text-base font-light font-roboto">
                    Smooth transition to live agents for intricate inquiries or challenging situations with customers.  </p>
                </div>
              </div>





            </div>
          </div>
          {/* Features Section */}
          <div className="pl-4 sm:pl-20 pt-10 pb-20">
            <h3 className="text-xl sm:text-4xl font-roboto  text-black text-left mb-20">
              Unrivaled Scale and Speed in Programmable Two-Way Conversations
            </h3>
            <div className="grid gap-20 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <FaGlobe className="text-black text-3xl" />,
                  title: "Best-in-class Delivery",
                  description: "Assured best deliverability and speeds.",
                },
                {
                  icon: <FaShieldAlt className="text-black text-3xl" />,
                  title: "24/7 Delivery",
                  description: "Messages delivered round the clock.",
                },
                {
                  icon: <FaRocket className="text-black text-3xl" />,
                  title: "Detailed Reporting",
                  description: "Clear reporting on the status of every single SMS.",
                },
                {
                  icon: <FaFileAlt className="text-black text-3xl" />,
                  title: "Best Support",
                  description: "24x7 customer support via phone, email",
                },
                {
                  icon: <FaChartLine className="text-black text-3xl" />,
                  title: "Superior Reliability",
                  description: "Best-in-class uptimes of 99.99%.",
                },
                {
                  icon: <FaCommentDots className="text-black text-3xl" />,
                  title: "Superior Reliability",
                  description: "Best-in-class uptimes of 99.99%.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white  pb-6 w-60 text-center space-y-4 border-b-2  border-gray-500  "
                >
                  <div className="flex flex-col items-start text-left ">
                    <div className="mb-4">{feature.icon}</div>
                    <h4 className="text-xl font-roboto text-gray-800">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>

              ))}
            </div>
          </div>

          {/* What is Transactional SMS Section */}
          <div className="bg-white p-8 rounded-lg shadow-2xl pl-4 sm:pl-20">
            <h3 className="text-xl font-roboto text-black mb-6">What is Transactional SMS?</h3>
            <p className="text-gray-700 mb-4">
              According to TRAI regulations, SMS sent by commercial entities are classified into Promotional Bulk SMS and Transactional Bulk SMS.
            </p>
            <p className="text-gray-700 text-base mb-4">
              Transactional SMS are related to transactions or actions such as order confirmations, payment receipts, delivery confirmations, appointment reminders, and more.
            </p>
            <p className="text-gray-700 text-base mb-4">
              Transactional SMS allows you to send the right information at the right time to your customers’ smartphones, creating a strong customer rapport and improving loyalty.
            </p>
            <p className="text-gray-700 text-base">
              As a well-known transactional SMS gateway provider in Chennai, RatSMS ensures top-notch services with intelligent routing technology and unmatched delivery speeds.
            </p>
          </div>


          <header className="text-center py-10 bg-gradient-to-r bg-white to-black">
            <p className="text-gray-500">CHOOSE YOUR PLAN</p>
            <h1 className="text-lg font-light mb-4 text-black">WhatsApp Business API Pricing</h1>
          </header>
          <div className="  bg-white">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 pl-4 md:pl-16 top-0">
  {/* Normal Pack */}
  <div className="flex items-center justify-center">
    <div className="bg-white border border-black rounded-2xl shadow-md p-6 hover:scale-105 transition-transform text-center h-[30rem] w-full md:w-96">
      <h3 className="text-2xl font-bold text-black mb-4">STARTER</h3>
      <h3 className="text-xl font-bold text-black mb-4">3 Month Rental</h3>
      <p className="text-4xl font-bold text-black">
        ₹20,500 <span className="line-through text-gray-400 text-xl">₹25,000</span>
      </p>
      <p className="text-sm text-gray-600 mb-4">18% GST additional</p>
      <ul className="space-y-2 pl-4 text-black">
        <li>Wallet Minimum Recharge ₹10,000</li>
        <li>One Time Charge ₹3,000</li>
        <li>Delivered to DND Numbers</li>
        <li>Platform Rental ₹2,500/Per Month</li>
        <li>90 Days Validity of WABA Platform</li>
      </ul>
      <div className="p-8">
        <button
          type="submit"
          className="w-48 hover:bg-gray-200 border border-black font-semibold text-black py-2 px-4 transition duration-300"
        >
          Pay as You Go
        </button>
      </div>
    </div>
  </div>

  {/* Saver Pack */}
  
  <div className="flex items-center justify-center">
    <div className="bg-white border-4 border-purple-500 rounded-2xl shadow-md  hover:scale-105 transition-transform text-center h-[30rem] w-full md:w-96">
    <p className="p-3 text-center rounded-t-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-roboto  ">Most Recommended</p>
    <div className="">
      <h3 className="text-2xl font-bold text-black mb-4">POPULAR</h3>
      <h2 className="text-2xl font-bold text-black mb-4">1 Year Rental</h2>
      <p className="text-4xl font-bold text-black">
        ₹29,500 <span className="line-through text-gray-400 text-xl">₹45,000</span>
      </p>
      <p className="text-sm text-gray-600 mb-4">18% GST additional</p>
      <ul className="space-y-2 pl-4 text-black">
        <li>Wallet Minimum Recharge ₹10,000</li>
        <li>One Time Charge ₹1,500</li>
        <li>Delivered to DND Numbers</li>
        <li>Platform Rental ₹1,500/Per Month</li>
        <li>365 Days Validity of WABA Platform</li>
      </ul>
      <div className="p-8 ">
        <button
          type="submit"
          className="w-48 hover:bg-gray-200 border border-black font-semibold text-black py-2 px-4 transition duration-300"
        >
          Pay as You Go
        </button>
        </div>
      </div>
    </div>
  </div>

  {/* Super Saver Pack */}
  {/* You can add more pricing packs here */}
</div>




            <header className="text-center text-base py-10 bg-gradient-to-r bg-white to-black pt-32">
              <p className="text-gray-600">Note: Conversion rates are subject to change based on Meta current charges.

              </p>
              <h1 className="text-2xl font-light font-roboto  p-4 text-black">Conversion Charges</h1>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center pl-4 ">
  {/* Marketing */}
  <div className="text-center">
    <h2 className="mb-2 text-black">Marketing</h2>
    <FontAwesomeIcon icon={faChartLine} size="2x" style={{ color: "black" }} />
    <p className="text-gray-600 pb-10">0.78 Paise</p>
  </div>

  {/* Utility */}
  <div className="text-center">
    <h2 className="mb-2 text-black">Utility</h2>
    <FontAwesomeIcon icon={faTools} size="2x" style={{ color: "black" }} />
    <p className="text-gray-600 pb-10">0.34 Paise</p>
  </div>

  {/* Service */}
  <div className="text-center">
    <h2 className="mb-2 text-black">Service</h2>
    <FontAwesomeIcon icon={faHandsHelping} size="2x" style={{ color: "black" }} />
    <p className="text-gray-600 pb-10">0.33 Paise</p>
  </div>
</div>


          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
