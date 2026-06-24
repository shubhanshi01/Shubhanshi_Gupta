import React from "react";
import {
  BriefcaseBusiness,
  Camera,
  Code2,
  Heart,
  MessageCircle,
} from "lucide-react";
import { SHUBHANSHI } from "../data/portfolio";

export const Footer = () => {
  return (
    <footer
      className="border-t-4 border-[#2d1a1a] bg-[#fff2d0] mt-10"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-body text-sm text-[#5a3a3a] flex items-center gap-1.5 flex-wrap justify-center">
          Crafted with <Heart className="w-4 h-4 text-[#e36a6a] fill-[#e36a6a]" /> by
          <span className="font-display font-bold text-[#2d1a1a]">
            {SHUBHANSHI.name}
          </span>
          · {new Date().getFullYear()}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`https://github.com/${SHUBHANSHI.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#fffbf1] border-[3px] border-[#2d1a1a] grid place-items-center text-[#e36a6a] hover:bg-[#e36a6a] hover:text-white transition-colors"
            data-testid="footer-github"
            aria-label="GitHub"
          >
            <Code2 className="w-4 h-4" />
          </a>
          <a
            href={`https://www.linkedin.com/in/${SHUBHANSHI.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#fffbf1] border-[3px] border-[#2d1a1a] grid place-items-center text-[#e36a6a] hover:bg-[#e36a6a] hover:text-white transition-colors"
            data-testid="footer-linkedin"
            aria-label="LinkedIn"
          >
            <BriefcaseBusiness className="w-4 h-4" />
          </a>
          <a
            href={`https://www.instagram.com/${SHUBHANSHI.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#fffbf1] border-[3px] border-[#2d1a1a] grid place-items-center text-[#e36a6a] hover:bg-[#e36a6a] hover:text-white transition-colors"
            data-testid="footer-instagram"
            aria-label="Instagram"
          >
            <Camera className="w-4 h-4" />
          </a>
          <a
            href={`https://wa.me/${SHUBHANSHI.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#fffbf1] border-[3px] border-[#2d1a1a] grid place-items-center text-[#e36a6a] hover:bg-[#e36a6a] hover:text-white transition-colors"
            data-testid="footer-whatsapp"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
