import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { categories, jobs } from "@/lib/content";
import { ButtonLink, PageHero, seo } from "@/components/site/ui";
import { JobCard } from "@/components/site/JobCard";

export const Route = createFileRoute("/jobs")({
  head: () => seo("Open Positions — Collabio Careers", "Search open positions by keyword, location, work arrangement, employment type, category, and level."),
  component: Jobs,
});

function Jobs() {
  const [q, setQ] = useState("");
  const [f, setF] = useState({ location: "", arrangement: "", type: "", category: "", level: "" });
  const uniq = (k: "location") => [...new Set(jobs.map((j) => j[k]))];
  const list = useMemo(() => jobs.filter((j) =>
    (!q || `${j.title} ${j.summary} ${j.category}`.toLowerCase().includes(q.toLowerCase())) &&
    (Object.entries(f) as [keyof typeof f, string][]).every(([k, v]) => !v || j[k] === v)), [q, f]);
  const sel = (k: keyof typeof f, label: string, opts: string[]) => (
    <select aria-label={label} className="field" value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })}>
      <option value="">{label}</option>{opts.map((o) => <option key={o}>{o}</option>)}
    </select>
  );
  return (
    <>
      <PageHero eyebrow="Open Positions" title="Find your next opportunity." intro="Listings below are sample data for preview purposes and will be replaced with genuine openings." />
      <section className="container-x py-16">
        <div className="mb-8 grid gap-3 rounded-xl border bg-card p-4 shadow-card md:grid-cols-3 lg:grid-cols-6">
          <label className="relative md:col-span-3 lg:col-span-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input className="field pl-9" placeholder="Title or keyword" value={q} onChange={(e) => setQ(e.target.value)} />
          </label>
          {sel("location", "Location", uniq("location"))}
          {sel("arrangement", "Arrangement", ["Remote", "Hybrid", "On-site"])}
          {sel("type", "Employment type", ["Full-time", "Part-time", "Contract", "Project-based"])}
          {sel("category", "Category", categories)}
          {sel("level", "Experience", ["Entry", "Mid", "Senior"])}
        </div>
        <p className="mb-4 text-sm text-muted-foreground">{list.length} position{list.length !== 1 && "s"}</p>
        {list.length ? (
          <div className="grid gap-6 md:grid-cols-2">{list.map((j) => <JobCard key={j.slug} job={j} />)}</div>
        ) : (
          <div className="rounded-xl border bg-surface p-12 text-center">
            <p className="text-lg font-semibold text-navy">No positions match your filters.</p>
            <p className="mt-2 text-muted-foreground">Try broadening your search, or share your profile for future openings.</p>
            <ButtonLink to="/join-network" className="mt-6">Join Our Network</ButtonLink>
          </div>
        )}
      </section>
    </>
  );
}
