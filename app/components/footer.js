import Link from "next/link";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
    return (
        <footer className="bg-black text-white sm:px-32 sm:py-20 pt-10"> 
            {/* Main Footer Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:px-4 md:px-4 gap-y-8 sm:gap-y-0">
                {/* Column 1 */}
                <div>
                    <ul className="sm:space-y-4 space-y-2 sm:text-center text-left pl-20 lg:text-left sm:pl-12 font-thin tracking-widest">
                        <li><Link href="/" className="text-lg font-semibold mb-4 text-center lg:text-left">Company</Link></li>
                        <li><Link href="/about-us" className="text-white font-light hover:text-[#003bff] text-base">About</Link></li>
                        <li><Link href="/bulk-sms" className="text-white font-light hover:text-[#003bff] text-base">Bulk SMS</Link></li>
                        <li><Link href="/industry" className="text-white font-light hover:text-[#003bff] text-base">Industry</Link></li>
                        <li><Link href="/" className="text-white font-light hover:text-[#003bff] text-base">Product</Link></li>
                        <li><Link href="/careers" className="text-white font-light hover:text-[#003bff] text-base">Careers</Link></li>
                    </ul>
                </div>

                {/* Column 2 */}
                <div>
                    
                    <ul className="sm:space-y-4 space-y-2 sm:text-center text-left pl-20 lg:text-left sm:pl-12 font-thin tracking-widest">
                    <h2 className="text-lg font-roboto font-semibold mb-4 sm:text-center  text-left lg:text-left">Services</h2>
                        <li><Link href="/smartsms-send-bulk-sms-attachments" className="font-light hover:text-[#003bff]">Smart SMS</Link></li>
                        <li><Link href="/bulk-sms-service-implicit" className="font-light hover:text-[#003bff]">Service Implicit</Link></li>
                        <li><Link href="/bulk-sms-service-explicit" className="hover:text-[#003bff] font-light">Service Explicit</Link></li>
                        <li><Link href="/whatsapp-business-api" className="hover:text-[#003bff] font-light">WhatsApp Business API</Link></li>
                        <li><Link href="/transactional-bulk-sms-chennai" className="hover:text-[#003bff] font-light">Transactional SMS</Link></li>
                        <li><Link href="/promotional-bulk-sms-chennai" className="hover:text-[#003bff] font-light">Promotional SMS</Link></li>
                        <li><Link href="/otp-bulk-sms-chennai" className="hover:text-[#003bff] font-light">OTP SMS</Link></li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div>
                  
                    <ul className="sm:space-y-4 space-y-2 sm:text-center text-left pl-20 lg:text-left sm:pl-12 font-thin tracking-widest">
                    <h2 className="text-lg font-roboto font-semibold mb-4 sm:text-center  text-left lg:text-left">Others</h2>
                        <li><Link href="/bulk-sms-pricing-india" className="hover:text-[#003bff] font-light">Pricing</Link></li>
                        <li><Link href="/bulk-sms-gateway-aggregator" className="hover:text-[#003bff] font-light">Bulk SMS Gateway Aggregator</Link></li>
                        <li><Link href="/smpp-gateway-provider" className="hover:text-[#003bff] font-light">SMPP Gateway Provider</Link></li>
                        <li><Link href="/developer-api" className="hover:text-[#003bff] font-light">Developer API</Link></li>
                        <li><Link href="/terms-and-conditions" className="hover:text-[#003bff] font-light">Terms and Conditions</Link></li>
                        <li><Link href="/refund-policy" className="hover:text-[#003bff] font-light">Refund Policies</Link></li>
                        <li><Link href="/privacy-policy" className="hover:text-[#003bff] font-light">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div>
                   
                    <ul className="sm:space-y-4 space-y-2 sm:text-center text-left pl-20 lg:text-left sm:pl-12 font-thin tracking-widest">
                    <h2 className="text-lg font-roboto font-semibold mb-4 sm:text-center  text-left lg:text-left">Connect</h2>
                        <li>General Enquiry: <span className="font-bold text-white">044-472 10 462</span></li>
                        <li>Sales Enquiry: <span className="font-bold text-white">75067 12345</span></li>
                        <li>Sales Email: <span className="font-bold text-white">sales@ratsms.com</span></li>
                        <li>Support Email: <span className="font-bold text-white">support@ratsms.com</span></li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 pt-6 px-4 md:px-8">
                <div className="text-center md:text-left font-light text-base">
                    <p className="sm:text-base text-sm ">RATSMS © 2025 All Rights Reserved</p>
                </div>
                <div className="text-center">
                    <p>
                        <Link href="/privacy-policy" className="hover:text-[#003bff] font-light text-sm tracking-widest">Privacy Policy</Link> | <Link href="/terms-and-conditions" className="tracking-widest hover:text-[#003bff] font-light text-sm">Terms & Conditions</Link>
                    </p>
                </div>
                <div className="flex justify-center md:justify-end space-x-6">
                    <Link href="https://www.linkedin.com/company/ratsmschennai/" className="sm:text-xl text-base hover:text-blue-500 font-roboto"><i className="fab fa-linkedin"></i></Link>
                    <Link href="https://www.youtube.com/@ratsms" className="sm:text-xl text-base hover:text-red-900 font-roboto"><i className="fab fa-youtube"></i></Link>
                    <Link href="https://www.facebook.com/ratsmschennai" className="sm:text-xl text-base hover:text-[#003bff] font-roboto"><i className="fab fa-facebook"></i></Link>
                    <Link href="https://www.instagram.com/ratsms_com/" className="sm:text-xl text-base hover:text-pink-500 font-roboto"><i className="fab fa-instagram"></i></Link>
                </div>
            </div>
        </footer>
    );
}
