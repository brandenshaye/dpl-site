import "./globals.css";

export const metadata = {
  title: "Desert Premier League",
  description: "Official site of the DPL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#f4e3c3] text-[#1a130a]">
        {/* Header with centered logo banner + nav underneath */}
        <header className="border-b border-[rgba(68,54,32,0.25)] bg-[#f6e8c9]/90 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col items-center gap-4">
            {/* Logo banner */}
            <a
              href="/"
              className="inline-flex items-center justify-center"
            >
              <img
                src="/dpl-logo.png"
                alt="Desert Premier League logo"
                className="h-10 sm:h-12 md:h-14 w-auto"
              />
            </a>

            {/* Nav links */}
            <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-[#3b2a16]">
              <a href="/tools/playoff-machine" className="hover:text-[#7c2d12]">
                Playoff Machine
              </a>
              <a href="/history" className="hover:text-[#7c2d12]">
                History
              </a>
              <a href="/rules" className="hover:text-[#7c2d12]">
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
