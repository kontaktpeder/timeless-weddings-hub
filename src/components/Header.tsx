import { Link } from "@tanstack/react-router";
import { MobileMenu } from "./MobileMenu";
import { navItems } from "./nav-items";
import { site } from "../data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[4.5rem] md:px-8">
        <Link
          to="/"
          className="font-display text-xl tracking-wide text-brown-deep md:text-[1.35rem]"
          aria-label={`${site.name} – til forsiden`}
        >
          {site.name}
        </Link>

        <nav aria-label="Hovednavigasjon" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => {
            const hash = "hash" in item ? item.hash : undefined;
            return (
              <Link
                key={item.label}
                to={item.to}
                {...(hash ? { hash } : {})}
                activeOptions={{ includeHash: false }}
                className="text-[0.85rem] font-medium tracking-wide text-brown-deep/75 transition-colors hover:text-brown-deep"
                activeProps={{ className: "text-brown-deep underline underline-offset-8 decoration-clay decoration-1" }}
              >
                {item.label}
              </Link>
            );
          })}
          <Link to="/" hash="kontakt" className="btn btn-primary !min-h-10 px-5 py-2 text-[0.85rem]">
            Kontakt
          </Link>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
