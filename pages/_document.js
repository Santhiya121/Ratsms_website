// import { Html, Head, Main, NextScript } from "next/document";

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head>
//         {/* Preconnect to Google Fonts and FontAwesome */}
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
//         {/* Preload Google Fonts (Inter) */}
//         <link
//           rel="preload"
//           href="https://fonts.gstatic.com/s/inter/v3/UcCO3BTXDTztlXnp2qxp4d_vw0L5neDcp_nZg.woff2"
//           as="font"
//           type="font/woff2"
//           crossorigin="anonymous"
//         />
        
//         {/* Preload FontAwesome CSS */}
//         <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" as="style" />
        
//         {/* Load CSS and Fonts */}
//         <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet" />
        
//         {/* Font-Display Swap for better text rendering */}
//         <style>{`* { font-display: swap; }`}</style>
//       </Head>
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ✅ Preconnect to Google Fonts & FontAwesome */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
    rel="stylesheet"
    as="style"
    onLoad="this.onload=null;this.rel='stylesheet';"
  />
  <style>{`* { font-display: swap; }`}</style>
        {/* ✅ Preload LCP Image */}
        <link rel="preload" as="image" href="/images/callus.webp" />

        {/* ✅ Optimize Google Fonts Lazy Loading */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
          media="print"
          onLoad="this.onload=null;this.removeAttribute('media');"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
          />
        </noscript>

        {/* ✅ Optimize FontAwesome Lazy Loading */}
        <link
          rel="preload"
          as="style"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          media="print"
          onLoad="this.onload=null;this.removeAttribute('media');"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          />
        </noscript>

        {/* ✅ Ensure Faster Font Rendering */}
        <style>{`* { font-display: swap; }`}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
