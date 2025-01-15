// import React from "react";
// import "../../app/globals.css";
// import Navbar from "../../app/components/Navbar";
// import Footer from "../../app/components/footer";

// export default function BulkSMSPage() {
//     const products = [
//         { title: "Promotional SMS", description: "Enhance your brand visibility with our promotional SMS services.", link: "#" },
//         { title: "Transactional SMS", description: "Send secure and reliable transactional messages instantly.", link: "#" },
//         { title: "OTP SMS", description: "Ensure secure user authentication with our OTP SMS services.", link: "#" },
//         { title: "Service Implicit", description: "Deliver critical updates and notifications to your users.", link: "#" },
//         { title: "Service Explicit", description: "Get user consent for communications with explicit service SMS.", link: "#" },
//     ];

//     return (
//         <>
//         <div className="bg-black">
//             <Navbar/>
//         </div>
//         <div className="bg-gray-50 py-10 mt-28">
//             <div className="container mx-auto px-4">
//                 <header className="mb-8 pl-16">
//                     <h1 className="text-4xl font-roboto text-black mb-4">Bulk SMS Gateway Aggregator</h1>
//                     <p className="text-gray-900 text-xl w-[70rem] ">
//                         An SMS gateway is a way to send text messages from websites or applications to mobile subscribers for alert notifications. Explore our secure, scalable, and cost-effective bulk SMS solutions.
//                     </p>
//                 </header>

//                 <section className="mb-10 pl-16">
//                     <h2 className="text-2xl font-roboto text-black mb-4">Why Choose Us?</h2>
//                     <ul className="list-disc list-inside text-gray-900 space-y-2 text-xl font-roboto">
//                         <li>Direct operator connectivity with one of the top SMS gateways in India.</li>
//                         <li>Customizable bulk SMS routes for promotional and transactional purposes.</li>
//                         <li>Secure SMS gateways trusted by leading banks.</li>
//                         <li>Best-in-class SMS delivery with competitive market pricing.</li>
//                     </ul>
//                 </section>

//                 <section>
//                     <h2 className="text-2xl font-semibold text-gray-800 mb-6 pl-16">Our Products</h2>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pl-16">
//                         {products.map((product, index) => (
//                             <div key={index} className="bg-white rounded-lg shadow-md p-6">
//                                 <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
//                                 <p className="text-gray-600 mb-4">{product.description}</p>
//                                 <button
//           type="submit"
//           className="w-48  hover:bg-white border-2 border-black  font-semibold text-black py-2 px-4  transition duration-300"
//         >
//           Learn More
//         </button>
//                             </div>
//                         ))}
//                     </div>
//                 </section>

//                 <footer className="mt-10 text-center">
//                     <p className="text-gray-600 text-sm">&copy; 2025 Rat SMS. All rights reserved.</p>
//                 </footer>
//             </div>
//         </div>
//         <Footer/>
//         </>
//     );
// }


import React from "react";
import "../../app/globals.css";
import Navbar from "../../app/components/Navbar";
import Footer from "../../app/components/footer";

export default function BulkSMSPage() {
    const products = [
        { title: "Promotional SMS", description: "Enhance your brand visibility with our promotional SMS services.", link: "#" },
        { title: "Transactional SMS", description: "Send secure and reliable transactional messages instantly.", link: "#" },
        { title: "OTP SMS", description: "Ensure secure user authentication with our OTP SMS services.", link: "#" },
        { title: "Service Implicit", description: "Deliver critical updates and notifications to your users.", link: "#" },
        { title: "Service Explicit", description: "Get user consent for communications with explicit service SMS.", link: "#" },
    ];

    return (
        <>
            <div className="bg-black">
                <Navbar />
            </div>
            <div className="bg-gray-50 py-10 mt-28">
                <div className="container mx-auto px-4">
                    <header className="mb-8 pl-4 md:pl-16">
                        <h1 className="text-3xl sm:text-4xl font-roboto text-black mb-4">Bulk SMS Gateway Aggregator</h1>
                        <p className="text-gray-900 text-lg sm:text-xl w-full md:w-[70rem]">
                            An SMS gateway is a way to send text messages from websites or applications to mobile subscribers for alert notifications. Explore our secure, scalable, and cost-effective bulk SMS solutions.
                        </p>
                    </header>

                    <section className="mb-10 pl-4 md:pl-16">
                        <h2 className="text-xl sm:text-2xl font-roboto text-black mb-4">Why Choose Us?</h2>
                        <ul className="list-disc list-inside text-gray-900 space-y-2 text-lg sm:text-xl font-roboto">
                            <li>Direct operator connectivity with one of the top SMS gateways in India.</li>
                            <li>Customizable bulk SMS routes for promotional and transactional purposes.</li>
                            <li>Secure SMS gateways trusted by leading banks.</li>
                            <li>Best-in-class SMS delivery with competitive market pricing.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 pl-4 md:pl-16">Our Products</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pl-4 md:pl-16">
                            {products.map((product, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
                                    <p className="text-gray-600 mb-4">{product.description}</p>
                                    <button
                                        type="submit"
                                        className="w-full sm:w-48 hover:bg-white border-2 border-black font-semibold text-black py-2 px-4 transition duration-300"
                                    >
                                        Learn More
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>

                    <footer className="mt-10 text-center">
                        <p className="text-gray-600 text-sm">&copy; 2025 Rat SMS. All rights reserved.</p>
                    </footer>
                </div>
            </div>
            <Footer />
        </>
    );
}
