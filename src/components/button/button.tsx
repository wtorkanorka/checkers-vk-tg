import type { ReactNode } from "react";

interface IButton {
  children: ReactNode;
  onClick?: () => void;
  style?: string;
  disabled?: boolean;
}

export const Button = ({
  onClick,
  style,
  disabled = false,
  children,
}: IButton) => {
  return (
    <button
      className={style}
      onClick={() => onClick && onClick()}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
