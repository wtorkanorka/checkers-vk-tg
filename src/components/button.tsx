import type { ReactNode } from "react";

interface IButton {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export const Button = ({
  onClick,
  className,
  disabled = false,
  children,
}: IButton) => {
  return (
    <button
      className={className}
      onClick={() => onClick && onClick()}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
