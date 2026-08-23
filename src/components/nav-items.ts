/** Navigasjonspunkter delt mellom desktop-header og mobilmeny. */
export const navItems = [
  { label: "Galleri", to: "/galleri" },
  { label: "Om Simon", to: "/", hash: "om-simon" },
  { label: "Heldag", to: "/", hash: "heldag" },
  { label: "Tilbakemeldinger", to: "/", hash: "tilbakemeldinger" },
] as const;
