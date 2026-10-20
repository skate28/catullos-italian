"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { focusRing } from "@/components/styles";
import type { Photo } from "@/content/types";
import { cn } from "@/lib/cn";
import { photoDimensions } from "@/lib/photos";

/** Masonry grid with a simple lightbox. */
export function GalleryGrid({ photos }: { photos: Photo[] }) {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
      if (event.key === "ArrowRight") setOpen((i) => (i === null ? i : (i + 1) % photos.length));
      if (event.key === "ArrowLeft") setOpen((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, photos.length]);

  const current = open === null ? null : photos[open];

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setOpen(index)}
            className={cn("group relative block w-full overflow-hidden rounded-2xl bg-ink", index === 0 && "col-span-2 lg:row-span-2", focusRing)}
            aria-label={`View photo: ${photo.alt}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              {...photoDimensions(photo)}
              sizes={index === 0 ? "(min-width: 1024px) 560px, 100vw" : "(min-width: 1024px) 280px, 50vw"}
              className="aspect-square h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent px-3 pb-3 pt-10 text-left text-xs text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {photo.alt}
            </span>
          </button>
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 backdrop-blur"
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            className={cn("absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full bg-cream text-ink", focusRing)}
            aria-label="Close"
            onClick={() => setOpen(null)}
          >
            <X className="size-5" />
          </button>
          <figure className="max-h-full max-w-4xl" onClick={(event) => event.stopPropagation()}>
            <Image
              src={current.src}
              alt={current.alt}
              {...photoDimensions(current)}
              sizes="(min-width: 1024px) 896px, 100vw"
              className="max-h-[80vh] w-auto rounded-2xl object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-cream/80">{current.alt}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
