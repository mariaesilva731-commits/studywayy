import React from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../styles/colors";
import { styles } from "../styles/globalStyles";

const items = [
  ["home", "Início", "home-outline"],
  ["materials", "Conteúdos", "book-outline"],
  ["calendar", "Agenda", "calendar-outline"],
  ["performance", "Desempenho", "stats-chart-outline"],
  ["profile", "Perfil", "person-outline"],
];
export default function BottomNav({ tab, onNavigate }) {
  return (
    <View style={styles.bottomNav}>
      {items.map(([key, label, icon]) => (
        <Pressable
          key={key}
          onPress={() => onNavigate(key, {}, { replace: true })}
          style={[styles.navItem, { width: `${100 / items.length}%` }]}
        >
          <View style={[styles.navIcon, tab === key && styles.navIconActive]}>
            <Ionicons
              name={icon}
              size={19}
              color={tab === key ? COLORS.white : COLORS.muted}
            />
          </View>
          <Text style={[styles.navLabel, tab === key && styles.navLabelActive]}>
            {label}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}
