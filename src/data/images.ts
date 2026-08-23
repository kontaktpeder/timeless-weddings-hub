/**
 * Bildehåndtering.
 *
 * Alle bilder hentes automatisk fra lokale mapper via import.meta.glob.
 * Legg nye bilder i src/assets/images/gallery/ (og eventuelt carousel/)
 * — de plukkes opp uten endringer i koden.
 *
 * Alternativ tekst og rekkefølge styres fra filnavnet: prefiks med tall
 * (01-, 02-, ...) og legg inn en alt-tekst i altText nedenfor.
 * Faller tilbake til en generisk tekst om filnavnet mangler oppføring.
 */
export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const carouselModules = import.meta.glob("../assets/images/carousel/*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const galleryModules = import.meta.glob("../assets/images/gallery/*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

/** Alt-tekster per filnavn (uten filendelse). */
const altText: Record<string, string> = {
  "01-bride-laughing": "Brud som ler med buketten sin i varmt vinduslys",
  "02-couple-walking": "Brudepar som går hånd i hånd langs en grusvei i solnedgang",
  "03-ceremony": "Rørt brudgom under vielsen i en hvit trekirke",
  "04-rings": "Nærbilde av hender som bytter vielsesringer i stearinlys",
  "05-first-dance": "Brudeparets første dans under varme lyslenker",
  "06-bouquet": "Brudebukett med kremfargede roser mot blondekjole",
  "07-groom": "Brudgom som retter på slipset i mykt morgenlys",
  "08-veil-laughter": "Brudepar som ler sammen under sløret i kystlandskapet",
  "09-toast": "Bryllupsgjester som skåler ved langbord i kveldslys",
  "10-landscape-kiss": "Brudepar som kysser i et vidt norsk fjordlandskap",
  "11-table-setting": "Dekket festbord med stearinlys og ville blomster",
  "12-confetti": "Nygift par i konfettiregn utenfor en hvit trekirke",
};

function basename(path: string): string {
  return path.split("/").pop()?.replace(/\.[^.]+$/, "") ?? path;
}

function toImages(
  modules: Record<string, string>,
  width: number,
  height: number,
): GalleryImage[] {
  return Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([path, src]) => ({
      src,
      alt: altText[basename(path)] ?? "Bryllupsbilde fotografert av Simon Myklebost",
      width,
      height,
    }));
}

/** Vertikale bilder til den kontinuerlige karusellen (832×1248). */
export const carouselImages: GalleryImage[] = toImages(carouselModules, 832, 1248);

const galleryOnly = toImages(galleryModules, 1248, 832);

/**
 * Det samlede galleriet på /galleri — alle utvalgte bilder,
 * vertikale og horisontale, uten gruppering per bryllup.
 */
export const galleryImages: GalleryImage[] = [...carouselImages, ...galleryOnly];
