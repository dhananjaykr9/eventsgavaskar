import React from "react";

export default function RitualTimeline() {
  // Placeholder for timeline UI
  return (
    <section className="w-full max-w-xl mx-auto my-8 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-heading text-primary mb-4">Live Muhurta Tracking</h2>
      <div className="flex flex-col gap-4">
        {/* Example Ritual */}
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
          <div>
            <div className="font-semibold">Varmala</div>
            <div className="text-sm text-gray-500">In Progress • Garland exchange ceremony</div>
            <div className="text-xs text-primary font-bold mt-1">Begins in 00:14:20</div>
          </div>
        </div>
        {/* More rituals can be mapped here */}
      </div>
    </section>
  );
}
