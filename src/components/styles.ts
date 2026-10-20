export const focusRing =
  "focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand";

export const buttonBase = `inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-[0.95rem] font-semibold leading-none transition-all duration-300 ${focusRing}`;

/** Terracotta → wine. Primary action (call). */
export const buttonPrimary = `${buttonBase} bg-brand text-paper shadow-[0_14px_30px_-12px] shadow-brand-deep/60 hover:-translate-y-0.5 hover:bg-brand-deep`;

/** Outline on cream. */
export const buttonSecondary = `${buttonBase} bg-paper/60 text-ink ring-1 ring-inset ring-ink/20 backdrop-blur hover:bg-ink hover:text-cream`;

/** Cream on wine. */
export const buttonLight = `${buttonBase} bg-cream text-wine hover:bg-paper hover:-translate-y-0.5`;

export const container = "mx-auto w-full max-w-6xl px-5 sm:px-8";

export const eyebrow = "text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-brand";

export const sectionTitle =
  "font-display text-[2.6rem] font-medium leading-[1] tracking-tight text-ink sm:text-6xl md:text-7xl";
