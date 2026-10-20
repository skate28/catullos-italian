import { Plus } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { container, eyebrow, focusRing } from "@/components/styles";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

export function Faq() {
  const items = site.faq.filter((item) => item.question.trim() && item.answer.trim());
  if (items.length === 0) return null;

  return (
    <section id="faq" className="grain py-24 sm:py-28">
      <div className={cn(container, "grid gap-10 lg:grid-cols-[0.8fr_1.2fr]")}>
        <Reveal>
          <p className={eyebrow}>Good to know</p>
          <h2 className="mt-5 font-display text-5xl font-medium leading-none text-ink sm:text-6xl">Questions</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="divide-y divide-line border-y border-line">
            {items.map((item) => (
              <details key={item.question} className="group py-2">
                <summary
                  className={cn(
                    "flex cursor-pointer list-none items-center justify-between gap-6 rounded-lg py-4 font-display text-2xl text-wine [&::-webkit-details-marker]:hidden",
                    focusRing,
                  )}
                >
                  {item.question}
                  <Plus className="size-5 shrink-0 text-brand transition-transform duration-300 group-open:rotate-45" aria-hidden="true" />
                </summary>
                <p className="pb-5 pr-10 leading-relaxed text-ink/70">{item.answer}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
