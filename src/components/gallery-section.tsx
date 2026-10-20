import { GalleryGrid } from "@/components/gallery";
import { Reveal } from "@/components/reveal";
import { container } from "@/components/styles";
import { galleryRemainder } from "@/lib/dishes";

export function Gallery() {
  const photos = galleryRemainder();
  if (photos.length === 0) return null;
  return (
    <section id="gallery" className="grain grain-dark bg-ink py-24 text-cream sm:py-32">
      <div className={container}>
        <Reveal className="max-w-2xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-gold">From our kitchen</p>
          <h2 className="mt-5 font-display text-[2.6rem] font-medium leading-[1] tracking-tight text-cream sm:text-6xl md:text-7xl">
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
