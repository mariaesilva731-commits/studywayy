import React from "react";
import { View } from "react-native";
import ScreenLayout from "./ScreenLayout";
import BottomNav from "./BottomNav";
import { styles } from "../styles/globalStyles";
export default function MainLayout({ children, tab, onNavigate, header }) {
  return (
    <ScreenLayout>
      <View style={styles.mainContainer}>
        {header}
        {children}
        {onNavigate && <BottomNav tab={tab} onNavigate={onNavigate} />}
      </View>
    </ScreenLayout>
  );
}
