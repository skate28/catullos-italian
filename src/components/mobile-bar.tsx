import { MapPin, Phone, UtensilsCrossed } from "lucide-react";

import { focusRing } from "@/components/styles";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { telHref } from "@/lib/contact";
import { directionsHref } from "@/lib/maps";

/** Sticky bottom bar on phones: Call (primary) · Menu · Directions. */
export function MobileBar() {
  const tel = telHref(site.phone);
  const directions = directionsHref();

  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-[1.4fr_1fr_1fr] gap-1.5 rounded-full bg-wine/95 p-1.5 text-cream shadow-2xl shadow-wine/40 backdrop-blur md:hidden"
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      {tel && (
        <a href={tel} className={cn("flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand text-sm font-semibold", focusRing)}>
          <Phone className="size-4" aria-hidden="true" />
          Call
        </a>
      )}
      <a href="#menu" className={cn("flex min-h-12 items-center justify-center gap-1.5 rounded-full text-sm font-medium", focusRing)}>
        <UtensilsCrossed className="size-4" aria-hidden="true" />
        Menu
      </a>
      {directions && (
        <a href={directions} target="_blank" rel="noopener noreferrer" className={cn("flex min-h-12 items-center justify-center gap-1.5 rounded-full text-sm font-medium", focusRing)}>
          <MapPin className="size-4" aria-hidden="true" />
          Directions
        </a>
      )}
    </nav>
  );
}
