import React, { useEffect, useState } from "react";

export const XPBar = ({ name, xp = 80, delay = 0 }) => {
  const [fill, setFill] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setFill(xp), delay);
    return () => clearTimeout(t);
  }, [xp, delay]);

  return (
    <div
      className="flex flex-col gap-2"
      data-testid={`xp-row-${name.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <div className="flex items-center justify-between font-display">
        <span className="text-[#2d1a1a] font-semibold text-sm md:text-base">
          {name}
        </span>
        <span className="text-[#e36a6a] font-bold text-sm tabular-nums">
          {xp} / 100 XP
        </span>
      </div>

      <div className="relative h-7 w-full border-[3px] border-[#2d1a1a] rounded-full bg-[#fff2d0] overflow-hidden shadow-pop-pink">
        <div
          className="h-full bg-[#e36a6a] rounded-full transition-[width] duration-[1400ms] ease-out relative"
          style={{ width: `${fill}%` }}
        >
          <div className="absolute inset-0 xp-shimmer rounded-full" />
        </div>
      </div>
    </div>
  );
};