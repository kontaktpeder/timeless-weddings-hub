import { Link } from "@tanstack/react-router";
import { site } from "../data/site";

export function Footer() {
  return (
    <footer className="bg-brown-deep text-on-dark">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8 md:py-16">
        <div>
          <p className="font-display text-2xl">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-on-dark/70">
            Bryllupsfotograf på Sørlandet og i Oslo. Bilder med ro, varme og
            full kontroll – så dere kan være til stede i dagen.
          </p>
        </div>

        <nav aria-label="Bunntekstnavigasjon">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-on-dark/50">Sider</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/" className="text-on-dark/80 transition-colors hover:text-on-dark">Hjem</Link></li>
            <li><Link to="/galleri" className="text-on-dark/80 transition-colors hover:text-on-dark">Galleri</Link></li>
            <li><Link to="/" hash="heldag" className="text-on-dark/80 transition-colors hover:text-on-dark">Heldagsfotografering</Link></li>
            <li><Link to="/" hash="kontakt" className="text-on-dark/80 transition-colors hover:text-on-dark">Kontakt</Link></li>
          </ul>
        </nav>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-on-dark/50">Kontakt</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="text-on-dark/80 underline-offset-4 transition-colors hover:text-on-dark hover:underline">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="text-on-dark/80 underline-offset-4 transition-colors hover:text-on-dark hover:underline">
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
      </div>

      <div className="border-t border-on-dark/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-5 text-xs text-on-dark/50 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p>Bryllupsfotograf Sørlandet · Kristiansand · Oslo</p>
        </div>
      </div>
    </footer>
  );
}
