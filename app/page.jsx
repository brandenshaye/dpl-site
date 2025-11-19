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

  // MOBILE: true full-screen experience
  if (isMobile) {
    return (
      <div className="fixed inset-0 m-0 p-0 w-[100vw] max-w-[100vw] h-[100dvh] overflow-hidden bg-slate-950">
        <iframe
          src={iframeUrl}
          title="DPL Playoff Machine"
          className="w-[100vw] max-w-[100vw] h-[100dvh] border-0"
          style={{ display: "block" }}
        />
      </div>
    );
  }

  // DESKTOP / TABLET: framed view inside the site
  return (
    <div className="mx-auto max-w-6xl px-4 py-6 space-y-4">
      <header className="flex items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold">DPL Playoff Machine</h1>
          <p className="mt-1 text-sm text-slate-300">
            Simulate the rest of the season and watch the playoff picture update
            in real time.
          </p>
        </div>
        <a
          href={iframeUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center rounded-full border border-red-600 bg-red-600 px-4 py-2 text-sm font-bold hover:bg-red-500"
        >
          Open in New Tab
        </a>
      </header>

      <div className="rounded-2xl border border-white/10 bg-slate-800/40 shadow-xl overflow-hidden">
        <iframe
          src={iframeUrl}
          title="DPL Playoff Machine"
          className="w-full h-[80dvh] border-0"
        />
      </div>
    </div>
  );
}
