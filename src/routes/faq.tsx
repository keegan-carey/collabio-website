import { createFileRoute } from "@tanstack/react-router";
import { ButtonLink, CtaBand, Faq, PageHero, seo } from "@/components/site/ui";

export const Route = createFileRoute("/faq")({
  head: () => seo("FAQ — Collabio", "Answers about Collabio's business services, equipment handling and logistics, and careers."),
  component: FaqPage,
});

const groups = [
  { t: "Business questions", items: [
    { q: "What types of businesses does Collabio support?", a: "IT companies, software firms, startups, small and medium-sized businesses, and organizations needing flexible operational support." },
    { q: "What services does Collabio provide?", a: "IT equipment and device support, remote technology support, asset recovery and logistics, recruiting, workforce support, and business operations support." },
    { q: "How do I request business support?", a: "Use the inquiry form on the For Businesses page and our team will follow up." },
    { q: "Can services be customized?", a: "Yes. Every engagement is designed around your specific requirements and procedures." },
    { q: "How does the initial consultation work?", a: "We discuss your requirement, scope, timelines, and responsibilities, then propose a practical workflow." },
  ] },
  { t: "Equipment and logistics", items: [
    { q: "How does equipment receiving work?", a: "Devices are received, identified, and logged with condition notes, then held in secure custody according to your instructions." },
    { q: "How are client devices handled?", a: "Strictly according to documented client instructions, with clear custody records at each step." },
    { q: "Are devices powered on without authorization?", a: "No. Equipment remains untouched and unpowered unless you explicitly authorize the relevant action." },
    { q: "How is return shipping coordinated?", a: "Through FedEx, USPS, or another client-approved method, with tracking details provided." },
    { q: "Can clients receive equipment status updates?", a: "Yes. Status updates and shipping confirmations are shared according to the agreed arrangement." },
  ] },
  { t: "Careers", items: [
    { q: "How do I apply?", a: "Browse open positions, open a listing, and click Apply for This Position." },
    { q: "Can I submit my profile without applying for a specific job?", a: "Yes — use the Join Our Network page." },
    { q: "Can I apply for multiple positions?", a: "Yes, apply to each position that fits your experience." },
    { q: "How do I update my application?", a: "Contact us with your reference number and we'll help update your information." },
    { q: "How will I know if my application is received?", a: "You'll see a confirmation with a unique reference number immediately after submitting." },
  ] },
];

function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Frequently Asked Questions" />
      <section className="container-x max-w-3xl space-y-12 py-16">
        {groups.map((g) => <div key={g.t}><h2 className="mb-4 text-2xl">{g.t}</h2><Faq items={g.items} /></div>)}
      </section>
      <CtaBand title="Still have questions?" text="Our team is happy to help."><ButtonLink to="/contact" variant="light" size="lg">Contact Us</ButtonLink></CtaBand>
    </>
  );
}
