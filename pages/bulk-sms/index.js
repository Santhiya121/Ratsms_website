import Link from 'next/link';  // Make sure to import Link from Next.js
import Footer from '../../app/components/footer';
import Navbar from '../../app/components/Navbar';
import '../../app/globals.css';

export default function BulkSMS() {
    // Define the video sources and links for each city
    const cityVideos = {
        "Ahmedabad": { videoSrc: "/videos/RAT.mp4", link: "/bulk-sms/ahmedabad" },
        "Alappuzha": { videoSrc: "/videos/ap.mp4", link: "/bulk-sms/alappuzha" },
        "Amaravati": { videoSrc: "/videos/ap.mp4", link: "/bulk-sms/amaravati" },
        "Bangalore": { videoSrc: "/videos/ap.mp4", link: "/bulk-sms/bangalore" },
        "Banjara-Hills": { videoSrc: "/videos/ap.mp4", link: "/bulk-sms/banjara-hills" },
        "Chennai": { videoSrc: "/videos/ap.mp4", link: "/bulk-sms/chennai" },
        "Coimbatore": { videoSrc: "/videos/ap.mp4", link: "/bulk-sms/coimbatore" },
        "Delhi": { videoSrc: "/videos/ap.mp4", link: "/bulk-sms/delhi" },
        "Ernakulam": { videoSrc: "/videos/ap.mp4", link: "/bulk-sms/delhi" },
        "Gujarat": { videoSrc: "/videos/ap.mp4", link: "/bulk-sms/delhi" },
        "Guwahati": { videoSrc: "/videos/ap.mp4", link: "/bulk-sms/delhi" },
        "Hitec-City": { videoSrc: "/videos/ap.mp4", link: "/bulk-sms/delhi" },
        "Hyderabad": { videoSrc: "/videos/ap.mp4", link: "/bulk-sms/delhi" },
        "Indore": { videoSrc: "/videos/ap.mp4", link: "/bulk-sms/delhi" },
        "Jaipur": { videoSrc: "/videos/ap.mp4", link: "/bulk-sms/delhi" },
        "Jubilee-Hills": { videoSrc: "/videos/ap.mp4", link: "/bulk-sms/delhi" },
        "Kochi": { videoSrc: "/videos/ap.mp4", link: "/bulk-sms/delhi" },
        "Kolkata": { videoSrc: "/videos/ap.mp4", link: "/bulk-sms/delhi" },
        "Kollam": { videoSrc: "/videos/ap.mp4", link: "/bulk-sms/delhi" },
        "Kottayam": { videoSrc: "/videos/ap.mp4", link: "/bulk-sms/delhi" },
        "Kozhikode": { videoSrc: "/videos/ap.mp4", link: "/bulk-sms/delhi" },
        "Kurnool": { videoSrc: "/videos/ap.mp4", link: "/bulk-sms/delhi" },
        "Lucknow": { videoSrc: "/videos/ap.mp4", link: "/bulk-sms/delhi" },
        "Madurai": { videoSrc: "/videos/ap.mp4", link: "/bulk-sms/delhi" },
        "Mumbai": { videoSrc: "/videos/ap.mp4", link: "/bulk-sms/delhi" },
        "Nagpur": { videoSrc: "/videos/ap.mp4", link: "/bulk-sms/delhi" },
        "Noida": { videoSrc: "/videos/ap.mp4", link: "/bulk-sms/delhi" },
        "Patna": { videoSrc: "/videos/ap.mp4", link: "/bulk-sms/delhi" },
        "Palakkad": { videoSrc: "/videos/ap.mp4", link: "/bulk-sms/delhi" },
        "Pune": { videoSrc: "/videos/ap.mp4", link: "/bulk-sms/delhi" },
        "Raipur": { videoSrc: "/videos/ap.mp4", link: "/bulk-sms/delhi" },
        "Surat": { videoSrc: "/videos/ap.mp4", link: "/bulk-sms/delhi" },
        "Thrissur": { videoSrc: "/videos/ap.mp4", link: "/bulk-sms/delhi" },
        "Trivandrum": { videoSrc: "/videos/ap.mp4", link: "/bulk-sms/delhi" },
        "Vadodara": { videoSrc: "/videos/ap.mp4", link: "/bulk-sms/delhi" },
        "Visakhapatnam": { videoSrc: "/videos/ap.mp4", link: "/bulk-sms/delhi" }
        // Add all cities here with their respective video and link
    };

    const cities = Object.keys(cityVideos);  // Get all city names

    return (
        <>
            <div className='bg-black'>
                <Navbar />
            </div>
            <div className="bg-white mt-28 p-8 sm:p-10 md:p-16 lg:p-20">
                <h1 className="text-center text-black text-3xl font-roboto mb-6 p-12">Enjoy abundant SMS service in your cities</h1>
                <div className="cities-list grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
                    {cities.map((city, index) => (
                        <Link key={index} href={cityVideos[city].link || '#'}>
                            <div className="city-item flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer relative overflow-hidden">
                                <h2 className="text-xl font-roboto mb-2 text-black">{city}</h2>
                                <div className="w-64 h-64 bg-gray-300 relative group">
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-75"
                                    >
                                        <source src={cityVideos[city].videoSrc} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="text-xl">Explore</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
