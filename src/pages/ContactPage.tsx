import { useState, type FormEvent } from "react";
import { Mail, Phone, Send, CheckCircle2 } from "lucide-react";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import { company } from "../data/company";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
            {submitted ? (
              <div className="flex flex-col items-center py-16 text-center">
                <CheckCircle2 className="h-12 w-12" />
                <h2 className="mt-4 font-display text-2xl font-extrabold">Message received</h2>
                <p className="mt-2 max-w-md text-primary/80">Thanks for reaching out. Our team will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wide text-primary/75">Full name</label>
                    <input id="name" name="name" required className={fieldClass} placeholder="Sujith" />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wide text-primary/75">Work email</label>
                    <input id="email" name="email" type="email" required className={fieldClass} placeholder="sujith@company.com" />
                  </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="company" className="text-xs font-bold uppercase tracking-wide text-primary/75">Company</label>
                    <input id="company" name="company" className={fieldClass} placeholder="Industry Ltd." />
                  </div>
                  <div>
                    <label htmlFor="users" className="text-xs font-bold uppercase tracking-wide text-primary/75">Team size</label>
                    <select id="users" name="users" className={fieldClass} defaultValue="">
                      <option value="" disabled>Select range</option>
                      <option>1–10 users</option>
                      <option>11–50 users</option>
                      <option>51–200 users</option>
                      <option>200+ users</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="interest" className="text-xs font-bold uppercase tracking-wide text-primary/75">What are you exploring?</label>
                  <select id="interest" name="interest" className={fieldClass} defaultValue="demo">
                    <option value="demo">Product demo</option>
                    <option value="pricing">Pricing discussion</option>
                    <option value="implementation">Implementation planning</option>
                    <option value="industry">Industry-specific walkthrough</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wide text-primary/75">Message</label>
                  <textarea id="message" name="message" rows={5} required className={fieldClass} placeholder="Tell us about your current tools..." />
                </div>
                <button type="submit" className="inline-flex items-center gap-2 border-2 border-primary bg-primary px-7 py-3.5 text-sm font-bold text-secondary transition hover:bg-secondary hover:text-primary">
                  Send message <Send className="h-4 w-4" />
                </button>
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
