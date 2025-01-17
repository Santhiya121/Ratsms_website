
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
import ServiceHome from "../app/components/service_home";
import SpeedTest from "../app/components/speedTest";
import SupportForm from "../app/components/supportForm";
import WhatsAppIcon from "../app/components/whatsappIcon";

export default function Home() {
  return (
    <div>
      <div className="">
      <Navbar/>
      </div>
      <div className="relative top-0 w-full min-h-screen">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/RAT.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Left-Center Positioned SupportForm */}
        <div className="flex justify-end items-center min-h-screen relative pr-12">
          <div className="text-white space-x-6">
            <SupportForm />
          </div>
        </div>
      </div>
      <ServiceHome/>
      <WhatsAppIcon/>
      <SpeedTest/>
      {/* <Footer/> */}
    </div>
  );
}
