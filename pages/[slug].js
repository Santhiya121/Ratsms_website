// import { useRouter } from "next/router";

// export default function CityPage() {
//   const router = useRouter();
//   const { slug } = router.query;

//   // Extract city name from the slug
//   const city = slug?.replace("bulk-sms-service-provider-in-", "").replace(/-/g, " ");

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
//       <h1 className="text-4xl font-bold text-blue-600">
//         Bulk SMS Service in {city || "Your City"}
//       </h1>
//       <p className="mt-4 text-lg text-gray-700">
//         Enjoy hii SMS services in {city || "your city"} with the best-in-class gateway.
//       </p>
//     </div>
//   );
// }


// import { useRouter } from "next/router";
// import SupportForm from "../app/components/supportForm"; // Assuming your SupportForm is in this path
// import "../app/globals.css"; // Import global styles
// import Navbar from "../app/components/Navbar";
// import Footer from "../app/components/footer";
// import Service from "../app/components/placeService";
// import PlaceContent from "../app/components/placeContent";
// import Advantages from "../app/components/advantages";
// // import HomeAbout from "../app/components/homeAbout";

// const STATIC_ROUTES = ["home", "pricing", "product", "contact", "blog"];
// export default function CityPage() {
//   const router = useRouter();
//   const { slug } = router.query;

//   if (STATIC_ROUTES.includes(slug)) {
//     if (typeof window !== "undefined") {
//       router.push(`/${slug}`);
//     }
//     return null; // Prevent rendering while redirecting
//   }

//   // Extract city name from the slug
//   const city = slug?.replace("bulk-sms-service-provider-in-", "").replace(/-/g, " ");
 

//   return (
//     <>
//     <div>
//       <Navbar/>
//     </div>
//     <div
//       style={{
//         backgroundImage: "url('/images/chennai.gif')", // Background image, adjust as necessary
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundAttachment: "fixed",
//         width: "100%",
//         height: "100vh", // Full-screen background image
//       }}
//     >
//       {/* Main Content */}
//       <div className="flex justify-between items-center min-h-screen px-12 relative z-10">
//         {/* Left Side Content (City-specific Text) */}
//         <div className="w-1/2 text-white">
//           {/* Title */}
//           <h1 className="text-6xl font-light text-white mb-6">
//             Bulk SMS Service in {city || "Your City"}
//           </h1>

//           {/* Description */}
//           <p className="mt-4 text-2xl text-white font-light">
//             Enjoy abundant SMS services in {city || "your city"} with the best-in-class gateway.
//           </p>
//         </div>

//         {/* Right Side Form */}
//         <div className="w-1/2 pt-10 ">
//           <SupportForm /> {/* Your Support Form */}
//         </div>
//       </div>
//     </div>
//     <div>
//       <Service/>
//     </div>
//     <div>
//       <PlaceContent/>
//     </div>
//     <div>
//       <Advantages/>
//     </div>
//     <div className="top-10">
//     <Footer/>
//     </div>
//     </>
//   );
// }.













// ---------------------------------------------------------import code------------------------------------------


// import { useRouter } from "next/router";
// import SupportForm from "../app/components/supportForm";
// import "../app/globals.css";
// import Footer from "../app/components/footer";
// import Service from "../app/components/placeService";
// import PlaceContent from "../app/components/placeContent";
// import Advantages from "../app/components/advantages";
// import Navbar from "../app/components/Navbar";

// export default function CityPage() {
//   const router = useRouter();
//   const { slug } = router.query; // Capture the slug from the URL

//   // Extract city name from the slug if not a static route
//   const city = slug?.replace("bulk-sms-service-provider-in-", "").replace(/-/g, " ");

//   return (
//     <>
//       <div className="relative z-20">
//         {/* Navbar with higher z-index */}
//         <Navbar />
//       </div>

//       <div
//         style={{
//           backgroundImage: "url('/images/chennai.gif')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundAttachment: "fixed",
//           width: "100%",
//           height: "100vh",
//         }}
//         className="relative z-10"
//       >
//         <div className="flex flex-col lg:flex-row justify-between items-center min-h-screen  px-4 md:px-12 relative z-10  lg:mt-0">
//           {/* Left Side Content */}
//           <div className="w-full lg:w-auto text-white text-center lg:text-left mt-32 sm:mt-16">
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6">
//               Bulk SMS Service in {city || "Your City"}
//             </h1>
//             <p className="mt-4 text-xl sm:text-2xl text-white font-light">
//               Enjoy abundant SMS services in {city || "your city"} with the best-in-class gateway.
//             </p>
//           </div>
        
//           {/* Right Side Form */}
//           <div className="w-full lg:w-1/2 pt-10">
//             <SupportForm />
//           </div>
//         </div>
//       </div>

//       {/* Service Component */}
//       <div>
//         <Service />
//       </div>

//       {/* PlaceContent Component */}
//       <div>
//         <PlaceContent />
//       </div>

//       {/* Advantages Component */}
//       <div>
//         <Advantages />
//       </div>

//       {/* Footer Component */}
//       <div className="top-10">
//         <Footer />
//       </div>
//     </>
//   );
// }


// for test


// import { useRouter } from "next/router";
// import cities from "../data/cities"; // Import cities data
// import SupportForm from "../app/components/supportForm";
// import "../app/globals.css";
// import Footer from "../app/components/footer";
// import Service from "../app/components/placeService";
// import PlaceContent from "../app/components/placeContent";
// import Advantages from "../app/components/advantages";
// import Navbar from "../app/components/Navbar";

// export default function CityPage() {
//   const router = useRouter();
//   const { slug } = router.query; // Capture the slug from the URL

//   // If slug is undefined (during initial page load), return an empty div
//   if (!slug) {
//     return <div>Loading...</div>;
//   }

//   // Extract city name from the slug and match it to the city data
//   const city = slug?.replace("bulk-sms-service-provider-in-", "").replace(/-/g, " ");

//   // Find the city object from the cities array based on the city name
//   const cityData = cities.find((cityObj) => cityObj.name.toLowerCase() === city?.toLowerCase());

//   if (!cityData) {
//     return <div>City not found</div>;
//   }

//   return (
//     <>
//       <div className="relative z-20">
//         {/* Navbar with higher z-index */}
//         <Navbar />
//       </div>

//       <div
//         style={{
//           backgroundImage: "url('/images/chennai.gif')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundAttachment: "fixed",
//           width: "100%",
//           height: "100vh",
//         }}
//         className="relative z-10"
//       >
//         <div className="flex flex-col lg:flex-row justify-between items-center min-h-screen px-4 md:px-12 relative z-10 lg:mt-0">
//           {/* Left Side Content */}
//           <div className="w-full lg:w-auto text-white text-center lg:text-left mt-32 sm:mt-16">
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6">
//               Bulk SMS Service in {cityData.name || "Your City"}
//             </h1>
//             <p className="mt-4 text-xl sm:text-2xl text-white font-light">
//               Enjoy abundant SMS services in {cityData.name || "your city"} with the best-in-class gateway.
//             </p>
//             {/* Display the content for the city */}
//             {/* <p className="mt-4 text-xl sm:text-2xl text-white font-light">
//               {cityData.content || "No content available for this city."}
//             </p> */}
//           </div>

//           {/* Right Side Form */}
//           <div className="w-full lg:w-1/2 pt-10">
//             <SupportForm />
//           </div>
//         </div>
//       </div>

//       <div className="bg-white py-16 px-6 lg:px-12">
//   {/* Content Section with Black & White design */}
//   <div className="max-w-8xl mx-auto text-center h-auto p-8 rounded-md shadow-md ">
//     <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6 transform transition duration-500 ease-in-out hover:scale-105">
//       {/* Heading Animation */}
//       Discover More About Bulk SMS in {cityData.name || "Your City"}
//     </h2>

//     <p className="text-xl sm:text-1xl p-12 text-black font-roboto mb-6 leading-relaxed text-left animate-fadeIn">
//       {/* Content Section */}
//       {cityData.content || "No content available for this city."}
//     </p>

//     {/* Optional Button */}
//     <div className="mt-8 mb-10 ">
//       <a
//         href="#"
//         className="bg-black text-white py-3 px-8 rounded-full text-lg font-semibold transform transition duration-300 ease-in-out hover:bg-white hover:text-black border-2 border-black"
//       >
//         Get Started
//       </a>
//     </div>
//   </div>
// </div>




//       {/* Service Component */}
//       <div>
//         <Service />
//       </div>

     

//       {/* PlaceContent Component */}
//       <div>
//         <PlaceContent />
//       </div>

//       {/* Advantages Component */}
//       <div>
//         <Advantages />
//       </div>

//       {/* Footer Component */}
//       <div className="top-10">
//         <Footer />
//       </div>
//     </>
//   );
// }



//add chennai page
// important code
// import { useRouter } from "next/router";
// import cities from "../data/cities"; // Import cities data
// import SupportForm from "../app/components/supportForm";
// import Footer from "../app/components/footer";
// import Service from "../app/components/placeService";
// import PlaceContent from "../app/components/placeContent";
// import Advantages from "../app/components/advantages";
// import Navbar from "../app/components/Navbar";
// import "../app/globals.css";

// export default function CityPage() {
//   const router = useRouter();
//   const { slug } = router.query; // Capture the slug from the URL

//   // Handle loading state for initial rendering
//   if (!slug) {
//     return <div>Loading...</div>;
//   }

//   // Match the slug with cities data
//   const cityData = cities.find((city) => city.route === `/${slug}`);

//   if (!cityData) {
//     // Render an error message if no city is found
//     return (
//       <div className="text-center mt-20 text-2xl text-red-500">
//         City not found. Please check the URL.
//       </div>
//     );
//   }

//   return (
//     <>
//       {/* Navbar */}
//       <div className="relative z-20">
//         <Navbar />
//       </div>

//       {/* Hero Section */}
//       <div
//   style={{
//     backgroundImage: "url('/images/chennai.gif')",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundAttachment: "fixed",
//     width: "100%",
//     height:"100%"
//   }}
//   className="relative z-10 h-screen"
// >
//   <div className="flex flex-col lg:flex-row justify-between items-center min-h-screen px-4 md:px-12 relative z-10 lg:mt-0">
//     <div className="w-full lg:w-1/2 text-white text-center lg:text-left mt-32 sm:mt-16 px-4">
//       <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6">
//         Bulk SMS Service in {cityData.name || "Your City"}
//       </h1>
//       <p className="mt-4 text-xl sm:text-2xl text-white font-light">
//       Bulk SMS Service  {cityData.name || "your city"} Our simple Platform helps you to send Promotional Marketing, OTP & API SMS.
//       </p>
//     </div>

//     {/* Support Form Section */}
//     <div className="flex justify-center sm:justify-end items-center min-h-screen relative pr-12 sm:pt-4 px-4">
//       <div className="text-white space-x-6 w-full sm:w-auto">
//         <SupportForm />
//       </div>
//     </div>
//   </div>
// </div>



//       {/* City Content Section */}
//       <div className="bg-white py-16 px-6 lg:px-12">
//         <div className="max-w-4xl mx-auto text-center h-auto p-8 rounded-md shadow-md">
//           <h2 className="text-xl sm:text-2xl font-roboto text-black mb-6 transform transition duration-500 ease-in-out hover:scale-105">
//             Discover More About Bulk SMS in {cityData.name || "Your City"}
//           </h2>
//           <p className="text-base sm:text-lg text-black font-light mb-6 leading-relaxed text-left animate-fadeIn">
//             {cityData.content || "No content available for this city."}
//           </p>
//         </div>
//       </div>

//       {/* Service Section */}
//       <Service />

//       {/* Additional Components */}
//       <PlaceContent />
//       <Advantages />
//       <Footer />
//     </>
//   );
// }


//add meta data
import { useRouter } from "next/router";
import cities from "../data/cities"; // Import cities data
import Head from 'next/head'; // Import next/head for meta tags
import SupportForm from "../app/components/supportForm";
import Footer from "../app/components/footer";
import Service from "../app/components/placeService";
import PlaceContent from "../app/components/placeContent";
import Advantages from "../app/components/advantages";
import Navbar from "../app/components/Navbar";
import "../app/globals.css";
import WhatsAppIcon from "../app/components/whatsappIcon";

export default function CityPage() {
  const router = useRouter();
  const { slug } = router.query; // Capture the slug from the URL

  // Handle loading state for initial rendering
  if (!slug) {
    return <div>Loading...</div>;
  }

  // Find the matching city based on the slug
  const cityData = cities.find((city) => city.route === `/${slug}`);

  if (!cityData) {
    return (
      <div className="text-center mt-20 text-2xl text-red-500">
        City not found. Please check the URL.
      </div>
    );
  }

  // Fetch the metadata for the city
  const { description, keywords, title, ogImage, canonicalUrl, ogDescription } = cityData.metadata;

  return (
    <>
      {/* Dynamic Meta Tags */}
      <Head>
        <meta charset="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph meta tags */}
        <meta property="og:site_name" content="RATSMS" />
        <meta property="og:url" content={`https://www.ratsms.com${cityData.route}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta name="og:image" content={ogImage} />
        <meta property="og:description" content={ogDescription} />
        
        {/* Other meta tags */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#655C97" />
        <meta name="msapplication-navbutton-color" content="#655C97" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
        
        <title>{title}</title>
      </Head>

      {/* Page Content */}
       <div className="z-50">
        <Navbar />
      </div>
      <WhatsAppIcon/>
      <div
        style={{
          backgroundImage: "url('/images/chennai.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          width: "100%",
          height: "100%",
        }}
        className=" h-screen "
      >
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center min-h-screen px-4 md:px-12 relative z-10 lg:mt-0">
          <div className="w-full lg:w-1/2 text-white text-center lg:text-left mt-32 sm:mt-16 px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6">
              Bulk SMS Service in {cityData.name}
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-white font-light">
              Bulk SMS Service {cityData.name} Our simple Platform helps you to send Promotional Marketing, OTP & API SMS.
            </p>
          </div>

          {/* Support Form Section */}
          {/* <div className="flex justify-center sm:justify-end items-center min-h-screen relative pr-12 sm:pt-4 px-4">
            <div className="text-white space-x-6 w-full sm:w-auto">
              <SupportForm />
            </div>
          </div> */}
          <div className="flex justify-center items-center">
            <SupportForm/>
          </div>
        </div>
      </div>

      {/* City Content Section */}
      <div className="bg-white py-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center h-auto p-8 rounded-md shadow-md">
          <h2 className="text-xl sm:text-2xl font-roboto text-black mb-6 transform transition duration-500 ease-in-out hover:scale-105">
            Discover More About Bulk SMS in {cityData.name}
          </h2>
          <p className="text-base sm:text-lg text-black font-light mb-6 leading-relaxed text-left ">
            {cityData.content || "No content available for this city."}
          </p>
        </div>
      </div>

      {/* Service Section */}
      <Service />

      {/* Additional Components */}
      <PlaceContent />
      <Advantages />
      <Footer />
    </>
  );
}








