import Footer from "../../app/components/footer";
import Navbar from "../../app/components/Navbar";
import "../../app/globals.css";

export default function Refund() {
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
            Refund policy
            </h1>
          </div>

          {/* Return, Cancellation, and Refund Policy Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">Our Return, Cancellation, and Refund Policy</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Refunds are reversal transactions wherein complete or partial money is moved back to the customer’s source account (account from which actual payment was made). A refund can only be created for a successful or settled transaction. The use case for a refund arises in the following scenarios:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Customer-initiated refund (returns/cancellation):</strong> Customer has changed their mind about the consumption of the product pre/post order delivery.
              </li>
              <li>
                <strong>Merchant-initiated refund:</strong> Refund can be initiated by the merchant in the following scenarios:
                <ul className="list-disc pl-6 space-y-2">
                  <li>Product/service is out of stock.</li>
                  <li>Merchant works on a prepaid model where the initial amount was higher than the final billed amount (prepaid service model).</li>
                  <li>Mismatch in transaction status between payment gateways (e.g., Paytm, Razorpay, PayU, PayuMoney) and merchant systems.</li>
                </ul>
              </li>
            </ul>
            <p className="text-gray-700 text-lg leading-relaxed">
              Refund requests typically take 7-14 business days to reflect in the customer’s account, depending on the bank used for payment. If the customer spent 30% of the credit but wants back the remaining 70%, we will refund that 70% amount within 2 to 3 working days for direct account transfers. Payments made using payment gateways may take 7 to 160 working days.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              For example, if a customer buys 1 Lakh SMS Credit for ₹14,160 including 18% GST (₹2,160 for GST), the refund will be processed from ₹12,000. In case of a company-side mistake, we will refund 100%. If the mistake is on the customer’s side, 20% of the net payment will be deducted. Note that GST amounts are non-refundable as they are filed for next months input.
            </p>
          </div>

          {/* Footer Section */}

        </div>
      </div>
      <Footer />
    </>
  );
}
