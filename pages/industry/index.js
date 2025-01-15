// import Footer from "../../app/components/footer";
// import Navbar from "../../app/components/Navbar";
// import "../../app/globals.css";
// export default function Indust() {
//     return (
//         <>
//         <div className="bg-black">
//             <Navbar/>
//         </div>
//             <div className="bg-gray-50 py-10 mt-28">
//                 <div className="container mx-auto space-y-10 p-20">
//                     {/* Real Estate */}
//                     <div className="flex flex-col md:flex-row items-center gap-6">
//                         <img src="/images/real.jpg" alt="Real Estate" className="w-96 h-90 object-cover rounded-lg shadow-md" />
//                         <div className="w-full md:w-1/2 space-y-4">
//                             <h2 className="text-4xl font-roboto text-black">Real Estate</h2>
//                             <p className="text-gray-600 text-xl font-roboto">
//                                 The real estate industry is rapidly transforming with digital tools and innovations, driving enhanced customer experiences and smarter property management solutions. Explore the future of real estate with us.
//                             </p>
//                         </div>
//                     </div>

//                     {/* E-commerce */}
//                     <div className="flex flex-col md:flex-row-reverse items-center gap-6">
//                         <img src="/images/ecom.jpg" alt="E-commerce" className="w-96 h-90 object-cover rounded-lg shadow-md" />
//                         <div className="w-full md:w-1/2 space-y-4">
//                             <h2 className="text-4xl font-roboto text-black">E-commerce</h2>
//                             <p className="text-gray-600 text-xl font-roboto">
//                                 E-commerce platforms have revolutionized the shopping experience, offering convenience and variety. Dive into the latest trends and technologies shaping online retail.
//                             </p>
//                         </div>
//                     </div>

//                     {/* Retail */}
//                     <div className="flex flex-col md:flex-row items-center gap-6">
//                         <img src="/images/ecom.jpg" alt="Retail" className="w-96 h-90 object-cover rounded-lg shadow-md" />
//                         <div className="w-full md:w-1/2 space-y-4">
//                             <h2 className="text-4xl font-roboto text-black">Retail</h2>
//                             <p className="text-gray-600 text-xl font-roboto">
//                                 The retail sector is adapting to a new era with omnichannel experiences and advanced analytics. Learn how these changes impact businesses and customers alike.
//                             </p>
//                         </div>
//                     </div>

//                     {/* Education */}
//                     <div className="flex flex-col md:flex-row-reverse items-center gap-6">
//                         <img src="/images/edu.jpg" alt="Education" className="w-96 h-96 object-cover rounded-lg shadow-md" />
//                         <div className="w-full md:w-1/2 space-y-4">
//                             <h2 className="text-4xl font-roboto text-black">Education</h2>
//                             <p className="text-gray-600 text-xl font-roboto">
//                                 Education is evolving with digital learning platforms, enabling personalized and accessible education for all. Discover the latest innovations in this field.
//                             </p>
//                         </div>
//                     </div>

//                     {/* Logistics */}
//                     <div className="flex flex-col md:flex-row items-center gap-6">
//                         <img src="/images/log.jpg" alt="Logistics" className="w-96 h-90 object-cover rounded-lg shadow-md" />
//                         <div className="w-full md:w-1/2 space-y-4">
//                             <h2 className="text-4xl font-roboto text-black">Logistics</h2>
//                             <p className="text-gray-600 text-xl font-roboto">
//                                 The logistics industry is embracing automation and real-time tracking to optimize supply chain management. Stay ahead with insights into this transformative sector.
//                             </p>
//                         </div>
//                     </div>

//                     {/* Travel and Hospitality */}
//                     <div className="flex flex-col md:flex-row-reverse items-center gap-6 pl-16">
//                         <img src="/images/log.jpg" alt="Travel and Hospitality" className="w-96 h-96 object-cover rounded-lg shadow-md" />
//                         <div className="w-full md:w-1/2 space-y-4">
//                             <h2 className="text-4xl font-roboto text-black">Travel and Hospitality</h2>
//                             <p className="text-gray-600 text-xl font-roboto">
//                                 Explore how the travel and hospitality industries are leveraging technology to enhance customer experiences, streamline operations, and promote sustainable practices.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer/>
//         </>
//     );
// }


import Footer from "../../app/components/footer";
import Navbar from "../../app/components/Navbar";
import "../../app/globals.css";

export default function Indust() {
    return (
        <>
            <div className="bg-black">
                <Navbar />
            </div>
            <div className="bg-gray-50 py-10 mt-28">
                <div className="container mx-auto space-y-10 px-4 sm:px-6 md:px-8 lg:px-16 p-6">
                    {/* Real Estate */}
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <img
                            src="/images/real.jpg"
                            alt="Real Estate"
                            className="w-full sm:w-96 md:w-96 h-auto object-cover"
                        />
                        <div className="w-full md:w-1/2 space-y-4">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-roboto text-black">
                                Real Estate
                            </h2>
                            <p className="text-lg sm:text-xl font-roboto text-gray-600">
                                The real estate industry is rapidly transforming with digital tools and innovations, driving enhanced customer experiences and smarter property management solutions. Explore the future of real estate with us.
                            </p>
                        </div>
                    </div>

                    {/* E-commerce */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-6">
                        <img
                            src="/images/ecom.jpg"
                            alt="E-commerce"
                            className="w-full sm:w-96 md:w-96 h-auto object-cover  "
                        />
                        <div className="w-full md:w-1/2 space-y-4">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-roboto text-black">
                                E-commerce
                            </h2>
                            <p className="text-lg sm:text-xl font-roboto text-gray-600">
                                E-commerce platforms have revolutionized the shopping experience, offering convenience and variety. Dive into the latest trends and technologies shaping online retail.
                            </p>
                        </div>
                    </div>

                    {/* Retail */}
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <img
                            src="/images/ecom.jpg"
                            alt="Retail"
                            className="w-full sm:w-96 md:w-96 h-auto object-cover "
                        />
                        <div className="w-full md:w-1/2 space-y-4">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-roboto text-black">
                                Retail
                            </h2>
                            <p className="text-lg sm:text-xl font-roboto text-gray-600">
                                The retail sector is adapting to a new era with omnichannel experiences and advanced analytics. Learn how these changes impact businesses and customers alike.
                            </p>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-6">
                        <img
                            src="/images/edu.jpg"
                            alt="Education"
                            className="w-full sm:w-96 md:w-96 h-auto object-cover"
                        />
                        <div className="w-full md:w-1/2 space-y-4">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-roboto text-black">
                                Education
                            </h2>
                            <p className="text-lg sm:text-xl font-roboto text-gray-600">
                                Education is evolving with digital learning platforms, enabling personalized and accessible education for all. Discover the latest innovations in this field.
                            </p>
                        </div>
                    </div>

                    {/* Logistics */}
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <img
                            src="/images/log.jpg"
                            alt="Logistics"
                            className="w-full sm:w-96 md:w-96 h-auto object-cover "
                        />
                        <div className="w-full md:w-1/2 space-y-4">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-roboto text-black">
                                Logistics
                            </h2>
                            <p className="text-lg sm:text-xl font-roboto text-gray-600">
                                The logistics industry is embracing automation and real-time tracking to optimize supply chain management. Stay ahead with insights into this transformative sector.
                            </p>
                        </div>
                    </div>

                    {/* Travel and Hospitality */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-6 pl-4 md:pl-16">
                        <img
                            src="/images/log.jpg"
                            alt="Travel and Hospitality"
                            className="w-full sm:w-96 md:w-96 h-auto object-cover "
                        />
                        <div className="w-full md:w-1/2 space-y-4">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-roboto text-black">
                                Travel and Hospitality
                            </h2>
                            <p className="text-lg sm:text-xl font-roboto text-gray-600">
                                Explore how the travel and hospitality industries are leveraging technology to enhance customer experiences, streamline operations, and promote sustainable practices.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
