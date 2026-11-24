import { Link } from "react-router-dom";
import { useState, type FormEvent } from "react";
import { Mail, Phone, Send, CheckCircle2 } from "lucide-react";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import { company } from "../data/company";
import { CONTACT_FORM_ENDPOINT } from "../data/forms";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const field = (name: string) => String(form.get(name) ?? "").trim();

    // Honeypot: real visitors never see or fill this field; bots usually do.
    if (field("website")) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New enquiry from ${field("name")} — Turbine website`,
          _template: "table",
          name: field("name"),
          email: field("email"), // FormSubmit uses this as the reply-to address
          company: field("company") || "—",
          message: field("message"),
          page: window.location.href,
        }),
      });
      const result = (await res.json().catch(() => ({}))) as { success?: string | boolean; message?: string };
      if (!res.ok || String(result.success) !== "true") {
        throw new Error(result.message || `Request failed (${res.status})`);
      }
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const fieldClass =
    "mt-2 w-full border-2 border-primary bg-secondary px-4 py-3.5 text-sm outline-none focus:bg-primary focus:text-secondary";

  return (
    <>
      <SEO title="Contact" description="Book a Turbine demo or talk to our team." path="/contact" />
      <section className="border-b-8 border-primary bg-primary px-4 py-16 text-secondary sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          <SectionHeading
            eyebrow="Contact"
            title="Let's map Turbine to your business"
            description="Connect with Turbine expert. Submit the form below and we'll be in touch shortly."
            light
            large
          />
        </div>
      </section>
      <section className="mx-auto max-w-[1600px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="border-2 border-primary p-8 sm:p-10">
            {status === "success" ? (
              <div className="flex flex-col items-center py-16 text-center">
                <CheckCircle2 className="h-12 w-12" />
                <h2 className="mt-4 font-display text-2xl font-extrabold">Message received</h2>
                <p className="mt-2 max-w-md text-primary/80">Thanks for reaching out. Our team will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="relative space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wide text-primary/75">Full name</label>
                    <input id="name" name="name" required maxLength={120} autoComplete="name" className={fieldClass} placeholder="Sujith" />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wide text-primary/75">Work email</label>
                    <input id="email" name="email" type="email" required maxLength={200} autoComplete="email" className={fieldClass} placeholder="sujith@company.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="text-xs font-bold uppercase tracking-wide text-primary/75">Company</label>
                  <input id="company" name="company" maxLength={160} autoComplete="organization" className={fieldClass} placeholder="Industry Ltd." />
                </div>
                <div>
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wide text-primary/75">Message</label>
                  <textarea id="message" name="message" rows={5} required maxLength={5000} className={fieldClass} placeholder="Tell us about your current tools..." />
                </div>
                {/* Honeypot — hidden from people and screen readers */}
                <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                  <label htmlFor="website">Website</label>
                  <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>
                {status === "error" && (
                  <p role="alert" className="border-2 border-primary bg-primary px-4 py-3 text-sm font-semibold text-secondary">
                    Your message couldn't be sent. Please try again in a moment, or email us at{" "}
                    <a href={`mailto:${company.email}`} className="underline">{company.email}</a>.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center gap-2 border-2 border-primary bg-primary px-7 py-3.5 text-sm font-bold text-secondary transition hover:bg-secondary hover:text-primary disabled:cursor-wait disabled:opacity-70"
                >
                  {status === "submitting" ? "Sending…" : "Send message"}
                  {status !== "submitting" && <Send className="h-4 w-4" />}
                </button>
                <p className="text-xs text-primary/65">
                  We use your details only to reply to your enquiry. See our{" "}
                  <Link to="/privacy" className="font-semibold underline underline-offset-2 hover:text-primary">Privacy Policy</Link>.
                </p>
              </form>
            )}
          </div>
          <aside className="space-y-0 border-2 border-primary">
            <div className="border-b-2 border-primary p-6">
              <Mail className="h-5 w-5" />
              <h3 className="mt-4 font-display text-lg font-extrabold">Email</h3>
              <p className="mt-1 text-sm text-primary/80">{company.email}</p>
            </div>
            <div className="border-b-2 border-primary p-6">
              <Phone className="h-5 w-5" />
              <h3 className="mt-4 font-display text-lg font-extrabold">Phone</h3>
              <p className="mt-1 text-sm text-primary/80">{company.phone}</p>
            </div>
            <div className="bg-primary p-6 text-secondary">
              <p className="text-xs font-bold uppercase tracking-wide text-secondary/75">Infrastructure</p>
              <h3 className="mt-3 font-display text-xl font-extrabold">Hosted on AWS</h3>
              <p className="mt-2 text-sm text-secondary/80">Provisioned and managed on AWS — secure, scalable, fully operated by our team.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
