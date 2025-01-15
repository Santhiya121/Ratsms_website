// import Footer from "../../app/components/footer";
// import Navbar from "../../app/components/Navbar";
// import SupportForm from "../../app/components/supportForm";
// import "../../app/globals.css";


// export default function DeveloperApi() {
//   return (
//     <>
//     <div className="bg-black">
//         <Navbar/>
//     </div>
//     <div className="bg-white py-10 mt-28">
//       <div className="container mx-auto space-y-10 p-10 ">
//         {/* Header Section */}
//         <div className="flex justify-between">
//             <div className="flex justify-center items-center pl-16">
//         <div className="text-center space-y-4 ">
//           <h1 className="text-5xl  font-roboto text-black p-4">Developer API</h1>

//           <h2 className="text-gray-900 text-xl w-[40rem] pl-4">
//             High-Delivery Rate Transactional Messaging
//           </h2>
//           <p className="text-gray-900 text-xl w-[40rem] pl-4 p-4 leading-relaxed">
//           Reliable, Secure, and scalable SMS APIs trusted by over 7000 developers

// Integrating any application in minutes with our feature rich SMS APIs

// Get 24/7 integration and support from our in-house team of experts.

// Access to APIs is free forever, pay only for SMS credits

// We support more than ten programming languages.

// Sample code of 10+ languages
//           </p>
        
         
//         </div>
//         </div>

//         {/* Form Section */}
//         <div className="bg-black">
//           <SupportForm/>
//         </div>
//         </div>

       

//         {/* What is Transactional SMS Section */}
//         <div className="bg-white p-8 rounded-lg shadow-2xl">
//           <h3 className="text-3xl font-bold text-gray-800 mb-6">One place for all your SMS needs</h3>
//           <p className="text-gray-900 mb-4">
//           Rat SMS offers flexible and easy adaptable SMS gateways that allow you to start sending SMS from your applications in minutes.  </p>
//           <p className="text-gray-900 mb-4">
//           We easily integrate any application with Secure, reliable, and Robust SMS APIs. </p>
//           <p className="text-gray-900 mb-4">
//           Our API Integrations are fast, flexible, and very scalable.     </p>
//           <p className="text-gray-900 mb-4">
//           Additionally, we integrate SMS receiving or missed call alerts, set up tiered accounts, and many more functionalities using a      single platform.
// </p>
// <p className="text-gray-900 mb-4">
// We offer a robust, scalable, and cloud-based infrastructure.</p> 
// <p className="text-gray-900 mb-4">
// Our SMS service integration allows you to send promotional or transactional SMS using web UI, APIs, Emails, or mobile applications.</p> 
// <p className="text-gray-900 mb-4">
// Our in-build redundancy provides near-zero downtime.</p> 
// <p className="text-gray-900 mb-4">
// Our services allow free access to APIs and pay only for the SMS credits.</p> 
// <p className="text-gray-900 mb-4">
// We integrate automated SMS services for your applications, website, or CRM using SMS APIs.</p>  

// <p className="text-gray-900 mb-4">
// We offer a dedicated technical support team for your services.</p> 
// <p className="text-gray-900 mb-4">
// Our experts are available 24/7 to assist you with the integration requirements.</p> 
// <p className="text-gray-900 mb-4">
// We offer customized integration services to meet your specialized business requirements.</p>  </div>
//       </div>
//     </div>
//     <Footer/>
//     </>
//   );
// }


import Footer from "../../app/components/footer";
import Navbar from "../../app/components/Navbar";
import SupportForm from "../../app/components/supportForm";
import "../../app/globals.css";

export default function DeveloperApi() {
  return (
    <>
      <div className="bg-black">
        <Navbar />
      </div>
      <div className="bg-white py-10 mt-28">
        <div className="container mx-auto space-y-10 p-10">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex justify-center items-center pl-16 md:pl-0 md:w-2/3">
              <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-roboto text-black p-4">
                  Developer API
                </h1>
                <h2 className="text-gray-900 text-xl pl-4 md:w-[40rem]">
                  High-Delivery Rate Transactional Messaging
                </h2>
                <p className="text-gray-900 text-xl pl-4 p-4 leading-relaxed md:w-[40rem]">
                  Reliable, Secure, and scalable SMS APIs trusted by over 7000 developers
                  Integrating any application in minutes with our feature rich SMS APIs
                  Get 24/7 integration and support from our in-house team of experts.
                  Access to APIs is free forever, pay only for SMS credits
                  We support more than ten programming languages.
                  Sample code of 10+ languages
                </p>
              </div>
            </div>

            {/* Form Section */}
            <div className="bg-black md:w-1/3 mt-10 md:mt-0">
              <SupportForm />
            </div>
          </div>

          {/* What is Transactional SMS Section */}
          <div className="bg-white p-8 rounded-lg shadow-2xl">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              One place for all your SMS needs
            </h3>
            <p className="text-gray-900 mb-4">
              Rat SMS offers flexible and easy adaptable SMS gateways that allow you to start sending SMS from your applications in minutes.
            </p>
            <p className="text-gray-900 mb-4">
              We easily integrate any application with Secure, reliable, and Robust SMS APIs.
            </p>
            <p className="text-gray-900 mb-4">
              Our API Integrations are fast, flexible, and very scalable.
            </p>
            <p className="text-gray-900 mb-4">
              Additionally, we integrate SMS receiving or missed call alerts, set up tiered accounts, and many more functionalities using a single platform.
            </p>
            <p className="text-gray-900 mb-4">
              We offer a robust, scalable, and cloud-based infrastructure.
            </p>
            <p className="text-gray-900 mb-4">
              Our SMS service integration allows you to send promotional or transactional SMS using web UI, APIs, Emails, or mobile applications.
            </p>
            <p className="text-gray-900 mb-4">
              Our in-build redundancy provides near-zero downtime.
            </p>
            <p className="text-gray-900 mb-4">
              Our services allow free access to APIs and pay only for the SMS credits.
            </p>
            <p className="text-gray-900 mb-4">
              We integrate automated SMS services for your applications, website, or CRM using SMS APIs.
            </p>
            <p className="text-gray-900 mb-4">
              We offer a dedicated technical support team for your services.
            </p>
            <p className="text-gray-900 mb-4">
              Our experts are available 24/7 to assist you with the integration requirements.
            </p>
            <p className="text-gray-900 mb-4">
              We offer customized integration services to meet your specialized business requirements.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
