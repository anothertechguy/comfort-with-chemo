import { useEffect, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function PrimaryButton({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link
      to={href}
      className={`group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground bg-gradient-honey shadow-soft transition-all duration-300 hover:shadow-glow hover:-translate-y-0.5 ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <ArrowRight size={16} className="relative z-10 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

export function GhostButton({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link
      to={href}
      className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground border border-foreground/20 hover:border-foreground/60 hover:bg-foreground/5 transition-all ${className}`}
    >
      {children}
      <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">
      <span className="h-px w-8 bg-primary/60" />
      {children}
    </div>
  );
}

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`animate-fade-up ${className}`}>
      {children}
    </div>
  );
}

/** Scrolls to a section on hash navigation, or to the top on a plain route change. */
export function ScrollManager() {
  const location = useLocation();
  useEffect(() => {
    // scrollIntoView is unreliable inside the root's overflow-x-clip container,
    // so scroll the window directly, offset by the sticky header's height.
    // getElementById (not querySelector) tolerates placeholder "#" links, which
    // would otherwise throw an invalid-selector error.
    const targetId = location.hash.replace(/^#/, "");
    const el = targetId ? document.getElementById(targetId) : null;
    if (!el) {
      // "instant" is required: the global CSS scroll-behavior is smooth, which
      // would otherwise animate the whole way up on every page change.
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 0;
    const top = window.scrollY + el.getBoundingClientRect().top - headerHeight;
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  }, [location.pathname, location.hash]);
  return null;
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro?: ReactNode }) {
  return (
    <section className="relative overflow-hidden pt-16 pb-8 md:pt-24 md:pb-10">
      <div className="absolute inset-0 bg-cream-glow" />
      <div className="mx-auto max-w-4xl px-6 lg:px-10 relative text-center">
        <Reveal>
          <div className="flex justify-center">
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">{title}</h1>
          {intro && <p className="mt-7 text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto">{intro}</p>}
        </Reveal>
      </div>
    </section>
  );
}
