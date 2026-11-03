import React from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ScreenLayout from "../components/ScreenLayout";
import Button from "../components/Button";
import { styles } from "../styles/globalStyles";
const data = [
  {
    icon: "school-outline",
    title: "Estude com propósito",
    text: "Organize sua preparação em um único lugar e saiba exatamente o que estudar.",
  },
  {
    icon: "trending-up-outline",
    title: "Acompanhe seu progresso",
    text: "Veja sua evolução, identifique dificuldades e ajuste sua rotina de estudos.",
  },
  {
    icon: "trophy-outline",
    title: "Mantenha a sequência",
    text: "Crie constância, cumpra suas metas e avance todos os dias rumo à aprovação.",
  },
];
export default function OnboardingScreen({
  step,
  onBack,
  onNext,
  onSkip,
  onLogin,
}) {
  const item = data[step];
  return (
    <ScreenLayout>
      <View style={styles.onboarding}>
        <View style={styles.onboardingTop}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Voltar"
              onPress={onBack}
              style={styles.iconButton}
            >
              <Ionicons name="chevron-back" size={20} color="#2563EB" />
            </Pressable>
            <Text style={[styles.smallBrand, styles.accentText]}>StudyWay</Text>
          </View>
          <Text style={styles.stepText}>{step + 1}/3</Text>
        </View>
        <View style={styles.illustration}>
          <Ionicons name={item.icon} size={76} color="#2563EB" />
        </View>
        <Text style={styles.onboardingTitle}>{item.title}</Text>
        <Text style={styles.onboardingText}>{item.text}</Text>
        <View style={styles.dots}>
          {data.map((_, i) => (
            <View
              key={i}
              style={[styles.dot, i === step && styles.dotActive]}
            />
          ))}
        </View>
        <Button
          title={step === 2 ? "Criar minha conta" : "Continuar"}
          onPress={onNext}
          gradientVariant="intro"
        />
        {step < 2 && (
          <Pressable onPress={onSkip} style={styles.linkButton}>
            <Text style={[styles.link, styles.accentText]}>Pular</Text>
          </Pressable>
        )}
        <Pressable onPress={onLogin} style={styles.authEntry}>
          <Text style={styles.authEntryText}>Já tenho uma conta</Text>
          <Text style={[styles.link, styles.accentText]}>Entrar</Text>
        </Pressable>
      </View>
    </ScreenLayout>
  );
}
