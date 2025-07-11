import React from "react";
import styles from "./index.module.scss";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "default" | "outlined";
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "default",
  iconRight,
  iconLeft,
}) => {
  const className = variant === "outlined" ? styles.outlined : styles.button;

  return (
    <button className={className} onClick={onClick}>
      <span className={styles.content}>
        {iconLeft && <span className={styles.icon}>{iconLeft}</span>}
        {children}
        {iconRight && <span className={styles.icon}>{iconRight}</span>}
      </span>
    </button>
  );
};
