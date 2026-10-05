interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  onClick,
  href,
  variant = "primary",
  className = "",
  target,
  rel,
}: ButtonProps) {
  const base =
    "relative overflow-hidden inline-flex items-center justify-center gap-2 sm:gap-3 rounded-xl px-5 py-3 text-sm sm:px-7 sm:py-3.5 sm:text-base font-semibold transition-all duration-300 min-h-11";

  const styles = {
    primary:
      "bg-[var(--primary)] text-white shadow-lg shadow-[rgba(181,35,123,.25)] hover:bg-[var(--primary-dark)] hover:shadow-xl sm:hover:scale-105",

    secondary:
      "border-2 border-white bg-transparent text-white backdrop-blur-sm hover:bg-white hover:text-black sm:hover:scale-105",
  };

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        className={`${base} ${styles[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}