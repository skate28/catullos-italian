"use client";

import { Menu as MenuIcon, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { buttonPrimary, container, focusRing } from "@/components/styles";
import { Wordmark } from "@/components/wordmark";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { phoneLabel, telHref } from "@/lib/contact";
import type { NavLink } from "@/lib/nav";

export function Header({ links }: { links: NavLink[] }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const tel = telHref(site.phone);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled || open ? "bg-cream/90 shadow-[0_1px_0] shadow-ink/10 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className={cn(container, "flex h-16 items-center justify-between gap-4 sm:h-20")}>
        <a href="#top" className={cn("rounded-md", focusRing)} aria-label={`${site.name} home`}>
          <Wordmark />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-sm font-medium text-ink/75 transition-colors hover:text-brand",
                "after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-brand after:transition-all hover:after:w-full",
                focusRing,
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {tel && (
            <>
              <a href={tel} aria-label={`Call ${phoneLabel(site.phone)}`} className={cn("inline-flex size-11 items-center justify-center rounded-full bg-brand text-paper shadow-[0_10px_24px_-10px] shadow-brand-deep/60 sm:hidden", focusRing)}>
                <Phone className="size-4" aria-hidden="true" />
              </a>
              <span className="hidden sm:block">
                <a href={tel} className={cn(buttonPrimary, "min-h-10 px-4 py-2.5 text-sm")}>
                  <Phone className="size-4" aria-hidden="true" />
                  {phoneLabel(site.phone)}
                </a>
              </span>
            </>
          )}
          <button
            type="button"
            className={cn("inline-flex size-11 items-center justify-center rounded-full text-ink md:hidden", focusRing)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-6" /> : <MenuIcon className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-cream md:hidden">
          <ul className={cn(container, "flex flex-col py-3")}>
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn("block py-3 font-display text-2xl text-ink", focusRing)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
