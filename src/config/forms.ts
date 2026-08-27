/**
 * JotForm form IDs, created in the Comfort With Chemotherapy JotForm account.
 *
 * To swap a form, replace the id here — nothing else in the app needs to change.
 * Live form URL is https://form.jotform.com/<id>
 */
export const JOTFORM_IDS = {
  /** Personalized Comfort Box Request Form (intake) */
  request: "262385818412158",
  /** Partnership Interest Form */
  partner: "262385900946162",
  /** Newsletter Signup — submitted to directly from the inline signup forms */
  newsletter: "262385164630154",
} as const;

export const formIsConfigured = (id: string) => id !== "PENDING" && id.length > 0;

/**
 * Field names JotForm expects when posting a newsletter signup straight to its
 * submit endpoint. Read back from the created form — do not hand-edit.
 */
export const NEWSLETTER_FIELDS = {
  firstName: "q2_q2",
  lastName: "q3_q3",
  email: "q4_q4",
} as const;

/**
 * Posts a newsletter signup to JotForm.
 *
 * Uses `no-cors` because JotForm's submit endpoint does not send CORS headers.
 * The request is still delivered (it is a simple form-encoded POST), but the
 * response is opaque, so success cannot be read back from the browser. Signups
 * land in the JotForm submissions table and trigger its notification email.
 */
export async function submitNewsletter(data: {
  firstName: string;
  lastName: string;
  email: string;
}) {
  const body = new URLSearchParams();
  body.set(NEWSLETTER_FIELDS.firstName, data.firstName);
  body.set(NEWSLETTER_FIELDS.lastName, data.lastName);
  body.set(NEWSLETTER_FIELDS.email, data.email);

  await fetch(`https://submit.jotform.com/submit/${JOTFORM_IDS.newsletter}`, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });
}
