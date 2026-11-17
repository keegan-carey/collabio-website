import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/lib/content";
import { ButtonLink, CtaBand, IconBox, PageHero, seo } from "@/components/site/ui";

export const Route = createFileRoute("/services/")({
  head: () => seo("Services — Collabio", "IT equipment support, remote technology support, asset recovery, recruiting, workforce, and business operations support."),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero eyebrow="Our Services" title="Business and Technology Support Designed Around Your Needs." intro="Collabio provides flexible solutions that help businesses coordinate technology resources, manage operational requirements, and connect with professional talent." />
      <section className="container-x space-y-6 py-24">
        {services.map((s, i) => (
          <div key={s.slug} className="grid gap-8 rounded-2xl border bg-card p-8 shadow-card md:grid-cols-[1fr_1.2fr] md:p-10">
            <div>
              <span className="text-sm font-bold text-primary">0{i + 1}</span>
              <div className="mt-3"><IconBox><s.icon className="h-5 w-5" /></IconBox></div>
              <h2 className="text-2xl">{s.title}</h2>
              <p className="mt-3 text-muted-foreground">{s.description}</p>
              <Link to="/services/$slug" params={{ slug: s.slug }} className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">Learn more <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <ul className="grid content-start gap-3 sm:grid-cols-2">
              {s.activities.map((a) => <li key={a} className="flex gap-2 rounded-lg bg-surface p-3 text-sm text-navy"><Check className="h-4 w-4 shrink-0 text-primary" />{a}</li>)}
            </ul>
          </div>
        ))}
      </section>
      <CtaBand title="Not sure which service fits?" text="Describe your requirement and we'll recommend a practical approach.">
        <ButtonLink to="/for-businesses" variant="light" size="lg">Request a Consultation</ButtonLink>
      </CtaBand>
    </>
  );
}
