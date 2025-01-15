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
    <div className="fixed bottom-4 left-4 z-50 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8">
      <a
        href="https://wa.me/+1234567890"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp text-4xl sm:text-5xl md:text-6xl text-green-300 hover:text-green-700 transition-transform duration-300 hover:scale-110" />
      </a>
    </div>
  );
};

export default WhatsAppIcon;
