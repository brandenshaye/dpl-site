const MACHINE_URL = "https://dplplayoffmachine.vercel.app"; // <-- change if your URL is different

export const metadata = {
  title: "Playoff Machine | Desert Premier League",
  description: "Simulate the DPL playoff picture and share scenarios.",
};

export default function PlayoffMachinePage() {
  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden">
      <div className="px-4 py-3 border-b border-white/10 bg-slate-800/60 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">Playoff Machine</h1>
          <p className="text-slate-300 text-sm">
            Pick winners to project standings and the playoff bracket.
          </p>
        </div>
        <a
          href={MACHINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-white/15 px-3 py-1.5 text-sm hover:bg-white/5 hidden sm:inline-block"
        >
          Open in new tab
        </a>
      </div>

      {/* Mobile-only fullscreen button */}
      <div className="sm:hidden px-3 py-2 border-b border-white/10 bg-slate-900/60">
        <a
          href={MACHINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-lg border border-white/15 px-4 py-3 font-semibold"
        >
          Open Fullscreen (Best on Mobile)
        </a>
      </div>

      <iframe
        src={MACHINE_URL}
        title="DPL Playoff Machine"
        loading="eager"
        allow="clipboard-read; clipboard-write; fullscreen"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ width: "100%", height: "85dvh", border: 0, display: "block" }}
      />
    </div>
  );
}
