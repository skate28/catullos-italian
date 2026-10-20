import { site } from "@/content/site";
import type { MenuItem, Photo } from "@/content/types";
import { visibleCategories } from "@/lib/menu";
import { galleryPhotos, heroPhoto, photoForItemId } from "@/lib/photos";

export type Dish = { item: MenuItem; photo: Photo | null };

/**
 * Dish highlights: menu items that have a matching photo (signatures first), then signatures without
 * photos. The hero photo is avoided when another shot of the same dish exists.
 */
export function dishHighlights(max = 6): Dish[] {
  const hero = heroPhoto();
  const exclude = hero ? [hero.src] : [];
  const items = visibleCategories(site.menu).flatMap((category) => category.items);
  const withPhoto: Dish[] = [];
  const withoutPhoto: Dish[] = [];
  for (const item of items) {
    const photo = photoForItemId(item.id, exclude);
    if (photo) withPhoto.push({ item, photo });
    else if (item.signature) withoutPhoto.push({ item, photo: null });
  }
  withPhoto.sort((a, b) => Number(Boolean(b.item.signature)) - Number(Boolean(a.item.signature)));
  const list = withPhoto.length >= 3 ? withPhoto : [...withPhoto, ...withoutPhoto];
  return list.slice(0, max);
}

/** Gallery: food photos not already used by the hero or dish highlights (interior/storefront live elsewhere). */
export function galleryRemainder(): Photo[] {
  const used = new Set<string>();
  const hero = heroPhoto();
  if (hero) used.add(hero.src);
  for (const dish of dishHighlights()) if (dish.photo) used.add(dish.photo.src);
  return galleryPhotos().filter((photo) => photo.category === "food" && !used.has(photo.src));
}
