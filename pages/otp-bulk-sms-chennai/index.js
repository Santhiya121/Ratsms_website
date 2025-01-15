import Footer from "../../app/components/footer";
import Navbar from "../../app/components/Navbar";
import SupportForm from "../../app/components/supportForm";
import "../../app/globals.css";
import { FaCheckCircle, FaClock, FaChartBar, FaHeadset, FaShieldAlt } from "react-icons/fa";

export default function OtpBulkSMS() {
  return (
    <>
    <div className="bg-black">
        <Navbar/>
    </div>
    <div className="bg-white py-10 mt-28">
      <div className="container mx-auto space-y-10 p-10 ">
        {/* Header Section */}
        <div className="flex justify-between">
            <div className="flex justify-center items-center pl-16">
        <div className="text-center space-y-4 ">
          <h1 className="text-5xl  font-roboto text-black p-4">OTP Bulk SMS</h1>
          
          <p className="text-gray-900 text-xl w-[40rem] pl-4">
          SMS connects services all over the world. We offer outstanding service to wholesale clients in India
          </p>
          
        </div>
        </div>

        {/* Form Section */}
        <div className="bg-black">
          <SupportForm/>
        </div>
        </div>

        {/* Features Section */}
        <div className="pl-16 pt-10 pb-20">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Features of Transactional SMS
          </h3>
          <div className="grid gap-20 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <FaCheckCircle className="text-black text-3xl" />,
                title: "Authentication",
                description: "Instead of using usernames and passwords, it is safe to use OTP as an opening key.",
              },
              {
                icon: <FaClock className="text-black text-3xl" />,
                title: "Payment confirmation",
                description: "While paying online for credit cards and other bank purposes, issuers prefer Otps for security reasons from the receiver.",
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
                icon: <FaShieldAlt className="text-black text-3xl" />,
                title: "Deliverable",
                description: "As usual, 100% deliverable and also live report can be downloaded..",
              },
              {
                icon: <FaShieldAlt className="text-black text-3xl" />,
                title: "Verification",
                description: "Can be combined with the PIN as OTP, used to verify the phone numbers of the users as primary identification.",
              },
            ].map((feature, index) => (
                <div
                key={index}
                className="bg-white  pb-6 w-80 text-center space-y-4 border-b-2 border-gray-500 p-10 "
              >
                <div className="flex flex-col items-start text-left ">
                  <div className="mb-4">{feature.icon}</div>
                  <h4 className="text-xl font-semibold text-gray-800">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
              
            ))}
          </div>
        </div>

        {/* What is Transactional SMS Section */}
        <div className="bg-white p-8 rounded-lg shadow-2xl">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">What is Transactional SMS?</h3>
          <p className="text-gray-700 mb-4">
            According to TRAI regulations, SMS sent by commercial entities are classified into Promotional Bulk SMS and Transactional Bulk SMS.
          </p>
          <p className="text-gray-700 mb-4">
            Transactional SMS are related to transactions or actions such as order confirmations, payment receipts, delivery confirmations, appointment reminders, and more.
          </p>
          <p className="text-gray-700 mb-4">
            Transactional SMS allows you to send the right information at the right time to your customers’ smartphones, creating a strong customer rapport and improving loyalty.
          </p>
          <p className="text-gray-700">
            As a well-known transactional SMS gateway provider in Chennai, RatSMS ensures top-notch services with intelligent routing technology and unmatched delivery speeds.
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
