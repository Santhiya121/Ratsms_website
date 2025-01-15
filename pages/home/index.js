// import Footer from "../../app/components/footer";
import Navbar from "../../app/components/Navbar";
import ServiceHome from "../../app/components/service_home";
import SpeedTest from "../../app/components/speedTest";
import SupportForm from "../../app/components/supportForm";
import WhatsAppIcon from "../../app/components/whatsappIcon";

export default function Home() {
  return (
    <div>
      <div className="">
      <Navbar/>
      </div>
      <div className="relative top-0 w-full min-h-screen">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/RAT.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Left-Center Positioned SupportForm */}
        <div className="flex justify-end items-center min-h-screen relative pr-12">
          <div className="text-white space-x-6">
            <SupportForm />
          </div>
        </div>
      </div>
      <ServiceHome/>
      <WhatsAppIcon/>
      <SpeedTest/>
      {/* <Footer/> */}
    </div>
  );
}
