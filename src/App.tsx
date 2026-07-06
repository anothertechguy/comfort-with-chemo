import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView, useScroll, useTransform, animate } from "framer-motion";
import {
  Heart, HandHeart, Users, Sparkles, ArrowRight, ArrowUpRight,
  Gift, Leaf, MessageCircle, Coffee, BookOpen, Send, Menu, X,
  Phone, Mail, Facebook, Instagram, Linkedin, Twitter,
} from "lucide-react";
import logo from "@/assets/logo.png";
import hero from "@/assets/hero.jpg";
import welcome from "@/assets/welcome.jpg";
import box from "@/assets/box.jpg";
import story from "@/assets/story.jpg";
import founder from "@/assets/founder.jpg";
import ctaImg from "@/assets/cta.jpg";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <Header />
      <main>
        <Hero />
        <Welcome />
        <HowWeHelp />
        <Impact />
        <InsideBox />
        <Stories />
        <WaysToHelp />
        <Founder />
        <Newsletter />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- Header ---------- */

const NAV = [
  { label: "About", href: "#welcome" },
  { label: "How We Help", href: "#help" },
  { label: "Comfort Box", href: "#box" },
  { label: "Stories", href: "#stories" },
  { label: "Founder", href: "#founder" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border/60 shadow-[0_4px_20px_-8px_oklch(0.7_0.15_75/0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Comfort With Chemotherapy" className="h-11 w-auto" fetchPriority="high" decoding="sync" />
        </a>
        <nav className="hidden lg:flex items-center gap-9 text-sm text-foreground/75">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="relative group">
              <span className="group-hover:text-foreground transition-colors">{n.label}</span>
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a href="#request" className="text-sm font-medium text-foreground/80 hover:text-foreground transition">
            Request a Box
          </a>
          <PrimaryButton href="#donate">Donate</PrimaryButton>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 rounded-lg hover:bg-secondary transition"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl"
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-lg">
                {n.label}
              </a>
            ))}
            <PrimaryButton href="#donate">Donate Today</PrimaryButton>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

/* ---------- Reusable ---------- */

function PrimaryButton({
  href, children, className = "",
}: { href: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={`group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground bg-gradient-honey shadow-soft transition-all duration-300 hover:shadow-glow hover:-translate-y-0.5 ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <ArrowRight size={16} className="relative z-10 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function GhostButton({
  href, children, className = "",
}: { href: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground border border-foreground/20 hover:border-foreground/60 hover:bg-foreground/5 transition-all ${className}`}
    >
      {children}
      <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">
      <span className="h-px w-8 bg-primary/60" />
      {children}
    </div>
  );
}

function Reveal({
  children, delay = 0, y = 24,
}: { children: ReactNode; delay?: number; y?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section id="top" ref={ref} className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cream-glow" />
      <div className="mx-auto max-w-7xl w-full px-6 lg:px-10 pt-28 pb-20 grid lg:grid-cols-[1.1fr_1fr] gap-14 items-center relative">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Eyebrow>A 501(c)(3) Nonprofit</Eyebrow>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight"
          >
            Comfort. Care.{" "}
            <span className="text-gradient-honey italic font-light">Hope.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-7 max-w-xl text-lg text-foreground/70 leading-relaxed"
          >
            A cancer diagnosis changes everything — but no one should have to face
            chemotherapy alone. We deliver personalized comfort boxes at no cost,
            offering encouragement, practical support, and hope at every step.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <PrimaryButton href="#request">Request a Comfort Box</PrimaryButton>
            <GhostButton href="#donate">Donate Today</GhostButton>
            <a href="#refer" className="text-sm font-medium text-foreground/70 hover:text-foreground underline underline-offset-4 decoration-primary/50 ml-2">
              Refer a patient
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-14 flex items-center gap-6 text-sm text-foreground/60"
          >
            <div className="flex -space-x-2">
              {[hero, welcome, story].map((s, i) => (
                <img key={i} src={s} alt="" className="h-9 w-9 rounded-full object-cover ring-2 ring-background" />
              ))}
            </div>
            <p><span className="font-semibold text-foreground">2,400+</span> patients supported and counting</p>
          </motion.div>
        </div>

        <motion.div style={{ y }} className="relative">
          <motion.div
            style={{ scale }}
            className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-glow"
          >
            <img
              src={hero}
              alt="A volunteer holding the hand of a patient in chemotherapy"
              className="h-full w-full object-cover"
              width={1920}
              height={1280}
              fetchPriority="high"
              decoding="sync"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="absolute -left-6 md:-left-10 bottom-10 bg-card/95 backdrop-blur rounded-2xl p-5 shadow-soft border border-border/60 max-w-[240px]"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-honey grid place-items-center text-primary-foreground">
                <Heart size={18} fill="currentColor" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-foreground/60">Delivered today</p>
                <p className="text-lg font-semibold">17 comfort boxes</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="absolute -right-4 top-10 bg-card/95 backdrop-blur rounded-2xl p-4 shadow-soft border border-border/60 hidden md:block"
          >
            <p className="text-xs italic text-foreground/70 max-w-[180px]">
              “Therefore encourage one another and build each other up.”
            </p>
            <p className="text-[10px] uppercase tracking-widest text-primary mt-2">1 Thess. 5:11</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border/40 bg-background/60 backdrop-blur">
        <div className="overflow-hidden py-4">
          <div className="flex gap-14 animate-marquee whitespace-nowrap text-xs uppercase tracking-[0.28em] text-foreground/50">
            {Array.from({ length: 2 }).map((_, r) => (
              <div key={r} className="flex gap-14 shrink-0">
                {["Personalized", "No Cost to Patients", "501(c)(3) Nonprofit", "Nationwide Delivery", "Volunteer Powered", "Hospital Partnerships", "Faith-Rooted", "Community Care"].map((w, i) => (
                  <span key={i} className="flex items-center gap-14">
                    {w}
                    <span className="h-1 w-1 rounded-full bg-primary" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Welcome ---------- */

function Welcome() {
  return (
    <section id="welcome" className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-honey opacity-20 blur-2xl" />
            <img
              src={welcome}
              alt="Founder embracing a young patient"
              loading="lazy"
              width={1200}
              height={1408}
              className="relative aspect-[5/6] w-full object-cover rounded-[2rem] shadow-soft"
            />
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl px-5 py-4 shadow-soft border border-border/60">
              <p className="text-3xl font-display text-gradient-honey">100%</p>
              <p className="text-xs uppercase tracking-wider text-foreground/60">Boxes free to patients</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
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
              for a way to make a difference — you’ve found a community built on
              compassion and hope.
            </p>
          </div>
          <div className="mt-8">
            <GhostButton href="#founder">Learn Our Story</GhostButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- How We Help ---------- */

const HELP = [
  {
    icon: Gift,
    title: "Personalized Comfort Boxes",
    body: "Every comfort box is thoughtfully personalized based on each recipient's preferences and treatment journey — as unique as the person receiving it.",
  },
  {
    icon: Heart,
    title: "Emotional Support",
    body: "Sometimes the greatest gift is knowing someone cares. Every box delivers encouragement, hope, and a reminder that no one walks this journey alone.",
  },
  {
    icon: Users,
    title: "Community of Care",
    body: "We unite volunteers, donors, caregivers, healthcare professionals, and community partners to support individuals and families through chemotherapy.",
  },
];

function HowWeHelp() {
  return (
    <section id="help" className="py-28 lg:py-36 bg-secondary/50 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>How We Help</Eyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Three ways we deliver{" "}
              <span className="italic text-gradient-honey">hope</span>.
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
          {HELP.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.1}>
              <div className="group relative h-full rounded-3xl bg-card border border-border/60 p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
                <div className="relative">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-honey text-primary-foreground shadow-soft">
                    <h.icon size={22} />
                  </div>
                  <h3 className="mt-6 text-2xl">{h.title}</h3>
                  <p className="mt-4 text-foreground/70 leading-relaxed">{h.body}</p>
                  <div className="mt-8 flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all">
                    Learn more <ArrowRight size={14} />
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

/* ---------- Impact ---------- */

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 2.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, to]);
  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

const STATS = [
  { label: "Comfort Boxes Delivered", value: 2400, suffix: "+" },
  { label: "Patients Served", value: 1800, suffix: "+" },
  { label: "Volunteers Engaged", value: 320, suffix: "" },
  { label: "Hospital Partners", value: 42, suffix: "" },
  { label: "States Served", value: 27, suffix: "" },
];

function Impact() {
  return (
    <section id="impact" className="py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-cream-glow" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14 items-end">
          <Reveal>
            <Eyebrow>Our Impact</Eyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Hope delivered,{" "}
              <span className="italic text-gradient-honey">every day</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Every comfort box represents more than a package. It represents compassion,
              encouragement, and a community committed to supporting patients throughout
              treatment.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-px bg-border/60 rounded-3xl overflow-hidden border border-border/60">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="h-full bg-card p-8 lg:p-10 hover:bg-secondary/50 transition-colors">
                <p className="text-4xl md:text-5xl font-display text-gradient-honey">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-sm text-foreground/70 leading-snug">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Inside the Box ---------- */

const CATEGORIES = [
  { icon: Heart, label: "Comfort Items", body: "Cozy blankets, soft socks, and plush textures for treatment days." },
  { icon: Sparkles, label: "Self Care", body: "Gentle lotions, lip balms, and skin-safe essentials curated for chemo." },
  { icon: Coffee, label: "Hydration", body: "Herbal teas, insulated bottles, and hydration boosters." },
  { icon: Leaf, label: "Relaxation", body: "Aromatherapy, sleep masks, and calming rituals for rest." },
  { icon: BookOpen, label: "Entertainment", body: "Journals, puzzles, and reading picks for quiet infusion hours." },
  { icon: MessageCircle, label: "Inspirational Notes", body: "Handwritten cards from volunteers who’ve walked this road." },
  { icon: HandHeart, label: "Helpful Resources", body: "Guides, checklists, and support-network navigation." },
];

function InsideBox() {
  const [active, setActive] = useState(0);
  return (
    <section id="box" className="py-28 lg:py-36 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>Inside a Comfort Box</Eyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Thoughtfully assembled.{" "}
              <span className="italic text-gradient-honey">Personally curated.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/70 leading-relaxed">
              Every Comfort With Chemotherapy box is personalized to the patient’s needs,
              preferences, and treatment journey — while always offering comfort,
              encouragement, and practical support.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-start">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-honey opacity-15 blur-3xl rounded-full" />
              <motion.img
                key={active}
                initial={{ opacity: 0.7, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                src={box}
                alt="A curated comfort box"
                loading="lazy"
                width={1408}
                height={1408}
                className="relative w-full aspect-square object-cover rounded-[2rem] shadow-soft"
              />
            </div>
          </Reveal>

          <div className="space-y-2">
            {CATEGORIES.map((c, i) => {
              const on = i === active;
              return (
                <Reveal key={c.label} delay={i * 0.04}>
                  <button
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
                        <motion.p
                          initial={false}
                          animate={{ height: on ? "auto" : 0, opacity: on ? 1 : 0, marginTop: on ? 8 : 0 }}
                          className="text-sm text-foreground/70 leading-relaxed overflow-hidden"
                        >
                          {c.body}
                        </motion.p>
                      </div>
                    </div>
                  </button>
                </Reveal>
              );
            })}
            <div className="pt-6">
              <GhostButton href="#request">Learn More About Our Comfort Boxes</GhostButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Stories ---------- */

const STORIES = [
  {
    quote:
      "The comfort box arrived on my hardest day. Opening it, I felt like a whole community was sitting beside me. I wasn't alone anymore.",
    name: "Marisol A.",
    role: "Patient · Stage III",
    img: hero,
  },
  {
    quote:
      "My son lit up when he opened his box. Something so simple gave him joy in the middle of everything hard. I'll never forget it.",
    name: "David J.",
    role: "Parent & Caregiver",
    img: story,
  },
  {
    quote:
      "Volunteering with CWC changed my life as much as it changed anyone’s. Every note, every box, every delivery matters.",
    name: "Priya K.",
    role: "Lead Volunteer",
    img: welcome,
  },
];

function Stories() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((v) => (v + 1) % STORIES.length), 6500);
    return () => clearInterval(t);
  }, []);
  const s = STORIES[idx];
  return (
    <section id="stories" className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 max-w-4xl">
            <div>
              <Eyebrow>Stories of Hope</Eyebrow>
              <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                Real stories.{" "}
                <span className="italic text-gradient-honey">Real hope.</span>
              </h2>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center">
            <motion.div
              key={s.img}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-soft"
            >
              <img src={s.img} alt="" loading="lazy" className="h-full w-full object-cover" />
            </motion.div>

            <div>
              <motion.blockquote
                key={s.quote}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-2xl md:text-3xl lg:text-4xl font-display leading-[1.25] text-foreground/90"
              >
                <span className="text-primary text-5xl leading-none align-top mr-1">“</span>
                {s.quote}
              </motion.blockquote>
              <div className="mt-8">
                <p className="text-lg">{s.name}</p>
                <p className="text-sm text-foreground/60">{s.role}</p>
              </div>
              <div className="mt-10 flex items-center gap-3">
                {STORIES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    aria-label={`Story ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${i === idx ? "w-10 bg-primary" : "w-4 bg-foreground/20 hover:bg-foreground/40"}`}
                  />
                ))}
                <a href="#stories" className="ml-6 text-sm font-medium underline underline-offset-4 decoration-primary/50 hover:text-primary transition">
                  Read more stories
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Ways to Help ---------- */

const WAYS = [
  { id: "request", title: "Request a Comfort Box", body: "Receiving chemotherapy can feel overwhelming. Let us provide encouragement and support during your journey.", cta: "Request Support" },
  { id: "donate", title: "Donate", body: "Every gift helps provide personalized comfort boxes at no cost to patients and families.", cta: "Give Today" },
  { id: "volunteer", title: "Volunteer", body: "Help pack comfort boxes, write encouraging notes, or assist at community events.", cta: "Volunteer" },
  { id: "partner", title: "Partner With Us", body: "Hospitals, businesses, foundations, faith organizations, and community groups can help expand our impact.", cta: "Become a Partner" },
];

function WaysToHelp() {
  return (
    <section id="get-involved" className="py-28 lg:py-36 bg-secondary/50">
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
        <div className="mt-16 grid md:grid-cols-2 gap-6 lg:gap-8">
          {WAYS.map((w, i) => (
            <Reveal key={w.id} delay={i * 0.08}>
              <div id={w.id} className="group relative rounded-3xl p-8 lg:p-10 bg-card border border-border/60 overflow-hidden hover:shadow-glow transition-all duration-500">
                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-honey opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700" />
                <div className="relative flex flex-col h-full">
                  <p className="text-xs uppercase tracking-widest text-primary font-medium">0{i + 1}</p>
                  <h3 className="mt-3 text-3xl lg:text-4xl">{w.title}</h3>
                  <p className="mt-4 text-foreground/70 leading-relaxed max-w-md">{w.body}</p>
                  <div className="mt-8">
                    <PrimaryButton href={`#${w.id}`}>{w.cta}</PrimaryButton>
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

/* ---------- Founder ---------- */

function Founder() {
  return (
    <section id="founder" className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-honey opacity-20 blur-2xl rounded-[2rem]" />
            <img
              src={founder}
              alt="Angelina Brown, Founder"
              loading="lazy"
              width={1200}
              height={1504}
              className="relative aspect-[4/5] w-full object-cover rounded-[2rem] shadow-soft"
            />
          </div>
        </Reveal>
        <Reveal delay={0.15}>
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
            <GhostButton href="#founder">Read Our Story</GhostButton>
            <div className="text-sm text-foreground/60">
              <p className="font-medium text-foreground">Angelina D. Brown</p>
              <p>Founder · 12-year Survivor</p>
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
  return (
    <section id="subscribe" className="py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <Reveal>
          <Eyebrow>Stay Connected</Eyebrow>
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Join our{" "}
            <span className="italic text-gradient-honey">community</span>.
          </h2>
          <p className="mt-6 text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Subscribe for inspiring stories, volunteer opportunities, upcoming events, and
            ways to bring comfort and hope to individuals and families facing chemotherapy.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="mt-10 grid sm:grid-cols-[1fr_1fr_1.4fr_auto] gap-3 max-w-3xl mx-auto"
          >
            <input required placeholder="First name" className="rounded-full px-5 py-3.5 bg-card border border-border/60 focus:border-primary focus:outline-none transition text-sm" />
            <input required placeholder="Last name" className="rounded-full px-5 py-3.5 bg-card border border-border/60 focus:border-primary focus:outline-none transition text-sm" />
            <input required type="email" placeholder="Email address" className="rounded-full px-5 py-3.5 bg-card border border-border/60 focus:border-primary focus:outline-none transition text-sm" />
            <button className="rounded-full px-6 py-3.5 text-sm font-medium bg-gradient-honey text-primary-foreground shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all inline-flex items-center gap-2 justify-center">
              <Send size={15} /> {sent ? "Subscribed" : "Subscribe"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */

function FinalCTA() {
  return (
    <section className="relative py-32 lg:py-44 overflow-hidden">
      <img src={ctaImg} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
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
              Whether you are requesting support, making a donation, volunteering your
              time, or becoming a community partner — you help ensure that no one faces
              chemotherapy alone.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <PrimaryButton href="#request">Request a Comfort Box</PrimaryButton>
              <a href="#donate" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white border border-white/40 hover:bg-white/10 transition">
                Donate Today <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer id="contact" className="bg-[oklch(0.18_0.02_60)] text-white/80 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 lg:gap-16">
          <div>
            <img src={logo} alt="Comfort With Chemotherapy" className="h-12 w-auto brightness-125" />
            <p className="mt-6 text-sm leading-relaxed text-white/60 max-w-sm">
              Comfort With Chemotherapy Inc NPF is a 501(c)(3) nonprofit delivering
              personalized comfort boxes to patients undergoing chemotherapy — at no cost.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a href="tel:3129453535" className="flex items-center gap-2 hover:text-primary transition"><Phone size={14} /> 312 945 3535</a>
              <a href="mailto:admin@comfortwithchemotherapy.com" className="flex items-center gap-2 hover:text-primary transition"><Mail size={14} /> admin@comfortwithchemotherapy.com</a>
            </div>
          </div>
          <FooterCol title="Explore" links={[
            ["About", "#welcome"], ["Stories of Hope", "#stories"], ["Resources", "#box"], ["Meet the Founder", "#founder"],
          ]} />
          <FooterCol title="Get Involved" links={[
            ["Request a Box", "#request"], ["Donate", "#donate"], ["Volunteer", "#volunteer"], ["Partner With Us", "#partner"],
          ]} />
          <FooterCol title="Connect" links={[
            ["Newsletter", "#subscribe"], ["Contact", "#contact"], ["Privacy Policy", "#"], ["Terms of Use", "#"],
          ]} />
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Comfort With Chemotherapy Inc NPF. 501(c)(3) Nonprofit. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {[Facebook, Instagram, Linkedin, Twitter].map((I, i) => (
              <a key={i} href="#" className="h-9 w-9 grid place-items-center rounded-full border border-white/15 hover:bg-primary hover:text-primary-foreground hover:border-primary transition">
                <I size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">{title}</p>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="text-white/70 hover:text-white transition">{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
