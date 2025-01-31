


import Footer from "../../app/components/footer";
import Navbar from "../../app/components/Navbar";
import WhatsAppIcon from "../../app/components/whatsappIcon";
import "../../app/globals.css";
import { motion } from "framer-motion";
import Image from 'next/image';

export default function Indust() {
  return (
    <>
     <div
             style={{
               backgroundColor: "black",
               zIndex: 100,
               position: "relative",
               height: "4rem", // Fixed height for testing
               width: "100%",
             }}
           >
             <Navbar />
           </div>
           <WhatsAppIcon/>
      <div className="bg-gray-50 py-10 ">
        <div className="container mx-auto space-y-16 px-4 sm:px-6 md:px-8 lg:px-16 p-6">
          
          {/* Real Estate */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-6"
          >
            <Image
              src="/images/in1.jpg"
              alt="Real Estate"
              width={800}
              height={600}
              className="w-full sm:w-96 md:w-96 h-auto object-cover"
            />
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-3xl sm:text-5xl md:text-4xl font-roboto text-black">
                Real Estate
              </h2>
              <p className="text-base sm:text-xl font-roboto text-gray-600">
                The real estate industry is rapidly transforming with digital tools and innovations, driving enhanced customer experiences and smarter property management solutions. Explore the future of real estate with us.
              </p>
            </div>
          </motion.div>

          {/* E-commerce */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row-reverse items-center gap-6"
          >
            <Image
              src="/images/in2.jpg"
              alt="E-commerce"
              width={800}
              height={600}
              className="w-full sm:w-96 md:w-96 h-auto object-cover"
            />
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-3xl sm:text-5xl md:text-4xl font-roboto text-black">
                E-commerce
              </h2>
              <p className="text-base sm:text-xl font-roboto text-gray-600">
                E-commerce platforms have revolutionized the shopping experience, offering convenience and variety. Dive into the latest trends and technologies shaping online retail.
              </p>
            </div>
          </motion.div>

          {/* Retail */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center gap-6"
          >
            <Image
              src="/images/in3.jpg"
              alt="Retail"
              width={800}
              height={600}
              className="w-full sm:w-96 md:w-96 h-auto object-cover"
            />
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-3xl sm:text-5xl md:text-4xl font-roboto text-black">
                Retail
              </h2>
              <p className="text-base sm:text-xl font-roboto text-gray-600">
                The retail sector is adapting to a new era with omnichannel experiences and advanced analytics. Learn how these changes impact businesses and customers alike.
              </p>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row-reverse items-center gap-6"
          >
            <Image
              src="/images/in4.jpg"
              alt="Education"
              width={800}
              height={600}
              className="w-full sm:w-96 md:w-96 h-auto object-cover"
            />
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-3xl sm:text-5xl md:text-4xl font-roboto text-black">
                Education
              </h2>
              <p className="text-base sm:text-xl font-roboto text-gray-600">
                Education is evolving with digital learning platforms, enabling personalized and accessible education for all. Discover the latest innovations in this field.
              </p>
            </div>
          </motion.div>

          {/* Logistics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-6"
          >
            <Image
              src="/images/in5.jpg"
              alt="Logistics"
              width={800}
              height={600}
              className="w-full sm:w-96 md:w-96 h-auto object-cover"
            />
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-3xl sm:text-5xl md:text-4xl font-roboto text-black">
                Logistics
              </h2>
              <p className="text-base sm:text-xl font-roboto text-gray-600">
                The logistics industry is embracing automation and real-time tracking to optimize supply chain management. Stay ahead with insights into this transformative sector.
              </p>
            </div>
          </motion.div>

          {/* Travel and Hospitality */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col md:flex-row-reverse items-center gap-6 pl-4 md:pl-16"
          >
            <Image
              src="/images/in6.jpg"
              alt="Travel and Hospitality"
              width={800}
              height={600}
              className="w-full sm:w-96 md:w-96 h-auto object-cover"
            />
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-3xl sm:text-5xl md:text-4xl font-roboto text-black">
                Travel and Hospitality
              </h2>
              <p className="text-base sm:text-xl font-roboto text-gray-600">
                Explore how the travel and hospitality industries are leveraging technology to enhance customer experiences, streamline operations, and promote sustainable practices.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
      <Footer />
    </>
  );
}
