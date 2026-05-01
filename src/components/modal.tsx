import type { ReactNode } from "react";
import { createPortal } from "react-dom";

export const Modal = ({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) => {
  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-[100]"
      onClick={onClose}
    >
      <div
        className="relative bg-[var(--paleblue)] p-3 rounded-[20px] shadow-xl"
        onClick={(e) => e.stopPropagation()} // Предотвращает закрытие при клике на контент
      >
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")!,
  );
};
