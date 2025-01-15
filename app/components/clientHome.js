// // import Footer from "./footer";

// import CareersHome from "./careersHome";


// export default function ClientHome() {
//   return (
//     <div className=" bg-black py-16 h-lvh">
//       <div className=" mb-8">
//         <h1 className="text-4xl font-light pl-16 text-white">Our Clients</h1>
//       </div>

//       {/* Scrolling container */}
//       <div className="flex overflow-x-auto space-x-8 p-8 pl-16">
//         {/* Client Cards */}
//         <div className="w-60 bg-white border rounded-lg shadow-lg text-center p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
//           <img
//             src="/images/cilent1.webp"
//             alt="Client 1"
//             className="w-full h-40 object-cover rounded-lg mb-4"
//           />
//         </div>
//         <div className="w-60 bg-white border rounded-lg shadow-lg text-center p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
//           <img
//             src="/images/cilent_1.png"
//             alt="Client 2"
//             className="w-full h-40 object-cover rounded-lg mb-4"
//           />
//         </div>
//         <div className="w-60 bg-white border rounded-lg shadow-lg text-center p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
//           <img
//             src="/images/cilent_2.jpg"
//             alt="Client 3"
//             className="w-full h-40 object-cover rounded-lg mb-4"
//           />
//         </div>
//         <div className="w-60 bg-white border rounded-lg shadow-lg text-center p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
//           <img
//             src="/images/cilent_3.webp"
//             alt="Client 1"
//             className="w-full h-40 object-cover rounded-lg mb-4"
//           />
//         </div>
//         <div className="w-60 bg-white border rounded-lg shadow-lg text-center p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
//           <img
//             src="/images/cilent_4.png"
//             alt="Client 1"
//             className="w-full h-40 object-cover rounded-lg mb-4"
//           />
//         </div>
//         {/* Add more client cards as needed */}
//         <div className="w-60 bg-white border rounded-lg shadow-lg text-center p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
//           <img
//             src="/images/cilent_5.png"
//             alt="Client 1"
//             className="w-full h-40 object-cover rounded-lg mb-4"
//           />
//         </div>
       
       
       
//       </div>
//       <CareersHome/>
//       {/* <Footer/> */}
//     </div>
//   );
// }


import CareersHome from "./careersHome";

export default function ClientHome() {
  return (
    <div className="bg-black py-16 min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light pl-6 sm:pl-16 text-white">
          Our Clients
        </h1>
      </div>

      {/* Scrolling container */}
      <div className="flex overflow-x-auto space-x-4 sm:space-x-8 p-4 sm:p-8 pl-6 sm:pl-16">
        {/* Client Cards */}
        {[
          "/images/cilent1.webp",
          "/images/cilent_1.png",
          "/images/cilent_2.jpg",
          "/images/cilent_3.webp",
          "/images/cilent_4.png",
          "/images/cilent_5.png",
        ].map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-40 sm:w-48 lg:w-60 bg-white border rounded-lg shadow-lg text-center p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={src}
              alt={`Client ${index + 1}`}
              className="w-full h-32 sm:h-36 lg:h-40 object-cover rounded-lg mb-4"
            />
          </div>
        ))}
      </div>
      <CareersHome />
      {/* <Footer /> */}
    </div>
  );
}
