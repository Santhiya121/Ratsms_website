import { useState, useEffect } from "react";
import "../../styles/globals.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPhone } from "@fortawesome/free-solid-svg-icons";


export default function Navbar() {
  const [isProductsVisible, setIsProductsVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false); // New state for the bars icon
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setIsProductsVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleProductsClick = () => {
    setIsProductsVisible((prev) => !prev);
  };

  const handleBarsClick = () => {
    setIsMenuVisible((prev) => !prev); // Toggle the menu visibility when bars icon is clicked
  };

  const handlePhoneClick = () => {
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="absolute top-0 w-full z-10">
      <div className="flex items-center justify-between px-6 py-4 bg-transparent backdrop-filter">
        {/* Logo */}
        <div className="logo">
          <Link href="https://ratsms.com">
            <img src="/images/ratsms.png" alt="ratsms-logo" className="w-40" />
          </Link>
        </div>

        {/* Navbar Links */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/home" className="text-lg font-roboto text-white hover:text-[#003bff]">
            Home
          </Link>

          {/* Products Button */}
          <div className="relative dropdown-container">
            <button
              className="text-lg font-roboto text-white hover:text-[#003bff]"
              onClick={handleProductsClick}
            >
              Products
            </button>

            {/* Dropdown Menu */}
            {isProductsVisible && (
              <div className="fixed top-0 left-0 w-screen h-[35rem] mt-28 bg-black bg-opacity-70 z-50 backdrop-blur-md grid grid-cols-3 gap-4 p-8 shadow-lg">
                {/* Content for Products */}
                <div className="p-4">
                  <div className="text-4xl font-light p-4  text-white">
                    <div className="pt-3">Effortless Communication</div>
                    <div className="pt-3">Limitless reach</div>
                    <div className="pt-3">Let your business</div>
                    <div className="pt-3">Grow with every message.</div>
                  </div>
                  <div className="pt-12">
                  <Link href="/overview">
                  <button
      className="relative w-96 h-16 p-4 border border-white text-white bg-transparent 
                 flex items-center justify-between  group 
                 transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
    >
      <span className="text-lg font-roboto text-center text-white p-12 group-hover:text-black transition-all duration-300 ease-in-out">
        Over View
      </span>
      <span
        className="text-white font-bold text-2xl transition-transform 
                   duration-300 ease-in-out group-hover:text-black group-hover:translate-x-2"
      >
        →
      </span>
    </button>
                  </Link>
                  </div>
                </div>
                {/* Product Links */}
                <div className="pl-28">
      <ul>
        <li className="font-light text-2xl text-white mt-10 p-4">Enterprise SMS</li>
        <ul className="text-[20px] font-light pl-8">
          {[
            { href: "/bulk-sms-service-implicit", text: "Service Implicit" },
            { href: "/bulk-sms-service-explicit", text: "Service Explicit" },
            { href: "/promotional-bulk-sms-chennai", text: "Promotional Bulk SMS" },
            { href: "/transactional-bulk-sms-chennai", text: "Transactional Bulk SMS" },
            { href: "/transactional-bulk-sms-chennai", text: "OTP SMS" },
            { href: "/transactional-bulk-sms-chennai", text: "SMART SMS" },
          ].map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="flex items-center text-xl font-light text-white hover:text-[#003bff] group"
              >
                {item.text}
                <span
        className="text-black font-bold text-2xl transition-transform 
                   duration-300 ease-in-out  group-hover:translate-x-2 text-transparent transform scale-0 group-hover:text-[#003bff] group-hover:scale-100 "
      >
        →
      </span>
              </Link>
            </li>
          ))}
        </ul>
        <li className="font-light text-2xl text-white p-4">
          <Link href="/whatsapp-business-api" className="font-light text-2xl text-white pt-10 hover:text-[#003bff]">
            WhatsApp Business API
           
          </Link>
        </li>
      </ul>
    </div>
              </div>
            )}
          </div>

          <Link href="/smpp-gateway-provider" className="text-lg font-roboto text-white hover:text-[#003bff]">
            SMPP
          </Link>
          <Link href="/bulk-sms-pricing-india" className="text-lg font-roboto text-white hover:text-[#003bff]">
            Pricing
          </Link>
          <Link href="/industry" className="text-lg font-roboto text-white hover:text-[#003bff]">
            Industry
          </Link>
          <Link href="/blog" className="text-lg font-roboto text-white hover:text-[#003bff]">
            Blogs
          </Link>
          <Link href="/contact" className="text-lg font-roboto text-white hover:text-[#003bff]">
            Contact Us
          </Link>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          {/* <button className="text-lg text-white hover:text-blue-300 p-4">
            <FontAwesomeIcon icon={faSearch} />
          </button> */}
        <Link href="">
  <button className="text-lg text-white hover:text-[#003bff] p-4" onClick={handlePhoneClick}>
    <FontAwesomeIcon icon={faPhone} />
  </button>
  {isPopupVisible && (
        <div className="fixed top-24 left-0 flex justify-end z-50 w-full h-auto pr-16 ">
          <div className="bg-white  p-6 max-w-md w-full shadow-lg relative">
            <h2 className="text-2xl font-semibold text-center mb-4">
              Talk to a sales advisor
            </h2>
            <p className="text-gray-700 text-center">
              We have a team of specialists available 24/7 to help you find the best solution for your business.
            </p>
            <p className="text-center mt-4 font-semibold text-lg">
              Call us at: <strong>9655735150</strong>
            </p>
            <div className="flex justify-center mt-6">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-2xl pr-3 hover:text-[#003bff] text-black"
            >
              &times;
            </button>
            </div>
          </div>
        </div>
      )}
</Link>
          <button className="text-lg text-white hover:text-[#003bff] p-4" onClick={handleBarsClick}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>

      {/* Black Container for Bars Icon */}
      {isMenuVisible && (
        <div className="fixed top-0 left-0 w-screen h-[35rem] mt-28 bg-black bg-opacity-70 z-50 backdrop-blur-md p-8">
          <div className="text-white text-4xl font-semibold text-center">
  <ul className="space-y-6">
    <li>
      <Link href="/" className="flex items-center justify-center text-2xl font-medium text-white hover:text-[#003bff] transition-all duration-300 group">
        Bulk SMS 
        <span
        className="text-black font-bold text-2xl transition-transform 
                   duration-300 ease-in-out  group-hover:translate-x-2 text-transparent transform scale-0 group-hover:text-[#003bff] group-hover:scale-100 "
      >
        →
      </span>
      </Link>
    </li>
    <li>
      <Link href="/bulk-sms-gateway-aggregator" className="flex items-center justify-center text-2xl font-medium text-white hover:text-[#003bff] transition-all duration-300 group">
        Bulk SMS GateWay Aggregator
        <span
        className="text-black font-bold text-2xl transition-transform 
                   duration-300 ease-in-out  group-hover:translate-x-2 text-transparent transform scale-0 group-hover:text-[#003bff] group-hover:scale-100 "
      >
        →
      </span>
      </Link>
    </li>
    <li>
      <Link href="/developer-api" className="flex items-center justify-center text-2xl font-medium text-white hover:text-[#003bff] transition-all duration-300 group">
        Developer API
        <span
        className="text-black font-bold text-2xl transition-transform 
                   duration-300 ease-in-out  group-hover:translate-x-2 text-transparent transform scale-0 group-hover:text-[#003bff] group-hover:scale-100 "
      >
        →
      </span>
      </Link>
    </li>
    <li>
      <Link href="/about-us" className="flex items-center justify-center text-2xl font-medium text-white hover:text-[#003bff] transition-all duration-300 group">
        About Us
        <span
        className="text-black font-bold text-2xl transition-transform 
                   duration-300 ease-in-out  group-hover:translate-x-2 text-transparent transform scale-0 group-hover:text-[#003bff] group-hover:scale-100 "
      >
        →
      </span>
      </Link>
    </li>
    <li>
      <Link href="/blog" className="flex items-center justify-center text-2xl font-medium text-white hover:text-[#003bff] transition-all duration-300 group">
        Blogs
        <span
        className="text-black font-bold text-2xl transition-transform 
                   duration-300 ease-in-out  group-hover:translate-x-2 text-transparent transform scale-0 group-hover:text-[#003bff] group-hover:scale-100 "
      >
        →
      </span>
      </Link>
    </li>
    <li>
      <Link href="/terms-and-conditions" className="flex items-center justify-center text-2xl font-medium text-white hover:text-[#003bff] transition-all duration-300 group">
        Terms and Conditions
        <span
        className="text-black font-bold text-2xl transition-transform 
                   duration-300 ease-in-out  group-hover:translate-x-2 text-transparent transform scale-0 group-hover:text-[#003bff] group-hover:scale-100 "
      >
        →
      </span>
      </Link>
    </li>
    <li>
      <Link href="/refund-policy" className="flex items-center justify-center text-2xl font-medium text-white hover:text-[#003bff] transition-all duration-300 group">
        Refund Policies
        <span
        className="text-black font-bold text-2xl transition-transform 
                   duration-300 ease-in-out  group-hover:translate-x-2 text-transparent transform scale-0 group-hover:text-[#003bff] group-hover:scale-100 "
      >
        →
      </span>
      </Link>
    </li>
    <li>
      <Link href="/privacy-policy" className="flex items-center justify-center text-2xl font-medium text-white hover:text-[#003bff] transition-all duration-300 group">
        Privacy Policy
        <span
        className="text-black font-bold text-2xl transition-transform 
                   duration-300 ease-in-out  group-hover:translate-x-2 text-transparent transform scale-0 group-hover:text-[#003bff] group-hover:scale-100 "
      >
        →
      </span>
      </Link>
    </li>
    <li>
      <Link href="/careers" className="flex items-center justify-center text-2xl font-medium text-white hover:text-[#003bff] transition-all duration-300 group">
        Careers
        <span
        className="text-black font-bold text-2xl transition-transform 
                   duration-300 ease-in-out  group-hover:translate-x-2 text-transparent transform scale-0 group-hover:text-[#003bff] group-hover:scale-100 "
      >
        →
      </span>
      </Link>
    </li>
  </ul>
</div>



        </div>
      )}
    </div>
  );
}




