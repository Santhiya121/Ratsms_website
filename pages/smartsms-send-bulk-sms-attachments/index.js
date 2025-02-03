import Footer from "../../app/components/footer";
import Navbar from "../../app/components/Navbar";
import SupportForm from "../../app/components/supportForm";
import "../../app/globals.css";
import { FaLock, FaRegCreditCard, FaKey, FaUserShield, FaBullseye, FaEnvelope } from 'react-icons/fa';
import { FaFileImage, FaFileWord, FaFileExcel, FaFilePowerpoint, FaFileVideo, FaFilePdf, FaFileAudio } from "react-icons/fa";
import Head from "next/head";
import WhatsAppIcon from "../../app/components/whatsappIcon";
import Phone from "../../app/components/phone";

export default function SmartSmsBulkSMS() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="SmartSMS lets you send bulk SMS with attachments seamlessly. Enhance your messaging campaigns by including media files, images, and pdf and more with ease.
"
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
        <title>SmartSMS – Send Bulk SMS with Attachments Effortlessly
        </title>
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
            <div className="flex  items-center  sm:pl-16">
              <div className="   sm:text-left ">
                <h1 className="text-2xl sm:text-5xl font-roboto font-light text-black p-4 ">Smart SMS</h1>
                <p className="text-gray-900 text-sm sm:text-lg tracking-widest w-full font-light sm:w-[30rem] pl-4">
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
          <div className="bg-gradient-to-r from-blue-50 to-white p-6 ml-6 sm:p-8 space-y-6 mt-16 sm:px-16 rounded-xl shadow-2xl">
  
 
  <div className="text-center sm:text-left bg-white p-6 rounded-lg shadow-md mb-8">
    <h3 className="text-xl sm:text-2xl font-roboto text-gray-800 mb-4 border-b-2 border-blue-300 pb-2 flex items-center justify-center sm:justify-start">
      <i class="fas fa-paperclip text-blue-600 mr-3"></i>File Attachments via Smart SMS
    </h3>
    <p className="text-lg text-gray-700 leading-relaxed text-justify">
      Rat SMS introduces <strong className="text-blue-600">Smart SMS</strong>, a powerful feature that combines faster announcements with advanced control over SMS campaigns, including targeting specific area codes. This service allows businesses to upload a contacts database, organize contacts into groups, manage blacklists, and create segmented lists for precision targeting.
    </p>
    <p className="text-lg text-gray-700 leading-relaxed text-justify mt-6">
      Smart SMS supports file attachments, enabling you to include images, documents, and video URLs in your messages. This feature ensures quick delivery and allows you to track performance through geolocation-based reports, providing insights into delivery metrics, open rates, and engagement levels. Additionally, Smart SMS remembers the sender number used, ensuring consistency in communication with recipients.
    </p>
  </div>


  <div className="bg-white p-6 rounded-lg shadow-md mb-8">
    <h4 className="text-xl sm:text-2xl font-roboto text-gray-800 mb-4 border-b-2 border-blue-300 pb-2 flex items-center justify-center sm:justify-start">
      <i class="fas fa-cogs text-blue-600 mr-3 "></i>How to Use Smart SMS Attachments for Your Business
    </h4>
    <ul className=" pl-6 text-base sm:text-lg text-gray-900 mb-8 space-y-2">
      <li><i class="fas fa-check-circle text-blue-600 mr-2"></i><strong className="text-blue-600">Attach Files Easily:</strong> Send files under 10MB, such as images, documents, or video links, with your SMS.</li>
      <li><i class="fas fa-bullhorn text-blue-600 mr-2"></i><strong className="text-blue-600">Boost Campaign Efficiency:</strong> Segment and target your audience for more impactful messaging.</li>
      <li><i class="fas fa-map-marker-alt text-blue-600 mr-2"></i><strong className="text-blue-600">Track Success Metrics:</strong> Utilize geolocation reports to monitor message delivery and engagement.</li>
    </ul>
  </div>


  <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
    <p className="text-base sm:text-lg text-gray-900 mt-4 mb-6">
      If you’re a Rat SMS customer, you can start exploring Smart SMS today by creating your first campaign. Follow these simple steps:
    </p>
    <ol className="pl-6 text-base sm:text-lg text-gray-900 mb-8 space-y-2">
      <li><i class="fas fa-arrow-right text-blue-600 mr-2"></i>Navigate to the Smart SMS option in the top menu.</li>
      <li><i class="fas fa-edit text-blue-600 mr-2"></i>Click <strong className="text-blue-600">Send Smart SMS</strong> and choose Compose SMS.</li>
      <li><i class="fas fa-tag text-blue-600 mr-2"></i>Enter a campaign name.</li>
      <li><i class="fas fa-id-badge text-blue-600 mr-2"></i>Select an approved Sender ID.</li>
      <li><i class="fas fa-users text-blue-600 mr-2"></i>Choose or upload your contact list.</li>
      <li><i class="fas fa-pencil-alt text-blue-600 mr-2"></i>Write your message and attach files as needed.</li>
      <li><i class="fas fa-paper-plane text-blue-600 mr-2"></i>Hit <strong className="text-blue-600">Send</strong> to deliver your campaign.</li>
    </ol>
  </div>


  <div className="bg-white p-6 mt-12 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-100">
    <h5 className="text-base sm:text-lg font-roboto text-gray-800 mb-4 border-b-2 border-blue-300 pb-2 flex items-center">
      <i class="fas fa-star text-blue-600 mr-3"></i>Additional Features
    </h5>
    <ul className=" pl-6 text-base sm:text-lg text-gray-900 space-y-2">
      <li><i class="fas fa-upload text-blue-600 mr-2"></i>Send files up to 10MB.</li>
      <li><i class="fas fa-location-arrow text-blue-600 mr-2"></i>Track geolocation-based performance.</li>
      <li><i class="fas fa-images text-blue-600 mr-2"></i>Customize SMS with media attachments.</li>
      <li><i class="fas fa-th-large text-blue-600 mr-2"></i>Streamlined user interface for easy navigation.</li>
    </ul>
  </div>


  <div className="bg-gradient-to-r from-green-50 to-white p-6 mt-12 rounded-lg shadow-md">
    <p className="text-sm sm:text-lg text-gray-900 mt-6 sm:flex sm:items-center items-start ">
      <i class="fas fa-check-circle text-green-600 mr-3"></i>With <strong className="text-blue-600">Smart SMS</strong>, you can send faster, more personalized, and impactful messages that stand out. Take control of your communication today!
    </p>
  </div>
</div>




          {/* File Formats Supported Section */}
          <div className="text-center  bg-gray-50 pt-10 px-20 ">
  <h4 className="text-xl font-roboto text-black mb-10">
    File Formats Supported
  </h4>
  <div className="grid grid-cols-7 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-8 ">
   
    <div className="text-center bg-white p-6 sm:rounded-lg sm:shadow-2xl transform hover:scale-110 transition duration-300 ease-in-out">
      <FaFileImage className="text-sm sm:text-7xl text-black mb-2" />
  
    </div>
   
    <div className="text-center bg-white p-6 rounded-lg shadow-2xl transform hover:scale-110 transition duration-300 ease-in-out">
      <FaFileWord className="text-sm sm:text-7xl text-black mb-2" />
     
    </div>
    
    <div className="text-center bg-white p-6 rounded-lg shadow-2xl transform hover:scale-110 transition duration-300 ease-in-out">
      <FaFileExcel className="text-sm sm:text-7xl text-black mb-2" />
    
    </div>
   
    <div className="text-center bg-white p-6 rounded-lg shadow-2xl transform hover:scale-110 transition duration-300 ease-in-out">
      <FaFilePowerpoint className="text-sm sm:text-7xl text-black mb-2" />
    
    </div>
  
    <div className="text-center bg-white p-6 rounded-lg shadow-2xl transform hover:scale-110 transition duration-300 ease-in-out">
      <FaFileVideo className="text-sm sm:text-7xl text-black mb-2" />

    </div>

    <div className="text-center bg-white p-6 rounded-lg shadow-2xl transform hover:scale-110 transition duration-300 ease-in-out">
      <FaFilePdf className="text-sm sm:text-7xl text-black mb-2" />
      
    </div>
 
    <div className="text-center bg-white p-6 rounded-lg shadow-2xl transform hover:scale-110 transition duration-300 ease-in-out">
      <FaFileAudio className="text-sm sm:text-7xl text-black mb-2" />
   
    </div>
  </div>
</div>


          {/* Features Section */}
          <div className="pl-5 pt-10 pb-20 sm:pl-20">
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
