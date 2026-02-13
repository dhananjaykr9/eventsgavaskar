import React from "react";

export default function WeddingHero() {
  return (
    <section className="w-full max-w-xl mx-auto mt-4 mb-8 p-6 bg-gradient-to-br from-[#fcfbf7] to-[#f5e9d7] rounded-3xl shadow-lg border-4 border-accent relative overflow-hidden">
      {/* Decorative Motif */}
      <div className="absolute -top-8 -left-8 w-32 h-32 opacity-20 rotate-12 pointer-events-none select-none">
        <img src="/motif-gold.png" alt="Wedding Motif" className="w-full h-full object-contain" />
      </div>
      <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-20 -rotate-12 pointer-events-none select-none">
        <img src="/motif-gold.png" alt="Wedding Motif" className="w-full h-full object-contain" />
      </div>
      {/* Monogram or Logo */}
      <div className="flex flex-col items-center">
        <img src="/wedding-logo.png" alt="Gavaskar Wedding Monogram" className="w-20 h-20 mb-2 drop-shadow-lg" />
        <h1 className="text-4xl font-heading text-primary mb-1 tracking-wide">Gavaskar Wedding</h1>
        <p className="text-lg text-accent font-semibold mb-2">10th December 2026 • Mumbai</p>
        <p className="text-base text-gray-700 italic max-w-md mx-auto">Welcome to your digital wedding companion! Scan, explore, and enjoy a seamless, VIP experience—no app install needed.</p>
      </div>
    </section>
  );
}
