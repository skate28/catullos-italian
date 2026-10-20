import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import Image from "next/image";

import { HoursList } from "@/components/hours-list";
import { Reveal } from "@/components/reveal";
import { buttonPrimary, buttonSecondary, container, eyebrow, sectionTitle } from "@/components/styles";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { phoneLabel, telHref } from "@/lib/contact";
import { directionsHref, mapEmbedSrc } from "@/lib/maps";
import { photoDimensions, photosOfCategory } from "@/lib/photos";

export function Visit() {
  const tel = telHref(site.phone);
  const directions = directionsHref();
  const embed = mapEmbedSrc();
  const storefront = photosOfCategory("storefront")[0] ?? null;

  return (
    <section id="visit" className="relative bg-paper py-24 sm:py-32">
      <div className={container}>
        <Reveal className="max-w-2xl">
          <p className={eyebrow}>Hours & location</p>
          <h2 className={cn(sectionTitle, "mt-5")}>
            Come find <em className="text-brand">us</em>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div id="hours" className="h-full rounded-3xl border border-line bg-cream p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <Clock className="size-5 text-brand" aria-hidden="true" />
                <h3 className="font-display text-2xl font-semibold text-wine">Dinner hours</h3>
              </div>
              <HoursList />
              <div className="mt-8 border-t border-line pt-7">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 size-5 shrink-0 text-brand" aria-hidden="true" />
                  <div>
                    <address className="font-display text-xl not-italic text-ink">{site.address.full}</address>
                    {site.locationHint.trim() && <p className="mt-1 text-sm text-ink/60">{site.locationHint}</p>}
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  {tel && (
                    <a href={tel} className={buttonPrimary}>
                      <Phone className="size-4" aria-hidden="true" />
                      {phoneLabel(site.phone)}
                    </a>
                  )}
                  {directions && (
                    <a href={directions} target="_blank" rel="noopener noreferrer" className={buttonSecondary}>
                      <Navigation className="size-4" aria-hidden="true" />
                      Directions
                    </a>
                  )}
                </div>
                {site.paymentNote.trim() && <p className="mt-6 text-sm text-ink/55">{site.paymentNote.trim()}</p>}
              </div>
            </div>
          </Reveal>

          {(embed || storefront) && (
            <Reveal delay={0.1} className="flex flex-col gap-6">
              {storefront && (
                <figure className="relative overflow-hidden rounded-3xl border border-line bg-cream p-2">
                  <Image
                    src={storefront.src}
                    alt={storefront.alt}
                    {...photoDimensions(storefront)}
                    sizes="(min-width: 1024px) 600px, 100vw"
                    className="aspect-[16/8] w-full rounded-[1.25rem] object-cover"
                  />
                  <figcaption className="absolute bottom-5 left-5 rounded-full bg-paper/90 px-3 py-1.5 text-xs font-semibold text-ink shadow">
                    Look for this sign
                  </figcaption>
                </figure>
              )}
              {embed && (
              <div className="relative min-h-[20rem] flex-1 overflow-hidden rounded-3xl border border-line bg-cream p-2">
                <iframe
                  title={`Map showing ${site.name} at ${site.address.full}`}
                  src={embed}
                  className="h-full min-h-[19rem] w-full rounded-[1.25rem] border-0 grayscale-[25%] sepia-[15%]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              )}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
