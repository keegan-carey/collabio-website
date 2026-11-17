import { createFileRoute } from "@tanstack/react-router";
import { Compass, Globe2, HeartHandshake } from "lucide-react";
import { categories, jobs } from "@/lib/content";
import { ButtonLink, Card, CtaBand, Faq, IconBox, PageHero, SectionHead, seo } from "@/components/site/ui";
import { JobCard } from "@/components/site/JobCard";

export const Route = createFileRoute("/careers/")({
  head: () => seo("Careers at Collabio — Your Next Opportunity", "Explore professional opportunities in software, IT, operations, and recruiting with Collabio."),
  component: Careers,
});

function Careers() {
  return (
    <>
      <PageHero eyebrow="Careers" title="Your Next Opportunity Starts with a Connection." intro="Explore professional opportunities, discover new possibilities, and connect with a team focused on building meaningful business relationships.">
        <ButtonLink to="/jobs" size="lg">View Open Positions</ButtonLink>
        <ButtonLink to="/join-network" variant="ghostLight" size="lg">Join Our Professional Network</ButtonLink>
      </PageHero>
      <section className="container-x py-24">
        <SectionHead center eyebrow="Why Collabio" title="Why connect with Collabio?" />
        <div className="grid gap-6 md:grid-cols-3">
          {[{ i: Compass, t: "Varied opportunities", d: "Contract, project-based, and full-time roles across technology and operations." },
            { i: Globe2, t: "Flexible arrangements", d: "Remote, hybrid, and on-site options depending on the engagement." },
            { i: HeartHandshake, t: "A real network", d: "Stay connected for future opportunities that match your skills." }].map((x) => (
            <Card key={x.t}><IconBox><x.i className="h-5 w-5" /></IconBox><h3 className="text-lg">{x.t}</h3><p className="mt-2 text-sm text-muted-foreground">{x.d}</p></Card>
          ))}
        </div>
      </section>
      <section className="bg-surface py-24">
        <div className="container-x">
          <SectionHead eyebrow="Opportunity types" title="Areas we hire for" />
          <div className="flex flex-wrap gap-2">{categories.map((c) => <span key={c} className="rounded-full border bg-card px-4 py-2 text-sm font-medium text-navy">{c}</span>)}</div>
        </div>
      </section>
      <section className="container-x py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHead eyebrow="Featured" title="Featured open positions" />
          <ButtonLink to="/jobs" variant="outline" className="mb-12">All positions</ButtonLink>
        </div>
        <div className="grid gap-6 md:grid-cols-2">{jobs.slice(0, 4).map((j) => <JobCard key={j.slug} job={j} />)}</div>
      </section>
      <section className="bg-surface py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div><SectionHead eyebrow="Process" title="How the application process works" />
            <ol className="space-y-4">{["Find a role that fits", "Submit your application and resume", "Receive a reference number", "Our team reviews your profile", "We contact you if there's a match"].map((s, i) => <li key={s} className="flex gap-4 text-navy"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">{i + 1}</span>{s}</li>)}</ol></div>
          <div><h3 className="mb-4 text-lg">Careers FAQ</h3><Faq items={[
            { q: "Can I submit my profile without applying for a specific job?", a: "Yes — use Join Our Network to share your profile for future opportunities." },
            { q: "Can I apply for multiple positions?", a: "Yes, you can apply to every position that matches your experience." },
            { q: "How will I know my application was received?", a: "You'll see a confirmation with a unique reference number after submitting." },
          ]} /></div>
        </div>
      </section>
      <CtaBand title="Don't see the right role?" text="Join the Collabio professional network and we'll keep you in mind for future opportunities.">
        <ButtonLink to="/join-network" variant="light" size="lg">Join Our Network</ButtonLink>
      </CtaBand>
    </>
  );
}
