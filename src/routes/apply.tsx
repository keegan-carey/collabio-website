import { createFileRoute } from "@tanstack/react-router";
import { jobs } from "@/lib/content";
import { PageHero, seo } from "@/components/site/ui";
import { SmartForm, privacyConsent } from "@/components/site/Forms";

export const Route = createFileRoute("/apply")({
  validateSearch: (s: Record<string, unknown>): { job?: string | undefined } => ({ job: typeof s["job"] === "string" ? s["job"] : undefined }),
  head: () => seo("Apply for a Position — Collabio", "Submit your application to Collabio."),
  component: Apply,
});

function Apply() {
  const { job } = Route.useSearch();
  const selected = jobs.find((j) => j.slug === job)?.title;
  const positions = [...jobs.map((j) => j.title), "General application"];
  return (
    <>
      <PageHero eyebrow="Application" title={selected ? `Apply: ${selected}` : "Submit Your Application"} intro="Fields marked * are required. Resumes must be PDF or Word, up to 5 MB." />
      <section className="container-x max-w-4xl py-16">
        <SmartForm
          refPrefix="APP" submitLabel="Submit Application" successTitle="Application submitted"
          successText="Thank you for your interest in Collabio. Your application has been successfully submitted. Our team will review your information and contact you if your experience matches the position requirements."
          sections={[
            { title: "Personal information", fields: [
              { name: "name", label: "Full Name", required: true },
              { name: "email", label: "Email Address", type: "email", required: true, half: true },
              { name: "phone", label: "Phone Number", type: "tel", required: true, half: true },
              { name: "city", label: "Current City", required: true, half: true },
              { name: "state", label: "State", half: true },
              { name: "country", label: "Country", required: true, half: true },
            ] },
            { title: "Professional information", fields: [
              { name: "currentTitle", label: "Current Job Title", half: true },
              { name: "years", label: "Years of Experience", type: "number", required: true, half: true },
              { name: "skills", label: "Primary Skills", required: true, placeholder: "e.g. React, TypeScript, AWS" },
              { name: "linkedin", label: "LinkedIn Profile URL", type: "url", half: true },
              { name: "portfolio", label: "Portfolio or GitHub URL", type: "url", half: true },
              { name: "arrangement", label: "Preferred Work Arrangement", type: "select", options: ["Remote", "Hybrid", "On-site", "No preference"], half: true },
              { name: "typePref", label: "Employment Type Preference", type: "select", options: ["Full-time", "Part-time", "Contract", "Project-based"], half: true },
            ] },
            { title: "Application details", fields: [
              { name: "position", label: "Position Applied For", type: "select", required: true, options: positions, defaultValue: selected ?? "", half: true },
              { name: "comp", label: "Expected Compensation (optional)", half: true },
              { name: "availability", label: "Availability", required: true, placeholder: "e.g. 2 weeks notice" },
              { name: "info", label: "Additional Information", type: "textarea" },
            ] },
            { title: "Documents", fields: [
              { name: "resume", label: "Resume (PDF or DOCX)", type: "file", required: true },
              { name: "cover", label: "Cover Letter (optional)", type: "file", half: true },
              { name: "extra", label: "Supporting Documents (optional)", type: "file", half: true },
            ] },
          ]}
          consents={["I consent to Collabio processing my application information.", "I confirm the information I've submitted is accurate.", privacyConsent]}
        />
      </section>
    </>
  );
}
