import { useEffect } from "react";
import { Eyebrow, Reveal, PrimaryButton, GhostButton } from "../components/shared";

export default function FounderPage() {
  useEffect(() => {
    document.title = "Meet Our Founder — Comfort With Chemotherapy";
  }, []);

  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="absolute inset-0 bg-cream-glow" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-center relative">
          <Reveal>
            <div className="relative aspect-[4/5] w-full rounded-[2rem] bg-gradient-honey p-8 lg:p-12 shadow-soft flex flex-col justify-between overflow-hidden">
              <div className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-black/5 blur-3xl" />
              <div className="relative z-10">
                <p className="text-xs uppercase tracking-widest text-primary-foreground/70 font-semibold">
                  Her Promise
                </p>
                <p className="mt-4 text-xl md:text-2xl font-display text-primary-foreground/90 leading-relaxed italic">
                  That if she made it through treatment, she would provide that same sense
                  of comfort and hope to others.
                </p>
              </div>
              <div className="relative z-10 border-t border-primary-foreground/10 pt-6 space-y-4">
                <div className="flex items-baseline gap-3">
                  <p className="text-3xl font-display text-primary-foreground">2011</p>
                  <p className="text-sm text-primary-foreground/80">Diagnosed, Stage III</p>
                </div>
                <div className="flex items-baseline gap-3">
                  <p className="text-3xl font-display text-primary-foreground">2020</p>
                  <p className="text-sm text-primary-foreground/80">Founded the nonprofit</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <Eyebrow>Meet Our Founder</Eyebrow>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Angelina D. Brown, a mission born from{" "}
              <span className="italic text-gradient-honey">personal experience</span>.
            </h1>
            <p className="mt-7 text-lg text-foreground/70 leading-relaxed max-w-xl">
              Angelina D. Brown is the Founder and Executive Director of Comfort With
              Chemotherapy and a proud breast cancer survivor. Her personal journey through
              cancer became the foundation for a mission dedicated to bringing hope,
              comfort, and compassion to others facing one of life's most difficult
              challenges.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-8 md:py-14 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 space-y-6 text-lg text-foreground/70 leading-relaxed">
          <Reveal>
            <p>
              On August 8, 2011, Angelina was diagnosed with Stage III breast cancer. As she
              prepared to begin treatment following surgery, her oncologist presented her
              with a comfort package filled with thoughtful items to help ease the physical
              and emotional challenges ahead. While the contents of the package provided
              practical support, the act of kindness itself became a powerful reminder that
              she was not facing cancer alone.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-2xl md:text-3xl font-display italic text-foreground/90 py-2">
              That moment changed her life.
            </p>
          </Reveal>
          <Reveal>
            <p>
              Determined to give other patients the same sense of hope and encouragement
              she had received, Angelina began assembling and personally delivering
              Comfort Packages to individuals newly diagnosed with cancer. What started as
              a heartfelt act of service quickly grew into a community-driven mission that
              touched hundreds of lives.
            </p>
          </Reveal>
          <Reveal>
            <p>
              In March 2020, Angelina officially founded Comfort With Chemotherapy, a
              nonprofit organization committed to ensuring that no one begins their cancer
              journey without knowing they are seen, supported, and cared for. Through
              personalized Comfort Care Packages, community partnerships, and compassionate
              outreach, the organization provides practical resources and emotional
              encouragement to patients and their families during treatment.
            </p>
          </Reveal>
          <Reveal>
            <p>
              Today, Angelina continues to lead Comfort With Chemotherapy with unwavering
              passion and purpose. As a breast cancer survivor, she understands firsthand
              the fears, uncertainties, and challenges that accompany a cancer diagnosis.
              Her lived experience fuels the organization's mission to transform moments of
              fear into moments of comfort, hope, and healing for cancer patients across the
              country.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-28 bg-secondary/50 text-center">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Reveal>
            <div className="flex justify-center">
              <Eyebrow>Continue the Mission</Eyebrow>
            </div>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Help us bring{" "}
              <span className="italic text-gradient-honey">comfort and hope</span> to more patients.
            </h2>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <PrimaryButton href="/#donate">Donate Today</PrimaryButton>
              <GhostButton href="/about">Read Our Full Story</GhostButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
