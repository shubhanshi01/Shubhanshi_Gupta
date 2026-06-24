import React from "react";
import heroPhoto from "../assets/hero_photo.jpeg";
import {
  Download,
  Gamepad2,
  Sparkles,
  Heart,
  Zap,
  Code2,
  Coffee,
  ChevronRight,
} from "lucide-react";
import { SHUBHANSHI, STATS } from "../data/portfolio";

const iconMap = { Heart, Zap, Code2, Coffee };

export const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative max-w-7xl mx-auto px-5 md:px-8 pt-12 md:pt-20 pb-16 md:pb-24"
      data-testid="hero-section"
    >
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        {/* Left: copy */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div
            className="inline-flex w-fit items-center gap-2 bg-[#fff2d0] border-[3px] border-[#2d1a1a] rounded-full px-4 py-2 font-body font-bold text-xs uppercase tracking-wider text-[#e36a6a] shadow-pop-pink"
            data-testid="hero-badge"
          >
            <Gamepad2 className="w-4 h-4" /> Player Select · Lv {SHUBHANSHI.level}
          </div>

          <h1
            className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-[#2d1a1a]"
            data-testid="hero-name"
          >
            Hi, I’m{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#e36a6a]">Shubhanshi</span>
              <span className="absolute left-0 right-0 bottom-1 h-3 bg-[#ffb2b2] -z-0 rounded-full" />
            </span>
            <span className="inline-block ml-2 wobble origin-bottom"></span>
          </h1>

          <p
            className="font-body text-lg md:text-xl text-[#5a3a3a] max-w-2xl"
            data-testid="hero-tagline"
          >
            {SHUBHANSHI.tagline}
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <a
              href={SHUBHANSHI.resumePath}
              download
              className="group inline-flex items-center gap-3 bg-[#e36a6a] text-white font-display font-bold text-base md:text-lg rounded-full border-[3px] border-[#2d1a1a] px-7 py-3.5 shadow-pop-pink-lg hover:-translate-y-1 hover:shadow-pop transition-all"
              data-testid="hero-resume-download"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download Save File
            </a>

            <button
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-3 bg-[#fffbf1] text-[#2d1a1a] font-display font-bold text-base md:text-lg rounded-full border-[3px] border-[#2d1a1a] px-7 py-3.5 shadow-pop-pink-lg hover:-translate-y-1 hover:shadow-pop transition-all"
              data-testid="hero-view-quests"
            >
              View Quests
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Mini stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 max-w-2xl">
            {STATS.map((s) => {
              const I = iconMap[s.icon] || Sparkles;
              return (
                <div
                  key={s.label}
                  className="bg-[#fff2d0] border-[3px] border-[#2d1a1a] rounded-2xl p-3 shadow-pop-pink"
                  data-testid={`hero-stat-${s.label.replace(/\W+/g, "-").toLowerCase()}`}
                >
                  <div className="flex items-center gap-2 text-[#e36a6a]">
                    <I className="w-4 h-4" />
                    <span className="font-body uppercase tracking-wider text-[10px] font-bold">
                      {s.label}
                    </span>
                  </div>
                  <div className="font-display font-bold text-2xl text-[#2d1a1a] mt-1">
                    {s.value}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: avatar card */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-[#ffb2b2] border-[3px] border-[#2d1a1a] shadow-pop float-slow grid place-items-center font-display font-bold text-2xl text-[#2d1a1a]">
              ★
            </div>
            <div className="absolute -bottom-6 -right-4 w-24 h-24 rounded-full bg-[#fff2d0] border-[3px] border-[#2d1a1a] shadow-pop float-fast grid place-items-center text-[#e36a6a]">
              <Sparkles className="w-8 h-8" />
            </div>

            <div className="bg-[#fff2d0] border-[4px] border-[#2d1a1a] rounded-3xl p-6 shadow-pop tilt-right">
              <div className="rounded-2xl overflow-hidden border-[3px] border-[#2d1a1a] aspect-[4/5] relative bg-[#ffb2b2]">
                <img
                  src={heroPhoto}
                  alt="Cozy gamified workspace"
                  className="w-full h-full object-cover"
                  data-testid="hero-avatar-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#e36a6a]/40 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 bg-[#fffbf1] border-[3px] border-[#2d1a1a] rounded-xl p-3 shadow-pop-pink">
                  <div className="font-body text-xs uppercase tracking-wider text-[#e36a6a] font-bold">
                    Class
                  </div>
                  <div className="font-display font-bold text-[#2d1a1a]">
                    {SHUBHANSHI.className}
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between font-body">
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#e36a6a] font-bold">
                    Now playing
                  </div>
                  <div className="font-display font-bold text-[#2d1a1a]">
                    Building cool things 🎮
                  </div>
                </div>
                <div className="bg-[#e36a6a] text-white font-display font-bold rounded-full px-3 py-1 text-sm border-[3px] border-[#2d1a1a]">
                  LV {SHUBHANSHI.level}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
