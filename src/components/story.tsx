import Image from "next/image";

import { Flourish, OliveSprig } from "@/components/ornaments";
import { Reveal } from "@/components/reveal";
import { container, eyebrow, sectionTitle } from "@/components/styles";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { visibleCategories } from "@/lib/menu";
import { photoDimensions, photosOfCategory } from "@/lib/photos";

/** Paragraph 0 is the lead; later paragraphs become cards, title = text before the first ":". */
function splitCard(paragraph: string) {
  const index = paragraph.indexOf(":");
  if (index > 0 && index < 48) {
    return { title: paragraph.slice(0, index).trim(), body: paragraph.slice(index + 1).trim() };
  }
  return { title: "", body: paragraph.trim() };
}

export function Story() {
  const paragraphs = site.about.paragraphs.map((p) => p.trim()).filter(Boolean);
  if (!site.about.heading.trim() && paragraphs.length === 0) return null;
  const [lead, ...rest] = paragraphs;
  const cards = rest.map(splitCard);
  const signatures = visibleCategories(site.menu)
    .flatMap((category) => category.items)
    .filter((item) => item.signature)
    .slice(0, 4);
  const interior = [...photosOfCategory("interior"), ...photosOfCategory("food")].slice(0, 2);

  return (
    <section id="story" className="grain relative overflow-hidden py-24 sm:py-32">
      <div className={cn(container)}>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className={eyebrow}>Our story{site.opened.trim() ? ` · Since ${site.opened.trim()}` : ""}</p>
            <h2 className={cn(sectionTitle, "mt-5")}>{site.about.heading}</h2>
            <OliveSprig className="mt-8 w-48" />
          </Reveal>
          <Reveal delay={0.1}>
            {lead && (
              <p className="font-display text-2xl leading-relaxed text-ink/85 first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:font-semibold first-letter:italic first-letter:leading-[0.8] first-letter:text-brand sm:text-[1.7rem]">
                {lead}
              </p>
            )}
            {cards.length > 0 && (
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {cards.map((card, index) => (
                  <div key={index} className="rounded-2xl border border-line bg-paper/70 p-5 shadow-[0_20px_40px_-30px] shadow-wine/40">
                    <span className="font-display text-3xl italic text-gold">{String(index + 1).padStart(2, "0")}</span>
                    {card.title && <h3 className="mt-2 font-display text-xl font-semibold text-wine">{card.title}</h3>}
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">{card.body}</p>
                  </div>
                ))}
              </div>
            )}
          </Reveal>
        </div>

        {interior.length > 0 && (
          <div className="mt-16 grid gap-4 sm:grid-cols-2">
            {interior.map((photo) => (
              <Image key={photo.src} src={photo.src} alt={photo.alt} {...photoDimensions(photo)} className="aspect-[4/3] w-full rounded-3xl object-cover" />
            ))}
          </div>
        )}

        {signatures.length > 0 && (
          <Reveal className="mt-20">
            <div className="flex flex-col items-center text-center">
              <Flourish />
              <p className="mt-4 font-display text-3xl italic text-wine sm:text-4xl">The ones people line up for</p>
            </div>
            <ul className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {signatures.map((item) => (
                <li key={item.id} className="group relative bg-paper p-7 transition-colors duration-500 hover:bg-wine">
                  <span aria-hidden="true" className="font-display text-4xl italic text-gold transition-colors group-hover:text-cream/60">
                    {String(signatures.indexOf(item) + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-wine transition-colors group-hover:text-cream">{item.name}</h3>
                  {item.description && (
                    <p className="mt-2 text-sm leading-relaxed text-ink/65 transition-colors group-hover:text-cream/75">{item.description}</p>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  );
}
