import { site } from "@/content/site";
import { visibleCategories } from "@/lib/menu";

/** Ribbon of signature dishes (falls back to the first menu items). */
export function Marquee() {
  const items = visibleCategories(site.menu).flatMap((category) => category.items);
  const signatures = items.filter((item) => item.signature);
  const names = (signatures.length >= 3 ? signatures : items.slice(0, 8)).map((item) => item.name);
  if (names.length === 0) return null;
  const loop = [...names, ...names, ...names, ...names];

  return (
    <div className="relative overflow-hidden bg-wine py-5 text-cream" aria-label="House favorites">
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
        {loop.map((name, index) => (
          <span key={`${name}-${index}`} className="flex items-center gap-8 font-display text-2xl italic sm:text-3xl" aria-hidden={index >= names.length}>
            {name}
            <span className="text-gold not-italic" aria-hidden="true">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
