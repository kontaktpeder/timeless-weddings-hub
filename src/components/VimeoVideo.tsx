import { useState } from "react";
import { site } from "../data/site";
import poster from "../assets/images/video-posters/heldag-poster.jpg";

/**
 * Videoseksjon for en fremtidig Vimeo-video.
 *
 * Vimeo-lenken legges inn som site.vimeoId i src/data/site.ts når den er
 * klar. Inntil da er seksjonen skjult. Vimeo-iframen lastes først etter
 * at brukeren trykker på avspillingsknappen — ingen tredjepartsskript
 * eller cookies ved sidevisning.
 */
export function VimeoVideo() {
  const [playing, setPlaying] = useState(false);

  if (!site.vimeoId) return null;

  return (
    <section aria-label="Bryllupsfilm" className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
      <div className="max-w-xl">
        <p className="overline-label">Film</p>
        <h2 className="mt-4 text-3xl text-brown-deep md:text-4xl">
          Dagen i bevegelse
        </h2>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl shadow-warm">
        {playing ? (
          <div className="aspect-video w-full">
            <iframe
              src={`https://player.vimeo.com/video/${site.vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
              title="Bryllupsfilm av Simon Myklebost"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="h-full w-full border-0"
            />
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label="Spill av bryllupsfilmen"
            className="group relative block aspect-video w-full cursor-pointer"
          >
            <img
              src={poster}
              alt=""
              width={1536}
              height={1024}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <span className="absolute inset-0 bg-brown-deep/25 transition-colors group-hover:bg-brown-deep/35" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-on-dark text-brown-deep shadow-lift transition-transform group-hover:scale-105 md:h-20 md:w-20">
                <svg width="22" height="26" viewBox="0 0 22 26" fill="currentColor" aria-hidden="true" className="ml-1">
                  <path d="M0 0l22 13L0 26V0Z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>
    </section>
  );
}
