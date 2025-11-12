export const metadata = {
  title: "Playoff Machine | Desert Premier League",
  description: "Simulate the DPL playoff picture and share scenarios."
};

export default function PlayoffMachinePage() {
  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden">
      <div className="px-4 py-3 border-b border-white/10 bg-slate-800/60">
        <h1 className="text-xl font-bold">Playoff Machine</h1>
        <p className="text-slate-300 text-sm">
          Pick winners to project standings and the playoff bracket.
        </p>
      </div>
      <iframe
        src="https://dplplayoffmachine.vercel.app"
        title="DPL Playoff Machine"
        style={{ width: "100%", height: "85vh", border: 0, display: "block" }}
      />
    </div>
  );
}
