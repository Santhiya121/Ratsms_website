export default function PlaceContent({ city }) {
    return (
      <div className="min-h-screen +bg-black py-12 px-8">
        {/* Heading */}
        <h1 className="text-2xl font-light text-white mb-8 text-center drop-shadow-lg">
          Best Bulk SMS Service Provider in {city || "Your City"}
        </h1>
  
        {/* Overview Section */}
        <div className=" p-8  max-w-3xl w-full mb-10 mx-auto">
          <p className="text-lg font-light text-white leading-relaxed text-center">
            {city || "This city"} is one of India most vibrant cities, offering vast business opportunities. Boost your business visibility with affordable and effective Bulk SMS services. Stay ahead of the competition with personalized SMS campaigns.
          </p>
        </div>
  
        {/* Benefits of Bulk SMS Section */}
        <div className="bg-white p-8  max-w-5xl w-full mb-10 mx-auto">
          <h2 className="text-2xl font-roboto text-black mb-6 text-center">Why Bulk SMS?</h2>
          <ul className="list-disc pl-8 text-base text-gray-700 space-y-4">
            <li className="flex items-center justify-start space-x-2">📲 <span>Instant reach to your target audience.</span></li>
            <li className="flex items-center justify-start space-x-2">💡 <span>High open rates and engagement.</span></li>
            <li className="flex items-center justify-start space-x-2">📈 <span>Affordable for businesses of all sizes.</span></li>
          </ul>
        </div>
  
        {/* Best Practices Section */}
        <div className="bg-white p-8  max-w-5xl w-full mb-10 mx-auto">
          <h2 className="text-2xl font-roboto text-black mb-6 text-center">Bulk SMS Best Practices</h2>
          <ul className="list-disc pl-8 text-base text-gray-700 space-y-4">
            <li className="flex items-center justify-start space-x-2">📜 <span>Personalize your messages for better engagement.</span></li>
            <li className="flex items-center justify-start space-x-2">🎯 <span>Segment your audience for more targeted campaigns.</span></li>
            <li className="flex items-center justify-start space-x-2">🕒 <span>Send messages at optimal times to maximize reach.</span></li>
          </ul>
        </div>
  
        {/* Why Choose Us Section */}
        <div className="bg-white p-8  max-w-5xl w-full mb-10 mx-auto">
          <h2 className="text-2xl font-roboto text-black mb-6 text-center">Why Choose Us?</h2>
          <p className="text-base text-gray-700 text-center">
            With fast delivery, real-time tracking, and secure services, we offer the best Bulk SMS solutions across {city || "Your City"}.
          </p>
        </div>
  
        {/* Conclusion Section */}
        <div className="bg-white p-8  max-w-5xl w-full mb-10 mx-auto">
          <p className="text-base text-gray-700 text-center">
            Start your Bulk SMS campaign today and take your business to the next level with one of the most effective marketing tools available. Reach out to us now to get started!
          </p>
        </div>
  
        {/* Call to Action Button */}
        
      </div>
    );
  }
  