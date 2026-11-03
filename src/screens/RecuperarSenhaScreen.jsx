import React, { useState } from "react";
import { TextInput, Pressable, Text } from "react-native";
import AuthLayout from "../components/AuthLayout";
import Button from "../components/Button";
import { COLORS } from "../styles/colors";
import { styles } from "../styles/globalStyles";
export default function RecuperarSenhaScreen({ onSend, onBack }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function sendResetEmail() {
    setMessage("");
    setErrorMessage("");
    setIsSubmitting(true);
    const result = await onSend(email.trim());
    setIsSubmitting(false);
    if (result.error) {
      setErrorMessage(result.error.message || "Não foi possível enviar o e-mail.");
    } else {
      setMessage("Se o e-mail estiver cadastrado, você receberá as instruções para redefinir a senha.");
    }
  }

  return (
    <AuthLayout
      title="Encontre sua conta"
      subtitle="Sua jornada espera por você"
      footer={
        <Pressable onPress={onBack} style={styles.authFooter}>
          <Text style={styles.linkLight}>Voltar para o login</Text>
        </Pressable>
      }
    >
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu email..."
        placeholderTextColor={COLORS.muted}
        style={styles.input}
      />
      {!!errorMessage && <Text style={styles.logoutText}>{errorMessage}</Text>}
      {!!message && <Text style={styles.cardMuted}>{message}</Text>}
      <Button
        title={isSubmitting ? "Enviando..." : "Continuar"}
        onPress={sendResetEmail}
        disabled={isSubmitting || !email.trim()}
        style={styles.authSubmit}
      />
    </AuthLayout>
  );
}
