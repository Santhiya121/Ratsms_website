

import Link from "next/link";
import Button from "./button";
import Footer from "./footer";
import Image from 'next/image';


export default function CareersHome() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center lg:justify-between  bg-gray-100 p-6 lg:p-8 min-h-screen">
        {/* Left Section */}
        <div className="flex flex-col space-y-4 max-w-lg px-4 lg:pl-24">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-black">
            Grow with us
          </h1>
          <p className="font-light text-lg sm:text-xl lg:text-2xl pt-6 lg:pt-10 text-gray-700">
            Join our team and be part of a dynamic, innovative, and supportive environment.
            We empower you to grow both personally and professionally while making an impact.
          </p>
          <div className="pt-6 lg:pt-12">
            <Link href="/careers" aria-label="Visit the careers page">
              <Button>
                Careers
              </Button>
            </Link>

          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
          <Image
            src="/videos/career.gif"
            alt="Career GIF"
            width={1000}  // Replace with your actual width
            height={600} // Replace with your actual height
            className="object-cover"
            unoptimized // Disable optimization for animated images

          />
        </div>
      </div>
      <Footer />
    </>
  );
}
