import { useEffect } from "react";
import { Heart, Sparkles, HandHeart } from "lucide-react";
import box from "../assets/box.jpg";
import { Eyebrow, Reveal, PageHero, PrimaryButton, GhostButton } from "../components/shared";

const CREATED_WITH_CARE = [
  {
    icon: Heart,
    title: "Personalized Support",
    body: "Each request allows us to learn more about the patient so that we can create a box that feels personal, thoughtful, and appropriate for their journey.",
  },
  {
    icon: Sparkles,
    title: "Practical Comfort",
    body: "Our boxes include carefully selected forms of support intended to provide comfort and help patients navigate some of the everyday challenges that may arise during treatment.",
  },
  {
    icon: HandHeart,
    title: "Encouragement and Hope",
    body: "Every box is a reminder that someone cares. Through thoughtful details and uplifting messages, we want each patient to know they are seen, supported, and never alone.",
  },
];

export default function ComfortBoxPage() {
  useEffect(() => {
    document.title = "Comfort Care Boxes — Comfort With Chemotherapy";
  }, []);

  return (
    <>
      <PageHero
        eyebrow="The Comfort Box"
        title="Thoughtfully Assembled. Personally Curated."
        intro="Every Comfort With Chemotherapy Comfort Care Box is carefully personalized to meet each patient's unique needs, preferences, and treatment journey. More than a collection of essential items, each box is thoughtfully designed to provide comfort, encouragement, and practical support during one of life's most challenging moments."
      />

      <section className="py-8 md:py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-honey opacity-20 blur-2xl" />
              <img
                src={box}
                alt="A personalized Comfort Care Box"
                loading="lazy"
                className="relative aspect-[5/6] w-full object-cover rounded-[2rem] shadow-soft"
              />
            </div>
          </Reveal>

          <Reveal>
            <Eyebrow>More Than a Box</Eyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Created with{" "}
              <span className="italic text-gradient-honey">one person in mind</span>.
            </h2>
            <div className="mt-7 space-y-5 text-foreground/70 leading-relaxed text-lg max-w-xl">
              <p>
                Every Comfort With Chemotherapy box is created with one person in mind: the
                patient receiving it. Each box is personalized according to the patient's
                needs, preferences, diagnosis, and treatment journey. While every box is
                unique, each one carries the same message of comfort, encouragement, and
                hope.
              </p>
              <p>
                A cancer diagnosis can bring fear, uncertainty, and overwhelming changes.
                Our Comfort Boxes are designed to help patients feel supported as they
                prepare for surgery, chemotherapy, radiation, or other forms of treatment.
              </p>
              <p>
                Every box offers a thoughtful combination of practical support, personal
                care, helpful resources, and meaningful encouragement. The exact contents
                may vary because every patient and every cancer journey is different.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-28 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <Eyebrow>Created With Care</Eyebrow>
              <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                Every detail has{" "}
                <span className="italic text-gradient-honey">a purpose</span>.
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
            {CREATED_WITH_CARE.map((c) => (
              <Reveal key={c.title}>
                <div className="group relative h-full rounded-3xl bg-card border border-border/60 p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
                  <div className="relative">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-honey text-primary-foreground shadow-soft">
                      <c.icon size={22} />
                    </div>
                    <h3 className="mt-6 text-2xl">{c.title}</h3>
                    <p className="mt-4 text-foreground/70 leading-relaxed">{c.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-10 lg:gap-16">
          <Reveal>
            <div className="h-full rounded-3xl bg-card border border-border/60 p-8 lg:p-10">
              <p className="text-xs uppercase tracking-widest text-primary font-medium">Eligibility</p>
              <h3 className="mt-3 text-2xl md:text-3xl leading-snug">
                Who Can Receive a Comfort Box?
              </h3>
              <div className="mt-5 space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  Comfort Boxes are created for individuals preparing for or currently
                  undergoing cancer related surgery, chemotherapy, radiation, or another
                  form of cancer treatment.
                </p>
                <p>
                  Patients may request a box for themselves, or a loved one, caregiver,
                  medical professional, or community partner may submit a request on their
                  behalf.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="h-full rounded-3xl bg-gradient-honey p-8 lg:p-10 shadow-soft">
              <p className="text-xs uppercase tracking-widest text-primary-foreground/70 font-semibold">Every Box Is Different</p>
              <h3 className="mt-3 text-2xl md:text-3xl leading-snug text-primary-foreground">
                No standard list of contents
              </h3>
              <div className="mt-5 space-y-4 text-primary-foreground/90 leading-relaxed">
                <p>
                  Because our Comfort Boxes are personally curated, we do not provide a
                  standard list of contents. Items are selected based on the information
                  provided, available resources, and the individual needs of each
                  recipient.
                </p>
                <p>
                  Although we cannot guarantee specific products, we promise that every box
                  will be assembled with compassion, intention, and care.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-28 bg-secondary/50 text-center">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Reveal>
            <div className="flex justify-center">
              <Eyebrow>Send Comfort. Share Hope.</Eyebrow>
            </div>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              You do not have to{" "}
              <span className="italic text-gradient-honey">face cancer alone</span>.
            </h2>
            <p className="mt-7 text-lg text-foreground/70 leading-relaxed">
              Whether you are requesting support for yourself or someone you love, Comfort
              With Chemotherapy is here to remind every patient that they do not have to
              face cancer alone.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <PrimaryButton href="/#request">Request a Comfort Box</PrimaryButton>
              <GhostButton href="/#donate">Sponsor a Comfort Box</GhostButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
