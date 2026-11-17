import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { jobs } from "@/lib/content";
import { btn, Card, PageHero, seo } from "@/components/site/ui";
import { SampleBadge } from "@/components/site/JobCard";

export const Route = createFileRoute("/careers/$slug")({
  loader: ({ params }) => {
    const j = jobs.find((x) => x.slug === params.slug);
    if (!j) throw notFound();
    return { slug: j.slug };
  },
  head: ({ loaderData }) => {
    const j = jobs.find((x) => x.slug === loaderData?.slug);
    return j ? seo(`${j.title} — Careers at Collabio`, j.summary) : { meta: [{ title: "Position unavailable — Collabio" }, { name: "robots", content: "noindex" }] };
  },
  component: JobDetail,
});

function List({ title, items }: { title: string; items: string[] }) {
  return <div><h2 className="text-xl">{title}</h2><ul className="mt-4 space-y-2">{items.map((i) => <li key={i} className="flex gap-3 text-muted-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{i}</li>)}</ul></div>;
}

function JobDetail() {
  const j = jobs.find((x) => x.slug === Route.useLoaderData().slug)!;
  const meta = [["Category", j.category], ["Location", j.location], ["Arrangement", j.arrangement], ["Employment type", j.type], ["Experience", j.level], ["Compensation", j.compensation ?? "Discussed during process"]];
  return (
    <>
      <PageHero eyebrow={j.category} title={j.title} intro={j.summary}>
        <Link to="/apply" search={{ job: j.slug }} className={btn({ size: "lg" })}>Apply for This Position</Link>
      </PageHero>
      <section className="container-x grid gap-12 py-16 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-10">
          <SampleBadge />
          <List title="Responsibilities" items={j.responsibilities} />
          <List title="Required qualifications" items={j.required} />
          <List title="Preferred qualifications" items={j.preferred} />
        </div>
        <aside>
          <Card className="sticky top-24">
            <dl className="space-y-3 text-sm">{meta.map(([k, v]) => <div key={k} className="flex justify-between gap-4 border-b pb-3 last:border-0"><dt className="text-muted-foreground">{k}</dt><dd className="text-right font-semibold text-navy">{v}</dd></div>)}</dl>
            <Link to="/apply" search={{ job: j.slug }} className={`${btn()} mt-6 w-full`}>Apply for This Position</Link>
            <Link to="/jobs" className="mt-4 block text-center text-sm font-semibold text-primary">← All positions</Link>
          </Card>
        </aside>
      </section>
    </>
  );
}
