import Footer from "../../app/components/footer";
import Navbar from "../../app/components/Navbar";
import "../../app/globals.css";

export default function PrivacyPolicy() {
  return (
    <>
      <div className="bg-black">
        <Navbar />
      </div>
      <div className="bg-gray-100 py-10 mt-28">
        <div className="container mx-auto space-y-10 p-10">
          {/* Header Section */}
          <div className="flex justify-center items-center">
            <h1 className="text-6xl font-extralight text-gray-800 font-roboto p-4">
              Privacy Policy
            </h1>
          </div>

          {/* Introduction Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">
              Welcome to RatSMS Privacy Policy
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Your privacy is of utmost importance to us. This document explains
              how we collect, use, and safeguard your information when you use
              our services. By accessing or using our website, you agree to the
              practices outlined in this policy.
            </p>
          </div>

          {/* Definitions Section */}
          <div className="bg-gray-200 p-8 rounded-lg shadow-lg space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">Definitions</h2>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Personal Data:</strong> Information that can identify an
                individual, such as a name, email address, or phone number.
              </li>
              <li>
                <strong>Usage Data:</strong> Information automatically collected
                about your interactions with our services, such as browser type,
                IP address, and time spent on pages.
              </li>
              <li>
                <strong>Cookies:</strong> Small data files stored on your device
                to enhance your browsing experience.
              </li>
            </ul>
          </div>

          {/* Data Collection Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
            <h3 className="text-3xl font-semibold text-gray-800">
              How We Collect Data
            </h3>
            <p className="text-gray-700">
              We collect data in the following ways:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Directly:</strong> When you fill out forms, register for
                an account, or communicate with us.
              </li>
              <li>
                <strong>Automatically:</strong> Through cookies, tracking
                technologies, and usage data.
              </li>
            </ul>
          </div>

          {/* Data Usage Section */}
          <div className="bg-gray-200 p-8 rounded-lg shadow-lg space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">Data Usage</h3>
            <p className="text-gray-700">
              We use your data for various purposes, including:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>Providing and improving our services.</li>
              <li>Responding to customer inquiries.</li>
              <li>Sending notifications about updates and offers.</li>
              <li>Complying with legal obligations.</li>
            </ul>
          </div>

          {/* Security Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
            <h3 className="text-3xl font-semibold text-gray-800">
              Data Security
            </h3>
            <p className="text-gray-700">
              We implement industry-standard measures to protect your data,
              including:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>Encryption of sensitive information.</li>
              <li>Regular security audits and updates.</li>
              <li>
                Access control to ensure only authorized personnel can view
                data.
              </li>
            </ul>
          </div>

          {/* Rights Section */}
          <div className="bg-gray-200 p-8 rounded-lg shadow-lg space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">
              Your Rights
            </h3>
            <p className="text-gray-700">
              You have the following rights regarding your data:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Access:</strong> Request a copy of the data we hold
                about you.
              </li>
              <li>
                <strong>Correction:</strong> Request corrections to inaccurate
                or incomplete data.
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your data under
                certain circumstances.
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
            <h3 className="text-3xl font-semibold text-gray-800">
              Contact Us
            </h3>
            <p className="text-gray-700">
              If you have any questions or concerns about this Privacy Policy,
              feel free to contact us at:
            </p>
            <ul className="list-none space-y-4 text-gray-700">
              <li>
                <strong>Email:</strong> support@ratsms.com
              </li>
              <li>
                <strong>Phone:</strong> +91-1234567890
              </li>
              <li>
                <strong>Address:</strong> Astalakshmi Apartment, Old No – 11,
                Flat No – 17, 2nd Floor, Mahatma Gandhi Rd, Adyar, Chennai,
                Tamil Nadu 600041.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
