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
import Image from 'next/image'
import Head from 'next/head';
import 'font-awesome/css/font-awesome.min.css';
import WhatsAppIcon from '../../app/components/whatsappIcon';


export default function Contact() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Rat SMS is a bulk SMS provider with free SMS API India. We are Direct TeleCom operator Connectivity. Try our abundant smart SMS with 100% delivery & free DLT registration"
        />
        <meta
          name="keyword"
          content="dlt registration, bulk sms service, sms blaster, sms gateway, bulk sms provider, otp sms, sms api, bulk sms services in india, bulk sms gateway, bulk sms india, free sms api, sms api india, sms provider, bulk sms api, bulk sms provider in india, free sms api india, bulk sms reseller"
        />
        <link rel="canonical" href="https://ratsms.com/contact" />
        <meta property="og:site_name" content="RATSMS" />
        <meta property="og:url" content="https://ratsms.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RAT SMS : Bulk SMS Service Provider" />
        <meta name="og:image" content="images/assets/ratsms-icon.png" />
        {/* For IE */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* For Responsive Device */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* For Window Tab Color */}
        {/* Chrome, Firefox OS and Opera */}
        <meta name="theme-color" content="#655C97" />
        {/* Windows Phone */}
        <meta name="msapplication-navbutton-color" content="#655C97" />
        {/* iOS Safari */}
        <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
        <title>RAT SMS | Contact</title>
      </Head>
      <div
        style={{
          backgroundColor: "black",
          zIndex: 100,
          position: "relative",
          height: "4rem", // Fixed height for testing
          width: "100%",
        }}
      >
        <Navbar />
      </div>
      <WhatsAppIcon/>

      <div className="bg-white py-8">
        <div className=" mx-auto px-8 lg:px-20">
          <h2 className="text-3xl sm:text-5xl font-roboto text-left text-black p-2 relative z-10">
            Contact
          </h2>
          <p className="text-left text-sm sm:text-base text-gray-600 mb-5 p-2">
            <span className="text-sm sm:text-base font-roboto text-black">We’re here to help.</span> Reach out anytime, and let’s start a conversation!
          </p>

          {/* Flex container for image and form */}
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left Side - Image */}
            <div className="flex-1">
              <Image
                src="/images/place.jpg"
                alt="Contact Us"
                width={800} // Replace with the actual width of the image
                height={600} // Replace with the actual height of the image
                className="object-cover transition-all duration-300 ease-in-out hover:opacity-90 items-center w-full"
              />
            </div>

            {/* Right Side - Form */}
            <div className="flex-1 bg-white pl-2 sm:pl-2 border-gray-300">
              <h3 className="text-lg sm:text-2xl font-roboto text-black mb-4">Get In Touch</h3>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-8">
                  <div>
                    <label className="block text-sm sm:text-base font-light text-black">Name</label>
                    <input
                      type="text"
                      className="w-full p-3 border border-black focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="Michel"
                    />
                  </div>
                  <div>
                    <label className="block text-sm sm:text-base font-light text-black">Email Address</label>
                    <input
                      type="email"
                      className="w-full p-3 border border-black focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="saeslal@zouj.co.uk"
                    />
                  </div>
                </div>
                <div className="mt-3 sm:mt-6">
                  <label className="block text-sm sm:text-base font-light text-black">Mobile Number</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-black focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Enter Mobile Number"
                  />
                </div>
                <div className="mt-3 sm:mt-6">
                  <label className="block text-sm sm:text-base font-light text-black">Mobile OTP</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-black focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Enter Mobile OTP Sent!"
                  />
                </div>
                <div className="mt-3 sm:mt-6">
                  <label className="block text-sm sm:text-base font-light text-black">Email OTP</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-black focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Enter Email OTP Sent!"
                  />
                </div>
                <div className="mt-3 sm:mt-6">
                  <label className="block text-sm sm:text-base font-light text-black">Your Message</label>
                  <textarea
                    className="w-full p-3 border border-black focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <div className='mt-3 sm:mt-6'>
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
  <div className="bg-white p-6 shadow-xl rounded-lg text-gray-700 hover:shadow-2xl transition-shadow duration-300">
    <h3 className="text-2xl font-roboto text-gray-800 mb-4 font-semibold">Location</h3>
    <p className="text-base mb-2">AWF TECHNOLOGIES PRIVATE LIMITED</p>
    <p className="text-base mb-2">Astalakshmi Apartment, Flat No – 17, 2nd Floor, Mahatma Gandhi Rd, Adyar, Chennai, Tamil Nadu 600041</p>
    <p className="text-base mb-2">Landmark – Opp. To Hotel Adyar Anandha Bhavan</p>

    {/* Google Map Embed */}
    <div className="mt-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.614900344833!2d80.25571497454699!3d12.99646511433376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52657641f2235f%3A0x8be1963fb6a00316!2sRAT%20SMS!5e0!3m2!1sen!2sin!4v1737714824984!5m2!1sen!2sin"
        width="100%" 
        height="200"  
        style={{ border: 0 }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>

  {/* Contact Section */}
  <div className="bg-white p-6 shadow-2xl rounded-lg text-gray-700 hover:shadow-3xl transition-shadow duration-300">
    <h3 className="text-2xl font-roboto text-gray-800 mb-4 font-semibold">Contact</h3>

    <div className="mb-4">
      <p className="font-semibold text-lg text-gray-800">Booking Via Call</p>
      <p className="mb-2">
        <span className="text-gray-700">For sales: </span>
        <a href="tel:+917506712345" className="text-[#003bff] underline hover:text-blue-600 transition duration-300">
          +91 – 75067 12345
        </a>
      </p>
      <p className="mb-2">
        <span className="text-gray-700">For support: </span>
        <a href="tel:+91447210462" className="text-[#003bff] underline hover:text-blue-600 transition duration-300">
          044 – 472 10 462
        </a>
      </p>
    </div>

    <div className="mb-4">
      <p className="font-semibold text-lg text-gray-800">Write Questions Via Mail</p>
      <p className="mb-2">
        <span className="text-gray-700">For sales: </span>
        <a href="mailto:sales@ratsms.com" className="text-[#003bff] underline hover:text-blue-600 transition duration-300">
          sales@ratsms.com
        </a>
      </p>
      <p className="mb-2">
        <span className="text-gray-700">For support: </span>
        <a href="mailto:support@ratsms.com" className="text-[#003bff] underline hover:text-blue-600 transition duration-300">
          support@ratsms.com
        </a>
      </p>
    </div>

    <div className="mb-4">
      <p className="font-semibold text-lg text-gray-800">Social Media</p>
      <p className="text-base text-gray-700">Find us on social media for the latest updates and news.</p>
      <div className="mt-4 flex gap-6 justify-start">
        <a href="#" className="text-[#003bff] hover:text-blue-600 transition duration-300">
          <i className="fab fa-facebook text-2xl"></i>
        </a>
        <a href="#" className="text-[#003bff] hover:text-blue-600 transition duration-300">
          <i className="fab fa-instagram text-2xl"></i>
        </a>
        <a href="#" className="text-[#003bff] hover:text-blue-600 transition duration-300">
          <i className="fab fa-whatsapp text-2xl"></i>
        </a>
        <a href="#" className="text-[#003bff] hover:text-blue-600 transition duration-300">
          <i className="fab fa-youtube text-2xl"></i>
        </a>
      </div>
    </div>
  </div>
</div>


    </div >
      </div >

    <Footer />
    </>
  )
}
