import React from "react";
import { Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import GradientSurface from "./GradientSurface";
import { COLORS } from "../styles/colors";
import { styles } from "../styles/globalStyles";

export default function Button({
  title,
  onPress,
  secondary = false,
  icon,
  style,
  gradientVariant,
  disabled = false,
}) {
  const content = (
    <>
      {icon && (
        <Ionicons
          name={icon}
          size={18}
          color={secondary ? COLORS.blue : COLORS.white}
        />
      )}
      <Text
        style={[styles.buttonText, secondary && styles.buttonTextSecondary]}
      >
        {title}
      </Text>
    </>
  );

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      style={[
        styles.button,
        style,
        secondary && styles.buttonSecondary,
        disabled && { opacity: 0.55 },
      ]}
    >
      {!secondary && <GradientSurface variant={gradientVariant} style={styles.gradientFill} />}
      {content}
    </Pressable>
  );
}
