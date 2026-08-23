import { Link } from "@tanstack/react-router";
import { carouselImages } from "../data/images";

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
        <div className="marquee-track px-2">
          {doubled.map((image, i) => {
            const isDuplicate = i >= half;
            const offset = i % 2 === 1;
            return (
              <Link
                key={`${image.src}-${i}`}
                to="/galleri"
                aria-hidden={isDuplicate || undefined}
                tabIndex={isDuplicate ? -1 : undefined}
                aria-label={isDuplicate ? undefined : `Se ${image.alt} i galleriet`}
                className={`group relative block shrink-0 overflow-hidden rounded-2xl shadow-warm transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-lift ${
                  offset ? "mt-8 h-60 w-40 sm:h-72 sm:w-48 md:h-80 md:w-56" : "h-72 w-48 sm:h-84 sm:w-56 md:h-96 md:w-64"
                }`}
              >
                <img
                  src={image.src}
                  alt={isDuplicate ? "" : image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
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
