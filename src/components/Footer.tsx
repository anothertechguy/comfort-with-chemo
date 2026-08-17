import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Facebook, Instagram, Linkedin, Twitter, Send } from "lucide-react";
import logo from "../assets/logo.png";

export function Footer() {
  const [footerSent, setFooterSent] = useState(false);
  return (
    <footer id="contact" className="bg-[hsl(36,16%,14%)] text-white/80 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.6fr] gap-10 lg:gap-12">
          <div>
            <img src={logo} alt="Comfort With Chemotherapy" className="h-12 w-auto brightness-125" />
            <p className="mt-6 text-sm leading-relaxed text-white/60 max-w-sm">
              Comfort With Chemotherapy Inc NPF is a 501(c)(3) nonprofit delivering
              personalized comfort boxes to patients undergoing chemotherapy — at no cost.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a href="tel:4707981109" className="flex items-center gap-2 hover:text-primary transition"><Phone size={14} /> 470.798.1109</a>
              <a href="mailto:admin@comfortwithchemotherapy.com" className="flex items-center gap-2 hover:text-primary transition"><Mail size={14} /> admin@comfortwithchemotherapy.com</a>
            </div>
          </div>
          <FooterCol title="Explore" links={[
            ["About", "/about"], ["Stories of Hope", "/#stories"], ["Comfort Box", "/comfort-box"], ["Meet the Founder", "/founder"],
          ]} />
          <FooterCol title="Get Involved" links={[
            ["Request a Box", "/#request"], ["Donate", "/#donate"], ["Volunteer", "/#volunteer"], ["Partner With Us", "/#partner"],
          ]} />
          <FooterCol title="Connect" links={[
            ["Newsletter", "/#subscribe"], ["Contact", "#contact"], ["Privacy Policy", "#"], ["Terms of Use", "#"],
          ]} />
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Stay Connected</p>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Inspiring stories, volunteer opportunities, and ways to help — straight to your inbox.
            </p>
            {footerSent ? (
              <p className="mt-5 text-sm text-primary font-medium">Thanks for subscribing! 🌟</p>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setFooterSent(true); }} className="mt-5 space-y-2">
                <input required placeholder="First name" className="w-full rounded-full px-4 py-2.5 bg-white/[0.08] border border-white/15 focus:border-primary focus:outline-none transition text-sm placeholder:text-white/40" />
                <input required placeholder="Last name" className="w-full rounded-full px-4 py-2.5 bg-white/[0.08] border border-white/15 focus:border-primary focus:outline-none transition text-sm placeholder:text-white/40" />
                <input required type="email" placeholder="Email address" className="w-full rounded-full px-4 py-2.5 bg-white/[0.08] border border-white/15 focus:border-primary focus:outline-none transition text-sm placeholder:text-white/40" />
                <button type="submit" className="w-full rounded-full px-4 py-2.5 text-sm font-medium bg-gradient-honey text-primary-foreground shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2">
                  <Send size={14} /> Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Comfort With Chemotherapy Inc NPF. 501(c)(3) Nonprofit. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {[Facebook, Instagram, Linkedin, Twitter].map((I, i) => (
              <a key={i} href="#" aria-label="Social media link" className="h-9 w-9 grid place-items-center rounded-full border border-white/15 hover:bg-primary hover:text-primary-foreground hover:border-primary transition">
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
            <Link to={href} className="text-white/70 hover:text-white transition">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
