// import React from 'react';
// import '../../app/globals.css'
// import Navbar from '../../app/components/Navbar';
// import Footer from '../../app/components/footer';


// const BlogPage = () => {
//   return (
//     <>
//     <div className='bg-black'>
//     <Navbar/>
//     </div>

//     <div className=" bg-white mt-28 px-4 py-8">
//       {/* Blog Header */}
//       <h1 className='text-4xl font-roboto font-light text-black pl-16'>Blogs</h1>
//       <header className="text-center  bg-white mb-20 pl-16">
//         <h1 className="text-4xl font-bold text-black mb-4 mt-10 transition-transform transform hover:scale-105">
//           Everything You Need to Know About Bulk SMS Marketing
//         </h1>
//         <p className="text-lg text-gray-800 mb-6">
//           A comprehensive guide to understanding the various types and uses of Bulk SMS
//         </p>
//       </header>

//       {/* Blog Content */}
//       <section className="mb-12">
//         {/* Image Section */}
//         <div className="mb-6  flex items-center justify-center ">
//           <img 
//             src="/images/blogs.jpg" 
//             alt="Bulk SMS Marketing" 
//             className="w-96 h-auto object-cover transition-transform transform hover:scale-105"
//           />
//         </div>

//         <h2 className="text-3xl font-semibold text-gray-800 mb-4 pl-16 ">
//           What is Bulk SMS?
//         </h2>
//         <p className="text-lg text-gray-700 leading-relaxed mb-4 pl-16">
//           Spreading a message/SMS to a large volume (bulk) of mobile phones through a normal messaging system is said to be  
//           <a
//               href="#"
//               className="font-light text-xl text-[#003bff] underline pl-3"
//             >
//               Bulk SMS
//             </a>. These types of SMS are mainly used for reminders, promotions, alerts, preventing fraudulent activities, etc. It is also known as SMS marketing and nowadays it commonly comes under mobile marketing.
//         </p>
//         <p className="text-lg text-gray-700 leading-relaxed pl-16">
//           Simply, bulk SMS is a messaging service that is used to send SMS to a wide range of customers/audiences at the same time or scheduled time.
//         </p>
//       </section>

//       <section className="mb-12 pl-16">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-4">Uses of Bulk SMS</h2>
//         <p className="text-lg text-gray-700 leading-relaxed mb-4">
//           Bulk SMS is mainly used for promoting/advertising any type of product and service to a mass number of people. For sending notifications about something which you have already shown interest in. For transaction information that you asked for or promoting information about a new product.
//         </p>
//         <ul className="list-disc pl-6 mt-4 text-lg text-gray-700 space-y-2">
//           <li>Type of OTPs and other passcodes for any safety measures or authentication purposes.</li>
//           <li>Reminders and alerts for existing customers about sale ends, new products, discounts, coupons, flash sales, offers, etc.</li>
//           <li>Entertainment purposes such as sending invites to events or programs.</li>
//           <li>Sharing important news or useful information to people who need awareness.</li>
//           <li>Sending SMS newsletters and any sort of text message for different uses.</li>
//         </ul>
//       </section>

//       {/* Promotional Bulk SMS Section */}
//       <section className="mb-12 pl-16">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-4">Promotional Bulk SMS</h2>
//         <p className="text-lg text-gray-700 leading-relaxed mb-4">
//           Promotional SMS is mainly used to promote one’s product or business to new customers or existing customers to reach their sales goals and can also be used for high sale conversion. In this competitive world,  <a
//               href="#"
//               className="font-light text-xl text-[#003bff] underline pl-3"
//             >
//                Promotional SMS 
//             </a>. helps to promote businesses to the next level.
//         </p>
//       </section>
//       <section className="mb-12 pl-16">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-4">Transactional bulk SMS</h2>
//         <p className="text-lg text-gray-700 leading-relaxed mb-4">
//         <a
//               href="#"
//               className="font-light text-xl text-[#003bff] underline"
//             >
//               Transactional bulk SMS
//             </a>. 
//         is mainly used for transaction purposes such as SMS sent by the banking sectors, order confirmation messages from other e-commerce sites, shipping-related SMS, live tracking links, payment, and other transactional details & instructions. These are automated SMS that can be sent to the already registered customers or the buyers of the product or the service which the merchant is selling. While compared to promotional SMS, transactional SMS is 100% deliverable.

//         </p>
//       </section>
//       <section className="mb-12 pl-16">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-4">Service explicit</h2>
//         <p className="text-lg text-gray-700 leading-relaxed mb-4">
//         Service explicit SMS will be delivered to the customer who had shown interest to receive the promotions or other services through SMS. These SMS are also used to send offers, discounts, and other updates of the product or 
//         service to the agreed customers. And also it falls under certain criteria while sending SMS. 
//         </p>
//       </section>

//       <section className="mb-12 pl-16">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-4">Service implicit</h2>
//         <p className="text-lg text-gray-700 leading-relaxed mb-4">
//         <a
//               href="#"
//               className="font-light text-xl text-[#003bff] underline"
//             >
//               Service implicit SMS 
//             </a>. 
//             is similar to explicit SMS, it also cannot be received by the user without their assent. This SMS can be used to send order and booking-related information, OTPs, and alerts for registered customers. Implicit service SMS should not be used to send marketing-related SMS.
//         </p>
//       </section>
//       <section className="mb-12 pl-16">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-4">OTP SMS</h2>
//         <p className="text-lg text-gray-700 leading-relaxed mb-4">
//         A one-time password is an auto-generated unique shortcode that can be received by the user to their mobile numbers. Specifically used for preventing malicious attacks, banking-related entries, password verifications, primary identifications, strong authentications, and for other security purposes. It has no time management it will be sent while the user requests it. It will be sent within one minute and last till the session time. You can get a live real-time delivery report.

//         </p>
//       </section>
//       <section className="mb-12 pl-16">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-4">Smart SMS</h2>
//         <p className="text-lg text-gray-700 leading-relaxed mb-4">
//         <a
//               href="#"
//               className="font-light text-xl text-[#003bff] underline"
//             >
//               Smart SMS 
//             </a>. 
//             is a premium service that helps to send images, videos, audios, pdfs, and other attachments as a link in normal text messages. You can track the geo-location, can able to identify who opened the link and who doesn’t, and also the count of the members who clicked the link. Instead of using bulk Whatsapp, you can use smart SMS as it is the smartest one for sending all these in a single link in the text message format.   </p>
//       </section>

//       {/* Specialization of Rat SMS Section */}
//       <section className="mb-12 pl-16">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-4">Specialization of Rat SMS</h2>
//         <ul className="list-disc pl-6 mt-4 text-lg text-gray-700 space-y-2">
//           <li>No validity set for SMS credits.</li>
//           <li>Various price slabs for your convenience.</li>
//           <li>Lifetime validity.</li>
//           <li>Free demo SMS credits.</li>
//           <li>On-time delivery and work progress.</li>
//         </ul>
//       </section>
//       </div>


//     <Footer/>

//     </>
//   );
// };

// export default BlogPage;


import React from 'react';
import '../../app/globals.css'
import "font-awesome/css/font-awesome.min.css";
import Navbar from '../../app/components/Navbar';
import Footer from '../../app/components/footer';
import Image from 'next/image'
import Head from 'next/head';
import WhatsAppIcon from '../../app/components/whatsappIcon';
const BlogPage = () => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="keywords" content="RATSMS" />
        <meta name="description" content="RATSMS" />
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
        <title>RAT SMS | Blog</title>
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


      <div className="bg-white px-4 py-8 sm:px-6 md:px-8 lg:px-16">
  {/* Blog Header */}
  <h1 className="text-3xl sm:text-5xl font-roboto  text-black pl-4 sm:pl-8 md:pl-16 ">
    Blogs
  </h1>

  {/* Blog Content */}
  <section className="bg-white p-8 rounded-lg shadow-lg mb-12 relative bg-gradient-to-r
   from-gray-50 via-gray-100 to-white mt-4">
    <header className="text-center mb-10">
      <h1 className="text-xl sm:text-3xl font-bold text-black mb-4  transition-transform transform hover:scale-105">
        Everything You Need to Know About Bulk SMS Marketing
      </h1>
      <p className="text-base sm:text-lg text-gray-800 mb-6">
        A comprehensive guide to understanding the various types and uses of Bulk SMS
      </p>
    </header>

    {/* Image Section */}
    <div className="mb-6 flex items-center justify-center relative">
      <Image
        src="/images/blogs.jpg"
        alt="Bulk SMS Marketing"
        width={800}
        height={600}
        className="w-full sm:w-96 h-auto object-cover transition-transform transform hover:scale-105"
      />
      <div className="absolute top-2 left-2 text-base bg-white p-3 rounded-full shadow-md text-[#003bff]">
        <i className="fa fa-bell"></i>
      </div>
    </div>

    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 pl-4 sm:pl-8 md:pl-16">
      What is Bulk SMS?
    </h2>
    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 pl-4 sm:pl-8 md:pl-16">
      Spreading a message/SMS to a large volume (bulk) of mobile phones through a normal messaging system is said to be  
      <a
        href="#"
        className="font-light text-base text-[#003bff] underline pl-3"
      >
        Bulk SMS
      </a>. These types of SMS are mainly used for reminders, promotions, alerts, preventing fraudulent activities, etc. It is also known as SMS marketing and nowadays it commonly comes under mobile marketing.
    </p>
    <p className="text-base sm:text-lg text-gray-700 leading-relaxed pl-4 sm:pl-8 md:pl-16">
      Simply, bulk SMS is a messaging service that is used to send SMS to a wide range of customers/audiences at the same time or scheduled time.
    </p>
  </section>

  {/* Uses of Bulk SMS */}
  <section className="bg-gray-50 p-8 rounded-lg shadow-lg mb-12 relative">
    <div className="absolute top-2 left-2 text-2xl text-[#003bff]">
      <i className="fa fa-paper-plane"></i>
    </div>
    <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Uses of Bulk SMS</h2>
    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
      Bulk SMS is mainly used for promoting/advertising any type of product and service to a mass number of people. For sending notifications about something which you have already shown interest in. For transaction information that you asked for or promoting information about a new product.
    </p>
    <ul className=" pl-6 sm:pl-8 mt-4 text-base sm:text-lg text-gray-700 space-y-2">
      <li><i className="fa fa-key text-[#003bff]"></i> Type of OTPs and other passcodes for any safety measures or authentication purposes.</li>
      <li><i className="fa fa-bell text-[#003bff]"></i> Reminders and alerts for existing customers about sale ends, new products, discounts, coupons, flash sales, offers, etc.</li>
      <li><i className="fa fa-users text-[#003bff]"></i> Entertainment purposes such as sending invites to events or programs.</li>
      <li><i className="fa fa-info-circle text-[#003bff]"></i> Sharing important news or useful information to people who need awareness.</li>
      <li><i className="fa fa-newspaper-o text-[#003bff]"></i> Sending SMS newsletters and any sort of text message for different uses.</li>
    </ul>
  </section>

  {/* Promotional Bulk SMS */}
  <section className="bg-white p-8 rounded-lg shadow-lg mb-12 relative">
    <div className="absolute top-2 left-2 text-2xl text-[#003bff]">
      <i className="fa fa-bullhorn"></i>
    </div>
    <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Promotional Bulk SMS</h2>
    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
      Promotional SMS is mainly used to promote one’s product or business to new customers or existing customers to reach their sales goals and can also be used for high sale conversion. In this competitive world,  
      <a
        href="#"
        className="font-light text-base  text-[#003bff] underline p-3"
      >
        Promotional SMS
      </a>
      helps to promote businesses to the next level.
    </p>
  </section>

  {/* Transactional Bulk SMS */}
  <section className="bg-gray-50 p-8 rounded-lg shadow-lg mb-12 relative">
    <div className="absolute top-2 left-2 text-2xl text-[#003bff]">
      <i className="fa fa-credit-card"></i>
    </div>
    <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Transactional Bulk SMS</h2>
    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
      <a
        href="#"
        className="font-light text-base pr-2 text-[#003bff] underline"
      >
        Transactional Bulk SMS
      </a>
      is mainly used for transaction purposes such as SMS sent by the banking sectors, order confirmation messages from other e-commerce sites, shipping-related SMS, live tracking links, payment, and other transactional details & instructions. These are automated SMS that can be sent to the already registered customers or the buyers of the product or the service which the merchant is selling. While compared to promotional SMS, transactional SMS is 100% deliverable.
    </p>
  </section>

  {/* OTP SMS */}
  <section className="bg-white p-8 rounded-lg shadow-lg mb-12 relative">
    <div className="absolute top-2 left-2 text-2xl text-[#003bff]">
      <i className="fa fa-lock"></i>
    </div>
    <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">OTP SMS</h2>
    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
      A one-time password is an auto-generated unique shortcode that can be received by the user to their mobile numbers. Specifically used for preventing malicious attacks, banking-related entries, password verifications, primary identifications, strong authentications, and for other security purposes. It has no time management it will be sent while the user requests it. It will be sent within one minute and last till the session time. You can get a live real-time delivery report.
    </p>
  </section>

  {/* Smart SMS */}
  <section className="bg-gray-50 p-8 rounded-lg shadow-lg mb-12 relative">
    <div className="absolute top-2 left-2 text-2xl text-[#003bff]">
      <i className="fa fa-cogs"></i>
    </div>
    <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Smart SMS</h2>
    <p className="text-base sm:text-lg text-gray-700  leading-relaxed mb-4">
      <a
        href="#"
        className="font-light text-xl text-[#003bff] underline"
      >
        Smart SMS
      </a>
      
      is a premium service that helps to send images, videos, audios, pdfs, and other attachments as a link in normal text messages. You can track the geo-location, can able to identify who opened the link and who doesn’t, and also the count of the members who clicked the link. Instead of using bulk Whatsapp, you can use smart SMS as it is the smartest one for sending all these in a single link in the text message format.
    </p>
  </section>

  {/* Specialization of Rat SMS */}
  <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
    <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Specialization of Rat SMS</h2>
    <ul className=" pl-6 sm:pl-8 mt-4 text-base sm:text-lg text-gray-700 space-y-2">
      <li><i className="fa fa-check-circle text-[#003bff]"></i> Can be personalized & targeted with high conversion rates.</li>
      <li><i className="fa fa-check-circle text-[#003bff]"></i> Personalized SMS and messages to relevant clients.</li>
      <li><i className="fa fa-check-circle text-[#003bff]"></i> Can be sent within seconds to millions of customers.</li>
      <li><i className="fa fa-check-circle text-[#003bff]"></i> Highly effective for fast marketing and creating awareness.</li>
    </ul>
  </section>
</div>






      <Footer />
    </>
  );
}

export default BlogPage;
