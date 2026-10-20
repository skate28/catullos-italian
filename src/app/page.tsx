import { ComingSoon } from "@/components/coming-soon";
import { WhatToExpect } from "@/components/expect";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { MenuSection } from "@/components/menu-section";
import { Story } from "@/components/story";
import { Visit } from "@/components/visit";

export default function HomePage() {
  return (
    <main id="content">
      <Hero />
      <Marquee />
      <Story />
      <MenuSection />
      <WhatToExpect />
      <ComingSoon />
      <Visit />
      <Faq />
    </main>
  );
}
