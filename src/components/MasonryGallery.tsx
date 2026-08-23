import { useRef, useState } from "react";
import { galleryImages } from "../data/images";
import { GalleryLightbox } from "./GalleryLightbox";

const EAGER_COUNT = 6;

/**
 * Samlet galleri — tett, organisk masonry-oppsett med blandede
 * vertikale og horisontale bilder. Rekkefølge, stier og alt-tekst
 * kommer fra gallery-manifest.json.
 */
export function MasonryGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const openedIndex = useRef<number | null>(null);

  const open = (index: number) => {
    openedIndex.current = index;
    setLightboxIndex(index);
  };

  const close = () => {
    const index = openedIndex.current;
    setLightboxIndex(null);
    queueMicrotask(() => {
      if (index == null) return;
      triggerRefs.current[index]?.focus();
    });
  };

  return (
    <>
      <div className="columns-2 gap-1.5 overflow-x-hidden md:columns-3 xl:columns-4 2xl:columns-5">
        {galleryImages.map((image, i) => (
          <button
            key={image.order}
            ref={(node) => {
              triggerRefs.current[i] = node;
            }}
            type="button"
            onClick={() => open(i)}
            aria-label={`Åpne bilde i fullskjerm: ${image.alt}`}
            className="group mb-1.5 block w-full cursor-pointer break-inside-avoid overflow-hidden rounded-[6px]"
          >
            <img
              src={image.thumb}
              alt={image.alt}
              width={image.thumbWidth}
              height={image.thumbHeight}
              loading={i < EAGER_COUNT ? "eager" : "lazy"}
              decoding="async"
              sizes="(max-width: 767px) 50vw, (max-width: 1279px) 33vw, (max-width: 1535px) 25vw, 20vw"
              className="h-auto w-full"
            />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <GalleryLightbox
          images={galleryImages}
          index={lightboxIndex}
          onClose={close}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
