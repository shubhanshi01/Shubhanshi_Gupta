import React from "react";
import {
  Trophy,
  BookOpen,
  Briefcase,
  Award,
  Sparkles,
  Bot,
  Swords,
  Cpu,
} from "lucide-react";
import { BADGES } from "../data/portfolio";
import { Reveal } from "./Reveal";

const ICON_MAP = { Trophy, BookOpen, Briefcase, Award, Sparkles, Bot, Swords, Cpu };

export const Achievements = () => {
  return (
    <section
      id="achievements"
      className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24"
      data-testid="achievements-section"
    >
      <Reveal>
        <div className="flex flex-col items-start gap-2 mb-10">
          <span className="font-body uppercase tracking-[0.2em] text-xs font-bold text-[#e36a6a]">
            Chapter 03
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2d1a1a]">
            Inventory · Achievements
          </h2>
          <p className="font-body text-[#5a3a3a] max-w-xl">
            Badges unlocked through certifications, research and consistent
            grinding.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="bg-[#ffb2b2] border-[4px] border-[#2d1a1a] rounded-3xl p-6 md:p-10 shadow-pop">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 md:gap-7">
            {BADGES.map((b, i) => {
              const I = ICON_MAP[b.icon] || Trophy;
              return (
                <div
                  key={b.title}
                  className="group flex flex-col items-center text-center gap-3"
                  data-testid={`badge-${b.title.replace(/\W+/g, "-").toLowerCase()}`}
                >
                  <div
                    className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#fff2d0] border-[3px] border-[#2d1a1a] grid place-items-center shadow-pop transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-[8deg]"
                    style={{
                      transitionDelay: `${i * 20}ms`,
                    }}
                  >
                    <I className="w-9 h-9 md:w-10 md:h-10 text-[#e36a6a]" />
                    <span className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-[#e36a6a] border-[3px] border-[#2d1a1a] text-white font-display font-bold text-[10px] grid place-items-center">
                      ★
                    </span>
                  </div>
                  <div>
                    <div className="font-display font-bold text-[#2d1a1a] text-sm md:text-base leading-tight">
                      {b.title}
                    </div>
                    <div className="font-body text-[11px] md:text-xs text-[#5a3a3a] mt-1">
                      {b.sub}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
};
