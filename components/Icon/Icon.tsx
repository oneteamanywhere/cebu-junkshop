import React from "react";
import { iconRegistry, type IconName } from "./registry";

export interface IconProps {
  name: IconName;
  size?: number | string;
  className?: string;
  fallback?: React.ReactNode;
  [key: string]: any;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 20,
  className = "",
  fallback = null,
  ...props
}) => {
  const IconComponent = iconRegistry[name];

  if (!IconComponent) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        `Icon "${name}" not found in registry. Available icons:`,
        Object.keys(iconRegistry)
      );
    }
    return fallback as React.ReactElement;
  }

  return <IconComponent size={size} className={className} {...props} />;
};

export interface PasswordToggleIconProps extends Omit<IconProps, "name"> {
  isVisible: boolean;
}

export const PasswordToggleIcon: React.FC<PasswordToggleIconProps> = ({
  isVisible,
  ...props
}) => <Icon name={isVisible ? "eye" : "eyeSlash"} {...props} />;

export interface IconWithLabelProps extends IconProps {
  label: string;
  position?: "left" | "right" | "top" | "bottom";
  gap?: number;
}

export const IconWithLabel: React.FC<IconWithLabelProps> = ({
  label,
  position = "right",
  gap = 8,
  ...iconProps
}) => {
  const iconElement = <Icon {...iconProps} />;
  const labelElement = <span>{label}</span>;

  const flexDirection = {
    left: "row-reverse",
    right: "row",
    top: "column-reverse",
    bottom: "column",
  }[position];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: `${gap}px`,
        flexDirection: flexDirection as React.CSSProperties["flexDirection"],
      }}
    >
      {iconElement}
      {labelElement}
    </div>
  );
};
