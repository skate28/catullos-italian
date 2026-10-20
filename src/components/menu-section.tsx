import { Phone } from "lucide-react";

import { MenuTabs } from "@/components/menu-tabs";
import { Flourish } from "@/components/ornaments";
import { Reveal } from "@/components/reveal";
import { buttonPrimary, container, eyebrow, sectionTitle } from "@/components/styles";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { telHref } from "@/lib/contact";
import { visibleCategories } from "@/lib/menu";

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
              <MenuTabs categories={categories} />
              <div className="mt-14 flex flex-col items-center gap-5 text-center">
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
