import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart, HandHeart, Sparkles, ArrowUpRight,
  Gift, Users, Leaf, MessageCircle, Coffee, BookOpen, Send,
} from "lucide-react";
import heroDiverse from "../assets/hero_diverse.jpg";
import welcomeChild from "../assets/welcome_child.jpg";
import ctaDiverse from "../assets/cta_diverse.jpg";
import boxComfort from "../assets/box_comfort.jpg";
import boxSelfCare from "../assets/box_selfcare.jpg";
import boxHydration from "../assets/box_hydration.jpg";
import boxRelaxation from "../assets/box_relaxation.jpg";
import boxEntertainment from "../assets/box_entertainment.jpg";
import boxNotes from "../assets/box_notes.jpg";
import boxResources from "../assets/box_resources.jpg";
import { PrimaryButton, GhostButton, Eyebrow, Reveal } from "../components/shared";
import { submitNewsletter } from "../config/forms";

export default function Home() {
  useEffect(() => {
    document.title = "Comfort With Chemotherapy — Comfort. Care. Hope.";
  }, []);
  return (
    <>
      <Hero />
      <Welcome />
      <HowWeHelp />
      <InsideBox />
      <Stories />
      <WaysToHelp />
      <FounderTeaser />
      <Newsletter />
      <FinalCTA />
    </>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cream-glow" />
      <div className="mx-auto max-w-7xl w-full px-6 lg:px-10 pt-16 md:pt-24 lg:pt-32 pb-12 md:pb-16 lg:pb-24 grid lg:grid-cols-[1.1fr_1fr] gap-14 items-center relative">
        <div>
          <div className="animate-fade-up">
            <Eyebrow>A 501(c)(3) Nonprofit</Eyebrow>
          </div>
          <h1
            className="mt-6 text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Comfort. Care.{" "}
            <span className="text-gradient-honey italic font-light">Hope.</span>
          </h1>
          <p
            className="mt-7 max-w-xl text-lg text-foreground/70 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            A cancer diagnosis changes everything — but no one should have to face
            chemotherapy alone. We deliver personalized comfort boxes at no cost,
            offering encouragement, practical support, and hope at every step.
          </p>
          <div
            className="mt-9 flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <PrimaryButton href="/request-a-box">Request a Comfort Box</PrimaryButton>
            <GhostButton href="/#donate">Donate Today</GhostButton>
            <Link to="/request-a-box" className="text-sm font-medium text-foreground/70 hover:text-foreground underline underline-offset-4 decoration-primary/50 ml-2">
              Refer a patient
            </Link>
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <div className="relative">
            <img
              src={heroDiverse}
              alt="A smiling comfort box being delivered to a patient"
              className="w-full aspect-[4/5] object-cover rounded-[2rem] shadow-glow"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-[2rem] pointer-events-none" />
          </div>

          <div className="absolute -right-4 top-10 bg-card/95 backdrop-blur rounded-2xl p-4 shadow-soft border border-border/60 hidden md:block">
            <p className="text-xs italic text-foreground/70 max-w-[180px]">
              "Therefore encourage one another and build each other up."
            </p>
            <p className="mt-2 text-xs font-medium text-primary">1 Thessalonians 5:11</p>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden py-8 border-y border-border/60 bg-background/60 backdrop-blur-sm">
        <div className="flex gap-14 animate-marquee whitespace-nowrap text-xs uppercase tracking-[0.28em] text-foreground/50">
          {Array.from({ length: 2 }).map((_, r) => (
            <div key={r} className="flex gap-14 shrink-0">
              {["Personalized", "No Cost to Patients", "501(c)(3) Nonprofit", "Nationwide Delivery", "Hospital Partnerships", "Faith-Rooted", "Community Care"].map((w, i) => (
                <span key={i} className="flex items-center gap-14">
                  {w}
                  <span className="h-1 w-1 rounded-full bg-primary" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Welcome ---------- */

function Welcome() {
  return (
    <section id="welcome" className="py-16 md:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-honey opacity-20 blur-2xl" />
            <img
              src={welcomeChild}
              alt="An adult reading to a smiling child of color undergoing chemotherapy"
              loading="lazy"
              className="relative aspect-[5/6] w-full object-cover rounded-[2rem] shadow-soft"
            />
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl px-5 py-4 shadow-soft border border-border/60">
              <p className="text-3xl font-display text-gradient-honey">100%</p>
              <p className="text-xs uppercase tracking-wider text-foreground/60">Boxes free to patients</p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <Eyebrow>Welcome</Eyebrow>
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            You are <span className="italic text-gradient-honey">not alone</span> in this.
          </h2>
          <div className="mt-7 space-y-5 text-foreground/70 leading-relaxed text-lg max-w-xl">
            <p>
              At Comfort With Chemotherapy, we believe every person facing cancer
              deserves to feel seen, supported, and cared for.
            </p>
            <p>
              Our personalized comfort boxes are thoughtfully curated to bring comfort
              during treatment and remind patients that an entire community is standing
              beside them.
            </p>
            <p>
              Whether you are beginning chemotherapy, caring for a loved one, or looking
              for a way to make a difference — you've found a community built on
              compassion and hope.
            </p>
          </div>
          <div className="mt-8">
            <GhostButton href="/about">Learn Our Story</GhostButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- How to Help ---------- */

const HELP = [
  { icon: Gift, title: "Personalized Comfort Boxes", body: "Every comfort box is thoughtfully personalized based on each recipient's preferences and treatment journey — as unique as the person receiving it." },
  { icon: Heart, title: "Emotional Support", body: "Sometimes the greatest gift is knowing someone cares. Every box delivers encouragement, hope, and a reminder that no one walks this journey alone." },
  { icon: Users, title: "Community of Care", body: "We unite donors, caregivers, healthcare professionals, and community partners to support individuals and families through chemotherapy." },
];

function HowWeHelp() {
  return (
    <section id="help" className="py-16 md:py-20 lg:py-28 bg-secondary/50 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>How to Help</Eyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Three ways we deliver{" "}
              <span className="italic text-gradient-honey">hope</span>.
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
          {HELP.map((h) => (
            <Reveal key={h.title}>
              <div className="group relative h-full rounded-3xl bg-card border border-border/60 p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
                <div className="relative">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-honey text-primary-foreground shadow-soft">
                    <h.icon size={22} />
                  </div>
                  <h3 className="mt-6 text-2xl">{h.title}</h3>
                  <p className="mt-4 text-foreground/70 leading-relaxed">{h.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Inside the Box (teaser) ---------- */

const CATEGORIES = [
  { icon: Heart, label: "Comfort Items", body: "Cozy blankets, soft socks, and plush textures for treatment days.", img: boxComfort },
  { icon: Sparkles, label: "Self Care", body: "Gentle lotions, lip balms, and skin-safe essentials curated for chemo.", img: boxSelfCare },
  { icon: Coffee, label: "Hydration", body: "Herbal teas, insulated bottles, and hydration boosters.", img: boxHydration },
  { icon: Leaf, label: "Relaxation", body: "Aromatherapy, sleep masks, and calming rituals for rest.", img: boxRelaxation },
  { icon: BookOpen, label: "Entertainment", body: "Journals, puzzles, and reading picks for quiet infusion hours.", img: boxEntertainment },
  { icon: MessageCircle, label: "Inspirational Notes", body: "Handwritten cards of encouragement from those who've walked this road.", img: boxNotes },
  { icon: HandHeart, label: "Helpful Resources", body: "Guides, checklists, and support-network navigation.", img: boxResources },
];

function InsideBox() {
  const [active, setActive] = useState(0);
  return (
    <section id="box" className="py-16 md:py-20 lg:py-28 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>Inside a Comfort Box</Eyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Thoughtfully assembled.{" "}
              <span className="italic text-gradient-honey">Personally curated.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/70 leading-relaxed">
              Every Comfort With Chemotherapy box is personalized to the patient's needs,
              preferences, and treatment journey — while always offering comfort,
              encouragement, and practical support.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-start">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-honey opacity-15 blur-3xl rounded-full" />
              <img
                key={active}
                src={CATEGORIES[active].img}
                alt="A curated comfort box"
                loading="lazy"
                className="relative w-full aspect-square object-cover rounded-[2rem] shadow-soft transition-opacity duration-500"
              />
            </div>
          </Reveal>

          <div className="space-y-2">
            {CATEGORIES.map((c, i) => {
              const on = i === active;
              return (
                <button
                  key={c.label}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`group w-full text-left rounded-2xl border transition-all duration-500 overflow-hidden ${
                    on
                      ? "border-primary/40 bg-card shadow-soft"
                      : "border-border/60 bg-card/50 hover:bg-card"
                  }`}
                >
                  <div className="flex items-center gap-5 p-5 lg:p-6">
                    <div className={`h-12 w-12 shrink-0 grid place-items-center rounded-xl transition-all ${
                      on ? "bg-gradient-honey text-primary-foreground shadow-soft" : "bg-secondary text-primary"
                    }`}>
                      <c.icon size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="text-xl font-display">{c.label}</h3>
                        <span className="text-xs text-foreground/40 tabular-nums">0{i + 1}</span>
                      </div>
                      <div className={`text-sm text-foreground/70 leading-relaxed overflow-hidden transition-all duration-500 ${on ? "max-h-24 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                        {c.body}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
            <div className="pt-6">
              <GhostButton href="/comfort-box">Learn More About Our Comfort Boxes</GhostButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Stories ---------- */

/** Real testimonials supplied by the client. Names are real people, so no
 *  stock or generated portraits are attached to them. */
const FEATURED_STORIES = [
  {
    title: "It Was Truly a Godsend",
    name: "Charnett Brown",
    date: null as string | null,
    paragraphs: [
      "Hearing the words, 'You have breast cancer,' left me confused and frightened. I was in a new city, with no idea what I needed or where to turn. I shared my diagnosis with a friend, who connected me with Angelina Brown.",
      "Within a week, a box showed up at my door filled with things I needed right away, like a cookbook, as well as things I didn't realize I would need later, like mouthwash. As I dealt with the side effects of treatment, I would remember that I had candy to help with nausea or mouthwash for my dry mouth.",
      "It was such a blessing to know that someone cared enough to put together something that could help during such a difficult time. I was so moved by the thoughtfulness behind the boxes that I asked Angelina to send them to my friends who were also going through treatment.",
      "It was truly a Godsend.",
    ],
  },
  {
    title: null as string | null,
    name: "LaVonne Whitlock",
    date: null as string | null,
    paragraphs: [
      "Receiving the breast cancer comfort package was such a meaningful and thoughtful experience for me. During a time that can feel overwhelming, emotional, and uncertain, knowing that someone took the time to put together something specifically to bring comfort and encouragement meant more than words can express.",
      "Every item in the package reminded me that I am not alone in this journey. It brought a sense of warmth, love, and hope when I truly needed it. The kindness behind the package touched my heart and gave me encouragement to keep moving forward, one day at a time.",
      "I am deeply grateful for this beautiful gesture. Your generosity and compassion made a difficult season a little brighter. Thank you for reminding me that there are people who care, support, and stand beside those going through breast cancer.",
      "This comfort package was more than a gift. It was a reminder of hope, strength, and love. I will always be grateful for the thoughtfulness behind it.",
    ],
  },
];

const SHORT_STORIES = [
  {
    name: "Janis Carpenter",
    date: "April 2022",
    quote: "Thank you so very much for the Comfort Package. It was a joy to receive.",
  },
  {
    name: "Mary F. Leone",
    date: null as string | null,
    quote: "Thank you so very much for the wonderful Comfort Package. It is a splendid expression of love, support, and care.",
  },
  {
    name: "Barbara Bowen",
    date: "February 2023",
    quote: "Thank you so much for the Comfort Package. The package contained all the things I have been using throughout my treatments. It was clearly put together with love, care, and support.",
  },
  {
    name: "Yolanda Campbell",
    date: "March 2023",
    quote: "Thank you for the wonderful package of amazing items that were exactly what I needed. My heart is filled with joy. Many blessings.",
  },
];

function Stories() {
  return (
    <section id="stories" className="py-16 md:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>Stories of Hope</Eyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Stories of comfort, care, and{" "}
              <span className="italic text-gradient-honey">hope</span>.
            </h2>
            <p className="mt-6 text-lg text-foreground/70 leading-relaxed">
              In their own words — from the people who received a Comfort Care Package.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-2 gap-6 lg:gap-8">
          {FEATURED_STORIES.map((s) => (
            <Reveal key={s.name}>
              <figure className="h-full rounded-3xl bg-card border border-border/60 p-8 lg:p-10 shadow-soft flex flex-col">
                <span className="text-primary text-5xl font-display leading-none select-none" aria-hidden="true">
                  &ldquo;
                </span>
                {s.title && (
                  <h3 className="mt-2 text-2xl lg:text-3xl font-display">{s.title}</h3>
                )}
                <blockquote className={`${s.title ? "mt-4" : "mt-2"} space-y-4 text-foreground/75 leading-relaxed flex-1`}>
                  {s.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-border/60">
                  <p className="font-medium text-foreground">{s.name}</p>
                  {s.date && <p className="text-sm text-foreground/60">{s.date}</p>}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 lg:mt-8 grid sm:grid-cols-2 gap-6 lg:gap-8">
          {SHORT_STORIES.map((s) => (
            <Reveal key={s.name}>
              <figure className="h-full rounded-3xl bg-secondary/40 border border-border/60 p-7 lg:p-8 flex flex-col">
                <blockquote className="text-foreground/80 leading-relaxed flex-1">
                  <span className="text-primary font-display text-2xl leading-none mr-1" aria-hidden="true">
                    &ldquo;
                  </span>
                  {s.quote}
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-border/60">
                  <p className="font-medium text-foreground">{s.name}</p>
                  {s.date && <p className="text-sm text-foreground/60">{s.date}</p>}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Ways to Help ---------- */

const WAYS = [
  { id: "request", href: "/request-a-box", title: "Request a Comfort Box", body: "Receiving chemotherapy can feel overwhelming. Let us provide encouragement and support during your journey.", cta: "Request Support" },
  { id: "donate", href: "/#donate", title: "Donate", body: "Every gift helps provide personalized comfort boxes at no cost to patients and families.", cta: "Give Today" },
  { id: "partner", href: "/partner", title: "Partner With Us", body: "Hospitals, businesses, foundations, faith organizations, and community groups can help expand our impact.", cta: "Become a Partner" },
];

function WaysToHelp() {
  return (
    <section id="get-involved" className="py-16 md:py-20 lg:py-28 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>Ways You Can Help</Eyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Together, we can{" "}
              <span className="italic text-gradient-honey">make a difference</span>.
            </h2>
          </div>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
          {WAYS.map((w) => (
            <Reveal key={w.id}>
              <div id={w.id} className="group relative h-full rounded-3xl p-8 lg:p-10 bg-card border border-border/60 overflow-hidden hover:shadow-glow transition-all duration-500">
                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-honey opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700" />
                <div className="relative flex flex-col h-full">
                  <p className="text-xs uppercase tracking-widest text-primary font-medium">0{WAYS.indexOf(w) + 1}</p>
                  <h3 className="mt-3 text-2xl lg:text-3xl">{w.title}</h3>
                  <p className="mt-4 text-foreground/70 leading-relaxed">{w.body}</p>
                  <div className="mt-8">
                    <PrimaryButton href={w.href}>{w.cta}</PrimaryButton>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Founder (teaser) ---------- */

function FounderTeaser() {
  return (
    <section id="founder" className="py-16 md:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-center">
        <Reveal>
          <div className="relative aspect-[4/5] w-full rounded-[2rem] bg-gradient-honey p-8 lg:p-12 shadow-soft flex flex-col justify-between overflow-hidden group">
            <div className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-black/5 blur-3xl" />
            <div className="relative z-10">
              <span className="text-white/30 text-8xl font-display leading-none select-none">"</span>
              <p className="text-xl md:text-2xl font-display text-primary-foreground/90 leading-relaxed italic -mt-6">
                When I was going through chemotherapy, a simple box of comfort items reminded me that I wasn't fighting alone. That spark of hope is what we want to deliver to every patient in America.
              </p>
            </div>
            <div className="relative z-10 border-t border-primary-foreground/10 pt-6">
              <p className="text-xs uppercase tracking-widest text-primary-foreground/60 font-semibold">Our Mission</p>
              <p className="text-lg font-display text-primary-foreground mt-1">Comfort. Care. Hope.</p>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <Eyebrow>Meet Our Founder</Eyebrow>
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            A mission inspired by{" "}
            <span className="italic text-gradient-honey">personal experience</span>.
          </h2>
          <div className="mt-7 space-y-5 text-lg text-foreground/70 leading-relaxed max-w-xl">
            <p>
              After receiving a comfort package during her own cancer treatment, founder
              Angelina Brown experienced firsthand the power of compassion during a
              difficult time.
            </p>
            <p>
              That moment inspired a mission — to ensure every person undergoing
              chemotherapy feels supported, encouraged, and reminded that they are never
              alone.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-6">
            <GhostButton href="/founder">Read Our Story</GhostButton>
            <div className="text-sm text-foreground/60">
              <p className="font-medium text-foreground">Angelina D. Brown</p>
              <p>Founder · Survivor since 2011</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Newsletter ---------- */

function Newsletter() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setBusy(true);
    try {
      await submitNewsletter({
        firstName: String(fd.get("firstName") || ""),
        lastName: String(fd.get("lastName") || ""),
        email: String(fd.get("email") || ""),
      });
      setSent(true);
    } finally {
      setBusy(false);
    }
  }

  return (
    <section id="subscribe" className="py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <Reveal>
          <Eyebrow>Stay Connected</Eyebrow>
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Join our{" "}
            <span className="italic text-gradient-honey">community</span>.
          </h2>
          <p className="mt-6 text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Subscribe for inspiring stories, upcoming events, and ways to bring comfort and
            hope to individuals and families facing chemotherapy.
          </p>
        </Reveal>
        <Reveal>
          {sent ? (
            <p className="mt-10 text-lg text-primary font-medium">
              Thank you for subscribing.
            </p>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mt-10 grid sm:grid-cols-[1fr_1fr_1.4fr_auto] gap-3 max-w-3xl mx-auto"
            >
              <input required name="firstName" placeholder="First name" className="rounded-full px-5 py-3.5 bg-card border border-border/60 focus:border-primary focus:outline-none transition text-sm" />
              <input required name="lastName" placeholder="Last name" className="rounded-full px-5 py-3.5 bg-card border border-border/60 focus:border-primary focus:outline-none transition text-sm" />
              <input required name="email" type="email" placeholder="Email address" className="rounded-full px-5 py-3.5 bg-card border border-border/60 focus:border-primary focus:outline-none transition text-sm" />
              <button type="submit" disabled={busy} className="rounded-full px-6 py-3.5 text-sm font-medium bg-gradient-honey text-primary-foreground shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all inline-flex items-center gap-2 justify-center disabled:opacity-60">
                <Send size={15} /> {busy ? "Sending…" : "Subscribe"}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */

function FinalCTA() {
  return (
    <section className="relative py-32 lg:py-44 overflow-hidden">
      <img src={ctaDiverse} alt="A diverse group of cancer survivors celebrating" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.28em] text-primary font-medium">Together</p>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-7xl leading-[1.02] text-white">
              We can bring{" "}
              <span className="italic text-gradient-honey">comfort and hope</span>.
            </h2>
            <p className="mt-7 text-lg text-white/80 max-w-xl leading-relaxed">
              Whether you are requesting support, making a donation, or becoming a
              community partner — you help ensure that no one faces chemotherapy alone.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <PrimaryButton href="/request-a-box">Request a Comfort Box</PrimaryButton>
              <Link to="/#donate" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white border border-white/40 hover:bg-white/10 transition">
                Donate Today <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
