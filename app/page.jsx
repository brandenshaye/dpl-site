export default function Home() {
  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="rounded-2xl border border-[rgba(68,54,32,0.22)] bg-[#f6e8ce] p-8 shadow-md">
        <h1 className="text-4xl font-extrabold text-[#7c2d12] tracking-tight">
          Desert Premier League
        </h1>
        <p className="mt-3 text-lg text-[#4a3620] max-w-xl">
          Arizona’s premier fantasy football league — rivalries, chaos, and
          eternal bragging rights in the desert.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/tools/playoff-machine"
            className="inline-flex items-center rounded-xl bg-amber-500 px-6 py-3 text-sm font-bold text-slate-900 shadow hover:bg-amber-400"
          >
            Open Playoff Machine
          </a>

          <a
            href="/history"
            className="inline-flex items-center rounded-xl border border-[rgba(124,45,18,0.3)] px-5 py-3 text-sm font-semibold text-[#7c2d12] hover:bg-[#f3e0bd]"
          >
            View League History
          </a>
        </div>
      </section>

      {/* MAIN GRID */}
      <section className="grid gap-6 md:grid-cols-2">
        {/* LATEST NEWS / BLURB */}
        <div className="rounded-2xl border border-[rgba(68,54,32,0.22)] bg-[#f6e8ce] p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#7c2d12]">Latest</h2>
          <p className="mt-2 text-sm text-[#4a3620]">
            Season updates, schedule drops, and league announcements will live
            here soon. For now, fire up the Playoff Machine and start stirring
            the pot.
          </p>
        </div>

        {/* PAST CHAMPIONS */}
        <div className="rounded-2xl border border-[rgba(68,54,32,0.22)] bg-[#f6e8ce] p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#7c2d12]">Past Champions</h2>
          <p className="mt-1 text-xs uppercase tracking-wide text-[#8a6b42]">
            The banner rack of the DPL
          </p>

          <div className="mt-4 space-y-3">
            {/* Champ row template – duplicate/edit as needed */}
            <ChampionRow
              year="2024"
              team="Best In The West"
              owner="@BestOfTheWest11"
            />
            <ChampionRow
              year="2023"
              team="Le Commish"
              owner="@BrandenShaye"
            />
            <ChampionRow
              year="2022"
              team="Big Bum Theory"
              owner="@8irishinches"
            />
            <ChampionRow
              year="2021"
              team="Dak of All Trades"
              owner="@iainheffington"
            />
            {/* add more rows as your history fills out */}
          </div>
        </div>
      </section>
    </div>
  );
}

/**
 * Small presentational component for a "profile chip" style champion row.
 * (Local to this file – no separate import needed.)
 */
function ChampionRow({ year, team, owner }) {
  // Use the first two letters of the team as the avatar initials
  const initials = team
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex items-center justify-between gap-3 rounded-xl bg-[#f3e0bd] px-3 py-2 border border-[rgba(68,54,32,0.18)]">
      <div className="flex items-center gap-3">
        {/* Avatar chip */}
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7c2d12] text-xs font-bold text-[#fef3c7]">
          {initials}
        </div>

        <div className="leading-tight">
          <div className="text-sm font-semibold text-[#3b2a18]">{team}</div>
          <div className="text-xs text-[#7b5b33]">{owner}</div>
        </div>
      </div>

      <div className="text-right text-xs font-semibold text-[#7b5b33]">
        <div className="text-[0.65rem] uppercase tracking-wide text-[#a07a47]">
          Champion
        </div>
        <div>{year}</div>
      </div>
    </div>
  );
}
