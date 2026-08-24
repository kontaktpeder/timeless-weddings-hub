import { site } from "../data/site";
import { Reveal } from "./Reveal";

export function ContactCTA() {
  return (
    <section id="kontakt" className="scroll-mt-24">
      <Reveal className="mx-auto max-w-3xl px-5 py-16 text-center md:py-28">
        <p className="overline-label">Kontakt</p>
        <h2 className="mt-4 text-3xl text-brown-deep md:text-5xl">
          Skal vi ta en uforpliktende prat?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-brown-deep/75 md:text-lg">
          Send en e-post med bryllupsdato og sted, eller ring hvis dere
          ønsker å høre mer.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={site.mailtoInquiry} className="btn btn-primary">
            Send e-post
          </a>
          <a href={site.phoneHref} className="btn btn-outline">
            Ring Simon
          </a>
        </div>

        <address className="mt-12 flex flex-col items-center gap-2.5 text-[0.95rem] not-italic">
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-brown-deep underline decoration-clay/60 underline-offset-4 transition-colors hover:text-brown"
          >
            {site.email}
          </a>
          <a
            href={site.phoneHref}
            className="font-medium text-brown-deep underline decoration-clay/60 underline-offset-4 transition-colors hover:text-brown"
          >
            {site.phoneDisplay}
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brown-deep underline decoration-clay/60 underline-offset-4 transition-colors hover:text-brown"
          >
            Instagram {site.instagramHandle}
          </a>
        </address>
      </Reveal>
    </section>
  );
}
