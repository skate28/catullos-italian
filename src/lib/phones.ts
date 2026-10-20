import type { PhoneNumber, SiteContent } from "@/content/types";

/**
 * Number used by `sms:` links. Falls back to the restaurant line while `textNumber` is unset.
 * Lives here (not in site.ts) so Leads can replace site.ts wholesale without carrying logic.
 */
export function textTarget(content: SiteContent): PhoneNumber {
  if (content.textNumber?.e164 || content.textNumber?.tel) return content.textNumber;
  return content.phone;
}

/** Call number. Open hours always use the restaurant line; after close `afterHoursPhone` wins when set. */
export function callTarget(content: SiteContent, isClosed: boolean): PhoneNumber {
  if (isClosed && (content.afterHoursPhone?.e164 || content.afterHoursPhone?.tel)) {
    return content.afterHoursPhone;
  }
  return content.phone;
}
