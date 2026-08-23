import { Link } from "@tanstack/react-router";
import { carouselImages, smallestVariant, srcSet } from "../data/images";

/**
 * Sømløs, kontinuerlig bildekarusell.
 * Ren CSS-animasjon (transform på compositor-tråden), duplisert rekke
 * for en loop uten synlig hopp. Pauser ved hover/fokus/aktiv interaksjon,
 * og blir manuelt skrubbbar ved prefers-reduced-motion.
 * Alle bilder åpner det samlede galleriet på /galleri.
 */
export function InfiniteImageCarousel() {
  const doubled = [...carouselImages, ...carouselImages];
  const half = carouselImages.length;

  return (
    <section aria-label="Utvalgte bryllupsbilder" className="py-16 md:py-24">
      <div className="mx-auto mb-8 flex max-w-6xl items-end justify-between gap-6 px-5 md:px-8">
        <div>
          <p className="overline-label">Utvalgte øyeblikk</p>
          <h2 className="mt-3 text-3xl text-brown-deep md:text-4xl">
            Bilder fra virkelige dager
          </h2>
        </div>
      </div>

      <div className="marquee">
        <div className="marquee-track">
          {doubled.map((image, i) => {
            const isDuplicate = i >= half;
            const preview = smallestVariant(image.variants);
            return (
              <Link
                key={`${image.order}-${i}`}
                to="/galleri"
                aria-hidden={isDuplicate || undefined}
                tabIndex={isDuplicate ? -1 : undefined}
                aria-label={isDuplicate ? undefined : `Se ${image.alt} i galleriet`}
                className="group relative block h-64 w-44 shrink-0 overflow-hidden sm:h-80 sm:w-56 md:h-96 md:w-64"
              >
                <img
                  src={preview.src}
                  srcSet={srcSet(image.variants)}
                  sizes="(max-width: 640px) 11rem, (max-width: 768px) 14rem, 16rem"
                  alt={isDuplicate ? "" : image.alt}
                  width={preview.width}
                  height={preview.height}
                  loading={i < 4 ? "eager" : "lazy"}
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link to="/galleri" className="btn btn-outline">
          Se hele galleriet
        </Link>
      </div>
    </section>
  );
}
