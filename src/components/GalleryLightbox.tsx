import { useCallback, useEffect, useRef } from "react";
import type { GalleryImage } from "../data/images";

interface GalleryLightboxProps {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

/**
 * Enkel, rask og tastaturvennlig fullskjermvisning.
 * Escape lukker, piltaster blar, klikk på mørk bakgrunn lukker.
 */
export function GalleryLightbox({ images, index, onClose, onNavigate }: GalleryLightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const image = images[index];

  const prev = useCallback(
    () => onNavigate((index - 1 + images.length) % images.length),
    [index, images.length, onNavigate],
  );
  const next = useCallback(
    () => onNavigate((index + 1) % images.length),
    [index, images.length, onNavigate],
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  if (!image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Fullskjermvisning av bilde ${index + 1} av ${images.length}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-brown-deep/95 p-4 md:p-10"
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Lukk fullskjermvisning"
        className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full text-on-dark/80 transition-colors hover:bg-on-dark/10 hover:text-on-dark"
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); prev(); }}
        aria-label="Forrige bilde"
        className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-on-dark/80 transition-colors hover:bg-on-dark/10 hover:text-on-dark md:left-6"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M12.5 3.5L6 10l6.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <figure className="max-h-full max-w-full" onClick={(e) => e.stopPropagation()}>
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          decoding="async"
          className="max-h-[78vh] w-auto max-w-full rounded-md object-contain"
        />
        <figcaption className="mt-3 text-center text-xs text-on-dark/60">
          {index + 1} / {images.length}
        </figcaption>
      </figure>

      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); next(); }}
        aria-label="Neste bilde"
        className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-on-dark/80 transition-colors hover:bg-on-dark/10 hover:text-on-dark md:right-6"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M7.5 3.5L14 10l-6.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
