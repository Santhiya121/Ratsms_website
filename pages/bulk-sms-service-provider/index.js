// import Navbar from "../../app/components/Navbar";
// import SupportForm from "../../app/components/supportForm";

// export default function Chennai() {
//   return (
//     <>
//       <Navbar />
//       <div
//         style={{
//           backgroundImage: "url('images/chennai.gif')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundAttachment: "fixed",
//           width: "100%",
//           height: "100vh",
//         }}
//       >
//         {/* Main Container */}
//         <div className="flex justify-between items-center min-h-screen px-12">
//           {/* Left Content */}
//           <div className="text-white space-y-6 pl-20">
//             <h1 className="font-light text-6xl">Bulk SMS Gateway Chennai</h1>
//             <p className=" text-2xl font-light w-1/2">Bulk SMS Service Chennai Our simple Platform helps you to send Promotional Marketing, OTP & API SMS.</p>
//           </div>

//           {/* Right Form */}
//           <div className=" p-6 rounded-lg shadow-lg">
//             <SupportForm />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import { useRouter } from "next/router";

export default function CityPage() {
  const router = useRouter();
  const { city } = router.query;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">
        Bulk SMS Service in {city ? city.replace("-", " ") : "Your City"}
      </h1>
      <p className="mt-4 text-lg text-gray-700">
        Enjoy abundant SMS services in {city ? city.replace("-", " ") : "your city"} with the best-in-class gateway.
      </p>
    </div>
  );
}

