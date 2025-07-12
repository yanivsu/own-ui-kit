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
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "default",
  iconRight,
  iconLeft,
  disabled = false,
}) => {
  const className = cl(styles.button, {
    [styles.outlined]: variant === "outlined",
    [styles.text]: variant === "text",
    [styles.disabled]: disabled,
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
