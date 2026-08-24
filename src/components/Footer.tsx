import { site } from "../data/site";

export function Footer() {
  return (
    <footer className="relative bg-brown-deep text-on-dark">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-background via-background/90 to-brown-deep" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 py-24 text-center md:py-32">
        <p className="font-display text-3xl md:text-5xl">{site.name}</p>
        <p className="mt-4 max-w-md text-base leading-relaxed text-on-dark/75 md:text-lg">
          Bryllupsfotograf på Sørlandet og i Oslo. Bilder med ro, varme og full
          kontroll – så dere kan være til stede i dagen.
        </p>

        <ul className="mt-10 flex flex-col items-center gap-4 text-lg md:flex-row md:gap-8 md:text-xl">
          <li>
            <a
              href={`mailto:${site.email}`}
              className="text-on-dark/80 underline-offset-4 transition-colors hover:text-on-dark hover:underline"
            >
              {site.email}
            </a>
          </li>
          <li>
            <a
              href={site.phoneHref}
              className="text-on-dark/80 underline-offset-4 transition-colors hover:text-on-dark hover:underline"
            >
              {site.phoneDisplay}
            </a>
          </li>
          <li>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-dark/80 underline-offset-4 transition-colors hover:text-on-dark hover:underline"
            >
              Instagram {site.instagramHandle}
            </a>
          </li>
        </ul>
      </div>

      <div>
        <div className="mx-auto flex max-w-6xl items-center justify-center px-5 py-6 text-xs text-on-dark/50 md:px-8">
          <p>
            Nettside levert av{" "}
            <a
              href="https://studiopah.no/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 transition-colors hover:text-on-dark hover:underline"
            >
              studioPAH
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
