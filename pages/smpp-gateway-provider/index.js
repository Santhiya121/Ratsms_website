import React from "react";
import "../../app/globals.css";
import Navbar from "../../app/components/Navbar";
import Link from "next/link";
import Footer from "../../app/components/footer";

export default function Smpp() {
  return (
    <>
    <div className="bg-black">
      <Navbar />
      </div>
      {/* Main Section */}
      <div className="bg-white text-black mt-28 h-screen">
        <div className="flex flex-col md:flex-row items-center justify-between px-6 py-10">
          {/* Left Content Section */}
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-4xl pl-16 text-black font-light">
              SMPP Gateway Provider
            </h1>
            <p className="text-xl pl-16 text-black font-light">
              The SMPP Gateway gets high preference due to the high-volume SMS
              traffic between ESME and SMPP server. The primary use of SMPP is
              sending and receiving SMS in medium to high volumes. SMPP uses a
              standard Internet connection to connect to an SMPP provider, to do
              away with or complete the purchase of a GSM modem or a SIM card.
            </p>
            <ul className=" pl-16 text-black text-xl font-light ">
              <li>
                Send by a meaningful name, a company name instead of a
                phone number.
              </li>
              <li>
                Send short-codes: 3, 4, or 5 digits of the phone number instead
                of the normal length.
              </li>
            </ul>
            <p className="pl-16 text-black text-xl font-light">
              When it comes to RAT SMS, we are aware of the process of making
              the developer stronger and well-renowned in the market. We have
              our decade-long experience, which we have arranged for the SMPP
              gateway API for developers and re-sellers.<Link
              href="#"
              className="font-light text-xl text-[#003bff] underline"
            >
              check out the sms api
            </Link>
            </p>
           
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
            <img
              src="/videos/smpp.gif"
              alt="SMPP Gateway Illustration"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Additional Content Section */}
      <div className="bg-black px-6 py-10 h-lvh">
        <h2 className="text-4xl font-light text-white h-auto pl-16">
          RAT SMS as an SMPP Service Provider
        </h2>
        <p className="mt-10 pl-16 w-[70rem] text-xl font-light">
          RAT SMS SMPP application makes sure of the rapid delivery of messages
          without fail. The Short Message Peer-to-Peer protocol uses a
          client-server application that is successful worldwide.
        </p>
        <p className="mt-10 pl-16 w-[70rem] text-xl font-light">
          Other messaging systems send a maximum of up to 20 messages/second,
          whereas through SMPP, RAT SMS can send up to 1000 messages/second. It
          supports Unicode messaging, binary and plain texts along with the
          extended length text SMS.
        </p>
        
        <ul className="mt-10 pl-16 w-[70rem] text-xl font-light">
          <li>
            Multiple Operator Connectivity for redundancy and faster delivery.
          </li>
          <li>Load Balancing capability for maximum uptime.</li>  <Link
          href="#"
          className="text-xl font-light  hover:text-gray-500"
        >
          Learn more about Bulk SMS Gateway
        </Link>
        </ul>
       
      </div>
      <div className="bg-white px-6 py-10 text-black">
  <h2 className="text-4xl font-light text-black pl-16">
    Features of SMPP Gateway
  </h2>
  <div className="flex items-center justify-center">
  <div className="bg-white px-8 py-12 text-gray-800 rounded-lg shadow-lg">
  
  <ul className="list-disc pl-8 space-y-4 text-lg">
    <li className="hover:text-blue-600 transition duration-300">
      <span className="font-medium">Unmatched delivery speed:</span> Direct connection to carriers.
    </li>
    <li className="hover:text-blue-600 transition duration-300">
      TPS – <span className="font-medium">1000 SMS delivered per second</span> through our SMPP.
    </li>
    <li className="hover:text-blue-600 transition duration-300">
      SMPP offers <span className="font-medium">status delivery reports</span>.
    </li>
    <li className="hover:text-blue-600 transition duration-300">
      <span className="font-medium">24/7 support</span> via our support system.
    </li>
    <li className="hover:text-blue-600 transition duration-300">
      Domestic and International <span className="font-medium">SMS Piping</span>.
    </li>
    <li className="hover:text-blue-600 transition duration-300">
      <span className="font-medium">Transactional, Promotional, and OTP</span> SMS paths.
    </li>
    <li className="hover:text-blue-600 transition duration-300">
      <span className="font-medium">Load Balancing</span> for better traffic management.
    </li>
    <li className="hover:text-blue-600 transition duration-300">
      <span className="font-medium">Dynamic Routing</span>.
    </li>
    <li className="hover:text-blue-600 transition duration-300">
      <span className="font-medium">Percentage-wise Delivery Routing</span>.
    </li>
    <li className="hover:text-blue-600 transition duration-300">
      <span className="font-medium">Direct Delivery Routing</span>.
    </li>
    <li className="hover:text-blue-600 transition duration-300">
      <span className="font-medium">Distributed Delivery Routing</span>.
    </li>
    <li className="hover:text-blue-600 transition duration-300">
      <span className="font-medium">Spam Filtering</span>.
    </li>
    <li className="hover:text-blue-600 transition duration-300">
      <span className="font-medium">Message Encryption/Decryption API</span>.
    </li>
  </ul>
</div>

</div>
</div>
<Footer/>

    </>
  );
}
