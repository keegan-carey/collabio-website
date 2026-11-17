import { createFileRoute } from "@tanstack/react-router";
import { Handshake, Lightbulb, ShieldCheck, Sprout, Award, Clock } from "lucide-react";
import hero from "@/assets/hero-collab.jpg";
import { ButtonLink, Card, CtaBand, IconBox, PageHero, SectionHead, seo } from "@/components/site/ui";

export const Route = createFileRoute("/about")({
  head: () => seo("About Collabio — Mission, Vision & Values", "Building better connections between businesses, people, and technology."),
  component: About,
});

const values = [
  { i: ShieldCheck, t: "Trust", d: "Build long-term relationships through accountability and transparency." },
  { i: Handshake, t: "Collaboration", d: "Work closely with clients, professionals, and partners." },
  { i: Clock, t: "Reliability", d: "Deliver consistent, organized, and dependable support." },
  { i: Lightbulb, t: "Innovation", d: "Use modern tools and processes to improve business operations." },
  { i: Award, t: "Professionalism", d: "Maintain high standards in communication, service, and execution." },
  { i: Sprout, t: "Growth", d: "Help businesses and individuals discover new opportunities." },
];

function About() {
  return (
    <>
      <PageHero eyebrow="About Collabio" title="Building Better Connections Between Businesses, People, and Technology." />
      <section className="container-x grid items-center gap-12 py-24 lg:grid-cols-2">
        <div>
          <SectionHead eyebrow="Who we are" title="A business support and technology services company" />
          <div className="space-y-4 text-muted-foreground">
            <p>Collabio helps organizations simplify operations, access reliable talent, and manage technology-related processes. We connect businesses with the people, resources, and operational support they need to keep their work moving.</p>
            <p>Our services combine technology operations, IT equipment logistics, recruiting support, workforce coordination, and business process assistance — for businesses that need flexible support without building every function internally.</p>
          </div>
        </div>
        <img src={hero} alt="Collabio team" loading="lazy" width={1536} height={1152} className="rounded-2xl shadow-lift" />
      </section>
      <section className="bg-surface py-24">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <Card className="p-10"><p className="text-xs font-bold uppercase tracking-widest text-primary">Our Mission</p><p className="mt-4 text-xl font-semibold text-navy">To make business operations simpler and more efficient by connecting organizations with reliable people, technology resources, and practical support solutions.</p></Card>
          <Card className="p-10"><p className="text-xs font-bold uppercase tracking-widest text-primary">Our Vision</p><p className="mt-4 text-xl font-semibold text-navy">To become a trusted business partner for organizations seeking smarter workforce solutions, dependable technology support, and scalable operational services.</p></Card>
        </div>
      </section>
      <section className="container-x py-24">
        <SectionHead center eyebrow="Our values" title="What guides every engagement" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => <Card key={v.t}><IconBox><v.i className="h-5 w-5" /></IconBox><h3 className="text-lg">{v.t}</h3><p className="mt-2 text-sm text-muted-foreground">{v.d}</p></Card>)}
        </div>
      </section>
      <section className="bg-surface py-24">
        <div className="container-x">
          <SectionHead eyebrow="Our approach" title="Listen. Plan. Coordinate. Communicate." intro="We listen to client requirements, develop practical workflows, coordinate the right people and resources, and keep communication open throughout every engagement." />
          <ButtonLink to="/how-it-works" variant="outline">See how it works</ButtonLink>
        </div>
      </section>
      <CtaBand title="Have a business requirement? Let's talk." text="Tell us what you need and we'll help you find a practical way forward.">
        <ButtonLink to="/for-businesses" variant="light" size="lg">Discuss Your Requirements</ButtonLink>
      </CtaBand>
    </>
  );
}
