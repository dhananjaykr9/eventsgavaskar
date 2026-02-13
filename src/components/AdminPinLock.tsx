import React, { useState } from "react";

export default function AdminPinLock({ onUnlock }: { onUnlock: () => void }) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === "2026") {
      setError("");
      onUnlock();
    } else {
      setError("Incorrect PIN. Try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-80 flex flex-col items-center">
        <h2 className="text-2xl font-heading text-primary mb-4">Admin Login</h2>
        <input
          type="password"
          inputMode="numeric"
          maxLength={4}
          pattern="[0-9]*"
          className="text-center text-2xl border-b-2 border-primary outline-none mb-4 w-24 tracking-widest"
          value={pin}
          onChange={e => setPin(e.target.value.replace(/\D/g, ""))}
          placeholder="4-digit PIN"
        />
        {error && <div className="text-red-500 mb-2 text-sm">{error}</div>}
        <button type="submit" className="bg-primary text-white px-6 py-2 rounded-full font-bold mt-2">Unlock</button>
      </form>
    </div>
  );
}
