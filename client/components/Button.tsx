import React from "react";

interface IButton {
  children: React.ReactNode;
  type?: "submit" | "button";
  hanldeClick?: () => void;
  disabled?: boolean;
}

export const Button = ({
  children,
  type = "submit",
  hanldeClick,
  disabled,
}: IButton) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={hanldeClick}
      className="bg-primary disabled:bg-primary/30 capitalize  cursor-pointer rounded-2xl text-white text-xl lg:text-2xl py-2 px-6 lg:py-4 lg:px-12"
    >
      {children}
    </button>
  );
};
