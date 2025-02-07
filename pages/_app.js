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
import Script from "next/script";

function MyApp({ Component, pageProps }) {
    return (
        <>
            {/* Google Tag Manager */}
            <Script
                id="google-tag-manager"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N3WQN4Q');
          `,
                }}
            />

            {/* Google Analytics (via GTM) */}
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-LH1P3D1TL4');
    `,
                }}
            />


            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
