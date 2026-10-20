import { Phone } from "lucide-react";

import { Flourish } from "@/components/ornaments";
import { Reveal } from "@/components/reveal";
import { buttonPrimary, container, eyebrow, sectionTitle } from "@/components/styles";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { telHref } from "@/lib/contact";
import { visibleCategories } from "@/lib/menu";
import { formatPrice } from "@/lib/money";

export function MenuSection() {
  const categories = visibleCategories(site.menu);
  if (categories.length === 0) return null;
  const tel = telHref(site.phone);

  return (
    <section id="menu" className="relative bg-paper py-24 sm:py-32">
      <div className={container}>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className={eyebrow}>Il menù</p>
          <h2 className={cn(sectionTitle, "mt-5")}>
            From the <em className="text-brand">pasta</em> board
          </h2>
          {site.menuNote.trim() && <p className="mt-6 text-lg leading-relaxed text-ink/70">{site.menuNote}</p>}
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <div className="relative mx-auto max-w-5xl rounded-[2rem] border border-ink/15 bg-cream p-2 shadow-[0_40px_80px_-50px] shadow-wine/50">
            <div className="grain rounded-[1.6rem] border border-ink/15 px-6 py-10 sm:px-12 sm:py-14">
              <div className="gap-x-14 md:columns-2 [&>div]:mb-12">
                {categories.map((category) => (
                  <div key={category.id} className="break-inside-avoid-column">
                    <div className="flex items-center gap-4">
                      <h3 className="font-display text-3xl font-semibold italic text-wine">{category.name}</h3>
                      <span aria-hidden="true" className="h-px flex-1 bg-brand/40" />
                    </div>
                    {category.description?.trim() && <p className="mt-2 text-sm text-ink/60">{category.description}</p>}
                    {category.items.length > 0 && (
                      <ul className="mt-5 space-y-5">
                        {category.items.map((item) => (
                          <li key={item.id}>
                            <div className="flex items-baseline gap-3">
                              <span className="min-w-0 font-display text-xl font-semibold text-ink">{item.name}</span>
                              {typeof item.price === "number" && Number.isFinite(item.price) && (
                                <>
                                  <span className="leader" aria-hidden="true" />
                                  <span className="shrink-0 whitespace-nowrap font-display text-lg font-semibold text-gold">
                                    {item.priceFrom ? <span className="text-xs font-sans font-medium text-ink/50">from </span> : null}
                                    {formatPrice(item.price)}
                                  </span>
                                </>
                              )}
                            </div>
                            {(item.signature || item.isNew) && (
                              <p className="mt-0.5 flex gap-3 text-[0.6rem] font-bold uppercase tracking-[0.2em]">
                                {item.signature && <span className="text-brand">House favorite</span>}
                                {item.isNew && <span className="text-olive">New</span>}
                              </p>
                            )}
                            {item.description?.trim() && <p className="mt-1 text-sm leading-relaxed text-ink/65">{item.description}</p>}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-col items-center gap-5 text-center">
                <Flourish />
                <p className="max-w-md text-sm text-ink/60">Ask your server about tonight&apos;s specials.</p>
                {tel && (
                  <a href={tel} className={buttonPrimary}>
                    <Phone className="size-4" aria-hidden="true" />
                    Call for today&apos;s menu
                  </a>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
