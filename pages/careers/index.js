import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSatelliteDish, faPhone, faSearch } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../app/components/Navbar'; // Ensure the correct import path
import Footer from '../../app/components/footer'; // Ensure the correct import path
import "../../app/globals.css"; // Ensure the correct import path
import { motion } from "framer-motion";
import Head from 'next/head';
import WhatsAppIcon from '../../app/components/whatsappIcon';
import Phone from '../../app/components/phone';
import Image from 'next/image';

export default function Careers() {
  // Array of job data with ID to link to specific job details page
  const jobData = [
    {
      icon: <FontAwesomeIcon icon={faSatelliteDish} className="text-black text-3xl" />,
      title: "SMPP Engineer",
      description: "SMPP Engineer is responsible for maintaining and optimizing SMS services, troubleshooting issues, and ensuring reliable delivery of SMS traffic.",
      link: "/smpp-engineer",
    },
    {
      icon: <FontAwesomeIcon icon={faPhone} className="text-black text-3xl" />,
      title: "Telesales Executive",
      description: "Telesales Executive is responsible for generating sales and leads over the phone, managing client accounts, and meeting sales targets.",
      link: "/telesales-executive",
    },
    {
      icon: <FontAwesomeIcon icon={faSearch} className="text-black text-3xl" />,
      title: "SEO & SEM Analyst",
      description: "SEO & SEM Analyst is responsible for optimizing website performance using search engine marketing and search engine optimization strategies.",
      link: "/seo-analyst", // Fix link here
    },
  ];

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Explore exciting career opportunities at RAT SMS! We're hiring an SEO & SMM Analyst, 
          SMPP Engineer, and Telesales Executive. Apply now and be part of our growing team!"
        />
        <meta
          name="keyword"
          content="bulk sms aggregator company, aggregator connectivity, bulk sms aggregator, sms aggregator, dlt registration, bulk sms service, sms gateway, bulk sms provider, otp sms, sms api, bulk sms services in india, bulk sms gateway, bulk sms india, bulk sms api, bulk sms provider in india, free sms api india, bulk sms reseller"
        />
        <link rel="canonical" href="https://ratsms.com/careers" />
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
        <title>AWF Technologies Careers - Join Our Team for Exciting Roles</title>
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

      <WhatsAppIcon />
      <Phone />

      <div className="bg-white">
        <div className="bg-white text-black flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-10">
          {/* Left Side: Heading */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-2 text-center md:text-left"
          >
            <h1 className="text-2xl sm:text-5xl font-roboto px-4 md:px-16">Career</h1>
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
  {/* Join Our Community Section */}
  <div className="bg-gray-50">
      {/* Hero Banner */}
      <div className="relative h-96">
        <Image
          src="/images/career1.jpg"  // Replace with your hero image path
          alt="Career Banner"
          layout="fill"
          objectFit="cover"
          className=" "
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center px-4">
            Join Our Creative Community
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section 1: Join Our Community */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="/images/career3.jpg"  // Replace with a relevant image
              alt="Community"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl grayscale"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-black">
              Join Our Community
            </h2>
            <p className="mt-4 text-black text-lg leading-relaxed">
              Be part of a movement where creative minds and innovative ideas come together.
              At Rat SMS, you’ll find an environment that nurtures your passion and supports
              your journey to success. Work freely, think boldly, and help shape the future
              of messaging technology.
            </p>
          </div>
        </div>

        {/* Section 2: Our Culture and Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-3xl font-bold text-black">Our Culture and Values</h3>
            <p className="mt-4 text-black text-lg leading-relaxed">
              At Rat SMS, our people are our greatest asset. We foster a culture of respect,
              innovation, and continuous learning. Creativity flows freely here—every voice is
              heard and every idea is valued.
            </p>
            <p className="mt-4 text-black text-lg leading-relaxed">
              Integrity, transparency, and excellence are at the core of our values. Whether
              you’re an industry veteran or just starting your career, we empower you to grow,
              collaborate, and thrive.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/images/career5.jpg"  // Replace with a relevant image
              alt="Culture and Values"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl grayscale"
            />
          </div>
        </div>

        {/* Section 3: Career Opportunities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="/images/career6.jpg"  // Replace with a relevant image
              alt="Career Opportunities"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl grayscale"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-black">Career Opportunities</h3>
            <p className="mt-4 text-black text-lg leading-relaxed">
              Rat SMS is on the constant lookout for talented, creative individuals. Our roles span
              across software development, digital marketing, product design, customer support, and
              business development. We provide a platform for your ideas to flourish and your career to
              soar.
            </p>
            <p className="mt-4 text-black text-lg leading-relaxed">
              Our recruitment process values not only technical skills but also the innovative spirit
              that drives our success. If you’re ready for a challenge, we have a place for you.
            </p>
          </div>
        </div>
        <div className="pt-10 pl-8 pb-16 bg-gray-100 flex justify-center">
  <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
    {jobData.map((job, index) => (
      <div
        key={index}
        className="relative bg-gray-200 w-full sm:w-96 mx-auto text-center space-y-6 rounded-2xl shadow-lg p-8 border border-gray-300 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
      >
        {/* Neumorphism Effect */}
        <div className="absolute inset-0 bg-white rounded-2xl shadow-inner"></div>

        {/* Icon and Title Section */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-300 shadow-md">
            <p className="text-3xl text-gray-800">{job.icon}</p>
          </div>
          <h4 className="text-2xl font-semibold text-gray-900 mt-4">{job.title}</h4>
          <p className="text-gray-600 mt-2 leading-relaxed">{job.description}</p>
        </div>

        {/* Button Section */}
        <div className="relative z-10">
          <Link href={job.link}>
            <button className="w-full py-3 rounded-lg bg-gray-900 text-white font-medium text-lg transition-all duration-300 ease-in-out hover:bg-gray-700 shadow-md hover:shadow-xl">
              Explore More
            </button>
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>








        {/* Section 4: Employee Benefits and Perks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-3xl font-bold text-black">Employee Benefits and Perks</h3>
            <p className="mt-4 text-black text-lg leading-relaxed">
              A happy, healthy workforce is the cornerstone of success. Enjoy competitive salaries,
              comprehensive health benefits, generous paid time off, and flexible working hours.
              We also offer remote work options and continuous professional development opportunities.
            </p>
            <p className="mt-4 text-black text-lg leading-relaxed">
              Our team-building activities, wellness programs, and social events create a vibrant
              atmosphere where every employee feels valued and empowered.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/images/career7.jpg"  // Replace with a relevant image
              alt="Employee Benefits"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl grayscale"
            />
          </div>
        </div>

        {/* Section 5: Career Growth and Professional Development */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="/images/career8.jpg"  // Replace with a relevant image
              alt="Career Growth"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl grayscale"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-black">Career Growth &amp; Development</h3>
            <p className="mt-4 text-black text-lg leading-relaxed">
              We believe in continuous learning. Take advantage of in-house training sessions,
              conferences, certification programs, and mentorship opportunities. Our structured
              performance reviews help set clear goals so that your career trajectory is as bright
              as your ambitions.
            </p>
          </div>
        </div>

        {/* Section 6: Diversity, Inclusion, and Community Engagement */}
      

     


        {/* Section 9: The Application Process */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-2xl ">
          <h3 className="text-3xl font-bold text-black">The Application Process</h3>
          <p className="mt-4 text-black text-lg leading-relaxed">
            Our process is simple and transparent. Browse our career openings, select a role that matches your skills,
            and submit your resume along with a cover letter. Our recruitment team carefully reviews each application
            and will reach out if there’s a match.
          </p>
          <p className="mt-4 text-black text-lg leading-relaxed">
            We value every applicant and provide constructive feedback at every stage, ensuring a positive experience for all.
          </p>
        </div>

     

        {/* Section 11: Commitment to Innovation */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-2xl ">
          <h3 className="text-3xl font-bold text-black">Commitment to Innovation</h3>
          <p className="mt-4 text-black text-lg leading-relaxed">
            Innovation is at the heart of Rat SMS. We encourage creative thinking and invest in cutting-edge technology
            to stay ahead. Every idea is welcomed, and every challenge is viewed as an opportunity to innovate.
          </p>
        </div>

        {/* Section 12: Final Invitation to Join Us */}
        <div className="bg-black p-8 rounded-lg shadow-2xl">
          <h3 className="text-3xl font-bold text-white">Final Invitation to Join Us</h3>
          <p className="mt-4 text-white text-lg leading-relaxed">
            We invite you to be part of the Rat SMS family—a community where your creativity, passion, and innovation
            can truly shine. Explore our job openings, learn about our culture, and take the first step toward an inspiring
            career.
          </p>
          <p className="mt-4 text-white text-lg leading-relaxed">
            Your future starts now. Embrace the challenge, unlock your potential, and help redefine the future of communication.
          </p>
          <button className="mt-6 inline-flex items-center px-6 py-3 bg-white text-black rounded-full shadow-lg hover:bg-black hover:text-white transition duration-300">
            Apply Now
            <i className="fas fa-arrow-right ml-3"></i>
          </button>
        </div>

        {/* Section 13: Additional Resources and FAQs */}
        <div className="bg-white p-8 rounded-lg shadow-2xl ">
          <h3 className="text-3xl font-bold text-black">Additional Resources and FAQs</h3>
          <p className="mt-4 text-black text-lg leading-relaxed">
            Have questions about our culture, career paths, or the application process? Here are some FAQs to help you:
          </p>
          <p className="mt-4 text-black text-lg leading-relaxed">
            <strong>Q: What sets Rat SMS apart?</strong><br />
            A: Our unwavering commitment to innovation, an inclusive culture, and a focus on continuous growth.
          </p>
          <p className="mt-4 text-black text-lg leading-relaxed">
            <strong>Q: How do I apply?</strong><br />
            A: Visit our careers page, review the job openings, and submit your resume with a cover letter.
          </p>
          <p className="mt-4 text-black text-lg leading-relaxed">
            <strong>Q: What professional development opportunities do you offer?</strong><br />
            A: We offer in-house training, mentorship, workshops, and access to conferences for continuous learning.
          </p>
          <p className="mt-4 text-black text-lg leading-relaxed">
            For more details, please reach out to our HR team or visit our website for articles and videos about life at Rat SMS.
          </p>
        </div>

        {/* Section 14: Final Words and Call to Action */}
        <div className="bg-black p-8 rounded-lg shadow-2xl">
          <h3 className="text-3xl font-bold text-white">Take the Next Step</h3>
          <p className="mt-4 text-white text-lg leading-relaxed">
            Your future awaits at Rat SMS. If you re ready to elevate your career and be part of a community that thrives on
            innovation, creativity, and collaboration, we encourage you to apply today.
          </p>
          <p className="mt-4 text-white text-lg leading-relaxed">
            Discover a world of opportunities and join us in shaping the future of communication.
          </p>
          <p className="mt-4 text-white text-lg leading-relaxed">
            We look forward to welcoming you into our vibrant family.
          </p>
          <button className="mt-6 inline-flex items-center px-6 py-3 bg-white text-black rounded-full shadow-lg hover:bg-black hover:text-white transition duration-300">
            Apply Now
            <i className="fas fa-arrow-right ml-3"></i>
          </button>
        </div>
      </div>

      {/* Job Roles Section */}
    
    </div>


  {/* Job Roles Section */}
 
</div>

      </div>

      <Footer />
    </>
  );
}
