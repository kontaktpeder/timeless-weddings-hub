import { createFileRoute } from "@tanstack/react-router";
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
        <p className="overline-label">Galleri</p>
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
