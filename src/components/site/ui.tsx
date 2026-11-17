import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export const btn = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:brightness-110 shadow-card",
        navy: "bg-navy text-navy-foreground hover:bg-navy-2",
        outline: "border border-border bg-background text-navy hover:border-primary hover:text-primary",
        ghostLight: "border border-navy-foreground/25 text-navy-foreground hover:bg-navy-foreground/10",
        light: "bg-background text-navy hover:bg-secondary",
      },
      size: { sm: "h-9 px-4", md: "h-11 px-5", lg: "h-12 px-6 text-base" },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type BtnProps = VariantProps<typeof btn> & { className?: string; children: ReactNode };
export function ButtonLink({ variant, size, className, children, ...p }: BtnProps & ComponentProps<typeof Link>) {
  return <Link {...p} className={cn(btn({ variant, size }), className)}>{children}</Link>;
}
export function Button({ variant, size, className, ...p }: BtnProps & ComponentProps<"button">) {
  return <button {...p} className={cn(btn({ variant, size }), className)} />;
}

export function Eyebrow({ children, light }: { children: ReactNode; light?: boolean }) {
  return <p className={cn("mb-3 text-xs font-bold uppercase tracking-[0.18em]", light ? "text-primary-foreground/70" : "text-primary")}>{children}</p>;
}

export function SectionHead({ eyebrow, title, intro, center }: { eyebrow?: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div className={cn("mb-12 max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-3xl md:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg text-muted-foreground">{intro}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro?: string; children?: ReactNode }) {
  return (
    <section className="bg-hero relative overflow-hidden text-navy-foreground">
      <div className="grid-pattern absolute inset-0" />
      <div className="container-x relative py-20 md:py-28">
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h1 className="max-w-3xl text-4xl text-navy-foreground md:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-navy-foreground/75">{intro}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("rounded-xl border bg-card p-6 shadow-card", className)}>{children}</div>;
}

export function IconBox({ children }: { children: ReactNode }) {
  return <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-primary">{children}</div>;
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y rounded-xl border bg-card">
      {items.map((f) => (
        <details key={f.q} className="group p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-navy">
            {f.q}<span className="ml-4 text-primary transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 text-muted-foreground">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand({ title, text, children }: { title: string; text: string; children: ReactNode }) {
  return (
    <section className="container-x py-20">
      <div className="bg-hero relative overflow-hidden rounded-2xl px-8 py-14 text-center md:px-16">
        <div className="grid-pattern absolute inset-0" />
        <div className="relative">
          <h2 className="text-3xl text-navy-foreground md:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-navy-foreground/75">{text}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>
        </div>
      </div>
    </section>
  );
}

export function seo(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
