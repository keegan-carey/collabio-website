import { createFileRoute } from "@tanstack/react-router";
import { PageHero, seo } from "@/components/site/ui";
import { SmartForm, privacyConsent } from "@/components/site/Forms";

export const Route = createFileRoute("/join-network")({
  head: () => seo("Join Our Professional Network — Collabio", "Share your experience and stay connected with future opportunities at Collabio."),
  component: Join,
});

function Join() {
  return (
    <>
      <PageHero eyebrow="Professional Network" title="Stay Connected to New Opportunities." intro="Join the Collabio professional network to share your experience, highlight your skills, and stay connected with future opportunities." />
      <section className="container-x max-w-4xl py-16">
        <SmartForm
          refPrefix="NET" submitLabel="Join the Network" successTitle="Welcome to the network"
          successText="Your profile has been received. We'll reach out when an opportunity matches your experience."
          sections={[{ fields: [
            { name: "name", label: "Full Name", required: true, half: true },
            { name: "email", label: "Email", type: "email", required: true, half: true },
            { name: "phone", label: "Phone", type: "tel", half: true },
            { name: "location", label: "Location", required: true, half: true },
            { name: "title", label: "Professional Title", required: true, half: true },
            { name: "years", label: "Years of Experience", type: "number", half: true },
            { name: "skills", label: "Skills", required: true },
            { name: "pref", label: "Preferred Opportunity Type", type: "select", options: ["Full-time", "Part-time", "Contract", "Project-based", "Any"], half: true },
            { name: "linkedin", label: "LinkedIn Profile", type: "url", half: true },
            { name: "resume", label: "Resume Upload (PDF or DOCX)", type: "file", required: true },
            { name: "notes", label: "Additional Notes", type: "textarea" },
          ] }]}
          consents={[privacyConsent]}
        />
      </section>
    </>
  );
}
