// import Footer from "../../app/components/footer";
// import Navbar from "../../app/components/Navbar";
// import SupportForm from "../../app/components/supportForm";
// import "../../app/globals.css";


// export default function ServiceExplicit() {
//   return (
//     <>
//     <div className="bg-black">
//         <Navbar/>
//     </div>
//     <div className="bg-white py-10 mt-28">
//       <div className="container mx-auto space-y-10 p-10 ">
//         {/* Header Section */}
//         <div className="flex justify-between">
//             <div className="flex justify-center items-center pl-16">
//         <div className="text-center space-y-4 ">
//           <h1 className="text-5xl  font-roboto text-black p-4">Bulk SMS Service Explicit</h1>
          
//           <p className="text-gray-900 text-xl w-[40rem] pl-4">
//           SMS connects services all over the world. We offer outstanding service to wholesale clients in India.
//           </p>
         
//         </div>
//         </div>

//         {/* Form Section */}
//         <div className="bg-black">
//           <SupportForm/>
//         </div>
//         </div>

//         {/* Features Section */}
      

//         {/* What is Transactional SMS Section */}
//         <div className="bg-white p-8 rounded-lg shadow-2xl">
//   <h3 className="text-3xl font-bold text-gray-800 mb-8">Service Explicit Message applies to?</h3>
//   <p className="text-gray-700 mb-6">
//     Messages to the existing customers recommending or promoting their other products or services.
//   </p>
//   <p className="text-gray-700 mb-6">
//     Additionally, the consent template can be linked while creating a service explicit content template.
//   </p>
//   <h3 className="text-3xl font-bold text-gray-800 mb-8">What is the price for sending Explicit SMS?</h3>
//   <p className="text-gray-700 mb-6">
//     The price depends on your Volume and you can find more details on our list of bulk sms prices in India, Click to know price details.
//   </p>
// </div>


        
        
        

//       </div>
//     </div>
//     <Footer/>
//     </>
//   );
// }



import Footer from "../../app/components/footer";
import Navbar from "../../app/components/Navbar";
import SupportForm from "../../app/components/supportForm";
import "../../app/globals.css";

export default function ServiceExplicit() {
  return (
    <>
      <div className="bg-black">
        <Navbar />
      </div>
      <div className="bg-white py-10 mt-28">
        <div className="container mx-auto space-y-10 p-6 sm:p-10">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="flex justify-center items-center pl-4 sm:pl-16">
              <div className="text-center sm:text-left space-y-4">
                <h1 className="text-3xl sm:text-5xl font-roboto text-black p-4">
                  Bulk SMS Service Explicit
                </h1>
                <p className="text-gray-900 text-lg sm:text-xl w-full sm:w-[40rem] pl-4">
                  SMS connects services all over the world. We offer outstanding service to wholesale clients in India.
                </p>
              </div>
            </div>

            {/* Form Section */}
            <div className="bg-black">
              <SupportForm />
            </div>
          </div>

          {/* Features Section */}
          {/* (You can add more content here if needed) */}

          {/* What is Transactional SMS Section */}
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-2xl space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-8">
              Service Explicit Message applies to?
            </h3>
            <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6">
              Messages to the existing customers recommending or promoting their other products or services.
            </p>
            <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6">
              Additionally, the consent template can be linked while creating a service explicit content template.
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-8">
              What is the price for sending Explicit SMS?
            </h3>
            <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6">
              The price depends on your Volume and you can find more details on our list of bulk sms prices in India, Click to know price details.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
