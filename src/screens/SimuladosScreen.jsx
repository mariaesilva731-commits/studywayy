import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MainLayout from "../components/MainLayout";
import Header from "../components/Header";
import { COLORS } from "../styles/colors";
import { styles } from "../styles/globalStyles";
import { getSimulations } from "../services/simulationService";
export default function SimuladosScreen({ onNavigate, onBack }) {
  const [simulations, setSimulations] = useState([
    { id: "enem-humanas", title: "ENEM • Ciências Humanas", question_count: 20, duration_minutes: 30 },
    { id: "enem-matematica", title: "ENEM • Matemática", question_count: 25, duration_minutes: 40 },
    { id: "usp-linguagens", title: "USP • Linguagens", question_count: 30, duration_minutes: 50 },
    { id: "unesp-geral", title: "UNESP • Geral", question_count: 35, duration_minutes: 60 },
  ]);

  useEffect(() => {
    let active = true;
    getSimulations().then(({ data, error }) => {
      if (active && !error && data?.length) setSimulations(data);
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <MainLayout
      onNavigate={onNavigate}
      header={
        <Header
          title="Simulados"
          subtitle="Pratique com provas personalizadas."
          onBack={onBack}
        />
      }
    >
      <ScrollView contentContainerStyle={styles.mainScroll}>
        {simulations.map((simulation) => (
          <Pressable
            key={simulation.id}
            onPress={() =>
              onNavigate("simuladoDetail", { simulationId: simulation.id })
            }
            style={styles.mockCard}
          >
            <View style={styles.mockIcon}>
              <Ionicons
                name="document-text-outline"
                size={25}
                color={COLORS.blue2}
              />
            </View>
            <View style={styles.flexFill}>
              <Text style={styles.cardTitle}>{simulation.title}</Text>
              <Text style={styles.cardMuted}>
                {simulation.question_count} questões • {simulation.duration_minutes} min
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={COLORS.muted} />
          </Pressable>
        ))}
      </ScrollView>
    </MainLayout>
  );
}
