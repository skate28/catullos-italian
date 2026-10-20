import { site } from "@/content/site";
import type { FeatureMode, SiteContent } from "@/content/types";
import { linksOfKind, safeHref } from "@/lib/ordering";

export type FeatureKey = "textPreorders" | "waitlist" | "aiPhone";

/** Pitch default: every feature is shown as a labeled preview. Nothing is ever "live" by default. */
const DEFAULT_MODE: FeatureMode = "preview";

function rawMode(key: FeatureKey, content: SiteContent): FeatureMode {
  const value = content.features?.[key];
  return value === "off" || value === "preview" || value === "live" ? value : DEFAULT_MODE;
}

/** "live" is only honored when the data the live action needs is present. */
export function featureMode(key: FeatureKey, content: SiteContent = site): FeatureMode {
  const mode = rawMode(key, content);
  if (mode !== "live") return mode;
  if (key === "textPreorders") {
    const hasText = Boolean(content.textNumber?.e164?.trim() || content.textNumber?.tel?.trim());
    return hasText || linksOfKind("sms", content).length > 0 ? "live" : "preview";
  }
  if (key === "aiPhone") {
    return content.afterHoursPhone?.e164?.trim() || content.afterHoursPhone?.tel?.trim() ? "live" : "preview";
  }
  return "live";
}

export function waitlistHref(content: SiteContent = site): string | null {
  return safeHref(content.features?.waitlistUrl);
}

export function anyFeatureVisible(content: SiteContent = site): boolean {
  return (["textPreorders", "waitlist", "aiPhone"] as FeatureKey[]).some((key) => featureMode(key, content) !== "off");
}
