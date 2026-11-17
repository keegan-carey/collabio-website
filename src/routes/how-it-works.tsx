import { createFileRoute } from "@tanstack/react-router";
import { Card, CtaBand, ButtonLink, PageHero, SectionHead, seo } from "@/components/site/ui";

export const Route = createFileRoute("/how-it-works")({
  head: () => seo("How It Works — Collabio", "A clear, collaborative five-step approach from initial discussion to follow-up."),
  component: How,
});

const steps = [
  ["Initial Discussion", "You explain the business requirement, operational challenge, or support needed."],
  ["Requirement Assessment", "We review the scope, responsibilities, access requirements, timelines, and expected deliverables."],
  ["Solution Planning", "A practical workflow is developed, including the people, resources, procedures, and communication channels required."],
  ["Coordination and Execution", "Agreed activities are coordinated according to your instructions and approved procedures."],
  ["Communication and Follow-Up", "Progress updates, documentation, and follow-up are provided according to the agreed service arrangement."],
];
const examples = [
  { t: "Recruiting support", s: ["Share role requirements", "Agree on sourcing and screening workflow", "Candidates are sourced and screened", "Interviews are scheduled", "Ongoing candidate communication"] },
  { t: "Equipment recovery", s: ["Share device list and instructions", "Confirm handling and shipping rules", "Devices received and logged unpowered", "Return shipping coordinated", "Tracking and confirmation shared"] },
  { t: "Professional applying", s: ["Browse open positions", "Submit application and resume", "Receive reference number", "Team reviews your profile", "We reach out if there's a match"] },
];

function How() {
  return (
    <>
      <PageHero eyebrow="How It Works" title="A Clear, Collaborative Approach from Start to Finish." />
      <section className="container-x py-24">
        <ol className="relative mx-auto max-w-3xl border-l-2 border-secondary pl-10">
          {steps.map(([t, d], i) => (
            <li key={t} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[3.4rem] flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{i + 1}</span>
              <h3 className="text-xl">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="bg-surface py-24">
        <div className="container-x">
          <SectionHead center eyebrow="Examples" title="What it looks like in practice" />
          <div className="grid gap-6 md:grid-cols-3">
            {examples.map((e) => (
              <Card key={e.t}>
                <h3 className="text-lg">{e.t}</h3>
                <ol className="mt-4 space-y-2 text-sm text-muted-foreground">{e.s.map((x, i) => <li key={x}><span className="mr-2 font-bold text-primary">{i + 1}.</span>{x}</li>)}</ol>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Start with a conversation." text="Share your requirement — we'll take it from there.">
        <ButtonLink to="/for-businesses" variant="light" size="lg">Discuss Your Requirements</ButtonLink>
        <ButtonLink to="/jobs" variant="ghostLight" size="lg">View Open Positions</ButtonLink>
      </CtaBand>
    </>
  );
}
