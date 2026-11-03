import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../styles/colors";
import { styles } from "../styles/globalStyles";

export default function Brand({ light = false }) {
  return (
    <View style={styles.brand}>
      <View style={[styles.brandMark, light && styles.brandMarkLight]}>
        <Ionicons
          name="book-outline"
          size={22}
          color={light ? "#4187FF" : COLORS.white}
        />
      </View>
      <Text style={[styles.brandText, light && styles.whiteText]}>
        StudyWay
      </Text>
    </View>
  );
}
