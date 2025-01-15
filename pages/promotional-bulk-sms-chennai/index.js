import Footer from "../../app/components/footer";
import Navbar from "../../app/components/Navbar";
import SupportForm from "../../app/components/supportForm";
import "../../app/globals.css";

export default function PromotionalBulkSMS() {
  return (
    <>
    <div className="bg-black">
    <Navbar/>
    </div>
   
    <div className="bg-gray-50 py-10 mt-28">
      <div className="container mx-auto px-6 md:px-20">
        {/* Header Section */}
        <div className="flex justify-between ">
            <div className="flex justify-center items-center">
        <div className=" mb-10 ">
          <h1 className="text-5xl  font-roboto text-black p-4">
            Promotional Bulk SMS
          </h1>
          <p className="text-gray-900 text-xl w-[40rem] pl-4">
            Boost your business with affordable bulk SMS services in Chennai. Reach your audience quickly & effectively.
          </p>
          
        </div>
        </div>

        {/* Contact Form */}
        <div className="bg-black">
          <SupportForm/>
        </div>
        </div>

        {/* Features Section */}
        <div className="space-y-8 pt-20">
          <h2 className="text-3xl font-bold text-gray-800">Features of Promotional SMS</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
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
          <h2 className="text-2xl font-bold text-gray-800">What is Promotional SMS?</h2>
          <p className="text-gray-600">
            A promotional SMS is a message sent by a brand to prospects and customers informing them about promotions, discounts, offers, or flash sales on new products. Marketers use these campaigns to increase customer engagement and drive sales.
          </p>
          <p className="text-gray-600">
            RatSMS allows you to create branded subscription forms, automate SMS sending, and personalize the messages for better performance. Promotional SMS should be sent between 9 am and 9 pm to opt-in and non-DND numbers.
          </p>
        </div>

        {/* How to Send Section */}
        <div className="space-y-6 mt-10">
          <h2 className="text-2xl font-bold text-gray-800">How to Send a Promotional SMS Campaign</h2>
          <ol className="list-decimal pl-6 space-y-3 text-gray-600">
            <li>Register with Rat SMS.</li>
            <li>Pick your pricing plan.</li>
            <li>Upload contacts.</li>
            <li>Create a promotional SMS campaign.</li>
            <li>Send SMS | Receive enquiries | Convert your Sales.</li>
          </ol>
        </div>

        {/* Pricing Section */}
        <div className="space-y-6 mt-10">
          <h2 className="text-2xl font-bold text-gray-800">What is the Price for Sending Promotional SMS?</h2>
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
