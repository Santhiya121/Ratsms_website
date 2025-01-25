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
import WhatsAppIcon from "../../app/components/whatsappIcon";
import "../../app/globals.css";
import Head from "next/head";

export default function DeveloperApi() {
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
          content="developer api, postman api, twilio developer, api, sms api, whatsapp api, api gateway, postman, twilio api, whatsapp api send message, apis, twilio whatsapp, nexmo sms, vonage api, send sms api, twilio sms api"
        />
        <link rel="canonical" href="https://ratsms.com/developer-api" />
        <meta property="og:site_name" content="RATSMS" />
        <meta property="og:url" content="https://ratsms.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RAT SMS : Bulk SMS Service Provider" />
        <meta
          name="og:image"
          content="https://ratsms.com/images/assets/ratsms-icon.png"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#655C97" />
        <meta name="msapplication-navbutton-color" content="#655C97" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
        <title>RAT SMS | Developer API</title>
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
            <div className="bg-gray-50 ">
  <div className="container mx-auto space-y-16 px-4">
    {/* Header Section */}
    <div className="flex flex-col md:flex-row justify-between items-center">
      {/* Text Section */}
      <div className="flex flex-col w-auto sm:w-[50rem] space-y-4 text-left p-4 sm:p-16">
        <h1 className="text-3xl md:text-5xl font-roboto text-black leading-tight flex items-center">
           Developer API
        </h1>
        <h2 className="text-gray-800 text-base sm:text-xl">
          <i className="fas fa-bolt text-yellow-500 mr-2 "></i> High-Delivery Rate Transactional Messaging
        </h2>
        <p className="text-gray-700 text-base sm:text-xl leading-relaxed">
          Reliable, secure, and scalable SMS APIs trusted by over 7,000 developers. Integrate any application in minutes with our feature-rich SMS APIs. Enjoy 24/7 integration and support from our in-house team of experts. Access APIs for free forever, and only pay for SMS credits. We support 10+ programming languages with sample code!
        </p>
      
      </div>

      {/* Form Section */}
      <div className="w-full md:w-auto mr-10 ">
        <div className=" p-8 transition-shadow duration-300">
          <SupportForm />
        </div>
      </div>
    </div>

    {/* Feature Section */}
    <div className=" p-4 sm:p-16 ">
      <h2 className="text-lg sm:text-3xl font-bold text-gray-800 mb-8 flex items-center">
        Why Choose Our SMS APIs?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start">
          <i className="fas fa-exchange-alt text-black text-2xl mr-4"></i>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Flexible SMS Gateways</h3>
            <p className="text-gray-700">
              Start sending SMS from your applications in minutes with our adaptable SMS gateways.
            </p>
          </div>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start">
          <i className="fas fa-rocket text-black text-2xl mr-4"></i>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Fast Integration</h3>
            <p className="text-gray-700">
              Integrate any application with secure, reliable, and robust SMS APIs in no time.
            </p>
          </div>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start">
          <i className="fas fa-cloud text-black text-2xl mr-4"></i>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Cloud-Based Infrastructure</h3>
            <p className="text-gray-700">
              Enjoy robust, scalable, and cloud-based infrastructure with near-zero downtime.
            </p>
          </div>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start">
          <i className="fas fa-lock text-black text-2xl mr-4"></i>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Free API Access</h3>
            <p className="text-gray-700">
              Get free API access forever and pay only for the SMS credits you use.
            </p>
          </div>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start">
          <i className="fas fa-cogs text-black text-2xl mr-4"></i>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Automated SMS Services</h3>
            <p className="text-gray-700">
              Automate SMS services for your applications, website, or CRM using our APIs.
            </p>
          </div>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start">
          <i className="fas fa-headset text-black text-2xl mr-4"></i>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">24/7 Support</h3>
            <p className="text-gray-700">
              Access our dedicated technical support team anytime to meet your integration needs.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Testimonials Section */}
    
    {/* CTA Section */}
   
  </div>
</div>


 
      <Footer />
    </>
  );
}
