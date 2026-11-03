import React from "react";
import { Linking, Pressable, ScrollView, Text } from "react-native";
import MainLayout from "../components/MainLayout";
import Header from "../components/Header";
import { styles } from "../styles/globalStyles";

export default function AjudaScreen({ onBack }) {
  return (
    <MainLayout header={<Header title="Ajuda" onBack={onBack} />}>
      <ScrollView contentContainerStyle={styles.mainScroll}>
        <Text style={styles.sectionTitle}>Nos mande um email!</Text>
        <Pressable
          accessibilityRole="link"
          accessibilityLabel="Enviar email para studyway.oficial@gmail.com"
          onPress={() =>
            Linking.openURL("mailto:studyway.oficial@gmail.com").catch(() => {})
          }
        >
          <Text selectable style={styles.progressName}>
            studyway.oficial@gmail.com
          </Text>
        </Pressable>
      </ScrollView>
    </MainLayout>
  );
}