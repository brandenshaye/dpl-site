import "./globals.css";

export const metadata = {
  title: "Desert Premier League",
  description: "Official site of the DPL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#f4e3c3] text-[#1a130a] font-sans">

        {/* Header */}
        <header className="border-b border-[rgba(68,54,32,0.25)] bg-[#f6e8c9]/90 backdrop-blur">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex flex-wrap items-center gap-6">

            <a href="/" className="font-extrabold tracking-wide text-xl text-[#7c2d12]">
              DPL
            </a>

            <a href="/tools/playoff-machine"
               className="hover:underline text-[#3b2a16]">
              Playoff Machine
            </a>

            <a href="/history"
               className="hover:underline text-[#3b2a16]">
              History
            </a>

            <a href="/rules"
               className="hover:underline text-[#3b2a16]">
              Rules
            </a>

          </nav>
        </header>

        {/* Main content */}
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
