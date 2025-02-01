import { motion } from "framer-motion";
import "../globals.css";
import Image from "next/image";

export default function Phone() {
  return (
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
      <motion.div
        className="w-5 h-5 text-teal-600 rounded-full flex  sm:justify-center sm:items-center overflow-hidden shadow-md sm:hidden"
        whileHover={{ scale: 1.2, rotate: 10 }} // Hover effect: scale and rotate
        transition={{ duration: 0.3 }}
        animate={{
          scale: [1, 1.2, 1], // Scale animation: grow and shrink
          x: [0, 10, 0], // Move right and left
          y: [0, 10, 0], // Move up and down
          rotate: [0, 15, 0], // Rotate animation
          opacity: [1, 0.8, 1], // Fade in and out
        }}
        
      >
        {/* Phone Icon - Video as Icon */}
        <a href="tel:+917506712345"> 
         
            <Image
            src="/images/call_icon.png" 
            alt="Your Image"
            width={320} 
            height={320}
            className="h-full w-full" 
          />
        </a>
      </motion.div>

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
            src="/images/callus.png" // Replace with your image path
            alt="Your Image"
            width={320} // Define width (for example, 320px)
            height={320} // Define height (for example, 320px)
            className="md:w-72" // Adjust the width for different screen sizes
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
