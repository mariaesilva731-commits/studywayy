import React from "react";
import { Text, TextInput } from "react-native";
import AuthLayout from "../components/AuthLayout";
import Button from "../components/Button";
import { COLORS } from "../styles/colors";
import { styles } from "../styles/globalStyles";

export default function CadastroSocialScreen({ provider, onContinue }) {
  return (
    <AuthLayout
      title={`Continuar com ${provider}`}
      subtitle="Informe seu e-mail para criar sua conta e começar o teste inicial."
    >
      <TextInput
        placeholder="E-mail"
        placeholderTextColor={COLORS.muted}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Button title="Continuar" onPress={onContinue} />
    </AuthLayout>
  );
}
