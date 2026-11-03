import React, { useEffect, useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MainLayout from "../components/MainLayout";
import Header from "../components/Header";
import Button from "../components/Button";
import GradientSurface from "../components/GradientSurface";
import { COLORS } from "../styles/colors";
import { styles } from "../styles/globalStyles";
import { getSimulations } from "../services/simulationService";

export default function SimuladoDetalhesScreen({
  onNavigate,
  onBack,
  simulationId,
}) {
  const [simulation, setSimulation] = useState({
    id: simulationId,
    title: "Simulado ENEM",
    subject: "Matemática",
    question_count: 30,
    duration_minutes: 45,
  });

  useEffect(() => {
    let active = true;
    getSimulations().then(({ data, error }) => {
      const selected = data?.find((item) => item.id === simulationId);
      if (active && !error && selected) setSimulation(selected);
    });
    return () => {
      active = false;
    };
  }, [simulationId]);

  return (
    <MainLayout
      onNavigate={onNavigate}
      header={
        <Header title="Simulado" subtitle={simulation.title} onBack={onBack} />
      }
    >
      <ScrollView contentContainerStyle={styles.mainScroll}>
        <GradientSurface variant="dark" style={styles.mockHero}>
          <Ionicons
            name="document-text-outline"
            size={44}
            color={COLORS.white}
          />
          <Text style={styles.mockHeroTitle}>{simulation.title}</Text>
          <Text style={styles.mockHeroText}>
            {simulation.question_count} questões • {simulation.duration_minutes} min
          </Text>
        </GradientSurface>
        <Text style={styles.sectionTitle}>Antes de começar</Text>
        {[
          "Questões selecionadas pelo seu desempenho",
          "Cronômetro ativado durante a prova",
          "Resultado e análise ao finalizar",
        ].map((item) => (
          <View key={item} style={styles.bulletRow}>
            <Ionicons name="checkmark-circle" size={20} color={COLORS.green} />
            <Text style={styles.paragraph}>{item}</Text>
          </View>
        ))}
        <Button
          title="Começar simulado"
          onPress={() => onNavigate("exercise", { simulationId })}
        />
      </ScrollView>
    </MainLayout>
  );
}
