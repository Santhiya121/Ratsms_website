
import Navbar from "../app/components/Navbar";
import Partner from "../app/components/partners";
import Phone from "../app/components/phone";
import ServiceHome from "../app/components/service_home";
import SpeedTest from "../app/components/speedTest";
import SupportForm from "../app/components/supportForm";
import WhatsAppIcon from "../app/components/whatsappIcon";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import "../app/globals.css";
import LocalBusinessSchema from "../app/components/localSchema";




export default function Home() {
  const player = useRef(null);
  useEffect(() => {
    const onYouTubeIframeAPIReady = () => {
      player.current = new window.YT.Player("video-iframe", {
        videoId: "ELibyf-BfCM", 
        events: {
          onReady: onPlayerReady,
        },
        playerVars: {
          loop: 1, 
          playlist: "ELibyf-BfCM", 
        },
      });
    };


    const onPlayerReady = (event) => {
      event.target.playVideo(); 
    };

    if (!window.YT) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.onload = () => {
        window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
      };
      document.body.appendChild(script);
    } else {
      onYouTubeIframeAPIReady();
    }

    return () => {
      const script = document.querySelector(
        'script[src="https://www.youtube.com/iframe_api"]'
      );
      if (script) script.remove();
      if (player.current) {
        player.current.destroy();
      }
    };
  }, []);




  return (
    <div>
      <LocalBusinessSchema
      name = "RAT SMS"
      description="RAT SMS is a leading bulk SMS service provider offering promotional, transactional, and OTP SMS solutions"
      url="https://ratsms.com"
      city="chennai"
      address="Flat No – 17, 2nd Floor, Anandha Bhavan, Landmark, Mahatma Gandhi Rd, opp. to Hotel, Adyar, Chennai, Tamil Nadu 600041"
      latitude="13.003387° N"
      longitude=" 80.255043° E"
      />
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="India's No.1 Bulk SMS provider, RatSMS offers Promotional, Transactional, OTP SMS, Service Implicit, Service Explicit & WhatsApp API with reliable delivery."
        />
        <meta
          name="keywords"
          content="bulk sms, bulk sms service provider, bulk sms service in chennai, sms service provider in india, free sms api, sms api india, sms provider, bulk sms gateway, otp sms, transactional sms, promotional sms, smart sms, dlt registration, service implicit, service explicit, bulk sms services in india"
        />
        <link rel="canonical" href="https://ratsms.com" />
        <meta property="og:site_name" content="RATSMS" />
        <meta property="og:url" content="https://ratsms.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RAT SMS : Bulk SMS Service Provider" />
        <meta name="og:image" content="/images/logo.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#655C97" />
        <meta name="msapplication-navbutton-color" content="#655C97" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
        <meta
          name="facebook-domain-verification"
          content="5ijvhpsz91xr8n5ae0cdz6yy42xiji"
        />
         <link rel="icon" href="/favicon.ico" sizes="any"></link>
        <title>RAT SMS | BULK SMS SERVICE PROVIDER</title>
      </Head>
    
      <div className="">
    
        <Navbar />
      </div>

 
      <Phone />

      <div className="relative top-0 w-full min-h-screen">
        <div className="relative w-full h-screen">
          {/* Background YouTube Video */}
          <div className="absolute top-0 left-0 w-full h-full z-0">
            <div id="video-iframe" className="object-cover w-full h-full" />
          </div>


          <div className="flex justify-end items-center  relative sm:pt-10  ">
            <div className="text-white hidden md:block ">
              <SupportForm />
            </div>
          </div>
         
          <div className="z-10 hidden md:block  ">
            <SpeedTest />
          </div>
        </div>
        <div className="block md:hidden bg-white p-6">
          <SupportForm/>
        </div>

        {/* Left-Center Positioned SupportForm */}

      </div>
      <Partner />
      <ServiceHome />
      <WhatsAppIcon />

      {/* <Footer/> */}
    </div>
  );
}
