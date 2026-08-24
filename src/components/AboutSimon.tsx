import portrait from "../assets/images/simon/portrait.jpg";
import { Reveal } from "./Reveal";

export function AboutSimon() {
  return (
    <section id="om-simon" className="scroll-mt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[0.85fr_1fr] md:gap-16 md:px-8 md:py-24">
        <Reveal>
          <div className="relative mx-auto w-full max-w-sm md:max-w-none">
            <img
              src={portrait}
              alt="Portrett av bryllupsfotograf Simon Myklebost med kameraet sitt"
              width={1024}
              height={1280}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 768px) 90vw, 38vw"
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-warm"
            />
          </div>
        </Reveal>

        <Reveal delayMs={90} className="max-w-xl">
          <p className="overline-label">Om Simon</p>
          <h2 className="mt-4 text-3xl text-brown-deep md:text-5xl">
            Hei, jeg heter Simon.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-brown-deep/75 md:text-lg">
            Jeg ønsker at dere skal oppleve fotograferingen som en trygg og
            naturlig del av bryllupsdagen. Dere skal bli møtt på en hyggelig
            og profesjonell måte, samtidig som det er rom for latter, følelser
            og alle de små øyeblikkene som gjør dagen deres unik.
          </p>
          <p className="mt-4 text-base leading-relaxed text-brown-deep/75 md:text-lg">
            Før den store dagen møtes vi gjerne til en planleggingsprat over
            en kopp kaffe. Da går vi gjennom planen, ønskene deres og alt dere
            lurer på – slik at dere kan være helt rolige når dagen kommer.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
