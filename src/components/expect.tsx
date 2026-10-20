import { Clock, DoorOpen, Users, Wine } from "lucide-react";

import { Flourish, Scallop } from "@/components/ornaments";
import { Reveal } from "@/components/reveal";
import { container } from "@/components/styles";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { nextOpeningSentence } from "@/lib/expect";

const ICONS = [DoorOpen, Users, Clock, Wine];

export function WhatToExpect() {
  const content = site.whatToExpect;
  if (!content || (!content.heading.trim() && content.items.length === 0)) return null;
  const items = content.items.filter((item) => item.title.trim() || item.body.trim());
  const opens = nextOpeningSentence();

  return (
    <section id="expect" className="relative text-cream">
      <Scallop className="-mb-px text-wine" />
      <div className="grain grain-dark relative overflow-hidden bg-wine py-24 sm:py-32">
        <div aria-hidden="true" className="absolute -right-24 top-10 size-96 rounded-full bg-brand/30 blur-3xl" />
        <div className={cn(container, "relative grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center")}>
          <Reveal>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-gold">What to expect</p>
            <h2 className="mt-5 font-display text-[2.6rem] font-medium leading-[1] tracking-tight sm:text-6xl md:text-7xl">
              {content.heading}
            </h2>
            {content.intro.trim() && <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/75">{content.intro}</p>}

            {content.typicalWait.trim() && (
              <div className="mt-10 inline-flex flex-col rounded-3xl border border-cream/20 bg-cream/5 px-8 py-6 backdrop-blur">
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-cream/60">Typical wait at peak</span>
                <span className="mt-1 font-display text-6xl font-semibold italic text-cream sm:text-7xl">{content.typicalWait}</span>
                <span className="mt-1 text-sm text-cream/60">A good sign it&apos;s worth it.</span>
              </div>
            )}
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item, index) => {
              const Icon = ICONS[index % ICONS.length];
              return (
                <Reveal key={index} delay={0.08 * index}>
                  <div className="h-full rounded-3xl border border-cream/15 bg-cream/[0.06] p-7 transition-colors duration-500 hover:bg-cream/[0.11]">
                    <span className="inline-flex size-11 items-center justify-center rounded-full bg-cream text-wine">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-display text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/70">{item.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
        {opens && (
          <div className={cn(container, "relative mt-16 flex flex-col items-center gap-3 text-center")}>
            <Flourish tone="gold" />
            <p className="font-display text-2xl italic text-cream/85">{opens}</p>
          </div>
        )}
      </div>
      <Scallop className="-mt-px text-wine" flip />
    </section>
  );
}
