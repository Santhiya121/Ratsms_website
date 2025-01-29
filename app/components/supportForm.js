import React, { useState } from "react";

export default function SupportForm() {
  const [formData, setFormData] = useState({
    name: "",
    whatsappNumber: "",
    industry: "",
    service: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.whatsappNumber || !/^\d{10}$/.test(formData.whatsappNumber))
      newErrors.whatsappNumber = "Enter a valid 10-digit WhatsApp number";
    if (!formData.industry) newErrors.industry = "Select an industry";
    if (!formData.service) newErrors.service = "Select a service";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      // Perform your action here (e.g., API call)
    }
  };

  return (
    <div
      className="p-8  sm:mr-14 lg:mt-14 w-[20rem] max-w-[30rem] sm:w-[30rem] md:max-w-xl lg:min-w-2xl sm:h-full
                 xl:max-w-2xl bg-black bg-opacity-50 mr-5"
    >
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">
        Try Us
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1 text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 bg-white text-gray-700 border border-gray-300 
                       focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter your Name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="whatsappNumber"
            className="block text-sm font-medium mb-1 text-white"
          >
            WhatsApp Number
          </label>
          <input
            type="text"
            id="whatsappNumber"
            name="whatsappNumber"
            value={formData.whatsappNumber}
            onChange={handleChange}
            className="w-full p-3 bg-white text-gray-700 border border-gray-300 
                       focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter your WhatsApp Number"
          />
          {errors.whatsappNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.whatsappNumber}</p>
          )}
        </div>

        <div>
          <label htmlFor="industry" className="block text-sm font-medium mb-1 text-white">
            Industry
          </label>
          <select
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="w-full p-3 bg-white text-gray-700 border border-gray-300 
                       focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">Select an industry</option>
            <option value="Industry">Industry</option>
            <option value="Accounting">Accounting</option>
            <option value="Aggregator">Aggregator</option>
            <option value="Automotive">Automotive</option>
            <option value="Banking &amp; Securities">Banking &amp; Securities</option>
            <option value="Beverages">Beverages</option>
            <option value="Broadcast media">Broadcast Media</option>
            <option value="Business Development">Business Development</option>
            <option value="Business Services">Business Services</option>
            <option value="Charity">Charity</option>
            <option value="Consulting &amp; Professional Services">Consulting &amp; Professional Services</option>
            <option value="Consumer Brands">Consumer Brands</option>
            <option value="Consumer Products">Consumer Products</option>
            <option value="Content Provider">Content Provider</option>
            <option value="Department Stores">Department Stores</option>
            <option value="Ecommerce">Ecommerce</option>
            <option value="Education/Government">Education/Government</option>
            <option value="Entertainment &amp; Recreation">Entertainment &amp; Recreation</option>
            <option value="Finance">Finance</option>
            <option value="Financial Services - Other">Financial Services - Other</option>
            <option value="FTSE 250">FTSE 250</option>
            <option value="Gaming &amp; Gambling">Gaming &amp; Gambling</option>
            <option value="Government &amp; Education">Government &amp; Education</option>
            <option value="Health, Beauty">Health, Beauty</option>
            <option value="Higher Education">Higher Education</option>
            <option value="Holding Companies">Holding Companies</option>
            <option value="Hospitality">Hospitality</option>
            <option value="Hospitals / Health Care">Hospitals / Health Care</option>
            <option value="Insurance">Insurance</option>
            <option value="Logistics">Logistics</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Marketing, Advertising &amp; Public Relations">Marketing, Advertising &amp; Public Relations</option>
            <option value="Media &amp; Agencies">Media &amp; Agencies</option>
            <option value="Medical Devices">Medical Devices</option>
            <option value="Mobile Marketing Services">Mobile Marketing Services</option>
            <option value="Non-Profit">Non-Profit</option>
            <option value="Other">Other</option>
            <option value="Pharmaceuticals &amp; Healthcare">Pharmaceuticals &amp; Healthcare</option>
            <option value="Property Development">Property Development</option>
            <option value="Public Sector">Public Sector</option>
            <option value="Publishing &amp; Printing">Publishing &amp; Printing</option>
            <option value="Real Estate">Real Estate</option>
            <option value="Recruitment">Recruitment</option>
            <option value="Restaurants">Restaurants</option>
            <option value="Retail">Retail</option>
            <option value="Retail - Apparel">Retail - Apparel</option>
            <option value="Retail - CPG">Retail - CPG</option>
            <option value="Retail - Gas &amp; Convenience Store">Retail - Gas &amp; Convenience Store</option>
            <option value="Retail - Grocery &amp; Pharmacy">Retail - Grocery &amp; Pharmacy</option>
            <option value="Retail - Outlets">Retail - Outlets</option>
            <option value="Retail - Speciality">Retail - Speciality</option>
            <option value="Services">Services</option>
            <option value="Social Media">Social Media</option>
            <option value="Software &amp; IT">Software &amp; IT</option>
            <option value="Software, Cloud &amp; IT">Software, Cloud &amp; IT</option>
            <option value="Sport, Leisure &amp; Entertainment">Sport, Leisure &amp; Entertainment</option>
            <option value="Supermarkets">Supermarkets</option>
            <option value="Technology">Technology</option>
            <option value="Telecom / Communication Services">Telecom / Communication Services</option>
            <option value="Telecommunications &amp; Cable">Telecommunications &amp; Cable</option>
            <option value="Ticketing">Ticketing</option>
            <option value="Transport &amp; Logistics">Transport &amp; Logistics</option>
            <option value="Travel &amp; Hospitality">Travel &amp; Hospitality</option>
            <option value="TV &amp; Radio Broadcasters">TV &amp; Radio Broadcasters</option>
            <option value="Utilities">Utilities</option>
            <option value="Wholesale">Wholesale</option>
          </select>
          {errors.industry && (
            <p className="text-red-500 text-sm mt-1">{errors.industry}</p>
          )}
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium mb-1 text-white">
            Service
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full p-3 bg-white text-gray-700 border border-gray-300 
                       focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">Select a service</option>
            <option value="Promotional SMS">Promotional SMS</option>
            <option value="Transactional SMS">Transactional SMS</option>
            <option value="Otp SMS">Otp SMS</option>
            <option value="Service Implicit">Service Implicit</option>
            <option value="Service Explicit">Service Explicit</option>
            <option value="Promotional DND SMS">Promotional DND SMS</option>
            <option value="SMS API">SMS API</option>
            <option value="SMPP">SMPP</option>
            <option value="WhatsApp Marketing">WhatsApp Marketing</option>
          </select>
          {errors.service && (
            <p className="text-red-500 text-sm mt-1">{errors.service}</p>
          )}
        </div>

        <div className="flex items-center justify-center">
          <button
            className="relative w-full max-w-[15rem] h-12 p-4 border border-[#003bff] 
                       text-[#003bff] bg-white flex items-center justify-between group 
                       transition-all duration-300 ease-in-out hover:bg-[#003bff] hover:text-white "
          >
            <span className="text-lg font-roboto text-center p-12 group-hover:text-white transition-all duration-300 ease-in-out">
              Submit
            </span>
            <span
              className="text-[#003bff] font-bold text-2xl transition-transform 
                         duration-300 ease-in-out group-hover:text-white group-hover:translate-x-2"
            >
              →
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}



// import React, { useState } from "react";

// export default function SupportForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     whatsappNumber: "",
//     industry: "",
//     service: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newErrors = {};

//     if (!formData.name) newErrors.name = "Name is required";
//     if (!formData.whatsappNumber || !/^\d{10}$/.test(formData.whatsappNumber))
//       newErrors.whatsappNumber = "Enter a valid 10-digit WhatsApp number";
//     if (!formData.industry) newErrors.industry = "Select an industry";
//     if (!formData.service) newErrors.service = "Select a service";

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       alert("Form submitted successfully!");
//       // Perform your action here (e.g., API call)
//     }
//   };

//   return (
//     <div
//       className="p-4 md:p-8 sm:mt-14 mt-24 shadow-lg  md:w-full sm:min-w-[25rem]"
//       style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} // Semi-transparent background
//     >
//       <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">
//         Try Us
//       </h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="name" className="block text-sm font-medium mb-1 text-white">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full p-2 bg-white text-gray-700 border border-black focus:ring-2 focus:ring-blue-black outline-none "
//             placeholder="Enter your Name"
//           />
//           {errors.name && (
//             <p className="text-red-500 text-sm mt-1">{errors.name}</p>
//           )}
//         </div>

//         <div>
//           <label
//             htmlFor="whatsappNumber"
//             className="block text-sm font-medium mb-1 text-white"
//           >
//             WhatsApp Number
//           </label>
//           <input
//             type="text"
//             id="whatsappNumber"
//             name="whatsappNumber"
//             value={formData.whatsappNumber}
//             onChange={handleChange}
//             className="w-full p-2 bg-white text-gray-700 border border-black focus:ring-2 focus:ring-blue-black outline-none "
//             placeholder="Enter Your WhatsApp Number"
//           />
//           {errors.whatsappNumber && (
//             <p className="text-red-500 text-sm mt-1">{errors.whatsappNumber}</p>
//           )}
//         </div>

//         <div>
//           <label htmlFor="industry" className="block text-sm font-medium mb-1 text-white">
//             Industry
//           </label>
//           <select
//             id="industry"
//             name="industry"
//             value={formData.industry}
//             onChange={handleChange}
//             className="w-full p-2 bg-white text-gray-700 border border-black focus:ring-2 focus:ring-blue-black outline-none "
//           >
//             <option value="">Select an industry</option>
//             <option value="IT">IT</option>
//             <option value="Healthcare">Healthcare</option>
//             <option value="Finance">Finance</option>
//             <option value="Education">Education</option>
//           </select>
//           {errors.industry && (
//             <p className="text-red-500 text-sm mt-1">{errors.industry}</p>
//           )}
//         </div>

//         <div>
//           <label htmlFor="service" className="block text-sm font-medium mb-1 text-white">
//             Service
//           </label>
//           <select
//             id="service"
//             name="service"
//             value={formData.service}
//             onChange={handleChange}
//             className="w-full p-2 bg-white text-gray-700 border border-black focus:ring-2 focus:ring-blue-black outline-none "
//           >
//             <option value="">Select a service</option>
//             <option value="Consulting">Consulting</option>
//             <option value="Development">Development</option>
//             <option value="Marketing">Marketing</option>
//             <option value="Support">Support</option>
//           </select>
//           {errors.service && (
//             <p className="text-red-500 text-sm mt-1">{errors.service}</p>
//           )}
//         </div>
//         <div className="flex items-center justify-center p-4">
//           <button
//             className="relative w-full md:w-64 h-12 p-4 border border-[#003bff] text-[#003bff] bg-white
//                        flex items-center justify-between group
//                        transition-all duration-300 ease-in-out hover:bg-[#003bff] hover:text-white"
//           >
//             <span className="text-lg font-roboto text-center p-12 group-hover:text-white transition-all duration-300 ease-in-out">
//               Click Me
//             </span>
//             <span
//               className="text-[#003bff] font-bold text-2xl transition-transform
//                          duration-300 ease-in-out group-hover:text-white group-hover:translate-x-2"
//             >
//               →
//             </span>
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }



// apple style


// import React, { useState } from "react";

// export default function SupportForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     whatsappNumber: "",
//     industry: "",
//     service: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newErrors = {};

//     if (!formData.name) newErrors.name = "Name is required";
//     if (!formData.whatsappNumber || !/^\d{10}$/.test(formData.whatsappNumber))
//       newErrors.whatsappNumber = "Enter a valid 10-digit WhatsApp number";
//     if (!formData.industry) newErrors.industry = "Select an industry";
//     if (!formData.service) newErrors.service = "Select a service";

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       alert("Form submitted successfully!");
//       // Perform your action here (e.g., API call)
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-200">
//       {/* iPhone Frame */}
//       <div className="relative w-[380px] h-[800px] bg-black rounded-[40px] shadow-lg overflow-hidden">
//         {/* iPhone Notch */}
//         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-black w-36 h-5 rounded-b-xl"></div>
//         {/* Screen */}
//         <div className="absolute top-[30px] left-0 right-0 bottom-[30px] bg-white rounded-[30px] p-4 md:p-8 overflow-y-auto">
//           {/* Form */}
//           <h1 className="text-3xl font-semibold mb-8 text-center text-gray-900">
//             Try Us
//           </h1>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded-xl bg-gray-100 text-gray-700 border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition"
//                 placeholder="Enter your Name"
//               />
//               {errors.name && (
//                 <p className="text-red-500 text-sm mt-1">{errors.name}</p>
//               )}
//             </div>

//             <div>
//               <label
//                 htmlFor="whatsappNumber"
//                 className="block text-sm font-medium mb-2 text-gray-700"
//               >
//                 WhatsApp Number
//               </label>
//               <input
//                 type="text"
//                 id="whatsappNumber"
//                 name="whatsappNumber"
//                 value={formData.whatsappNumber}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded-xl bg-gray-100 text-gray-700 border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition"
//                 placeholder="Enter Your WhatsApp Number"
//               />
//               {errors.whatsappNumber && (
//                 <p className="text-red-500 text-sm mt-1">{errors.whatsappNumber}</p>
//               )}
//             </div>

//             <div>
//               <label htmlFor="industry" className="block text-sm font-medium mb-2 text-gray-700">
//                 Industry
//               </label>
//               <select
//                 id="industry"
//                 name="industry"
//                 value={formData.industry}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded-xl bg-gray-100 text-gray-700 border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition"
//               >
//                 <option value="">Select an industry</option>
//                 <option value="IT">IT</option>
//                 <option value="Healthcare">Healthcare</option>
//                 <option value="Finance">Finance</option>
//                 <option value="Education">Education</option>
//               </select>
//               {errors.industry && (
//                 <p className="text-red-500 text-sm mt-1">{errors.industry}</p>
//               )}
//             </div>

//             <div>
//               <label htmlFor="service" className="block text-sm font-medium mb-2 text-gray-700">
//                 Service
//               </label>
//               <select
//                 id="service"
//                 name="service"
//                 value={formData.service}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded-xl bg-gray-100 text-gray-700 border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition"
//               >
//                 <option value="">Select a service</option>
//                 <option value="Consulting">Consulting</option>
//                 <option value="Development">Development</option>
//                 <option value="Marketing">Marketing</option>
//                 <option value="Support">Support</option>
//               </select>
//               {errors.service && (
//                 <p className="text-red-500 text-sm mt-1">{errors.service}</p>
//               )}
//             </div>
//             <div className="flex items-center justify-center">
//               <button
//                 className="w-full md:w-64 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-lg shadow-lg hover:from-blue-600 hover:to-blue-700 focus:ring-4 focus:ring-blue-300 transition-all"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//         {/* Bottom Speaker */}
//         <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-600 w-28 h-1 rounded-full"></div>
//       </div>
//     </div>
//   );
// }
