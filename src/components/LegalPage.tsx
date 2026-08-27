import type { ReactNode } from "react";
import { Reveal, Eyebrow } from "./shared";

/** Shared layout + typography for the Privacy Policy and Terms of Use pages. */
export function LegalPage({
  eyebrow,
  title,
  lastUpdated,
  children,
}: {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-8 md:pt-24 md:pb-10">
        <div className="absolute inset-0 bg-cream-glow" />
        <div className="mx-auto max-w-3xl px-6 lg:px-10 relative">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-6 text-4xl md:text-5xl leading-[1.05]">{title}</h1>
            <p className="mt-5 text-sm text-foreground/60">Last updated: {lastUpdated}</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 md:pb-20 lg:pb-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Reveal>
            <div className="space-y-8 text-foreground/75 leading-relaxed">{children}</div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-display text-foreground">{heading}</h2>
      <div className="mt-3 space-y-4">{children}</div>
    </div>
  );
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2 list-disc pl-5 marker:text-primary">
      {items.map((it) => (
        <li key={it}>{it}</li>
      ))}
    </ul>
  );
}
