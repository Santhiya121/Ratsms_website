// import Script from "next/script";

// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       {/* Google Analytics */}
//       <Script
//         strategy="afterInteractive"
//         src={`https://www.googletagmanager.com/gtag/js?id=G-LH1P3D1TL4`}
//       />
//       <Script id="google-analytics" strategy="afterInteractive">
//         {`
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());
//           gtag('config', 'G-LH1P3D1TL4');
//         `}
//       </Script>
//       <Component {...pageProps} />
//     </>
//   );
// }

// export default MyApp;
import { useEffect, useState } from "react";


function MyApp({ Component, pageProps }) {
    const [gtmLoaded, setGtmLoaded] = useState(false);
    const [gaLoaded, setGaLoaded] = useState(false);

    useEffect(() => {
        const loadGTM = () => {
            if (!gtmLoaded) {
                const script = document.createElement("script");
                script.src = "https://www.googletagmanager.com/gtm.js?id=GTM-N3WQN4Q";
                script.async = true;
                document.head.appendChild(script);
                setGtmLoaded(true);
            }
        };

        const loadGA = () => {
            if (!gaLoaded) {
                const script = document.createElement("script");
                script.src = "https://www.googletagmanager.com/gtag/js?id=G-LH1P3D1TL4";
                script.async = true;
                document.head.appendChild(script);

                const configScript = document.createElement("script");
                configScript.innerHTML = `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-LH1P3D1TL4', { 'send_page_view': false });
                `;
                document.head.appendChild(configScript);

                setGaLoaded(true);
            }
        };

        // Load GTM and GA only when user interacts
        window.addEventListener("scroll", loadGTM);
        window.addEventListener("mousemove", loadGTM);
        window.addEventListener("keydown", loadGTM);

        window.addEventListener("scroll", loadGA);
        window.addEventListener("mousemove", loadGA);
        window.addEventListener("keydown", loadGA);

        return () => {
            window.removeEventListener("scroll", loadGTM);
            window.removeEventListener("mousemove", loadGTM);
            window.removeEventListener("keydown", loadGTM);

            window.removeEventListener("scroll", loadGA);
            window.removeEventListener("mousemove", loadGA);
            window.removeEventListener("keydown", loadGA);
        };
    }, [gtmLoaded, gaLoaded]);

    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;


