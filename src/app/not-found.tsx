import Link from "next/link";

import { buttonPrimary } from "@/components/styles";
import { site } from "@/content/site";

export default function NotFound() {
  return (
    <main id="content" className="grain flex min-h-[80vh] items-center">
      <div className="mx-auto max-w-xl px-5 py-32 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">404</p>
        <h1 className="mt-4 font-display text-5xl font-semibold italic text-wine md:text-6xl">This page wandered off the menu.</h1>
        <p className="mt-4 text-lg text-ink/70">The menu, hours and directions are on the home page.</p>
        <Link href="/" className={`${buttonPrimary} mt-8`}>
          Back to {site.name}
        </Link>
      </div>
    </main>
  );
}
