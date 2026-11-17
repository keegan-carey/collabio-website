import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Cpu,
  Network,
  Repeat,
  ShieldCheck,
  Users,
  Workflow,
} from "lucide-react";
import hero from "@/assets/collabio-office.jpg";
import careers from "@/assets/collabio-careers.jpg";
import { services } from "@/lib/content";
import { servicePhotography } from "@/lib/service-photography";
import { Testimonials } from "@/components/site/Testimonials";
import {
  ButtonLink,
  Eyebrow,
  IconBox,
  SectionHead,
  seo,
} from "@/components/site/ui";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "Collabio — Connecting Talent. Empowering Technology.",
      "U.S.-focused workforce solutions, IT equipment logistics, authorized technical support, and professional talent acquisition."
    ),
  component: Home,
});

const why = [
  {
    icon: Workflow,
    t: "Reliable Operations",
    d: "Structured processes for equipment handling, technical support, and workforce coordination.",
  },
  {
    icon: Repeat,
    t: "Flexible Solutions",
    d: "Support arrangements shaped around your business requirements and project needs.",
  },
  {
    icon: Network,
    t: "Professional Network",
    d: "Connecting technology professionals, recruiting partners, and businesses.",
  },
  {
    icon: ShieldCheck,
    t: "Commitment to Quality",
    d: "Accountability, clear communication, and consistent operational support.",
  },
];
const steps = [
  [
    "Understand",
    "We learn about your business, workforce, and technology requirements.",
  ],
  [
    "Develop",
    "We identify the appropriate service model and operational needs.",
  ],
  [
    "Coordinate",
    "We bring together professionals, equipment, and the right support.",
  ],
  ["Deliver & Support", "We stay connected throughout your engagement."],
];
const industries = [
  "Information Technology",
  "Software Development",
  "Technology Consulting",
  "Financial Technology",
  "Enterprise Software",
  "Digital Services",
];

function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy text-navy-foreground">
        <img
          src={hero}
          alt="Technology professionals collaborating on a laptop in a modern office"
          width={1920}
          height={1024}
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[65%_center]"
        />
        <div className="photo-overlay absolute inset-0 -z-10" />
        <div className="container-x py-16 md:py-20 lg:py-24">
          <div className="home-enter max-w-2xl">
            <p className="mb-7 flex items-center gap-3 text-xs font-bold uppercase text-navy-foreground/85">
              <span className="h-0.5 w-8 bg-cyan" />
              People. Technology. Possibilities.
            </p>
            <h1 className="text-5xl leading-[1.08] text-navy-foreground md:text-6xl">
              Collabio
              <span className="mt-5 block text-3xl leading-[1.2] md:text-[2.6rem]">
                Connecting businesses with the people and technology they need.
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-navy-foreground/85 md:text-lg">
              Workforce solutions, IT equipment logistics, authorized technical
              support, and professional talent acquisition — connected through
              one dependable partner.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/services" size="lg">
                Explore Our Services <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink to="/join-network" size="lg" variant="ghostLight">
                Join Our Network <ArrowUpRight className="h-4 w-4" />
              </ButtonLink>
            </div>
            <p className="mt-10 text-xs text-navy-foreground/70">
              U.S.-focused solutions · Client-approved processes · Professional
              coordination
            </p>
          </div>
        </div>
      </section>

      <section className="border-b bg-surface">
        <div className="container-x grid md:grid-cols-3">
          {[
            {
              i: Users,
              t: "People & Talent",
              d: "Professional connections that matter",
            },
            {
              i: Cpu,
              t: "Technology Operations",
              d: "Practical support. Clear processes.",
            },
            {
              i: Building2,
              t: "Business Collaboration",
              d: "Working together, moving forward",
            },
          ].map(({ i: I, t, d }) => (
            <div
              key={t}
              className="flex items-center gap-4 border-b py-7 md:border-b-0 md:border-r md:px-7 md:last:border-r-0"
            >
              <I className="h-7 w-7 shrink-0 text-primary" />
              <div>
                <h2 className="text-base">{t}</h2>
                <p className="mt-1 text-xs text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x grid gap-8 py-16 md:grid-cols-2 md:gap-16 md:py-24">
        <div>
          <Eyebrow>Connected by purpose</Eyebrow>
          <h2 className="max-w-xl text-3xl leading-tight md:text-4xl">
            Building stronger connections between people and technology.
          </h2>
        </div>
        <div>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Successful businesses depend on reliable people, efficient
            technology operations, and strong professional relationships.
            Collabio brings these elements together through flexible workforce
            and IT support solutions.
          </p>
          <ButtonLink to="/about" variant="outline" className="mt-6">
            Meet Collabio <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="container-x">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Our expertise</Eyebrow>
              <h2 className="max-w-2xl text-3xl leading-tight md:text-4xl">
                Comprehensive solutions.
                <br />
                One trusted partner.
              </h2>
            </div>
            <ButtonLink to="/services" variant="outline">
              All Services <ArrowUpRight className="h-4 w-4" />
            </ButtonLink>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group overflow-hidden rounded-lg border bg-card transition duration-300 hover:-translate-y-1 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={servicePhotography[s.slug]?.card.src}
                    alt={servicePhotography[s.slug]?.card.alt}
                    width={1536}
                    height={1024}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105 motion-reduce:transform-none"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <s.icon className="h-6 w-6 text-primary" />
                    <span className="text-xs text-muted-foreground">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-lg">{s.title}</h3>
                  <p className="mt-3 min-h-16 text-sm leading-relaxed text-muted-foreground">
                    {s.short}
                  </p>
                  <span className="mt-5 flex items-center gap-2 text-sm font-bold text-primary">
                    Explore service <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-24">
        <SectionHead
          eyebrow="Why Collabio"
          title="Your partner in people, technology, and operations."
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {why.map((w) => (
            <div key={w.t} className="border-t pt-6">
              <IconBox>
                <w.icon className="h-5 w-5" />
              </IconBox>
              <h3 className="text-lg">{w.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {w.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy py-16 text-navy-foreground md:py-20">
        <div className="container-x">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow light>How we work</Eyebrow>
              <h2 className="text-3xl text-navy-foreground md:text-4xl">
                Clear steps. Connected support.
              </h2>
            </div>
            <ButtonLink to="/how-it-works" variant="ghostLight">
              Our Process <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {steps.map(([t, d], i) => (
              <div key={t} className="border-t border-navy-foreground/25 pt-6">
                <span className="text-sm font-bold text-cyan">0{i + 1}</span>
                <h3 className="mt-5 text-xl text-navy-foreground">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-foreground/75">
                  {d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x grid gap-10 py-16 md:py-24 lg:grid-cols-2">
        <div>
          <Eyebrow>Industries we support</Eyebrow>
          <h2 className="text-3xl md:text-4xl">
            Built for the businesses moving technology forward.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Flexible people and operational support for technology-driven
            organizations.
          </p>
        </div>
        <ul className="grid gap-x-6 sm:grid-cols-2">
          {industries.map((t) => (
            <li
              key={t}
              className="flex items-center gap-3 border-b py-5 text-sm font-semibold text-navy"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
              {t}
            </li>
          ))}
        </ul>
      </section>

      <Testimonials />

      <section className="relative isolate overflow-hidden bg-navy text-navy-foreground">
        <img
          src={careers}
          alt="Technology professionals working together in a collaborative office"
          width={1920}
          height={1024}
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-right"
        />
        <div className="photo-overlay absolute inset-0 -z-10" />
        <div className="container-x py-16 md:py-24">
          <div className="max-w-xl">
            <Eyebrow light>For professionals</Eyebrow>
            <h2 className="text-3xl text-navy-foreground md:text-4xl">
              Your next professional opportunity starts here.
            </h2>
            <p className="mt-5 text-lg text-navy-foreground/85">
              Explore opportunities and connect with a network of technology
              professionals, recruiting partners, and businesses.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/jobs">
                Browse Opportunities <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink to="/join-network" variant="ghostLight">
                Join Our Network
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x flex flex-col justify-between gap-8 py-16 md:flex-row md:items-center md:py-20">
        <div className="max-w-2xl">
          <Eyebrow>Let's work together</Eyebrow>
          <h2 className="text-3xl md:text-4xl">
            Let's build something great together.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Looking for dependable workforce and technology operations support?
            Let's discuss how Collabio can help.
          </p>
        </div>
        <ButtonLink
          to="/for-businesses"
          size="lg"
          className="shrink-0 self-start md:self-auto"
        >
          Partner With Collabio <ArrowUpRight className="h-5 w-5" />
        </ButtonLink>
      </section>
    </>
  );
}
