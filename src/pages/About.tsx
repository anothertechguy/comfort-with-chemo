import { useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import story from "../assets/story.jpg";
import { Eyebrow, Reveal, PageHero, PrimaryButton, GhostButton } from "../components/shared";

const ITEMS = [
  "Dove Unscented Body Wash for Sensitive Skin",
  "Aquaphor Creme or Unscented Body Lotion",
  "Crystal Deodorant",
  "Biotene Mouthwash to relieve dry mouth",
  "Chapstick",
  "Ayr Saline Gel to relieve dry nasal passage",
  "Q-Tips",
  "Cottonelle wipes and body wipes",
  "Thermometer to record temperature",
  "Tea Tree Oil to use on fingernails, toenails and scalp",
  "Lemon heads and peppermints",
  "Ginger Tea for digestion",
  "Sage and lavender candle",
  "Hand Sanitizer and Hand Soap",
  "Lysol Wipes",
  "Drinking Straws",
  "Cookbook",
  "Daily Word",
  "Information on resources for cancer support",
];

export default function About() {
  useEffect(() => {
    document.title = "About — Comfort With Chemotherapy";
  }, []);

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="About Comfort With Chemotherapy"
        intro="Comfort With Chemotherapy is a 501(c)(3) nonprofit organization dedicated to bringing comfort, hope, and practical support to individuals facing a cancer diagnosis. We believe that no one should begin treatment feeling alone. Through thoughtfully curated Comfort Care Packages, we help ease the physical, emotional, and mental challenges that often accompany chemotherapy, radiation, surgery, and other cancer treatments."
      />

      <section className="py-8 md:py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-honey opacity-20 blur-2xl" />
              <img
                src={story}
                alt="A smiling young patient opening a comfort box with a parent"
                loading="lazy"
                className="relative aspect-[5/6] w-full object-cover rounded-[2rem] shadow-soft"
              />
              <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl px-5 py-4 shadow-soft border border-border/60">
                <p className="text-3xl font-display text-gradient-honey">2011</p>
                <p className="text-xs uppercase tracking-wider text-foreground/60">Where our story began</p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              A promise made in{" "}
              <span className="italic text-gradient-honey">2011</span>.
            </h2>
            <div className="mt-7 space-y-5 text-foreground/70 leading-relaxed text-lg max-w-xl">
              <p>
                The organization was founded by Angelina D. Brown, a breast cancer survivor
                whose own journey inspired a lifelong commitment to serving others. On
                August 8, 2011, Angelina was diagnosed with Stage III breast cancer. As she
                prepared to begin treatment, her oncologist gave her a personalized comfort
                package filled with carefully selected items to help her through the
                difficult weeks ahead. While the supplies were invaluable, it was the
                compassion behind the gesture that left the greatest impression.
              </p>
              <p>
                Angelina promised herself that if she made it through treatment, she would
                provide that same sense of comfort and hope to others.
              </p>
              <p>
                For years, she personally assembled and delivered Comfort Care Packages to
                newly diagnosed cancer patients. In March 2020, she officially established
                Comfort With Chemotherapy as a nonprofit organization, allowing the mission
                to grow and reach more individuals and families across the country.
              </p>
              <p>
                Today, Comfort With Chemotherapy partners with hospitals, cancer centers,
                healthcare providers, businesses, volunteers, and donors to ensure that
                every patient receives more than a box of supplies. They receive a reminder
                that they are supported, valued, and never alone in their fight.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-28 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="max-w-3xl">
              <Eyebrow>What We Deliver</Eyebrow>
              <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                Items Included in Our{" "}
                <span className="italic text-gradient-honey">Comfort Care Boxes</span>.
              </h2>
              <div className="mt-7 space-y-5 text-lg text-foreground/70 leading-relaxed">
                <p>
                  Every Comfort Care Box is personalized to meet the unique needs of each
                  individual. The contents of each box may vary based on the individual's
                  cancer diagnosis, treatment plan, gender, age, personal preferences, and
                  the availability of donated or purchased items.
                </p>
                <p>
                  While no two boxes are exactly alike, every package is thoughtfully
                  curated to provide comfort, practical support, and encouragement
                  throughout the cancer treatment journey.
                </p>
                <p>
                  Every Comfort Care Package is thoughtfully assembled to provide practical
                  support, encouragement, and comfort throughout treatment. Depending on the
                  patient's needs, packages may include:
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-12 rounded-3xl bg-card border border-border/60 p-8 lg:p-12 shadow-soft">
              <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
                {ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground/80 leading-relaxed">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <p className="mt-10 text-lg text-foreground/70 leading-relaxed max-w-3xl">
              Every item is selected with one goal in mind: helping patients feel cared for
              during one of the most challenging times of their lives.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-28 text-center">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Reveal>
            <div className="flex justify-center">
              <Eyebrow>Join Our Mission</Eyebrow>
            </div>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Together, we bring{" "}
              <span className="italic text-gradient-honey">hope and dignity</span>.
            </h2>
            <p className="mt-7 text-lg text-foreground/70 leading-relaxed">
              Whether you give, volunteer, sponsor a Comfort Care Package, or become a
              community partner, your support makes a meaningful difference. Together, we
              can bring hope, dignity, and comfort to cancer patients and their families,
              one package at a time.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <PrimaryButton href="/#donate">Donate Today</PrimaryButton>
              <GhostButton href="/#get-involved">See Ways to Help</GhostButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
