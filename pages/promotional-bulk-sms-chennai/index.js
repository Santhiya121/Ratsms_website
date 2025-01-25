import Footer from "../../app/components/footer";
import Navbar from "../../app/components/Navbar";
import SupportForm from "../../app/components/supportForm";
import WhatsAppIcon from "../../app/components/whatsappIcon";
import "../../app/globals.css";
import Head from 'next/head';
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
   
    <div className="bg-white ">
      <div className=" p-5 sm:p-2">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between">
            <div className="flex  items-center sm:pl-16">
        <div className="  sm:text-left  ">
          <h1 className="text-3xl sm:text-5xl font-roboto font-light text-black p-4 ">
            Promotional Bulk SMS
          </h1>
          <p className="text-gray-900 text-lg sm:text-2xl w-full font-light sm:w-[30rem] pl-4">
            Boost your business with affordable bulk SMS services in Chennai. Reach your audience quickly & effectively.
          </p>
          
        </div>
        </div>

        {/* Contact Form */}
        <div className="pt-10 sm:pt-1">
          <SupportForm/>
        </div>
        </div>

        {/* Features Section */}
        <div className="bg-white p-6 ml-6 sm:p-8  space-y-6 mt-16">
          <h2 className="text-2xl sm:text-4xl text-gray-800">Features of Promotional SMS</h2>
          <ul className="list-disc pl-6 text-base sm:text-lg space-y-3 text-gray-600">
            <li><strong>Complete Language Support:</strong> Unicode allows you to deliver messages in every language in the world.</li>
            <li><strong>24/7 Delivery:</strong> Your messages will be delivered round the clock with unmatched delivery rates & speed, even to DND numbers.</li>
            <li><strong>Best Delivery Rates:</strong> Automated SMS campaigns are sent with a speed of 200-500 messages per second.</li>
            <li><strong>Well-documented APIs:</strong> Use our Universal REST APIs to integrate text messages into your apps, website, software, application, status updates, etc.</li>
            <li><strong>GSM & CDMA Support:</strong> Send SMS to subscribers with mobile operators that use the GSM and CDMA standards.</li>
            <li><strong>Detailed Reporting:</strong> Clear and detailed reporting on the status of every single SMS.</li>
            <li><strong>SMS Personalization:</strong> Add the recipient’s name, offer loyalty program bonuses, give a discount as a gift for a subscriber’s birthday, and more.</li>
            <li><strong>Statistics and Analytics:</strong> Measure the effectiveness of your SMS campaign by tracking delivery rates.</li>
            <li><strong>API Support for Developers:</strong> Compatible with popular development platforms like C#, PHP, and VB.NET Async APIs.</li>
          </ul>
        </div>

        {/* Informational Section */}
        <div className="space-y-6 mt-10">
          <h2 className="text-2xl sm:text-4xl text-gray-800">What is Promotional SMS?</h2>
          <p className="text-gray-600 text-base sm:text-lg">
            A promotional SMS is a message sent by a brand to prospects and customers informing them about promotions, discounts, offers, or flash sales on new products. Marketers use these campaigns to increase customer engagement and drive sales.
          </p>
          <p className="text-gray-600 text-base sm:text-lg">
            RatSMS allows you to create branded subscription forms, automate SMS sending, and personalize the messages for better performance. Promotional SMS should be sent between 9 am and 9 pm to opt-in and non-DND numbers.
          </p>
        </div>

        {/* How to Send Section */}
        <div className="space-y-6 mt-10">
          <h2 className="text-xl sm:text-2xl text-gray-800">How to Send a Promotional SMS Campaign</h2>
          <ol className="list-decimal pl-6 text-base sm:text-lg space-y-3 text-gray-600">
            <li>Register with Rat SMS.</li>
            <li>Pick your pricing plan.</li>
            <li>Upload contacts.</li>
            <li>Create a promotional SMS campaign.</li>
            <li>Send SMS | Receive enquiries | Convert your Sales.</li>
          </ol>
        </div>

        {/* Pricing Section */}
        <div className="space-y-6 mt-10">
          <h2 className="text-xl sm:text-2xl text-gray-800">What is the Price for Sending Promotional SMS?</h2>
          <p className="text-gray-600">
            The price depends on your volume. For more details, check our pricing for promotional SMS services in Chennai.
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
