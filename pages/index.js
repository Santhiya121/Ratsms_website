
// import Navbar from "../app/components/Navbar";
// import Partner from "../app/components/partners";
// import Phone from "../app/components/phone";
// import ServiceHome from "../app/components/service_home";
// import SpeedTest from "../app/components/speedTest";
// import SupportForm from "../app/components/supportForm";
// import WhatsAppIcon from "../app/components/whatsappIcon";
// import Head from "next/head";
// import "../app/globals.css";
// import LocalBusinessSchema from "../app/components/localSchema";
// import { motion } from "framer-motion";


// export default function Home() {
//   return (
//     <div>
//       {/* Structured Data for SEO */}
//       <LocalBusinessSchema
//         name="RAT SMS"
//         description="RAT SMS is a leading bulk SMS service provider offering promotional, transactional, and OTP SMS solutions"
//         url="https://ratsms.com"
//         city="Chennai"
//         address="Flat No – 17, 2nd Floor, Anandha Bhavan, Landmark, Mahatma Gandhi Rd, opp. to Hotel, Adyar, Chennai, Tamil Nadu 600041"
//         latitude="13.003387° N"
//         longitude="80.255043° E"
//       />

//       {/* SEO Meta Tags */}
//       <Head>
//         <meta charSet="UTF-8" />
//         <meta
//           name="description"
//           content="India's No.1 Bulk SMS provider, RatSMS offers Promotional, Transactional, OTP SMS, Service Implicit, Service Explicit & WhatsApp API with reliable delivery."
//         />
//         <meta
//           name="keywords"
//           content="bulk sms, bulk sms service provider, bulk sms service in chennai, sms service provider in india, free sms api, sms api india, sms provider, bulk sms gateway, otp sms, transactional sms, promotional sms, smart sms, dlt registration, service implicit, service explicit, bulk sms services in india"
//         />
//         <link rel="canonical" href="https://ratsms.com" />
//         <meta property="og:site_name" content="RATSMS" />
//         <meta property="og:url" content="https://ratsms.com/" />
//         <meta property="og:type" content="website" />
//         <meta property="og:title" content="RAT SMS : Bulk SMS Service Provider" />
//         <meta property="og:image" content="/images/logo.png" />
//         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta name="theme-color" content="#655C97" />
//         <meta name="msapplication-navbutton-color" content="#655C97" />
//         <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
//         <meta name="facebook-domain-verification" content="5ijvhpsz91xr8n5ae0cdz6yy42xiji" />
//         <link rel="icon" href="/favicon.ico" sizes="any" />
//         <title>RAT SMS | BULK SMS SERVICE PROVIDER</title>
//       </Head>

//       {/* Navbar */}
//       <div>
//         <Navbar />
//       </div>

//       {/* Phone Component */}
//       <Phone />

//       {/* Hero Section with Background Image */}
//       {/* <div className="relative top-0 w-full min-h-screen">
//         <div className="relative w-full h-screen">

//           <div className="absolute inset-0 bg-[#A888B5] z-10"></div>


//           <div className="absolute top-0 right-0 flex justify-end items-center pt-10 z-10">
//             <div className="hidden md:block text-white">
//               <SupportForm />
//             </div>
//           </div>

//           <div className="absolute bottom-0 w-full hidden md:block z-20">
//             <SpeedTest />
//           </div>
//         </div>



//         <div className="block md:hidden bg-white p-6">
//           <SupportForm />
//         </div>
//       </div> */}
//       <div className="relative top-0 w-full min-h-screen flex">
//       <div className="relative w-full h-screen flex">
//         {/* Gradient Overlay */}
//         <motion.div
//           className="absolute inset-0 bg-blue-950 z-10"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         />

//         {/* Left Section - Bulk SMS Quotes & Products */}
//         <motion.div
//           className="relative z-20 w-1/2 hidden md:flex flex-col justify-center items-center text-white p-10 space-y-6"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           {/* Bulk SMS Quote (Floating Animation) */}
//           <motion.h2
//             className="text-3xl font-bold text-center"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: [0, -10, 0] }}
//             transition={{ delay: 0.5, duration: 2, repeat: Infinity, repeatType: "reverse" }}
//           >
//             "Reach Millions in Seconds – Power Your Business with Bulk SMS!"
//           </motion.h2>

//           {/* Small Content */}
//           <motion.p
//             className="text-lg text-center"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8, duration: 1 }}
//           >
//             Our Bulk SMS solutions help you engage customers instantly and
//             improve conversions. Trusted by businesses worldwide!
//           </motion.p>

//           {/* Product Highlights (Bouncing Effect) */}
//           <motion.div
//             className="space-y-4"
//             initial="hidden"
//             animate="visible"
//             variants={{
//               hidden: { opacity: 0 },
//               visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
//             }}
//           >
//             {[
//               "✔ Instant SMS Delivery",
//               "✔ Global Reach",
//               "✔ High Open Rates",
//               "✔ API Integration",
//               "✔ Affordable Pricing",
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="text-xl bg-white text-[#A888B5] px-4 py-2 rounded-lg shadow-lg"
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: [0.9, 1.1, 1] }}
//                 transition={{ delay: 1 + index * 0.3, duration: 0.8, type: "spring" }}
//               >
//                 {item}
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>

//         {/* Right Section - Support Form (Slide-In Animation) */}
//         <motion.div
//           className="absolute top-0 right-0 flex justify-end items-center pt-10 z-10 w-1/2"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           <div className="hidden md:block text-white mt-28 mr-40">
//             <SupportForm />
//           </div>
//         </motion.div>

//         {/* Bottom Section - Speed Test (Fade-In Effect) */}
//         <motion.div
//           className="absolute bottom-0 w-full hidden md:block z-20"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.5, duration: 1 }}
//         >
//           <SpeedTest />
//         </motion.div>
//       </div>

//       {/* Support Form for Mobile (Fade-In) */}
//       <motion.div
//         className="block md:hidden bg-white p-6 w-full"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <SupportForm />
//       </motion.div>
//     </div>


//       {/* Other Sections */}
//       <Partner />
//       <ServiceHome />
//       <WhatsAppIcon />
//     </div>
//   );
// }

import Navbar from "../app/components/Navbar";
import Partner from "../app/components/partners";
import Phone from "../app/components/phone";
import ServiceHome from "../app/components/service_home";
import SpeedTest from "../app/components/speedTest";
import SupportForm from "../app/components/supportForm";
import WhatsAppIcon from "../app/components/whatsappIcon";
import Head from "next/head";
import "../app/globals.css";
import LocalBusinessSchema from "../app/components/localSchema";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBullhorn,
  faComments,
  faFingerprint,          // Updated OTP Icon (Key)
  faImage, // Smart SMS Icon (Mobile with Text)
  faCommentDots,
  faCircleInfo,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
const smsFeatures = [
  {
    text: "Promotional Bulk SMS",
    icon: faBullhorn,

  },
  {
    text: "Transactional Bulk SMS",
    icon: faComments,

  },
  {
    text: "OTP SMS",
    icon: faFingerprint, // 🔑 Secure OTP Key

  },
  {
    text: "Smart SMS",
    icon: faImage, // 📱 Smart SMS Icon

  },
  {
    text: "WhatsApp Business API",
    icon: faPhone,

  },
  {
    text: "Service Implicit",
    icon: faCircleInfo, // 🔔 Same for Implicit

  },
  {
    text: "Service Explicit",
    icon: faCommentDots, // 🔄 Same for Explicit

  },
];

export default function Home() {


  return (
    <div>
      {/* Structured Data for SEO */}
      <LocalBusinessSchema
        name="RAT SMS"
        description="RAT SMS is a leading bulk SMS service provider offering promotional, transactional, and OTP SMS solutions"
        url="https://ratsms.com"
        city="Chennai"
        address="Flat No – 17, 2nd Floor, Anandha Bhavan, Landmark, Mahatma Gandhi Rd, opp. to Hotel, Adyar, Chennai, Tamil Nadu 600041"
        latitude="13.003387° N"
        longitude="80.255043° E"
      />

      {/* SEO Meta Tags */}
      <Head>
        <meta charSet="UTF-8" />
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
        <meta property="og:image" content="/images/logo.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#655C97" />
        <meta name="msapplication-navbutton-color" content="#655C97" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
        <meta name="facebook-domain-verification" content="5ijvhpsz91xr8n5ae0cdz6yy42xiji" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>RAT SMS | BULK SMS SERVICE PROVIDER</title>
      </Head>

      {/* Navbar Animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Navbar />
      </motion.div>

      {/* Phone Component Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Phone />
      </motion.div>

      {/* Main Section */}
      <div className="relative top-0 w-full min-h-screen flex flex-col">
        <div className="relative w-full h-lvh flex flex-col">
          {/* Gradient Overlay */}
          <motion.div
            className="absolute inset-0 bg-blue-950 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />

          {/* Left Section - Bulk SMS Quotes & Products */}
          <section className="relative w-full h-screen flex flex-col items-center lg:items-start lg:justify-start overflow-hidden p-6 md:p-10 lg:pl-20 lg:pt-40 2xl:pt-28 pt-20 xl:pt-14">
            {/* Background Video Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
            >
              <source src="/your-video.mp4" type="video/mp4" />
            </video>

            {/* Content Section */}
            <motion.div
              className="relative z-20 w-full max-w-5xl px-4 sm:px-6 md:px-16 py-6 sm:py-10 space-y-6 sm:space-y-8 sm:text-left text-left lg:text-left text-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Floating Headline with Scroll Effect */}
              <motion.h1
                className="text-2xl sm:text-3xl md:text-3xl xl:text-3xl lg:text-4xl 2xl:text-5xl sm:font-bold font-light tracking-widest leading-tight"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
              >
                Engage Your Audience <br />
                <span className="text-blue-400">in Just One Click!</span>
              </motion.h1>

              {/* Subtitle with Fade-In Effect */}
              <motion.p
                className="text-lg xl:text-sm sm:text-lg md:text-xl lg:text-lg xl:max-w-xl sm:max-w-2xl 2xl:text-lg md:max-w-3xl  lg:max-w-4xl 2xl:max-w-3xl text-gray-200 tracking-widest"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                Instantly connect, engage, and convert. Our AI-powered Bulk SMS solutions help businesses reach their audience in real time with maximum impact.
              </motion.p>

              {/* Feature Grid with Scroll Animation */}
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-3 gap-4 sm:gap-6 w-full max-w-xl sm:max-w-2xl md:max-w-lg 2xl:max-w-3xl "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.3 },
                  },
                }}
              >
                {smsFeatures.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center border-2 border-white shadow-xl rounded-xl  2xl:px-2  2xl:space-x-4 space-x-2 transform transition-all hover:scale-105 hover:shadow-2xl"
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Icon */}
                    <div
                      className={`xl:w-8 xl:h-8  2xl:w-12 2xl:h-12 flex items-center justify-center rounded-full sm:bg-white shadow-lg m-3`}
                    >
                      <FontAwesomeIcon icon={item.icon} className="sm:text-black text-white w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    {/* Feature Text */}
                    <span className="text-[8px] sm:text-sm font-light text-white tracking-wide">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

          </section>

          {/* Right Section - Support Form (Only visible on md+ screens) */}
          <motion.div
            className="hidden md:flex absolute top-0 right-0 justify-end items-center pt-10 z-10 w-1/2 xl:w-1/3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="text-white 2xl:mt-16 xl:mr-10 2xl:mr-30 absolute top-0 right-0 justify-end items-center pt-10 z-10">
              <SupportForm />
            </div>
          </motion.div>

          {/* Bottom Section - Speed Test (Only visible on md+ screens) */}
          <motion.div
            className="hidden md:block absolute bottom-0 w-full z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <SpeedTest />
          </motion.div>
        </div>

        {/* Support Form for Mobile (Always visible and positioned below content) */}
        <motion.div
          className="block md:hidden  p-6 w-full shadow-lg bg-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <SupportForm />
        </motion.div>

        <motion.div
            className="block md:hidden  p-6 w-full shadow-lg bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <SpeedTest />
          </motion.div>
      </div>

      {/* Partner Section Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Partner />
      </motion.div>

      {/* ServiceHome Section Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <ServiceHome />
      </motion.div>

      {/* WhatsAppIcon Animation */}

      <WhatsAppIcon />

    </div>
  );
}