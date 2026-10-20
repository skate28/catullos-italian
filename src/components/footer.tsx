import { OliveSprig } from "@/components/ornaments";
import { container, focusRing } from "@/components/styles";
import { Wordmark } from "@/components/wordmark";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { phoneLabel, telHref } from "@/lib/contact";
import { directionsHref } from "@/lib/maps";
import { safeHref } from "@/lib/ordering";

export function Footer() {
  const tel = telHref(site.phone);
  const directions = directionsHref();
  const links = [...site.socials, ...(site.extraLinks ?? [])].flatMap((link) => {
    const href = safeHref(link.href);
    return href && link.label.trim() ? [{ label: link.label.trim(), href }] : [];
  });
  const credit = site.footerCredit.trim() || "Built by nicklopacki.com";

  return (
    <footer className="grain grain-dark relative overflow-hidden bg-wine pb-28 pt-20 text-cream md:pb-10">
      <div className={container}>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Wordmark tone="cream" className="[&>span:first-child]:text-5xl" />
            {site.tagline.trim() && <p className="mt-4 max-w-sm font-display text-xl italic text-cream/75">{site.tagline}</p>}
            <OliveSprig className="mt-6 w-40 text-cream/40" />
          </div>
          <div className="space-y-2 text-sm text-cream/75">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-gold">Visit</p>
            <p>{site.address.full}</p>
            {directions && (
              <a href={directions} target="_blank" rel="noopener noreferrer" className={cn("inline-block underline-offset-4 hover:underline", focusRing)}>
                Get directions
              </a>
            )}
            {tel && (
              <p>
                <a href={tel} className={cn("font-semibold text-cream underline-offset-4 hover:underline", focusRing)}>
                  {phoneLabel(site.phone)}
                </a>
              </p>
            )}
          </div>
          <div className="space-y-2 text-sm text-cream/75">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-gold">Hours</p>
            <p>{site.hours.summary}</p>
            {links.length > 0 && (
              <ul className="space-y-2 pt-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className={cn("underline-offset-4 hover:underline", focusRing)}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/15 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {site.name}
            {site.opened.trim() ? ` · Est. ${site.opened.trim()}` : ""}
          </p>
          <p>Walk-ins welcome · Family owned</p>
        </div>
        <p className="mt-4 text-xs text-cream/60">
          <a href="https://nicklopacki.com" target="_blank" rel="noopener" className={cn("underline-offset-4 hover:text-cream hover:underline", focusRing)}>
            {credit}
          </a>
        </p>
      </div>
    </footer>
  );
}
