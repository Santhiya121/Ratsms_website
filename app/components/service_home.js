// // import SpeedTest from "./speedTest";

// import Button from "./button";
// import HomeAbout from "./homeAbout";

// export default function ServiceHome() {
//     return (
//         <>
//         <div className="h-[50rem] bg-white ">
//         <div className="p-8 "><h1 className="text-4xl font-roboto text-black">Our SMS Delivery Solutions</h1></div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 ">
//         {/* Card 1: Unmatched Bulk SMS Delivery */}
//         <div className="p-6  bg-white text-center">
//           <img
//             src="/images/sms1.jpg"
//             alt="Unmatched Bulk SMS Delivery"
//             className="w-full h-80 mx-auto mb-4 object-cover"
//           />
//           <h3 className="text-lg font-semibold text-gray-800">
//             UNMATCHED BULKSMS DELIVERY
//           </h3>
//           <p className="font-light text-black mt-2">
//             Our direct partnership with multiple telecom operators and smart SMS
//             gateway technology ensure best-in-class delivery rates & speeds.
//           </p>
//         </div>
  
//         {/* Card 2: Multiple Operator */}
//         <div className="p-6  bg-white text-center">
//           <img
//             src="/images/sms2.jpg"
//             alt="Multiple Operator"
//             className="w-full h-80 mx-auto mb-4 object-cover"
//           />
//           <h3 className="text-lg font-semibold text-gray-800">
//             MULTIPLE OPERATOR
//           </h3>
//           <p className="font-light text-black mt-2">
//             Multiple operator support ensures that one of our operators will
//             automatically start working if the other is inactive.
//           </p>
//         </div>
  
//         {/* Card 3: Smart Retry Mechanism */}
//         <div className="p-6  bg-white text-center">
//           <img
//             src="/images/sms3.jpg"
//             alt="Smart Retry Mechanism"
//             className="w-full h-80 mx-auto mb-4 object-cover"
//           />
//           <h3 className="text-lg font-semibold text-gray-800">
//             SMART RETRY MECHANISM
//           </h3>
//           <p className="font-light text-black mt-2">
//             Our Smart Routing helps transmit your bulk SMS over multiple network
//             routes carrying the least traffic.
//           </p>
//         </div>
//       </div>
//       <div className="flex items-center justify-center mb-20" >
//       <Button/>
//         </div>

//         </div>
//         {/* <SpeedTest/> */}
//         <HomeAbout/>
      
//       </>
//     );
//   }
  

// import SpeedTest from "./speedTest";

import Button from "./button";
import HomeAbout from "./homeAbout";

export default function ServiceHome() {
  return (
    <>
      <div className="h-[75rem] md:h-screen bg-white pb-28">{/* Full height and white background */}
        <div className="p-4 md:p-8">
          <h1 className="text-2xl md:text-4xl font-roboto text-black text-center md:text-left">
            Our SMS Delivery Solutions
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 md:p-8">
          {/* Card 1: Unmatched Bulk SMS Delivery */}
          <div className="p-4 bg-white text-center border rounded-lg shadow-md">
            <img
              src="/images/sms1.jpg"
              alt="Unmatched Bulk SMS Delivery"
              className="w-full h-48 md:h-80 mx-auto mb-4 object-cover rounded"
            />
            <h3 className="text-md md:text-lg font-semibold text-gray-800">
              UNMATCHED BULKSMS DELIVERY
            </h3>
            <p className="text-sm md:font-light text-black mt-2">
              Our direct partnership with multiple telecom operators and smart
              SMS gateway technology ensure best-in-class delivery rates & speeds.
            </p>
          </div>

          {/* Card 2: Multiple Operator */}
          <div className="p-4 bg-white text-center border rounded-lg shadow-md">
            <img
              src="/images/sms2.jpg"
              alt="Multiple Operator"
              className="w-full h-48 md:h-80 mx-auto mb-4 object-cover rounded"
            />
            <h3 className="text-md md:text-lg font-semibold text-gray-800">
              MULTIPLE OPERATOR
            </h3>
            <p className="text-sm md:font-light text-black mt-2">
              Multiple operator support ensures that one of our operators will
              automatically start working if the other is inactive.
            </p>
          </div>

          {/* Card 3: Smart Retry Mechanism */}
          <div className="p-4 bg-white text-center border rounded-lg shadow-md">
            <img
              src="/images/sms3.jpg"
              alt="Smart Retry Mechanism"
              className="w-full h-48 md:h-80 mx-auto mb-4 object-cover rounded"
            />
            <h3 className="text-md md:text-lg font-semibold text-gray-800">
              SMART RETRY MECHANISM
            </h3>
            <p className="text-sm md:font-light text-black mt-2">
              Our Smart Routing helps transmit your bulk SMS over multiple
              network routes carrying the least traffic.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mb-10 md:mb-20">
          <Button />
        </div>
      </div>
      {/* <SpeedTest /> */}
      <HomeAbout />
    </>
  );
}
