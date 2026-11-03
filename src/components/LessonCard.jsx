import React from "react";
import { Pressable, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../styles/colors";
import { styles } from "../styles/globalStyles";
export default function LessonCard({ onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.lessonCard}>
      <View style={styles.lessonIcon}>
        <Ionicons name="calculator-outline" size={25} color={COLORS.blue2} />
      </View>
      <View style={styles.flexFill}>
        <Text style={styles.cardEyebrow}>MATEMÁTICA</Text>
        <Text style={styles.cardTitle}>Função do 1º grau</Text>
        <Text style={styles.cardMuted}>Aula 03 • 18 min</Text>
      </View>
      <Ionicons name="play-circle-outline" size={30} color={COLORS.purple2} />
    </Pressable>
  );
}
