import React from "react";
import { ScrollView, View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MainLayout from "../components/MainLayout";
import Header from "../components/Header";
import GradientSurface from "../components/GradientSurface";
import { COLORS } from "../styles/colors";
import { styles } from "../styles/globalStyles";
export default function MateriaScreen({
  onNavigate,
  onBack,
  subjects,
  subjectName,
}) {
  const subject =
    subjects.find((item) => item.name === subjectName) || subjects[0];
  const topics = subject?.name === "Matemática" ? [
    "Funções",
    "Geometria",
    "Probabilidade",
    "Estatística",
    "Álgebra",
    "Matemática financeira",
  ] : [];
  return (
    <MainLayout
      onNavigate={onNavigate}
      header={
        <Header
          title={subject?.name || "Matéria"}
          subtitle="Conteúdos da sua preparação."
          onBack={onBack}
        />
      }
    >
      <ScrollView contentContainerStyle={styles.mainScroll}>
        <GradientSurface variant="dark" style={styles.subjectHero}>
          <View style={styles.subjectHeroIcon}>
            <Ionicons
              name={subject?.icon || "book-outline"}
              size={34}
              color={COLORS.white}
            />
          </View>
          <View style={styles.flexFill}>
            <Text style={styles.whiteCardTitle}>{subject?.name}</Text>
            <Text style={styles.whiteCardText}>
              {subject?.progress}% concluído
            </Text>
          </View>
        </GradientSurface>
        {topics.length === 0 && (
          <Text style={styles.emptyActivities}>
            Nenhum conteúdo cadastrado para esta matéria.
          </Text>
        )}
        {topics.map((topic, i) => (
          <Pressable
            key={topic}
            onPress={() => onNavigate("lesson")}
            style={styles.topicRow}
          >
            <View style={styles.topicNumber}>
              <Text style={styles.topicNumberText}>{i + 1}</Text>
            </View>
            <View style={styles.flexFill}>
              <Text style={styles.progressName}>{topic}</Text>
              <Text style={styles.cardMuted}>
                "A estudar"
              </Text>
            </View>
            <Ionicons
              name="play-circle-outline"
              size={23}
              color={COLORS.purple2}
            />
          </Pressable>
        ))}
      </ScrollView>
    </MainLayout>
  );
}
