import React from "react";

interface FlameProps {
  className?: string;
  size?: number;
}

export const BrutalFlame: React.FC<FlameProps> = ({
  className = "w-12 h-12",
  size = 48,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer Flame - Fire Orange */}
      <path
        d="M32 2L42 22L58 26L46 40L52 62L32 50L12 62L18 40L6 26L22 22L32 2Z"
        fill="#FF5A1F"
      />
      {/* Inner Core - Flame Amber */}
      <path
        d="M32 16L38 28L48 30L40 39L44 52L32 44L20 52L24 39L16 30L26 28L32 16Z"
        fill="#FF9B42"
      />
      {/* Center Spark - Pure White */}
      <polygon points="32,26 35,33 42,35 36,40 38,47 32,43 26,47 28,40 22,35 29,33" fill="#FFFFFF" />
    </svg>
  );
};

export const GeometricFireSun: React.FC<{ className?: string }> = ({
  className = "w-96 h-96",
}) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Angular flame rays */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full animate-slow-spin select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="70" fill="#FF5A1F" fillOpacity="0.12" />
        <circle cx="100" cy="100" r="50" stroke="#FF5A1F" strokeWidth="2" strokeDasharray="6 6" />
        {/* Radiating angular sparks */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
          <line
            key={deg}
            x1="100"
            y1="10"
            x2="100"
            y2="30"
            stroke="#FF5A1F"
            strokeWidth="3"
            transform={`rotate(${deg} 100 100)`}
          />
        ))}
      </svg>
      {/* Inner glowing core */}
      <div className="absolute w-44 h-44 rounded-full bg-gradient-to-tr from-[#FF5A1F] to-[#FF9B42] blur-xl opacity-60 pointer-events-none animate-flame-pulse" />
      <div className="absolute w-36 h-36 border-2 border-[#0A0A0A] bg-[#FF5A1F] flex items-center justify-center transform rotate-12 brutal-shadow">
        <div className="w-24 h-24 border-2 border-white bg-[#0A0A0A] flex items-center justify-center transform -rotate-12">
          <BrutalFlame className="w-12 h-12" />
        </div>
      </div>
    </div>
  );
};
