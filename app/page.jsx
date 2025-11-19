export default function Home() {
  return (
    <div className="space-y-8">
      {/* MAIN GRID */}
      <section className="grid gap-6 md:grid-cols-2">
        {/* LATEST NEWS / BLURB */}
        <div className="rounded-2xl border border-[rgba(68,54,32,0.22)] bg-[#f0e1c6] p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#7c2d12]">Latest</h2>
          <p className="mt-2 text-sm text-[#4a3620]">
            Season updates, schedule drops, and league announcements will live
            here soon. For now, fire up the Playoff Machine and start stirring
            the pot.
          </p>
        </div>

        {/* PAST CHAMPIONS */}
        <div className="rounded-2xl border border-[rgba(68,54,32,0.22)] bg-[#f0e1c6] p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#7c2d12]">Past Champions</h2>
          <p className="mt-1 text-xs uppercase tracking-wide text-[#8a6b42]">
            Trophy case of the DPL
          </p>

          <div className="mt-4 space-y-2">
            {/* Use ChampionRow for each season */}
            <ChampionRow year="2024" name="Zach L" />
            <ChampionRow year="2023" name="Danny D" />
            <ChampionRow year="2022" name="Louis C" />
            <ChampionRow year="2021" name="Ahmed E" />
            <ChampionRow year="2020" name="Chandler S" />
            <ChampionRow year="2019" name="Chandler S" />
            <ChampionRow year="2018" name="eatrice510" />
            <ChampionRow year="2017" name="Nick C" />
            <ChampionRow year="2016" name="Chad A" />
            <ChampionRow year="2015" name="Branden S" />
            <ChampionRow year="2014" name="Steven61922" />
            <ChampionRow year="2013" name="JaydeYoung55" />
            <ChampionRow year="2012" name="Nick C" />
          </div>
        </div>
      </section>
    </div>
  );
}

/**
 * ChampionRow – desert-themed row similar to the Playoff Machine styling.
 */
function ChampionRow({ year, name }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl bg-[#2a1b13] px-3 py-2 border border-[rgba(0,0,0,0.35)] shadow-[0_4px_12px_rgba(0,0,0,0.35)]">
      {/* Left: season */}
      <div className="flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#facc6b] text-xs font-bold text-[#3b1f0a]">
          🏆
        </div>
        <div className="text-sm font-semibold text-[#fef3c7]">{year}</div>
      </div>

      {/* Right: champion name */}
      <div className="text-sm font-semibold text-[#fde68a]">{name}</div>
    </div>
  );
}
