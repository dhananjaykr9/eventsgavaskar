import React from "react";

const menu = [
  { id: "m_01", name: "Paneer Tikka", tags: ["veg", "spicy"], status: "AVAILABLE" },
  { id: "m_02", name: "Hara Bhara Kebab", tags: ["veg"], status: "REFILLING" },
  { id: "m_03", name: "Chicken Malai Tikka", tags: ["spicy"], status: "FINISHED" },
];

const tagIcons: Record<string, string> = {
  veg: "🥬",
  spicy: "🌶️",
  jain: "🧄🚫",
  nuts: "🥜",
};

export default function DigitalMenuCard() {
  return (
    <section className="w-full max-w-xl mx-auto my-8 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-heading text-primary mb-4">Digital Menu Card</h2>
      <ul className="divide-y divide-gray-200">
        {menu.map((item) => (
          <li key={item.id} className="flex items-center justify-between py-3">
            <div>
              <span className="font-medium text-lg mr-2">{item.name}</span>
              {item.tags.map((tag) => (
                <span key={tag} title={tag} className="ml-1 text-xl align-middle">{tagIcons[tag]}</span>
              ))}
            </div>
            <span className={`text-xs font-bold px-2 py-1 rounded-full 
              ${item.status === "AVAILABLE" ? "bg-green-100 text-green-700" : ""}
              ${item.status === "REFILLING" ? "bg-yellow-100 text-yellow-700" : ""}
              ${item.status === "FINISHED" ? "bg-gray-200 text-gray-500 line-through" : ""}
            `}>
              {item.status === "AVAILABLE" && "Available"}
              {item.status === "REFILLING" && "Refilling"}
              {item.status === "FINISHED" && "Sold Out"}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
