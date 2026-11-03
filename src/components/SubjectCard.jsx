import React from "react";
import { Pressable, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../styles/colors";
import { styles } from "../styles/globalStyles";
export default function SubjectCard({ subject, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.subjectCard}>
      <View style={styles.subjectIcon}>
        <Ionicons name={subject.icon} size={24} color={COLORS.blue2} />
      </View>
      <View style={styles.flexFill}>
        <Text style={styles.cardTitle}>{subject.name}</Text>
        <Text style={styles.cardMuted}>{subject.progress}% concluído</Text>
      </View>
      <Ionicons name="chevron-forward" size={21} color={COLORS.muted} />
    </Pressable>
  );
}
