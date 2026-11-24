import { company } from "./company";

/**
 * Contact form submissions are emailed to the company address by FormSubmit
 * (https://formsubmit.co) — no account or API key. The very first submission
 * sends an "Activate Form" email to this address; after clicking it once,
 * every submission arrives in the mailbox.
 */
export const CONTACT_FORM_ENDPOINT = `https://formsubmit.co/ajax/${company.email}`;
