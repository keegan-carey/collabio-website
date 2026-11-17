import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, ShieldAlert } from "lucide-react";
import { services } from "@/lib/content";
import { servicePhotography } from "@/lib/service-photography";
import { ButtonLink, CtaBand, PageHero, seo } from "@/components/site/ui";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const s = services.find((x) => x.slug === params.slug);
    if (!s) throw notFound();
    return { slug: s.slug };
  },
  head: ({ loaderData }) => {
    const s = services.find((x) => x.slug === loaderData?.slug);
    return s ? seo(`${s.title} — Collabio`, s.description) : { meta: [{ title: "Service not found — Collabio" }, { name: "robots", content: "noindex" }] };
  },
  component: Detail,
});

function Detail() {
  const { slug } = Route.useLoaderData();
  const s = services.find((x) => x.slug === slug);
  const photograph = servicePhotography[slug]?.detail;
  if (!s || !photograph) throw notFound();
  return (
    <>
      <PageHero eyebrow="Service" title={s.title} intro={s.description}>
        <ButtonLink to="/for-businesses" size="lg">Discuss Your Requirements</ButtonLink>
      </PageHero>
      <section className="container-x grid gap-12 py-24 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl">Key capabilities</h2>
          <ul className="mt-6 space-y-3">
            {s.activities.map((a) => <li key={a} className="flex gap-3 rounded-lg border bg-card p-4 text-navy"><Check className="h-5 w-5 shrink-0 text-primary" />{a}</li>)}
          </ul>
          {s.note && (
            <div className="mt-8 flex gap-3 rounded-xl border border-primary/30 bg-secondary p-5 text-sm text-navy">
              <ShieldAlert className="h-5 w-5 shrink-0 text-primary" /><p><strong>Operating standard:</strong> {s.note}</p>
            </div>
          )}
        </div>
        <img src={photograph.src} alt={photograph.alt} loading="lazy" width={1536} height={1024} className="aspect-[3/2] w-full rounded-2xl object-cover shadow-lift" />
      </section>
      <section className="bg-surface py-16">
        <div className="container-x">
          <p className="mb-4 text-sm font-bold text-navy">Other services</p>
          <div className="flex flex-wrap gap-2">
            {services.filter((x) => x.slug !== s.slug).map((x) => <Link key={x.slug} to="/services/$slug" params={{ slug: x.slug }} className="rounded-full border bg-card px-4 py-2 text-sm font-medium text-navy hover:border-primary">{x.title}</Link>)}
          </div>
        </div>
      </section>
      <CtaBand title="Ready to get started?" text="Tell us about your requirement and we'll follow up to discuss next steps.">
        <ButtonLink to="/for-businesses" variant="light" size="lg">Request a Consultation</ButtonLink>
      </CtaBand>
    </>
  );
}
