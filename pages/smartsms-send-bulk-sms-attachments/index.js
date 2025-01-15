import Footer from "../../app/components/footer";
import Navbar from "../../app/components/Navbar";
import SupportForm from "../../app/components/supportForm";
import "../../app/globals.css";
import { FaLock, FaRegCreditCard, FaKey, FaUserShield, FaBullseye, FaEnvelope } from 'react-icons/fa';

import { FaFileImage, FaFileWord, FaFileExcel, FaFilePowerpoint, FaFileVideo, FaFilePdf, FaFileAudio } from "react-icons/fa";

export default function SmartSmsBulkSMS() {
  return (
    <>
      <div className="bg-black">
        <Navbar />
      </div>
      <div className="bg-white py-10 mt-28">
        <div className="container mx-auto space-y-10 p-10">
          {/* Header Section */}
          <div className="flex justify-between">
            <div className="flex justify-center items-center pl-16">
              <div className="text-center space-y-4">
                <h1 className="text-5xl font-roboto text-black p-4">Smart SMS</h1>
                <p className="text-gray-900 text-xl w-[40rem] pl-4">
                  SMS connects services all over the world. We offer outstanding service to wholesale clients in India.
                </p>
              </div>
            </div>

            {/* Form Section */}
            <div className="bg-black">
              <SupportForm />
            </div>
          </div>

          {/* Features Section */}
         


         

          {/* File Attachments via Smart SMS Section */}
          <div className="bg-white p-8 mt-20 pt-32 rounded-lg shadow-lg">
  <h3 className="text-4xl font-bold text-gray-800 mb-8">File Attachments via Smart SMS</h3>
  
  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
    Rat SMS introduces <strong>Smart SMS</strong>, a powerful feature that combines faster announcements with advanced control over SMS campaigns, including targeting specific area codes. This service allows businesses to upload a contacts database, organize contacts into groups, manage blacklists, and create segmented lists for precision targeting.
  </p>
  
  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
    Smart SMS supports file attachments, enabling you to include images, documents, and video URLs in your messages. This feature ensures quick delivery and allows you to track performance through geolocation-based reports, providing insights into delivery metrics, open rates, and engagement levels. Additionally, Smart SMS remembers the sender number used, ensuring consistency in communication with recipients.
  </p>
  
  <h4 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">How to Use Smart SMS Attachments for Your Business</h4>
  <ul className="list-disc pl-6 text-lg text-gray-900 mb-8">
    <li><strong>Attach Files Easily</strong>: Send files under 10MB, such as images, documents, or video links, with your SMS.</li>
    <li><strong>Boost Campaign Efficiency</strong>: Segment and target your audience for more impactful messaging.</li>
    <li><strong>Track Success Metrics</strong>: Utilize geolocation reports to monitor message delivery and engagement.</li>
  </ul>
  
  <p className="text-lg text-gray-900 mt-4 mb-6">
    If you’re a Rat SMS customer, you can start exploring Smart SMS today by creating your first campaign. Follow these simple steps:
  </p>
  
  <ol className="list-decimal pl-6 text-lg text-gray-900 mb-8">
    <li>Navigate to the Smart SMS option in the top menu.</li>
    <li>Click Send Smart SMS and choose Compose SMS.</li>
    <li>Enter a campaign name.</li>
    <li>Select an approved Sender ID.</li>
    <li>Choose or upload your contact list.</li>
    <li>Write your message and attach files as needed.</li>
    <li>Hit Send to deliver your campaign.</li>
  </ol>
  
  <p className="text-lg text-gray-900 mt-6">
    With <strong>Smart SMS</strong>, you can send faster, more personalized, and impactful messages that stand out. Take control of your communication today!
  </p>
  
  <div className="bg-gray-100 p-6 mt-12 rounded-lg shadow-lg">
    <h5 className="text-xl font-semibold text-gray-800 mb-4">Additional Features</h5>
    <ul className="list-disc pl-6 text-lg text-gray-900">
      <li>Send files up to 10MB.</li>
      <li>Track geolocation-based performance.</li>
      <li>Customize SMS with media attachments.</li>
      <li>Streamlined user interface for easy navigation.</li>
    </ul>
  </div>
</div>


          <div className="text-center mt-8">
              <h4 className="text-2xl font-semibold text-black mb-6">
                File Formats Supported
              </h4>
              <div className="text-center mt-14">
  
  <div className="grid grid-cols-7 gap-1 justify-start">
    <div className="text-center">
      <FaFileImage className="text-7xl w-full text-black mb-2" />
    
    </div>
    <div className="text-center">
      <FaFileWord className="text-7xl w-full text-black mb-2" />
     
    </div>
    <div className="text-center">
      <FaFileExcel className="text-7xl w-full text-black mb-2" />
     
    </div>
    <div className="text-center">
      <FaFilePowerpoint className="text-7xl w-full text-black mb-2" />
      
    </div>
    <div className="text-center">
      <FaFileVideo className="text-7xl w-full text-black mb-2" />
      
    </div>
    <div className="text-center">
      <FaFilePdf className="text-7xl w-full text-black mb-2" />
      
    </div>
    <div className="text-center">
      <FaFileAudio className="text-7xl w-full text-black mb-2" />
      
    </div>
  </div>
</div>




<div className="pl-16 pt-20 pb-20">
  <h3 className="text-3xl font-bold text-gray-800 text-center mt-20 mb-10">
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
        className="bg-white pb-6 w-80 text-center space-y-4 border-b-2 border-gray-500 p-10"
      >
        <div className="flex flex-col items-start text-left">
          <div className="mb-4">{feature.icon}</div>
          <h4 className="text-xl font-semibold text-gray-800">{feature.title}</h4>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>

            </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
