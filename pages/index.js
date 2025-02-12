
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

import { useRef } from "react";
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
import { motion, useInView } from "framer-motion";
import { faSms, faGlobe, faKey, faRobot, faMoneyBillWave, faServer, faHandshake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const smsFeatures = [
  { text: "Promotional Bulk SMS", icon: faSms, bgColor: "bg-blue-500" },
  { text: "Transactional Bulk SMS", icon: faGlobe, bgColor: "bg-green-500" },
  { text: "OTP SMS", icon: faKey, bgColor: "bg-purple-500" },
  { text: "Smart SMS", icon: faRobot, bgColor: "bg-red-500" },
  { text: "WhatsApp Business API", icon: faMoneyBillWave, bgColor: "bg-yellow-500" },
  { text: "Service Implicit", icon: faServer, bgColor: "bg-gray-500" },
  { text: "Service Explicit", icon: faHandshake, bgColor: "bg-orange-500" },
];

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 }); // Triggers when 20% of the div is visible

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
      <div className="relative top-0 w-full min-h-screen flex">
        <div className="relative w-full h-screen flex">
          {/* Gradient Overlay */}
          <motion.div
            className="absolute inset-0 bg-blue-950 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />

          {/* Left Section - Bulk SMS Quotes & Products */}
          <motion.div
            className="relative z-20 w-1/2 hidden md:flex flex-col justify-center items-center text-white p-10 space-y-6 ml-32"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Bulk SMS Quote (Floating Animation) */}
            <motion.h2
              className="text-6xl font-thin text-left tracking-widest"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: [0, -10, 0] }}
              transition={{ delay: 0.5, duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              Engage Your Audience in Just One Click!
            </motion.h2>

            {/* Small Content */}
            <motion.p
              className="text-base text-left tracking-widest text-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Instantly Connect. Engage. Convert. Our Bulk SMS solutions empower businesses to reach their audience with real-time messaging,
              driving higher engagement and boosting sales effortlessly!
            </motion.p>

            {/* SMS Features Animation */}
            <motion.div ref={ref} className="relative h-40 overflow-hidden w-96">
      <motion.div
        className="space-y-4"
        initial={{ y: 0 }}
        animate={{ y: ["0%", "-100%"] }} // Scroll up
        transition={{
          duration: smsFeatures.length * 4.5, // Control speed
          ease: "linear",
          repeat: Infinity, // Repeat infinitely
        }}
      >
        {smsFeatures.concat(smsFeatures).map((item, index) => ( // Duplicate list for smooth looping
          <motion.div
            key={index}
            className="flex items-center bg-white shadow-lg px-6 py-3 rounded-lg space-x-6 w-96"
          >
            {/* Icon */}
            <div className={`w-12 h-12 flex items-center justify-center rounded-full ${item.bgColor}`}>
              <FontAwesomeIcon icon={item.icon} className="text-white w-6 h-6" />
            </div>

            {/* Text */}
            <span className="text-xl text-gray-800">{item.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
          </motion.div>

          {/* Right Section - Support Form (Slide-In Animation) */}
          <motion.div
            className="absolute top-0 right-0 flex justify-end items-center pt-10 z-10 w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="hidden md:block text-white mt-28 mr-40">
              <SupportForm />
            </div>
          </motion.div>

          {/* Bottom Section - Speed Test (Fade-In Effect) */}
          <motion.div
            className="absolute bottom-0 w-full hidden md:block z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <SpeedTest />
          </motion.div>
        </div>

        {/* Support Form for Mobile (Fade-In) */}
        <motion.div
          className="block md:hidden bg-white p-6 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <SupportForm />
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