
        
        'use client';
       
        import { useState } from 'react';
        import Navbar from '../../../app/components/Navbar';
        import Footer from '../../../app/components/footer';
        import "../../../app/globals.css"
        import WhatsAppIcon from '../../../app/components/whatsappIcon';
        import Head from 'next/head';

        const jobData = {
          1: {
            title: "SMPP Engineer - Join AWF Technologies to Lead SMS Protocols",
            description: "SMPP Engineer is responsible for maintaining and optimizing SMS services, troubleshooting issues, and ensuring reliable delivery of SMS traffic.",
            metadata: {
              description:"Exciting opportunity at AWF Technologies! We're seeking an SMPP Engineer to optimize SMS systems and drive innovation. Be part of a forward-thinking team!",
              keywords: "SMPP Engineer, SMS services, troubleshooting, delivery optimization, SMPP Gateway",
              title: "SMPP Engineer - Job Opening | RAT SMS",
              ogImage: "https://yourwebsite.com/images/smpp-engineer.png",
              canonicalUrl: "https://ratsms.com/jobs/1",
              ogDescription: "Join as an SMPP Engineer and ensure the reliable delivery of SMS traffic with high-quality service.",
            }
          },
          2: {
            title: "Telesales Executive - Join AWF Techonologies for Customer Support ",
            description: "Telesales Executive is responsible for generating sales and leads over the phone, managing client accounts, and meeting sales targets.",
            metadata: {
              description: "We are looking for Telesales Executives at Awf Technologies Pvt Ltd. Help us grow sales, deliver excellent customer support, and enhance our Bulk SMS services. Join us now!",
              keywords: "Telesales Executive, sales, lead generation, client management, sales targets",
              title: "Telesales Executive - Job Opening | RAT SMS",
              ogImage: "https://yourwebsite.com/images/telesales-executive.png",
              canonicalUrl: "https://ratsms.com/jobs/2",
              ogDescription: "Join as a Telesales Executive and help generate leads and meet sales targets.",
            }
          },
          3: {
            title: "SEO & SMM Analyst - Join AWF Technologies for Digital Success",
            description: "Explore exciting career opportunities at RAT SMS! We're hiring an SEO & SMM Analyst, SMPP Engineer, and Telesales Executive. Apply now and be part of our growing team!.",
            metadata: {
              description: "Looking for a dynamic SEO & SEM Analyst! Help AWF Technologies boost online visibility, optimize digital strategies, and drive impactful growth. Apply today!.",
              keywords: "SEO, SEM, Analyst, search engine optimization, search engine marketing, website optimization",
              title: "SEO & SEM Analyst - Job Opening | RAT SMS",
              ogImage: "https://yourwebsite.com/images/seo-sem-analyst.png",
              canonicalUrl: "https://ratsms.com/jobs/3",
              ogDescription: "Join as an SEO & SEM Analyst to improve website performance through SEO & SEM strategies.",
            }
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
        <Head>
        <title>{job.metadata.title}</title>
        <meta name="description" content={job.metadata.description} />
        <meta name="keywords" content={job.metadata.keywords} />
        <meta property="og:title" content={job.metadata.title} />
        <meta property="og:description" content={job.metadata.ogDescription} />
        <meta property="og:image" content={job.metadata.ogImage} />
        <meta property="og:url" content={job.metadata.canonicalUrl} />
        <meta name="twitter:title" content={job.metadata.title} />
        <meta name="twitter:description" content={job.metadata.ogDescription} />
        <meta name="twitter:image" content={job.metadata.ogImage} />
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

