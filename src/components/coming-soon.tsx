import { Bot, ClipboardList, MessageSquareText, Phone } from "lucide-react";
import type { ComponentType } from "react";

import { Reveal } from "@/components/reveal";
import { buttonPrimary, container, eyebrow, sectionTitle } from "@/components/styles";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { phoneLabel, telHref } from "@/lib/contact";
import { anyFeatureVisible, featureMode, waitlistHref, type FeatureKey } from "@/lib/features";
import { liveSmsHref } from "@/lib/ordering";

type Card = {
  key: FeatureKey;
  icon: ComponentType<{ className?: string }>;
  title: string;
  body: string;
  example: string;
  liveHref: string | null;
  liveLabel: string;
};

function cards(): Card[] {
  const after = site.afterHoursPhone ? telHref(site.afterHoursPhone) : null;
  return [
    {
      key: "textPreorders",
      icon: MessageSquareText,
      title: site.preorder.heading.trim() || "Text-ahead pre-orders",
      body:
        site.preorder.intro.trim() ||
        "Text your takeout order ahead, get a confirmation back, and pick it up hot.",
      example: "“Hi Catullo's, 2 Pear Fiocchi for pickup at 6:15?” → “You got it, see you at 6:15!”",
      liveHref: liveSmsHref(site.preorder.textMessage),
      liveLabel: site.preorder.textButtonLabel.trim() || "Text your order",
    },
    {
      key: "waitlist",
      icon: ClipboardList,
      title: "Waitlist & call-ahead",
      body: "Add your name to the list before you leave home and get a text when your table is almost ready. Still walk-in, just less standing around.",
      example: "“Party of 4, added. About 35 minutes. We'll text you when your table is close.”",
      liveHref: waitlistHref(),
      liveLabel: "Join the waitlist",
    },
    {
      key: "aiPhone",
      icon: Bot,
      title: "After-hours phone answering",
      body: "A friendly assistant picks up when the team is busy or closed: hours, directions, menu questions and wait times, any time of day.",
      example: "“We open at 5 tonight. There's usually a line, so come a little early!”",
      liveHref: after,
      liveLabel: site.afterHoursPhone ? `Call ${phoneLabel(site.afterHoursPhone)}` : "Call",
    },
  ];
}

export function ComingSoon() {
  if (!anyFeatureVisible()) return null;
  const visible = cards()
    .map((card) => ({ ...card, mode: featureMode(card.key) }))
    .filter((card) => card.mode !== "off");
  const anyPreview = visible.some((card) => card.mode === "preview" || !card.liveHref);
  const tel = telHref(site.phone);

  return (
    <section id="soon" className="grain relative overflow-hidden py-24 sm:py-32">
      <div className={container}>
        <Reveal className="max-w-2xl">
          <p className={eyebrow}>Coming soon</p>
          <h2 className={cn(sectionTitle, "mt-5")}>
            Less waiting <em className="text-brand">around</em>, same great table
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">
            A few conveniences we&apos;re getting ready. They&apos;re not switched on yet, so for now the best way to reach us is still a phone call.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {visible.map((card, index) => {
            const isLive = card.mode === "live" && Boolean(card.liveHref);
            const Icon = card.icon;
            return (
              <Reveal key={card.key} delay={0.08 * index}>
                <article
                  className={cn(
                    "relative flex h-full flex-col rounded-3xl border bg-paper/80 p-7",
                    isLive ? "border-olive/40" : "border-dashed border-ink/25",
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-cream text-brand ring-1 ring-ink/10">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <span
                      className={cn(
                        "rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em]",
                        isLive ? "bg-olive text-paper" : "bg-gold/15 text-gold ring-1 ring-gold/30",
                      )}
                    >
                      {isLive ? "Available now" : "Coming soon"}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-wine">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{card.body}</p>
                  {!isLive && (
                    <figure className="mt-5 rounded-2xl bg-cream/80 p-4 text-sm italic text-ink/60 ring-1 ring-ink/5">
                      <figcaption className="mb-1 text-[0.6rem] font-bold uppercase not-italic tracking-[0.2em] text-ink/40">
                        Preview · example only
                      </figcaption>
                      {card.example}
                    </figure>
                  )}
                  <div className="mt-auto pt-6">
                    {isLive && card.liveHref ? (
                      <a href={card.liveHref} className={cn(buttonPrimary, "w-full")}>
                        {card.liveLabel}
                      </a>
                    ) : (
                      <span
                        aria-disabled="true"
                        className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-dashed border-ink/25 text-sm font-semibold text-ink/45"
                      >
                        Not available yet
                      </span>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {anyPreview && tel && (
          <p className="mt-10 text-sm text-ink/60">
            <Phone className="mr-2 inline size-4 align-[-2px] text-brand" aria-hidden="true" />
            Today: no reservations, texting or online ordering. Questions? Call{" "}
            <a href={tel} className="font-semibold text-brand underline-offset-4 hover:underline">
              {phoneLabel(site.phone)}
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
