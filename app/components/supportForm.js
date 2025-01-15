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
//     className="p-8 rounded-lg shadow-lg w-[30rem] h-auto "
//     style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} // Semi-transparent background
//   >
//       <h1 className="text-3xl font-bold mb-6 text-center">Try Us</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="name" className="block text-sm font-medium mb-1">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full p-2 bg-white text-gray-700 border border-black focus:ring-2 focus:ring-blue-black outline-none"
//             placeholder="Enter your Name"
//           />
//           {errors.name && (
//             <p className="text-red-500 text-sm mt-1">{errors.name}</p>
//           )}
//         </div>

//         <div>
//           <label
//             htmlFor="whatsappNumber"
//             className="block text-sm font-medium mb-1"
//           >
//             WhatsApp Number
//           </label>
//           <input
//             type="text"
//             id="whatsappNumber"
//             name="whatsappNumber"
//             value={formData.whatsappNumber}
//             onChange={handleChange}
//             className="w-full p-2 bg-white text-black border border-black focus:ring-2 focus:ring-blue-black outline-none"
//              placeholder="Enter Your WhatsAPP Number"
//           />
//           {errors.whatsappNumber && (
//             <p className="text-red-500 text-sm mt-1">{errors.whatsappNumber}</p>
//           )}
//         </div>

//         <div>
//           <label htmlFor="industry" className="block text-sm font-medium mb-1">
//             Industry
//           </label>
//           <select
//             id="industry"
//             name="industry"
//             value={formData.industry}
//             onChange={handleChange}
//             className="w-full p-2  bg-white text-gray-700 border border-black focus:ring-2 focus:ring-blue-black outline-none"
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
//           <label htmlFor="service" className="block text-sm font-medium mb-1">
//             Service
//           </label>
//           <select
//             id="service"
//             name="service"
//             value={formData.service}
//             onChange={handleChange}
//             className="w-full p-2  bg-white text-gray-700 border border-black focus:ring-2 focus:ring-blue-black outline-none"
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
//         <button
//       className="relative w-64 h-12 p-4 border border-[#003bff] text-[#003bff] bg-white 
//                  flex items-center justify-between  group 
//                  transition-all duration-300 ease-in-out hover:bg-[#003bff] hover:text-white"
//     >
//       <span className="text-lg font-roboto text-center p-12 group-hover:text-white transition-all duration-300 ease-in-out">
//         Click Me
//       </span>
//       <span
//         className="text-[#003bff] font-bold text-2xl transition-transform 
//                    duration-300 ease-in-out group-hover:text-white group-hover:translate-x-2"
//       >
//         →
//       </span>
//     </button>
//         </div>
//       </form>
//     </div>
//   );
// }


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
      className="p-4 md:p-8  shadow-lg  w-full md:max-w-[30rem] h-auto mx-auto"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} // Semi-transparent background
    >
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">
        Try Us
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
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
            className="w-full p-2 bg-white text-gray-700 border border-black focus:ring-2 focus:ring-blue-black outline-none "
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
            className="w-full p-2 bg-white text-gray-700 border border-black focus:ring-2 focus:ring-blue-black outline-none "
            placeholder="Enter Your WhatsApp Number"
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
            className="w-full p-2 bg-white text-gray-700 border border-black focus:ring-2 focus:ring-blue-black outline-none "
          >
            <option value="">Select an industry</option>
            <option value="IT">IT</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Finance">Finance</option>
            <option value="Education">Education</option>
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
            className="w-full p-2 bg-white text-gray-700 border border-black focus:ring-2 focus:ring-blue-black outline-none "
          >
            <option value="">Select a service</option>
            <option value="Consulting">Consulting</option>
            <option value="Development">Development</option>
            <option value="Marketing">Marketing</option>
            <option value="Support">Support</option>
          </select>
          {errors.service && (
            <p className="text-red-500 text-sm mt-1">{errors.service}</p>
          )}
        </div>
        <div className="flex items-center justify-center p-4">
          <button
            className="relative w-full md:w-64 h-12 p-4 border border-[#003bff] text-[#003bff] bg-white 
                       flex items-center justify-between group 
                       transition-all duration-300 ease-in-out hover:bg-[#003bff] hover:text-white"
          >
            <span className="text-lg font-roboto text-center p-12 group-hover:text-white transition-all duration-300 ease-in-out">
              Click Me
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
