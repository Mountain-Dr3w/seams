import type { Metadata } from "next";
import { Lora } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "seams",
  description: "The space between designing it and building it.",
  openGraph: {
    siteName: "seams",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lora.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[var(--bg)]">
        <header className="border-b border-[var(--border)] px-6 sm:px-10 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <RabbitMark />
            <span className="font-serif text-sm text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
              seams
            </span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="https://velveteen.sh"
              className="font-mono text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              velveteen.sh ↗
            </Link>
          </nav>
        </header>
        <main className="flex-1 px-6 sm:px-10 py-12 max-w-3xl mx-auto w-full">
          {children}
        </main>
        <footer className="border-t border-[var(--border)] px-6 sm:px-10 py-6">
          <p className="font-mono text-xs text-[var(--text-muted)]">
            seams — by{" "}
            <a
              href="https://linkedin.com/in/drewux/"
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Drew
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}

function RabbitMark() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="7" y="2" width="5" height="13" fill="currentColor" />
      <rect x="20" y="2" width="5" height="13" fill="currentColor" />
      <rect x="3" y="13" width="26" height="17" fill="currentColor" />
      <rect x="9" y="19" width="4" height="4" fill="var(--bg)" />
      <rect x="19" y="19" width="4" height="4" fill="var(--bg)" />
    </svg>
  );
}
