"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Phone, Star } from "lucide-react";
import Image from "next/image";

import { Flourish, OliveSprig, Seal } from "@/components/ornaments";
import { ShopStatusPill } from "@/components/shop-status";
import { buttonPrimary, buttonSecondary, container } from "@/components/styles";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { phoneLabel, telHref } from "@/lib/contact";
import { scheduleRows } from "@/lib/hours";
import { directionsHref } from "@/lib/maps";
import { heroPhoto, photoDimensions } from "@/lib/photos";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const tel = telHref(site.phone);
  const directions = directionsHref();
  const photo = heroPhoto();
  const name = site.name.trim() || "Catullo's Italian";
  const [first, ...rest] = name.split(" ");
  const rows = scheduleRows(site.hours);

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, delay, ease },
        };

  return (
    <section id="top" className="grain relative overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36">
      <div aria-hidden="true" className="tablecloth absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_70%_30%,black,transparent_70%)]" />
      <div aria-hidden="true" className="absolute -right-40 -top-40 -z-10 size-[36rem] rounded-full bg-brand/15 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-48 -left-32 -z-10 size-[30rem] rounded-full bg-olive/15 blur-3xl" />

      <div className={cn(container, "grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]")}>
        <div>
          <motion.div {...rise(0)} className="flex flex-wrap items-center gap-3">
            <ShopStatusPill />
            {site.rating && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-paper/80 px-3 py-1.5 text-xs font-semibold text-ink/80 ring-1 ring-ink/10">
                <Star className="size-3.5 fill-gold text-gold" aria-hidden="true" />
                {site.rating.value.toFixed(1)} on {site.rating.source}
                <span className="text-ink/50">({site.rating.count.toLocaleString("en-US")} reviews)</span>
              </span>
            )}
          </motion.div>

          {site.heroKicker?.trim() && (
            <motion.p {...rise(0.08)} className="mt-8 text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-brand">
              {site.heroKicker}
            </motion.p>
          )}

          <motion.h1 {...rise(0.15)} className="mt-4 font-display leading-[0.85] tracking-tight text-wine">
            <span className="block text-[5.2rem] font-semibold italic sm:text-[8rem] lg:text-[9.5rem]">{first}</span>
            {rest.length > 0 && (
              <span className="mt-2 flex items-center gap-4 text-[1.6rem] font-medium uppercase not-italic tracking-[0.42em] text-ink sm:text-4xl">
                {rest.join(" ")}
                <span aria-hidden="true" className="hidden h-px flex-1 bg-ink/25 sm:block" />
              </span>
            )}
          </motion.h1>

          {site.tagline.trim() && (
            <motion.p {...rise(0.25)} className="mt-7 max-w-xl font-display text-2xl leading-snug text-ink/80 sm:text-[1.9rem]">
              {site.tagline}
            </motion.p>
          )}

          <motion.div {...rise(0.35)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            {tel && (
              <a href={tel} className={cn(buttonPrimary, "text-base sm:px-8")}>
                <Phone className="size-5" aria-hidden="true" />
                Call {phoneLabel(site.phone)}
              </a>
            )}
            {directions && (
              <a href={directions} target="_blank" rel="noopener noreferrer" className={cn(buttonSecondary, "text-base sm:px-8")}>
                <MapPin className="size-5" aria-hidden="true" />
                Get directions
              </a>
            )}
          </motion.div>

          <motion.p {...rise(0.45)} className="mt-5 text-sm text-ink/60">
            {site.address.full}
            {site.whatToExpect ? " · Walk-in only, no reservations" : ""}
          </motion.p>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease }}
          className="relative mx-auto w-full max-w-sm"
        >
          <Seal text="FATTA A MANO · HANDMADE PASTA · " className="absolute -right-3 -top-12 z-10 size-28 sm:-left-12 sm:right-auto sm:size-32" />
          {photo ? (
            <div className="overflow-hidden rounded-t-full border-[10px] border-paper shadow-2xl shadow-wine/25">
              <Image
                src={photo.src}
                alt={photo.alt}
                {...photoDimensions(photo)}
                priority
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          ) : (
            <div className="relative overflow-hidden rounded-t-full bg-wine p-2.5 shadow-2xl shadow-wine/30">
              <div className="grain grain-dark flex flex-col items-center rounded-t-full border border-cream/25 px-8 pb-10 pt-20 text-center text-cream">
                <OliveSprig className="w-40 text-cream/70" />
                <p className="mt-6 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-cream/60">Serving dinner</p>
                <dl className="mt-4 w-full space-y-2.5 text-sm">
                  {rows.map((row) => (
                    <div key={row.label} className="flex items-baseline gap-2">
                      <dt className="font-display text-lg italic">{row.label}</dt>
                      <span aria-hidden="true" className="flex-1 border-b border-dotted border-cream/30" />
                      <dd className={cn("font-medium", row.value === "Closed" && "text-cream/50")}>{row.value}</dd>
                    </div>
                  ))}
                </dl>
                <Flourish tone="cream" className="mt-7" />
                <p className="mt-4 font-display text-xl italic text-cream/90">First come, first served</p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
