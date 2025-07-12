import React from "react";
import cl from "classnames";
import styles from "./index.module.scss";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "default" | "outlined" | "text";
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "default",
  iconRight,
  iconLeft,
  disabled = false,
  size = "medium",
}) => {
  const className = cl(styles.button, {
    [styles.outlined]: variant === "outlined",
    [styles.text]: variant === "text",
    [styles.disabled]: disabled,
    [styles.small]: size === "small",
    [styles.medium]: size === "medium",
    [styles.large]: size === "large",
  });

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      <span className={styles.content}>
        {iconLeft && <span className={styles.icon}>{iconLeft}</span>}
        {children}
        {iconRight && <span className={styles.icon}>{iconRight}</span>}
      </span>
    </button>
  );
};
