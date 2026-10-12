import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  className = "",
  children,
  ...props
}) => {
  const baseClasses = "brutal-btn font-bold uppercase tracking-wider inline-flex items-center justify-center cursor-pointer transition-all";

  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs",
    md: "px-5 py-2.5 text-xs sm:text-sm",
    lg: "px-8 py-4 text-sm sm:text-base font-black tracking-widest",
  }[size];

  const variantClasses = {
    primary: "bg-[#FF5A1F] hover:bg-[#0A0A0A] text-[#FFFFFF] border-3 border-[#0A0A0A] brutal-shadow-lg hover:text-[#FFFFFF]",
    secondary: "bg-[#FFFFFF] hover:bg-[#F5F3EF] text-[#0A0A0A] border-2 border-[#0A0A0A] brutal-shadow hover:text-[#FF5A1F]",
    outline: "bg-transparent hover:bg-[#0A0A0A] text-[#0A0A0A] hover:text-[#FFFFFF] border-2 border-[#0A0A0A]",
    dark: "bg-[#0A0A0A] hover:bg-[#FF5A1F] text-[#FFFFFF] hover:text-[#0A0A0A] border-2 border-[#0A0A0A] brutal-shadow",
  }[variant];

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http") || target === "_blank";
    return (
      <a
        href={href}
        target={target || (isExternal ? "_blank" : undefined)}
        rel={rel || (isExternal ? "noopener noreferrer" : undefined)}
        className={combinedClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
