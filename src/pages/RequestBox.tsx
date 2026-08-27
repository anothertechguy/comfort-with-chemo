import { useEffect } from "react";
import { Reveal, PageHero } from "../components/shared";
import { JotFormEmbed } from "../components/JotFormEmbed";
import { JOTFORM_IDS } from "../config/forms";

export default function RequestBox() {
  useEffect(() => {
    document.title = "Request a Comfort Box — Comfort With Chemotherapy";
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Request a Comfort Box"
        title={
          <>
            Every box is created with{" "}
            <span className="italic text-gradient-honey">one person in mind</span>.
          </>
        }
        intro="Tell us who you are requesting a box for and a little about who they are. We'll use your answers to thoughtfully create a personalized box filled with comfort, encouragement, and a little joy during their chemotherapy journey."
      />

      <section className="pb-16 md:pb-20 lg:pb-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <Reveal>
            <JotFormEmbed
              formId={JOTFORM_IDS.request}
              title="Personalized Comfort Box Request Form"
            />
          </Reveal>

          <Reveal>
            <p className="mt-10 text-sm text-foreground/60 leading-relaxed text-center max-w-2xl mx-auto">
              Comfort With Chemotherapy collects only the information needed to create,
              personalize, and deliver a Comfort Care Box. Please do not submit medical
              records, medication information, test results, insurance information, Social
              Security numbers, or detailed treatment information.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
