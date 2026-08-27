import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { PrimaryButton } from "./shared";

const NAV = [
  { label: "About", to: "/about" },
  { label: "Founder", to: "/founder" },
  { label: "Comfort Box", to: "/comfort-box" },
  { label: "Stories", to: "/#stories" },
  { label: "How to Help", to: "/#help" },
  { label: "Contact", to: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 animate-fade-down ${
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border/60 shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Comfort With Chemotherapy" className="h-11 w-auto" />
        </Link>
        <nav className="hidden lg:flex items-center gap-9 text-sm text-foreground/75">
          {NAV.map((n) =>
            // The footer (id="contact") is on every page, so keep a bare hash as a
            // same-page anchor rather than a route-relative link.
            n.to.startsWith("#") ? (
              <a key={n.label} href={n.to} className="relative group">
                <span className="group-hover:text-foreground transition-colors">{n.label}</span>
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ) : (
              <Link key={n.label} to={n.to} className="relative group">
                <span className="group-hover:text-foreground transition-colors">{n.label}</span>
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            )
          )}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/request-a-box" className="text-sm font-medium text-foreground/80 hover:text-foreground transition">
            Request a Box
          </Link>
          <PrimaryButton href="/#donate">Donate</PrimaryButton>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 rounded-lg hover:bg-secondary transition"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl animate-fade-down">
          <div className="px-6 py-6 flex flex-col gap-4">
            {NAV.map((n) =>
              n.to.startsWith("#") ? (
                <a key={n.label} href={n.to} onClick={() => setOpen(false)} className="text-lg">
                  {n.label}
                </a>
              ) : (
                <Link key={n.label} to={n.to} onClick={() => setOpen(false)} className="text-lg">
                  {n.label}
                </Link>
              )
            )}
            <PrimaryButton href="/#donate">Donate Today</PrimaryButton>
          </div>
        </div>
      )}
    </header>
  );
}
