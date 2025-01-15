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
      <div className="bg-black">
        <Navbar />
      </div>
      <div className="bg-white py-10 mt-28">
        <div className="container mx-auto space-y-10 p-10">
          {/* Header Section */}
          <div className="flex justify-center md:justify-start items-center md:pl-16">
            <div className="text-left space-y-4">
              <h1 className="text-4xl md:text-5xl font-roboto text-black p-4">Career</h1>

              <h2 className="text-gray-900 text-xl md:text-2xl pl-4">
                Join Our Team and Help Shape the Future.
              </h2>
              <p className="text-gray-500 text-lg md:text-xl w-full md:w-[40rem] pl-4 leading-relaxed">
                We focus on making a difference through teamwork and creativity.
              </p>
            </div>
          </div>

          {/* Join Our Community Section */}
          <div className="p-8 space-y-6">
            <h2 className="text-3xl text-center font-semibold font-roboto text-black">
              Join Our Community
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed text-center md:w-[70rem] mx-auto px-4">
              Join us to create a new world with your own creative minds and knowledge.
              Rat SMS will guide you to the right path with enthusiasm. Don’t miss the
              opportunity to work freely in a tension-free environment.
            </p>
          </div>

          {/* Job Roles Section */}
          <div className="pl-16 pt-10">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {jobData.map((job) => (
                <div
                  key={job.id}
                  className="bg-white pb-6 w-full sm:w-80 mx-auto text-center space-y-4 border rounded-lg border-gray-500 p-10"
                >
                  <div className="flex flex-col items-start text-left">
                    <div className="mb-4">
                      {job.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800">{job.title}</h4>
                    <p className="text-gray-600">{job.description}</p>
                  </div>
                  <div className="mt-10">
                    <Link href={`/careers/job-details/${job.id}`}>
                      <button
                        type="submit"
                        className="w-full p-5 hover:bg-gray-500 border border-black font-semibold text-black py-2 px-4 transition duration-300"
                      >
                        Apply Now
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
