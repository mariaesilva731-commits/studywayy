import React from "react";
import { ScrollView, View, Text, TextInput } from "react-native";
import ScreenLayout from "../components/ScreenLayout";
import Button from "../components/Button";
import GradientSurface from "../components/GradientSurface";
import { COLORS } from "../styles/colors";
import { styles } from "../styles/globalStyles";
const questions = [
  "Qual área você sente mais dificuldade?",
  "Quanto tempo costuma estudar por dia?",
  "Você prefere vídeo, leitura ou exercícios?",
  "Qual matéria quer melhorar primeiro?",
  "Como avalia sua rotina atual?",
];
export default function TesteInicialScreen({ onFinish }) {
  return (
    <ScreenLayout>
      <GradientSurface variant="welcome" style={styles.splashGradientSurface} />
      <ScrollView contentContainerStyle={styles.testScreen}>
        <Text style={styles.testBrand}>StudyWay</Text>
        <Text style={styles.testTitle}>Teste Inicial</Text>
        <Text style={styles.testSubtitle}>
          Responda algumas questões para descobrirmos seus pontos fortes e suas
          dificuldades.
        </Text>
        {questions.map((question, index) => (
          <View key={question} style={styles.questionCard}>
            <Text style={styles.questionNumber}>0{index + 1}</Text>
            <Text style={styles.question}>{question}</Text>
            <TextInput
              placeholder="Digite sua resposta..."
              placeholderTextColor={COLORS.muted}
              style={styles.questionInput}
            />
          </View>
        ))}
        <Button title="Finalizar teste" onPress={onFinish} />
      </ScrollView>
    </ScreenLayout>
  );
}
