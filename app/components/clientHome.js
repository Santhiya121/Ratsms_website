
import { motion } from 'framer-motion';

import Image from 'next/image'
import CareersHome from './careersHome';

export default function ClientHome() {
  const clientLogos = [
    "/images/cilent1.webp", 
            "/images/cilent_1.png", 
            "/images/cilent_2.jpg", 
            "/images/cilent_3.webp", 
            "/images/cilent_4.png", 
            "/images/cilent_5.png",
            "/images/cilent_6.png",
            "/images/cilent_7.png",
            "/images/vijay.png",
            "/images/van.webp",
            "/images/allen.png",
            "/images/titan.jpg",
            "/images/fast.webp",
            "/images/tan.jpg",
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
            duration:10, // Adjust the duration for scrolling speed
            ease: 'linear',
          }}
        >
          {clientLogos.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 sm:w-40 lg:w-48 bg-white border rounded-lg shadow-lg text-center p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Image
                src={src}
                alt={`Client ${index + 1}`}
                width={200}
                height={128}
                className="w-full h-24 sm:h-28 lg:h-32 object-cover rounded-lg mb-4"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
    <CareersHome/>
   </>
  );
}

