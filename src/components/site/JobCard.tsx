import { Link } from "@tanstack/react-router";
import { ArrowRight, Briefcase, Clock, MapPin } from "lucide-react";
import type { Job } from "@/lib/content";

export function SampleBadge() {
  return <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">Sample listing</span>;
}

export function JobCard({ job }: { job: Job }) {
  return (
    <Link to="/careers/$slug" params={{ slug: job.slug }} className="group flex flex-col rounded-xl border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-lift">
      <div className="flex items-start justify-between gap-3">
        <div><p className="text-xs font-semibold text-primary">{job.category}</p><h3 className="mt-1 text-lg">{job.title}</h3></div>
        <SampleBadge />
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{job.summary}</p>
      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{job.location} · {job.arrangement}</span>
        <span className="inline-flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" />{job.type} · {job.level}</span>
        <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />Posted {new Date(job.posted).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
      </div>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">View details <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
    </Link>
  );
}
