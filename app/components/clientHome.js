

import CareersHome from "./careersHome";
import Image from 'next/image'

export default function ClientHome() {
  return (
    <>
    <div className="bg-black py-16  pl-12 pr-12">
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
        ].map((src, index) => (
          // <div
          //   key={index}
          //   className="flex-shrink-0 w-32 sm:w-40 lg:w-48 bg-white border rounded-lg shadow-lg text-center p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          // >
          //   <Image
          //     src={src}
          //     alt={`Client ${index + 1}`}
          //     className="w-full h-24 sm:h-28 lg:h-32 object-cover rounded-lg mb-4"
          //   />
          // </div>
          <div
  key={index}
  className="flex-shrink-0 w-32 sm:w-40 lg:w-48 bg-white border rounded-lg shadow-lg text-center p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
>
  <Image
    src={src}
    alt={`Client ${index + 1}`}
    width={192} // Adjust based on your actual image dimensions
    height={128} // Adjust based on your actual image dimensions
    className="w-full h-24 sm:h-28 lg:h-32 object-cover rounded-lg mb-4"
  />
</div>

        ))}
      </div>
      
    
      {/* <Footer /> */}
    </div>
    <CareersHome/>
   </>
  );
}

