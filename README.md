# Simon's Lens

Bygg en komplett, produksjonsklar og mobiloptimalisert nettside for bryllupsfotograf Simon Myklebost.

Nettsiden skal være jordnær, moderne, ren og varm, med et forsiktig rustikk-industrielt preg. Bildene skal være den viktigste delen av opplevelsen. Nettsiden skal fremstå profesjonell og eksklusiv, men samtidig personlig og imøtekommende.

REFERANSER

Visuell retning, farger og typografi:
https://www.norseweddings.no/heldag-bryllupsfoto

Inspirasjon til kontinuerlig bildekarusell:
https://www.gullbekkvisuals.no/

Bruk referansene som inspirasjon, men ikke kopier design, tekst, bilder, logo eller komposisjon direkte.

FORRETNINGSFORMÅL

Hovedmålet er å få brudepar til å kontakte Simon på e-post eller telefon.

Nettsiden skal kommunisere at:

- Simon er imøtekommende, hyggelig og profesjonell.
- Brudeparet skal kunne være fullt til stede i bryllupet.
- De skal slippe å lure på hvor fotografen er eller om de viktige øyeblikkene blir fanget.
- Simon har kontroll, planlegger godt og følger dagen på en trygg og rolig måte.
- Bildene skal oppleves varme, naturlige, moderne og tidløse.

Simon fotograferer hovedsakelig på Sørlandet, men tar også oppdrag i Oslo.

TEKNISKE RAMMER

- Bygg nettsiden som en statisk frontend.
- Ikke bruk database.
- Ikke bruk Supabase.
- Ikke bruk autentisering, brukerprofiler, CMS eller administrasjonssystem.
- Ikke bygg bookingsystem.
- Ikke bygg kontaktskjema.
- Kundeuttalelser, pakketekst og øvrig innhold skal være hardkodet i egne lokale datafiler.
- Bilder skal ligge som lokale statiske filer i prosjektet.
- Ikke bruk Vimeo til bilder.
- Vimeo skal kun brukes til video når Vimeo-lenken kommer senere.
- Ikke bruk permanente eksterne bildelenker eller hotlinking.
- Nettsiden skal fungere på simonmyklebost.no.
- Bruk React og TypeScript i Lovables eksisterende oppsett.
- Lag ryddige, gjenbrukbare komponenter.
- Prioriter lav kompleksitet, rask lasting og enkel fremtidig vedlikehold.

SIDESTRUKTUR

Lag to sider:

1. Landingsside på `/`
2. Samlet bildegalleri på `/galleri`

Ikke lag ett galleri per bryllup. Alle utvalgte bilder skal samles på én galleriside.

VISUELL IDENTITET

Navnet og den visuelle tittelen skal kun være:

Simon Myklebost

Ikke lag et symbol eller en illustrert logo. Bruk navnet som en enkel typografisk ordlogo.

Farger:

- Primær krembakgrunn: `#ECE4DA`
- Lys krem: `#F6F1E9`
- Varm mørk brun med et forsiktig rødlig fargespill: `#59413E`
- Dypere brun til kontrast: `#382C29`
- Lys tekst på mørk bakgrunn: `#F7F2EA`
- Diskré varm aksent kan brukes svært sparsommelig: `#A47763`

Typografi:

- Overskrifter: Antic Didone
- Brødtekst, navigasjon og knapper: Poppins
- Store, elegante overskrifter med god luft.
- Ikke bruk for mange forskjellige tekststørrelser eller fontvekter.

Visuelle prinsipper:

- Varm kremfarget grunnflate.
- Diskré korntekstur som gir et analogt fotografisk preg.
- Kornteksturen må være lett og ikke redusere lesbarheten.
- Rustikk-industrielt preg gjennom tynne linjer, asymmetri, stram typografi og enkelte mørke flater.
- God balanse mellom myke former og kantede detaljer.
- Bilder på landingssiden skal ha avrundede hjørner og diskrete skygger.
- Klikkbare bilder kan ha litt tydeligere skygge og en forsiktig løfteeffekt.
- Gallerisiden skal være tettere, mer kantet og ha mindre skygge.
- Ikke overdriv animasjoner, skygger eller dekorative effekter.

MOBIL FØRST

Design først for mobilbredder rundt 375–430 piksler.

Deretter tilpasses løsningen nettbrett og desktop.

Krav:

- Ingen horisontal overflow.
- Gode trykkflater på mobil.
- Kort og tydelig navigasjon.
- God lesbarhet og romslig linjeavstand.
- Bilder skal ikke skape layout-hopp når de lastes.
- Alle seksjoner skal ha en naturlig rytme på små skjermer.
- Desktopversjonen skal utnytte større bilder og mer asymmetri, men mobilopplevelsen er viktigst.

HEADER OG NAVIGASJON

Lag en enkel header med:

- «Simon Myklebost» som typografisk ordlogo.
- Navigasjon til Galleri, Om Simon, Heldag, Tilbakemeldinger og Kontakt.
- På mobil brukes en enkel hamburgermeny.
- Kontaktknappen kan fremheves diskret.
- Headeren kan være sticky, men skal ikke ta mye plass.
- Ingen komplisert navigasjon eller undermenyer.

LANDINGSSIDE

1. HERO

Lag en stor og emosjonell hero med plass til ett sterkt bryllupsbilde.

Vis:

Liten overtekst:
«Bryllupsfotograf på Sørlandet og i Oslo»

Hovedtittel:
«Simon Myklebost»

Budskap:
«Bryllupsbilder med ro, varme og full kontroll – så dere kan være til stede i dagen.»

Primærknapp:
«Ta kontakt på e-post»

Lenke:
`mailto:post@simonmyklebost.no?subject=Forespørsel om bryllupsfotografering`

Sekundærknapp:
«Se utvalgte bilder»

Lenke:
`/galleri`

Hero-bildet skal ha avrundede hjørner og en varm, diskret skygge. Unngå at tekst plasseres over et urolig bilde dersom lesbarheten blir dårlig.

2. TRYGGHET OG HOVEDLØFTE

Lag en kort introduksjonsseksjon med et tydelig budskap:

Overskrift:
«Dere skal være til stede. Jeg passer på resten.»

Tekst:
«På bryllupsdagen skal dere slippe å tenke på hvor fotografen er, hvilke bilder som mangler eller om de viktige øyeblikkene blir fanget. Med god planlegging, tydelig kommunikasjon og ro gjennom dagen sørger Simon for at dere kan senke skuldrene og være fullt til stede.»

Teksten kan språkvaskes, men behold dette budskapet og den jordnære tonen.

3. OM SIMON

Lag en personlig seksjon med plass til et portrett av Simon.

Bruk en foreløpig tekst uten å finne på biografiske opplysninger:

Overskrift:
«Hei, jeg heter Simon.»

Tekst:
«Jeg ønsker at dere skal oppleve fotograferingen som en trygg og naturlig del av bryllupsdagen. Dere skal bli møtt på en hyggelig og profesjonell måte, samtidig som det er rom for latter, følelser og alle de små øyeblikkene som gjør dagen deres unik.»

Bruk gjerne en uformell detalj om at planleggingen kan skje over en kopp kaffe.

Ikke finn på hvor lenge Simon har fotografert, antall bryllup, priser, utdanning eller andre fakta som ikke er oppgitt.

4. KONTINUERLIG BILDEKARUSELL

Lag en sømløs, kontinuerlig og automatisk horisontal bildekarusell inspirert av bildebevegelsen på Gullbekk Visuals.

Krav:

- Bruk omtrent ti bilder.
- Karusellen skal primært vise vertikale bryllupsbilder.
- Bildene skal bevege seg rolig og kontinuerlig.
- Loopen skal være helt sømløs uten synlig hopp.
- Dupliser bilderekken internt hvis det er nødvendig for å lage en sømløs loop.
- Ikke bruk en JavaScript-timer som gir hakkete bevegelse.
- Bruk en effektiv CSS-basert animasjon når det er mulig.
- Bildene kan overlappe litt eller ha varierende høyde for et mer organisk uttrykk.
- Hold avrundede hjørner og diskret skygge.
- Karusellen skal kunne brukes med berøring og mus.
- Pause animasjonen når brukeren holder pekeren over eller aktivt interagerer med den.
- Respekter `prefers-reduced-motion`.
- Ved redusert bevegelse skal bildene kunne blas manuelt.
- Alle bildene i karusellen skal være klikkbare.
- Alle karusellbildene skal åpne `/galleri`.
- Ikke lag en separat lenke eller Vimeo-lenke for hvert bilde.
- Unngå layout-hopp ved å definere bildeformat og dimensjoner.

Rett under karusellen skal det være en tydelig knapp:

«Se hele galleriet»

Lenke:
`/galleri`

5. HELDAGSPAKKEN

Lag en tydelig, elegant og konverteringsorientert seksjon med mørk brun bakgrunn og lys tekst.

Overskrift:
«Hele historien, fra start til slutt»

Pakkenavn:
«Heldagsfotografering»

Pris:
«29 900 kr»

Tillegg:
«Fast pris inkludert mva.»

Inkludert:

- Ett eller to planleggingsmøter, gjerne over en kopp kaffe.
- Start og slutt avtales sammen ut fra planen for bryllupsdagen.
- Fotografering gjennom bryllupsdagen.
- Minimum 400 ferdig redigerte bilder.
- Sneak peek-galleri innen én uke.
- Komplett levering innen to måneder.
- Bildene leveres i et elegant nettbasert galleri.
- Galleriet er enkelt å dele med familie og venner.

Ikke nevn retusjeringer.

Ikke presenter video som en del av pakken.

Bruk primærknappen:
«Spør om datoen er ledig»

Lenke:
`mailto:post@simonmyklebost.no?subject=Er bryllupsdatoen vår ledig?`

6. TILBAKEMELDINGER

Lag et eget tydelig felt for kundeuttalelser.

Kundeuttalelsene skal ligge i en lokal hardkodet TypeScript-fil, for eksempel:

`src/data/testimonials.ts`

Ikke koble til Google, database eller eksternt anmeldelsessystem.

Ikke skriv oppdiktede kundeuttalelser som om de er ekte.

Bruk tydelige plassholdere:

- «Tilbakemelding fra brudepar kommer her.»
- «Navn på brudepar»
- «Bryllupsdato»

Design seksjonen slik at faktiske uttalelser enkelt kan erstattes senere.

På mobil kan uttalelsene vises én om gangen. På desktop kan de vises i to eller tre kolonner eller som en rolig karusell.

7. VIDEO

Lag en gjenbrukbar videoseksjon for en fremtidig Vimeo-video.

- Vimeo-lenken kommer senere.
- Ikke legg inn en tilfeldig Vimeo-video.
- Bruk et lokalt forhåndsbilde eller en tydelig plassholder.
- Ikke last Vimeo-iframe før brukeren trykker på avspillingsknappen.
- Hvis Vimeo-lenken ikke er definert, kan seksjonen skjules i produksjon.
- Video skal ikke omtales som en del av heldagspakken.

8. KONTAKT

Lag en avsluttende konverteringsseksjon.

Overskrift:
«Skal vi ta en uforpliktende prat?»

Tekst:
«Send en e-post med bryllupsdato og sted, eller ring hvis dere ønsker å høre mer.»

Primærknapp:
«Send e-post»

Lenke:
`mailto:post@simonmyklebost.no?subject=Forespørsel om bryllupsfotografering`

Sekundærknapp:
«Ring Simon»

Lenke:
`tel:+4794160142`

Vis også:

- post@simonmyklebost.no
- +47 941 60 142
- Instagram: https://www.instagram.com/weddingsbymykle/

Alle kontaktopplysninger skal være klikkbare.

GALLERISIDE

Bygg ett samlet galleri på `/galleri`.

Krav:

- Ikke grupper galleriet etter bryllup.
- Ikke lag navn som «Markus og Anja».
- Bland vertikale og horisontale bilder.
- Lag et tett, organisk og puslespillaktig masonry-oppsett.
- Bildene skal klumpe seg visuelt litt sammen.
- Bruk mindre mellomrom enn på landingssiden.
- Bruk mindre avrunding, eksempelvis 4–8 piksler.
- Bruk svært lite eller ingen skygge inne i selve galleriet.
- Bevar bildenes naturlige proporsjoner.
- På mobil kan galleriet bruke to tette kolonner når bredden tillater det.
- På svært små skjermer må resultatet fortsatt være ryddig og lesbart.
- På desktop brukes flere kolonner og varierende bildehøyder.
- Når brukeren trykker på et bilde, åpnes det i en enkel, rask og tastaturvennlig fullskjermvisning.
- Fullskjermvisningen skal kunne lukkes med knapp, klikk utenfor og Escape.
- Brukeren skal kunne gå til forrige og neste bilde.
- Ikke bruk database eller eksternt galleri.

BILDEHÅNDTERING

Opprett en tydelig lokal mappestruktur, for eksempel:

`src/assets/images/hero`
`src/assets/images/simon`
`src/assets/images/carousel`
`src/assets/images/gallery`
`src/assets/images/video-posters`

Bruk `import.meta.glob` eller en tilsvarende løsning for å hente galleribildene automatisk fra mappen.

Målet er at nye bilder senere kan legges i gallerimappen uten at det må opprettes en ekstern lenke for hvert bilde.

Det kan brukes et lite lokalt metadataoppsett for alternativ tekst og ønsket rekkefølge, men ingen eksterne bilde-ID-er eller URL-er.

Bruk midlertidige, lokale plassholdere frem til Simons bilder leveres. Ikke baser sluttproduktet på Unsplash eller andre eksterne bildeleverandører.

YTELSE

Nettsiden skal laste raskt, særlig på mobilnett.

- Bruk WebP eller AVIF for ferdige bilder.
- Bruk responsive bildestørrelser og korrekt `sizes`.
- Hovedbildet kan forhåndslastes.
- Bilder under første skjermbilde skal lazy-loades.
- Ikke lazy-load hovedbildet.
- Definer dimensjoner eller aspect ratio for alle bilder.
- Unngå store JavaScript-biblioteker når CSS eller enkel kode er tilstrekkelig.
- Last Vimeo først etter brukerklikk.
- Unngå unødvendige animasjonsbiblioteker.
- Sørg for at karusellen ikke gir høy CPU-belastning.
- Ikke last hele galleriet ukritisk i maksimal oppløsning.
- Bruk mindre forhåndsvisninger i galleriet og større bildefiler først i fullskjermvisningen hvis dette er praktisk.

TILGJENGELIGHET

- Semantisk HTML.
- Tydelige fokusmarkeringer.
- Full tastaturnavigasjon.
- God fargekontrast.
- Minimum 44 × 44 piksler på viktige trykkflater.
- Beskrivende alternativ tekst skal kunne legges inn for alle bilder.
- Respekter `prefers-reduced-motion`.
- Karusellen skal ikke gjøre nettsiden ubehagelig å bruke.
- Fullskjermgalleriet skal være tastaturvennlig.
- Menyen skal være tilgjengelig med skjermleser.

SEO

Den synlige hovedtittelen skal bare være «Simon Myklebost», men tekniske metadata skal være søkemotoroptimalisert.

Bruk:

Tittel:
«Simon Myklebost | Bryllupsfotograf på Sørlandet og i Oslo»

Metabeskrivelse:
«Jordnær og profesjonell bryllupsfotografering på Sørlandet og i Oslo. Heldagsfotografering med minimum 400 bilder fra Simon Myklebost.»

Viktige temaer som kan brukes naturlig i teksten:

- Bryllupsfotograf Sørlandet
- Bryllupsfotograf Kristiansand
- Bryllupsfotograf Oslo
- Heldagsfotografering bryllup

Ikke overdriv eller gjenta søkeord unaturlig.

Legg til:

- Open Graph-metadata.
- Canonical URL for simonmyklebost.no.
- Sitemap.
- Robots.txt.
- Strukturert data for fotografvirksomheten med navn, URL, e-post, telefon, tjenesteområde og Instagram.
- Ikke finn på fysisk adresse, organisasjonsnummer eller åpningstider.

PERSONVERN

Ikke legg inn analyseverktøy, sporingspiksler eller markedsføringscookies i første versjon.

Det skal derfor ikke være nødvendig med et stort cookie-banner.

Ikke lag et kontaktskjema som lagrer personopplysninger.

KOMPONENTER OG VEDLIKEHOLD

Lag ryddige komponenter, eksempelvis:

- Header
- MobileMenu
- Hero
- TrustIntro
- AboutSimon
- InfiniteImageCarousel
- PackageSection
- Testimonials
- VimeoVideo
- ContactCTA
- Footer
- MasonryGallery
- GalleryLightbox

Legg pakketekst, kontaktinformasjon og kundeuttalelser i separate lokale datafiler slik at innholdet er enkelt å oppdatere uten å endre hele komponenten.

FERDIGKRITERIER

Før løsningen regnes som ferdig, kontroller at:

- Nettsiden fungerer godt på mobil først.
- `/` og `/galleri` fungerer.
- Det finnes ingen databasekobling.
- Det finnes ingen Supabase-kode.
- Det finnes ikke noe bookingsystem eller kontaktskjema.
- Alle e-post-, telefon- og Instagram-lenker fungerer.
- Karusellen beveger seg kontinuerlig og sømløst.
- Alle karusellbilder åpner det samlede galleriet.
- Nye galleribilder kan hentes fra en lokal mappe.
- Galleriet støtter både vertikale og horisontale bilder.
- Fullskjermvisningen fungerer med tastatur.
- Vimeo lastes først etter brukerklikk.
- Ingen falske kundeuttalelser presenteres som ekte.
- Video ikke omtales som en del av pakken.
- Retusjeringer ikke nevnes.
- Prisen vises som 29 900 kr inkludert mva.
- Leveringstiden vises som to måneder.
- Sneak peek vises som én uke.
- Minimum 400 bilder er tydelig kommunisert.
- Det ikke oppstår horisontal scrolling eller store layout-hopp på mobil.

Start med å bygge hele den fungerende nettsiden med tydelige, lokale bildeplassholdere. Ikke stopp for å be om bilder. Bildene skal kunne erstattes enkelt når det endelige materialet fra Simon er klart.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/de5434c1-ce22-4217-b43a-288a07ce914b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
