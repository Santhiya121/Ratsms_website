


import React from 'react';
import '../../app/globals.css';
import Navbar from '../../app/components/Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '../../app/components/footer';
import Image from 'next/image'
import Head from "next/head";
import WhatsAppIcon from '../../app/components/whatsappIcon';
import Phone from '../../app/components/phone';

const AboutUsPage = () => {
  return (
    <>
    <Head>
  <meta charSet="UTF-8" />
  <meta
    name="keywords"
    content="bulk sms plans, bulk sms reviews, bulk sms services, bulk sms, promotional sms, transactional sms"
  />
  <meta
    name="description"
    content="Rat SMS offers affordable, 100% genuine bulk SMS services in India with 24/7 support, ensuring efficient, data-driven marketing solutions for your business."
  />
  <meta property="og:site_name" content="RATSMS" />
  <meta property="og:url" content="https://ratsms.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="RAT SMS : Bulk SMS Service Provider" />
  <meta name="og:image" content="https://ratsms.com/images/assets/ratsms-icon.png" />
  
  {/* For IE */}
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  
  {/* For Responsive Device */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  {/* For Window Tab Color */}
  <meta name="theme-color" content="#655C97" />
  
  {/* Windows Phone */}
  <meta name="msapplication-navbutton-color" content="#655C97" />
  
  {/* iOS Safari */}
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  
  <title>About RAT SMS - Bulk SMS Plans & Services</title>
</Head>

      {/* Navbar with black background */}
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

      {/* Main content with white background */}
      <div className="bg-white sm:pt-10">
        <div className=" px-4 sm:px-6 md:px-8  ">
          {/* Company Introduction */}
          <section className="mb-16 bg-white py-4 px-4 sm:px-16">
  {/* Header Section */}
  <header className="mb-10 sm:text-center text-left ">
    <h1 className="text-3xl sm:text-5xl tracking-widest font-roboto text-black mb-6">
      About Our Company
    </h1>
    <p className="text-sm sm:text-lg text-gray-700 mx-auto max-w-4xl">
      Rat SMS offers the world’s vision, where people will have a close affinity with products and brands. Creating the bonding and trust between them is one of our dreams.
    </p>
  </header>

  {/* Content Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Text Content */}
    <div className="space-y-6 text-gray-800 sm:text-xl text-base leading-relaxed font-roboto">
      <p>
        As bulk SMS marketing has emerged as a unique marketing strategy in the recent world market, India has followed suit. However, finding a smart and easy package for bulk SMS sending is still a troublesome factor in India.
      </p>
      <p>
        Our bulk SMS administration services are controlled through our web product applications. We offer the best quality in both page design and creation, with 24/7 support for bulk SMS management for you or your clients.
      </p>
      <p>
        We are here to provide the best quality service at the most reasonable price in India. Rat SMS offers 100% genuine delivery service, and choosing our services will be an excellent benefit for you.
      </p>
      <p>
        Our data-driven solutions cover all marketing solutions as per your choices, offering seamless, virtual, and highly innovative communication solutions to ensure your business’s best efficiency.
      </p>
    </div>

    {/* Image Section */}
    <div className="flex justify-center">
      <Image
        src="/images/com.jpg"
        alt="About Our Company"
        width={300}
        height={600}
        className="w-full md:w-[400px] lg:w-[500px] h-auto object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
      />
    </div>
  </div>

  {/* CTA Section */}
  <div className="mt-20 text-center">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">
      Why Choose Rat SMS?
    </h2>
    <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
      Experience seamless communication, unparalleled delivery rates, and innovative solutions tailored to your business needs.
    </p>
    <button className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition duration-300">
      Learn More
    </button>
  </div>
</section>


          {/* Global Statistics */}
          <section className="mb-16 text-center bg-white py-6 w-full">
  <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold text-black mb-8">
    Our Global Reach
  </h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 px-4 sm:px-8">
    {[
      { icon: 'fas fa-users', label: 'Global Clients', value: '37,350' },
      { icon: 'fas fa-id-card-alt', label: 'Global Sender ID', value: '20,346' },
      { icon: 'fas fa-mobile-alt', label: 'Telecom Brands', value: '10' },
      { icon: 'fas fa-paper-plane', label: 'Messages Sent', value: '99,458,538' },
      { icon: 'fas fa-check-circle', label: 'Messages Delivered', value: '87,577,659' },
    ].map((stat, index) => (
      <div
        key={index}
        className="bg-white p-4 shadow-lg rounded-lg flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300"
      >
        <div className="text-black text-2xl sm:text-3xl mb-3">
          <i className={stat.icon}></i>
        </div>
        <h3 className="text-sm sm:text-base font-medium text-black mb-1">
          {stat.label}
        </h3>
        <p className="text-base sm:text-lg font-semibold text-black">
          {stat.value}
        </p>
      </div>
    ))}
  </div>
</section>


          {/* Partners Section */}
          <div className="">
  <header className="text-center mb-12">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
      Our Partners
    </h2>
    <p className="text-sm sm:text-base md:text-lg text-black mb-6 text-center px-4 sm:px-16 lg:px-40">
      Rat SMS partners with leading telecom brands to offer world-class bulk SMS services. We are proud to collaborate with industry leaders to ensure seamless service delivery and customer satisfaction.
    </p>
  </header>

  <div className="py-6">
    <div className="container mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-items-center items-center px-4 sm:px-72">
        {[
          { src: '/images/airtel.jpg', alt: 'Partner 1' },
          { src: '/images/bsnl.png', alt: 'Partner 2' },
          { src: '/images/jio.jpg', alt: 'Partner 3' },
          { src: '/images/vi.jpg', alt: 'Partner 4' },
        ].map((partner, index) => (
          <div key={index}>
            <Image
              src={partner.src}
              alt={partner.alt}
              width={100} // Reduced width
              height={100} // Reduced height
              className="w-20 sm:w-20  h-auto object-contain rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;
