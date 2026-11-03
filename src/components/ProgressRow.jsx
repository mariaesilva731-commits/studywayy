import React from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../styles/colors";
import { styles } from "../styles/globalStyles";
import ProgressBar from "./ProgressBar";
export default function ProgressRow({ subject, onPress, large = false }) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.progressRow, large && styles.homeProgressRow]}
    >
      <View style={styles.progressIcon}>
        <Ionicons name={subject.icon} size={19} color={COLORS.blue2} />
      </View>
      <View style={styles.flexFill}>
        <Text style={[styles.progressName, large && styles.homeProgressName]}>
          {subject.name}
        </Text>
        <ProgressBar progress={subject.progress} />
      </View>
      <Text style={styles.progressPercent}>{subject.progress}%</Text>
    </Pressable>
  );
}
