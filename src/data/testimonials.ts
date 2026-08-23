/**
 * Kundeuttalelser.
 *
 * Dette er bevisste plassholdere — erstatt quote, names og date med
 * faktiske tilbakemeldinger fra brudepar når de foreligger.
 * Ikke fyll inn oppdiktede uttalelser.
 */
export interface Testimonial {
  quote: string;
  names: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Tilbakemelding fra brudepar kommer her.",
    names: "Navn på brudepar",
    date: "Bryllupsdato",
  },
  {
    quote: "Tilbakemelding fra brudepar kommer her.",
    names: "Navn på brudepar",
    date: "Bryllupsdato",
  },
  {
    quote: "Tilbakemelding fra brudepar kommer her.",
    names: "Navn på brudepar",
    date: "Bryllupsdato",
  },
];
