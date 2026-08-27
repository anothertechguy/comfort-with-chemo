import { useEffect } from "react";
import { Reveal, PageHero } from "../components/shared";
import { JotFormEmbed } from "../components/JotFormEmbed";
import { JOTFORM_IDS } from "../config/forms";

export default function Partner() {
  useEffect(() => {
    document.title = "Partner With Us — Comfort With Chemotherapy";
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Partner With Us"
        title={
          <>
            Together, we can make a difficult day{" "}
            <span className="italic text-gradient-honey">a little more comfortable</span>.
          </>
        }
        intro="Comfort With Chemotherapy provides thoughtfully curated comfort boxes to people undergoing chemotherapy. Through partnerships with businesses, organizations, healthcare providers, and community supporters, we are able to put more boxes into the hands of people who need them."
      />

      <section className="pb-16 md:pb-20 lg:pb-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <Reveal>
            <JotFormEmbed
              formId={JOTFORM_IDS.partner}
              title="Partnership Interest Form"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
