// import Button from "./button";
// import Footer from "./footer";

// export default function CareersHome() {
//     return (
//         <>
//       <div className="flex items-center justify-between bg-gray-100 p-8 h-lvh">
//         {/* Left Section */}
//         <div className="flex flex-col space-y-4 max-w-lg pl-24">
//           <h1 className="text-7xl font-light text-black">Grow with us</h1>
//           <p className="font-light text-2xl pt-10 text-gray-700">
//             Join our team and be part of a dynamic, innovative, and supportive environment. 
//             We empower you to grow both personally and professionally while making an impact.
//           </p>
//           <div className="pt-12">
//           <Button/>
//         </div>
          
//         </div>
    
  
//         {/* Right Section */}
//         <div className="w-1/2 flex items-center justify-center">
//         <video
//           autoPlay
//           loop
//           muted
//           className="w-96 object-cover z-0 h-[35rem]"
//         >
//           <source src="/videos/employe.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         </div>
     
//       </div>
//     <Footer/>
//       </>
//     );
//   }
  

import Button from "./button";
import Footer from "./footer";
import Image from 'next/image';


export default function CareersHome() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center lg:justify-between  bg-gray-100 p-6 lg:p-8 min-h-screen">
        {/* Left Section */}
        <div className="flex flex-col space-y-4 max-w-lg px-4 lg:pl-24">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-black">
            Grow with us
          </h1>
          <p className="font-light text-lg sm:text-xl lg:text-2xl pt-6 lg:pt-10 text-gray-700">
            Join our team and be part of a dynamic, innovative, and supportive environment. 
            We empower you to grow both personally and professionally while making an impact.
          </p>
          <div className="pt-6 lg:pt-12">
            <Button />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
          <Image
                      src="/videos/career.gif"
                      alt="SMPP Gateway Illustration"
                      width={800}
                      height={500}
                      className="w-full max-w-md"
                    />
        </div>
      </div>
      <Footer />
    </>
  );
}
