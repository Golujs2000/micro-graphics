import React from 'react';

export default function Logo({ variant = 'light', size = 'md', className = '' }) {
  const isDark = variant === 'dark';

  const iconSizes = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11 md:h-12',
    lg: 'h-12 sm:h-14 md:h-16',
  };

  const titleSizes = {
    sm: 'text-base sm:text-lg',
    md: 'text-lg sm:text-xl md:text-2xl',
    lg: 'text-2xl sm:text-3xl md:text-4xl',
  };

  const subtitleSizes = {
    sm: 'text-[7px] sm:text-[8px]',
    md: 'text-[8px] sm:text-[9.5px] md:text-[10px]',
    lg: 'text-[9.5px] sm:text-[11px] md:text-[12px]',
  };

  const lineWidths = {
    sm: 'w-2 sm:w-3',
    md: 'w-2.5 sm:w-3.5',
    lg: 'w-4 sm:w-5',
  };

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Official Micro Graphics Lotus / CMYK Icon */}
      <img
        src="/assets/micro graphics icon.png"
        alt="Micro Graphics Icon"
        className={`${iconSizes[size] || iconSizes.md} w-auto object-contain shrink-0 transition-transform duration-200 group-hover:scale-105`}
      />

      {/* Brand Name & Tagline Text Lockup */}
      <div className="flex flex-col justify-center text-left leading-none">
        {/* Main Brand Title */}
        <div className={`font-black tracking-tight ${titleSizes[size] || titleSizes.md} flex items-center`}>
          <span className={isDark ? 'text-white' : 'text-slate-950'}>
            MICRO
          </span>
          <span className="text-amber-500 ml-1 sm:ml-1.5 font-black">
            GRAPHICS
          </span>
        </div>

        {/* Subtitle Tagline */}
        <div className="flex items-center gap-1.5 mt-1 sm:mt-1.5">
          <span className={`h-[1px] ${lineWidths[size] || lineWidths.md} ${isDark ? 'bg-slate-600' : 'bg-slate-400'}`}></span>
          <span
            className={`font-extrabold uppercase tracking-[0.2em] whitespace-nowrap ${
              subtitleSizes[size] || subtitleSizes.md
            } ${isDark ? 'text-slate-300' : 'text-slate-700'}`}
          >
            THE PRINTING SOLUTION
          </span>
          <span className={`h-[1px] ${lineWidths[size] || lineWidths.md} ${isDark ? 'bg-slate-600' : 'bg-slate-400'}`}></span>
        </div>
      </div>
    </div>
  );
}
