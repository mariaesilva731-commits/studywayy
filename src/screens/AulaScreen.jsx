import React from "react";
import { ScrollView, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MainLayout from "../components/MainLayout";
import Header from "../components/Header";
import Button from "../components/Button";
import GradientSurface from "../components/GradientSurface";
import { COLORS } from "../styles/colors";
import { styles } from "../styles/globalStyles";
export default function AulaScreen({ onNavigate, onBack }) {
  return (
    <MainLayout
      onNavigate={onNavigate}
      header={
        <Header
          title="Aula"
          subtitle="Matemática • Função do 1º grau"
          onBack={onBack}
        />
      }
    >
      <ScrollView contentContainerStyle={styles.mainScroll}>
        <GradientSurface variant="dark" style={styles.videoBox}>
          <Ionicons name="play-circle" size={68} color={COLORS.white} />
          <Text style={styles.videoText}>Aula em vídeo</Text>
        </GradientSurface>
        <Text style={styles.sectionTitle}>Função do 1º grau</Text>
        <Text style={styles.paragraph}>
          Nesta aula você vai revisar os principais conceitos, aprender a
          identificar uma função e resolver exercícios.
        </Text>
        <View style={styles.infoRow}>
          {[
            ["time-outline", "18 min"],
            ["document-text-outline", "Resumo"],
            ["checkmark-outline", "Exercícios"],
          ].map(([icon, text]) => (
            <View key={text} style={styles.infoPill}>
              <Ionicons name={icon} size={16} color={COLORS.blue2} />
              <Text style={styles.infoPillText}>{text}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.sectionTitle}>Resumo</Text>
        <View style={styles.noteCard}>
          <Text style={styles.noteTitle}>Pontos importantes</Text>
          <Text style={styles.paragraph}>
            Uma função do primeiro grau pode ser representada por f(x) = ax + b.
            Observe o coeficiente angular e o ponto em que o gráfico cruza o
            eixo.
          </Text>
        </View>
        <Button
          title="Fazer exercícios"
          onPress={() => onNavigate("exercise")}
        />
      </ScrollView>
    </MainLayout>
  );
}
