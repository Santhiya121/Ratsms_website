
        // 'use client';
        // import { useRouter } from 'next/router';
        // import { useState } from 'react';
        // import Navbar from '../../../app/components/Navbar';
        // import Footer from '../../../app/components/footer';
        // import "../../../app/globals.css"
        // import WhatsAppIcon from '../../../app/components/whatsappIcon';

        // export default function JobDetails() {
        //   const router = useRouter();
        //   const { id } = router.query; // Getting the dynamic id from the URL

        //   // Simulating fetching job data for the id (you could fetch data from an API or database)
        //   const jobData = {
        //     1: {
        //       title: "SMPP Engineer",
        //       description: "SMPP Engineer is responsible for maintaining and optimizing SMS services, troubleshooting issues, and ensuring reliable delivery of SMS traffic.",
        //     },
        //     2: {
        //       title: "Telesales Executive",
        //       description: "Telesales Executive is responsible for generating sales and leads over the phone, managing client accounts, and meeting sales targets.",
        //     },
        //     3: {
        //       title: "SEO & SEM Analyst",
        //       description: "SEO & SEM Analyst is responsible for optimizing website performance using search engine marketing and search engine optimization strategies.",
        //     },
        //   };

        //   const job = jobData[id]; // Get job details by id
        //   const [formData, setFormData] = useState({
        //     name: '',
        //     email: '',
        //     mobile: '',
        //     education: '',
        //     workExperience: '',
        //     company: '',
        //     noticePeriod: '',
        //     currentCTC: '',
        //     expectedSalary: '',
        //     resume: null,
        //     mobileOTP: '',
        //     emailOTP: '',
        //     message: '',
        //   });

        //   // If no job data is found for the id, show an error
        //   if (!job) {
        //     return <p>Job not found.</p>;
        //   }

        //   // State for the form inputs


        //   // Handle form field changes
        //   const handleChange = (e) => {
        //     const { name, value } = e.target;
        //     setFormData({
        //       ...formData,
        //       [name]: value,
        //     });
        //   };

        //   // Handle file upload for the resume
        //   const handleFileChange = (e) => {
        //     setFormData({
        //       ...formData,
        //       resume: e.target.files[0],
        //     });
        //   };

        //   // Handle form submission (you can add your form submission logic here)
        //   const handleSubmit = (e) => {
        //     e.preventDefault();
        //     // Here you would send the form data to your server or API
        //     alert('Form submitted');
        //   };

        //   return (
        //     <>
        //       <div
        //               style={{
        //                 backgroundColor: "black",
        //                 zIndex: 100,
        //                 position: "relative",
        //                 height: "4rem", // Fixed height for testing
        //                 width: "100%",
        //               }}
        //             >
        //               <Navbar />
        //             </div>
        //             <WhatsAppIcon/>
        //       <div className='pl-16 pt-10  bg-white'>
        //         <h1 className="text-xl sm:text-5xl font-roboto  text-black">{job.title}</h1>
        //         <p className="mt-4 text-xl  text-gray-600">{job.description}</p>
        //       </div>

        //       {/* Job Application Form */}
        //       <div className='w-full'>
        //         <div className="p-5 bg-white">
        //           <form onSubmit={handleSubmit} className="mt-10 w-full h-full mb-16 px-8 py-6 bg-white max-w-4xl mx-auto">
        //             <div className='flex flex-col md:flex-row gap-5'>
        //               <div className='w-full md:w-1/2 '>
        //                 <div className="flex flex-col space-y-4">
        //                   <div className="flex flex-col space-y-2">
        //                     <label htmlFor="name" className="text-lg text-gray-700">Enter your name</label>
        //                     <input
        //                       type="text"
        //                       id="name"
        //                       name="name"
        //                       value={formData.name}
        //                       onChange={handleChange}
        //                       placeholder="Enter your name"
        //                       className="border-2 border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        //                       required
        //                     />
        //                   </div>

        //                   <div className="flex flex-col space-y-2">
        //                     <label htmlFor="email" className="text-lg text-gray-700">Email Address</label>
        //                     <input
        //                       type="email"
        //                       id="email"
        //                       name="email"
        //                       value={formData.email}
        //                       onChange={handleChange}
        //                       placeholder="Enter your email"
        //                       className="border-2 border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        //                       required
        //                     />
        //                   </div>

        //                   <div className="flex flex-col space-y-2">
        //                     <label htmlFor="mobile" className="text-lg text-gray-700">Mobile Number</label>
        //                     <input
        //                       type="text"
        //                       id="mobile"
        //                       name="mobile"
        //                       value={formData.mobile}
        //                       onChange={handleChange}
        //                       placeholder="Enter 10-digit mobile number"
        //                       className="border-2 border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        //                       maxLength={10}
        //                       required
        //                     />
        //                   </div>

        //                   <div className="flex flex-col space-y-2">
        //                     <label htmlFor="education" className="text-lg text-gray-700">Education</label>
        //                     <input
        //                       type="text"
        //                       id="education"
        //                       name="education"
        //                       value={formData.education}
        //                       onChange={handleChange}
        //                       placeholder="Enter your education"
        //                       className="border-2 border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        //                       required
        //                     />
        //                   </div>

        //                   <div className="flex flex-col space-y-2">
        //                     <label htmlFor="workExperience" className="text-lg text-gray-700">Work Experience</label>
        //                     <input
        //                       type="text"
        //                       id="workExperience"
        //                       name="workExperience"
        //                       value={formData.workExperience}
        //                       onChange={handleChange}
        //                       placeholder="Enter your work experience"
        //                       className="border-2 border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        //                       required
        //                     />
        //                   </div>

        //                   <div className="flex flex-col space-y-2">
        //                     <label htmlFor="company" className="text-lg text-gray-700">Current/Last Company</label>
        //                     <input
        //                       type="text"
        //                       id="company"
        //                       name="company"
        //                       value={formData.company}
        //                       onChange={handleChange}
        //                       placeholder="Enter your company name"
        //                       className="border-2 border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        //                       required
        //                     />
        //                   </div>

        //                   <div className="flex flex-col space-y-2">
        //                     <label htmlFor="noticePeriod" className="text-lg text-gray-700">Notice Period</label>
        //                     <input
        //                       type="text"
        //                       id="noticePeriod"
        //                       name="noticePeriod"
        //                       value={formData.noticePeriod}
        //                       onChange={handleChange}
        //                       placeholder="Enter your notice period"
        //                       className="border-2 border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        //                       required
        //                     />
        //                   </div>
        //                 </div>
        //               </div>

        //               <div className='w-full md:w-1/2'>
        //                 <div className="flex flex-col space-y-4">

        //                   <div className="flex flex-col space-y-2">
        //                     <label htmlFor="currentCTC" className="text-lg text-gray-700">Current CTC</label>
        //                     <input
        //                       type="text"
        //                       id="currentCTC"
        //                       name="currentCTC"
        //                       value={formData.currentCTC}
        //                       onChange={handleChange}
        //                       placeholder="Enter your current CTC"
        //                       className="border-2 border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        //                       required
        //                     />
        //                   </div>

        //                   <div className="flex flex-col space-y-2">
        //                     <label htmlFor="expectedSalary" className="text-lg text-gray-700">Expected Salary</label>
        //                     <input
        //                       type="text"
        //                       id="expectedSalary"
        //                       name="expectedSalary"
        //                       value={formData.expectedSalary}
        //                       onChange={handleChange}
        //                       placeholder="Enter your expected salary"
        //                       className="border-2 border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        //                       required
        //                     />
        //                   </div>

        //                   <div className="flex flex-col space-y-2">
        //                     <label htmlFor="resume" className="text-lg text-gray-700">Resume</label>
        //                     <input
        //                       type="file"
        //                       id="resume"
        //                       name="resume"
        //                       onChange={handleFileChange}
        //                       className="border-2 border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        //                       required
        //                     />
        //                   </div>

        //                   <div className="flex flex-col space-y-2">
        //                     <label htmlFor="mobileOTP" className="text-lg text-gray-700">Mobile OTP</label>
        //                     <input
        //                       type="text"
        //                       id="mobileOTP"
        //                       name="mobileOTP"
        //                       value={formData.mobileOTP}
        //                       onChange={handleChange}
        //                       placeholder="Enter Mobile OTP Sent!"
        //                       className="border-2 border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        //                       required
        //                     />
        //                   </div>

        //                   <div className="flex flex-col space-y-2">
        //                     <label htmlFor="emailOTP" className="text-lg text-gray-700">Email OTP</label>
        //                     <input
        //                       type="text"
        //                       id="emailOTP"
        //                       name="emailOTP"
        //                       value={formData.emailOTP}
        //                       onChange={handleChange}
        //                       placeholder="Enter Email OTP Sent!"
        //                       className="border-2 border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        //                       required
        //                     />
        //                   </div>

        //                   <div className="flex flex-col space-y-2">
        //                     <label htmlFor="message" className="text-lg text-gray-700">Message</label>
        //                     <textarea
        //                       id="message"
        //                       name="message"
        //                       value={formData.message}
        //                       onChange={handleChange}
        //                       placeholder="Enter your message"
        //                       className="border-2 border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        //                     />
        //                   </div>

        //                   <div className='pt-2'>
        //                     <button
        //                       type="submit"
        //                       className="w-full bg-blue-500 text-white py-3 transition duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        //                     >
        //                       Send Message
        //                     </button>
        //                   </div>
        //                 </div>
        //               </div>
        //             </div>

        //           </form>
        //         </div>
        //       </div>
        //       <Footer />
        //     </>
        //   );
        // }

        
        'use client';
       
        import { useState } from 'react';
        import Navbar from '../../../app/components/Navbar';
        import Footer from '../../../app/components/footer';
        import "../../../app/globals.css"
        import WhatsAppIcon from '../../../app/components/whatsappIcon';

        const jobData = {
          1: {
            title: "SMPP Engineer",
            description: "SMPP Engineer is responsible for maintaining and optimizing SMS services, troubleshooting issues, and ensuring reliable delivery of SMS traffic.",
          },
          2: {
            title: "Telesales Executive",
            description: "Telesales Executive is responsible for generating sales and leads over the phone, managing client accounts, and meeting sales targets.",
          },
          3: {
            title: "SEO & SEM Analyst",
            description: "SEO & SEM Analyst is responsible for optimizing website performance using search engine marketing and search engine optimization strategies.",
          },
        };


        export async function getStaticPaths() {
          const paths = Object.keys(jobData).map((id) => ({
            params: { id },
          }));
        
          return {
            paths,
            fallback: false, // Show 404 for non-existent paths
          };
        }


        export async function getStaticProps({ params }) {
          const { id } = params; // The dynamic `id` parameter from the URL
          const job = jobData[id]; // Fetch the job data based on the ID
        
          // If job data doesn't exist for the given ID, return a not found message
          if (!job) {
            return {
              notFound: true, // Trigger a 404 page
            };
          }
        
          return {
            props: {
              job, // Pass job data as props to the component
            },
          };
        }

        export default function JobDetails({ job }) {
         
          const [formData, setFormData] = useState({
            name: '',
            email: '',
            mobile: '',
            education: '',
            workExperience: '',
            company: '',
            noticePeriod: '',
            currentCTC: '',
            expectedSalary: '',
            resume: null,
            mobileOTP: '',
            emailOTP: '',
            message: '',
          });

          // If no job data is found for the id, show an error
          if (!job) {
            return <p>Job not found.</p>;
          }

          // State for the form inputs


          // Handle form field changes
          const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
              ...formData,
              [name]: value,
            });
          };

          // Handle file upload for the resume
          const handleFileChange = (e) => {
            setFormData({
              ...formData,
              resume: e.target.files[0],
            });
          };

          // Handle form submission (you can add your form submission logic here)
          const handleSubmit = (e) => {
            e.preventDefault();
            // Here you would send the form data to your server or API
            alert('Form submitted');
          };

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
              <div className='pl-16 pt-10  bg-white'>
                <h1 className="text-xl sm:text-5xl font-roboto  text-black">{job.title}</h1>
                <p className="mt-4 text-xl  text-gray-600">{job.description}</p>
              </div>

              {/* Job Application Form */}
              <div className='w-full'>
                <div className="p-5 bg-white">
                  <form onSubmit={handleSubmit} className="mt-10 w-full h-full mb-16 px-8 py-6 bg-white max-w-4xl mx-auto">
                    <div className='flex flex-col md:flex-row gap-5'>
                      <div className='w-full md:w-1/2 '>
                        <div className="flex flex-col space-y-4">
                          <div className="flex flex-col space-y-2">
                            <label htmlFor="name" className="text-lg text-gray-700">Enter your name</label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Enter your name"
                              className="border-2 border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                              required
                            />
                          </div>

                          <div className="flex flex-col space-y-2">
                            <label htmlFor="email" className="text-lg text-gray-700">Email Address</label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Enter your email"
                              className="border-2 border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                              required
                            />
                          </div>

                          <div className="flex flex-col space-y-2">
                            <label htmlFor="mobile" className="text-lg text-gray-700">Mobile Number</label>
                            <input
                              type="text"
                              id="mobile"
                              name="mobile"
                              value={formData.mobile}
                              onChange={handleChange}
                              placeholder="Enter 10-digit mobile number"
                              className="border-2 border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                              maxLength={10}
                              required
                            />
                          </div>

                          <div className="flex flex-col space-y-2">
                            <label htmlFor="education" className="text-lg text-gray-700">Education</label>
                            <input
                              type="text"
                              id="education"
                              name="education"
                              value={formData.education}
                              onChange={handleChange}
                              placeholder="Enter your education"
                              className="border-2 border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                              required
                            />
                          </div>

                          <div className="flex flex-col space-y-2">
                            <label htmlFor="workExperience" className="text-lg text-gray-700">Work Experience</label>
                            <input
                              type="text"
                              id="workExperience"
                              name="workExperience"
                              value={formData.workExperience}
                              onChange={handleChange}
                              placeholder="Enter your work experience"
                              className="border-2 border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                              required
                            />
                          </div>

                          <div className="flex flex-col space-y-2">
                            <label htmlFor="company" className="text-lg text-gray-700">Current/Last Company</label>
                            <input
                              type="text"
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              placeholder="Enter your company name"
                              className="border-2 border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                              required
                            />
                          </div>

                          <div className="flex flex-col space-y-2">
                            <label htmlFor="noticePeriod" className="text-lg text-gray-700">Notice Period</label>
                            <input
                              type="text"
                              id="noticePeriod"
                              name="noticePeriod"
                              value={formData.noticePeriod}
                              onChange={handleChange}
                              placeholder="Enter your notice period"
                              className="border-2 border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className='w-full md:w-1/2'>
                        <div className="flex flex-col space-y-4">

                          <div className="flex flex-col space-y-2">
                            <label htmlFor="currentCTC" className="text-lg text-gray-700">Current CTC</label>
                            <input
                              type="text"
                              id="currentCTC"
                              name="currentCTC"
                              value={formData.currentCTC}
                              onChange={handleChange}
                              placeholder="Enter your current CTC"
                              className="border-2 border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                              required
                            />
                          </div>

                          <div className="flex flex-col space-y-2">
                            <label htmlFor="expectedSalary" className="text-lg text-gray-700">Expected Salary</label>
                            <input
                              type="text"
                              id="expectedSalary"
                              name="expectedSalary"
                              value={formData.expectedSalary}
                              onChange={handleChange}
                              placeholder="Enter your expected salary"
                              className="border-2 border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                              required
                            />
                          </div>

                          <div className="flex flex-col space-y-2">
                            <label htmlFor="resume" className="text-lg text-gray-700">Resume</label>
                            <input
                              type="file"
                              id="resume"
                              name="resume"
                              onChange={handleFileChange}
                              className="border-2 border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                              required
                            />
                          </div>

                          <div className="flex flex-col space-y-2">
                            <label htmlFor="mobileOTP" className="text-lg text-gray-700">Mobile OTP</label>
                            <input
                              type="text"
                              id="mobileOTP"
                              name="mobileOTP"
                              value={formData.mobileOTP}
                              onChange={handleChange}
                              placeholder="Enter Mobile OTP Sent!"
                              className="border-2 border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                              required
                            />
                          </div>

                          <div className="flex flex-col space-y-2">
                            <label htmlFor="emailOTP" className="text-lg text-gray-700">Email OTP</label>
                            <input
                              type="text"
                              id="emailOTP"
                              name="emailOTP"
                              value={formData.emailOTP}
                              onChange={handleChange}
                              placeholder="Enter Email OTP Sent!"
                              className="border-2 border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                              required
                            />
                          </div>

                          <div className="flex flex-col space-y-2">
                            <label htmlFor="message" className="text-lg text-gray-700">Message</label>
                            <textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Enter your message"
                              className="border-2 border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                            />
                          </div>

                          <div className='pt-2'>
                            <button
                              type="submit"
                              className="w-full bg-blue-500 text-white py-3 transition duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                  </form>
                </div>
              </div>
              <Footer />
            </>
          );
        }

