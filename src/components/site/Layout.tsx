import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { services } from "@/lib/content";
import { Button, ButtonLink } from "./ui";

export function Logo({ light }: { light?: boolean }) {
  return (
    // <Link to="/" className="flex items-center gap-2" aria-label="Collabio home">
    //   <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden>
    //     <circle cx="11" cy="16" r="8" fill="none" stroke="currentColor" strokeWidth="3" className={light ? "text-navy-foreground" : "text-navy"} />
    //     <circle cx="21" cy="16" r="8" fill="none" stroke="currentColor" strokeWidth="3" className="text-primary" />
    //   </svg>
    //   <span className={`text-2xl font-extrabold ${light ? "text-navy-foreground" : "text-navy"}`}>Collabio</span>
    // </Link>
    <Link to="/" className="flex items-center gap-2" aria-label="Collabio home">
      <img
        src="/collabio.png"
        alt="Collabio"
        className="h-16 w-auto object-contain"
      />
      <span
        className={`text-2xl font-extrabold ${light ? "text-navy-foreground" : "text-navy"}`}
      >
        Collabio
      </span>
    </Link>
  );
}

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/careers", label: "Careers" },
  { to: "/for-businesses", label: "For Businesses" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <div className="container-x flex h-20 items-center justify-between gap-5">
        <Logo />
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 xl:flex"
        >
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-sm font-medium text-muted-foreground hover:text-navy"
              activeProps={{ className: "text-navy" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden gap-2 xl:flex">
          <ButtonLink to="/jobs" variant="outline" size="sm">
            Explore Opportunities
          </ButtonLink>
          <ButtonLink to="/for-businesses" size="sm">
            Partner With Us
          </ButtonLink>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="xl:hidden px-3"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t bg-background xl:hidden"
        >
          <div className="container-x flex flex-col gap-1 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 font-medium text-navy hover:bg-secondary"
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <ButtonLink
                to="/for-businesses"
                variant="outline"
                size="sm"
                onClick={() => setOpen(false)}
              >
                Partner With Us
              </ButtonLink>
              <ButtonLink to="/jobs" size="sm" onClick={() => setOpen(false)}>
                Opportunities
              </ButtonLink>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  const col = "space-y-2 text-sm text-navy-foreground/70";
  const h = "mb-4 text-sm font-bold text-navy-foreground";
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-x grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-sm text-sm text-navy-foreground/70">
            One trusted partner for workforce support, technology operations,
            and business solutions.
          </p>
          <p className="mt-4 text-sm font-semibold text-navy-foreground/90">
            Connecting Talent. Empowering Technology.
          </p>
        </div>
        <div>
          <p className={h}>Company</p>
          <ul className={col}>
            <li>
              <Link to="/about" className="hover:text-navy-foreground">
                About
              </Link>
            </li>
            <li>
              <Link to="/how-it-works" className="hover:text-navy-foreground">
                How It Works
              </Link>
            </li>
            <li>
              <Link to="/for-businesses" className="hover:text-navy-foreground">
                For Businesses
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-navy-foreground">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-navy-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className={h}>Services</p>
          <ul className={col}>
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="hover:text-navy-foreground"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className={h}>Careers</p>
          <ul className={col}>
            <li>
              <Link to="/careers" className="hover:text-navy-foreground">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/jobs" className="hover:text-navy-foreground">
                Open Positions
              </Link>
            </li>
            <li>
              <Link to="/join-network" className="hover:text-navy-foreground">
                Join Our Network
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-navy-foreground/60 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Collabio. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            {(
              [
                "privacy",
                "terms",
                "cookies",
                "security",
                "equipment-policy",
              ] as const
            ).map((p) => (
              <Link
                key={p}
                to="/legal/$page"
                params={{ page: p }}
                className="hover:text-navy-foreground capitalize"
              >
                {p.replace("-", " ")}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
