export default function LogoPreview() {
  return (
    <div className="space-y-16">
      <h1 className="font-serif text-xl text-[var(--text-primary)]">Logo options</h1>

      {/* Option A */}
      <div className="space-y-4">
        <p className="font-mono text-xs text-[var(--text-muted)]">A — cross-stitch seam</p>
        <div className="flex items-center gap-6">
          <OptionA size={20} />
          <OptionA size={40} />
          <OptionA size={80} />
          <span className="font-serif text-sm text-[var(--text-primary)] ml-2">seams</span>
        </div>
        <p className="font-serif text-xs text-[var(--text-secondary)]">
          Vertical seam line with cross-stitches holding two sides together.
        </p>
      </div>

      {/* Option B */}
      <div className="space-y-4">
        <p className="font-mono text-xs text-[var(--text-muted)]">B — backstitch line</p>
        <div className="flex items-center gap-6">
          <OptionB size={20} />
          <OptionB size={40} />
          <OptionB size={80} />
          <span className="font-serif text-sm text-[var(--text-primary)] ml-2">seams</span>
        </div>
        <p className="font-serif text-xs text-[var(--text-secondary)]">
          A single thread weaving in and out — the classic running stitch seen from the side.
        </p>
      </div>

      {/* Option C */}
      <div className="space-y-4">
        <p className="font-mono text-xs text-[var(--text-muted)]">C — sewn fold</p>
        <div className="flex items-center gap-6">
          <OptionC size={20} />
          <OptionC size={40} />
          <OptionC size={80} />
          <span className="font-serif text-sm text-[var(--text-primary)] ml-2">seams</span>
        </div>
        <p className="font-serif text-xs text-[var(--text-secondary)]">
          Two overlapping edges with a neat ladder stitch. Minimal, architectural.
        </p>
      </div>

      {/* Option D */}
      <div className="space-y-4">
        <p className="font-mono text-xs text-[var(--text-muted)]">D — needle pulling thread</p>
        <div className="flex items-center gap-6">
          <OptionD size={20} />
          <OptionD size={40} />
          <OptionD size={80} />
          <span className="font-serif text-sm text-[var(--text-primary)] ml-2">seams</span>
        </div>
        <p className="font-serif text-xs text-[var(--text-secondary)]">
          Needle mid-stitch with trailing thread. Action, craft in progress.
        </p>
      </div>
    </div>
  );
}

/* A — Vertical seam with cross-stitches */
function OptionA({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Center seam line */}
      <line x1="10" y1="1" x2="10" y2="19" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.5" />
      {/* Cross-stitches: each is two lines forming an X across the seam */}
      <line x1="7" y1="3" x2="13" y2="5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="13" y1="3" x2="7" y2="5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />

      <line x1="7" y1="8" x2="13" y2="10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="13" y1="8" x2="7" y2="10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />

      <line x1="7" y1="13" x2="13" y2="15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="13" y1="13" x2="7" y2="15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

/* B — Running stitch: thread weaving in and out along a diagonal */
function OptionB({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Visible stitches (on top of fabric) */}
      <line x1="1" y1="17" x2="5" y2="13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="8" y1="10" x2="12" y2="6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="15" y1="3" x2="19" y2="-1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      {/* Hidden stitches (under fabric — dashed/faint) */}
      <line x1="5" y1="13" x2="8" y2="10" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="12" y1="6" x2="15" y2="3" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  );
}

/* C — Two overlapping edges with ladder stitch */
function OptionC({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Left edge */}
      <line x1="8" y1="1" x2="8" y2="19" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.75" />
      {/* Right edge */}
      <line x1="12" y1="1" x2="12" y2="19" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.75" />
      {/* Ladder stitches connecting the two edges */}
      <line x1="8" y1="3.5" x2="12" y2="3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="8" y1="7.5" x2="12" y2="7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="8" y1="11.5" x2="12" y2="11.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="8" y1="15.5" x2="12" y2="15.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

/* D — Needle mid-stitch with trailing thread */
function OptionD({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Thread — gentle curve trailing behind */}
      <path
        d="M 1,18 Q 4,14 5,13 L 8,10"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        strokeOpacity="0.4"
      />
      {/* Visible stitch already made */}
      <line x1="8" y1="10" x2="12" y2="13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      {/* Under fabric */}
      <line x1="12" y1="13" x2="13" y2="10" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.8" strokeLinecap="round" />
      {/* Needle — tapered line */}
      <line x1="13" y1="10" x2="18" y2="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Needle point */}
      <circle cx="18.5" cy="2.2" r="0.5" fill="currentColor" />
    </svg>
  );
}
