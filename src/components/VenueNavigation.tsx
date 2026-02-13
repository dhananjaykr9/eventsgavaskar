import React from "react";

export default function VenueNavigation() {
  return (
    <section className="w-full max-w-xl mx-auto my-8 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-heading text-primary mb-4">Venue Navigation</h2>
      <div className="mb-4">
        <a
          href="https://maps.google.com/?q=Gavaskar+Wedding+Venue"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-white px-4 py-2 rounded-full font-bold hover:bg-blue-800 transition"
        >
          Open in Google Maps
        </a>
      </div>
      <div className="border rounded-lg overflow-hidden">
        {/* Replace with actual map image */}
        <img
          src="/venue-map-placeholder.jpg"
          alt="Indoor Venue Layout"
          className="w-full h-64 object-cover"
        />
      </div>
    </section>
  );
}
