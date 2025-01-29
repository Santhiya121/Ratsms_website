// import React from 'react';

// const WhatsAppIcon = () => {
//   return (
//     <div className="fixed bottom-4 left-4 z-50">
//       <a
//         href="https://wa.me/+1234567890" 
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <i className="fab fa-whatsapp text-5xl text-green-300 hover:text-green-700" />
//       </a>
//     </div>
//   );
// };

// export default WhatsAppIcon;


import React from 'react';

const WhatsAppIcon = () => {
  return (
    <div className="fixed bottom-2  z-50 sm:bottom-6 sm:left-2 md:bottom-8 md:left-4 flex flex-col ">
      {/* LinkedIn Icon */}
      <a
        href="https://www.linkedin.com/company/ratsmschennai/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform duration-300 p-1 sm:p-2 "
      >
        <i className="fab fa-linkedin text-base sm:text-3xl md:text-3xl text-blue-600 hover:text-blue-800" />
      </a>

      {/* YouTube Icon */}
      <a
        href="https://www.youtube.com/@ratsms"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform duration-300 p-1 "
      >
        <i className="fab fa-youtube text-base sm:text-3xl md:text-3xl text-red-600 hover:text-red-800" />
      </a>

      {/* Instagram Icon */}
      <a
        href="https://www.instagram.com/ratsms_com/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform duration-300 p-1 sm:p-2 "
      >
        <i className="fab fa-instagram text-base sm:text-3xl md:text-3xl text-pink-500 hover:text-pink-700" />
      </a>

      {/* Facebook Icon */}
      <a
        href="https://www.linkedin.com/company/ratsmschennai/ "
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform duration-300 p-1 sm:p-2 "
      >
        <i className="fab fa-facebook text-base sm:text-3xl md:text-3xl text-[#1877F2] hover:text-blue-900" />
      </a>

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/+917506712345?text=Hi%2C%20learn%20more%20about%20your%20services!"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform duration-300 p-1 sm:p-2"
      >
        <i className="fab fa-whatsapp text-base sm:text-4xl md:text-4xl text-[#25D366]   hover:text-green-700" />
      </a>

    </div>
  );
};

export default WhatsAppIcon;

