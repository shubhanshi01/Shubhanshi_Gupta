import React from "react";
import { Map, Target, Gem, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { PROJECTS } from "../data/portfolio";
import { Reveal } from "./Reveal";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24"
      data-testid="projects-section"
    >
      {/* Section Header */}
      <Reveal>
        <div className="flex flex-col items-start gap-2 mb-10">
          <span className="font-body uppercase tracking-[0.2em] text-xs font-bold text-[#e36a6a]">
            Chapter 04
          </span>

          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2d1a1a]">
            Active Quests · Projects
          </h2>

          <p className="font-body text-[#5a3a3a] max-w-xl">
            Real builds, real rewards. Click around to dive in.
          </p>
        </div>
      </Reveal>

      {/* Projects Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {PROJECTS.map((p, idx) => (
          <Reveal key={p.id} delay={idx * 120}>
            <article
              className="relative bg-[#fff2d0] border-[4px] border-[#2d1a1a] rounded-3xl p-6 md:p-7 shadow-pop bounce-hover h-full flex flex-col"
              data-testid={`project-card-${p.id}`}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 bg-[#e36a6a] text-white font-display font-bold text-xs uppercase tracking-wider px-3 py-1.5 rounded-full border-[3px] border-[#2d1a1a]">
                  <Map className="w-3.5 h-3.5" /> {p.type}
                </span>

                <span className="font-body text-xs font-bold text-[#5a3a3a]">
                  {p.date}
                </span>
              </div>

              {/* Title */}
            <div className="flex items-start justify-between gap-3">
  <h3 className="font-display font-bold text-xl md:text-2xl text-[#2d1a1a] leading-snug">
    {p.title}
  </h3>

  <div className="flex gap-2">
    {p.github && (
      <a
        href={p.github}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-white border-[2px] border-[#2d1a1a] hover:scale-110 transition"
      >
        <FaGithub className="w-4 h-4 text-[#2d1a1a]" />
      </a>
    )}

    {p.live && (
      <a
        href={p.live}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-[#e36a6a] border-[2px] border-[#2d1a1a] hover:scale-110 transition"
      >
        <HiOutlineExternalLink className="w-4 h-4 text-white" />
      </a>
    )}
  </div>
</div>

              {/* Media Section */}
              <div className="mt-4 rounded-2xl overflow-hidden border-[3px] border-[#2d1a1a] shadow-md">
                {p.video ? (
                  <video
                    src={p.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-48 object-cover"
                  />
                )}
              </div>

              {/* Description */}
              <p className="font-body text-sm md:text-[15px] text-[#5a3a3a] mt-3 leading-relaxed">
                {p.summary}
              </p>

              {/* Objectives */}
              <div className="mt-5">
                <div className="font-body uppercase tracking-wider text-[11px] font-bold text-[#e36a6a] flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5" /> Objectives
                </div>

                <ul className="mt-2 space-y-1.5">
                  {p.objectives.map((o, i) => (
                    <li
                      key={i}
                      className="flex gap-2 font-body text-sm text-[#2d1a1a]"
                    >
                      <ChevronRight className="w-4 h-4 mt-0.5 text-[#e36a6a] flex-shrink-0" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack + Links */}
              <div className="mt-5 pt-5 border-t-[3px] border-dashed border-[#e36a6a]/40">
                <div className="font-body uppercase tracking-wider text-[11px] font-bold text-[#e36a6a] flex items-center gap-1.5 mb-2">
                  <Gem className="w-3.5 h-3.5" /> Rewards · Tech Stack
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.rewards.map((r) => (
                    <span
                      key={r}
                      className="bg-[#ffb2b2] border-[2.5px] border-[#2d1a1a] rounded-full px-3 py-1 font-body font-bold text-xs text-[#2d1a1a]"
                    >
                      {r}
                    </span>
                  ))}
                </div>


              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};