import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../styles/colors";
import { styles } from "../styles/globalStyles";

export default function StatCard({ icon, value, label, large = false, cardStyle }) {
  return (
    <View style={[styles.statCard, large && styles.homeStatCard, cardStyle]}>
      <Ionicons name={icon} size={21} color={COLORS.blue2} />
      <Text style={[styles.statValue, large && styles.homeStatValue]}>
        {value}
      </Text>
      <Text style={[styles.statLabel, large && styles.homeStatLabel]}>
        {label}
      </Text>
    </View>
  );
}
