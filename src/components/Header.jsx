import React from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../styles/colors";
import { styles } from "../styles/globalStyles";

export default function Header({ title, subtitle, onBack, titleStyle, textStyle }) {
  return (
    <LinearGradient
      colors={[COLORS.headerBlue, COLORS.headerPurple]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={[styles.header, styles.headerDark]}
    >
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Voltar"
        onPress={onBack}
        style={styles.iconButton}
      >
        <Ionicons name="chevron-back" size={23} color={COLORS.white} />
      </Pressable>
      <View style={styles.flexFill}>
        <Text style={[styles.headerTitle, styles.whiteText, textStyle, titleStyle]}>{title}</Text>
        {subtitle && (
          <Text style={[styles.headerSubtitle, styles.whiteMuted, textStyle]}>
            {subtitle}
          </Text>
        )}
      </View>
    </LinearGradient>
  );
}
