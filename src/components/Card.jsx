import React from "react";
import { View } from "react-native";
import { styles } from "../styles/globalStyles";
export default function Card({ children, style }) {
  return <View style={[styles.noteCard, style]}>{children}</View>;
}
