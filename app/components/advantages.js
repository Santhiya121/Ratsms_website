export default function Advantages() {
  return (
<div className="h-auto bg-white py-12 px-8">
  {/* Title */}
  <p className="text-2xl font-light text-black mb-12 sm:mb-16 lg:mb-24 pl-4 sm:pl-8 md:pl-12">
    Why Choose Our Bulk SMS Services?
  </p>

  {/* Advantages Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto">
    {/* Advantage 1 - Connectivity */}
    <div className="bg-white p-4  hover:shadow-2xl transition duration-300 ease-in-out border-b-2 border-gray-800">
      <div className="mb-4 items-start space-x-4">
        {/* Font Awesome Icon for Connectivity */}
        <span className="text-4xl pl-3 text-black">
          <i className="fas fa-plug"></i>
        </span>
        <div>
          <p className="text-xl font-semibold text-left text-gray-800 mb-2">Connectivity</p>
          <p className="text-gray-700 text-left">
            Stay connected to your target audience at all times with fast and reliable SMS delivery.
          </p>
        </div>
      </div>
    </div>

    {/* Advantage 2 - Support 24/7 */}
    <div className="bg-white p-4  hover:shadow-2xl transition duration-300 ease-in-out border-b-2 border-gray-800">
      <div className="mb-4 items-start space-x-4">
        {/* Font Awesome Icon for Support */}
        <span className="text-4xl pl-3 text-black">
          <i className="fas fa-headset"></i>
        </span>
        <div>
          <p className="text-xl font-semibold text-left text-gray-800 mb-2">Support 24/7</p>
          <p className="text-gray-700 text-left">
            Our dedicated support team is available 24/7 to assist with any questions or issues.
          </p>
        </div>
      </div>
    </div>

    {/* Advantage 3 - No Setup Cost */}
    <div className="bg-white p-4  hover:shadow-2xl transition duration-300 ease-in-out border-b-2 border-gray-800">
      <div className="mb-4 items-start space-x-4">
        {/* Font Awesome Icon for No Setup Cost */}
        <span className="text-4xl pl-3 text-black">
          <i className="fas fa-money-bill-wave"></i>
        </span>
        <div>
          <p className="text-xl font-semibold text-left text-gray-800 mb-2">No Setup Cost</p>
          <p className="text-gray-700 text-left">
            Start your SMS campaign without any initial setup cost, making it an affordable solution.
          </p>
        </div>
      </div>
    </div>

    {/* Advantage 4 - Easy to Use */}
    <div className="bg-white p-4  hover:shadow-2xl transition duration-300 ease-in-out border-b-2 border-gray-800">
      <div className="mb-4 items-start space-x-4">
        {/* Font Awesome Icon for Easy to Use */}
        <span className="text-4xl pl-3 text-black">
          <i className="fas fa-cogs"></i>
        </span>
        <div>
          <p className="text-xl font-semibold text-left text-gray-800 mb-2">Easy to Use</p>
          <p className="text-gray-700 text-left">
            Our user-friendly platform makes sending bulk SMS campaigns simple and hassle-free.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


  
  
  

  
  
  );
}
