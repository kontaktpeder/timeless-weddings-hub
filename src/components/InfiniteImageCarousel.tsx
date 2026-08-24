import { Link } from "@tanstack/react-router";
import { carouselImages, smallestVariant } from "../data/images";
import { Reveal } from "./Reveal";

/**
 * Sømløs, kontinuerlig karusell.
 * To like grupper animeres med CSS. Ingen pause ved hover/touch —
 * på mobil ville :active ellers stoppe ruten. Alle 960-filer lastes
 * eager slik at kortene aldri står tomme.
 */
function CarouselStrip({ duplicate }: { duplicate?: boolean }) {
  return (
    <div className="marquee-group" aria-hidden={duplicate || undefined}>
      {carouselImages.map((image) => {
        const preview = smallestVariant(image.variants);
        return (
          <Link
            key={`${image.order}-${duplicate ? "b" : "a"}`}
            to="/galleri"
            tabIndex={duplicate ? -1 : undefined}
            aria-label={duplicate ? undefined : `Se ${image.alt} i galleriet`}
            className="relative block h-72 w-48 shrink-0 overflow-hidden bg-brown/20 sm:h-80 sm:w-56 md:h-96 md:w-64"
          >
            <img
              src={preview.src}
              alt={duplicate ? "" : image.alt}
              width={preview.width}
              height={preview.height}
              loading="eager"
              decoding="async"
              draggable={false}
              className="h-full w-full object-cover"
            />
          </Link>
        );
      })}
    </div>
  );
}

export function InfiniteImageCarousel() {
  return (
    <section aria-label="Utvalgte bryllupsbilder" className="py-16 md:py-24">
      <div className="mx-auto mb-8 max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="overline-label">Utvalgte øyeblikk</p>
          <h2 className="mt-3 text-3xl text-brown-deep md:text-4xl">
            Bilder fra virkelige dager
          </h2>
        </Reveal>
      </div>

      <div className="marquee">
        <div className="marquee-track">
          <CarouselStrip />
          <CarouselStrip duplicate />
        </div>
      </div>

      <Reveal className="mt-10 text-center" delayMs={80}>
        <Link to="/galleri" className="btn btn-outline">
          Se hele galleriet
        </Link>
      </Reveal>
    </section>
  );
}
