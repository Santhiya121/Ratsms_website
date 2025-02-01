import Link from 'next/link';  // Make sure to import Link from Next.js
import Footer from '../../app/components/footer';
import Navbar from '../../app/components/Navbar';
import '../../app/globals.css';
import Head from "next/head";
import Image from 'next/image';
import WhatsAppIcon from '../../app/components/whatsappIcon';
import Phone from '../../app/components/phone';

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
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Rat SMS is a bulk SMS provider with free SMS API India. We are Direct TeleCom operator Connectivity. Try our abundant smart SMS with 100% delivery & free DLT registration"
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
        <meta name="og:image" content="https://ratsms.com/images/assets/ratsms-icon.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#655C97" />
        <meta name="msapplication-navbutton-color" content="#655C97" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
        <title>RAT SMS | Bulk SMS</title>
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
      <div className="bg-white p-4 sm:p-10 md:p-16 lg:p-20">
        <h1 className="text-left sm:text-center text-black text-xl sm:text-4xl  font-roboto font-light">Bulk SMS</h1>
        <h1 className="text-left sm:text-center text-black text-sm sm:text-base tracking-widest mb-5 font-roboto font-light ">Enjoy abundant SMS service in your cities</h1>
        <div className="cities-list grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {cities.map((city, index) => (
            <Link key={index} href={cityVideos[city].link || '#'}>
              <div className="city-item flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer relative overflow-hidden">
                <h2 className="text-sm sm:text-xl font-roboto font-light mb-2 text-black">{city}</h2>
                <div className="w-64 h-64 bg-gray-300 relative group">
                  <Image
                    src={cityVideos[city].imageSrc}  // Replace `imageSrc` with the path to your image
                    alt="City Image"
                    layout="fill"  // Ensures the image takes up the full container size
                    objectFit="cover"  // Ensures the image covers the container area, similar to `object-cover`
                    className="transition-opacity duration-300 group-hover:opacity-75"
                  />

                  <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xl">Explore</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
