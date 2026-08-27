/**
 * JotForm form IDs, created in the Comfort With Chemotherapy JotForm account.
 *
 * To swap a form, replace the id here — nothing else in the app needs to change.
 * Live form URL is https://form.jotform.com/<id>
 */
export const JOTFORM_IDS = {
  /** Personalized Comfort Box Request Form (intake) */
  request: "PENDING",
  /** Partnership Interest Form */
  partner: "PENDING",
} as const;

export const formIsConfigured = (id: string) => id !== "PENDING" && id.length > 0;
