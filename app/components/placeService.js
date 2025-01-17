import Button from "./button";


export default function Service() {
  return (
    <>
      <div className="h-[75rem] md:h-screen bg-white pb-9 pl-4">{/* Full height and white background */}
        <div className="p-4 md:p-8">
          <h1 className="text-2xl md:text-4xl font-roboto text-black text-center md:text-left">
            Service
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 md:p-8">
          {/* Card 1: Unmatched Bulk SMS Delivery */}
          <div className="p-4 bg-white text-center  ">
            <img
              src="/images/sms1.jpg"
              alt="Unmatched Bulk SMS Delivery"
              className="w-full h-48 md:h-80 mx-auto mb-4 object-cover "
            />
            <h3 className="text-md md:text-lg font-semibold text-gray-800">
            PREMIUM ROUTE
            </h3>
            <p className="text-sm md:font-light text-black mt-2">
            Lightning Premium SMS Gateway to deliver SMS instantly across any networks without any delay.
            </p>
          </div>

          {/* Card 2: Multiple Operator */}
          <div className="p-4 bg-white text-center  ">
            <img
              src="/images/sms2.jpg"
              alt="Multiple Operator"
              className="w-full h-48 md:h-80 mx-auto mb-4 object-cover "
            />
            <h3 className="text-md md:text-lg font-semibold text-gray-800">
            SCHEDULE SMS
            </h3>
            <p className="text-sm md:font-light text-black mt-2">
            Schedule sms feature to make events and festivals memorable. Schedule SMS to be sent at a future date & time.
            </p>
          </div>

          {/* Card 3: Smart Retry Mechanism */}
          <div className="p-4 bg-white text-center ">
            <img
              src="/images/sms3.jpg"
              alt="Smart Retry Mechanism"
              className="w-full h-48 md:h-80 mx-auto mb-4 object-cover "
            />
            <h3 className="text-md md:text-lg font-semibold text-gray-800">
            UNICODE SMS
            </h3>
            <p className="text-sm md:font-light text-black mt-2">
            Unicode SMS allows you to send Bulk SMS in your regional language which helps to target your local audience.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mb-10 md:mb-20">
          <Button />
        </div>
      </div>
      {/* <SpeedTest /> */}
     
    </>
  );
}