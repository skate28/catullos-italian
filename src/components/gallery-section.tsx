import { GalleryGrid } from "@/components/gallery";
import { Reveal } from "@/components/reveal";
import { container, eyebrow, sectionTitle } from "@/components/styles";
import { cn } from "@/lib/cn";
import { galleryRemainder } from "@/lib/dishes";

export function Gallery() {
  const photos = galleryRemainder();
  if (photos.length === 0) return null;
  return (
    <section id="gallery" className="grain grain-dark bg-ink py-24 text-cream sm:py-32">
      <div className={container}>
        <Reveal className="max-w-2xl">
          <p className={cn(eyebrow, "text-gold")}>From our kitchen</p>
          <h2 className={cn(sectionTitle, "mt-5 text-cream")}>
            Fresh pasta, <em className="text-gold">every night</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-12">
          <GalleryGrid photos={photos} />
        </Reveal>
      </div>
    </section>
  );
}
