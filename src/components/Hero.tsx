import { Link } from "@tanstack/react-router";
import { site } from "../data/site";
import { heroImage, smallestVariant, srcSet } from "../data/images";

export function Hero() {
  const heroSrc = smallestVariant(heroImage.files);

  return (
    <section className="relative">
      {/* Ytre ramme: luft mot kantene på store skjermer, avrundet bilde innerst */}
      <div className="h-[92svh] min-h-[560px] p-3 md:p-5 lg:p-6">
        <div className="relative h-full w-full overflow-hidden rounded-3xl bg-brown-deep/15 shadow-warm">
          {/* Bakgrunnsbilde */}
          <img
            src={heroSrc.src}
            alt={heroImage.alt}
            width={heroSrc.width}
            height={heroSrc.height}
            srcSet={srcSet(heroImage.files)}
            sizes="100vw"
            fetchPriority="high"
            decoding="async"
            className="hero-kenburns absolute inset-0 h-full w-full object-cover"
          />

          {/* Myk mørkning for lesbarhet */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-brown-deep/30 via-transparent to-brown-deep/20"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-brown-deep/55 via-brown-deep/5 to-transparent"
          />

          {/* Innhold lagt over bildet */}
          <div className="relative z-10 flex h-full flex-col justify-end px-5 py-7 md:px-10 md:py-10 lg:px-14 lg:py-12">
            {/* Desktop: tittel nede venstre, undertekst nede høyre */}
            <div className="hidden flex-col gap-6 md:flex md:flex-row md:items-end md:justify-between">
              <div className="hero-copy-in max-w-xl">
                <p className="overline-label text-on-dark/80">
                  Bryllupsfotograf på Sørlandet og i Oslo
                </p>
                <h1 className="mt-3 text-5xl text-on-dark drop-shadow-soft lg:text-7xl">
                  {site.name}
                </h1>
              </div>

              <p className="hero-copy-in-late max-w-xs pb-1 text-base leading-relaxed text-on-dark/90 drop-shadow-soft md:text-right md:text-lg">
                Bryllupsbilder med ro, varme og full kontroll – så dere kan være
                til stede i dagen.
              </p>
            </div>

            <div className="flex flex-1 flex-col md:hidden">
              <div className="absolute top-[54%] right-0 left-0 -translate-y-1/2 px-5">
                <h1 className="hero-copy-in text-center text-5xl text-on-dark drop-shadow-soft">
                  {site.name}
                </h1>
              </div>
            </div>

            <p className="hero-copy-in-late mt-auto text-center text-xs font-medium tracking-[0.18em] text-on-dark/80 uppercase md:hidden">
              Bryllupsfotograf på Sørlandet og i Oslo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
