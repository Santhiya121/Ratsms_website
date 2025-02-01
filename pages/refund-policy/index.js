import Link from "next/link";
import Footer from "../../app/components/footer";
import Navbar from "../../app/components/Navbar";
import "../../app/globals.css";
import Head from "next/head";
import WhatsAppIcon from "../../app/components/whatsappIcon";
import Phone from "../../app/components/phone";

export default function Refund() {
  return (
    <>
     <Head>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Rat SMS is a bulk SMS provider with free SMS API India. We are Direct TeleCom operator Connectivity. Try our abundant smart SMS with 100% delivery & free DLT registration."
        />
        <meta
          name="keyword"
          content="dlt registration, bulk sms service, sms blaster, sms gateway, bulk sms provider, otp sms, sms api, bulk sms services in india, bulk sms gateway, bulk sms india, free sms api, sms api india, sms provider, bulk sms api, bulk sms provider in india, free sms api india, bulk sms reseller"
        />
        <link rel="canonical" href="https://ratsms.com/refund-policy" />
        <meta property="og:site_name" content="RATSMS" />
        <meta property="og:url" content="https://ratsms.com/refund-policy" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RAT SMS | Return, Cancellation, and Refund Policy" />
        <meta
          name="og:image"
          content="https://ratsms.com/images/assets/ratsms-icon.png"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#655C97" />
        <meta name="msapplication-navbutton-color" content="#655C97" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#655C97" />
        <title>RAT SMS | Return, Cancellation, and Refund Policy</title>
      </Head>
      <div
              style={{
                backgroundColor: "black",
                zIndex: 100,
                position: "relative",
                height: "4rem", // Fixed height for testing
                width: "100%",
              }}
            >
              <Navbar />
            </div>
            <WhatsAppIcon/>
            <Phone/>
            <div className="bg-gray-100 py-12">
  <div className=" space-y-12 px-6 sm:px-12 lg:px-20">
    {/* Header Section */}
    <div className="sm:text-center text-left">
      <h1 className="text-3xl sm:text-5xl font-roboto text-left sm:text-center text-black mb-4 tracking-widest">
        Refund Policy
      </h1>
      <p className="text-lg text-gray-600">
        Learn about our return, cancellation, and refund policy to ensure a smooth experience.
      </p>
    </div>

    {/* Refund Policy Section */}
    <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
      <div className="flex items-center mb-4">
        <i className="fas fa-undo-alt text-black text-2xl mr-4"></i>
        <h2 className="text-2xl sm:text-3xl font-semibold text-black">
          Our Return, Cancellation, and Refund Policy
        </h2>
      </div>
      <p className="text-black text-lg leading-relaxed">
        Refunds are reversal transactions wherein complete or partial money is moved back to the customer’s source account (account from which actual payment was made). A refund can only be created for a successful or settled transaction. The use case for a refund arises in the following scenarios:
      </p>
      <ul className="list-disc pl-6 space-y-4 text-black">
        <li>
          <strong>Customer-initiated refund (returns/cancellation):</strong> 
          Customer has changed their mind about the consumption of the product pre/post order delivery.
        </li>
        <li>
          <strong>Merchant-initiated refund:</strong> Refund can be initiated by the merchant in the following scenarios:
          <ul className="list-disc pl-8 space-y-2">
            <li>Product/service is out of stock.</li>
            <li>Merchant works on a prepaid model where the initial amount was higher than the final billed amount (prepaid service model).</li>
            <li>Mismatch in transaction status between payment gateways (e.g., Paytm, Razorpay, PayU) and merchant systems.</li>
          </ul>
        </li>
      </ul>
      <p className="text-black sm:text-base text-lg leading-relaxed">
        Refund requests typically take 7-14 business days to reflect in the customer’s account, depending on the bank used for payment. If the customer spent 30% of the credit but wants back the remaining 70%, we will refund that 70% amount within 2 to 3 working days for direct account transfers. Payments made using payment gateways may take 7 to 160 working days.
      </p>
      <p className="text-black sm:text-base text-lg leading-relaxed">
        For example, if a customer buys 1 Lakh SMS Credit for ₹14,160 including 18% GST (₹2,160 for GST), the refund will be processed from ₹12,000. In case of a company-side mistake, we will refund 100%. If the mistake is on the customer’s side, 20% of the net payment will be deducted. Note that GST amounts are non-refundable as they are filed for the next month’s input.
      </p>
    </div>

    {/* Refund Timeline Section */}
    <div className="bg-gray-200 p-8 rounded-lg shadow-lg space-y-6">
      <div className="flex items-center mb-4">
        <i className="fas fa-clock text-black text-3xl mr-4"></i>
        <h3 className="text-2xl sm:text-3xl font-semibold text-black">
          Refund Timeline
        </h3>
      </div>
      <p className="text-gray-900 text-xl  leading-relaxed">
        Refund timelines depend on the payment method used:
      </p>
      <ul className="list-disc pl-6 space-y-4 text-lg text-black">
        <li>
          <strong>Bank Transfers:</strong> Refunds are processed within 2-3 business days.
        </li>
        <li>
          <strong>Payment Gateways:</strong> Refunds may take 7-14 working days or up to 160 days, depending on the payment processor.
        </li>
      </ul>
    </div>

    {/* Important Note Section */}
    <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
      <div className="flex items-center mb-4">
        <i className="fas fa-exclamation-circle text-black text-3xl mr-4"></i>
        <h3 className="text-2xl sm:text-3xl font-semibold text-black">
          Important Notes
        </h3>
      </div>
      <ul className="list-disc pl-6 space-y-4 text-lg  text-gray-900">
        <li>
          <strong>Non-refundable GST:</strong> GST amounts are non-refundable as they are filed for the next month’s input.
        </li>
        <li>
          <strong>Customer-Side Error:</strong> In case of customer-side mistakes, a 20% deduction will be applied to the net payment.
        </li>
        <li>
          <strong>Company-Side Error:</strong> If the error is on our end, a 100% refund will be provided.
        </li>
      </ul>
    </div>

    {/* Contact Section */}
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg sm:text-center text-left space-y-4">
      <h3 className="text-xl sm:text-3xl font-semibold text-black">
        Have Questions About Refunds?
      </h3>
      <p className="text-gray-700 text-base pb-4">
        If you have any questions about refunds or cancellations, feel free to reach out to our team for assistance.
      </p>
      <Link href="/cantact">
      <button className="bg-black text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition-all duration-300">
        Contact Us
      </button>
      </Link>
    </div>
  </div>
</div>

      <Footer />
    </>
  );
}
