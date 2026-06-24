import React from "react";
import {
  Code2,
  Server,
  Layout,
  Database,
  BrainCircuit,
  Cloud,
} from "lucide-react";
import { SKILLS } from "../data/portfolio";
import { XPBar } from "./XPBar";
import { Reveal } from "./Reveal";

const ICONS = { Code2, Server, Layout, Database, BrainCircuit, Cloud };

export const Skills = () => {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24"
      data-testid="skills-section"
    >
      <Reveal>
        <div className="flex flex-col items-start gap-2 mb-10">
          <span className="font-body uppercase tracking-[0.2em] text-xs font-bold text-[#e36a6a]">
            Chapter 02
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2d1a1a]">
            Skill Tree
          </h2>
          <p className="font-body text-[#5a3a3a] max-w-xl">
            Stats earned through quests, side-projects and a healthy amount of
            caffeine.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6">
        {SKILLS.map((cat, idx) => {
          const Icon = ICONS[cat.icon] || Code2;
          return (
            <Reveal key={cat.category} delay={idx * 80}>
              <div
                className="bg-[#fff2d0] border-[4px] border-[#2d1a1a] rounded-3xl p-6 md:p-8 shadow-pop bounce-hover h-full"
                data-testid={`skill-card-${cat.category.replace(/\W+/g, "-").toLowerCase()}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#e36a6a] border-[3px] border-[#2d1a1a] grid place-items-center text-white shadow-pop-pink">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-[#2d1a1a]">
                    {cat.category}
                  </h3>
                </div>

                <div className="flex flex-col gap-4">
                  {cat.items.map((it, i) => (
                    <XPBar
                      key={it.name}
                      name={it.name}
                      xp={it.xp}
                      delay={150 + i * 120}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};
