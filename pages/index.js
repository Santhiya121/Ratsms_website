


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
import cities from "../data/cities";  // Assuming your cities are defined here
import Link from "next/link";
import SupportForm from "../components/supportForm"; // Import the SupportForm component
import "../app/globals.css"; // Import global styles

export default function Home() {
  return (
    <>
      {/* Background Image Container */}
      <div
        style={{
          backgroundImage: "url('/images/chennai.gif')", // Ensure the image is in the public/images folder
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          width: "100%",
          height: "100vh", // Make it cover the full screen height
        }}
      >
        {/* Main Content */}
        <div className="flex justify-between items-center min-h-screen px-12 relative z-10">
          {/* Left Side Content (City List) */}
          <div className="w-1/2 text-white">
            {/* Title */}
            <h1 className="text-3xl font-bold text-blue-600 mb-6">
              Enjoy Abundant SMS Services in Your Cities
            </h1>

            {/* "hiii" Text */}
            <h1 className="text-4xl font-bold text-white mb-6">hiii</h1>

            {/* City List */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
              {cities.map((city) => (
                <div
                  key={city.name}
                  className="p-4 bg-blue-500 text-white rounded-md shadow-md hover:shadow-lg transition-shadow"
                >
                  <h2 className="text-xl font-semibold">{city.name}</h2>
                  <Link href={`/${city.route}`}>
                    <a className="text-sm underline hover:text-gray-200">
                      Explore {city.name}
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Form */}
          <div className="w-1/2 p-6 bg-white rounded-lg shadow-lg">
            <SupportForm /> {/* Your Support Form */}
          </div>
        </div>
      </div>
    </>
  );
}






