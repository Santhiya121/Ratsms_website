import { motion } from 'framer-motion';
import Image from 'next/image';
import CareersHome from './careersHome';

export default function ClientHome() {
  const clientLogos = [
    "/images/cilent1.webp", 
    "/images/cilent_1.png", 
    "/images/cilent_22.jpg", 
    "/images/cilent_3.webp", 
    "/images/cilent_4.png", 
    "/images/cilent_5.png",
    "/images/cilent_6.png",
    "/images/cilent_7.png",
    "/images/vijay.png",
    "/images/van.webp",
    "/images/allen1.jpg",
    "/images/titan.jpg",
    "/images/fast1.jpg",
    "/images/tan1.jpg",
    "/images/tom.jpg",
    "/images/t&g.jpg",
    "/images/h&m.jpg",
    "/images/len.jpg",
    "/images/tata.jpg",
    "/images/zara.jpg",
  ];

  return (
    <>
      <div className="bg-black py-16 px-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white text-center mb-8">
          Our Clients
        </h1>
        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-8 animate-marquee"
            initial={{ x: '100%' }}
            animate={{ x: '-100%' }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 10, // Adjust the duration for scrolling speed
              ease: 'linear',
            }}
          >
            {clientLogos.map((src, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 sm:w-40 lg:w-48 bg-white border rounded-lg shadow-lg text-center p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="relative w-full h-32 sm:h-40 lg:h-48"> {/* Fixed height for div */}
                  <Image
                    src={src}
                    alt={`Client ${index + 1}`}
                    layout="fill"  // Makes the image fill the parent div
                    objectFit="contain"  // Ensure image fits without distortion
                    className="rounded-lg mb-4"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <CareersHome />
    </>
  );
}
