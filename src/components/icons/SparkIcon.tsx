import React from "react";

interface SparkIconProps {
  className?: string;
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}

export const SparkIcon: React.FC<SparkIconProps> = ({
  className = "w-4 h-4",
  size = 16,
  color = "#FF5A1F",
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* 4-point brutalist angular spark */}
      <path
        d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z"
        fill={color}
      />
    </svg>
  );
};

export const StarburstSpark: React.FC<SparkIconProps> = ({
  className = "w-6 h-6",
  size = 24,
  color = "#FF5A1F",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* 8-point sharp technical starburst */}
      <path
        d="M16 0L18.5 11.5L28 6L20.5 14.5L32 16L20.5 17.5L28 26L18.5 20.5L16 32L13.5 20.5L4 26L11.5 17.5L0 16L11.5 14.5L4 6L13.5 11.5L16 0Z"
        fill={color}
      />
    </svg>
  );
};
