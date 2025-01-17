// import Link from "next/link";
// import '@fortawesome/fontawesome-free/css/all.min.css';

// export default function Footer() {
//     return (
//       <footer className="bg-black text-white py-10">
//         {/* Main Footer Grid */}
//         <div className="grid grid-cols-4 gap-8 px-8">
//           <div>
//             <img src="/images/ratsms.png" alt="Company Logo" className=" w-32 pb-6" />
//             <ul className="pl-10  top-0  gap-5">
//               <li><a href="/company" className="text-white p-2">Company</a></li>
//               <li><a href="/about" className="text-white  p-2">About</a></li>
//               <li><a href="/services" className="text-white    p-2">Services</a></li>
//               <li><a href="/industries" className="text-white  p-2">Industries</a></li>
//               <li><a href="/works" className="text-white  p-2">Works</a></li>
//               <li><Link href="/careers" className="text-white  p-2">Careers</Link></li>
//             </ul>
//           </div>
  
//           {/* Column 2: Services */}
//           <div>
//             <h2 className="text-lg font-semibold mb-4">Services</h2>
//             <ul className="space-y-2">
//               <li><a href="/services/google-verified-sms" className="text-white hover:text-blue-400">Google Verified SMS</a></li>
//               <li><a href="/services/rcs-business-messaging" className="text-white hover:text-blue-400">RCS Business Messaging</a></li>
//               <li><a href="/services/whatsapp-business-api" className="text-white hover:text-blue-400">WhatsApp Business API</a></li>
//               <li><a href="/services/transactional-sms" className="text-white hover:text-blue-400">Transactional SMS</a></li>
//               <li><a href="/services/promotional-sms" className="text-white hover:text-blue-400">Promotional SMS</a></li>
//               <li><a href="/services/otp-sms" className="text-white hover:text-blue-400">OTP SMS</a></li>
//               <li><a href="/services/service-implicit" className="text-white hover:text-blue-400">Service Implicit</a></li>
//               <li><a href="/services/service-explicit" className="text-white hover:text-blue-400">Service Explicit</a></li>
//               <li><a href="/services/smart-sms" className="text-white hover:text-blue-400">Smart SMS</a></li>
//             </ul>
//           </div>
  
//           {/* Column 3: Others */}
//           <div>
//             <h2 className="text-lg font-semibold mb-4">Others</h2>
//             <ul className="space-y-2">
//               <li><Link href="/home" className="text-white hover:text-blue-400">Home</Link></li>
//               <li><a href="/white-label-reseller-program" className="text-white hover:text-blue-400">White Label Reseller Program</a></li>
//               <li><Link href="/bulk-sms-gateway-aggregator" className="text-white hover:text-blue-400">Bulk SMS Gateway Aggregator</Link></li>
//               <li><Link href="/developer-api" className="text-white hover:text-blue-400">Developer API</Link></li>
//               <li><a href="/smpp" className="text-white hover:text-blue-400">SMPP</a></li>
//               <li><a href="/pricing" className="text-white hover:text-blue-400">Pricing</a></li>
//               <li><a href="/contact-us" className="text-white hover:text-blue-400">Contact us</a></li>
//             </ul>
//           </div>
  
//           {/* Column 4: Connect */}
//           <div>
//             <h2 className="text-lg font-semibold mb-4">Connect</h2>
//             <ul className="space-y-2">
//               <li>General Enquiry: <span className="text-blue-400">+ 044 – 472 10 462</span></li>
//               <li>Sales Enquiry: <span className="text-blue-400">+91 – 75067 12345</span></li>
//               <li>Email:</li>
//               <li>For sales: <span className="text-blue-400">sales@ratsms.com</span></li>
//               <li>For support: <span className="text-blue-400">support@ratsms.com</span></li>
//             </ul>
//           </div>
//         </div>
  
//         {/* Footer Bottom Grid */}
//         <div className="grid grid-cols-3 gap-4 mt-10 border-t border-gray-700 pt-6 px-8">
//           {/* Column 1: Company Rights */}
//           <div>
//             <p>RATSMS © 2025 All Rights Reserved</p>
//           </div>
  
//           {/* Column 2: Privacy Policy */}
//           <div className="text-center">
//             <p><Link href="/privacy-policy" className="text-white hover:text-blue-400">Privacy Policy</Link> | <a href="/terms-conditions" className="text-white hover:text-blue-400">Terms & Conditions</a></p>
//           </div>
  
//           {/* Column 3: Social Media */}
//           <div className="flex justify-center space-x-11">
//             <a href="#" className="text-white text-2xl hover:text-blue-500">
//               <i className="fab fa-linkedin"></i> {/* LinkedIn */}
//             </a>
//             <a href="#" className="text-white text-2xl hover:text-red-900">
//               <i className="fab fa-youtube"></i> {/* YouTube */}
//             </a>
//             <a href="#" className="text-white text-2xl hover:text-blue-400">
//               <i className="fab fa-facebook"></i> {/* Facebook */}
//             </a>
//             <a href="#" className="text-white text-2xl hover:text-pink-500">
//               <i className="fab fa-instagram"></i> {/* Instagram */}
//             </a>
//           </div>
//         </div>
//       </footer>
//     );
//   }
  

import Link from "next/link";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-10">
            {/* Main Footer Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8">
                {/* Column 1 */}
                <div>
                    <img src="/images/ratsms.png" alt="Company Logo" className="w-32 pb-6 mx-auto lg:mx-0" />
                    <ul className="space-y-2 text-center lg:text-left">
                        <li><Link href="/company" className="text-white">Company</Link></li>
                        <li><Link href="/about" className="text-white">About</Link></li>
                        <li><Link href="/services" className="text-white">Services</Link></li>
                        <li><Link href="/industries" className="text-white">Industries</Link></li>
                        <li><Link href="/works" className="text-white">Works</Link></li>
                        <li><Link href="/careers" className="text-white">Careers</Link></li>
                    </ul>
                </div>

                {/* Column 2 */}
                <div>
                    <h2 className="text-lg font-semibold mb-4 text-center lg:text-left">Services</h2>
                    <ul className="space-y-2 text-center lg:text-left">
                        <li><Link href="/services/google-verified-sms" className="hover:text-blue-400">Google Verified SMS</Link></li>
                        <li><Link href="/services/rcs-business-messaging" className="hover:text-blue-400">RCS Business Messaging</Link></li>
                        <li><Link href="/services/whatsapp-business-api" className="hover:text-blue-400">WhatsApp Business API</Link></li>
                        <li><Link href="/services/transactional-sms" className="hover:text-blue-400">Transactional SMS</Link></li>
                        <li><Link href="/services/promotional-sms" className="hover:text-blue-400">Promotional SMS</Link></li>
                        <li><Link href="/services/otp-sms" className="hover:text-blue-400">OTP SMS</Link></li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div>
                    <h2 className="text-lg font-semibold mb-4 text-center lg:text-left">Others</h2>
                    <ul className="space-y-2 text-center lg:text-left">
                        <li><Link href="/home" className="hover:text-blue-400">Home</Link></li>
                        <li><Link href="/white-label-reseller-program" className="hover:text-blue-400">White Label Reseller Program</Link></li>
                        <li><Link href="/bulk-sms-gateway-aggregator" className="hover:text-blue-400">Bulk SMS Gateway Aggregator</Link></li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div>
                    <h2 className="text-lg font-semibold mb-4 text-center lg:text-left">Connect</h2>
                    <ul className="space-y-2 text-center lg:text-left">
                        <li>General Enquiry: <span className="text-blue-400">+ 044 – 472 10 462</span></li>
                        <li>Sales Enquiry: <span className="text-blue-400">+91 – 75067 12345</span></li>
                        <li>Email: <span className="text-blue-400">sales@ratsms.com</span></li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 border-t border-gray-700 pt-6 px-4 md:px-8">
                <div className="text-center md:text-left">
                    <p>RATSMS © 2025 All Rights Reserved</p>
                </div>
                <div className="text-center">
                    <p>
                        <Link href="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link> | <Link href="/terms-conditions" className="hover:text-blue-400">Terms & Conditions</Link>
                    </p>
                </div>
                <div className="flex justify-center md:justify-end space-x-6">
                    <Link href="#" className="text-2xl hover:text-blue-500"><i className="fab fa-linkedin"></i></Link>
                    <Link href="#" className="text-2xl hover:text-red-900"><i className="fab fa-youtube"></i></Link>
                    <Link href="#" className="text-2xl hover:text-blue-400"><i className="fab fa-facebook"></i></Link>
                    <Link href="#" className="text-2xl hover:text-pink-500"><i className="fab fa-instagram"></i></Link>
                </div>
            </div>
        </footer>
    );
}
