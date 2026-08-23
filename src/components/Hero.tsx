import { Link } from "@tanstack/react-router";
import { site } from "../data/site";
import { heroImage, smallestVariant, srcSet } from "../data/images";

const heroSrc = smallestVariant(heroImage.files);

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pt-12 pb-16 md:grid-cols-[1.05fr_1fr] md:gap-14 md:px-8 md:pt-20 md:pb-24">
        <div className="max-w-xl">
          <p className="overline-label">Bryllupsfotograf på Sørlandet og i Oslo</p>
          <h1 className="mt-5 text-5xl text-brown-deep md:text-7xl">
            {site.name}
          </h1>
          <nav aria-label="Hovednavigasjon" className="mt-6">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.85rem] font-medium tracking-wide text-brown-deep/75">
              <li>
                <Link to="/galleri" className="underline-offset-4 transition-colors hover:text-brown-deep hover:underline">
                  Galleri
                </Link>
              </li>
              <li>
                <a href="#om-simon" className="underline-offset-4 transition-colors hover:text-brown-deep hover:underline">
                  Om Simon
                </a>
              </li>
              <li>
                <a href="#heldag" className="underline-offset-4 transition-colors hover:text-brown-deep hover:underline">
                  Heldag
                </a>
              </li>
              <li>
                <a href="#tilbakemeldinger" className="underline-offset-4 transition-colors hover:text-brown-deep hover:underline">
                  Tilbakemeldinger
                </a>
              </li>
              <li>
                <a href="#kontakt" className="underline-offset-4 transition-colors hover:text-brown-deep hover:underline">
                  Kontakt
                </a>
              </li>
            </ul>
          </nav>
          <p className="mt-6 text-lg leading-relaxed text-brown-deep/80 md:text-xl">
            Bryllupsbilder med ro, varme og full kontroll – så dere kan være
            til stede i dagen.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={site.mailtoInquiry} className="btn btn-primary">
              Ta kontakt på e-post
            </a>
            <Link to="/galleri" className="btn btn-outline">
              Se utvalgte bilder
            </Link>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -top-6 -right-4 hidden h-full w-full rounded-3xl border border-brown/25 md:block"
          />
          <img
            src={heroSrc.src}
            srcSet={srcSet(heroImage.files)}
            sizes="(max-width: 768px) 100vw, 46vw"
            alt={heroImage.alt}
            width={heroSrc.width}
            height={heroSrc.height}
            fetchPriority="high"
            decoding="async"
            className="relative aspect-[3/2] w-full rounded-3xl object-cover object-[center_42%] shadow-warm md:object-center"
          />
        </div>
      </div>
    </section>
  );
}
