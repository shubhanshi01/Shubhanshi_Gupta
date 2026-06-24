import React from "react";
import {
  Code2,
  Camera,
  BriefcaseBusiness,
  MessageCircle,
  Mail,
  Download,
} from "lucide-react";
import { SHUBHANSHI } from "../data/portfolio";
import { Reveal } from "./Reveal";

const channels = [
  {
    id: "linkedin",
    label: "LinkedIn",
    sub: "Let's connect professionally",
    handle: `linkedin.com/in/${SHUBHANSHI.linkedin}`,
    icon: BriefcaseBusiness,
    href: `https://www.linkedin.com/in/${SHUBHANSHI.linkedin}`,
  },
  {
    id: "github",
    label: "Github",
    sub: "Code, projects & contributions",
    handle: `github.com/${SHUBHANSHI.github}`,
    icon: Code2,
    href: `https://github.com/${SHUBHANSHI.github}`,
  },
  {
    id: "instagram",
    label: "Instagram",
    sub: "Life beyond the terminal",
    handle: `@${SHUBHANSHI.instagram}`,
    icon: Camera,
    href: `https://www.instagram.com/${SHUBHANSHI.instagram}`,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    sub: "Quick chat? Tap here",
    handle: SHUBHANSHI.phone,
    icon: MessageCircle,
    href: `https://wa.me/${SHUBHANSHI.whatsapp}`,
  },
];

export const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24"
      data-testid="contact-section"
    >
      <Reveal>
        <div className="flex flex-col items-start gap-2 mb-10">
          <span className="font-body uppercase tracking-[0.2em] text-xs font-bold text-[#e36a6a]">
            Chapter 06
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2d1a1a]">
            Multiplayer · Let’s team up
          </h2>
          <p className="font-body text-[#5a3a3a] max-w-xl">
            Pick a channel and send the invite. I usually respond within a few
            hours.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-5">
        {channels.map((c, i) => {
          const I = c.icon;
          return (
            <Reveal key={c.id} delay={i * 80}>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 bg-[#fff2d0] border-[4px] border-[#2d1a1a] rounded-3xl p-5 md:p-6 shadow-pop bounce-hover"
                data-testid={`contact-${c.id}`}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#e36a6a] border-[3px] border-[#2d1a1a] grid place-items-center text-white shadow-pop-pink flex-shrink-0 group-hover:rotate-[-6deg] transition-transform">
                    <I className="w-7 h-7" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-display font-bold text-xl text-[#2d1a1a]">
                      {c.label}
                    </div>
                    <div className="font-body text-sm text-[#5a3a3a] truncate">
                      {c.sub}
                    </div>
                    <div className="font-body text-xs font-bold text-[#e36a6a] mt-0.5 truncate">
                      {c.handle}
                    </div>
                  </div>
                </div>
                <span className="font-display font-bold text-2xl text-[#e36a6a]">
                  →
                </span>
              </a>
            </Reveal>
          );
        })}
      </div>

      {/* Email + Resume */}
      <Reveal delay={200}>
        <div className="mt-8 bg-[#ffb2b2] border-[4px] border-[#2d1a1a] rounded-3xl p-6 md:p-8 shadow-pop flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#fffbf1] border-[3px] border-[#2d1a1a] grid place-items-center text-[#e36a6a] shadow-pop-pink">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <div className="font-body uppercase tracking-wider text-xs font-bold text-[#2d1a1a]">
                Drop me an email
              </div>
              <a
                href={`mailto:${SHUBHANSHI.email}`}
                className="font-display font-bold text-lg md:text-xl text-[#2d1a1a] hover:text-[#e36a6a] transition-colors break-all"
                data-testid="contact-email"
              >
                {SHUBHANSHI.email}
              </a>
            </div>
          </div>

          <a
            href={SHUBHANSHI.resumePath}
            download
            className="inline-flex items-center justify-center gap-3 bg-[#e36a6a] text-white font-display font-bold rounded-full border-[3px] border-[#2d1a1a] px-6 py-3 shadow-pop-pink-lg hover:-translate-y-1 hover:shadow-pop transition-all whitespace-nowrap"
            data-testid="contact-resume-download"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </div>
      </Reveal>
    </section>
  );
};
