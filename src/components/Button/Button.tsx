import type React from "react";

interface Props {
  children: React.ReactNode;
  color:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

const Button = ({
  children,
  color = "primary",
  size = "md",
  onClick,
}: Props) => {
  return (
    <button
      type="button"
      className={"btn btn-" + color + " btn-" + size}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
