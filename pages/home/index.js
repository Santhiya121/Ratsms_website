import Navbar from "../../app/components/Navbar";
import Phone from "../../app/components/phone";
import ServiceHome from "../../app/components/service_home";
import SpeedTest from "../../app/components/speedTest";
import SupportForm from "../../app/components/supportForm";
import WhatsAppIcon from "../../app/components/whatsappIcon";
import Head from "next/head";


export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="India's No.1 Bulk SMS provider, RatSMS offers Promotional, Transactional, OTP SMS, Service Implicit, Service Explicit & WhatsApp API with reliable delivery."
        />
        <meta
          name="keywords"
          content="bulk sms, bulk sms service provider, bulk sms service in chennai, sms service provider in india, free sms api, sms api india, sms provider, bulk sms gateway, otp sms, transactional sms, promotional sms, smart sms, dlt registration, service implicit, service explicit, bulk sms services in india"
        />
        <link rel="canonical" href="https://ratsms.com" />
        <meta property="og:site_name" content="RATSMS" />
        <meta property="og:url" content="https://ratsms.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RAT SMS : Bulk SMS Service Provider" />
        <meta name="og:image" content="https://ratsms.com/images/assets/ratsms-icon.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#655C97" />
        <meta name="msapplication-navbutton-color" content="#655C97" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
        <meta
          name="facebook-domain-verification"
          content="5ijvhpsz91xr8n5ae0cdz6yy42xiji"
        />
        <title>RAT SMS | BULK SMS SERVICE PROVIDER</title>
      </Head>
      <div className="">
      <Navbar/>
      
      </div>
      <Phone/>
      <div className="relative top-0 w-full min-h-screen">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/RAT.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Left-Center Positioned SupportForm */}
        <div className="flex justify-end items-center min-h-screen relative ">
                 <div className="text-white ">
                   <SupportForm />
                 </div>
               </div>
      </div>
      <ServiceHome/>
      <WhatsAppIcon/>
      <SpeedTest/>
      {/* <Footer/> */}
    </div>
  );
}



// import Head from "next/head";
// import Navbar from "../../app/components/Navbar";
// import ServiceHome from "../../app/components/service_home";
// import SpeedTest from "../../app/components/speedTest";
// import SupportForm from "../../app/components/supportForm";
// import WhatsAppIcon from "../../app/components/whatsappIcon";

// export default function Home() {
//   return (
//     <div>
//       <Head>
//         {/* Basic Meta Tags */}
//         <meta charset="UTF-8" />
//         <meta
//           name="description"
//           content="India's No.1 Bulk SMS provider, RatSMS offers Promotional, Transactional, OTP SMS, Service Implicit, Service Explicit & WhatsApp API with reliable delivery."
//         />
//         <meta
//           name="keywords"
//           content="bulk sms, bulk sms service provider, bulk sms service in chennai, sms service provider in india, free sms api, sms api india, sms provider, bulk sms gateway, otp sms, transactional sms, promotional sms, smart sms, dlt registration, service implicit, service explicit, bulk sms services in india"
//         />
//         <link rel="canonical" href="https://ratsms.com" />

//         {/* Open Graph Meta Tags */}
//         <meta property="og:site_name" content="RATSMS" />
//         <meta property="og:url" content="https://ratsms.com/" />
//         <meta property="og:type" content="website" />
//         <meta property="og:title" content="RAT SMS : Bulk SMS Service Provider" />
//         <meta name="og:image" content="images/assets/ratsms-icon.png" />

//         {/* Compatibility and Viewport */}
//         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />

//         {/* Mobile and Browser Theme */}
//         <meta name="theme-color" content="#655C97" />
//         <meta name="msapplication-navbutton-color" content="#655C97" />
//         <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />

//         {/* Facebook Verification */}
//         <meta name="facebook-domain-verification" content="5ijvhpsz91xr8n5ae0cdz6yy42xiji" />
//       </Head>


//       {/* Main Content */}
//       <div className="">
//         <Navbar />
//       </div>
//       <div className="relative top-0 w-full min-h-screen">
//         {/* Background Video */}
//         <video
//           autoPlay
//           loop
//           muted
//           className="absolute top-0 left-0 w-full h-full object-cover z-0"
//         >
//           <source src="/videos/RAT.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         {/* Left-Center Positioned SupportForm */}
//         <div className="flex justify-end items-center min-h-screen relative pr-12">
//           <div className="text-white space-x-6">
//             <SupportForm />
//           </div>
//         </div>
//       </div>
//       <ServiceHome />
//       <WhatsAppIcon />
//       <SpeedTest />
//       {/* <Footer /> */}
//     </div>
//   );
// }
