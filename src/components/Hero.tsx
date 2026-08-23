import { Link } from "@tanstack/react-router";
import { site } from "../data/site";
import { heroImage, smallestVariant, srcSet } from "../data/images";

const heroSrc = smallestVariant(heroImage.files);

export function Hero() {
  return (
    <section className="relative">
      <div className="h-[92svh] min-h-[560px] p-3 md:p-5 lg:p-6">
        <div className="relative h-full w-full overflow-hidden rounded-3xl bg-brown-deep/15 shadow-warm">
          <img
            src={heroSrc.src}
            srcSet={srcSet(heroImage.files)}
            sizes="100vw"
            alt={heroImage.alt}
            width={heroSrc.width}
            height={heroSrc.height}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-[center_42%] md:object-center"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-brown-deep/55 via-transparent to-brown-deep/25"
          />

          <div className="relative z-10 flex h-full flex-col justify-between px-5 py-7 md:px-10 md:py-10 lg:px-14 lg:py-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="max-w-xl">
                <p className="overline-label text-on-dark/80">
                  Bryllupsfotograf på Sørlandet og i Oslo
                </p>
                <h1 className="mt-3 text-5xl text-on-dark drop-shadow-soft md:text-6xl lg:text-7xl">
                  {site.name}
                </h1>
              </div>

              <p className="max-w-xs text-base leading-relaxed text-on-dark/90 drop-shadow-soft md:text-right md:text-lg">
                Bryllupsbilder med ro, varme og full kontroll – så dere kan være
                til stede i dagen.
              </p>
            </div>

            <nav aria-label="Hovednavigasjon">
              <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.85rem] font-medium tracking-wide text-on-dark/80">
                <li>
                  <Link
                    to="/galleri"
                    className="underline-offset-4 transition-colors hover:text-on-dark hover:underline"
                  >
                    Galleri
                  </Link>
                </li>
                <li>
                  <a
                    href="#om-simon"
                    className="underline-offset-4 transition-colors hover:text-on-dark hover:underline"
                  >
                    Om Simon
                  </a>
                </li>
                <li>
                  <a
                    href="#heldag"
                    className="underline-offset-4 transition-colors hover:text-on-dark hover:underline"
                  >
                    Heldag
                  </a>
                </li>
                <li>
                  <a
                    href="#tilbakemeldinger"
                    className="underline-offset-4 transition-colors hover:text-on-dark hover:underline"
                  >
                    Tilbakemeldinger
                  </a>
                </li>
                <li>
                  <a
                    href="#kontakt"
                    className="underline-offset-4 transition-colors hover:text-on-dark hover:underline"
                  >
                    Kontakt
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
