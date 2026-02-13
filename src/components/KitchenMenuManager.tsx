import React, { useState } from "react";

const menu = [
  { id: "m_01", name: "Paneer Tikka", status: "AVAILABLE" },
  { id: "m_02", name: "Hara Bhara Kebab", status: "REFILLING" },
  { id: "m_03", name: "Chicken Malai Tikka", status: "FINISHED" },
];

export default function KitchenMenuManager() {
  const [items, setItems] = useState(menu);

  const handleStatusChange = (id: string, status: string) => {
    setItems(items.map(item => item.id === id ? { ...item, status } : item));
  };

  return (
    <section className="w-full max-w-xl mx-auto my-8 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-heading text-primary mb-4">Kitchen/Menu Manager</h2>
      <ul className="divide-y divide-gray-200">
        {items.map(item => (
          <li key={item.id} className="flex items-center justify-between py-3">
            <span className="font-medium text-lg">{item.name}</span>
            <div className="flex gap-2">
              <button
                className={`px-3 py-1 rounded-full text-xs font-bold ${item.status === "AVAILABLE" ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"}`}
                onClick={() => handleStatusChange(item.id, "AVAILABLE")}
              >
                Available
              </button>
              <button
                className={`px-3 py-1 rounded-full text-xs font-bold ${item.status === "REFILLING" ? "bg-yellow-400 text-white" : "bg-gray-200 text-gray-700"}`}
                onClick={() => handleStatusChange(item.id, "REFILLING")}
              >
                Refilling
              </button>
              <button
                className={`px-3 py-1 rounded-full text-xs font-bold ${item.status === "FINISHED" ? "bg-red-400 text-white" : "bg-gray-200 text-gray-700"}`}
                onClick={() => handleStatusChange(item.id, "FINISHED")}
              >
                Finished
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
