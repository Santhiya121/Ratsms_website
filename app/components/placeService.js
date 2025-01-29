import Button from "./button";
import Image from 'next/image'

export default function Service() {
  return (
    <>
      <div className="h-[90rem] sm:h-auto  bg-white pb-9 pl-16 pr-16 ">{/* Full height and white background */}
        <div className="p-4 md:p-8">
          <h1 className="text-2xl md:text-4xl font-roboto font-light text-black text-center md:text-left">
            Service
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 md:p-8">
          {/* Card 1: Unmatched Bulk SMS Delivery */}
          <div className="p-4 bg-white text-center  ">
            <Image
              src="/images/sms2.jpg"
              alt="Unmatched Bulk SMS Delivery"
              width={800} // Replace 800 with your image's actual width
              height={300} // Replace 300 with your image's actual height
              className="w-full h-48 md:h-80 mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg sm:text-lg md:text-lg font-roboto text-gray-800 text-left">
              PREMIUM ROUTE
            </h3>
            <p className="text-base md:font-light text-black mt-2 text-left">
              Lightning Premium SMS Gateway to deliver SMS instantly across any networks without any delay.
            </p>
          </div>

          {/* Card 2: Multiple Operator */}
          <div className="p-4 bg-white text-center  ">
            <Image
              src="/images/sms2.jpg"
              alt="Unmatched Bulk SMS Delivery"
              width={800} // Replace 800 with your image's actual width
              height={300} // Replace 300 with your image's actual height
              className="w-full h-48 md:h-80 mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg sm:text-lg md:text-lg font-roboto text-gray-800 text-left">
              SCHEDULE SMS
            </h3>
            <p className="text-base md:font-light text-black mt-2 text-left">
              Schedule sms feature to make events and festivals memorable. Schedule SMS to be sent at a future date & time.
            </p>
          </div>

          {/* Card 3: Smart Retry Mechanism */}
          <div className="p-4 bg-white text-center ">
            <Image
              src="/images/sms3.jpg"
              alt="Unmatched Bulk SMS Delivery"
              width={800} // Replace 800 with your image's actual width
              height={300} // Replace 300 with your image's actual height
              className="w-full h-48 md:h-80 mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg sm:text-lg md:text-lg font-roboto text-gray-800 text-left">
              UNICODE SMS
            </h3>
            <p className="text-base md:font-light text-black mt-2 text-left">
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