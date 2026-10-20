import { site } from "@/content/site";
import { anyFeatureVisible } from "@/lib/features";
import { galleryRemainder } from "@/lib/dishes";
import { visibleCategories } from "@/lib/menu";

export type NavLink = {
  href: string;
  label: string;
};

export function primaryNav(): NavLink[] {
  const about = Boolean(site.about.heading.trim() || site.about.paragraphs.some((p) => p.trim()));
  return [
    { href: "#story", label: "Our Story", show: about },
    { href: "#menu", label: "Menu", show: visibleCategories(site.menu).length > 0 },
    { href: "#expect", label: "What to Expect", show: Boolean(site.whatToExpect) },
    { href: "#soon", label: "Coming Soon", show: anyFeatureVisible() },
    { href: "#gallery", label: "Gallery", show: galleryRemainder().length > 0 },
    { href: "#visit", label: "Hours & Location", show: true },
  ]
    .filter((link) => link.show)
    .map(({ href, label }) => ({ href, label }));
}
