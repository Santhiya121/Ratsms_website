// import React from 'react';
// import '../../app/globals.css';
// import Navbar from '../../app/components/Navbar';
// import '@fortawesome/fontawesome-free/css/all.min.css'; 
// import Footer from '../../app/components/footer';

// const AboutUsPage = () => {
//   return (
//     <>
//       {/* Navbar with black background */}
//       <div className='bg-black'>
//         <Navbar />
//       </div>

//       {/* Main content with white background */}
//       <div className='bg-white'>
//         <div className="container mt-28 px-4 py-8">
//           {/* Company Introduction */}
//           <section className="mb-16 pl-16 bg-white  p-8">
//             <header className="mb-6 ">
//               <h1 className="text-4xl font-roboto text-black mb-4">About Our Company</h1>
//               <p className="text-xl text-black font-roboto pl-16 w-[70rem]">
//                 Rat SMS offers the world’s vision, where people will have a close affinity with products and brands. Creating the bonding and trust between them is one of our dreams.
//               </p>
//             </header>

//             <div className="text-xl text-black font-roboto pl-16 w-[70rem]">
//               <p className="mb-6">
//                 As bulk SMS marketing has emerged as a unique marketing strategy in the recent world market, India has followed suit. However, finding a smart and easy package for bulk SMS sending is still a troublesome factor in India.
//               </p>
//               <p className="mb-6">
//                 Our bulk SMS administration services are controlled through our web product applications. We offer the best quality in both page design and creation, with 24/7 support for bulk SMS management for you or your clients.
//               </p>
//               <p className="mb-6">
//                 We are here to provide the best quality service at the most reasonable price in India. Rat SMS offers 100% genuine delivery service, and choosing our services will be an excellent benefit for you.
//               </p>
//               <p className="mb-6">
//                 Our data-driven solutions cover all marketing solutions as per your choices, offering seamless, virtual, and highly innovative communication solutions to ensure your business’s best efficiency.
//               </p>
//             </div>
//           </section>

//           {/* Global Statistics */}
//           <section className="mb-16 text-center bg-white py-12 w-full">
//   <h2 className="text-4xl font-semibold text-black mb-6">Our Global Reach</h2>
//   <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pl-16">
//     <div className="bg-white p-6 shadow-2xl rounded-lg w-60 flex items-center justify-center flex-col transform hover:scale-105 transition-transform duration-300">
//       <div className="text-black text-4xl mb-4">
//         <i className="fas fa-users"></i>
//       </div>
//       <h3 className="text-xl font-semibold text-black mb-2">Global Clients</h3>
//       <p className="text-2xl text-black">37,350</p>
//     </div>
//     <div className="bg-white p-6 shadow-2xl rounded-lg w-60 flex items-center justify-center flex-col transform hover:scale-105 transition-transform duration-300">
//       <div className="text-black text-4xl mb-4">
//         <i className="fas fa-id-card-alt"></i>
//       </div>
//       <h3 className="text-xl font-semibold text-black mb-2">Global Sender ID</h3>
//       <p className="text-2xl text-black">20,346</p>
//     </div>
//     <div className="bg-white p-6 shadow-2xl rounded-lg w-60 flex items-center justify-center flex-col transform hover:scale-105 transition-transform duration-300">
//       <div className="text-black text-4xl mb-4">
//         <i className="fas fa-mobile-alt"></i>
//       </div>
//       <h3 className="text-xl font-semibold text-black mb-2">Telecom Brands</h3>
//       <p className="text-2xl text-black">10</p>
//     </div>
//     <div className="bg-white p-6 shadow-2xl rounded-lg w-60 flex items-center justify-center flex-col transform hover:scale-105 transition-transform duration-300">
//       <div className="text-black text-4xl mb-4">
//         <i className="fas fa-paper-plane"></i>
//       </div>
//       <h3 className="text-xl font-semibold text-black mb-2">Messages Sent</h3>
//       <p className="text-2xl text-black">99,458,538</p>
//     </div>
//     <div className="bg-white p-6 shadow-2xl rounded-lg w-60 flex items-center justify-center flex-col transform hover:scale-105 transition-transform duration-300">
//       <div className="text-black text-4xl mb-4">
//         <i className="fas fa-check-circle"></i>
//       </div>
//       <h3 className="text-xl font-semibold text-black mb-2">Messages Delivered</h3>
//       <p className="text-2xl text-black">87,577,659</p>
//     </div>
//   </div>
// </section>



//           {/* Partners Section */}
      
//           <div className="mb-16 ">
//             <header className="text-center mb-12">
//               <h2 className="text-3xl font-semibold text-gray-800 mb-4 ">Our Partners</h2>
//               <p className="text-lg text-black mb-6  text-center pl-16 pr-20">
//                 Rat SMS partners with leading telecom brands to offer world-class bulk SMS services. We are proud to collaborate with industry leaders to ensure seamless service delivery and customer satisfaction.
//               </p>
//             </header>
//             <div className="py-6">
//   <div className="container mx-auto">
//     <div className="grid grid-cols-4 gap-4 justify-items-center items-center">
//       <div>
//         <img src="/images/airtel.jpg" alt="Partner 1" className="w-40 h-auto object-contain rounded-lg shadow-md" />
//       </div>
//       <div>
//         <img src="/images/bsnl.png" alt="Partner 2" className="w-40 h-auto object-contain rounded-lg shadow-md" />
//       </div>
//       <div>
//         <img src="/images/jio.jpg" alt="Partner 3" className="w-40 h-auto object-contain rounded-lg shadow-md" />
//       </div>
//       <div>
//         <img src="/images/vi.jpg" alt="Partner 4" className="w-40 h-auto object-contain rounded-lg shadow-md" />
//       </div>
//     </div>
//   </div>
// </div>

//           </div>
//         </div>
//       </div>
//       <Footer/>
//     </>
//   );
// };

// export default AboutUsPage;


import React from 'react';
import '../../app/globals.css';
import Navbar from '../../app/components/Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '../../app/components/footer';

const AboutUsPage = () => {
  return (
    <>
      {/* Navbar with black background */}
      <div className="bg-black">
        <Navbar />
      </div>

      {/* Main content with white background */}
      <div className="bg-white  mt-28">
        <div className=" sm:mt-20 px-4 sm:px-6 md:px-8 py-8 ">
          {/* Company Introduction */}
          <section className="mb-16 bg-white p-8">
            <header className="mb-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-roboto text-black mb-4">
                About Our Company
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-black font-roboto w-full sm:w-[90%] md:w-[70rem]">
                Rat SMS offers the world’s vision, where people will have a close affinity with products and brands. Creating the bonding and trust between them is one of our dreams.
              </p>
            </header>

            <div className="text-base sm:text-lg md:text-xl text-black font-roboto w-full sm:w-[90%] md:w-[70rem]">
              <p className="mb-6">
                As bulk SMS marketing has emerged as a unique marketing strategy in the recent world market, India has followed suit. However, finding a smart and easy package for bulk SMS sending is still a troublesome factor in India.
              </p>
              <p className="mb-6">
                Our bulk SMS administration services are controlled through our web product applications. We offer the best quality in both page design and creation, with 24/7 support for bulk SMS management for you or your clients.
              </p>
              <p className="mb-6">
                We are here to provide the best quality service at the most reasonable price in India. Rat SMS offers 100% genuine delivery service, and choosing our services will be an excellent benefit for you.
              </p>
              <p className="mb-6">
                Our data-driven solutions cover all marketing solutions as per your choices, offering seamless, virtual, and highly innovative communication solutions to ensure your business’s best efficiency.
              </p>
            </div>
          </section>

          {/* Global Statistics */}
          <section className="mb-16 text-center bg-white py-12 w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-6">
              Our Global Reach
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 sm:px-8">
              {[
                { icon: 'fas fa-users', label: 'Global Clients', value: '37,350' },
                { icon: 'fas fa-id-card-alt', label: 'Global Sender ID', value: '20,346' },
                { icon: 'fas fa-mobile-alt', label: 'Telecom Brands', value: '10' },
                { icon: 'fas fa-paper-plane', label: 'Messages Sent', value: '99,458,538' },
                { icon: 'fas fa-check-circle', label: 'Messages Delivered', value: '87,577,659' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 shadow-2xl rounded-lg flex items-center justify-center flex-col transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-black text-3xl sm:text-4xl mb-4">
                    <i className={stat.icon}></i>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">{stat.label}</h3>
                  <p className="text-lg sm:text-2xl text-black">{stat.value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Partners Section */}
          <div className="mb-16">
            <header className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
                Our Partners
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-black mb-6 text-center px-4 sm:px-16 lg:px-40">
                Rat SMS partners with leading telecom brands to offer world-class bulk SMS services. We are proud to collaborate with industry leaders to ensure seamless service delivery and customer satisfaction.
              </p>
            </header>
            <div className="py-6">
              <div className="container mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center items-center px-4 sm:px-6">
                  {[
                    { src: '/images/airtel.jpg', alt: 'Partner 1' },
                    { src: '/images/bsnl.png', alt: 'Partner 2' },
                    { src: '/images/jio.jpg', alt: 'Partner 3' },
                    { src: '/images/vi.jpg', alt: 'Partner 4' },
                  ].map((partner, index) => (
                    <div key={index}>
                      <img
                        src={partner.src}
                        alt={partner.alt}
                        className="w-28 sm:w-32 md:w-40 h-auto object-contain rounded-lg shadow-md"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;
