import { useState, type FormEvent, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { Button } from "./ui";

export type FieldDef = {
  name: string; label: string; type?: "text" | "email" | "tel" | "url" | "number" | "textarea" | "select" | "file";
  options?: string[]; required?: boolean; half?: boolean; placeholder?: string; accept?: string; defaultValue?: string;
};

const MAX_FILE = 5 * 1024 * 1024;

export function makeRef(prefix: string) {
  return `${prefix}-${Date.now().toString(36).toUpperCase().slice(-6)}${Math.random().toString(36).slice(2, 5).toUpperCase()}`;
}

function validate(fields: FieldDef[], fd: FormData) {
  const errors: Record<string, string> = {};
  for (const f of fields) {
    const v = fd.get(f.name);
    if (f.type === "file") {
      const file = v as File | null;
      if (f.required && (!file || !file.size)) errors[f.name] = "Please upload a file.";
      else if (file && file.size) {
        if (file.size > MAX_FILE) errors[f.name] = "File must be under 5 MB.";
        if (!/\.(pdf|docx?)$/i.test(file.name)) errors[f.name] = "Use a PDF or Word document.";
      }
      continue;
    }
    const s = String(v ?? "").trim();
    if (f.required && !s) { errors[f.name] = `${f.label} is required.`; continue; }
    if (s.length > 2000) errors[f.name] = "Too long.";
    if (s && f.type === "email" && !z.string().email().safeParse(s).success) errors[f.name] = "Enter a valid email.";
    if (s && f.type === "url" && !z.string().url().safeParse(s).success) errors[f.name] = "Enter a valid URL (https://…).";
  }
  return errors;
}

export function SmartForm({ sections, consents, submitLabel, refPrefix, successTitle, successText }: {
  sections: { title?: string; fields: FieldDef[] }[]; consents: ReactNode[]; submitLabel: string;
  refPrefix: string; successTitle: string; successText: string;
}) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(false);
  const [ref, setRef] = useState<string | null>(null);
  const all = sections.flatMap((s) => s.fields);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (busy) return;
    const fd = new FormData(e.currentTarget);
    const errs = validate(all, fd);
    consents.forEach((_, i) => { if (!fd.get(`consent-${i}`)) errs[`consent-${i}`] = "Required."; });
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setBusy(true);
    setTimeout(() => { setRef(makeRef(refPrefix)); setBusy(false); window.scrollTo({ top: 0, behavior: "smooth" }); }, 600);
  };

  if (ref) {
    return (
      <div className="rounded-xl border bg-card p-10 text-center shadow-card">
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
        <h2 className="mt-4 text-2xl">{successTitle}</h2>
        <p className="mx-auto mt-3 max-w-lg text-muted-foreground">{successText}</p>
        <p className="mt-6 inline-block rounded-lg bg-secondary px-4 py-2 font-mono text-sm font-semibold text-navy">Reference: {ref}</p>
        <div className="mt-8"><Link to="/" className="text-sm font-semibold text-primary">Back to home →</Link></div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8 rounded-xl border bg-card p-6 shadow-card md:p-10">
      {sections.map((sec, si) => (
        <fieldset key={si}>
          {sec.title && <legend className="mb-4 text-lg font-bold text-navy">{sec.title}</legend>}
          <div className="grid gap-5 md:grid-cols-2">
            {sec.fields.map((f) => (
              <label key={f.name} className={f.half ? "" : "md:col-span-2"}>
                <span className="mb-1.5 block text-sm font-semibold text-navy">{f.label}{f.required && <span className="text-primary"> *</span>}</span>
                {f.type === "textarea" ? (
                  <textarea name={f.name} rows={4} className="field" placeholder={f.placeholder} defaultValue={f.defaultValue} />
                ) : f.type === "select" ? (
                  <select name={f.name} className="field" defaultValue={f.defaultValue ?? ""}>
                    <option value="" disabled>Select…</option>
                    {f.options?.map((o) => <option key={o}>{o}</option>)}
                  </select>
                ) : f.type === "file" ? (
                  <input type="file" name={f.name} accept={f.accept ?? ".pdf,.doc,.docx"} className="field file:mr-3 file:rounded-md file:border-0 file:bg-secondary file:px-3 file:py-1 file:text-sm file:font-semibold file:text-navy" />
                ) : (
                  <input name={f.name} type={f.type ?? "text"} className="field" placeholder={f.placeholder} defaultValue={f.defaultValue} />
                )}
                {errors[f.name] && <span className="mt-1 block text-xs text-destructive">{errors[f.name]}</span>}
              </label>
            ))}
          </div>
        </fieldset>
      ))}
      <div className="space-y-3 border-t pt-6">
        {consents.map((c, i) => (
          <label key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
            <input type="checkbox" name={`consent-${i}`} className="mt-1 accent-primary" />
            <span>{c}{errors[`consent-${i}`] && <span className="ml-2 text-xs text-destructive">Required</span>}</span>
          </label>
        ))}
      </div>
      <Button type="submit" size="lg" disabled={busy}>{busy ? "Submitting…" : submitLabel}</Button>
    </form>
  );
}

export const privacyConsent = (
  <>I agree to the processing of my information as described in the <Link to="/legal/$page" params={{ page: "privacy" }} className="font-semibold text-primary">Privacy Policy</Link>.</>
);
