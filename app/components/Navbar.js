
import { useState, useEffect } from "react";
import "../../styles/globals.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from '@fortawesome/free-solid-svg-icons';



// import Image from 'next/image'


export default function Navbar() {
  const [isProductsVisible, setIsProductsVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false); // New state for the bars icon
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [toggleMenu,setToggleMenu] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  return (
    <div
      className={`top-0 w-full z-50 fixed transition-all duration-300 ease-in-out   ${
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between bg-transparent pl-5 ">
        {/* Logo */}
        <div className="logo text-2xl  font-semibold hover:text-[#003bff]">
         
         
          <Link href="/" >  <p className="text-white">RATSMS</p> </Link>

        </div>

        {/* Navbar Links */}
        <nav className="hidden md:flex  pl-[33rem]  space-x-4 sm:space-x-12 md:pl-[5rem]  lg:pl-[40rem]   ">
        <Link href="/" legacyBehavior>
  <a className="text-base font-roboto  text-white hover:text-[#003bff] ">
    Home
  </a>
</Link>



          {/* Products Button */}
          <div className="relative dropdown-container">
            <button
              className="text-base font-roboto text-white hover:text-[#003bff] "
              onClick={handleProductsClick}
            >
              Products
            </button>

            {/* Dropdown Menu */}
            {isProductsVisible && (
             <div
             className={`fixed top-0 left-0 w-screen h-[35rem] mt-14 bg-black bg-opacity-70 z-50 backdrop-blur-md grid grid-cols-3 gap-4 p-8 shadow-lg ${
               isProductsVisible ? "animate-slideDown" : "animate-slideUp"
             }`}>
                {/* Content for Products */}
                <div className="p-12">                                                      
                <div className="text-3xl font-thin p-4 text-white">
  <div className="pt-3 font-roboto  font-thin tracking-tight ">
    Effortless Communication
  </div>
  <div className="pt-3 font-roboto font-thin tracking-tight ">
    Limitless reach
  </div>
  <div className="pt-3 font-roboto font-thin tracking-tight ">
    Let your business
  </div>
  <div className="pt-3 font-roboto font-thin tracking-tight ">
    Grow with every message.
  </div>
</div>

                  <div className="pt-2 ">
                  <Link href="/overview">
                  <button
      className=" h-16 text-white bg-transparent 
                 flex items-center justify-between  group 
                 transition-all duration-300 ease-in-out  hover:text-[#003bff]"
    >
      <span className="text-xl font-roboto text-center text-white p-4 group-hover:text-[#003bff] transition-all duration-300 ease-in-out">
       Go to overview
      </span>
      <span
        className="text-white font-bold text-2xl transition-transform 
                   duration-300 ease-in-out group-hover:text-[#003bff] group-hover:translate-x-2"
      >
        →
      </span>
    </button>
                  </Link>
                  </div>
                </div>
                {/* Product Links */}
                <div className="pl-28 pt-16">
      <ul>
        <ul className="text-base font-light pl-8 ">
          {[
            { href: "/bulk-sms-service-implicit", text: "Service Implicit"},
            { href: "/bulk-sms-service-explicit", text: "Service Explicit" },
            { href: "/promotional-bulk-sms-chennai", text: "Promotional Bulk SMS" },
            { href: "/transactional-bulk-sms-chennai", text: "Transactional Bulk SMS" },
            { href: "/otp-bulk-sms-chennai", text: "OTP SMS" },
            { href: "/smartsms-send-bulk-sms-attachments", text: "SMART SMS" },
            { href: "/whatsapp-business-api", text: "WhatsApp Business API" },
          ].map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="flex items-center text-2xl font-thin font-roboto pt-4  text-white hover:text-white hover:font-semibold group"
              >
                {item.text}
                <span
        className="text-black font-bold text-2xl transition-transform  
                   duration-300 ease-in-out  group-hover:translate-x-2 text-transparent transform scale-0 group-hover:text-white hover:font-roboto group-hover:scale-100 "
      >
        →
      </span>
              </Link>
            </li>
          ))}
        </ul>
      </ul>
    </div>
              </div>
            )}
          </div>

          <Link href="/smpp-gateway-provider" className="text-base font-roboto text-white hover:text-[#003bff] ">
            Smpp
          </Link>
          <Link href="/bulk-sms-pricing-india" className="text-base font-roboto text-white hover:text-[#003bff] ">
            Pricing
          </Link>
          <Link href="/industry" className="text-base font-roboto text-white hover:text-[#003bff] ">
            Industry
          </Link>
          <Link href="/blog" className="text-base font-roboto text-white hover:text-[#003bff] ">
            Blogs
          </Link>
          <Link href="/contact" className="text-base font-roboto text-white hover:text-[#003bff] ">
            Contact 
          </Link>
        </nav>
        <div className="flex ">
          {/* <button className="text-lg text-white hover:text-blue-300 p-4">
            <FontAwesomeIcon icon={faSearch} />
          </button> */}
        <Link href="">
  <button className="text-base text-white hover:text-[#003bff] p-4" onClick={handlePhoneClick}>
    <FontAwesomeIcon icon={faPhone} />
    
  </button>
  {isPopupVisible && (
  <div
    className="fixed top-14 right-0 z-50 w-full px-4 sm:w-full sm:mr-8 md:w-80 lg:w-full xl:w-full"
    style={{ display: "flex", justifyContent: "flex-end" }}
  >
    <div className="bg-white p-6 shadow-lg w-full max-w-md rounded-lg relative">
      {/* Title */}
      <h2 className="text-xl font-roboto text-left text-black mb-4">
        Talk to a sales advisor
      </h2>

      {/* Description */}
      <p className="text-gray-700 text-left text-sm sm:text-base">
        We have a team of specialists available 24/7 to help you find the best
        solution for your business.
      </p>

      {/* Contact Info */}
      <p className="text-left text-[#003bff] mt-6 font-roboto text-lg">
        <FontAwesomeIcon icon={faPhone} /> <strong>75067 12345</strong>
      </p>

      {/* Close Button */}
      <button
        onClick={closePopup}
        className="absolute top-2 right-2 text-2xl pr-3 hover:text-[#003bff] text-black"
      >
        &times;
      </button>
    </div>
  </div>
)}


</Link>
          <button className="text-base text-white hover:text-[#003bff] p-4" onClick={handleBarsClick}>
            {/* <FontAwesomeIcon icon={faBars} /> */}
             <i className="fa-solid fa-grip-lines"></i>
          </button>
        </div>
      </div>

      {/* Black Container for Bars Icon */}
      {isMenuVisible && (
        <div className="fixed top-0 left-0 w-screen h-[35rem] mt-14 bg-black bg-opacity-70 z-50 backdrop-blur-md p-8">
        <div className="text-white font-roboto  text-center">
          <ul className="space-y-6 pl-6 sm:pl-10 md:pl-28">
            <li>
              <Link
                href="/bulk-sms"
                className="flex items-center justify-start text-base md:text-2xl font-thin text-white hover:text-white hover:font-semibold transition-all duration-300 group"
              >
                Bulk SMS
                <span
                  className="text-white font-bold text-base md:text-3xl transition-transform duration-300 ease-in-out group-hover:translate-x-2 text-transparent transform scale-0 group-hover:text-white group-hover:scale-100"
                >
                  →
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/bulk-sms-gateway-aggregator"
                className="flex items-center justify-start text-base md:text-2xl font-thin text-white hover:text-white hover:font-semibold transition-all duration-300 group"
              >
                Bulk SMS Gateway Aggregator
                <span
                  className="text-white font-bold text-base md:text-3xl transition-transform duration-300 ease-in-out group-hover:translate-x-2 text-transparent transform scale-0 group-hover:text-white group-hover:scale-100"
                >
                  →
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/developer-api"
                className="flex items-center justify-start text-base md:text-2xl font-thin hover:text-white hover:font-semibold text-white  transition-all duration-300 group"
              >
                Developer API
                <span
                  className="text-white font-bold text-base md:text-3xl transition-transform duration-300 ease-in-out group-hover:translate-x-2 text-transparent transform scale-0 group-hover:text-white group-hover:scale-100"
                >
                  →
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="flex items-center justify-start text-base md:text-2xl font-thin text-white hover:text-white hover:font-semibold transition-all duration-300 group"
              >
                About Us
                <span
                  className="text-white font-bold text-base md:text-3xl transition-transform duration-300 ease-in-out group-hover:translate-x-2 text-transparent transform scale-0 group-hover:text-white group-hover:scale-100"
                >
                  →
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="flex items-center justify-start text-base md:text-2xl font-thin text-white hover:text-white hover:font-semibold transition-all duration-300 group"
              >
                Blogs
                <span
                  className="text-white font-bold text-base md:text-3xl transition-transform duration-300 ease-in-out group-hover:translate-x-2 text-transparent transform scale-0 group-hover:text-white group-hover:scale-100"
                >
                  →
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/terms-and-conditions"
                className="flex items-center justify-start text-base md:text-2xl font-thin text-white hover:text-white hover:font-semibold transition-all duration-300 group"
              >
                Terms and Conditions
                <span
                  className="text-white font-bold text-base md:text-3xl transition-transform duration-300 ease-in-out group-hover:translate-x-2 text-transparent transform scale-0 group-hover:text-white group-hover:scale-100"
                >
                  →
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/refund-policy"
                className="flex items-center justify-start text-base md:text-2xl font-thin text-white hover:text-white hover:font-semibold transition-all duration-300 group"
              >
                Refund Policies
                <span
                  className="text-white font-bold text-base md:text-3xl transition-transform duration-300 ease-in-out group-hover:translate-x-2 text-transparent transform scale-0 group-hover:text-white group-hover:scale-100"
                >
                  →
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="flex items-center justify-start text-base md:text-2xl font-thin text-white hover:text-white hover:font-semibold transition-all duration-300 group"
              >
                Privacy Policy
                <span
                  className="text-white font-bold text-base md:text-3xl transition-transform duration-300 ease-in-out group-hover:translate-x-2 text-transparent transform scale-0 group-hover:text-white group-hover:scale-100"
                >
                  →
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className="flex items-center justify-start text-base md:text-2xl font-thin text-white hover:text-white hover:font-semibold transition-all duration-300 group"
              >
                Careers
                <span
                  className="text-white font-bold text-base md:text-3xl transition-transform duration-300 ease-in-out group-hover:translate-x-2 text-transparent transform scale-0 group-hover:text-white group-hover:scale-100"
                >
                  →
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      )}
        <button onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden fixed top-0 right-24 text-white rounded-lg hover:text-[#003bff]  transition-all duration-300 p-4">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M6 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM15.75 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3H18a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2.25ZM6 12.75a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3v-2.25a3 3 0 0 0-3-3H6ZM17.625 13.5a.75.75 0 0 0-1.5 0v2.625H13.5a.75.75 0 0 0 0 1.5h2.625v2.625a.75.75 0 0 0 1.5 0v-2.625h2.625a.75.75 0 0 0 0-1.5h-2.625V13.5Z" />
  </svg>
</button>






        {/* Right Icons */}
      



{toggleMenu && <nav className="block md:hidden bg-[rgba(0,0,0,1)] pt-4 pb-6 ">
  <div className="flex flex-col gap-5 text-left mt-4 h-screen pl-20">
  {/* Home Link */}
  <Link href="/home" legacyBehavior>
    <a className="text-base font-roboto text-white hover:text-[#003bff] transition-all duration-300">
      Home
    </a>
  </Link>

  {/* Products Dropdown */}
  <div className=" dropdown-container">
    <button
      onClick={toggleDropdown}
      className="text-white font-medium  py-2 rounded-lg hover:text-[#003bff] flex items-center transition-all duration-300"
    >
      Products
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 ml-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    {/* Dropdown Menu */}
    {isDropdownVisible && (
      <div className="relative left-32 transform -translate-x-1/2  w-64 bg-white rounded-lg shadow-lg z-50">
        <ul className="py-2">
          {[
            { href: "/bulk-sms-service-implicit", text: "Service Implicit" },
            { href: "/bulk-sms-service-explicit", text: "Service Explicit" },
            { href: "/promotional-bulk-sms-chennai", text: "Promotional Bulk SMS" },
            { href: "/transactional-bulk-sms-chennai", text: "Transactional Bulk SMS" },
            { href: "/otp-bulk-sms-chennai", text: "OTP SMS" },
            { href: "/smartsms-send-bulk-sms-attachments", text: "Smart SMS" },
            { href: "/whatsapp-business-api", text: "WhatsApp Business API" },
          ].map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-[#003bff] transition-all duration-300"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>

  {/* Other Links */}
  <Link
    href="/smpp-gateway-provider"
    className="text-base font-roboto text-white hover:text-[#003bff] transition-all duration-300"
  >
    Smpp
  </Link>
  <Link
    href="/bulk-sms-pricing-india"
    className="text-base font-roboto text-white hover:text-[#003bff] transition-all duration-300"
  >
    Pricing
  </Link>
  <Link
    href="/industry"
    className="text-base font-roboto text-white hover:text-[#003bff] transition-all duration-300"
  >
    Industry
  </Link>
  <Link
    href="/blog"
    className="text-base font-roboto text-white hover:text-[#003bff] transition-all duration-300"
  >
    Blogs
  </Link>
  <Link
    href="/contact"
    className="text-base font-roboto text-white hover:text-[#003bff] transition-all duration-300"
  >
    Contact Us
  </Link>
</div>

        </nav>}
    </div>



  );
}  
















