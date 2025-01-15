// import BlackButton from "./black_button";
// import ClientHome from "./clientHome";

// export default function HomeService() {
//     return (
//         <>
//             <div className="h-lvh bg-white">
//                 <div className="p-8 pl-16">
//                     <h1 className="text-4xl text-black">Service</h1>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-3  gap-16 p-8 pl-16">
//                     {/* Card 1: Unmatched Bulk SMS Delivery */}
//                     <div className=" bg-white  h-96 w-auto ">
//                         <div className="">
//                             <img
//                                 src="/images/HomeService.jpg"
//                                 alt="Unmatched Bulk SMS Delivery"
//                                 className="w-full h-36 object-cover "
//                             />
//                         </div>
//                         <div className="p-4">
//                             <h3 className="text-lg font-semibold text-gray-800">
//                                 Promotional Bulk SMS
//                             </h3>
//                             <p className="font-light text-black mt-2">
//                                 Promotional SMS is a powerful marketing tool, driving effective advertising
//                                 for services and products through direct text messages.
//                                 This approach yields outstanding results, boosting campaign success and enhancing website rankings.
//                             </p>
//                             <div className="pt-12 ">
//                            <BlackButton/>
//                            </div>
//                         </div>
//                     </div>

//                     {/* Card 2: Multiple Operator */}
//                     <div className=" bg-white  h-96 ">
//                         <div className="">
//                             <img
//                                 src="/images/homeService.jpg"
//                                 alt="Unmatched Bulk SMS Delivery"
//                                 className="w-full h-36 object-cover "
//                             />
//                         </div>
//                         <div className="p-4">
//                             <h3 className="text-lg font-semibold text-gray-800">
//                                 Transactional Bulk SMS
//                             </h3>
//                             <p className="font-light text-black mt-2">

//                                 Transactional Bulk SMS is an essential part of SMS campaigns, offering features
//                                 like a six-character sender ID, year-round delivery,
//                                 and support for both DND and Non-DND numbers.
//                                 This makes it a valuable tool for effective communication.
//                             </p>  
//                             <div className="pt-12 ">
//                            <BlackButton/>
//                            </div>                          
//                         </div>
//                     </div>

//                     {/* Card 3: Smart Retry Mechanism */}
//                     <div className=" bg-white  h-96 ">
//                         <div className="">
//                             <img
//                                 src="/images/homeService.jpg"
//                                 alt="Unmatched Bulk SMS Delivery"
//                                 className="w-full h-36 object-cover "
//                             />
//                         </div>
//                         <div className="p-4">
//                             <h3 className="text-lg font-semibold text-gray-800">
//                                 OTP Bulk SMS
//                             </h3>
//                             <p className="font-light text-black mt-2">

//                                 OTP (One Time Password) is crucial for SMS marketing and user authentication. 
//                                 It is sent to the registered mobile number to verify login requests. 
//                                 We are proud to be one of the top 10 OTP SMS Gateway providers in India..</p>
//                                 <div className="pt-16 ">
//                            <BlackButton/>
//                            </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <ClientHome/>
//         </>
//     );
// }


import BlackButton from "./black_button";
import ClientHome from "./clientHome";

export default function HomeService() {
    return (
        <>
            <div className="h-auto bg-white">
                <div className="p-8 lg:p-6 sm:p-4 pl-16 sm:pl-4">
                    <h1 className="text-4xl sm:text-2xl text-black">Service</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 sm:gap-4 p-8 lg:p-6 sm:p-4 pl-16 sm:pl-4">
                    {/* Card 1 */}
                    <div className="bg-white shadow-lg rounded-lg h-auto">
                        <img
                            src="/images/HomeService.jpg"
                            alt="Promotional Bulk SMS"
                            className="w-full h-36 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            <h3 className="text-lg sm:text-base font-semibold text-gray-800">
                                Promotional Bulk SMS
                            </h3>
                            <p className="font-light text-black mt-2 text-sm sm:text-xs">
                                Promotional SMS is a powerful marketing tool, driving effective advertising for services and products through direct text messages. This approach yields outstanding results, boosting campaign success and enhancing website rankings.
                            </p>
                            <div className="pt-6">
                                <BlackButton />
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white shadow-lg rounded-lg h-auto">
                        <img
                            src="/images/homeService.jpg"
                            alt="Transactional Bulk SMS"
                            className="w-full h-36 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            <h3 className="text-lg sm:text-base font-semibold text-gray-800">
                                Transactional Bulk SMS
                            </h3>
                            <p className="font-light text-black mt-2 text-sm sm:text-xs">
                                Transactional Bulk SMS is an essential part of SMS campaigns, offering features like a six-character sender ID, year-round delivery, and support for both DND and Non-DND numbers. This makes it a valuable tool for effective communication.
                            </p>
                            <div className="pt-6">
                                <BlackButton />
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white shadow-lg rounded-lg h-auto">
                        <img
                            src="/images/homeService.jpg"
                            alt="OTP Bulk SMS"
                            className="w-full h-36 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            <h3 className="text-lg sm:text-base font-semibold text-gray-800">
                                OTP Bulk SMS
                            </h3>
                            <p className="font-light text-black mt-2 text-sm sm:text-xs">
                                OTP (One Time Password) is crucial for SMS marketing and user authentication. It is sent to the registered mobile number to verify login requests. We are proud to be one of the top 10 OTP SMS Gateway providers in India.
                            </p>
                            <div className="pt-6">
                                <BlackButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ClientHome />
        </>
    );
}
