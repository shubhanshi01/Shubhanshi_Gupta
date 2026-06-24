import React from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { EXPERIENCE } from "../data/portfolio";
import { Reveal } from "./Reveal";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24"
      data-testid="experience-section"
    >
      <Reveal>
        <div className="flex flex-col items-start gap-2 mb-10">
          <span className="font-body uppercase tracking-[0.2em] text-xs font-bold text-[#e36a6a]">
            Chapter 05
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2d1a1a]">
            Quest History · Experience
          </h2>
        </div>
      </Reveal>

      <div className="relative pl-6 md:pl-10">
        <div className="absolute left-2 md:left-4 top-2 bottom-2 w-1 bg-[#e36a6a] rounded-full" />

        <div className="flex flex-col gap-8">
          {EXPERIENCE.map((e, idx) => (
            <Reveal key={e.org} delay={idx * 100}>
              <div className="relative" data-testid={`experience-${idx}`}>
                <span className="absolute -left-[26px] md:-left-[42px] top-4 w-7 h-7 rounded-full bg-[#fff2d0] border-[3px] border-[#2d1a1a] shadow-pop-pink grid place-items-center text-[#e36a6a]">
                  <Briefcase className="w-3.5 h-3.5" />
                </span>

                <div className="bg-[#fffbf1] border-[4px] border-[#2d1a1a] rounded-3xl p-6 md:p-8 shadow-pop bounce-hover">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="font-display font-bold text-xl md:text-2xl text-[#2d1a1a]">
                        {e.role}
                      </h3>
                      <div className="font-display font-semibold text-base md:text-lg text-[#e36a6a] mt-0.5">
                        {e.org}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 font-body text-xs md:text-sm text-[#5a3a3a]">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-[#e36a6a]" />
                        {e.dates}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-[#e36a6a]" />
                        {e.location}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {e.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex gap-3 font-body text-sm md:text-[15px] text-[#2d1a1a]"
                      >
                        <span className="mt-2 w-2 h-2 rounded-full bg-[#e36a6a] flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};