import { useEffect } from "react";
import { formIsConfigured } from "../config/forms";

const HANDLER_SRC = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
const FORM_ORIGIN = "https://form.jotform.com/";

declare global {
  interface Window {
    jotformEmbedHandler?: (selector: string, origin: string) => void;
  }
}

/**
 * Embeds a JotForm inline. JotForm's embed handler script posts height changes
 * from the iframe so the form grows with its content instead of scrolling
 * inside a fixed box — important here since both forms are long.
 */
export function JotFormEmbed({ formId, title }: { formId: string; title: string }) {
  const iframeId = `JotFormIFrame-${formId}`;
  const configured = formIsConfigured(formId);

  useEffect(() => {
    if (!configured) return;

    const init = () =>
      window.jotformEmbedHandler?.(`iframe[id='${iframeId}']`, FORM_ORIGIN);

    if (window.jotformEmbedHandler) {
      init();
      return;
    }

    let script = document.querySelector<HTMLScriptElement>(`script[src="${HANDLER_SRC}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = HANDLER_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
    script.addEventListener("load", init);
    const el = script;
    return () => el.removeEventListener("load", init);
  }, [iframeId, configured]);

  if (!configured) {
    return (
      <div className="rounded-3xl border border-dashed border-border bg-card/60 p-10 text-center">
        <p className="text-foreground/70">
          This form is not connected yet.
        </p>
        <p className="mt-2 text-sm text-foreground/50">
          Add its JotForm id in <code>src/config/forms.ts</code>.
        </p>
      </div>
    );
  }

  return (
    <iframe
      id={iframeId}
      title={title}
      src={`${FORM_ORIGIN}${formId}`}
      allow="geolocation; microphone; camera; fullscreen"
      scrolling="no"
      className="w-full rounded-3xl border-0 bg-transparent"
      style={{ minWidth: "100%", height: 900 }}
    />
  );
}
