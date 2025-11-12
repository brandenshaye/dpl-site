import "./globals.css";

export const metadata = {
  title: "Desert Premier League",
  description: "Official site of the DPL"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-white/10">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex flex-wrap items-center gap-6">
            <a href="/" className="font-extrabold tracking-wide text-xl">DPL</a>
            <a href="/tools/playoff-machine" className="hover:underline">Playoff Machine</a>
            <a href="/history" className="hover:underline">History</a>
            <a href="/rules" className="hover:underline">Rules</a>
          </nav>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
        <footer className="mx-auto max-w-6xl px-4 py-12 text-sm text-slate-400">
          Desert Premier League © {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
