import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { services } from "@/lib/content";
import { Card, Faq, IconBox, PageHero, SectionHead, seo } from "@/components/site/ui";
import { SmartForm, privacyConsent } from "@/components/site/Forms";

export const Route = createFileRoute("/for-businesses")({
  head: () => seo("For Businesses — Partner With Collabio", "A reliable partner for technology equipment coordination, workforce, recruiting, and operations support."),
  component: Biz,
});

const challenges = ["Distributed teams with devices to deliver or recover", "Hiring needs without an internal recruiting team", "Operational tasks that pull focus from core work", "Inconsistent documentation and handoffs", "Need for flexible, scalable support"];
const industries = ["IT companies & service providers", "Software development firms", "Technology startups", "Small & medium-sized businesses", "Organizations with distributed workforces"];

function Biz() {
  return (
    <>
      <PageHero eyebrow="For Businesses" title="A Reliable Partner for Your Business Operations." intro="From technology equipment coordination to workforce and recruiting support, Collabio helps businesses access flexible resources and manage important operational requirements." />
      <section className="container-x grid gap-12 py-24 lg:grid-cols-2">
        <div><SectionHead eyebrow="Challenges" title="Business challenges we help address" />
          <ul className="space-y-3">{challenges.map((c) => <li key={c} className="flex gap-3 text-navy"><Check className="h-5 w-5 shrink-0 text-primary" />{c}</li>)}</ul></div>
        <div><SectionHead eyebrow="Who we support" title="Industries and organizations" />
          <ul className="space-y-3">{industries.map((c) => <li key={c} className="flex gap-3 text-navy"><Check className="h-5 w-5 shrink-0 text-primary" />{c}</li>)}</ul></div>
      </section>
      <section className="bg-surface py-24">
        <div className="container-x">
          <SectionHead eyebrow="Solutions" title="Our business solutions" />
          <div className="grid gap-6 md:grid-cols-3">{services.map((s) => <Card key={s.slug}><IconBox><s.icon className="h-5 w-5" /></IconBox><h3 className="text-lg">{s.title}</h3><p className="mt-2 text-sm text-muted-foreground">{s.short}</p></Card>)}</div>
        </div>
      </section>
      <section className="container-x grid gap-12 py-24 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionHead eyebrow="Partnership" title="How business partnerships work" intro="We start with a discussion, assess your requirements, plan a workflow, coordinate execution, and keep you updated throughout." />
          <h3 className="mb-4 text-lg">Frequently asked</h3>
          <Faq items={[
            { q: "Can services be customized?", a: "Yes. Every engagement is scoped around your specific requirements and procedures." },
            { q: "How does the initial consultation work?", a: "Submit the form and our team will reach out to discuss your needs, timelines, and expectations." },
            { q: "Do you follow our security procedures?", a: "Always. Access, handling, and shipping follow your documented instructions and authorization." },
          ]} />
        </div>
        <div id="inquiry">
          <SmartForm
            refPrefix="INQ" submitLabel="Submit Inquiry" successTitle="Thank you — inquiry received"
            successText="Our team will review your requirements and get back to you via your preferred contact method."
            sections={[{ title: "Business inquiry", fields: [
              { name: "name", label: "Full Name", required: true, half: true },
              { name: "email", label: "Business Email", type: "email", required: true, half: true },
              { name: "company", label: "Company Name", required: true, half: true },
              { name: "title", label: "Job Title", half: true },
              { name: "phone", label: "Phone Number", type: "tel", half: true },
              { name: "service", label: "Service of Interest", type: "select", required: true, half: true, options: [...services.map((s) => s.title), "Other"] },
              { name: "scope", label: "Estimated Project or Support Requirements", placeholder: "e.g. 40 laptops to recover across 3 states" },
              { name: "message", label: "Message", type: "textarea", required: true },
              { name: "contact", label: "Preferred Contact Method", type: "select", options: ["Email", "Phone", "Video call"], half: true },
            ] }]}
            consents={[privacyConsent]}
          />
        </div>
      </section>
    </>
  );
}
