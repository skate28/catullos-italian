"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import { focusRing } from "@/components/styles";
import type { MenuCategory } from "@/content/types";
import { cn } from "@/lib/cn";
import { formatPrice } from "@/lib/money";

function CategoryBody({ category }: { category: MenuCategory }) {
  const compact = category.items.length > 0 && category.items.every((item) => !item.description?.trim());
  return (
    <div>
      {category.description?.trim() && (
        <p className="mx-auto max-w-2xl text-center font-display text-lg italic text-ink/65">{category.description}</p>
      )}
      {compact ? (
        <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
          {category.items.map((item) => (
            <li key={item.id} className="rounded-full border border-ink/15 bg-paper/70 px-4 py-2 font-display text-lg text-ink">
              {item.name}
            </li>
          ))}
        </ul>
      ) : (
        <ul className="mt-8 grid gap-x-14 gap-y-7 md:grid-cols-2">
          {category.items.map((item) => (
            <li key={item.id} className="break-inside-avoid">
              <div className="flex items-baseline gap-3">
                <span className="min-w-0 font-display text-xl font-semibold text-ink">{item.name}</span>
                {typeof item.price === "number" && Number.isFinite(item.price) && (
                  <>
                    <span className="leader" aria-hidden="true" />
                    <span className="shrink-0 whitespace-nowrap font-display text-lg font-semibold text-gold">
                      {formatPrice(item.price, item.priceFrom)}
                    </span>
                  </>
                )}
              </div>
              {(item.signature || item.isNew) && (
                <p className="mt-0.5 flex gap-3 text-[0.6rem] font-bold uppercase tracking-[0.2em]">
                  {item.signature && <span className="text-brand">House favorite</span>}
                  {item.isNew && <span className="text-olive">New</span>}
                </p>
              )}
              {item.description?.trim() && <p className="mt-1 text-sm leading-relaxed text-ink/65">{item.description}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function MenuTabs({ categories }: { categories: MenuCategory[] }) {
  const [active, setActive] = useState(categories[0]?.id ?? "");
  const reduce = useReducedMotion();
  const current = categories.find((category) => category.id === active) ?? categories[0];
  if (!current) return null;

  return (
    <div>
      <div role="tablist" aria-label="Menu sections" className="-mx-2 flex gap-2 overflow-x-auto px-2 pb-2 sm:flex-wrap sm:justify-center">
        {categories.map((category) => {
          const selected = category.id === current.id;
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              id={`tab-${category.id}`}
              aria-selected={selected}
              aria-controls={`panel-${category.id}`}
              onClick={() => setActive(category.id)}
              className={cn(
                "shrink-0 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold transition-colors",
                selected ? "bg-brand text-paper shadow-md shadow-brand/30" : "bg-paper/70 text-ink/70 ring-1 ring-ink/10 hover:text-brand",
                focusRing,
              )}
            >
              {category.name}
            </button>
          );
        })}
      </div>

      <div className="mt-10" role="tabpanel" id={`panel-${current.id}`} aria-labelledby={`tab-${current.id}`}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.id}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 1 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <CategoryBody category={current} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
