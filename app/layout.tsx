import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "seams",
  description: "Thoughts and case studies from Drew — designer turning full-stack builder.",
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
    <html lang="en" className={`${geistMono.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[var(--bg)]">
        <header className="border-b border-[var(--border)] px-6 sm:px-10 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <SeamsMark />
            <span className="font-mono text-sm text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
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

function SeamsMark() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Sharp-cornered square border */}
      <rect x="0.5" y="0.5" width="19" height="19" stroke="currentColor" strokeOpacity="0.4" />
      {/* Right-pointing chevron — terminal prompt / send */}
      <polyline
        points="6,6 12,10 6,14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
      />
      <line
        x1="12"
        y1="10"
        x2="15"
        y2="10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}
