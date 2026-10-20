import Image from "next/image";

import { Flourish } from "@/components/ornaments";
import { Reveal } from "@/components/reveal";
import { container, eyebrow, sectionTitle } from "@/components/styles";
import { cn } from "@/lib/cn";
import { dishHighlights } from "@/lib/dishes";
import { photoDimensions } from "@/lib/photos";

/** Bento of dish photos matched to menu items (first card large). Hidden without dishes. */
export function Dishes() {
  const dishes = dishHighlights(5);
  if (dishes.length === 0) return null;
  const hasPhotos = dishes.some((dish) => dish.photo);

  return (
    <section id="favorites" className="relative bg-cream pb-24 sm:pb-32">
      <div className={container}>
        <Reveal className="flex flex-col items-center text-center">
          <Flourish />
          <p className={cn(eyebrow, "mt-5")}>House favorites</p>
          <h2 className={cn(sectionTitle, "mt-4")}>
            The ones people <em className="text-brand">line up</em> for
          </h2>
        </Reveal>

        <div className={cn("mt-14 grid gap-4", hasPhotos ? "grid-cols-2 lg:grid-cols-4 lg:grid-rows-2" : "sm:grid-cols-2 lg:grid-cols-4")}>
          {dishes.map(({ item, photo }, index) => {
            const big = hasPhotos && index === 0;
            return (
              <Reveal
                key={item.id}
                delay={0.06 * index}
                className={cn(big && "col-span-2 lg:row-span-2", !big && hasPhotos && "col-span-1")}
              >
                <article className="group relative h-full overflow-hidden rounded-3xl bg-ink text-cream shadow-[0_30px_60px_-40px] shadow-ink/70">
                  {photo ? (
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      {...photoDimensions(photo)}
                      sizes={big ? "(min-width: 1024px) 560px, 100vw" : "(min-width: 1024px) 280px, 50vw"}
                      className={cn(
                        "h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105",
                        big ? "aspect-square lg:aspect-auto" : "aspect-[4/5]",
                      )}
                    />
                  ) : (
                    <div className="grain grain-dark aspect-[4/5] bg-wine" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                    {item.signature && (
                      <span className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-gold">House favorite</span>
                    )}
                    <h3 className={cn("font-display font-semibold leading-tight", big ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl")}>
                      {item.name}
                    </h3>
                    {big && item.description && (
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-cream/80">{item.description}</p>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
