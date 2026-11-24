import { company } from "./company";

/**
 * Website legal pages (Privacy Policy, Cookie Policy, Terms & Conditions).
 *
 * Written as markdown: `## Heading` starts a section; paragraphs, lists,
 * **bold** and [links](/path) are supported. Keep these accurate to what the
 * website actually does — update them if you add analytics, cookies, chat
 * widgets or new form services. Have them reviewed by a legal adviser.
 */

export type LegalPageId = "privacy" | "cookies" | "terms";

export interface LegalPageContent {
  title: string;
  description: string;
  path: string;
  /** Shown as "Last updated" — change it whenever the text changes. */
  updated: string;
  markdown: string;
}

const UPDATED = "16 October 2026";
const site = company.website.replace(/^https?:\/\//, "");

export const legalPages: Record<LegalPageId, LegalPageContent> = {
  privacy: {
    title: "Privacy Policy",
    description: `How ${company.name} collects, uses and protects personal information on ${site}.`,
    path: "/privacy",
    updated: UPDATED,
    markdown: `
## Who we are

This website (${site}) is operated by ${company.name} ("we", "us", "our"). This policy explains what personal information we collect when you visit the website or contact us, why we collect it, and the choices you have.

If you have any questions about this policy or your information, email us at [${company.email}](mailto:${company.email}).

## Information we collect

**Information you give us.** When you send the [contact form](/contact) we receive:

- your name
- your work email address
- your company name (optional)
- your message
- the address of the page the form was sent from

If you email or call us directly, we receive whatever you choose to include.

**Information collected automatically.** Like any website, the services that deliver it receive basic technical information when you visit, such as your IP address, browser type and the pages requested. We do not use this to identify you.

We do **not** use analytics, advertising trackers or tracking cookies on this website.

## How we use your information

- to reply to your enquiry and arrange demos or calls you ask for
- to discuss Turbine with you, including pricing and implementation, where you have asked us to
- to keep the website secure and working properly
- to meet legal obligations

We do not sell your personal information, and we do not use it for automated decision-making.

## Services that process data for us

We use a small number of trusted providers to run this website:

- **FormSubmit** (formsubmit.co) — delivers contact form messages to our email inbox.
- **Netlify** — hosts and delivers this website.
- **Google Fonts** — serves the typefaces used on the site; your browser requests them directly from Google.
- **GitHub** — hosts the documentation shown on our [Resources](/resources) page; your browser loads it directly from GitHub.

These providers may process information outside India, including in the United States. They only receive what they need to provide their service.

## How long we keep it

We keep contact form messages and related emails for as long as needed to handle your enquiry and any business relationship that follows, and then delete them. You can ask us to delete them sooner at any time.

## Your rights

Depending on where you live — including under India's Digital Personal Data Protection Act, 2023 and, for visitors in the EU or UK, the GDPR — you can ask us to:

- tell you what personal information we hold about you
- correct or update it
- delete it
- stop using it, or withdraw consent you have given

Email [${company.email}](mailto:${company.email}) and we will respond within 30 days. If you are not satisfied with our response, you can contact your local data protection authority.

## Security

We use reputable providers and encrypted (HTTPS) connections to protect information sent to us. No method of transmission over the internet is completely secure, but we take reasonable steps to protect your information.

## Children

This website is intended for businesses and is not directed at children under 18. We do not knowingly collect information from children.

## Changes to this policy

We may update this policy from time to time. The "Last updated" date at the top shows when it was last changed.

## Contact

${company.name} — [${company.email}](mailto:${company.email}) — ${company.phone}
`,
  },

  cookies: {
    title: "Cookie Policy",
    description: `Which cookies and similar technologies ${site} uses.`,
    path: "/cookies",
    updated: UPDATED,
    markdown: `
## What cookies are

Cookies are small text files a website stores in your browser. Similar technologies, such as local storage, let a site remember information between visits.

## Cookies we use

**We do not set any cookies on this website**, and we do not use local storage or similar technologies to track you. There are no analytics, advertising or social media tracking cookies.

## Third-party services

Some parts of the site load content from other providers, as described in our [Privacy Policy](/privacy):

- **Google Fonts** serves the site's typefaces.
- **GitHub** serves the documentation on the [Resources](/resources) page.
- **FormSubmit** receives contact form messages.

These requests do not set cookies on this website. The providers may keep standard technical logs, such as IP addresses, under their own privacy policies.

## If this changes

If we add cookies in future — for example for analytics — we will update this policy first and, where the law requires it, ask for your consent before setting them.

## Managing cookies

You can block or delete cookies at any time in your browser settings. Because this site does not rely on cookies, it will work the same either way.

## Contact

Questions about this policy? Email [${company.email}](mailto:${company.email}).
`,
  },

  terms: {
    title: "Terms & Conditions",
    description: `The terms that apply when you use ${site}.`,
    path: "/terms",
    updated: UPDATED,
    markdown: `
## About these terms

These terms apply to your use of this website (${site}), operated by ${company.name}. By using the website you agree to them. If you do not agree, please do not use the website.

## The website and our services

This website gives information about Turbine and its apps. Using the Turbine platform itself — including subscriptions, implementation and support — is governed by a separate agreement signed with us, not by these terms.

Prices, features and timelines described on the website are for general information and may change. A formal quote or agreement from us is what applies.

## Using the website

You agree not to:

- use the website in a way that breaks any law
- try to gain unauthorised access to the website or the systems behind it
- interfere with its operation, including by introducing malware or overloading it
- send spam, misleading or abusive messages through the contact form

## Intellectual property

The content on this website — including text, graphics, logos, documentation and the Turbine name — belongs to ${company.name} or its licensors. You may view and share it for evaluating Turbine, but you may not copy, modify or republish it for other purposes without our written permission.

## Accuracy of information

We work to keep the website accurate and up to date, but it is provided "as is". We do not guarantee that it is complete, error-free or always available. Screenshots and examples are illustrative.

## Links to other websites

The website links to and loads content from third-party services, such as GitHub for documentation. We are not responsible for their content or practices.

## Limitation of liability

To the fullest extent permitted by law, we are not liable for any indirect or consequential loss arising from your use of the website, or for any loss caused by relying on information on it. Nothing in these terms limits liability that cannot be limited by law.

## Privacy

How we handle personal information is explained in our [Privacy Policy](/privacy) and [Cookie Policy](/cookies).

## Changes to these terms

We may update these terms from time to time. The "Last updated" date at the top shows when they last changed. Continuing to use the website after a change means you accept the updated terms.

## Governing law

These terms are governed by the laws of India, and the courts of India have jurisdiction over any dispute relating to them.

## Contact

${company.name} — [${company.email}](mailto:${company.email}) — ${company.phone}
`,
  },
};
