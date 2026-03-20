"use client";
import { useState } from "react";

function HideTextPage() {
  const [input, setInput] = useState("");
  const [hide, setHide] = useState(false);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-slate-900 text-white p-4">
      
      <h1 className="text-3xl font-bold">การแสดง/ซ่อนข้อความ</h1>

      {/* Input */}
      <input
        type={hide ? "password" : "text"}  // 👈 จุดสำคัญ
        placeholder="พิมพ์ข้อความ..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="px-4 py-2 rounded-lg text-white bg-slate-700 w-64"
      />

      {/* Button */}
      <button
        onClick={() => setHide(!hide)}
        className="px-4 py-2 bg-purple-500 rounded-lg"
      >
        {hide ? "แสดงข้อความ" : "ซ่อนข้อความ"}
      </button>

    </main>
  );
}

export default HideTextPage;