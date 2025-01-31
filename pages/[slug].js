
// import { useRouter } from "next/router";
// import cities from "../data/cities"; // Import cities data
// import Head from 'next/head'; // Import next/head for meta tags
// import SupportForm from "../app/components/supportForm";
// import Footer from "../app/components/footer";
// import Service from "../app/components/placeService";
// import PlaceContent from "../app/components/placeContent";
// import Advantages from "../app/components/advantages";
// import Navbar from "../app/components/Navbar";
// import "../app/globals.css";
// import WhatsAppIcon from "../app/components/whatsappIcon";

// export default function CityPage() {
//   const router = useRouter();
//   const { slug } = router.query; // Capture the slug from the URL


//   if (!slug) {
//     return <div>Loading...</div>;
//   }

//   // Find the matching city based on the slug
//   const cityData = cities.find((city) => city.route === `/${slug}`);

//   if (!cityData) {
//     return (
//       <div className="text-center mt-20 text-2xl text-red-500">
//         City not found. Please check the URL.
//       </div>
//     );
//   }

//   // Fetch the metadata for the city
//   const { description, keywords, title, ogImage, canonicalUrl, ogDescription } = cityData.metadata;

//   return (
//     <>
//       {/* Dynamic Meta Tags */}
//       <Head>
//         <meta charset="UTF-8" />
//         <meta name="description" content={description} />
//         <meta name="keywords" content={keywords} />
//         <link rel="canonical" href={canonicalUrl} />
        
//         {/* Open Graph meta tags */}
//         <meta property="og:site_name" content="RATSMS" />
//         <meta property="og:url" content={`https://www.ratsms.com${cityData.route}`} />
//         <meta property="og:type" content="website" />
//         <meta property="og:title" content={title} />
//         <meta name="og:image" content={ogImage} />
//         <meta property="og:description" content={ogDescription} />
        
//         {/* Other meta tags */}
//         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta name="theme-color" content="#655C97" />
//         <meta name="msapplication-navbutton-color" content="#655C97" />
//         <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
        
//         <title>{title}</title>
//       </Head>

//       {/* Page Content */}
//        <div className="z-50">
//         <Navbar />
//       </div>
//       <WhatsAppIcon/>
//       <div
//         style={{
//           backgroundImage: "url('/images/chennai.gif')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundAttachment: "fixed",
//           width: "100%",
//           height: "100%",
//         }}
//         className=" h-screen "
//       >
//         {/* Hero Section */}
//         <div className="flex flex-col lg:flex-row justify-between items-center min-h-screen px-4 md:px-12 relative z-10 lg:mt-0">
//           <div className="w-full lg:w-1/2 text-white text-center lg:text-left mt-32 sm:mt-16 px-4">
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6">
//               Bulk SMS Service in {cityData.name}
//             </h1>
//             <p className="mt-4 text-xl sm:text-2xl text-white font-light">
//               Bulk SMS Service {cityData.name} Our simple Platform helps you to send Promotional Marketing, OTP & API SMS.
//             </p>
//           </div>

//           {/* Support Form Section */}
//           {/* <div className="flex justify-center sm:justify-end items-center min-h-screen relative pr-12 sm:pt-4 px-4">
//             <div className="text-white space-x-6 w-full sm:w-auto">
//               <SupportForm />
//             </div>
//           </div> */}
//           <div className="flex justify-center items-center">
//             <SupportForm/>
//           </div>
//         </div>
//       </div>

//       {/* City Content Section */}
//       <div className="bg-white py-16 px-6 lg:px-12">
//         <div className="max-w-4xl mx-auto text-center h-auto p-8 rounded-md shadow-md">
//           <h2 className="text-xl sm:text-2xl font-roboto text-black mb-6 transform transition duration-500 ease-in-out hover:scale-105">
//             Discover More About Bulk SMS in {cityData.name}
//           </h2>
//           <p className="text-base sm:text-lg text-black font-light mb-6 leading-relaxed text-left ">
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








import Head from 'next/head';
import { useRouter } from 'next/router';
import cities from '../data/cities';
import SupportForm from '../app/components/supportForm';
import Footer from '../app/components/footer';
import Service from '../app/components/placeService';
import PlaceContent from '../app/components/placeContent';
import Advantages from '../app/components/advantages';
import Navbar from '../app/components/Navbar';
import '../app/globals.css';
import WhatsAppIcon from '../app/components/whatsappIcon';

export default function CityPage({ cityData }) {
  const router = useRouter();

  // Handle fallback state during build-time rendering
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // If no city data is found, display an error message
  if (!cityData) {
    return (
      <div className="text-center mt-20 text-2xl text-red-500">
        City not found. Please check the URL.
      </div>
    );
  }

  // Destructure city metadata for SEO
  // const { description, keywords, title, ogImage, canonicalUrl, ogDescription } = cityData.metadata;

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content={cityData.description} />
        <meta name="keywords" content={cityData.keywords} />
        <link rel="canonical" href={cityData.canonicalUrl} />
        <meta property="og:site_name" content="RATSMS" />
        <meta property="og:url" content={`https://www.ratsms.com${cityData.route}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={cityData.title} />
        <meta name="og:image" content={cityData.ogImage} />
        <meta property="og:description" content={cityData.ogDescription} />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#655C97" />
        <title>{cityData.title}</title>
      </Head>

      <div className="z-50">
        <Navbar />
      </div>
      <WhatsAppIcon />
      <div
        style={{
          backgroundImage: "url('/images/chennai.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          width: "100%",
          height: "100%",
        }}
        className="h-screen"
      >
        <div className="flex flex-col lg:flex-row justify-between items-center min-h-screen px-4 md:px-12 relative z-10 lg:mt-0">
          <div className="w-full lg:w-1/2 text-white text-center lg:text-left mt-32 sm:mt-16 px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6">
              Bulk SMS Service in {cityData.name}
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-white font-light">
              Bulk SMS Service {cityData.name} Our simple Platform helps you to send Promotional Marketing, OTP & API SMS.
            </p>
          </div>

          <div className="flex justify-center items-center">
            <SupportForm />
          </div>
        </div>
      </div>

      <div className="bg-white py-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center h-auto p-8 rounded-md shadow-md">
          <h2 className="text-xl sm:text-2xl font-roboto text-black mb-6 transform transition duration-500 ease-in-out hover:scale-105">
            Discover More About Bulk SMS in {cityData.name}
          </h2>
          <p className="text-base sm:text-lg text-black font-light mb-6 leading-relaxed text-left">
            {cityData.content || 'No content available for this city.'}
          </p>
        </div>
      </div>

      <Service />
      <PlaceContent />
      <Advantages />
      <Footer />
    </>
  );
}

// **getStaticPaths**: Generates paths for all cities at build time
export async function getStaticPaths() {
  const paths = cities.map((city) => ({
    params: { slug: city.route.replace('/', '') }, // Strip the leading '/' to match the slug
  }));

  return {
    paths,
    fallback: 'blocking', // This will block until the page is generated for a new slug
  };
}



// **getStaticProps**: Fetches data for each city at build time
export async function getStaticProps({ params }) {
  try {
    const cityData = cities.find((city) => city.route === `/${params.slug}`);
    
    if (!cityData) {
      return { notFound: true };
    }

    return {
      props: { cityData },
      revalidate: 60,
    };
  } catch (error) {
    console.error(error); // Log the error to the console
    return { notFound: true };
  }
}











