import Link from "next/link";
import Footer from "../../app/components/footer";
import Navbar from "../../app/components/Navbar";
import "../../app/globals.css";
import Head from "next/head";
import WhatsAppIcon from "../../app/components/whatsappIcon";
import Phone from "../../app/components/phone";

export default function TermsConditions() {
  return (
    <>
    <Head>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Before using RAT SMS bulk SMS services, read our Terms and Conditions. Understand our policies to ensure secure, seamless, and compliant messaging solutions.
"
        />
        <meta
          name="keyword"
          content="dlt registration, bulk sms service, sms blaster, sms gateway, bulk sms provider, otp sms, sms api, bulk sms services in india, bulk sms gateway, bulk sms india, free sms api, sms api india, sms provider, bulk sms api, bulk sms provider in india, free sms api india, bulk sms reseller"
        />
        <link rel="canonical" href="https://ratsms.com/terms-and-conditions" />
        <meta property="og:site_name" content="RATSMS" />
        <meta property="og:url" content="https://ratsms.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RAT SMS : Bulk SMS Service Provider" />
        <meta name="og:image" content="/images/assets/ratsms-icon.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#655C97" />
        <meta name="msapplication-navbutton-color" content="#655C97" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
        <title>RAT SMS - Terms & Conditions for Bulk SMS Services

        </title>
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
            <Phone/>
            <div className="bg-gray-50 py-10">
  <div className="space-y-12 px-6 sm:px-16 lg:px-32">
    {/* Header Section */}
    <div className="sm:text-center text-left">
      <h1 className="text-3xl sm:text-5xl font-roboto text-left sm:text-center text-black mb-4 tracking-widest">Terms and Conditions</h1>
      <p className="text-lg text-gray-600">
        Please read our terms and conditions carefully before using our services.
      </p>
    </div>

    {/* Introduction Section */}
    <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
      <div className="flex items-center mb-6">
        <i className="fas fa-info-circle text-black text-3xl mr-4"></i>
        <h2 className="text-2xl sm:text-3xl font-semibold text-black">Our Terms and Conditions</h2>
      </div>
      <p className="text-gray-700 sm:text-lg text-base leading-relaxed">
        These terms and conditions outline the rules and regulations 
        for the use of AWF TECHNOLOGIES PRIVATE LIMITEDs Website, located at www.ratsms.com.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed">
        By accessing this website, we assume you accept these terms and conditions. 
        Do not continue to use www.ratsms.com if you do not agree to take all of the terms and 
        conditions stated on this page.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed">
        The following terminology applies to these Terms and Conditions, 
        Privacy Statement, and Disclaimer Notice, and all Agreements: Client, You and Your refers 
        to you, the person logging onto this website and compliant with the Companys 
        terms and conditions.
      </p>
    </div>

    {/* Definitions Section */}
    <div className="bg-gradient-to-r from-gray-200 to-gray-100 p-8 rounded-lg shadow-lg space-y-6">
      <div className="flex items-center mb-6">
        <i className="fas fa-book text-black text-3xl mr-4"></i>
        <h2 className="text-2xl sm:text-3xl font-semibold text-black">Definitions</h2>
      </div>
      <ul className="  text-gray-700 text-lg">
      
         <p className="mb-2"> We employ the use of cookies. By accessing www.ratsms.com, </p>
         <p className="mb-2">  you agree to use cookies in agreement with AWF TECHNOLOGIES PRIVATE LIMITEDs Privacy Policy.
         </p>
         <p className="mb-2"> 
          Cookies are used by our website to enable the functionality of certain areas to make it easier for visitors. Some of our affiliate/advertising partners may also use cookies.
          </p> 
    
      </ul>
    </div>

    {/* Data Collection Section */}
    <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
      <div className="flex items-center mb-6">
        <i className="fas fa-database text-black text-3xl mr-4"></i>
        <h3 className="text-2xl sm:text-3xl font-semibold text-black">Data Collection</h3>
      </div>
      <p className="text-gray-700 text-lg leading-relaxed">
        We are committed to protecting your privacy. Any personal data collected through the use of this website will be processed in accordance with our Privacy Policy.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed">
        For more details, please review our{' '}
        <Link href="/privacy-policy" className="text-blue-600 underline hover:text-blue-800 transition duration-300">
          Privacy Policy
        </Link>.
      </p>
    </div>

    {/* Call to Action Section */}
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg flex flex-col items-center space-y-6">
  {/* Header */}
  <h3 className="text-2xl sm:text-3xl font-semibold text-black text-center">
    Need More Information?
  </h3>

  {/* Description */}
  <p className="text-gray-700 text-base sm:text-lg text-center max-w-md">
    If you have any questions regarding our terms and conditions, feel free to reach out. Our team is here to assist you with all your queries.
  </p>

  {/* Contact Button */}
  <Link href ="/contact">
  <div className="relative">
    <button className="bg-black text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition-all duration-300 flex items-center space-x-3">
      <i className="fas fa-envelope text-white"></i>
      <span>Contact Us</span>

    </button>
  </div>
  </Link>
</div>

  </div>
</div>

      <Footer/>
    </>
  );
}
