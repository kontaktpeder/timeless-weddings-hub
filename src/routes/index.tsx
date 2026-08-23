import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/Hero";
import { TrustIntro } from "../components/TrustIntro";
import { AboutSimon } from "../components/AboutSimon";
import { InfiniteImageCarousel } from "../components/InfiniteImageCarousel";
import { PackageSection } from "../components/PackageSection";
import { Testimonials } from "../components/Testimonials";
import { VimeoVideo } from "../components/VimeoVideo";
import { ContactCTA } from "../components/ContactCTA";
import { site } from "../data/site";
import { heroImage, smallestVariant, srcSet } from "../data/images";

const heroSrc = smallestVariant(heroImage.files);

const description =
  "Jordnær og profesjonell bryllupsfotografering på Sørlandet og i Oslo. Heldagsfotografering med minimum 400 bilder fra Simon Myklebost.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Simon Myklebost",
  description,
  url: `${site.domain}/`,
  email: site.email,
  telephone: "+4794160142",
  areaServed: [
    { "@type": "Place", name: "Sørlandet" },
    { "@type": "City", name: "Kristiansand" },
    { "@type": "City", name: "Oslo" },
  ],
  sameAs: [site.instagram],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Simon Myklebost | Bryllupsfotograf på Sørlandet og i Oslo" },
      { name: "description", content: description },
      { property: "og:title", content: "Simon Myklebost | Bryllupsfotograf på Sørlandet og i Oslo" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${site.domain}/` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: `${site.domain}/` },
      {
        rel: "preload",
        as: "image",
        href: heroSrc.src,
        imageSrcSet: srcSet(heroImage.files),
        imageSizes: "(max-width: 768px) 100vw, 46vw",
        fetchPriority: "high",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(jsonLd) },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <>
      <Hero />
      <TrustIntro />
      <AboutSimon />
      <InfiniteImageCarousel />
      <PackageSection />
      <Testimonials />
      <VimeoVideo />
      <ContactCTA />
    </>
  );
}
