import "./globals.css";

export const metadata = {
  title: "Desert Premier League",
  description: "Official site of the DPL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#e3d2b8] text-[#130e08]">
        {/* Header with big logo banner, tagline, and stylized nav */}
        <header className="border-b border-[rgba(64,48,30,0.28)] bg-[#e9dcc2]/95 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col items-center gap-3 sm:gap-4">
            {/* Logo banner – doubled size */}
            <a
              href="/"
              className="inline-flex items-center justify-center"
            >
              <img
                src="/dpl-logo.png"
                alt="Desert Premier League logo"
                className="h-16 sm:h-20 md:h-24 w-auto drop-shadow-[0_6px_18px_rgba(0,0,0,0.25)]"
              />
            </a>

            {/* Tagline centered under logo */}
            <p className="text-xs sm:text-sm text-[#5b4630] tracking-wide uppercase">
              Arizona&apos;s premier fantasy football league
            </p>

            {/* Nav links – pill-style buttons so they look clearly clickable */}
            <nav className="mt-1 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a
                href="/tools/playoff-machine"
                className="rounded-full border border-[rgba(92,63,32,0.45)] bg-[rgba(255,255,255,0.42)] px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#3f2916] shadow-sm hover:bg-[#f9edd4] hover:border-[#be7b2f] hover:shadow-[0_3px_10px_rgba(0,0,0,0.20)] transition"
              >
                Playoff Machine
              </a>
              <a
                href="/history"
                className="rounded-full border border-[rgba(92,63,32,0.45)] bg-[rgba(255,255,255,0.42)] px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#3f2916] shadow-sm hover:bg-[#f9edd4] hover:border-[#be7b2f] hover:shadow-[0_3px_10px_rgba(0,0,0,0.20)] transition"
              >
                History
              </a>
              <a
                href="/rules"
                className="rounded-full border border-[rgba(92,63,32,0.45)] bg-[rgba(255,255,255,0.42)] px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#3f2916] shadow-sm hover:bg-[#f9edd4] hover:border-[#be7b2f] hover:shadow-[0_3px_10px_rgba(0,0,0,0.20)] transition"
              >
                Rules
              </a>
            </nav>
          </div>
        </header>

        {/* Page content */}
        <main className="mx-auto max-w-6xl px-4 py-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="mx-auto max-w-6xl px-4 py-12 text-sm text-[#7a6a4b]">
          Desert Premier League © {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
