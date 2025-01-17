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
















import { useRouter } from "next/router";
import SupportForm from "../app/components/supportForm";
import "../app/globals.css";

import Footer from "../app/components/footer";
import Service from "../app/components/placeService";
import PlaceContent from "../app/components/placeContent";
import Advantages from "../app/components/advantages";
import Navbar from "../app/components/Navbar";

// List of static routes
// const STATIC_ROUTES = ["home", "pricing", "product", "contact", "blog"];

export default function CityPage() {
  const router = useRouter();
  const { slug } = router.query; // Capture the slug from the URL

  // Perform redirection on mount if it's a static route
  // useEffect(() => {
  //   if (slug && STATIC_ROUTES.includes(slug)) {
  //     router.push(`/${slug}`); // Redirect to the correct static page
  //   }
  // }, [slug, router]); // Depend on `slug` and `router`

  // if (!slug) {
  //   return null;
  // }

  // Extract city name from the slug if not a static route
  const city = slug?.replace("bulk-sms-service-provider-in-", "").replace(/-/g, " ");

  return (
    <>
    <div className="top-10">
        <Navbar />
      </div>
      
      <div
        style={{
          backgroundImage: "url('/images/chennai.gif')", // Background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          width: "100%",
          height: "100vh", // Full-screen background image
        }}
      >
        {/* Main Content */}
        <div className="flex justify-between items-center min-h-screen px-12 relative z-10">
          <div className="w-1/2 text-white">
            <h1 className="text-6xl font-light text-white mb-6">
              Bulk SMS Service in {city || "Your City"}
            </h1>
            <p className="mt-4 text-2xl text-white font-light">
              Enjoy abundant SMS services in {city || "your city"} with the best-in-class gateway.
            </p>
          </div>
          <div className="w-1/2 pt-10">
            <SupportForm />
          </div>
        </div>
      </div>
      <div>
        <Service />
      </div>
      <div>
        <PlaceContent />
      </div>
      <div>
        <Advantages />
      </div>
      <div className="top-10">
        <Footer />
      </div>

    </>
  );
}

