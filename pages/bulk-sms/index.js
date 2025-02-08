import Link from 'next/link';  // Make sure to import Link from Next.js
import Footer from '../../app/components/footer';
import Navbar from '../../app/components/Navbar';

import Head from "next/head";
import Image from 'next/image';
import WhatsAppIcon from '../../app/components/whatsappIcon';
import Phone from '../../app/components/phone';
import { FaEnvelope, FaBullhorn, FaHandshake, FaLock } from "react-icons/fa";
import LocalBusinessSchema from '../../app/components/localSchema';

export default function BulkSMS() {
  // Define the video sources and links for each city
  const cityVideos = {
    "Ahmedabad": { imageSrc: "/images/city1.jpg", link: "/bulk-sms-service-provider-in-ahmedabad" },
    "Alappuzha": { imageSrc: "/images/city2.jpg", link: "/bulk-sms-service-provider-in-alappuzha" },
    "Amaravati": { imageSrc: "/images/city3.jpg", link: "/bulk-sms-service-provider-in-amaravati" },
    "Bangalore": { imageSrc: "/images/city4.jpg", link: "/bulk-sms-service-provider-in-bangalore" },
    "Banjara-Hills": { imageSrc: "/images/city5.jpg", link: "/bulk-sms-service-provider-in-banjara-hills" },
    "Chennai": { imageSrc: "/images/city6.jpg", link: "/bulk-sms-service-provider" },
    "Coimbatore": { imageSrc: "/images/city7.jpg", link: "/bulk-sms-service-provider-in-coimbatore" },
    "Delhi": { imageSrc: "/images/city8.jpg", link: "/bulk-sms-service-provider-in-delhi" },
    "Ernakulam": { imageSrc: "/images/city9.jpg", link: "/bulk-sms-service-provider-in-ernakulam" },
    "Gujarat": { imageSrc: "/images/city10.jpg", link: "/bulk-sms-service-provider-in-gujarat" },
    "Guwahati": { imageSrc: "/images/city11.jpg", link: "/bulk-sms-service-provider-in-guwahati" },
    "Hitec-City": { imageSrc: "/images/city12.jpg", link: "/bulk-sms-service-provider-in-hitec-city" },
    "Hyderabad": { imageSrc: "/images/city13.jpg", link: "/bulk-sms-service-provider-in-hyderabad" },
    "Indore": { imageSrc: "/images/city14.jpg", link: "/bulk-sms-service-provider-in-indore" },
    "Jaipur": { imageSrc: "/images/city15.jpg", link: "/bulk-sms-service-provider-in-jaipur" },
    "Jubilee-Hills": { imageSrc: "/images/city16.jpg", link: "/bulk-sms-service-provider-in-jubilee-hills" },
    "Kochi": { imageSrc: "/images/city17.jpg", link: "/bulk-sms-service-provider-in-kochi" },
    "Kolkata": { imageSrc: "/images/city18.jpg", link: "/bulk-sms-service-provider-in-kolkata" },
    "Kollam": { imageSrc: "/images/city19.jpg", link: "/bulk-sms-service-provider-in-kollam" },
    "Kottayam": { imageSrc: "/images/city20.jpg", link: "/bulk-sms-service-provider-in-kottayam" },
    "Kozhikode": { imageSrc: "/images/city21.jpg", link: "/bulk-sms-service-provider-in-kozhikode" },
    "Kurnool": { imageSrc: "/images/city22.jpg", link: "/bulk-sms-service-provider-in-kurnool" },
    "Lucknow": { imageSrc: "/images/city23.jpg", link: "/bulk-sms-service-provider-in-lucknow" },
    "Madurai": { imageSrc: "/images/city24.jpg", link: "/bulk-sms-service-provider-in-madurai" },
    "Mumbai": { imageSrc: "/images/city25.jpg", link: "/bulk-sms-service-provider-in-mumbai" },
    "Nagpur": { imageSrc: "/images/city26.jpg", link: "/bulk-sms-service-provider-in-nagpur" },
    "Noida": { imageSrc: "/images/city27.jpg", link: "/bulk-sms-service-provider-in-noida" },
    "Patna": { imageSrc: "/images/city28.jpg", link: "/bulk-sms-service-provider-in-patna" },
    "Palakkad": { imageSrc: "/images/city29.jpg", link: "/bulk-sms-service-provider-in-palakkad" },
    "Pune": { imageSrc: "/images/city30.jpg", link: "/bulk-sms-service-provider-in-pune" },
    "Raipur": { imageSrc: "/images/city31.jpg", link: "/bulk-sms-service-provider-in-raipur" },
    "Surat": { imageSrc: "/images/city32.jpg", link: "/bulk-sms-service-provider-in-surat" },
    "Thrissur": { imageSrc: "/images/city33.jpg", link: "/bulk-sms-service-provider-in-thrissur" },
    "Trivandrum": { imageSrc: "/images/city34.jpg", link: "/bulk-sms-service-provider-in-trivandrum" },
    "Vadodara": { imageSrc: "/images/city35.jpg", link: "/bulk-sms-service-provider-in-vadodara" },
    "Visakhapatnam": { imageSrc: "/images/city36.jpg", link: "/bulk-sms-service-provider-in-visakhapatnam" }
    // Add all cities here with their respective video and link
  };

  const cities = Object.keys(cityVideos);  // Get all city names
  
  return (
    <>
     <LocalBusinessSchema
      name = "RAT SMS"
      description="RAT SMS provides reliable bulk SMS services across 32 cities, ensuring fast and secure messaging for businesses"
      url="https://ratsms.com/bulk-sms"
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
          content="Get affordable bulk SMS service solutions with RAT SMS. We offer secure and reliable SMS gateway services for businesses, ensuring fast and efficient messaging.
"
        />
        <meta
          name="keywords"
          content="bulk sms gateway, bulk sms service provider, bulk sms, bulk sms service provider mumbai, bulk sms in chennai, bulk sms service gujarat, bulk sms hyderabad, bulk sms service provider bangalore, bulk sms delhi, bulk sms coimbatore, bulk sms provider in india, bulk sms service in chennai, bulk sms service provider in pune, bulk sms chennai, bulk sms service in noida, bulk sms in bangalore, bulk sms service in mumbai, bulk sms provider in indore"
        />
        <link rel="canonical" href="https://ratsms.com/bulk-sms" />
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
        <title>RAT SMS | Best Bulk SMS Service Provider & Gateway Solutions
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
      <WhatsAppIcon />
      <Phone />
      <div className="relative h-96">
        <Image
          src="/images/city_banner.jpg"  // Replace with your hero image path
          alt="Career Banner"
          layout="fill"
          objectFit="cover"
          className=" "
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-light text-white text-center px-4">
            Bulk SMS Service in City
          </h1>
        </div>
      </div>
      <div className="bg-white p-4 sm:p-10 md:p-16 lg:p-20">
        <h1 className="text-left sm:text-center text-black text-xl sm:text-4xl  font-roboto font-light">Bulk SMS</h1>
        <h1 className="text-left sm:text-center text-black text-sm sm:text-base tracking-widest mb-5 font-roboto font-light ">Enjoy abundant SMS service in your cities</h1>
        <div className="cities-list grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {cities.map((city, index) => (
            <Link key={index} href={cityVideos[city].link || '#'}>
              <div className="city-item flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer relative overflow-hidden">
             
                <div className="w-64 h-64 bg-gray-300 relative group">
                  <Image
                    src={cityVideos[city].imageSrc}  // Replace `imageSrc` with the path to your image
                    alt="City Image"
                    width={400}  // Set explicit width (adjust as needed)
                    height={400}
                    // Set explicit height (adjust as needed)
                    style={{ objectFit: "cover" }} // Apply objectFit via style
                    className="transition-opacity duration-300 group-hover:opacity-75 w-64 h-64 bg-gray-300 relative group "
                  />
              

                  <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xl">Explore</span>
                  </div>
                </div>
                <h2 className="text-sm sm:text-xl font-roboto font-light mb-2 text-black">{city}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-white text-black font-roboto">
        {/* Header Section */}


        {/* Main Content */}
        <main className="container mx-auto py-16 px-4 lg:px-24">
          {/* What is Bulk SMS? */}
          <section className="text-center">
            <h2 className="sm:text-4xl text-xl font-light text-black mb-6">What is Bulk SMS?</h2>
            <p className="mt-6 text-base text-gray-600 tracking-widest ">
              Bulk SMS is the process of sending a large number of SMS messages to a list of recipients simultaneously. This
              service is perfect for businesses looking to reach a large audience quickly and effectively.
            </p>
          </section>


          {/* Why Choose RAT SMS? */}
          <section className="mt-16">
            <h2 className="sm:text-4xl text-xl font-light text-black text-center mb-8">Why Choose RAT SMS?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="bg-white text-black p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <FaEnvelope className="text-4xl text-black mb-4 mx-auto" />
                <h3 className="text-xl font-light mb-4">Instant Delivery</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Get your message delivered instantly across the globe. Real-time communication at your fingertips.
                </p>
              </div>

              <div className="bg-white text-black p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <FaBullhorn className="text-4xl text-black mb-4 mx-auto" />
                <h3 className="text-xl font-light mb-4">Cost-Effective</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Send thousands of messages at a fraction of the cost. Maximize your marketing budget.
                </p>
              </div>

              <div className="bg-white text-black p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <FaHandshake className="text-4xl text-black mb-4 mx-auto" />
                <h3 className="text-xl font-light mb-4">High Open Rate</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  SMS messages boast an incredibly high open rate, ensuring that your message reaches your audience.
                </p>
              </div>

              <div className="bg-white text-black p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <FaLock className="text-4xl text-black mb-4 mx-auto" />
                <h3 className="text-xl font-light mb-4">Reliable</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Our gateway ensures secure and reliable delivery, protecting your messages and data.
                </p>
              </div>
            </div>
          </section>

          {/* Types of Bulk SMS Services */}
          <section className="mt-16">
            <h2 className="sm:text-4xl text-xl font-light text-black text-center mb-8">Types of Bulk SMS Services We Offer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-10">
              {/* Promotional SMS */}
              <div className="bg-white text-black p-10 rounded-3xl shadow-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Image
                  src="/images/pro.jpg" // Ensure the path is correct, for example, using the 'public' folder
                  alt="Promotional SMS"
                  className="mx-auto h-48 w-48 object-cover rounded-full mb-8 transition-transform transform hover:scale-110"
                  width={192} // width of the image in pixels
                  height={192} // height of the image in pixels
                />
                <h3 className="text-xl font-light text-black">Promotional SMS</h3>
                <p className="mt-4 text-base text-gray-600 leading-relaxed">
                  Reach your audience with time-sensitive offers, discounts, and promotions.
                </p>
              </div>

              {/* Transactional SMS */}
              <div className="bg-white text-black p-10 rounded-3xl shadow-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Image
                  src="/images/tra.jpg" // Ensure the path is correct, for example, using the 'public' folder
                  alt="Promotional SMS"
                  className="mx-auto h-48 w-48 object-cover rounded-full mb-8 transition-transform transform hover:scale-110"
                  width={192} // width of the image in pixels
                  height={192} // height of the image in pixels
                />
                <h3 className="text-xl font-light text-black">Transactional SMS</h3>
                <p className="mt-4 text-base text-gray-600 leading-relaxed">
                  Send essential updates like OTPs, order confirmations, and other important transactional messages.
                </p>
              </div>

              {/* OTP SMS */}
              <div className="bg-white text-black p-10 rounded-3xl shadow-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Image
                  src="/images/otp.jpg" // Ensure the path is correct, for example, using the 'public' folder
                  alt="Promotional SMS"
                  className="mx-auto h-48 w-48 object-cover rounded-full mb-8 transition-transform transform hover:scale-110"
                  width={192} // width of the image in pixels
                  height={192} // height of the image in pixels
                />
                <h3 className="text-xl font-light text-black">OTP SMS</h3>
                <p className="mt-4 text-base text-gray-600 leading-relaxed">
                  Enhance security with One-Time Password (OTP) SMS, ensuring safe login and transactions.
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose Us? */}
          <section className="mt-16">
            <h2 className="sm:text-4xl text-xl font-light text-black text-center mb-8">Why Choose Us?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 rounded-lg shadow-md p-8">
              <div className="text-center ">
                <FaBullhorn className="text-4xl text-black mb-4 mx-auto" />
                <h3 className="text-xl font-light text-black mb-4">Nationwide Coverage</h3>
                <p className="text-base text-gray-600 leading-relaxed">We cover all major cities in India, ensuring wide reach.</p>
              </div>

              <div className="text-center">
                <FaEnvelope className="text-4xl text-black mb-4 mx-auto" />
                <h3 className="text-xl font-light text-black mb-4">Easy Integration</h3>
                <p className="text-base text-gray-600 leading-relaxed">Seamlessly integrate with your existing systems and applications.</p>
              </div>

              <div className="text-center">
                <FaHandshake className="text-4xl text-black mb-4 mx-auto" />
                <h3 className="text-xl font-light text-black mb-4">Advanced Analytics</h3>
                <p className="text-base text-gray-600 leading-relaxed">Track your campaigns and gain insights through our analytics dashboard.</p>
              </div>
            </div>
          </section>

          {/* Get in Touch */}
          <section className="mt-16 text-center">
            <h2 className="sm:text-4xl text-xl font-light text-black mb-6">Get in Touch</h2>
            <p className="mt-6 text-base text-gray-600 tracking-widest">
              Ready to elevate your communication? Contact us today to get started with Bulk SMS services.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="bg-black text-white py-4 px-16 rounded-2xl text-xl font-light hover:bg-gray-800 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </section>
        </main>

        {/* Footer Section */}
        
      </div>

      <Footer />
    </>
  );
}
