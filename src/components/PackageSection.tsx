import { heldagPackage } from "../data/package";
import { site } from "../data/site";
import { Reveal } from "./Reveal";

export function PackageSection() {
  return (
    <section id="heldag" className="scroll-mt-24 bg-brown text-on-dark">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:px-8 md:py-28">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-on-dark/60">
            {heldagPackage.heading}
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            {heldagPackage.name}
          </h2>
          <p className="mt-8 font-display text-5xl md:text-6xl">
            {heldagPackage.price}
          </p>
          <p className="mt-2 text-sm text-on-dark/70">{heldagPackage.priceNote}</p>
          <a href={site.mailtoDate} className="btn btn-light mt-10">
            Spør om datoen er ledig
          </a>
        </Reveal>

        <div>
          <Reveal delayMs={80}>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-on-dark/60">
              Inkludert i pakken
            </p>
          </Reveal>
          <ul className="mt-6 space-y-3 md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-3 md:space-y-0">
            {heldagPackage.includes.map((item, i) => (
              <Reveal
                as="li"
                key={item}
                delayMs={80 + i * 70}
                className="flex items-start gap-3"
              >
                <span
                  aria-hidden="true"
                  className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-clay"
                />
                <span className="text-[0.92rem] leading-snug text-on-dark/90">
                  {item}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
