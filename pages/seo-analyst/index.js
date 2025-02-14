import React, { useState } from "react";
import "../../app/globals.css"
import Navbar from '../../app/components/Navbar';
import Footer from '../../app/components/footer';
import WhatsAppIcon from '../../app/components/whatsappIcon';
import { FaBriefcase, FaTasks, FaTools, } from "react-icons/fa";
import Head from "next/head";
import LocalBusinessSchema from "../../app/components/localSchema";


const SMPPEngineerForm = () => {

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
     <LocalBusinessSchema
      name = "RAT SMS"
      description="Optimize search engine rankings and boost social media engagement."
      url="https://ratsms.com/smpp-engineer"
      city="chennai"
      address="Flat No – 17, 2nd Floor, Anandha Bhavan, Landmark, Mahatma Gandhi Rd, opp. to Hotel, Adyar, Chennai, Tamil Nadu 600041"
      latitude="13.003387° N"
      longitude=" 80.255043° E"
       pincode="600001"
      />
    <Head>
  <meta charSet="UTF-8" />
  <meta
    name="description"
    content="Looking for a dynamic SEO & SEM Analyst! Help AWF Technologies boost online visibility, optimize digital strategies, and drive impactful growth. Apply today!."
  />
  <meta
    name="keywords"
    content="SEO, SEM, Analyst, search engine optimization, search engine marketing, website optimization"
  />
  <link rel="canonical" href="https://ratsms.com/seo-analyst" />
  <meta property="og:site_name" content="RATSMS" />
  <meta property="og:url" content="https://ratsms.com/seo-analyst" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="SEO & SEM Analyst - Job Opening | RAT SMS" />
  <meta property="og:description" content="Join as an SEO & SEM Analyst to improve website performance through SEO & SEM strategies." />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#655C97" />
  <meta name="msapplication-navbutton-color" content="#655C97" />
  <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
  <title>SEO & SEM Analyst - Job Opening | RAT SMS</title>
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
    <div className=" min-h-screen bg-white p-6">
    <div className="bg-white p-8 mx-auto">
  <div className="text-center mb-8">
    {/* Updated title and description */}
    <h1 className="text-5xl font-serif font-bold text-gray-800">SEO-SMM Analyst</h1>
    <p className="text-gray-600 mt-4 text-xl leading-relaxed">
      Join our team as an SEO-SMM Analyst! Help optimize our online presence and improve social media strategies to drive engagement and boost search rankings.
    </p>
  </div>

  {/* Job Description */}
  <div className="mt-8 p-6 bg-white border border-gray-300 rounded-lg shadow-sm">
    <p className="text-3xl font-serif font-semibold text-gray-800 mb-4">
      <FaBriefcase className="mr-2 inline-block text-gray-600" /> Job Description
    </p>
    <p className="text-gray-700 text-lg leading-relaxed">
      As an SEO-SMM Analyst, you will be responsible for optimizing our website’s content and improving its search engine ranking (SEO) while developing and implementing strategies for social media marketing (SMM). You will analyze performance metrics, track social media campaigns, and ensure we stay ahead in the digital landscape.
    </p>
  </div>

  {/* Responsibilities */}
  <div className="mt-8 p-6 bg-white border border-gray-300 rounded-lg shadow-sm">
    <p className="text-2xl font-serif font-semibold text-gray-800 mb-4">
      <FaTasks className="mr-2 inline-block text-gray-600" /> Key Responsibilities
    </p>
    <ul className="list-inside text-gray-600 text-lg">
      <li>Conduct keyword research and implement on-page SEO strategies.</li>
      <li>Optimize website content, blogs, and social media posts for search engines.</li>
      <li>Monitor and analyze website traffic, search rankings, and social media metrics.</li>
      <li>Develop and execute social media marketing strategies to drive engagement.</li>
      <li>Collaborate with content teams to create SEO-friendly content.</li>
      <li>Stay up to date with SEO and SMM trends and best practices.</li>
      <li>Provide detailed reports on SEO performance and social media insights.</li>
    </ul>
  </div>

  {/* Skills & Requirements */}
  <div className="mt-8 p-6 bg-white border border-gray-300 rounded-lg shadow-sm">
    <p className="text-2xl font-serif font-semibold text-gray-800 mb-4">
      <FaTools className="mr-2 inline-block text-gray-600" /> Skills & Requirements
    </p>
    <ul className="list-inside text-gray-600 text-lg">
      <li>Proven experience in SEO and SMM strategies.</li>
      <li>Knowledge of Google Analytics, SEO tools (e.g., Ahrefs, SEMrush), and social media platforms.</li>
      <li>Strong understanding of keyword research, content optimization, and social media algorithms.</li>
      <li>Ability to analyze data and provide actionable insights.</li>
      <li>Experience with content management systems (CMS) like WordPress.</li>
      <li>Strong writing and communication skills.</li>
      <li>Ability to work independently and manage multiple projects simultaneously.</li>
    </ul>
  </div>

  {/* Call to Action */}
</div>





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
    </div>
    <Footer/>
    </>
  );
};

export default SMPPEngineerForm;
