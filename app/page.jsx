export default function Home() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-white/10 p-8 bg-slate-800/40">
        <h1 className="text-3xl font-extrabold">Desert Premier League</h1>
        <p className="mt-2 text-slate-300">
          The official home of the DPL: schedules, standings, history, and tools.
        </p>
        <div className="mt-6 flex gap-3">
          <a
            href="/tools/playoff-machine"
            className="inline-flex items-center rounded-lg border border-red-600 bg-red-600 px-4 py-2 font-bold hover:bg-red-500"
          >
            Open Playoff Machine
          </a>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 p-6 bg-slate-800/40">
          <h2 className="font-bold">Latest</h2>
          <p className="mt-2 text-slate-300">News & updates coming soon.</p>
        </div>
        <div className="rounded-2xl border border-white/10 p-6 bg-slate-800/40">
          <h2 className="font-bold">Champions</h2>
          <p className="mt-2 text-slate-300">Add past winners & records here.</p>
        </div>
      </section>
    </div>
  );
}
