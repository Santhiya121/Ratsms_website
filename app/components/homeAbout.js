// import HomeService from "./homeService";


// export default function HomeAbout() {
//     return (
//         <div className="">
//       <div className="bg-black text-white flex items-center justify-between p-16">
//         {/* Left Side Content */}
//         <div className="w-1/2">
//           <h1 className="text-4xl font-light mb-20 ">The Story Behind Us</h1>
//           <p className="text-xl font-thin leading-relaxed mb-6 w-[35rem] ">
//             We started with a simple idea: to create something that brings people together. Our journey began with a small team, driven by passion and determination. Over the years, we have grown, learned, and continually evolved, always staying true to our mission of providing the best services to our customers. Our story is one of hard work, perseverance, and a commitment to making a difference.
//           </p>

//           <div className="pt-6 ">
//           <button
//       className="relative w-80 h-16 p-4 border border-white text-white bg-black 
//                  flex items-center justify-between  group 
//                  transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
//     >
//       <span className="text-lg font-roboto text-center text-white p-12 group-hover:text-black transition-all duration-300 ease-in-out">
//         Explore More
//       </span>
//       <span
//         className="text-white font-bold text-2xl transition-transform 
//                    duration-300 ease-in-out group-hover:text-black group-hover:translate-x-2"
//       >
//         →
//       </span>
//     </button>
//         </div>
          
//         </div>
  
//         {/* Right Side Image */}
//         <div className="w-1/2">
//   <img
//     src="/images/homeAbout2.gif" // Make sure the path is correct
//     alt="Our Journey"
//     className="w-full h-auto rounded-lg shadow-lg"
//   />
// </div>
//       </div>
//       <HomeService/>
//       </div>
//     );
//   }
  
import HomeService from "./homeService";

export default function HomeAbout() {
    return (
        <div>
            <div className="bg-black text-white flex flex-wrap items-center justify-between p-16 lg:p-8 sm:p-4">
                {/* Left Side Content */}
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                    <h1 className="text-4xl lg:text-3xl sm:text-2xl font-light mb-6 lg:mb-4">
                        The Story Behind Us
                    </h1>
                    <p className="text-xl lg:text-lg sm:text-base font-thin leading-relaxed mb-6 w-full lg:w-[35rem]">
                        We started with a simple idea: to create something that brings people together. Our journey began with a small team, driven by passion and determination. Over the years, we have grown, learned, and continually evolved, always staying true to our mission of providing the best services to our customers. Our story is one of hard work, perseverance, and a commitment to making a difference.
                    </p>

                    <div className="pt-6">
                        <button
                            className="relative w-80 lg:w-64 sm:w-full h-16 p-4 border border-white text-white bg-black 
                            flex items-center justify-between group 
                            transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
                        >
                            <span className="text-lg sm:text-base font-roboto text-center text-white p-12 group-hover:text-black transition-all duration-300 ease-in-out">
                                Explore More
                            </span>
                            <span
                                className="text-white font-bold text-2xl sm:text-xl transition-transform 
                                duration-300 ease-in-out group-hover:text-black group-hover:translate-x-2"
                            >
                                →
                            </span>
                        </button>
                    </div>
                </div>

                {/* Right Side Image */}
                <div className="w-full lg:w-1/2">
                    <img
                        src="/images/homeAbout2.gif" // Make sure the path is correct
                        alt="Our Journey"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>
            <HomeService />
        </div>
    );
}
