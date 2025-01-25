// import React from "react";
// import "../../app/globals.css";
// import Navbar from "../../app/components/Navbar";
// import Footer from "../../app/components/footer";

// export default function BulkSMSPage() {
//     const products = [
//         { title: "Promotional SMS", description: "Enhance your brand visibility with our promotional SMS services.", link: "#" },
//         { title: "Transactional SMS", description: "Send secure and reliable transactional messages instantly.", link: "#" },
//         { title: "OTP SMS", description: "Ensure secure user authentication with our OTP SMS services.", link: "#" },
//         { title: "Service Implicit", description: "Deliver critical updates and notifications to your users.", link: "#" },
//         { title: "Service Explicit", description: "Get user consent for communications with explicit service SMS.", link: "#" },
//     ];

//     return (
//         <>
//         <div className="bg-black">
//             <Navbar/>
//         </div>
//         <div className="bg-gray-50 py-10 mt-14">
//             <div className="container mx-auto px-4">
//                 <header className="mb-8 pl-16">
//                     <h1 className="text-4xl font-roboto text-black mb-4">Bulk SMS Gateway Aggregator</h1>
//                     <p className="text-gray-900 text-xl w-[70rem] ">
//                         An SMS gateway is a way to send text messages from websites or applications to mobile subscribers for alert notifications. Explore our secure, scalable, and cost-effective bulk SMS solutions.
//                     </p>
//                 </header>

//                 <section className="mb-10 pl-16">
//                     <h2 className="text-2xl font-roboto text-black mb-4">Why Choose Us?</h2>
//                     <ul className="list-disc list-inside text-gray-900 space-y-2 text-xl font-roboto">
//                         <li>Direct operator connectivity with one of the top SMS gateways in India.</li>
//                         <li>Customizable bulk SMS routes for promotional and transactional purposes.</li>
//                         <li>Secure SMS gateways trusted by leading banks.</li>
//                         <li>Best-in-class SMS delivery with competitive market pricing.</li>
//                     </ul>
//                 </section>

//                 <section>
//                     <h2 className="text-2xl font-semibold text-gray-800 mb-6 pl-16">Our Products</h2>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pl-16">
//                         {products.map((product, index) => (
//                             <div key={index} className="bg-white rounded-lg shadow-md p-6">
//                                 <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
//                                 <p className="text-gray-600 mb-4">{product.description}</p>
//                                 <button
//           type="submit"
//           className="w-48  hover:bg-white border-2 border-black  font-semibold text-black py-2 px-4  transition duration-300"
//         >
//           Learn More
//         </button>
//                             </div>
//                         ))}
//                     </div>
//                 </section>

//                 <footer className="mt-10 text-center">
//                     <p className="text-gray-600 text-sm">&copy; 2025 Rat SMS. All rights reserved.</p>
//                 </footer>
//             </div>
//         </div>
//         <Footer/>
//         </>
//     );
// }


import React from "react";
import "../../app/globals.css";
import Navbar from "../../app/components/Navbar";
import Footer from "../../app/components/footer";
import Head from "next/head"; 
import WhatsAppIcon from "../../app/components/whatsappIcon";

export default function BulkSMSPage() {
    const products = [
        { title: "Promotional SMS", description: "Enhance your brand visibility with our promotional SMS services.", link: "#" },
        { title: "Transactional SMS", description: "Send secure and reliable transactional messages instantly.", link: "#" },
        { title: "OTP SMS", description: "Ensure secure user authentication with our OTP SMS services.", link: "#" },
        { title: "Service Implicit", description: "Deliver critical updates and notifications to your users.", link: "#" },
        { title: "Service Explicit", description: "Get user consent for communications with explicit service SMS.", link: "#" },
    ];

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
          content="bulk sms aggregator company, aggregator connectivity, bulk sms aggregator, sms aggregator, dlt registration, bulk sms service, sms gateway, bulk sms provider, otp sms, sms api, bulk sms services in india, bulk sms gateway, bulk sms india, bulk sms api, bulk sms provider in india, free sms api india, bulk sms reseller"
        />
        <link rel="canonical" href="https://www.ratsms.com/bulk-sms-gateway-aggregator" />
        <meta property="og:site_name" content="RATSMS" />
        <meta property="og:url" content="https://ratsms.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RAT SMS : Bulk SMS Service Provider" />
        <meta
          name="og:image"
          content="https://ratsms.com/images/assets/ratsms-icon.png"
        />
        {/* For IE */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* For Responsive Device */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* For Window Tab Color */}
        {/* Chrome, Firefox OS, and Opera */}
        <meta name="theme-color" content="#655C97" />
        {/* Windows Phone */}
        <meta name="msapplication-navbutton-color" content="#655C97" />
        {/* iOS Safari */}
        <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
        <title>RAT SMS | Bulk SMS Gateway Aggregator</title>
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
                 <div className="bg-white text-black py-16">
  <div className="container mx-auto px-4">
    {/* Header Section */}
    <header className="mb-12 p-4">
      <h1 className="text-xl font-roboto sm:text-4xl text-left  sm:text-center tracking-widest mb-6 ">Bulk SMS Gateway Aggregator</h1>
      <p className="text-sm sm:text-xl sm:text-center text-left text-gray-700 mx-auto max-w-4xl">
        An SMS gateway is a way to send text messages from websites or applications to mobile subscribers for alert notifications. Explore our secure, scalable, and cost-effective bulk SMS solutions.
      </p>
    </header>

    {/* Why Choose Us Section */}
    <section className="mb-16 p-4 sm:p-16">
      <h2 className="text-2xl sm:text-4xl font-roboto text-center mb-10">Why Choose Us?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300">
          <div className="items-left">
            <i className="fas fa-plug text-2xl sm:text-4xl text-black mr-4 pb-4 sm:pb-5"></i>
            <p className="text-lg font-roboto">Direct operator connectivity with one of the top SMS gateways in India.</p>
          </div>
        </div>
        <div className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300">
          <div className="items-left">
            <i className="fas fa-cogs text-2xl sm:text-4xl text-black mr-4 pb-4 sm:pb-5"></i>
            <p className="text-lg font-roboto">Customizable bulk SMS routes for promotional and transactional purposes.</p>
          </div>
        </div>
        <div className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300">
          <div className=" items-left">
            <i className="fas fa-lock text-2xl sm:text-4xl text-black mr-4 pb-4 sm:pb-5"></i>
            <p className="text-lg font-roboto">Secure SMS gateways trusted by leading banks.</p>
          </div>
        </div>
        <div className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300">
          <div className=" items-left">
            <i className="fas fa-tachometer-alt text-2xl sm:text-4xl text-black mr-4 pb-4 sm:pb-5"></i>
            <p className="text-lg font-roboto">Best-in-class SMS delivery with competitive market pricing.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Our Products Section */}
    <section className="p-4 sm:p-16">
      <h2 className="text-2xl sm:text-4xl font-roboto text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div key={index} className="bg-white text-black rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{product.title}</h3>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <button
              type="submit"
              className="w-full sm:w-48 bg-black text-white border-2 border-black hover:bg-white hover:text-black font-semibold py-2 px-4 transition duration-300"
            >
              <i className="fas fa-info-circle mr-2"></i> Learn More
            </button>
          </div>
        ))}
      </div>
    </section>

    {/* Testimonials Section */}
    {/* <section className="bg-white text-black py-16">
  <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
    <div className="bg-gray-50 text-black p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <p className="text-lg mb-6 italic text-gray-700">
        Rat SMS is incredibly reliable. We trust them for our daily transactional SMS!
      </p>
      <p className="font-semibold text-lg text-gray-800">John Doe</p>
      <p className="text-sm text-gray-500">CEO, Tech Solutions</p>
    </div>

    <div className="bg-gray-50 text-black p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <p className="text-lg mb-6 italic text-gray-700">
        Their bulk SMS service helped us reach more customers quickly, and the support is fantastic!
      </p>
      <p className="font-semibold text-lg text-gray-800">Jane Smith</p>
      <p className="text-sm text-gray-500">Marketing Director, Retail Corp</p>
    </div>

    <div className="bg-gray-50 text-black p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <p className="text-lg mb-6 italic text-gray-700">
        We’ve seen tremendous results with Rat SMS! It’s the perfect solution for our business.
      </p>
      <p className="font-semibold text-lg text-gray-800">Mark Wilson</p>
      <p className="text-sm text-gray-500">Founder, Wilson Tech</p>
    </div>
  </div>
</section> */}


    {/* FAQ Section */}
   

    {/* Footer Section */}
    <footer className="mt-16 text-center text-black">
      <p className="text-sm text-gray-600">&copy; 2025 Rat SMS. All rights reserved.</p>
    </footer>
  </div>
</div>




            <Footer />
        </>
    );
}
