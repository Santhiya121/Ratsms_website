import { motion } from "framer-motion";
import "../globals.css";
import Image from "next/image";

export default function Phone() {
  return (
    <>
      <div className="fixed bottom-0 right-0 mb-6 mr-6 block md:hidden z-50">
        <a href="tel:+917506712345">
          <Image
            srcSet="/images/green.webp 320w, /images/green-large.webp 640w"
            src="/images/green.webp"
            alt="Call Icon"
            width={320}
            height={320}
            className="w-12 h-12 transform hover:scale-110 transition-all duration-200"
            loading="lazy"
          />

        </a>
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
