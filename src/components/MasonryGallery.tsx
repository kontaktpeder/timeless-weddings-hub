import { useState } from "react";
import { galleryImages } from "../data/images";
import { GalleryLightbox } from "./GalleryLightbox";

/**
 * Samlet galleri — tett, organisk masonry-oppsett med blandede
 * vertikale og horisontale bilder. Bilder hentes automatisk fra
 * src/assets/images/ via src/data/images.ts.
 */
export function MasonryGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div className="columns-2 gap-2 sm:gap-2.5 lg:columns-3 xl:columns-4">
        {galleryImages.map((image, i) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setLightboxIndex(i)}
            aria-label={`Åpne bilde i fullskjerm: ${image.alt}`}
            className="group mb-2 block w-full cursor-pointer break-inside-avoid overflow-hidden rounded-md sm:mb-2.5"
          >
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 25vw"
              className="w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <GalleryLightbox
          images={galleryImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
