import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { COLORS } from "../styles/colors";
import { styles } from "../styles/globalStyles";
import GradientSurface from "./GradientSurface";
export default function ScreenLayout({ children }) {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.navy} />
      <GradientSurface variant="light" style={styles.app}>
        {children}
      </GradientSurface>
    </SafeAreaView>
  );
}
