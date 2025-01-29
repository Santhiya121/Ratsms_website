// import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSatelliteDish, faPhone, faSearch } from '@fortawesome/free-solid-svg-icons';
// import Navbar from '../../app/components/Navbar'; // Ensure the correct import path
// import Footer from '../../app/components/footer'; // Ensure the correct import path
// import "../../app/globals.css"; // Ensure the correct import path

// export default function Careers() {
//   // Array of job data with ID to link to specific job details page
//   const jobData = [
//     {
//       icon: <FontAwesomeIcon icon={faSatelliteDish} className="text-black text-3xl" />,
//       title: "SMPP Engineer",
//       description: "SMPP Engineer is responsible for maintaining and optimizing SMS services, troubleshooting issues, and ensuring reliable delivery of SMS traffic.",
//       id: 1, // Unique ID for the job
//     },
//     {
//       icon: <FontAwesomeIcon icon={faPhone} className="text-black text-3xl" />,
//       title: "Telesales Executive",
//       description: "Telesales Executive is responsible for generating sales and leads over the phone, managing client accounts, and meeting sales targets.",
//       id: 2,
//     },
//     {
//       icon: <FontAwesomeIcon icon={faSearch} className="text-black text-3xl" />,
//       title: "SEO & SEM Analyst",
//       description: "SEO & SEM Analyst is responsible for optimizing website performance using search engine marketing and search engine optimization strategies.",
//       id: 3,
//     },
//   ];

//   return (
//     <>
//       <div className="bg-black">
//         <Navbar />
//       </div>
//       <div className="bg-white py-10 mt-28">
//         <div className="container mx-auto space-y-10 p-10">
//           {/* Header Section */}
//           <div className="flex justify-between">
//             <div className="flex justify-center items-center pl-16">
//               <div className="text-left space-y-4">
//                 <h1 className="text-5xl font-roboto text-black p-4">Career</h1>

//                 <h2 className="text-gray-900 text-2xl w-[40rem] pl-4">
//                   Join Our Team and Help Shape the Future.
//                 </h2>
//                 <p className="text-gray-500 text-xl w-[40rem] pl-4 leading-relaxed">
//                   We focus on making a difference through teamwork and creativity.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Join Our Community Section */}
//           <div className="p-8 space-y-6">
//             <h2 className="text-3xl text-center font-semibold font-roboto text-black">
//               Join Our Community
//             </h2>
//             <p className="text-gray-700 text-lg leading-relaxed text-center w-[70rem] pl-52">
//               Join us to create a new world with your own creative minds and knowledge.
//               Rat SMS will guide you to the right path with enthusiasm. Don’t miss the
//               opportunity to work freely in a tension-free environment.
//             </p>
//           </div>

//           {/* Job Roles Section */}
//           <div className="pl-16 pt-10  ">
//             <div className="grid gap-5  md:grid-cols-2 lg:grid-cols-3">
//               {jobData.map((job) => (
//                 <div
//                   key={job.id}
//                   className="bg-white pb-6 w-80 text-center space-y-4 border rounded-lg border-gray-500 p-10"
//                 >
//                   <div className="flex flex-col items-start text-left">
//                     <div className="mb-4">
//                       {job.icon}
//                     </div>
//                     <h4 className="text-xl font-semibold text-gray-800">{job.title}</h4>
//                     <p className="text-gray-600">{job.description}</p>
//                   </div>
//                   <div className='mt-10'>
//                   <Link href={`/careers/job-details/${job.id}`}>
                 
//                     <button
//                       type="submit"
//                       className="w-full  p-5 hover:bg-gray-500 border border-black font-semibold text-black py-2 px-4 transition duration-300"
//                     >
//                       Apply Now
//                     </button>
//                   </Link>
//                   </div>
                
//                 </div>
                
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }


import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSatelliteDish, faPhone, faSearch } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../app/components/Navbar'; // Ensure the correct import path
import Footer from '../../app/components/footer'; // Ensure the correct import path
import "../../app/globals.css"; // Ensure the correct import path
import { motion } from "framer-motion";
import Head from 'next/head';
import WhatsAppIcon from '../../app/components/whatsappIcon';

export default function Careers() {
  // Array of job data with ID to link to specific job details page
  const jobData = [
    {
      icon: <FontAwesomeIcon icon={faSatelliteDish} className="text-black text-3xl" />,
      title: "SMPP Engineer",
      description: "SMPP Engineer is responsible for maintaining and optimizing SMS services, troubleshooting issues, and ensuring reliable delivery of SMS traffic.",
      id: 1, // Unique ID for the job
    },
    {
      icon: <FontAwesomeIcon icon={faPhone} className="text-black text-3xl" />,
      title: "Telesales Executive",
      description: "Telesales Executive is responsible for generating sales and leads over the phone, managing client accounts, and meeting sales targets.",
      id: 2,
    },
    {
      icon: <FontAwesomeIcon icon={faSearch} className="text-black text-3xl" />,
      title: "SEO & SEM Analyst",
      description: "SEO & SEM Analyst is responsible for optimizing website performance using search engine marketing and search engine optimization strategies.",
      id: 3,
    },
  ];

  return (
    <>
     <Head>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Rat SMS is a bulk SMS provider with free SMS API India. We are Direct TeleCom operator Connectivity. Try our abundant smart SMS with 100% delivery & free DLT registration"
        />
        <meta
          name="keyword"
          content="bulk sms aggregator company, aggregator connectivity, bulk sms aggregator, sms aggregator, dlt registration, bulk sms service, sms gateway, bulk sms provider, otp sms, sms api, bulk sms services in india, bulk sms gateway, bulk sms india, bulk sms api, bulk sms provider in india, free sms api india, bulk sms reseller"
        />
        <link rel="canonical" href="https://ratsms.com/careers/join-us" />
        <meta property="og:site_name" content="RATSMS" />
        <meta property="og:url" content="https://ratsms.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RAT SMS : Career" />
        <meta name="og:image" content="images/assets/ratsms-icon.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#655C97" />
        <meta name="msapplication-navbutton-color" content="#655C97" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
        <title>RAT SMS | Career</title>
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
      <div className="bg-white">

      <div className="bg-white text-black flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-10">
          {/* Left Side: Heading */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-2 text-center md:text-left"
          >
            <h1 className="text-2xl sm:text-5xl font-roboto  px-4 md:px-16">Career</h1>
            {/* <p className="text-base md:text-lg px-4 md:px-16">Join With Us</p> */}
          </motion.div>

          {/* Right Side: Details */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4 text-center md:text-right px-4 md:px-16"
          >
            <p className="text-gray-700 text-base md:text-lg">Join Our Team and Help Shape the Future.</p>
            <p className="text-gray-500 text-sm md:text-base">
            We focus on making a difference through teamwork and creativity.
            </p>
          </motion.div>
        </div>
        <div>
          {/* Header Section */}
          {/* <div className="flex justify-center md:justify-start items-center md:pl-16">
            <div className="text-left space-y-4">
              <h1 className="text-4xl md:text-5xl font-light text-black p-4">Career</h1>

              <p className="text-gray-900 text-xl md:text-xl pl-4">
                Join Our Team and Help Shape the Future.
              </p>
              <p className="text-gray-500 text-xl md:text-xl w-full md:w-[40rem] pl-4 leading-relaxed">
                We focus on making a difference through teamwork and creativity.
              </p>
            </div>
          </div> */}

          {/* Join Our Community Section */}
          <div className="p-8 pl-10">
            <h2 className="text-2xl pl-10 text-left  font-roboto text-black">
              Join Our Community
            </h2>
            <p className="text-gray-700 text-lg font-light text-left pl-10 pt-5 mx-auto ">
              Join us to create a new world with your own creative minds and knowledge.
              Rat SMS will guide you to the right path with enthusiasm. Don’t miss the
              opportunity to work freely in a tension-free environment.
            </p>
          </div>

          {/* Job Roles Section */}
          <div className="pt-10 pl-8 pb-16">
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {jobData.map((job) => (
      <div
        key={job.id}
        className="bg-white pb-6 w-full sm:w-96 mx-auto text-center space-y-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300"
      >
        {/* Icon and Title Section */}
        <div className="flex flex-col items-start text-left p-6">
          <p className="text-4xl text-gray-800 mb-4">{job.icon}</p>
          <h4 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-300 pb-2">
            {job.title}
          </h4>
          <p className="text-gray-700 mt-4">{job.description}</p>
        </div>
      
        {/* Button Section */}
        <div className="px-6">
        <Link href={`/careers/job-details/${job.id}`}>
        <button
        className="relative  max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-lg xl:max-w-xl h-16 p-2 border border-black text-white bg-white 
                   flex items-center justify-between group 
                   transition-all duration-300 ease-in-out hover:bg-black hover:text-black"
      >
        <span className="text-base sm:text-lg md:text-lg font-roboto text-center text-black p-2 sm:p-6 md:p-8 group-hover:text-white transition-all duration-300 ease-in-out">
          Explore More
        </span>
        <span
          className="text-black font-bold text-xl sm:text-2xl transition-transform 
                     duration-300 ease-in-out group-hover:text-white group-hover:translate-x-2"
        >
          →
        </span>
      </button>
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>

        </div>
      </div>
      <Footer />
    </>
  );
}
