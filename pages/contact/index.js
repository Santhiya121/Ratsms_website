// import Footer from '../../app/components/footer'
// import Navbar from '../../app/components/Navbar'
// import '../../app/globals.css'

// export default function Contact() {
//   return (
//     <>
//       <div className='bg-black'>
//         <Navbar />
//       </div>

//       <div className="bg-white py-16 mt-28">
//         <div className="container mx-auto px-8 lg:px-20">
//           <h2 className="text-4xl font-bold text-center text-black mb-6 md:mb-12 relative z-10">
//             Contact Us
//           </h2>
//           <p className="text-center text-lg text-gray-800 mb-12">
//             <span className="text-xl font-semibold text-black">We’re here to help.</span> Reach out anytime, and let’s start a conversation!
//           </p>

//           {/* Flex container for image and form */}
//           <div className="flex flex-col md:flex-row gap-12 ">
//             {/* Left Side - Image */}
//             <div className="flex-1">
//               <img
//                 src="/images/place.jpg"
//                 alt="Contact Us"
//                 className=" object-cover transition-all duration-300 ease-in-out hover:opacity-90 items-center"
//               />
//             </div>

//             {/* Right Side - Form */}
//             <div className="flex-1 bg-white p-8  border-gray-300">
//               <h3 className="text-2xl font-semibold text-black mb-6">Get In Touch</h3>
//               <form>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-black">Name</label>
//                     <input
//                       type="text"
//                       className="w-full p-3 border border-black  focus:outline-none focus:ring-2 focus:ring-black"
//                       placeholder="Michel"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-black">Email Address</label>
//                     <input
//                       type="email"
//                       className="w-full p-3 border border-black  focus:outline-none focus:ring-2 focus:ring-black"
//                       placeholder="saeslal@zouj.co.uk"
//                     />
//                   </div>
//                 </div>
//                 <div className="mt-6">
//                   <label className="block text-sm font-medium text-black">Mobile Number</label>
//                   <input
//                     type="text"
//                     className="w-full p-3 border border-black  focus:outline-none focus:ring-2 focus:ring-black"
//                     placeholder="Enter Mobile Number"
//                   />
//                 </div>
//                 <div className="mt-6">
//                   <label className="block text-sm font-medium text-black">Mobile OTP</label>
//                   <input
//                     type="text"
//                     className="w-full p-3 border border-black  focus:outline-none focus:ring-2 focus:ring-black"
//                     placeholder="Enter Mobile OTP Sent!"
//                   />
//                 </div>
//                 <div className="mt-6">
//                   <label className="block text-sm font-medium text-black">Email OTP</label>
//                   <input
//                     type="text"
//                     className="w-full p-3 border border-black  focus:outline-none focus:ring-2 focus:ring-black"
//                     placeholder="Enter Email OTP Sent!"
//                   />
//                 </div>
//                 <div className="mt-6">
//                   <label className="block text-sm font-medium text-black">Your Message</label>
//                   <textarea
//                     className="w-full p-3 border border-black  focus:outline-none focus:ring-2 focus:ring-black"
//                     placeholder="Your message here..."
//                   ></textarea>
//                 </div>
//                 <div className='pt-4'>
//                 <button
//   className="relative w-64 h-16 p-4 text-white bg-black 
//              flex items-center justify-between group 
//              border border-transparent transition-all duration-300 
//              ease-in-out hover:bg-white hover:text-black hover:border-black"
// >
//   <span className="text-lg font-roboto text-center p-12 group-hover:text-black transition-all duration-300 ease-in-out">
//     Click Me
//   </span>
//   <span
//     className="text-white font-bold text-2xl transition-transform 
//                duration-300 ease-in-out group-hover:text-black group-hover:translate-x-2"
//   >
//     →
//   </span>
// </button>

//     </div>
//               </form> 
//             </div>
//           </div>

//           {/* Location and Contact Sections */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
//             {/* Location Section */}
//             <div className="bg-white p-8 shadow-xl rounded-lg text-gray-700">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">Location</h3>
//               <p>AWF TECHNOLOGIES PRIVATE LIMITED</p>
//               <p>Astalakshmi Apartment, Flat No – 17, 2nd Floor, Mahatma Gandhi Rd, Adyar, Chennai, Tamil Nadu 600041</p>
//               <p>Landmark – Opp. To Hotel Adyar Anandha Bhavan</p>
//             </div>

//             {/* Contact Section */}
//             <div className="bg-white p-8 shadow-xl rounded-lg text-gray-700">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact</h3>
//               <div className="mb-4">
//                 <p className="font-semibold">Booking Via Call</p>
//                 <p>For sales: <a href="tel:+917506712345" className="text-[#003bff] underline">+91 – 75067 12345</a></p>
//                 <p>For support: <a href="tel:+91447210462" className="text-[#003bff] underline">044 – 472 10 462</a></p>
//               </div>
//               <div className="mb-4">
//                 <p className="font-semibold">Write Questions Via Mail</p>
//                 <p>For sales: <a href="mailto:sales@ratsms.com" className="text-[#003bff] underline">sales@ratsms.com</a></p>
//                 <p>For support: <a href="mailto:support@ratsms.com" className="text-[#003bff] underline">support@ratsms.com</a></p>
//               </div>
//               <div className="mb-4">
//                 <p className="font-semibold">Social Media</p>
//                 <p>Find us on social media for the latest updates and news.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   )
// }


import Footer from '../../app/components/footer'
import Navbar from '../../app/components/Navbar'
import '../../app/globals.css'

export default function Contact() {
  return (
    <>
      <div className='bg-black'>
        <Navbar />
      </div>

      <div className="bg-white py-16 mt-28">
        <div className="container mx-auto px-8 lg:px-20">
          <h2 className="text-4xl font-bold text-center text-black mb-6 md:mb-12 relative z-10">
            Contact Us
          </h2>
          <p className="text-center text-lg text-gray-800 mb-12">
            <span className="text-xl font-semibold text-black">We’re here to help.</span> Reach out anytime, and let’s start a conversation!
          </p>

          {/* Flex container for image and form */}
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left Side - Image */}
            <div className="flex-1">
              <img
                src="/images/place.jpg"
                alt="Contact Us"
                className="object-cover transition-all duration-300 ease-in-out hover:opacity-90 items-center w-full"
              />
            </div>

            {/* Right Side - Form */}
            <div className="flex-1 bg-white p-8 border-gray-300">
              <h3 className="text-2xl font-semibold text-black mb-6">Get In Touch</h3>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-black">Name</label>
                    <input
                      type="text"
                      className="w-full p-3 border border-black focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="Michel"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black">Email Address</label>
                    <input
                      type="email"
                      className="w-full p-3 border border-black focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="saeslal@zouj.co.uk"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-medium text-black">Mobile Number</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-black focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Enter Mobile Number"
                  />
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-medium text-black">Mobile OTP</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-black focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Enter Mobile OTP Sent!"
                  />
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-medium text-black">Email OTP</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-black focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Enter Email OTP Sent!"
                  />
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-medium text-black">Your Message</label>
                  <textarea
                    className="w-full p-3 border border-black focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <div className='pt-4'>
                  <button
                    className="relative w-64 h-16 p-4 text-white bg-black flex items-center justify-between group border border-transparent transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:border-black"
                  >
                    <span className="text-lg font-roboto text-center p-12 group-hover:text-black transition-all duration-300 ease-in-out">
                      Click Me
                    </span>
                    <span
                      className="text-white font-bold text-2xl transition-transform 
                        duration-300 ease-in-out group-hover:text-black group-hover:translate-x-2"
                    >
                      →
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Location and Contact Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
            {/* Location Section */}
            <div className="bg-white p-8 shadow-xl rounded-lg text-gray-700">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Location</h3>
              <p>AWF TECHNOLOGIES PRIVATE LIMITED</p>
              <p>Astalakshmi Apartment, Flat No – 17, 2nd Floor, Mahatma Gandhi Rd, Adyar, Chennai, Tamil Nadu 600041</p>
              <p>Landmark – Opp. To Hotel Adyar Anandha Bhavan</p>
            </div>

            {/* Contact Section */}
            <div className="bg-white p-8 shadow-xl rounded-lg text-gray-700">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact</h3>
              <div className="mb-4">
                <p className="font-semibold">Booking Via Call</p>
                <p>For sales: <a href="tel:+917506712345" className="text-[#003bff] underline">+91 – 75067 12345</a></p>
                <p>For support: <a href="tel:+91447210462" className="text-[#003bff] underline">044 – 472 10 462</a></p>
              </div>
              <div className="mb-4">
                <p className="font-semibold">Write Questions Via Mail</p>
                <p>For sales: <a href="mailto:sales@ratsms.com" className="text-[#003bff] underline">sales@ratsms.com</a></p>
                <p>For support: <a href="mailto:support@ratsms.com" className="text-[#003bff] underline">support@ratsms.com</a></p>
              </div>
              <div className="mb-4">
                <p className="font-semibold">Social Media</p>
                <p>Find us on social media for the latest updates and news.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
