import { testimonials } from "../data/testimonials";
import { Reveal } from "./Reveal";

/**
 * Kundeuttalelser. Innholdet ligger i src/data/testimonials.ts og
 * erstattes enkelt med faktiske tilbakemeldinger når de foreligger.
 * Mobil: én om gangen med scroll-snap. Desktop: tre kolonner.
 */
export function Testimonials() {
  return (
    <section id="tilbakemeldinger" className="scroll-mt-24 bg-gradient-to-b from-cream/0 via-cream/60 to-cream/0">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal className="max-w-xl">
          <p className="overline-label">Tilbakemeldinger</p>
          <h2 className="mt-4 text-3xl text-brown-deep md:text-4xl">
            Ord fra brudepar
          </h2>
        </Reveal>

        <ul className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:snap-none md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0">
          {testimonials.map((t, i) => (
            <Reveal
              as="li"
              key={`${t.names}-${i}`}
              delayMs={i * 80}
              className="flex w-[85vw] max-w-sm shrink-0 snap-center flex-col rounded-2xl border border-border bg-card p-7 shadow-warm md:w-auto md:max-w-none"
            >
              <svg
                width="26"
                height="20"
                viewBox="0 0 26 20"
                fill="none"
                aria-hidden="true"
                className="text-clay"
              >
                <path
                  d="M0 20V11.4C0 4.9 3.6 1 10.2 0l1 2.6C7.5 3.6 5.6 5.7 5.4 9H10v11H0Zm15.8 0V11.4C15.8 4.9 19.4 1 26 0l1 2.6c-3.7 1-5.6 3.1-5.8 6.4H26v11H15.8Z"
                  fill="currentColor"
                  opacity="0.55"
                />
              </svg>
              <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-brown-deep/80">
                {t.quote}
              </blockquote>
              <footer className="mt-6 pt-4">
                <p className="text-sm font-medium text-brown-deep">{t.names}</p>
                <p className="mt-0.5 text-xs text-brown-deep/60">{t.date}</p>
              </footer>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
