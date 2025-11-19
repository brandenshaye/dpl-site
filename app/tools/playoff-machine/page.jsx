"use client";

import { useEffect, useState } from "react";

export default function PlayoffMachinePage() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile vs desktop
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(max-width: 768px)");
    const handleChange = () => setIsMobile(mq.matches);
    handleChange();
    mq.addEventListener("change", handleChange);

    return () => mq.removeEventListener("change", handleChange);
  }, []);

  // 🔒 Lock page scrolling so only the embedded app scrolls
  useEffect(() => {
    if (typeof document === "undefined") return;

    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
    };
  }, []);

  const iframeUrl = "https://dpl-playoff-machine.vercel.app";

  // ✅ MOBILE + DESKTOP: same idea — fullscreen iframe, desert bg, page scroll locked
  return (
    <div className="fixed inset-0 w-[100vw] h-[100vh] bg-[#f4e3c3]">
      <iframe
        src={iframeUrl}
        title="DPL Playoff Machine"
        className="w-full h-full border-0"
        style={{ display: "block" }}
      />
    </div>
  );
}
