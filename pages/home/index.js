import Navbar from "../../app/components/Navbar";
import Phone from "../../app/components/phone";
import ServiceHome from "../../app/components/service_home";
import SpeedTest from "../../app/components/speedTest";
import SupportForm from "../../app/components/supportForm";
import WhatsAppIcon from "../../app/components/whatsappIcon";
import React, { useEffect, useRef } from "react";
import Head from "next/head";

export default function Home() {
  const player = useRef(null);

  useEffect(() => {
    const onYouTubeIframeAPIReady = () => {
      player.current = new window.YT.Player("video-iframe", {
        videoId: "ELibyf-BfCM", // Replace with your video ID
        events: {
          onReady: onPlayerReady,
        },
        playerVars: {
          loop: 1, // Loop the video
          playlist: "ELibyf-BfCM", // Add the video ID in playlist to make the loop work
        },
      });
    };

    const onPlayerReady = (event) => {
      event.target.playVideo(); // Autoplay video when ready
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

    // Cleanup: Remove YouTube API script and iframe
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
        <meta
          name="og:image"
          content="https://ratsms.com/images/assets/ratsms-icon.png"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#655C97" />
        <meta name="msapplication-navbutton-color" content="#655C97" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="#655C97"
        />
        <meta
          name="facebook-domain-verification"
          content="5ijvhpsz91xr8n5ae0cdz6yy42xiji"
        />
        <title>RAT SMS | BULK SMS SERVICE PROVIDER</title>
      </Head>
      <div>
        <Navbar />
      </div>
      <div className="z-10">
        <Phone />
      </div>
      <div className="relative top-0 w-full h-screen">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div id="video-iframe" className="object-cover w-full h-full"></div>
        </div>

        {/* Left-Center Positioned SupportForm */}
        <div className="flex justify-end items-center relative">
          <div className="text-white">
            <SupportForm />
          </div>
        </div>
        <div className="z-10">
          <SpeedTest />
        </div>
      </div>
      <ServiceHome />
      <WhatsAppIcon />
    </div>
  );
}




