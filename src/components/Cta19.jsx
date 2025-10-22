"use client";

import React, { useState } from "react";

export function Cta19() {
  const [donationType, setDonationType] = useState("monthly");
  const [currency, setCurrency] = useState("USD");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showLocalPayments, setShowLocalPayments] = useState(false);
  const [selectedLocalMethod, setSelectedLocalMethod] = useState("ecocash");
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your ${donationType} donation in ${currency}!`);
  };

  const paymentLogos = [
    { id: "applepay", label: "Apple Pay", img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { id: "googlepay", label: "Google Pay", img: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Google_Pay_Logo.svg" },
    { id: "paypal", label: "PayPal", img: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" },
    { id: "card", label: "Card", img: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.svg" },
    { id: "mastercard", label: "Mastercard", img: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" },
  ];

  const localPaymentMethods = {
    ecocash: {
      title: "Ecocash",
      instructions: [
        "Dial *151# on your mobile phone",
        "Select 'Pay Bill' option",
        "Enter Business Number: 123456",
        "Use Reference: BHASODONATION",
        "Enter your donation amount",
        "Confirm transaction with your PIN"
      ]
    },
    mukuru: {
      title: "Mukuru",
      instructions: [
        "Visit any Mukuru agent location",
        "Provide recipient name: BHASO Donations",
        "Specify the amount to send",
        "Use reference code: DONATE2024",
        "Complete payment with the agent",
        "Keep your receipt as proof of payment"
      ]
    },
    banktransfer: {
      title: "Bank Transfer",
      instructions: [
        "Bank Name: CBZ Bank",
        "Account Name: BHASO Donations",
        "Account Number: 4567890123",
        "Branch: Harare Main (12345)",
        "Swift Code: COBZZWHA",
        "Reference: DONATION-" + (formData.name || "YOURNAME")
      ]
    }
  };

  return (
    <section className="flex flex-col md:flex-row min-h-screen">
      {/* LEFT SIDE - Donation Info */}
      <div className="md:w-2/5 w-full bg-green-900 text-white flex flex-col justify-center p-10">
        <h2 className="text-3xl font-bold mb-4">Your Support Powers Our Strategic Pillars</h2>
        <p className="mb-4 leading-relaxed text-lg">
          Every donation helps us advance our 2023-2027 strategic goals in:
        </p>
        
        <div className="mb-6">
          <h3 className="font-semibold text-xl mb-2">Health & Wellness</h3>
          <p className="mb-4 leading-relaxed">
            Supporting HIV prevention, treatment and care programs that reach vulnerable communities across Zimbabwe.
          </p>
          
          <h3 className="font-semibold text-xl mb-2">Climate Justice</h3>
          <p className="mb-4 leading-relaxed">
            Funding sustainable agriculture and resilience programs to combat climate change impacts.
          </p>
          
          <h3 className="font-semibold text-xl mb-2">Gender Equality</h3>
          <p className="mb-4 leading-relaxed">
            Empowering women and girls through education, economic opportunities and rights advocacy.
          </p>
          
          <h3 className="font-semibold text-xl mb-2">Community Systems</h3>
          <p className="leading-relaxed">
            Strengthening local health systems and community-led responses to health challenges.
          </p>
        </div>
        
        <p className="font-semibold mt-6">
          Together, we're building healthier, more resilient communities in Zimbabwe.
        </p>
      </div>

      {/* RIGHT SIDE - Donation Form */}
      <div className="flex-1 bg-white p-10 flex flex-col justify-center">
        {!showLocalPayments ? (
          <div className="max-w-lg mx-auto">
            <h1 className="text-3xl font-bold mb-2">
              Support BHASO's <span className="text-green-700">Strategic Mission</span>
            </h1>

            {/* Step 1 */}
            <p className="uppercase text-xs tracking-wide text-gray-500 mt-6 mb-2">
              Step 1 – Choose frequency and amount
            </p>
            <div className="flex space-x-4 mb-4">
              <button
                onClick={() => setDonationType("monthly")}
                className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  donationType === "monthly"
                    ? "bg-green-100 text-green-900 border border-green-900"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                Monthly Support
              </button>
              <button
                onClick={() => setDonationType("one-time")}
                className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  donationType === "one-time"
                    ? "bg-green-100 text-green-900 border border-green-900"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                One-time Donation
              </button>
            </div>

            {/* Amount + Currency */}
            <div className="flex items-center border border-gray-300 rounded-lg p-3 w-full max-w-xs mb-6">
              <span className="mr-2 text-gray-500">$</span>
              <input
                type="number"
                placeholder="100.00"
                className="flex-1 outline-none"
              />
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="ml-2 outline-none bg-transparent"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="ZWL">ZWL</option>
              </select>
            </div>

            {/* Step 2 */}
            <p className="uppercase text-xs tracking-wide text-gray-500 mt-6 mb-2">
              Step 2 – Enter your details
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="name"
                  placeholder="First Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  name="surname"
                  placeholder="Surname"
                  value={formData.surname}
                  onChange={handleInputChange}
                  required
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />

              {/* Payment Method Logos */}
              <div className="flex flex-wrap gap-4 mt-4">
                {paymentLogos.map((logo) => (
                  <button
                    type="button"
                    key={logo.id}
                    onClick={() => setPaymentMethod(logo.id)}
                    className={`p-3 border rounded-lg flex items-center justify-center w-20 h-16 ${
                      paymentMethod === logo.id
                        ? "border-green-900"
                        : "border-gray-300"
                    }`}
                  >
                    <img
                      src={logo.img}
                      alt={logo.label}
                      className="max-h-8 object-contain"
                    />
                  </button>
                ))}
              </div>

              {/* Card details only if card is selected */}
              {paymentMethod === "card" || paymentMethod === "mastercard" ? (
                <>
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  />
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      name="expiry"
                      placeholder="MM/YY"
                      value={formData.expiry}
                      onChange={handleInputChange}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg"
                    />
                    <input
                      type="text"
                      name="cvc"
                      placeholder="CVC"
                      value={formData.cvc}
                      onChange={handleInputChange}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                </>
              ) : null}

              <button
                type="submit"
                className="w-full bg-green-900 text-white py-4 rounded-lg font-semibold hover:bg-green-800"
              >
                {donationType === "monthly"
                  ? "Become a Monthly Supporter"
                  : "Make a Donation"}
              </button>
            </form>

            {/* Local payments link */}
            <button
              onClick={() => setShowLocalPayments(true)}
              className="mt-4 text-green-900 font-semibold underline hover:text-green-700"
            >
              View Zimbabwean payment options
            </button>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-8">
            {/* Local payment methods list */}
            <div className="md:w-1/3">
              <h2 className="text-2xl font-bold mb-6 text-green-900">Local Payment Methods</h2>
              <div className="space-y-4">
                {Object.entries(localPaymentMethods).map(([key, method]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedLocalMethod(key)}
                    className={`w-full text-left p-4 rounded-lg border ${
                      selectedLocalMethod === key
                        ? "border-green-900 bg-green-50"
                        : "border-gray-300 hover:border-green-700"
                    }`}
                  >
                    <h3 className="font-semibold text-lg">{method.title}</h3>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setShowLocalPayments(false)}
                className="mt-6 w-full bg-green-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-800"
              >
                Back to International Payments
              </button>
            </div>

            {/* Selected payment method details */}
            <div className="md:w-2/3">
              {selectedLocalMethod && (
                <>
                  <h2 className="text-2xl font-bold mb-4 text-green-900">
                    {localPaymentMethods[selectedLocalMethod].title} Instructions
                  </h2>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                      {localPaymentMethods[selectedLocalMethod].instructions.map((step, index) => (
                        <li key={index} className="mb-2">{step}</li>
                      ))}
                    </ol>
                    {selectedLocalMethod === "banktransfer" && (
                      <p className="mt-4 font-semibold">
                        Please email your deposit slip to donations@bhaso.org for receipt
                      </p>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}