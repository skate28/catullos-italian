import Image from "next/image";

import { OliveSprig } from "@/components/ornaments";
import { Reveal } from "@/components/reveal";
import { container, eyebrow, sectionTitle } from "@/components/styles";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
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
  const interior = photosOfCategory("interior").slice(0, 2);

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
              <div className="mt-10 grid gap-4">
                {cards.map((card, index) => (
                  <div key={index} className="flex gap-5 rounded-2xl border border-line bg-paper/70 p-5 shadow-[0_20px_40px_-30px] shadow-wine/40 sm:p-6">
                    <span className="font-display text-3xl italic leading-none text-gold">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      {card.title && <h3 className="font-display text-xl font-semibold text-wine">{card.title}</h3>}
                      <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{card.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Reveal>
        </div>

        {interior.length > 0 && (
          <Reveal className="mt-16 sm:mt-20">
            <div className={cn("grid gap-4", interior.length > 1 && "lg:grid-cols-[1.15fr_1fr]")}>
              {interior.map((photo, index) => (
                <figure key={photo.src} className="group relative overflow-hidden rounded-3xl bg-ink shadow-[0_30px_60px_-40px] shadow-ink/60">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    {...photoDimensions(photo)}
                    sizes={interior.length > 1 ? "(min-width: 1024px) 560px, 100vw" : "(min-width: 1152px) 1088px, 100vw"}
                    className="aspect-[16/7] h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.03] lg:aspect-auto lg:min-h-64"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent px-5 pb-4 pt-12 text-sm text-cream/90">
                    {index === 0 ? "Inside Catullo's" : photo.alt}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
