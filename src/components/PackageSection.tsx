import { heldagPackage } from "../data/package";
import { site } from "../data/site";

export function PackageSection() {
  return (
    <section id="heldag" className="scroll-mt-24 bg-brown text-on-dark">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1fr_1.1fr] md:gap-16 md:px-8 md:py-28">
        <div>
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
        </div>

        <div className="md:pt-14">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-on-dark/60">
            Inkludert i pakken
          </p>
          <ul className="mt-5 divide-y divide-on-dark/15 border-y border-on-dark/15">
            {heldagPackage.includes.map((item) => (
              <li key={item} className="flex items-start gap-4 py-3.5">
                <span
                  aria-hidden="true"
                  className="mt-[0.7rem] h-px w-5 shrink-0 bg-clay"
                />
                <span className="text-[0.95rem] leading-relaxed text-on-dark/90">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
