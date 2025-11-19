"use client";

import { useEffect, useState } from "react";

export default function PlayoffMachinePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 768px)");
    const handleChange = () => setIsMobile(mq.matches);
    handleChange();
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  const iframeUrl = "https://dpl-playoff-machine.vercel.app";

  // MOBILE: true fullscreen experience with desert background
  if (isMobile) {
    return (
      <div className="fixed inset-0 m-0 p-0 w-[100vw] max-w-[100vw] h-[100dvh] overflow-hidden bg-[#f4e3c3]">
        <iframe
          src={iframeUrl}
          title="DPL Playoff Machine"
          className="w-[100vw] max-w-[100vw] h-[100dvh] border-0"
          style={{ display: "block" }}
        />
      </div>
    );
  }

  // DESKTOP / TABLET: embedded on the desert-themed page, whole page scrolls
  return (
    <div className="mx-auto max-w-6xl px-4 py-6 space-y-4">
      <header className="flex items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold text-[#7c2d12]">
            DPL Playoff Machine
          </h1>
          <p className="mt-1 text-sm text-[#4a3620]">
            Simulate the rest of the season and watch the playoff picture update
            in real time.
          </p>
        </div>
        <a
          href={iframeUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center rounded-full border border-amber-500 bg-amber-500 px-4 py-2 text-sm font-bold text-slate-900 hover:bg-amber-400"
        >
          Open in New Tab
        </a>
      </header>

      <div className="rounded-2xl border border-[rgba(68,54,32,0.28)] bg-[#22221c] shadow-xl overflow-hidden">
        <iframe
          src={iframeUrl}
          title="DPL Playoff Machine"
          className="w-full min-h-[1100px] border-0"
        />
      </div>
    </div>
  );
}
