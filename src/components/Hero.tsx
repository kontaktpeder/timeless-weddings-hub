import { Link } from "@tanstack/react-router";
import { site } from "../data/site";
import heroImage from "../assets/images/hero/hero.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pt-12 pb-16 md:grid-cols-[1.05fr_1fr] md:gap-14 md:px-8 md:pt-20 md:pb-24">
        <div className="max-w-xl">
          <p className="overline-label">Bryllupsfotograf på Sørlandet og i Oslo</p>
          <h1 className="mt-5 text-5xl text-brown-deep md:text-7xl">
            {site.name}
          </h1>
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
            src={heroImage}
            alt="Brudepar i en varm klem i gyllent kveldslys på Sørlandet"
            width={1536}
            height={1024}
            fetchPriority="high"
            decoding="async"
            sizes="(max-width: 768px) 100vw, 46vw"
            className="relative aspect-[3/2] w-full rounded-3xl object-cover shadow-warm"
          />
        </div>
      </div>
    </section>
  );
}
