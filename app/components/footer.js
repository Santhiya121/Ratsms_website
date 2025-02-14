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
                        <li>
                            <Link href="/" aria-label="Go to company homepage" className="text-lg font-semibold mb-4 text-center lg:text-left">
                                Company
                            </Link>
                        </li>
                        <li>
                            <Link href="/about-us" aria-label="Learn more about us" className="text-white font-light hover:text-[#003bff] text-base">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/bulk-sms" aria-label="Learn about bulk SMS services" className="text-white font-light hover:text-[#003bff] text-base">
                                Bulk SMS
                            </Link>
                        </li>
                        <li>
                            <Link href="/industry" aria-label="Learn about the industries we serve" className="text-white font-light hover:text-[#003bff] text-base">
                                Industry
                            </Link>
                        </li>
                        <li>
                            <Link href="/" aria-label="View our product offerings" className="text-white font-light hover:text-[#003bff] text-base">
                                Product
                            </Link>
                        </li>
                        <li>
                            <Link href="/careers" aria-label="Explore careers with us" className="text-white font-light hover:text-[#003bff] text-base">
                                Careers
                            </Link>
                        </li>
                    </ul>

                </div>

                {/* Column 2 */}
                <div>

                    <ul className="sm:space-y-4 space-y-2 sm:text-center text-left pl-20 lg:text-left sm:pl-12 font-thin tracking-widest">
                        <li className="text-lg font-roboto font-semibold mb-4 sm:text-center text-left lg:text-left">Services</li>
                        <li>
                            <Link href="/smartsms-send-bulk-sms-attachments" aria-label="Learn more about Smart SMS service" className="font-light hover:text-[#003bff]">
                                Smart SMS
                            </Link>
                        </li>
                        <li>
                            <Link href="/bulk-sms-service-implicit" aria-label="Learn more about Service Implicit" className="font-light hover:text-[#003bff]">
                                Service Implicit
                            </Link>
                        </li>
                        <li>
                            <Link href="/bulk-sms-service-explicit" aria-label="Learn more about Service Explicit" className="hover:text-[#003bff] font-light">
                                Service Explicit
                            </Link>
                        </li>
                        <li>
                            <Link href="/whatsapp-business-api" aria-label="Learn more about WhatsApp Business API" className="hover:text-[#003bff] font-light">
                                WhatsApp Business API
                            </Link>
                        </li>
                        <li>
                            <Link href="/transactional-bulk-sms-chennai" aria-label="Learn more about Transactional SMS" className="hover:text-[#003bff] font-light">
                                Transactional SMS
                            </Link>
                        </li>
                        <li>
                            <Link href="/promotional-bulk-sms-chennai" aria-label="Learn more about Promotional SMS" className="hover:text-[#003bff] font-light">
                                Promotional SMS
                            </Link>
                        </li>
                        <li>
                            <Link href="/otp-bulk-sms-chennai" aria-label="Learn more about OTP SMS" className="hover:text-[#003bff] font-light">
                                OTP SMS
                            </Link>
                        </li>
                    </ul>

                </div>

                {/* Column 3 */}
                <div>

                    <ul className="sm:space-y-4 space-y-2 sm:text-center text-left pl-20 lg:text-left sm:pl-12 font-thin tracking-widest">
                        <li className="text-lg font-roboto font-semibold mb-4 sm:text-center text-left lg:text-left">Others</li>
                        <li>
                            <Link href="/bulk-sms-pricing-india" aria-label="Learn more about bulk SMS pricing in India" className="hover:text-[#003bff] font-light">
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link href="/bulk-sms-gateway-aggregator" aria-label="Learn about Bulk SMS Gateway Aggregator" className="hover:text-[#003bff] font-light">
                                Bulk SMS Gateway Aggregator
                            </Link>
                        </li>
                        <li>
                            <Link href="/smpp-gateway-provider" aria-label="Learn about SMPP Gateway Provider" className="hover:text-[#003bff] font-light">
                                SMPP Gateway Provider
                            </Link>
                        </li>
                        <li>
                            <Link href="/developer-api" aria-label="Learn more about Developer API" className="hover:text-[#003bff] font-light">
                                Developer API
                            </Link>
                        </li>
                        <li>
                            <Link href="/terms-and-conditions" aria-label="Read the terms and conditions" className="hover:text-[#003bff] font-light">
                                Terms and Conditions
                            </Link>
                        </li>
                        <li>
                            <Link href="/refund-policy" aria-label="Learn about our refund policy" className="hover:text-[#003bff] font-light">
                                Refund Policies
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy-policy" aria-label="Read our privacy policy" className="hover:text-[#003bff] font-light">
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>

                </div>

                {/* Column 4 */}
                <div>

                    <ul className="sm:space-y-4 space-y-2 sm:text-center text-left pl-20 lg:text-left sm:pl-12 font-thin tracking-widest">
                        <li className="text-lg font-roboto font-semibold mb-4 sm:text-center text-left lg:text-left">Connect</li>

                        <li>
                            General Enquiry: <br></br>
                            <Link href="tel:+914447210462" className="font-bold text-white" aria-label="Call General Enquiry">044-472 10 462</Link>
                        </li>

                        <li>
                            Sales Enquiry:
                            <Link href="tel:+917506712345" className="font-bold text-white" aria-label="Call Sales Enquiry">75067 12345</Link>
                        </li>

                        <li>
                            Sales Email:
                            <Link href="mailto:sales@ratsms.com" className="font-bold text-white" aria-label="Send email to Sales">sales@ratsms.com</Link>
                        </li>

                        <li>
                            Support Email:
                            <Link href="mailto:support@ratsms.com" className="font-bold text-white" aria-label="Send email to Support">support@ratsms.com</Link>
                        </li>
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
                    <Link href="https://www.linkedin.com/company/ratsmschennai/" aria-label="Visit our LinkedIn profile" className="sm:text-xl text-base hover:text-blue-500 font-roboto">
                        <i className="fab fa-linkedin"></i>
                    </Link>

                    <Link href="https://www.youtube.com/@ratsms" aria-label="Visit our YouTube channel" className="sm:text-xl text-base hover:text-red-900 font-roboto">
                        <i className="fab fa-youtube"></i>
                    </Link>

                    <Link href="https://www.facebook.com/ratsmschennai" aria-label="Visit our Facebook page" className="sm:text-xl text-base hover:text-[#003bff] font-roboto">
                        <i className="fab fa-facebook"></i>
                    </Link>

                    <Link href="https://www.instagram.com/ratsms_com/" aria-label="Visit our Instagram profile" className="sm:text-xl text-base hover:text-pink-500 font-roboto">
                        <i className="fab fa-instagram"></i>
                    </Link>
                </div>


            </div>
        </footer>
    );
}
