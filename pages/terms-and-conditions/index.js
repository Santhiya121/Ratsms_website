import Footer from "../../app/components/footer";
import Navbar from "../../app/components/Navbar";
import "../../app/globals.css";

export default function TermsConditions() {
  return (
    <>
      <div className="bg-black">
        <Navbar />
      </div>
      <div className="bg-gray-100 py-10 mt-28">
        <div className="container mx-auto space-y-10 p-10">
          {/* Header Section */}
          <div className="flex justify-center items-center">
            <h1 className="text-6xl font-extralight text-gray-800 font-roboto p-4">
              Terms and Conditions
            </h1>
          </div>

          {/* Introduction Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">Our Terms and Conditions</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              These terms and conditions outline the rules and regulations for the use of AWF TECHNOLOGIES PRIVATE LIMITEDs Website, located at www.ratsms.com.
              By accessing this website, we assume you accept these terms and conditions.
              Do not continue to use www.ratsms.com if you do not agree to take all of the terms and conditions stated on this page.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              The following terminology applies to these Terms and Conditions, Privacy Statement, and Disclaimer Notice, and all Agreements: Client, You and Your refers to you, the person logging onto this website and compliant with the Company’s terms and conditions.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of the provision of the Company’s stated services, in accordance with and subject to, prevailing law of the Netherlands.
            </p>
          </div>

          {/* Definitions Section */}
          <div className="bg-gray-200 p-8 rounded-lg shadow-lg space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">Definitions</h2>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                We employ the use of cookies. By accessing www.ratsms.com, you agree to use cookies in agreement with AWF TECHNOLOGIES PRIVATE LIMITEDs Privacy Policy.
              </li>
              <li>
                Most interactive websites use cookies to let us retrieve the users details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
              </li>
              <li>
                <strong>Cookies:</strong> Small data files stored on your device to enhance your browsing experience.
              </li>
            </ul>
          </div>

          {/* Data Collection Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
            <h3 className="text-3xl font-semibold text-gray-800">Data Collection</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              We are committed to protecting your privacy. Any personal data collected through the use of this website will be processed in accordance with our Privacy Policy.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              For more details, please review our <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a>.
            </p>
          </div>

          {/* Footer Section */}
        </div>
      </div>
      <Footer/>
    </>
  );
}
