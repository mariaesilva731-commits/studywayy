import React, { useEffect, useState } from "react";
import { ScrollView, Text, Pressable, View } from "react-native";
import MainLayout from "../components/MainLayout";
import Header from "../components/Header";
import Button from "../components/Button";
import { COLORS } from "../styles/colors";
import { styles } from "../styles/globalStyles";
import { getSimulationQuestions } from "../services/simulationService";

const defaultQuestion = {
  prompt: "Se f(x) = 2x + 3, qual é o valor de f(4)?",
  options: ["7", "9", "11", "12"],
};

export default function ExerciciosScreen({
  onNavigate,
  onBack,
  onStudyActivity,
  simulationId,
}) {
  const [selected, setSelected] = useState(null);
  const [question, setQuestion] = useState(defaultQuestion);

  useEffect(() => {
    let active = true;
    getSimulationQuestions(simulationId).then(({ data, error }) => {
      if (active && !error && data?.length) {
        setQuestion({ prompt: data[0].prompt, options: data[0].options });
      }
    });
    return () => {
      active = false;
    };
  }, [simulationId]);
  return (
    <MainLayout
      onNavigate={onNavigate}
      header={
        <Header
          title="Exercícios"
          subtitle="Função do 1º grau"
          onBack={onBack}
        />
      }
    >
      <ScrollView contentContainerStyle={styles.mainScroll}>
        <Text style={styles.questionProgress}>Questão 01 de 05</Text>
        <Text style={styles.bigQuestion}>{question.prompt}</Text>
        {question.options.map((option) => (
          <Pressable
            key={option}
            onPress={() => setSelected(option)}
            style={[styles.option, selected === option && styles.optionActive]}
          >
            <View
              style={[styles.radio, selected === option && styles.radioActive]}
            />
            <Text
              style={[
                styles.optionText,
                selected === option && styles.optionTextActive,
              ]}
            >
              {option}
            </Text>
          </Pressable>
        ))}
        <Button
          title="Responder"
          onPress={() => {
            if (selected === null) return;
            onStudyActivity("exercise");
            onBack();
          }}
        />
      </ScrollView>
    </MainLayout>
  );
}
