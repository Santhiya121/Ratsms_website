
// import cities from "../data/cities";  // Assuming your cities are defined here
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="min-h-screen text-center py-10 bg-gray-100">
//       <h1 classNamse="text-3xl font-bold text-blue-600 mb-6">
//         Enjoy Abundant SMS Services in Your Cities
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
//         {cities.map((city) => (
//           <div
//             key={city.name}
//             className="p-4 bg-blue-500 text-white rounded-md shadow-md hover:shadow-lg transition-shadow"
//           >
//             <h2 className="text-xl font-semibold">{city.name}</h2>
//             <Link href={`/${city.route}`}>
//               <a className="text-sm underline hover:text-gray-200">
//                 Explore {city.name}
//               </a>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import Footer from "../../app/components/footer";
import Navbar from "../app/components/Navbar";
import Phone from "../app/components/phone";
import ServiceHome from "../app/components/service_home";
import SpeedTest from "../app/components/speedTest";
import SupportForm from "../app/components/supportForm";
import WhatsAppIcon from "../app/components/whatsappIcon";
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
        <Navbar />
      </div>

      <Phone />
      <div className="relative top-0 w-full min-h-screen">
        {/* Background Video */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
  <iframe
    src="https://www.youtube.com/embed/ELibyf-BfCM?autoplay=1&loop=1&playlist=ELibyf-BfCM&mute=1&controls=0"
    className="w-full h-full object-cover"
    frameBorder="0"
    allow="autoplay; fullscreen; encrypted-media"
    allowFullScreen
    title="YouTube Video"
  ></iframe>
</div>

        {/* Left-Center Positioned SupportForm */}
        <div className="flex justify-end items-center min-h-screen relative ">
          <div className="text-white ">
            <SupportForm />
          </div>
        </div>
      </div>
      <ServiceHome />
      <WhatsAppIcon />
      <SpeedTest />
      {/* <Footer/> */}
    </div>
  );
}
