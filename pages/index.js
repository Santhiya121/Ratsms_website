
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
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import {
  faBullhorn,
  faComments,
  faShieldAlt,
  faImage,
  faCode,
  faCommentDollar,
  faCheckDouble
} from "@fortawesome/free-solid-svg-icons";

const smsFeatures = [
  { text: "Promotional Bulk SMS", icon: faBullhorn, link: "/promotional-bulk-sms-chennai" },
  { text: "Transactional Bulk SMS", icon: faComments, link: "/transactional-bulk-sms-chennai" },
  { text: "OTP SMS", icon: faShieldAlt, link: "/otp-bulk-sms-chennai" },
  { text: "Smart SMS", icon: faImage, link: "/smartsms-send-bulk-sms-attachments" },
  { text: "WhatsApp Business API", icon: faWhatsapp, link: "/whatsapp-business-api" },
  { text: "Service Implicit SMS", icon: faCommentDollar, link: "/bulk-sms-service-implicit" },
  { text: "Service Explicit SMS", icon: faCheckDouble, link: "/bulk-sms-service-explicit" },
  { text: "SMS API", icon: faCode, link: "/developer-api" },
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

      <Navbar />
      <Phone />

      <div className="relative top-0 w-full min-h-screen flex flex-col">
        <div className="relative w-full h-[40rem] sm:h-lvh flex flex-col">
          <motion.div
            className="absolute inset-0 bg-blue-800 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <section className="relative w-full h-screen flex flex-col items-center lg:items-start lg:justify-start overflow-hidden p-6 md:p-10 lg:pl-20 lg:pt-40 2xl:pt-20 pt-20 xl:pt-14">
            {/* Background Video Overlay */}
            <div className="absolute inset-0 bg-black/60 z-10"></div>

            {/* Content Section */}
            <motion.div
              className="relative z-20 w-full max-w-5xl px-4 sm:px-6 md:px-16 py-6 sm:py-10 space-y-6 sm:space-y-8 sm:text-left text-left lg:text-left text-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Floating Headline with Scroll Effect */}
              <div className="relative flex flex-col items-left text-left">
                <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-bold tracking-wide">
                  Engage Your Audience <br />
                  <span className="text-blue-400">in Just One Click!</span>
                </h1>
                <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-2xl">
                  Instantly connect, engage, and convert. Our AI-powered Bulk SMS solutions help businesses reach their audience in real-time with maximum impact.
                </p>
              </div>

              {/* Feature Grid with Scroll Animation */}
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-3 gap-4 sm:gap-6 w-full max-w-xl sm:max-w-2xl md:max-w-lg 2xl:max-w-3xl"
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
                  <Link key={index} href={item.link} passHref>
                    <motion.div
                      className="flex items-center border-2 border-white shadow-xl rounded-xl 2xl:px-2 2xl:space-x-4 space-x-2 transform transition-all hover:scale-105 hover:shadow-2xl cursor-pointer"
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {/* Icon */}
                      <div className="xl:w-8 xl:h-8 2xl:w-12 2xl:h-12 flex items-center justify-center rounded-full sm:bg-white shadow-lg m-3">
                        <FontAwesomeIcon icon={item.icon} className="sm:text-black text-white w-5 h-5 sm:w-6 sm:h-6" />
                      </div>

                      {/* Feature Text */}
                      <span className="text-[8px] sm:text-sm font-light text-white tracking-wide">
                        {item.text}
                      </span>
                    </motion.div>
                  </Link>
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
            <div className="text-white 2xl:mt-8 xl:mr-10 2xl:mr-30 absolute top-0 right-0 justify-end items-center pt-8 z-10">
              <SupportForm />
            </div>
          </motion.div>

          {/* Bottom Section - Speed Test (Only visible on md+ screens) */}
          <div className="hidden md:block absolute bottom-0 w-full z-20">
            <SpeedTest />
          </div>
        </div>

        {/* Support Form for Mobile (Always visible and positioned below content) */}
        <div className="block md:hidden p-6 w-full shadow-lg bg-white">
          <SupportForm />
        </div>

        <div className="block md:hidden p-6 w-full shadow-lg bg-white">
          <SpeedTest />
        </div>
      </div>

      {/* Partner Section Animation */}
      <div>
        <Partner />
      </div>

      {/* ServiceHome Section Animation */}
      <div>
        <ServiceHome />
      </div>

      {/* WhatsAppIcon Animation */}
      <WhatsAppIcon />
    </div>
  );
}