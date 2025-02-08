

import Head from 'next/head';
import Footer from "../../app/components/footer";
import Navbar from "../../app/components/Navbar";
import Phone from "../../app/components/phone";
import WhatsAppIcon from "../../app/components/whatsappIcon";
import "../../app/globals.css";
import { motion } from "framer-motion";
import Image from 'next/image';
import LocalBusinessSchema from '../../app/components/localSchema';

export default function Indust() {
  return (
    <>
     <LocalBusinessSchema
      name = "RAT SMS"
      description="Enhance customer engagement with reliable and fast bulk SMS solutions for promotions, transactions, and OTP services"
      url="https://ratsms.com/industry"
      city="chennai"
      address="Flat No – 17, 2nd Floor, Anandha Bhavan, Landmark, Mahatma Gandhi Rd, opp. to Hotel, Adyar, Chennai, Tamil Nadu 600041"
      latitude="13.003387° N"
      longitude=" 80.255043° E"
       pincode="600001"
      />
    <Head>
        <title>Unlock Seamless Communication with RAT SMS Bulk Messaging|RAT SMS
        </title>
        <meta 
          name="description" 
          content="RatSMS empowers industries like Real Estate, E-commerce, Travel, and more with tailored Bulk SMS solutions. Experience secure and effective messaging services." 
        />
        <meta 
          name="keywords" 
          content="Bulk SMS, Real Estate, Retail, B2B Engagement, E-commerce, Logistics, Travel, Hospitality, Messaging Solutions" 
        />
        <meta property="og:title" content="Boost B2B Engagement with Bulk SMS for Real Estate & Retail | RAT SMS" />
        <meta 
          property="og:description" 
          content="RAT SMS offers top-tier Bulk SMS Service for B2B businesses in Real Estate, Logistics, E-commerce, Retail, Travel, & Hospitality. Fast, secure, and reliable messaging solutions." 
        />
        <meta property="og:url" content="https://ratsms.com/industry" />
        <meta 
          property="og:image" 
          content="https://example.com/path-to-your-image.jpg" 
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Boost B2B Engagement with Bulk SMS for Real Estate & Retail | RAT SMS" />
        <meta 
          name="twitter:description" 
          content="RAT SMS offers top-tier Bulk SMS Service for B2B businesses in Real Estate, Logistics, E-commerce, Retail, Travel, & Hospitality. Fast, secure, and reliable messaging solutions." 
        />
        <meta 
          name="twitter:image" 
          content="https://example.com/path-to-your-image.jpg" 
        />
      </Head>
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
           <Phone/>
           <div className="bg-gray-50 py-16">
  <div className="container mx-auto space-y-20 px-6 sm:px-8 md:px-12 lg:px-16">
    
    {/* Real Estate */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
    >
      <Image
        src="/images/in1.jpg"
        alt="Real Estate"
        width={800}
        height={600}
        className="w-full sm:w-96 md:w-96 h-auto object-cover rounded-xl shadow-md transition-transform transform hover:scale-105"
      />
      <div className="w-full sm:w-[70rem] space-y-6">
        <h1 className="text-3xl sm:text-5xl md:text-4xl font-roboto text-black font-semibold">
          Real Estate 
        </h1>
        <p className="text-base sm:text-lg font-roboto text-gray-600 leading-relaxed tracking-wide">
          The real estate industry is undergoing a significant transformation, driven by 
          the integration of digital tools and innovative technologies. These advancements are
          reshaping how property is bought, sold, and managed, offering new opportunities for both
          real estate professionals and customers. From enhanced customer experiences to smarter
          property management, digital innovation is at the heart of this change. In an increasingly 
          digital world, customers expect a more personalized and seamless real estate experience.
          Real estate professionals are leveraging virtual tours, augmented reality (AR), and AI-driven
          property recommendations to provide clients with more immersive and convenient ways to explore
          properties. Bulk SMS is a powerful tool that complements these innovations, providing timely 
          communication directly to customers mobile devices.
        </p>
      </div>
    </motion.div>

    {/* E-commerce */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex flex-col md:flex-row-reverse items-center gap-8 bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
    >
      <Image
        src="/images/in2.jpg"
        alt="E-commerce"
        width={800}
        height={600}
        className="w-full sm:w-96 md:w-96 h-auto object-cover rounded-xl shadow-md transition-transform transform hover:scale-105"
      />
      <div className="w-full sm:w-[70rem] space-y-6">
        <h1 className="text-3xl sm:text-5xl md:text-4xl font-roboto text-black font-semibold">
          E-commerce
        </h1>
        <p className="text-base sm:text-lg font-roboto text-gray-600 leading-relaxed tracking-wide">
          The e-commerce industry has dramatically transformed the shopping experience, making it
          easier, more convenient, and accessible for consumers around the world. With the ability
          to shop from anywhere, at any time, and access an array of products and services, e-commerce
          platforms have reshaped how consumers engage with retailers. As this sector continues to evolve,
          emerging technologies and trends are pushing the boundaries of convenience, personalization,
          and customer satisfaction. One of the key reasons e-commerce has grown so rapidly is its unparalleled
          convenience. Consumers can browse and purchase products with a few clicks, whether they are at home,
          on the go, or at work.
        </p>
      </div>
    </motion.div>

    {/* Retail */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
    >
      <Image
        src="/images/in3.jpg"
        alt="Retail"
        width={800}
        height={600}
        className="w-full sm:w-96 md:w-96 h-auto object-cover rounded-xl shadow-md transition-transform transform hover:scale-105"
      />
      <div className="w-full sm:w-[70rem] space-y-6">
        <h1 className="text-3xl sm:text-5xl md:text-4xl font-roboto text-black font-semibold">
          Retail
        </h1>
        <p className="text-base sm:text-lg font-roboto text-gray-600 leading-relaxed tracking-wide">
          The retail industry is rapidly evolving, driven by the rise of omnichannel experiences and the
          integration of advanced analytics. These innovations are reshaping the way businesses interact with
          customers and streamline their operations, allowing for a more personalized and seamless shopping journey.
          As retail businesses adapt to these changes, Bulk SMS is emerging as a powerful tool for improving customer
          engagement, driving sales, and enhancing operational efficiency.
        </p>
      </div>
    </motion.div>

    {/* Education */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="flex flex-col md:flex-row-reverse items-center gap-8 bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
    >
      <Image
        src="/images/in4.jpg"
        alt="Education"
        width={800}
        height={600}
        className="w-full sm:w-96 md:w-96 h-auto object-cover rounded-xl shadow-md transition-transform transform hover:scale-105"
      />
      <div className="w-full sm:w-[70rem] space-y-6">
        <h1 className="text-3xl sm:text-5xl md:text-4xl font-roboto text-black font-semibold">
          Education
        </h1>
        <p className="text-base sm:text-lg font-roboto text-gray-600 leading-relaxed tracking-wide">
          The education industry is undergoing a rapid transformation, with digital learning platforms playing a pivotal
          role in shaping the future of education. From personalized learning experiences to enhancing accessibility,
          these platforms are making education more dynamic and inclusive. As this transformation continues, Bulk SMS is
          becoming an invaluable tool to improve communication, streamline administrative processes, and support student
          engagement.
        </p>
      </div>
    </motion.div>

    {/* Logistics */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
    >
      <Image
        src="/images/in5.jpg"
        alt="Logistics"
        width={800}
        height={600}
        className="w-full sm:w-96 md:w-96 h-auto object-cover rounded-xl shadow-md transition-transform transform hover:scale-105"
      />
      <div className="w-full sm:w-[70rem] space-y-6">
        <h1 className="text-3xl sm:text-5xl md:text-4xl font-roboto text-black font-semibold">
          Logistics
        </h1>
        <p className="text-base sm:text-lg font-roboto text-gray-600 leading-relaxed tracking-wide">
          The logistics industry is undergoing a transformative shift, driven by advancements in automation and real-time
          tracking. These technologies are reshaping the way businesses manage their supply chains, improving efficiency,
          accuracy, and customer satisfaction. Bulk SMS is emerging as a key tool for enhancing communication, tracking,
          and operational efficiency.
        </p>
      </div>
    </motion.div>

    {/* Travel and Hospitality */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="flex flex-col md:flex-row-reverse items-center gap-8 pl-4 md:pl-16 bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
    >
      <Image
        src="/images/in6.jpg"
        alt="Travel and Hospitality"
        width={800}
        height={600}
        className="w-full sm:w-96 md:w-96 h-auto object-cover rounded-xl shadow-md transition-transform transform hover:scale-105"
      />
      <div className="w-full sm:w-[70rem] space-y-6">
        <h1 className="text-3xl sm:text-5xl md:text-4xl font-roboto text-black font-semibold">
          Travel and Hospitality
        </h1>
        <p className="text-base sm:text-lg font-roboto text-gray-600 leading-relaxed tracking-wide">
          In today’s fast-paced world, the travel and hospitality industry is increasingly turning to technology to provide
          exceptional customer experiences, improve operational efficiency, and adopt sustainable practices. Bulk SMS
          services play a crucial role in streamlining communication and fostering better customer engagement.
        </p>
      </div>
    </motion.div>
    
  </div>
</div>


      <Footer />
    </>
  );
}
