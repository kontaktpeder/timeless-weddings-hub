import { Reveal } from "./Reveal";

export function TrustIntro() {
  return (
    <section className="border-y border-border bg-cream/60">
      <Reveal className="mx-auto max-w-3xl px-5 py-16 text-center md:py-24">
        <hr className="rule mx-auto mb-10 w-16" />
        <h2 className="text-3xl text-brown-deep md:text-[2.75rem] md:leading-snug">
          Dere skal være til stede. Jeg passer på resten.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-brown-deep/75 md:text-lg">
          På bryllupsdagen skal dere slippe å tenke på hvor fotografen er,
          hvilke bilder som mangler, eller om de viktige øyeblikkene blir
          fanget. Med god planlegging, tydelig kommunikasjon og ro gjennom
          hele dagen sørger jeg for at dere kan senke skuldrene og være fullt
          til stede – mens jeg tar vare på historien deres.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[0.85rem] font-medium tracking-wide text-brown-deep/75">
          <a
            href="#tilbakemeldinger"
            className="underline-offset-4 transition-colors hover:text-brown-deep hover:underline"
          >
            Tilbakemeldinger
          </a>
          <a
            href="#kontakt"
            className="underline-offset-4 transition-colors hover:text-brown-deep hover:underline"
          >
            Kontakt
          </a>
        </div>
        <hr className="rule mx-auto mt-10 w-16" />
      </Reveal>
    </section>
  );
}
