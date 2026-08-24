import { useEffect, useRef, type Ref } from "react";
import { Link } from "@tanstack/react-router";
import { carouselImages, smallestVariant } from "../data/images";
import { Reveal } from "./Reveal";

function CarouselStrip({
  groupRef,
  duplicate,
}: {
  groupRef?: Ref<HTMLDivElement>;
  duplicate?: boolean;
}) {
  return (
    <div
      ref={groupRef}
      className="flex shrink-0"
      aria-hidden={duplicate || undefined}
    >
      {carouselImages.map((image) => {
        const preview = smallestVariant(image.variants);
        return (
          <Link
            key={`${image.order}-${duplicate ? "b" : "a"}`}
            to="/galleri"
            tabIndex={duplicate ? -1 : undefined}
            aria-label={duplicate ? undefined : `Se ${image.alt} i galleriet`}
            className="relative block h-72 w-48 shrink-0 overflow-hidden bg-brown/20 sm:h-80 sm:w-56 md:h-96 md:w-64"
          >
            <img
              src={preview.src}
              alt={duplicate ? "" : image.alt}
              width={preview.width}
              height={preview.height}
              loading="eager"
              decoding="async"
              draggable={false}
              className="h-full w-full object-cover"
            />
          </Link>
        );
      })}
    </div>
  );
}

/**
 * Kontinuerlig karusell drevet i piksler (ikke CSS -50%).
 * iOS Safari tolker prosent-transform mot viewport, så ruten sto stille på mobil.
 */
export function InfiniteImageCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    const group = groupRef.current;
    if (!track || !group) return;

    let frame = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(48, now - last);
      last = now;
      const width = group.getBoundingClientRect().width;
      const mobile = window.matchMedia("(max-width: 767px)").matches;
      const speed = mobile ? 58 : 44;

      if (width > 1) {
        offsetRef.current += (speed * dt) / 1000;
        if (offsetRef.current >= width) offsetRef.current -= width;
        track.style.transform = `translate3d(${-offsetRef.current}px,0,0)`;
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section aria-label="Utvalgte bryllupsbilder" className="py-16 md:py-24">
      <div className="mx-auto mb-8 max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="overline-label">Utvalgte øyeblikk</p>
          <h2 className="mt-3 text-3xl text-brown-deep md:text-4xl">
            Bilder fra virkelige dager
          </h2>
        </Reveal>
      </div>

      <div className="overflow-hidden touch-pan-y">
        <div ref={trackRef} className="flex w-max will-change-transform">
          <CarouselStrip groupRef={groupRef} />
          <CarouselStrip duplicate />
        </div>
      </div>

      <Reveal className="mt-10 text-center" delayMs={120}>
        <Link to="/galleri" className="btn btn-outline">
          Se hele galleriet
        </Link>
      </Reveal>
    </section>
  );
}
