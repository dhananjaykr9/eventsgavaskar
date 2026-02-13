import React from "react";

export default function QRShagun() {
  return (
    <section className="w-full max-w-xl mx-auto my-8 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-heading text-primary mb-4">QR Shagun (Digital Gifting)</h2>
      <p className="mb-4 text-gray-700">Send your blessings instantly via UPI. No cash needed!</p>
      <button className="bg-accent text-white font-bold py-2 px-6 rounded-full shadow hover:bg-yellow-600 transition">Send Shagun</button>
      {/* Modal/flow for UPI deep link will be implemented in logic phase */}
    </section>
  );
}
