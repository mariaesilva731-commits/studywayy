import React from "react";
import { Pressable, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../styles/colors";
import { styles } from "../styles/globalStyles";
export default function SimuladoCard({ title, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.mockCard}>
      <View style={styles.mockIcon}>
        <Ionicons name="document-text-outline" size={25} color={COLORS.blue2} />
      </View>
      <View style={styles.flexFill}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardMuted}>30 questões • 45 min</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color={COLORS.muted} />
    </Pressable>
  );
}
