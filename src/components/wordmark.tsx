import { site } from "@/content/site";
import { cn } from "@/lib/cn";

/** Typographic wordmark built from `site.name` (no logo file yet). "Catullo's Italian" → big "Catullo's" + small "Italian". */
export function Wordmark({ className, tone = "ink" }: { className?: string; tone?: "ink" | "cream" }) {
  const name = site.name.trim() || "Catullo's";
  const [first, ...rest] = name.split(" ");
  return (
    <span className={cn("inline-flex items-baseline gap-2 leading-none", className)}>
      <span className={cn("font-display text-[1.7rem] font-semibold italic tracking-tight", tone === "ink" ? "text-wine" : "text-cream")}>
        {first}
      </span>
      {rest.length > 0 && (
        <span className={cn("text-[0.62rem] font-semibold uppercase tracking-[0.32em]", tone === "ink" ? "text-brand" : "text-cream/70")}>
          {rest.join(" ")}
        </span>
      )}
    </span>
  );
}
