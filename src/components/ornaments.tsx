import { cn } from "@/lib/cn";

/** Hand-drawn-style olive sprig. Pure SVG, decorative only. */
export function OliveSprig({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 80" fill="none" aria-hidden="true" className={cn("text-olive", className)}>
      <path d="M8 64 C 70 52, 150 36, 232 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {[
        [40, 56, -28],
        [70, 50, 24],
        [98, 44, -30],
        [126, 38, 22],
        [152, 31, -32],
        [178, 26, 20],
        [204, 20, -30],
      ].map(([x, y, r], i) => (
        <ellipse
          key={i}
          cx={x}
          cy={y + (i % 2 === 0 ? -9 : 9)}
          rx="14"
          ry="4.6"
          transform={`rotate(${r} ${x} ${y + (i % 2 === 0 ? -9 : 9)})`}
          fill="currentColor"
          opacity={0.85}
        />
      ))}
      <circle cx="112" cy="54" r="5.5" fill="var(--ct-wine)" opacity="0.9" />
      <circle cx="166" cy="42" r="5" fill="var(--ct-wine)" opacity="0.9" />
    </svg>
  );
}

/** Small flourish divider: line · diamond · line. */
export function Flourish({ className, tone = "brand" }: { className?: string; tone?: "brand" | "cream" | "gold" }) {
  const color = tone === "cream" ? "text-cream/60" : tone === "gold" ? "text-gold" : "text-brand";
  return (
    <svg viewBox="0 0 160 16" fill="none" aria-hidden="true" className={cn("h-4 w-40", color, className)}>
      <path d="M0 8 H62" stroke="currentColor" strokeWidth="1.2" />
      <path d="M98 8 H160" stroke="currentColor" strokeWidth="1.2" />
      <path d="M80 1 L87 8 L80 15 L73 8 Z" fill="currentColor" />
      <circle cx="67" cy="8" r="2" fill="currentColor" />
      <circle cx="93" cy="8" r="2" fill="currentColor" />
    </svg>
  );
}

/** Rotating circular text seal, e.g. "Fatta a mano · Handmade pasta ·". */
export function Seal({ text, className }: { text: string; className?: string }) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className={cn("text-brand", className)}>
      <defs>
        <path id="seal-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
      </defs>
      <g className="origin-center animate-spin-slow" style={{ transformBox: "fill-box" }}>
        <text fill="currentColor" fontSize="15.5" letterSpacing="4.2" fontWeight="600">
          <textPath href="#seal-circle">{text}</textPath>
        </text>
      </g>
      <circle cx="100" cy="100" r="56" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      {/* Simple pasta-nest mark: concentric swirls */}
      <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        <path d="M100 74 C 124 74, 128 100, 112 112 C 98 122, 80 112, 82 96 C 84 84, 100 82, 106 92 C 110 100, 102 108, 96 102" />
      </g>
    </svg>
  );
}

/** Scalloped edge used at the top of dark bands. */
export function Scallop({ className, flip }: { className?: string; flip?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={cn("h-4 w-full", flip && "rotate-180", className)}
      style={{
        background: "radial-gradient(circle at 12px 16px, currentColor 11.5px, transparent 12px) 0 0 / 24px 16px repeat-x",
      }}
    />
  );
}
