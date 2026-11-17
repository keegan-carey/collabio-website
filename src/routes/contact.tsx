import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Building2, LifeBuoy, MessageSquare } from "lucide-react";
import { Card, IconBox, PageHero, seo } from "@/components/site/ui";
import { SmartForm, privacyConsent } from "@/components/site/Forms";

export const Route = createFileRoute("/contact")({
  head: () => seo("Contact Collabio — Let's Start a Conversation", "Reach Collabio for general inquiries, business partnerships, careers, and support requests."),
  component: Contact,
});

const types = [
  { i: MessageSquare, t: "General Inquiries" }, { i: Building2, t: "Business Partnerships" },
  { i: Briefcase, t: "Careers and Opportunities" }, { i: LifeBuoy, t: "Support Requests" },
];

function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's Start a Conversation." intro="Whether you represent a business looking for support or you're a professional interested in opportunities, we'd be happy to hear from you." />
      <section className="container-x grid gap-12 py-16 lg:grid-cols-[1fr_1.6fr]">
        <div className="grid content-start gap-4">
          {types.map((x) => <Card key={x.t} className="flex items-center gap-4 p-5"><IconBox><x.i className="h-5 w-5" /></IconBox><p className="-mt-4 font-semibold text-navy">{x.t}</p></Card>)}
        </div>
        <SmartForm
          refPrefix="MSG" submitLabel="Send Message" successTitle="Message sent"
          successText="Thanks for reaching out. A member of our team will respond as soon as possible."
          sections={[{ fields: [
            { name: "name", label: "Name", required: true, half: true },
            { name: "email", label: "Email", type: "email", required: true, half: true },
            { name: "phone", label: "Phone (optional)", type: "tel", half: true },
            { name: "company", label: "Company (optional)", half: true },
            { name: "type", label: "Inquiry Type", type: "select", required: true, options: types.map((t) => t.t) },
            { name: "message", label: "Message", type: "textarea", required: true },
          ] }]}
          consents={[privacyConsent]}
        />
      </section>
    </>
  );
}
