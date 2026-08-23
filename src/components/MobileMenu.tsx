import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { navItems } from "./nav-items";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Lukk menyen ved navigasjon
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lukk med Escape og sett fokus tilbake på knappen
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        aria-label={open ? "Lukk meny" : "Åpne meny"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center rounded-full text-brown-deep transition-colors hover:bg-brown/8"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {open && (
        <div
          id="mobile-menu-panel"
          ref={panelRef}
          className="absolute inset-x-0 top-full border-b border-border bg-background/97 shadow-warm backdrop-blur-md"
        >
          <nav aria-label="Mobilnavigasjon" className="px-5 py-4">
            <ul className="flex flex-col">
              {navItems.map((item) => {
                const hash = "hash" in item ? item.hash : undefined;
                return (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      {...(hash ? { hash } : {})}
                      className="flex min-h-12 items-center border-b border-border/60 text-[0.95rem] font-medium text-brown-deep last:border-0"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-4 pb-2">
                <Link to="/" hash="kontakt" className="btn btn-primary w-full">
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
