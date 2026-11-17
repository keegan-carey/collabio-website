import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Building2, Quote, UserRound } from "lucide-react";
import { clientTestimonialSamples, professionalTestimonialSamples, type Testimonial } from "@/lib/content";
import { Button, Eyebrow } from "./ui";

function TestimonialSection({ id, title, eyebrow, items, professional = false }: {
  id: string; title: string; eyebrow: string; items: Testimonial[]; professional?: boolean;
}) {
  const [carouselRef, api] = useEmblaCarousel({ align: "start", loop: false, slidesToScroll: 1 });
  const [selected, setSelected] = useState(0);
  const [snapCount, setSnapCount] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const sync = useCallback(() => {
    if (!api) return;
    setSelected(api.selectedScrollSnap());
    setSnapCount(api.scrollSnapList().length);
    setCanPrev(api.canScrollPrev());
    setCanNext(api.canScrollNext());
  }, [api]);
  useEffect(() => {
    if (!api) return;
    sync();
    api.on("select", sync).on("reInit", sync);
    return () => { api.off("select", sync).off("reInit", sync); };
  }, [api, sync]);

  return (
    <section aria-labelledby={`${id}-heading`} className={professional ? "bg-secondary py-16 md:py-20" : "bg-surface py-16 md:py-20"}>
      <div className="container-x">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 id={`${id}-heading`} className="text-3xl md:text-4xl">{title}</h2>
            {professional && <p className="mt-3 text-lg font-medium text-navy">What our professionals say.</p>}
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Illustrative {professional ? "professional experiences" : "client perspectives"} with AI-generated portraits, not actual endorsements.</p>
          </div>
          <div className="flex gap-2">
            <Button type="button" variant="outline" size="sm" className="h-11 w-11 px-0" disabled={!canPrev} onClick={() => api?.scrollPrev()} aria-label={`Previous ${professional ? "professional" : "client"} testimonial`} title="Previous testimonial"><ArrowLeft className="h-5 w-5" /></Button>
            <Button type="button" variant="outline" size="sm" className="h-11 w-11 px-0" disabled={!canNext} onClick={() => api?.scrollNext()} aria-label={`Next ${professional ? "professional" : "client"} testimonial`} title="Next testimonial"><ArrowRight className="h-5 w-5" /></Button>
          </div>
        </div>
        <div ref={carouselRef} className="overflow-hidden" role="region" aria-roledescription="carousel" aria-label={title}>
          <div className="flex touch-pan-y gap-6">
            {items.map((item, index) => (
              <div key={item.id} className="flex min-w-0 flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)]" role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${items.length}`}>
                <figure className="flex w-full flex-col rounded-lg border bg-card p-6 md:p-8">
                  <div className="mb-6"><Quote className="h-8 w-8 text-primary" aria-hidden="true" /></div>
                  <blockquote className="flex-1 text-lg leading-relaxed text-navy">“{item.quote}”</blockquote>
                  <figcaption className="mt-8 flex items-center gap-4 border-t pt-6">
                    {item.portrait ? <img src={item.portrait} alt={item.portraitAlt ?? (item.name ? `Portrait of ${item.name}` : "Testimonial portrait")} width={80} height={80} loading="lazy" className="h-20 w-20 shrink-0 rounded-full object-cover" /> : <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-secondary text-primary" aria-hidden="true">{professional ? <UserRound className="h-6 w-6" /> : <Building2 className="h-6 w-6" />}</div>}
                    <div className="min-w-0"><p className="font-bold text-navy">{item.name ?? item.topic}</p><p className="mt-1 text-sm text-muted-foreground">{item.title ?? item.relationship}</p>{item.company && <p className="mt-1 text-sm text-muted-foreground">{item.company}</p>}{item.disclosure && <p className="mt-1 text-xs text-muted-foreground">{item.disclosure}</p>}</div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between gap-4"><p className="text-xs text-muted-foreground">{professional ? "Employee, contractor & network member sample experiences" : "Business client & partner sample experiences"}</p><p aria-live="polite" aria-atomic="true" className="shrink-0 text-xs font-semibold text-navy">{selected + 1} / {snapCount || 1}</p></div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return <>
    <TestimonialSection id="client-feedback" title="What Our Clients Say" eyebrow="Client testimonials · Business partners" items={clientTestimonialSamples} />
    <TestimonialSection id="life-at-collabio" title="Life at Collabio" eyebrow="Employee & contractor experiences" items={professionalTestimonialSamples} professional />
  </>;
}