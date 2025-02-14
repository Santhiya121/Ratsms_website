import { motion } from "framer-motion";
import "../globals.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Phone() {
  const [showImage, setShowImage] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowImage(true), 500); // Load after 500ms
  }, []);
  return (
    <>
      <div className="fixed bottom-6 right-6 flex flex-col items-center  z-50 ">
        {/* WhatsApp Icon as an Image */}


        {/* Call Icon */}
        <a href="tel:+917506712345" aria-label="Call customer service at +917506712345">
          <Image
            src="/images/call1.png"
            alt="Call Icon"
            width={50}
            height={50}
            className="w-8 h-8 rounded-full hover:shadow-xl transition-all block md:hidden"
            aria-label="contact via call"
            loading="lazy"
          />
        </a>


        <Link
          href="https://wa.me/+917506712345?text=Hi%2C%20learn%20more%20about%20your%20services!"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
          aria-label="Chat on WhatsApp"
          title="Click to chat with us on WhatsApp"
        >
          {showImage ? (
            <i className="fab fa-whatsapp pt-4 text-4xl sm:text-3xl md:text-4xl lg:text-4xl text-green-700" />
          ) : (
            // Fallback text when the image is not shown
            <span>Chat on WhatsApp</span>
          )}
        </Link>

      </div>

      <motion.div
        className="fixed right-0 sm:right-6 top-1/2 transform -translate-y-1/2 text-white p-4 flex  sm:items-center space-x-4 z-20 cursor-pointer "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          animation: "bounce 1.5s infinite ease-in-out",
        }}
      >
        {/* Phone Icon - Small and Interactive (For Small Screens) */}

        {/* Phone Icon - Video as Icon */}



        {/* Image - Displayed only on larger screens */}
        <motion.div
          className="hidden sm:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: [1, 1.2, 1], // Scaling animation for image
            x: [0, 20, 0], // Move right and left
            y: [0, -20, 0], // Move up and down
            rotate: [0, 15, 0], // Rotate animation
            opacity: [1, 0.8, 1], // Fade in and out
          }}
          transition={{
            duration: 2, // Duration of the scale, position, rotation, and opacity animation
            repeat: Infinity, // Repeat infinitely
            ease: "easeInOut", // Smooth easing
          }}
        >
          {/* Image Instead of Video for Larger Screens */}
          <motion.div
            className="text-black flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/images/callus.webp"
              alt="Your Image"
              width={320}
              height={320}
              className="md:w-72"
              priority // Ensures image loads ASAP
              loading="eager" // Forces image to load immediately
            />

          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
