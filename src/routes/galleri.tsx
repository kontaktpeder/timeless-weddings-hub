import { createFileRoute, Link } from "@tanstack/react-router";
import { MasonryGallery } from "../components/MasonryGallery";
import { ContactCTA } from "../components/ContactCTA";
import { site } from "../data/site";

const description =
  "Utvalgte bryllupsbilder av Simon Myklebost – varme, naturlige og tidløse øyeblikk fra bryllup på Sørlandet og i Oslo.";

export const Route = createFileRoute("/galleri")({
  head: () => ({
    meta: [
      { title: "Galleri | Simon Myklebost – Bryllupsfotograf" },
      { name: "description", content: description },
      { property: "og:title", content: "Galleri | Simon Myklebost – Bryllupsfotograf" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${site.domain}/galleri` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${site.domain}/galleri` }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-12 pb-8 md:px-8 md:pt-16 md:pb-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[0.85rem] font-medium tracking-wide text-brown-deep/75 underline-offset-4 transition-colors hover:text-brown-deep hover:underline"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Tilbake til forsiden
        </Link>
        <p className="overline-label mt-6">Galleri</p>
        <h1 className="mt-4 max-w-xl font-display text-4xl text-brown-deep md:text-5xl">
          Utvalgte bilder
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-brown-deep/75">
          Et utdrag av øyeblikk fra bryllupsdager på Sørlandet og i Oslo –
          varme, naturlige og tidløse bilder fra hele dagen, fra de stille
          forberedelsene til festen sent på kvelden.
        </p>
      </section>

      <section aria-label="Bildegalleri" className="mx-auto max-w-7xl px-2 pb-16 sm:px-3 md:pb-24">
        <MasonryGallery />
      </section>

      <ContactCTA />
    </>
  );
}
