
import Link from "next/link";
import BlackButton from "./black_button";
import ClientHome from "./clientHome";
import Image from 'next/image'

export default function HomeService() {
  return (
    <>
      <div className="h-auto sm:h-screen bg-white pt-8 pl-6 pr-6 sm:pl-24 sm:pr-24 pb-10">
        <div className="p-8 lg:p-6 sm:p-4 pl-16 sm:pl-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-roboto font-light text-black md:text-left">
            Service
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-10 sm:gap-4 p-8 lg:p-6 sm:p-4 pl-16 sm:pl-16">

          <div className="bg-white h-auto">
            <Image
              src="/images/homeService.jpg"
              alt="Promotional Bulk SMS"
              width={800}  // Actual width of the image
              height={300} // Actual height of the image
              className="object-cover w-full" // Ensure it takes full width of the container
              sizes="(max-width: 768px) 100vw, 50vw" // Adjusts image size based on screen width

            />
            <div className="pt-4">
              <p className="text-lg md:text-lg font-roboto text-gray-800 text-left">
                PROMOTIONAL BULK SMS
              </p>
              <p className="text-base md:font-light text-black mt-2 text-left">
                Promotional SMS is a powerful marketing tool, driving effective
                advertising for services and products through direct text messages. This
                approach yields outstanding results, boosting campaign success and
                enhancing website rankings.
              </p>
              <div className="pt-6">
                <Link href="/promotional-bulk-sms-chennai" passHref>
                  <BlackButton aria-label="Learn more about Promotional Bulk SMS Chennai" />
                </Link>

              </div>
            </div>
          </div>


          {/* Card 2 */}
          <div className="bg-white h-auto ">
            <Image
              src="/images/homeService.jpg"
              alt="Promotional Bulk SMS"
              width={800}  // Actual width of the image
              height={300} // Actual height of the image
              className="object-cover w-full" // Ensure it takes full width of the container
              sizes="(max-width: 768px) 100vw, 50vw" // Adjusts image size based on screen width

            />
            {/* className="w-full h-36 sm:h-48 md:h-56 object-cover " */}
            <div className="pt-4">
              <p className="text-lg md:text-lg font-roboto text-gray-800 text-left">
                TRANSACTIONAL BULK SMS
              </p>
              <p className="text-base md:font-light text-black mt-2 text-left">
                Transactional Bulk SMS is an essential part of SMS campaigns,
                offering features like a six-character sender ID, year-round
                delivery, and support for both DND and Non-DND numbers. This
                makes it a valuable tool for effective communication.

              </p>
              <div className="pt-6">
                <Link href="/transactional-bulk-sms-chennai" passHref>
                  <BlackButton aria-label="Learn more about Transactional Bulk SMS Chennai" />
                </Link>

              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white h-auto ">
            <Image
              src="/images/homeService.jpg"
              alt="Promotional Bulk SMS"
              width={800}  // Actual width of the image
              height={300} // Actual height of the image
              className="object-cover w-full" // Ensure it takes full width of the container
              sizes="(max-width: 768px) 100vw, 50vw" // Adjusts image size based on screen width

            />
            <div className="pt-4">
              <p className="text-lg md:text-lg font-roboto text-gray-800 text-left">
                OTP BULK SMS
              </p>
              <p className="text-base md:font-light text-black mt-2 text-left">
                OTP (One Time Password) is crucial for SMS marketing and user
                authentication. It is sent to the registered mobile number to
                verify login requests. We are proud to be one of the top 10 OTP
                SMS Gateway providers in India.
              </p>
              <div className="pt-6 ">
                <Link href="/otp-bulk-sms-chennai" passHref>
                  <BlackButton aria-label="Learn more about OTP Bulk SMS Chennai" />
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
      <ClientHome />
    </>
  );
}
