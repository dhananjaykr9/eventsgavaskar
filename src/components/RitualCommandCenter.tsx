import React, { useState } from "react";

const rituals = [
  { id: "rit_01", title: "Baraat", status: "COMPLETED" },
  { id: "rit_02", title: "Welcome Aarti", status: "COMPLETED" },
  { id: "rit_03", title: "Varmala", status: "LIVE" },
  { id: "rit_04", title: "Phere", status: "UPCOMING" },
];

export default function RitualCommandCenter() {
  const [current, setCurrent] = useState("rit_03");
  const [toast, setToast] = useState("");

  const handleNextPhase = () => {
    const idx = rituals.findIndex(r => r.id === current);
    if (idx < rituals.length - 1) {
      setCurrent(rituals[idx + 1].id);
    }
  };

  const handleBroadcast = () => {
    setToast("Dinner is now served in the Main Hall");
    setTimeout(() => setToast(""), 3000);
  };

  return (
    <section className="w-full max-w-xl mx-auto my-8 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-heading text-primary mb-4">Command Center</h2>
      <div className="mb-4">
        <div className="flex flex-col gap-2">
          {rituals.map(r => (
            <div key={r.id} className={`flex items-center gap-2 ${r.id === current ? "font-bold text-primary" : "text-gray-500"}`}>
              <span className={`w-2 h-2 rounded-full ${r.status === "LIVE" ? "bg-green-500 animate-pulse" : r.status === "COMPLETED" ? "bg-gray-400" : "bg-yellow-400"}`}></span>
              {r.title}
              {r.id === current && <span className="ml-2 text-xs bg-primary text-white px-2 py-0.5 rounded-full">Live</span>}
            </div>
          ))}
        </div>
      </div>
      <button onClick={handleNextPhase} className="bg-primary text-white px-6 py-2 rounded-full font-bold mr-4">Next Phase</button>
      <button onClick={handleBroadcast} className="bg-accent text-white px-6 py-2 rounded-full font-bold">Broadcast Toast</button>
      {toast && <div className="mt-4 text-center text-accent font-semibold">{toast}</div>}
    </section>
  );
}
