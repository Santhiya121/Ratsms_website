export default function Advantages() {
    return (
      <div className="min-h-screen bg-white py-12 px-8">
        {/* Title */}
        <h2 className="text-4xl font-light text-black mb-10 pl-16">
          Why Choose Our Bulk SMS Services?
        </h2>
  
        {/* Advantages Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto">
          {/* Advantage 1 - Connectivity */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="flex items-center justify-center mb-4">
              <span className="text-4xl text-blue-600">🔗</span>
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">Connectivity</h3>
            <p className="text-gray-700 text-center">
              Stay connected to your target audience at all times with fast and reliable SMS delivery.
            </p>
          </div>
  
          {/* Advantage 2 - Support 24/7 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="flex items-center justify-center mb-4">
              <span className="text-4xl text-blue-600">💬</span>
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">Support 24/7</h3>
            <p className="text-gray-700 text-center">
              Our dedicated support team is available 24/7 to assist with any questions or issues.
            </p>
          </div>
  
          {/* Advantage 3 - No Setup Cost */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="flex items-center justify-center mb-4">
              <span className="text-4xl text-blue-600">💰</span>
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">No Setup Cost</h3>
            <p className="text-gray-700 text-center">
              Start your SMS campaign without any initial setup cost, making it an affordable solution.
            </p>
          </div>
  
          {/* Advantage 4 - Easy to Use */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="flex items-center justify-center mb-4">
              <span className="text-4xl text-blue-600">⚙️</span>
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">Easy to Use</h3>
            <p className="text-gray-700 text-center">
              Our user-friendly platform makes sending bulk SMS campaigns simple and hassle-free.
            </p>
          </div>
        </div>
      </div>
    );
  }
  