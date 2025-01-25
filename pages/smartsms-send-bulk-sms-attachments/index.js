import Footer from "../../app/components/footer";
import Navbar from "../../app/components/Navbar";
import SupportForm from "../../app/components/supportForm";
import "../../app/globals.css";
import { FaLock, FaRegCreditCard, FaKey, FaUserShield, FaBullseye, FaEnvelope } from 'react-icons/fa';
import { FaFileImage, FaFileWord, FaFileExcel, FaFilePowerpoint, FaFileVideo, FaFilePdf, FaFileAudio } from "react-icons/fa";
import Head from "next/head";
import WhatsAppIcon from "../../app/components/whatsappIcon";

export default function SmartSmsBulkSMS() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Rat SMS is a bulk SMS provider with free SMS API India. We are Direct TeleCom operator Connectivity. Try our abundant smart SMS with 100% delivery & free DLT registration"
        />
        <meta
          name="keyword"
          content="smart sms, smart sms gateway, smart sms service, bulk sms, bulk sms service, bulk sms service provider, bulk sms provider, bulk sms services in india, bulk sms gateway, bulk sms india"
        />
        <link rel="canonical" href="https://ratsms.com/smartsms-send-bulk-sms-attachments" />
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
        <title>RAT SMS | SMART SMS</title>
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
            <div className="flex  items-center  sm:pl-16">
              <div className="   sm:text-left ">
                <h1 className="text-3xl sm:text-5xl font-roboto font-light text-black p-4 ">Smart SMS</h1>
                <p className="text-gray-900 text-lg sm:text-2xl w-full font-light sm:w-[30rem] pl-4">
                  SMS connects services all over the world. We offer outstanding service to wholesale clients in India.
                </p>
              </div>
            </div>

            {/* Form Section */}
            <div className="pt-10 sm:pt-1">
              <SupportForm />
            </div>
          </div>

          {/* File Attachments via Smart SMS Section */}
          <div className="bg-white p-6 ml-6 sm:p-8  space-y-6 mt-16">
            <h3 className="text-2xl sm:text-4xl font-roboto text-gray-800 mb-8">File Attachments via Smart SMS</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Rat SMS introduces <strong>Smart SMS</strong>, a powerful feature that combines faster announcements with advanced control over SMS campaigns, including targeting specific area codes. This service allows businesses to upload a contacts database, organize contacts into groups, manage blacklists, and create segmented lists for precision targeting.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Smart SMS supports file attachments, enabling you to include images, documents, and video URLs in your messages. This feature ensures quick delivery and allows you to track performance through geolocation-based reports, providing insights into delivery metrics, open rates, and engagement levels. Additionally, Smart SMS remembers the sender number used, ensuring consistency in communication with recipients.
            </p>
            <h4 className="text-xl font-roboto text-gray-800 mt-8 mb-4">How to Use Smart SMS Attachments for Your Business</h4>
            <ul className="list-disc pl-6 text-base sm:text-lg text-gray-900 mb-8">
              <li>Attach Files Easily: Send files under 10MB, such as images, documents, or video links, with your SMS.</li>
              <li>Boost Campaign Efficiency: Segment and target your audience for more impactful messaging.</li>
              <li>Track Success Metrics: Utilize geolocation reports to monitor message delivery and engagement.</li>
            </ul>
            <p className="text-base sm:text-lg text-gray-900 mt-4 mb-6">
              If you’re a Rat SMS customer, you can start exploring Smart SMS today by creating your first campaign. Follow these simple steps:
            </p>
            <ol className="list-decimal pl-6 text-base sm:text-lg text-gray-900 mb-8">
              <li>Navigate to the Smart SMS option in the top menu.</li>
              <li>Click Send Smart SMS and choose Compose SMS.</li>
              <li>Enter a campaign name.</li>
              <li>Select an approved Sender ID.</li>
              <li>Choose or upload your contact list.</li>
              <li>Write your message and attach files as needed.</li>
              <li>Hit Send to deliver your campaign.</li>
            </ol>
            <p className="text-base sm:text-lg text-gray-900 mt-6">
              With <strong>Smart SMS</strong>, you can send faster, more personalized, and impactful messages that stand out. Take control of your communication today!
            </p>
            <div className="bg-gray-100 p-6 mt-12 rounded-lg shadow-lg">
              <h5 className="text-base sm:text-lg font-roboto text-gray-800 mb-4">Additional Features</h5>
              <ul className="list-disc pl-6 text-base sm:text-lg text-gray-900">
                <li>Send files up to 10MB.</li>
                <li>Track geolocation-based performance.</li>
                <li>Customize SMS with media attachments.</li>
                <li>Streamlined user interface for easy navigation.</li>
              </ul>
            </div>
          </div>

          {/* File Formats Supported Section */}
          <div className="text-center ">
            <h4 className="text-xl font-roboto text-black mb-6">
              File Formats Supported
            </h4>
            <div className="grid grid-cols-7 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 justify-start">
              <div className="text-center">
                <FaFileImage className="text-4xl sm:text-7xl text-black mb-2" />
              </div>
              <div className="text-center ">
                <FaFileWord className="text-4xl sm:text-7xl text-black mb-2" />
              </div>
              <div className="text-center">
                <FaFileExcel className="text-4xl sm:text-7xl text-black mb-2" />
              </div>
              <div className="text-center">
                <FaFilePowerpoint className="text-4xl sm:text-7xl text-black mb-2" />
              </div>
              <div className="text-center">
                <FaFileVideo className="text-4xl sm:text-7xl text-black mb-2" />
              </div>
              <div className="text-center">
                <FaFilePdf className="text-4xl sm:text-7xl text-black mb-2" />
              </div>
              <div className="text-center">
                <FaFileAudio className="text-4xl sm:text-7xl text-black mb-2" />
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="pl-5 pt-10 pb-20">
            <h3 className="text-2xl font-roboto text-gray-800 text-left mt-20 mb-10">
              Features of Transactional SMS
            </h3>
            <div className="grid gap-20 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <FaLock className="text-black text-3xl" />,
                  title: "Secure Authentication",
                  description: "Share your PDF, PowerPoint SMS Using short links, whether it’s a weekly/monthly update, business performance report, or a simple product intro deck for quick review.",
                },
                {
                  icon: <FaRegCreditCard className="text-black text-3xl" />,
                  title: "Payment Verification",
                  description: "Attach PDF brochures to your bulk SMS campaigns and see response rates hit the roof!, you can send an SMS from Your saved numbers list, it will take by using the area code of the recipient.",
                },
                {
                  icon: <FaKey className="text-black text-3xl" />,
                  title: "High-Level Encryption",
                  description: "You can share audio files including .mp3 and .wav over SMS. Let your recipients listen to music or download songs or promotional audio clips in just a click..",
                },
                {
                  icon: <FaUserShield className="text-black text-3xl" />,
                  title: "OTP Triggering API",
                  description: "You can share video files using short links. Let your recipients watch your video or download video files or promotional video clips in just a click.",
                },
                {
                  icon: <FaBullseye className="text-black text-3xl" />,
                  title: "Guaranteed Delivery",
                  description: "Attach a PNG/JPEG in your SMS and convey more in 160 characters. You don’t worry about hosting and uploading them and generating short URLs – With the help of Rat SMS Team.",
                },
                {
                  icon: <FaEnvelope className="text-black text-3xl" />,
                  title: "Phone Number Verification",
                  description: "Can be combined with the PIN as OTP, used to verify the phone numbers of the users as primary identification.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white pb-6 w-full md:w-80 text-left space-y-4 border-b-2 border-gray-500 "
                >
                  <div className="flex flex-col  text-left">
                    <div className="mb-4">{feature.icon}</div>
                    <h4 className="text-xl font-light text-gray-800">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
