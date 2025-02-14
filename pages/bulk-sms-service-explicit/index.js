


import Footer from "../../app/components/footer";
import LocalBusinessSchema from "../../app/components/localSchema";
import Navbar from "../../app/components/Navbar";
import Phone from "../../app/components/phone";
import SupportForm from "../../app/components/supportForm";
import WhatsAppIcon from "../../app/components/whatsappIcon";
import "../../app/globals.css";
import Head from "next/head";

export default function ServiceExplicit() {
  return (
    <>
     <LocalBusinessSchema
      name = "RAT SMS"
      description="Get reliable and fast bulk SMS services for promotional, transactional, and OTP messaging to enhance customer engagement"
      url="https://ratsms.com/bulk-sms-service-explicit"
      city="chennai"
      address="Flat No – 17, 2nd Floor, Anandha Bhavan, Landmark, Mahatma Gandhi Rd, opp. to Hotel, Adyar, Chennai, Tamil Nadu 600041"
      latitude="13.003387° N"
      longitude=" 80.255043° E"
      pincode="600001"
      />
    <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="RatSMS is one of the best Service Explicit SMS Providers in India. Service explicit messages refer to the SMSes that are generated to you as the customer after consent is received by you to send these messages."
        />
        <meta
          name="keywords"
          content="service explicit sms, service explicit coimbatore, bulk sms explicit coimbatore, sms service explicit, service explicit mumbai, sms explicit, sms explicit chennai, service explicit, service explicit kerala, bulk sms explicit, service explicit chennai, service explicit bangalore, bulk sms, bulk sms service, bulk sms service provider, bulk sms provider, bulk sms services in india, bulk sms gateway, bulk sms india"
        />
        <link rel="canonical" href="https://ratsms.com/bulk-sms-service-explicit" />
        <meta property="og:site_name" content="RATSMS" />
        <meta property="og:url" content="https://ratsms.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RAT SMS : Bulk SMS Service Provider" />
        <meta name="og:image" content="/images/logo.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#655C97" />
        <meta name="msapplication-navbutton-color" content="#655C97" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
        <title>Service Explicit Bulk SMS Services - Instant, Secure Delivery</title>
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
      <div className="bg-white  ">
        <div className=" p-5 sm:p-2">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="flex  items-center  sm:pl-16">
              <div className=" sm:text-left ">
                <h1 className="text-2xl sm:text-5xl font-roboto font-light text-black p-4">
                  Bulk SMS Service Explicit
                </h1>
                <p className="text-gray-900 text-sm sm:text-lg tracking-widest w-full font-light sm:w-[30rem] pl-4">
                  SMS connects services all over the world. We offer outstanding service to wholesale clients in India.
                </p>
              </div>
            </div>

            {/* Form Section */}
            <div className="pt-10 sm:pt-1">
  <SupportForm />
</div>

          </div>

          {/* Features Section */}
          {/* (You can add more content here if needed) */}

          {/* What is Transactional SMS Section */}
          <div className="bg-white p-6 ml-6 sm:p-8  space-y-6 mt-16 sm:ml-16">
            <p className="text-xl sm:text-2xl  font-roboto text-black mb-4 sm:mb-8">
              Service Explicit Message applies to?
            </p>
            <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6">
              Messages to the existing customers recommending or promoting their other products or services.
            </p>
            <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6">
              Additionally, the consent template can be linked while creating a service explicit content template.
            </p>
            <p className="text-xl sm:text-2xl  font-roboto text-black mb-4 sm:mb-8">
              What is the price for sending Explicit SMS?
            </p>
            <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6">
              The price depends on your Volume and you can find more details on our list of bulk sms prices in India, Click to know price details.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
