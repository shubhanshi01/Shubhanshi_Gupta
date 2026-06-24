import React, { useState } from "react";
import {
  Download,
  Menu,
  X,
} from "lucide-react";
import { SHUBHANSHI } from "../data/portfolio";

const NAV = [
  { id: "about", label: "Profile" },
  { id: "skills", label: "Skill Tree" },
  { id: "achievements", label: "Inventory" },
  { id: "projects", label: "Quests" },
  { id: "experience", label: "History" },
  { id: "contact", label: "Multiplayer" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className="sticky top-0 z-40 backdrop-blur-md bg-[#fffbf1]/85 border-b-4 border-[#2d1a1a]"
      data-testid="nav-bar"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between gap-4">
        <button
          onClick={() => scrollTo("hero")}
          className="font-display font-bold text-xl md:text-2xl text-[#2d1a1a] flex items-center gap-2 cursor-pointer"
          data-testid="brand-logo"
        >
          <span className="w-9 h-9 rounded-xl bg-[#e36a6a] border-[3px] border-[#2d1a1a] grid place-items-center text-white shadow-pop-pink">
            ✦
          </span>
          <span>Shubhanhshi Gupta</span>
        </button>

        <nav className="hidden md:flex items-center gap-1 font-body font-semibold">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              className="px-4 py-2 rounded-full text-sm text-[#2d1a1a] hover:bg-[#ffb2b2]/50 hover:text-[#e36a6a] transition-colors"
              data-testid={`nav-link-${n.id}`}
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={SHUBHANSHI.resumePath}
            download
            className="inline-flex items-center gap-2 bg-[#e36a6a] text-white font-display font-semibold rounded-full border-[3px] border-[#2d1a1a] px-5 py-2 shadow-pop-pink hover:-translate-y-0.5 hover:shadow-pop transition-all text-sm"
            data-testid="nav-resume-download"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg border-[3px] border-[#2d1a1a] bg-[#fff2d0] text-[#2d1a1a]"
          onClick={() => setOpen((o) => !o)}
          data-testid="nav-mobile-toggle"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t-4 border-[#2d1a1a] bg-[#fff2d0]">
          <div className="px-5 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-left px-4 py-3 rounded-xl font-body font-semibold text-[#2d1a1a] hover:bg-[#ffb2b2]"
                data-testid={`nav-mobile-link-${n.id}`}
              >
                {n.label}
              </button>
            ))}
            <a
              href={SHUBHANSHI.resumePath}
              download
              className="mt-2 inline-flex items-center justify-center gap-2 bg-[#e36a6a] text-white font-display font-semibold rounded-full border-[3px] border-[#2d1a1a] px-5 py-3 shadow-pop-pink"
              data-testid="nav-mobile-resume"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
