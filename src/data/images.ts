/**
 * Bildehåndtering.
 *
 * Manifestene i denne mappen er eneste kilde for stier, rekkefølge,
 * størrelser og alternativ tekst. Bildene ligger som statiske WebP-filer
 * under public/images og lastes via URL, ikke via bundelen.
 */
import heroJson from "./hero.json";
import carouselManifest from "./carousel-manifest.json";
import galleryManifest from "./gallery-manifest.json";

export interface ImageVariant {
  src: string;
  width: number;
  height: number;
  bytes: number;
}

export interface HeroImage {
  sourceFilename: string;
  alt: string;
  files: ImageVariant[];
}

export interface CarouselImage {
  order: number;
  sourceFilename: string;
  alt: string;
  variants: ImageVariant[];
  href: "/galleri";
}

export interface GalleryImage {
  order: number;
  sourceFilename: string;
  category: string;
  cluster: string;
  alt: string;
  orientation: "horizontal" | "vertical";
  thumb: string;
  full: string;
  thumbWidth: number;
  thumbHeight: number;
  fullWidth: number;
  fullHeight: number;
  thumbBytes: number;
  fullBytes: number;
}

export const heroImage = heroJson as HeroImage;

export const carouselImages: CarouselImage[] = (
  carouselManifest as CarouselImage[]
).slice().sort((a, b) => a.order - b.order);

export const galleryImages: GalleryImage[] = (
  galleryManifest as GalleryImage[]
).slice().sort((a, b) => a.order - b.order);

export function smallestVariant(variants: ImageVariant[]): ImageVariant {
  return variants.reduce((best, variant) =>
    variant.width < best.width ? variant : best,
  );
}

export function srcSet(variants: ImageVariant[]): string {
  return variants.map((variant) => `${variant.src} ${variant.width}w`).join(", ");
}
