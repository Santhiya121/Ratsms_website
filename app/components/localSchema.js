import Head from "next/head";

const LocalBusinessSchema = ({ name, description, url, city, address, latitude, longitude, pincode }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": name,
    "description": description,
    "url": url,
    "logo": "https://ratsms.com/images/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX",
      "contactType": "Customer Service",
      "areaServed": "IN",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address,
      "addressLocality": city,
      "addressRegion": "TN",
      "postalCode": pincode,  // Dynamic Pincode
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": latitude,
      "longitude": longitude
    },
    "sameAs": [
      "https://www.facebook.com/ratsms",
      "https://twitter.com/ratsms",
      "https://www.linkedin.com/company/ratsms"
    ],
    "openingHours": "Mo-Fr 09:00-18:00"
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
};

export default LocalBusinessSchema;
