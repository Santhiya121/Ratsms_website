
  
import Link from "next/link";
import HomeService from "./homeService";
import Image from 'next/image'

export default function HomeAbout() {
  return (
    <div>
      <div className="bg-black text-white flex flex-col sm:flex-row items-center justify-between font-roboto sm:p-6 lg:p-8">
        {/* Left Side Content */}
        <div className="w-full sm:w-1/2 mb-8 sm:mb-0  lg:pl-24 text-left sm:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-roboto mb-6 sm:mb-4 pl-12 pt-12">
            The Story Behind Us
          </h1>
          <p className="text-xl sm:text-base md:text-lg lg:text-xl lg:pl-12 md:w-96 font-roboto pt-4 mb-6 w-full sm:w-[80%] lg:w-[30rem] pl-12 pr-10">
            What began as a simple idea has grown into a trusted company, driven by passion and dedication. We’re committed to excellence, constantly evolving to meet our customer needs with top-notch service. Our story is one of hard work, innovation, and making a lasting impact.
          </p>
          <div className="pt-6 pl-12">
            <Link href="/about-us">
            <button
              className="relative w-48  sm:w-40 lg:w-64 h-16 p-4 border border-white text-white bg-black flex items-center justify-between group transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
            >
              <span className="text-base font-roboto sm:text-base text-center text-white group-hover:text-black transition-all duration-300 ease-in-out">
                Explore More
              </span>
              <span
                className="text-white font-bold text-2xl sm:text-xl transition-transform duration-300 ease-in-out group-hover:text-black group-hover:translate-x-2"
              >
                →
              </span>
            </button>
            </Link>
          </div>
        </div>

        {/* Right Side Image */}
        {/* <div className="w-full sm:w-1/2">
          <Image
            src="/images/homeAbout2.gif" // Ensure the path is correct
            alt="Our Journey"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div> */}
        <div className="w-full sm:w-1/2">
        <Image
  src="/images/homeAbout2.gif" // Ensure the path is correct
  alt="Our Journey"
  unoptimized // Disable optimization for this animated image
  className="rounded-lg shadow-lg"
  width={600} // Set the width for the image
  height={400} // Set the height for the image
  layout="responsive"
/>
</div>

      </div>

      <HomeService />
    </div>
  );
}


