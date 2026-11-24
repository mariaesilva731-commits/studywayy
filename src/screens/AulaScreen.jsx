import React from "react";
import { Platform, ScrollView, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { WebView } from "react-native-webview";
import MainLayout from "../components/MainLayout";
import Header from "../components/Header";
import Button from "../components/Button";
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
        <View style={styles.lessonVideoFrame}>
          {Platform.OS === "web" ? (
            <iframe
              title="Videoaula de função afim"
              src="https://www.youtube-nocookie.com/embed/4OVttqaXJ1w"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: "100%", height: "100%", border: 0 }}
            />
          ) : (
            <WebView
              source={{
                uri: "https://www.youtube-nocookie.com/embed/4OVttqaXJ1w",
              }}
              allowsFullscreenVideo
              style={styles.lessonNativeVideo}
            />
          )}
        </View>
        <Text style={styles.videoText}>Videoaula • Khan Academy Brasil</Text>
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
