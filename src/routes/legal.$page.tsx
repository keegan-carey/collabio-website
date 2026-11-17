import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHero, seo } from "@/components/site/ui";

const pages: Record<string, { title: string; body: string[] }> = {
  privacy: { title: "Privacy Policy", body: ["Collabio collects only the information you submit through our forms, such as contact details, professional information, and documents.", "We use this information to respond to inquiries, evaluate applications, and coordinate services. Access is limited to authorized personnel.", "You may request access to, correction of, or deletion of your information by contacting us."] },
  terms: { title: "Terms and Conditions", body: ["By using this website you agree to use it lawfully and to provide accurate information.", "Website content is provided for general information and does not constitute a service agreement. Engagements are governed by separate written agreements."] },
  cookies: { title: "Cookie Policy", body: ["This website uses only essential cookies required for it to function. We do not use advertising cookies."] },
  security: { title: "Security and Data Protection", body: ["Submitted information and documents are stored with restricted access.", "Remote access to client systems is performed only when authorized by the client and in accordance with their security, identity, and access-control requirements."] },
  "equipment-policy": { title: "Equipment Handling and Logistics Policy", body: ["Client equipment is received, identified, and logged with condition notes.", "Equipment remains untouched and unpowered unless the client has explicitly authorized the relevant action.", "Inspection, testing, access, and shipping follow documented client instructions, with tracking details provided for all shipments."] },
};

export const Route = createFileRoute("/legal/$page")({
  loader: ({ params }) => { if (!pages[params.page]) throw notFound(); return { page: params.page }; },
  head: ({ loaderData }) => {
    const p = loaderData && pages[loaderData.page];
    return p ? seo(`${p.title} — Collabio`, p.body[0] ?? p.title) : { meta: [{ title: "Unavailable — Collabio" }, { name: "robots", content: "noindex" }] };
  },
  component: Legal,
});

function Legal() {
  const p = pages[Route.useLoaderData().page]!;
  return (
    <>
      <PageHero eyebrow="Legal" title={p.title} intro="Draft placeholder — have this reviewed by your legal advisor before launch." />
      <section className="container-x max-w-3xl space-y-4 py-16 text-muted-foreground">{p.body.map((b) => <p key={b}>{b}</p>)}</section>
    </>
  );
}
