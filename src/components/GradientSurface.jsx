import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../styles/colors";

export default function GradientSurface({
  children,
  style,
  variant = "primary",
}) {
  const colors =
    variant === "dark"
      ? [COLORS.darkBlue, COLORS.darkPurple]
      : variant === "auth"
        ? [COLORS.headerBlue, COLORS.headerPurple]
        : variant === "intro"
          ? ["#7B2FF7", "#353BFF"]
        : variant === "welcome"
          ? ["#080B48", "#5110B5"]
          : variant === "light"
            ? ["#EEF4FF", "#DCEEFF"]
            : [COLORS.purple, COLORS.blue];

  return (
    <LinearGradient
      colors={colors}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={style}
    >
      {children}
    </LinearGradient>
  );
}
