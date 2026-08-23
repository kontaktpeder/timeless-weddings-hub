import { Link } from "@tanstack/react-router";
import { site } from "../data/site";
import heroAsset from "../assets/images/hero/hero.jpg.asset.json";

export function Hero() {
  return (
    <section className="relative">
      {/* Ytre ramme: luft mot kantene på store skjermer, avrundet bilde innerst */}
      <div className="h-[92svh] min-h-[560px] p-3 md:p-5 lg:p-6">
        <div className="relative h-full w-full overflow-hidden rounded-3xl bg-brown-deep/15 shadow-warm">
          {/* Bakgrunnsbilde */}
          <img
            src={heroAsset.url}
            alt="Brudepar kysser på en landevei omgitt av sommereng og skog"
            width={1600}
            height={1067}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Myk mørkning for lesbarhet */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-brown-deep/55 via-brown-deep/25 to-brown-deep/45"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-brown-deep/70 via-transparent to-brown-deep/20"
          />

          {/* Innhold lagt over bildet */}
          <div className="relative z-10 flex h-full flex-col px-5 py-7 md:px-10 md:py-10 lg:px-14 lg:py-12">
            {/* Desktop: tittel venstre, undertekst høyre */}
            <div className="hidden flex-col gap-6 md:flex md:flex-row md:items-start md:justify-between">
              <div className="max-w-xl">
                <p className="overline-label text-on-dark/80">
                  Bryllupsfotograf på Sørlandet og i Oslo
                </p>
                <h1 className="mt-3 text-5xl text-on-dark lg:text-7xl drop-shadow-soft">
                  {site.name}
                </h1>
              </div>

              <p className="max-w-xs text-base leading-relaxed text-on-dark/90 md:text-right md:text-lg drop-shadow-soft">
                Bryllupsbilder med ro, varme og full kontroll – så dere kan være
                til stede i dagen.
              </p>
            </div>

            {/* Mobil: tittel sentrert ved parets midje */}
            <div className="flex flex-1 flex-col md:hidden">
              <h1 className="absolute top-[54%] left-0 right-0 -translate-y-1/2 px-5 text-center text-5xl text-on-dark drop-shadow-soft">
                {site.name}
              </h1>
            </div>

            {/* Desktop: linker i bunn */}
            <nav aria-label="Hovednavigasjon" className="hidden md:block">
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

            {/* Mobil: overline i bunn */}
            <p className="mt-auto text-center text-xs font-medium uppercase tracking-[0.18em] text-on-dark/80 md:hidden">
              Bryllupsfotograf på Sørlandet og i Oslo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
