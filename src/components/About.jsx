import React from "react";
import { GraduationCap, MapPin, Calendar, Star } from "lucide-react";
import { SHUBHANSHI, EDUCATION } from "../data/portfolio";
import { Reveal } from "./Reveal";

export const About = () => {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24"
      data-testid="about-section"
    >
      <Reveal>
        <div className="flex flex-col items-start gap-2 mb-10">
          <span className="font-body uppercase tracking-[0.2em] text-xs font-bold text-[#e36a6a]">
            Chapter 01
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2d1a1a]">
            Player Profile
          </h2>
        </div>
      </Reveal>

      <div className="grid lg:grid-cols-12 gap-6">
        <Reveal className="lg:col-span-7">
          <div className="bg-[#fff2d0] border-[4px] border-[#2d1a1a] rounded-3xl p-8 shadow-pop h-full">
            <h3 className="font-display font-bold text-2xl md:text-3xl text-[#2d1a1a] mb-4">
              About the adventurer
            </h3>
            <p className="font-body text-base md:text-lg text-[#5a3a3a] leading-relaxed">
              I’m <strong>{SHUBHANSHI.name}</strong> — a Software Engineering
              undergrad specialising in{" "}
              <span className="text-[#e36a6a] font-bold">
                backend systems, full-stack apps & AI automation
              </span>
              . I’ve shipped production-grade financial analytics tools at
              Mphasis, engineered enterprise REST APIs, and built scalable B2B
              outreach pipelines.
            </p>
            <p className="font-body text-base md:text-lg text-[#5a3a3a] leading-relaxed mt-4">
              When I’m not coding, I’m grinding{" "}
              <span className="text-[#e36a6a] font-bold">300+ DSA problems</span>{" "}
              or co-authoring research on{" "}
              <span className="text-[#e36a6a] font-bold">
                APT detection with Graph Neural Networks
              </span>
              .
            </p>

            <div className="mt-6 flex flex-wrap gap-2 font-body font-bold text-sm">
              {["Backend", "Full-stack", "AI/ML", "Research", "Cloud"].map(
                (t) => (
                  <span
                    key={t}
                    className="bg-[#ffb2b2] border-[3px] border-[#2d1a1a] rounded-full px-4 py-1.5 text-[#2d1a1a] shadow-pop-pink"
                    data-testid={`about-tag-${t.toLowerCase()}`}
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-5">
          <div className="bg-[#ffb2b2] border-[4px] border-[#2d1a1a] rounded-3xl p-8 shadow-pop h-full flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#fffbf1] border-[3px] border-[#2d1a1a] grid place-items-center text-[#e36a6a]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="font-display font-bold text-xl text-[#2d1a1a]">
                Education
              </div>
            </div>
            <div className="bg-[#fffbf1] border-[3px] border-[#2d1a1a] rounded-2xl p-5 shadow-pop-pink">
              <div className="font-display font-bold text-lg text-[#2d1a1a]">
                {EDUCATION.school}
              </div>
              <div className="font-body text-sm text-[#5a3a3a] mt-1">
                {EDUCATION.degree}
              </div>
              <div className="mt-4 flex flex-wrap gap-3 font-body text-sm text-[#2d1a1a]">
                <span className="inline-flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-[#e36a6a]" />
                  CGPA · {EDUCATION.cgpa}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#e36a6a]" />
                  {EDUCATION.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#e36a6a]" />
                  {EDUCATION.dates}
                </span>
              </div>
            </div>

            <div className="bg-[#fff2d0] border-[3px] border-[#2d1a1a] rounded-2xl p-5 shadow-pop-pink">
              <div className="font-body uppercase tracking-wider text-[11px] font-bold text-[#e36a6a]">
                Current Side Quest
              </div>
              <div className="font-display font-bold text-lg text-[#2d1a1a] mt-1">
                Graduating 2026 · Looking for full-time SDE & AI roles
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
