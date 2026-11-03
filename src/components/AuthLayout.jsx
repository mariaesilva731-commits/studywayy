import React from "react";
import { ScrollView, Text, View } from "react-native";
import ScreenLayout from "./ScreenLayout";
import Brand from "./Brand";
import GradientSurface from "./GradientSurface";
import { styles } from "../styles/globalStyles";
export default function AuthLayout({ title, subtitle, children, footer }) {
  return (
    <ScreenLayout>
      <View style={styles.authPage}>
        <GradientSurface variant="auth" style={styles.authHeader}>
          <View pointerEvents="none" style={styles.authHeaderGlow} />
          <Brand light />
          <Text style={styles.authHeaderTitle}>{title}</Text>
          <Text style={styles.authHeaderSubtitle}>{subtitle}</Text>
        </GradientSurface>
        <ScrollView contentContainerStyle={styles.authContent}>
          <View style={styles.authCard}>
            {children}
            {footer}
          </View>
        </ScrollView>
      </View>
    </ScreenLayout>
  );
}
